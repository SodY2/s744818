var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,k=window,ba=Object,q=document,ca=Array,da=parseInt,r=String,ea=decodeURIComponent;function fa(a,b){return a.type=b}
var ga="appendChild",s="push",t="test",ha="shift",ia="exec",ja="width",ka="slice",v="replace",la="getElementById",ma="concat",na="charAt",oa="JSON",x="indexOf",pa="nodeName",qa="match",y="createElement",z="setAttribute",ra="type",sa="bind",ta="getTime",ua="getElementsByTagName",A="substr",B="toString",D="length",E="prototype",F="split",G="location",H="style",va="removeChild",I="call",K="getAttribute",wa="protocol",xa="charCodeAt",L="href",M="substring",ya="documentMode",za="action",N="apply",Aa="attributes",
O="parentNode",Ba="update",Ca="height",P="join",Da="toLowerCase",Ea=this,Fa=function(a,b,c){return a[I][N](a[sa],arguments)},Ga=function(a,b,c){if(!a)throw Error();if(2<arguments[D]){var d=ca[E][ka][I](arguments,2);return function(){var c=ca[E][ka][I](arguments);ca[E].unshift[N](c,d);return a[N](b,c)}}return function(){return a[N](b,arguments)}},Ha=function(a,b,c){Ha=Function[E][sa]&&-1!=Function[E][sa][B]()[x]("native code")?Fa:Ga;return Ha[N](null,arguments)};
Function[E].bind=Function[E][sa]||function(a,b){if(1<arguments[D]){var c=ca[E][ka][I](arguments,1);c.unshift(this,a);return Ha[N](null,c)}return Ha(this,a)};var Q=k,R=q,Ia=Q[G],Ja=function(){},Ka=/\[native code\]/,S=function(a,b,c){return a[b]=a[b]||c},La=function(a){for(var b=0;b<this[D];b++)if(this[b]===a)return b;return-1},Ma=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[D];d++){var e=a[d];e!=c&&b[s](e);c=e}return b},Na=/&/g,Oa=/</g,Pa=/>/g,Qa=/"/g,Ra=/'/g,Sa=function(a){return r(a)[v](Na,"&amp;")[v](Oa,"&lt;")[v](Pa,"&gt;")[v](Qa,"&quot;")[v](Ra,"&#39;")},T=function(){var a;if((a=ba.create)&&Ka[t](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},U=function(a,b){return ba[E].hasOwnProperty[I](a,b)},Ta=function(a){if(Ka[t](ba.keys))return ba.keys(a);var b=[],c;for(c in a)U(a,c)&&b[s](c);return b},V=function(a,b){a=a||{};for(var c in a)U(a,c)&&(b[c]=a[c])},Ua=function(a){return function(){Q.setTimeout(a,0)}},Va=function(a,b){if(!a)throw Error(b||"");},W=S(Q,"gapi",{});var X=function(a,b,c){var d=new RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=new RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ia](a)||b[ia](a)))try{c=ea(a[2])}catch(e){}return c},Wa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Xa=function(a){a=a[qa](Wa);var b=T();b.H=a[1];b.j=a[3]?[a[3]]:[];b.o=a[5]?[a[5]]:[];return b},Ya=function(a){return a.H+(0<a.j[D]?"?"+a.j[P]("&"):"")+(0<a.o[D]?"#"+a.o[P]("&"):"")},Za=function(a,b){var c=[];if(a)for(var d in a)if(U(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[s](aa(d)+
"="+aa(e))}return c},$a=function(a,b,c,d){a=Xa(a);a.j[s][N](a.j,Za(b,d));a.o[s][N](a.o,Za(c,d));return Ya(a)},ab=function(a,b){var c="";2E3<b[D]&&(c=b[M](2E3),b=b[M](0,2E3));var d=a[y]("div"),e=a[y]("a");e.href=b;d[ga](e);d.innerHTML=d.innerHTML;b=r(d.firstChild[L]);d[O]&&d[O][va](d);return b+c},bb=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var cb=function(a,b,c,d){if(Q[c+"EventListener"])Q[c+"EventListener"](a,b,!1);else if(Q[d+"tachEvent"])Q[d+"tachEvent"]("on"+a,b)},db=function(){var a=R.readyState;return"complete"===a||"interactive"===a&&-1==navigator.userAgent[x]("MSIE")},gb=function(a){var b=eb;if(!db())try{b()}catch(c){}fb(a)},fb=function(a){if(db())a();else{var b=!1,c=function(){if(!b)return b=!0,a[N](this,arguments)};Q.addEventListener?(Q.addEventListener("load",c,!1),Q.addEventListener("DOMContentLoaded",c,!1)):Q.attachEvent&&
(Q.attachEvent("onreadystatechange",function(){db()&&c[N](this,arguments)}),Q.attachEvent("onload",c))}},hb=function(a){for(;a.firstChild;)a[va](a.firstChild)},ib={button:!0,div:!0,span:!0};var Y;Y=S(Q,"___jsl",T());S(Y,"I",0);S(Y,"hel",10);var jb=function(a){return Y.dpo?Y.h:X(a,"jsh",Y.h)},kb=function(a){var b=S(Y,"sws",[]);b[s][N](b,a)},lb=function(a){return S(Y,"watt",T())[a]},mb=function(a){var b=S(Y,"PQ",[]);Y.PQ=[];var c=b[D];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},ob=function(a){return S(S(Y,"H",T()),a,T())};var pb=S(Y,"perf",T()),qb=S(pb,"g",T()),rb=S(pb,"i",T());S(pb,"r",[]);T();T();var sb=function(a,b,c){var d=pb.r;"function"===typeof d?d(a,b,c):d[s]([a,b,c])},tb=function(a,b,c){qb[a]=!b&&qb[a]||c||(new Date)[ta]();sb(a)},vb=function(a,b,c){b&&0<b[D]&&(b=ub(b),c&&0<c[D]&&(b+="___"+ub(c)),28<b[D]&&(b=b[A](0,28)+(b[D]-28)),c=b,b=S(rb,"_p",T()),S(b,c,T())[a]=(new Date)[ta](),sb(a,"_p",c))},ub=function(a){return a[P]("__")[v](/\./g,"_")[v](/\-/g,"_")[v](/\,/g,"_")};var wb=T(),xb=[],yb=function(a){throw Error("Bad hint"+(a?": "+a:""));};xb[s](["jsl",function(a){for(var b in a)if(U(a,b)){var c=a[b];"object"==typeof c?Y[b]=S(Y,b,[])[ma](c):S(Y,b,c)}if(b=a.u)a=S(Y,"us",[]),a[s](b),(b=/^https:(.*)$/[ia](b))&&a[s]("http:"+b[1])}]);var zb=/^(\/[a-zA-Z0-9_\-]+)+$/,Ab=/^[a-zA-Z0-9\-_\.,!]+$/,Bb=/^gapi\.loaded_[0-9]+$/,Cb=/^[a-zA-Z0-9,._-]+$/,Gb=function(a,b,c,d){var e=a[F](";"),f=wb[e[ha]()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b[qa](Db),d=b[qa](Eb),b=!!d&&1===d[D]&&Fb[t](b)&&!!c&&1===c[D];b||yb(a);return g},Jb=function(a,b,c,d){a=Hb(a);Bb[t](c)||yb("invalid_callback");b=Ib(b);d=d&&d[D]?Ib(d):null;var e=function(a){return aa(a)[v](/%2C/g,",")};return[aa(a.T)[v](/%2C/g,",")[v](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+
e(d):"","/rt=j/sv=1/d=1/ed=1",a.J?"/am="+e(a.J):"",a.K?"/rs="+e(a.K):"","/cb=",e(c)][P]("")},Hb=function(a){"/"!==a[na](0)&&yb("relative path");for(var b=a[M](1)[F]("/"),c=[];b[D];){a=b[ha]();if(!a[D]||0==a[x]("."))yb("empty/relative directory");else if(0<a[x]("=")){b.unshift(a);break}c[s](a)}a={};for(var d=0,e=b[D];d<e;++d){var f=b[d][F]("="),g=ea(f[0]),h=ea(f[1]);2==f[D]&&g&&h&&(a[g]=a[g]||h)}b="/"+c[P]("/");zb[t](b)||yb("invalid_prefix");c=Kb(a,"k",!0);d=Kb(a,"am");a=Kb(a,"rs");return{T:b,version:c,
J:d,K:a}},Ib=function(a){for(var b=[],c=0,d=a[D];c<d;++c){var e=a[c][v](/\./g,"_")[v](/-/g,"_");Cb[t](e)&&b[s](e)}return b[P](",")},Kb=function(a,b,c){a=a[b];!a&&c&&yb("missing: "+b);if(a){if(Ab[t](a))return a;yb("invalid: "+b)}return null},Fb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Eb=/\/cb=/g,Db=/\/\//g,Lb=function(){var a=jb(Ia[L]);if(!a)throw Error("Bad hint");return a};
wb.m=function(a,b,c,d){(a=a[0])||yb("missing_hint");return"https://apis.google.com"+Jb(a,b,c,d)};var Mb=decodeURI("%73cript"),Nb=function(a,b){for(var c=[],d=0;d<a[D];++d){var e=a[d];e&&0>La[I](b,e)&&c[s](e)}return c},Pb=function(a){"loading"!=R.readyState?Ob(a):R.write("<"+Mb+' src="'+encodeURI(a)+'"></'+Mb+">")},Ob=function(a){var b=R[y](Mb);b[z]("src",a);b.async="true";(a=R[ua](Mb)[0])?a[O].insertBefore(b,a):(R.head||R.body||R.documentElement)[ga](b)},Qb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<xb[D];d++){var e=xb[d][0],f=xb[d][1];f&&U(c,e)&&f(c[e],a,b)}},Sb=function(a,b){Rb(function(){var c;
c=b===jb(Ia[L])?S(W,"_",T()):T();c=S(ob(b),"_",c);a(c)})},Ub=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Qb(a,c);var d=a?a[F](":"):[],e=c.h||Lb(),f=S(Y,"ah",T());if(f["::"]&&d[D]){for(var g=[],h=null;h=d[ha]();){var l=h[F]("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,n=g[D]&&g[g[D]-1]||null,m=n;n&&n.hint==l||(m={hint:l,M:[]},g[s](m));m.M[s](h)}var p=g[D];if(1<p){var w=c.callback;w&&(c.callback=function(){0==--p&&w()})}for(;d=g[ha]();)Tb(d.M,c,d.hint)}else Tb(d||[],c,e)},Tb=function(a,
b,c){a=Ma(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=null,l=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var n=S(ob(c),"r",[]).sort(),m=S(ob(c),"L",[]).sort(),p=[][ma](n),w=function(a,b){if(l)return 0;Q.clearTimeout(h);m[s][N](m,C);var d=((W||{}).config||{})[Ba];d?d(e):e&&S(Y,"cu",[])[s](e);if(b){vb("me0",a,p);try{Sb(b,c)}finally{vb("me1",a,p)}}return 1};0<f&&(h=Q.setTimeout(function(){l=!0;g()},f));var C=Nb(a,m);if(C[D]){var C=
Nb(a,n),u=S(Y,"CP",[]),J=u[D];u[J]=function(a){if(!a)return 0;vb("ml1",C,p);var b=function(b){u[J]=null;w(C,a)&&mb(function(){d&&d();b()})},c=function(){var a=u[J+1];a&&a()};0<J&&u[J-1]?u[J]=function(){b(c)}:b(c)};if(C[D]){var nb="loaded_"+Y.I++;W[nb]=function(a){u[J](a);W[nb]=null};a=Gb(c,C,"gapi."+nb,n);n[s][N](n,C);vb("ml0",C,p);b.sync||Q.___gapisync?Pb(a):Ob(a)}else u[J](Ja)}else w(C)&&d&&d()};var Rb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Ub("debug_error",function(){try{k.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};W.load=function(a,b){return Rb(function(){return Ub(a,b)})};var Vb=function(a){var b=k.___jsl=k.___jsl||{};b[a]=b[a]||[];return b[a]},Wb=function(a){var b=k.___jsl=k.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Xb=function(a){return"object"===typeof a&&/\[native code\]/[t](a[s])},Yb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Xb(a[c])&&!Xb(b[c])?Yb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Xb(b[c])?[]:{},Yb(a[c],b[c])):a[c]=b[c])},Zb=function(a){if(a&&!/^\s+$/[t](a)){for(;0==a[xa](a[D]-
1);)a=a[M](0,a[D]-1);var b;try{b=k[oa].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},$b=function(a){Wb(!0);var b=k.___gcfg,c=Vb("cu");if(b&&b!==k.___gu){var d={};Yb(d,b);c[s](d);k.___gu=b}var b=Vb("cu"),e=q.scripts||q[ua]("script")||[],d=[],f=[];f[s][N](f,Vb("us"));for(var g=0;g<e[D];++g)for(var h=e[g],l=0;l<f[D];++l)h.src&&
0==h.src[x](f[l])&&d[s](h);0==d[D]&&0<e[D]&&e[e[D]-1].src&&d[s](e[e[D]-1]);for(e=0;e<d[D];++e)d[e][K]("gapi_processed")||(d[e][z]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Zb(f))&&b[s](f));a&&(d={},Yb(d,a),c[s](d));d=Vb("cd");a=0;for(b=d[D];a<b;++a)Yb(Wb(),d[a]);d=Vb("ci");a=0;for(b=d[D];a<b;++a)Yb(Wb(),d[a]);a=0;for(b=c[D];a<b;++a)Yb(Wb(),c[a])},Z=function(a){if(!a)return Wb();a=a[F]("/");for(var b=Wb(),c=0,d=a[D];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[D]&&void 0!==b?b:void 0},ac=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[F]("/"),f=0,g=e[D];f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}$b(c)};var bc=function(){var a=k.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),S(Y,"ci",[])[s](a),k.__GOOGLEAPIS=void 0)};var cc={apppackagename:1,callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},dc=!1,ec=T(),fc=function(){if(!dc){for(var a=q[ua]("meta"),b=0;b<a[D];++b){var c=a[b].name[Da]();if(0==c.lastIndexOf("google-signin-",0)){var c=c[M](14),d=a[b].content;cc[c]&&d&&(ec[c]=d)}}if(k.self!==k.top){var a=q[G][B](),e;for(e in cc)0<cc[e]&&(b=X(a,e,""))&&(ec[e]=b)}dc=!0}e=T();V(ec,e);return e},gc=function(a){return!!(a.clientid&&a.scope&&a.callback)};var hc=k.console,ic=function(a){hc&&hc.log&&hc.log(a)};var jc=function(){return!!Y.oa},kc=function(){};var $=S(Y,"rw",T()),lc=function(a){for(var b in $)a($[b])},mc=function(a,b){var c=$[a];c&&c.state<b&&(c.state=b)};var nc;var oc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,pc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,qc=function(a){var b=Z("googleapis.config/sessionIndex");null==b&&(b=k.__X_GOOG_AUTHUSER);if(null==b){var c=k.google;c&&(b=c.authuser)}null==b&&(a=a||k[G][L],b=X(a,"authuser")||null,null==b&&(b=(b=a[qa](oc))?b[1]:null));return null==b?null:r(b)},rc=function(a){var b=Z("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||k[G][L])[qa](pc))?
a[1]:null);return null==b?null:r(b)};var sc=function(){this.d=-1};var tc=function(){this.d=-1;this.d=64;this.b=Ea.Uint32Array?new Uint32Array(5):[];this.p=Ea.Uint8Array?new Uint8Array(64):[];this.N=Ea.Uint32Array?new Uint32Array(80):[];this.n=Ea.Uint8Array?new Uint8Array(this.d):[];this.n[0]=128;for(var a=1;a<this.d;++a)this.n[a]=0;this.l=this.g=0;this.reset()};(function(){function a(){}a.prototype=sc[E];tc.aa=sc[E];tc.prototype=new a;tc.H=function(a,c,d){return sc[E][c][N](a,ca[E][ka][I](arguments,2))}})();
tc[E].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.l=this.g=0};
var uc=function(a,b){for(var c=a.N,d=0,e=0;16>e;e++)c[e]=b[d]<<24|b[d+1]<<16|b[d+2]<<8|b[d+3],d+=4;for(e=16;80>e;e++){var f=c[e-3]^c[e-8]^c[e-14]^c[e-16];c[e]=f<<1|f>>>31|0}for(var d=a.b[0]|0,g=a.b[1]|0,h=a.b[2]|0,l=a.b[3]|0,n=a.b[4]|0,m=f=0,e=0;80>e;e++)40>e?20>e?(f=l^g&(h^l),m=1518500249):(f=g^h^l,m=1859775393):60>e?(f=g&h|l&(g|h),m=2400959708):(f=g^h^l,m=3395469782),f=((d<<5|d>>>27)+f|0)+((n+(m|0)|0)+(c[e]|0)|0)|0,n=l,l=h,h=g<<30|g>>>2|0,g=d,d=f;a.b[0]=a.b[0]+d|0;a.b[1]=a.b[1]+g|0;a.b[2]=a.b[2]+
h|0;a.b[3]=a.b[3]+l|0;a.b[4]=a.b[4]+n|0};tc[E].update=function(a,b){void 0===b&&(b=a[D]);for(var c=0,d=this.p,e=this.g;c<b;)if("string"==typeof a)for(;c<b;)d[e]=a[xa](c),++e,++c,e==this.d&&(uc(this,d),e=0);else for(;c<b;)d[e]=a[c],++e,++c,e==this.d&&(uc(this,d),e=0);this.g=e;this.l+=b};var vc=function(){this.q=new tc};vc[E].reset=function(){this.q.reset()};var Cc=function(){var a;wc?(a=new Q.Uint32Array(1),xc.getRandomValues(a),a=Number("0."+a[0])):(a=yc,a+=da(zc[A](0,20),16),zc=Ac(zc),a/=Bc+Math.pow(16,20));return a},xc=Q.crypto,wc=!1,Dc=0,Ec=0,yc=1,Bc=0,zc="",Fc=function(a){a=a||Q.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date)[ta]()%1E6*b;yc=yc*b%Bc;0<Dc&&++Ec==Dc&&cb("mousemove",Fc,"remove","de")},Ac=function(a){var b=new vc;a=unescape(aa(a));for(var c=[],d=0,e=a[D];d<e;++d)c[s](a[xa](d));b.q[Ba](c);a=b.q;b=[];d=8*a.l;
56>a.g?a[Ba](a.n,56-a.g):a[Ba](a.n,a.d-(a.g-56));for(c=a.d-1;56<=c;c--)a.p[c]=d&255,d/=256;uc(a,a.p);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[D];c++)a+="0123456789ABCDEF"[na](Math.floor(b[c]/16))+"0123456789ABCDEF"[na](b[c]%16);return a},wc=!!xc&&"function"==typeof xc.getRandomValues;
wc||(Bc=1E6*(screen[ja]*screen[ja]+screen[Ca]),zc=Ac(R.cookie+"|"+R[G]+"|"+(new Date)[ta]()+"|"+Math.random()),Dc=Z("random/maxObserveMousemove")||0,0!=Dc&&cb("mousemove",Fc,"add","at"));var Gc=function(){var a=Y.onl;if(!a){a=T();Y.onl=a;var b=T();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Hc=function(a,b){var c=b.onload;return"function"===typeof c?(Gc().a(a,c),c):null},Ic=function(a){Va(/^\w+$/[t](a),"Unsupported id - "+a);Gc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Jc=function(a){Gc().r(a)};var Kc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Lc={allowtransparency:!0,onload:!0},Mc=0,Nc=function(a){Va(!a||bb[t](a),"Illegal url for new iframe - "+a)},Oc=function(a,b,c,d,e){Nc(c.src);var f,g=Hc(d,c),h=g?Ic(d):"";try{f=a[y]('<iframe frameborder="'+Sa(r(c.frameborder))+'" scrolling="'+Sa(r(c.scrolling))+'" '+h+' name="'+Sa(r(c.name))+'"/>')}catch(l){f=a[y]("iframe"),g&&(f.onload=function(){f.onload=
null;g[I](this)},Jc(d))}for(var n in c)a=c[n],"style"===n&&"object"===typeof a?V(a,f[H]):Lc[n]||f[z](n,r(a));(n=e&&e.beforeNode||null)||e&&e.dontclear||hb(b);b.insertBefore(f,n);f=n?n.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Pc=/^:[\w]+$/,Qc=/:([a-zA-Z_]+):/g,Rc=function(){var a=qc()||"0",b=rc(),c;c=qc(void 0)||a;var d=rc(void 0),e="";c&&(e+="u/"+c+"/");d&&(e+="b/"+d+"/");c=e||null;(e=(d=!1===Z("isLoggedIn"))?"_/im/":"")&&(c="");var f=Z("iframes/:socialhost:"),g=Z("iframes/:im_socialhost:");return nc={socialhost:f,ctx_socialhost:d?g:f,session_index:a,session_delegate:b,session_prefix:c,im_prefix:e}},Sc=function(a,b){return Rc()[b]||""},Tc=function(a){return function(b,c){return a?Rc()[c]||a[c]||"":Rc()[c]||""}};var Uc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Vc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[t](a)?'"'+a[v](b,function(a){var b=Uc[a];if(b)return b;b=a[xa]();return"\\u00"+Math.floor(b/16)[B](16)+(b%16)[B](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?r(a):"null";case "boolean":case "null":return r(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[D]&&!a.propertyIsEnumerable("length")){d=
a[D];for(c=0;c<d;c+=1)b[s](Vc(a[c])||"null");return"["+b[P](",")+"]"}for(c in a)!/___$/[t](c)&&U(a,c)&&"string"===typeof c&&(d=Vc(a[c]))&&b[s](Vc(c)+":"+d);return"{"+b[P](",")+"}"}return""}},Wc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/[t](a[v](/\\["\\\/b-u]/g,"@")[v](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")[v](/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},Xc=!1;try{Xc=!!k[oa]&&'["a"]'===k[oa].stringify(["a"])&&"a"===k[oa].parse('["a"]')[0]}catch(Yc){}
var Zc=function(a){try{return k[oa].parse(a)}catch(b){return!1}},$c=Xc?k[oa].stringify:Vc,ad=Xc?Zc:Wc;var bd=function(a){var b;a[qa](/^https?%3A/i)&&(b=ea(a));return ab(q,b?b:a)},cd=function(a){a=a||"canonical";for(var b=q[ua]("link"),c=0,d=b[D];c<d;c++){var e=b[c],f=e[K]("rel");if(f&&f[Da]()==a&&(e=e[K]("href"))&&(e=bd(e))&&null!=e[qa](/^https?:\/\/[\w\-\_\.]+/i))return e}return k[G][L]};var dd={U:"se"},ed={U:"ad"},fd={ad:{"true":"1","false":"2"}},gd={post:!0},hd={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},id="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),jd=S(Y,"WI",T()),kd=function(a,b,c){var d,e;d={};var f=e=a;"plus"==a&&b[za]&&(e=a+"_"+b[za],f=a+"/"+b[za]);(e=Z("iframes/"+e+"/url"))||(e=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+f+"?usegapi=1");for(var g in dd)if(f=dd[g],b[f])d[f]=
f+"/"+b[f]+"/";else{var h=ed[g];h&&b[h]&&(d[f]=f+"/"+fd[h][b[h]]+"/")}d=ab(R,e[v](Qc,Tc(d)));e="iframes/"+a+"/params/";g={};V(b,g);(f=Z("lang")||Z("gwidget/lang"))&&(g.hl=f);gd[a]||(g.origin=k[G].origin||k[G][wa]+"//"+k[G].host);g.exp=Z(e+"exp");if(e=Z(e+"location"))for(f=0;f<e[D];f++)h=e[f],g[h]=Q[G][h];switch(a){case "plus":case "follow":e=g[L];f=b[za]?void 0:"publisher";e=(e="string"==typeof e?e:void 0)?bd(e):cd(f);g.url=e;delete g[L];break;case "plusone":e=(e=b[L])?bd(e):cd();g.url=e;e=b.db;f=
Z();null==e&&f&&(e=f.db,null==e&&(e=f.gwidget&&f.gwidget.db));g.db=e||void 0;e=b.ecp;f=Z();null==e&&f&&(e=f.ecp,null==e&&(e=f.gwidget&&f.gwidget.ecp));g.ecp=e||void 0;delete g[L];break;case "signin":g.url=cd()}Y.ILI&&(g.iloader="1");delete g["data-onload"];delete g.rd;for(var l in dd)e=dd[l],g[e]&&delete g[e];g.gsrc=Z("iframes/:source:");l=Z("inline/css");"undefined"!==typeof l&&0<c&&l>=c&&(g.ic="1");l=/^#|^fr-/;c={};for(var n in g)U(g,n)&&l[t](n)&&(c[n[v](l,"")]=g[n],delete g[n]);n="q"==Z("iframes/"+
a+"/params/si")?g:c;l=fc();for(var m in l)!U(l,m)||U(g,m)||U(c,m)||(n[m]=l[m]);m=[][ma](id);(n=Z("iframes/"+a+"/methods"))&&"object"===typeof n&&Ka[t](n[s])&&(m=m[ma](n));for(var p in b)U(b,p)&&/^on/[t](p)&&("plus"!=a||"onconnect"!=p)&&(m[s](p),delete g[p]);delete g.callback;c._methods=m[P](",");return $a(d,g,c)},ld=["style","data-gapiscan"],nd=function(a){for(var b=T(),c=0!=a[pa][Da]()[x]("g:"),d=0,e=a[Aa][D];d<e;d++){var f=a[Aa][d],g=f.name,h=f.value;0<=La[I](ld,g)||c&&0!=g[x]("data-")||"null"===
h||"specified"in f&&!f.specified||(c&&(g=g[A](5)),b[g[Da]()]=h)}a=a[H];(c=md(a&&a[Ca]))&&(b.height=r(c));(a=md(a&&a[ja]))&&(b.width=r(a));return b},md=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=da(a,10));return b},pd=function(){var a=Y.drw;lc(function(b){if(a!==b.id&&4!=b.state&&"share"!=b[ra]){var c=b.id,d=b[ra],e=b.url;b=b.userParams;var f=R[la](c);if(f){var g=kd(d,b,0);g?(f=f[O],e[v](/\#.*/,"")[v](/(\?|&)ic=1/,"")!==g[v](/\#.*/,"")[v](/(\?|&)ic=1/,"")&&(b.dontclear=
!0,b.rd=!0,b.ri=!0,fa(b,d),od(f,b),(d=$[f.lastChild.id])&&(d.oid=c),mc(c,4))):delete $[c]}else delete $[c]}})};var qd,rd,sd,td,ud,vd=/(?:^|\s)g-((\S)*)(?:$|\s)/,wd={plusone:!0,autocomplete:!0,profile:!0,signin:!0};qd=S(Y,"SW",T());rd=S(Y,"SA",T());sd=S(Y,"SM",T());td=S(Y,"FW",[]);ud=null;
var yd=function(a,b){xd(void 0,!1,a,b)},xd=function(a,b,c,d){tb("ps0",!0);c=("string"===typeof c?q[la](c):c)||R;var e;e=R[ya];if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Ta(qd)[ma](Ta(rd))[ma](Ta(sd));for(var f=[],g=0;g<e[D];g++){var h=e[g];f[s](".g-"+h,"g\\:"+h)}e=c.querySelectorAll(f[P](","))}else e=c[ua]("*");c=T();for(f=0;f<e[D];f++){g=e[f];var l=g,h=d,n=l[pa][Da](),m=void 0;l[K]("data-gapiscan")?h=null:(0==n[x]("g:")?m=n[A](2):(l=(l=r(l.className||l[K]("class")))&&vd[ia](l))&&(m=l[1]),h=!m||!(qd[m]||
rd[m]||sd[m])||h&&m!==h?null:m);h&&(wd[h]||0==g[pa][Da]()[x]("g:")||0!=Ta(nd(g))[D])&&(g[z]("data-gapiscan",!0),S(c,h,[])[s](g))}if(b)for(var p in c)for(b=c[p],d=0;d<b[D];d++)b[d][z]("data-onload",!0);for(var w in c)td[s](w);tb("ps1",!0);if((p=td[P](":"))||a)try{W.load(p,a)}catch(C){ic(C);return}if(zd(ud||{}))for(var u in c){a=c[u];w=0;for(b=a[D];w<b;w++)a[w].removeAttribute("data-gapiscan");Ad(u)}else{d=[];for(u in c)for(a=c[u],w=0,b=a[D];w<b;w++)e=a[w],Bd(u,e,nd(e),d,b);Cd(p,d)}},Dd=function(a){var b=
S(W,a,{});b.go||(b.go=function(b){return yd(b,a)},b.render=function(b,d){var e=d||{};fa(e,a);return od(b,e)})},Ed=function(a){qd[a]=!0},Fd=function(a){rd[a]=!0},Gd=function(a){sd[a]=!0};var Ad=function(a,b){var c=lb(a);b&&c?(c(b),(c=b.iframeNode)&&c[z]("data-gapiattached",!0)):W.load(a,function(){var c=lb(a),e=b&&b.iframeNode;e&&c?(c(b),e[z]("data-gapiattached",!0)):(0,W[a].go)(e&&e[O])})},zd=function(){return!1},Cd=function(){},Bd=function(a,b,c,d,e,f){switch(Hd(b,a,f)){case 0:a=sd[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;Ad(a,d);break;case 1:var g;if(b[O]){for(var h in c){if(f=U(c,h))f=c[h],f=!!f&&"object"===typeof f&&(!f[B]||f[B]===ba[E][B]||f[B]===ca[E][B]);if(f)try{c[h]=
$c(c[h])}catch(l){delete c[h]}}var n=!0;c.dontclear&&(n=!1);delete c.dontclear;kc();f=kd(a,c,e);h={allowPost:1,attributes:hd};h.dontclear=!n;e={};e.userParams=c;e.url=f;fa(e,a);var m;c.rd?m=b:(m=q[y]("div"),b[z]("data-gapistub",!0),m[H].cssText="position:absolute;width:450px;left:-10000px;",b[O].insertBefore(m,b));e.siteElement=m;m.id||(b=m,S(jd,a,0),n="___"+a+"_"+jd[a]++,b.id=n);b=T();b[">type"]=a;V(c,b);n=f;c=m;f=h||{};b=f[Aa]||{};Va(!f.allowPost||!b.onload,"onload is not supported by post iframe");
h=b=n;Pc[t](b)&&(h=Z("iframes/"+h[M](1)+"/url"),Va(!!h,"Unknown iframe url config for - "+b));n=ab(R,h[v](Qc,Sc));b=c.ownerDocument||R;m=0;do h=f.id||["I",Mc++,"_",(new Date)[ta]()][P]("");while(b[la](h)&&5>++m);Va(5>m,"Error creating iframe id");m={};var p={};b[ya]&&9>b[ya]&&(m.hostiemode=b[ya]);V(f.queryParams||{},m);V(f.fragmentParams||{},p);var w=f.connectWithQueryParams?m:p,C=f.pfname,u=T();u.id=h;u.parent=b[G][wa]+"//"+b[G].host;var J=X(b[G][L],"parent"),C=C||"";!C&&J&&(J=X(b[G][L],"id",""),
C=X(b[G][L],"pfname",""),C=J?C+"/"+J:"");u.pfname=C;V(u,w);(u=X(n,"rpctoken")||m.rpctoken||p.rpctoken)||(u=w.rpctoken=f.rpctoken||r(Math.round(1E8*Cc())));f.rpctoken=u;u=b[G][L];w=T();(J=X(u,"_bsh",Y.bsh))&&(w._bsh=J);(u=jb(u))&&(w.jsh=u);f.hintInFragment?V(w,p):V(w,m);n=$a(n,m,p,f.paramsSerializer);p=T();V(Kc,p);V(f[Aa],p);p.name=p.id=h;p.src=n;f.eurl=n;if((f||{}).allowPost&&2E3<n[D]){m=Xa(n);p.src="";p["data-postorigin"]=n;n=Oc(b,c,p,h);-1!=navigator.userAgent[x]("WebKit")&&(g=n.contentWindow.document,
g.open(),p=g[y]("div"),w={},u=h+"_inner",w.name=u,w.src="",w.style="display:none",Oc(b,p,w,u,f));p=(f=m.j[0])?f[F]("&"):[];f=[];for(w=0;w<p[D];w++)u=p[w][F]("=",2),f[s]([ea(u[0]),ea(u[1])]);m.j=[];p=Ya(m);m=b[y]("form");m.action=p;m.method="POST";m.target=h;m[H].display="none";for(h=0;h<f[D];h++)p=b[y]("input"),fa(p,"hidden"),p.name=f[h][0],p.value=f[h][1],m[ga](p);c[ga](m);m.submit();m[O][va](m);g&&g.close();g=n}else g=Oc(b,c,p,h,f);e.iframeNode=g;e.id=g[K]("id");g=e.id;c=T();c.id=g;c.userParams=
e.userParams;c.url=e.url;fa(c,e[ra]);c.state=1;$[g]=c;g=e}else g=null;g&&((e=g.id)&&d[s](e),Ad(a,g))}},Hd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(sd[b]){if(ib[a[pa][Da]()])return(a=a.innerHTML)&&a[v](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(rd[b])return 0;if(qd[b])return 1}}return null},od=function(a,b){var c=b[ra];delete b[ra];var d=("string"===typeof a?q[la](a):a)||void 0;if(d){var e={},f;for(f in b)U(b,f)&&(e[f[Da]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];Bd(c,d,e,g,0,
f);Cd(c,g)}else ic("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};S(W,"platform",{}).go=yd;var zd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[D]&&a;c++)a=a[b[c]];b=jb(Ia[L]);return!a||0!=a[x]("n;")&&0!=b[x]("n;")&&a!==b},Cd=function(a,b){Id(a,b)},eb=function(a){xd(a,!0)},Jd=function(a,b){for(var c=b||[],d=0;d<c[D];++d)a(c[d]);for(d=0;d<c[D];d++)Dd(c[d])};
xb[s](["platform",function(a,b,c){ud=c;b&&td[s](b);Jd(Ed,a);Jd(Fd,c._c.annotation);Jd(Gd,c._c.bimodal);bc();$b();if("explicit"!=Z("parsetags")){kb(a);gc(fc())&&!Z("disableRealtimeCallback")&&kc();var d;c&&(a=c.callback)&&(d=Ua(a),delete c.callback);gb(function(){eb(d)})}}]);W._pl=!0;var Kd=function(a){a=(a=$[a])?a.oid:void 0;if(a){var b=R[la](a);b&&b[O][va](b);delete $[a];Kd(a)}};var Ld=/^\{h\:'/,Md=/^!_/,Nd="",Id=function(a,b){function c(){cb("message",d,"remove","de")}function d(d){var g=d.data,h=d.origin;if(Od(g,b)){var l=e;e=!1;l&&tb("rqe");Pd(a,function(){l&&tb("rqd");c();for(var a=S(Y,"RPMQ",[]),b=0;b<a[D];b++)a[b]({data:g,origin:h})})}}if(0!==b[D]){Nd=X(Ia[L],"pfname","");var e=!0;cb("message",d,"add","at");Ub(a,c)}},Od=function(a,b){a=r(a);if(Ld[t](a))return!0;var c=!1;Md[t](a)&&(c=!0,a=a[A](2));if(!/^\{/[t](a))return!1;var d=ad(a);if(!d)return!1;var e=d.f;if(d.s&&
e&&-1!=La[I](b,e)){if("_renderstart"===d.s||d.s===Nd+"/"+e+"::_renderstart"){var f=d.a&&d.a[c?0:1],c=R[la](e);mc(e,2);if(f&&c&&f[ja]&&f[Ca]){n:{d=c[O];e=f||{};if(jc()){var g=c.id;if(g){f=(f=$[g])?f.state:void 0;if(1===f||4===f)break n;Kd(g)}}(f=d.nextSibling)&&f[K]&&f[K]("data-gapistub")&&(d[O][va](f),d[H].cssText="");var f=e[ja],h=e[Ca],l=d[H];l.textIndent="0";l.margin="0";l.padding="0";l.background="transparent";l.borderStyle="none";l.cssFloat="none";l.styleFloat="none";l.lineHeight="normal";l.fontSize=
"1px";l.verticalAlign="baseline";d=d[H];d.display="inline-block";l=c[H];l.position="static";l.left=0;l.top=0;l.visibility="visible";f&&(d.width=l.width=f+"px");h&&(d.height=l.height=h+"px");e.verticalAlign&&(d.verticalAlign=e.verticalAlign);g&&mc(g,3)}c["data-csi-wdt"]=(new Date)[ta]()}}return!0}return!1},Pd=function(a,b){Ub(a,b)};var Qd=function(a,b){this.B=a;var c=b||{};this.R=c.X;this.A=c.domain;this.C=c.path;this.S=c.Y},Rd=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Sd=/^[A-Z_][A-Z0-9_]{0,63}$/;
Qd[E].write=function(a,b){if(!Sd[t](this.B))throw"Invalid cookie name";if(!Rd[t](a))throw"Invalid cookie value";var c=this.B+"="+a;this.A&&(c+=";domain="+this.A);this.C&&(c+=";path="+this.C);var d="number"===typeof b?b:this.R;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.S&&(c+=";secure");q.cookie=c;return!0};Qd.iterate=function(a){for(var b=q.cookie[F](/;\s*/),c=0;c<b[D];++c){var d=b[c][F]("="),e=d[ha]();a(e,d[P]("="))}};var Td=function(a){this.V=a},Ud={};Td[E].write=function(a){Ud[this.V]=a;return!0};Td.iterate=function(a){for(var b in Ud)Ud.hasOwnProperty(b)&&a(b,Ud[b])};var Vd="https:"===k[G][wa],Wd=Vd||"http:"===k[G][wa]?Qd:Td,Xd=function(a){var b=a[A](1),c="",d=k[G].hostname;if(""!==b){c=da(b,10);if(isNaN(c))return null;b=d[F](".");if(b[D]<c-1)return null;b[D]==c-1&&(d="."+d)}else d="";return{c:"S"==a[na](0),domain:d,i:c}},Yd=function(a){if(0!==a[x]("GCSC"))return null;var b={w:!1};a=a[A](4);if(!a)return b;var c=a[na](0);a=a[A](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Xd(a[A](d+1));if(null==e)return b;a=a[M](0,d);if("_"!==a[na](0))return b;d="E"===c&&
e.c;return!d&&("U"!==c||e.c)||d&&!Vd?b:{w:!0,c:d,W:a[A](1),domain:e.domain,i:e.i}},Zd=function(a){if(!a)return[];a=a[F]("=");return a[1]?a[1][F]("|"):[]},$d=function(a){a=a[F](":");return{t:a[0][F]("=")[1],O:Zd(a[1]),$:Zd(a[2]),Z:Zd(a[3])}},ae=function(){var a,b=null;Wd.iterate(function(c,d){if(0===c[x]("G_AUTHUSER_")){var e=Xd(c[M](11));if(!a||e.c&&!a.c||e.c==a.c&&e.i>a.i)a=e,b=d}});if(null!==b){var c;Wd.iterate(function(b,d){var e=Yd(b);e&&e.w&&e.c==a.c&&e.i==a.i&&(c=d)});if(c){var d=$d(c),e=d&&
d.O[Number(b)],d=d&&d.t;if(e)return{P:b,Q:e,t:d}}}return null};var be=function(a){this.G=a};be[E].k=0;be[E].F=2;be[E].G=null;be[E].v=!1;be[E].L=function(){this.v||(this.k=0,this.v=!0,this.D())};be[E].D=function(){this.v&&(this.G()?this.k=this.F:this.k=Math.min(2*(this.k||this.F),120),k.setTimeout(Ha(this.D,this),1E3*this.k))};for(var ce=0;64>ce;++ce);var de=null,jc=function(){return Y.oa=!0},kc=function(){Y.oa=!0;var a=ae();(a=a&&a.P)&&ac("googleapis.config/sessionIndex",a);de||(de=S(Y,"ss",new be(ee)));a=de;a.L&&a.L()},ee=function(){var a=ae(),b=a&&a.Q||null,c=a&&a.t;Ub("auth",{callback:function(){var a=Q.gapi.auth,e={client_id:c,session_state:b};a.checkSessionState(e,function(b){var c=e.session_state,h=Z("isLoggedIn");b=c&&b||!c&&!b;if(h=h!=b)ac("isLoggedIn",b),kc(),pd(),b||((b=a.signOut)?b():(b=a.setToken)&&b(null));b=fc();var l=Z("savedUserState"),
c=a._guss(b.cookiepolicy),l=l!=c&&"undefined"!=typeof l;ac("savedUserState",c);(h||l)&&gc(b)&&!Z("disableRealtimeCallback")&&a._pimf(b,!0)})}});return!0};tb("bs0",!0,k.gapi._bs);tb("bs1",!0);delete k.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"llang":"de","client":{"headers":{"response":["Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","ETag","Expires","Last-Modified","Location","Pragma","Range","Server","Transfer-Encoding","WWW-Authenticate","X-Goog-Safety-Content-Type","X-Goog-Safety-Encoding","X-Goog-Upload-Chunk-Granularity","X-Goog-Upload-Control-URL","X-Goog-Upload-Size-Received","X-Goog-Upload-Status","X-Goog-Upload-URL","X-Goog-Diff-Download-Range","X-Goog-Hash","X-Guploader-Customer","X-Guploader-Upload-Result","X-Guploader-Uploadid"],"request":["Accept","Accept-Language","Authorization","Cache-Control","Content-Disposition","Content-Encoding","Content-Language","Content-Length","Content-MD5","Content-Range","Content-Type","Date","GData-Version","Host","If-Match","If-Modified-Since","If-None-Match","If-Unmodified-Since","Origin","OriginToken","Pragma","Range","Slug","Transfer-Encoding","X-ClientDetails","X-GData-Client","X-GData-Key","X-Goog-AuthUser","X-Goog-PageId","X-Goog-Encode-Response-If-Executable","X-Goog-Correlation-Id","X-Goog-Request-Info","X-Goog-Upload-Command","X-Goog-Upload-Content-Disposition","X-Goog-Upload-Content-Length","X-Goog-Upload-Content-Type","X-Goog-Upload-File-Name","X-Goog-Upload-Offset","X-Goog-Upload-Protocol","X-Goog-Visitor-Id","X-HTTP-Method-Override","X-JavaScript-User-Agent","X-Pan-Versionid","X-Origin","X-Referer","X-Upload-Content-Length","X-Upload-Content-Type","X-Use-HTTP-Status-Code-Override","X-YouTube-VVT","X-YouTube-Page-CL","X-YouTube-Page-Timestamp"]},"cors":false},"plus_layer":{"isEnabled":false},"enableMultilogin":true,"disableRealtimeCallback":false,"isLoggedIn":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?usegapi\u003d1"},"youtube":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"shortlists":{"url":""},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},":socialhost:":"https://apis.google.com","post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"community":{"url":":socialhost:/:session_prefix:_/widget/render/community?usegapi\u003d1"},":gplus_url:":"https://plus.google.com","rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarsimplescroller"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},":source:":"3p","blogger":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},":im_socialhost:":"https://plus.googleapis.com","savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1"},":signuphost:":"https://plus.google.com","plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?usegapi\u003d1"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"}},"isPlusUser":true,"debug":{"host":"https://apis.google.com","reportExceptionRate":0.05,"rethrowException":false},"enableContextualSignin":false,"enableSigninTooltip":false,"deviceType":"desktop","inline":{"css":1},"lexps":[102,99,97,79,109,45,17,117,115,81,127,123,122,61,30],"include_granted_scopes":true,"oauth-flow":{"usegapi":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay"},"report":{"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\..*","gapi\\.auth\\..*","gapi\\.client\\..*","gapi\\.signin\\..*"]},"csi":{"rate":0.01},"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.de.1VPrz5WJA_8.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/z\u003dzcms/rs\u003dAItRSTN2dGD5lBOQRikAiCDhwidm_5JXJQ","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"bf11abe3591eb5f566f3da6ff657361db9e0f3a4","dpo":false},"platform":["additnow","blogger","comments","commentcount","community","follow","page","person","plus","plusone","post","savetodrive","savetowallet","shortlists","youtube","ytsubscribe","zoomableimage","hangout"],"fp":"bf11abe3591eb5f566f3da6ff657361db9e0f3a4","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin"]}});