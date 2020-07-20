import styles from './styles.module.scss';

export default function ParagraphComponent({ children, variantClass }) {
  return <p className={styles[variantClass]}>{children}</p>
}