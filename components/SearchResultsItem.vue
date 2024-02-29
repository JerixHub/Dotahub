<template>
    <li class="px-2 py-3 hover:bg-gray-100">
        <NuxtLink :to="`/profile/${user.account_id}`" @click="emit('onEnter')">
            <div class="flex items-center gap-3">
                <img :src="user.avatarfull" alt="avatar" class="max-w-14 rounded-full">
                <div class="flex flex-col">
                    <span class="font-bold">Name: {{ user.personaname }}</span>
                    <span class="font-bold">ID: {{ user.account_id }}</span>
                </div>
            </div>
        </NuxtLink>
    </li>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: () => {}
  }
})
</script>
