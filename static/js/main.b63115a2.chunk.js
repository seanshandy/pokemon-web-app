(this["webpackJsonppokemon-web-app"]=this["webpackJsonppokemon-web-app"]||[]).push([[0],{243:function(e,t,n){},244:function(e,t,n){},245:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},459:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(4),s=n(232),i=n.n(s),o=(n(243),n(244),n(24)),l=n(51),r=n(98),m=n(0);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.createElement("circle",{cx:32,cy:32,fill:"#57565c",r:16}),O=a.createElement("path",{d:"m62 32a30 30 0 0 1 -60 0h14a16 16 0 0 0 32 0z",fill:"#c6c5ca"}),x=a.createElement("circle",{cx:32,cy:32,fill:"#c6c5ca",r:10}),u=a.createElement("path",{d:"m62 32h-14a16 16 0 0 0 -32 0h-14a30 30 0 0 1 60 0z",fill:"#d80027"}),h=a.createElement("circle",{cx:32,cy:32,fill:"#cca400",r:3}),p=a.createElement("g",{fill:"#231f20"},a.createElement("path",{d:"m32 1a31 31 0 1 0 31 31 31.035 31.035 0 0 0 -31-31zm0 2a29.03 29.03 0 0 1 28.975 28h-11.975c-.018 0-.033.009-.05.01a16.978 16.978 0 0 0 -33.9 0c-.017 0-.032-.01-.05-.01h-11.975a29.03 29.03 0 0 1 28.975-28zm15 29a15 15 0 1 1 -15-15 15.017 15.017 0 0 1 15 15zm-15 29a29.03 29.03 0 0 1 -28.975-28h11.975c.018 0 .033-.009.05-.01a16.978 16.978 0 0 0 33.9 0c.017 0 .032.01.05.01h11.975a29.03 29.03 0 0 1 -28.975 28z"}),a.createElement("path",{d:"m6.726 25.811a1 1 0 0 0 1.236-.687 24.788 24.788 0 0 1 .961-2.739 1 1 0 0 0 -1.846-.771 27.076 27.076 0 0 0 -1.039 2.961 1 1 0 0 0 .688 1.236z"}),a.createElement("path",{d:"m9.56 18.842a1 1 0 0 0 1.381-.3 24.927 24.927 0 0 1 21.059-11.542 1 1 0 0 0 0-2 26.921 26.921 0 0 0 -22.742 12.46 1 1 0 0 0 .302 1.382z"}),a.createElement("path",{d:"m32 21a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9z"}),a.createElement("path",{d:"m32 28a4 4 0 1 0 4 4 4 4 0 0 0 -4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"}));function f(e,t){var n=e.title,c=e.titleId,s=d(e,["title","titleId"]);return a.createElement("svg",j({height:512,viewBox:"0 0 64 64",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},s),n?a.createElement("title",{id:c},n):null,b,O,x,u,h,p)}var g=a.forwardRef(f);n.p,n(245);var v=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],i=function(){return s(!1)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(m.b.Provider,{value:{color:"#fff"},children:Object(c.jsx)("div",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar-container container",children:[Object(c.jsxs)(l.c,{className:"navbar-logo",exact:!0,to:"/",onClick:i,children:[Object(c.jsx)(g,{className:"nav-icon"}),"Poke`mon"]}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return s(!n)},children:n?Object(c.jsx)(r.c,{}):Object(c.jsx)(r.b,{})}),Object(c.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.c,{exact:!0,to:"/pokedex",className:"nav-links",activeClassName:"is-active",onClick:i,children:"Poke`dex"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.c,{to:"/mypokemons",className:"nav-links",activeClassName:"is-active",onClick:i,children:"MyPokemons"})})]})]})})})})},k=n(23),A=n(42),N=n(233),y=n(100);function S(){var e=Object(y.a)(["\n    query pokemon($name: String!) {\n        pokemon(name: $name) {\n            id\n            name\n            weight\n            height\n            sprites {\n                front_default\n            }\n            abilities {\n                ability {\n                    name\n                    url\n                }\n            }\n            types {\n                type {\n                    name\n                    url\n                }\n            }\n        }\n    }\n"]);return S=function(){return e},e}function C(){var e=Object(y.a)(["\n    query pokemons($limit: Int, $offset: Int) {\n        pokemons(limit: $limit, offset: $offset) {\n            count\n            next\n            previous\n            nextOffset\n            prevOffset\n            status\n            message\n            results {\n                id\n                name\n                image\n            }\n        }\n    }\n"]);return C=function(){return e},e}var E=Object(A.gql)(C()),w=Object(A.gql)(S());n(256);var B=function(e){var t=e.pokemon,n=e.index,a=localStorage.getItem("my-pokemon"),s=!!t.mypokemonid,i=0;return!s&&a?JSON.parse(a).forEach((function(e){e.id===t.id&&i++})):i=0,Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(l.b,{to:"/pokemon/"+t.name+(s?"/"+t.nickname:""),className:"card",children:[Object(c.jsx)("div",{className:"pokemon-image-container",children:Object(c.jsx)("img",{src:t.image,alt:t.name,className:"pokemon-image"})}),Object(c.jsxs)("div",{className:"pokemon-info",children:[Object(c.jsxs)("span",{className:"pokemon-id",children:["#",t.id]}),s?Object(c.jsx)("span",{className:"pokemon-nickname",children:t.nickname}):null,Object(c.jsx)("span",{className:"pokemon-name",children:t.name}),s?null:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"pokemon-captured",children:"captured:"})," ",Object(c.jsx)("span",{className:"pokemon-total ".concat(i>0?"captured":"not-captured"),children:i})]})]}),s?Object(c.jsx)("span",{className:"mypokemon-id",children:n+1}):null]})})},I=(n(257),function(e){return Object(c.jsx)("button",{className:"btn ".concat(e.size),children:e.text})});n(258);var z=function(){var e=Object(k.g)(),t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1],l=Object(a.useState)(!0),r=Object(o.a)(l,2),m=r[0],j=r[1],d=Object(A.useLazyQuery)(E),b=Object(o.a)(d,2),O=b[0],x=b[1],u=x.error,h=x.data,p=12;function f(e){var t=Number(e<p?0:e);j(!0),O({variables:{limit:p,offset:t}})}return Object(a.useEffect)((function(){var e,t=null!==(e=localStorage.getItem("pokemon-last-offset"))?JSON.parse(e)-p:0;j(!0),f(t)}),[]),Object(a.useEffect)((function(){h&&i(h.pokemons)}),[h]),Object(a.useEffect)((function(){s&&(!function(e){console.log(s.results),localStorage.setItem("pokemon-last-offset",JSON.stringify(e.nextOffset))}(s),j(!1))}),[s]),u?Object(c.jsx)("h1",{children:" Error fetching data from "}):Object(c.jsxs)(c.Fragment,{children:[m?Object(c.jsx)("h1",{children:"Loading..."}):Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"pagination",children:[s.nextOffset-24>=0?Object(c.jsx)("div",{className:"btn-prev",onClick:function(){return f(s.nextOffset-24)},children:Object(c.jsx)(I,{text:"prev",size:"size-modal"})}):null,Object(c.jsx)("div",{className:"btn-next ".concat(s.nextOffset-24<=0?"single-btn":""),onClick:function(){return f(s.nextOffset)},children:Object(c.jsx)(I,{text:"next",size:"size-modal"})})]})}),Object(c.jsx)("div",{className:"icon-box-container",title:"MyPokemons",onClick:function(){e.push("/mypokemons")},children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABYgAAAWIBXyfQUwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAjzSURBVHic7Zt5bBTXHcc/bw97fWEbWB+YyzEYJ6YEN4QkSCAUpIggaA4lKRJS0laCUiWItkolklZtI0WoaVAimlYNSaRQCYQCCKjSAopEZUhFGmjBEGxOg2tjfGzxro13vd7dmdc/3s6OvV5f610fMV/pybMz7838ft/5Xe+9sZBSMplhGWsBxhr3CRhrAcYak54A23A6CyEE4ATSY1zOBLIBkQC5BoIE2oHOGNd8gEsOI7KLgfoKIdKBNcA6YDlQBKQMR9oxQABoBL4EPgeOSil9/faWUsZswAqgFsX4RG61wIr+9OxjAUKINGA7sBUQzhzBioctLJgt+NtpjYu1qr/daqVgajaFuVMonJpNYW42uZmxPCPxcHf6aHK309TWTpO7g+a2doKaBsCiEsG6xYIrt3ROXQfXPQgTsRN4U0rZ1UvfngQIIR4EDgMLAH74tJX3ttipa5I882aA+hbVd/6MPJ5+pJwMR2rytR0CvP5ujv2nmut3WgGYnS/462/tFMsQP9uj8+npSNerwHNSysvGiQgBQogU4CywqGi6YNcv7Kx53MJX1TortwQIaiCEICM1hVT7sGLnqKE7GMLbHUBKid0KlX9IYVmuxtHTOpv2SBo9AFwEHpVSBgB6+vzbgHTmCNl8JFXqJx2y47hDFheKsfbhuFtxoZAdf3dI+YlFtrwrpDMzcu3tXjFACLEUOA1Y979l54WVVgBe/1OI9/aHEEJQPrOQzHFi8oOh099N9e0mpJT8/CUbO16xIBqCHDwHL34kATRgmZTyjACswCWg7PtPWtn3GzsAdc2Ssg3dBEIwr8DJQzMLx0yheHD5djPXm1tJscGVvakUSw08Gus/kXz2bwCuAAstqPxelpYKH/zU9O139oYIhCArzUFZUcGYKDESLCjKJyvNQSCkdJFOZdV/XC9IU++4DFhuAZ4FqJhvYXq2KuJ0HQ6d0gEoLczDIpJd3CUeFiEoLcwDlC66RYBNMD0TKmZHuj1rA54AWLLAVLKySsflUdmh3deFLxAYRdETh2BI1QYuj6SySmeVU0CnZMkcOF0LwBM2oBDgkTJzXrT7mBY5vtHsGkWRk4fdxzRWbRLQCUvmCFQyoNAGFIByAQM5mcoa0lNTKJqWM/rSJhCNdz34ugPkZAqkw4JAo2JW5HKBDbADZKaZg+75lPk/XDyTld8pHVWBE43Kb67x1ZWbSqfwO840s7k95nqAP+zy47XiGw4MHfz9hLFJvyByn4CxFmCsEckHkxUWJjcB0ga4gLx3nhcsnGFeab0HgdDIn3C8Gg5XSRY+ICKzzMFwsFLj0k3Jc4sFq8tHLkOKDfKyQPdDyCupboVfnQDAZQPcQF5ZAaxZOPKHRaPNC4eroHyuhV+/MrS0erlOcummxtK5sGl54mQJdULAA0Gz0HXbgDYAtzdxDxoKjp/ROfAPJcmLT1pZvTT58Vjqyts9/sipNsMCcPe/cJxwfHBIY+vOYOT3p8c0dm61s+X5oblIvJBqgovbJMDdgwBJ9J5GSIeD5+DkNUm8m8hVDepvZ5e6QTAEb+xSyheXLwbgVnUVb+wKsvl7Vuw2s++RKknd3fieKwQsnyd4aQnYDOMKE+Ax14XdA1rAD3ZL9p6JT4Bo3LitlKpvlfj8aoF12doXAKiruYDPL6lvlZTMEJG+X9epFi8+PCU5egn2/Ei9WMMCPLEtoPfgriAcOq+OS/KdxLsm4vb6uHvPS+lsdYM5+YKsdDXh+mLPR0owKclKV9cASmcLrjZIpmVlkJsR316DlFDb4uLQeaVLmn1QF+h7k66wm84rcMY9MaptdnH3npdUu1LOZoUdr9rZvCOIq7EeUOa641U7tnAIMPoWZE+hpMAZ13O7gyFqW1wRHYCYLmChHwLS7JAa1jkQir8gyEpzAHDpph45t3GtlSPbzS3GI9tT2LjWDIBGX2NsPDBkTrVhrAFG4lhPFzAJiJEGc8PWZ2w7xYOcDLXQcLVBRpbZAFYutsQ8dnkkVxtkr7HxwJA5t4cHDdsFpmZAc4daF7Ra4s/TGakpeLsDvPZ+iM/eUq8jKx1eX2+LHBt47f0QUqoxXYEgXYFgrFsOinZfV0QHwNwuoZ8g6Om1ZRi+Giblm/o7cQkRjQOVGnM/hN/92I4Q8PufmHFFSti2K8iBSvXmvN0BTtZcH/Ez28N6Sb3HuVgE+IOqOexmR2cmNLWDzWoZkQUAhDQdTdd5d5/G1zWSjeusfLdU3fPcNZ2PP9c4dUFJabVYsFlH9jxN1wlpOs5M9dsgwB9SLQyTAFBvvDDbvMniWXCxER5f8ADLy+eNSCCA87UNnLh4hVMXTGV7wm6zsmpRGRUls2KMHh6+rL7BP2tusGhm+ETfGgDAbZNSeoUQASAlmgAjgPiD8flhNCpKZjE3fxpnr9fR4u6gpV1t3udnZ5GfO4VH589N2DcGhsyGDjGKoICU0ms4oQfIiw6EuelqvcQfZyCKhdzMdJ6qeEgJZW7NJ+z+BgyZlQ49MoAZ6zxgLompGWEUAUYETSQBPSGESIryYMrcKwvQOwOA+ZVYzFSYHq5V6l1t/OXEv5IiaLLwvw7lXoYOsabCEE1AVDHkC6+lB0Iad9o8yZI1qTB0iFUEwSAWsGSO+mu3Wlk0pyh5UiYBF//bSFDTIjrEmgdAHwJ6rwkYEVTTdYqmTqw9wvO31ELEAFnADWYQjGkBxmBdSjS9b94er9B0HT2cYaIJiHaBAQmIRFBUHJgo6ClrRIehuIAnigC7FaY4oMMPt++6cdjtTAQYRdAUh9IBzKlwe3ek2+BBEGDDY/Dnk3C5sTlJ4iYPGx4zj2MUQkMjYPszgtm58MVliT5B9pAsAp56ULB5RfhEP1NhGAIBOemwbTVsWz3xPpQy0HMqPGAW8AUSsx023mAQENDAZ1b1fQmA0d0gGTX0MxWGMAFSSi9QA7DvLHFvgoxXaAEVAvZXR07VhHXu9bH0y4yDD5xHqb0c0bsHATbgl8CtcSBgstqtsI62gf5jxALM49v3+YwO3JBS9qrpB/ynqcmAb9tbHjbuEzDWAow1Jj0B/weUdNbIvnDvlQAAAABJRU5ErkJggg==",alt:"box",className:"icon-box"})}),Object(c.jsx)("div",{className:"grid-container",children:""===s||m?null:Object(c.jsx)(c.Fragment,{children:s.results.map((function(e){return Object(c.jsx)(B,{pokemon:e},e.id)}))})})]})},F=n(236),P=n.p+"static/media/icon_pokedex.91bd3e6a.png",L=(n(259),function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1];function l(t){e.onSavedPokemon(t.trim())}return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"modal ".concat(e.show?"show":""),onClick:function(t){return function(t){if(void 0===e.catched&&!0!==e.catched)return e.onClose();t.stopPropagation()}(t)},children:Object(c.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(c.jsx)("div",{className:"modal-header",children:Object(c.jsx)("h4",{children:e.title})}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsx)("span",{className:"modal-body-text",children:e.body}),e.catched?Object(c.jsx)("input",{type:"text",className:"form-nickname",value:s,onChange:function(e){i(e.target.value)}}):null]}),Object(c.jsx)("div",{className:"modal-footer",children:Object(c.jsxs)(c.Fragment,{children:[e.catched?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{onClick:function(){return l(s)},children:Object(c.jsx)(I,{text:"SUBMIT",size:"size-modal"})}),Object(c.jsx)("div",{onClick:function(){return l(s)},children:Object(c.jsx)(I,{text:"NO",size:"size-modal"})})]}):e.release?null:Object(c.jsx)("div",{onClick:e.onClose,children:Object(c.jsx)(I,{text:"OK",size:"size-modal"})}),e.release&&!e.catched?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{onClick:function(){e.onReleasePokemon()},children:Object(c.jsx)(I,{text:"OK",size:"size-modal"})}),Object(c.jsx)("div",{onClick:e.onClose,children:Object(c.jsx)(I,{text:"Cancel",size:"size-modal"})})]}):null]})})]})})})});n(260);var Q=function(){var e=Object(k.g)(),t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],i=n[1],l=Object(a.useState)(!0),r=Object(o.a)(l,2),j=r[0],d=r[1],b=Object(a.useState)(!1),O=Object(o.a)(b,2),x=O[0],u=O[1],h=Object(a.useState)([]),p=Object(o.a)(h,2),f=p[0],g=p[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("my-pokemon")?localStorage.getItem("my-pokemon"):[],t=e.length>0?JSON.parse(e):[];t.length>0&&i(t),d(!1)}),[]),Object(a.useEffect)((function(){}),[j]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L,{title:"Release",body:"Are you sure want to release this Pokemon?",show:x,onClose:function(){return u(!1)},onReleasePokemon:function(){d(!1);var e=s;e.splice(e.findIndex((function(e){return e.mypokemonid===f})),1),localStorage.setItem("my-pokemon",JSON.stringify(e)),i(e),u(!1),d(!1)},release:"release"}),Object(c.jsx)("div",{className:"icon-pokedex-container",onClick:function(){e.push("/pokedex")},children:Object(c.jsx)("img",{src:P,alt:"Pokedex",title:"Poke`dex",className:"icon-pokedex"})}),Object(c.jsx)("div",{className:"grid-container",children:j?Object(c.jsx)("h1",{children:"Loading..."}):s.length>0?s.map((function(e,t){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)(B,{pokemon:e,index:t}),Object(c.jsx)("div",{className:"icon-release-box",title:"Release Pokemon",onClick:function(){return t=e.mypokemonid,g(t),void u(!0);var t},children:Object(c.jsx)(m.b.Provider,{value:{className:"icon-release"},children:Object(c.jsx)(F.a,{})})})]},e.mypokemonid)})):Object(c.jsx)("h1",{children:"Let's Catch Some Pokemon!"})})]})};n(261),n(262);var H=function(){var e=Object(k.g)(),t=Object(k.h)().name,n=Object(k.h)().nickname,s=Object(a.useState)(),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(a.useState)(!0),b=Object(o.a)(d,2),O=b[0],x=b[1],u=Object(A.useLazyQuery)(w,{variables:{name:t}}),h=Object(o.a)(u,2),p=h[0],f=h[1].data,g=Object(a.useState)(!1),v=Object(o.a)(g,2),N=v[0],y=v[1],S=Object(a.useState)(),C=Object(o.a)(S,2),E=C[0],B=C[1],z=Object(a.useState)(),F=Object(o.a)(z,2),P=F[0],Q=F[1],H=Object(a.useState)(!1),J=Object(o.a)(H,2),D=J[0],Y=J[1];return Object(a.useEffect)((function(){x(!0),p()}),[]),Object(a.useEffect)((function(){f&&O&&j(f.pokemon)}),[f]),Object(a.useEffect)((function(){l&&x(!1)}),[l]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"p-detail-page",children:[Object(c.jsx)(L,{title:E,body:P,show:N,catched:D,onClose:function(){return y(!1)},onSavedPokemon:function(t){var n,c=""!==t?t:l.name,a=localStorage.getItem("my-pokemon")?localStorage.getItem("my-pokemon"):[],s=a.length>0?JSON.parse(a):[],i=s.length>0?s[s.length-1].mypokemonid+1:1,o=[],r={id:l.id,name:l.name,image:l.sprites.front_default,mypokemonid:i,nickname:c};1===i?o.push(r):(o=s).push(r),localStorage.setItem("my-pokemon",JSON.stringify(o)),Y(!1),y(!1),n="/mypokemons",e.push(n)}}),!O&&l?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.b.Provider,{value:{className:"icon-back"},children:Object(c.jsx)("div",{onClick:function(){return e.goBack()},title:"Go Back",className:"btn-back",children:Object(c.jsx)(r.a,{})})}),Object(c.jsx)("div",{className:"p-detail-header-container",children:Object(c.jsxs)("span",{className:"header-text",children:[l.name," \xa0",Object(c.jsxs)("span",{className:"header-id",children:["#",l.id]})]})}),Object(c.jsxs)("div",{className:"p-detail-container",children:[Object(c.jsxs)("div",{className:"p-detail-img-container",children:[Object(c.jsx)("img",{className:"p-detail-img",src:l.sprites.front_default,alt:l.name}),n?Object(c.jsx)("span",{className:"nickname-text",children:n}):Object(c.jsx)("div",{className:"catch-pokemon",onClick:function(){return function(){var e=Math.random();window.setTimeout(null,1e3),e>.5?(B("Gotcha!"),Q("Give a nickname?"),Y(!0),y(!0)):(B("Oops"),Q("We've lost it, try again!"),Y(!1),y(!0))}()},children:Object(c.jsx)(I,{text:"catch"})})]}),Object(c.jsxs)("div",{className:"p-detail-info-container",children:[Object(c.jsxs)("div",{className:"p-detail-info-box type-".concat(l.types[0].type.name),children:[Object(c.jsxs)("div",{className:"p-detail-info-box-left",children:[Object(c.jsxs)("div",{className:"box-height",children:[Object(c.jsx)("span",{className:"box-text-title",children:"Height"}),Object(c.jsxs)("span",{className:"box-text-value",children:[l.height," ft"]})]}),Object(c.jsxs)("div",{className:"box-weight",children:[Object(c.jsx)("span",{className:"box-text-title",children:"Weight"}),Object(c.jsxs)("span",{className:"box-text-value",children:[l.weight," lbs"]})]})]}),Object(c.jsx)("div",{className:"p-detail-info-box-right",children:Object(c.jsxs)("div",{className:"box-abilities",children:[Object(c.jsx)("span",{className:"box-text-title",children:"Abilities"}),Object(c.jsx)("ul",{className:"abilitiy",children:l.abilities.map((function(e){return Object(c.jsx)("li",{className:"box-text-value abilities",children:e.ability.name},e.ability.name)}))})]})})]}),Object(c.jsxs)("div",{className:"p-detail-info-type-box",children:[Object(c.jsx)("span",{className:"box-text-title",children:"Type"}),l.types.map((function(e){return Object(c.jsx)("div",{className:"type type-".concat(e.type.name),children:Object(c.jsx)("span",{className:"type-value",children:e.type.name})},e.type.name)}))]})]})]})]}):Object(c.jsx)("span",{children:"Loading.."})]})})},J=n(237);n(263);function D(){var e=Object(y.a)(["\n        font-size: 5rem;\n        font-weigth: bold;\n        text-transform: uppercase;\n        text-align: center;\n        "]);return D=function(){return e},e}var Y=function(){return Object(c.jsx)("div",{css:Object(J.a)(D()),className:"not-found",children:"404 Not Found..."})},G=Object(N.a)((function(e){var t=e.graphqlErrors;e.networkError;t&&t.map((function(e){var t=e.message;e.location,e.path;return alert("Graphql error ".concat(t)),null}))})),U=Object(A.from)([G,new A.HttpLink({uri:"https://graphql-pokeapi.vercel.app/api/graphql"})]),M=new A.ApolloClient({cache:new A.InMemoryCache,link:U});var Z=function(){var e=!!localStorage.getItem("visited-new")&&JSON.parse(localStorage.getItem("visited-new"));return localStorage.removeItem("pokemon-data"),localStorage.removeItem("pokemon-data-offset"),!1===e&&(localStorage.removeItem("my-pokemon"),localStorage.setItem("visited-new",!0)),Object(c.jsx)(A.ApolloProvider,{client:M,children:Object(c.jsxs)(l.a,{basename:"/",children:[Object(c.jsx)(v,{}),Object(c.jsx)("div",{className:"container page",children:Object(c.jsxs)(k.d,{children:[Object(c.jsx)(k.b,{exact:!0,path:"/",children:Object(c.jsx)(k.a,{to:"/pokedex",component:z})}),Object(c.jsx)(k.b,{exact:!0,path:"/pokedex",component:z}),Object(c.jsx)(k.b,{exact:!0,path:"/mypokemons",component:Q}),Object(c.jsx)(k.b,{exact:!0,path:"/pokemon/:name",component:H}),Object(c.jsx)(k.b,{exact:!0,path:"/pokemon/:name/:nickname",component:H}),Object(c.jsx)(k.b,{exact:!0,path:"*",component:Y})]})})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,461)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(265),n(275);i.a.render(Object(c.jsx)(Z,{}),document.getElementById("root")),K()}},[[459,1,2]]]);
//# sourceMappingURL=main.b63115a2.chunk.js.map