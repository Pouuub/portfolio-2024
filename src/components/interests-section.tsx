import Image from "next/image";
import Modal from "./ui/components/Modal";
import ContactModal from "./ui/components/ContactModal";

export function InterestsSection() {
  return (
    <section className="w-full md:flex md:items-center pb-8">
      <div className="sm:container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-8">
          <div className="border shadow-md rounded-lg p-4 ">
            <h2 className="text-xl font-bold">Professionnel</h2>
            <ul className="mt-2 text-sm list-disc list-inside custom-list">
              <li>Spécialisé dans le développement web</li>
              <li>Maîtrise de JavaScript et TypeScript</li>
              <li>Utilisation du framework Next.js</li>
              <li>Intéressé par la résolution de problèmes et le développement d&apos;interfaces utilisateur</li>
              <div className="my-3">
                <span className="font-semibold">Dernière expérience</span>
                <ul className="mt-1 ml-4 list-disc list-inside custom-list">
                  <li>Développement d&apos;une application interne</li>
                  <li>Gestion de GitLab auto-hébergé avec CI/CD</li>
                  <li>Gestion de plusieurs machines virtuelles</li>
                  <li>Mise en place d&apos;un reverse proxy avec Docker</li>
                </ul>
              </div>
              <div className="my-3">
                <span className="font-semibold">Valeurs</span>
                <ul className="mt-1 ml-4 list-disc list-inside custom-list">
                  <li>Autonome et apprécie le travail d&apos;équipe</li>
                  <li>Engagé dans un apprentissage continu</li>
                  <li>Intérêt pour le travail à distance</li>
                  <li>Actuellement en alternance</li>
                  <li>Objectif : continuer à explorer les technologies web et contribuer à des projets challengeant</li>
                </ul>
              </div>

              <div className="flex justify-center my-6">
                <Modal
                  label="Découvrir mes projets d'études"
                  dialog_title="4 projets d'études"
                  btn_class="px-4 py-3 text-sm bg-black text-white rounded-md hover:bg-black/80 transition-all"
                >
                  <span className="space-y-8 mt-4 max-h-[80vh] flex flex-col overflow-y-scroll">
                    <span className="relative rounded-lg md:p-4 shadow-md">
                      <span className="text-lg font-medium">Juin 2024</span>
                      <span className="absolute bottom-1/2 w-full flex justify-center -z-10">
                        <span className="text-sm font-light">Chargement...</span>
                      </span>
                      <iframe
                        src="https://docs.google.com/presentation/d/e/2PACX-1vTX_qyXOUWGwpxHGlbK_hqfQ2X_ADnaKJ_sUqnV1-I-7cpQ85BWkBfRozkHNoZtApN89YOMFTo9uukz/embed?start=false&loop=true&delayms=3000"
                        className="w-full h-56"
                        allowFullScreen={true}
                      ></iframe>
                    </span>
                    <span className="relative rounded-lg md:p-4 shadow-md">
                      <span className="text-lg font-medium">Avril 2024</span>
                      <span className="absolute bottom-1/2 w-full flex justify-center -z-10">
                        <span className="text-sm font-light">Chargement...</span>
                      </span>
                      <iframe
                        src="https://docs.google.com/presentation/d/e/2PACX-1vRB85hROeNHkTgQKHYCrl3Uppoj4DjQOlILvc5InWvVfQUZR7-E7moEqXt8YHHw8Wk5jSpo4UuweT4S/embed?start=false&loop=true&delayms=3000"
                        className="w-full h-56"
                        allowFullScreen={true}
                      ></iframe>
                    </span>
                    <span className="relative rounded-lg md:p-4 shadow-md">
                      <span className="text-lg font-medium">Septembre 2023</span>
                      <span className="absolute bottom-1/2 w-full flex justify-center -z-10">
                        <span className="text-sm font-light">Chargement...</span>
                      </span>
                      <iframe
                        src="https://docs.google.com/presentation/d/e/2PACX-1vTj9dwS6a3AWjQeNwWoDEYvWNBcuHZzX3DFiGMMeO9CRuPsipV8xu_qtjDPiJTCOTE3_Hzur7DiOS7w/embed?start=false&loop=true&delayms=3000"
                        className="w-full h-56"
                        allowFullScreen={true}
                      ></iframe>
                    </span>
                    <span className="relative rounded-lg md:p-4 shadow-md">
                      <span className="text-lg font-medium">Septembre 2022</span>
                      <span className="absolute bottom-1/2 w-full flex justify-center -z-10">
                        <span className="text-sm font-light">Chargement...</span>
                      </span>
                      <iframe
                        src="https://docs.google.com/presentation/d/e/2PACX-1vQrzuF37rP19ZjL1rVOsB1YoQERxm6T50Kppto9AMgQ5gCyPfxk6jBLddKasP14Szccv2-lNx1CFZ5I/embed?start=false&loop=true&delayms=3000"
                        className="w-full h-56"
                        allowFullScreen={true}
                      ></iframe>
                    </span>
                  </span>
                </Modal>
              </div>
            </ul>
          </div>
          <div className="border shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">Personnel</h2>
            <div className="my-8 ml-4 space-y-8">
              <div className="flex items-center">
                <Image src="/images/drumsticks.webp" alt="Drumsticks" width={50} height={40} priority={true} />
                <p className="text-lg font-light ml-8">Batterie et musique</p>
              </div>
              <div className="flex items-center">
                <Image src="/images/backpack.webp" alt="Backpack" width={50} height={40} priority={true} />
                <p className="text-lg font-light ml-8">Voyages et découvertes</p>
              </div>
              <div className="flex items-center">
                <Image src="/images/ticket.webp" alt="Ticket" width={50} height={40} priority={true} />
                <p className="text-lg font-light ml-8">Concerts et festivals</p>
              </div>
              <div className="flex items-center">
                <Image src="/images/laptop.webp" alt="Laptop" width={50} height={40} priority={true} />
                <p className="text-lg font-light ml-8">Développement et programmation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ContactModal />
        </div>
      </div>
    </section>
  );
}
