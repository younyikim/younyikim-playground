/**
 * @description API endpoint를 정의한 객체
 */
export const apiEndpoints = {
  auth: {
    signIn: 'auth/sign-in',
    signOut: 'auth/sign-out',
    token: 'auth/token',
    verify: 'auth/verify',
  },
  admin: {
    status: '/status',
  },
};
