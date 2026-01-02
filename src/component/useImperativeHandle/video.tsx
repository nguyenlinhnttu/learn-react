import {useRef, useImperativeHandle } from 'react';

import videoFile from '../../assets/Download.mp4';
function Video(props :any){
    const videoRef = useRef<HTMLVideoElement>(null);
    
    // Khong the truyen Ref truc tiep cho component function
    // Can su dung useImperativeHandle de truyen Ref tu component cha xuong component con
   
    useImperativeHandle(props.forwardedRef, () => ({
        // Ben trong day la nhung ham ma component cha co the goi duoc
        play: () => {
          videoRef.current?.play();
        },
        pause: () => {
             videoRef.current?.pause();
        }
    }));    

    return( <video 
        ref={videoRef}
        src={videoFile} />);
}

export default Video;