(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1244:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[id]",function(){return n(1997)}])},1997:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return T},default:function(){return Z}});var s=n(5893),i=n(8721),r=n(7294);let l=r.createContext({urls:[],currentIdx:null,initialize(e,t){},nextUrl(){},previousUrl(){},reset(){}});var a=n(9231),o=n.n(a);let c=()=>{let{urls:e=[],currentIdx:t,reset:n,nextUrl:i,previousUrl:a}=(0,r.useContext)(l);return 0===e.length?null:(0,s.jsx)("div",{className:o().overlay,children:(0,s.jsxs)("div",{style:{backgroundImage:"url(".concat(e[t],")")},className:o().image,tabIndex:"0",onKeyDown(e){"ArrowRight"===e.key&&i(),"ArrowLeft"===e.key&&a(),"Escape"===e.key&&n()},children:[(0,s.jsx)("button",{className:o().closeButton,onClick:()=>n(),children:(0,s.jsx)("img",{src:"/images/ui/close-icon.png",alt:"Close"})}),(0,s.jsx)("button",{className:o().nextButton,onClick:()=>i(),children:(0,s.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Next"})}),(0,s.jsx)("button",{className:o().prevButton,onClick:()=>a(),children:(0,s.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Previous"})})]})})};function d(e){let{children:t}=e,[n,i]=(0,r.useState)([]),[a,o]=(0,r.useState)(null);return(0,s.jsxs)(l.Provider,{value:{urls:n,currentIdx:a,initialize(e,t){i(e),o(t)},nextUrl(){o(e=>(e+1)%n.length)},previousUrl(){o(e=>(e-1+n.length)%n.length)},reset(){i([]),o(null)}},children:[t,(0,s.jsx)(c,{})]})}var u=n(1768),_=n(4184),m=n.n(_),g=n(5664),x=n.n(g),h=n(4394),p=n.n(h);let j=e=>{let{href:t,className:n,Icon:i,children:r}=e;return(0,s.jsxs)("a",{className:m()(p().externalLink,n),href:t,rel:"noopener noreferrer",target:"_blank",children:[r,i?(0,s.jsx)(i,{className:p().iconSvg}):(0,s.jsx)("svg",{className:p().iconSvg,fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"60px",height:"60px",children:(0,s.jsx)("path",{d:"M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"})})]})};var v=n(2665),N=n(6066),f=n(725),y=n.n(f),k=n(8736),L=n.n(k);let w=e=>{let{allImagesUrls:t,imageIdx:n}=e,{initialize:i}=(0,r.useContext)(l);return(0,s.jsx)("button",{className:L().openButton,onClick:()=>i(t,n),children:(0,s.jsx)("img",{src:"/images/ui/full-screen-icon.png",alt:"Open"})})};n(1548),n(3873);let b={dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,lazyLoad:"ondemand",autoplay:!0,autoplaySpeed:1e4,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:700,settings:{slidesToShow:1}}]},P=e=>{let{imagesUrls:t=[],videosUrls:n=[],autoPlayVideos:i=!1}=e;return 0===t.length&&0===n.length?null:(0,s.jsxs)(N.Z,{className:y().slider,...b,children:[n.map((e,t)=>(0,s.jsx)("video",{autoPlay:0===t||i,preload:"metadata",loop:!0,muted:!0,playsInline:!0,controls:!0,children:(0,s.jsx)("source",{src:e,type:"video/mp4"})},e)),t.map((e,n)=>(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{backgroundImage:"url(".concat(e,")")},className:y().image,children:(0,s.jsx)(w,{allImagesUrls:t,imageIdx:n})})},e))]})};var S=n(6568),B=n(724),I=n.n(B);let D=e=>{let{appleAppStoreUrl:t,googlePlayStoreUrl:n}=e;return t||n?(0,s.jsxs)("div",{className:I().storeLinks,children:[t&&(0,s.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("img",{src:"/images/badge-app-store.svg",alt:"App Store Link",className:I().appleAppStoreBadge})}),n&&(0,s.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("img",{src:"/images/badge-google-play.png",alt:"Play Store Link",className:I().googlePlayStoreBadge})})]}):null};var C=n(640);n(5243);let z=e=>{let{videoId:t,title:n}=e;return(0,s.jsx)(C.Z,{id:t,title:n})},F=e=>{let{title:t,children:n,className:i,mobileFullWidth:r}=e;return(0,s.jsxs)("div",{className:m()(x().sectionBody,i,{[x().mobileFullWidth]:r}),children:[t&&(0,s.jsx)("h2",{className:x().sectionTitle,children:t}),n]})},A=e=>{let{date:t,imagesUrls:n=[],videosUrls:i=[],title:r,subtitle:l,description:a=[],implementationDetails:o=[],tags:c=[],links:d=[],gitHubUrl:u="",appleAppStoreUrl:_="",googlePlayStoreUrl:m="",youtubeVideoIds:g=[],primaryImageUrl:h=null,primaryVideoUrl:p=null,technology:N=null}=e;return(0,s.jsx)("div",{className:x().detailsView,children:(0,s.jsxs)("main",{className:x().container,children:[(0,s.jsx)(P,{imagesUrls:n,videosUrls:i}),h&&(0,s.jsx)(F,{mobileFullWidth:!0,children:(0,s.jsx)("img",{className:x().primaryImage,src:h,alt:"Preview"})}),p&&(0,s.jsx)(F,{mobileFullWidth:!0,children:(0,s.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,className:x().primaryVideo,children:(0,s.jsx)("source",{src:p,type:"video/mp4"})})}),(0,s.jsxs)("div",{className:x().card,children:[(0,s.jsxs)(F,{className:x().header,children:[(0,s.jsxs)("div",{className:x().information,children:[(0,s.jsxs)("h2",{className:x().title,children:[N&&(0,s.jsx)("img",{className:x().technology,src:"/images/".concat(N,".png"),alt:N}),r,(0,s.jsx)(S.A,{secondary:!0,className:x().date,children:t})]}),(0,s.jsx)("span",{className:x().subtitle,children:l}),(0,s.jsx)(S.Z,{tags:c})]}),u&&(0,s.jsx)(j,{href:u,className:x().gitHubLink,Icon:v.Z,children:"View on GitHub"})]}),a.length>0&&(0,s.jsx)(F,{className:x().descriptionItems,children:a.map((e,t)=>(0,s.jsx)("p",{className:x().descriptionItem,children:e},t))}),o.length>0&&(0,s.jsx)(F,{title:"Implementation",children:(0,s.jsx)("ul",{className:x().implementationDetails,children:o.map((e,t)=>(0,s.jsx)("li",{className:x().bullet,children:e},t))})}),d.length>0&&(0,s.jsx)(F,{title:"Links",className:x().externalLinks,children:(0,s.jsx)("div",{className:x().externalLinks,children:d.map((e,t)=>(0,s.jsx)(j,{href:e.href,children:e.text},t))})}),(_||m)&&(0,s.jsx)(F,{title:"Store Presence",children:(0,s.jsx)(D,{appleAppStoreUrl:_,googlePlayStoreUrl:m})})]}),g.length>0&&(0,s.jsx)(F,{mobileFullWidth:!0,children:g.map(e=>(0,s.jsx)("div",{className:x().youtubeVideos,children:(0,s.jsx)(z,{videoId:e,title:r})},e))})]})})};var T=!0;function Z(e){let{project:t}=e;if(!t)return null;let{title:n,description:r=[],subtitle:l,metaImageUrl:a}=t;return(0,s.jsx)(d,{children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(i.Z,{title:"".concat(n," | Project"),description:r.join("")||l,imageUrl:a}),(0,s.jsx)(A,{...t})]})})}},8721:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),i=n(9008),r=n.n(i);function l(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",url:i=t,imageUrl:l="/thumbnail.gif",faviconUrl:a="/favicon.ico",description:o="Gonzalo Cumini | Portfolio"}=e,c="".concat(t).concat(l),d="".concat(t).concat(a);return(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:n}),(0,s.jsx)("meta",{name:"title",content:n}),(0,s.jsx)("meta",{name:"description",content:o}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:i}),(0,s.jsx)("meta",{property:"og:title",content:n}),(0,s.jsx)("meta",{property:"og:description",content:o}),(0,s.jsx)("meta",{property:"og:image",content:c}),(0,s.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:i}),(0,s.jsx)("meta",{property:"twitter:title",content:n}),(0,s.jsx)("meta",{property:"twitter:description",content:o}),(0,s.jsx)("meta",{property:"twitter:image",content:c}),(0,s.jsx)("link",{rel:"icon",href:d})]})}},6568:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var s=n(5893),i=n(4184),r=n.n(i),l=n(5143),a=n.n(l);let o=e=>{let{tags:t,secondary:n=!1,dark:i=!1}=e;return(0,s.jsx)("div",{className:a().tags,children:t.map((e,t)=>(0,s.jsx)(c,{secondary:n,dark:i,children:e},t))})},c=e=>{let{children:t,className:n,secondary:i=!1,dark:l=!1}=e;return(0,s.jsx)("span",{className:r()(a().tag,n,{[a().dark]:l,[a().secondary]:i}),children:t})};t.Z=o},2665:function(e,t,n){"use strict";var s=n(5893);let i=e=>{let{className:t}=e;return(0,s.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};t.Z=i},1768:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var s=n(5893),i=n(4839),r=n.n(i),l=n(1664),a=n.n(l),o=n(8209),c=n.n(o);n(7294);var d=n(8984),u=n.n(d);let _=e=>{let{href:t,Icon:n}=e;return(0,s.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,s.jsx)(n,{className:u().iconSvg})})};var m=n(2665);let g=e=>{let{className:t}=e;return(0,s.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},x=[{href:"https://linkedin.com/in/gonzacn",Icon:g},{href:"https://github.com/z4gon",Icon:m.Z}],h=()=>(0,s.jsxs)("nav",{className:c().navbar,children:[(0,s.jsxs)("ul",{className:c().links,children:[(0,s.jsx)("li",{className:c().icon,children:(0,s.jsx)(a(),{href:"/",className:c().titleLink,children:(0,s.jsx)("h1",{className:c().title,children:"Gonzalo Cumini"})})}),(0,s.jsx)("li",{className:c().icon,children:(0,s.jsx)(a(),{href:"/",children:(0,s.jsx)("h1",{children:"Projects"})})})]}),(0,s.jsx)("ul",{className:c().icons,children:x.map(e=>(0,s.jsx)("li",{className:c().icon,children:(0,s.jsx)(_,{...e})},e.href))})]});var p=n(4980),j=n.n(p);let v=[{href:"https://linkedin.com/in/gonzacn",Icon:g},{href:"https://github.com/z4gon",Icon:m.Z}],N=()=>(0,s.jsxs)("footer",{className:j().footer,children:[(0,s.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,s.jsx)("ul",{className:j().icons,children:v.map(e=>(0,s.jsx)("li",{className:j().icon,children:(0,s.jsx)(_,{...e})},e.href))})]});var f=n(4298),y=n.n(f);let k=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,s.jsx)(y(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]}),L=e=>{let{children:t}=e;return(0,s.jsxs)("div",{className:r().page,children:[(0,s.jsx)(k,{}),(0,s.jsx)(h,{}),t,(0,s.jsx)(N,{})]})};var w=L},4394:function(e){e.exports={externalLink:"ExternalLink_externalLink__10DeB",iconSvg:"ExternalLink_iconSvg__FYtV9"}},8984:function(e){e.exports={iconSvg:"IconLink_iconSvg__kq2nE"}},5143:function(e){e.exports={tags:"Tags_tags__3Bx_D",tag:"Tags_tag__I1Kga",secondary:"Tags_secondary__JW80_",dark:"Tags_dark__irn9E"}},9231:function(e){e.exports={overlay:"FullScreenCarousel_overlay___I7jI",image:"FullScreenCarousel_image__6ve5F",closeButton:"FullScreenCarousel_closeButton__Lz11I",nextButton:"FullScreenCarousel_nextButton__aZUas",prevButton:"FullScreenCarousel_prevButton__v0EGG"}},8736:function(e){e.exports={openButton:"GoFullScreenButton_openButton__Twrqo"}},725:function(e){e.exports={slider:"MultimediaSlider_slider__BB6Ah",image:"MultimediaSlider_image__uuJdJ","slick-arrow":"MultimediaSlider_slick-arrow__sH0yw","slick-next":"MultimediaSlider_slick-next__cVprj"}},8209:function(e){e.exports={navbar:"NavBar_navbar__W8B89",links:"NavBar_links__s6P8N",titleLink:"NavBar_titleLink__OtPh0",icons:"NavBar_icons__Q_6kO",icon:"NavBar_icon__MjYq8",iconSvg:"NavBar_iconSvg__yYGbL"}},4980:function(e){e.exports={footer:"Footer_footer__rEL09",icons:"Footer_icons__IyNdc",icon:"Footer_icon__mhtwE"}},4839:function(e){e.exports={page:"Page_page__0A7TG"}},5664:function(e){e.exports={detailsView:"ProjectDetails_detailsView__rkaCI",container:"ProjectDetails_container__GQ6aD",primaryImage:"ProjectDetails_primaryImage__6HtuZ",primaryVideo:"ProjectDetails_primaryVideo__aEpnz",card:"ProjectDetails_card__xuKs1",header:"ProjectDetails_header__06LzA",gitHubLink:"ProjectDetails_gitHubLink__vbvNO",information:"ProjectDetails_information__Td_im",title:"ProjectDetails_title__aiZsZ",date:"ProjectDetails_date__CNpb0",technology:"ProjectDetails_technology__vxmrg",subtitle:"ProjectDetails_subtitle__tYt6g",sectionBody:"ProjectDetails_sectionBody__L515_",mobileFullWidth:"ProjectDetails_mobileFullWidth__gku55",sectionTitle:"ProjectDetails_sectionTitle__5d6yu",descriptionItems:"ProjectDetails_descriptionItems__oqU69",descriptionItem:"ProjectDetails_descriptionItem__LJR1A",implementationDetails:"ProjectDetails_implementationDetails__QK7L_",bullet:"ProjectDetails_bullet__45nIQ",externalLinks:"ProjectDetails_externalLinks__tG0Bx",youtubeVideos:"ProjectDetails_youtubeVideos__02DGQ"}},724:function(e){e.exports={storeLinks:"StoreLinks_storeLinks__oKk99",appleAppStoreBadge:"StoreLinks_appleAppStoreBadge__jJXsC",googlePlayStoreBadge:"StoreLinks_googlePlayStoreBadge__WZwcX"}}},function(e){e.O(0,[151,949,774,888,179],function(){return e(e.s=1244)}),_N_E=e.O()}]);