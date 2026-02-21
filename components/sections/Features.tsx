"use client";

import { motion } from "framer-motion";
import LandingHero from "../WarpedLineSVG";

import Svg from "../../assets/svg.svg";
import pallate from "../../assets/pallate.svg";
import canvas from "../../assets/canvas.svg";
import undo from "../../assets/undo.svg";
import video from "../../assets/video.svg";
import brush from "../../assets/brush.svg";

const features = [
  {
    id: 1,
    title: "Multiple Brushes",
    description:
      "Professional brush collection with realistic textures",
    icon: brush,
  },
  {
    id: 2,
    title: "Smart Color Picker",
    description:
      "Advanced HSB controls with intelligent color suggestions",
    icon: pallate,
  },
  {
    id: 3,
    title: "Auto Video Recording",
    description:
      "Capture your creative process automatically",
    icon: video,
  },
  {
    id: 4,
    title: "AI SVG Generation",
    description:
      "Generate stunning SVG artwork using AI technology",
    icon: Svg,
  },
  {
    id: 5,
    title: "Realistic canvas",
    description:
      "Professional layer system with blend modes",
    icon: canvas,
  },
  {
    id: 6,
    title: "Unlimited Undo",
    description:
      "Never lose your progress with infinite history",
    icon: undo,
  },
];

const FeaturedArtworks = () => {
  return (
    <section id="artworks" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[70%] px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
Powerful Features for Every Artist          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer border-2 border-[#B6B0B0] rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/60"
            >
              {/* Warped Canvas Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:shadow-black/40">
                
                {/* Canvas Background */}
                <LandingHero />

                {/* Center Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="    p-4 rounded-2xl   transition-all duration-300 group-hover:scale-110  ">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-24 h-24"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-4 px-4 pb-5">
                <h3 className="font-display text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedArtworks;
