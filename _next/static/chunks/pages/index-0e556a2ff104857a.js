(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(20679)}])},20679:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return Home}});var r,o,s=n(85893),a=n(67294),i=n(63105),c=n.n(i),l=n(75472),d=n.n(l),h=n(80478),_=n(29965),j=n(74665),u=n(26128),g=n(64721),m=n.n(g),icons_SearchIcon=e=>{let{className:t}=e;return(0,s.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"})})},p=n(28236),x=n.n(p),projects_grid_ProjectFilters=e=>{let{allProjects:t,onFiltersChanged:n}=e,[r,o]=(0,a.useState)(""),[i,l]=(0,a.useState)(t.length),onFilter=()=>{let e=r?c()(t,e=>m()(e.title.toLowerCase(),r.toLowerCase())):t;l(e.length),n(e)};(0,a.useEffect)(()=>{onFilter()},[r]);let onSearchChange=e=>{o(e),onFilter()};return(0,s.jsxs)("div",{className:x().filters,children:[(0,s.jsxs)("div",{className:x().searchBox,children:[(0,s.jsx)("input",{type:"text",placeholder:"Search for projects",onChange:e=>onSearchChange(e.currentTarget.value)}),(0,s.jsx)(icons_SearchIcon,{})]}),(0,s.jsx)("span",{className:x().message,children:r?"".concat(i," matching projects"):"".concat(i," total projects")})]})},f=n(52691),v=n(29410);(r=o||(o={})).PublishedGames="Published Games",r.Shaders="Shaders",r.ComputeShaders="Compute Shaders",r.VisualEffects="Visual Effects",r._3DModelingAnimation="3D Modeling and Animation",r.GameDev="Game Dev";var N=!0;function Home(e){let{projects:t}=e,[n,r]=(0,a.useState)(t),i=[o.VisualEffects,o.Shaders,o.ComputeShaders,o._3DModelingAnimation,o.PublishedGames,o.GameDev];return(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(h.Z,{}),(0,s.jsxs)(_.Z,{children:[(0,s.jsx)(v.Z,{amount:"2em"}),(0,s.jsx)(u.Z,{children:"Portfolio"}),(0,s.jsx)(v.Z,{amount:"2em"}),(0,s.jsx)(projects_grid_ProjectFilters,{allProjects:t,onFiltersChanged:e=>r(e)}),(0,s.jsx)(v.Z,{amount:"1em"}),i.map(e=>{let t=c()(n,t=>t.category===e);return t=d()(t,["priority"],["asc"]),(0,s.jsx)(f.Z,{title:e.toString(),projects:t,pageSize:8},e)}),(0,s.jsx)(v.Z,{amount:"3.5em"})]})]})}},9883:function(e,t,n){"use strict";var r=n(85893);n(67294);var o=n(94184),s=n.n(o),a=n(61306),i=n.n(a);t.Z=e=>{let{className:t,onClick:n,children:o}=e;return(0,r.jsx)("button",{className:s()(t,i().button),onClick:n,children:o})}},80478:function(e,t,n){"use strict";n.d(t,{Z:function(){return Metatags}});var r=n(85893),o=n(9008),s=n.n(o);function Metatags(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:o,imageUrl:a="/thumbnail.gif",faviconUrl:i="/favicon.ico",description:c="Gonzalo Cumini | Portfolio"}=e,l="".concat(t).concat(o),d="".concat(t).concat(a),h="".concat(t).concat(i);return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:c}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:l}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:c}),(0,r.jsx)("meta",{property:"twitter:image",content:d}),(0,r.jsx)("link",{rel:"icon",href:h}),(0,r.jsx)("link",{rel:"canonical",href:l},"canonical")]})}},29410:function(e,t,n){"use strict";var r=n(85893);t.Z=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})}},29819:function(e,t,n){"use strict";var r=n(85893);t.Z=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}},29965:function(e,t,n){"use strict";var r=n(85893),o=n(94184),s=n.n(o),a=n(75410),i=n.n(a);t.Z=e=>{let{children:t,className:n,wide:o=!0}=e;return(0,r.jsx)("main",{className:s()(i().container,{[i().wide]:o},{[i().narrow]:!o},n),children:t})}},74665:function(e,t,n){"use strict";n.d(t,{Z:function(){return page_Page}});var r=n(85893),o=n(94184),s=n.n(o),a=n(41664),i=n.n(a);n(67294);var c=n(93217),l=n.n(c),components_IconLink=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:l().iconSvg})})},d=n(29819),icons_LinkedInIcon=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},h=n(77454),_=n.n(h);let j=[{href:"https://linkedin.com/in/gonzacn",Icon:icons_LinkedInIcon},{href:"https://github.com/z4gon",Icon:d.Z}];var navbar_NavBar=()=>(0,r.jsxs)("nav",{className:_().navbar,children:[(0,r.jsxs)("ul",{className:_().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/",className:_().titleLink,children:(0,r.jsx)("h1",{className:_().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:_().secondaryLink,children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:_().secondaryLink,children:(0,r.jsx)(i(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:_().icons,children:j.map(e=>(0,r.jsx)("li",{className:_().icon,children:(0,r.jsx)(components_IconLink,{...e})},e.href))})]}),u=n(95940),g=n.n(u);let m=[{href:"https://linkedin.com/in/gonzacn",Icon:icons_LinkedInIcon},{href:"https://github.com/z4gon",Icon:d.Z}];var page_Footer=()=>(0,r.jsxs)("footer",{className:g().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:g().icons,children:m.map(e=>(0,r.jsx)("li",{className:g().icon,children:(0,r.jsx)(components_IconLink,{...e})},e.href))})]}),p=n(4298),x=n.n(p),page_GoogleAnalytics=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(x(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]}),f=n(52551),v=n.n(f),page_Page=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:s()(v().page,t),children:[(0,r.jsx)(page_GoogleAnalytics,{}),(0,r.jsx)(navbar_NavBar,{}),n,(0,r.jsx)(page_Footer,{})]})}},26128:function(e,t,n){"use strict";var r=n(85893),o=n(164),s=n.n(o);t.Z=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:s().pageTitle,children:t})}},52691:function(e,t,n){"use strict";n.d(t,{Z:function(){return projects_grid_ProjectsGrid}});var r=n(85893),o=n(67294),s=n(9883),a=n(41664),i=n.n(a),c=n(32634),l=n.n(c),projects_grid_ProjectCard=e=>{let{id:t,thumbnailUrl:n,title:o,tags:s,technology:a=null}=e;return(0,r.jsx)(i(),{href:"/project/".concat(t),className:l().link,children:(0,r.jsxs)("article",{className:l().card,children:[(0,r.jsx)("div",{className:l().thumbnailContainer,children:(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:l().thumbnail,children:(0,r.jsx)("source",{src:n,type:"video/mp4"})})}),(0,r.jsxs)("div",{className:l().information,children:[a&&(0,r.jsx)("img",{className:l().technology,src:"/images/technologies/".concat(a,".png"),alt:a}),(0,r.jsx)("h2",{className:l().title,children:o})]})]})})},d=n(17362),h=n.n(d),projects_grid_ProjectsGrid=e=>{let{title:t,projects:n,pageSize:a=12,pageJump:i=2}=e,[c,l]=(0,o.useState)(0),d=n.length>(c+1)*a,loadMore=()=>{d&&l(e=>e+i)};if(0==n.length)return null;let _=n.slice(0,(c+1)*a);return(0,r.jsxs)("div",{className:h().gridWrapper,children:[t&&(0,r.jsxs)("div",{className:h().titleWrapper,children:[(0,r.jsx)("h2",{className:h().title,children:t}),(0,r.jsx)("span",{className:h().projectCount,children:"".concat(n.length," project").concat(n.length>1?"s":"")})]}),(0,r.jsx)("div",{className:h().grid,children:_.map(e=>(0,r.jsx)(projects_grid_ProjectCard,{...e},e.id))}),d&&(0,r.jsxs)("div",{className:h().actions,children:[(0,r.jsx)("p",{children:"Showing ".concat(_.length," of ").concat(n.length)}),(0,r.jsx)(s.Z,{onClick:()=>loadMore(),children:"Show More"})]})]})}},61306:function(e){e.exports={button:"Button_button__iZje6"}},93217:function(e){e.exports={iconSvg:"IconLink_iconSvg__HQHTJ"}},77454:function(e){e.exports={navbar:"NavBar_navbar__w9NXx",links:"NavBar_links__9ZJCr",titleLink:"NavBar_titleLink__HKe5A",secondaryLink:"NavBar_secondaryLink__dJ_Rh",icons:"NavBar_icons__PLRGq",icon:"NavBar_icon__4VX97",iconSvg:"NavBar_iconSvg__HjLoC"}},75410:function(e){e.exports={container:"Container_container__CIG8D",wide:"Container_wide__h5Rmh",narrow:"Container_narrow__6D5o0"}},95940:function(e){e.exports={footer:"Footer_footer__Cw0If",icons:"Footer_icons__HHXih",icon:"Footer_icon__s6wu9"}},52551:function(e){e.exports={page:"Page_page__ihMwS"}},164:function(e){e.exports={pageTitle:"PageTitle_pageTitle__Kmuxd"}},32634:function(e){e.exports={link:"ProjectCard_link__DIdza",card:"ProjectCard_card__28pwO",thumbnailContainer:"ProjectCard_thumbnailContainer__0o_cs",information:"ProjectCard_information__RDmgF",technology:"ProjectCard_technology__eDHAI",title:"ProjectCard_title__A3l5i"}},28236:function(e){e.exports={filters:"ProjectFilters_filters__v51c5",searchBox:"ProjectFilters_searchBox__09Ij0",message:"ProjectFilters_message__WEre_"}},17362:function(e){e.exports={gridWrapper:"ProjectsGrid_gridWrapper__pnPBY",titleWrapper:"ProjectsGrid_titleWrapper__R5VA3",title:"ProjectsGrid_title__Vic9J",projectCount:"ProjectsGrid_projectCount__Z8lpx",grid:"ProjectsGrid_grid__ygoMo",actions:"ProjectsGrid_actions__84uI6"}}},function(e){e.O(0,[151,219,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);