<template>
    <nav class="flex items-center justify-center mt-8" aria-label="Pagination">
        <ul class="flex flex-wrap items-center justify-center space-x-2">
            <!-- 이전버튼 -->
            <li>
                <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)"
                    class="px-2 py-1 text-sm sm:text-base border border-gray-300 rounded-md text-gray-500 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous">
                    &laquo;
                </button>
            </li>

            <!-- 넘버링 -->
            <li v-for="page in totalPages" :key="page">
                <button @click="changePage(page)" :class="{
                    'bg-main text-white': page === currentPage,
                    'bg-white text-gray-500': page !== currentPage,
                }" class="px-2 py-1 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-100">
                    {{ page }}
                </button>
            </li>

            <!-- 다음버튼/한칸씩 이동 -->
            <li>
                <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)"
                    class="px-2 py-1 text-sm sm:text-base border border-gray-300 rounded-md text-gray-500 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next">
                    &raquo;
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
    totalPages: number;
    modelValue: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: number): void;
}>();

const currentPage = ref<number>(props.modelValue);

watch(
    () => props.modelValue,
    (newVal) => {
        currentPage.value = newVal;
    }
);

function changePage(page: number): void {
    if (page >= 1 && page <= props.totalPages) {
        emit('update:modelValue', page);
    }
}
</script>