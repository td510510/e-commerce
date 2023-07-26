'use client'
import { FC, useState } from 'react'
import HideViewIcon from '../../../public/icons/hide-view.svg'
import ShowViewIcon from '../../../public/icons/show-view.svg'
import styles from './input.module.scss'

interface InputProps {
  label: string,
  type: string,
  id: string,
  placeholder?: string
  option?: string
}

const Input: FC<InputProps> = ({ label, type, id, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const togglePasswordView = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <label htmlFor={id}>{label}</label>
        {type === 'password' ? <div className={styles.function} onClick={togglePasswordView}>
          {
            isShowPassword ?
              <>
                <div className={styles.icon}><ShowViewIcon /></div>
                <div className={styles.text}>Show</div>
              </>
              :
              <>
                <div className={styles.icon}><HideViewIcon /></div>
                <div className={styles.text}>Hide</div></>
          }
        </div> : ''}
      </div>
      <input type={isShowPassword ? 'text' : type} name={id} id={id} placeholder={placeholder} />
    </div>
  )
}

export default Input