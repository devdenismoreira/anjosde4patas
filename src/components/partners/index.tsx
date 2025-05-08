import styles from "./styles.module.css";
import { partners } from "./partners";

export function Partners() {
   return (
      <div className={styles.partnersContainer}>
         {partners.map((partner) => (
            <>
               <img
                  key={partner.id}
                  className={styles.partnersLogo}
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
               />
            </>
         ))}
      </div>
   );
}
