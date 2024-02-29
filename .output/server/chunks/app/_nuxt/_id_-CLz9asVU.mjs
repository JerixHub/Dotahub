import { defineAsyncComponent, ref, unref, useSSRContext } from 'vue';
import { u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStore } from './store-Da_0sG9e.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@unhead/shared';
import 'vue-router';

const __nuxt_component_0_lazy = defineAsyncComponent(() => import('./Profile-CGhbz_Um.mjs').then((c) => c.default || c));
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./Overview-BcTMn_Of.mjs').then((c) => c.default || c));
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useStore();
    const userData = ref(null);
    const userHeroes = ref(null);
    const userMatches = ref(null);
    const userRecentMatches = ref(null);
    const userFriends = ref(null);
    const userWinloss = ref(null);
    const userWordcloud = ref(null);
    const heroStats = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LazyProfile = __nuxt_component_0_lazy;
      const _component_LazyOverview = __nuxt_component_1_lazy;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(userHeroes)) {
        _push(ssrRenderComponent(_component_LazyProfile, {
          "user-data": unref(userData),
          "user-winloss": unref(userWinloss),
          "hero-stats": unref(heroStats),
          "user-most-used-hero": unref(userHeroes)[0]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(userHeroes)) {
        _push(ssrRenderComponent(_component_LazyOverview, {
          "user-heroes": unref(userHeroes).slice(0, 10),
          "user-matches": unref(userMatches),
          "user-recent-matches": unref(userRecentMatches),
          "hero-stats": unref(heroStats),
          "user-friends": unref(userFriends).slice(0, 10),
          "user-wordcloud": unref(userWordcloud)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CLz9asVU.mjs.map
