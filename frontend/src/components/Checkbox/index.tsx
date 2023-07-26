import { FC } from 'react'
import styles from './checkbox.module.scss'

interface CheckboxProps {
  id: string,
  label: string
}

const CheckBox: FC<CheckboxProps> = ({ id, label }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={id} className={styles.input} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox