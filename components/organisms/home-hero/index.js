import styles from './styles.module.scss';
import TitleComponent from '../../atoms/title';
import ParagraphComponent from '../../atoms/paragraph';
import dynamic from 'next/dynamic'

// ssr scroll magic has a conflict (window property)
const AnimatedTitleDynamic = dynamic(() => import('../../molecules/home-hero-animatedTitle'), {
  ssr: false
});

const GaleryDynamic = dynamic(() => import('../../molecules/home-hero-galery'), {
  ssr: false
});



export default function HomeBanner() {
  return (
    <section>
      <div className={`${styles.homeHero} u-container`}>
        <TitleComponent Tag="h1" variantClass="homeHero__title">Film and video production with focus on the good views</TitleComponent>
        <ParagraphComponent variantClass="homeHero__paragraph">I en verden som florerer av film og visuelle inntrykk er det ekstra viktig å tenke nytt. Du trenger visninger som gjør en forandring.
        La oss kalle det vjus.
        </ParagraphComponent>
        <GaleryDynamic />
      </div>
      <AnimatedTitleDynamic />
    </section>
  )
}