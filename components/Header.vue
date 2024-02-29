<template>
    <div class="header-bg p-3" style="z-index: 9999;">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <div>
                    <NuxtLink to="/">
                        <img :src="Logo" alt="logo">
                    </NuxtLink>
                </div>
                <Search />
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/assets/images/logo.png'

const props = defineProps({
  layout: {
    type: String,
    default: 'default'
  }
})
</script>
