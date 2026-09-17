'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ADMIN_EMAIL = 'admin@fitlife.com';
const ADMIN_PASSWORD = 'admin123';

export async function loginAdmin(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // Set a cookie that expires in 1 day
    (await cookies()).set('admin_token', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    
    return { success: true };
  }
  
  return { success: false, error: 'Invalid credentials' };
}

export async function logoutAdmin() {
  (await cookies()).delete('admin_token');
  redirect('/admin/login');
}
