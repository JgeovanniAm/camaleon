import { useEffect, useRef } from 'react';
import TitleComponent from '../../atoms/title';
import styles from './styles.module.scss';

export default function TitleAnimated() {
  const titleanimated = useRef();

  useEffect(() => {
    scrollMagicInit();
  }, []);

  function scrollMagicInit() {
    const child = titleanimated.current;
    child.children[0].className = styles.showAnimated;
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({ triggerElement: "#herobanner-home", triggerHook: '0.5', offset: 20, duration: 600 })
      .setClassToggle('#herobanner-home h2', `${styles.titleAnimatedHome}`)
      .addTo(controller);
  }
  return (
    <div id="herobanner-home" ref={titleanimated} className={`${styles.bgHeroHome} u-showForMediumUp`}>
      <TitleComponent Tag="h2">Camaleon</TitleComponent>
    </div>
  )
}