import styles from "./styles.module.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
               <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:anjosde4patas@recife.pe.gov.br">
                     anjosde4patas@recife.pe.gov.br
                  </a>
               </p>
               <p>
                  <strong>Telefone:</strong> (81) 99999-9999
               </p>
               <p>
                  <strong>Endereço:</strong> Rua dos Anjos, 123 - Recife, PE
               </p>
            </div>

            <div className={styles.footerRight}>
               <a
                  href="https://wa.me/5581999999999"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaWhatsapp className={styles.icon} />
               </a>
               <a
                  href="https://instagram.com/anjosde4patas"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FaInstagram className={styles.icon} />
               </a>
               <a href="mailto:anjosde4patas@recife.pe.gov.br">
                  <FaEnvelope className={styles.icon} />
               </a>
            </div>
         </div>
      </footer>
   );
}
