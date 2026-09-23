type FilterBarProps = {
    country: string
    setCountry: (country: string) => void
    superhostOnly: boolean
    setSuperhostOnly: (superhostOnly: boolean) => void
    propertyType: string
    setPropertyType: (propertyType: string) => void
}

const FilterBar = ({
    country,
    setCountry,
    superhostOnly,
    setSuperhostOnly,
    propertyType,
    setPropertyType,
}: FilterBarProps) => (
    <div className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <select
            className="rounded-lg border border-white/10 bg-[#111633] px-3 py-2 text-sm"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            aria-label="Filter by country"
        >
            <option>All Stays</option>
            <option>Japan</option>
            <option>Italy</option>
            <option>Portugal</option>
        </select>
        <select
            className="rounded-lg border border-white/10 bg-[#111633] px-3 py-2 text-sm"
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
            aria-label="Filter by property type"
        >
            <option>All</option>
            <option>Cabin</option>
            <option>Apartment</option>
            <option>Villa</option>
        </select>
        <label className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm">
            <input
                type="checkbox"
                checked={superhostOnly}
                onChange={(event) => setSuperhostOnly(event.target.checked)}
            />
            Superhost only
        </label>
    </div>
)

export default FilterBar
