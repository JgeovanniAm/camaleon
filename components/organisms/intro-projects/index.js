import TitleComponent from '../../atoms/title';
import styles from './styles.module.scss';
import ProjectComponent from '../../molecules/project-component';
import Link from 'next/link';

export default function IntroProject() {
  // ProjectComponent cms => for each item

  return (
    <section id="projects" className={styles.introProject}>
      <div id={styles.wrapper} className="u-container">
        <TitleComponent Tag="h2" variantClass="u-titlePrimary">PROYECTOS</TitleComponent>
        <div className={styles.wrapperProjects}>
          <ProjectComponent bg="https://instagram.fsjo12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/81776944_1322030808002616_651472672983228526_n.jpg?_nc_ht=instagram.fsjo12-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=CN51BBxihd4AX9oQ0o4&oh=1091a923ab52d2a197dfe0883a7ec019&oe=5F3DD9AD">
            <TitleComponent Tag="h3" variantClass="projectItem__title">Monteverde Volcano Lodge</TitleComponent>
            <Link href="https://player.vimeo.com/video/439454014" prefetch={false}>
              <a className="u-cta">ver projecto</a>
            </Link>
          </ProjectComponent>
          <ProjectComponent bg="https://instagram.fsjo12-1.fna.fbcdn.net/v/t51.2885-15/e35/107462686_199305948195397_2838328198275528385_n.jpg?_nc_ht=instagram.fsjo12-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=aGaAeYl78zsAX9o3N3z&oh=d3c8498f4bfc7a5ecdbca4eae5923eec&oe=5F3CDBBB">
            <TitleComponent Tag="h3" variantClass="projectItem__title">Precisión Salas</TitleComponent>
            <Link href="https://vimeo.com/431981623" prefetch={false}>
              <a className="u-cta">ver projecto</a>
            </Link>
          </ProjectComponent>
        </div>
        {
          /*<Link href="/projectos">
           <a className={`${styles.seeMore} u-cta--secondary`}>ver mas projectos</a>
           </Link>*/
        }
      </div>
    </section>
  )
}

