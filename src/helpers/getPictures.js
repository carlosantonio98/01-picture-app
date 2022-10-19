
export const getPictures = async ( category ) => {
    const url = `https://api.unsplash.com/search/photos?client_id=llh9pLl-iEmnOLZ0GFP-8rfPH7Jo2W5IdJ5IWIvRkDE&query=${category}&per_page=6`;
    const response = await fetch( url );  // Obtenemos es recurso de la red
    const { results } = await response.json();  // Obtenemos los datos de la api

    const pictures = results.map( img => ({  // Creamos un nuevo array de objetos solo con los datos necesarios
        'id': img.id,
        'description': img.alt_description,
        'url': img.urls.full
    }));

    return pictures;
}