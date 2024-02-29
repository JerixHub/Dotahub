<template>
    <div class="bg-white w-full absolute border">
        <ul class="list-none max-h-80 overflow-y-scroll">
            <SearchResultsItem v-for="user in userList" :key="user.account_id" :user="user" />
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
  userList: {
    type: Array,
    default: () => []
  }
})

function closeResults() {
  emit('onEnter')
}
</script>
