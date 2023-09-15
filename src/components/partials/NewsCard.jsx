import React, { useState, useEffect, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";

const NewsCard = ({ index ,date, title, body, image }) => {

    const ref = useRef();
    const inView = useIntersection(ref, "0px");
    const [anker, setAnker] = useState(false);

    useEffect(() => {
        if (inView) {
          setTimeout(() => {
            setAnker(true);
          }, index*300); // Add your desired delay in milliseconds here
        }
      }, [inView]);
    
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function formatDate(date) {
        const currentDate = new Date();
        const options = {
            day: "numeric",
            month: "long",
            year: date.getFullYear() !== currentDate.getFullYear() ? "numeric" : undefined,
        };
        return date.toLocaleDateString("es-ES", options);
    }

    const formattedDate = formatDate(date);

    return (
        <div className={`max-w-sm rounded overflow-hidden shadow-lg relative transition-all duration-300 ease-out ${ anker ? "opacity-1" :"opacity-0 translate-x-12 "}`} ref={ref}>
            <div className="aspect-square">
                <img className="h-full w-full object-cover object-center rounded-t" src={image} alt="Sunset in the mountains" />
            </div>
            {/* <img className="w-full" src={image}/> */}
            <div className="px-6 py-4 max-h-64 relative">
                <small className="text-slate-400">{formattedDate}</small>
                <div className="text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{body}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-50% to-white"></div>
        </div>
    );
};

export default NewsCard;
