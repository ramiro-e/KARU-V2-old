import React, { useState, useEffect, useRef } from "react";
import useIntersection from "../../hooks/useIntersection";

const ParallaxEffectSegment = () => {
    
    const ref = useRef();
    const inView = useIntersection(ref, "0px");
    const [anker, setAnker] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if(inView){
            setAnker(true)
        }
    }, [inView])

    return (
        <section>
            <div className="relative w-full overflow-hidden h-screen">


                <div className={`p-10 w-1/2 absolute top-1/2 transform -translate-y-1/2  transition-all duration-500 ease-out  ${ anker ? "opacity-1" :"opacity-0 translate-y-12 "}`} ref={ref}>
                    <h1 className="text-4xl mb-4">Acerca de mi obra</h1>
                    <p className="text-lg mb-8">Mi obra en cerámica de gres es un testimonio de mi amor por la creatividad y la artesanía. Cada pieza es una expresión única de mis emociones y experiencias, moldeada con cuidado y atención a los detalles. A través de texturas sutiles y formas elegantes, busco transmitir la belleza de la simplicidad y la calidez de lo hecho a mano. Cada obra es una invitación a explorar la conexión entre el arte y la vida cotidiana, y a descubrir la belleza en la funcionalidad. En mi obra, encontrarás la fusión de tradición y originalidad, creando piezas que perduran en el tiempo y en el corazón de quienes las aprecian.</p>
                </div>

                <img
                    src="/gallery/318454277_1185262865760318_3306138941337570654_n.webp"
                    className={`absolute top-1/4 left-2/3 w-64 rounded-lg shadow-lg transition-all ease-out duration-300`}
                    style={{ transform: `translateY(${(scrollY * 0.6) - 400}px)` }}
                />

                <img
                    src="/gallery/69893287_500255544147252_8168710531810192867_n.jpg"
                    className={`absolute top-1/4 left-[60%] w-64 rounded-lg shadow-lg transition-all ease-out duration-300`}
                    style={{ transform: `translateY(${-(scrollY * 0.4) + 100}px)` }}
                />

                <img
                    src="/gallery/102880751_560370598250567_218578651032809611_n.jpg"
                    className={`absolute top-1/4 left-2/3 w-64 rounded-lg shadow-lg transition-all ease-out duration-300`}
                    style={{ transform: `translateY(${(scrollY * 1) - 400}px)` }}
                />

                <img
                    src="/gallery/243167688_3046723538909140_2417177386185141855_n.jpg"
                    className={`absolute top-1/2 left-1/2 w-64 rounded-lg shadow-lg transition-all ease-out duration-300`}
                    style={{ transform: `translateY(${(scrollY * 0.5) - 400}px)` }}
                />

                <img
                    src="/gallery/243062601_192508379636154_7086856099946286223_n.jpg"
                    className={`absolute top-3/4 left-3/4 w-64 rounded-lg shadow-lg transition-all ease-out duration-300`}
                    style={{ transform: `translateY(${-(scrollY * 0.6)}px)` }}
                />

                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-transparent  to-white"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent  to-white"></div>

            </div>
        </section>

    );
};

export default ParallaxEffectSegment;