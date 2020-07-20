import HeaderComponent from '../organisms/header';
import FooterComponent from '../organisms/footer';
import styles from './styles.module.scss';

export default function MainLayout({ children }) {
  return (
    <div id="main-layout">
      <header className={styles.wrapperHeader}>
        <HeaderComponent />
      </header>
      <main> {children} </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  )
}