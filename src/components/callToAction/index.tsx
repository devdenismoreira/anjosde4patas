import styles from "./styles.module.css";

export const CallToAction = () => {
   return (
      <section className={styles.container}>
         <div className={styles.textSection}>
            <h2>Quer fazer a diferença?</h2>
            <p>
               Ajude a transformar vidas com amor e cuidado - doe e faça parte
               da mudança na vida um pet resgatado!
            </p>
            <button className={styles.button}>
               Ajude a ONG Anjos de 4 Patas!
            </button>
         </div>
         <div className={styles.imagesSection}>
            <img
               src={
                  "http://www.uipa.org.br/wp-content/uploads/2015/01/doacao.png"
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
                  "http://www.uipa.org.br/wp-content/uploads/2015/01/limpeza.png"
               }
               alt="Porco"
               className={styles.image}
            />
         </div>
      </section>
   );
};
