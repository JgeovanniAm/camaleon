import styles from './styles.module.scss';

export default function TitleComponent({ Tag, children, variantClass }) {
  return <Tag className={styles[variantClass]}>{children}</Tag>
}