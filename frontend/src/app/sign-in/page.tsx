import NotLogInMain from '@/containers/NotLogInMain'
import SignUpHeader from '@/components/SignUpHeader'

const SignIn = () => {
  return (
    <>
      <SignUpHeader />
      <NotLogInMain type='sign-in' title='Sign In Page' />
    </>
  )
}

export default SignIn