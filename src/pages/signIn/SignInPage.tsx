import * as React from 'react';
import { UserLayout } from '../../layouts/userLayout';
import { SignInForm } from './SignForm';

interface ISignInPageProps {
}

export const SignInPage: React.FC = () => {
  return<UserLayout>
     <SignInForm/>
  </UserLayout>;
};
