(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("59e679d0",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";var r=n(188);n.n(r).a},191:function(t,e,n){(e=n(50)(!1)).push([t.i,'*[data-v-15bd0c14]{font-family:"M PLUS Rounded 1c",sans-serif}.title[data-v-15bd0c14]{margin-top:40px;text-align:center;font-family:"Noto Sans JP",sans-serif;color:#777;font-size:24px}.display[data-v-15bd0c14]{width:400px;max-width:80vw;margin:40px auto 0}.eq-input[data-v-15bd0c14]{display:block;margin:0 auto;border:1px solid #eee;text-align:center;height:40px;font-size:19px;line-height:40px;color:#777;width:80%;font-weight:300}.hor-line[data-v-15bd0c14]{border-top:1px solid #777;margin:20px 0 17px;width:100%}.result[data-v-15bd0c14]{display:block;margin:0 auto;text-align:center;height:40px;font-size:19px;line-height:20px;padding:10px 0;color:#777;width:80%}.error-result[data-v-15bd0c14]{color:#c66;font-size:.75em}.input_buttons[data-v-15bd0c14]{list-style:none;width:350px;max-width:75vw;display:flex;justify-content:space-between;flex-wrap:wrap;margin:30px auto 0;padding:0}.input_buttons>li[data-v-15bd0c14]{flex:1 0 30%;padding:6px;box-sizing:border-box}.control_buttons>li[data-v-15bd0c14]{flex:1 0 50%;padding:6px;box-sizing:border-box}.ui_button[data-v-15bd0c14]{padding:0 10px;width:100%;border:none;height:70px;background-color:#eee;color:#777;font-size:20px}.control_button[data-v-15bd0c14]{height:45px}.control_buttons[data-v-15bd0c14]{list-style:none;width:350px;max-width:75vw;display:flex;justify-content:space-between;flex-wrap:wrap;margin:25px auto 0;padding:0}',""]),t.exports=e},206:function(t,e,n){"use strict";n.r(e);n(23),n(52),n(28),n(54),n(53),n(26),n(45),n(133),n(55),n(56),n(12),n(13),n(6);var r=n(18),o=n(7),c=n(21),l=n(189);function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={data:function(){var t,e=function(){function t(e){Object(o.a)(this,t),this.rices=e}return Object(c.a)(t,[{key:"eval",value:function(){if(2!==this.rices.length)return new d;var t=Object(r.a)(this.rices,2),e=t[0],o=t[1];if("牧"===e.toString())return new n([new l(new n([new h(0),new h(1),o,new h(0)]))]);var c=o.hasTwo()?new h(2):e.eval(),f=e.hasTwo()?new h(2):o.eval();return new n([c,new l(f)])}},{key:"hasTwo",value:function(){return this.rices.some((function(t){return t.hasTwo()}))}},{key:"lift",value:function(){return new t(this.rices.map((function(t){return t.lift()})))}},{key:"toString",value:function(){if(2!==this.rices.length)return(new d).toString();var t=Object(r.a)(this.rices,2);return t[0]+"="+t[1]}}]),t}(),n=function(){function t(e){Object(o.a)(this,t),this.terms=e}return Object(c.a)(t,[{key:"eval",value:function(){return new t(this.terms.map((function(t){return t.eval()})))}},{key:"hasTwo",value:function(){return this.terms.some((function(t){return t.hasTwo()}))}},{key:"lift",value:function(){return new t(this.terms.map((function(t){return t.lift()})))}},{key:"toString",value:function(){return this.terms.map((function(t){return t.toString()})).join("")}}]),t}(),l=function(){function t(e){Object(o.a)(this,t),this.inside=e}return Object(c.a)(t,[{key:"eval",value:function(){return this.inside.eval().lift()}},{key:"hasTwo",value:function(){return this.inside.hasTwo()}},{key:"lift",value:function(){return new t(this.inside.lift())}},{key:"toString",value:function(){return"("+this.inside+")"}}]),t}(),h=function(){function t(e){Object(o.a)(this,t),this.contents=e}return Object(c.a)(t,[{key:"eval",value:function(){return this}},{key:"hasTwo",value:function(){return 2===this.contents}},{key:"lift",value:function(){switch(this.contents){case 0:return new t(1);case 1:case 2:return new t(2)}}},{key:"toString",value:function(){return["7","牧","^^"][this.contents]}}]),t}(),d=function(){function t(){Object(o.a)(this,t)}return Object(c.a)(t,[{key:"eval",value:function(){return this}},{key:"hasTwo",value:function(){return!1}},{key:"lift",value:function(){return this}},{key:"toString",value:function(){return"D"}}]),t}(),w=function(){function t(e){Object(o.a)(this,t),this.msg=e}return Object(c.a)(t,[{key:"eval",value:function(){return this.msg}}]),t}();return{expression:{raw:(t=new URL(document.URL).searchParams.get("rice"),t?decodeURI(t.toString()):""),isResultError:!1,uiKeys:["7","^^","牧","(",")","="],calc:function(t){var e=this.parse(t);console.log(e);var n=e.eval().toString();return this.isResultError=e instanceof w,!this.isResultError&&n.includes("D")?"(´∀｀*)ｳﾌﾌ":n},backspace:function(){0!==this.raw.length&&(this.raw.endsWith("^^")?this.raw=this.raw.slice(0,this.raw.length-2):this.raw=this.raw.slice(0,this.raw.length-1))},clear:function(){this.raw=""},parse:function(t){var r=[],o=[];if(/[0-2]/.test(t))return new w("Parse Error: 知らない文字が有るよ");var c,d=f(t.replace(/ /g,"").replace(/7/g,"0").replace(/牧/g,"1").replace(/\^\^/g,"2"));try{for(d.s();!(c=d.n()).done;){var v=c.value;switch(v){case"0":o.push(new h(0));break;case"1":o.push(new h(1));break;case"2":o.push(new h(2));break;case"=":o.push("=");break;case"(":r.push(o),o=[];break;case")":var x=r.pop();if(void 0===x)return new w("Parse Error: 丸はしっかり閉じましょう");if(0===o.length)return new w("Parse Error: 空っぽ");if("="===o[0]||"="===o[o.length-1])return new w("Parse Error: 端っこに=は置けません");for(var y=[[]],m=0,k=o;m<k.length;m++){var _=k[m];"="===_?y.push([]):y[y.length-1].push(_)}1===y.length?x.push(new l(new n(y[0]))):x.push(new l(new e(y.map((function(t){return new n(t)}))))),o=x;break;default:return new w("Parse Error:  知らない文字「"+v+"」")}}}catch(t){d.e(t)}finally{d.f()}if(r.length>0)return new w("Parse Error: 丸はしっかり閉じましょう");if(o.length>0&&("="===o[0]||"="===o[o.length-1]))return new w("Parse Error: 端っこに=は置けません");var j,S=[[]],O=f(o);try{for(O.s();!(j=O.n()).done;){var C=j.value;"="===C?S.push([]):S[S.length-1].push(C)}}catch(t){O.e(t)}finally{O.f()}return 1===S.length?new n(S[0]):new e(S.map((function(t){return new n(t)})))}}}},computed:{faTwitter:function(){return l.a}},methods:{share:function(t){var e=t+"\n-------------\nhttps://catupper.github.io/777evaluator/?rice="+encodeURIComponent(t).replace("(","%28").replace(")","%29"),n="https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(e));window.open(n,"_blank")}}},w=(n(190),n(47)),v=n(192),x=n.n(v),y=n(205),component=Object(w.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expression"},[n("h1",{staticClass:"title"},[t._v("オンライン胡算器")]),t._v(" "),n("div",{staticClass:"display"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.expression.raw,expression:"expression.raw"}],staticClass:"eq-input",attrs:{type:"text"},domProps:{value:t.expression.raw},on:{input:function(e){e.target.composing||t.$set(t.expression,"raw",e.target.value)}}}),t._v(" "),n("div",{staticClass:"hor-line"}),t._v(" "),n("div",{class:{result:!0,"error-result":t.expression.isResultError}},[t._v("\n      "+t._s(t.expression.calc(t.expression.raw))+"\n    ")])]),t._v(" "),n("ul",{staticClass:"input_buttons"},t._l(t.expression.uiKeys,(function(e){return n("li",{key:e},[n("button",{staticClass:"ui_button",on:{click:function(n){t.expression.raw+=e}}},[t._v(t._s(e))])])})),0),t._v(" "),n("ul",{staticClass:"control_buttons"},[n("li",[n("button",{staticClass:"ui_button control_button",on:{click:function(e){return t.expression.backspace()}}},[t._v("\n        Del\n      ")])]),t._v(" "),n("li",[n("button",{staticClass:"ui_button control_button",on:{click:function(e){return t.expression.clear()}}},[t._v("\n        Clear\n      ")])])]),t._v(" "),n("v-btn",{on:{click:function(e){return t.share(t.expression.raw)}}},[n("fa",{staticStyle:{color:"#1da1f2","font-size":"40px"},attrs:{icon:t.faTwitter}})],1)],1)}),[],!1,null,"15bd0c14",null);e.default=component.exports;x()(component,{VBtn:y.a})}}]);