<template>
    <div v-if="userMatches && heroStats">
      <table class="table-auto recent-match">
        <thead>
          <tr>
            <th>Hero</th>
            <th>Result</th>
            <th>Mode</th>
            <th>Team</th>
            <th>KDA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in userMatches" :key="key">
            <td>
              <div class="flex gap-2">
                <img :src="`/images/heroes/${heroStats[value.hero_id].localized_name.toLowerCase().replaceAll(' ', '_').replaceAll('-', '_').replaceAll(`'`, '_')}_sb.png`" alt="hero-image">
                <span class="text-white">{{ heroStats[value.hero_id].localized_name }}</span>
              </div>
            </td>
            <td>
              <span :class="[value.radiant_win ? 'text-green-500' : 'text-red-500', 'font-bold']">{{ gameResult(`${value.radiant_win}`,team(`${value.player_slot}`)) }}</span>
            </td>
            <td>
              <div class="flex flex-col">
                <span class="text-white">{{ gameModes[value.game_mode].localized_name }}</span>
                <span class="text-white">{{ durationCalc(value.duration) }}</span>
              </div>
            </td>
            <td>
              <span class="text-white">{{ team(`${value.player_slot}`) }}</span>
            </td>
            <td>
              <span class="text-white">{{ `${value.kills}/${value.deaths}/${value.assists}` }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import gameModes from '~/assets/json/gamemodes.json'

const props = defineProps({
  userMatches: {
    type: Array,
    default: () => []
  },
  heroStats: {
    type: Object,
    default: () => {}
  }
})

function team (val) {
  return (val > 127 ? 'Dire' : 'Radiant')
}

function gameResult (val, team) {
  return ((team === 'Radiant' && val === 'true') || (team === 'Dire' && val === 'false') ? 'Won' : 'Lost')
}

function durationCalc (val) {
  val /= 60
  let m = Math.floor(val)
  let s = Math.ceil((val - Math.floor(val)) * 60)
  return s < 10 ? m + ':0' + s : m + ':' + s
}
</script>
