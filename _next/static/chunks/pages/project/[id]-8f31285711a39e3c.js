(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{81244:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[id]",function(){return n(26957)}])},26957:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Z},default:function(){return ProjectPage}});var r=n(85893),i=n(80478),s=n(67294);let a=s.createContext({urls:[],currentIdx:null,initialize:(e,t)=>{},nextUrl:()=>{},previousUrl:()=>{},reset:()=>{}});var l=n(90058),o=n.n(l),multimedia_slider_FullScreenCarousel=()=>{let{urls:e=[],currentIdx:t,reset:n,nextUrl:i,previousUrl:l}=(0,s.useContext)(a);return 0===e.length?null:(0,r.jsx)("div",{className:o().overlay,children:(0,r.jsxs)("div",{style:{backgroundImage:"url(".concat(e[t],")")},className:o().image,tabIndex:"0",onKeyDown:e=>{"ArrowRight"===e.key&&i(),"ArrowLeft"===e.key&&l(),"Escape"===e.key&&n()},children:[(0,r.jsx)("button",{className:o().closeButton,onClick:()=>n(),children:(0,r.jsx)("img",{src:"/images/ui/close-icon.png",alt:"Close"})}),(0,r.jsx)("button",{className:o().nextButton,onClick:()=>i(),children:(0,r.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Next"})}),(0,r.jsx)("button",{className:o().prevButton,onClick:()=>l(),children:(0,r.jsx)("img",{src:"/images/ui/chevron-right-icon.png",alt:"Previous"})})]})})};function WithFullScreenCarousel(e){let{children:t}=e,[n,i]=(0,s.useState)([]),[l,o]=(0,s.useState)(null);return(0,r.jsxs)(a.Provider,{value:{urls:n,currentIdx:l,initialize:(e,t)=>{i(e),o(t)},nextUrl:()=>{o(e=>(e+1)%n.length)},previousUrl:()=>{o(e=>(e-1+n.length)%n.length)},reset:()=>{i([]),o(null)}},children:[t,(0,r.jsx)(multimedia_slider_FullScreenCarousel,{})]})}var c=n(29965),d=n(74665),_=n(78420),u=n(36159),m=n(94184),g=n.n(m),h=n(54336),p=n.n(h),components_ExternalLink=e=>{let{href:t,className:n,Icon:i,children:s}=e;return(0,r.jsxs)("a",{className:g()(p().externalLink,n),href:t,rel:"noopener noreferrer",target:"_blank",children:[s,i?(0,r.jsx)(i,{className:p().iconSvg}):(0,r.jsx)("svg",{className:p().iconSvg,fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"60px",height:"60px",children:(0,r.jsx)("path",{d:"M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"})})]})},j=n(29819),x=n(63832),v=n(46066),f=n(4355),k=n.n(f),multimedia_slider_GoFullScreenButton=e=>{let{allImagesUrls:t,imageIdx:n}=e,{initialize:i}=(0,s.useContext)(a);return(0,r.jsx)("button",{className:k().openButton,onClick:()=>i(t,n),children:(0,r.jsx)("img",{src:"/images/ui/full-screen-icon.png",alt:"Open"})})},N=n(90423),w=n.n(N);n(49321),n(16780);let L={dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:1,lazyLoad:"ondemand",autoplay:!0,autoplaySpeed:1e4,responsive:[{breakpoint:1e3,settings:{slidesToShow:2}},{breakpoint:700,settings:{slidesToShow:1}}]};var multimedia_slider_MultimediaSlider=e=>{let{imagesUrls:t=[],videosUrls:n=[],autoPlayVideos:i=!1}=e;return 0===t.length&&0===n.length?null:(0,r.jsxs)(v.Z,{className:w().slider,...L,children:[n.map((e,t)=>(0,r.jsx)("video",{autoPlay:0===t||i,preload:"metadata",loop:!0,muted:!0,playsInline:!0,controls:!0,children:(0,r.jsx)("source",{src:e,type:"video/mp4"})},e)),t.map((e,n)=>(0,r.jsx)("div",{children:(0,r.jsx)("div",{style:{backgroundImage:"url(".concat(e,")")},className:w().image,children:(0,r.jsx)(multimedia_slider_GoFullScreenButton,{allImagesUrls:t,imageIdx:n})})},e))]})},y=n(86794),S=n.n(y);let TagRenderer=e=>{let{children:t,className:n,secondary:i=!1,dark:s=!1}=e;return(0,r.jsx)("span",{className:g()(S().tag,n,{[S().dark]:s,[S().secondary]:i}),children:t})};var components_TagsList=e=>{let{tags:t,secondary:n=!1,dark:i=!1}=e;return(0,r.jsx)("div",{className:S().tags,children:t.map((e,t)=>(0,r.jsx)(TagRenderer,{secondary:n,dark:i,children:e},t))})},P=n(40807),b=n.n(P),C=n(70177),D=n.n(C),project_details_ProjectDetailsSection=e=>{let{title:t,children:n,className:i,mobileFullWidth:s}=e;return(0,r.jsxs)("div",{className:g()(D().sectionBody,i,{[D().mobileFullWidth]:s}),children:[t&&(0,r.jsx)("h2",{className:D().sectionTitle,children:t}),n]})},B=n(27459),I=n.n(B),project_details_StoreLinks=e=>{let{appleAppStoreUrl:t,googlePlayStoreUrl:n}=e;return t||n?(0,r.jsxs)("div",{className:I().storeLinks,children:[t&&(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"/images/badge-app-store.svg",alt:"App Store Link",className:I().appleAppStoreBadge})}),n&&(0,r.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("img",{src:"/images/badge-google-play.png",alt:"Play Store Link",className:I().googlePlayStoreBadge})})]}):null},F=n(40640);n(88232);var project_details_YouTubeEmbed=e=>{let{videoId:t,title:n}=e;return(0,r.jsx)(F.Z,{id:t,title:n})},project_details_ProjectDetails=e=>{let{date:t,imagesUrls:n=[],videosUrls:i=[],title:s,subtitle:a,description:l=[],implementationDetails:o=[],markdownContent:c=null,tags:d=[],links:m=[],gitHubUrl:g="",appleAppStoreUrl:h="",googlePlayStoreUrl:p="",youtubeVideoIds:v=[],heroImageUrl:f=null,heroVideoUrl:k=null,technology:N=null}=e,w=(0,_.Z)(t);return(0,r.jsxs)("div",{className:b().detailsView,children:[(0,r.jsx)(multimedia_slider_MultimediaSlider,{imagesUrls:n,videosUrls:i}),f&&(0,r.jsx)(project_details_ProjectDetailsSection,{mobileFullWidth:!0,children:(0,r.jsx)("img",{className:b().heroImage,src:f,alt:"Preview"})}),k&&(0,r.jsx)(project_details_ProjectDetailsSection,{mobileFullWidth:!0,children:(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,className:b().heroVideo,children:(0,r.jsx)("source",{src:k,type:"video/mp4"})})}),(0,r.jsxs)("div",{className:b().card,children:[(0,r.jsxs)(project_details_ProjectDetailsSection,{className:b().header,children:[(0,r.jsxs)("div",{className:b().information,children:[(0,r.jsxs)("h2",{className:b().title,children:[N&&(0,r.jsx)("img",{className:b().technology,src:"/images/technologies/".concat(N,".png"),alt:N}),s,(0,r.jsx)(TagRenderer,{secondary:!0,className:b().date,children:(0,u.Z)(w,"yyyy-MM")})]}),(0,r.jsx)("span",{className:b().subtitle,children:a}),(0,r.jsx)(components_TagsList,{tags:d})]}),g&&(0,r.jsx)(components_ExternalLink,{href:g,className:b().gitHubLink,Icon:j.Z,children:"View on GitHub"})]}),l.length>0&&(0,r.jsx)(project_details_ProjectDetailsSection,{className:b().descriptionItems,children:l.map((e,t)=>(0,r.jsx)("p",{className:b().descriptionItem,children:e},t))}),o.length>0&&!c&&(0,r.jsx)(project_details_ProjectDetailsSection,{title:"Implementation",children:(0,r.jsx)("ul",{className:b().implementationDetails,children:o.map((e,t)=>(0,r.jsx)("li",{className:b().bullet,children:e},t))})}),m.length>0&&(0,r.jsx)(project_details_ProjectDetailsSection,{title:"Links",className:b().externalLinks,children:(0,r.jsx)("div",{className:b().externalLinks,children:m.map((e,t)=>(0,r.jsx)(components_ExternalLink,{href:e.href,children:e.text},t))})}),(h||p)&&(0,r.jsx)(project_details_ProjectDetailsSection,{title:"Store Presence",children:(0,r.jsx)(project_details_StoreLinks,{appleAppStoreUrl:h,googlePlayStoreUrl:p})}),c&&(0,r.jsx)(x.Z,{markdownString:c})]}),v.length>0&&(0,r.jsx)(project_details_ProjectDetailsSection,{mobileFullWidth:!0,children:v.map(e=>(0,r.jsx)("div",{className:b().youtubeVideos,children:(0,r.jsx)(project_details_YouTubeEmbed,{videoId:e,title:s})},e))})]})},T=n(29410),Z=!0;function ProjectPage(e){let{project:t}=e;if(!t)return null;let{id:n,title:s,description:a=[],subtitle:l,metaImageUrl:o}=t;return(0,r.jsx)(WithFullScreenCarousel,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(i.Z,{title:"".concat(s," | Project"),description:a.join("")||l,imageUrl:o,pathUrl:"/project/".concat(n)}),(0,r.jsxs)(c.Z,{wide:!1,children:[(0,r.jsx)(T.Z,{amount:"3.5em"}),(0,r.jsx)(project_details_ProjectDetails,{...t}),(0,r.jsx)(T.Z,{amount:"3.5em"})]})]})})}},80478:function(e,t,n){"use strict";n.d(t,{Z:function(){return Metatags}});var r=n(85893),i=n(9008),s=n.n(i);function Metatags(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:i,imageUrl:a="/thumbnail.gif",faviconUrl:l="/favicon.ico",description:o="Gonzalo Cumini | Portfolio"}=e,c="".concat(t).concat(i),d="".concat(t).concat(a),_="".concat(t).concat(l);return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:o}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:c}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:o}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:c}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:o}),(0,r.jsx)("meta",{property:"twitter:image",content:d}),(0,r.jsx)("link",{rel:"icon",href:_}),(0,r.jsx)("link",{rel:"canonical",href:c},"canonical")]})}},29410:function(e,t,n){"use strict";var r=n(85893);t.Z=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})}},29819:function(e,t,n){"use strict";var r=n(85893);t.Z=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}},63832:function(e,t,n){"use strict";var r=n(85893),i=n(67294),s=n(74740),a=n(98683),l=n(84283),o=n(29187),c=n.n(o);let CodeSnippetRenderer=e=>{let{node:t,inline:n,className:i,children:s,...o}=e,c=/language-(\w+)/.exec(i||"");return!n&&c?(0,r.jsx)(a.Z,{showLineNumbers:!0,language:c[1],style:l.I2,PreTag:"div",...o,children:String(s).replace(/\n$/,"")}):(0,r.jsx)("code",{className:i,...o,children:s})};function flatten(e,t){return"string"==typeof t?e+t:i.Children.toArray(t.props.children).reduce(flatten,e)}let HeadingRenderer=e=>{var t=i.Children.toArray(e.children).reduce(flatten,"").toLowerCase().replace(/\W/g,"-");return i.createElement("h"+e.level,{id:t},e.children)};t.Z=e=>{let{markdownString:t}=e;return(0,r.jsx)("div",{className:c().markdownContent,children:(0,r.jsx)(s.D,{components:{code:CodeSnippetRenderer,h1:HeadingRenderer,h2:HeadingRenderer,h3:HeadingRenderer,h4:HeadingRenderer,h5:HeadingRenderer,h6:HeadingRenderer},children:t})})}},29965:function(e,t,n){"use strict";var r=n(85893),i=n(94184),s=n.n(i),a=n(75410),l=n.n(a);t.Z=e=>{let{children:t,className:n,wide:i=!0}=e;return(0,r.jsx)("main",{className:s()(l().container,{[l().wide]:i},{[l().narrow]:!i},n),children:t})}},74665:function(e,t,n){"use strict";n.d(t,{Z:function(){return page_Page}});var r=n(85893),i=n(94184),s=n.n(i),a=n(41664),l=n.n(a);n(67294);var o=n(93217),c=n.n(o),components_IconLink=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:c().iconSvg})})},d=n(29819),icons_LinkedInIcon=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},_=n(77454),u=n.n(_);let m=[{href:"https://linkedin.com/in/gonzacn",Icon:icons_LinkedInIcon},{href:"https://github.com/z4gon",Icon:d.Z}];var navbar_NavBar=()=>(0,r.jsxs)("nav",{className:u().navbar,children:[(0,r.jsxs)("ul",{className:u().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",className:u().titleLink,children:(0,r.jsx)("h1",{className:u().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:u().secondaryLink,children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:u().secondaryLink,children:(0,r.jsx)(l(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:u().icons,children:m.map(e=>(0,r.jsx)("li",{className:u().icon,children:(0,r.jsx)(components_IconLink,{...e})},e.href))})]}),g=n(95940),h=n.n(g);let p=[{href:"https://linkedin.com/in/gonzacn",Icon:icons_LinkedInIcon},{href:"https://github.com/z4gon",Icon:d.Z}];var page_Footer=()=>(0,r.jsxs)("footer",{className:h().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:h().icons,children:p.map(e=>(0,r.jsx)("li",{className:h().icon,children:(0,r.jsx)(components_IconLink,{...e})},e.href))})]}),j=n(4298),x=n.n(j),page_GoogleAnalytics=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(x(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]}),v=n(52551),f=n.n(v),page_Page=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:s()(f().page,t),children:[(0,r.jsx)(page_GoogleAnalytics,{}),(0,r.jsx)(navbar_NavBar,{}),n,(0,r.jsx)(page_Footer,{})]})}},54336:function(e){e.exports={externalLink:"ExternalLink_externalLink__ask_W",iconSvg:"ExternalLink_iconSvg__7Vo1w"}},93217:function(e){e.exports={iconSvg:"IconLink_iconSvg__HQHTJ"}},86794:function(e){e.exports={tags:"Tags_tags__VV3a0",tag:"Tags_tag__KNrQW",secondary:"Tags_secondary__lQWwZ",dark:"Tags_dark__6AVKw"}},29187:function(e){e.exports={markdownContent:"MarkdownContent_markdownContent__DDbG5"}},90058:function(e){e.exports={overlay:"FullScreenCarousel_overlay__pEL5h",image:"FullScreenCarousel_image__6RVL5",closeButton:"FullScreenCarousel_closeButton__A4xWi",nextButton:"FullScreenCarousel_nextButton__rpvNO",prevButton:"FullScreenCarousel_prevButton__YvdR3"}},4355:function(e){e.exports={openButton:"GoFullScreenButton_openButton__mAOqp"}},90423:function(e){e.exports={slider:"MultimediaSlider_slider__mPCeo",image:"MultimediaSlider_image__y_e5r","slick-arrow":"MultimediaSlider_slick-arrow__T6jab","slick-next":"MultimediaSlider_slick-next__Wyl09"}},77454:function(e){e.exports={navbar:"NavBar_navbar__w9NXx",links:"NavBar_links__9ZJCr",titleLink:"NavBar_titleLink__HKe5A",secondaryLink:"NavBar_secondaryLink__dJ_Rh",icons:"NavBar_icons__PLRGq",icon:"NavBar_icon__4VX97",iconSvg:"NavBar_iconSvg__HjLoC"}},75410:function(e){e.exports={container:"Container_container__CIG8D",wide:"Container_wide__h5Rmh",narrow:"Container_narrow__6D5o0"}},95940:function(e){e.exports={footer:"Footer_footer__Cw0If",icons:"Footer_icons__HHXih",icon:"Footer_icon__s6wu9"}},52551:function(e){e.exports={page:"Page_page__ihMwS"}},40807:function(e){e.exports={detailsView:"ProjectDetails_detailsView__Xs9Yk",heroImage:"ProjectDetails_heroImage__6hV8N",heroVideo:"ProjectDetails_heroVideo__xqLmJ",card:"ProjectDetails_card__zbhPz",header:"ProjectDetails_header__V8Mot",gitHubLink:"ProjectDetails_gitHubLink__wVdqr",information:"ProjectDetails_information__OpBzq",title:"ProjectDetails_title__jWHEw",date:"ProjectDetails_date__CCd0A",technology:"ProjectDetails_technology__f_tgX",subtitle:"ProjectDetails_subtitle___v21N",descriptionItems:"ProjectDetails_descriptionItems__oFIv4",descriptionItem:"ProjectDetails_descriptionItem__Ttn_H",implementationDetails:"ProjectDetails_implementationDetails__hatuv",bullet:"ProjectDetails_bullet__r2fZe",externalLinks:"ProjectDetails_externalLinks__NDdFK",youtubeVideos:"ProjectDetails_youtubeVideos__g_TQ1"}},70177:function(e){e.exports={sectionBody:"ProjectDetailsSection_sectionBody__a5AY8",mobileFullWidth:"ProjectDetailsSection_mobileFullWidth__PyPF7",sectionTitle:"ProjectDetailsSection_sectionTitle__BCJPU"}},27459:function(e){e.exports={storeLinks:"StoreLinks_storeLinks__RgWuQ",appleAppStoreBadge:"StoreLinks_appleAppStoreBadge__leMY4",googlePlayStoreBadge:"StoreLinks_googlePlayStoreBadge__Of0Pu"}}},function(e){e.O(0,[151,358,191,980,774,888,179],function(){return e(e.s=81244)}),_N_E=e.O()}]);