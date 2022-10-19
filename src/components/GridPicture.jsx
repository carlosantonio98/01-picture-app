import { useState, useEffect } from 'react';
import { getPictures } from '../helpers/getPictures';
import { PictureItem } from './PictureItem';

export const GridPicture = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getPictures( category );
        setImages( newImages );
    }

    useEffect(() => {
        getImages();
    }, []);

    return(
        <div>
            <h2>{category}</h2>

            <div className='grid'>
                {
                    images.map((image) => 
                        (
                            <PictureItem
                                key={image.id}
                                {...image}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}