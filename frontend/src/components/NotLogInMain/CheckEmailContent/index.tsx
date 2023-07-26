import Button from '@/components/Button'
import styles from '../notLogInMain.module.scss'
import Input from '@/components/Input'
import Link from 'next/link'

const CheckEmailContent = () => {
  return (
    <div className={styles.checkEmail}>
      <p className={styles.sub}>Please check your email inbox and click on the provided link to reset your
        password . If you don’t receive email, <Link href='/reset-password' className={styles.resend}>Click here to resend</Link></p>
      <div className={styles.submit}>
        <div className={styles.notice}>
          Back to <Link href='/sign-in'>Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default CheckEmailContent