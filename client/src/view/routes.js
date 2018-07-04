export const routes = ({
  auth: {
    index: '/auth',
    sign_in: {
      index: '/auth/sign-in',
      email: '/auth/sign-in/email'
    },
    sign_up: '/auth/sign-up',
  },
  dashboard: '/dashboard',
});

export const AUTHENTICATED = routes.dashboard;
export const UNAUTHENTICATED = routes.auth.index;
