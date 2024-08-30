import SignupLayout from "../features/authentication/SignupLayout";

function Signup() {
  useEffect(() => {
    document.title = "Create Account | To get Started create an account";
  }, []);
  return (
    <main>
      <SignupLayout />
    </main>
  );
}

export default Signup;
