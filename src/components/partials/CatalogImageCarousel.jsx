import { useState } from 'react';

const Carousel = ({ images }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=''>
        <div className="relative min-w-[300px] w-full h-0 pb-[100%] mb-3">
            {images.map((image, index) => (
            <img
                key={index}
                src={`/catalog/${images[index]}`}
                className={`rounded-md absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            />
            ))}
        </div>
        <div className="flex">
            {images.map((image, index) => (
            <div
                key={index}
                className={`mr-3 h-12 w-12 transition-all duration-500 ease-out ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => handleThumbnailClick(index)}
            >
                <img className='rounded cursor-pointer w-full h-full object-cover object-center' src={`/catalog/${images[index]}`}/>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Carousel;