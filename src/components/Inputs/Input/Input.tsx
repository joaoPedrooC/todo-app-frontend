import { Ref, forwardRef } from 'react';

import styles from './style.module.scss'

interface IInputProps {
  label: string
  type: string
  errors?: string | undefined
}

export const Input = forwardRef(({ label, type, errors, ...rest }: IInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={styles.input__container}>
      <label htmlFor="" className="label">{label}</label>
      <input type={type} ref={ref} {...rest} />
      { errors ? <span className='font__small--inter'>{errors}</span> : null }
    </div>
  )
})