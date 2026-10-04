import type { Property } from "../types/property";

type PropertyCardProps = {
    property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-[#dce7de] bg-white transition hover:-translate-y-1 hover:shadow-xl">

            {/* 1. Property Image */}
            <div
                className="relative h-40 bg-cover bg-center p-4"
                style={{
                    backgroundImage: `url(${property.image})`,
                }}
            >
                {/* 2. Property Type */}
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs text-[#344c40]">
                    {property.type}
                </span>
            </div>

            {/* 3. Property Information */}
            <div className="p-5">

                {/* 4. Name and Rating */}
                <div className="flex items-start justify-between gap-3">

                    {/* 5. Property Name */}
                    <div>
                        <h3 className="font-semibold text-[#344c40]">
                            {property.name}
                        </h3>

                        {/* 6. Country */}
                        <p className="mt-1 text-sm text-[#718078]">
                            {property.country}
                        </p>
                    </div>

                    {/* 7. Rating */}
                    <span className="text-sm text-[#54846f]">
                        {property.rating} / 5
                    </span>
                </div>

                {/* 8. Price */}
                <p className="mt-4 text-sm text-[#52645a]">
                    ${property.price} night
                </p>

                {/* 9. Superhost */}
                {property.superhost && (
                    <p className="mt-2 text-xs font-medium text-[#b56d4d]">
                        SUPERHOST
                    </p>
                )}

                {/* 10. Property Card Footer */}
                <div className="mt-4 border-t border-[#edf2ed] pt-3">
                    <p className="text-xs text-[#718078]">
                        Available for your stay
                    </p>
                </div>

            </div>
        </article>
    );
};

export default PropertyCard;