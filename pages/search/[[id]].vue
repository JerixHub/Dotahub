<template>
    <div>
        <div class="list-none pt-10 flex flex-wrap">
            <div v-for="user in searchResults" :key="user.account_id" class="w-1/3">
                <NuxtLink :to="`/profile/${user.account_id}`">
                    <div class="flex items-center bg-[#101822] hover:bg-[#283039] mx-3 my-2 py-2 px-3 gap-3">
                        <img :src="user.avatarfull" alt="avatar" class="max-w-14 rounded-full">
                        <div class="flex flex-col">
                            <span class="font-bold text-white">Name: {{ user.personaname }}</span>
                            <span class="font-bold text-white">ID: {{ user.account_id }}</span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '~/stores/store.js'

const route = useRoute()
const store = useStore()
const { getSearchUser } = store
const searchResults = computed(() => store?.searchedUserData)

const searchUser = async () => {
    getSearchUser(route.params.id)
}

onMounted(async () => {
  await nextTick()
  searchUser()
})

</script>
