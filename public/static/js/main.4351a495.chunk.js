(this["webpackJsonpKryptoBalance-client"]=this["webpackJsonpKryptoBalance-client"]||[]).push([[0],{249:function(e,t,a){},251:function(e,t,a){},409:function(e,t,a){},413:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(40),s=a.n(r),i=(a(249),a(139)),o=a(65),l=a.n(o),j=a(120),d=a(18),h=a(19),u=a(20),b=a(21),p=(a(251),a(38)),O=a.n(p),m="https://kryptobalance.herokuapp.com",x=a(29),g=a(232),f=a(430),v=a(432),y=a(423),N=a(436),C=a(233),w=a(424),D=a(27),k=a(418),S=a(419),I=a(229),A=a(230),G=a(108),L=a(227),P=a(1),U=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={coinAmount:0,dataArr:null,styles:{tooltipWrapper:{background:"#444444",border:"none"},tooltip:{color:"#ebebeb"}}},e.buildGraph=function(){for(var t=e.props,a=t.graphData,n=t.handleAmountGrowth,c=a.amountInvested/a[0][1],r=[],s=0;s<a.length;s++){var i=c*a[s][1],o=new Date(a[s][0]).toLocaleDateString("en-US");r.push({CoinAmount:c,Total:i,date:o})}e.setState({dataArr:r}),n(r[r.length-1].Total)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.buildGraph()}},{key:"render",value:function(){var e=this.state,t=e.styles,a=e.dataArr;return a?Object(P.jsx)("div",{children:Object(P.jsx)(k.a,{height:250,children:Object(P.jsxs)(S.a,{data:a,children:[Object(P.jsx)(I.a,{dataKey:"date"}),Object(P.jsx)(A.a,{orientation:"left"}),Object(P.jsx)(A.a,{yAxisId:"right",orientation:"right"}),Object(P.jsx)(G.a,{contentStyle:t.tooltipWrapper,labelStyle:t.tooltip,formatter:function(e){return"".concat(e)}}),Object(P.jsx)(L.a,{type:"linear",dataKey:"CoinAmount",stroke:"none",fillOpacity:.6,fill:"#f5e942",yAxisId:"right",activeDot:{strokeWidth:0}}),Object(P.jsx)(L.a,{type:"linear",dataKey:"Total",stroke:"none",fillOpacity:.8,fill:"#b342f5",activeDot:{strokeWidth:0}})]})})}):Object(P.jsx)("p",{children:"Loading Graph . . . "})}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={growth:{name:"",amountInvested:"",currencyUsed:"",purchaseDate:""},graphData:[],graphDataLoaded:!1,amountGrowth:0},e.handleAmountGrowth=function(t){t=t.toFixed(2),e.setState({amountGrowth:t})},e.handleGrowthName=function(t){var a=t.target.value,n=JSON.parse(JSON.stringify(e.state.growth));n.name=a,e.setState({growth:n})},e.handleGrowthAmountInvested=function(t){var a=t.target.value,n=JSON.parse(JSON.stringify(e.state.growth));n.amountInvested=a,e.setState({growth:n})},e.handleGrowthCurrencyUsed=function(t){var a=t.target.value,n=JSON.parse(JSON.stringify(e.state.growth));n.currencyUsed=a,e.setState({growth:n})},e.handleGrowthPurchaseDate=function(t){var a=t.target.value,n=JSON.parse(JSON.stringify(e.state.growth));n.purchaseDate=a,e.setState({growth:n})},e.showGrowth=function(t){console.log(t);var a=t.name,n=t.currencyUsed,c=t.purchaseDate,r=t.amountInvested;O.a.get("".concat(m,"/api/coin/growth/").concat(a,"/").concat(n,"/").concat(c),{},{withCredentials:!0}).then((function(t){t.data.data.data.prices.amountInvested=r,e.setState({graphData:t.data.data.data.prices,graphDataLoaded:!0})})).catch((function(e){console.log(e)}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.graphData,n=t.amountGrowth,c=this.state.graphDataLoaded;return Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"homePageTop",children:Object(P.jsxs)("div",{className:"linksHomePage ",children:[Object(P.jsx)(D.b,{className:"spaceLinks",to:"/signin",children:"Sign in"}),Object(P.jsx)("div",{className:"spaceLinks",children:" | "}),Object(P.jsx)(D.b,{className:"spaceLinks",to:"/signup",children:"Sign up"})]})}),Object(P.jsx)("div",{children:Object(P.jsx)("div",{className:"logoHomePage",children:Object(P.jsx)(D.b,{to:"/",children:Object(P.jsx)("img",{className:"logoHPage",alt:"logo",src:"./logokbalance.png"})})})}),Object(P.jsx)(g.a,{className:"middleSpaceHP",md:{span:3,offset:3}}),Object(P.jsx)(g.a,{md:{span:6,offset:3},children:Object(P.jsx)(f.a,{children:Object(P.jsx)(v.a,{children:Object(P.jsxs)(y.a,{className:"homePageAcordeon",children:[Object(P.jsxs)(g.a,{children:[Object(P.jsx)("label",{htmlFor:"name",children:"CryptoCurrency Name:"}),Object(P.jsx)(f.a.Control,{placeholder:"'bitcoin'",onChange:this.handleGrowthName,value:this.state.growth.name})]}),Object(P.jsxs)(g.a,{children:[Object(P.jsx)("label",{htmlFor:"name",children:"Amount Invested:"}),Object(P.jsx)(f.a.Control,{placeholder:" '2000' ",onChange:this.handleGrowthAmountInvested,value:this.state.growth.amountInvested})]}),Object(P.jsxs)(g.a,{children:[Object(P.jsx)("label",{htmlFor:"name",children:"Date of Investment:"}),Object(P.jsx)(f.a.Control,{placeholder:"'10-03-2016'",onChange:this.handleGrowthPurchaseDate,value:this.state.growth.purchaseDate})]}),Object(P.jsxs)(g.a,{children:[Object(P.jsx)("label",{htmlFor:"name",children:"Currency Used:"}),Object(P.jsx)(f.a.Control,{placeholder:"'eur'",onChange:this.handleGrowthCurrencyUsed,value:this.state.growth.currencyUsed})]}),Object(P.jsx)(g.a,{children:Object(P.jsx)(N.a,{style:{width:"60px"},children:Object(P.jsx)(v.a.Toggle,{onClick:function(){e.showGrowth(e.state.growth)},as:C.a,variant:"light",eventKey:"0",children:"\u25b6"})})}),Object(P.jsx)(v.a.Collapse,{eventKey:"0",children:Object(P.jsxs)(N.a.Body,{children:[Object(P.jsxs)(g.a,{children:[Object(P.jsx)("p",{className:"textValue",children:"Today's Value:"}),n>0?Object(P.jsx)(g.a,{children:n}):Object(P.jsx)("div",{})]}),Object(P.jsx)(g.a,{children:c?Object(P.jsx)("div",{children:Object(P.jsx)(U,{graphData:a,handleAmountGrowth:this.handleAmountGrowth})}):Object(P.jsx)("div",{})}),Object(P.jsx)("div",{className:"alertMessage",style:{width:"300px",align:"center"},children:Object(P.jsxs)(w.a,{variant:"success",children:[Object(P.jsx)("p",{children:"Hey, nice to see you here!"}),Object(P.jsxs)("p",{children:["How about keeping track of ALL your investments in cryptocurrency?",Object(P.jsx)("br",{}),"Create an account today!"]}),Object(P.jsx)("hr",{}),Object(P.jsx)("p",{className:"mb-0",children:Object(P.jsx)(D.b,{to:"/signup",children:"Sign Up"})})]})})]})})]})})})})]})}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(P.jsx)("div",{children:Object(P.jsxs)(g.a,{className:"aboutPage",children:[Object(P.jsx)("div",{className:"aboutPageFirst",children:Object(P.jsxs)("div",{className:"linksAboutPage ",children:[Object(P.jsx)(D.b,{className:"spaceLinks",to:"/signin",children:"Sign in"}),Object(P.jsx)("div",{className:"spaceLinks",children:" | "}),Object(P.jsx)(D.b,{className:"spaceLinks",to:"/signup",children:"Sign up"})]})}),Object(P.jsx)("div",{className:"aboutPage",children:Object(P.jsx)("div",{className:"logoAboutPage",children:Object(P.jsx)(D.b,{to:"/",children:Object(P.jsx)("img",{className:"logoAPage",alt:"logo",src:"./logokbalance.png"})})})}),Object(P.jsxs)(g.a,{xs:2,md:10,className:"textAboutPage",children:[Object(P.jsxs)("div",{className:"infoAboutUs",children:[Object(P.jsx)("h2",{children:"About us:"}),Object(P.jsx)("p",{children:"KryptoBalance is an app that allows users to create the perfect environment to keep track of their investments in crypto currency. The available tools such as graphics, conversions, history and alerts simplifies and connects all information in one single board."}),Object(P.jsx)("p",{children:"The user has right in hand all the needed information of all his investments in one place."})]}),Object(P.jsxs)("div",{className:"infoAboutUs",children:[Object(P.jsx)("h2",{children:"Contact us:"}),Object(P.jsx)("p",{children:" Keep in touch! Write us an email with doubts, suggestions. Anything! "}),Object(P.jsx)("p",{children:"kryptobalanceproject@gmail.com"})]})]}),Object(P.jsx)(y.a,{})]})})}}]),a}(n.Component),K=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onSignIn,a=e.error;return Object(P.jsxs)(g.a,{className:"formContainer signInForm",children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{className:"logoSign",alt:"logo",src:"./logokbalance.png"})}),Object(P.jsxs)(f.a,{className:"formInput",onSubmit:t,children:[Object(P.jsxs)(f.a.Group,{controlId:"",children:[Object(P.jsx)(f.a.Label,{children:"Email address"}),Object(P.jsx)(f.a.Control,{style:{fontSize:"25px"},size:"lg",required:!0,type:"email",name:"email",placeholder:"Enter email"})]}),Object(P.jsxs)(f.a.Group,{controlId:"",children:[Object(P.jsx)(f.a.Label,{children:"Password"}),Object(P.jsx)(f.a.Control,{size:"lg",required:!0,type:"password",name:"password",placeholder:"Password"})]}),Object(P.jsx)(C.a,{variant:"outline-dark",className:"submitButton",type:"submit",children:"Sign In"})]}),a?Object(P.jsx)(g.a,{children:a.errorMessage}):Object(P.jsx)("div",{})]})}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onSubmit,a=e.error;return Object(P.jsxs)(g.a,{className:"formContainer signInForm",children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{className:"logoSign",alt:"logo",src:"./logokbalance.png"})}),Object(P.jsxs)(f.a,{className:"formInput",onSubmit:t,children:[Object(P.jsxs)(f.a.Group,{className:"formSign",controlId:"",children:[Object(P.jsx)(f.a.Label,{children:"Email address"}),Object(P.jsx)(f.a.Control,{size:"lg",required:!0,type:"email",name:"email",placeholder:"Enter email"})]}),Object(P.jsxs)(f.a.Group,{className:"formSign",controlId:"",children:[Object(P.jsx)(f.a.Label,{children:"Username"}),Object(P.jsx)(f.a.Control,{size:"lg",required:!0,type:"text",name:"username",placeholder:"Enter username"})]}),Object(P.jsxs)(f.a.Group,{className:"formSign",controlId:"",children:[Object(P.jsx)(f.a.Label,{children:"Password"}),Object(P.jsx)(f.a.Control,{size:"lg",required:!0,type:"password",name:"password",placeholder:"Password"})]}),Object(P.jsx)(C.a,{variant:"outline-dark",className:"submitButton",type:"submit",children:"Submit"})]}),a?Object(P.jsx)(g.a,{children:a.errorMessage}):Object(P.jsx)("div",{})]})}}]),a}(n.Component),E=a(429),B=(a(409),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.addCoin,a=e.handleClose,n=e.show?"modal display-block":"modal display-none";return Object(P.jsx)("div",{className:n,children:Object(P.jsx)("section",{className:"modal-main",children:Object(P.jsx)("form",{onSubmit:t,children:Object(P.jsxs)(E.a.Dialog,{children:[Object(P.jsxs)(E.a.Header,{className:"modalTitle",children:[Object(P.jsx)(E.a.Title,{children:"Add Coins!  "}),Object(P.jsx)(E.a.Title,{children:" \ud83d\udcb0 "})]}),Object(P.jsxs)(E.a.Body,{className:"modalTitle",children:[Object(P.jsxs)(f.a.Group,{children:[Object(P.jsx)("label",{htmlFor:"name",children:"CryptoCurrency Name:"}),Object(P.jsx)(f.a.Control,{className:"modalInput",name:"name",size:"sm",type:"text",placeholder:" 'bitcoin' "})]}),Object(P.jsxs)(f.a.Group,{className:"modalText",children:[Object(P.jsx)("label",{className:"modalTitle",htmlFor:"purchaseDate",children:"Date of Purchase:"}),Object(P.jsx)(f.a.Control,{className:"modalInput",name:"purchaseDate",size:"sm",type:"text",placeholder:"'10-03-2017'"})]}),Object(P.jsxs)(f.a.Group,{className:"modalText",children:[Object(P.jsx)("label",{className:"modalTitle",htmlFor:"amountInvested",children:"Amount of Money Invested:"}),Object(P.jsx)(f.a.Control,{className:"modalInput",name:"amountInvested",size:"sm",type:"text",placeholder:" '400'"})]}),Object(P.jsxs)(f.a.Group,{className:"modalText",children:[Object(P.jsx)("label",{className:"modalTitle",htmlFor:"currencyUsed",children:"Currency Used:"}),Object(P.jsx)(f.a.Control,{className:"modalInput",name:"currencyUsed",size:"sm",type:"text",placeholder:" 'eur' "})]}),Object(P.jsx)("p",{className:"modalText text-muted",children:" Note: Please insert a second purchase or a simulation of '0' in today's date for the Graphic comparison!"})]}),Object(P.jsxs)(E.a.Footer,{children:[Object(P.jsx)(C.a,{type:"button",onClick:a,variant:"secondary",children:"Close"}),Object(P.jsx)(C.a,{type:"submit",onClick:a,variant:"primary",children:"Submit"})]})]})})})})}}]),a}(n.Component)),H=a(234),J=a.n(H),z=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={coinAmount:0,dataArr:[],styles:{tooltipWrapper:{background:"#444444",border:"none"},tooltip:{color:"#ebebeb"}}},e.buildGraph=function(){var t=e.props,a=t.graphData,n=t.coinName,c=0,r=[];if(a.length){for(var s=0;s<a.length;s++)if(a[s].name===n){var i=a[s].price.eur,o=(c+=a[s].amountInvested/i)*i,l=J()(a[s].purchaseDate).format("MM/DD/YYYY");r.push({CoinAmount:c,TotalEur:o,CoinPrice:i,date:l})}e.setState({dataArr:r,graphDataLoaded:!0,coinAmount:c})}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.buildGraph()}},{key:"render",value:function(){var e=this.state,t=e.styles,a=e.dataArr;return a?Object(P.jsx)("div",{children:Object(P.jsx)(k.a,{height:250,children:Object(P.jsxs)(S.a,{data:a,children:[Object(P.jsx)(I.a,{dataKey:"date"}),Object(P.jsx)(A.a,{orientation:"left"}),Object(P.jsx)(A.a,{yAxisId:"right",orientation:"right"}),Object(P.jsx)(G.a,{contentStyle:t.tooltipWrapper,labelStyle:t.tooltip,formatter:function(e){return"".concat(e)}}),Object(P.jsx)(L.a,{type:"linear",dataKey:"CoinAmount",stroke:"none",fillOpacity:.4,fill:"#55efc4",yAxisId:"right",activeDot:{strokeWidth:0}}),Object(P.jsx)(L.a,{type:"linear",dataKey:"TotalEur",stroke:"none",fillOpacity:.3,fill:"#f7931a",activeDot:{strokeWidth:0}}),Object(P.jsx)(L.a,{type:"linear",dataKey:"CoinPrice",stroke:"none",fillOpacity:.6,fill:"#e84393",activeDot:{strokeWidth:0}})]})})}):Object(P.jsx)("p",{children:"Loading Graph . . . "})}}]),a}(n.Component),W=a(103),R=a(435),q=a(235),V=a(237),Y=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:[],activeIndex:0,setActiveIndex:0,colors:["#0088FE","#00C49F","#FFBB28","#FF8042"]},e.renderActiveShape=function(e){var t=Math.PI/180,a=e.cx,n=e.cy,c=e.midAngle,r=e.innerRadius,s=e.outerRadius,i=e.startAngle,o=e.endAngle,l=e.fill,j=e.payload,d=e.percent,h=e.value,u=Math.sin(-t*c),b=Math.cos(-t*c),p=a+(s+10)*b,O=n+(s+10)*u,m=a+(s+30)*b,x=n+(s+30)*u,g=m+22*(b>=0?1:-1),f=x,v=b>=0?"start":"end";return Object(P.jsxs)("g",{children:[Object(P.jsx)("text",{x:a,y:n,dy:8,textAnchor:"middle",fill:l,children:j.name}),Object(P.jsx)(W.a,{cx:a,cy:n,innerRadius:r,outerRadius:s,startAngle:i,endAngle:o,fill:l}),Object(P.jsx)(W.a,{cx:a,cy:n,startAngle:i,endAngle:o,innerRadius:s+6,outerRadius:s+10,fill:l}),Object(P.jsx)("path",{d:"M".concat(p,",").concat(O,"L").concat(m,",").concat(x,"L").concat(g,",").concat(f),stroke:l,fill:"none"}),Object(P.jsx)("circle",{cx:g,cy:f,r:2,fill:l,stroke:"none"}),Object(P.jsx)("text",{x:g+12*(b>=0?1:-1),y:f,textAnchor:v,fill:"#000",children:"CoinValueEuro ".concat(h.toFixed(2)," \u20ac")}),Object(P.jsx)("text",{x:g+12*(b>=0?1:-1),y:f,dy:18,textAnchor:v,fill:"#999",children:"(Percentage ".concat((100*d).toFixed(2),"%)")})]})},e.buildPieChart=function(t,a,n){for(var c=0,r=0,s=0,i=0;i<a.length;i++)a[i].name===n&&(r=a[i].price.eur,c=(s+=a[i].amountInvested/r)*r);t.push({name:n,value:c}),e.setState({data:t})},e.onPieEnter=function(t,a){e.setState({activeIndex:a})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.graphData,a=e.coinNameArray;console.log(t);for(var n=[],c=0;c<a.length;c++)this.buildPieChart(n,t,a[c])}},{key:"render",value:function(){var e=this;return Object(P.jsx)(R.a,{width:400,height:400,children:Object(P.jsx)(q.a,{activeIndex:this.state.activeIndex,activeShape:this.renderActiveShape,data:this.state.data,cx:200,cy:200,innerRadius:60,outerRadius:80,fill:"#000",dataKey:"value",onMouseEnter:this.onPieEnter,children:this.state.data.map((function(t,a){return Object(P.jsx)(V.a,{fill:e.state.colors[a%e.state.colors.length]})}))})})}}]),a}(n.Component),_=a(425),Q=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1,graphData:[],dataArr:[],coinNameArray:[],coinImageArray:[],graphDataLoaded:!1,coinAmount:0,coinName:""},e.showModal=function(){e.setState({show:!0})},e.hideModal=function(){e.setState({show:!1})},e.postCoinPurchaseHistory=function(t){t.preventDefault();var a=t.target,n=a.name,c=a.purchaseDate,r=a.amountInvested,s=a.currencyUsed,i={name:n.value,purchaseDate:c.value,amountInvested:r.value,currencyUsed:s.value,user:e.props.user};O.a.post("".concat(m,"/api/coin/add"),i).then((function(e){console.log(e)})).catch((function(e){console.log("Adding coin failed:",e)}))},e.getCoinGraphData=Object(j.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.props.user,O.a.get("".concat(m,"/api/coin/").concat(a._id,"/history/all")).then((function(t){if(t.data.length){e.setState({graphData:t.data});var a=[],n=[];e.state.graphData.forEach((function(e){a.includes(e.name)||a.push(e.name)})),e.state.graphData.forEach((function(e){n.includes(e.image)||n.push(e.image)})),e.setState({coinNameArray:a,coinImageArray:n,graphDataLoaded:!0})}})).catch((function(e){console.log("Error during getCoinGraphData: ",e)}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getCoinGraphData()}},{key:"render",value:function(){var e=this.state,t=e.graphData,a=e.coinNameArray,n=e.coinImageArray,c=this.state.graphDataLoaded,r=this.props,s=r.user,i=r.onDelete;return s?Object(P.jsx)("div",{children:Object(P.jsxs)("div",{className:"firstLevelDashboard",children:[Object(P.jsxs)("div",{className:"dashboardAccordeon",children:[Object(P.jsx)(v.a,{defaultActiveKey:"0",children:Object(P.jsxs)(N.a,{children:[c&&t[0]&&a[0]?Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a.Toggle,{as:N.a.Header,eventKey:"0",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:n[0],alt:t[0].name})," ",a[0]]})}),Object(P.jsx)(v.a.Collapse,{eventKey:"0",children:Object(P.jsx)(N.a.Body,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)(z,{graphData:t,coinName:a[0]}),Object(P.jsx)("button",{onClick:function(){i(a[0])},children:"Delete"})]})})})]}):Object(P.jsx)("div",{}),c&&t[1]&&a[1]?Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a.Toggle,{as:N.a.Header,eventKey:"1",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:n[1],alt:t[1].name})," ",a[1]]})}),Object(P.jsx)(v.a.Collapse,{eventKey:"1",children:Object(P.jsx)(N.a.Body,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)(z,{graphData:t,coinName:a[1]}),Object(P.jsx)("button",{onClick:function(){i(a[1])},children:"Delete"})]})})})]}):Object(P.jsx)("div",{}),c&&t[2]&&a[2]?Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a.Toggle,{as:N.a.Header,eventKey:"2",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:n[2],alt:t[2].name})," ",a[2]]})}),Object(P.jsx)(v.a.Collapse,{eventKey:"2",children:Object(P.jsx)(N.a.Body,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)(z,{graphData:t,coinName:a[2]}),Object(P.jsx)("button",{onClick:function(){i(a[2])},children:"Delete"})]})})})]}):Object(P.jsx)("div",{}),c&&t[3]&&a[3]?Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a.Toggle,{as:N.a.Header,eventKey:"3",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:n[3],alt:t[3].name})," ",a[3]]})}),Object(P.jsx)(v.a.Collapse,{eventKey:"3",children:Object(P.jsx)(N.a.Body,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)(z,{graphData:t,coinName:a[3]}),Object(P.jsx)("button",{onClick:function(){i(a[3])},children:"Delete"})]})})})]}):Object(P.jsx)("div",{}),c&&t[4]&&a[4]?Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a.Toggle,{as:N.a.Header,eventKey:"4",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:n[4],alt:t[4].name})," ",a[4]]})}),Object(P.jsx)(v.a.Collapse,{eventKey:"4",children:Object(P.jsx)(N.a.Body,{children:Object(P.jsxs)("div",{children:[Object(P.jsx)(z,{graphData:t,coinName:a[4]}),Object(P.jsx)("button",{onClick:function(){i(a[4])},children:"Delete"})]})})})]}):Object(P.jsx)("div",{})]})}),Object(P.jsx)("div",{children:Object(P.jsx)("button",{type:"button",onClick:this.showModal,children:"+Coin"})}),Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(C.a,{variant:"primary",size:"lg",block:!0,children:Object(P.jsx)(B,{addCoin:this.postCoinPurchaseHistory,show:this.state.show,handleClose:this.hideModal})})})]}),Object(P.jsx)("div",{className:"pieChart",children:c&&t.length&&a.length?Object(P.jsxs)(_.a,{children:[Object(P.jsx)("p",{children:"Distribuition of Investment:"}),Object(P.jsx)("div",{className:"totalInvGraph",children:Object(P.jsx)(Y,{graphData:t,coinNameArray:a})})]}):Object(P.jsx)("div",{})})]})}):Object(P.jsx)(x.a,{to:"/signin"})}}]),a}(n.Component),X=a(47),Z=a(426),$=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e,t=this.props.user;return t?Object(P.jsx)("div",{children:Object(P.jsx)(_.a,{className:"formContainer",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"",children:Object(P.jsxs)(y.a,{className:"formContainer",children:[Object(P.jsx)(g.a,{xs:6,md:4,children:t.image?Object(P.jsx)("div",{children:Object(P.jsx)("img",{className:"profileImage",src:t.image,alt:t.name})}):Object(P.jsx)(Z.a,{className:"profileImage",src:"../logokbalance.png",rounded:!0})}),Object(P.jsx)("div",{className:" editIcon",children:Object(P.jsxs)(C.a,{variant:"",children:[Object(P.jsx)(D.b,{className:" editIcon",to:"/profile/edit",user:t,children:" edit \u270e"})," "]})})]})}),Object(P.jsxs)(f.a.Group,{className:"formInput",controlId:"formGroupEmail",children:[Object(P.jsx)(f.a.Label,{children:"Username:"}),Object(P.jsx)(f.a.Control,{type:"text",value:t.name,placeholder:"Enter username"})]}),Object(P.jsxs)(f.a.Group,{className:"formInput",as:g.a,controlId:"formGridState",children:[Object(P.jsx)(f.a.Label,{children:"Currency:"}),Object(P.jsx)(f.a.Control,{as:"text",defaultValue:t.currency,children:Object(P.jsx)("option",{children:"euro"})})]}),Object(P.jsx)("div",{children:Object(P.jsx)(C.a,(e={className:"formInput",href:"/dashboard"},Object(X.a)(e,"className","buttonProfile"),Object(X.a)(e,"variant","secondary"),Object(X.a)(e,"size","lg"),Object(X.a)(e,"children","My Dashboard"),e))})]})})}):Object(P.jsx)(x.a,{to:"/signin"})}}]),a}(n.Component),ee=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{src:"/404BG.png"}),Object(P.jsx)("img",{src:"/mario.png"}),Object(P.jsx)("h1",{children:" 404 PAGE NOT FOUND"}),Object(P.jsx)("h3",{children:"Uh oh.. seems like our code went down the tubes.. Mario can lead your way out! "}),Object(P.jsx)("h3",{children:" \u2b05 \u27a1  "})]})}}]),a}(n.Component),te=a(433),ae=a(434),ne=a(428),ce=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.onLogout;return t?Object(P.jsx)("div",{children:Object(P.jsxs)(te.a,{bg:"dark",variant:"dark",children:[Object(P.jsxs)(te.a.Brand,{children:[" ",Object(P.jsx)(D.b,{className:"navbar-home-link",to:"/",children:"KryptoBalance "})," "]}),Object(P.jsxs)(ae.a,{children:[Object(P.jsxs)(te.a.Brand,{children:["Hello, ",t.name,"! "]}),Object(P.jsxs)(ne.a,{title:"",id:"dropdown-menu-align-left",children:[Object(P.jsx)(ne.a.Item,{className:"linksDropDown",children:Object(P.jsx)(D.b,{className:"linksDropDown",to:"/profile",user:t,children:"Profile"})}),Object(P.jsx)(ne.a.Item,{className:"linksDropDown",children:Object(P.jsx)(D.b,{className:"linksDropDown",to:"/dashboard",user:t,children:"Dashboard"})}),Object(P.jsx)(ne.a.Item,{className:"linksDropDown",children:Object(P.jsx)(D.b,{className:"linksDropDown",to:"/about",children:"Contact "})}),Object(P.jsx)(ne.a.Divider,{}),Object(P.jsx)("button",{onClick:a,children:"Logout"})]}),t.image?Object(P.jsx)("div",{children:Object(P.jsx)("img",Object(X.a)({className:"nav-profile-img",alt:"user-avatar",src:t.image},"alt",t.name))}):Object(P.jsx)(Z.a,{className:"nav-profile-img",alt:"user-avatar",src:"../logokbalance.png",rounded:!0})]})]})}):null}}]),a}(n.Component),re=a(427),se=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:{}},e.onEdit=function(t){console.log(t),t.preventDefault();var a=t.target.image.files[0],n=new FormData;n.append("image",a),O.a.post("".concat(m,"/api/upload"),n,{withCredentials:!0}).then((function(t){e.state.user.image=t.data,e.props.updateUser(e.state.user)})).catch((function(e){console.log("Upload Failed",e)})),console.log(e.state.user),O.a.post("".concat(m,"/api/profile/edit"),{name:e.state.user.name,currency:e.state.user.currency},{withCredentials:!0}).then((function(t){e.props.updateUser(t.data)})).catch((function(e){console.log("Edit failed",e)}))},e.handleNameChange=function(t){var a=t.target.value,n=JSON.parse(JSON.stringify(e.state.user));n.name=a,e.setState({user:n}),console.log(e.state.user)},e.handleCurrencyChange=function(t){var a=t.target.value,n=JSON.parse(JSON.stringify(e.state.user));n.currency=a,e.setState({user:n}),console.log(e.state.user)},e}return Object(h.a)(a,[{key:"render",value:function(){var e,t=this.props.user;return t?Object(P.jsx)("div",{children:Object(P.jsx)(_.a,{className:"formContainer",children:Object(P.jsxs)(f.a,{onSubmit:this.onEdit,children:[Object(P.jsx)(y.a,{className:"formContainer",children:Object(P.jsx)(g.a,{xs:6,md:4,children:t.image?Object(P.jsx)("div",{children:Object(P.jsx)("img",{className:"profileImage",src:t.image,alt:t.name})}):Object(P.jsx)(Z.a,{className:"profileImage",src:"../logokbalance.png",rounded:!0})})}),Object(P.jsx)(f.a.Group,{className:"formInput",children:Object(P.jsx)(f.a.File,{variant:"outline-info",name:"image",type:"file",onChange:this.handleImageChange,accept:"image/png image/jpg image/jpeg",id:"exampleFormControlFile1"})}),Object(P.jsxs)(f.a.Group,{className:"formInput",controlId:"formGroupEmail",children:[Object(P.jsx)(f.a.Label,{children:"Username:"}),Object(P.jsx)(f.a.Control,{type:"text",onChange:this.handleNameChange,value:t.name})]}),Object(P.jsxs)(f.a.Group,{className:"formInput",as:g.a,controlId:"formGridState",children:[Object(P.jsx)(f.a.Label,{children:"Choose Currency:"}),Object(P.jsx)(f.a.Control,{onChange:this.handleCurrencyChange,as:"select",defaultValue:"Choose...",children:Object(P.jsx)("option",{children:"euro"})})]}),Object(P.jsx)("div",(e={className:"formInput"},Object(X.a)(e,"className","buttonProfile"),Object(X.a)(e,"children",Object(P.jsxs)(re.a,{"aria-label":"Basic example",children:[Object(P.jsxs)(C.a,{children:[" ",Object(P.jsx)(D.b,{to:"/profile",variant:"outline-secondary",children:"Back "})]}),Object(P.jsx)(C.a,{type:"submit",variant:"outline-info",children:"Save"})]})),e))]})})}):Object(P.jsx)(x.a,{to:"/signin"})}}]),a}(n.Component),ie=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(P.jsx)("footer",{className:"MyFooter",children:Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"text-muted",children:[Object(P.jsx)(D.b,{to:"/about",className:"text-muted",children:Object(P.jsx)("span",{className:"text-footer",children:"About Us"})}),Object(P.jsx)(D.b,{to:"/about",className:"text-muted",children:Object(P.jsx)("span",{className:"text-footer",children:"Contact"})})]}),Object(P.jsx)("div",{})]})})}}]),a}(n.Component),oe=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null,error:null,fetchingUser:!0,dateOfPurchase:"28-09-1987"},e.handleDelete=function(t){O.a.delete("".concat(m,"/api/coins/delete/").concat(t),{withCredentials:!0}).then((function(){e.props.history.push("/dashboard")})).catch((function(e){console.log("Delete failed",e)}))},e.handleSignUp=function(t){t.preventDefault();var a=t.target,n=a.email,c=a.username,r=a.password,s={email:n.value,username:c.value,password:r.value};O.a.post("".concat(m,"/api/signup"),s,{withCredentials:!0}).then((function(t){e.setState({user:t.data},(function(){e.props.history.push("/dashboard")}))})).catch((function(t){console.log("SignUp failed"),e.setState({error:t.response.data})}))},e.handleSignIn=function(){var t=Object(j.a)(l.a.mark((function t(a){var n,c,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n=a.target,c=n.email,r=n.password,s={email:c.value,password:r.value},O.a.post("".concat(m,"/api/signin"),s,{withCredentials:!0}).then((function(t){e.setState({user:t.data,error:null},(function(){e.props.history.push("/dashboard")}))})).catch((function(t){console.log(t),e.setState({error:t.response.data})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleLogout=function(){O.a.post("".concat(m,"/api/logout"),{},{withCredentials:!0}).then((function(){e.setState({user:null},(function(){e.props.history.push("/")}))})).catch((function(t){e.setState({error:t.response.data})}))},e.updateUser=function(t){console.log(t),e.setState({user:t},(function(){e.props.history.push("/profile")}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.a.get("".concat(m,"/api/user"),{withCredentials:!0}).then((function(t){e.setState({user:t.data,fetchingUser:!1})})).catch((function(t){e.setState({error:t.data,fetchingUser:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.user,n=t.error;return t.fetchingUser?Object(P.jsx)("p",{children:"Loading . . . "}):Object(P.jsxs)("div",{children:[Object(P.jsx)(ce,{onSignin:this.handleSignIn,onLogout:this.handleLogout,user:a}),Object(P.jsxs)(x.d,{children:[Object(P.jsx)(x.b,{exact:!0,path:"/",render:function(){return Object(P.jsx)(F,{})}}),Object(P.jsx)(x.b,{exact:!0,path:"/signup",render:function(t){return Object(P.jsx)(M,Object(i.a)({error:n,onSubmit:e.handleSignUp},t))}}),Object(P.jsx)(x.b,{exact:!0,path:"/signin",render:function(t){return Object(P.jsx)(K,Object(i.a)({error:n,onSignIn:e.handleSignIn},t))}}),Object(P.jsx)(x.b,{path:"/about",render:function(){return Object(P.jsx)(T,{})}}),Object(P.jsx)(x.b,{exact:!0,path:"/dashboard",render:function(){return Object(P.jsx)(Q,{onDelete:e.handleDelete,user:a})}}),Object(P.jsx)(x.b,{exact:!0,path:"/profile",render:function(){return Object(P.jsx)($,{user:a})}}),Object(P.jsx)(x.b,{exact:!0,path:"/profile/edit/",render:function(t){return Object(P.jsx)(se,Object(i.a)({updateUser:e.updateUser,user:a},t))}}),Object(P.jsx)(x.b,{path:"/",component:ee})]}),Object(P.jsx)(ie,{})]})}}]),a}(n.Component),le=Object(x.g)(oe);a(412);s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(D.a,{children:Object(P.jsx)(le,{})})}),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.4351a495.chunk.js.map