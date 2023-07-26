import Button from '@/components/Button'
import styles from '../notLogInMain.module.scss'
import Input from '@/components/Input'

const NewPasswordContent = () => {
  return (
    <div className={styles.newPassword}>
      <p className={styles.sub}>Your new password must be different from previous used passwords.</p>
      <div className={styles.inputs}>
        <Input type='password' id='password' label='Password' />
        <Input type='password' id='new-password' label='Confirm Password' />
      </div>
      <div className={styles.submit}>
        <Button content='Reset Password' type='default' option='primary' />
      </div>
    </div>
  )
}

export default NewPasswordContent