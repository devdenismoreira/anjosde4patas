import styles from "./styles.module.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
               <p>
                  <strong>Anjos de 4 Patas</strong>
               </p>
               <p>
                  <strong>Contatos</strong>
               </p>

               <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:adequatropatas86@gmail.com">
                     adequatropatas86@gmail.com
                  </a>
               </p>
               <p>
                  <strong>Telefone:</strong> (81) 982295333
               </p>
               <p>
                  <strong>Endereço:</strong> Rua dos Anjos, 123 - Recife, PE
               </p>
            </div>

            <div className={styles.footerRight}>
               <a
                  href="https://wa.me/5581982295333"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaWhatsapp className={styles.icon} />
               </a>
               <a
                  href="https://instagram.com/anjos_depatas4 "
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaInstagram className={styles.icon} />
               </a>
               <a href="mailto:adequatropatas86@gmail.com">
                  <FaEnvelope className={styles.icon} />
               </a>
            </div>
         </div>
      </footer>
   );
}
