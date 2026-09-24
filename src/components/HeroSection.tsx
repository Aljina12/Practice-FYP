import heroImage from "../assets/img1.jpg";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden rounded-3xl border-[10px] border-[#252a46]">

            <div
                className="h-[400px] bg-cover bg-center md:h-[500px]"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="flex h-full items-center bg-black/10 px-8 md:px-16">

                    <div className="max-w-md text-[#171b2a]">

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