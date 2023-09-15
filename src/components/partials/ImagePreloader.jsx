import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const ImagePreloader = () => {
    
    const [images, setImages] = useState(false)

    useEffect(async() => {
        const photos = await fetch("http://localhost:3000/api/gallery/get")
        const photosJson = await photos.json()
        setImages(photosJson)
    },[])

    

  return (
    <Head>
    {images && images.map((url, index) => (
        <link key={index} rel="preload" href={`/gallery/${url}`} as="image" crossorigin="anonymous"/>
    ))}
    </Head>
  );
};

export default ImagePreloader;