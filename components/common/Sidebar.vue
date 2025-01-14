<template>
  <!-- Sidebar -->
  <aside class="w-48 bg-gray-800 text-gray-200">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/" class="block py-5 px-4 hover:bg-gray-700">
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user" class="block py-5 px-4 hover:bg-gray-700">
            Users
          </NuxtLink>
        </li>
        <li>
          <NuxtLink  class="block py-5 px-4 hover:bg-gray-700">
            Settings
          </NuxtLink>
        </li>
        <li>
          <NuxtLink  class="block py-5 px-4 hover:bg-gray-700">
            Logout
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<script setup lang="ts">
const emit = defineEmits<{
  (event: 'menuChanged', componentName: 'DashboardCard' | 'DashboardTable'): void;
}>();

const changeMenu = (componentName: 'DashboardCard' | 'DashboardTable') => {
  emit('menuChanged', componentName);
};
</script>