import styles from "./styles.module.css";

export function About() {
   return (
      <section className={styles.aboutSection}>
         <div className={styles.imageContainer}>
            <img
               src={
                  "https://www.estadao.com.br/resizer/WrWHzl9peGx1SDr_KVwUpNBq5Mo=/arc-anglerfish-arc2-prod-estadao/public/U3E65TYLKZJVRMGZZ7VPPOREUI.jpg"
               }
               alt="Voluntária com cachorro"
               className={styles.image}
            />
         </div>
         <div className={styles.textContainer}>
            <p>
               Criada em 2015 pela Dra. Laura Ferraz, a Anjos do Poço é uma ONG
               independente, sem vínculos políticos, que atua na proteção dos
               direitos dos animais e na conservação ambiental. Com dedicação,
               responsabilidade e afeto, acolhemos animais vítimas de abandono
               ou maus-tratos, oferecendo atendimento veterinário, abrigo
               provisório e a possibilidade de uma nova vida por meio da adoção
               consciente..
            </p>
            <p>
               Nossa atuação vai muito além do salvamento dos animais.
               Acreditamos em uma sociedade mais justa e equilibrada, por isso
               também oferecemos apoio a catadores de recicláveis e protetores
               autônomos, incentivando atitudes sustentáveis que integram o
               cuidado animal, a responsabilidade social e a preservação
               ambiental.
            </p>
            <p>
               Com uma estrutura ética e moderna, que inclui espaços individuais
               para os animais e serviços de qualidade, nosso objetivo é
               transformar realidades – tanto humanas quanto animais – com
               empatia, respeito e informação. Nossa missão é fomentar uma
               convivência harmoniosa entre pessoas, animais e natureza,
               valorizando a vida em todas as suas formas.
            </p>
         </div>
      </section>
   );
}
