webpackJsonp([1],{"+a2X":function(t,e){},ODmg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"examples"},[t._m(0),t._v(" "),n("div",{staticClass:"examples-content"},[n("ul",{staticClass:"examples-menu"},[n("li",{staticClass:"examples-menu-title"},[t._v("机械制图习题集")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("第五章 轴测图")]),t._v(" "),t._l(t.menus,function(e){return n("li",{key:e.title,staticClass:"examples-menu-item"},[n("router-link",{attrs:{to:e.router}},[t._v(t._s(e.title))])],1)})],2),t._v(" "),n("div",{staticClass:"examples-pages"},[n("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"examples-header"},[e("a",{staticClass:"title",attrs:{href:"https://github.com/zenquan/vue-3d-app"}},[this._v("三维模型库")])])}]};var i=n("VU/8")({name:"app",data:function(){return{menus:[{index:0,router:"/ch5281",title:"5-28-1"},{index:1,router:"/ch5282",title:"5-28-2"},{index:2,router:"/ch5283",title:"5-28-3"},{index:3,router:"/ch5284",title:"5-28-4"},{index:4,router:"/ch5285",title:"5-28-5"},{index:5,router:"/ch5286",title:"5-28-6"},{index:6,router:"/ch5291",title:"5-29-1"},{index:7,router:"/ch5292",title:"5-29-2"},{index:8,router:"/ch5293",title:"5-29-3"},{index:9,router:"/ch5294",title:"5-29-4"}]}}},s,!1,function(t){n("+a2X")},null,null).exports,a=n("/ocq"),r=n("MKqz"),l=function(t){this.manager=void 0!==t?t:r.f};l.prototype={constructor:l,load:function(t,e,n,o){var s=this,i=new r.i(s.manager);i.setResponseType("arraybuffer"),i.load(t,function(t){e(s.parse(t))},n,o)},parse:function(t){var e=this.ensureBinary(t);return function(){var t;if(84+50*(t=new DataView(e)).getUint32(80,!0)===t.byteLength)return!0;for(var n=[115,111,108,105,100],o=0;o<5;o++)if(n[o]!=t.getUint8(o,!1))return!0;return!1}()?this.parseBinary(e):this.parseASCII(this.ensureString(t))},parseBinary:function(t){for(var e,n,o,s,i,a,l,c,d=new DataView(t),u=d.getUint32(80,!0),h=!1,m=0;m<70;m++)1129270351==d.getUint32(m,!1)&&82==d.getUint8(m+4)&&61==d.getUint8(m+5)&&(h=!0,s=[],i=d.getUint8(m+6)/255,a=d.getUint8(m+7)/255,l=d.getUint8(m+8)/255,c=d.getUint8(m+9)/255);for(var p=new r.d,f=[],v=[],b=0;b<u;b++){var g=84+50*b,y=d.getFloat32(g,!0),w=d.getFloat32(g+4,!0),x=d.getFloat32(g+8,!0);if(h){var E=d.getUint16(g+48,!0);0==(32768&E)?(e=(31&E)/31,n=(E>>5&31)/31,o=(E>>10&31)/31):(e=i,n=a,o=l)}for(var k=1;k<=3;k++){var L=g+12*k;f.push(d.getFloat32(L,!0)),f.push(d.getFloat32(L+4,!0)),f.push(d.getFloat32(L+8,!0)),v.push(y,w,x),h&&s.push(e,n,o)}}return p.addAttribute("position",new r.c(new Float32Array(f),3)),p.addAttribute("normal",new r.c(new Float32Array(v),3)),h&&(p.addAttribute("color",new r.c(new Float32Array(s),3)),p.hasColors=!0,p.alpha=c),p},parseASCII:function(t){var e,n,o,s,i,a;e=new r.d,n=/facet([\s\S]*?)endfacet/g;for(var l=[],c=[],d=new r.w;null!==(i=n.exec(t));){for(a=i[0],o=/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;null!==(i=o.exec(a));)d.x=parseFloat(i[1]),d.y=parseFloat(i[3]),d.z=parseFloat(i[5]);for(s=/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;null!==(i=s.exec(a));)l.push(parseFloat(i[1]),parseFloat(i[3]),parseFloat(i[5])),c.push(d.x,d.y,d.z)}return e.addAttribute("position",new r.c(new Float32Array(l),3)),e.addAttribute("normal",new r.c(new Float32Array(c),3)),e},ensureString:function(t){if("string"!=typeof t){for(var e=new Uint8Array(t),n=[],o=0;o<t.byteLength;o++)n.push(String.fromCharCode(e[o]));return n.join("")}return t},ensureBinary:function(t){if("string"==typeof t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=255&t.charCodeAt(n);return e.buffer||e}return t}};var c=new r.b;var d=n("OvRC"),u=function(t,e){var n,o,s,i,a;this.object=t,this.domElement=void 0!==e?e:document,this.enabled=!0,this.target=new r.w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:r.k.LEFT,ZOOM:r.k.MIDDLE,PAN:r.k.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.saveState=function(){l.target0.copy(l.target),l.position0.copy(l.object.position),l.zoom0=l.object.zoom},this.reset=function(){l.target.copy(l.target0),l.object.position.copy(l.position0),l.object.zoom=l.zoom0,l.object.updateProjectionMatrix(),l.dispatchEvent(c),l.update(),m=h.NONE},this.update=(n=new r.w,o=(new r.r).setFromUnitVectors(t.up,new r.w(0,1,0)),s=o.clone().inverse(),i=new r.w,a=new r.r,function(){var t=l.object.position;return n.copy(t).sub(l.target),n.applyQuaternion(o),f.setFromVector3(n),l.autoRotate&&m===h.NONE&&C(2*Math.PI/60/60*l.autoRotateSpeed),f.theta+=v.theta,f.phi+=v.phi,f.theta=Math.max(l.minAzimuthAngle,Math.min(l.maxAzimuthAngle,f.theta)),f.phi=Math.max(l.minPolarAngle,Math.min(l.maxPolarAngle,f.phi)),f.makeSafe(),f.radius*=b,f.radius=Math.max(l.minDistance,Math.min(l.maxDistance,f.radius)),l.target.add(g),n.setFromSpherical(f),n.applyQuaternion(s),t.copy(l.target).add(n),l.object.lookAt(l.target),!0===l.enableDamping?(v.theta*=1-l.dampingFactor,v.phi*=1-l.dampingFactor):v.set(0,0,0),b=1,g.set(0,0,0),!!(y||i.distanceToSquared(l.object.position)>p||8*(1-a.dot(l.object.quaternion))>p)&&(l.dispatchEvent(c),i.copy(l.object.position),a.copy(l.object.quaternion),y=!1,!0)}),this.dispose=function(){l.domElement.removeEventListener("contextmenu",Z,!1),l.domElement.removeEventListener("mousedown",T,!1),l.domElement.removeEventListener("wheel",D,!1),l.domElement.removeEventListener("touchstart",I,!1),l.domElement.removeEventListener("touchend",X,!1),l.domElement.removeEventListener("touchmove",H,!1),document.removeEventListener("mousemove",$,!1),document.removeEventListener("mouseup",V,!1),window.removeEventListener("keydown",Y,!1)};var l=this,c={type:"change"},d={type:"start"},u={type:"end"},h={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},m=h.NONE,p=1e-6,f=new r.u,v=new r.u,b=1,g=new r.w,y=!1,w=new r.v,x=new r.v,E=new r.v,k=new r.v,L=new r.v,M=new r.v,j=new r.v,_=new r.v,A=new r.v;function O(){return Math.pow(.95,l.zoomSpeed)}function C(t){v.theta-=t}function z(t){v.phi-=t}var S,R=(S=new r.w,function(t,e){S.setFromMatrixColumn(e,0),S.multiplyScalar(-t),g.add(S)}),P=function(){var t=new r.w;return function(e,n){t.setFromMatrixColumn(n,1),t.multiplyScalar(e),g.add(t)}}(),U=function(){var t=new r.w;return function(e,n){var o=l.domElement===document?l.domElement.body:l.domElement;if(l.object instanceof r.p){var s=l.object.position;t.copy(s).sub(l.target);var i=t.length();i*=Math.tan(l.object.fov/2*Math.PI/180),R(2*e*i/o.clientHeight,l.object.matrix),P(2*n*i/o.clientHeight,l.object.matrix)}else l.object instanceof r.o?(R(e*(l.object.right-l.object.left)/l.object.zoom/o.clientWidth,l.object.matrix),P(n*(l.object.top-l.object.bottom)/l.object.zoom/o.clientHeight,l.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),l.enablePan=!1)}}();function F(t){l.object instanceof r.p?b/=t:l.object instanceof r.o?(l.object.zoom=Math.max(l.minZoom,Math.min(l.maxZoom,l.object.zoom*t)),l.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),l.enableZoom=!1)}function N(t){l.object instanceof r.p?b*=t:l.object instanceof r.o?(l.object.zoom=Math.max(l.minZoom,Math.min(l.maxZoom,l.object.zoom/t)),l.object.updateProjectionMatrix(),y=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),l.enableZoom=!1)}function T(t){if(!1!==l.enabled){switch(t.preventDefault(),t.button){case l.mouseButtons.ORBIT:if(!1===l.enableRotate)return;!function(t){w.set(t.clientX,t.clientY)}(t),m=h.ROTATE;break;case l.mouseButtons.ZOOM:if(!1===l.enableZoom)return;!function(t){j.set(t.clientX,t.clientY)}(t),m=h.DOLLY;break;case l.mouseButtons.PAN:if(!1===l.enablePan)return;!function(t){k.set(t.clientX,t.clientY)}(t),m=h.PAN}m!==h.NONE&&(document.addEventListener("mousemove",$,!1),document.addEventListener("mouseup",V,!1),l.dispatchEvent(d))}}function $(t){if(!1!==l.enabled)switch(t.preventDefault(),m){case h.ROTATE:if(!1===l.enableRotate)return;!function(t){x.set(t.clientX,t.clientY),E.subVectors(x,w);var e=l.domElement===document?l.domElement.body:l.domElement;C(2*Math.PI*E.x/e.clientWidth*l.rotateSpeed),z(2*Math.PI*E.y/e.clientHeight*l.rotateSpeed),w.copy(x),l.update()}(t);break;case h.DOLLY:if(!1===l.enableZoom)return;!function(t){_.set(t.clientX,t.clientY),A.subVectors(_,j),A.y>0?F(O()):A.y<0&&N(O()),j.copy(_),l.update()}(t);break;case h.PAN:if(!1===l.enablePan)return;!function(t){L.set(t.clientX,t.clientY),M.subVectors(L,k),U(M.x,M.y),k.copy(L),l.update()}(t)}}function V(t){!1!==l.enabled&&(document.removeEventListener("mousemove",$,!1),document.removeEventListener("mouseup",V,!1),l.dispatchEvent(u),m=h.NONE)}function D(t){!1===l.enabled||!1===l.enableZoom||m!==h.NONE&&m!==h.ROTATE||(t.preventDefault(),t.stopPropagation(),function(t){t.deltaY<0?N(O()):t.deltaY>0&&F(O()),l.update()}(t),l.dispatchEvent(d),l.dispatchEvent(u))}function Y(t){!1!==l.enabled&&!1!==l.enableKeys&&!1!==l.enablePan&&function(t){switch(t.keyCode){case l.keys.UP:U(0,l.keyPanSpeed),l.update();break;case l.keys.BOTTOM:U(0,-l.keyPanSpeed),l.update();break;case l.keys.LEFT:U(l.keyPanSpeed,0),l.update();break;case l.keys.RIGHT:U(-l.keyPanSpeed,0),l.update()}}(t)}function I(t){if(!1!==l.enabled){switch(t.touches.length){case 1:if(!1===l.enableRotate)return;!function(t){w.set(t.touches[0].pageX,t.touches[0].pageY)}(t),m=h.TOUCH_ROTATE;break;case 2:if(!1===l.enableZoom)return;!function(t){var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY,o=Math.sqrt(e*e+n*n);j.set(0,o)}(t),m=h.TOUCH_DOLLY;break;case 3:if(!1===l.enablePan)return;!function(t){k.set(t.touches[0].pageX,t.touches[0].pageY)}(t),m=h.TOUCH_PAN;break;default:m=h.NONE}m!==h.NONE&&l.dispatchEvent(d)}}function H(t){if(!1!==l.enabled)switch(t.preventDefault(),t.stopPropagation(),t.touches.length){case 1:if(!1===l.enableRotate)return;if(m!==h.TOUCH_ROTATE)return;!function(t){x.set(t.touches[0].pageX,t.touches[0].pageY),E.subVectors(x,w);var e=l.domElement===document?l.domElement.body:l.domElement;C(2*Math.PI*E.x/e.clientWidth*l.rotateSpeed),z(2*Math.PI*E.y/e.clientHeight*l.rotateSpeed),w.copy(x),l.update()}(t);break;case 2:if(!1===l.enableZoom)return;if(m!==h.TOUCH_DOLLY)return;!function(t){var e=t.touches[0].pageX-t.touches[1].pageX,n=t.touches[0].pageY-t.touches[1].pageY,o=Math.sqrt(e*e+n*n);_.set(0,o),A.subVectors(_,j),A.y>0?N(O()):A.y<0&&F(O()),j.copy(_),l.update()}(t);break;case 3:if(!1===l.enablePan)return;if(m!==h.TOUCH_PAN)return;!function(t){L.set(t.touches[0].pageX,t.touches[0].pageY),M.subVectors(L,k),U(M.x,M.y),k.copy(L),l.update()}(t);break;default:m=h.NONE}}function X(t){!1!==l.enabled&&(l.dispatchEvent(u),m=h.NONE)}function Z(t){t.preventDefault()}l.domElement.addEventListener("contextmenu",Z,!1),l.domElement.addEventListener("mousedown",T,!1),l.domElement.addEventListener("wheel",D,!1),l.domElement.addEventListener("touchstart",I,!1),l.domElement.addEventListener("touchend",X,!1),l.domElement.addEventListener("touchmove",H,!1),window.addEventListener("keydown",Y,!1),this.update()};(u.prototype=n.n(d)()(r.h.prototype)).constructor=u;var h=function(){try{var t=document.createElement("canvas");return!(!window.WebGLRenderingContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}catch(t){return!1}}(),m={props:{src:{type:String},width:{type:Number},height:{type:Number},position:{type:Object,default:function(){return{x:0,y:0,z:0}}},rotation:{type:Object,default:function(){return{x:0,y:0,z:0}}},scale:{type:Object,default:function(){return{x:1,y:1,z:1}}},lights:{type:Array,default:function(){return[]}},cameraPosition:{type:Object,default:function(){return{x:0,y:0,z:0}}},cameraRotation:{type:Object,default:function(){return{x:0,y:0,z:0}}},cameraUp:{type:Object},cameraLookAt:{type:Object},backgroundColor:{default:16777215},backgroundAlpha:{type:Number,default:1},controllable:{type:Boolean,default:!0},crossOrigin:{default:"anonymous"},gammaOutput:{type:Boolean,default:!1}},data:function(){return{suportWebGL:h,size:{width:this.width,height:this.height},object:null,raycaster:new r.s,mouse:new r.v,camera:new r.p(45,1,.01,1e5),scene:new r.t,wrapper:new r.n,renderer:null,controls:null,allLights:[],clock:"undefined"==typeof performance?Date:performance,reqId:null}},computed:{hasListener:function(){var t=this._events,e={};return["on-mousemove","on-mouseup","on-mousedown","on-click"].forEach(function(n){e[n]=!!t[n]&&t[n].length>0}),e}},mounted:function(){void 0!==this.width&&void 0!==this.height||(this.size={width:this.$el.offsetWidth,height:this.$el.offsetHeight}),this.renderer=new r.x({antialias:!0,alpha:!0,canvas:this.$refs.canvas}),this.renderer.shadowMap.enabled=!0,this.renderer.gammaOutput=this.gammaOutput,this.scene.add(this.wrapper),this.load(),this.update(),this.$el.addEventListener("mousedown",this.onMouseDown,!1),this.$el.addEventListener("mousemove",this.onMouseMove,!1),this.$el.addEventListener("mouseup",this.onMouseUp,!1),this.$el.addEventListener("click",this.onClick,!1),window.addEventListener("resize",this.onResize,!1),this.animate()},beforeDestroy:function(){cancelAnimationFrame(this.reqId),this.$el.removeEventListener("mousedown",this.onMouseDown,!1),this.$el.removeEventListener("mousemove",this.onMouseMove,!1),this.$el.removeEventListener("mouseup",this.onMouseUp,!1),this.$el.removeEventListener("click",this.onClick,!1),window.removeEventListener("resize",this.onResize,!1)},watch:{src:function(){this.load()},rotation:{deep:!0,handler:function(t){this.object&&this.object.rotation.set(t.x,t.y,t.z)}},position:{deep:!0,handler:function(t){this.object&&this.object.position.set(t.x,t.y,t.z)}},scale:{deep:!0,handler:function(t){this.object&&this.object.scale.set(t.x,t.y,t.z)}},lights:{deep:!0,handler:function(t,e){this.updateLights()}},size:{deep:!0,handler:function(t){this.updateCamera(),this.updateRenderer()}},controllable:function(){this.updateControls()},backgroundAlpha:function(){this.updateRenderer()},backgroundColor:function(){this.updateRenderer()}},methods:{onResize:function(){var t=this;void 0!==this.width&&void 0!==this.height||this.$nextTick(function(){t.size={width:t.$el.offsetWidth,height:t.$el.offsetHeight}})},onMouseDown:function(t){if(this.hasListener["on-mousedown"]){var e=this.pick(t.clientX,t.clientY);this.$emit("on-mousedown",e)}},onMouseMove:function(t){if(this.hasListener["on-mousemove"]){var e=this.pick(t.clientX,t.clientY);this.$emit("on-mousemove",e)}},onMouseUp:function(t){if(this.hasListener["on-mouseup"]){var e=this.pick(t.clientX,t.clientY);this.$emit("on-mouseup",e)}},onClick:function(t){if(this.hasListener["on-click"]){var e=this.pick(t.clientX,t.clientY);this.$emit("on-click",e)}},pick:function(t,e){if(this.object){var n=this.$el.getBoundingClientRect();t-=n.left,e-=n.top,this.mouse.x=t/this.size.width*2-1,this.mouse.y=-e/this.size.height*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var o=this.raycaster.intersectObject(this.object,!0);return(o&&o.length)>0?o[0]:null}},update:function(){this.updateRenderer(),this.updateCamera(),this.updateLights(),this.updateControls()},updateModel:function(){var t=this.object;if(t){var e=this.position,n=this.rotation,o=this.scale;t.position.set(e.x,e.y,e.z),t.rotation.set(n.x,n.y,n.z),t.scale.set(o.x,o.y,o.z)}},updateRenderer:function(){var t=this.renderer;t.setSize(this.size.width,this.size.height),t.setPixelRatio(window.devicePixelRatio||1),t.setClearColor(new r.e(this.backgroundColor).getHex()),t.setClearAlpha(this.backgroundAlpha)},updateCamera:function(){var t=this.camera,e=this.object;if(t.aspect=this.size.width/this.size.height,t.updateProjectionMatrix(),this.cameraLookAt||this.cameraUp)t.position.set(this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),t.rotation.set(this.cameraRotation.x,this.cameraRotation.y,this.cameraRotation.z),t.up.set(this.cameraUp.x,this.cameraUp.y,this.cameraUp.z),t.lookAt(new r.w(this.cameraLookAt.x,this.cameraLookAt.y,this.cameraLookAt.z));else{if(!e)return;var n=function(t){return c.setFromObject(t),c.getSize()}(e).length();t.position.set(this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),t.rotation.set(this.cameraRotation.x,this.cameraRotation.y,this.cameraRotation.z),0===this.cameraPosition.x&&0===this.cameraPosition.y&&0===this.cameraPosition.z&&(t.position.z=n),t.lookAt(new r.w)}},updateLights:function(){var t=this;this.scene.remove.apply(this.scene,this.allLights),this.allLights=[],this.lights.forEach(function(e){if(e.type){var n=e.type.toLowerCase(),o=null;if("ambient"===n||"ambientlight"===n){var s=e.color||4210752,i=e.intensity||1;o=new r.a(s,i)}else if("point"===n||"pointlight"===n){var a=e.color||16777215,l=e.intensity||1,c=e.distance||0,d=e.decay||1;o=new r.q(a,l,c,d),e.position&&o.position.copy(e.position)}else if("directional"===n||"directionallight"===n){var u=e.color||16777215,h=e.intensity||1;o=new r.g(u,h),e.position&&o.position.copy(e.position),e.target&&o.target.copy(e.target)}else if("hemisphere"===n||"hemispherelight"===n){var m=e.skyColor||16777215,p=e.groundColor||16777215,f=e.intensity||1;o=new r.j(m,p,f),e.position&&o.position.copy(e.position)}t.allLights.push(o),t.scene.add(o)}})},updateControls:function(){if(!this.controllable||!this.controls)if(this.controllable){if(this.controls)return;this.controls=new u(this.camera,this.$el),this.controls.type="orbit"}else this.controls&&(this.controls.dispose(),this.controls=null)},load:function(){var t=this;this.src&&(this.object&&this.wrapper.remove(this.object),this.loader.load(this.src,function(){var e=t.getObject.apply(t,arguments);t.process&&t.process(e),t.addObject(e),t.$emit("on-load")},function(e){t.$emit("on-progress",e)},function(e){t.$emit("on-error",e)}))},getObject:function(t){return t},addObject:function(t){var e=function(t){return c.setFromObject(t),c.getCenter()}(t);this.wrapper.position.copy(e.negate()),this.object=t,this.wrapper.add(t),this.updateCamera(),this.updateModel()},animate:function(){this.reqId=requestAnimationFrame(this.animate),this.render()},render:function(){this.renderer.render(this.scene,this.camera)}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"100%",margin:"0",border:"0",padding:"0"}},[this.suportWebGL?e("canvas",{ref:"canvas",staticStyle:{width:"100%",height:"100%"}}):e("div",[this._t("default",[this._v("\n      Your browser does not seem to support\n      "),e("a",{staticStyle:{color:"#000"},attrs:{href:"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation"}},[this._v("WebGL")]),this._v(".\n      "),e("br"),this._v("'\n    ")])],2)])},staticRenderFns:[]},f={name:"model-stl",mixins:[n("VU/8")(m,p,!1,null,null,null).exports],props:{lights:{type:Array,default:function(){return[{type:"HemisphereLight",position:{x:0,y:1,z:0},skyColor:11184895,groundColor:8413280,intensity:.2},{type:"DirectionalLight",position:{x:1,y:1,z:1},color:16777215,intensity:.8}]}}},data:function(){return{loader:new l}},methods:{getObject:function(t){return new r.l(t,new r.m)}}},v=n("VU/8")(f,null,!1,null,null,null).exports,b={name:"ch5281",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-29-3.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},y={name:"ch5282",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-28-2.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},x={name:"ch5283",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},E={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-28-3.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},k={name:"ch5284",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},L={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-28-4.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},M={name:"ch5285",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},j={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-28-5.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},_={name:"ch5286",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},A={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-28-6.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},O={name:"ch5291",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-29-1.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},z={name:"ch5292",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},S={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-29-2.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},R={name:"ch5293",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},P={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-28-1.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]},U={name:"ch5294",data:function(){return{code:"\n<template>\n    <model-stl src=\"static/models/stl/slotted_disk.stl\"></model-stl>\n</template>\n\n<script>\n    import { ModelStl } from 'vue-3d-model'\n\n    export default {\n        components: {\n            ModelStl\n        }\n    }\n<\/script>\n",htmlCode:'\n<body>\n    <div id="app">\n        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>\n    </div>\n    #scripts#\n    <script>\n        new Vue({\n            el: \'#app\'\n        })\n    <\/script>\n</body>\n',loading:!0}},methods:{onLoad:function(){this.loading=!1}},components:{ModelStl:v}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("model-stl",{attrs:{backgroundAlpha:0,src:"static/models/ch5/5-29-4.stl"},on:{"on-load":this.onLoad}})},staticRenderFns:[]};const N=[n("VU/8")(b,g,!1,null,null,null).exports,n("VU/8")(y,w,!1,null,null,null).exports,n("VU/8")(x,E,!1,null,null,null).exports,n("VU/8")(k,L,!1,null,null,null).exports,n("VU/8")(M,j,!1,null,null,null).exports,n("VU/8")(_,A,!1,null,null,null).exports,n("VU/8")(O,C,!1,null,null,null).exports,n("VU/8")(z,S,!1,null,null,null).exports,n("VU/8")(R,P,!1,null,null,null).exports,n("VU/8")(U,F,!1,null,null,null).exports];o.a.use(a.a);const T=N.map(function(t){const e=t.name;return{path:`/${e}`,name:e,component:t}});T.push({path:"*",redirect:"/ch5281"});var $=new a.a({routes:T});new o.a({el:"#app",router:$,render:t=>t(i)})}},["ODmg"]);
//# sourceMappingURL=app.83115454cb0955195061.js.map