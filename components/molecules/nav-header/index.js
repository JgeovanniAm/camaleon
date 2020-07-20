import Link from 'next/link';
import routesData from '../../../settings/data/routes.json';
import styles from './styles.module.scss';

export default function NavComponent({ toggleFunct, variantClass }) {
  const renderNav = ({ routes }) => (
    routes.map((route, i) => (
      <li className={styles.nav__item} key={i}>
        <Link href={route.path}>
          <a onClick={toggleFunct}>{route.value}</a>
        </Link>
      </li>
    )))

  return (
    <>
      <nav className="nav">
        <ul className="nav__list">{routesData && renderNav(routesData)}</ul>
      </nav>
      <style jsx>{`
        .nav {
          background: black;
          height: ${variantClass ? '250px' : '0'};
          left: 0;
          margin: 0;
          padding: 0;
          position: absolute;
          right: 0;
          top: 104px;
          transition: height .6s, visibility .6s ease-in-out;
          visibility: visible;
          width: 100vw;
          z-index: 2;
          font-size: 15px;
        }

        .nav__list {
          opacity: ${variantClass ? '1' : '0'};
          padding: 0.5em 2em;
          text-align: center;
          transform:  ${variantClass ? 'translateY(0%)' : 'translateY(-200%)'};
          transition: opacity 1s ease-in-out;
        }
        
        @media (min-width: 768px) {
          .nav {
            display: block;
            height: auto;
            opacity: 1;
            padding: 5px;
            position: initial;
            visibility: 'visible';
            width: 100%;
          }

          .nav__list {
            margin: 0;
            opacity: 1;
            padding: 0;
            text-align: center;
            transform: translateY(0%);
            transition: 0;
          }
        } 
      `}</style>
    </>
  )
}