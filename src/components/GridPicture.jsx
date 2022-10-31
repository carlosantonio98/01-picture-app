import { useState, useEffect } from 'react';
import { useFetchPictures } from '../hooks/useFetchPictures';
import { PictureItem } from './PictureItem';

export const GridPicture = ({ category }) => {

    const { images, isLoading } = useFetchPictures( category );

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