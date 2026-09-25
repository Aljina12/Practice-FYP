import type { Property } from "../types/property";

interface PropertyCardProps {
    property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <article className="group overflow-hidden rounded-xl border border-[#303b4f] bg-[#111a2a] transition-all duration-300 hover:-translate-y-1 hover:border-[#58647a] hover:shadow-xl">

            {/* Image */}
            <div className="relative h-[205px] overflow-hidden">

                <img
                    src={property.image}
                    alt={property.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Superhost Badge */}
                {property.superhost && (
                    <div className="absolute left-3 top-3 rounded-md bg-[#182236]/95 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                        Superhost ⭐
                    </div>
                )}

            </div>

            {/* Content */}
            <div className="p-4">

                {/* Title */}
                <h3 className="line-clamp-1 text-[15px] font-semibold text-white">
                    {property.name}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-[58px] text-xs leading-5 text-gray-400">
                    {property.description}
                </p>

                {/* Information */}
                <div className="mt-3 flex items-center gap-4 text-[11px] text-gray-400">

                    <span>
                        🛏 {property.bedrooms} bedroom
                    </span>

                    <span>
                        👤 {property.guests} guests
                    </span>

                </div>

                {/* Divider */}
                <div className="my-4 border-t border-[#303b4f]" />

                {/* Bottom */}
                <div className="flex items-center justify-between">

                    <div>
                        <span className="text-base font-semibold text-white">
                            ${property.price}
                        </span>

                        <span className="ml-1 text-[11px] text-gray-400">
                            /night
                        </span>
                    </div>

                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-yellow-400">
                            ★
                        </span>

                        <span className="text-gray-200">
                            {property.rating}
                        </span>
                    </div>

                </div>

            </div>
        </article>
    );
};

export default PropertyCard;