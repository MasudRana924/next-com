'use client';
import AuthForm from "@/components/auth-form/AuthForm";

const Login = () => {
  const handleLogin = (data) => {
    console.log('Login Data:', data);
    // Implement login logic here
  };

  return (
    <div className="mt-24 md:mt-44 w-3/4 mx-auto">
      <AuthForm
        title="Login"
        buttonText="Log In"
        onSubmit={handleLogin}
        altText="Don't have an account?"
        altLinkText="Create"
        altLinkHref="/signup"
      />
    </div>
  );
};

export default Login;
