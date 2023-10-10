import Image from "next/image";
import heroImage from "/public/tesseralogoMain.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-section py-8 md:py-16 relative z-10">
      <div className="container mx-auto py-8 md:py-16">
        <div className="text-center">
          <div className="mx-auto">
            <motion.div
              className="flex items-center justify-center mt-8 sm:mt-12 text-white font-extrabold text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="w-48 md:w-80">
                <Image
                  src={heroImage}
                  style={{ aspectRatio: "16/9" }}
                  alt={"codecrafted"}
                />
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl mt-14 font-bold text-white tessera-header">
              Building the Future of Decentralized Ticketing
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
