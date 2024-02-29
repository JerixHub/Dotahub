<template>
    <div class="mt-5">
        <ul class="list-none flex tabber-parent">
            <li @click="changeActiveTab(1)" :class="['cursor-pointer text-white font-bold tabber', activeTab === 1 ? 'active': '']">Overview</li>
            <li @click="changeActiveTab(2)" :class="['cursor-pointer text-white font-bold tabber', activeTab === 2 ? 'active': '']">Matches</li>
            <li @click="changeActiveTab(3)" :class="['cursor-pointer text-white font-bold tabber', activeTab === 3 ? 'active': '']">Most Played Heroes</li>
            <li @click="changeActiveTab(4)" :class="['cursor-pointer text-white font-bold tabber', activeTab === 4 ? 'active': '']">Friends</li>
            <li @click="changeActiveTab(5)" :class="['cursor-pointer text-white font-bold tabber', activeTab === 5 ? 'active': '']">Word Cloud</li>
        </ul>
        <div v-show="activeTab === 1" class="p-5 tab-container">
            <div class="flex">
              <div class="w-1/2 pe-5">
                <h3 class="font-bold text-white">Most Recent Games</h3>
                <RecentMatches :user-recent-matches="userRecentMatches" :hero-stats="heroStats" />
              </div>
              <div class="w-1/2">
                <h3 class="font-bold text-white">Most Played Heroes</h3>
                <MostPlayedHeroes :user-heroes="userHeroes" :hero-stats="heroStats" />
                <br>
                <h3 class="font-bold text-white">Friends</h3>
                <Friends :user-friends="userFriends" />
              </div>
            </div>
        </div>
        <div v-show="activeTab === 2" class="p-5 tab-container">
          <Matches :user-matches="userMatches" :hero-stats="heroStats" />
        </div>
        <div v-show="activeTab === 3" class="p-5 tab-container">
          <MostPlayedHeroes :user-heroes="userHeroes" :hero-stats="heroStats" />
        </div>
        <div v-show="activeTab === 4" class="p-5 tab-container">
          <Friends :user-friends="userFriends" />
        </div>
        <div v-show="activeTab === 5" class="p-5 tab-container">
          <Wordcloud :user-wordcloud="userWordcloud" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  userMatches: {
    type: Array,
    default: () => []
  },
  userRecentMatches: {
    type: Array,
    default: () => []
  },
  heroStats: {
    type: Object,
    default: () => {}
  },
  userFriends: {
    type: Array,
    default: () => []
  },
  userWordcloud: {
    type: Object,
    default: () => {}
  },
  userHeroes: {
    type: Array,
    default: () => []
  }
})

const activeTab = ref(1)

function changeActiveTab(tab) {
    activeTab.value = tab
}

</script>