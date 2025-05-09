import { useEffect, useRef, useState } from "react";
import { About } from "../../components/about";
import { CallToAction } from "../../components/callToAction";
import { Container } from "../../components/projectContainer";
import styles from "./style.module.css";
import { PetCard } from "../../components/petCard";
import { pets } from "./pets";
import { Partners } from "../../components/partners";
import { Testimonials } from "../../components/testimonials";
import { Modal } from "../../components/generictModal";
import PetInfoCard from "../../components/petInfoCard";
import { LoadingSpinner } from "../../components/laoding";
import { Volunteer } from "../../components/volunteer";

type Pet = {
   nome: string;
   imagem: string;
   idade: string;
   sexo: string;
   descricao: string;
};

function Home() {
   const [pet, setPet] = useState<Pet>();
   const [isOpen, setIsOpen] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
   }, []);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add(styles.animateSlideIn);
               }
            });
         },
         { threshold: 0.2 }
      );

      sectionRefs.current.forEach((section) => {
         if (section) observer.observe(section);
      });

      return () => {
         sectionRefs.current.forEach((section) => {
            if (section) observer.unobserve(section);
         });
      };
   }, [isLoading]);

   const handleOpenModal = (pet: Pet) => {
      setIsOpen(true);
      setPet(pet);
   };

   if (isLoading) {
      return (
         <div className={styles.fullscreenLoader}>
            <LoadingSpinner />
         </div>
      );
   }

   return (
      <>
         <Container>
            {[
               <section id="about">
                  <h2 className={styles.titleSectionAbout}>Quem Somos</h2>
                  <About />
               </section>,

               <section id="callToAction">
                  <CallToAction />
               </section>,

               <section id="adoter">
                  <h2 className={styles.titleSectionAbout}>Adote um Pet</h2>
                  <p>Conheça nossos amiguinhos de 4 patas disponíveis!</p>
                  <div className={styles.gridCardsPets}>
                     {pets.map((pet) => (
                        <PetCard
                           onClick={() => handleOpenModal(pet)}
                           key={pet.nome}
                           name={pet.nome}
                           imageUrl={pet.imagem}
                           bgColor={pet.bgColor}
                        />
                     ))}
                  </div>
               </section>,

               <section id="testimonials">
                  <Testimonials />
               </section>,
               <section id="volunteer" className={styles.sectionVolunteer}>
                  <Volunteer />
               </section>,
               <section id="partners" className={styles.sectionPartners}>
                  <h2 className={styles.titlePartners}>Os nossos parceiros</h2>
                  <Partners />
               </section>,
            ].map((section, index) => (
               <div
                  key={index}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={styles.sectionObserver}
               >
                  {section}
               </div>
            ))}
         </Container>

         {pet && (
            <Modal
               isOpen={isOpen}
               onClose={() => setIsOpen(false)}
               children={<PetInfoCard pet={pet} />}
            />
         )}
      </>
   );
}

export default Home;
