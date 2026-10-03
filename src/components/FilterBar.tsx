interface FilterBarProps {
    country: string;
    setCountry: (country: string) => void;

    superhostOnly: boolean;
    setSuperhostOnly: (value: boolean) => void;

    propertyType: string;
    setPropertyType: (type: string) => void;
}

const FilterBar = ({
    country,
    setCountry,
    superhostOnly,
    setSuperhostOnly,
    propertyType,
    setPropertyType,
}: FilterBarProps) => {

    const countries = [
        "All Stays",
        "Norway",
        "Finland",
        "Sweden",
        "Switzerland",
    ];

    return (
        <section className="w-[94%] mx-auto -mt-8 p-4 bg-[#e8f0e8] rounded-xl border border-[#cdddcf] shadow-md">

            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">

                {/* Country Filter */}
                <div className="flex flex-wrap gap-2">
                    {countries.map((item) => (
                        <button
                            key={item}
                            onClick={() => setCountry(item)}
                            className={`px-3 py-2 rounded-md text-sm ${country === item
                                    ? "bg-[#5d8875] text-white"
                                    : "text-[#52665a] hover:bg-[#d8e6d9]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Other Filters */}
                <div className="flex items-center gap-5">

                    {/* Superhost */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSuperhostOnly(!superhostOnly)}
                            className={`w-11 h-6 rounded-full ${superhostOnly
                                    ? "bg-[#63977f]"
                                    : "bg-[#bdcbbf]"
                                }`}
                        >
                            <span
                                className={`block w-4 h-4 bg-white rounded-full ${superhostOnly
                                        ? "ml-6"
                                        : "ml-1"
                                    }`}
                            />
                        </button>

                        <span className="text-sm text-[#52665a]">
                            Superhost
                        </span>
                    </div>

                    {/* Property Type */}
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-[#c1d1c4] bg-white text-sm"
                    >
                        <option value="All">Property type</option>
                        <option value="Cabin">Cabin</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                    </select>

                </div>
            </div>
        </section>
    );
};

export default FilterBar;