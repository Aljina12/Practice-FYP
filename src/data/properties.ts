export type Property = {
    id: number
    name: string
    country: string
    type: 'Cabin' | 'Apartment' | 'Villa'
    rating: number
    price: number
    superhost: boolean
}

export const properties: Property[] = [
    { id: 1, name: 'Forest Glass Cabin', country: 'Japan', type: 'Cabin', rating: 4.9, price: 210, superhost: true },
    { id: 2, name: 'Sunlit Lisbon Loft', country: 'Portugal', type: 'Apartment', rating: 4.8, price: 145, superhost: false },
    { id: 3, name: 'Tuscan Hill Villa', country: 'Italy', type: 'Villa', rating: 5, price: 290, superhost: true },
]