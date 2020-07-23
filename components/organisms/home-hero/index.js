import TitleComponent from '../../atoms/title';
import ParagraphComponent from '../../atoms/paragraph';

// ssr scroll magic has a conflict (window property)

export default function HomeBanner() {
  return (
    <section id="hero">
      <div className="homeHero">
        <TitleComponent Tag="h1" variantClass="homeHero__title">
          Producción de videos con enfoque en las buenas vistas.</TitleComponent>
        <ParagraphComponent variantClass="homeHero__paragraph">En un mundo que abunda en películas e impresiones visuales, es muy importante pensar de nuevo. Necesita vistas que marquen la diferencia.
        </ParagraphComponent>
      </div>
      <style jsx>
        {`
          .homeHero {
            position: relative;
            background: url('../assets/hero/bg.jpg');
            background-size: cover;
            background-position-y: center;
            height: 280px;
          }

          @media (min-width: 768px) {
            .homeHero {
              height: 400px;
            }
          }
        `}
      </style>
    </section>
  )
}