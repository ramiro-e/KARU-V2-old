import React, { useState, useEffect, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
import { useRouter } from "next/router";



const CardDisplay = ({title , cards, CardComponent}) => {
    
    const ref = useRef();
    const inView = useIntersection(ref, '0px');
    const [anker, setAnker] = useState(false)
    
    useEffect(() => {
        if(inView){
            setAnker(true)
        }
    }, [inView])
    
    return(
        <section className="flex justify-center py-10">
            <div>
                
                <h2 className={`px-5 py-8 text-4xl text-gray-700 transition-all duration-300 ease-out ${ anker ? "opacity-1" :"opacity-0 translate-x-12 "}`} ref={ref}>{title}</h2>
                <div className="grid grid-cols-1 px-5 laptop:grid-cols-3 gap-6 max-w-6xl ">
                    {cards.map((props,index)=>{
                        return <CardComponent key={index} index={index} {...props} />
                    })}
                </div>
            </div>

        </section>

    )
}

export default CardDisplay;
