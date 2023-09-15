import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CenteredHeaderSection from "../components/segments/CenteredHeaderSegment"
import CatalogCard from "../components/partials/CatalogCard";
import CatalogDetail from "../components/partials/CatalogDetail";

const Catalogo = () => {

    const router = useRouter()
    const title = "Mis Productos"
    const description = "Te presentamos nuestros productos para que puedas elegir entre las diferentes variedades de tonos y materiales que conforman nuestros utilitarios tanto para tu uso hogareño y como comercial."


    let catalogo = {
        
        1:{
            id: 1,
            name:"Cuenco",
            images:["cuenco1-1.jpeg","cuenco1-2.jpeg","cuenco1-3.jpeg"],
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, cupiditate hic quaerat labore quibusdam tempora, laudantium itaque autem eveniet quam magnam. Ut consequatur est et, deserunt ratione quis ex!",
            price: 5000
        },
        2:{
            id: 2,
            name:"Cuenco",
            images:["cuenco2-1.jpeg","cuenco2-2.jpeg","cuenco2-3.jpeg"],
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, cupiditate hic quaerat labore quibusdam tempora, laudantium itaque autem eveniet quam magnam. Ut consequatur est et, deserunt ratione quis ex!",
            price: 5000
        },
        3:{
            id: 3,
            name:"Cuenco",
            images:["cuenco3-1.jpeg","cuenco3-2.jpeg","cuenco3-3.jpeg"],
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, cupiditate hic quaerat labore quibusdam tempora, laudantium itaque autem eveniet quam magnam. Ut consequatur est et, deserunt ratione quis ex!",
            price: 5000
        },
        4:{
            id: 4,
            name:"Taza",
            images:["taza1-1.jpeg","taza1-2.jpeg","taza1-3.jpeg"],
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, cupiditate hic quaerat labore quibusdam tempora, laudantium itaque autem eveniet quam magnam. Ut consequatur est et, deserunt ratione quis ex!",
            price: 5000
        }
    }

    return(
        <>
            <CenteredHeaderSection title={title} description={description}/>
            {router.query.id && <CatalogDetail product={catalogo[router.query.id]}/>}
            <section  className="p-3 tablet:p-6 flex justify-center laptop:max-w-4xl mx-auto laptop:p-10">
                <div className="grid grid-cols-1 gap-3 tablet:gap-6 mob:grid-cols-2 laptop:grid-cols-3 laptop:gap-8 ">
                    {Object.values(catalogo).map((product,index)=>{
                        return <CatalogCard key={index} product={product} />
                    })}
                </div>
            </section>
            
        </>
    )
}

export default Catalogo;
