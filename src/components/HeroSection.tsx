import heroImage from "../assets/img 1.png";

const HeroSection = () => {
    return (
        <section className="group relative overflow-hidden rounded-3xl border-10 border-[#dce8dd] transition-colors duration-300 hover:border-[#bfd5c4]">

            <div
                className="h-100 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02] md:h-125"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="flex h-full items-center bg-gradient-to-r from-[#f6faf2]/90 via-[#f6faf2]/55 to-transparent px-8 md:px-16">

                    <div className="max-w-md text-[#263b34]">

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Peace, nature,
                            <br />
                            dream
                        </h1>

                        <p className="mt-4 text-lg">
                            Find and book a great experience.
                        </p>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default HeroSection;