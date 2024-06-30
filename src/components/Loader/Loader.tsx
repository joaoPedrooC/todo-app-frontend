import merry from '../../assets/merry.png'

import styles from './style.module.scss'

export const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <div>
        <img src={merry} alt='Going Merry navigating' />
        <div></div>
      </div>
    </div>
  )
}