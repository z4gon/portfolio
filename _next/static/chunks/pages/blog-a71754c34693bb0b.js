(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(3152)}])},3152:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Z},default:function(){return k}});var r=n(5893),a=n(7294),s=n(843),i=n.n(s),o=n(7543),c=n(4184),l=n.n(c),u=n(1664),d=n.n(u),h=n(2801),m=n.n(h),_=n(6653),g=n(8674);let x=e=>{let{isHero:t=!1,title:n,coverImageUrl:a,date:s,author:i,slug:o}=e;return(0,r.jsxs)("section",{className:l()(m().postPreview,{[m().hero]:t}),children:[(0,r.jsx)("div",{className:m().imageWrapper,children:(0,r.jsx)(d(),{as:"/blog/".concat(o),href:"/blog/[slug]","aria-label":n,children:(0,r.jsx)("div",{className:m().image,style:{backgroundImage:"url(".concat(a,")")}})})}),(0,r.jsxs)("div",{className:m().info,children:[(0,r.jsx)("h3",{className:m().title,children:(0,r.jsx)(d(),{as:"/blog/".concat(o),href:"/blog/[slug]",children:n})}),(0,r.jsxs)("div",{className:m().authorAndDate,children:[(0,r.jsx)(_.Z,{name:i.name,pictureUrl:i.pictureUrl,small:!0}),(0,r.jsx)(g.Z,{dateString:s,dateFormat:"MMM yyyy"})]})]})]})},p=e=>{let{posts:t}=e,[n,s]=(0,a.useState)(0),c=t.length>(n+1)*20,l=()=>{c&&s(e=>e+1)};if(0==t.length)return null;let u=t.slice(0,(n+1)*20);return(0,r.jsxs)("section",{className:i().postsGrid,children:[(0,r.jsx)("div",{className:i().grid,children:u.map(e=>(0,r.jsx)(x,{title:e.title,coverImageUrl:e.coverImageUrl,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug))}),c&&(0,r.jsxs)("div",{className:i().actions,children:[(0,r.jsx)("p",{children:"Showing ".concat(u.length," of ").concat(t.length)}),(0,r.jsx)(o.Z,{onClick:()=>l(),children:"Show More"})]})]})};var j=n(8721),v=n(3686),f=n(1768),w=n(9944),N=n(8625),y=n(4015),P=n.n(y),Z=!0;function k(e){let{allPosts:t}=e;return(0,r.jsxs)(f.Z,{className:P().blog,children:[(0,r.jsx)(j.Z,{title:"Gonzalo Cumini | Blog",description:"Gonzalo Cumini | Blog",pathUrl:"/blog"}),(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(N.Z,{amount:"2em"}),(0,r.jsx)(w.Z,{children:"Blog"}),(0,r.jsx)(N.Z,{amount:"2em"}),t.length>0&&(0,r.jsx)(p,{posts:t}),(0,r.jsx)(N.Z,{amount:"6em"})]})]})}},7543:function(e,t,n){"use strict";var r=n(5893);n(7294);var a=n(4184),s=n.n(a),i=n(343),o=n.n(i);let c=e=>{let{className:t,onClick:n,children:a}=e;return(0,r.jsx)("button",{className:s()(t,o().button),onClick:n,children:a})};t.Z=c},8721:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(9008),s=n.n(a);function i(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:a,imageUrl:i="/thumbnail.gif",faviconUrl:o="/favicon.ico",description:c="Gonzalo Cumini | Portfolio"}=e,l="".concat(t).concat(a),u="".concat(t).concat(i),d="".concat(t).concat(o);return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:c}),(0,r.jsx)("meta",{property:"og:image",content:u}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:l}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:c}),(0,r.jsx)("meta",{property:"twitter:image",content:u}),(0,r.jsx)("link",{rel:"icon",href:d}),(0,r.jsx)("link",{rel:"canonical",href:l},"canonical")]})}},8625:function(e,t,n){"use strict";var r=n(5893);let a=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})};t.Z=a},6653:function(e,t,n){"use strict";var r=n(5893),a=n(4184),s=n.n(a),i=n(7517),o=n.n(i);let c=e=>{let{name:t,pictureUrl:n,small:a=!1}=e;return(0,r.jsxs)("div",{className:s()(o().avatar,{[o().small]:a}),children:[(0,r.jsx)("img",{src:n,alt:t}),(0,r.jsx)("div",{className:o().name,children:t})]})};t.Z=c},8674:function(e,t,n){"use strict";var r=n(5893),a=n(8420),s=n(6159),i=n(4425),o=n.n(i);let c=e=>{let{dateString:t,dateFormat:n="LLLL	d, yyyy"}=e,i=(0,a.Z)(t);return(0,r.jsx)("time",{className:o().dateFormatter,dateTime:t,children:(0,s.Z)(i,n)})};t.Z=c},2665:function(e,t,n){"use strict";var r=n(5893);let a=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};t.Z=a},3686:function(e,t,n){"use strict";var r=n(5893),a=n(4184),s=n.n(a),i=n(2980),o=n.n(i);let c=e=>{let{children:t,className:n,wide:a=!0}=e;return(0,r.jsx)("main",{className:s()(o().container,{[o().wide]:a},{[o().narrow]:!a},n),children:t})};t.Z=c},1768:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5893),a=n(4184),s=n.n(a),i=n(4839),o=n.n(i),c=n(1664),l=n.n(c),u=n(8209),d=n.n(u);n(7294);var h=n(8984),m=n.n(h);let _=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:m().iconSvg})})};var g=n(2665);let x=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},p=[{href:"https://linkedin.com/in/gonzacn",Icon:x},{href:"https://github.com/z4gon",Icon:g.Z}],j=()=>(0,r.jsxs)("nav",{className:d().navbar,children:[(0,r.jsxs)("ul",{className:d().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",className:d().titleLink,children:(0,r.jsx)("h1",{className:d().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:d().secondaryLink,children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:d().secondaryLink,children:(0,r.jsx)(l(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:d().icons,children:p.map(e=>(0,r.jsx)("li",{className:d().icon,children:(0,r.jsx)(_,{...e})},e.href))})]});var v=n(4980),f=n.n(v);let w=[{href:"https://linkedin.com/in/gonzacn",Icon:x},{href:"https://github.com/z4gon",Icon:g.Z}],N=()=>(0,r.jsxs)("footer",{className:f().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:f().icons,children:w.map(e=>(0,r.jsx)("li",{className:f().icon,children:(0,r.jsx)(_,{...e})},e.href))})]});var y=n(4298),P=n.n(y);let Z=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(P(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]}),k=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:s()(o().page,t),children:[(0,r.jsx)(Z,{}),(0,r.jsx)(j,{}),n,(0,r.jsx)(N,{})]})};var b=k},9944:function(e,t,n){"use strict";var r=n(5893),a=n(5384),s=n.n(a);let i=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:s().pageTitle,children:t})};t.Z=i},343:function(e){e.exports={button:"Button_button__uOckH"}},8984:function(e){e.exports={iconSvg:"IconLink_iconSvg__kq2nE"}},7517:function(e){e.exports={avatar:"Avatar_avatar__G9F0L",name:"Avatar_name__yGpBe",small:"Avatar_small__qMx7T"}},4425:function(e){e.exports={dateFormatter:"DateFormatter_dateFormatter__UBCZJ"}},2801:function(e){e.exports={postPreview:"PostPreview_postPreview__Pu6TC",imageWrapper:"PostPreview_imageWrapper__MsCCg",image:"PostPreview_image__c4sSq",title:"PostPreview_title__10tAo",authorAndDate:"PostPreview_authorAndDate__VvA1l"}},843:function(e){e.exports={postsGrid:"PostsGrid_postsGrid__wYZnt",grid:"PostsGrid_grid__02xZU",actions:"PostsGrid_actions__HZkYT"}},8209:function(e){e.exports={navbar:"NavBar_navbar__W8B89",links:"NavBar_links__s6P8N",titleLink:"NavBar_titleLink__OtPh0",secondaryLink:"NavBar_secondaryLink__TpgXh",icons:"NavBar_icons__Q_6kO",icon:"NavBar_icon__MjYq8",iconSvg:"NavBar_iconSvg__yYGbL"}},2980:function(e){e.exports={container:"Container_container__B4HQR",wide:"Container_wide__dsumm",narrow:"Container_narrow__Miio9"}},4980:function(e){e.exports={footer:"Footer_footer__rEL09",icons:"Footer_icons__IyNdc",icon:"Footer_icon__mhtwE"}},4839:function(e){e.exports={page:"Page_page__0A7TG"}},5384:function(e){e.exports={pageTitle:"PageTitle_pageTitle__mlEZF"}},4015:function(){}},function(e){e.O(0,[151,358,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);