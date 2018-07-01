export const routes = ({
  auth: {
    index: '/auth',
    sign_in: '/auth/sign-in',
    sign_up: '/auth/sign-up',
  },
  dashboard: '/dashboard',
});

export const AUTHENTICATED = routes.dashboard;
export const UNAUTHENTICATED = routes.auth.index;
