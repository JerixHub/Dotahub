<template>
    <div v-if="userHeroes && heroStats">
      <table class="table-auto user-heroes">
        <thead>
          <tr>
            <th>Hero</th>
            <th>Matches</th>
            <th>Winrate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in userHeroes" :key="key">
            <td>
              <div class="flex gap-2">
                <img :src="`/images/heroes/${heroStats[value.hero_id].localized_name.toLowerCase().replaceAll(' ', '_').replaceAll('-', '_').replaceAll(`'`, '_')}_sb.png`" alt="hero-image">
                <span class="text-white font-bold">{{ heroStats[value.hero_id].localized_name }}</span>
              </div>
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
  userHeroes: {
    type: Array,
    default: () => []
  },
  heroStats: {
    type: Object,
    default: () => {}
  }
})

function winrate (games, wins) {
    let x = ((wins / games) * 100).toFixed(2)
    return x
}
</script>
