import TitleComponent from '../../atoms/title';
import styles from './styles.module.scss';
import ProjectComponent from '../../molecules/project-component';
import Link from 'next/link';

export default function IntroProject() {
  // ProjectComponent cms => for each item

  return (
    <section className={styles.introProject}>
      <div className="u-container">
        <TitleComponent Tag="h2" variantClass="u-titlePrimary">PROYECTOS</TitleComponent>
        <div className={styles.wrapperProjects}>
          <ProjectComponent bg="https://usercontent.one/wp/www.vjus.no/wp-content/uploads/2019/09/vjus-ifootage-wildcat-reklamefilm.jpg">
            <TitleComponent Tag="h3" variantClass="projectItem__title">IFOOTAGE CORPORATE</TitleComponent>
            <Link href="#">
              <a className="u-cta">ver projecto</a>
            </Link>
          </ProjectComponent>
          <ProjectComponent bg="https://usercontent.one/wp/www.vjus.no/wp-content/uploads/2019/11/sk%C3%B8rn.jpg">
            <TitleComponent Tag="h3" variantClass="projectItem__title">SK_øRN STORE</TitleComponent>
            <Link href="https://www.verizon.com/personal-home/?wireline_gn_exp=1" prefetch={false}>
              <a className="u-cta">ver projecto</a>
            </Link>
          </ProjectComponent>
        </div>
        <Link href="/projectos">
          <a className={`${styles.seeMore} u-cta--secondary`}>ver mas projectos</a>
        </Link>
      </div>
    </section>
  )
}

