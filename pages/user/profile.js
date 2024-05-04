import React, { useEffect } from 'react';
import Navbar from '../../widgets/navbar/UI/NavbarMenu';
import UserProfileName from '../../entities/user-profile-name/UserProfileName';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/user/login');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <UserProfileName />
    </div>
  );
}
