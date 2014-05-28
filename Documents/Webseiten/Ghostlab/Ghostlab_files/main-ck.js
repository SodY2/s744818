function fadeIn(e){e.each(function(){var e=$(this);0!=e.css("opacity")&&e.is(":visible")||e.fadeIn("slow")})}!function(e){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},n=e(window),o=e(document),i=[],a=n.height(),r=function(){for(var t=n.scrollTop(),r=o.height(),s=r-a,c=t>s?s-t:0,d=0;d<i.length;d++){var l=i[d],u=l.stickyWrapper.offset().top,f=u-l.topSpacing-c;if(f>=t)null!==l.currentTop&&(l.stickyElement.css("position","").css("top",""),l.stickyElement.parent().removeClass(l.className),l.currentTop=null);else{var p=r-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-t-c;0>p?p+=l.topSpacing:p=l.topSpacing,l.currentTop!=p&&(l.stickyElement.css("position","fixed").css("top",p),"undefined"!=typeof l.getWidthFrom&&l.stickyElement.css("width",e(l.getWidthFrom).width()),l.stickyElement.parent().addClass(l.className),l.currentTop=p)}}},s=function(){a=n.height()},c={init:function(n){var o=e.extend(t,n);return this.each(function(){var t=e(this);stickyId=t.attr("id"),wrapper=e("<div></div>").attr("id",stickyId+"-sticky-wrapper").addClass(o.wrapperClassName),t.wrapAll(wrapper),o.center&&t.parent().css({width:t.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==t.css("float")&&t.css({"float":"none"}).parent().css({"float":"right"});var n=t.parent();n.css("height",t.outerHeight()),i.push({topSpacing:o.topSpacing,bottomSpacing:o.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:n,className:o.className,getWidthFrom:o.getWidthFrom})})},update:r};window.addEventListener?(window.addEventListener("scroll",r,!1),window.addEventListener("resize",s,!1)):window.attachEvent&&(window.attachEvent("onscroll",r),window.attachEvent("onresize",s)),e.fn.sticky=function(t){return c[t]?c[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},e(function(){setTimeout(r,0)})}(jQuery),function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){var n=o(e,t)?a:i;n(e,t)}var o,i,a;"classList"in document.documentElement?(o=function(e,t){return e.classList.contains(t)},i=function(e,t){e.classList.add(t)},a=function(e,t){e.classList.remove(t)}):(o=function(e,n){return t(n).test(e.className)},i=function(e,t){o(e,t)||(e.className=e.className+" "+t)},a=function(e,n){e.className=e.className.replace(t(n)," ")});var r={hasClass:o,addClass:i,removeClass:a,toggleClass:n,has:o,add:i,remove:a,toggle:n};"function"==typeof define&&define.amd?define(r):e.classie=r}(window);var iframe='<iframe width="640" height="480" src="//www.youtube.com/embed/QfLKXTv4d8Q" frameborder="0" allowfullscreen></iframe>',ModalEffects=function(){function e(){var e=document.querySelector(".md-overlay");[].slice.call(document.querySelectorAll(".md-trigger")).forEach(function(t,n){function o(e){$("div.md-modal .md-content").html(""),classie.remove(a,"md-show"),e&&classie.remove(document.documentElement,"md-perspective")}function i(){o(classie.has(t,"md-setperspective"))}var a=document.querySelector("#"+t.getAttribute("data-modal")),r=a.querySelector(".md-close");t.addEventListener("click",function(n){classie.add(a,"md-show"),e.removeEventListener("click",i),e.addEventListener("click",i),classie.has(t,"md-setperspective")&&setTimeout(function(){classie.add(document.documentElement,"md-perspective")},25)}),r&&r.addEventListener("click",function(e){e.stopPropagation(),i()})})}e()}();$(".md-trigger").on("click",function(e){$("div.md-modal .md-content").html(iframe)}),function(e){function t(){return 1==m?!1:void 0!=window.DeviceOrientationEvent}function n(e){if(x=e.gamma,y=e.beta,90===Math.abs(window.orientation)){var t=x;x=y,y=t}return window.orientation<0&&(x=-x,y=-y),f=null==f?x:f,p=null==p?y:p,{x:x-f,y:y-p}}function o(e){if(!((new Date).getTime()<r+a)){r=(new Date).getTime();var o=null!=c.offset()?c.offset().left:0,i=null!=c.offset()?c.offset().top:0,f=e.pageX-o,p=e.pageY-i;if(!(0>f||f>c.width()||0>p||p>c.height())){if(t()){if(void 0==e.gamma)return void(m=!0);values=n(e),f=values.x/d,p=values.y/d,f=u>f?u:f>l?l:f,p=u>p?u:p>l?l:p,f=(f+1)/2,p=(p+1)/2}var g=f/(1==t()?l:c.width()),h=p/(1==t()?l:c.height()),v,y;for(y=s.length;y--;)v=s[y],newX=v.startX+v.inversionFactor*v.xRange*g,newY=v.startY+v.inversionFactor*v.yRange*h,v.background?v.obj.css("background-position",newX+"px "+newY+"px"):v.obj.css("left",newX).css("top",newY)}}}var i=25,a=1/i*1e3,r=(new Date).getTime(),s=[],c=e(window),d=30,l=1,u=-1,f=null,p=null,m=!1;e.fn.plaxify=function(t){return this.each(function(){for(var n=-1,o={xRange:e(this).data("xrange")||0,yRange:e(this).data("yrange")||0,invert:e(this).data("invert")||!1,background:e(this).data("background")||!1},i=0;i<s.length;i++)this===s[i].obj.get(0)&&(n=i);for(var a in t)0==o[a]&&(o[a]=t[a]);if(o.inversionFactor=o.invert?-1:1,o.obj=e(this),o.background){if(pos=(o.obj.css("background-position")||"0px 0px").split(/ /),2!=pos.length)return;if(x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/),y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/),!x||!y)return;o.originX=o.startX=x[2]||0,o.originY=o.startY=y[2]||0}else{var r=o.obj.position();o.obj.css({top:r.top,left:r.left,right:"",bottom:""}),o.originX=o.startX=r.left,o.originY=o.startY=r.top}o.startX-=o.inversionFactor*Math.floor(o.xRange/2),o.startY-=o.inversionFactor*Math.floor(o.yRange/2),n>=0?s.splice(n,1,o):s.push(o)})},e.plax={enable:function(n){n&&(n.activityTarget&&(c=n.activityTarget||e(window)),"number"==typeof n.gyroRange&&n.gyroRange>0&&(d=n.gyroRange)),e(document).bind("mousemove.plax",function(e){o(e)}),t()&&(window.ondeviceorientation=function(e){o(e)})},disable:function(t){if(e(document).unbind("mousemove.plax"),window.ondeviceorientation=void 0,t&&"boolean"==typeof t.restorePositions&&t.restorePositions)for(var n=s.length;n--;)layer=s[n],s[n].background?layer.obj.css("background-position",layer.originX+"px "+layer.originY+"px"):layer.obj.css("left",layer.originX).css("top",layer.originY);t&&"boolean"==typeof t.clearLayers&&t.clearLayers&&(s=[])}},"undefined"!=typeof ender&&e.ender(e.fn,!0)}(function(){return"undefined"!=typeof jQuery?jQuery:ender}()),$(document).ready(function(){$("#download-info").fadeOut(100)}),$(".download-btns").hover(function(){$(".download-text").css("display","none"),fadeIn($(".win-btn-wrapper, a.mac-btn, #download-info"))},function(){$("#download-info").fadeOut(100)}),$(".store-btn").hover(function(){fadeIn($("#shop-info"))},function(){$("#shop-info").fadeOut(100)}),$(".win-btn-wrapper").hover(function(){fadeIn($(".windows-bit"))},function(){$(".windows-bit").fadeOut(100)}),$(document).ready(function(){$("#sticker").sticky({topSpacing:0}),$("#plax-bg").plaxify({xRange:20,yRange:20}),$.plax.enable({activityTarget:$("img#plax-bg")}),$("#close-hello-bar").click(function(){$("#hello-bar").hide()})});