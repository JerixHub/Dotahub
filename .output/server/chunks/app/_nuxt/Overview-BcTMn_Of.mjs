import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const gameModes = {
  "0": {
    id: 0,
    name: "game_mode_unknown",
    localized_name: "Unknown",
    balanced: true
  },
  "1": {
    id: 1,
    name: "game_mode_all_pick",
    localized_name: "All Pick",
    balanced: true
  },
  "2": {
    id: 2,
    name: "game_mode_captains_mode",
    localized_name: "Captains Mode",
    balanced: true
  },
  "3": {
    id: 3,
    name: "game_mode_random_draft",
    localized_name: "Random Draft",
    balanced: true
  },
  "4": {
    id: 4,
    name: "game_mode_single_draft",
    localized_name: "Single Draft",
    balanced: true
  },
  "5": {
    id: 5,
    name: "game_mode_all_random",
    localized_name: "All Random",
    balanced: true
  },
  "6": {
    id: 6,
    name: "game_mode_intro",
    localized_name: "Intro"
  },
  "7": {
    id: 7,
    name: "game_mode_diretide",
    localized_name: "Diretide"
  },
  "8": {
    id: 8,
    name: "game_mode_reverse_captains_mode",
    localized_name: "Reverse Captains Mode"
  },
  "9": {
    id: 9,
    name: "game_mode_greeviling",
    localized_name: "Greeviling"
  },
  "10": {
    id: 10,
    name: "game_mode_tutorial",
    localized_name: "Tutorial"
  },
  "11": {
    id: 11,
    name: "game_mode_mid_only",
    localized_name: "Mid Only"
  },
  "12": {
    id: 12,
    name: "game_mode_least_played",
    localized_name: "Least Played",
    balanced: true
  },
  "13": {
    id: 13,
    name: "game_mode_limited_heroes",
    localized_name: "Limited Heroes"
  },
  "14": {
    id: 14,
    name: "game_mode_compendium_matchmaking",
    localized_name: "Compendium Matchmaking"
  },
  "15": {
    id: 15,
    name: "game_mode_custom",
    localized_name: "Custom Game"
  },
  "16": {
    id: 16,
    name: "game_mode_captains_draft",
    localized_name: "Captains Draft",
    balanced: true
  },
  "17": {
    id: 17,
    name: "game_mode_balanced_draft",
    localized_name: "Balanced Draft",
    balanced: true
  },
  "18": {
    id: 18,
    name: "game_mode_ability_draft",
    localized_name: "Ability Draft"
  },
  "19": {
    id: 19,
    name: "game_mode_event",
    localized_name: "Event"
  },
  "20": {
    id: 20,
    name: "game_mode_all_random_death_match",
    localized_name: "Death Match"
  },
  "21": {
    id: 21,
    name: "game_mode_1v1_mid",
    localized_name: "1v1 Mid"
  },
  "22": {
    id: 22,
    name: "game_mode_all_draft",
    localized_name: "All Pick",
    balanced: true
  },
  "23": {
    id: 23,
    name: "game_mode_turbo",
    localized_name: "Turbo"
  },
  "24": {
    id: 24,
    name: "game_mode_mutation",
    localized_name: "Mutation"
  }
};
const _sfc_main$5 = {
  __name: "RecentMatches",
  __ssrInlineRender: true,
  props: {
    userRecentMatches: {
      type: Array,
      default: () => []
    },
    heroStats: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    function team(val) {
      return val > 127 ? "Dire" : "Radiant";
    }
    function gameResult(val, team2) {
      return team2 === "Radiant" && val === "true" || team2 === "Dire" && val === "false" ? "Won" : "Lost";
    }
    function durationCalc(val) {
      val /= 60;
      let m = Math.floor(val);
      let s = Math.ceil((val - Math.floor(val)) * 60);
      return s < 10 ? m + ":0" + s : m + ":" + s;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.userRecentMatches && __props.heroStats) {
        _push(`<div${ssrRenderAttrs(_attrs)}><table class="table-auto recent-match"><thead><tr><th>Hero</th><th>Result</th><th>Mode</th><th>Team</th><th>KDA</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(__props.userRecentMatches, (value, key) => {
          _push(`<tr><td><div class="flex gap-2"><img${ssrRenderAttr("src", `/images/heroes/${__props.heroStats[value.hero_id].localized_name.toLowerCase().replaceAll(" ", "_").replaceAll("-", "_").replaceAll(`'`, "_")}_sb.png`)} alt="hero-image"><span class="text-white font-bold">${ssrInterpolate(__props.heroStats[value.hero_id].localized_name)}</span></div></td><td><span class="${ssrRenderClass({ "text-green-500 font-bold": gameResult(`${value.radiant_win}`, team(`${value.player_slot}`)) === "Won", "text-red-500 font-bold": gameResult(`${value.radiant_win}`, team(`${value.player_slot}`)) === "Lost" })}">${ssrInterpolate(gameResult(`${value.radiant_win}`, team(`${value.player_slot}`)))}</span></td><td><div class="flex flex-col"><span class="text-white">${ssrInterpolate(unref(gameModes)[value.game_mode].localized_name)}</span><span class="text-white">${ssrInterpolate(durationCalc(value.duration))}</span></div></td><td><span class="text-white">${ssrInterpolate(team(`${value.player_slot}`))}</span></td><td><span class="text-white">${ssrInterpolate(`${value.kills}/${value.deaths}/${value.assists}`)}</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecentMatches.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "MostPlayedHeroes",
  __ssrInlineRender: true,
  props: {
    userHeroes: {
      type: Array,
      default: () => []
    },
    heroStats: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    function winrate(games, wins) {
      let x = (wins / games * 100).toFixed(2);
      return x;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.userHeroes && __props.heroStats) {
        _push(`<div${ssrRenderAttrs(_attrs)}><table class="table-auto user-heroes"><thead><tr><th>Hero</th><th>Matches</th><th>Winrate</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(__props.userHeroes, (value, key) => {
          _push(`<tr><td><div class="flex gap-2"><img${ssrRenderAttr("src", `/images/heroes/${__props.heroStats[value.hero_id].localized_name.toLowerCase().replaceAll(" ", "_").replaceAll("-", "_").replaceAll(`'`, "_")}_sb.png`)} alt="hero-image"><span class="text-white font-bold">${ssrInterpolate(__props.heroStats[value.hero_id].localized_name)}</span></div></td><td><span class="text-white">${ssrInterpolate(value.games)}</span></td><td><span class="text-white">${ssrInterpolate(winrate(value.games, value.win))}%</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MostPlayedHeroes.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Friends",
  __ssrInlineRender: true,
  props: {
    userFriends: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    function winrate(games, wins) {
      return (wins / games * 100).toFixed(2);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.userFriends) {
        _push(`<div${ssrRenderAttrs(_attrs)}><table class="table-auto user-friends"><thead><tr><th>Player</th><th>Matches</th><th>Winrate</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(__props.userFriends, (value, key) => {
          _push(`<tr><td><a${ssrRenderAttr("href", `/profile/${value.account_id}`)}><div class="flex gap-2"><img${ssrRenderAttr("src", `${value.avatar}`)} alt="player-image"><span class="text-white font-bold">${ssrInterpolate(value.personaname)}</span></div></a></td><td><span class="text-white">${ssrInterpolate(value.games)}</span></td><td><span class="text-white">${ssrInterpolate(winrate(value.games, value.win))}%</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Friends.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Matches",
  __ssrInlineRender: true,
  props: {
    userMatches: {
      type: Array,
      default: () => []
    },
    heroStats: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    function team(val) {
      return val > 127 ? "Dire" : "Radiant";
    }
    function gameResult(val, team2) {
      return team2 === "Radiant" && val === "true" || team2 === "Dire" && val === "false" ? "Won" : "Lost";
    }
    function durationCalc(val) {
      val /= 60;
      let m = Math.floor(val);
      let s = Math.ceil((val - Math.floor(val)) * 60);
      return s < 10 ? m + ":0" + s : m + ":" + s;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.userMatches && __props.heroStats) {
        _push(`<div${ssrRenderAttrs(_attrs)}><table class="table-auto recent-match"><thead><tr><th>Hero</th><th>Result</th><th>Mode</th><th>Team</th><th>KDA</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(__props.userMatches, (value, key) => {
          _push(`<tr><td><div class="flex gap-2"><img${ssrRenderAttr("src", `/images/heroes/${__props.heroStats[value.hero_id].localized_name.toLowerCase().replaceAll(" ", "_").replaceAll("-", "_").replaceAll(`'`, "_")}_sb.png`)} alt="hero-image"><span class="text-white">${ssrInterpolate(__props.heroStats[value.hero_id].localized_name)}</span></div></td><td><span class="${ssrRenderClass([value.radiant_win ? "text-green-500" : "text-red-500", "font-bold"])}">${ssrInterpolate(gameResult(`${value.radiant_win}`, team(`${value.player_slot}`)))}</span></td><td><div class="flex flex-col"><span class="text-white">${ssrInterpolate(unref(gameModes)[value.game_mode].localized_name)}</span><span class="text-white">${ssrInterpolate(durationCalc(value.duration))}</span></div></td><td><span class="text-white">${ssrInterpolate(team(`${value.player_slot}`))}</span></td><td><span class="text-white">${ssrInterpolate(`${value.kills}/${value.deaths}/${value.assists}`)}</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Matches.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Wordcloud",
  __ssrInlineRender: true,
  props: {
    userWordcloud: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.userWordcloud) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(__props.userWordcloud.all_word_counts, (value, key) => {
          _push(`<span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">${ssrInterpolate(`${key} ${value}`)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wordcloud.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "Overview",
  __ssrInlineRender: true,
  props: {
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
      default: () => {
      }
    },
    userFriends: {
      type: Array,
      default: () => []
    },
    userWordcloud: {
      type: Object,
      default: () => {
      }
    },
    userHeroes: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const activeTab = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RecentMatches = __nuxt_component_0;
      const _component_MostPlayedHeroes = __nuxt_component_1;
      const _component_Friends = __nuxt_component_2;
      const _component_Matches = __nuxt_component_3;
      const _component_Wordcloud = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5" }, _attrs))}><ul class="list-none flex tabber-parent"><li class="${ssrRenderClass(["cursor-pointer text-white font-bold tabber", unref(activeTab) === 1 ? "active" : ""])}">Overview</li><li class="${ssrRenderClass(["cursor-pointer text-white font-bold tabber", unref(activeTab) === 2 ? "active" : ""])}">Matches</li><li class="${ssrRenderClass(["cursor-pointer text-white font-bold tabber", unref(activeTab) === 3 ? "active" : ""])}">Most Played Heroes</li><li class="${ssrRenderClass(["cursor-pointer text-white font-bold tabber", unref(activeTab) === 4 ? "active" : ""])}">Friends</li><li class="${ssrRenderClass(["cursor-pointer text-white font-bold tabber", unref(activeTab) === 5 ? "active" : ""])}">Word Cloud</li></ul><div style="${ssrRenderStyle(unref(activeTab) === 1 ? null : { display: "none" })}" class="p-5 tab-container"><div class="flex"><div class="w-1/2 pe-5"><h3 class="font-bold text-white">Most Recent Games</h3>`);
      _push(ssrRenderComponent(_component_RecentMatches, {
        "user-recent-matches": __props.userRecentMatches,
        "hero-stats": __props.heroStats
      }, null, _parent));
      _push(`</div><div class="w-1/2"><h3 class="font-bold text-white">Most Played Heroes</h3>`);
      _push(ssrRenderComponent(_component_MostPlayedHeroes, {
        "user-heroes": __props.userHeroes,
        "hero-stats": __props.heroStats
      }, null, _parent));
      _push(`<br><h3 class="font-bold text-white">Friends</h3>`);
      _push(ssrRenderComponent(_component_Friends, { "user-friends": __props.userFriends }, null, _parent));
      _push(`</div></div></div><div style="${ssrRenderStyle(unref(activeTab) === 2 ? null : { display: "none" })}" class="p-5 tab-container">`);
      _push(ssrRenderComponent(_component_Matches, {
        "user-matches": __props.userMatches,
        "hero-stats": __props.heroStats
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(activeTab) === 3 ? null : { display: "none" })}" class="p-5 tab-container">`);
      _push(ssrRenderComponent(_component_MostPlayedHeroes, {
        "user-heroes": __props.userHeroes,
        "hero-stats": __props.heroStats
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(activeTab) === 4 ? null : { display: "none" })}" class="p-5 tab-container">`);
      _push(ssrRenderComponent(_component_Friends, { "user-friends": __props.userFriends }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle(unref(activeTab) === 5 ? null : { display: "none" })}" class="p-5 tab-container">`);
      _push(ssrRenderComponent(_component_Wordcloud, { "user-wordcloud": __props.userWordcloud }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Overview-BcTMn_Of.mjs.map
