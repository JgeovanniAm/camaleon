import styles from './styles.module.scss';
import Link from 'next/link';

export default function SocialComponent() {
  return (
    <div className={styles.socialElement}>
      <Link href="https://www.facebook.com/camaleonfilmcompany/" prefetch={false}>
        <a>
          <img src="../assets/icons-desktop/facebook-desktop.png" />
        </a>
      </Link>
      <Link href="https://instagram.com/camaleonfilmcompany?igshid=hhb5vvnyy492" prefetch={false}>
        <a>
          <img src="../assets/icons-desktop/instagram-desktop.png" />
        </a>
      </Link>
      <Link href="https://vimeo.com/camaleonfilmcompany" prefetch={false}>
        <a>
          <img src="../assets/icons-desktop/vimeo-desktop.png" />
        </a>
      </Link>
    </div>
  )
}