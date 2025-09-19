// app/components/Hero.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type HeroProps = {
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: {
    src: StaticImageData | string;
    alt: string;
    objectPosition?: string;
  };
  grayscale?: boolean;
};

const DEFAULTS: HeroProps = {
  headline: "Cycle Performance for Humans",
  subhead: "Meet the WM4 Trainer. Olympic-grade accuracy. Seamless AI integration.",
  primaryCta: { label: "Shop WM4", href: "/shop/wm4" },
  secondaryCta: { label: "View Specs", href: "/wm4-specs" },
  image: {
    src: "/wm4-hero.jpg",
    alt: "Athlete training on the CycleHuman WM4 indoor trainer.",
    objectPosition: "object-center",
  },
  grayscale: true,
};

export default function Hero(props: Partial<HeroProps>) {
  const {
    headline,
    subhead,
    primaryCta,
    secondaryCta,
    image,
    grayscale,
  } = { ...DEFAULTS, ...props } as HeroProps;

  return (
    <section
      aria-labelledby="hero-title"
      className="bg-white text-black"
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 py-10 sm:py-14 lg:py-20">
          {/* Text column */}
          <div className="max-w-xl">
            <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              {headline}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed">
              {subhead}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={primaryCta.href}
                aria-label={primaryCta.label}
                className={[
                  "inline-flex items-center justify-center min-h-[44px] px-5 py-3",
                  "bg-black text-white font-medium",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                ].join(" ")}
              >
                {primaryCta.label}
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  aria-label={secondaryCta.label}
                  className={[
                    "inline-flex items-center justify-center min-h-[44px] px-5 py-3",
                    "border border-black text-black font-medium",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                  ].join(" ")}
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Image column */}
          <div className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              priority
              width={1400}
              height={1200}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={[
                "w-full h-auto",
                grayscale ? "grayscale" : "",
                "object-cover",
                image.objectPosition ?? "object-center",
              ].join(" ")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
