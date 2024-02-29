import{_ as x}from"./nuxt-link.lzEYtEqx.js";import{o as c,c as l,k as r,w as v,a as e,t as p,F as k,j as R,e as D,x as L,r as i,i as B,y as N,z as h,A as T,d as u,B as C,C as I,D as U,E}from"./entry.D7iSw0zz.js";import{u as f}from"./store.BbNEq1nT.js";const F={class:"px-2 py-3 hover:bg-gray-100"},j={class:"flex items-center gap-3"},z=["src"],V={class:"flex flex-col"},A={class:"font-bold"},K={class:"font-bold"},O={__name:"SearchResultsItem",props:{user:{type:Object,default:()=>{}}},setup(o){return(n,a)=>{const t=x;return c(),l("li",F,[r(t,{to:`/profile/${o.user.account_id}`,onClick:a[0]||(a[0]=s=>n.emit("onEnter"))},{default:v(()=>[e("div",j,[e("img",{src:o.user.avatarfull,alt:"avatar",class:"max-w-14 rounded-full"},null,8,z),e("div",V,[e("span",A,"Name: "+p(o.user.personaname),1),e("span",K,"ID: "+p(o.user.account_id),1)])])]),_:1},8,["to"])])}}},H=O,M={class:"bg-white w-full absolute border"},Q={class:"list-none max-h-80 overflow-y-scroll"},q={__name:"SearchResults",props:{userList:{type:Array,default:()=>[]}},setup(o){return(n,a)=>{const t=H;return c(),l("div",M,[e("ul",Q,[(c(!0),l(k,null,R(o.userList,s=>(c(),D(t,{key:s.account_id,user:s},null,8,["user"]))),128))])])}}},G=q,J={class:"flex items-center"},P={class:"relative"},W={__name:"Search",setup(o){L();const n=f(),{getSearchUser:a}=f(),t=i(""),s=i(null),g=B(()=>n==null?void 0:n.searchedUserData),_=i(!1),y=async()=>{a(t.value),_.value=!0},d=()=>{_.value=!1,E(`/search/${t.value}`)},w=()=>{s.value&&clearTimeout(s.value),s.value=setTimeout(()=>{y()},500)};return(ne,m)=>{const $=G,b=N("font-awesome-icon");return c(),l("div",J,[e("div",P,[h(e("input",{type:"text",placeholder:"Search by Dota ID or Steam Name",class:"px-5 py-3 w-80","onUpdate:modelValue":m[0]||(m[0]=S=>C(t)?t.value=S:null),onInput:w,onKeyup:I(d,["enter"])},null,544),[[T,u(t)]]),h(r($,{"user-list":u(g)},null,8,["user-list"]),[[U,u(_)]])]),e("button",{class:"bg-black px-3 py-3",onClick:d},[r(b,{icon:"fa-regular fa-magnifying-glass",size:"xl",class:"text-white"})])])}}},X=W,Y=""+new URL("logo.BQFpiwrO.png",import.meta.url).href,Z={class:"header-bg p-3",style:{"z-index":"9999"}},ee={class:"container mx-auto"},te={class:"flex items-center justify-between"},se=["src"],oe={__name:"Header",props:{layout:{type:String,default:"default"}},setup(o){return(n,a)=>{const t=x,s=X;return c(),l("div",Z,[e("div",ee,[e("div",te,[e("div",null,[r(t,{to:"/"},{default:v(()=>[e("img",{src:u(Y),alt:"logo"},null,8,se)]),_:1})]),r(s)])])])}}},re=oe;export{re as _};