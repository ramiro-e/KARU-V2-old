import React, { useState, useEffect, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";


const VideoSegment = ({video}) => {

    const ref = useRef();
    const inView = useIntersection(ref, "0px");
    const [anker, setAnker] = useState(false);

    useEffect(() => {
        if(inView){
            setAnker(true)
        }
    }, [inView])

    return(
        <section className={`transition-all duration-500 ease-out  ${ anker ? "opacity-1" :"opacity-0"}`} ref={ref}>
            <video src={video} className="w-full" autoPlay loop muted playsinline controls={false} type="video/mp4"></video>
        </section>
    )
}

export default VideoSegment;
