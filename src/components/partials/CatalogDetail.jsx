import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CatalogImageCarousel from "../partials/CatalogImageCarousel"

const CatalogDetail = ({product}) => {

    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false)

    function handleClose(){
        setIsVisible(false)
        setTimeout(()=>{
            router.push("/catalogo")
        }, 500)
    }

    useEffect(() => {
        setIsVisible(true)
    }, [])
    

    return(
        <div className={`absolute laptop:fixed laptop:top-1/2 laptop:left-1/2 ${isVisible ? 'laptop:translate-y-[-50%] opacity-1' : 'laptop:translate-y-[50%] opacity-0'}  laptop:translate-x-[-50%] w-full laptop:w-2/3 p-5 bg-white shadow-md rounded-lg  transition-all duration-200 laptop:duration-500 ease-out`}>
            <div className="mb-2 max-w-fit rounded-full px-2 cursor-pointer border border-slate-100 hover:bg-slate-100 transition-all duration-500 ease-out" onClick={handleClose}>
                <div className="flex align-center">
                    <img src="/web/chevron-left.svg"/>
                    <p className="px-2 pb-1">Volver</p>
                </div>
            </div>
            <div className="flex flex-col laptop:flex-row">
                <CatalogImageCarousel images={product.images}/>
                <div className="laptop:pl-4 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl mb-3">{product.name}</h1>
                        <h3 className="mb-4 text-2xl font-bold text-orange-900 opacity-50">${product.price}</h3>
                        <p className="">{product.description}</p>

                    </div>
                    <div className="w-100 flex justify-end">
                        <button className="flex align-center relative py-1 px-4 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-500 ease-out">
                            <svg className="w-4 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                            </svg>
                            <p className="font-medium text-white text-lg pb-0.5">Ver en tienda</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CatalogDetail;
