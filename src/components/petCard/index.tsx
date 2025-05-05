import styles from "./styles.module.css";

type PetCardProps = {
   name: string;
   imageUrl: string;
   bgColor?: string;
};

export const PetCard = ({
   name,
   imageUrl,
   bgColor = "#ffffff",
}: PetCardProps) => {
   return (
      <div className={styles.cardContainer}>
         <div
            className={styles.imageWrapper}
            style={{ backgroundColor: bgColor }}
         >
            <img src={imageUrl} alt={name} className={styles.image} />
         </div>
         <div className={styles.name}>{name}</div>
      </div>
   );
};
