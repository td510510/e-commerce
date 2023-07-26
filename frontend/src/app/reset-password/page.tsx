import NotLogInMain from "@/containers/NotLogInMain"
import SignUpHeader from "@/components/SignUpHeader"

const ResetPassword = () => {
  return (
    <>
      <SignUpHeader />
      <NotLogInMain type='reset-password' title='Reset Your Password' />
    </>
  )
}

export default ResetPassword