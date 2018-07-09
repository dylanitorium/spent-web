export const routes = ({
  auth: {
    index: '/auth',
    sign_in: {
      index: '/auth/sign-in',
      email: '/auth/sign-in/email'
    },
    sign_up: {
      index: '/auth/sign-up',
      email: '/auth/sign-up/email'
    },
  },
  dashboard: '/dashboard',
});

export const AUTHENTICATED = routes.dashboard;
export const UNAUTHENTICATED = routes.auth.index;
