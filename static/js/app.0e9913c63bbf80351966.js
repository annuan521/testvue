webpackJsonp([1],{"9bCw":function(t,e){},L3vF:function(t,e,i){t.exports=i.p+"static/img/pikaqiu.ed98f7e.gif"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("kV13"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("C7Lr")({name:"App"},r,!1,function(t){i("w3rB")},null,null).exports,o=i("DGCT"),a={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",[s("el-header",[s("div",{staticClass:"header-wrap"},[s("div",{staticClass:"header-left"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:i("L3vF"),alt:""}})]),t._v(" "),s("div",{staticClass:"welcome"},[t._v("欢迎你！")])]),t._v(" "),s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",{attrs:{index:"1"},on:{click:function(e){return t.$router.push("/my")}}},[t._v("我的简历")]),t._v(" "),s("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.$router.push("/study")}}},[t._v("学海无涯")]),t._v(" "),s("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.$router.push("/follow")}}},[t._v("小惊喜")])],1),t._v(" "),s("div",{staticClass:"img-wrap"})],1)]),t._v(" "),s("el-main",[s("router-view")],1)],1)},staticRenderFns:[]};var h=i("C7Lr")(a,c,!1,function(t){i("buyq")},"data-v-12d4bd55",null).exports,u={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("我的")])},staticRenderFns:[]};var f=i("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){i("oeht")},"data-v-09c25502",null).exports,l={name:"",data:function(){return{msg:""}},methods:{backGameCenter:function(){console.log(111),this.$store.commit({type:"updateCurComponent",currentComponent:"GameCenter"})}},mounted:function(){var t=this;this.$nextTick(function(){({cell:'<div class="box"></div>',curColor:!0,blackPiece:'<span class="chess-pieces-black"></span>',whitePiece:'<span class="chess-pieces-white"></span>',chess:document.getElementById("chessboard"),type:document.getElementById("type"),info:document.getElementById("info"),ucBtn:document.getElementById("c"),uuBtn:document.getElementById("u"),reBtn:document.getElementById("r"),chessFlag:document.getElementById("chessFlag"),isComputer:!0,over:!1,addPiece:function(t,e){var i=document.createElement("span");this.curColor?i.classList.add("chess-pieces-black"):i.classList.add("chess-pieces-white"),i.style.left=35*e-15+"px",i.style.top=35*t-15+"px",this.chess.appendChild(i)},winKindsCount:672,wins:function(){for(var t=0,e=[],i=0;i<16;i++){e[i]=[];for(var s=0;s<16;s++)e[i][s]=[]}for(var r=0;r<16;r++)for(var n=0;n<12;n++){for(var o=0;o<5;o++)e[r][n+o][t]=!0;t++}for(var a=0;a<16;a++)for(var c=0;c<12;c++){for(var h=0;h<5;h++)e[c+h][a][t]=!0;t++}for(var u=0;u<12;u++)for(var f=0;f<12;f++){for(var l=0;l<5;l++)e[u+l][f+l][t]=!0;t++}for(var m=4;m<16;m++)for(var d=0;d<12;d++){for(var v=0;v<5;v++)e[m-v][d+v][t]=!0;t++}return e}(),curChess:function(){for(var t=[],e=0;e<16;e++){t[e]=[];for(var i=0;i<16;i++)t[e][i]=!1}return t}(),myWins:[],myScore:function(){for(var t=[],e=0;e<16;e++){t[e]=[];for(var i=0;i<16;i++)t[e][i]=0}return t}(),computerWins:[],computerScore:function(){for(var t=[],e=0;e<16;e++){t[e]=[];for(var i=0;i<16;i++)t[e][i]=0}return t}(),changeColor:function(){this.curColor=!this.curColor,this.curColor?chessFlag.className="chess-pieces-black":chessFlag.className="chess-pieces-white"},checkIsWin:function(t,e){for(var i=!1,s=0;s<this.winKindsCount;s++)if(this.wins[t][e][s])if(this.curColor){if(this.myWins[s]=void 0===this.myWins[s]?1:this.myWins[s]+1,this.myWins[s]>=5){this.over=!0,i=!0;break}}else if(this.computerWins[s]=void 0===this.computerWins[s]?1:this.computerWins[s]+1,this.computerWins[s]>=5){this.over=!0,i=!0;break}return i},showGameType:function(){this.isComputer?this.type.innerText="User VS Computer":this.type.innerText="User VS User"},gameOver:function(){this.curColor?t.$confirm("您取得了胜利！","游戏结束",{type:"info"}).then(function(){info.innerText="游戏结束，你赢了..."}):t.$confirm("您输了...","游戏结束",{type:"info"}).then(function(){info.innerText="游戏结束，你输了..."})},removeChessPiece:function(){for(var t=this.chess.children,e=0,i=t.length;e<i;e++)t[e]&&"SPAN"===t[e].nodeName&&(t[e].parentNode.removeChild(t[e]),e--,i--)},resetGame:function(){this.removeChessPiece(),this.info.innerText="",this.showGameType(),this.over=!1,this.curColor=!0,this.curChess=function(){for(var t=[],e=0;e<16;e++){t[e]=[];for(var i=0;i<16;i++)t[e][i]=!1}return t}(),this.myWins=[],this.computerWins=[],this.myScore=function(){for(var t=[],e=0;e<16;e++){t[e]=[];for(var i=0;i<16;i++)t[e][i]=0}return t}(),this.computerScore=function(){for(var t=[],e=0;e<16;e++){t[e]=[];for(var i=0;i<16;i++)t[e][i]=0}return t}(),this.curColor?chessFlag.className="chess-pieces-black":chessFlag.className="chess-pieces-white"},computerAI:function(){for(var t=0;t<16;t++)for(var e=0;e<16;e++)if(!this.curChess[t][e])for(var i=0;i<this.winKindsCount;i++)this.wins[t][e][i]&&(1===this.myWins[i]?this.myScore[t][e]+=2:2===this.myWins[i]?this.myScore[t][e]+=4:3===this.myWins[i]?this.myScore[t][e]+=50:4===this.myWins[i]?this.myScore[t][e]+=200:this.myWins[i]>=5&&(this.myScore[t][e]+=500),1===this.computerWins[i]?this.computerScore[t][e]+=3:2===this.computerWins[i]?this.computerScore[t][e]+=5:3===this.computerWins[i]?this.computerScore[t][e]+=10:4===this.computerWins[i]?this.computerScore[t][e]+=300:this.computerWins[i]>=5&&(this.computerScore[t][e]+=1e3));for(var s=this.myScore[0][0],r=0,n=0,o=0;o<16;o++)for(var a=0;a<16;a++)this.curChess[o][a]||(s<this.myScore[o][a]&&(s=this.myScore[o][a],r=o,n=a),s<this.computerScore[o][a]&&(s=this.computerScore[o][a],r=o,n=a));return{x:r,y:n}},init:function(){for(var t=this,e="",i=0;i<225;i++)e+=this.cell;return this.chess.innerHTML=e,this.showGameType(),this.reBtn.addEventListener("click",function(e){t.resetGame()},!1),this.chess.addEventListener("click",function(e){if(t.over)return!1;var i=e.target,s=e.offsetX,r=e.offsetY,n=i.parentNode.children,o=void 0,a=void 0,c=void 0;if("box"!==i.className)return!1;for(var h=0,u=n.length;h<u;h++)n[h]===i&&(o=h);if(s<=10&&r<=10?(a=Math.floor(o/15),c=o%15):s>=25&&r<=10?(a=Math.floor(o/15),c=o%15+1):s<=10&&r>=25?(a=Math.floor(o/15)+1,c=o%15):s>=25&&r>=25&&(a=Math.floor(o/15)+1,c=o%15+1),void 0===a&&void 0===c)return!1;if(t.addPiece(a,c),t.curChess[a][c]=!0,t.checkIsWin(a,c))return t.gameOver(),!1;if(t.changeColor(),t.isComputer){var f=t.computerAI();if(t.addPiece(f.x,f.y),t.curChess[f.x][f.y]=!0,t.checkIsWin(a,c))return t.gameOver(),!1;t.changeColor()}},!1),this}}).init()})}},m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticStyle:{"text-align":"center",margin:"40px 0"}},[this._v("人机对战")]),this._v(" "),e("div",{attrs:{id:"operate"}},[e("button",{staticClass:"oper-btn",attrs:{id:"r"}},[this._v("reset")]),this._v(" "),e("span",{staticClass:"chess-pieces-black",attrs:{id:"chessFlag"}})]),this._v(" "),e("div",{attrs:{id:"container"}},[e("div",{attrs:{id:"chessboard"}})]),this._v(" "),e("div",[e("p",[e("strong",{attrs:{id:"type"}})]),this._v(" "),e("p",[e("strong",{attrs:{id:"info"}})])])])}]};var d=i("C7Lr")(l,m,!1,function(t){i("pDjd")},"data-v-8382e35a",null).exports,v={data:function(){return{chess:{},context:{},chessBoard:[],me:!0,count:0,wins:[],myWin:[],computerWin:[],over:!1}},mounted:function(){var t=this;setTimeout(function(e){t.init()})},methods:{init:function(){this.chess=this.$refs.canvas,this.context=this.chess.getContext("2d"),this.drawChessBoard(),this.fillArray()},fillArray:function(){for(var t=0;t<15;t++){this.chessBoard[t]=[];for(var e=0;e<15;e++)this.chessBoard[t][e]=0}for(var i=0;i<15;i++){this.wins[i]=[];for(var s=0;s<15;s++)this.wins[i][s]=[]}for(var r=0;r<15;r++)for(var n=0;n<11;n++){for(var o=0;o<5;o++)this.wins[r][n+o][this.count]=!0;this.count++}for(var a=0;a<15;a++)for(var c=0;c<11;c++){for(var h=0;h<5;h++)this.wins[c+h][a][this.count]=!0;this.count++}for(var u=0;u<11;u++)for(var f=0;f<11;f++){for(var l=0;l<5;l++)this.wins[u+l][f+l][this.count]=!0;this.count++}for(var m=0;m<11;m++)for(var d=14;d>3;d--){for(var v=0;v<5;v++)this.wins[m+v][d-v][this.count]=!0;this.count++}for(var p=0;p<this.count;p++)this.myWin[p]=0,this.computerWin[p]=0},drawImage:function(t){var e=this.context,i=new Image;i.src="/images/logo.svg",i.onload=function(s){e.drawImage(i,(450-i.width)/2,(450-i.height)/2,i.width,i.height),t()}},drawChessBoard:function(){var t=this.context;t.strokeStyle="#aaa";for(var e=0;e<15;e++)t.moveTo(15+30*e,15),t.lineTo(15+30*e,435),t.stroke(),t.moveTo(15,15+30*e),t.lineTo(435,15+30*e),t.stroke()},onStep:function(t,e,i){var s=this.context;s.beginPath(),s.arc(15+30*t,15+30*e,13,0,2*Math.PI),s.closePath();var r=s.createRadialGradient(15+30*t+2,15+30*e-2,13,15+30*t+2,15+30*e-2,0);i?(r.addColorStop(0,"#0a0a0a"),r.addColorStop(1,"#636766")):(r.addColorStop(0,"#d1d1d1"),r.addColorStop(1,"#f9f9f9")),s.fillStyle=r,s.fill()},reset:function(){var t=this;this.chess=this.$refs.canvas,this.context=this.chess.getContext("2d"),this.chessBoard=[],this.me=!0,this.count=0,this.wins=[],this.myWin=[],this.computerWin=[],this.over=!1,this.context.clearRect(0,0,525,525),setTimeout(function(){t.init()})},chessClick:function(t){var e=this;if(!this.over&&this.me){var i=t.offsetX,s=t.offsetY,r=Math.floor(i/30),n=Math.floor(s/30);if(0===this.chessBoard[r][n]){this.chessBoard[r][n]=1,this.onStep(r,n,this.me);for(var o=0;o<this.count;o++)this.wins[r][n][o]&&(this.myWin[o]++,this.computerWin[o]=6,5===this.myWin[o]&&(this.$alert("太棒了，成功打败了阿尔狗崽子","恭喜你",{confirmButtonText:"下一把",callback:function(t){e.$message({type:"info",message:"action: "+t})}}),this.over=!0));this.over||(this.me=!this.me,this.computerAI())}}},computerAI:function(){for(var t=this,e=[],i=[],s=0,r=0,n=0,o=0;o<15;o++){e[o]=[],i[o]=[];for(var a=0;a<15;a++)e[o][a]=0,i[o][a]=0}for(var c=0;c<15;c++)for(var h=0;h<15;h++)if(0===this.chessBoard[c][h]){for(var u=0;u<this.count;u++)this.wins[c][h][u]&&(1===this.myWin[u]?e[c][h]+=200:2===this.myWin[u]?e[c][h]+=400:3===this.myWin[u]?e[c][h]+=2e3:4===this.myWin[u]&&(e[c][h]+=1e4),1===this.computerWin[u]?i[c][h]+=220:2===this.computerWin[u]?i[c][h]+=420:3===this.computerWin[u]?i[c][h]+=2100:4===this.computerWin[u]&&(i[c][h]+=2e4));e[c][h]>s?(s=e[c][h],r=c,n=h):e[c][h]===s&&i[c][h]>i[r][n]&&(r=c,n=h),i[c][h]>s?(s=i[c][h],r=c,n=h):i[c][h]===s&&e[c][h]>e[r][n]&&(r=c,n=h)}this.onStep(r,n,!1),this.chessBoard[r][n]=2;for(var f=0;f<this.count;f++)this.wins[r][n][f]&&(this.computerWin[f]++,this.myWin[f]=6,5===this.computerWin[f]&&(this.$alert("再接再厉哦，被阿尔狗崽子打败了呀！","加油哦",{confirmButtonText:"下一把",callback:function(e){t.$message({type:"info",message:"action: "+e})}}),this.over=!0));this.over||(this.me=!this.me)}},head:function(){return{title:"五子棋 | 娱乐",meta:[{hid:"keywords",name:"keywords",content:"AI五子棋"},{hid:"description",name:"description",content:"AI五子棋"}]}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"borx"},[e("div",{staticClass:"tips"},[this._v("\n    既然来了下盘棋再走！\n    "),e("div",{staticClass:"reset"},[e("el-button",{attrs:{type:"primary"},on:{click:this.reset}},[this._v("reset")])],1)]),this._v(" "),e("div",{staticClass:"box"},[e("canvas",{ref:"canvas",attrs:{width:"450",height:"450"},on:{click:this.chessClick}})])])},staticRenderFns:[]};var y=i("C7Lr")(v,p,!1,function(t){i("9bCw")},"data-v-1ba5c90c",null).exports,g={data:function(){return{winner:""}},methods:{reStart:function(){this.$router.push({path:"/follow"})}},created:function(){this.winner=this.$route.query.winner,console.log(this.id)}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("h2",[this._v(this._s(this.winner)+"赢了！")]),this._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:this.reStart}},[this._v("重新开始")])],1)},staticRenderFns:[]};var w=i("C7Lr")(g,C,!1,function(t){i("asco")},"data-v-70459257",null).exports;s.default.use(o.a);var S=new o.a({routes:[{path:"/",name:"home",component:h,children:[{path:"/my",name:"my",component:f},{path:"/study",name:"study",component:d},{path:"/follow",name:"follow",component:y},{path:"/result",name:"result",component:w}]}]}),W=i("84iU"),x=i.n(W),_=i("fUgm");s.default.use(_.a);var k={handleLogin:function(t,e){t.commit;var i=e.adminInfo,s=e.success,r=e.err;x.a.post("/login",i).then(function(t){t.status?s(t.msg):r(t.msg)})}},b=new _.a.Store({state:{token:null,adminName:null,adminId:null},mutations:{},actions:k}),B={currency:function(t){return"￥"+t},date:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")+" "+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")+":"+e.getSeconds().toString().padStart(2,"0")},imgUrl:function(t){return"http://127.0.0.1:8082/"+t}},I=i("zMdo"),$=i.n(I),T=i("bQIR"),F=i.n(T);i("gFLX");for(var E in x.a.interceptors.request.use(function(t){return t.url="/ele"+t.url,t}),x.a.interceptors.response.use(function(t){return t.data}),s.default.prototype.$axios=x.a,B)s.default.filter(E,B[E]);s.default.config.productionTip=!1,s.default.use(F.a),s.default.use($.a),new s.default({el:"#app",router:S,store:b,components:{App:n},template:"<App/>"})},asco:function(t,e){},buyq:function(t,e){},gFLX:function(t,e){},oeht:function(t,e){},pDjd:function(t,e){},w3rB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0e9913c63bbf80351966.js.map