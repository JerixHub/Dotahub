<template>
  <div>
    <NuxtLayout name="fluid">
      <div class="page-404 d-flex flex-column align-items-center">
        <span class="page-404__logo">
          <font-awesome-icon icon="fa-brands fa-github" size="xl" class="text-black" />
        </span>
        <div class="page-404__title">
          {{ statusCode }} Error
        </div>
        <div>
          <code>{{ error }}</code>
          <code>Error: {{ error.message }}</code>
          <a href="/" class="d-block text-center mt-4">Go back</a>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

defineProps({
  error: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.page-404 {
  margin-top: 5rem;

  &__logo {
    color: var(--orange);
  }

  &__title {
    color: var(--orange);
    font-size: 3rem;
  }
}
</style>
