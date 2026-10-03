import type { Property } from "../types/property";
type PropertyCardProps = {
    property: Property;
};
const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <article>
        </article>

    );
};

<div
    className="h-40 bg-cover bg-center p-4"
    style={{
        backgroundImage: `url(${property.image})`
    }}
>
    <span className="rounded-full bg-white px-3 py-1 text-xs">
        {property.type}
    </span>
</div>