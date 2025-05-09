import styles from "./styles.module.css";

type PetCardProps = {
   name: string;
   imageUrl: string;
   bgColor?: string;
   onClick?: () => void;
};

export const PetCard = ({
   name,
   imageUrl,
   bgColor = "#ffffff",
   onClick,
}: PetCardProps) => {
   return (
      <div className={styles.cardContainer} onClick={onClick}>
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
