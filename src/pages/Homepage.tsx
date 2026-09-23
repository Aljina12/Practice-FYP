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
            country === "All Stays" || property.country === country;

        const matchesSuperhost =
            !superhostOnly || property.superhost;

        const matchesType =
            propertyType === "All" || property.type === propertyType;

        return matchesCountry && matchesSuperhost && matchesType;
    });

    return (
        <main className="min-h-screen bg-[#080b20] text-white">

            <div className="mx-auto max-w-362.5 px-5 py-10">

                {/* Hero Section */}
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

                {/* Property Listing */}
                <section className="mt-8">

                    <div className="mb-6 flex items-center justify-between">

                        <h2 className="text-xl font-semibold">
                            Over 200 stays
                        </h2>

                        <span className="text-sm text-gray-400">
                            {filteredProperties.length} properties
                        </span>

                    </div>

                    {/* Property Grid */}
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

                        <div className="py-16 text-center">

                            <h3 className="text-xl font-semibold">
                                No properties found
                            </h3>

                            <p className="mt-2 text-gray-400">
                                Try changing your filters to see more stays.
                            </p>

                        </div>

                    )}

                </section>

            </div>

        </main>
    );
};

export default HomePage;