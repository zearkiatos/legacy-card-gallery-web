import Faker from 'faker';
import { IMAGE_TYPES } from '../types';
import config from '../config';

const fetchImages = () => {
    const request = [];

    for(let i=0; i<20;i++) {
        request.push({
           description: Faker.lorem.paragraph(5),
           image: `${config.PICSUM_BASE_URL}/400/150?random=${i}`
        })
    }

    return {
        type: IMAGE_TYPES.FETCH_IMAGES,
        payload: request
    }
}

export default {
    fetchImages
}