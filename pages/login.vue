  <template>
    <div>
      <form @submit.prevent="login">
      <div class="flex justify-center items-center h-screen bg-gray-100 px-6">
          <div class="p-6 bg-white w-full rounded-md h-max max-w-screen-sm min-w-52 flex flex-col gap-5">
            <div>LOGO</div>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700">아이디</span>
              <input type="text" placeholder="아이디를 입력해주세요." class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
        focus:outline-none focus:border-main invalid:border-pink-500 invalid:text-pink-600 invalid:bg-pink-100 focus:invalid:border-pink-400 
      " v-model="username"/>
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700">비밀번호</span>
              <input type="text" placeholder="비밀번호를 입력해주세요." class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
        focus:outline-none focus:border-main invalid:border-pink-500 invalid:text-pink-600 invalid:bg-pink-100 focus:invalid:border-pink-400 
      " v-model="password"/>
            </label>
            <button type="submit" class="w-100 bg-main border border-slate-1000 border-none rounded-md p-3 font-bold ">
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    layout: false
  })

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '~/composables/useAuth';

const username = ref('');
const password = ref('');

const user = useState('user'); // 로그인 상태를 관리하는 상태

const router = useRouter();

const login = async () => {
  const { setToken } = useAuth();
  try {
    // 로그인 요청을 백엔드로 보냄
    const response = await $fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 형식으로 보내기
      },
      body: { 
        username: username.value, 
        password: password.value 
      }, // 사용자 이름과 비밀번호를 요청 본문에 포함
    });
    if (response.token) {
      setToken(response.token); // 토큰 저장
      router.push('/'); // 로그인 후 리다이렉트
    } else {
      // 로그인 실패 시
      console.error('로그인 실패:', response.error);
    }
  } catch (error) {
    // 네트워크 오류 등의 예외 처리
    console.error('로그인 중 오류 발생:', error);
  }
};




  </script>