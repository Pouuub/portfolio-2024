import Image from "next/image";
import { PrimaryButton } from "./ui/components/Button";
import ContactModal from "./ui/components/ContactModal";
import { calculateYearsSince } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="w-full md:h-screen md:flex md:items-center px-4">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_650px]">
          <div className="flex justify-center overflow-hidden sm:w-full lg:order-last">
            <Image
              loading="lazy"
              src="/images/hero-image.webp"
              alt="Hero Image"
              width={650}
              height={650}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <div className="flex justify-center sm:hidden">
                <Image
                  loading="lazy"
                  src="/images/avatar.webp"
                  alt="Avatar"
                  width={60}
                  height={60}
                  className="rounded-full border border-green align-top"
                />
              </div>
              <div className="grid grid-cols-8 grid-rows-2 gap-2">
                <div className="content-center col-span-1">
                  <Image
                    loading="lazy"
                    src="/images/avatar.webp"
                    alt="Avatar"
                    width={60}
                    height={60}
                    className="hidden sm:block rounded-full border border-green align-top"
                  />
                </div>

                <p className="col-start-2 col-end-8 content-center text-2xl font-semibold tracking-tighter sm:text-4xl text-center sm:text-left">
                  Anthony Tourolle - {calculateYearsSince(new Date("2003-08-16"))} ans
                </p>
                <p className="row-start-2 col-span-8 text-center sm:text-left sm:col-start-2 sm:col-span-7 leading-relaxed text-gray-500">
                  Alternant en 2ème année de Mastère Expert Informatique et Systèmes d&apos;Information (EISI)
                </p>
              </div>
            </div>
            <div className="flex gap-6 justify-center sm:justify-end my-4">
              <PrimaryButton label="Découvrir" target="/career" />
              <ContactModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
