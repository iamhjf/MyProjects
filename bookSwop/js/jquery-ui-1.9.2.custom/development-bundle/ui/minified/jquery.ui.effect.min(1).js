/*! jQuery UI - v1.9.2 - 2017-11-12
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed MIT */

jQuery.effects||function(t,e){var i=t.uiBackCompat!==!1,s="ui-effects-";t.effects={effect:{}},function(e,i){function s(t,e,i){var s=d[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function n(t){var s=c(),n=s._rgba=[];return t=t.toLowerCase(),g(h,function(e,a){var o,r=a.re.exec(t),l=r&&a.parse(r),h=a.space||"rgba";return l?(o=s[h](l),s[u[h].cache]=o[u[h].cache],n=s._rgba=o._rgba,!1):i}),n.length?("0,0,0,0"===n.join()&&e.extend(n,o.transparent),s):o[t]}function a(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),l=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],c=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=c.support={},f=e("<p>")[0],g=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,g(u,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),c.fn=e.extend(c.prototype,{parse:function(a,r,l,h){if(a===i)return this._rgba=[null,null,null,null],this;(a.jquery||a.nodeType)&&(a=e(a).css(r),r=i);var d=this,p=e.type(a),f=this._rgba=[];return r!==i&&(a=[a,r,l,h],p="array"),"string"===p?this.parse(n(a)||o._default):"array"===p?(g(u.rgba.props,function(t,e){f[e.idx]=s(a[e.idx],e)}),this):"object"===p?(a instanceof c?g(u,function(t,e){a[e.cache]&&(d[e.cache]=a[e.cache].slice())}):g(u,function(e,i){var n=i.cache;g(i.props,function(t,e){if(!d[n]&&i.to){if("alpha"===t||null==a[t])return;d[n]=i.to(d._rgba)}d[n][e.idx]=s(a[t],e,!0)}),d[n]&&0>t.inArray(null,d[n].slice(0,3))&&(d[n][3]=1,i.from&&(d._rgba=i.from(d[n])))}),this):i},is:function(t){var e=c(t),s=!0,n=this;return g(u,function(t,a){var o,r=e[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],g(a.props,function(t,e){return null!=r[e.idx]?s=r[e.idx]===o[e.idx]:i})),s}),s},_space:function(){var t=[],e=this;return g(u,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var i=c(t),n=i._space(),a=u[n],o=0===this.alpha()?c("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return i=i[a.cache],g(a.props,function(t,n){var a=n.idx,o=r[a],h=i[a],c=d[n.type]||{};null!==h&&(null===o?l[a]=h:(c.mod&&(h-o>c.mod/2?o+=c.mod:o-h>c.mod/2&&(o-=c.mod)),l[a]=s((h-o)*e+o,n)))}),this[n](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=c(t)._rgba;return c(e.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,u.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),l=Math.min(s,n,a),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-a)/h+360:n===r?60*(a-s)/h+120:60*(s-n)/h+240,i=0===u||1===u?u:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},u.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],n=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*a(r,o,e+1/3)),Math.round(255*a(r,o,e)),Math.round(255*a(r,o,e-1/3)),n]},g(u,function(t,n){var a=n.props,o=n.cache,r=n.to,h=n.from;c.fn[t]=function(t){if(r&&!this[o]&&(this[o]=r(this._rgba)),t===i)return this[o].slice();var n,l=e.type(t),u="array"===l||"object"===l?t:arguments,d=this[o].slice();return g(a,function(t,e){var i=u["object"===l?t:e.idx];null==i&&(i=d[e.idx]),d[e.idx]=s(i,e)}),h?(n=c(h(d)),n[o]=d,n):c(d)},g(a,function(i,s){c.fn[i]||(c.fn[i]=function(n){var a,o=e.type(n),r="alpha"===i?this._hsla?"hsla":"rgba":t,h=this[r](),c=h[s.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=e.type(n)),null==n&&s.empty?this:("string"===o&&(a=l.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),h[s.idx]=n,this[r](h)))})})}),g(r,function(t,i){e.cssHooks[i]={set:function(t,s){var a,o,r="";if("string"!==e.type(s)||(a=n(s))){if(s=c(a||s),!p.rgba&&1!==s._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(l){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{t.style[i]=s}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=c(t.elem,i),t.end=c(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}}),e.cssHooks.borderColor={expand:function(t){var e={};return g(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(){var e,i,s=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,n={};if(s&&s.length&&s[0]&&s[s[0]])for(i=s.length;i--;)e=s[i],"string"==typeof s[e]&&(n[t.camelCase(e)]=s[e]);else for(e in s)"string"==typeof s[e]&&(n[e]=s[e]);return n}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.effects.animateClass=function(e,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",h=l.children?o.find("*").andSelf():o;h=h.map(function(){var e=t(this);return{el:e,start:i.call(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),h=h.map(function(){return this.end=i.call(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=jQuery.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({_addClass:t.fn.addClass,addClass:function(e,i,s,n){return i?t.effects.animateClass.call(this,{add:e},i,s,n):this._addClass(e)},_removeClass:t.fn.removeClass,removeClass:function(e,i,s,n){return i?t.effects.animateClass.call(this,{remove:e},i,s,n):this._removeClass(e)},_toggleClass:t.fn.toggleClass,toggleClass:function(i,s,n,a,o){return"boolean"==typeof s||s===e?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):this._toggleClass(i,s):t.effects.animateClass.call(this,{toggle:i},s,n,a)},switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function n(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function a(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?!1:i&&t.effects[e]?!1:!0}t.extend(t.effects,{version:"1.9.2",save:function(t,e){for(var i=0;e.length>i;i++)null!==e[i]&&t.data(s+e[i],t[0].style[e[i]])},restore:function(t,i){var n,a;for(a=0;i.length>a;a++)null!==i[a]&&(n=t.data(s+i[a]),n===e&&(n=""),t.css(i[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function i(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=s.complete,o=s.mode;(n.is(":hidden")?"hide"===o:"show"===o)?i():r.call(n[0],s,i)}var s=n.apply(this,arguments),a=s.mode,o=s.queue,r=t.effects.effect[s.effect],l=!r&&i&&t.effects[s.effect];return t.fx.off||!r&&!l?a?this[a](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):r?o===!1?this.each(e):this.queue(o||"fx",e):l.call(this,{options:s,duration:s.duration,callback:s.complete,mode:s.mode})},_show:t.fn.show,show:function(t){if(a(t))return this._show.apply(this,arguments);var e=n.apply(this,arguments);return e.mode="show",this.effect.call(this,e)},_hide:t.fn.hide,hide:function(t){if(a(t))return this._hide.apply(this,arguments);var e=n.apply(this,arguments);return e.mode="hide",this.effect.call(this,e)},__toggle:t.fn.toggle,toggle:function(e){if(a(e)||"boolean"==typeof e||t.isFunction(e))return this.__toggle.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)},cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery);