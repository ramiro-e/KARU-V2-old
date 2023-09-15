import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import VideoSegment from "../components/segments/VideoSegment";
import CardDisplaySegment from "../components/segments/CardDisplaySegment";
import NewsCard from "../components/partials/NewsCard";
import ParallaxEffectSegment from "../components/segments/ParalaxEffectSegment";

const Inicio = () => {

    const news = [
        {
            date: new Date("2023-09-13"),
            title: "Nueva Colección de Primavera",
            body: "Estamos emocionados de anunciar nuestra última colección de cerámica de gres inspirada en la belleza de la primavera. Cada pieza está cuidadosamente diseñada para reflejar la frescura y vitalidad de esta temporada. Descubre nuestras nuevas creaciones y lleva un pedacito de la primavera a tu hogar.",
            image: "/gallery/109090478_294336014956996_703669842838601681_n.jpg"
        },
        {
            date: new Date("2023-08-25"),
            title: "Nuestros Productos en Utilísima",
            body: "¡Estamos encantados de compartir la emocionante noticia de que nuestros productos de cerámica de gres fueron presentados recientemente en el programa de cocina de Utilísima! Durante el episodio especial, destacamos cómo nuestras piezas únicas pueden realzar la experiencia culinaria. ¡Es un honor haber sido seleccionados para formar parte de este programa!",
            image: "/gallery/95897847_162142061948494_3004168386801242949_n.jpg"
        },
        {
            date: new Date("2023-07-12"),
            title: "Entrevista con Karu",
            body: "¡No te pierdas nuestra entrevista exclusiva con la artista Karu! En esta conversación, Karu comparte sus inspiraciones, técnicas de cerámica de gres y su amor por el arte. Descubre más sobre la mente creativa detrás de nuestras hermosas creaciones en cerámica.",
            image: "/gallery/69469137_2407028776085479_2893603751601848502_n.jpg"
        }
    ];

    return(
        <div className=" ">
                <VideoSegment video={"/web/main-video.mp4"}/>
                <ParallaxEffectSegment/>
                <CardDisplaySegment title={"Novedades"} cards={news} CardComponent={NewsCard}/>
        </div>
    )
}

export default Inicio;
