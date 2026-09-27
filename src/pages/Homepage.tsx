import { useState } from "react";

import HeroSection from "../components/HeroSection";
import FilterBar from "../components/FilterBar";
import PropertyCard from "../components/PropertyCard";

import { properties } from "../data/properties";

const HomePage = () => {
    const [country, setCountry] = useState("All Stays");

    const [superhostOnly, setSuperhostOnly] = useState(false);

    const [propertyType, setPropertyType] = useState("All");

    // Filter properties
    const filteredProperties = properties.filter((property) => {
        const matchesCountry =
            country === "All Stays" ||
            property.country === country;

        const matchesSuperhost =
            !superhostOnly ||
            property.superhost === true;

        const matchesPropertyType =
            propertyType === "All" ||
            property.type === propertyType;

        return (
            matchesCountry &&
            matchesSuperhost &&
            matchesPropertyType
        );
    });

    return (
        <main className="min-h-screen bg-[#f1f6f1] text-[#263b34]">

            <div className="mx-auto max-w-[1450px] px-4 py-6 md:px-6 md:py-10">

                {/* Hero */}
                <HeroSection />

                {/* Filters */}
                <FilterBar
                    country={country}
                    setCountry={setCountry}
                    superhostOnly={superhostOnly}
                    setSuperhostOnly={setSuperhostOnly}
                    propertyType={propertyType}
                    setPropertyType={setPropertyType}
                />

                {/* Properties */}
                <section className="mt-9">

                    {/* Heading */}
                    <div className="mb-6 flex items-center justify-between">

                        <h2 className="text-lg font-semibold md:text-xl">
                            Over 200 stays
                        </h2>

                        <span className="text-xs text-[#718078] md:text-sm">
                            {filteredProperties.length} properties
                        </span>

                    </div>

                    {/* Cards */}
                    {filteredProperties.length > 0 ? (

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                            {filteredProperties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                />
                            ))}

                        </div>

                    ) : (

                        /* Empty State */
                        <div className="rounded-xl border border-[#d5e2d8] bg-[#f9fcf8] py-16 text-center">

                            <div className="text-4xl">
                            </div>

                            <h3 className="mt-4 text-lg font-semibold">
                                No properties found
                            </h3>

                            <p className="mt-2 text-sm text-[#718078]">
                                Try changing your filters.
                            </p>

                        </div>

                    )}

                </section>

            </div>

        </main>
    );
};

export default HomePage;