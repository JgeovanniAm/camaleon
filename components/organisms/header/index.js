import { useState } from 'react';
import NavComponent from '../../molecules/nav-header';
import FigureComponent from '../../atoms/figure';
import ButtonNavComponent from '../../molecules/btn-nav';
import styles from './styles.module.scss';

export default function Header() {
  const [stateNav, setStateNav] = useState(false);

  const toggleNav = () => setStateNav(!stateNav);

  return (
    <section className={`${styles.head} u-container`}>
      <div className={styles.wrapperLogo}>
        <picture>
          <source media="(min-width:650px)" srcSet="../assets/icons-desktop/logo_camaleon-100.jpg"></source>
          <source srcSet="../assets/icons-mobile/200x-100.jpg"></source>
          <FigureComponent altPro="logo camaleon film company" />
        </picture>
      </div>

      <NavComponent variantClass={stateNav} />

      <ButtonNavComponent toggleFunct={toggleNav} handleStateNav={stateNav} />

    </section>
  )
}