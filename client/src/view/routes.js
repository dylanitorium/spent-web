const routes = ({
  auth: {
    index: '/',
    sign_in: {
      index: '/sign-in',
      email: '/sign-in/email'
    },
    sign_up: {
      index: '/sign-up',
      email: '/sign-up/email'
    },
  },
  dashboard: '/dashboard',
});

export const AUTHENTICATED = routes.dashboard;
export const UNAUTHENTICATED = routes.auth.index;
export default routes;
