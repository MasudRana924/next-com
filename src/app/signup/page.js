'use client';
import AuthForm from "@/components/auth-form/AuthForm";

const Signup = () => {
  const handleSignup = (data) => {
    console.log('Signup Data:', data);
    // Implement signup logic here
  };

  return (
    <div className="mt-24 md:mt-44 w-11/12 md:w-3/4 mx-auto">
      <AuthForm
        title="Sign Up"
        buttonText="Register"
        onSubmit={handleSignup}
        altText="Already have an account?"
        altLinkText="Login"
        altLinkHref="/login"
      />
    </div>
  );
};

export default Signup;
