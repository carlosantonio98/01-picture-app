import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridPicture } from "./components/GridPicture";

export const PictureApp = () => {

    const [categories, setCategories] = useState(['people']);

    const onAddCategory= ( newCategory ) => {
        if ( categories.map( category => category.toLowerCase() ).includes( newCategory.toLowerCase() ) ) return;  // Validamos si ya existe alguno
        setCategories([newCategory, ...categories]);
    }

    return(
        <>
            <h1>Picture App</h1>

            <AddCategory onNewCategory={ onAddCategory } />

            { 
                categories.map((category) => (
                    <GridPicture 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    );
}