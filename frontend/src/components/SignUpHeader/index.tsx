import Image from "next/image"
import Button from "../Button"
import styles from './signUpHeader.module.scss'

const SignUpHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image src='/images/logo.png' width={91} height={45} alt="Logo" />
        <div className={styles.buttons}>
          <Button content="Login" type='link' pathname='/sign-in' />
          <Button content="Sign Up" type='link' pathname='/sign-up' />
        </div>
      </nav>
    </header>
  )
}

export default SignUpHeader