import styles from './styles.module.scss';

export default function VimeoComponent() {
  return (
    <div className={styles.VimeoComponent}>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/439454014" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
    </div>
  )
}