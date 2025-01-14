<template>
  <div class="wrap">
    <!-- Header는 고정된 위치에 배치 -->
    <Header />

    <div class="content">
      <!-- Sidebar는 모든 페이지에 표시 -->
      <Sidebar @menu-clicked="changeMenu"/>

      <main class="main-content">
        <!-- 페이지 내용이 여기에 렌더링됩니다 -->
        <slot />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Header와 Sidebar 컴포넌트를 불러옵니다.
import Header from '~/components/common/Header.vue';
import Sidebar from '~/components/common/Sidebar.vue';

const currentComponent = ref('Dashboard'); // 초기 컴포넌트 설정

const changeMenu = (componentName:string):void => {
  currentComponent.value = componentName;
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 화면을 차지하도록 설정 */
}

.content {
  display: flex;
  flex: 1; /* Sidebar와 main content가 수평으로 배치되도록 */
  padding-top: 60px; /* Header 높이만큼 여백을 추가 */
  min-height: calc(100vh - 60px); /* 사이드바가 전체 높이를 차지하도록 설정 */
}

.main-content {
  flex: 1;
  overflow-y: auto; /* 스크롤이 필요하면 생기도록 설정 */
  padding: 20px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  z-index: 10; /* Header가 다른 콘텐츠 위에 오도록 설정 */
  padding: 10px 20px;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  position: fixed; /* 사이드바도 고정 */
  top: 60px; /* Header 아래에 배치 */
  height: calc(100vh - 60px); /* 사이드바가 전체 높이를 차지하도록 설정 */
}
</style>
