import React, { useEffect, useState } from "react";
import CenteredHeaderSection from "../components/segments/CenteredHeaderSegment"
import MasonrySegment from "../components/segments/MasonrySegment"
import { useRouter } from "next/router";
import Modal from "../components/partials/Modal";

const Galeria = ({photos}) => {

    const router = useRouter()
    const title = "Mi Obra"
    const description = "Mis piezas en cerámica de gres son ideales para aquellos que buscan dar un toque distintivo a sus espacios. Descubran el valor de tener una obra de arte hecha con amor y dedicación."

    return(
        <>
            {router.query.photo && <Modal><img src={`/gallery/${router.query.photo}`}></img></Modal>}
            <CenteredHeaderSection title={title} description={description}/>
            <MasonrySegment photos={photos}/>
        </>
    )
}

export async function getServerSideProps(){
    
    const photos = await fetch("http://localhost:3000/api/gallery/get")
    const photosJson = await photos.json()
    

    return {
        props:{
            photos:photosJson
        }
    }

}

export default Galeria;
