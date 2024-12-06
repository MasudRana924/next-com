'use client';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const AuthForm = ({ 
  title, 
  buttonText, 
  onSubmit, 
  altText, 
  altLinkText, 
  altLinkHref 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add Google login logic here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    // Add Facebook login logic here
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center ">{title}</h2>
      
      {/* Social Login Buttons */}
      <div className="md:flex justify-between gap-3 mb-6 mt-4">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 w-full"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={20} />
          Login with Google
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 w-full mt-4 md:mt-0"
          onClick={handleFacebookLogin}
        >
          <FaFacebook size={20} className="text-blue-600" />
          Login with Facebook
        </Button>
      </div>

      {/* Horizontal Rule with "or" */}
      <div className="relative flex items-center mb-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-gray-500 font-medium">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Email and Password Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <Button type="submit" className="w-full " variant="indigo">
          {buttonText}
        </Button>
      </form>

      {/* Alternate Navigation Link */}
      <p className="mt-4 text-center text-sm text-gray-600">
        {altText}{' '}
        <Link href={altLinkHref}>
          <span className="text-indigo-500 font-medium hover:underline">{altLinkText}</span>
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
