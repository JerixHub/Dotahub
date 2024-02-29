<template>
  <div>
    <NuxtLoadingIndicator />
    <Header />
    <div class="container-fluid bg-dota">
      <div class="container mx-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
