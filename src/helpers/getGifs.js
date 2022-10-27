 export const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=1j5tq0GDeJrVy7Od4yKWxCjVzLebuxWU&q=skyrim&q=${ categoria }&limit=20`;
    //const url = `https://api.giphy.com/v1/gifs/trending?api_key=1j5tq0GDeJrVy7Od4yKWxCjVzLebuxWU&q=${ categoria }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ( {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    
    return gifs;
}