import styles from './styles.module.scss';
import Lazyload from 'react-lazyload';

export default function VimeoComponent() {
  return (
    <div className={styles.VimeoComponent}>
      <Lazyload>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/439454014" frameBorder="0" allowFullScreen></iframe>
      </Lazyload>
    </div>
  )
}