import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ljE9sZIv8BCjPuR3WU3XSFpcMmMZgcH4iXcGqkMVJ4E'
        },
        params: {
            query: term
        }
    });

    return response.data.result;
}

export default searchImages;