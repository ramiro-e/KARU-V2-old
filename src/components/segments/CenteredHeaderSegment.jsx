import React, { useEffect, useState, useRef } from "react";

const CenteredHeaderSegment = ({title, description}) => {

    const ref = useRef();
    const [anker, setAnker] = useState(false)
    
    useEffect(() => {
        setAnker(true)
    }, [])
    

    return(
        <div  ref={ref} className={`transition-all duration-700 ease-out ${ anker ? "opacity-1" :"opacity-0"}`} >
            <div className="max-w-2xl my-20 mx-auto">
                <div className="mx-6">
                    <h1 className="text-3xl mb-2">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CenteredHeaderSegment;
