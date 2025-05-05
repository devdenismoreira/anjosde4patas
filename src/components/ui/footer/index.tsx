import styles from "./styles.module.css";
import { FaGithub } from "react-icons/fa";

export function Footer() {
   return (
      <footer className={styles.footer}>
         <p>Cloudged - Teste Técnico Desenvolvedor</p>
         <a href="https://github.com/Denis-moreira98" target="_blank">
            <strong>Denis Moreira</strong>{" "}
            <FaGithub size={20} color="#121212" />
         </a>
      </footer>
   );
}
