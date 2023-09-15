import { useState, useEffect } from 'react';

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        const currentElement = element.current;

        if (!currentElement) {
            console.error("IntersectionObserver: Element is null or undefined.");
            return;
        }

        observer.observe(currentElement);

        return () => {
            observer.unobserve(currentElement);
        };
    }, [element, rootMargin]);

    return isVisible;
};

export default useIntersection;