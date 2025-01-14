// composables/useAuth.ts
export const useAuth = () => {
  console.log(localStorage.getItem('authToken'),'dd')
  const token = useState<string | null>('authToken', () => {
    // 초기값을 localStorage에서 불러옴
    return process.client ? localStorage.getItem('authToken') : null;
  });

  const setToken = (newToken: string) => {
    token.value = newToken;

    // localStorage에 저장
    if (process.client) {
      localStorage.setItem('authToken', newToken);
    }
  };

  const clearToken = () => {
    token.value = null;

    // localStorage에서 삭제
    if (process.client) {
      localStorage.removeItem('authToken');
    }
  };

  return { token, setToken, clearToken };
};
