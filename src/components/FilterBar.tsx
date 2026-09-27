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
        <section className="relative z-20 mx-auto -mt-8 w-[94%] rounded-xl border border-[#cdddcf] bg-[#e8f0e8] p-3 shadow-[0_20px_50px_-32px_rgba(50,78,58,0.45)] transition duration-300 hover:border-[#aec8b2] hover:shadow-[0_24px_60px_-28px_rgba(80,115,90,0.42)] md:p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* Country Buttons */}
                <div className="flex flex-wrap gap-1">
                    {countries.map((item) => (
                        <button
                            key={item}
                            onClick={() => setCountry(item)}
                            className={`rounded-md px-3 py-2 text-xs transition-all md:text-sm ${country === item
                                ? "bg-[#5d8875] text-white"
                                : "text-[#52665a] transition-transform hover:-translate-y-px hover:bg-[#d8e6d9]"
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
                            className={`relative h-6 w-11 rounded-full transition duration-200 hover:scale-105 hover:brightness-105 ${superhostOnly ? "bg-[#63977f]" : "bg-[#bdcbbf]"
                                }`}
                        >
                            <span
                                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${superhostOnly ? "left-6" : "left-1"
                                    }`}
                            />
                        </button>

                        <span className="text-xs text-[#52665a] md:text-sm">
                            Superhost
                        </span>
                    </div>

                    {/* Property Type */}
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="rounded-lg border border-[#c1d1c4] bg-[#f7faf6] px-3 py-2 text-xs text-[#344c40] outline-none transition-colors hover:border-[#86aa91] focus:border-[#63977f] md:text-sm"
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