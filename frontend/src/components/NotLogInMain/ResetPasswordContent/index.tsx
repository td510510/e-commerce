import Button from '@/components/Button'
import styles from '../notLogInMain.module.scss'
import Input from '@/components/Input'
import Link from 'next/link'

const ResetPasswordContent = () => {
  return (
    <div className={styles.resetPassword}>
      <p className={styles.sub}>Enter your email and we&apos;ll send you a link to reset your password. <br /> Please check it.</p>
      <div className={styles.inputs}>
        <Input type='email' id='username' label='Email Address' placeholder='designer@gmail.com' />
      </div>
      <div className={styles.submit}>
        <Button content='Send' type='default' option='primary' />
        <div className={styles.notice}>
          Back to <Link href='/sign-in'>Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordContent