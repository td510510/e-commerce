import NotLogInMain from "@/containers/NotLogInMain"
import SignUpHeader from "@/components/SignUpHeader"

const Verify = () => {
  return (
    <>
      <SignUpHeader />
      <NotLogInMain type='verification' title='Verification' />
    </>
  )
}

export default Verify