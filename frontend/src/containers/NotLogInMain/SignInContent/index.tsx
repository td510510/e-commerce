import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import GoogleIcon from '../../../../public/icons/google.svg'
import TwitterIcon from '../../../../public/icons/twitter.svg'
import styles from '../notLogInMain.module.scss'

const SignInContent = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.buttons}>
        <Button content='Continue With Google' type='full' icon={<GoogleIcon />} />
        <Button content='Continue With Twitter' type='full' icon={<TwitterIcon />} />
      </div>
      <div className={styles.or}>
        <span className={styles.leftLine}></span>
        <span className={styles.text}>OR</span>
        <span className={styles.rightLine}></span>
      </div>
      <div className={styles.inputs}>
        <Input type='text' id='username' label='User name or email address' />
        <Input type='password' id='password' label='Password' />
      </div>
      <Link href='/reset-password' className={styles.forgot}>Forget your password</Link>
      <div className={styles.submit}>
        <Button content='Sign In' type='default' option='primary' />
        <div className={styles.notice}>
          Don’t have an account? <Link href='/sign-up'> Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignInContent