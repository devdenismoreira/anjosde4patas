import styles from "./styles.module.css";
import logo from "../../../assets/logoanjos.png";

export function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.topBar}>
            <img
               src={logo}
               alt="Logo Anjos de 4 Patas"
               className={styles.logo}
            />
            <nav className={styles.nav}>
               <a href="#about">Quem somos</a>
               <a href="#testimonials">Depoimentos</a>
               <a href="#volunteer">Voluntários</a>
               <a href="#partners">Parceiros</a>
               <a
                  href="#callToAction"
                  style={{ color: "var(--primary)" }}
                  className={styles.donateButton}
               >
                  Doar
               </a>
            </nav>
         </div>

         <div className={styles.hero}>
            <div className={styles.texts}>
               <div>
                  <h4>Transforme o mundo com</h4>
                  <h1>
                     UM SIM
                     <br />À ADOÇÃO
                  </h1>
                  <div className={styles.buttons}>
                     <button>DOAR</button>
                     <button>SAIBA MAIS</button>
                  </div>
               </div>
               <div>
                  <img
                     className={styles.imgContet}
                     src={logo}
                     alt="Logo Anjos de 4 Patas"
                  />
               </div>
            </div>
         </div>
      </header>
   );
}
