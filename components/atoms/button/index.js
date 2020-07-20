import styles from './styles.module.scss';

export default function ButtonComponent({ children, variantClass, ariaLabel, funct }) {
  return (
    <button className={styles[variantClass]} aria-label={ariaLabel} onClick={funct}>
      {children}
    </button>
  )
}