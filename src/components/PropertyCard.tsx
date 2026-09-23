import type { Property } from '../data/properties'

type PropertyCardProps = {
    property: Property
}

const PropertyCard = ({ property }: PropertyCardProps) => (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="flex h-40 items-end bg-linear-to-br from-cyan-500/50 via-blue-500/30 to-fuchsia-500/40 p-4">
            <span className="rounded-full bg-black/30 px-3 py-1 text-xs backdrop-blur">
                {property.type}
            </span>
        </div>
        <div className="p-5">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="font-semibold">{property.name}</h3>
                    <p className="mt-1 text-sm text-gray-400">{property.country}</p>
                </div>
                <span className="text-sm text-cyan-300">{property.rating} / 5</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">${property.price} night</p>
            {property.superhost && (
                <p className="mt-2 text-xs text-amber-300">SUPERHOST</p>
            )}
        </div>
    </article>
)

export default PropertyCard
