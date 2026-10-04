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

                );
};

                export default PropertyCard;