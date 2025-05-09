import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

export const Volunteer = () => {
   return (
      <section className={styles.container}>
         <div className={styles.textSection}>
            <h2>Quer fazer parte desse projeto?</h2>
            <p>
               Se você tem tempo, disposição e amor para compartilhar, entre em
               contato conosco! Juntos, podemos fazer a diferença na vida desses
               animais que tanto precisam.
            </p>
            <a
               href="https://wa.me/SEUNUMEROAQUI" // Substitua por algo como: https://wa.me/5511999999999
               target="_blank"
               rel="noopener noreferrer"
               className={styles.whatsappButton}
            >
               <FaWhatsapp size={20} />
               Entrar contato
            </a>
         </div>
         <div className={styles.imagesSection}>
            <img
               src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE382SAyCcr6OpXydt-T5N3vUmZzZ1697jfw&s"
               }
               alt="Pata e mão"
               className={styles.image}
            />
            <img
               src={
                  "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/jylajpy28o0z8f4n4pdn"
               }
               alt="Gato"
               className={styles.image}
            />
            <img
               src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqjIs-LdYnnkXA2treXHV5ZDLNQwTRDjXSw&s"
               }
               alt="Porco"
               className={styles.image}
            />
         </div>
      </section>
   );
};
