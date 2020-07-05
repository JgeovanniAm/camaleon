import HeaderComponent from '../organisms/header';
import FooterComponent from '../organisms/footer';

export default function MainLayout() {
  return (
    <div id="main-layout" className="container">
      <header className="wrapper-header">
        <HeaderComponent />
      </header>
      <main>
        hellow world
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  )
}