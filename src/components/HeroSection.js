import Image from "next/image";
import heroImage from "/public/tesseralogo.png";
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
              <div className="w-64 h-24 md:w-80 md:h-30">
                <Image
                  src={heroImage}
                  layout="responsive"
                  objectFit="contain"
                  alt={"codecrafted"}
                />
              </div>
            </motion.div>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl mt-4 sm:mt-8 text-white tessera-header">
              Building the Future of Decentralized Ticketing
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
