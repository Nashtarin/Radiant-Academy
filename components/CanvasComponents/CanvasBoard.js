/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

export default function board() {

    useEffect(() => {
        drawOnCanvus();
    }, []);

    const drawOnCanvus = () => {
        var canvas = document.querySelector('#board');
        var ctx = canvas.getContext('2d');

        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));

        var mouse = { x: 0, y: 0 };
        var last_mouse = { x: 0, y: 0 };

        canvas.addEventListener('mousemove', function (e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);

        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';

        canvas.addEventListener('mousedown', function (e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function () {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);

        var onPaint = function () {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    return (
        <div className="bg-slate-300 py-10 overflow-auto" style={{ minHeight: '60vh' }}>
            <div className='w-5/6 h-5/6 mx-auto' id='sketch'>
                <canvas className='bg-white container' id='board' style={{ height: '80vh' }}></canvas>
            </div>
        </div>
    )
}
