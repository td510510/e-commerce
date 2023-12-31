import NotLogInMain from '@/containers/NotLogInMain'
import SignUpHeader from '@/components/SignUpHeader'

const SignUp
  = () => {
    return (
      <>
        <SignUpHeader />
        <NotLogInMain type='sign-up' title='Sign Up' />
      </>
    )
  }

export default SignUp
