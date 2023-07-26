import Button from '@/components/Button'
import styles from '../notLogInMain.module.scss'
import Input from '@/components/Input'

const VerificationContent = () => {
  return (
    <div className={styles.verification}>
      <p className={styles.sub}>Verify your code.</p>
      <div className={styles.inputs}>
        <Input type='text' id='verify' label='Verification Code ' />
      </div>
      <div className={styles.submit}>
        <Button content='Verify Code' type='default' option='primary' />
      </div>
    </div>
  )
}

export default VerificationContent