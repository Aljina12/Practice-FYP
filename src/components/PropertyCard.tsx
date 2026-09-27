import type { Property } from '../types/property'

type PropertyCardProps = {
    property: Property
}

const PropertyCard = ({ property }: PropertyCardProps) => (
    <article className="group overflow-hidden rounded-2xl border border-[#dce7de] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#a9c9b3] hover:shadow-xl hover:shadow-[#6f9278]/15">
        <div
            className="relative flex h-40 items-end bg-cover bg-center p-4 transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${property.image})` }}
        >
            <span className="rounded-full bg-[#f7fbf5]/90 px-3 py-1 text-xs text-[#344c40] backdrop-blur">
                {property.type}
            </span>
        </div>
        <div className="p-5">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="font-semibold">{property.name}</h3>
                    <p className="mt-1 text-sm text-[#718078]">{property.country}</p>
                </div>
                <span className="text-sm text-[#54846f]">{property.rating} / 5</span>
            </div>
            <p className="mt-4 text-sm text-[#52645a]">${property.price} night</p>
            {property.superhost && (
                <p className="mt-2 text-xs text-[#b56d4d]">SUPERHOST</p>
            )}
        </div>
    </article>
)

export default PropertyCard
