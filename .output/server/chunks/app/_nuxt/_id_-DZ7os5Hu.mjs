import { _ as __nuxt_component_0 } from './nuxt-link-Cw2BywKJ.mjs';
import { u as useRoute } from '../server.mjs';
import { computed, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[[id]]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const store = useStore();
    const searchResults = computed(() => store == null ? void 0 : store.searchedUserData);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="list-none pt-10 flex flex-wrap"><!--[-->`);
      ssrRenderList(unref(searchResults), (user) => {
        _push(`<div class="w-1/3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/profile/${user.account_id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center bg-[#101822] hover:bg-[#283039] mx-3 my-2 py-2 px-3 gap-3"${_scopeId}><img${ssrRenderAttr("src", user.avatarfull)} alt="avatar" class="max-w-14 rounded-full"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="font-bold text-white"${_scopeId}>Name: ${ssrInterpolate(user.personaname)}</span><span class="font-bold text-white"${_scopeId}>ID: ${ssrInterpolate(user.account_id)}</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center bg-[#101822] hover:bg-[#283039] mx-3 my-2 py-2 px-3 gap-3" }, [
                  createVNode("img", {
                    src: user.avatarfull,
                    alt: "avatar",
                    class: "max-w-14 rounded-full"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("span", { class: "font-bold text-white" }, "Name: " + toDisplayString(user.personaname), 1),
                    createVNode("span", { class: "font-bold text-white" }, "ID: " + toDisplayString(user.account_id), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/[[id]].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DZ7os5Hu.mjs.map
