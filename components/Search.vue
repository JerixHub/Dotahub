<template>
    <div class="flex items-center">
        <div class="relative">
            <input type="text" placeholder="Search by Dota ID or Steam Name" class="px-5 py-3 w-80" v-model="searchField" @input="debounceSearch" @keyup.enter="onEnter">
            <SearchResults v-show="showResults" :user-list="searchResults" />
        </div>
        <button class="bg-black px-3 py-3" @click="onEnter">
            <font-awesome-icon icon="fa-regular fa-magnifying-glass" size="xl" class="text-white" />
        </button>
    </div>
</template>

<script setup>
import { useStore } from '~/stores/store.js'
import { useToast } from 'vue-toastification'

const toast = useToast()
const store = useStore()
const { getSearchUser } = useStore()

const searchField = ref('')
const debounceTimeout = ref(null)
const searchResults = computed(() => store?.searchedUserData)
const showResults = ref(false)

const searchUser = async () => {
    getSearchUser(searchField.value)
    showResults.value = true
}

const onEnter = () => {
    showResults.value = false
    navigateTo(`/search/${searchField.value}`)
}

const debounceSearch = () => {
    if (debounceTimeout.value) clearTimeout(debounceTimeout.value);
    debounceTimeout.value = setTimeout(() => {
        searchUser()
    }, 500)
}
</script>
