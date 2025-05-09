import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

export const CallToAction = () => {
   return (
      <section className={styles.container}>
         <div className={styles.textSection}>
            <h2>Quer fazer a diferença?</h2>
            <p>
               Cada doação faz a diferença na vida de um pet resgatado.
               Contribua com ração, medicamentos ou apoio financeiro — juntos,
               podemos dar uma nova chance a quem mais precisa!
            </p>
            <a
               href="https://wa.me/SEUNUMEROAQUI" // Substitua por algo como: https://wa.me/5511999999999
               target="_blank"
               rel="noopener noreferrer"
               className={styles.whatsappButton}
            >
               <FaWhatsapp size={20} />
               Entrar em contato para doar
            </a>
         </div>
         <div className={styles.imagesSection}>
            <img
               src={
                  "https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2023/08/24/806x444/1_57311569-24050589.jpg?654abd024faae"
               }
               alt="Pata e mão"
               className={styles.image}
            />
            <img
               src={
                  "http://www.uipa.org.br/wp-content/uploads/2013/08/uipa-300x300-dog.png"
               }
               alt="Gato"
               className={styles.image}
            />
            <img
               src={
                  "https://chefbob.com.br/wp-content/uploads/2020/10/2020-10-16-problemas-de-pele-em-gatos.jpg"
               }
               alt="Porco"
               className={styles.image}
            />
         </div>
      </section>
   );
};
