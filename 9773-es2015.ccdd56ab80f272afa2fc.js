(self.webpackChunkgo_explore=self.webpackChunkgo_explore||[]).push([[9773],{9773:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return a}});var r=n(5392),o=n(4366);n(5901);const a=(e,t,n,a,s)=>{const c=e.ownerDocument.defaultView;return(0,o.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{a(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,n=e.deltaX/t,o=e.velocityX,a=o>=0&&(o>.2||e.deltaX>t/2),i=(a?1-n:n)*t;let u=0;if(i>5){const e=i/Math.abs(o);u=Math.min(e,540)}s(a,n<=0?.01:(0,r.j)(0,n,.9999),u)}})}}}]);