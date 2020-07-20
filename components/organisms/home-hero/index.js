import TitleComponent from '../../atoms/title';
import ParagraphComponent from '../../atoms/paragraph';
import dynamic from 'next/dynamic';
import styles from './styles.module.scss';

// ssr scroll magic has a conflict (window property)
const AnimatedTitleDynamic = dynamic(() => import('../../molecules/home-hero-animatedTitle'), {
  ssr: false
});

const GaleryDynamic = dynamic(() => import('../../molecules/home-hero-galery'), {
  ssr: false
});



export default function HomeBanner() {
  return (
    <section id="hero">
      <div className={`${styles.homeHero} u-container`}>
        <TitleComponent Tag="h1" variantClass="homeHero__title">
Producción de videos con enfoque en las buenas vistas.</TitleComponent>
        <ParagraphComponent variantClass="homeHero__paragraph">En un mundo que abunda en películas e impresiones visuales, es muy importante pensar de nuevo. Necesita vistas que marquen la diferencia. 
        </ParagraphComponent>
        <GaleryDynamic />
      </div>
      <AnimatedTitleDynamic />
    </section>
  )
}