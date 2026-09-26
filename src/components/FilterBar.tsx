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
        <section className="relative z-20 mx-auto -mt-8 w-[94%] rounded-xl border border-[#3a455d] bg-[#20283b] p-3 shadow-2xl md:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Country Buttons */}
                <div className="flex flex-wrap gap-1">
                    {countries.map((item) => (
                        <button
                            key={item}
                            onClick={() => setCountry(item)}
                            className={`rounded-md px-3 py-2 text-xs transition-all md:text-sm ${country === item
                                    ? "bg-[#4a566e] text-white"
                                    : "text-gray-300 hover:bg-[#343e54]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Right Filters */}
                <div className="flex flex-wrap items-center gap-5">

                    {/* Superhost */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setSuperhostOnly(!superhostOnly)}
                            className={`relative h-6 w-11 rounded-full transition-colors ${superhostOnly ? "bg-blue-500" : "bg-[#586277]"
                                }`}
                        >
                            <span
                                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${superhostOnly ? "left-6" : "left-1"
                                    }`}
                            />
                        </button>

                        <span className="text-xs text-gray-300 md:text-sm">
                            Superhost
                        </span>
                    </div>

                    {/* Property Type */}
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="rounded-lg border border-[#4a556d] bg-[#20283b] px-3 py-2 text-xs text-white outline-none md:text-sm"
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