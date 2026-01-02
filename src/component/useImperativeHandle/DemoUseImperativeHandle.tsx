import {useRef,useImperativeHandle } from 'react';
import Video from './video';
function DemoUseImperativeHandle() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const playVideo = () => {
        videoRef.current?.play();
    }

    const pauseVideo = () => {
        videoRef.current?.pause();
    }

    return (
        <div>
            <h1>
                DemoUseImperativeHandle
            </h1>
            <Video forwardedRef={videoRef} />
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </div>)
        ;
}

export default DemoUseImperativeHandle;