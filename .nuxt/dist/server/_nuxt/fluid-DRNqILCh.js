import { _ as __nuxt_component_0 } from "./Header-BM3GSJiR.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-Cw2BywKJ.js";
import "ufo";
import "hookable";
import "./store-Da_0sG9e.js";
import "ohash";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, { layout: "fluid" }, null, _parent));
  _push(`<div class="container-fluid pb-14">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/fluid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fluid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  fluid as default
};
//# sourceMappingURL=fluid-DRNqILCh.js.map
