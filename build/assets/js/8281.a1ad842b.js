"use strict";(self.webpackChunkpicklepanini=self.webpackChunkpicklepanini||[]).push([[8281],{1460:(e,t,s)=>{s.d(t,{Z:()=>b});var a=s(7294),r=s(512),n=s(6040),l=s(7524),i=s(3692),o=s(5999),c=s(6550),m=s(8596);function d(e){const{pathname:t}=(0,c.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(5893);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,r.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,r.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,r.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=s(3102);function f(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(x.Zo,{component:f,props:e})}function p(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function b(e){const{sidebar:t,toc:s,children:a,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(n.Z,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(p,{sidebar:t}),(0,h.jsx)("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},3665:(e,t,s)=>{s.d(t,{Z:()=>A});s(7294);var a=s(512),r=s(9460),n=s(5893);function l(e){let{children:t,className:s}=e;return(0,n.jsx)("article",{className:s,children:t})}var i=s(3692);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,r.C)(),{permalink:c,title:m}=s,d=l?"h1":"h2";return(0,n.jsx)(d,{className:(0,a.Z)(o.title,t),children:l?m:(0,n.jsx)(i.Z,{to:c,children:m})})}var m=s(5999),d=s(8824),u=s(9788);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,d.c)();return t=>{const s=Math.ceil(t);return e(s,(0,m.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,n.jsx)(n.Fragment,{children:s(t)})}function x(e){let{date:t,formattedDate:s}=e;return(0,n.jsx)("time",{dateTime:t,children:s})}function f(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,r.C)(),{date:l,readingTime:i}=s,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,a.Z)(h.container,"margin-vert--md",t),children:[(0,n.jsx)(x,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsx)(g,{readingTime:i})]})]});var c}function p(e){return e.href?(0,n.jsx)(i.Z,{...e}):(0,n.jsx)(n.Fragment,{children:e.children})}function b(e){let{author:t,className:s}=e;const{name:r,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,n.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",s),children:[o&&(0,n.jsx)(p,{href:m,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:"avatar__photo",src:o,alt:r})}),r&&(0,n.jsxs)("div",{className:"avatar__intro",children:[(0,n.jsx)("div",{className:"avatar__name",children:(0,n.jsx)(p,{href:m,children:(0,n.jsx)("span",{children:r})})}),l&&(0,n.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,r.C)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,n.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,n.jsx)("div",{className:(0,a.Z)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,n.jsx)(b,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function _(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(N,{})]})}var Z=s(8780),k=s(7395);function P(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,r.C)();return(0,n.jsx)("div",{id:l?Z.blogPostContainerID:void 0,className:(0,a.Z)("markdown",s),children:(0,n.jsx)(k.Z,{children:t})})}var I=s(5281),w=s(7265),C=s(1526);function T(){return(0,n.jsx)("b",{children:(0,n.jsx)(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function L(e){const{blogPostTitle:t,...s}=e;return(0,n.jsx)(i.Z,{"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,n.jsx)(T,{})})}function y(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:s,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:m}=e,d=!t&&o,u=s.length>0;if(!(u||d||i))return null;if(t){const e=!!(i||m||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",I.k.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(C.Z,{tags:s})})}),e&&(0,n.jsx)(w.Z,{className:(0,a.Z)("margin-top--sm",I.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:m,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,a.Z)("col",{"col--9":d}),children:(0,n.jsx)(C.Z,{tags:s})}),d&&(0,n.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,n.jsx)(L,{blogPostTitle:l,to:e.permalink})})]})}function A(e){let{children:t,className:s}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(l,{className:(0,a.Z)(i,s),children:[(0,n.jsx)(_,{}),(0,n.jsx)(P,{children:t}),(0,n.jsx)(y,{})]})}},9460:(e,t,s)=>{s.d(t,{C:()=>o,n:()=>i});var a=s(7294),r=s(902),n=s(5893);const l=a.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:r=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:r});return(0,n.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("BlogPostProvider");return e}},8824:(e,t,s)=>{s.d(t,{c:()=>c});var a=s(7294),r=s(2263);const n=["zero","one","two","few","many","other"];function l(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=s.select(t),n=s.pluralForms.indexOf(r);return a[Math.min(n,a.length-1)]}(s,t,e)}}}}]);