import { About } from "../../components/about";
import { CallToAction } from "../../components/callToAction";
import { Container } from "../../components/projectContainer";
import styles from "./style.module.css";
import { PetCard } from "../../components/petCard";
import { pets } from "./pets";
import { ContactSection } from "../../components/contact";

function Home() {
   return (
      <Container>
         <section id="#about" className={styles.sectionAbout}>
            <h2 className={styles.titleSectionAbout}>Quem Somos</h2>
            <About />
         </section>

         <section>
            <CallToAction />
         </section>

         <section>
            <h2 className={styles.titleSectionAbout}>Adote um Pet</h2>

            <p>Conheça nosso amiguinhos de 4 patas disponiveis!</p>

            <div className={styles.gridCardsPets}>
               {pets.map((pet) => (
                  <PetCard
                     key={pet.name}
                     name={pet.name}
                     imageUrl={pet.imageUrl}
                     bgColor={pet.bgColor}
                  />
               ))}
            </div>
         </section>

         <section>
            <ContactSection />
         </section>
      </Container>
   );
}

export default Home;
