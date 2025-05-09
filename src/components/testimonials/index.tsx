import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials } from "./testimonials";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.css";
import { FaStar } from "react-icons/fa";

export function Testimonials() {
   return (
      <section className={styles.testimonialsSection}>
         <div className={styles.leftContent}>
            <h2>O que estão falando sobre a gente?</h2>
            <p>
               Amor quanto mais se divide, mais se multiplica. Adotou por meio
               da Anjos de 4 Patas e quer compartilhar sua experiência? <br />
               Estamos ansiosos para conhecer sua história e inspirar outras
               pessoas!
               <br />
               Envie o seu depoimento para a gente.
            </p>
         </div>

         <div className={styles.sliderWrapper}>
            <Swiper
               slidesPerView={2}
               spaceBetween={20}
               pagination={{ clickable: true }}
               modules={[Pagination]}
               breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
               }}
            >
               {testimonials.map((t, index) => (
                  <SwiperSlide key={index}>
                     <div className={styles.card}>
                        <div className={styles.profile}>
                           <img src={t.image} alt={t.name} />
                           <div>
                              <strong>{t.name}</strong>
                              <span>{t.role}</span>
                           </div>
                        </div>
                        <p className={styles.text}>{t.text}</p>
                        <div className={styles.stars}>
                           {Array(5).fill(<FaStar color="#F59E0B" />)}
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
}
