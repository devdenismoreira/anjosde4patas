import styles from "./styles.module.css";
import { FaWhatsapp } from "react-icons/fa";

export function ContactSection() {
   return (
      <section className={styles.contactSection}>
         <h2 className={styles.title}>Fale Conosco</h2>

         <div className={styles.contactBox}>
            <div className={styles.emailInfo}>
               <strong>Nossos contatos:</strong>
               <p>
                  E-mail:{" "}
                  <a href="mailto:adequatropatas86@gmail.com">
                     Adequatropatas86@gmail.com
                  </a>
               </p>
            </div>

            <a
               href="https://wa.me/5581982295333"
               target="_blank"
               rel="noopener noreferrer"
               className={styles.whatsappButton}
            >
               <FaWhatsapp style={{ marginRight: "8px" }} />
               Whatsapp
            </a>
         </div>
      </section>
   );
}
