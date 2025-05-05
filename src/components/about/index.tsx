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
               Lorem ipsum dolor sit amet,{" "}
               <strong>consectetur adipiscing elit</strong>. Quisque fermentum
               dolor vitae neque ullamcorper, ut fringilla orci condimentum.
               Desde 2010, promovemos ações em prol da{" "}
               <strong>conscientização sobre os direitos dos animais</strong>.
            </p>
            <p>
               Nossa missão é <strong>educar e proteger</strong> os animais por
               meio de ações voluntárias, adoções responsáveis e programas
               educativos.
            </p>
            <p>
               Por meio de{" "}
               <strong>
                  parcerias com escolas, comunidades e órgãos públicos
               </strong>
               , buscamos transformar a realidade de animais em situação de
               abandono.
            </p>

            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
               ever since the 1500s, when an unknown printer took a galley of
               type and scrambled it to make a type specimen book. It has
               survived not only five centuries, but also the leap into
               electronic typesetting, remaining essentially unchanged. It was
               popularised in
            </p>
            <p>Junte-se a nós e faça parte dessa mudança!</p>
         </div>
      </section>
   );
}
