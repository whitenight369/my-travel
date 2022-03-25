import * as React from 'react';
import { UserLayout } from '../../layouts/userLayout';
import { RegisterForm } from './RegisterForm';

interface RegisterPageProps {
}

export const RegisterPage: React.FC = () => {
  return <UserLayout>
    <RegisterForm/>
  </UserLayout> ;
};
