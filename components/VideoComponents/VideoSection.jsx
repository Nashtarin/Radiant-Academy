import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";
import { BiPhoneCall, BiAt, BiDialpad, BiCopy, BiVideo } from "react-icons/bi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";

// const socket = io.connect('http://localhost:5000')
// const socket = io.connect('https://cors-anywhare.herokuapp.com/http://mysterious-citadel-77081.herokuapp.com/')
const socket = io.connect('https://warm-wildwood-81069.herokuapp.com/')
export default function App() {

    const [me, setMe] = useState("");
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream)
            myVideo.current.srcObject = stream
        })

        socket.on("me", (id) => {
            setMe(id)
        })

        socket.on("callUser", (data) => {
            setReceivingCall(true)
            setCaller(data.from)
            setName(data.name)
            setCallerSignal(data.signal)
        })
    }, [])

    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            })
        })
        peer.on("stream", (stream) => {

            userVideo.current.srcObject = stream

        })
        socket.on("callAccepted", (signal) => {
            setCallAccepted(true)
            peer.signal(signal)
        })

        connectionRef.current = peer
    }

    const answerCall = () => {
        setCallAccepted(true)
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: caller })
        })
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream
        })

        peer.signal(callerSignal)
        connectionRef.current = peer
    }

    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()
    }

    return (
        <div>
            <div className="video flex lg:justify-center p-5 pt-10">
                <div>
                    {stream && <video
                        playsInline
                        muted
                        ref={myVideo}
                        autoPlay
                        style={{ width: "600px" }}
                    />}
                </div>
                <div>
                    {callAccepted && !callEnded ?
                        <video
                            playsInline
                            ref={userVideo}
                            autoPlay
                            style={{ width: "600px" }}
                            className="lg:ml-5"
                        /> :
                        null}
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center pb-6">
                    <div className="bg-gray-200 w-80 flex items-center my-2 rounded-md">
                        <BiAt className="text-gray-800 ml-3 text-xl" />
                        <input type="text" name="callerName" placeholder="Name" className="bg-gray-200 outline-none text-md flex-1 p-3 rounded-md" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="bg-gray-200 w-80 flex items-center my-2 rounded-md">
                        <BiDialpad className="text-gray-800 ml-3 text-xl" />
                        <input type="text" name="callerId" placeholder="ID to call" className="bg-gray-200 outline-none text-md flex-1 p-3 rounded-md" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                    </div>
                </div>
                <div className="flex items-center pb-6 justify-center">
                    <CopyToClipboard text={me}>
                        <button className="bg-yellow-300 py-3 px-8 mx-3 font-medium rounded-full flex items-center">
                            <BiCopy className="mr-2 text-lg" /> Copy ID
                        </button>
                    </CopyToClipboard>
                    <div>
                        {callAccepted && !callEnded ? (
                            <button className="bg-red-600 text-slate-100 py-3 px-8 mx-3 font-medium rounded-full flex items-center" onClick={leaveCall}>
                                <HiOutlinePhoneMissedCall className="mr-2" /> End Call
                            </button>
                        ) : (
                            <button className="bg-green-500 py-3 px-8 mx-3 font-medium rounded-full flex items-center" onClick={() => callUser(idToCall)}>
                                <BiVideo className="mr-2 text-xl" /> Call
                            </button>
                        )}
                    </div>

                </div>
                <div className="text-center pb-10">
                    {receivingCall === true ? null : (<h2 className="dark:text-white">Calling to <span className="text-green-600 dark:text-green-600 font-medium">{idToCall}</span></h2>)}
                </div>
            </div>
            <div className="flex justify-center pb-14">
                {receivingCall && !callAccepted ? (
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-xl font-medium first-letter:uppercase dark:text-white">
                            {name} is calling...
                        </h1>
                        <button className="bg-green-400 w-12 flex justify-center mt-3 py-2.5 px-1 font-medium rounded-full" onClick={answerCall}>
                            <BiPhoneCall className="text-3xl" />
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
