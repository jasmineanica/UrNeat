(this["webpackJsonpurneat-app"]=this["webpackJsonpurneat-app"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),s=n.n(r),c=n(18),i=n.n(c),d=n(3),o=n.n(d),l=n(9),u=n(4),h=n(5),m=n(7),j=n(6),p=function(e){var t=e.icon,n=e.title;return Object(a.jsx)("nav",{className:"navbar bg-primary",children:Object(a.jsxs)("h1",{children:[Object(a.jsx)("i",{className:t}),n]})})};p.defaultProps={title:"URNeat",icon:"fas fa-glass-whiskey"};var b=p,f=function(e){var t=e.drink,n=t.BrandName,r=t.ProductImage,s=t.BrandLogoURL;return null==r?Object(a.jsxs)("div",{className:"card text-center",children:[Object(a.jsx)("img",{src:s,alt:"",style:{width:"200px"}}),Object(a.jsx)("h3",{children:n}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"#",className:"btn btn-dark btn-sm my-1",children:"Review"})})]}):Object(a.jsxs)("div",{className:"card text-center",children:[Object(a.jsx)("img",{src:r,alt:"",style:{width:"200px"}}),Object(a.jsx)("h3",{children:n}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"#",className:"btn btn-dark btn-sm my-1",children:"Review"})})]})},g=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:y,children:[this.props.drinks.map((function(e){return Object(a.jsx)(f,{drink:e},e.DSDLinkMasterProductID)})),",",this.props.localdrinks.map((function(e){return Object(a.jsx)(f,{drink:e},e.id)}))]})}}]),n}(r.Component),y={display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:"1rem"},x=g,k=(n(25),n(44),function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={drinks:[],loading:!1,localdrinks:[{id:"1",BrandName:"The Balvenie Doublewood",ProductImage:"https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf8/h65/12291773431838.png",BrandCategory1:"Whiskey",BrandCategory2:"Scotch",BrandCategory3:"Scotch Whiskey"},{id:"2",BrandName:"The Green Spot",ProductImage:"https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/he8/h26/12244707213342.png",BrandCategory1:"Whiskey",BrandCategory2:"Irish Whiskey",BrandCategory3:""},{id:"3",BrandName:"Basil Hayden's Kentucky Straight Bourbon",ProductImage:"https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hf4/hb9/12140740247582.png",BrandCategory1:"Whiskey",BrandCategory2:"Bourbon",BrandCategory3:""}]},e.callBackendAPI=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ECP_20.12_A/aspx1/API?APICommand=JasmineAnica_ProductMasterData&APIToken=fc8cc7c6e4c43d759d6ff387a62f5643");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,this.callBackendAPI();case 3:t=e.sent,this.setState({drinks:t.Export.Report.Row,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(x,{loading:this.state.loading,drinks:this.state.drinks,localdrinks:this.state.localdrinks})})]})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.5664cb78.chunk.js.map