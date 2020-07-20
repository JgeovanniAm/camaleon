import styles from './styles.module.scss';
import SocialComponent from '../../molecules/social/index';
import TitleComponent from '../../atoms/title';
import ParagraphComponent from '../../atoms/paragraph';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <TitleComponent Tag="h3" variantClass="footerTitle">camaleon film</TitleComponent>
      <SocialComponent />
      <ParagraphComponent variantClass="footerParagraph">San José, Costa Rica</ParagraphComponent>
      <ParagraphComponent variantClass="footer_text">
        8461-4168
      </ParagraphComponent>
      <ParagraphComponent variantClass="footer_text">
        camaleonfilmcompany@gmail.com
      </ParagraphComponent>

    </footer>
  )
}