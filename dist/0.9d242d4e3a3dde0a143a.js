webpackJsonp([0],{422:function(e,t,a){"use strict";function l(e){return{type:o,payload:e}}function r(e){return{type:m,payload:e}}function n(e){return function(t){t(l(e.qs));var a=d+"api-key="+f+"&q="+e.qs+"&begin_date="+e.startDate+"0101&end_date="+e.endDate+"1231";fetch(a).then(function(e){return e.json()}).then(function(e){var a=e.response.docs;return t(r(a))}).catch(function(e){console.log("parsing failed",e)})}}function i(){return{type:h,payload:null}}function u(){return{type:p,payload:null}}function c(){return{type:v,payload:null}}function s(e){return function(t){t(u());fetch("/api/saved",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(){return t(c())}).catch(function(e){console.log("parsing failed",e)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.requestArticles=l,t.loadArticles=r,t.fetchArticles=n,t.clearArticles=i,t.requestSavingArticle=u,t.saveSuccess=c,t.saveArticle=s;var d="https://api.nytimes.com/svc/search/v2/articlesearch.json?",f="d8966fd97abd46028557596c31b5fd0e",o=t.REQUEST_ARTICLES="REQUEST_ARTICLES",m=(t.FETCH_ARTICLES="FETCH_ARTICLES",t.LOAD_ARTICLES="LOAD_ARTICLES"),h=t.CLEAR_ARTICLES="CLEAR_ARTICLES",p=t.REQUEST_SAVING="REQUEST_SAVING",v=t.SAVE_SUCCESS="SAVE_SUCCESS",E={isFetching:!1,isSaving:!1,articles:[],lastSearchQuery:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments[1];switch(t.type){case o:return Object.assign({},e,{isFetching:!0,lastSearchQuery:t.payload});case m:var a=t.payload.map(function(e){return{title:e.headline.main,section:e.section_name,release:e.pub_date,author:e.byline?e.byline.original:"",url:e.web_url}});return Object.assign({},e,{articles:a,isFetching:!1});case h:return E;case p:return Object.assign({},e,{isSaving:!0});case v:return Object.assign({},e,{isSaving:!1});default:return e}};t.default=g},424:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(430),n=l(r),i=a(117),u=l(i),c=a(118),s=l(c),d=a(120),f=l(d),o=a(119),m=l(o),h=a(51),p=a(422),v=a(6),E=l(v),g=a(7),y=l(g),b=a(428),_=l(b),A=a(429),S=l(A),R={fetchArticles:p.fetchArticles,clearArticles:p.clearArticles,saveArticle:p.saveArticle},C=function(e){return{articles:e.search.articles,lastSearchQuery:e.search.lastSearchQuery}},q=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,l=t.name;this.setState((0,n.default)({},l,a.trim()))}},{key:"render",value:function(){var e=this.props,t=e.articles,a=e.fetchArticles,l=e.clearArticles,r=e.saveArticle,n=e.lastSearchQuery;return E.default.createElement("div",null,E.default.createElement(_.default,{fetchArticles:a,handleInputChange:this.handleInputChange,clearArticles:l}),t.length>0&&E.default.createElement(S.default,{articles:t,saveArticle:r,lastSearchQuery:n}))}}]),t}(v.Component);q.propTypes={articles:y.default.array.isRequired,fetchArticles:y.default.func.isRequired,clearArticles:y.default.func.isRequired,saveArticle:y.default.func.isRequired,lastSearchQuery:y.default.string.isRequired},t.default=(0,h.connect)(C,R)(q)},425:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),n=l(r),i=a(7),u=l(i),c=function(e){var t=e.idx,a=e.title,l=e.author,r=e.section,i=e.release,u=e.url;return n.default.createElement("div",null,n.default.createElement("h3",{className:"title"},n.default.createElement("i",{className:"label label-info"},t),n.default.createElement("a",{target:"_blank",href:u},a)),n.default.createElement("p",null,l),n.default.createElement("p",null,"Section: ",r),n.default.createElement("p",null,"Release: ",i),n.default.createElement("a",{target:"_blank",href:u},"URL: ",u))};c.propTypes={idx:u.default.number.isRequired,title:u.default.string.isRequired,author:u.default.string,section:u.default.string.isRequired,release:u.default.string.isRequired,url:u.default.string.isRequired},t.default=c},427:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),n=l(r),i=a(7),u=l(i),c=function(e){var t=e.saveArticle,a=e.article;return n.default.createElement("div",null,n.default.createElement("button",{onClick:t.bind(null,a),className:"pull-right btn btn-info"},"Save Article"))};c.propTypes={saveArticle:u.default.func.isRequired,article:u.default.shape({title:u.default.string.isRequired,section:u.default.string.isRequired,release:u.default.string.isRequired,author:u.default.string,url:u.default.string.isRequired})},t.default=c},428:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(117),n=l(r),i=a(118),u=l(i),c=a(120),s=l(c),d=a(119),f=l(d),o=a(6),m=l(o),h=a(7),p=l(h);a(431);var v=function(e){function t(e){(0,n.default)(this,t);var a=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClickClearBtn=a.handleClickClearBtn.bind(a),a.initState(),a}return(0,f.default)(t,e),(0,u.default)(t,[{key:"initState",value:function(){this.state={qs:"",numberOfArticles:10,startDate:"2016",endDate:"2017"}}},{key:"handleClickClearBtn",value:function(){var e=this.props.clearArticles;this.initState(),e()}},{key:"render",value:function(){var e=this.props,t=e.fetchArticles,a=e.handleInputChange;return a=a.bind(this),m.default.createElement("div",{className:"panel panel-primary"},m.default.createElement("div",{className:"panel-heading"},m.default.createElement("h3",{className:"panel-title"},m.default.createElement("i",{className:"glyphicon glyphicon-list-alt"})," Search New York Times Articles")),m.default.createElement("div",{className:"panel-body"},m.default.createElement("div",{className:"form"},m.default.createElement("form",null,m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{id:"search-label",htmlFor:"search"},"Search Term"),m.default.createElement("input",{onChange:a,value:this.state.qs,type:"search",name:"qs",className:"form-control",id:"search",placeholder:"google, election, war... more than 2 characters"})),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{htmlFor:"number"},"Number of Articles to Retrieve"),m.default.createElement("select",{onChange:a,value:this.state.numberOfArticles,className:"form-control",id:"number",name:"numberOfArticles"},m.default.createElement("option",null,"1"),m.default.createElement("option",null,"5"),m.default.createElement("option",null,"10"))),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{htmlFor:"start-year"},"Start Year (Optional)"),m.default.createElement("input",{onChange:a,name:"startDate",type:"text",className:"form-control",id:"start-year",placeholder:"2016"})),m.default.createElement("div",{className:"form-group"},m.default.createElement("label",{htmlFor:"end-year"},"End Year (Optional)"),m.default.createElement("input",{onChange:a,name:"endDate",type:"text",className:"form-control",id:"end-year",placeholder:"2017"}))),m.default.createElement("div",null,m.default.createElement("button",{onClick:t.bind(null,this.state),className:"btn btn-primary",disabled:this.state.qs.length<3},m.default.createElement("i",{className:"glyphicon glyphicon-search"})," Search"),m.default.createElement("button",{onClick:this.handleClickClearBtn,className:"btn btn-default"},m.default.createElement("i",{className:"glyphicon glyphicon-trash"})," Clear Result")))))}}]),t}(o.Component);t.default=v,v.propTypes={fetchArticles:p.default.func.isRequired,handleInputChange:p.default.func.isRequired,clearArticles:p.default.func.isRequired}},429:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),n=l(r),i=a(425),u=l(i),c=a(427),s=l(c),d=a(7),f=l(d),o=function(e){var t=e.saveArticle,a=e.articles,l=e.lastSearchQuery;return n.default.createElement("div",{className:"panel panel-primary"},n.default.createElement("div",{className:"panel-heading"},n.default.createElement("h3",{className:"panel-title"},n.default.createElement("i",{className:"glyphicon glyphicon-th-list"})," Search results for '",l,"' ")),n.default.createElement("div",{className:"panel-body"},a.map(function(e,a){return n.default.createElement("div",{key:a,className:"row"},n.default.createElement("div",{className:"col-sm-10 col-lg-10 col-md-10"},n.default.createElement(u.default,{idx:a+1,title:e.title,section:e.section,release:e.release,author:e.author,url:e.url})),n.default.createElement("div",{className:"col-sm-2 col-lg-2 col-md-2"},n.default.createElement(s.default,{saveArticle:t,article:e})))})))};o.propTypes={articles:f.default.arrayOf(f.default.shape({title:f.default.string.isRequired,section:f.default.string.isRequired,release:f.default.string.isRequired,author:f.default.string,url:f.default.string.isRequired})).isRequired,saveArticle:f.default.func.isRequired,lastSearchQuery:f.default.string.isRequired},t.default=o},430:function(e,t,a){"use strict";t.__esModule=!0;var l=a(196),r=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e,t,a){return t in e?(0,r.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},431:function(e,t){}});
//# sourceMappingURL=0.9d242d4e3a3dde0a143a.js.map