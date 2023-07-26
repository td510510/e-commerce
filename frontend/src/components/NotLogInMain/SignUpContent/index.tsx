import Button from '@/components/Button'
import styles from '../notLogInMain.module.scss'
import Input from '@/components/Input'
import Link from 'next/link'
import GoogleIcon from '../../../../public/icons/google.svg'
import TwitterIcon from '../../../../public/icons/twitter.svg'
import CheckBox from '@/components/Checkbox'

const SignUpContent = () => {
  return (
    <div className={styles.signUp}>
      <p className={styles.sub}>Sign up for free to access to in any of our products </p>
      <div className={styles.buttons}>
        <Button content='Continue With Google' type='full' icon={<GoogleIcon />} />
        <Button content='Continue With Twitter' type='full' icon={<TwitterIcon />} />
      </div>
      <div className={styles.inputs}>
        <Input type='email' id='email' label='Email Address' placeholder='designer@gmail.com' />
        <Input type='password' id='password' label='Password' />
      </div>
      <p className={styles.sub}>Use 8 or more characters with a mix of letters, numbers & symbols</p>
      <div className={styles.signUpCheckbox}>
        <CheckBox id='agree-privacy' label='Agree to our Terms of use and Privacy Policy ' />
        <CheckBox id='subscribe' label='Subscribe to our monthly newsletter' />
      </div>
      <div className={styles.submit}>
        <Button content='Sign Up' type='default' option='primary' />
        <div className={styles.notice}>
          Already have an account? <Link href='/sign-in'>Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpContent