import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import styles from "./styles.module.css";

type Pet = {
   nome: string;
   imagem: string;
   idade: string;
   sexo: string;
   descricao: string;
};

type PetInfoCardProps = {
   pet: Pet;
};

const PetInfoCard: React.FC<PetInfoCardProps> = ({ pet }) => {
   const handleAdotarClick = () => {
      const numero = "5581982295333";
      const mensagem = `Olá! Tenho interesse em adotar o(a) ${pet.nome}.`;
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(
         mensagem
      )}`;
      window.open(url, "_blank");
   };

   return (
      <div className={styles.card}>
         <img
            src={pet.imagem}
            alt={`Foto de ${pet.nome}`}
            className={styles.image}
         />

         <div className={styles.info}>
            <h2 className={styles.name}>{pet.nome}</h2>
            <p className={styles.detail}>
               <strong>Idade:</strong> {pet.idade}
            </p>
            <p className={styles.detail}>
               <strong>Sexo:</strong> {pet.sexo}
            </p>
            <p className={styles.description}>{pet.descricao}</p>

            <button className={styles.adoptButton} onClick={handleAdotarClick}>
               <FaHandHoldingHeart size={18} />
               Adotar
            </button>
         </div>
      </div>
   );
};

export default PetInfoCard;
