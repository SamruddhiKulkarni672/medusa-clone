import { Mail, Twitter, Instagram, Github } from "lucide-react";
import footerFlowers from "../../assets/footer-flowers.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden z-40">
      <div className="absolute inset-0">
        <img
          src={footerFlowers}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 py-20">
        <div className="mx-auto max-w-[70%] px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="font-display text-2xl text-foreground">Wetpaint</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                A free, full-featured digital art studio built for creators.
                Paint, sketch, and design — right from your browser.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <p className="font-display text-sm uppercase tracking-widest text-foreground">Navigate</p>
              <a href="#home" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">Home</a>
              <a href="#artworks" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
              <a href="#gallery" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">Gallery</a>
              <a href="#pricing" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <p className="font-display text-sm uppercase tracking-widest text-foreground">Connect</p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
              </div>
              <p className="mt-2 font-body text-xs text-muted-foreground">hello@Wetpaint.app</p>
            </div>
          </div>

          <div className="mt-12 border-t border-border/30 pt-6 text-center">
            <p className="font-body text-xs text-muted-foreground">
              © 2026 Wetpaint. Crafted with love for the art community. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
