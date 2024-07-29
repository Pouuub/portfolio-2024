import Image from "next/image";
import { OutlineButton, PrimaryButton } from "./ui/components/Button";
import ContactModal from "./ui/components/ContactModal";

export function HeroSection() {
  return (
    <section className="w-full md:h-screen md:flex md:items-center px-4">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_650px]">
          <div className="flex justify-center overflow-hidden sm:w-full lg:order-last">
            <Image src="/images/hero-image.webp" alt="Hero Image" width={650} height={650} className="object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <Image src="/images/logo-webexpr.svg" alt="Logo WebexpR" width={200} height={50} />
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none my-6">
                Candidature spontanée
              </h1>
              <div className="flex justify-center sm:hidden">
                <Image
                  src="/images/avatar.webp"
                  alt="Avatar"
                  width={60}
                  height={60}
                  className="rounded-full border border-red-600 align-top"
                />
              </div>
              <div className="grid grid-cols-8 grid-rows-2 gap-2">
                <div className="content-center col-span-1">
                  <Image
                    src="/images/avatar.webp"
                    alt="Avatar"
                    width={60}
                    height={60}
                    className="hidden sm:block rounded-full border border-red-600 align-top"
                  />
                </div>

                <p className="col-start-2 col-end-8 content-center text-2xl font-semibold tracking-tighter sm:text-4xl text-center sm:text-left">
                  Anthony Tourolle - 20 ans
                </p>
                <p className="row-start-2 col-span-8 text-center sm:text-left sm:col-start-2 sm:col-span-7 text-lg leading-relaxed text-gray-500">
                  Alternant en 2ème année de Mastère Expert Informatique et Systèmes d'Information (EISI)
                </p>
              </div>
            </div>
            <div className="flex gap-6 min-[400px]:flex-row justify-end my-4">
              <PrimaryButton label="Découvrir" target="/career" />
              <ContactModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
