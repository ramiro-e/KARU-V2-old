import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const UniquesCard = ({product}) => {

    const router = useRouter()

    return(
            <div className="bg-white shadow-md rounded-md duration-500 cursor-pointer" onClick={()=>{router.push("/catalogo/?id="+product.id)}}>
                <div className="aspect-square">
                    <img className="h-full w-full object-cover object-center rounded-t-md " src={`/catalog/${product.images[0]}`}></img>
                </div>
                <div className="p-2">
                    <div className="mx-2 mb-1 text-zinc-600">
                        <h2 className="text-xl">{product.name}</h2>
                        <h3 className="text-right">${product.price}</h3>
                    </div>
                    <div>
                        <div className="w-full font-semibold text-center text-white  text py-2 px-auto rounded-md bg-orange-950">Ver Mas</div>
                    </div>
                </div>
            </div>
    )
}

export default UniquesCard;
