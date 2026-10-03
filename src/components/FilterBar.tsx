interface FilterBarProps {
    country: string;
    setCountry: (country: string) => void;

    superhostOnly: boolean;
    setSuperhostOnly: (value: boolean) => void;

    propertyType: string;
    setPropertyType: (type: string) => void;
}
const countries = [
    "All Stays",
    "Norway",
    "Finland",
    "Sweden",
    "Switzerland",
];

<div className="flex flex-wrap gap-2">
    {countries.map((item) => (
        <button
            key={item}
            onClick={() => (item)}
            className={`px-3 py-2 rounded-md 
                    ? "bg-[#5d8875] text-white"
                    : "text-[#52665a] hover:bg-[#d8e6d9]"
                }`}
        >
            {item}
        </button>
    ))}
</div>


