import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";

// const socket = io.connect('http://localhost:5000')
// const socket = io.connect('https://cors-anywhare.herokuapp.com/http://mysterious-citadel-77081.herokuapp.com/')
const socket = io.connect('https://warm-wildwood-81069.herokuapp.com/')
export default function App() {

    const [me, setMe] = useState("")
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState("")
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState("")
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState("")
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

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
        <>
            <div>
                <div>
                    <div className="video p-3 m-5">
                        {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
                    </div>
                    <div>
                        {callAccepted && !callEnded ?
                            <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} /> :
                            null}
                    </div>
                </div>
                <div>
                    <input className="bg-slate-500 p-3 m-5 border-4" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
                        <button className="bg-red-500 p-3 m-5 border-4">Copy ID</button>
                    </CopyToClipboard>
                    <input className="bg-slate-500 p-3 m-5 border-4" type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}></input>
                    <div>
                        {callAccepted && !callEnded ? (
                            <button className="bg-red-500 p-3 m-5 border-4" onClick={leaveCall}>End Call</button>
                        ) : (
                            <button className="bg-red-500 p-3 m-5 border-4" onClick={() => callUser(idToCall)}>Call</button>
                        )}
                        {idToCall}
                    </div>
                </div>
                <div>
                    {receivingCall && !callAccepted ? (
                        <div>
                            <h1 >{name} is calling...</h1>
                            <button className="bg-red-500 p-3 m-5 border-4" onClick={answerCall}>Answer</button>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}
