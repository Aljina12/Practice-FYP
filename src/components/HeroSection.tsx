import heroImage from "../assets/img 1.png";

const HeroSection = () => {
    return (
        <section className="group relative overflow-hidden rounded-3xl border-10 border-[#dce8dd] hover:border-[#bfd5c4]">

            {/* Hero Image */}
            <div
                className="h-100 bg-cover bg-center md:h-125"
                style={{ backgroundImage: `url(${heroImage})` }}
            >

                {/* Overlay */}
                <div className="flex h-full items-center bg-gradient-to-r from-[#f6faf2]/90 via-[#f6faf2]/55 to-transparent px-8 md:px-16">
                </div>
            </div>
        </section>
    );
}