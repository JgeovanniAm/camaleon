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
      .on('enter', () => Array.from(elem.children).map(i => i.classList.add(styles.cardEffectShow)))
      .on('leave', () => Array.from(elem.children).map(i => i.classList.remove(styles.cardEffectShow)))
      .addTo(controller);
  }

  return (
    <div ref={GalaryTag} id="galeryscroll" className={styles.heroGaleryHome}>
      <div id="cards-galery" className={styles.cardEffect}>
        <LazyLoad height={'auto'}>
          <FigureComponent url="https://instagram.fsjo12-1.fna.fbcdn.net/v/t51.2885-15/e35/69489793_451475715453003_191622971838686452_n.jpg?_nc_ht=instagram.fsjo12-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=alXC--hjs1IAX-3CcxL&oh=9434326f924eefd4c3e6a8eaf5fe95bd&oe=5F3E6565" altProp="" />
        </LazyLoad>
      </div>
      <div className={styles.cardEffect}>
        <LazyLoad height={'auto'}>
          <FigureComponent url="https://instagram.fsjo12-1.fna.fbcdn.net/v/t51.2885-15/e35/67727157_183499736022398_8300090156652431879_n.jpg?_nc_ht=instagram.fsjo12-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=H-490MXJZeIAX_sf6uN&oh=ee449c25e5504f5a13bcdc5a7ebbd193&oe=5F3DEA9C" altProp="" />
        </LazyLoad>
      </div>
    </div>
  )
}