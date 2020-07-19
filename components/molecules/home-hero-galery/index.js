import { useEffect, useRef } from 'react';
import FigureComponent from '../../atoms/figure';
import LazyLoad from 'react-lazyload';
import styles from './styles.module.scss';

export default function GaleryComponent() {
  const GalaryTag = useRef();

  useEffect(() => {
    scrollMagicInit();
  }, []);

  function scrollMagicInit() {
    const elem = GalaryTag.current;
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({ triggerElement: "#galeryscroll", triggerHook: '0.5', offset: -50, duration: `${elem.offsetHeight}+50` })
      .on('enter', () => Array.from(elem.children).map(i => i.classList.add(styles.cardShine)))
      .addTo(controller);

  }

  return (
    <div ref={GalaryTag} id="galeryscroll" className={styles.heroGaleryHome}>
      <div className={styles.cardHide_shine}>
        <LazyLoad height={'auto'}>
          <FigureComponent url="https://usercontent.one/wp/www.vjus.no/wp-content/uploads/2019/09/vjus-arkitektur-showreel.jpg" altProp="" variantClass="" />
        </LazyLoad>
      </div>
      <div className={styles.cardHide_shine}>
        <LazyLoad height={'auto'}>
          <FigureComponent url="https://usercontent.one/wp/www.vjus.no/wp-content/uploads/2020/01/Making-a-Film-Company-poster.jpg" altProp="" variantClass="" />
        </LazyLoad>
      </div>
    </div>
  )
}