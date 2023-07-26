import NotLogInMain from "@/containers/NotLogInMain"
import SignUpHeader from "@/components/SignUpHeader"

const NewPassword = () => {
  return (
    <>
      <SignUpHeader />
      <NotLogInMain type='new-password' title='Create New Password' />
    </>
  )
}

export default NewPassword