import type { Property } from "../types/property";

type PropertyCardProps = {
    property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <article className="group overflow-hidden rounded-2xl border bg-white">

            {/* Property Image */}
            <div
                className="h-40 bg-cover bg-center p-4"
                style={{ backgroundImage: `url(${property.image})` }}
            >
                <span className="rounded-full bg-white px-3 py-1 text-xs">
                    {property.type}
                </span>
            </div>

            {/* Property Details */}
            <div className="p-5">

                {/* Name and Rating */}
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-semibold">
                            {property.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {property.country}
                        </p>
                    </div>

                    <span className="text-sm text-green-700">
                        {property.rating} / 5
                    </span>
                </div>

                {/* Price */}
                <p className="mt-4 text-sm">
                    ${property.price} night
                </p>

                {/* Superhost */}
                {property.superhost && (
                    <p className="mt-2 text-xs text-orange-600">
                        SUPERHOST
                    </p>
                )}

            </div>
        </article>
    );
};

export default PropertyCard;