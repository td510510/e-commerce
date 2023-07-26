'use client'
import { FC } from 'react'
import Link from 'next/link'
import styles from './button.module.scss'
import { usePathname } from 'next/navigation'

interface ButtonProps {
  content: string
  handleClick?: () => void
  type: 'link' | 'default' | 'full'
  pathname?: string
  icon?: React.ReactNode
  option?: string
}

const Button: FC<ButtonProps> = ({ content, handleClick, type, pathname, icon, option }) => {
  const path = usePathname()

  return (
    <>
      {
        type === 'link' ?
          <Link href={pathname ? pathname : ''} className={`${styles.button} ${path === pathname ? styles.active : ''}`
          }>
            {content}
          </ Link> :
          <button onClick={handleClick} className={`${styles.button} ${option === 'primary' ? styles.active : ''} ${type === 'full' ? styles.full : ''}`}>
            {icon ? <span style={{ marginRight: 12 }}>{icon}</span> : ''}
            <span>{content}</span>
          </button >
      }
    </>
  )
}

export default Button