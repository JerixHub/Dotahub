import { computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _imports_0 = "" + __publicAssetsURL("images/attr/icon_damage.png");
const _imports_1 = "" + __publicAssetsURL("images/attr/icon_attack_time.png");
const _imports_2 = "" + __publicAssetsURL("images/attr/icon_attack_range.png");
const _imports_3 = "" + __publicAssetsURL("images/attr/icon_armor.png");
const _imports_4 = "" + __publicAssetsURL("images/attr/icon_magic_resist.png");
const _imports_5 = "" + __publicAssetsURL("images/attr/icon_movement_speed.png");
const _imports_6 = "" + __publicAssetsURL("images/attr/icon_turn_rate.png");
const _imports_7 = "" + __publicAssetsURL("images/attr/icon_vision.png");
const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  props: {
    userData: {
      type: Object,
      default: () => {
      }
    },
    userWinloss: {
      type: Object,
      default: () => {
      }
    },
    heroStats: {
      type: Object,
      default: () => {
      }
    },
    userMostUsedHero: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const splitRankTier = computed(() => {
      var _a;
      return (((_a = props.userData) == null ? void 0 : _a.rank_tier) / 10).toFixed(1).split(".");
    });
    const imgRankUrl = computed(() => {
      let medal = splitRankTier.value[0];
      if (props.userData.leaderboard_rank > 10 && props.userData.leaderboard_rank < 101) {
        medal = "8b";
      } else if (props.userData.leaderboard_rank > 0 && props.userData.leaderboard_rank < 11) {
        medal = "8c";
      }
      return medal === void 0 || medal === null || medal == "NaN" ? false : "/images/rank/rank_icon_" + medal + ".png";
    });
    const imgTierUrl = computed(() => {
      let star = splitRankTier.value[1];
      return star !== void 0 ? "/images/rank/rank_star_" + star + ".png" : false;
    });
    const winrateCalc = computed(() => {
      var _a, _b, _c;
      let totalMatches = ((_a = props.userWinloss) == null ? void 0 : _a.win) + ((_b = props.userWinloss) == null ? void 0 : _b.lose);
      let rate = (((_c = props.userWinloss) == null ? void 0 : _c.win) / totalMatches * 100).toFixed(2);
      return totalMatches > 0 ? rate : "";
    });
    const heroHealth = computed(() => {
      return props.heroStats[props.userMostUsedHero.hero_id].base_health + props.heroStats[props.userMostUsedHero.hero_id].base_str * 22;
    });
    const heroMana = computed(() => {
      return props.heroStats[props.userMostUsedHero.hero_id].base_mana + props.heroStats[props.userMostUsedHero.hero_id].base_int * 12;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      if (__props.userData && __props.userWinloss && __props.heroStats && __props.userMostUsedHero) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex gap-20 relative"><div class="relative pt-16 z-10 w-1/2"><img${ssrRenderAttr("src", __props.userData.profile.avatarfull)} alt="avatar" class="rounded-full w-80"><div class="absolute max-w-36 top-24 -left-16"><img${ssrRenderAttr("src", unref(imgTierUrl))} alt="tier" class="absolute"><img${ssrRenderAttr("src", unref(imgRankUrl))} alt="medal"><p style="${ssrRenderStyle(__props.userData.leaderboard_rank !== null ? null : { display: "none" })}" class="leaderboard">${ssrInterpolate(__props.userData.leaderboard_rank)}</p></div></div><div class="pt-16 z-10 w-1/2"><span class="font-trajan text-white font-bold text-4xl"><a${ssrRenderAttr("href", __props.userData.profile.profileurl)} target="_blank">${ssrInterpolate(__props.userData.profile.personaname)}</a></span><div class="flex gap-10"><div class="flex flex-col gap-10 mt-5"><div class="flex flex-col"><span class="font-trajan font-bold text-white text-xl">MMR</span><span class="font-oxanium font-bold text-white text-xl">${ssrInterpolate(__props.userData.competitive_rank ? __props.userData.competitive_rank : "Not available")}</span></div><div class="flex flex-col"><span class="font-trajan font-bold text-white text-xl">Wins</span><span class="font-oxanium font-bold text-green-500 text-xl">${ssrInterpolate((_a = __props.userWinloss) == null ? void 0 : _a.win)}</span></div></div><div class="flex flex-col gap-10 mt-5"><div class="flex flex-col"><span class="font-trajan font-bold text-white text-xl">Winrate</span><span class="font-oxanium font-bold text-white text-xl">${ssrInterpolate(unref(winrateCalc))}%</span></div><div class="flex flex-col"><span class="font-trajan font-bold text-white text-xl">Loses</span><span class="font-oxanium font-bold text-red-500 text-xl">${ssrInterpolate((_b = __props.userWinloss) == null ? void 0 : _b.lose)}</span></div></div></div><div class="flex flex-col gap-3 mt-10"><span class="font-trajan text-white font-bold text-2xl">Most Used Hero</span><span class="font-trajan text-white font-bold text-5xl">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].localized_name)}</span></div><div class="flex gap-3 mt-10 gap-10"><div class="flex flex-col"><span class="font-trajan text-white font-bold text-2xl">Games</span><span class="font-oxanium text-white font-bold text-xl">${ssrInterpolate(__props.userMostUsedHero.games)}</span></div><div class="flex flex-col"><span class="font-trajan text-white font-bold text-2xl">Wins</span><span class="font-oxanium text-green-500 font-bold text-xl">${ssrInterpolate(__props.userMostUsedHero.win)}</span></div></div></div><div class="hero-video"><video${ssrRenderAttr("poster", `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${__props.heroStats[__props.userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(" ", "_")}.png`)} autoplay preload="auto" loop playsinline><source type="video/webm"${ssrRenderAttr("src", `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${__props.heroStats[__props.userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(" ", "_")}.webm`)}><img${ssrRenderAttr("src", `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${__props.heroStats[__props.userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(" ", "_")}.png`)}></video></div></div><div class="hero-ability-bg"><div class="flex container items-start justify-evenly mx-auto"><div class="flex flex-col self-stretch justify-between hero-attributes text-center"><div class="flex items-center mb-5 justify-evenly"><div class="flex flex-col"><img class="hero-img"${ssrRenderAttr("src", `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${__props.heroStats[__props.userMostUsedHero.hero_id].localized_name.toLowerCase().replaceAll(" ", "_")}.png`)} alt="hero-avatar"><div class="hero-healthbar"><div class="hero-base-health text-white font-bold">${ssrInterpolate(unref(heroHealth))}</div><div class="hero-base-health-regen">+${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_health_regen)}</div></div><div class="hero-manabar"><div class="hero-base-mana text-white font-bold">${ssrInterpolate(unref(heroMana))}</div><div class="hero-base-mana-regen">+${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_mana_regen)}</div></div></div><div class="flex flex-col gap-3"><div class="flex items-center gap-2 attributes"><img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="str"><span class="text-white font-bold text-xl">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_str)}</span><span class="gain">+${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].str_gain)}</span></div><div class="flex items-center gap-2 attributes"><img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="str"><span class="text-white font-bold text-xl">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_agi)}</span><span class="gain">+${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].agi_gain)}</span></div><div class="flex items-center gap-2 attributes"><img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="str"><span class="text-white font-bold text-xl">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_int)}</span><span class="gain">+${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].int_gain)}</span></div></div></div><span class="text-[#969696] text-lg">ATTRIBUTES</span></div><div class="border-separator"></div><div class="flex flex-col self-stretch justify-between hero-attributes text-center"><div class="flex items-center flex-wrap"><!--[-->`);
        ssrRenderList(__props.heroStats[__props.userMostUsedHero.hero_id].roles, (value, key) => {
          _push(`<div class="text-white text-xl w-1/3 my-2">${ssrInterpolate(value)}</div>`);
        });
        _push(`<!--]--></div><span class="text-[#969696] text-lg">ROLES</span></div><div class="border-separator"></div><div class="flex flex-col self-stretch justify-between hero-attributes text-center"><div class="flex gap-5 justify-evenly"><div class="flex flex-col gap-2 hero-info"><span class="text-[#969696] font-bold">ATTACK</span><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_0)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_attack_min)}-${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_attack_max)}</span></div><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_1)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_attack_time)}</span></div><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_2)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].attack_range)}</span></div></div><div class="flex flex-col gap-2 hero-info"><span class="text-[#969696] font-bold">DEFENSE</span><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_3)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_armor)}</span></div><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_4)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_mr)}</span></div></div><div class="flex flex-col gap-2 hero-info"><span class="text-[#969696] font-bold">MOBILITY</span><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_5)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].move_speed)}-${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].base_attack_max)}</span></div><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_6)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].turn_rate)}</span></div><div class="flex gap-3"><img class="w-6"${ssrRenderAttr("src", _imports_7)} alt="damage"><span class="text-base text-white most_attr_hero">${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].day_vision)}/${ssrInterpolate(__props.heroStats[__props.userMostUsedHero.hero_id].night_vision)}</span></div></div></div><span class="text-[#969696] text-lg">STATS</span></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Profile-CGhbz_Um.js.map
