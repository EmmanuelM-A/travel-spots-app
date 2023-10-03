import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': '0a5a617f45msh19b0b3d75fc3aa1p185e25jsn085038bd0ce1',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL.replace, options);
        return data
    } catch (error) {
        console.log(error);
    }
}