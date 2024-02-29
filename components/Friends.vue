<template>
  <div v-if="userFriends">
    <table class="table-auto user-friends">
      <thead>
        <tr>
          <th>Player</th>
          <th>Matches</th>
          <th>Winrate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in userFriends" :key="key">
          <td>
            <a :href="`/profile/${value.account_id}`">
              <div class="flex gap-2">
                <img :src="`${value.avatar}`" alt="player-image">
                <span class="text-white font-bold">{{ value.personaname }}</span>
              </div>
            </a>
          </td>
          <td>
              <span class="text-white">{{ value.games }}</span>
          </td>
          <td>
              <span class="text-white">{{ winrate(value.games, value.win) }}%</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  userFriends: {
    type: Array,
    default: () => []
  }
})

function winrate (games, wins) {
  return ((wins / games) * 100).toFixed(2)
}
</script>
