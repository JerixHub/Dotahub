import { _ as __nuxt_component_0$3 } from "./nuxt-link-Cw2BywKJ.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, ref, computed, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "hookable";
import { a as useToast, u as useStore } from "./store-Da_0sG9e.js";
const _sfc_main$3 = {
  __name: "SearchResultsItem",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "px-2 py-3 hover:bg-gray-100" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/profile/${__props.user.account_id}`,
        onClick: ($event) => _ctx.emit("onEnter")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-3"${_scopeId}><img${ssrRenderAttr("src", __props.user.avatarfull)} alt="avatar" class="max-w-14 rounded-full"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="font-bold"${_scopeId}>Name: ${ssrInterpolate(__props.user.personaname)}</span><span class="font-bold"${_scopeId}>ID: ${ssrInterpolate(__props.user.account_id)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-3" }, [
                createVNode("img", {
                  src: __props.user.avatarfull,
                  alt: "avatar",
                  class: "max-w-14 rounded-full"
                }, null, 8, ["src"]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("span", { class: "font-bold" }, "Name: " + toDisplayString(__props.user.personaname), 1),
                  createVNode("span", { class: "font-bold" }, "ID: " + toDisplayString(__props.user.account_id), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchResultsItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "SearchResults",
  __ssrInlineRender: true,
  props: {
    userList: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchResultsItem = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white w-full absolute border" }, _attrs))}><ul class="list-none max-h-80 overflow-y-scroll"><!--[-->`);
      ssrRenderList(__props.userList, (user) => {
        _push(ssrRenderComponent(_component_SearchResultsItem, {
          key: user.account_id,
          user
        }, null, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchResults.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const store = useStore();
    useStore();
    const searchField = ref("");
    ref(null);
    const searchResults = computed(() => store == null ? void 0 : store.searchedUserData);
    const showResults = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchResults = __nuxt_component_0$1;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="relative"><input type="text" placeholder="Search by Dota ID or Steam Name" class="px-5 py-3 w-80"${ssrRenderAttr("value", unref(searchField))}>`);
      _push(ssrRenderComponent(_component_SearchResults, {
        style: unref(showResults) ? null : { display: "none" },
        "user-list": unref(searchResults)
      }, null, _parent));
      _push(`</div><button class="bg-black px-3 py-3">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        icon: "fa-regular fa-magnifying-glass",
        size: "xl",
        class: "text-white"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const Logo = "" + __buildAssetsURL("logo.BQFpiwrO.png");
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    layout: {
      type: String,
      default: "default"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Search = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "header-bg p-3",
        style: { "z-index": "9999" }
      }, _attrs))}><div class="container mx-auto"><div class="flex items-center justify-between"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(Logo))} alt="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(Logo),
                alt: "logo"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Search, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Header-BM3GSJiR.js.map
