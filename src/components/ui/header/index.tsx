import styles from "./styles.module.css";

export function Header() {
   return (
      <header className={styles.header}>
         <img
            src={
               "https://super.abril.com.br/wp-content/uploads/2019/04/si_cachorroinstagram_home.png?crop=1&resize=1212,909"
            }
            alt="Logo Salvus"
         />
      </header>
   );
}
