<template>
    <div v-if="userData && userWinloss && heroStats && userMostUsedHero">
        <div class="flex gap-20 relative">
            <div class="relative pt-16 z-10 w-1/2">
                <img :src="userData.profile.avatarfull" alt="avatar" class="rounded-full w-80">
                <div class="absolute max-w-36 top-24 -left-16">
                    <img :src="imgTierUrl" alt="tier" class="absolute">
                    <img :src="imgRankUrl" alt="medal">
                    <p v-show="userData.leaderboard_rank !== null" class="leaderboard">{{ userData.leaderboard_rank }}</p>
                </div>
            </div>
            <div class="pt-16 z-10 w-1/2">
                <span class="font-trajan text-white font-bold text-4xl"><a :href="userData.profile.profileurl" target="_blank">{{ userData.profile.personaname }}</a></span>
                <div class="flex gap-10">
                    <div class="flex flex-col gap-10 mt-5">
                        <div class="flex flex-col">
                            <span class="font-trajan font-bold text-white text-xl">MMR</span>
                            <span class="font-oxanium font-bold text-white text-xl">{{ userData.competitive_rank ? userData.competitive_rank : 'Not available' }}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-trajan font-bold text-white text-xl">Wins</span>
                            <span class="font-oxanium font-bold text-green-500 text-xl">{{ userWinloss?.win }}</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-10 mt-5">
                        <div class="flex flex-col">
                            <span class="font-trajan font-bold text-white text-xl">Winrate</span>
                            <span class="font-oxanium font-bold text-white text-xl">{{ winrateCalc }}%</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-trajan font-bold text-white text-xl">Loses</span>
                            <span class="font-oxanium font-bold text-red-500 text-xl">{{ userWinloss?.lose }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-3 mt-10">
                    <span class="font-trajan text-white font-bold text-2xl">Most Used Hero</span>
                    <span class="font-trajan text-white font-bold text-5xl">{{ heroStats[userMostUsedHero.hero_id].localized_name }}</span>
                </div>
                <div class="flex gap-3 mt-10 gap-10">
                    <div class="flex flex-col">
                        <span class="font-trajan text-white font-bold text-2xl">Games</span>
                        <span class="font-oxanium text-white font-bold text-xl">{{ userMostUsedHero.games }}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-trajan text-white font-bold text-2xl">Wins</span>
                        <span class="font-oxanium text-green-500 font-bold text-xl">{{ userMostUsedHero.win }}</span>
                    </div>
                </div>
            </div>
            <div class="hero-video">
                <video :poster="`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroStats[userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(' ', '_')}.png`" autoplay preload="auto" loop playsinline>
                    <source type="video/webm" :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroStats[userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(' ', '_')}.webm`">
                    <img :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroStats[userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(' ', '_')}.png`">
                </video>
            </div>
        </div>
        <div class="hero-ability-bg">
            <div class="flex container items-start justify-evenly mx-auto">
                <div class="flex flex-col self-stretch justify-between hero-attributes text-center">
                    <div class="flex items-center mb-5 justify-evenly">
                        <div class="flex flex-col">
                            <img class="hero-img" :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroStats[userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(' ', '_')}.png`" alt="hero-avatar">
                            <div class="hero-healthbar">
                                <div class="hero-base-health text-white font-bold">{{ heroHealth }}</div>
                                <div class="hero-base-health-regen">+{{ heroStats[userMostUsedHero.hero_id].base_health_regen }}</div>
                            </div>
                            <div class="hero-manabar">
                                <div class="hero-base-mana text-white font-bold">{{ heroMana }}</div>
                                <div class="hero-base-mana-regen">+{{ heroStats[userMostUsedHero.hero_id].base_mana_regen }}</div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <div class="flex items-center gap-2 attributes">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="str">
                                <span class="text-white font-bold text-xl">{{ heroStats[userMostUsedHero.hero_id].base_str }}</span>
                                <span class="gain">+{{ heroStats[userMostUsedHero.hero_id].str_gain }}</span>
                            </div>
                            <div class="flex items-center gap-2 attributes">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="str">
                                <span class="text-white font-bold text-xl">{{ heroStats[userMostUsedHero.hero_id].base_agi }}</span>
                                <span class="gain">+{{ heroStats[userMostUsedHero.hero_id].agi_gain }}</span>
                            </div>
                            <div class="flex items-center gap-2 attributes">
                                <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="str">
                                <span class="text-white font-bold text-xl">{{ heroStats[userMostUsedHero.hero_id].base_int }}</span>
                                <span class="gain">+{{ heroStats[userMostUsedHero.hero_id].int_gain }}</span>
                            </div>
                        </div>
                    </div>
                    <span class="text-[#969696] text-lg">ATTRIBUTES</span>
                </div>
                <div class="border-separator"></div>
                <div class="flex flex-col self-stretch justify-between hero-attributes text-center">
                    <div class="flex items-center flex-wrap">
                        <div v-for="(value, key) in heroStats[userMostUsedHero.hero_id].roles" :key="key" class="text-white text-xl w-1/3 my-2">
                            {{ value }}
                        </div>
                    </div>
                    <span class="text-[#969696] text-lg">ROLES</span>
                </div>
                <div class="border-separator"></div>
                <div class="flex flex-col self-stretch justify-between hero-attributes text-center">
                    <div class="flex gap-5 justify-evenly">
                        <div class="flex flex-col gap-2 hero-info">
                            <span class="text-[#969696] font-bold">ATTACK</span>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_damage.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].base_attack_min }}-{{ heroStats[userMostUsedHero.hero_id].base_attack_max }}</span>
                            </div>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_attack_time.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].base_attack_time }}</span>
                            </div>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_attack_range.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].attack_range }}</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 hero-info">
                            <span class="text-[#969696] font-bold">DEFENSE</span>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_armor.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].base_armor }}</span>
                            </div>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_magic_resist.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].base_mr }}</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 hero-info">
                            <span class="text-[#969696] font-bold">MOBILITY</span>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_movement_speed.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].move_speed }}-{{ heroStats[userMostUsedHero.hero_id].base_attack_max }}</span>
                            </div>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_turn_rate.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].turn_rate }}</span>
                            </div>
                            <div class="flex gap-3">
                                <img class="w-6" src="/images/attr/icon_vision.png" alt="damage">
                                <span class="text-base text-white most_attr_hero">{{ heroStats[userMostUsedHero.hero_id].day_vision }}/{{ heroStats[userMostUsedHero.hero_id].night_vision }}</span>
                            </div>
                        </div>
                    </div>
                    <span class="text-[#969696] text-lg">STATS</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const props = defineProps({
  userData: {
    type: Object,
    default: () => {}
  },
  userWinloss: {
    type: Object,
    default: () => {}
  },
  heroStats: {
    type: Object,
    default: () => {}
  },
  userMostUsedHero: {
    type: Object,
    default: () => {}
  }
})

const splitRankTier = computed(() => {
    return (props.userData?.rank_tier / 10).toFixed(1).split('.')
})

const imgRankUrl = computed(() => {
    let medal = splitRankTier.value[0]
    if (props.userData.leaderboard_rank > 10 && props.userData.leaderboard_rank < 101) {
        medal = '8b'
    } else if(props.userData.leaderboard_rank > 0 && props.userData.leaderboard_rank < 11) {
        medal = '8c'
    }
    return medal === undefined || medal === null || medal == 'NaN' ? false : '/images/rank/' + 'rank_icon_' + medal + '.png'
})

const imgTierUrl = computed(() => {
    let star = splitRankTier.value[1]
    return star !== undefined ? '/images/rank/' + 'rank_star_' + star + '.png' : false
})

const winrateCalc = computed(()=> {
    let totalMatches = props.userWinloss?.win + props.userWinloss?.lose
    let rate = ((props.userWinloss?.win / totalMatches) * 100).toFixed(2)
    return totalMatches > 0 ? rate : ''
})

const heroHealth = computed(() => {
    return props.heroStats[props.userMostUsedHero.hero_id].base_health + (props.heroStats[props.userMostUsedHero.hero_id].base_str * 22)
})

const heroMana = computed(() => {
    return props.heroStats[props.userMostUsedHero.hero_id].base_mana + (props.heroStats[props.userMostUsedHero.hero_id].base_int * 12)
})
</script>
