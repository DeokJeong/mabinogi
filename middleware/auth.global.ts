export default defineNuxtRouteMiddleware((to) => {
  // 클라이언트에서만 localStorage 사용
  if (process.client) {
    const token = localStorage.getItem('authToken');

    // 로그인 상태에서 로그인 페이지로 접근하면 홈으로 리디렉션
    if (to.path === '/login' && token) {
      return navigateTo('/');
    }

    // 로그인되지 않은 상태에서 로그인 페이지가 아닌 다른 페이지로 접근하면 로그인 페이지로 리디렉션
    if (!token && to.path !== '/login') {
      return navigateTo('/login');
    }
  }
});
