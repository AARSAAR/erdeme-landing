import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import HeroImage from "@/public/images/erdeme-logo.png";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto rounded-lg"
                src={HeroImage}
                width={76}
                height={76}
                alt="Hero"
              />
            </Link>
          </div>
          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
