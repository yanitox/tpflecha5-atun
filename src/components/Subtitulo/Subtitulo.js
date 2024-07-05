
import styles from './Subtitulo.module.css';
const Subtitulo = ({ texto }) => {
  return <h2 className={styles.Subtitulo}>{texto}</h2>;
}

export default Subtitulo;