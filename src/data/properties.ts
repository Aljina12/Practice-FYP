import img1 from '../assets/img 1.png'
import img2 from '../assets/img 2.png'

export type Property = {
    id: number
    name: string
    location: string
    description: string
    image: string
    price: number
    rating: number
    bedrooms: number
    guests: number
    superhost: boolean
    country: string
    type: string
}

export const properties: Property[] = [
    {
        id: 1,
        name: 'Nordic Retreat with Sauna',
        location: 'Sweden',
        description: 'Enjoy a peaceful stay in a beautiful Nordic cabin.',
        image: img1,
        price: 250,
        rating: 4.9,
        bedrooms: 2,
        guests: 3,
        superhost: true,
        country: 'Sweden',
        type: 'Cabin',
    },

    {
        id: 2,
        name: 'Cabin with Private Sauna',
        location: 'Finland',
        description: 'Relax in a beautiful cabin surrounded by nature.',
        image: img2,
        price: 170,
        rating: 4.9,
        bedrooms: 2,
        guests: 4,
        superhost: true,
        country: 'Finland',
        type: 'Cabin',
    },
]