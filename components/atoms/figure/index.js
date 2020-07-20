import styles from './styles.module.scss';

export default function FigureComponent({ url, altProp, variantClass }) {
  return <img src={url} className={styles[variantClass]} alt={altProp} />
}