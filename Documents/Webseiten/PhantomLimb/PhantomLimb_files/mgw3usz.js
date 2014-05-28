/*{"created":"2011-03-09T22:43:36Z","version":"3106200","mac":"1:cabea376ee63d58062bd80487c520794a11e5fab75ca2d18f82290e96ceeef7c","k":"0.7.27"}*/
;(function(window,document,undefined){
var i=true,k=null,q=false;function r(a){return function(){return this[a]}}var s;function t(a,c){var b=arguments.length>2?Array.prototype.slice.call(arguments,2):[];return function(){b.push.apply(b,arguments);return c.apply(a,b)}}function u(a,c){this.o=a;this.f=c}s=u.prototype;
s.createElement=function(a,c,b){a=this.o.createElement(a);if(c)for(var d in c)if(c.hasOwnProperty(d))if(d=="style"&&this.f.getName()=="MSIE")a.style.cssText=c[d];else a.setAttribute(d,c[d]);b&&a.appendChild(this.o.createTextNode(b));return a};s.insertInto=function(a,c){var b=this.o.getElementsByTagName(a)[0];if(!b)b=document.documentElement;if(b&&b.lastChild){b.insertBefore(c,b.lastChild);return i}return q};s.whenBodyExists=function(a){function c(){document.body?a():setTimeout(c,0)}c()};
s.removeElement=function(a){if(a.parentNode){a.parentNode.removeChild(a);return i}return q};s.createCssLink=function(a){return this.createElement("link",{rel:"stylesheet",href:a})};s.appendClassName=function(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/^\s+/,"")};
s.removeClassName=function(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,g=b.length;e<g;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/^\s+/,"").replace(/\s+$/,"")};s.hasClassName=function(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return i;return q};function v(a,c,b,d,e,g,l,h){this.pa=a;this.Ba=c;this.fa=b;this.ea=d;this.ua=e;this.ta=g;this.da=l;this.Ca=h}s=v.prototype;s.getName=r("pa");s.getVersion=r("Ba");s.getEngine=r("fa");s.getEngineVersion=r("ea");
s.getPlatform=r("ua");s.getPlatformVersion=r("ta");s.getDocumentMode=r("da");function w(a,c){this.f=a;this.r=c}var aa=new v("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",undefined,q);
w.prototype.parse=function(){var a;if(this.f.indexOf("MSIE")!=-1){a=x(this,this.f,/(MSIE [\d\w\.]+)/,1);if(a!=""){var c=a.split(" ");a=c[0];c=c[1];a=new v(a,c,a,c,y(this),z(this),A(this,this.r),B(this,c)>=6)}else a=new v("MSIE","Unknown","MSIE","Unknown",y(this),z(this),A(this,this.r),q)}else{if(this.f.indexOf("Opera")!=-1)a:{c=a="Unknown";var b=x(this,this.f,/(Presto\/[\d\w\.]+)/,1);if(b!=""){c=b.split("/");a=c[0];c=c[1]}else{if(this.f.indexOf("Gecko")!=-1)a="Gecko";b=x(this,this.f,/rv:([^\)]+)/,
1);if(b!="")c=b}if(this.f.indexOf("Version/")!=-1){b=x(this,this.f,/Version\/([\d\.]+)/,1);if(b!=""){a=new v("Opera",b,a,c,y(this),z(this),A(this,this.r),B(this,b)>=10);break a}}b=x(this,this.f,/Opera[\/ ]([\d\.]+)/,1);a=b!=""?new v("Opera",b,a,c,y(this),z(this),A(this,this.r),B(this,b)>=10):new v("Opera","Unknown",a,c,y(this),z(this),A(this,this.r),q)}else{if(this.f.indexOf("AppleWebKit")!=-1){a=y(this);c=z(this);b=x(this,this.f,/AppleWebKit\/([\d\.]+)/,1);if(b=="")b="Unknown";var d="Unknown";
if(this.f.indexOf("Chrome")!=-1)d="Chrome";else if(this.f.indexOf("Safari")!=-1)d="Safari";else if(this.f.indexOf("AdobeAIR")!=-1)d="AdobeAIR";var e="Unknown";if(this.f.indexOf("Version/")!=-1)e=x(this,this.f,/Version\/([\d\.\w]+)/,1);else if(d=="Chrome")e=x(this,this.f,/Chrome\/([\d\.]+)/,1);else if(d=="AdobeAIR")e=x(this,this.f,/AdobeAIR\/([\d\.]+)/,1);var g=q;if(d=="AdobeAIR"){g=x(this,e,/\d+\.(\d+)/,1);g=B(this,e)>2||B(this,e)==2&&parseInt(g,10)>=5}else{g=x(this,b,/\d+\.(\d+)/,1);g=B(this,b)>=
526||B(this,b)>=525&&parseInt(g,10)>=13}a=new v(d,e,"AppleWebKit",b,a,c,A(this,this.r),g)}else{if(this.f.indexOf("Gecko")!=-1){c=a="Unknown";d=q;if(this.f.indexOf("Firefox")!=-1){a="Firefox";b=x(this,this.f,/Firefox\/([\d\w\.]+)/,1);if(b!=""){d=x(this,b,/\d+\.(\d+)/,1);c=b;d=b!=""&&B(this,b)>=3&&parseInt(d,10)>=5}}else if(this.f.indexOf("Mozilla")!=-1)a="Mozilla";b=x(this,this.f,/rv:([^\)]+)/,1);if(b=="")b="Unknown";else if(!d){d=B(this,b);e=parseInt(x(this,b,/\d+\.(\d+)/,1),10);g=parseInt(x(this,
b,/\d+\.\d+\.(\d+)/,1),10);d=d>1||d==1&&e>9||d==1&&e==9&&g>=2||b.match(/1\.9\.1b[123]/)!=k||b.match(/1\.9\.1\.[\d\.]+/)!=k}a=new v(a,c,"Gecko",b,y(this),z(this),A(this,this.r),d)}else a=aa;a=a}a=a}a=a}return a};function y(a){var c=x(a,a.f,/(iPod|iPad|iPhone|Android)/,1);if(c!="")return c;a=x(a,a.f,/(Linux|Mac_PowerPC|Macintosh|Windows)/,1);if(a!=""){if(a=="Mac_PowerPC")a="Macintosh";return a}return"Unknown"}
function z(a){var c=x(a,a.f,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(c)return c;if(c=x(a,a.f,/(iPhone )?OS ([\d_]+)/,2))return c;if(a=x(a,a.f,/Linux ([i\d]+)/,1))return a;return"Unknown"}function B(a,c){var b=x(a,c,/(\d+)/,1);if(b!="")return parseInt(b,10);return-1}function x(a,c,b,d){if((a=c.match(b))&&a[d])return a[d];return""}function A(a,c){if(c.documentMode)return c.documentMode}function ba(a,c,b,d){this.i=a;this.j=c;this.K=b;this.m=d||"wf";this.l=new C("-")}
function D(a){a.i.removeClassName(a.j,a.l.k(a.m,"loading"));a.i.hasClassName(a.j,a.l.k(a.m,"active"))||a.i.appendClassName(a.j,a.l.k(a.m,"inactive"));F(a,"inactive")}function F(a,c,b,d){a.K[c]&&a.K[c](b,d)}function G(a,c,b,d,e){this.i=a;this.u=c;this.v=b;this.p=d;this.F=e;this.M=0;this.aa=this.U=q}
G.prototype.watch=function(a,c,b,d){for(var e=a.length,g=0;g<e;g++){var l=a[g];c[l]||(c[l]=["n4"]);this.M+=c[l].length}if(d)this.U=d;for(g=0;g<e;g++){l=a[g];d=c[l];for(var h=b[l],f=0,m=d.length;f<m;f++){var o=d[f],p=this.u,j=l,n=o;p.i.appendClassName(p.j,p.l.k(p.m,j,n,"loading"));F(p,"fontloading",j,n);p=t(this,this.ga);j=t(this,this.ha);new H(p,j,this.i,this.v,this.p,this.F,l,o,h)}}};
G.prototype.ga=function(a,c){var b=this.u;b.i.removeClassName(b.j,b.l.k(b.m,a,c,"loading"));b.i.removeClassName(b.j,b.l.k(b.m,a,c,"inactive"));b.i.appendClassName(b.j,b.l.k(b.m,a,c,"active"));F(b,"fontactive",a,c);this.aa=i;I(this)};G.prototype.ha=function(a,c){var b=this.u;b.i.removeClassName(b.j,b.l.k(b.m,a,c,"loading"));b.i.hasClassName(b.j,b.l.k(b.m,a,c,"active"))||b.i.appendClassName(b.j,b.l.k(b.m,a,c,"inactive"));F(b,"fontinactive",a,c);I(this)};
function I(a){if(--a.M==0&&a.U)if(a.aa){a=a.u;a.i.removeClassName(a.j,a.l.k(a.m,"loading"));a.i.removeClassName(a.j,a.l.k(a.m,"inactive"));a.i.appendClassName(a.j,a.l.k(a.m,"active"));F(a,"active")}else D(a.u)}
function H(a,c,b,d,e,g,l,h,f){this.ca=a;this.ka=c;this.i=b;this.v=d;this.p=e;this.F=g;this.oa=new J;this.ja=new K;this.P=l;this.O=h;this.ia=f||"BESs";this.ra=L(this,"arial,'URW Gothic L',sans-serif");this.sa=L(this,"Georgia,'Century Schoolbook L',serif");this.Y=M(this,"arial,'URW Gothic L',sans-serif");this.Z=M(this,"Georgia,'Century Schoolbook L',serif");this.Aa=g();this.L()}
H.prototype.L=function(){var a=this.v.G(this.Z);if(this.ra!=this.v.G(this.Y)||this.sa!=a)N(this,this.ca);else this.F()-this.Aa<5E3?ca(this):N(this,this.ka)};function ca(a){a.p(function(c,b){return function(){b.call(c)}}(a,a.L),50)}function N(a,c){a.i.removeElement(a.Y);a.i.removeElement(a.Z);c(a.P,a.O)}function L(a,c){var b=M(a,c,i),d=a.v.G(b);a.i.removeElement(b);return d}
function M(a,c,b){var d=a.ja.expand(a.O);c=a.i.createElement("span",{style:"position:absolute;top:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;font-family:"+(b?"":a.oa.quote(a.P)+",")+c+";"+d},a.ia);a.i.insertInto("body",c);return c}function C(a){this.ma=a||"-"}C.prototype.k=function(){for(var a=[],c=0;c<arguments.length;c++)a.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return a.join(this.ma)};function J(){this.X="'"}
J.prototype.quote=function(a){var c=[];a=a.split(/,\s*/);for(var b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");d.indexOf(" ")==-1?c.push(d):c.push(this.X+d+this.X)}return c.join(",")};function K(){this.W=da;this.w=ea}var da=["font-style","font-weight"],ea={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};
function O(a,c,b){this.la=a;this.va=c;this.w=b}O.prototype.expand=function(a,c){for(var b=0;b<this.w.length;b++)if(c==this.w[b][0]){a[this.la]=this.va+":"+this.w[b][1];break}};K.prototype.expand=function(a){if(a.length!=2)return k;for(var c=[k,k],b=0,d=this.W.length;b<d;b++){var e=this.W[b];(new O(b,e,this.w[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":k};function P(a,c){this.o=a;this.f=c}P.prototype=u.prototype;P.prototype.isHttps=function(){return this.o.location.protocol=="https:"};
P.prototype.loadScript=function(a,c){var b=this.o.getElementsByTagName("head")[0];if(b){var d=this.o.createElement("script");d.src=a;var e=q;d.onload=d.onreadystatechange=function(){if(!e&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){e=i;c&&c();d.onload=d.onreadystatechange=k;d.parentNode.tagName=="HEAD"&&b.removeChild(d)}};b.appendChild(d)}};
P.prototype.createStyle=function(a){var c=this.o.createElement("style");c.setAttribute("type","text/css");if(c.styleSheet)c.styleSheet.cssText=a;else c.appendChild(document.createTextNode(a));return c};function Q(a,c){this.ya=a;this.N=c}function fa(a){for(var c=a.ya.join(","),b=[],d=0;d<a.N.length;d++){var e=a.N[d];b.push(e.name+":"+e.value+";")}return c+"{"+b.join("")+"}"}function R(a,c){this.z=a;this.Q=c}
R.prototype.watch=function(a,c,b){var d=[],e={};d.push(this.z);e[this.z]=this.Q[c.getStylesheetFormatId()]||[];a.watch(d,e,{},b)};function S(a,c,b){this.za=a;this.H=c;this.wa=b}S.prototype.buildUrl=function(a,c){var b=this.za&&a?"https:":"http:",d=typeof this.H=="function"?this.H(b):this.H;return b+"//"+d+this.wa+c};
function ga(a,c,b){if(a.R){var d=function(){try{c._gat._getTracker("UA-8850781-3")._trackPageview();c.tkKitsTracked||(c.tkKitsTracked=0);c.tkKitsTracked++}catch(e){}};if(c._gat)d();else{a=a.R.buildUrl(b.isHttps(),"/ga.js");b.loadScript(a,d)}}}function T(a,c,b){this.t=a;this.$=c;this.T=b}T.prototype.getId=r("t");T.prototype.getStylesheetFormatId=r("$");
T.prototype.isUserAgent=function(a){return this.T?this.T(a.getName(),a.getVersion(),a.getEngine(),a.getEngineVersion(),a.getPlatform(),a.getPlatformVersion(),a.getDocumentMode()):q};T.prototype.buildCssUrl=function(a,c,b,d){b="/"+b+"-"+this.$+".css";if(d)b+="?"+d;return c.buildUrl(a,b)};function U(){this.q=[]}U.prototype.addBrowser=function(a){this.getBrowserById(a.getId())||this.q.push(a)};U.prototype.getBrowserById=function(a){for(var c=0;c<this.q.length;c++){var b=this.q[c];if(a===b.getId())return b}return k};
U.prototype.findBrowser=function(a){for(var c=0;c<this.q.length;c++){var b=this.q[c];if(b.isUserAgent(a))return b}return k};U.prototype.addBrowsersToBrowserSet=function(a){for(var c=0;c<this.q.length;c++)a.addBrowser(this.q[c])};function ha(a){this.t=a;this.C=new U;this.s=[];this.D=[]}s=ha.prototype;s.getId=r("t");s.setSecurityToken=function(a){this.xa=a};s.setNestedUrl=function(a){this.qa=a};s.setKitOptions=function(a){this.A=a};s.addBrowser=function(a){this.C.addBrowser(a)};s.addFontFamily=function(a){this.s.push(a)};
s.addCssRule=function(a){this.D.push(a)};s.supportsBrowser=function(a){return!!this.C.getBrowserById(a.getId())};s.addBrowsersToBrowserSet=function(a){this.C.addBrowsersToBrowserSet(a)};s.init=function(a){for(var c=[],b=0;b<this.D.length;b++)c.push(fa(this.D[b]));a.insertInto("head",a.createStyle(c.join("")))};
s.load=function(a,c,b,d){var e=b.buildCssUrl(a.isHttps(),this.qa,this.t,this.xa);a.insertInto("head",a.createCssLink(e));c&&a.whenBodyExists(function(g,l,h,f){return function(){for(var m=0;m<g.s.length;m++)g.s[m].watch(l,h,f&&m==g.s.length-1)}}(this,c,b,d))};s.collectFontFamilies=function(a,c,b){for(var d=0;d<this.s.length;d++){var e=this.s[d],g=a,l=b;c.push(e.z);l[e.z]=e.Q[g.getStylesheetFormatId()]||[]}};
s.performOptionalActions=function(a,c,b){this.A&&b.whenBodyExists(function(d,e,g,l){return function(){ga(d.A,e,l);var h=d.A,f=d.t;if(h.V){h=h.V.buildUrl(l.isHttps(),"/"+f+".js?"+ +new Date);l.loadScript(h)}f=d.A;h=d.t;if(f.J){f=f.J.k(h,g,l);f.setAttribute("id","typekit-badge-"+h);l.insertInto("body",f)}}}(this,a,c,b))};function V(a,c,b,d,e){this.na=a;this.i=c;this.f=b;this.j=d;this.p=e;this.n=[]}V.prototype.B=function(a){this.n.push(a)};
V.prototype.load=function(a,c){var b=a,d=c||{};if(typeof b=="string")b=[b];else if(b&&b.length)b=b;else{d=b||{};b=[]}if(b.length)for(var e=this,g=b.length,l=0;l<b.length;l++)this.ba(b[l],function(){--g==0&&e.I(d)});else this.I(d)};V.prototype.ba=function(a,c){this.i.loadScript(this.na.buildUrl(this.i.isHttps(),"/"+a+".js"),c)};
V.prototype.I=function(a){if(a.userAgent)this.f=(new w(a.userAgent,document)).parse();a=new ba(this.i,this.j,a);for(var c=new U,b=0;b<this.n.length;b++)this.n[b].addBrowsersToBrowserSet(c);c=c.findBrowser(this.f);for(b=0;b<this.n.length;b++)this.n[b].init(this.i);if(c){a.i.appendClassName(a.j,a.l.k(a.m,"loading"));F(a,"loading");ia(this,c,a)}else D(a);this.n=[]};
function ia(a,c,b){b=new G(a.i,b,{G:function(g){return g.offsetWidth}},a.p,function(){return+new Date});for(var d=0;d<a.n.length;d++){var e=a.n[d];if(e.supportsBrowser(c)){e.load(a.i,b,c,d==a.n.length-1);e.performOptionalActions(window,a.f,a.i)}}}function W(a,c,b){this.S=a;this.i=c;this.p=b;this.n=[]}W.prototype.B=function(a){this.n.push(a)};
W.prototype.load=function(){var a=this.S.__webfonttypekitmodule__;if(a)for(var c=0;c<this.n.length;c++){var b=this.n[c],d=a[b.getId()];if(d){var e=this.i,g=this.p;d(function(l,h,f){var m=new U;b.addBrowsersToBrowserSet(m);h=[];var o={};if(m=m.findBrowser(l)){b.init(e);b.load(e,k,m,g);b.collectFontFamilies(m,h,o);b.performOptionalActions(window,l,e,g)}f(!!m,h,o)})}}};var X=new U;
X.addBrowser(new T("opera-linux-osx-win2003-win7-winvista-winxp","b",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=(h=(h=(h=h||(e=="Windows"&&g=="5.1"?i:q))||(e=="Windows"&&g=="5.2"?i:q))||(e=="Windows"&&g=="6.0"?i:q))||(e=="Windows"&&g=="6.1"?i:q))||function(f,m,o,p,j,n){f=/^([0-9]+)(_|.)([0-9]+)/.exec(n);if(j=="Macintosh"&&f){j=parseInt(f[1],10);n=parseInt(f[3],10);if(j==10)return n>3;else if(j>10)return i}else return j=="Macintosh"&&n=="Unknown"?i:q}(a,c,b,d,e,g,l))||(e=="Ubuntu"||e=="Linux"?i:q);if(!h)return q;
a=a=="Opera"?parseFloat(c)>=10.54:q;return a}));X.addBrowser(new T("ie9-win7","g",function(a,c,b,d,e,g,l){var h=q;h=h||(e=="Windows"&&g=="6.1"?i:q);if(!h)return q;return function(f,m,o,p,j,n,E){if(f=="MSIE"){if(f=/([0-9]+.[0-9]+)/.exec(m))return parseFloat(f[1])>=9&&E>=9;return q}}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("air-linux-osx-win","b",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=h||(e=="Windows"&&g=="Unknown"?i:q))||function(f,m,o,p,j,n){f=/^([0-9]+)(_|.)([0-9]+)/.exec(n);if(j=="Macintosh"&&f){j=parseInt(f[1],10);n=parseInt(f[3],10);if(j==10)return n>3;else if(j>10)return i}else return j=="Macintosh"&&n=="Unknown"?i:q}(a,c,b,d,e,g,l))||(e=="Ubuntu"||e=="Linux"?i:q);if(!h)return q;return function(f,m){if(f=="AdobeAIR"){var o=/([0-9]+.[0-9]+)/.exec(m);if(o)return parseFloat(o[1])>=2.5}return q}(a,
c,b,d,e,g,l)}));
X.addBrowser(new T("ff36-linux-osx-win2003-win7-winvista-winxp","e",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=(h=(h=(h=h||(e=="Windows"&&g=="5.1"?i:q))||(e=="Windows"&&g=="5.2"?i:q))||(e=="Windows"&&g=="6.0"?i:q))||(e=="Windows"&&g=="6.1"?i:q))||function(f,m,o,p,j,n){f=/^([0-9]+)(_|.)([0-9]+)/.exec(n);if(j=="Macintosh"&&f){j=parseInt(f[1],10);n=parseInt(f[3],10);if(j==10)return n>3;else if(j>10)return i}else return j=="Macintosh"&&n=="Unknown"?i:q}(a,c,b,d,e,g,l))||(e=="Ubuntu"||e=="Linux"?i:q);if(!h)return q;
return function(f,m,o,p){if(o=="Gecko")if(m=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(p)){f=parseFloat(m[1]);m=parseInt(m[3],10);return f>1.9||f>=1.9&&m>1}return q}(a,c,b,d,e,g,l)}));X.addBrowser(new T("ie9-winvista","h",function(a,c,b,d,e,g,l){var h=q;h=h||(e=="Windows"&&g=="6.0"?i:q);if(!h)return q;return function(f,m,o,p,j,n,E){if(f=="MSIE"){if(f=/([0-9]+.[0-9]+)/.exec(m))return parseFloat(f[1])>=9&&E>=9;return q}}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("chrome-linux-osx-win2003-win7-winvista-winxp","b",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=(h=(h=(h=h||(e=="Windows"&&g=="5.1"?i:q))||(e=="Windows"&&g=="5.2"?i:q))||(e=="Windows"&&g=="6.0"?i:q))||(e=="Windows"&&g=="6.1"?i:q))||function(f,m,o,p,j,n){f=/^([0-9]+)(_|.)([0-9]+)/.exec(n);if(j=="Macintosh"&&f){j=parseInt(f[1],10);n=parseInt(f[3],10);if(j==10)return n>3;else if(j>10)return i}else return j=="Macintosh"&&n=="Unknown"?i:q}(a,c,b,d,e,g,l))||(e=="Ubuntu"||e=="Linux"?i:q);if(!h)return q;
return function(f,m){if(f=="Chrome"){var o=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(m);if(o){var p=parseFloat(o[1]),j=parseInt(o[2],10);o=parseInt(o[3],10);if(p>=6)return q;else if(p>4)return i;else if(p==4&&j>249)return i;else if(p==4&&j==249&&o>=4)return i}}return q}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("chrome6-win2003-win7-winvista-winxp","e",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=(h=h||(e=="Windows"&&g=="5.1"?i:q))||(e=="Windows"&&g=="5.2"?i:q))||(e=="Windows"&&g=="6.0"?i:q))||(e=="Windows"&&g=="6.1"?i:q);if(!h)return q;return function(f,m){if(f=="Chrome"){var o=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(m);if(o)if(parseFloat(o[1])>=6)return i}}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("ff35-linux-osx-win2003-win7-winvista-winxp","b",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=(h=(h=(h=h||(e=="Windows"&&g=="5.1"?i:q))||(e=="Windows"&&g=="5.2"?i:q))||(e=="Windows"&&g=="6.0"?i:q))||(e=="Windows"&&g=="6.1"?i:q))||function(f,m,o,p,j,n){f=/^([0-9]+)(_|.)([0-9]+)/.exec(n);if(j=="Macintosh"&&f){j=parseInt(f[1],10);n=parseInt(f[3],10);if(j==10)return n>3;else if(j>10)return i}else return j=="Macintosh"&&n=="Unknown"?i:q}(a,c,b,d,e,g,l))||(e=="Ubuntu"||e=="Linux"?i:q);if(!h)return q;
return function(f,m,o,p){if(o=="Gecko"){f=/1.9.1b[1-3]{1}/;return/1.9.1/.test(p)&&!f.test(p)}return q}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("chrome6-linux-osx","d",function(a,c,b,d,e,g,l){var h=q;h=(h=h||function(f,m,o,p,j,n){f=/^([0-9]+)(_|.)([0-9]+)/.exec(n);if(j=="Macintosh"&&f){j=parseInt(f[1],10);n=parseInt(f[3],10);if(j==10)return n>3;else if(j>10)return i}else return j=="Macintosh"&&n=="Unknown"?i:q}(a,c,b,d,e,g,l))||(e=="Ubuntu"||e=="Linux"?i:q);if(!h)return q;return function(f,m){if(f=="Chrome"){var o=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(m);if(o)if(parseFloat(o[1])>=6)return i}}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("ie-win2003-win7-winvista-winxp","c",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=(h=h||(e=="Windows"&&g=="5.1"?i:q))||(e=="Windows"&&g=="5.2"?i:q))||(e=="Windows"&&g=="6.0"?i:q))||(e=="Windows"&&g=="6.1"?i:q);if(!h)return q;return function(f,m,o,p,j,n,E){if(f=="MSIE"){if(f=/([0-9]+.[0-9]+)/.exec(m))return parseFloat(f[1])>=6&&(E===undefined||E<9);return q}}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("safari-android-ipad-iphone","a",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=h||function(f,m,o,p,j,n){f=/([0-9]+).([0-9]+)/.exec(n);if(j=="Android"&&f){j=parseInt(f[1]);f=parseInt(f[2]);return j>2||j==2&&f>=2}else return q}(a,c,b,d,e,g,l))||function(f,m,o,p,j,n){if(j=="iPad"){if(m=/^([0-9]+)_([0-9]+)/.exec(n)){f=parseInt(m[1],10);m=parseInt(m[2],10);return f==4?m>1:f>4?i:q}}else return q}(a,c,b,d,e,g,l))||function(f,m,o,p,j,n){if(j=="iPhone"||j=="iPod"){if(m=/^([0-9]+)_([0-9]+)/.exec(n)){f=
parseInt(m[1],10);m=parseInt(m[2],10);return f==4?m>1:f>4?i:q}}else return q}(a,c,b,d,e,g,l);if(!h)return q;return function(f,m,o,p,j){if(f=="Safari"&&o=="AppleWebKit"||f=="Unknown"&&o=="AppleWebKit"&&(j=="iPhone"||j=="iPad"))if(f=/([0-9]+.[0-9]+)/.exec(p))return parseFloat(f[1])>=525.13;return q}(a,c,b,d,e,g,l)}));
X.addBrowser(new T("safari-osx-win2003-win7-winvista-winxp","b",function(a,c,b,d,e,g,l){var h=q;h=(h=(h=(h=(h=h||(e=="Windows"&&g=="5.1"?i:q))||(e=="Windows"&&g=="5.2"?i:q))||(e=="Windows"&&g=="6.0"?i:q))||(e=="Windows"&&g=="6.1"?i:q))||function(f,m,o,p,j,n){f=/^([0-9]+)(_|.)([0-9]+)/.exec(n);if(j=="Macintosh"&&f){j=parseInt(f[1],10);n=parseInt(f[3],10);if(j==10)return n>3;else if(j>10)return i}else return j=="Macintosh"&&n=="Unknown"?i:q}(a,c,b,d,e,g,l);if(!h)return q;return function(f,m,o,p,j){if(f==
"Safari"&&o=="AppleWebKit"||f=="Unknown"&&o=="AppleWebKit"&&(j=="iPhone"||j=="iPad"))if(f=/([0-9]+.[0-9]+)/.exec(p))return parseFloat(f[1])>=525.13;return q}(a,c,b,d,e,g,l)}));if(!window.Typekit){var ja=new S(q,"use.typekit.com","/"),ka=(new w(navigator.userAgent,document)).parse(),la=new P(document,ka),ma=function(a,c){setTimeout(a,c)},Y=new V(ja,la,ka,document.documentElement,ma),Z=new W(window,la,ma);window.Typekit=Y;window.Typekit.load=Y.load;window.Typekit.addKit=Y.B}var na,oa=k,pa,$;
na=new S(q,"use.typekit.com","/k");oa=new S(q,function(a){return(a=="https:"?"ssl":"www")+".google-analytics.com"},"");pa=new function(a,c,b){this.J=a;this.R=c;this.V=b}(k,oa,k);$=new ha("mgw3usz");$.setSecurityToken("3bb2a6e53c9684ffdc9a9af11d5b2a620ecc366e1cec4c7dd51591e505133ea5513b5213cf5bc8389a436dffb3f9e8b475ceee02c9ffe73568ece282564bee773efbcdb2e4a50221f12c819c98");$.setNestedUrl(na);$.setKitOptions(pa);
$.addFontFamily(new R('"adelle-1","adelle-2"',{a:["n4","i4","n6","i6"],b:["n4","i4","n6","i6"],c:["n4","i4","n6","i6"],d:["n4","i4","n6","i6"],e:["n4","i4","n6","i6"],g:["n4","i4","n6","i6"],h:["n4","i4","n6","i6"]}));$.addFontFamily(new R('"dejarip-1","dejarip-2"',{a:["n4","n5","n7"],b:["n4","n5","n7"],c:["n4","n7"],d:["n4","n5","n7"],e:["n4","n5","n7"],g:["n4","n5","n7"],h:["n4","n5","n7"]}));$.addCssRule(new Q([".tk-adelle"],[{value:'"adelle-1","adelle-2",serif',name:"font-family"}]));
$.addCssRule(new Q([".tk-dejarip"],[{value:'"dejarip-1","dejarip-2",sans-serif',name:"font-family"}]));$.addBrowser(X.getBrowserById("air-linux-osx-win"));$.addBrowser(X.getBrowserById("chrome-linux-osx-win2003-win7-winvista-winxp"));$.addBrowser(X.getBrowserById("chrome6-linux-osx"));$.addBrowser(X.getBrowserById("chrome6-win2003-win7-winvista-winxp"));$.addBrowser(X.getBrowserById("ff35-linux-osx-win2003-win7-winvista-winxp"));$.addBrowser(X.getBrowserById("ff36-linux-osx-win2003-win7-winvista-winxp"));
$.addBrowser(X.getBrowserById("ie-win2003-win7-winvista-winxp"));$.addBrowser(X.getBrowserById("ie9-win7"));$.addBrowser(X.getBrowserById("ie9-winvista"));$.addBrowser(X.getBrowserById("opera-linux-osx-win2003-win7-winvista-winxp"));$.addBrowser(X.getBrowserById("safari-android-ipad-iphone"));$.addBrowser(X.getBrowserById("safari-osx-win2003-win7-winvista-winxp"));if(Z&&Z.S.__webfonttypekitmodule__){Z.B($);Z.load()}else window.Typekit.addKit($);
})(this,document);
window.Typekit.config={"p":"//p.typekit.net/p.gif?s=1&k=mgw3usz&ht=tk&h={host}&f=6863.6862.6865.6864.7311.7307.7309&a=387509&_={_}"};
/*{"k":"1.8.3","created":"2014-05-07 13:43:21 UTC"}*/
;(function(window,document,undefined){
function e(a){return function(){return this[a]}}var f=this;function h(a,b){var d=a.split("."),c=f;!(d[0]in c)&&c.execScript&&c.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)!d.length&&void 0!==b?c[g]=b:c=c[g]?c[g]:c[g]={}}function k(a,b,d){this.M=a;this.K=b;this.L=d}h("webfont.BrowserInfo",k);k.prototype.A=e("M");k.prototype.hasWebFontSupport=k.prototype.A;k.prototype.B=e("K");k.prototype.hasWebKitFallbackBug=k.prototype.B;k.prototype.C=e("L");k.prototype.hasWebKitMetricsBug=k.prototype.C;
function l(a,b,d,c,g,j,u,v,w,x,y){this.D=a;this.R=b;this.J=d;this.o=c;this.P=g;this.n=j;this.G=u;this.Q=v;this.F=w;this.m=x;this.k=y}h("webfont.UserAgent",l);l.prototype.getName=e("D");l.prototype.getName=l.prototype.getName;l.prototype.z=e("J");l.prototype.getVersion=l.prototype.z;l.prototype.s=e("o");l.prototype.getEngine=l.prototype.s;l.prototype.t=e("n");l.prototype.getEngineVersion=l.prototype.t;l.prototype.v=e("G");l.prototype.getPlatform=l.prototype.v;l.prototype.w=e("F");
l.prototype.getPlatformVersion=l.prototype.w;l.prototype.r=e("m");l.prototype.getDocumentMode=l.prototype.r;l.prototype.q=e("k");l.prototype.getBrowserInfo=l.prototype.q;function m(a){this.f=a}m.prototype.toString=function(){return encodeURIComponent(this.f.c.location.hostname||this.f.e.location.hostname)};function n(a,b){this.H=a;this.g=b}
n.prototype.toString=function(){for(var a=[],b=0;b<this.g.length;b++)for(var d=this.g[b],c=d.u(),d=d.u(this.H),g=0;g<c.length;g++){var j;a:{for(j=0;j<d.length;j++)if(c[g]===d[j]){j=!0;break a}j=!1}a.push(j?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(c=a.length;0<c;c-=4)d=a.slice(0>c-4?0:c-4,c),b.unshift(parseInt(d,2).toString(16));return b.join("")};function p(a){this.I=a}
p.prototype.l=function(a,b){var d=b||{},c=this.I.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,c){return c&&d[b]?"/"+d[b].join("/"):d[b]||""});c.match(/^\/\//)&&(c=(a?"https:":"http:")+c);return c.replace(/\/*\?*($|\?)/,"$1")};function q(a){var b=new Image(1,1);b.src=a;b.onload=function(){b.onload=null}}var r={};r.a=r.j=r.b=r.d=function(){return[]};r.i=function(a,b,d){return[new m(a),new n(b,d)]};window.Typekit||(window.Typekit={});
var s=new function(a,b){this.e=a;this.c=b||a;this.O=this.c.document}(window),t=new function(){var a=new p(window.Typekit.config.p);this.N=null;this.h=a},z=!1;
function A(){if(!z)for(var a=document.getElementsByTagName("link"),b=0;b<a.length;b++){var d=a[b].getAttribute("href");if(d&&0<=d.indexOf("use.typekit")){a=t;b=s;if(a.h){var d=(d=window.__adobewebfontsappname__)?d.toString().substr(0,20):"",c=b.c.location.protocol;"about:"==c&&(c=b.e.location.protocol);q(a.h.l("https:"===("https:"==c?"https:":"http:"),{host:encodeURIComponent(b.c.location.hostname||b.e.location.hostname),app:encodeURIComponent(d),_:(+new Date).toString()}))}z=!0;break}}}var B=window.Typekit.load;
window.Typekit.load=function(){B&&B.apply(window.Typekit,arguments);A()};window.__webfonttypekitmodule__&&A();
})(this,document);
