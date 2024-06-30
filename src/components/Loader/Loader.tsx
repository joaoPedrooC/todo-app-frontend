import merry from '../../assets/sunny.png'

import styles from './style.module.scss'

export const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <div>
        <img src={merry} />
      </div>
    </div>
  )
}