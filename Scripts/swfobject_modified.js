var swfobject=function(){function y(){if(d){return}if(m.ie&&m.win){var e=O("span");try{var t=u.getElementsByTagName("body")[0].appendChild(e);t.parentNode.removeChild(t)}catch(n){return}}d=true;if(c){clearInterval(c);c=null}var r=f.length;for(var i=0;i<r;i++){f[i]()}}function b(e){if(d){e()}else{f[f.length]=e}}function w(t){if(typeof o.addEventListener!=e){o.addEventListener("load",t,false)}else if(typeof u.addEventListener!=e){u.addEventListener("load",t,false)}else if(typeof o.attachEvent!=e){o.attachEvent("onload",t)}else if(typeof o.onload=="function"){var n=o.onload;o.onload=function(){n();t()}}else{o.onload=t}}function E(){var e=l.length;for(var t=0;t<e;t++){var n=l[t].id;if(m.pv[0]>0){var r=A(n);if(r){l[t].width=r.getAttribute("width")?r.getAttribute("width"):"0";l[t].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(M(l[t].swfVersion)){if(m.webkit&&m.webkit<312){S(r)}D(n,true)}else if(l[t].expressInstall&&!v&&M("6.0.65")&&(m.win||m.mac)){T(l[t])}else{N(r)}}}else{D(n,true)}}}function S(e){var n=e.getElementsByTagName(t)[0];if(n){var r=O("embed"),i=n.attributes;if(i){var s=i.length;for(var o=0;o<s;o++){if(i[o].nodeName.toLowerCase()=="data"){r.setAttribute("src",i[o].nodeValue)}else{r.setAttribute(i[o].nodeName,i[o].nodeValue)}}}var u=n.childNodes;if(u){var a=u.length;for(var f=0;f<a;f++){if(u[f].nodeType==1&&u[f].nodeName.toLowerCase()=="param"){r.setAttribute(u[f].getAttribute("name"),u[f].getAttribute("value"))}}}e.parentNode.replaceChild(r,e)}}function x(e){if(m.ie&&m.win&&M("8.0.0")){o.attachEvent("onunload",function(){var t=A(e);if(t){for(var n in t){if(typeof t[n]=="function"){t[n]=function(){}}}t.parentNode.removeChild(t)}})}}function T(e){v=true;var t=A(e.id);if(t){if(e.altContentId){var n=A(e.altContentId);if(n){h=n;p=e.altContentId}}else{h=C(t)}if(!/%$/.test(e.width)&&parseInt(e.width,10)<310){e.width="310"}if(!/%$/.test(e.height)&&parseInt(e.height,10)<137){e.height="137"}u.title=u.title.slice(0,47)+" - Flash Player Installation";var r=m.ie&&m.win?"ActiveX":"PlugIn",i=u.title,a="MMredirectURL="+o.location+"&MMplayerType="+r+"&MMdoctitle="+i,f=e.id;if(m.ie&&m.win&&t.readyState!=4){var l=O("div");f+="SWFObjectNew";l.setAttribute("id",f);t.parentNode.insertBefore(l,t);t.style.display="none";o.attachEvent("onload",function(){t.parentNode.removeChild(t)})}k({data:e.expressInstall,id:s,width:e.width,height:e.height},{flashvars:a},f)}}function N(e){if(m.ie&&m.win&&e.readyState!=4){var t=O("div");e.parentNode.insertBefore(t,e);t.parentNode.replaceChild(C(e),t);e.style.display="none";o.attachEvent("onload",function(){e.parentNode.removeChild(e)})}else{e.parentNode.replaceChild(C(e),e)}}function C(e){var n=O("div");if(m.win&&m.ie){n.innerHTML=e.innerHTML}else{var r=e.getElementsByTagName(t)[0];if(r){var i=r.childNodes;if(i){var s=i.length;for(var o=0;o<s;o++){if(!(i[o].nodeType==1&&i[o].nodeName.toLowerCase()=="param")&&!(i[o].nodeType==8)){n.appendChild(i[o].cloneNode(true))}}}}}return n}function k(n,r,s){var o,u=A(s);if(typeof n.id==e){n.id=s}if(m.ie&&m.win){var a="";for(var f in n){if(n[f]!=Object.prototype[f]){if(f=="data"){r.movie=n[f]}else if(f.toLowerCase()=="styleclass"){a+=' class="'+n[f]+'"'}else if(f!="classid"){a+=" "+f+'="'+n[f]+'"'}}}var l="";for(var c in r){if(r[c]!=Object.prototype[c]){l+='<param name="'+c+'" value="'+r[c]+'" />'}}u.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+a+">"+l+"</object>";x(n.id);o=A(n.id)}else if(m.webkit&&m.webkit<312){var h=O("embed");h.setAttribute("type",i);for(var p in n){if(n[p]!=Object.prototype[p]){if(p=="data"){h.setAttribute("src",n[p])}else if(p.toLowerCase()=="styleclass"){h.setAttribute("class",n[p])}else if(p!="classid"){h.setAttribute(p,n[p])}}}for(var d in r){if(r[d]!=Object.prototype[d]){if(d!="movie"){h.setAttribute(d,r[d])}}}u.parentNode.replaceChild(h,u);o=h}else{var v=O(t);v.setAttribute("type",i);for(var g in n){if(n[g]!=Object.prototype[g]){if(g.toLowerCase()=="styleclass"){v.setAttribute("class",n[g])}else if(g!="classid"){v.setAttribute(g,n[g])}}}for(var y in r){if(r[y]!=Object.prototype[y]&&y!="movie"){L(v,y,r[y])}}u.parentNode.replaceChild(v,u);o=v}return o}function L(e,t,n){var r=O("param");r.setAttribute("name",t);r.setAttribute("value",n);e.appendChild(r)}function A(e){return u.getElementById(e)}function O(e){return u.createElement(e)}function M(e){var t=m.pv,n=e.split(".");n[0]=parseInt(n[0],10);n[1]=parseInt(n[1],10);n[2]=parseInt(n[2],10);return t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?true:false}function _(n,r){if(m.ie&&m.mac){return}var i=u.getElementsByTagName("head")[0],s=O("style");s.setAttribute("type","text/css");s.setAttribute("media","screen");if(!(m.ie&&m.win)&&typeof u.createTextNode!=e){s.appendChild(u.createTextNode(n+" {"+r+"}"))}i.appendChild(s);if(m.ie&&m.win&&typeof u.styleSheets!=e&&u.styleSheets.length>0){var o=u.styleSheets[u.styleSheets.length-1];if(typeof o.addRule==t){o.addRule(n,r)}}}function D(e,t){var n=t?"inherit":"hidden";if(d){A(e).style.visibility=n}else{_("#"+e,"visibility:"+n)}}function P(e){if(!e)return 0;var t=e.childNodes;var n=t.length;for(var r=0;r<n;r++){if(t[r].nodeType==1&&t[r].nodeName.toLowerCase()=="object"){t=t[r].childNodes;n=t.length;r=0}if(t[r].nodeType==1&&t[r].nodeName.toLowerCase()=="param"&&t[r].getAttribute("name")=="swfversion"){return t[r].getAttribute("value")}}return 0}function H(e){if(!e)return"";var t=e.childNodes;var n=t.length;for(var r=0;r<n;r++){if(t[r].nodeType==1&&t[r].nodeName.toLowerCase()=="object"){t=t[r].childNodes;n=t.length;r=0}if(t[r].nodeType==1&&t[r].nodeName.toLowerCase()=="param"&&t[r].getAttribute("name")=="expressinstall"){return t[r].getAttribute("value")}}return""}var e="undefined",t="object",n="Shockwave Flash",r="ShockwaveFlash.ShockwaveFlash",i="application/x-shockwave-flash",s="SWFObjectExprInst",o=window,u=document,a=navigator,f=[],l=[],c=null,h=null,p=null,d=false,v=false;var m=function(){var i=typeof u.getElementById!=e&&typeof u.getElementsByTagName!=e&&typeof u.createElement!=e&&typeof u.appendChild!=e&&typeof u.replaceChild!=e&&typeof u.removeChild!=e&&typeof u.cloneNode!=e,s=[0,0,0],f=null;if(typeof a.plugins!=e&&typeof a.plugins[n]==t){f=a.plugins[n].description;if(f){f=f.replace(/^.*\s+(\S+\s+\S+$)/,"$1");s[0]=parseInt(f.replace(/^(.*)\..*$/,"$1"),10);s[1]=parseInt(f.replace(/^.*\.(.*)\s.*$/,"$1"),10);s[2]=/r/.test(f)?parseInt(f.replace(/^.*r(.*)$/,"$1"),10):0}}else if(typeof o.ActiveXObject!=e){var l=null,c=false;try{l=new ActiveXObject(r+".7")}catch(h){try{l=new ActiveXObject(r+".6");s=[6,0,21];l.AllowScriptAccess="always"}catch(h){if(s[0]==6){c=true}}if(!c){try{l=new ActiveXObject(r)}catch(h){}}}if(!c&&l){try{f=l.GetVariable("$version");if(f){f=f.split(" ")[1].split(",");s=[parseInt(f[0],10),parseInt(f[1],10),parseInt(f[2],10)]}}catch(h){}}}var p=a.userAgent.toLowerCase(),d=a.platform.toLowerCase(),v=/webkit/.test(p)?parseFloat(p.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,m=false,g=d?/win/.test(d):/win/.test(p),y=d?/mac/.test(d):/mac/.test(p);return{w3cdom:i,pv:s,webkit:v,ie:m,win:g,mac:y}}();var g=function(){if(!m.w3cdom){return}b(E);if(m.ie&&m.win){try{u.write("<scr"+"ipt id=__ie_ondomload defer=true src=//:></scr"+"ipt>");var t=A("__ie_ondomload");if(t){t.onreadystatechange=function(){if(this.readyState=="complete"){this.parentNode.removeChild(this);y()}}}}catch(n){}}if(m.webkit&&typeof u.readyState!=e){c=setInterval(function(){if(/loaded|complete/.test(u.readyState)){y()}},10)}if(typeof u.addEventListener!=e){u.addEventListener("DOMContentLoaded",y,null)}w(y)}();return{registerObject:function(e,t,n){if(!m.w3cdom||!e){return}var r=document.getElementById(e);var i=H(r);var s={};s.id=e;s.swfVersion=t?t:P(r);s.expressInstall=n?n:i!=""?i:false;l[l.length]=s;D(e,false)},getObjectById:function(n){var r=null;if(m.w3cdom&&d){var i=A(n);if(i){var s=i.getElementsByTagName(t)[0];if(!s||s&&typeof i.SetVariable!=e){r=i}else if(typeof s.SetVariable!=e){r=s}}}return r},embedSWF:function(n,r,i,s,o,u,a,f,l){if(!m.w3cdom||!n||!r||!i||!s||!o){return}i+="";s+="";if(M(o)){D(r,false);var c=typeof l==t?l:{};c.data=n;c.width=i;c.height=s;var h=typeof f==t?f:{};if(typeof a==t){for(var p in a){if(a[p]!=Object.prototype[p]){if(typeof h.flashvars!=e){h.flashvars+="&"+p+"="+a[p]}else{h.flashvars=p+"="+a[p]}}}}b(function(){k(c,h,r);if(c.id==r){D(r,true)}})}else if(u&&!v&&M("6.0.65")&&(m.win||m.mac)){D(r,false);b(function(){var e={};e.id=e.altContentId=r;e.width=i;e.height=s;e.expressInstall=u;T(e)})}},getFlashPlayerVersion:function(){return{major:m.pv[0],minor:m.pv[1],release:m.pv[2]}},hasFlashPlayerVersion:M,createSWF:function(e,t,n){if(m.w3cdom&&d){return k(e,t,n)}else{return undefined}},createCSS:function(e,t){if(m.w3cdom){_(e,t)}},addDomLoadEvent:b,addLoadEvent:w,getQueryParamValue:function(e){var t=u.location.search||u.location.hash;if(e==null){return t}if(t){var n=t.substring(1).split("&");for(var r=0;r<n.length;r++){if(n[r].substring(0,n[r].indexOf("="))==e){return n[r].substring(n[r].indexOf("=")+1)}}}return""},expressInstallCallback:function(){if(v&&h){var e=A(s);if(e){e.parentNode.replaceChild(h,e);if(p){D(p,true);if(m.ie&&m.win){h.style.display="block"}}h=null;p=null;v=false}}}}}()