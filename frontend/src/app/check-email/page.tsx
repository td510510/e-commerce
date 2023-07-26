import NotLogInMain from "@/components/NotLogInMain"
import SignUpHeader from "@/components/SignUpHeader"

const ResetPassword = () => {
  return (
    <>
      <SignUpHeader />
      <NotLogInMain type='check-email' title='Check Email' />
    </>
  )
}

export default ResetPassword