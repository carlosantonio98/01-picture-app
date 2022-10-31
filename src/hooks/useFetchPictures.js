import { useState, useEffect } from 'react';
import { getPictures } from '../helpers/getPictures';

// Como es una función normal lo que recibe por parametro no son props sino un parametro
export const useFetchPictures = ( category ) => {

    // Toda esta logica sirve para cargar, manejar y almacenar las imagenes aquí
    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImage = await getPictures( category );  // GetPictures es la instrucción que manda hacer la petición http
        setImages(newImage);
        setIsLoading(false);
    }

    useEffect( () => {

        getImages();

    }, []);  // Si dejamos el array de dependencias vació significa que este hook solo se va a disparar la primera ves que se crea y se destruye mi componente

    return {
        images,
        isLoading
    };
}
