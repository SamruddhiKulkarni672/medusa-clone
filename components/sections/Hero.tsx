import { Button } from "../ui/button";
import { motion } from "framer-motion";
import heroBg from "../../assets/hero.png";

const Hero = () => {
    
    return (
        <section id="home" className="relative min-h-screen overflow-hidden z-40">
            {/* Watercolor background - full visibility */}
            <div className="absolute inset-0">
                <img src={heroBg} alt="" className="h-[68%] w-full object-cover" />
            </div>

            <div className="relative z-10 flex flex-col items-center px-6 pb-12 pt-12 text-center md:pb-20 md:pt-28">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-6 font-display text-5xl font-bold lowercase italic leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-7xl"
                >
                    wetpaint drawing app
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-black/60 md:text-base"
                >
                    A full-fledged multi-utility digital drawing app right in your screen — painting, watercolor, pencil drawing, on canvas  all completely free.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-3"
                >
                    <Button
                        size="lg"
                        className="group rounded-full bg-[#637f8364] px-10 py-6 font-display text-base lowercase italic text-primary-foreground hover:bg-wetapit-dark/90 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:scale-105"
                    >
                        try live demo
                        <motion.span
                            className="ml-2 inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </Button>
                </motion.div>
                  







                  
                

                {/* App demo video in device frame */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="mt-16 w-full max-w-[71%]"
                >
                    <div className="relative mx-auto overflow-hidden flex items-center justify-center rounded-2xl bg-wetapit-dark shadow-2xl shadow-foreground/90 transition-transform duration-500 hover:scale-[1.02] aspect-video">
                        <iframe
                            className="w-full h-full scale-100 translate-y-[-16%]"
                            src="https://www.youtube.com/embed/MiriN6sXCnc?autoplay=1&mute=1&loop=1&playlist=MiriN6sXCnc&controls=0&modestbranding=1"
                            title="Wetpaint App Demo"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
