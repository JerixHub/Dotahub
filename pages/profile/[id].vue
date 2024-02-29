<template>
    <div>
        <LazyProfile v-if="userHeroes" :user-data="userData" :user-winloss="userWinloss" :hero-stats="heroStats" :user-most-used-hero="userHeroes[0]" />
        <LazyOverview v-if="userHeroes" :user-heroes="userHeroes.slice(0,10)" :user-matches="userMatches" :user-recent-matches="userRecentMatches" :hero-stats="heroStats" :user-friends="userFriends.slice(0,10)" :user-wordcloud="userWordcloud" />
    </div>
</template>

<script setup>
import { watch } from 'vue'
import { useStore } from '~/stores/store.js'

const route = useRoute()
const store = useStore()
const { getUserData, getWinloss, getMatches, getRecentMatches, getFriends, getUserHeroes, getWordcloud, getHeroStats } = store
const userData = ref(null)
const userHeroes = ref(null)
const userMatches = ref(null)
const userRecentMatches = ref(null)
const userFriends = ref(null)
const userWinloss = ref(null)
const userWordcloud = ref(null)
const heroStats = ref(null)

const userGetData = async () => {
    userData.value = await getUserData(route.params.id)
    userWinloss.value = await getWinloss(route.params.id)
    userMatches.value = await getMatches(route.params.id)
    userRecentMatches.value = await getRecentMatches(route.params.id)
    userFriends.value = await getFriends(route.params.id)
    userHeroes.value = await getUserHeroes(route.params.id)
    userWordcloud.value = await getWordcloud(route.params.id)
    heroStats.value = await getHeroStats()
}

onMounted(async () => {
  await nextTick()
  userGetData()
})
</script>
