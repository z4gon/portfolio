(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(2933)}])},2933:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Z},default:function(){return C}});var r=n(5893),a=n(6103),o=n(9520),i=n.n(o),s=n(6653),c=n(4184),l=n.n(c),d=n(8334),u=n.n(d);let h=e=>{let{title:t,imageUrl:n,imageSourceUrl:a=null,className:o}=e;return(0,r.jsxs)("div",{className:l()(u().coverImage,o),children:[(0,r.jsx)("img",{src:n,alt:"Cover Image for ".concat(t)}),a&&(0,r.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"Image Source \uD83D\uDD17"})]})};var m=n(8674),x=n(9904),_=n.n(x);let g=e=>{let{children:t}=e;return(0,r.jsx)("h1",{className:_().postTitle,children:t})},p=e=>{let{title:t,coverImageUrl:n,coverImageSourceUrl:a,coverVideoUrl:o="",date:c,author:l}=e;return(0,r.jsxs)("div",{className:i().postHeader,children:[(0,r.jsx)(g,{children:t}),(0,r.jsxs)("div",{className:i().authorAndDate,children:[(0,r.jsx)(s.Z,{name:l.name,pictureUrl:l.pictureUrl}),(0,r.jsx)(m.Z,{dateString:c})]}),o&&(0,r.jsx)("video",{muted:!0,playsInline:!0,controls:!0,className:i().coverVideo,children:(0,r.jsx)("source",{src:o,type:"video/mp4"})}),!o&&(0,r.jsx)(h,{title:t,imageUrl:n,imageSourceUrl:a,className:i().picture})]})},j=e=>{let{post:t}=e,{title:n,date:o,author:i,coverImageUrl:s,coverVideoUrl:c="",coverImageSourceUrl:l,markdownContent:d}=t;return(0,r.jsxs)("article",{children:[(0,r.jsx)(p,{title:n,coverImageUrl:s,coverImageSourceUrl:l,coverVideoUrl:c,date:o,author:i}),(0,r.jsx)(a.Z,{markdownString:d})]})};var v=n(8721),f=n(3686),w=n(1768),N=n(8625),y=n(4015),k=n.n(y),Z=!0;function C(e){let{post:t}=e;if(!t)return null;let{slug:n,title:a,excerpt:o,coverImageUrl:i}=t;return(0,r.jsxs)(w.Z,{className:k().blog,children:[(0,r.jsx)(v.Z,{title:a,description:o,imageUrl:i,pathUrl:"/blog/".concat(n)}),(0,r.jsxs)(f.Z,{wide:!1,children:[(0,r.jsx)(N.Z,{amount:"3.5em"}),(0,r.jsx)(j,{post:t}),(0,r.jsx)(N.Z,{amount:"3.5em"})]})]})}},8721:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),a=n(9008),o=n.n(a);function i(e){let t="https://z4gon.github.io",{title:n="Gonzalo Cumini | Portfolio",pathUrl:a,imageUrl:i="/thumbnail.gif",faviconUrl:s="/favicon.ico",description:c="Gonzalo Cumini | Portfolio"}=e,l="".concat(t).concat(a),d="".concat(t).concat(i),u="".concat(t).concat(s);return(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{name:"description",content:c}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:l}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:c}),(0,r.jsx)("meta",{property:"og:image",content:d}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{property:"twitter:url",content:l}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:c}),(0,r.jsx)("meta",{property:"twitter:image",content:d}),(0,r.jsx)("link",{rel:"icon",href:u}),(0,r.jsx)("link",{rel:"canonical",href:l},"canonical")]})}},8625:function(e,t,n){"use strict";var r=n(5893);let a=e=>{let{amount:t}=e;return(0,r.jsx)("div",{style:{paddingTop:t}})};t.Z=a},6653:function(e,t,n){"use strict";var r=n(5893),a=n(7517),o=n.n(a);let i=e=>{let{name:t,pictureUrl:n}=e;return(0,r.jsxs)("div",{className:o().avatar,children:[(0,r.jsx)("img",{src:n,alt:t}),(0,r.jsx)("div",{className:o().name,children:t})]})};t.Z=i},8674:function(e,t,n){"use strict";var r=n(5893),a=n(8420),o=n(6159),i=n(4425),s=n.n(i);let c=e=>{let{dateString:t}=e,n=(0,a.Z)(t);return(0,r.jsx)("time",{className:s().dateFormatter,dateTime:t,children:(0,o.Z)(n,"LLLL	d, yyyy")})};t.Z=c},2665:function(e,t,n){"use strict";var r=n(5893);let a=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})};t.Z=a},6103:function(e,t,n){"use strict";var r=n(5893),a=n(7294),o=n(4740),i=n(8189),s=n(855),c=n.n(s);let l=e=>{let{node:t,inline:n,className:a,children:o,...s}=e,c=/language-(\w+)/.exec(a||"");return!n&&c?(0,r.jsx)(i.Z,{showLineNumbers:!0,language:c[1],PreTag:"div",...s,children:String(o).replace(/\n$/,"")}):(0,r.jsx)("code",{className:a,...s,children:o})};function d(e,t){return"string"==typeof t?e+t:a.Children.toArray(t.props.children).reduce(d,e)}let u=e=>{var t=a.Children.toArray(e.children).reduce(d,"").toLowerCase().replace(/\W/g,"-");return a.createElement("h"+e.level,{id:t},e.children)},h=e=>{let{markdownString:t}=e;return(0,r.jsx)("div",{className:c().markdownContent,children:(0,r.jsx)(o.D,{components:{code:l,h1:u,h2:u,h3:u,h4:u,h5:u,h6:u},children:t})})};t.Z=h},3686:function(e,t,n){"use strict";var r=n(5893),a=n(4184),o=n.n(a),i=n(2980),s=n.n(i);let c=e=>{let{children:t,className:n,wide:a=!0}=e;return(0,r.jsx)("main",{className:o()(s().container,{[s().wide]:a},{[s().narrow]:!a},n),children:t})};t.Z=c},1768:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(5893),a=n(4184),o=n.n(a),i=n(4839),s=n.n(i),c=n(1664),l=n.n(c),d=n(8209),u=n.n(d);n(7294);var h=n(8984),m=n.n(h);let x=e=>{let{href:t,Icon:n}=e;return(0,r.jsx)("a",{href:t,rel:"noopener noreferrer",target:"_blank",children:(0,r.jsx)(n,{className:m().iconSvg})})};var _=n(2665);let g=e=>{let{className:t}=e;return(0,r.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})},p=[{href:"https://linkedin.com/in/gonzacn",Icon:g},{href:"https://github.com/z4gon",Icon:_.Z}],j=()=>(0,r.jsxs)("nav",{className:u().navbar,children:[(0,r.jsxs)("ul",{className:u().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/",className:u().titleLink,children:(0,r.jsx)("h1",{className:u().title,children:"Gonzalo Cumini"})})}),(0,r.jsx)("li",{className:u().secondaryLink,children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("h1",{children:"Portfolio"})})}),(0,r.jsx)("li",{className:u().secondaryLink,children:(0,r.jsx)(l(),{href:"/blog",children:(0,r.jsx)("h1",{children:"Blog"})})})]}),(0,r.jsx)("ul",{className:u().icons,children:p.map(e=>(0,r.jsx)("li",{className:u().icon,children:(0,r.jsx)(x,{...e})},e.href))})]});var v=n(4980),f=n.n(v);let w=[{href:"https://linkedin.com/in/gonzacn",Icon:g},{href:"https://github.com/z4gon",Icon:_.Z}],N=()=>(0,r.jsxs)("footer",{className:f().footer,children:[(0,r.jsxs)("p",{children:["\xa9"," ".concat(new Date().getFullYear(),", Gonzalo Cumini")]}),(0,r.jsx)("ul",{className:f().icons,children:w.map(e=>(0,r.jsx)("li",{className:f().icon,children:(0,r.jsx)(x,{...e})},e.href))})]});var y=n(4298),k=n.n(y);let Z=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k(),{id:"google-analytics-setup",src:"https://www.googletagmanager.com/gtag/js?id=G-NPBT98N1FD",strategy:"afterInteractive"}),(0,r.jsx)(k(),{id:"google-analytics",strategy:"afterInteractive",children:"\n                        window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'G-NPBT98N1FD');\n                    "})]}),C=e=>{let{className:t,children:n}=e;return(0,r.jsxs)("div",{className:o()(s().page,t),children:[(0,r.jsx)(Z,{}),(0,r.jsx)(j,{}),n,(0,r.jsx)(N,{})]})};var L=C},8984:function(e){e.exports={iconSvg:"IconLink_iconSvg__kq2nE"}},7517:function(e){e.exports={avatar:"Avatar_avatar__G9F0L",name:"Avatar_name__yGpBe"}},8334:function(e){e.exports={coverImage:"CoverImage_coverImage__lFFCh"}},4425:function(e){e.exports={dateFormatter:"DateFormatter_dateFormatter__UBCZJ"}},9520:function(e){e.exports={postHeader:"PostHeader_postHeader__aw96i",authorAndDate:"PostHeader_authorAndDate__tbJVE",coverVideo:"PostHeader_coverVideo__CTucm"}},9904:function(e){e.exports={postTitle:"PostTitle_postTitle__oD_V4"}},855:function(e){e.exports={markdownContent:"MarkdownContent_markdownContent__TdwXL"}},8209:function(e){e.exports={navbar:"NavBar_navbar__W8B89",links:"NavBar_links__s6P8N",titleLink:"NavBar_titleLink__OtPh0",secondaryLink:"NavBar_secondaryLink__TpgXh",icons:"NavBar_icons__Q_6kO",icon:"NavBar_icon__MjYq8",iconSvg:"NavBar_iconSvg__yYGbL"}},2980:function(e){e.exports={container:"Container_container__B4HQR",wide:"Container_wide__dsumm",narrow:"Container_narrow__Miio9"}},4980:function(e){e.exports={footer:"Footer_footer__rEL09",icons:"Footer_icons__IyNdc",icon:"Footer_icon__mhtwE"}},4839:function(e){e.exports={page:"Page_page__0A7TG"}},4015:function(){}},function(e){e.O(0,[151,895,358,774,888,179],function(){return e(e.s=1127)}),_N_E=e.O()}]);