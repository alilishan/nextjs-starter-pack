import { useRef } from 'react';

export const useCountRenders = (name) => {
    const renders = useRef(0);
    if(process.env.NODE_ENV === 'development'){
        console.log('Render::', name, renders.current ++);
    }
}