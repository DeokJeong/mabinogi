<template>
  <div>
    <div class="p-4 bg-slate-50 rounded-md  shadow-md

">
      <div class="grid gap-2.5">
        <p class="text-3xl font-bold mb-3">유저 조회</p>
        <div class="flex gap-2.5 items-center">
          <Select />
        </div>
        <div class="flex gap-2.5">
          <Input />
          <SmallBtn />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <!-- Main Content -->
      <div class="flex-1 flex flex-col rounded-md">
        <!-- Content -->
        <div class="relative  rounded-md p-4 bg-slate-50 shadow-md
">
          <div class="flex gap-2.5 pb-4">
            <p>총 인원 <span>3</span>명</p>
            <p>류트 <span>3</span>명</p>
            <p>하프 <span>3</span>명</p>
            <p>울프 <span>3</span>명</p>
          </div>
          <div class="overflow-x-auto">
            <!-- 리스트 -->
            <table class="w-full text-sm text-center min-w-[1200px]">
              <thead>
                <tr>
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">NO</th> <!-- NO -->
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">아이디</th> <!-- 아이디 -->
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">닉네임</th> <!-- 닉네임 -->
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">성별</th> <!-- 성별 -->
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">상태</th> <!-- 상태 -->
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">가입일시</th> <!-- 가입일시 -->
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">접속일시</th> <!-- 접속일시 -->
                  <th class="border-y border-gray-300 p-1.5 text-base bg-slate-200">기능</th> <!-- 기능 -->
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border-y border-gray-300 py-1.5 bg-white">2</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">test@test.kr</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">김테스</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">여</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white text-main">활성화</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">2021.01.01 23:48</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">2021.01.01 23:48</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">
                    <button type="button"
                      class="w-max flex-none bg-main border-none rounded-md px-3 py-2 mr-2 font-bold text-white"> 활성화 </button>
                    <button type="button"
                      class="w-max flex-none bg-red-500 text-white border-none rounded-md px-3 py-2 font-bold "> 비활성화
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="border-y border-gray-300 py-1.5 bg-white">1</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">popcorn01@gmail.com</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">팝코인</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">여</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white text-main">활성화</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">2021.01.01 23:48</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">2021.01.01 23:48</td>
                  <td class="border-y border-gray-300 py-1.5 bg-white">
                    <button type="button"
                      class="w-max flex-none bg-main border-none rounded-md px-3 py-2 mr-2 font-bold text-white"> 활성화 </button>
                    <button type="button"
                      class="w-max flex-none bg-red-500 text-white border-none rounded-md px-3 py-2 font-bold "> 비활성화
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--// 리스트 -->
          </div>
          <Pagination :totalPages="totalPages" v-model="currentPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Input from '~/components/common/FieldInput.vue';
import Select from '~/components/common/FieldSelect.vue';
import SmallBtn from '~/components/common/FieldSmallBtn.vue';
import Pagination from '~/components/common/Pagination.vue';
import { ref } from 'vue';

const currentPage = ref<number>(1);
const totalPages = 5;
</script>