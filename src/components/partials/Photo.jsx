import React, { useState, useEffect, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
import Image from "next/image";

const Photo = ({photo, priority}) => {

    const ref = useRef();
    const inView = useIntersection(ref, '0px');
    const [anker, setAnker] = useState(false)
    
    useEffect(() => {
        if(inView){
            setAnker(true)
        }
    }, [inView])
    


    return(
        // <div>

        <div  ref={ref} className={`transition-all duration-700 ease-out ${ anker ? "opacity-1" :"opacity-0 translate-y-12 "}`} >
            <img 
                src={`/gallery/${photo}`} 
                className="h-auto w-full rounded shadow-lg"
                // onLoad={()=>{console.log("hey i loaded")}}
                // width={354}
                // priority={priority}
            ></img>
        </div>
    )
}

export default Photo;
