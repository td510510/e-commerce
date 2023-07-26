import { FC } from 'react'
import Image from 'next/image'
import styles from './notLogInMain.module.scss'
import SignInContent from './SignInContent'
import SignUpContent from './SignUpContent'
import ResetPasswordContent from './ResetPasswordContent'
import CheckEmailContent from './CheckEmailContent'
import VerificationContent from './VerificationContent'
import NewPasswordContent from './NewPasswordContent'

interface NotLogInMainProps {
  type: 'sign-up' | 'sign-in' | 'reset-password' | 'check-email' | 'check-mail' | 'verification' | 'new-password'
  title: string
}

const typeMapping = new Map(
  [
    ['sign-in', <SignInContent key='sign-in' />],
    ['sign-up', <SignUpContent key='sign-up' />],
    ['reset-password', <ResetPasswordContent key='reset-password' />],
    ['check-email', <CheckEmailContent key='check-email' />],
    ['verification', <VerificationContent key='verification' />],
    ['new-password', <NewPasswordContent key='new-password' />],
  ]
)

const imageMapping = new Map([
  ['sign-in', '/images/sign-in.png'],
  ['sign-up', '/images/sign-up.png'],
  ['reset-password', '/images/reset-password.png'],
  ['check-email', '/images/check-email.png'],
  ['verification', '/images/verification.png'],
  ['new-password', '/images/new-password.png'],
])

const NotLogInMain: FC<NotLogInMainProps> = ({ type, title }) => {
  return (
    <main className={styles.container}>
      <div className={styles.section}>
        <div className={styles.imgWrap}>
          <Image className={styles.img} src={imageMapping.get(type) || ''} alt='log in' fill />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          {typeMapping.get(type)}
        </div>
      </div>
    </main>
  )
}

export default NotLogInMain