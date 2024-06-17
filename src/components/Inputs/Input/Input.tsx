import styles from './style.module.scss'

interface IInputProps {
  label: string
  type: string
}

export const Input = ({ label, type, ...rest }: IInputProps) => {
  return (
    <div className={styles.input__container}>
      <label htmlFor="" className="label">{label}</label>
      <input type={type} {...rest} />
    </div>
  )
}