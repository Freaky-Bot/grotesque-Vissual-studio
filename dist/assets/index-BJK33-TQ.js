var Th=Object.defineProperty;var Ah=(r,t,e)=>t in r?Th(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var S=(r,t,e)=>Ah(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="183",Ch=0,nc=1,Rh=2,Ss=1,Ph=2,Ms=3,Cn=0,ze=1,un=2,Wn=0,Ki=1,ic=2,sc=3,oc=4,Ih=5,Mi=100,Dh=101,Lh=102,Nh=103,Uh=104,Fh=200,Oh=201,Bh=202,zh=203,Ar=204,Cr=205,kh=206,Gh=207,Hh=208,Vh=209,Wh=210,Xh=211,Yh=212,qh=213,jh=214,Rr=0,Pr=1,Ir=2,Ji=3,Dr=4,Lr=5,Nr=6,Ur=7,ba=0,$h=1,Kh=2,Tn=0,Il=1,Dl=2,Ll=3,Nl=4,Ul=5,Fl=6,Ol=7,Bl=300,Ti=301,Qi=302,zo=303,ko=304,Io=306,Fr=1e3,Vn=1001,Or=1002,Be=1003,Zh=1004,Us=1005,Ve=1006,Go=1007,Ei=1008,en=1009,zl=1010,kl=1011,bs=1012,Ta=1013,Rn=1014,En=1015,jn=1016,Aa=1017,Ca=1018,Ts=1020,Gl=35902,Hl=35899,Vl=1021,Wl=1022,fn=1023,$n=1026,bi=1027,Xl=1028,Ra=1029,ts=1030,Pa=1031,Ia=1033,go=33776,vo=33777,_o=33778,xo=33779,Br=35840,zr=35841,kr=35842,Gr=35843,Hr=36196,Vr=37492,Wr=37496,Xr=37488,Yr=37489,qr=37490,jr=37491,$r=37808,Kr=37809,Zr=37810,Jr=37811,Qr=37812,ta=37813,ea=37814,na=37815,ia=37816,sa=37817,oa=37818,ra=37819,aa=37820,ca=37821,la=36492,ha=36494,da=36495,ua=36283,fa=36284,pa=36285,ma=36286,Jh=3200,Da=0,Qh=1,ri="",on="srgb",es="srgb-linear",wo="linear",ue="srgb",Pi=7680,rc=519,td=512,ed=513,nd=514,La=515,id=516,sd=517,Na=518,od=519,ga=35044,ac="300 es",bn=2e3,As=2001;function rd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function So(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ad(){const r=So("canvas");return r.style.display="block",r}const cc={};function Eo(...r){const t="THREE."+r.shift();console.log(t,...r)}function Yl(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Xt(...r){r=Yl(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function re(...r){r=Yl(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function bo(...r){const t=r.join(" ");t in cc||(cc[t]=!0,Xt(...r))}function cd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ld={[Rr]:Pr,[Ir]:Nr,[Dr]:Ur,[Ji]:Lr,[Pr]:Rr,[Nr]:Ir,[Ur]:Dr,[Lr]:Ji};class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ho=Math.PI/180,va=180/Math.PI;function li(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function se(r,t,e){return Math.max(t,Math.min(e,r))}function hd(r,t){return(r%t+t)%t}function Vo(r,t,e){return(1-e)*r+e*t}function Sn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ve(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let ss=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],d=n[i+2],u=n[i+3],h=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(u!==v||c!==h||l!==f||d!==p){let m=c*h+l*f+d*p+u*v;m<0&&(h=-h,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){const _=Math.acos(m),w=Math.sin(_);g=Math.sin(g*_)/w,a=Math.sin(a*_)/w,c=c*g+h*a,l=l*g+f*a,d=d*g+p*a,u=u*g+v*a}else{c=c*g+h*a,l=l*g+f*a,d=d*g+p*a,u=u*g+v*a;const _=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=_,l*=_,d*=_,u*=_}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],u=s[o],h=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+d*u+c*f-l*h,t[e+1]=c*p+d*h+l*u-a*f,t[e+2]=l*p+d*f+a*h-c*u,t[e+3]=d*p-a*u-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),u=a(s/2),h=c(n/2),f=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*f*p,this._y=l*f*u-h*d*p,this._z=l*d*p+h*f*u,this._w=l*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+l*f*p,this._y=l*f*u-h*d*p,this._z=l*d*p-h*f*u,this._w=l*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-l*f*p,this._y=l*f*u+h*d*p,this._z=l*d*p+h*f*u,this._w=l*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-l*f*p,this._y=l*f*u+h*d*p,this._z=l*d*p-h*f*u,this._w=l*d*u+h*f*p;break;case"YZX":this._x=h*d*u+l*f*p,this._y=l*f*u+h*d*p,this._z=l*d*p-h*f*u,this._w=l*d*u-h*f*p;break;case"XZY":this._x=h*d*u-l*f*p,this._y=l*f*u-h*d*p,this._z=l*d*p+h*f*u,this._w=l*d*u+h*f*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],u=e[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+i*l-s*c,this._y=i*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-i*a,this._w=o*d-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),d=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*d,this.y=n+c*d+a*l-s*u,this.z=i+c*u+s*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new O,lc=new ss;class Jt{constructor(t,e,n,i,s,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],_=i[1],w=i[4],M=i[7],C=i[2],b=i[5],R=i[8];return s[0]=o*v+a*_+c*C,s[3]=o*m+a*w+c*b,s[6]=o*g+a*M+c*R,s[1]=l*v+d*_+u*C,s[4]=l*m+d*w+u*b,s[7]=l*g+d*M+u*R,s[2]=h*v+f*_+p*C,s[5]=h*m+f*w+p*b,s[8]=h*g+f*M+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*s*d+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=d*o-a*l,h=a*c-d*s,f=l*s-o*c,p=e*u+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=u*v,t[1]=(i*l-d*n)*v,t[2]=(a*n-i*o)*v,t[3]=h*v,t[4]=(d*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Jt,hc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){const r={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ue&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?wo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[es]:{primaries:t,whitePoint:n,transfer:wo,toXYZ:hc,fromXYZ:dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:hc,fromXYZ:dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),r}const ae=dd();function Xn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ii;class ud{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=So("canvas")),Ii.width=t.width,Ii.height=t.height;const i=Ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=So("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fd=0;class Ua{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Yo(i[o].image)):s.push(Yo(i[o]))}else s=Yo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Yo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ud.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let pd=0;const qo=new O;class We extends is{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Vn,i=Vn,s=Ve,o=Ei,a=fn,c=en,l=We.DEFAULT_ANISOTROPY,d=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=li(),this.name="",this.source=new Ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fr:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Or:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fr:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Or:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Bl;We.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,i=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],p=c[9],v=c[2],m=c[6],g=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,M=(f+1)/2,C=(g+1)/2,b=(d+h)/4,R=(u+v)/4,x=(p+m)/4;return w>M&&w>C?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=R/n):M>C?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=x/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=R/s,i=x/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-v)/_,this.z=(h-d)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new We(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ua(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ql extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gd extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Me{constructor(t,e,n,i,s,o,a,c,l,d,u,h,f,p,v,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,d,u,h,f,p,v,m)}set(t,e,n,i,s,o,a,c,l,d,u,h,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=u,g[14]=h,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=o*d,f=o*u,p=a*d,v=a*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*d,f=c*u,p=l*d,v=l*u;e[0]=h+v*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=f*a-p,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*d,f=c*u,p=l*d,v=l*u;e[0]=h-v*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*d,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*d,f=o*u,p=a*d,v=a*u;e[0]=c*d,e[4]=p*l-f,e[8]=h*l+v,e[1]=c*u,e[5]=v*l+h,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,p=a*c,v=a*l;e[0]=c*d,e[4]=v-h*u,e[8]=p*u+f,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=f*u+p,e[10]=h-v*u}else if(t.order==="XZY"){const h=o*c,f=o*l,p=a*c,v=a*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=h*u+v,e[5]=o*d,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,_d)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Qn.crossVectors(n,Je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Qn.crossVectors(n,Je)),Qn.normalize(),Fs.crossVectors(Je,Qn),i[0]=Qn.x,i[4]=Fs.x,i[8]=Je.x,i[1]=Qn.y,i[5]=Fs.y,i[9]=Je.y,i[2]=Qn.z,i[6]=Fs.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],_=n[3],w=n[7],M=n[11],C=n[15],b=i[0],R=i[4],x=i[8],T=i[12],G=i[1],I=i[5],z=i[9],L=i[13],F=i[2],U=i[6],N=i[10],k=i[14],$=i[3],q=i[7],st=i[11],ot=i[15];return s[0]=o*b+a*G+c*F+l*$,s[4]=o*R+a*I+c*U+l*q,s[8]=o*x+a*z+c*N+l*st,s[12]=o*T+a*L+c*k+l*ot,s[1]=d*b+u*G+h*F+f*$,s[5]=d*R+u*I+h*U+f*q,s[9]=d*x+u*z+h*N+f*st,s[13]=d*T+u*L+h*k+f*ot,s[2]=p*b+v*G+m*F+g*$,s[6]=p*R+v*I+m*U+g*q,s[10]=p*x+v*z+m*N+g*st,s[14]=p*T+v*L+m*k+g*ot,s[3]=_*b+w*G+M*F+C*$,s[7]=_*R+w*I+M*U+C*q,s[11]=_*x+w*z+M*N+C*st,s[15]=_*T+w*L+M*k+C*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],u=t[6],h=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15],_=c*f-l*h,w=a*f-l*u,M=a*h-c*u,C=o*f-l*d,b=o*h-c*d,R=o*u-a*d;return e*(v*_-m*w+g*M)-n*(p*_-m*C+g*b)+i*(p*w-v*C+g*R)-s*(p*M-v*b+m*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],_=e*a-n*o,w=e*c-i*o,M=e*l-s*o,C=n*c-i*a,b=n*l-s*a,R=i*l-s*c,x=d*v-u*p,T=d*m-h*p,G=d*g-f*p,I=u*m-h*v,z=u*g-f*v,L=h*g-f*m,F=_*L-w*z+M*I+C*G-b*T+R*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return t[0]=(a*L-c*z+l*I)*U,t[1]=(i*z-n*L-s*I)*U,t[2]=(v*R-m*b+g*C)*U,t[3]=(h*b-u*R-f*C)*U,t[4]=(c*G-o*L-l*T)*U,t[5]=(e*L-i*G+s*T)*U,t[6]=(m*M-p*R-g*w)*U,t[7]=(d*R-h*M+f*w)*U,t[8]=(o*z-a*G+l*x)*U,t[9]=(n*G-e*z-s*x)*U,t[10]=(p*b-v*M+g*_)*U,t[11]=(u*M-d*b-f*_)*U,t[12]=(a*T-o*I-c*x)*U,t[13]=(e*I-n*T+i*x)*U,t[14]=(v*w-p*C-m*_)*U,t[15]=(d*C-u*w+h*_)*U,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*o,0,l*c-i*a,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,d=o+o,u=a+a,h=s*l,f=s*d,p=s*u,v=o*d,m=o*u,g=a*u,_=c*l,w=c*d,M=c*u,C=n.x,b=n.y,R=n.z;return i[0]=(1-(v+g))*C,i[1]=(f+M)*C,i[2]=(p-w)*C,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(h+g))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(p+w)*R,i[9]=(m-_)*R,i[10]=(1-(h+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),c=Di.set(i[8],i[9],i[10]).length();s<0&&(o=-o),cn.copy(this);const l=1/o,d=1/a,u=1/c;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=d,cn.elements[5]*=d,cn.elements[6]*=d,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,o,a=bn,c=!1){const l=this.elements,d=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,v;if(c)p=s/(o-s),v=o*s/(o-s);else if(a===bn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===As)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=bn,c=!1){const l=this.elements,d=2/(e-t),u=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,v;if(c)p=1/(o-s),v=o/(o-s);else if(a===bn)p=-2/(o-s),v=-(o+s)/(o-s);else if(a===As)p=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new O,cn=new Me,vd=new O(0,0,0),_d=new O(1,1,1),Qn=new O,Fs=new O,Je=new O,uc=new Me,fc=new ss;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xd=0;const pc=new O,Li=new ss,Ln=new Me,Os=new O,as=new O,yd=new O,Md=new ss,mc=new O(1,0,0),gc=new O(0,1,0),vc=new O(0,0,1),_c={type:"added"},wd={type:"removed"},Ni={type:"childadded",child:null},jo={type:"childremoved",child:null};class De extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new O,e=new mn,n=new ss,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new Jt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(gc,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(gc,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Os.copy(t):Os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(as,Os,this.up):Ln.lookAt(Os,as,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Ln),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_c),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),jo.child=t,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_c),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),u=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new O(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oe extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sd={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(l,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Ko(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=hd(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ko(o,s,t+1/3),this.g=Ko(o,s,t),this.b=Ko(o,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ae.workingToColorSpace(He.copy(this),t),Math.round(se(He.r*255,0,255))*65536+Math.round(se(He.g*255,0,255))*256+Math.round(se(He.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(He.copy(this),e);const n=He.r,i=He.g,s=He.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=on){ae.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Bs);const n=Vo(ti.h,Bs.h,e),i=Vo(ti.s,Bs.s,e),s=Vo(ti.l,Bs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Ut;Ut.NAMES=$l;class Cs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new Cs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new Fa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ed extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new O,Nn=new O,Zo=new O,Un=new O,Ui=new O,Fi=new O,xc=new O,Jo=new O,Qo=new O,tr=new O,er=new Te,nr=new Te,ir=new Te;class rn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),Nn.subVectors(n,e),Zo.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Nn),c=ln.dot(Zo),l=Nn.dot(Nn),d=Nn.dot(Zo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(l*c-a*d)*h,p=(o*d-a*c)*h;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(o,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return er.setScalar(0),nr.setScalar(0),ir.setScalar(0),er.fromBufferAttribute(t,e),nr.fromBufferAttribute(t,n),ir.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(er,s.x),o.addScaledVector(nr,s.y),o.addScaledVector(ir,s.z),o}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Nn.subVectors(t,e),ln.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ui.subVectors(i,n),Fi.subVectors(s,n),Jo.subVectors(t,n);const c=Ui.dot(Jo),l=Fi.dot(Jo);if(c<=0&&l<=0)return e.copy(n);Qo.subVectors(t,i);const d=Ui.dot(Qo),u=Fi.dot(Qo);if(d>=0&&u<=d)return e.copy(i);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Ui,o);tr.subVectors(t,s);const f=Ui.dot(tr),p=Fi.dot(tr);if(p>=0&&f<=p)return e.copy(s);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Fi,a);const m=d*p-f*u;if(m<=0&&u-d>=0&&f-p>=0)return xc.subVectors(s,i),a=(u-d)/(u-d+(f-p)),e.copy(i).addScaledVector(xc,a);const g=1/(m+v+h);return o=v*g,a=h*g,e.copy(n).addScaledVector(Ui,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ps{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),ks.subVectors(this.max,cs),Oi.subVectors(t.a,cs),Bi.subVectors(t.b,cs),zi.subVectors(t.c,cs),ei.subVectors(Bi,Oi),ni.subVectors(zi,Bi),fi.subVectors(Oi,zi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-fi.z,fi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,fi.z,0,-fi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-fi.y,fi.x,0];return!sr(e,Oi,Bi,zi,ks)||(e=[1,0,0,0,1,0,0,0,1],!sr(e,Oi,Bi,zi,ks))?!1:(Gs.crossVectors(ei,ni),e=[Gs.x,Gs.y,Gs.z],sr(e,Oi,Bi,zi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fn=[new O,new O,new O,new O,new O,new O,new O,new O],hn=new O,zs=new Ps,Oi=new O,Bi=new O,zi=new O,ei=new O,ni=new O,fi=new O,cs=new O,ks=new O,Gs=new O,pi=new O;function sr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){pi.fromArray(r,s);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),d=n.dot(pi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Ce=new O,Hs=new Kt;let bd=0;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ga,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ga&&(t.usage=this.usage),t}}class Kl extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zl extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Td=new Ps,ls=new O,or=new O;class Is{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Td.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(or)),this.expandByPoint(ls.copy(t.center).sub(or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ad=0;const sn=new Me,rr=new De,ki=new O,Qe=new Ps,hs=new Ps,Fe=new O;class Se extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rd(t)?Zl:Kl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(Qe.min,hs.min),Qe.expandByPoint(Fe),Fe.addVectors(Qe.max,hs.max),Qe.expandByPoint(Fe)):(Qe.expandByPoint(hs.min),Qe.expandByPoint(hs.max))}Qe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Fe.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(t,l),Fe.add(ki)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new O,c[x]=new O;const l=new O,d=new O,u=new O,h=new Kt,f=new Kt,p=new Kt,v=new O,m=new O;function g(x,T,G){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,G),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,G),d.sub(l),u.sub(l),f.sub(h),p.sub(h);const I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(I),a[x].add(v),a[T].add(v),a[G].add(v),c[x].add(m),c[T].add(m),c[G].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,T=_.length;x<T;++x){const G=_[x],I=G.start,z=G.count;for(let L=I,F=I+z;L<F;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new O,M=new O,C=new O,b=new O;function R(x){C.fromBufferAttribute(i,x),b.copy(C);const T=a[x];w.copy(T),w.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(b,T);const I=M.dot(c[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,I)}for(let x=0,T=_.length;x<T;++x){const G=_[x],I=G.start,z=G.count;for(let L=I,F=I+z;L<F;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,c=new O,l=new O,d=new O,u=new O;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),d.subVectors(o,s),u.subVectors(i,s),d.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(d),c.add(d),l.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d);let f=0,p=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*d;for(let g=0;g<d;g++)h[p++]=l[f++]}return new Xe(h,d,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(t.data))}d.length>0&&(i[c]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(e))}const s=t.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ga,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new O;class To{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Rd=0,Kn=class extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Ki,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ar,this.blendDst=Cr,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ar&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Jl extends Kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gi;const ds=new O,Hi=new O,Vi=new O,Wi=new Kt,us=new Kt,Ql=new Me,Vs=new O,fs=new O,Ws=new O,yc=new Kt,ar=new Kt,Mc=new Kt;class wc extends De{constructor(t=new Jl){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cd(e,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new To(n,3,0,!1)),Gi.setAttribute("uv",new To(n,2,3,!1))}this.geometry=Gi,this.material=t,this.center=new Kt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Ql.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Xs(Vs.set(-.5,-.5,0),Vi,o,Hi,i,s),Xs(fs.set(.5,-.5,0),Vi,o,Hi,i,s),Xs(Ws.set(.5,.5,0),Vi,o,Hi,i,s),yc.set(0,0),ar.set(1,0),Mc.set(1,1);let a=t.ray.intersectTriangle(Vs,fs,Ws,!1,ds);if(a===null&&(Xs(fs.set(-.5,.5,0),Vi,o,Hi,i,s),ar.set(0,1),a=t.ray.intersectTriangle(Vs,Ws,fs,!1,ds),a===null))return;const c=t.ray.origin.distanceTo(ds);c<t.near||c>t.far||e.push({distance:c,point:ds.clone(),uv:rn.getInterpolation(ds,Vs,fs,Ws,yc,ar,Mc,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xs(r,t,e,n,i,s){Wi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(us.x=s*Wi.x-i*Wi.y,us.y=i*Wi.x+s*Wi.y):us.copy(Wi),r.copy(t),r.x+=us.x,r.y+=us.y,r.applyMatrix4(Ql)}const On=new O,cr=new O,Ys=new O,ii=new O,lr=new O,qs=new O,hr=new O;let Oa=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cr.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(cr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=ii.dot(this.direction),c=-ii.dot(Ys),l=ii.lengthSq(),d=Math.abs(1-o*o);let u,h,f,p;if(d>0)if(u=o*c-a,h=o*a-c,p=s*d,u>=0)if(h>=-p)if(h<=p){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-p?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=p?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cr).addScaledVector(Ys,h),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),d>=0?(s=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){lr.subVectors(e,t),qs.subVectors(n,t),hr.crossVectors(lr,qs);let o=this.direction.dot(hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(qs.crossVectors(ii,qs));if(c<0)return null;const l=a*this.direction.dot(lr.cross(ii));if(l<0||c+l>o)return null;const d=-a*ii.dot(hr);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class St extends Kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Sc=new Me,mi=new Oa,js=new Is,Ec=new O,$s=new O,Ks=new O,Zs=new O,dr=new O,Js=new O,bc=new O,Qs=new O;class D extends De{constructor(t=new Se,e=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(dr.fromBufferAttribute(u,t),o?Js.addScaledVector(dr,d):Js.addScaledVector(dr.sub(e),d))}e.add(Js)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),mi.copy(t.ray).recast(t.near),!(js.containsPoint(mi.origin)===!1&&(mi.intersectSphere(js,Ec)===null||mi.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(Sc.copy(s).invert(),mi.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,C=w;M<C;M+=3){const b=a.getX(M),R=a.getX(M+1),x=a.getX(M+2);i=to(this,g,t,n,l,d,u,b,R,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);i=to(this,o,t,n,l,d,u,_,w,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,C=w;M<C;M+=3){const b=M,R=M+1,x=M+2;i=to(this,g,t,n,l,d,u,b,R,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=m,w=m+1,M=m+2;i=to(this,o,t,n,l,d,u,_,w,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Pd(r,t,e,n,i,s,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Cn,a),c===null)return null;Qs.copy(a),Qs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:r}}function to(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,$s),r.getVertexPosition(c,Ks),r.getVertexPosition(l,Zs);const d=Pd(r,t,e,n,$s,Ks,Zs,bc);if(d){const u=new O;rn.getBarycoord(bc,$s,Ks,Zs,u),i&&(d.uv=rn.getInterpolatedAttribute(i,a,c,l,u,new Kt)),s&&(d.uv1=rn.getInterpolatedAttribute(s,a,c,l,u,new Kt)),o&&(d.normal=rn.getInterpolatedAttribute(o,a,c,l,u,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};rn.getNormal($s,Ks,Zs,h.normal),d.face=h,d.barycoord=u}return d}class Id extends We{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Be,d=Be,u,h){super(null,o,a,c,l,d,i,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ur=new O,Dd=new O,Ld=new Jt;let yi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ur.subVectors(n,e).cross(Dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ld.getNormalMatrix(t),i=this.coplanarPoint(ur).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const gi=new Is,Nd=new Kt(.5,.5),eo=new O;class Ba{constructor(t=new yi,e=new yi,n=new yi,i=new yi,s=new yi,o=new yi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],f=s[7],p=s[8],v=s[9],m=s[10],g=s[11],_=s[12],w=s[13],M=s[14],C=s[15];if(i[0].setComponents(l-o,f-d,g-p,C-_).normalize(),i[1].setComponents(l+o,f+d,g+p,C+_).normalize(),i[2].setComponents(l+a,f+u,g+v,C+w).normalize(),i[3].setComponents(l-a,f-u,g-v,C-w).normalize(),n)i[4].setComponents(c,h,m,M).normalize(),i[5].setComponents(l-c,f-h,g-m,C-M).normalize();else if(i[4].setComponents(l-c,f-h,g-m,C-M).normalize(),e===bn)i[5].setComponents(l+c,f+h,g+m,C+M).normalize();else if(e===As)i[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=Nd.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(eo.x=i.normal.x>0?t.max.x:t.min.x,eo.y=i.normal.y>0?t.max.y:t.min.y,eo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class za extends Kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ao=new O,Co=new O,Tc=new Me,ps=new Oa,no=new Is,fr=new O,Ac=new O;class _a extends De{constructor(t=new Se,e=new za){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ao.fromBufferAttribute(e,i-1),Co.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ao.distanceTo(Co);t.setAttribute("lineDistance",new we(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,t.ray.intersectsSphere(no)===!1)return;Tc.copy(i).invert(),ps.copy(t.ray).applyMatrix4(Tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=l){const g=d.getX(v),_=d.getX(v+1),w=io(this,t,ps,c,g,_,v);w&&e.push(w)}if(this.isLineLoop){const v=d.getX(p-1),m=d.getX(f),g=io(this,t,ps,c,v,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=l){const g=io(this,t,ps,c,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){const v=io(this,t,ps,c,p-1,f,p-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function io(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(Ao.fromBufferAttribute(a,i),Co.fromBufferAttribute(a,s),e.distanceSqToSegment(Ao,Co,fr,Ac)>n)return;fr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(fr);if(!(l<t.near||l>t.far))return{distance:l,point:Ac.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class os extends Kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cc=new Me,xa=new Oa,so=new Is,oo=new O;class Ai extends De{constructor(t=new Se,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=s,t.ray.intersectsSphere(so)===!1)return;Cc.copy(i).invert(),xa.copy(t.ray).applyMatrix4(Cc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=h,v=f;p<v;p++){const m=l.getX(p);oo.fromBufferAttribute(u,m),Rc(oo,m,c,i,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=h,v=f;p<v;p++)oo.fromBufferAttribute(u,p),Rc(oo,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rc(r,t,e,n,i,s,o){const a=xa.distanceSqToPoint(r);if(a<e){const c=new O;xa.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class th extends We{constructor(t=[],e=Ti,n,i,s,o,a,c,l,d){super(t,e,n,i,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ud extends We{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rs extends We{constructor(t,e,n=Rn,i,s,o,a=Be,c=Be,l,d=$n,u=1){if(d!==$n&&d!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,i,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ua(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fd extends Rs{constructor(t,e=Rn,n=Ti,i,s,o=Be,a=Be,c,l=$n){const d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,n,i,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class eh extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ht extends Se{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],u=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2));function p(v,m,g,_,w,M,C,b,R,x,T){const G=M/R,I=C/x,z=M/2,L=C/2,F=b/2,U=R+1,N=x+1;let k=0,$=0;const q=new O;for(let st=0;st<N;st++){const ot=st*I-L;for(let K=0;K<U;K++){const _t=K*G-z;q[v]=_t*_,q[m]=ot*w,q[g]=F,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=b>0?1:-1,d.push(q.x,q.y,q.z),u.push(K/R),u.push(1-st/x),k+=1}}for(let st=0;st<x;st++)for(let ot=0;ot<R;ot++){const K=h+ot+U*st,_t=h+ot+U*(st+1),Zt=h+(ot+1)+U*(st+1),Yt=h+(ot+1)+U*st;c.push(K,_t,Yt),c.push(_t,Zt,Yt),$+=6}a.addGroup(f,$,T),f+=$,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Do extends Se{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new O,d=new Kt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/t+1)/2,d.y=(o[h+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Se{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const d=[],u=[],h=[],f=[];let p=0;const v=[],m=n/2;let g=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(f,2));function _(){const M=new O,C=new O;let b=0;const R=(e-t)/n;for(let x=0;x<=s;x++){const T=[],G=x/s,I=G*(e-t)+t;for(let z=0;z<=i;z++){const L=z/i,F=L*c+a,U=Math.sin(F),N=Math.cos(F);C.x=I*U,C.y=-G*n+m,C.z=I*N,u.push(C.x,C.y,C.z),M.set(U,R,N).normalize(),h.push(M.x,M.y,M.z),f.push(L,1-G),T.push(p++)}v.push(T)}for(let x=0;x<i;x++)for(let T=0;T<s;T++){const G=v[T][x],I=v[T+1][x],z=v[T+1][x+1],L=v[T][x+1];(t>0||T!==0)&&(d.push(G,I,L),b+=3),(e>0||T!==s-1)&&(d.push(I,z,L),b+=3)}l.addGroup(g,b,0),g+=b}function w(M){const C=p,b=new Kt,R=new O;let x=0;const T=M===!0?t:e,G=M===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*G,0),h.push(0,G,0),f.push(.5,.5),p++;const I=p;for(let z=0;z<=i;z++){const F=z/i*c+a,U=Math.cos(F),N=Math.sin(F);R.x=T*N,R.y=m*G,R.z=T*U,u.push(R.x,R.y,R.z),h.push(0,G,0),b.x=U*.5+.5,b.y=N*.5*G+.5,f.push(b.x,b.y),p++}for(let z=0;z<i;z++){const L=C+z,F=I+z;M===!0?d.push(F,F+1,L):d.push(F+1,F,L),x+=3}l.addGroup(g,x,M===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class be extends Qt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new be(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,u=t/a,h=e/c,f=[],p=[],v=[],m=[];for(let g=0;g<d;g++){const _=g*h-o;for(let w=0;w<l;w++){const M=w*u-s;p.push(M,-_,0),v.push(0,0,1),m.push(w/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){const w=_+l*g,M=_+l*(g+1),C=_+1+l*(g+1),b=_+1+l*g;f.push(w,M,b),f.push(M,C,b)}this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ka extends Se{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],d=[];let u=t;const h=(e-t)/i,f=new O,p=new Kt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const g=s+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,d.push(p.x,p.y)}u+=h}for(let v=0;v<i;v++){const m=v*(n+1);for(let g=0;g<n;g++){const _=g+m,w=_,M=_+n+1,C=_+n+2,b=_+1;a.push(w,M,b),a.push(M,C,b)}}this.setIndex(a),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ct extends Se{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],u=new O,h=new O,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const _=[],w=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&c===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const b=C/e;u.x=-t*Math.cos(i+b*s)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+b*s)*Math.sin(o+w*a),p.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(b+M,1-w),_.push(l++)}d.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const w=d[g][_+1],M=d[g][_],C=d[g+1][_],b=d[g+1][_+1];(g!==0||o>0)&&f.push(w,M,b),(g!==n-1||c<Math.PI)&&f.push(M,C,b)}this.setIndex(f),this.setAttribute("position",new we(p,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ct(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ke extends Se{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],d=[],u=[],h=new O,f=new O,p=new O;for(let v=0;v<=n;v++){const m=o+v/n*a;for(let g=0;g<=i;g++){const _=g/i*s;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(f,h).normalize(),d.push(p.x,p.y,p.z),u.push(g/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,_=(i+1)*(v-1)+m-1,w=(i+1)*(v-1)+m,M=(i+1)*v+m;c.push(g,_,M),c.push(_,w,M)}this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ns(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(r){const t={};for(let e=0;e<r.length;e++){const n=ns(r[e]);for(const i in n)t[i]=n[i]}return t}function Od(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function nh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Bd={clone:ns,merge:qe};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=Od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gd extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nt extends Kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ce extends Kn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hd extends Kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vd extends Kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ga extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const pr=new Me,Pc=new O,Ic=new O;class ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ic),e.updateMatrixWorld(),pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pr,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===As||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ro=new O,ao=new ss,vn=new O;class sh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ro,ao,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,vn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ro,ao,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,ao,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const si=new O,Dc=new Kt,Lc=new Kt;class tn extends sh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Dc,Lc),e.subVectors(Lc,Dc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wd extends ih{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class qn extends Ga{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ha extends sh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xd extends ih{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yd extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Xd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class qd extends Ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xi=-90,Yi=1;class jd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Xi,Yi,t,e);i.layers=this.layers,this.add(i);const s=new tn(Xi,Yi,t,e);s.layers=this.layers,this.add(s);const o=new tn(Xi,Yi,t,e);o.layers=this.layers,this.add(o);const a=new tn(Xi,Yi,t,e);a.layers=this.layers,this.add(a);const c=new tn(Xi,Yi,t,e);c.layers=this.layers,this.add(c);const l=new tn(Xi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class $d extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Nc(r,t,e,n){const i=Kd(n);switch(e){case Vl:return r*t;case Xl:return r*t/i.components*i.byteLength;case Ra:return r*t/i.components*i.byteLength;case ts:return r*t*2/i.components*i.byteLength;case Pa:return r*t*2/i.components*i.byteLength;case Wl:return r*t*3/i.components*i.byteLength;case fn:return r*t*4/i.components*i.byteLength;case Ia:return r*t*4/i.components*i.byteLength;case go:case vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _o:case xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case zr:case Gr:return Math.max(r,16)*Math.max(t,8)/4;case Br:case kr:return Math.max(r,8)*Math.max(t,8)/2;case Hr:case Vr:case Xr:case Yr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Wr:case qr:case jr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ta:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ea:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ia:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case sa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case oa:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ca:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case la:case ha:case da:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ua:case fa:return Math.ceil(r/4)*Math.ceil(t/4)*8;case pa:case ma:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kd(r){switch(r){case en:case zl:return{byteLength:1,components:1};case bs:case kl:case jn:return{byteLength:2,components:1};case Aa:case Ca:return{byteLength:2,components:4};case Rn:case Ta:case En:return{byteLength:4,components:1};case Gl:case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Zd(r){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,u=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const d=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){const p=u[h],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];r.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ku=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Jd,alphahash_pars_fragment:Qd,alphamap_fragment:tu,alphamap_pars_fragment:eu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:su,aomap_pars_fragment:ou,batching_pars_vertex:ru,batching_vertex:au,begin_vertex:cu,beginnormal_vertex:lu,bsdfs:hu,iridescence_fragment:du,bumpmap_pars_fragment:uu,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:vu,color_pars_fragment:_u,color_pars_vertex:xu,color_vertex:yu,common:Mu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Su,displacementmap_pars_vertex:Eu,displacementmap_vertex:bu,emissivemap_fragment:Tu,emissivemap_pars_fragment:Au,colorspace_fragment:Cu,colorspace_pars_fragment:Ru,envmap_fragment:Pu,envmap_common_pars_fragment:Iu,envmap_pars_fragment:Du,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Wu,envmap_vertex:Nu,fog_vertex:Uu,fog_pars_vertex:Fu,fog_fragment:Ou,fog_pars_fragment:Bu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:ku,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Vu,lights_toon_fragment:Xu,lights_toon_pars_fragment:Yu,lights_phong_fragment:qu,lights_phong_pars_fragment:ju,lights_physical_fragment:$u,lights_physical_pars_fragment:Ku,lights_fragment_begin:Zu,lights_fragment_maps:Ju,lights_fragment_end:Qu,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:sf,map_fragment:of,map_pars_fragment:rf,map_particle_fragment:af,map_particle_pars_fragment:cf,metalnessmap_fragment:lf,metalnessmap_pars_fragment:hf,morphinstance_vertex:df,morphcolor_vertex:uf,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:vf,normal_pars_fragment:_f,normal_pars_vertex:xf,normal_vertex:yf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:bf,opaque_fragment:Tf,packing:Af,premultiplied_alpha_fragment:Cf,project_vertex:Rf,dithering_fragment:Pf,dithering_pars_fragment:If,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Of,skinbase_vertex:Bf,skinning_pars_vertex:zf,skinning_vertex:kf,skinnormal_vertex:Gf,specularmap_fragment:Hf,specularmap_pars_fragment:Vf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Xf,transmission_fragment:Yf,transmission_pars_fragment:qf,uv_pars_fragment:jf,uv_pars_vertex:$f,uv_vertex:Kf,worldpos_vertex:Zf,background_vert:Jf,background_frag:Qf,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:op,distance_vert:rp,distance_frag:ap,equirect_vert:cp,equirect_frag:lp,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:up,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:vp,meshnormal_vert:_p,meshnormal_frag:xp,meshphong_vert:yp,meshphong_frag:Mp,meshphysical_vert:wp,meshphysical_frag:Sp,meshtoon_vert:Ep,meshtoon_frag:bp,points_vert:Tp,points_frag:Ap,shadow_vert:Cp,shadow_frag:Rp,sprite_vert:Pp,sprite_frag:Ip},ft={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},wn={basic:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:qe([ft.points,ft.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:qe([ft.common,ft.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:qe([ft.sprite,ft.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:qe([ft.common,ft.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:qe([ft.lights,ft.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};wn.physical={uniforms:qe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const co={r:0,b:0,g:0},vi=new mn,Dp=new Me;function Lp(r,t,e,n,i,s){const o=new Ut(0);let a=i===!0?0:1,c,l,d=null,u=0,h=null;function f(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){const M=_.backgroundBlurriness>0;w=t.get(w,M)}return w}function p(_){let w=!1;const M=f(_);M===null?m(o,a):M&&M.isColor&&(m(M,1),w=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(_,w){const M=f(w);M&&(M.isCubeTexture||M.mapping===Io)?(l===void 0&&(l=new D(new Ht(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ns(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),vi.copy(w.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dp.makeRotationFromEuler(vi)),l.material.toneMapped=ae.getTransfer(M.colorSpace)!==ue,(d!==M||u!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new D(new Yn(2,2),new Pn({name:"BackgroundMaterial",uniforms:ns(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ae.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,h=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function m(_,w){_.getRGB(co,nh(r)),e.buffers.color.setClear(co.r,co.g,co.b,w,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:v,dispose:g}}function Np(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(I,z,L,F,U){let N=!1;const k=u(I,F,L,z);s!==k&&(s=k,l(s.object)),N=f(I,F,L,U),N&&p(I,F,L,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(I,z,L,F),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return r.createVertexArray()}function l(I){return r.bindVertexArray(I)}function d(I){return r.deleteVertexArray(I)}function u(I,z,L,F){const U=F.wireframe===!0;let N=n[z.id];N===void 0&&(N={},n[z.id]=N);const k=I.isInstancedMesh===!0?I.id:0;let $=N[k];$===void 0&&($={},N[k]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let st=q[U];return st===void 0&&(st=h(c()),q[U]=st),st}function h(I){const z=[],L=[],F=[];for(let U=0;U<e;U++)z[U]=0,L[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:L,attributeDivisors:F,object:I,attributes:{},index:null}}function f(I,z,L,F){const U=s.attributes,N=z.attributes;let k=0;const $=L.getAttributes();for(const q in $)if($[q].location>=0){const ot=U[q];let K=N[q];if(K===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),ot===void 0||ot.attribute!==K||K&&ot.data!==K.data)return!0;k++}return s.attributesNum!==k||s.index!==F}function p(I,z,L,F){const U={},N=z.attributes;let k=0;const $=L.getAttributes();for(const q in $)if($[q].location>=0){let ot=N[q];ot===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor));const K={};K.attribute=ot,ot&&ot.data&&(K.data=ot.data),U[q]=K,k++}s.attributes=U,s.attributesNum=k,s.index=F}function v(){const I=s.newAttributes;for(let z=0,L=I.length;z<L;z++)I[z]=0}function m(I){g(I,0)}function g(I,z){const L=s.newAttributes,F=s.enabledAttributes,U=s.attributeDivisors;L[I]=1,F[I]===0&&(r.enableVertexAttribArray(I),F[I]=1),U[I]!==z&&(r.vertexAttribDivisor(I,z),U[I]=z)}function _(){const I=s.newAttributes,z=s.enabledAttributes;for(let L=0,F=z.length;L<F;L++)z[L]!==I[L]&&(r.disableVertexAttribArray(L),z[L]=0)}function w(I,z,L,F,U,N,k){k===!0?r.vertexAttribIPointer(I,z,L,U,N):r.vertexAttribPointer(I,z,L,F,U,N)}function M(I,z,L,F){v();const U=F.attributes,N=L.getAttributes(),k=z.defaultAttributeValues;for(const $ in N){const q=N[$];if(q.location>=0){let st=U[$];if(st===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),st!==void 0){const ot=st.normalized,K=st.itemSize,_t=t.get(st);if(_t===void 0)continue;const Zt=_t.buffer,Yt=_t.type,Z=_t.bytesPerElement,it=Yt===r.INT||Yt===r.UNSIGNED_INT||st.gpuType===Ta;if(st.isInterleavedBufferAttribute){const nt=st.data,Ot=nt.stride,At=st.offset;if(nt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<q.locationSize;Bt++)g(q.location+Bt,nt.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Bt=0;Bt<q.locationSize;Bt++)m(q.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let Bt=0;Bt<q.locationSize;Bt++)w(q.location+Bt,K/q.locationSize,Yt,ot,Ot*Z,(At+K/q.locationSize*Bt)*Z,it)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)g(q.location+nt,st.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<q.locationSize;nt++)m(q.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let nt=0;nt<q.locationSize;nt++)w(q.location+nt,K/q.locationSize,Yt,ot,K*Z,K/q.locationSize*nt*Z,it)}}else if(k!==void 0){const ot=k[$];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(q.location,ot);break;case 3:r.vertexAttrib3fv(q.location,ot);break;case 4:r.vertexAttrib4fv(q.location,ot);break;default:r.vertexAttrib1fv(q.location,ot)}}}}_()}function C(){T();for(const I in n){const z=n[I];for(const L in z){const F=z[L];for(const U in F){const N=F[U];for(const k in N)d(N[k].object),delete N[k];delete F[U]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const z=n[I.id];for(const L in z){const F=z[L];for(const U in F){const N=F[U];for(const k in N)d(N[k].object),delete N[k];delete F[U]}}delete n[I.id]}function R(I){for(const z in n){const L=n[z];for(const F in L){const U=L[F];if(U[I.id]===void 0)continue;const N=U[I.id];for(const k in N)d(N[k].object),delete N[k];delete U[I.id]}}}function x(I){for(const z in n){const L=n[z],F=I.isInstancedMesh===!0?I.id:0,U=L[F];if(U!==void 0){for(const N in U){const k=U[N];for(const $ in k)d(k[$].object),delete k[$];delete U[N]}delete L[F],Object.keys(L).length===0&&delete n[z]}}}function T(){G(),o=!0,s!==i&&(s=i,l(s.object))}function G(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:G,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Up(r,t,e){let n;function i(l){n=l}function s(l,d){r.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,u){u!==0&&(r.drawArraysInstanced(n,l,d,u),e.update(d,n,u))}function a(l,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let f=0;for(let p=0;p<u;p++)f+=d[p];e.update(f,n,1)}function c(l,d,u,h){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],d[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=d[v]*h[v];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==fn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!x)}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(Xt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:M,maxSamples:C,samples:b}}function Op(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new yi,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?d(null):l();else{const _=s?0:n,w=_*4;let M=g.clippingState||null;c.value=M,M=d(p,h,w,f);for(let C=0;C!==w;++C)M[C]=e[C];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,f,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,p!==!0||m===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,M=f;w!==v;++w,M+=4)o.copy(u[w]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const ci=4,Uc=[.125,.215,.35,.446,.526,.582],wi=20,Bp=256,ms=new Ha,Fc=new Ut;let mr=null,gr=0,vr=0,_r=!1;const zp=new O;class Oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=zp}=s;mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mr,gr,vr),this._renderer.xr.enabled=_r,t.scissorTest=!1,qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mr=this._renderer.getRenderTarget(),gr=this._renderer.getActiveCubeFace(),vr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:jn,format:fn,colorSpace:es,depthBuffer:!1},i=Bc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kp(s)),this._blurMaterial=Hp(s,t,e),this._ggxMaterial=Gp(s,t,e)}return i}_compileMaterial(t){const e=new D(new Se,t);this._renderer.compile(e,ms)}_sceneToCubeUV(t,e,n,i,s){const c=new tn(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fc),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new D(new Ht,new St({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let g=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,g=!0):(m.color.copy(Fc),g=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[w],s.y,s.z)):M===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[w]));const C=this._cubeSize;qi(i,M*C,w>2?C:0,C,C),u.setRenderTarget(i),g&&u.render(v,c),u.render(t,c)}u.toneMapping=f,u.autoClear=h,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ti||t.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;qi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ms)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,f=u*h,{_lodMax:p}=this,v=this._sizeLods[n],m=3*v*(n>p-ci?n-p+ci:0),g=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,qi(s,m,g,3*v,2*v),i.setRenderTarget(s),i.render(a,ms),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=p-n,qi(t,m,g,3*v,2*v),i.setRenderTarget(t),i.render(a,ms)}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&re("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[i];u.material=l;const h=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*wi-1),v=s/p,m=isFinite(s)?1+Math.floor(d*v):wi;m>wi&&Xt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const g=[];let _=0;for(let R=0;R<wi;++R){const x=R/v,T=Math.exp(-x*x/2);g.push(T),R===0?_+=T:R<m&&(_+=2*T)}for(let R=0;R<g.length;R++)g[R]=g[R]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=p,h.mipInt.value=w-n;const M=this._sizeLods[i],C=3*M*(i>w-ci?i-w+ci:0),b=4*(this._cubeSize-M);qi(e,C,b,3*M,2*M),c.setRenderTarget(e),c.render(u,ms)}}function kp(r){const t=[],e=[],n=[];let i=r;const s=r-ci+1+Uc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ci?c=Uc[o-r+ci-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,p=6,v=3,m=2,g=1,_=new Float32Array(v*p*f),w=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,x=b>2?0:-1,T=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];_.set(T,v*p*b),w.set(h,m*p*b);const G=[b,b,b,b,b,b];M.set(G,g*p*b)}const C=new Se;C.setAttribute("position",new Xe(_,v)),C.setAttribute("uv",new Xe(w,m)),C.setAttribute("faceIndex",new Xe(M,g)),n.push(new D(C,null)),i>ci&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Bc(r,t,e){const n=new An(r,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Gp(r,t,e){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Hp(r,t,e){const n=new Float32Array(wi),i=new O(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function kc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class rh extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new th(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ht(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Wn});s.uniforms.tEquirect.value=e;const o=new D(i,s),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Ve),new jd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}function Vp(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===zo||f===ko)if(t.has(h)){const p=t.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new rh(p.height);return v.fromEquirectangularTexture(r,h),t.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,p=f===zo||f===ko,v=f===Ti||f===Qi;if(p||v){let m=e.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Oc(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&c(_)?(n===null&&(n=new Oc(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,f){return f===zo?h.mapping=Ti:f===ko&&(h.mapping=Qi),h}function c(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Wp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&bo("WebGLRenderer: "+n+" extension not supported."),i}}}function Xp(r,t,e,n){const i={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)t.update(h[f],r.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,p=u.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let w=0,M=_.length;w<M;w+=3){const C=_[w+0],b=_[w+1],R=_[w+2];h.push(C,b,b,R,R,C)}}else{const _=p.array;v=p.version;for(let w=0,M=_.length/3-1;w<M;w+=3){const C=w+0,b=w+1,R=w+2;h.push(C,b,b,R,R,C)}}const m=new(p.count>=65535?Zl:Kl)(h,1);m.version=v;const g=s.get(u);g&&t.remove(g),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function Yp(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){r.drawElements(n,f,s,h*o),e.update(f,n,1)}function l(h,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,h*o,p),e.update(f,n,p))}function d(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function u(h,f,p,v){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)l(h[g]/o,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,v,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_]*v[_];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function qp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jp(r,t,e){const n=new WeakMap,i=new Te;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let G=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",G)};var f=G;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*b*4*u),x=new ql(R,C,b,u);x.type=En,x.needsUpdate=!0;const T=M*4;for(let I=0;I<u;I++){const z=g[I],L=_[I],F=w[I],U=C*b*4*I;for(let N=0;N<z.count;N++){const k=N*T;p===!0&&(i.fromBufferAttribute(z,N),R[U+k+0]=i.x,R[U+k+1]=i.y,R[U+k+2]=i.z,R[U+k+3]=0),v===!0&&(i.fromBufferAttribute(L,N),R[U+k+4]=i.x,R[U+k+5]=i.y,R[U+k+6]=i.z,R[U+k+7]=0),m===!0&&(i.fromBufferAttribute(F,N),R[U+k+8]=i.x,R[U+k+9]=i.y,R[U+k+10]=i.z,R[U+k+11]=F.itemSize===4?i.w:1)}}h={count:u,texture:x,size:new Kt(C,b)},n.set(a,h),a.addEventListener("dispose",G)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const v=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function $p(r,t,e,n,i){let s=new WeakMap;function o(l){const d=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==d&&(t.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function a(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}const Kp={[Il]:"LINEAR_TONE_MAPPING",[Dl]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[Nl]:"ACES_FILMIC_TONE_MAPPING",[Fl]:"AGX_TONE_MAPPING",[Ol]:"NEUTRAL_TONE_MAPPING",[Ul]:"CUSTOM_TONE_MAPPING"};function Zp(r,t,e,n,i){const s=new An(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),o=new An(t,e,{type:jn,depthBuffer:!1,stencilBuffer:!1}),a=new Se;a.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new we([0,2,0,0,2,0],2));const c=new Gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new D(a,c),d=new Ha(-1,1,1,-1,0,1);let u=null,h=null,f=!1,p,v=null,m=[],g=!1;this.setSize=function(_,w){s.setSize(_,w),o.setSize(_,w);for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(_,w)}},this.setEffects=function(_){m=_,g=m.length>0&&m[0].isRenderPass===!0;const w=s.width,M=s.height;for(let C=0;C<m.length;C++){const b=m[C];b.setSize&&b.setSize(w,M)}},this.begin=function(_,w){if(f||_.toneMapping===Tn&&m.length===0)return!1;if(v=w,w!==null){const M=w.width,C=w.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return g===!1&&_.setRenderTarget(s),p=_.toneMapping,_.toneMapping=Tn,!0},this.hasRenderPass=function(){return g},this.end=function(_,w){_.toneMapping=p,f=!0;let M=s,C=o;for(let b=0;b<m.length;b++){const R=m[b];if(R.enabled!==!1&&(R.render(_,C,M,w),R.needsSwap!==!1)){const x=M;M=C,C=x}}if(u!==_.outputColorSpace||h!==_.toneMapping){u=_.outputColorSpace,h=_.toneMapping,c.defines={},ae.getTransfer(u)===ue&&(c.defines.SRGB_TRANSFER="");const b=Kp[h];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(v),_.render(l,d),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const ah=new We,ya=new Rs(1,1),ch=new ql,lh=new gd,hh=new th,Gc=[],Hc=[],Vc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function rs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Gc[i];if(s===void 0&&(s=new Float32Array(i),Gc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Le(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function No(r,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Jp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Qp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2fv(this.addr,t),Ne(e,t)}}function tm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;r.uniform3fv(this.addr,t),Ne(e,t)}}function em(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4fv(this.addr,t),Ne(e,t)}}function nm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;Xc.set(n),r.uniformMatrix2fv(this.addr,!1,Xc),Ne(e,n)}}function im(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;Wc.set(n),r.uniformMatrix3fv(this.addr,!1,Wc),Ne(e,n)}}function sm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;Vc.set(n),r.uniformMatrix4fv(this.addr,!1,Vc),Ne(e,n)}}function om(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function rm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2iv(this.addr,t),Ne(e,t)}}function am(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3iv(this.addr,t),Ne(e,t)}}function cm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4iv(this.addr,t),Ne(e,t)}}function lm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;r.uniform2uiv(this.addr,t),Ne(e,t)}}function dm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;r.uniform3uiv(this.addr,t),Ne(e,t)}}function um(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;r.uniform4uiv(this.addr,t),Ne(e,t)}}function fm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ya.compareFunction=e.isReversedDepthBuffer()?Na:La,s=ya):s=ah,e.setTexture2D(t||s,i)}function pm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lh,i)}function mm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hh,i)}function gm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ch,i)}function vm(r){switch(r){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return om;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return hm;case 36295:return dm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function _m(r,t){r.uniform1fv(this.addr,t)}function xm(r,t){const e=rs(t,this.size,2);r.uniform2fv(this.addr,e)}function ym(r,t){const e=rs(t,this.size,3);r.uniform3fv(this.addr,e)}function Mm(r,t){const e=rs(t,this.size,4);r.uniform4fv(this.addr,e)}function wm(r,t){const e=rs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Sm(r,t){const e=rs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Em(r,t){const e=rs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function bm(r,t){r.uniform1iv(this.addr,t)}function Tm(r,t){r.uniform2iv(this.addr,t)}function Am(r,t){r.uniform3iv(this.addr,t)}function Cm(r,t){r.uniform4iv(this.addr,t)}function Rm(r,t){r.uniform1uiv(this.addr,t)}function Pm(r,t){r.uniform2uiv(this.addr,t)}function Im(r,t){r.uniform3uiv(this.addr,t)}function Dm(r,t){r.uniform4uiv(this.addr,t)}function Lm(r,t,e){const n=this.cache,i=t.length,s=No(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ya:o=ah;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Nm(r,t,e){const n=this.cache,i=t.length,s=No(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||lh,s[o])}function Um(r,t,e){const n=this.cache,i=t.length,s=No(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||hh,s[o])}function Fm(r,t,e){const n=this.cache,i=t.length,s=No(e,i);Le(n,s)||(r.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ch,s[o])}function Om(r){switch(r){case 5126:return _m;case 35664:return xm;case 35665:return ym;case 35666:return Mm;case 35674:return wm;case 35675:return Sm;case 35676:return Em;case 5124:case 35670:return bm;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Pm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Fm}}class Bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}}class zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}}class km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function Yc(r,t){r.seq.push(t),r.map[t.id]=t}function Gm(r,t,e){const n=r.name,i=n.length;for(xr.lastIndex=0;;){const s=xr.exec(n),o=xr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yc(e,l===void 0?new Bm(a,r,t):new zm(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new km(a),Yc(e,u)),e=u}}}class yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Gm(a,c,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function qc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Hm=37297;let Vm=0;function Wm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const jc=new Jt;function Xm(r){ae._getMatrix(jc,ae.workingColorSpace,r);const t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case wo:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $c(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Wm(r.getShaderSource(t),a)}else return s}function Ym(r,t){const e=Xm(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const qm={[Il]:"Linear",[Dl]:"Reinhard",[Ll]:"Cineon",[Nl]:"ACESFilmic",[Fl]:"AgX",[Ol]:"Neutral",[Ul]:"Custom"};function jm(r,t){const e=qm[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lo=new O;function $m(){ae.getLuminanceCoefficients(lo);const r=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function Zm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ws(r){return r!==""}function Kc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(r){return r.replace(Qm,e0)}const t0=new Map;function e0(r,t){let e=ee[t];if(e===void 0){const n=t0.get(t);if(n!==void 0)e=ee[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(r){return r.replace(n0,i0)}function i0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const s0={[Ss]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function o0(r){return s0[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r0={[Ti]:"ENVMAP_TYPE_CUBE",[Qi]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function a0(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":r0[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const c0={[Qi]:"ENVMAP_MODE_REFRACTION"};function l0(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":c0[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h0={[ba]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[Kh]:"ENVMAP_BLENDING_ADD"};function d0(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":h0[r.combine]||"ENVMAP_BLENDING_NONE"}function u0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function f0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=o0(e),l=a0(e),d=l0(e),u=d0(e),h=u0(e),f=Km(e),p=Zm(s),v=i.createProgram();let m,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ws).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ws).join(`
`),g.length>0&&(g+=`
`)):(m=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),g=[Qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Tn?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Ym("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=Ma(o),o=Kc(o,e),o=Zc(o,e),a=Ma(a),a=Kc(a,e),a=Zc(a,e),o=Jc(o),a=Jc(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=_+m+o,M=_+g+a,C=qc(i,i.VERTEX_SHADER,w),b=qc(i,i.FRAGMENT_SHADER,M);i.attachShader(v,C),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(I){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(v)||"",L=i.getShaderInfoLog(C)||"",F=i.getShaderInfoLog(b)||"",U=z.trim(),N=L.trim(),k=F.trim();let $=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,b);else{const st=$c(i,C,"vertex"),ot=$c(i,b,"fragment");re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+st+`
`+ot)}else U!==""?Xt("WebGLProgram: Program Info Log:",U):(N===""||k==="")&&(q=!1);q&&(I.diagnostics={runnable:$,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:g}})}i.deleteShader(C),i.deleteShader(b),x=new yo(i,v),T=Jm(i,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(v,Hm)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=b,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g0(t),e.set(t,n)),n}}class g0{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}}function v0(r,t,e,n,i,s){const o=new jl,a=new m0,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,G,I,z){const L=I.fog,F=z.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||U,N),$=k&&k.mapping===Io?k.image.height:null,q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const st=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=st!==void 0?st.length:0;let K=0;F.morphAttributes.position!==void 0&&(K=1),F.morphAttributes.normal!==void 0&&(K=2),F.morphAttributes.color!==void 0&&(K=3);let _t,Zt,Yt,Z;if(q){const de=wn[q];_t=de.vertexShader,Zt=de.fragmentShader}else _t=x.vertexShader,Zt=x.fragmentShader,a.update(x),Yt=a.getVertexShaderID(x),Z=a.getFragmentShaderID(x);const it=r.getRenderTarget(),nt=r.state.buffers.depth.getReversed(),Ot=z.isInstancedMesh===!0,At=z.isBatchedMesh===!0,Bt=!!x.map,fe=!!x.matcap,te=!!k,Dt=!!x.aoMap,zt=!!x.lightMap,Gt=!!x.bumpMap,jt=!!x.normalMap,B=!!x.displacementMap,pe=!!x.emissiveMap,kt=!!x.metalnessMap,Wt=!!x.roughnessMap,gt=x.anisotropy>0,P=x.clearcoat>0,y=x.dispersion>0,V=x.iridescence>0,tt=x.sheen>0,et=x.transmission>0,Q=gt&&!!x.anisotropyMap,Et=P&&!!x.clearcoatMap,dt=P&&!!x.clearcoatNormalMap,Ft=P&&!!x.clearcoatRoughnessMap,Vt=V&&!!x.iridescenceMap,rt=V&&!!x.iridescenceThicknessMap,lt=tt&&!!x.sheenColorMap,bt=tt&&!!x.sheenRoughnessMap,Ct=!!x.specularMap,vt=!!x.specularColorMap,ne=!!x.specularIntensityMap,H=et&&!!x.transmissionMap,ut=et&&!!x.thicknessMap,ht=!!x.gradientMap,yt=!!x.alphaMap,at=x.alphaTest>0,J=!!x.alphaHash,Tt=!!x.extensions;let qt=Tn;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(qt=r.toneMapping);const xe={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:_t,fragmentShader:Zt,defines:x.defines,customVertexShaderID:Yt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:At,batchingColor:At&&z._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&z.instanceColor!==null,instancingMorph:Ot&&z.morphTexture!==null,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:es,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:fe,envMap:te,envMapMode:te&&k.mapping,envMapCubeUVHeight:$,aoMap:Dt,lightMap:zt,bumpMap:Gt,normalMap:jt,displacementMap:B,emissiveMap:pe,normalMapObjectSpace:jt&&x.normalMapType===Qh,normalMapTangentSpace:jt&&x.normalMapType===Da,metalnessMap:kt,roughnessMap:Wt,anisotropy:gt,anisotropyMap:Q,clearcoat:P,clearcoatMap:Et,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ft,dispersion:y,iridescence:V,iridescenceMap:Vt,iridescenceThicknessMap:rt,sheen:tt,sheenColorMap:lt,sheenRoughnessMap:bt,specularMap:Ct,specularColorMap:vt,specularIntensityMap:ne,transmission:et,transmissionMap:H,thicknessMap:ut,gradientMap:ht,opaque:x.transparent===!1&&x.blending===Ki&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:at,alphaHash:J,combine:x.combine,mapUv:Bt&&p(x.map.channel),aoMapUv:Dt&&p(x.aoMap.channel),lightMapUv:zt&&p(x.lightMap.channel),bumpMapUv:Gt&&p(x.bumpMap.channel),normalMapUv:jt&&p(x.normalMap.channel),displacementMapUv:B&&p(x.displacementMap.channel),emissiveMapUv:pe&&p(x.emissiveMap.channel),metalnessMapUv:kt&&p(x.metalnessMap.channel),roughnessMapUv:Wt&&p(x.roughnessMap.channel),anisotropyMapUv:Q&&p(x.anisotropyMap.channel),clearcoatMapUv:Et&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ct&&p(x.specularMap.channel),specularColorMapUv:vt&&p(x.specularColorMap.channel),specularIntensityMapUv:ne&&p(x.specularIntensityMap.channel),transmissionMapUv:H&&p(x.transmissionMap.channel),thicknessMapUv:ut&&p(x.thicknessMap.channel),alphaMapUv:yt&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(jt||gt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(Bt||yt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:qt,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:pe&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Tt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&x.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)T.push(G),T.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(g(T,x),_(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function _(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function w(x){const T=f[x.type];let G;if(T){const I=wn[T];G=Bd.clone(I.uniforms)}else G=x.uniforms;return G}function M(x,T){let G=d.get(T);return G!==void 0?++G.usedTimes:(G=new f0(r,T,x,i),l.push(G),d.set(T,G)),G}function C(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:C,releaseShaderCache:b,programs:l,dispose:R}}function _0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function x0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function tl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function el(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,v,m,g){let _=r[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:g},r[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=m,_.group=g),t++,_}function c(h,f,p,v,m,g){const _=a(h,f,p,v,m,g);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):e.push(_)}function l(h,f,p,v,m,g){const _=a(h,f,p,v,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):e.unshift(_)}function d(h,f){e.length>1&&e.sort(h||x0),n.length>1&&n.sort(f||tl),i.length>1&&i.sort(f||tl)}function u(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:d}}function y0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new el,r.set(n,[o])):i>=s.length?(o=new el,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function M0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ut};break;case"SpotLight":e={position:new O,direction:new O,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function w0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let S0=0;function E0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function b0(r){const t=new M0,e=w0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const i=new O,s=new Me,o=new Me;function a(l){let d=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,_=0,w=0,M=0,C=0,b=0,R=0;l.sort(E0);for(let T=0,G=l.length;T<G;T++){const I=l[T],z=I.color,L=I.intensity,F=I.distance;let U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ts?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=z.r*L,u+=z.g*L,h+=z.b*L;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],L);R++}else if(I.isDirectionalLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const k=I.shadow,$=e.get(I);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=N,f++}else if(I.isSpotLight){const N=t.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(z).multiplyScalar(L),N.distance=F,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[v]=N;const k=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,k.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[v]=k.matrix,I.castShadow){const $=e.get(I);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=U,M++}v++}else if(I.isRectAreaLight){const N=t.get(I);N.color.copy(z).multiplyScalar(L),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=N,m++}else if(I.isPointLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const k=I.shadow,$=e.get(I);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=I.shadow.matrix,w++}n.point[p]=N,p++}else if(I.isHemisphereLight){const N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(L),N.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[g]=N,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==_||x.numPointShadows!==w||x.numSpotShadows!==M||x.numSpotMaps!==C||x.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,x.directionalLength=f,x.pointLength=p,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=_,x.numPointShadows=w,x.numSpotShadows=M,x.numSpotMaps=C,x.numLightProbes=R,n.version=S0++)}function c(l,d){let u=0,h=0,f=0,p=0,v=0;const m=d.matrixWorldInverse;for(let g=0,_=l.length;g<_;g++){const w=l[g];if(w.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(w.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function nl(r){const t=new b0(r),e=[],n=[];function i(d){l.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function T0(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new nl(r),t.set(i,[a])):s>=o.length?(a=new nl(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],P0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],il=new Me,gs=new O,yr=new O;function I0(r,t,e){let n=new Ba;const i=new Kt,s=new Kt,o=new Te,a=new Hd,c=new Vd,l={},d=e.maxTextureSize,u={[Cn]:ze,[ze]:Cn,[un]:un},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:A0,fragmentShader:C0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Se;p.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let g=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ph&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ss);const T=r.getRenderTarget(),G=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Wn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const L=g!==this.type;L&&R.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(U=>U.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,U=b.length;F<U;F++){const N=b[F],k=N.shadow;if(k===void 0){Xt("WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const $=k.getFrameExtents();i.multiply($),s.copy(k.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/$.x),i.x=s.x*$.x,k.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/$.y),i.y=s.y*$.y,k.mapSize.y=s.y));const q=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ms){if(N.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new An(i.x,i.y,{format:ts,type:jn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),k.map.texture.name=N.name+".shadowMap",k.map.depthTexture=new Rs(i.x,i.y,En),k.map.depthTexture.name=N.name+".shadowMapDepth",k.map.depthTexture.format=$n,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be}else N.isPointLight?(k.map=new rh(i.x),k.map.depthTexture=new Fd(i.x,Rn)):(k.map=new An(i.x,i.y),k.map.depthTexture=new Rs(i.x,i.y,Rn)),k.map.depthTexture.name=N.name+".shadowMap",k.map.depthTexture.format=$n,this.type===Ss?(k.map.depthTexture.compareFunction=q?Na:La,k.map.depthTexture.minFilter=Ve,k.map.depthTexture.magFilter=Ve):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Be,k.map.depthTexture.magFilter=Be);k.camera.updateProjectionMatrix()}const st=k.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<st;ot++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ot),r.clear();else{ot===0&&(r.setRenderTarget(k.map),r.clear());const K=k.getViewport(ot);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),z.viewport(o)}if(N.isPointLight){const K=k.camera,_t=k.matrix,Zt=N.distance||K.far;Zt!==K.far&&(K.far=Zt,K.updateProjectionMatrix()),gs.setFromMatrixPosition(N.matrixWorld),K.position.copy(gs),yr.copy(K.position),yr.add(R0[ot]),K.up.copy(P0[ot]),K.lookAt(yr),K.updateMatrixWorld(),_t.makeTranslation(-gs.x,-gs.y,-gs.z),il.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(il,K.coordinateSystem,K.reversedDepth)}else k.updateMatrices(N);n=k.getFrustum(),M(R,x,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===Ms&&_(k,x),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(T,G,I)};function _(b,R){const x=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new An(i.x,i.y,{format:ts,type:jn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(R,null,x,h,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(R,null,x,f,v,null)}function w(b,R,x,T){let G=null;const I=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)G=I;else if(G=x.isPointLight===!0?c:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=G.uuid,L=R.uuid;let F=l[z];F===void 0&&(F={},l[z]=F);let U=F[L];U===void 0&&(U=G.clone(),F[L]=U,R.addEventListener("dispose",C)),G=U}if(G.visible=R.visible,G.wireframe=R.wireframe,T===Ms?G.side=R.shadowSide!==null?R.shadowSide:R.side:G.side=R.shadowSide!==null?R.shadowSide:u[R.side],G.alphaMap=R.alphaMap,G.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,G.map=R.map,G.clipShadows=R.clipShadows,G.clippingPlanes=R.clippingPlanes,G.clipIntersection=R.clipIntersection,G.displacementMap=R.displacementMap,G.displacementScale=R.displacementScale,G.displacementBias=R.displacementBias,G.wireframeLinewidth=R.wireframeLinewidth,G.linewidth=R.linewidth,x.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const z=r.properties.get(G);z.light=x}return G}function M(b,R,x,T,G){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&G===Ms)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const L=t.update(b),F=b.material;if(Array.isArray(F)){const U=L.groups;for(let N=0,k=U.length;N<k;N++){const $=U[N],q=F[$.materialIndex];if(q&&q.visible){const st=w(b,q,T,G);b.onBeforeShadow(r,b,R,x,L,st,$),r.renderBufferDirect(x,null,L,st,b,$),b.onAfterShadow(r,b,R,x,L,st,$)}}}else if(F.visible){const U=w(b,F,T,G);b.onBeforeShadow(r,b,R,x,L,U,null),r.renderBufferDirect(x,null,L,U,b,null),b.onAfterShadow(r,b,R,x,L,U,null)}}const z=b.children;for(let L=0,F=z.length;L<F;L++)M(z[L],R,x,T,G)}function C(b){b.target.removeEventListener("dispose",C);for(const x in l){const T=l[x],G=b.target.uuid;G in T&&(T[G].dispose(),delete T[G])}}}function D0(r,t){function e(){let H=!1;const ut=new Te;let ht=null;const yt=new Te(0,0,0,0);return{setMask:function(at){ht!==at&&!H&&(r.colorMask(at,at,at,at),ht=at)},setLocked:function(at){H=at},setClear:function(at,J,Tt,qt,xe){xe===!0&&(at*=qt,J*=qt,Tt*=qt),ut.set(at,J,Tt,qt),yt.equals(ut)===!1&&(r.clearColor(at,J,Tt,qt),yt.copy(ut))},reset:function(){H=!1,ht=null,yt.set(-1,0,0,0)}}}function n(){let H=!1,ut=!1,ht=null,yt=null,at=null;return{setReversed:function(J){if(ut!==J){const Tt=t.get("EXT_clip_control");J?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),ut=J;const qt=at;at=null,this.setClear(qt)}},getReversed:function(){return ut},setTest:function(J){J?it(r.DEPTH_TEST):nt(r.DEPTH_TEST)},setMask:function(J){ht!==J&&!H&&(r.depthMask(J),ht=J)},setFunc:function(J){if(ut&&(J=ld[J]),yt!==J){switch(J){case Rr:r.depthFunc(r.NEVER);break;case Pr:r.depthFunc(r.ALWAYS);break;case Ir:r.depthFunc(r.LESS);break;case Ji:r.depthFunc(r.LEQUAL);break;case Dr:r.depthFunc(r.EQUAL);break;case Lr:r.depthFunc(r.GEQUAL);break;case Nr:r.depthFunc(r.GREATER);break;case Ur:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}yt=J}},setLocked:function(J){H=J},setClear:function(J){at!==J&&(at=J,ut&&(J=1-J),r.clearDepth(J))},reset:function(){H=!1,ht=null,yt=null,at=null,ut=!1}}}function i(){let H=!1,ut=null,ht=null,yt=null,at=null,J=null,Tt=null,qt=null,xe=null;return{setTest:function(de){H||(de?it(r.STENCIL_TEST):nt(r.STENCIL_TEST))},setMask:function(de){ut!==de&&!H&&(r.stencilMask(de),ut=de)},setFunc:function(de,In,Dn){(ht!==de||yt!==In||at!==Dn)&&(r.stencilFunc(de,In,Dn),ht=de,yt=In,at=Dn)},setOp:function(de,In,Dn){(J!==de||Tt!==In||qt!==Dn)&&(r.stencilOp(de,In,Dn),J=de,Tt=In,qt=Dn)},setLocked:function(de){H=de},setClear:function(de){xe!==de&&(r.clearStencil(de),xe=de)},reset:function(){H=!1,ut=null,ht=null,yt=null,at=null,J=null,Tt=null,qt=null,xe=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,f=[],p=null,v=!1,m=null,g=null,_=null,w=null,M=null,C=null,b=null,R=new Ut(0,0,0),x=0,T=!1,G=null,I=null,z=null,L=null,F=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),N=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),N=k>=2);let q=null,st={};const ot=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),_t=new Te().fromArray(ot),Zt=new Te().fromArray(K);function Yt(H,ut,ht,yt){const at=new Uint8Array(4),J=r.createTexture();r.bindTexture(H,J),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Tt=0;Tt<ht;Tt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,yt,0,r.RGBA,r.UNSIGNED_BYTE,at):r.texImage2D(ut+Tt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,at);return J}const Z={};Z[r.TEXTURE_2D]=Yt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(r.DEPTH_TEST),o.setFunc(Ji),Gt(!1),jt(nc),it(r.CULL_FACE),Dt(Wn);function it(H){d[H]!==!0&&(r.enable(H),d[H]=!0)}function nt(H){d[H]!==!1&&(r.disable(H),d[H]=!1)}function Ot(H,ut){return u[H]!==ut?(r.bindFramebuffer(H,ut),u[H]=ut,H===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ut),H===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function At(H,ut){let ht=f,yt=!1;if(H){ht=h.get(ut),ht===void 0&&(ht=[],h.set(ut,ht));const at=H.textures;if(ht.length!==at.length||ht[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Tt=at.length;J<Tt;J++)ht[J]=r.COLOR_ATTACHMENT0+J;ht.length=at.length,yt=!0}}else ht[0]!==r.BACK&&(ht[0]=r.BACK,yt=!0);yt&&r.drawBuffers(ht)}function Bt(H){return p!==H?(r.useProgram(H),p=H,!0):!1}const fe={[Mi]:r.FUNC_ADD,[Dh]:r.FUNC_SUBTRACT,[Lh]:r.FUNC_REVERSE_SUBTRACT};fe[Nh]=r.MIN,fe[Uh]=r.MAX;const te={[Fh]:r.ZERO,[Oh]:r.ONE,[Bh]:r.SRC_COLOR,[Ar]:r.SRC_ALPHA,[Wh]:r.SRC_ALPHA_SATURATE,[Hh]:r.DST_COLOR,[kh]:r.DST_ALPHA,[zh]:r.ONE_MINUS_SRC_COLOR,[Cr]:r.ONE_MINUS_SRC_ALPHA,[Vh]:r.ONE_MINUS_DST_COLOR,[Gh]:r.ONE_MINUS_DST_ALPHA,[Xh]:r.CONSTANT_COLOR,[Yh]:r.ONE_MINUS_CONSTANT_COLOR,[qh]:r.CONSTANT_ALPHA,[jh]:r.ONE_MINUS_CONSTANT_ALPHA};function Dt(H,ut,ht,yt,at,J,Tt,qt,xe,de){if(H===Wn){v===!0&&(nt(r.BLEND),v=!1);return}if(v===!1&&(it(r.BLEND),v=!0),H!==Ih){if(H!==m||de!==T){if((g!==Mi||M!==Mi)&&(r.blendEquation(r.FUNC_ADD),g=Mi,M=Mi),de)switch(H){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ic:r.blendFunc(r.ONE,r.ONE);break;case sc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case oc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:re("WebGLState: Invalid blending: ",H);break}else switch(H){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ic:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case sc:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",H);break}_=null,w=null,C=null,b=null,R.set(0,0,0),x=0,m=H,T=de}return}at=at||ut,J=J||ht,Tt=Tt||yt,(ut!==g||at!==M)&&(r.blendEquationSeparate(fe[ut],fe[at]),g=ut,M=at),(ht!==_||yt!==w||J!==C||Tt!==b)&&(r.blendFuncSeparate(te[ht],te[yt],te[J],te[Tt]),_=ht,w=yt,C=J,b=Tt),(qt.equals(R)===!1||xe!==x)&&(r.blendColor(qt.r,qt.g,qt.b,xe),R.copy(qt),x=xe),m=H,T=!1}function zt(H,ut){H.side===un?nt(r.CULL_FACE):it(r.CULL_FACE);let ht=H.side===ze;ut&&(ht=!ht),Gt(ht),H.blending===Ki&&H.transparent===!1?Dt(Wn):Dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const yt=H.stencilWrite;a.setTest(yt),yt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(H){G!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),G=H)}function jt(H){H!==Ch?(it(r.CULL_FACE),H!==I&&(H===nc?r.cullFace(r.BACK):H===Rh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):nt(r.CULL_FACE),I=H}function B(H){H!==z&&(N&&r.lineWidth(H),z=H)}function pe(H,ut,ht){H?(it(r.POLYGON_OFFSET_FILL),(L!==ut||F!==ht)&&(L=ut,F=ht,o.getReversed()&&(ut=-ut),r.polygonOffset(ut,ht))):nt(r.POLYGON_OFFSET_FILL)}function kt(H){H?it(r.SCISSOR_TEST):nt(r.SCISSOR_TEST)}function Wt(H){H===void 0&&(H=r.TEXTURE0+U-1),q!==H&&(r.activeTexture(H),q=H)}function gt(H,ut,ht){ht===void 0&&(q===null?ht=r.TEXTURE0+U-1:ht=q);let yt=st[ht];yt===void 0&&(yt={type:void 0,texture:void 0},st[ht]=yt),(yt.type!==H||yt.texture!==ut)&&(q!==ht&&(r.activeTexture(ht),q=ht),r.bindTexture(H,ut||Z[H]),yt.type=H,yt.texture=ut)}function P(){const H=st[q];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function tt(){try{r.texSubImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function et(){try{r.texSubImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function Et(){try{r.compressedTexSubImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function dt(){try{r.texStorage2D(...arguments)}catch(H){re("WebGLState:",H)}}function Ft(){try{r.texStorage3D(...arguments)}catch(H){re("WebGLState:",H)}}function Vt(){try{r.texImage2D(...arguments)}catch(H){re("WebGLState:",H)}}function rt(){try{r.texImage3D(...arguments)}catch(H){re("WebGLState:",H)}}function lt(H){_t.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),_t.copy(H))}function bt(H){Zt.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Zt.copy(H))}function Ct(H,ut){let ht=l.get(ut);ht===void 0&&(ht=new WeakMap,l.set(ut,ht));let yt=ht.get(H);yt===void 0&&(yt=r.getUniformBlockIndex(ut,H.name),ht.set(H,yt))}function vt(H,ut){const yt=l.get(ut).get(H);c.get(ut)!==yt&&(r.uniformBlockBinding(ut,yt,H.__bindingPointIndex),c.set(ut,yt))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},q=null,st={},u={},h=new WeakMap,f=[],p=null,v=!1,m=null,g=null,_=null,w=null,M=null,C=null,b=null,R=new Ut(0,0,0),x=0,T=!1,G=null,I=null,z=null,L=null,F=null,_t.set(0,0,r.canvas.width,r.canvas.height),Zt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:nt,bindFramebuffer:Ot,drawBuffers:At,useProgram:Bt,setBlending:Dt,setMaterial:zt,setFlipSided:Gt,setCullFace:jt,setLineWidth:B,setPolygonOffset:pe,setScissorTest:kt,activeTexture:Wt,bindTexture:gt,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:Vt,texImage3D:rt,updateUBOMapping:Ct,uniformBlockBinding:vt,texStorage2D:dt,texStorage3D:Ft,texSubImage2D:tt,texSubImage3D:et,compressedTexSubImage2D:Q,compressedTexSubImage3D:Et,scissor:lt,viewport:bt,reset:ne}}function L0(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,y){return f?new OffscreenCanvas(P,y):So("canvas")}function v(P,y,V){let tt=1;const et=gt(P);if((et.width>V||et.height>V)&&(tt=V/Math.max(et.width,et.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(tt*et.width),Et=Math.floor(tt*et.height);u===void 0&&(u=p(Q,Et));const dt=y?p(Q,Et):u;return dt.width=Q,dt.height=Et,dt.getContext("2d").drawImage(P,0,0,Q,Et),Xt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Et+")."),dt}else return"data"in P&&Xt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(P,y,V,tt,et=!1){if(P!==null){if(r[P]!==void 0)return r[P];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=y;if(y===r.RED&&(V===r.FLOAT&&(Q=r.R32F),V===r.HALF_FLOAT&&(Q=r.R16F),V===r.UNSIGNED_BYTE&&(Q=r.R8)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.R8UI),V===r.UNSIGNED_SHORT&&(Q=r.R16UI),V===r.UNSIGNED_INT&&(Q=r.R32UI),V===r.BYTE&&(Q=r.R8I),V===r.SHORT&&(Q=r.R16I),V===r.INT&&(Q=r.R32I)),y===r.RG&&(V===r.FLOAT&&(Q=r.RG32F),V===r.HALF_FLOAT&&(Q=r.RG16F),V===r.UNSIGNED_BYTE&&(Q=r.RG8)),y===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.RG8UI),V===r.UNSIGNED_SHORT&&(Q=r.RG16UI),V===r.UNSIGNED_INT&&(Q=r.RG32UI),V===r.BYTE&&(Q=r.RG8I),V===r.SHORT&&(Q=r.RG16I),V===r.INT&&(Q=r.RG32I)),y===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),V===r.UNSIGNED_INT&&(Q=r.RGB32UI),V===r.BYTE&&(Q=r.RGB8I),V===r.SHORT&&(Q=r.RGB16I),V===r.INT&&(Q=r.RGB32I)),y===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),V===r.UNSIGNED_INT&&(Q=r.RGBA32UI),V===r.BYTE&&(Q=r.RGBA8I),V===r.SHORT&&(Q=r.RGBA16I),V===r.INT&&(Q=r.RGBA32I)),y===r.RGB&&(V===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),y===r.RGBA){const Et=et?wo:ae.getTransfer(tt);V===r.FLOAT&&(Q=r.RGBA32F),V===r.HALF_FLOAT&&(Q=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Q=Et===ue?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(P,y){let V;return P?y===null||y===Rn||y===Ts?V=r.DEPTH24_STENCIL8:y===En?V=r.DEPTH32F_STENCIL8:y===bs&&(V=r.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Rn||y===Ts?V=r.DEPTH_COMPONENT24:y===En?V=r.DEPTH_COMPONENT32F:y===bs&&(V=r.DEPTH_COMPONENT16),V}function C(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Be&&P.minFilter!==Ve?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function b(P){const y=P.target;y.removeEventListener("dispose",b),x(y),y.isVideoTexture&&d.delete(y)}function R(P){const y=P.target;y.removeEventListener("dispose",R),G(y)}function x(P){const y=n.get(P);if(y.__webglInit===void 0)return;const V=P.source,tt=h.get(V);if(tt){const et=tt[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(P),Object.keys(tt).length===0&&h.delete(V)}n.remove(P)}function T(P){const y=n.get(P);r.deleteTexture(y.__webglTexture);const V=P.source,tt=h.get(V);delete tt[y.__cacheKey],o.memory.textures--}function G(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let et=0;et<y.__webglFramebuffer[tt].length;et++)r.deleteFramebuffer(y.__webglFramebuffer[tt][et]);else r.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)r.deleteFramebuffer(y.__webglFramebuffer[tt]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=P.textures;for(let tt=0,et=V.length;tt<et;tt++){const Q=n.get(V[tt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(V[tt])}n.remove(P)}let I=0;function z(){I=0}function L(){const P=I;return P>=i.maxTextures&&Xt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function F(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function U(P,y){const V=n.get(P);if(P.isVideoTexture&&kt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const tt=P.image;if(tt===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,P,y);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function N(P,y){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Z(V,P,y);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function k(P,y){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){Z(V,P,y);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function $(P,y){const V=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){it(V,P,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}const q={[Fr]:r.REPEAT,[Vn]:r.CLAMP_TO_EDGE,[Or]:r.MIRRORED_REPEAT},st={[Be]:r.NEAREST,[Zh]:r.NEAREST_MIPMAP_NEAREST,[Us]:r.NEAREST_MIPMAP_LINEAR,[Ve]:r.LINEAR,[Go]:r.LINEAR_MIPMAP_NEAREST,[Ei]:r.LINEAR_MIPMAP_LINEAR},ot={[td]:r.NEVER,[od]:r.ALWAYS,[ed]:r.LESS,[La]:r.LEQUAL,[nd]:r.EQUAL,[Na]:r.GEQUAL,[id]:r.GREATER,[sd]:r.NOTEQUAL};function K(P,y){if(y.type===En&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ve||y.magFilter===Go||y.magFilter===Us||y.magFilter===Ei||y.minFilter===Ve||y.minFilter===Go||y.minFilter===Us||y.minFilter===Ei)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,q[y.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,q[y.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,q[y.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,st[y.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==Us&&y.minFilter!==Ei||y.type===En&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function _t(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",b));const tt=y.source;let et=h.get(tt);et===void 0&&(et={},h.set(tt,et));const Q=F(y);if(Q!==P.__cacheKey){et[Q]===void 0&&(et[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[Q].usedTimes++;const Et=et[P.__cacheKey];Et!==void 0&&(et[P.__cacheKey].usedTimes--,Et.usedTimes===0&&T(y)),P.__cacheKey=Q,P.__webglTexture=et[Q].texture}return V}function Zt(P,y,V){return Math.floor(Math.floor(P/V)/y)}function Yt(P,y,V,tt){const Q=P.updateRanges;if(Q.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,V,tt,y.data);else{Q.sort((rt,lt)=>rt.start-lt.start);let Et=0;for(let rt=1;rt<Q.length;rt++){const lt=Q[Et],bt=Q[rt],Ct=lt.start+lt.count,vt=Zt(bt.start,y.width,4),ne=Zt(lt.start,y.width,4);bt.start<=Ct+1&&vt===ne&&Zt(bt.start+bt.count-1,y.width,4)===vt?lt.count=Math.max(lt.count,bt.start+bt.count-lt.start):(++Et,Q[Et]=bt)}Q.length=Et+1;const dt=r.getParameter(r.UNPACK_ROW_LENGTH),Ft=r.getParameter(r.UNPACK_SKIP_PIXELS),Vt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let rt=0,lt=Q.length;rt<lt;rt++){const bt=Q[rt],Ct=Math.floor(bt.start/4),vt=Math.ceil(bt.count/4),ne=Ct%y.width,H=Math.floor(Ct/y.width),ut=vt,ht=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),e.texSubImage2D(r.TEXTURE_2D,0,ne,H,ut,ht,V,tt,y.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,Vt)}}function Z(P,y,V){let tt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=r.TEXTURE_3D);const et=_t(P,y),Q=y.source;e.bindTexture(tt,P.__webglTexture,r.TEXTURE0+V);const Et=n.get(Q);if(Q.version!==Et.__version||et===!0){e.activeTexture(r.TEXTURE0+V);const dt=ae.getPrimaries(ae.workingColorSpace),Ft=y.colorSpace===ri?null:ae.getPrimaries(y.colorSpace),Vt=y.colorSpace===ri||dt===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let rt=v(y.image,!1,i.maxTextureSize);rt=Wt(y,rt);const lt=s.convert(y.format,y.colorSpace),bt=s.convert(y.type);let Ct=w(y.internalFormat,lt,bt,y.colorSpace,y.isVideoTexture);K(tt,y);let vt;const ne=y.mipmaps,H=y.isVideoTexture!==!0,ut=Et.__version===void 0||et===!0,ht=Q.dataReady,yt=C(y,rt);if(y.isDepthTexture)Ct=M(y.format===bi,y.type),ut&&(H?e.texStorage2D(r.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Ct,rt.width,rt.height,0,lt,bt,null));else if(y.isDataTexture)if(ne.length>0){H&&ut&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,ne[0].width,ne[0].height);for(let at=0,J=ne.length;at<J;at++)vt=ne[at],H?ht&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,vt.width,vt.height,lt,bt,vt.data):e.texImage2D(r.TEXTURE_2D,at,Ct,vt.width,vt.height,0,lt,bt,vt.data);y.generateMipmaps=!1}else H?(ut&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,rt.width,rt.height),ht&&Yt(y,rt,lt,bt)):e.texImage2D(r.TEXTURE_2D,0,Ct,rt.width,rt.height,0,lt,bt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){H&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Ct,ne[0].width,ne[0].height,rt.depth);for(let at=0,J=ne.length;at<J;at++)if(vt=ne[at],y.format!==fn)if(lt!==null)if(H){if(ht)if(y.layerUpdates.size>0){const Tt=Nc(vt.width,vt.height,y.format,y.type);for(const qt of y.layerUpdates){const xe=vt.data.subarray(qt*Tt/vt.data.BYTES_PER_ELEMENT,(qt+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,qt,vt.width,vt.height,1,lt,xe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,lt,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,at,Ct,vt.width,vt.height,rt.depth,0,vt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ht&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,lt,bt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,at,Ct,vt.width,vt.height,rt.depth,0,lt,bt,vt.data)}else{H&&ut&&e.texStorage2D(r.TEXTURE_2D,yt,Ct,ne[0].width,ne[0].height);for(let at=0,J=ne.length;at<J;at++)vt=ne[at],y.format!==fn?lt!==null?H?ht&&e.compressedTexSubImage2D(r.TEXTURE_2D,at,0,0,vt.width,vt.height,lt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,at,Ct,vt.width,vt.height,0,vt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ht&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,vt.width,vt.height,lt,bt,vt.data):e.texImage2D(r.TEXTURE_2D,at,Ct,vt.width,vt.height,0,lt,bt,vt.data)}else if(y.isDataArrayTexture)if(H){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Ct,rt.width,rt.height,rt.depth),ht)if(y.layerUpdates.size>0){const at=Nc(rt.width,rt.height,y.format,y.type);for(const J of y.layerUpdates){const Tt=rt.data.subarray(J*at/rt.data.BYTES_PER_ELEMENT,(J+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,lt,bt,Tt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,lt,bt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,lt,bt,rt.data);else if(y.isData3DTexture)H?(ut&&e.texStorage3D(r.TEXTURE_3D,yt,Ct,rt.width,rt.height,rt.depth),ht&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,lt,bt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,lt,bt,rt.data);else if(y.isFramebufferTexture){if(ut)if(H)e.texStorage2D(r.TEXTURE_2D,yt,Ct,rt.width,rt.height);else{let at=rt.width,J=rt.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,Ct,at,J,0,lt,bt,null),at>>=1,J>>=1}}else if(ne.length>0){if(H&&ut){const at=gt(ne[0]);e.texStorage2D(r.TEXTURE_2D,yt,Ct,at.width,at.height)}for(let at=0,J=ne.length;at<J;at++)vt=ne[at],H?ht&&e.texSubImage2D(r.TEXTURE_2D,at,0,0,lt,bt,vt):e.texImage2D(r.TEXTURE_2D,at,Ct,lt,bt,vt);y.generateMipmaps=!1}else if(H){if(ut){const at=gt(rt);e.texStorage2D(r.TEXTURE_2D,yt,Ct,at.width,at.height)}ht&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,bt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Ct,lt,bt,rt);m(y)&&g(tt),Et.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function it(P,y,V){if(y.image.length!==6)return;const tt=_t(P,y),et=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+V);const Q=n.get(et);if(et.version!==Q.__version||tt===!0){e.activeTexture(r.TEXTURE0+V);const Et=ae.getPrimaries(ae.workingColorSpace),dt=y.colorSpace===ri?null:ae.getPrimaries(y.colorSpace),Ft=y.colorSpace===ri||Et===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,lt=[];for(let J=0;J<6;J++)!Vt&&!rt?lt[J]=v(y.image[J],!0,i.maxCubemapSize):lt[J]=rt?y.image[J].image:y.image[J],lt[J]=Wt(y,lt[J]);const bt=lt[0],Ct=s.convert(y.format,y.colorSpace),vt=s.convert(y.type),ne=w(y.internalFormat,Ct,vt,y.colorSpace),H=y.isVideoTexture!==!0,ut=Q.__version===void 0||tt===!0,ht=et.dataReady;let yt=C(y,bt);K(r.TEXTURE_CUBE_MAP,y);let at;if(Vt){H&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,ne,bt.width,bt.height);for(let J=0;J<6;J++){at=lt[J].mipmaps;for(let Tt=0;Tt<at.length;Tt++){const qt=at[Tt];y.format!==fn?Ct!==null?H?ht&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,0,0,qt.width,qt.height,Ct,qt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,ne,qt.width,qt.height,0,qt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,0,0,qt.width,qt.height,Ct,vt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt,ne,qt.width,qt.height,0,Ct,vt,qt.data)}}}else{if(at=y.mipmaps,H&&ut){at.length>0&&yt++;const J=gt(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,ne,J.width,J.height)}for(let J=0;J<6;J++)if(rt){H?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,lt[J].width,lt[J].height,Ct,vt,lt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,lt[J].width,lt[J].height,0,Ct,vt,lt[J].data);for(let Tt=0;Tt<at.length;Tt++){const xe=at[Tt].image[J].image;H?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,0,0,xe.width,xe.height,Ct,vt,xe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,ne,xe.width,xe.height,0,Ct,vt,xe.data)}}else{H?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ct,vt,lt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,Ct,vt,lt[J]);for(let Tt=0;Tt<at.length;Tt++){const qt=at[Tt];H?ht&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,0,0,Ct,vt,qt.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,Tt+1,ne,Ct,vt,qt.image[J])}}}m(y)&&g(r.TEXTURE_CUBE_MAP),Q.__version=et.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function nt(P,y,V,tt,et,Q){const Et=s.convert(V.format,V.colorSpace),dt=s.convert(V.type),Ft=w(V.internalFormat,Et,dt,V.colorSpace),Vt=n.get(y),rt=n.get(V);if(rt.__renderTarget=y,!Vt.__hasExternalTextures){const lt=Math.max(1,y.width>>Q),bt=Math.max(1,y.height>>Q);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,Ft,lt,bt,y.depth,0,Et,dt,null):e.texImage2D(et,Q,Ft,lt,bt,0,Et,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),pe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,et,rt.__webglTexture,0,B(y)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,et,rt.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(P,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,P),y.depthBuffer){const tt=y.depthTexture,et=tt&&tt.isDepthTexture?tt.type:null,Q=M(y.stencilBuffer,et),Et=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(y),Q,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(y),Q,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Q,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,P)}else{const tt=y.textures;for(let et=0;et<tt.length;et++){const Q=tt[et],Et=s.convert(Q.format,Q.colorSpace),dt=s.convert(Q.type),Ft=w(Q.internalFormat,Et,dt,Q.colorSpace);pe(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B(y),Ft,y.width,y.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,B(y),Ft,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Ft,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(P,y,V){const tt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(y.depthTexture);if(et.__renderTarget=y,(!et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(et.__webglInit===void 0&&(et.__webglInit=!0,y.depthTexture.addEventListener("dispose",b)),et.__webglTexture===void 0){et.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),K(r.TEXTURE_CUBE_MAP,y.depthTexture);const Vt=s.convert(y.depthTexture.format),rt=s.convert(y.depthTexture.type);let lt;y.depthTexture.format===$n?lt=r.DEPTH_COMPONENT24:y.depthTexture.format===bi&&(lt=r.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,lt,y.width,y.height,0,Vt,rt,null)}}else U(y.depthTexture,0);const Q=et.__webglTexture,Et=B(y),dt=tt?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,Ft=y.depthTexture.format===bi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===$n)pe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ft,dt,Q,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,Ft,dt,Q,0);else if(y.depthTexture.format===bi)pe(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ft,dt,Q,0,Et):r.framebufferTexture2D(r.FRAMEBUFFER,Ft,dt,Q,0);else throw new Error("Unknown depthTexture format")}function Bt(P){const y=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",et)};tt.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=tt}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let tt=0;tt<6;tt++)At(y.__webglFramebuffer[tt],P,tt);else{const tt=P.texture.mipmaps;tt&&tt.length>0?At(y.__webglFramebuffer[0],P,0):At(y.__webglFramebuffer,P,0)}else if(V){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=r.createRenderbuffer(),Ot(y.__webglDepthbuffer[tt],P,!1);else{const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Q)}}else{const tt=P.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ot(y.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Q)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(P,y,V){const tt=n.get(P);y!==void 0&&nt(tt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Bt(P)}function te(P){const y=P.texture,V=n.get(P),tt=n.get(y);P.addEventListener("dispose",R);const et=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Et=et.length>1;if(Et||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=y.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let Ft=0;Ft<y.mipmaps.length;Ft++)V.__webglFramebuffer[dt][Ft]=r.createFramebuffer()}else V.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)V.__webglFramebuffer[dt]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Et)for(let dt=0,Ft=et.length;dt<Ft;dt++){const Vt=n.get(et[dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&pe(P)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const Ft=et[dt];V.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);const Vt=s.convert(Ft.format,Ft.colorSpace),rt=s.convert(Ft.type),lt=w(Ft.internalFormat,Vt,rt,Ft.colorSpace,P.isXRRenderTarget===!0),bt=B(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,lt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(V.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),K(r.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)nt(V.__webglFramebuffer[dt][Ft],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft);else nt(V.__webglFramebuffer[dt],P,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(y)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,Ft=et.length;dt<Ft;dt++){const Vt=et[dt],rt=n.get(Vt);let lt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,rt.__webglTexture),K(lt,Vt),nt(V.__webglFramebuffer,P,Vt,r.COLOR_ATTACHMENT0+dt,lt,0),m(Vt)&&g(lt)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,tt.__webglTexture),K(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)nt(V.__webglFramebuffer[Ft],P,y,r.COLOR_ATTACHMENT0,dt,Ft);else nt(V.__webglFramebuffer,P,y,r.COLOR_ATTACHMENT0,dt,0);m(y)&&g(dt),e.unbindTexture()}P.depthBuffer&&Bt(P)}function Dt(P){const y=P.textures;for(let V=0,tt=y.length;V<tt;V++){const et=y[V];if(m(et)){const Q=_(P),Et=n.get(et).__webglTexture;e.bindTexture(Q,Et),g(Q),e.unbindTexture()}}}const zt=[],Gt=[];function jt(P){if(P.samples>0){if(pe(P)===!1){const y=P.textures,V=P.width,tt=P.height;let et=r.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(P),dt=y.length>1;if(dt)for(let Vt=0;Vt<y.length;Vt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const Ft=P.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Vt=0;Vt<y.length;Vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Vt]);const rt=n.get(y[Vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,V,tt,0,0,V,tt,et,r.NEAREST),c===!0&&(zt.length=0,Gt.length=0,zt.push(r.COLOR_ATTACHMENT0+Vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(zt.push(Q),Gt.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let Vt=0;Vt<y.length;Vt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[Vt]);const rt=n.get(y[Vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Vt,r.TEXTURE_2D,rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const y=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function B(P){return Math.min(i.maxSamples,P.samples)}function pe(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function kt(P){const y=o.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function Wt(P,y){const V=P.colorSpace,tt=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==es&&V!==ri&&(ae.getTransfer(V)===ue?(tt!==fn||et!==en)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",V)),y}function gt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=fe,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function N0(r,t){function e(n,i=ri){let s;const o=ae.getTransfer(i);if(n===en)return r.UNSIGNED_BYTE;if(n===Aa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===zl)return r.BYTE;if(n===kl)return r.SHORT;if(n===bs)return r.UNSIGNED_SHORT;if(n===Ta)return r.INT;if(n===Rn)return r.UNSIGNED_INT;if(n===En)return r.FLOAT;if(n===jn)return r.HALF_FLOAT;if(n===Vl)return r.ALPHA;if(n===Wl)return r.RGB;if(n===fn)return r.RGBA;if(n===$n)return r.DEPTH_COMPONENT;if(n===bi)return r.DEPTH_STENCIL;if(n===Xl)return r.RED;if(n===Ra)return r.RED_INTEGER;if(n===ts)return r.RG;if(n===Pa)return r.RG_INTEGER;if(n===Ia)return r.RGBA_INTEGER;if(n===go||n===vo||n===_o||n===xo)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Br||n===zr||n===kr||n===Gr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hr||n===Vr||n===Wr||n===Xr||n===Yr||n===qr||n===jr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hr||n===Vr)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wr)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xr)return s.COMPRESSED_R11_EAC;if(n===Yr)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qr)return s.COMPRESSED_RG11_EAC;if(n===jr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$r||n===Kr||n===Zr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===oa||n===ra||n===aa||n===ca)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$r)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kr)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zr)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jr)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qr)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ha||n===da)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===la)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===fa||n===pa||n===ma)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class O0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new eh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:U0,fragmentShader:F0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends is{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",m=new O0,g={},_=e.getContextAttributes();let w=null,M=null;const C=[],b=[],R=new Kt;let x=null;const T=new tn;T.viewport=new Te;const G=new tn;G.viewport=new Te;const I=[T,G],z=new $d;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=C[Z];return it===void 0&&(it=new $o,C[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=C[Z];return it===void 0&&(it=new $o,C[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=C[Z];return it===void 0&&(it=new $o,C[Z]=it),it.getHandSpace()};function U(Z){const it=b.indexOf(Z.inputSource);if(it===-1)return;const nt=C[it];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,l||o),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",k);for(let Z=0;Z<C.length;Z++){const it=b[Z];it!==null&&(b[Z]=null,C[Z].disconnect(it))}L=null,F=null,m.reset();for(const Z in g)delete g[Z];t.setRenderTarget(w),f=null,h=null,u=null,i=null,M=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Ot=null,At=null;_.depth&&(At=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?bi:$n,Ot=_.stencil?Ts:Rn);const Bt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Bt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new An(h.textureWidth,h.textureHeight,{format:fn,type:en,depthTexture:new Rs(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new An(f.framebufferWidth,f.framebufferHeight,{format:fn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Z){for(let it=0;it<Z.removed.length;it++){const nt=Z.removed[it],Ot=b.indexOf(nt);Ot>=0&&(b[Ot]=null,C[Ot].disconnect(nt))}for(let it=0;it<Z.added.length;it++){const nt=Z.added[it];let Ot=b.indexOf(nt);if(Ot===-1){for(let Bt=0;Bt<C.length;Bt++)if(Bt>=b.length){b.push(nt),Ot=Bt;break}else if(b[Bt]===null){b[Bt]=nt,Ot=Bt;break}if(Ot===-1)break}const At=C[Ot];At&&At.connect(nt)}}const $=new O,q=new O;function st(Z,it,nt){$.setFromMatrixPosition(it.matrixWorld),q.setFromMatrixPosition(nt.matrixWorld);const Ot=$.distanceTo(q),At=it.projectionMatrix.elements,Bt=nt.projectionMatrix.elements,fe=At[14]/(At[10]-1),te=At[14]/(At[10]+1),Dt=(At[9]+1)/At[5],zt=(At[9]-1)/At[5],Gt=(At[8]-1)/At[0],jt=(Bt[8]+1)/Bt[0],B=fe*Gt,pe=fe*jt,kt=Ot/(-Gt+jt),Wt=kt*-Gt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const gt=fe+kt,P=te+kt,y=B-Wt,V=pe+(Ot-Wt),tt=Dt*te/P*gt,et=zt*te/P*gt;Z.projectionMatrix.makePerspective(y,V,tt,et,gt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let it=Z.near,nt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),z.near=G.near=T.near=it,z.far=G.far=T.far=nt,(L!==z.near||F!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,F=z.far),z.layers.mask=Z.layers.mask|6,T.layers.mask=z.layers.mask&-5,G.layers.mask=z.layers.mask&-3;const Ot=Z.parent,At=z.cameras;ot(z,Ot);for(let Bt=0;Bt<At.length;Bt++)ot(At[Bt],Ot);At.length===2?st(z,T,G):z.projectionMatrix.copy(T.projectionMatrix),K(Z,z,Ot)};function K(Z,it,nt){nt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=va*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Z){return g[Z]};let _t=null;function Zt(Z,it){if(d=it.getViewerPose(l||o),p=it,d!==null){const nt=d.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ot=!1;nt.length!==z.cameras.length&&(z.cameras.length=0,Ot=!0);for(let te=0;te<nt.length;te++){const Dt=nt[te];let zt=null;if(f!==null)zt=f.getViewport(Dt);else{const jt=u.getViewSubImage(h,Dt);zt=jt.viewport,te===0&&(t.setRenderTargetTextures(M,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(M))}let Gt=I[te];Gt===void 0&&(Gt=new tn,Gt.layers.enable(te),Gt.viewport=new Te,I[te]=Gt),Gt.matrix.fromArray(Dt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Dt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(zt.x,zt.y,zt.width,zt.height),te===0&&(z.matrix.copy(Gt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ot===!0&&z.cameras.push(Gt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const te=u.getDepthInformation(nt[0]);te&&te.isValid&&te.texture&&m.init(te,i.renderState)}if(At&&At.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let te=0;te<nt.length;te++){const Dt=nt[te].camera;if(Dt){let zt=g[Dt];zt||(zt=new eh,g[Dt]=zt);const Gt=u.getCameraImage(Dt);zt.sourceTexture=Gt}}}}for(let nt=0;nt<C.length;nt++){const Ot=b[nt],At=C[nt];Ot!==null&&At!==void 0&&At.update(Ot,it,l||o)}_t&&_t(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),p=null}const Yt=new oh;Yt.setAnimationLoop(Zt),this.setAnimationLoop=function(Z){_t=Z},this.dispose=function(){}}}const _i=new mn,z0=new Me;function k0(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,nh(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,w,M){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),d(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),v(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,_,w):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ze&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ze&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),w=_.envMap,M=_.envMapRotation;w&&(m.envMap.value=w,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(_i)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,_,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ze&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){const M=w.program;n.uniformBlockBinding(_,M)}function l(_,w){let M=i[_.id];M===void 0&&(p(_),M=d(_),i[_.id]=M,_.addEventListener("dispose",m));const C=w.program;n.updateUBOMapping(_,C);const b=t.render.frame;s[_.id]!==b&&(h(_),s[_.id]=b)}function d(_){const w=u();_.__bindingPointIndex=w;const M=r.createBuffer(),C=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=i[_.id],M=_.uniforms,C=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let b=0,R=M.length;b<R;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let T=0,G=x.length;T<G;T++){const I=x[T];if(f(I,b,T,C)===!0){const z=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let U=0;U<L.length;U++){const N=L[U],k=v(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,z+F,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,w,M,C){const b=_.value,R=w+"_"+M;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:C[R]=b.clone(),!0;{const x=C[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return C[R]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function p(_){const w=_.uniforms;let M=0;const C=16;for(let R=0,x=w.length;R<x;R++){const T=Array.isArray(w[R])?w[R]:[w[R]];for(let G=0,I=T.length;G<I;G++){const z=T[G],L=Array.isArray(z.value)?z.value:[z.value];for(let F=0,U=L.length;F<U;F++){const N=L[F],k=v(N),$=M%C,q=$%k.boundary,st=$+q;M+=q,st!==0&&C-st<k.storage&&(M+=C-st),z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=k.storage}}}const b=M%C;return b>0&&(M+=C-b),_.__size=M,_.__cache={},this}function v(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xt("WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){const w=_.target;w.removeEventListener("dispose",m);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}const H0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function V0(){return _n===null&&(_n=new Id(H0,16,16,ts,jn),_n.name="DFG_LUT",_n.minFilter=Ve,_n.magFilter=Ve,_n.wrapS=Vn,_n.wrapT=Vn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class W0{constructor(t={}){const{canvas:e=ad(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=en}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=f,m=new Set([Ia,Pa,Ra]),g=new Set([en,Rn,bs,Ts,Aa,Ca]),_=new Uint32Array(4),w=new Int32Array(4);let M=null,C=null;const b=[],R=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let G=!1;this._outputColorSpace=on;let I=0,z=0,L=null,F=-1,U=null;const N=new Te,k=new Te;let $=null;const q=new Ut(0);let st=0,ot=e.width,K=e.height,_t=1,Zt=null,Yt=null;const Z=new Te(0,0,ot,K),it=new Te(0,0,ot,K);let nt=!1;const Ot=new Ba;let At=!1,Bt=!1;const fe=new Me,te=new O,Dt=new Te,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function jt(){return L===null?_t:1}let B=n;function pe(A,W){return e.getContext(A,W)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",xe,!1),B===null){const W="webgl2";if(B=pe(W,A),B===null)throw pe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw re("WebGLRenderer: "+A.message),A}let kt,Wt,gt,P,y,V,tt,et,Q,Et,dt,Ft,Vt,rt,lt,bt,Ct,vt,ne,H,ut,ht,yt;function at(){kt=new Wp(B),kt.init(),ut=new N0(B,kt),Wt=new Fp(B,kt,t,ut),gt=new D0(B,kt),Wt.reversedDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),P=new qp(B),y=new _0,V=new L0(B,kt,gt,y,Wt,ut,P),tt=new Vp(T),et=new Zd(B),ht=new Np(B,et),Q=new Xp(B,et,P,ht),Et=new $p(B,Q,et,ht,P),vt=new jp(B,Wt,V),lt=new Op(y),dt=new v0(T,tt,kt,Wt,ht,lt),Ft=new k0(T,y),Vt=new y0,rt=new T0(kt),Ct=new Lp(T,tt,gt,Et,p,c),bt=new I0(T,Et,Wt),yt=new G0(B,P,Wt,gt),ne=new Up(B,kt,P),H=new Yp(B,kt,P),P.programs=dt.programs,T.capabilities=Wt,T.extensions=kt,T.properties=y,T.renderLists=Vt,T.shadowMap=bt,T.state=gt,T.info=P}at(),v!==en&&(x=new Zp(v,e.width,e.height,i,s));const J=new B0(T,B);this.xr=J,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(A){A!==void 0&&(_t=A,this.setSize(ot,K,!1))},this.getSize=function(A){return A.set(ot,K)},this.setSize=function(A,W,j=!0){if(J.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=A,K=W,e.width=Math.floor(A*_t),e.height=Math.floor(W*_t),j===!0&&(e.style.width=A+"px",e.style.height=W+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ot*_t,K*_t).floor()},this.setDrawingBufferSize=function(A,W,j){ot=A,K=W,_t=j,e.width=Math.floor(A*j),e.height=Math.floor(W*j),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(v===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,W,j,Y){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,W,j,Y),gt.viewport(N.copy(Z).multiplyScalar(_t).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,W,j,Y){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,W,j,Y),gt.scissor(k.copy(it).multiplyScalar(_t).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){gt.setScissorTest(nt=A)},this.setOpaqueSort=function(A){Zt=A},this.setTransparentSort=function(A){Yt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,j=!0){let Y=0;if(A){let X=!1;if(L!==null){const pt=L.texture.format;X=m.has(pt)}if(X){const pt=L.texture.type,xt=g.has(pt),mt=Ct.getClearColor(),Rt=Ct.getClearAlpha(),It=mt.r,$t=mt.g,ie=mt.b;xt?(_[0]=It,_[1]=$t,_[2]=ie,_[3]=Rt,B.clearBufferuiv(B.COLOR,0,_)):(w[0]=It,w[1]=$t,w[2]=ie,w[3]=Rt,B.clearBufferiv(B.COLOR,0,w))}else Y|=B.COLOR_BUFFER_BIT}W&&(Y|=B.DEPTH_BUFFER_BIT),j&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),Ct.dispose(),Vt.dispose(),rt.dispose(),y.dispose(),tt.dispose(),Et.dispose(),ht.dispose(),yt.dispose(),dt.dispose(),J.dispose(),J.removeEventListener("sessionstart",ja),J.removeEventListener("sessionend",$a),di.stop()};function Tt(A){A.preventDefault(),Eo("WebGLRenderer: Context Lost."),G=!0}function qt(){Eo("WebGLRenderer: Context Restored."),G=!1;const A=P.autoReset,W=bt.enabled,j=bt.autoUpdate,Y=bt.needsUpdate,X=bt.type;at(),P.autoReset=A,bt.enabled=W,bt.autoUpdate=j,bt.needsUpdate=Y,bt.type=X}function xe(A){re("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function de(A){const W=A.target;W.removeEventListener("dispose",de),In(W)}function In(A){Dn(A),y.remove(A)}function Dn(A){const W=y.get(A).programs;W!==void 0&&(W.forEach(function(j){dt.releaseProgram(j)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,j,Y,X,pt){W===null&&(W=zt);const xt=X.isMesh&&X.matrixWorld.determinant()<0,mt=yh(A,W,j,Y,X);gt.setMaterial(Y,xt);let Rt=j.index,It=1;if(Y.wireframe===!0){if(Rt=Q.getWireframeAttribute(j),Rt===void 0)return;It=2}const $t=j.drawRange,ie=j.attributes.position;let Lt=$t.start*It,me=($t.start+$t.count)*It;pt!==null&&(Lt=Math.max(Lt,pt.start*It),me=Math.min(me,(pt.start+pt.count)*It)),Rt!==null?(Lt=Math.max(Lt,0),me=Math.min(me,Rt.count)):ie!=null&&(Lt=Math.max(Lt,0),me=Math.min(me,ie.count));const Ae=me-Lt;if(Ae<0||Ae===1/0)return;ht.setup(X,Y,mt,j,Rt);let Ee,ge=ne;if(Rt!==null&&(Ee=et.get(Rt),ge=H,ge.setIndex(Ee)),X.isMesh)Y.wireframe===!0?(gt.setLineWidth(Y.wireframeLinewidth*jt()),ge.setMode(B.LINES)):ge.setMode(B.TRIANGLES);else if(X.isLine){let ke=Y.linewidth;ke===void 0&&(ke=1),gt.setLineWidth(ke*jt()),X.isLineSegments?ge.setMode(B.LINES):X.isLineLoop?ge.setMode(B.LINE_LOOP):ge.setMode(B.LINE_STRIP)}else X.isPoints?ge.setMode(B.POINTS):X.isSprite&&ge.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))ge.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ke=X._multiDrawStarts,Pt=X._multiDrawCounts,Ze=X._multiDrawCount,le=Rt?et.get(Rt).bytesPerElement:1,an=y.get(Y).currentProgram.getUniforms();for(let gn=0;gn<Ze;gn++)an.setValue(B,"_gl_DrawID",gn),ge.render(ke[gn]/le,Pt[gn])}else if(X.isInstancedMesh)ge.renderInstances(Lt,Ae,X.count);else if(j.isInstancedBufferGeometry){const ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pt=Math.min(j.instanceCount,ke);ge.renderInstances(Lt,Ae,Pt)}else ge.render(Lt,Ae)};function qa(A,W,j){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=ze,A.needsUpdate=!0,Ns(A,W,j),A.side=Cn,A.needsUpdate=!0,Ns(A,W,j),A.side=un):Ns(A,W,j)}this.compile=function(A,W,j=null){j===null&&(j=A),C=rt.get(j),C.init(W),R.push(C),j.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),A!==j&&A.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),C.setupLights();const Y=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pt=X.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){const mt=pt[xt];qa(mt,j,X),Y.add(mt)}else qa(pt,j,X),Y.add(pt)}),C=R.pop(),Y},this.compileAsync=function(A,W,j=null){const Y=this.compile(A,W,j);return new Promise(X=>{function pt(){if(Y.forEach(function(xt){y.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){X(A);return}setTimeout(pt,10)}kt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Oo=null;function xh(A){Oo&&Oo(A)}function ja(){di.stop()}function $a(){di.start()}const di=new oh;di.setAnimationLoop(xh),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(A){Oo=A,J.setAnimationLoop(A),A===null?di.stop():di.start()},J.addEventListener("sessionstart",ja),J.addEventListener("sessionend",$a),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const j=J.enabled===!0&&J.isPresenting===!0,Y=x!==null&&(L===null||j)&&x.begin(T,L);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(W),W=J.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,W,L),C=rt.get(A,R.length),C.init(W),R.push(C),fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ot.setFromProjectionMatrix(fe,bn,W.reversedDepth),Bt=this.localClippingEnabled,At=lt.init(this.clippingPlanes,Bt),M=Vt.get(A,b.length),M.init(),b.push(M),J.enabled===!0&&J.isPresenting===!0){const xt=T.xr.getDepthSensingMesh();xt!==null&&Bo(xt,W,-1/0,T.sortObjects)}Bo(A,W,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(Zt,Yt),Gt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Gt&&Ct.addToRenderList(M,A),this.info.render.frame++,At===!0&&lt.beginShadows();const X=C.state.shadowsArray;if(bt.render(X,A,W),At===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&x.hasRenderPass())===!1){const xt=M.opaque,mt=M.transmissive;if(C.setupLights(),W.isArrayCamera){const Rt=W.cameras;if(mt.length>0)for(let It=0,$t=Rt.length;It<$t;It++){const ie=Rt[It];Za(xt,mt,A,ie)}Gt&&Ct.render(A);for(let It=0,$t=Rt.length;It<$t;It++){const ie=Rt[It];Ka(M,A,ie,ie.viewport)}}else mt.length>0&&Za(xt,mt,A,W),Gt&&Ct.render(A),Ka(M,A,W)}L!==null&&z===0&&(V.updateMultisampleRenderTarget(L),V.updateRenderTargetMipmap(L)),Y&&x.end(T),A.isScene===!0&&A.onAfterRender(T,A,W),ht.resetDefaultState(),F=-1,U=null,R.pop(),R.length>0?(C=R[R.length-1],At===!0&&lt.setGlobalState(T.clippingPlanes,C.state.camera)):C=null,b.pop(),b.length>0?M=b[b.length-1]:M=null};function Bo(A,W,j,Y){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ot.intersectsSprite(A)){Y&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);const xt=Et.update(A),mt=A.material;mt.visible&&M.push(A,xt,mt,j,Dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ot.intersectsObject(A))){const xt=Et.update(A),mt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Dt.copy(xt.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(mt)){const Rt=xt.groups;for(let It=0,$t=Rt.length;It<$t;It++){const ie=Rt[It],Lt=mt[ie.materialIndex];Lt&&Lt.visible&&M.push(A,xt,Lt,j,Dt.z,ie)}}else mt.visible&&M.push(A,xt,mt,j,Dt.z,null)}}const pt=A.children;for(let xt=0,mt=pt.length;xt<mt;xt++)Bo(pt[xt],W,j,Y)}function Ka(A,W,j,Y){const{opaque:X,transmissive:pt,transparent:xt}=A;C.setupLightsView(j),At===!0&&lt.setGlobalState(T.clippingPlanes,j),Y&&gt.viewport(N.copy(Y)),X.length>0&&Ls(X,W,j),pt.length>0&&Ls(pt,W,j),xt.length>0&&Ls(xt,W,j),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Za(A,W,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Y.id]===void 0){const Lt=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Y.id]=new An(1,1,{generateMipmaps:!0,type:Lt?jn:en,minFilter:Ei,samples:Math.max(4,Wt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const pt=C.state.transmissionRenderTarget[Y.id],xt=Y.viewport||N;pt.setSize(xt.z*T.transmissionResolutionScale,xt.w*T.transmissionResolutionScale);const mt=T.getRenderTarget(),Rt=T.getActiveCubeFace(),It=T.getActiveMipmapLevel();T.setRenderTarget(pt),T.getClearColor(q),st=T.getClearAlpha(),st<1&&T.setClearColor(16777215,.5),T.clear(),Gt&&Ct.render(j);const $t=T.toneMapping;T.toneMapping=Tn;const ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),C.setupLightsView(Y),At===!0&&lt.setGlobalState(T.clippingPlanes,Y),Ls(A,j,Y),V.updateMultisampleRenderTarget(pt),V.updateRenderTargetMipmap(pt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let me=0,Ae=W.length;me<Ae;me++){const Ee=W[me],{object:ge,geometry:ke,material:Pt,group:Ze}=Ee;if(Pt.side===un&&ge.layers.test(Y.layers)){const le=Pt.side;Pt.side=ze,Pt.needsUpdate=!0,Ja(ge,j,Y,ke,Pt,Ze),Pt.side=le,Pt.needsUpdate=!0,Lt=!0}}Lt===!0&&(V.updateMultisampleRenderTarget(pt),V.updateRenderTargetMipmap(pt))}T.setRenderTarget(mt,Rt,It),T.setClearColor(q,st),ie!==void 0&&(Y.viewport=ie),T.toneMapping=$t}function Ls(A,W,j){const Y=W.isScene===!0?W.overrideMaterial:null;for(let X=0,pt=A.length;X<pt;X++){const xt=A[X],{object:mt,geometry:Rt,group:It}=xt;let $t=xt.material;$t.allowOverride===!0&&Y!==null&&($t=Y),mt.layers.test(j.layers)&&Ja(mt,W,j,Rt,$t,It)}}function Ja(A,W,j,Y,X,pt){A.onBeforeRender(T,W,j,Y,X,pt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(T,W,j,Y,A,pt),X.transparent===!0&&X.side===un&&X.forceSinglePass===!1?(X.side=ze,X.needsUpdate=!0,T.renderBufferDirect(j,W,Y,X,A,pt),X.side=Cn,X.needsUpdate=!0,T.renderBufferDirect(j,W,Y,X,A,pt),X.side=un):T.renderBufferDirect(j,W,Y,X,A,pt),A.onAfterRender(T,W,j,Y,X,pt)}function Ns(A,W,j){W.isScene!==!0&&(W=zt);const Y=y.get(A),X=C.state.lights,pt=C.state.shadowsArray,xt=X.state.version,mt=dt.getParameters(A,X.state,pt,W,j),Rt=dt.getProgramCacheKey(mt);let It=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,Y.fog=W.fog;const $t=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=tt.get(A.envMap||Y.environment,$t),Y.envMapRotation=Y.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,It===void 0&&(A.addEventListener("dispose",de),It=new Map,Y.programs=It);let ie=It.get(Rt);if(ie!==void 0){if(Y.currentProgram===ie&&Y.lightsStateVersion===xt)return tc(A,mt),ie}else mt.uniforms=dt.getUniforms(A),A.onBeforeCompile(mt,T),ie=dt.acquireProgram(mt,Rt),It.set(Rt,ie),Y.uniforms=mt.uniforms;const Lt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),tc(A,mt),Y.needsLights=wh(A),Y.lightsStateVersion=xt,Y.needsLights&&(Lt.ambientLightColor.value=X.state.ambient,Lt.lightProbe.value=X.state.probe,Lt.directionalLights.value=X.state.directional,Lt.directionalLightShadows.value=X.state.directionalShadow,Lt.spotLights.value=X.state.spot,Lt.spotLightShadows.value=X.state.spotShadow,Lt.rectAreaLights.value=X.state.rectArea,Lt.ltc_1.value=X.state.rectAreaLTC1,Lt.ltc_2.value=X.state.rectAreaLTC2,Lt.pointLights.value=X.state.point,Lt.pointLightShadows.value=X.state.pointShadow,Lt.hemisphereLights.value=X.state.hemi,Lt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Lt.spotLightMatrix.value=X.state.spotLightMatrix,Lt.spotLightMap.value=X.state.spotLightMap,Lt.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=ie,Y.uniformsList=null,ie}function Qa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=yo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function tc(A,W){const j=y.get(A);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function yh(A,W,j,Y,X){W.isScene!==!0&&(W=zt),V.resetTextureUnits();const pt=W.fog,xt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?W.environment:null,mt=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:es,Rt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,It=tt.get(Y.envMap||xt,Rt),$t=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ie=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!j.morphAttributes.position,me=!!j.morphAttributes.normal,Ae=!!j.morphAttributes.color;let Ee=Tn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ee=T.toneMapping);const ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ke=ge!==void 0?ge.length:0,Pt=y.get(Y),Ze=C.state.lights;if(At===!0&&(Bt===!0||A!==U)){const Ue=A===U&&Y.id===F;lt.setState(Y,A,Ue)}let le=!1;Y.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ze.state.version||Pt.outputColorSpace!==mt||X.isBatchedMesh&&Pt.batching===!1||!X.isBatchedMesh&&Pt.batching===!0||X.isBatchedMesh&&Pt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pt.instancing===!1||!X.isInstancedMesh&&Pt.instancing===!0||X.isSkinnedMesh&&Pt.skinning===!1||!X.isSkinnedMesh&&Pt.skinning===!0||X.isInstancedMesh&&Pt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pt.instancingMorph===!1&&X.morphTexture!==null||Pt.envMap!==It||Y.fog===!0&&Pt.fog!==pt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==lt.numPlanes||Pt.numIntersection!==lt.numIntersection)||Pt.vertexAlphas!==$t||Pt.vertexTangents!==ie||Pt.morphTargets!==Lt||Pt.morphNormals!==me||Pt.morphColors!==Ae||Pt.toneMapping!==Ee||Pt.morphTargetsCount!==ke)&&(le=!0):(le=!0,Pt.__version=Y.version);let an=Pt.currentProgram;le===!0&&(an=Ns(Y,W,X));let gn=!1,ui=!1,Ci=!1;const _e=an.getUniforms(),Oe=Pt.uniforms;if(gt.useProgram(an.program)&&(gn=!0,ui=!0,Ci=!0),Y.id!==F&&(F=Y.id,ui=!0),gn||U!==A){gt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_e.setValue(B,"projectionMatrix",A.projectionMatrix),_e.setValue(B,"viewMatrix",A.matrixWorldInverse);const Jn=_e.map.cameraPosition;Jn!==void 0&&Jn.setValue(B,te.setFromMatrixPosition(A.matrixWorld)),Wt.logarithmicDepthBuffer&&_e.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_e.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),U!==A&&(U=A,ui=!0,Ci=!0)}if(Pt.needsLights&&(Ze.state.directionalShadowMap.length>0&&_e.setValue(B,"directionalShadowMap",Ze.state.directionalShadowMap,V),Ze.state.spotShadowMap.length>0&&_e.setValue(B,"spotShadowMap",Ze.state.spotShadowMap,V),Ze.state.pointShadowMap.length>0&&_e.setValue(B,"pointShadowMap",Ze.state.pointShadowMap,V)),X.isSkinnedMesh){_e.setOptional(B,X,"bindMatrix"),_e.setOptional(B,X,"bindMatrixInverse");const Ue=X.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),_e.setValue(B,"boneTexture",Ue.boneTexture,V))}X.isBatchedMesh&&(_e.setOptional(B,X,"batchingTexture"),_e.setValue(B,"batchingTexture",X._matricesTexture,V),_e.setOptional(B,X,"batchingIdTexture"),_e.setValue(B,"batchingIdTexture",X._indirectTexture,V),_e.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&_e.setValue(B,"batchingColorTexture",X._colorsTexture,V));const Zn=j.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&vt.update(X,j,an),(ui||Pt.receiveShadow!==X.receiveShadow)&&(Pt.receiveShadow=X.receiveShadow,_e.setValue(B,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&W.environment!==null&&(Oe.envMapIntensity.value=W.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=V0()),ui&&(_e.setValue(B,"toneMappingExposure",T.toneMappingExposure),Pt.needsLights&&Mh(Oe,Ci),pt&&Y.fog===!0&&Ft.refreshFogUniforms(Oe,pt),Ft.refreshMaterialUniforms(Oe,Y,_t,K,C.state.transmissionRenderTarget[A.id]),yo.upload(B,Qa(Pt),Oe,V)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(yo.upload(B,Qa(Pt),Oe,V),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_e.setValue(B,"center",X.center),_e.setValue(B,"modelViewMatrix",X.modelViewMatrix),_e.setValue(B,"normalMatrix",X.normalMatrix),_e.setValue(B,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ue=Y.uniformsGroups;for(let Jn=0,Ri=Ue.length;Jn<Ri;Jn++){const ec=Ue[Jn];yt.update(ec,an),yt.bind(ec,an)}}return an}function Mh(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function wh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,W,j){const Y=y.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),y.get(A.texture).__webglTexture=W,y.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const j=y.get(A);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};const Sh=B.createFramebuffer();this.setRenderTarget=function(A,W=0,j=0){L=A,I=W,z=j;let Y=null,X=!1,pt=!1;if(A){const mt=y.get(A);if(mt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(B.FRAMEBUFFER,mt.__webglFramebuffer),N.copy(A.viewport),k.copy(A.scissor),$=A.scissorTest,gt.viewport(N),gt.scissor(k),gt.setScissorTest($),F=-1;return}else if(mt.__webglFramebuffer===void 0)V.setupRenderTarget(A);else if(mt.__hasExternalTextures)V.rebindTextures(A,y.get(A.texture).__webglTexture,y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(mt.__boundDepthTexture!==$t){if($t!==null&&y.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(A)}}const Rt=A.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(pt=!0);const It=y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(It[W])?Y=It[W][j]:Y=It[W],X=!0):A.samples>0&&V.useMultisampledRTT(A)===!1?Y=y.get(A).__webglMultisampledFramebuffer:Array.isArray(It)?Y=It[j]:Y=It,N.copy(A.viewport),k.copy(A.scissor),$=A.scissorTest}else N.copy(Z).multiplyScalar(_t).floor(),k.copy(it).multiplyScalar(_t).floor(),$=nt;if(j!==0&&(Y=Sh),gt.bindFramebuffer(B.FRAMEBUFFER,Y)&&gt.drawBuffers(A,Y),gt.viewport(N),gt.scissor(k),gt.setScissorTest($),X){const mt=y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt.__webglTexture,j)}else if(pt){const mt=W;for(let Rt=0;Rt<A.textures.length;Rt++){const It=y.get(A.textures[Rt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Rt,It.__webglTexture,j,mt)}}else if(A!==null&&j!==0){const mt=y.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,mt.__webglTexture,j)}F=-1},this.readRenderTargetPixels=function(A,W,j,Y,X,pt,xt,mt=0){if(!(A&&A.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt){gt.bindFramebuffer(B.FRAMEBUFFER,Rt);try{const It=A.textures[mt],$t=It.format,ie=It.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+mt),!Wt.textureFormatReadable($t)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(ie)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Y&&j>=0&&j<=A.height-X&&B.readPixels(W,j,Y,X,ut.convert($t),ut.convert(ie),pt)}finally{const It=L!==null?y.get(L).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(A,W,j,Y,X,pt,xt,mt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(Rt=Rt[xt]),Rt)if(W>=0&&W<=A.width-Y&&j>=0&&j<=A.height-X){gt.bindFramebuffer(B.FRAMEBUFFER,Rt);const It=A.textures[mt],$t=It.format,ie=It.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+mt),!Wt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.bufferData(B.PIXEL_PACK_BUFFER,pt.byteLength,B.STREAM_READ),B.readPixels(W,j,Y,X,ut.convert($t),ut.convert(ie),0);const me=L!==null?y.get(L).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,me);const Ae=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await cd(B,Ae,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pt),B.deleteBuffer(Lt),B.deleteSync(Ae),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,j=0){const Y=Math.pow(2,-j),X=Math.floor(A.image.width*Y),pt=Math.floor(A.image.height*Y),xt=W!==null?W.x:0,mt=W!==null?W.y:0;V.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,xt,mt,X,pt),gt.unbindTexture()};const Eh=B.createFramebuffer(),bh=B.createFramebuffer();this.copyTextureToTexture=function(A,W,j=null,Y=null,X=0,pt=0){let xt,mt,Rt,It,$t,ie,Lt,me,Ae;const Ee=A.isCompressedTexture?A.mipmaps[pt]:A.image;if(j!==null)xt=j.max.x-j.min.x,mt=j.max.y-j.min.y,Rt=j.isBox3?j.max.z-j.min.z:1,It=j.min.x,$t=j.min.y,ie=j.isBox3?j.min.z:0;else{const Oe=Math.pow(2,-X);xt=Math.floor(Ee.width*Oe),mt=Math.floor(Ee.height*Oe),A.isDataArrayTexture?Rt=Ee.depth:A.isData3DTexture?Rt=Math.floor(Ee.depth*Oe):Rt=1,It=0,$t=0,ie=0}Y!==null?(Lt=Y.x,me=Y.y,Ae=Y.z):(Lt=0,me=0,Ae=0);const ge=ut.convert(W.format),ke=ut.convert(W.type);let Pt;W.isData3DTexture?(V.setTexture3D(W,0),Pt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(V.setTexture2DArray(W,0),Pt=B.TEXTURE_2D_ARRAY):(V.setTexture2D(W,0),Pt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Ze=B.getParameter(B.UNPACK_ROW_LENGTH),le=B.getParameter(B.UNPACK_IMAGE_HEIGHT),an=B.getParameter(B.UNPACK_SKIP_PIXELS),gn=B.getParameter(B.UNPACK_SKIP_ROWS),ui=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,It),B.pixelStorei(B.UNPACK_SKIP_ROWS,$t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ie);const Ci=A.isDataArrayTexture||A.isData3DTexture,_e=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Oe=y.get(A),Zn=y.get(W),Ue=y.get(Oe.__renderTarget),Jn=y.get(Zn.__renderTarget);gt.bindFramebuffer(B.READ_FRAMEBUFFER,Ue.__webglFramebuffer),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Ri=0;Ri<Rt;Ri++)Ci&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(A).__webglTexture,X,ie+Ri),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,y.get(W).__webglTexture,pt,Ae+Ri)),B.blitFramebuffer(It,$t,xt,mt,Lt,me,xt,mt,B.DEPTH_BUFFER_BIT,B.NEAREST);gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||y.has(A)){const Oe=y.get(A),Zn=y.get(W);gt.bindFramebuffer(B.READ_FRAMEBUFFER,Eh),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,bh);for(let Ue=0;Ue<Rt;Ue++)Ci?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,X,ie+Ue):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,X),_e?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zn.__webglTexture,pt,Ae+Ue):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zn.__webglTexture,pt),X!==0?B.blitFramebuffer(It,$t,xt,mt,Lt,me,xt,mt,B.COLOR_BUFFER_BIT,B.NEAREST):_e?B.copyTexSubImage3D(Pt,pt,Lt,me,Ae+Ue,It,$t,xt,mt):B.copyTexSubImage2D(Pt,pt,Lt,me,It,$t,xt,mt);gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else _e?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Pt,pt,Lt,me,Ae,xt,mt,Rt,ge,ke,Ee.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,pt,Lt,me,Ae,xt,mt,Rt,ge,Ee.data):B.texSubImage3D(Pt,pt,Lt,me,Ae,xt,mt,Rt,ge,ke,Ee):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pt,Lt,me,xt,mt,ge,ke,Ee.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pt,Lt,me,Ee.width,Ee.height,ge,Ee.data):B.texSubImage2D(B.TEXTURE_2D,pt,Lt,me,xt,mt,ge,ke,Ee);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le),B.pixelStorei(B.UNPACK_SKIP_PIXELS,an),B.pixelStorei(B.UNPACK_SKIP_ROWS,gn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ui),pt===0&&W.generateMipmaps&&B.generateMipmap(Pt),gt.unbindTexture()},this.initRenderTarget=function(A){y.get(A).__webglFramebuffer===void 0&&V.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),gt.unbindTexture()},this.resetState=function(){I=0,z=0,L=null,gt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class X0{constructor(){S(this,"scene");S(this,"camera");S(this,"renderer");this.scene=new Ed,this.scene.background=new Ut(8900331);const t=window.innerWidth,e=window.innerHeight;this.camera=new tn(75,t/e,.1,5e3),this.camera.position.set(0,30,50),this.camera.lookAt(0,0,0),this.renderer=new W0({antialias:!0}),this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ss,document.body.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}render(){this.renderer.render(this.scene,this.camera)}}class Y0{constructor(t){S(this,"position",new O(0,5,0));S(this,"mesh");S(this,"targetAngle",0);S(this,"playerPosition",new O(0,0,0));S(this,"aiState","idle");S(this,"aiTimer",0);S(this,"leftArm",new oe);S(this,"rightArm",new oe);S(this,"slapTimer",0);S(this,"slapCooldown",1.2);S(this,"slapProgress",0);S(this,"slapActive",!1);S(this,"slapSide","left");S(this,"speakCallback",null);this.mesh=this.createCatGodMesh(),this.mesh.position.copy(this.position),t.add(this.mesh)}takeDamage(t){}isAlive(){return!0}createCatGodMesh(){const t=new oe,e=new ct(10,32,32),n=new St({color:16755200,transparent:!0,opacity:.15}),i=new D(e,n);t.add(i);const s=new ct(12,32,32),o=new St({color:16776960,transparent:!0,opacity:.1}),a=new D(s,o);t.add(a);const c=new Ht(3.5,5,3.5),l=new Nt({color:16766720,metalness:.4,roughness:.3}),d=new D(c,l);d.position.y=-.5,d.castShadow=!0,d.receiveShadow=!0,t.add(d);const u=new ct(1.5,32,32),h=new Nt({color:16764057,metalness:.1,roughness:.5}),f=new D(u,h);f.position.y=4,f.castShadow=!0,f.receiveShadow=!0,t.add(f);const p=new be(.5,1.5,16),v=new Nt({color:16764057,metalness:.1,roughness:.5}),m=new D(p,v);m.position.set(-1,5.5,0),m.rotation.z=.3,m.castShadow=!0,t.add(m);const g=new D(p,v);g.position.set(1,5.5,0),g.rotation.z=-.3,g.castShadow=!0,t.add(g);const _=new be(.25,.8,8),w=new Nt({color:16751052}),M=new D(_,w);M.position.set(-1,5.2,0),M.rotation.z=.3,t.add(M);const C=new D(_,w);C.position.set(1,5.2,0),C.rotation.z=-.3,t.add(C);const b=new ct(.6,16,16),R=new St({color:65280}),x=new D(b,R);x.position.set(-.6,4.5,1.3),t.add(x);const T=new D(b,R);T.position.set(.6,4.5,1.3),t.add(T);const G=new ct(.25,8,8),I=new St({color:0}),z=new D(G,I);z.position.set(-.6,4.5,1.5),t.add(z);const L=new D(G,I);L.position.set(.6,4.5,1.5),t.add(L);const F=new za({color:16777215}),U=[new O(-1.2,4,1),new O(-2,4,.8),new O(-1.2,4,-1),new O(-2,4,-1.2)];for(const jt of U){const B=new Se().setFromPoints([new O(-1,4,0),jt]),pe=new _a(B,F);t.add(pe)}const N=[new O(1.2,4,1),new O(2,4,.8),new O(1.2,4,-1),new O(2,4,-1.2)];for(const jt of N){const B=new Se().setFromPoints([new O(1,4,0),jt]),pe=new _a(B,F);t.add(pe)}const k=new ct(.2,8,8),$=new Nt({color:16751052}),q=new D(k,$);q.position.set(0,3.8,1.5),t.add(q);const st=new Ke(5,.4,16,100),ot=new St({color:16776960}),K=new D(st,ot);K.rotation.x=Math.PI/3,K.position.y=6,t.add(K);const _t=new Ke(5.5,.2,16,100),Zt=new St({color:16777215}),Yt=new D(_t,Zt);Yt.rotation.x=Math.PI/3.5,Yt.position.y=6.2,t.add(Yt);const Z=new be(.3,3,8),it=new Nt({color:16766720,metalness:.3}),nt=new D(Z,it);nt.position.set(0,2,-2),nt.rotation.x=.8,nt.castShadow=!0,t.add(nt),this.buildArms(t);const Ot=new ct(1.8,16,16),At=new St({color:16777113,transparent:!0,opacity:.3}),Bt=new D(Ot,At);Bt.position.y=4.5,t.add(Bt);const fe=new Se,te=50,Dt=new Float32Array(te*3);for(let jt=0;jt<te*3;jt+=3)Dt[jt]=(Math.random()-.5)*8,Dt[jt+1]=(Math.random()-.5)*8+4,Dt[jt+2]=(Math.random()-.5)*8;fe.setAttribute("position",new Xe(Dt,3));const zt=new os({size:.3,color:16776960,transparent:!0,opacity:.8}),Gt=new Ai(fe,zt);return t.add(Gt),t}buildArms(t){const e=new Nt({color:16764057}),n=new Nt({color:16777215,metalness:.5}),i=new Qt(.3,.25,1.6,8),s=new Qt(.25,.2,1.3,8),o=new Ht(.8,.35,.9),a=new be(.09,.45,6);this.leftArm=new oe,this.leftArm.position.set(-2,1.2,0);const c=new D(i,e);c.rotation.z=Math.PI/4,c.position.set(-.55,0,0),c.castShadow=!0,this.leftArm.add(c);const l=new D(s,e);l.rotation.z=Math.PI/5,l.position.set(-1.25,-.4,0),l.castShadow=!0,this.leftArm.add(l);const d=new D(o,e);d.position.set(-1.9,-.75,0),this.leftArm.add(d);for(let p=0;p<3;p++){const v=new D(a,n);v.position.set(-1.9+(p-1)*.22,-.95,.42),v.rotation.x=-.6,this.leftArm.add(v)}t.add(this.leftArm),this.rightArm=new oe,this.rightArm.position.set(2,1.2,0);const u=new D(i,e);u.rotation.z=-Math.PI/4,u.position.set(.55,0,0),u.castShadow=!0,this.rightArm.add(u);const h=new D(s,e);h.rotation.z=-Math.PI/5,h.position.set(1.25,-.4,0),h.castShadow=!0,this.rightArm.add(h);const f=new D(o,e);f.position.set(1.9,-.75,0),this.rightArm.add(f);for(let p=0;p<3;p++){const v=new D(a,n);v.position.set(1.9+(p-1)*.22,-.95,.42),v.rotation.x=-.6,this.rightArm.add(v)}t.add(this.rightArm)}update(t,e){this.playerPosition.copy(e);const n=this.playerPosition.distanceTo(this.position);this.updateAI(t,n);const i=Date.now()*.001,s=Math.sin(i*2)*.5;if(this.position.y=5+s,this.mesh.position.copy(this.position),this.mesh.rotation.y+=(this.targetAngle-this.mesh.rotation.y)*.1,this.aiTimer+=t,this.aiTimer>4&&(this.aiTimer=0,this.speakAI(n)),this.slapTimer+=t,n<8&&this.slapTimer>=this.slapCooldown&&!this.slapActive&&(this.slapActive=!0,this.slapProgress=0,this.slapSide=Math.random()<.5?"left":"right",this.slapTimer=0,console.log("🐱 Cat God: *SLAP* get away from me mortal!!")),this.slapActive){this.slapProgress+=t*4.5;const o=this.slapSide==="left"?this.leftArm:this.rightArm,a=this.slapSide==="left"?-1:1;if(this.slapProgress<.5){const c=this.slapProgress*2;o.rotation.z=a*c*(Math.PI/2.5),o.rotation.x=-c*.4}else if(this.slapProgress<1){const c=(this.slapProgress-.5)*2;o.rotation.z=a*(1-c)*(Math.PI/2.5),o.rotation.x=-((1-c)*.4)+c*(Math.PI/1.8)}else o.rotation.z=0,o.rotation.x=0,this.slapActive=!1}else{const o=Date.now()*.001;this.leftArm.rotation.z=Math.sin(o*1.2)*.06,this.rightArm.rotation.z=-Math.sin(o*1.2)*.06}for(let o=0;o<this.mesh.children.length;o++){const a=this.mesh.children[o];a instanceof D&&a.geometry instanceof Ke&&(a.rotation.z+=.012,a.rotation.x+=.005),a instanceof D&&a.geometry instanceof ct&&o>10&&(a.rotation.x+=.008,a.rotation.y+=.01),a instanceof Ai&&(a.rotation.x+=.003,a.rotation.y+=.004)}this.mesh.children[3]&&(this.mesh.children[3].rotation.z+=Math.sin(i*3)*.01),this.mesh.children[4]&&(this.mesh.children[4].rotation.z-=Math.sin(i*3)*.01)}updateAI(t,e){e<12?(this.aiState="dominant",this.moveAwayFromPlayer(t,2.5)):e<30?(this.aiState="curious",this.moveTowardPlayer(t,1.2)):(this.aiState="idle",this.randomWalk(t,1.5))}moveTowardPlayer(t,e){const n=this.playerPosition.clone().sub(this.position);n.y=0,n.lengthSq()>.01&&(n.normalize(),this.targetAngle=Math.atan2(n.z,n.x),this.position.add(n.multiplyScalar(e*t)))}moveAwayFromPlayer(t,e){const n=this.position.clone().sub(this.playerPosition);n.y=0,n.lengthSq()>.01&&(n.normalize(),this.targetAngle=Math.atan2(n.z,n.x),this.position.add(n.multiplyScalar(e*t)))}speakAI(t){const e=["I sense a mortal presence... approach with respect.","The baby god knows your footsteps.","Bow to me and I may grant you a yarn.","I will protect this realm with holy fur.","The whiskers of fate are twitching."];let n=e[Math.floor(Math.random()*e.length)];t<12?n="You are too close to the divine kitty. Back away, human.":t<30&&(n="Curiosity is a dangerous toy.");const i=this.aiState==="dominant"?"[DOMINANT] ":this.aiState==="curious"?"[CURIOUS] ":"[IDLE] ";console.log(`🐱 Cat God AI: "${i}${n}"`),this.speakCallback?.(this.position,n,9)}randomWalk(t,e=1.5){Math.random()<.02&&(this.targetAngle=Math.random()*Math.PI*2);const n=Math.cos(this.targetAngle)*e,i=Math.sin(this.targetAngle)*e;this.position.x+=n*t,this.position.z+=i*t,this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z))}setSpeakCallback(t){this.speakCallback=t}getMesh(){return this.mesh}isIndestructible(){return!0}respawn(){this.position.set(0,5,0),this.mesh.position.copy(this.position),console.log("🐱 Cat God respawns! You cannot destroy the divine!")}}const ai={fish:{name:"Fish",icon:"🐟",description:"speed x2.2 for 10s"},catnip:{name:"Catnip",icon:"🌿",description:"reality wobble 8s"},potion:{name:"Potion",icon:"🧪",description:"restore 40 HP"},void_shard:{name:"Void Shard",icon:"💜",description:"30 dmg AoE 10r (E)"},onion:{name:"Onion",icon:"🧅",description:"20 dmg AoE tribute (E)"},mega_potion:{name:"Mega Potion",icon:"💊",description:"full heal (E)"},turbo_fish:{name:"Turbo Fish",icon:"🐡",description:"speed x4 for 5s (E)"},bomb:{name:"Bomb",icon:"💣",description:"60 dmg AoE 15r (E)"},lightning:{name:"Lightning",icon:"⚡",description:"chain 25dmg 5 targets (E)"},holy_water:{name:"Holy Water",icon:"🫧",description:"insta-kill emos nearby (E)"},disco_ball:{name:"Disco Ball",icon:"🪩",description:"stun all in 10r 8s (E)"},time_crystal:{name:"Time Crystal",icon:"🔮",description:"slow motion x0.4 for 10s (E)"},star_piece:{name:"Star Piece",icon:"⭐",description:"invincible 3s (E)"},teleporter:{name:"Teleporter",icon:"🌀",description:"warp to random (E)"},warp_stone:{name:"Warp Stone",icon:"🪨",description:"warp to Cat God (E)"},cheese:{name:"Cheese",icon:"🧀",description:"heal 8 HP (E)"},bandage:{name:"Bandage",icon:"🩹",description:"heal 25 HP over 10s (E)"},boomerang:{name:"Boomerang",icon:"🪃",description:"20 dmg all in 12r (E)"},megaphone:{name:"Megaphone",icon:"📣",description:"blast all NPCs 30u away (E)"},glue_trap:{name:"Glue Trap",icon:"🕸",description:"freeze all in 10r 6s (E)"},nuke:{name:"Nuke",icon:"☢",description:"100 dmg ALL in 25r (E)"},plasma_cannon:{name:"Plasma Cannon",icon:"🔫",description:"40 dmg rang 20u single (E)"},mystery_box:{name:"Mystery Box",icon:"📦",description:"spawn 3 random items (E)"},cursed_egg:{name:"Cursed Egg",icon:"🥚",description:"random chaotic effect (E)"},party_hat:{name:"Party Hat",icon:"🎉",description:"make nearby NPCs chat (E)"},rainbow:{name:"Rainbow",icon:"🌈",description:"spawn 5 random NPCs (E)"},coffee:{name:"Coffee",icon:"☕",description:"clear all debuffs (E)"},void_key:{name:"Void Key",icon:"🗝",description:"instantly enter the void (E)"},barney_ticket:{name:"Barney Ticket",icon:"🦕",description:"summon Barney nearby (E)"},onion_layer:{name:"Onion Layer",icon:"🫧",description:"absorb 1 hit completely (E)"},uwu_scroll:{name:"Uwu Scroll",icon:"📜",description:"NPCs say uwu for 20s (E)"},donut:{name:"Donut",icon:"🍩",description:"5s confusion + random move (E)"},hot_sauce:{name:"Hot Sauce",icon:"🌶",description:"speed x3 chaotic 5s (E)"},cheese_wheel:{name:"Cheese Wheel",icon:"🎡",description:"35 dmg hit nearest NPC (E)"},soul_gem:{name:"Soul Gem",icon:"💎",description:"auto-revive once on death (E)"},shield:{name:"Shield",icon:"🛡",description:"absorb 3 hits (E)"},sword:{name:"Sword",icon:"⚔",description:"+20 atk dmg (passive)"},cat_charm:{name:"Cat Charm",icon:"🐾",description:"+1 range +3 dmg (passive)"},flaming_sword:{name:"Flaming Sword",icon:"🔥",description:"+35 atk dmg (passive)"},giant_hammer:{name:"Giant Hammer",icon:"🔨",description:"+50 dmg -1.5 range (passive)"},void_armor:{name:"Void Armor",icon:"🌑",description:"-50% dmg taken (passive)"},cursed_ring:{name:"Cursed Ring",icon:"💍",description:"x2 dmg dealt + received (passive)"},shrek_ears:{name:"Shrek Ears",icon:"👂",description:"mud immune (passive)"},cat_crown:{name:"Cat Crown",icon:"👑",description:"NPCs ignore you (passive)"},cheese_armor:{name:"Cheese Armor",icon:"🫕",description:"-30% dmg taken (passive)"},moon_shard:{name:"Moon Shard",icon:"🌙",description:"triple jump (passive)"},spring_shoes:{name:"Spring Shoes",icon:"👟",description:"double jump (passive)"},void_blade:{name:"Void Blade",icon:"🗡",description:"+40 dmg +2 range (passive)"},lucky_charm:{name:"Lucky Charm",icon:"🍀",description:"double loot chance (passive)"},laser_pointer:{name:"Laser Pointer",icon:"🔴",description:"NPCs attack 50% less (passive)"}},sl=Object.keys(ai),ol={normal:["fish","fish","cat_charm","cheese","bandage",null,null],cat:["fish","fish","cat_charm","cheese",null,null,null],jesus:["holy_water","star_piece","mega_potion","cat_charm",null],robot:["lightning","plasma_cannon","shield","cat_charm",null],orb:["time_crystal","void_shard","teleporter",null,null],angel:["mega_potion","star_piece","cat_crown","bandage",null],pirate:["boomerang","cheese_wheel","lucky_charm","cheese",null],wizard:["time_crystal","mystery_box","rainbow","cursed_egg",null],vampire:["cursed_ring","onion_layer","soul_gem","bandage",null],disco:["disco_ball","party_hat","hot_sauce","fish",null],shadow:["void_shard","void_blade","laser_pointer","catnip",null],barney:["mega_potion","cat_crown","party_hat","uwu_scroll",null],emo:["void_shard","void_shard","catnip","disco_ball","cursed_ring",null],shrek:["onion","onion","potion","shrek_ears","bomb",null],buffcat:["flaming_sword","giant_hammer","spring_shoes","cat_charm",null],voidcat:["void_shard","time_crystal","void_armor","void_blade",null],hybrid:["fish","catnip","moon_shard","teleporter",null],default:["fish","cat_charm","cheese",null,null,null]},q0=new Set(["sword","cat_charm","flaming_sword","giant_hammer","void_armor","cursed_ring","shrek_ears","cat_crown","cheese_armor","moon_shard","spring_shoes","void_blade","lucky_charm","laser_pointer"]);class wa{constructor(){S(this,"slots",new Array(6).fill(null));S(this,"selectedSlot",0);S(this,"onInventoryChange",null)}addItem(t){for(const e of this.slots)if(e&&e.type===t)return e.quantity++,this.onInventoryChange?.(),!0;for(let e=0;e<this.slots.length;e++)if(!this.slots[e]){const n=ai[t];return this.slots[e]={type:t,name:n.name,icon:n.icon,quantity:1,description:n.description},this.onInventoryChange?.(),!0}return!1}getEquipped(){return this.slots[this.selectedSlot]}selectSlot(t){this.selectedSlot=Math.max(0,Math.min(5,t)),this.onInventoryChange?.()}useEquipped(){const t=this.slots[this.selectedSlot];if(!t)return null;const e=t.type;return q0.has(e)||(t.quantity--,t.quantity<=0&&(this.slots[this.selectedSlot]=null),this.onInventoryChange?.()),e}getAttackBonus(){const t=this.getEquipped()?.type;return t?t==="sword"?20:t==="cat_charm"?3:t==="flaming_sword"?35:t==="giant_hammer"?50:t==="void_blade"?40:0:0}getRangeBonus(){const t=this.getEquipped()?.type;return t?t==="cat_charm"?1:t==="sword"?.5:t==="giant_hammer"?-1.5:t==="void_blade"?2:0:0}getDamageTakenMult(){const t=this.getEquipped()?.type;return t==="void_armor"?.5:t==="cheese_armor"?.7:t==="cursed_ring"?2:1}getDamageDealtMult(){return this.getEquipped()?.type==="cursed_ring"?2:1}isMudImmune(){return this.getEquipped()?.type==="shrek_ears"}isCatCrownActive(){return this.getEquipped()?.type==="cat_crown"}isLaserPointerActive(){return this.getEquipped()?.type==="laser_pointer"}isLuckyCharmActive(){return this.getEquipped()?.type==="lucky_charm"}getJumpMult(){const t=this.getEquipped()?.type;return t==="moon_shard"?3:t==="spring_shoes"?2:1}static rollLoot(t){const e=ol[t]??ol.default;return e[Math.floor(Math.random()*e.length)]??null}}class hi{constructor(t){S(this,"position");S(this,"velocity");S(this,"mesh");S(this,"isAlive_",!0);S(this,"targetAngle",0);S(this,"dialogues",[]);S(this,"dialogueTimer",0);S(this,"bubbleHeadOffset",3.5);S(this,"speakCallback",null);S(this,"hp",40);S(this,"maxHp",40);S(this,"attackTimer_",0);S(this,"attackInterval_",2);S(this,"stunTimer",0);S(this,"equippedItem",null);S(this,"itemUseCooldown",0);S(this,"ITEM_USE_INTERVAL",8);S(this,"npcShieldHits",0);S(this,"npcInvincible",!1);S(this,"npcInvincibleTimer",0);S(this,"domainActive",!1);S(this,"domainTimer",0);S(this,"domainCooldown",0);S(this,"DOMAIN_CHANCE_BASE",.003);S(this,"DOMAIN_CHANCE_LOW_HP",.025);S(this,"DOMAIN_COOLDOWN_SECS",60);S(this,"verticalVelocity",0);S(this,"isGrounded",!0);S(this,"GROUND_Y",2);S(this,"GRAVITY",-28);S(this,"NPC_JUMP_FORCE",10);this.position=t.clone(),this.velocity=new O(0,0,0),this.mesh=new oe}randomWalk(t,e=2){if(this.isStunned()){this.applyGravity(t),this.mesh.position.copy(this.position);return}Math.random()<.03&&(this.targetAngle=Math.random()*Math.PI*2),this.isGrounded&&Math.random()<.004&&(this.verticalVelocity=this.NPC_JUMP_FORCE,this.isGrounded=!1),this.applyGravity(t),this.velocity.x=Math.cos(this.targetAngle)*e,this.velocity.z=Math.sin(this.targetAngle)*e,this.position.add(this.velocity.clone().multiplyScalar(t)),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z)),this.mesh.position.copy(this.position),(this.mesh instanceof oe||this.mesh.rotation)&&(this.mesh.rotation.y+=(this.targetAngle-this.mesh.rotation.y)*.1)}applyGravity(t){this.verticalVelocity+=this.GRAVITY*t,this.position.y+=this.verticalVelocity*t,this.position.y<=this.GROUND_Y&&(this.position.y=this.GROUND_Y,this.verticalVelocity=0,this.isGrounded=!0)}speak(){if(this.dialogues.length>0){const t=this.dialogues[Math.floor(Math.random()*this.dialogues.length)];console.log(`🐱 ${t}`),this.speakCallback?.(this.position,t,this.bubbleHeadOffset)}}setSpeakCallback(t){this.speakCallback=t}getMesh(){return this.mesh}getPosition(){return this.position}isAlive(){return this.isAlive_}die(){this.isAlive_=!1}getHp(){return this.hp}getMaxHp(){return this.maxHp}stun(t){this.stunTimer=Math.max(this.stunTimer,t)}tickStun(t){this.stunTimer=Math.max(0,this.stunTimer-t)}isStunned(){return this.stunTimer>0}triggerSpeak(){this.speak()}setMaxHp(t){this.maxHp=t,this.hp=t}tickAttack(t,e,n,i){if(i<=0||this.stunTimer>0)return 0;if(this.attackTimer_-=e,this.attackTimer_<=0){if(this.position.distanceTo(t)<=n)return this.attackTimer_=this.attackInterval_,i;this.attackTimer_=.3}return 0}tickDomain(t){if(this.domainCooldown>0&&(this.domainCooldown-=t),this.domainActive)return this.domainTimer-=t,this.domainTimer<=0&&(this.domainActive=!1,this.domainCooldown=this.DOMAIN_COOLDOWN_SECS),!1;if(this.domainCooldown<=0&&this.isAlive_){const n=this.hp/Math.max(1,this.maxHp)<.25?this.DOMAIN_CHANCE_LOW_HP:this.DOMAIN_CHANCE_BASE;if(Math.random()<n*t)return this.forceActivateDomain(12)}return!1}forceActivateDomain(t=12){return this.domainActive?!1:(this.domainActive=!0,this.domainTimer=t,!0)}isDomainActive(){return this.domainActive}takeDamage(t){if(!this.npcInvincible){if(this.npcShieldHits>0){this.npcShieldHits--;return}this.hp=Math.max(0,this.hp-t),this.hp<=0&&this.die()}}equipItem(t){this.equippedItem=t,this.itemUseCooldown=1.5,this.speak()}tickNpcItem(t,e,n){if(this.npcInvincibleTimer>0&&(this.npcInvincibleTimer-=t,this.npcInvincibleTimer<=0&&(this.npcInvincible=!1)),!this.equippedItem||(this.itemUseCooldown-=t,this.itemUseCooldown>0))return null;const i=this.equippedItem;return["sword","cat_charm","flaming_sword","giant_hammer","void_armor","cursed_ring","shrek_ears","cat_crown","cheese_armor","moon_shard","spring_shoes","void_blade","lucky_charm","laser_pointer"].includes(i)?(this.itemUseCooldown=99999,null):(this.itemUseCooldown=this.ITEM_USE_INTERVAL+Math.random()*4,this.equippedItem=null,["potion","mega_potion","cheese","bandage","holy_water"].includes(i)?(this.hp=Math.min(this.maxHp,this.hp+(i==="mega_potion"?this.maxHp:40)),this.triggerSpeak(),"heal"):["bomb","nuke","void_shard","plasma_cannon","boomerang","lightning","cheese_wheel","onion","turbo_fish"].includes(i)?"bomb":["fish","turbo_fish","coffee","hot_sauce"].includes(i)?"speed":i==="shield"?(this.npcShieldHits=3,"shield"):i==="star_piece"?(this.npcInvincible=!0,this.npcInvincibleTimer=3,"invincible"):["disco_ball","glue_trap","megaphone","party_hat"].includes(i)?"stun_all":(this.hp=Math.min(this.maxHp,this.hp+15),"heal"))}}var $e=(r=>(r.NORMAL="normal",r.JESUS="jesus",r.ROBOT="robot",r.ORB="orb",r.ANGEL="angel",r.PIRATE="pirate",r.WIZARD="wizard",r.VAMPIRE="vampire",r.DISCO="disco",r.SHADOW="shadow",r))($e||{});class j0 extends hi{constructor(e,n){super(n);S(this,"catType");S(this,"speed",3);S(this,"floatOffset",Math.random()*Math.PI*2);this.catType=e,this.mesh=this.createCatMesh(),this.mesh.position.copy(this.position),this.setDialogues()}createCatMesh(){const e=new oe;switch(this.catType){case"normal":return this.createNormalCat(e);case"jesus":return this.createJesusCat(e);case"robot":return this.createRobotCat(e);case"orb":return this.createOrbCat(e);case"angel":return this.createAngelCat(e);case"pirate":return this.createPirateCat(e);case"wizard":return this.createWizardCat(e);case"vampire":return this.createVampireCat(e);case"disco":return this.createDiscoCat(e);case"shadow":return this.createShadowCat(e)}return e}createNormalCat(e){const n=new Ht(1,1.5,.8),i=new Nt({color:16746564}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new ct(.6,16,16),a=new D(o,i);a.position.y=1,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new be(.2,1.5,8),l=new D(c,i);l.position.set(0,.3,-.6),l.rotation.z=.5,l.castShadow=!0,e.add(l);const d=new ct(.15,8,8),u=new St({color:0}),h=new D(d,u);h.position.set(-.2,1.3,.5),e.add(h);const f=new D(d,u);return f.position.set(.2,1.3,.5),e.add(f),e}createJesusCat(e){this.createNormalCat(e);const n=new Ke(1,.15,16,100),i=new St({color:16776960}),s=new D(n,i);s.position.y=2,s.rotation.x=Math.PI/3,e.add(s);const o=new ct(1.5,16,16),a=new St({color:16777215,transparent:!0,opacity:.1,wireframe:!1}),c=new D(o,a);return e.add(c),e}createRobotCat(e){const n=new Ht(1,1.5,.8),i=new Nt({color:8947848,metalness:.8,roughness:.2}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new Ht(.8,.8,.8),a=new D(o,i);a.position.y=1.2,a.castShadow=!0,e.add(a);const c=new be(.1,.8,8),l=new D(c,i);l.position.y=2.2,e.add(l);const d=new ct(.15,8,8),u=new St({color:16711680}),h=new D(d,u);h.position.set(-.2,1.3,.5),e.add(h);const f=new D(d,u);return f.position.set(.2,1.3,.5),e.add(f),e}createOrbCat(e){const n=new ct(.8,16,16),i=new St({color:52479}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new ct(.15,8,8),a=new St({color:16777215}),c=new D(o,a);c.position.set(-.2,.3,.6),e.add(c);const l=new D(o,a);l.position.set(.2,.3,.6),e.add(l);const d=new Se,u=20,h=new Float32Array(u*3);for(let v=0;v<u*3;v++)h[v]=(Math.random()-.5)*4;d.setAttribute("position",new Xe(h,3));const f=new os({size:.2,color:65280}),p=new Ai(d,f);return e.add(p),e}createAngelCat(e){this.createNormalCat(e);const n=new be(1,.5,4),i=new Nt({color:13421772}),s=new D(n,i);s.position.set(-.8,1,0),s.rotation.z=Math.PI/4,e.add(s);const o=new D(n,i);o.position.set(.8,1,0),o.rotation.z=-Math.PI/4,e.add(o);const a=new Ke(1,.15,16,100),c=new St({color:16776960}),l=new D(a,c);return l.position.y=2,l.rotation.x=Math.PI/3,e.add(l),e}createPirateCat(e){this.createNormalCat(e);const n=new be(1,.4,8),i=new Nt({color:3355443}),s=new D(n,i);s.position.y=1.8,e.add(s);const o=new Do(.3,8),a=new St({color:0}),c=new D(o,a);return c.position.set(-.2,1.3,.5),c.position.z+=.01,e.add(c),e}createWizardCat(e){this.createNormalCat(e);const n=new be(.8,1.2,8),i=new Nt({color:4456703}),s=new D(n,i);s.position.y=2,e.add(s);const o=new Qt(.1,.1,2,8),a=new Nt({color:9127187}),c=new D(o,a);c.position.set(.8,1,0),c.rotation.z=Math.PI/4,e.add(c);const l=new ct(.3,8,8),d=new St({color:16711935}),u=new D(l,d);return u.position.set(1.2,2.2,0),e.add(u),e}createVampireCat(e){this.createNormalCat(e);const n=new Ht(1.5,2,.2),i=new Nt({color:13369344}),s=new D(n,i);s.position.z=-.5,s.position.y=.5,e.add(s);const o=new be(.15,.4,4),a=new St({color:16777215}),c=new D(o,a);c.position.set(-.15,.7,.6),c.rotation.z=Math.PI/6,e.add(c);const l=new D(o,a);return l.position.set(.15,.7,.6),l.rotation.z=-Math.PI/6,e.add(l),e}createDiscoCat(e){this.createNormalCat(e);const n=new ct(.4,8,8),i=[16711680,65280,255,16776960,16711935,65535];for(let s=0;s<6;s++){const o=new St({color:i[s]}),a=new D(n,o),c=s/6*Math.PI*2;a.position.x=Math.cos(c)*1,a.position.y=.5+Math.sin(c)*.5,e.add(a)}return e}createShadowCat(e){const n=new Ht(1,1.5,.8),i=new Nt({color:1710618,metalness:.4,roughness:.8}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new ct(.6,16,16),a=new D(o,i);a.position.y=1,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new be(.2,1.5,8),l=new D(c,i);l.position.set(0,.3,-.6),l.rotation.z=.5,l.castShadow=!0,e.add(l);const d=new ct(.15,8,8),u=new St({color:16724787}),h=new D(d,u);h.position.set(-.2,1.3,.5),e.add(h);const f=new D(d,u);return f.position.set(.2,1.3,.5),e.add(f),e}setDialogues(){switch(this.catType){case"normal":this.dialogues=["Meow!","Meow meow","Purrr...","Hiss!","Mew?","ORA ORA ORA! (tiny punch sound)","MUDA MUDA MUDA!","Yare yare... just a regular cat"];break;case"jesus":this.dialogues=["Blessed be the cat god","Forgive my human","Love all cats","Peace through purring","Meowmen","GURETO DAZE! This blessing!","Your next line is 'What a holy cat!'","WRYYYYYYY! Blessed meow!"];break;case"robot":this.dialogues=["Beep boop meow","Calculating cuteness...","ERROR: Too much cuteness","Meow.exe running","Processing treats","ZA WARUDO! Time to recharge!","STAND POWER ACTIVATED","Robot cat... MEOW PLATINUM!"];break;case"orb":this.dialogues=["The orb speaks...","Cosmic purring detected","MEOOOOOW from the void","All knowing feline","The sphere understands","I see all timelines... ゴゴゴゴゴ","STONE FREE! I'm liberated!","Floating between JoJo parts..."];break;case"angel":this.dialogues=["Wings carry my love","Divine meowing","Heavenly purrs","Angelic wishes","Blessed journey","GOLDEN EXPERIENCE! It's alive!","Flying through golden wind...","Heaven is where all cats are blessed"];break;case"pirate":this.dialogues=["Arrr meow matey!","Shiver me whiskers!","Treasure purrs ahead!","Avast ye scallywag!","X marks the meow!","OI JOSUKE! This treasure is amazing!","NIGERUNDAYO! From da kraken!","Sailin' the GOLDEN WIND seas!"];break;case"wizard":this.dialogues=["Meow-gical mysteries unfold","Spellcasting feline here!","Your wish is my purr","Wingardium Meow-osa!","Mystic cat wisdom","HAMON BREATHING! Meow technique!","Ancient jojo martial arts...","My stand is MEOW REQUIEM!"];break;case"vampire":this.dialogues=["I vant to suck your treats!","The night is meoow","Darkness calls to me","Blood vuns deep...","Bite me gently human","DIO! I am your meow servant!","THE STONE MASK TRANSFORMS ME!","WRYYYYYYY! ETERNAL DARKNESS!"];break;case"disco":this.dialogues=["Stayin' alive meow!","Boogie boogie purr!","Disco fever!","Dance with me feline!","Night fever meow!","TORTURE DANCE! PURR EDITION!","GOLDEN WIND DISCO INFERNO!","Giorno's drip is IMMACULATE!"];break;case"shadow":this.dialogues=["From shadows we rise...","Darkness is my home","Silent paws, silent meow","The void calls...","In darkness, all cats are equal","SHADOW MEOW REQUIEM!","EPITAPH shows your destiny!","King Crimson deleted your meow!"];break}}update(e){this.randomWalk(e,this.speed),Math.random()<5e-4&&this.speak();const n=Date.now()*.001+this.floatOffset;if(this.catType!=="orb"&&this.catType!=="angel"&&(this.mesh.position.y=1.5+Math.sin(n*2)*.08),this.mesh.scale.setScalar(1+Math.sin(n*3)*.02),this.catType==="orb"||this.catType==="angel"){const i=Math.sin(n*2+this.position.x)*.3;this.position.y=2+i,this.mesh.position.y=this.position.y}if(this.catType==="orb"&&(this.mesh.rotation.z+=.02),this.catType==="disco"&&(this.mesh.rotation.y+=.05,this.mesh.position.y=2+Math.sin(n)*.3),this.catType==="shadow"&&Math.random()<.01&&(this.mesh.position.y+=(Math.random()-.5)*.1),this.catType==="vampire"){this.mesh.position.y+=Math.sin(n*6)*.02;const i=Math.sin(n*.5)*2+5;this.velocity.multiplyScalar(i/this.speed)}this.catType==="wizard"&&Math.random()<.02&&(this.mesh.rotation.y+=(Math.random()-.5)*.3)}getType(){return this.catType}}class $0 extends hi{constructor(e){super(e);S(this,"singSongTimer",Math.random()*5);S(this,"singSongInterval",6+Math.random()*8);S(this,"walkTimer",0);S(this,"leftArm");S(this,"rightArm");S(this,"armWaveTimer",0);S(this,"isWaving",!1);S(this,"audioCtx",null);S(this,"songs",["I LOVE YOU, YOU LOVE ME","WE'RE A HAPPY FAMILY","WITH A GREAT BIG HUG AND A KISS FROM ME TO YOU","WON'T YOU SAY YOU LOVE ME TOO","I LOVE YOU, YOU LOVE ME","WE'RE BEST FRIENDS AS FRIENDS CAN BE","SUPER DEE DUPER!!","BIG PURPLE HUGS FOR EVERYONE!!","TODAY IS A BEAUTIFUL DAY!!","LET'S IMAGINE TOGETHER!!","SHARING AND CARING!! 💜","BARNEY IS YOUR DINOSAUR~ 🦕"]);this.bubbleHeadOffset=4.5,this.dialogues=this.songs;const{group:n,leftArm:i,rightArm:s}=this.buildMesh();this.mesh=n,this.leftArm=i,this.rightArm=s,this.mesh.position.copy(this.position);try{this.audioCtx=new(window.AudioContext||window.webkitAudioContext)}catch{}}buildMesh(){const e=new oe,n=new Nt({color:7024544,roughness:.75}),i=new Nt({color:8042056,roughness:.8}),s=new St({color:16777215}),o=new St({color:1118481}),a=new Nt({color:16766720,roughness:.6}),c=new St({color:16746666}),l=new ct(1.3,20,16),d=new D(l,n);d.scale.set(1,1.2,.95),d.position.set(0,1.8,0),d.castShadow=!0,e.add(d);const u=new ct(.9,16,14),h=new D(u,i);h.scale.set(.9,1,.35),h.position.set(0,1.85,1.05),e.add(h);const f=new ct(1,20,16),p=new D(f,n);p.scale.set(1,.9,1),p.position.set(0,3.55,0),p.castShadow=!0,e.add(p);const v=new ct(.65,16,12),m=new D(v,n);m.scale.set(1,.6,.9),m.position.set(0,3.2,.85),e.add(m);const g=new Qt(.55,.5,.08,20,1,!1,0,Math.PI),_=new D(g,c);_.rotation.x=-Math.PI/2,_.rotation.z=Math.PI,_.position.set(0,3.05,1.15),e.add(_);const w=new Ht(.18,.2,.1),M=new St({color:16775408});for(let Dt=-1;Dt<=1;Dt++){const zt=new D(w,M);zt.position.set(Dt*.25,3.12,1.42),e.add(zt)}const C=new ct(.28,12,12),b=new D(C,s);b.position.set(-.42,3.7,.82),e.add(b);const R=new D(C,s);R.position.set(.42,3.7,.82),e.add(R);const x=new ct(.16,8,8),T=new D(x,o);T.position.set(-.42,3.7,1.05),e.add(T);const G=new D(x,o);G.position.set(.42,3.7,1.05),e.add(G);const I=new ct(.07,6,6),z=new St({color:16729224});for(const Dt of[-.42,.42]){const zt=new D(I,z);zt.position.set(Dt,3.72,1.08),e.add(zt)}const L=new ct(.07,6,6),F=new D(L,o);F.position.set(-.2,3.35,1.38),e.add(F);const U=new D(L,o);U.position.set(.2,3.35,1.38),e.add(U);const N=new be(.18,.45,8),k=new Nt({color:4881451,roughness:.9}),$=[[0,4.4,-.3],[0,3.35,-.95],[0,2.9,-1.25],[0,2.45,-1.3],[0,1.9,-1.2]];for(const[Dt,zt,Gt]of $){const jt=new D(N,k);jt.position.set(Dt,zt,Gt),jt.rotation.x=Math.PI/8,e.add(jt)}const q=new oe;q.position.set(-1.45,2.5,0);const st=new Qt(.3,.25,.9,10),ot=new D(st,n);ot.position.set(0,-.45,0),ot.castShadow=!0,q.add(ot);const K=new Qt(.22,.18,.7,10),_t=new D(K,n);_t.position.set(0,-1.1,.18),_t.rotation.x=-.4,q.add(_t);const Zt=new ct(.25,8,8),Yt=new D(Zt,n);Yt.position.set(0,-1.55,.42),q.add(Yt);const Z=new Qt(.07,.04,.28,6);for(let Dt=-1;Dt<=1;Dt++){const zt=new D(Z,n);zt.position.set(Dt*.12,-1.8,.5),zt.rotation.x=-.6,q.add(zt)}q.rotation.z=Math.PI/12,e.add(q);const it=q.clone();it.position.set(1.45,2.5,0),it.rotation.z=-Math.PI/12,it.scale.x=-1,e.add(it);const nt=new Qt(.45,.4,1.1,12),Ot=new Qt(.38,.28,.9,12),At=new Ht(.55,.35,.85);for(const Dt of[-1,1]){const zt=new D(nt,n);zt.position.set(Dt*.6,.5,0),zt.castShadow=!0,e.add(zt);const Gt=new D(Ot,n);Gt.position.set(Dt*.6,-.4,.12),Gt.rotation.x=.15,Gt.castShadow=!0,e.add(Gt);const jt=new D(At,n);jt.position.set(Dt*.62,-1.05,.28),jt.castShadow=!0,e.add(jt)}const Bt=new Qt(.45,.08,1.8,10),fe=new D(Bt,n);fe.position.set(0,1.2,-1.6),fe.rotation.x=Math.PI/2.5,fe.castShadow=!0,e.add(fe);const te=new ct(.12,6,6);for(let Dt=0;Dt<6;Dt++){const zt=new D(te,a);zt.position.set((Math.random()-.5)*1.6,1.2+Math.random()*1.8,.9+Math.random()*.3),zt.scale.set(1,.5,.5),e.add(zt)}return{group:e,leftArm:q,rightArm:it}}playSingSound(){if(this.audioCtx)try{[261.63,329.63,392,523.25].forEach((n,i)=>{const s=this.audioCtx.createOscillator(),o=this.audioCtx.createGain();s.type="sine",s.frequency.value=n,o.gain.setValueAtTime(.12,this.audioCtx.currentTime+i*.18),o.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i*.18+.5),s.connect(o),o.connect(this.audioCtx.destination),s.start(this.audioCtx.currentTime+i*.18),s.stop(this.audioCtx.currentTime+i*.18+.5)})}catch{}}update(e){if(this.randomWalk(e,3.5),this.walkTimer+=e*5,this.mesh.position.y=this.position.y+Math.abs(Math.sin(this.walkTimer))*.15,this.singSongTimer+=e,this.singSongTimer>=this.singSongInterval&&(this.singSongTimer=0,this.singSongInterval=5+Math.random()*10,this.speak(),this.playSingSound(),this.isWaving=!0,this.armWaveTimer=0),this.isWaving){this.armWaveTimer+=e*4;const n=Math.sin(this.armWaveTimer)*.6;this.leftArm.rotation.z=Math.PI/12+n,this.rightArm.rotation.z=-(Math.PI/12+n),this.armWaveTimer>=Math.PI*3&&(this.isWaving=!1,this.leftArm.rotation.z=Math.PI/12,this.rightArm.rotation.z=-Math.PI/12)}}getType(){return"barney"}}class rl extends hi{constructor(e){super(e);S(this,"sceneTimer",Math.random()*10);S(this,"dialogueInterval",8+Math.random()*12);S(this,"walkTimer",0);S(this,"stand");S(this,"standActive",!1);S(this,"standTimer",0);S(this,"standCooldown",0);S(this,"standSummonDist",12);S(this,"shadowOrbs",[]);S(this,"orbAngles",[]);S(this,"standPulseTimer",0);S(this,"projectiles",[]);S(this,"playerPosRef",null);this.bubbleHeadOffset=3.8,this.dialogues=["nobody understands me","my chemical romance was right about everything","i welcome the darkness...","THE VOID -- is this emo enough for you","gerard way is my therapist","life is pain and so are you","im not like other NPCs","*stares into middle distance*","i listened to welcome to the black parade and ascended","the stand emerges when i feel feelings","darkness is just light with a bad attitude","we are never ever getting back together... UwU"];const{group:n,stand:i}=this.buildMesh();this.mesh=n,this.stand=i,this.mesh.position.copy(this.position),this.stand.visible=!1,console.log("%c🖤 emo npc spawned... nobody cares... *sigh*","color: #9933cc; font-style: italic")}setPlayerRef(e){this.playerPosRef=e}buildMesh(){const e=new oe,n=new Nt({color:1118481,roughness:.9}),i=new Nt({color:13937050,roughness:.7}),s=new St({color:1118481}),o=new St({color:0}),a=new St({color:16773365}),c=new Nt({color:11141152,roughness:.6}),l=new Nt({color:1710638,roughness:.95}),d=new St({color:3355443}),u=new Ht(.85,1.1,.45),h=new D(u,n);h.position.set(0,1.2,0),h.castShadow=!0,e.add(h);const f=new Ht(.5,.06,.47),p=new D(f,c);p.position.set(0,1.35,0),e.add(p);const v=new Ht(.75,.8,.7),m=new D(v,i);m.position.set(0,2.15,0),m.castShadow=!0,e.add(m);const g=new Ht(.82,.35,.78),_=new D(g,s);_.position.set(0,2.63,.02),e.add(_);const w=new Ht(.45,.55,.74),M=new D(w,s);M.position.set(-.24,2.28,.2),M.rotation.z=-.25,e.add(M);const C=new Ht(.75,.6,.2),b=new D(C,s);b.position.set(0,2.05,-.42),e.add(b);const R=new ct(.1,8,8),x=new D(R,a);x.position.set(.24,2.22,.36),e.add(x);const T=new ct(.07,8,8),G=new D(T,o);G.position.set(.24,2.22,.43),e.add(G);const I=new Ht(.22,.04,.05),z=new St({color:0}),L=new D(I,z);L.position.set(.24,2.14,.44),e.add(L);const F=new Ke(.1,.025,6,12,Math.PI),U=new D(F,o);U.position.set(0,1.88,.37),U.rotation.z=Math.PI,e.add(U);const N=new Qt(.13,.12,.75,8),k=new Qt(.11,.1,.65,8),$=new ct(.12,8,8);for(const kt of[-1,1]){const Wt=new D(N,n);Wt.position.set(kt*.55,1.2,0),Wt.rotation.z=kt*.18,Wt.castShadow=!0,e.add(Wt);const gt=new D(k,n);gt.position.set(kt*.65,.62,0),gt.rotation.z=kt*.28,gt.castShadow=!0,e.add(gt);const P=new D($,i);P.position.set(kt*.73,.2,0),e.add(P);const y=new Qt(.115,.115,.18,8),V=new D(y,d);V.position.set(kt*.7,.35,0),V.rotation.z=kt*.28,e.add(V)}const q=new Qt(.19,.16,.85,8),st=new Qt(.15,.1,.75,8),ot=new Ht(.28,.2,.55);for(const kt of[-1,1]){const Wt=new D(q,l);Wt.position.set(kt*.22,.5,0),Wt.castShadow=!0,e.add(Wt);const gt=new D(st,l);gt.position.set(kt*.22,-.28,0),gt.castShadow=!0,e.add(gt);const P=new D(ot,n);P.position.set(kt*.22,-.75,.08),P.castShadow=!0,e.add(P)}const K=new oe;K.position.set(0,.5,-.8);const _t=new St({color:4456550,transparent:!0,opacity:.72,wireframe:!1}),Zt=new St({color:8913151,transparent:!0,opacity:.45}),Yt=new ct(.55,10,10),Z=new D(Yt,_t);Z.scale.set(.8,1.5,.6),Z.position.set(0,1.2,0),K.add(Z);const it=new ct(.42,10,10),nt=new D(it,_t);nt.scale.set(1,1.1,.85),nt.position.set(.12,2.25,0),nt.rotation.z=.25,K.add(nt);const Ot=new ct(.1,6,6),At=new St({color:15597823});for(const kt of[-.16,.16]){const Wt=new D(Ot,At);Wt.scale.set(.5,1.4,1),Wt.position.set(kt+.12,2.32,.35),K.add(Wt)}const Bt=new Qt(.1,.04,1.4,6);for(const kt of[-1,1]){const Wt=new D(Bt,_t);Wt.position.set(kt*.7,1,0),Wt.rotation.z=kt*(Math.PI/4),K.add(Wt)}const fe=new ct(.14,8,8),te=new St({color:13369599,transparent:!0,opacity:.85}),Dt=4;for(let kt=0;kt<Dt;kt++){const Wt=new D(fe,te.clone());K.add(Wt),this.shadowOrbs.push(Wt),this.orbAngles.push(kt/Dt*Math.PI*2)}const zt=new ct(1.1,12,12),Gt=new St({color:3342404,transparent:!0,opacity:.18,side:ze}),jt=new D(zt,Gt);jt.position.set(0,1.3,0),jt.scale.set(1,1.8,1),K.add(jt);const B=new Ke(1,.08,8,32),pe=new D(B,Zt);return pe.position.set(0,.3,0),pe.rotation.x=Math.PI/2,K.add(pe),e.add(K),{group:e,stand:K}}activateStand(){this.standActive=!0,this.standTimer=0,this.stand.visible=!0,this.speak(),console.log("%cゴゴゴゴゴ THE VOID EMERGES ゴゴゴゴゴ","color: #9900ff; font-weight: bold; font-size: 14px")}deactivateStand(){this.standActive=!1,this.standCooldown=8+Math.random()*6,this.stand.visible=!1}fireOrb(e){if(!this.standActive)return;const n=new ct(.16,8,8),i=new St({color:14483711,transparent:!0,opacity:.9}),s=new D(n,i),o=new O;this.stand.getWorldPosition(o),o.y+=1.2,s.position.copy(o);const a=e.clone().sub(o).normalize().multiplyScalar(14);a.y+=2,this.mesh.parent?.add(s),this.projectiles.push({mesh:s,vel:a,life:2.5})}update(e){if(this.randomWalk(e,2.8),this.walkTimer+=e*4,this.mesh.position.y=this.position.y+Math.sin(this.walkTimer)*.06,this.standCooldown>0&&(this.standCooldown-=e),!this.standActive&&this.standCooldown<=0&&this.playerPosRef&&this.playerPosRef.distanceTo(this.position)<this.standSummonDist&&this.activateStand(),this.sceneTimer+=e,this.sceneTimer>=this.dialogueInterval&&(this.sceneTimer=0,this.dialogueInterval=7+Math.random()*12,this.standActive||this.speak()),this.standActive){this.standTimer+=e,this.standPulseTimer+=e*3,this.stand.position.y=.5+Math.sin(this.standPulseTimer)*.25,this.stand.rotation.y+=e*.8;for(let n=0;n<this.shadowOrbs.length;n++){this.orbAngles[n]+=e*3.5;const i=.85+Math.sin(this.standPulseTimer+n*1.2)*.2;this.shadowOrbs[n].position.set(Math.cos(this.orbAngles[n])*i,1.2+Math.sin(this.orbAngles[n]*.7)*.4,Math.sin(this.orbAngles[n])*i),this.shadowOrbs[n].material.opacity=.6+Math.sin(this.standPulseTimer+n)*.35}this.playerPosRef&&Math.floor(this.standTimer*.4)>Math.floor((this.standTimer-e)*.4)&&this.fireOrb(this.playerPosRef),this.standTimer>=6&&this.deactivateStand()}for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];i.life-=e,i.vel.y-=20*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.material.opacity=Math.max(0,i.life/2.5),i.life<=0&&(i.mesh.parent?.remove(i.mesh),this.projectiles.splice(n,1))}}getType(){return"emo"}die(){super.die();for(const e of this.projectiles)e.mesh.parent?.remove(e.mesh);this.projectiles=[]}}class al extends hi{constructor(e){super(e);S(this,"mudCooldown",0);S(this,"playerRef",null);S(this,"mudProjectiles",[]);S(this,"onMudHit",null);this.mesh=this.buildShrek(),this.mesh.position.copy(this.position),this.dialogues=["get out of my SWAMP","what are you doing in my swamp!!","SHREK IS LOVE SHREK IS LIFE","better out than in i always say","I AM AN OGRE","ogres are like onions","SOMEBODY ONCE TOLD ME","this is MY swamp and YOU are trespassing"],this.bubbleHeadOffset=5.5,this.dialogueTimer=Math.random()*6}buildShrek(){const e=new oe,n=new ce({color:5933632}),i=new ce({color:8016432}),s=new ce({color:7186510}),o=new D(new Ht(2.2,2.5,1.5),i);o.position.y=2.5,e.add(o);const a=new D(new Ht(.75,2.1,.75),n);a.position.set(-1.6,2.5,0),e.add(a);const c=new D(new Ht(.75,2.1,.75),n);c.position.set(1.6,2.5,0),e.add(c);const l=new D(new Ht(.85,1.6,.85),i);l.position.set(-.6,.8,0),e.add(l);const d=new D(new Ht(.85,1.6,.85),i);d.position.set(.6,.8,0),e.add(d);const u=new D(new ct(1.1,12,8),s);u.position.y=5,e.add(u);const h=new ct(.45,8,6),f=new D(h,s);f.position.set(-1.1,5.2,0),e.add(f);const p=new D(h,s);p.position.set(1.1,5.2,0),e.add(p);const v=new ce({color:3811840}),m=new D(new Ht(.45,.12,.2),v);m.position.set(-.37,5.3,.9),m.rotation.z=.3,e.add(m);const g=new D(new Ht(.45,.12,.2),v);g.position.set(.37,5.3,.9),g.rotation.z=-.3,e.add(g);const _=new ct(.16,6,4),w=new D(_,v);w.position.set(-.38,5.05,.92),e.add(w);const M=new D(_,v);M.position.set(.38,5.05,.92),e.add(M);const C=new ce({color:15658700}),b=new D(new ct(.5,8,6),C);b.position.set(0,6.3,0),e.add(b);const R=new D(new ct(.35,8,6),C);R.position.set(0,6.95,0),e.add(R);const x=new D(new ct(.2,8,6),C);return x.position.set(0,7.45,0),e.add(x),e}setPlayerRef(e){this.playerRef=e}setMudHitCallback(e){this.onMudHit=e}update(e){this.randomWalk(e,1.4),this.dialogueTimer-=e,this.dialogueTimer<=0&&(this.speak(),this.dialogueTimer=5+Math.random()*9),this.mudCooldown-=e,this.playerRef&&this.mudCooldown<=0&&this.position.distanceTo(this.playerRef)<20&&(this.throwMud(),this.mudCooldown=7+Math.random()*7);for(const n of this.mudProjectiles)n.life-=e,n.vel.y-=15*e,n.pos.addScaledVector(n.vel,e),n.mesh.position.copy(n.pos),n.mesh.rotation.x+=e*4,n.mesh.rotation.z+=e*2,this.playerRef&&n.pos.distanceTo(this.playerRef)<2.8&&(this.onMudHit?.(4),n.life=-1,console.log("%c💩 SHREK MUD SPLAT!! get out of his swamp!!","color: olive; font-weight: bold"));for(let n=this.mudProjectiles.length-1;n>=0;n--)(this.mudProjectiles[n].life<=0||this.mudProjectiles[n].pos.y<-5)&&(this.mudProjectiles[n].mesh.parent?.remove(this.mudProjectiles[n].mesh),this.mudProjectiles.splice(n,1))}throwMud(){if(!this.playerRef)return;const e=new ce({color:6109722}),n=new D(new ct(.42,6,4),e),i=this.position.clone();i.y+=4.5,n.position.copy(i);const s=this.playerRef.clone().sub(i).normalize();s.y+=.4,s.normalize().multiplyScalar(13),this.mudProjectiles.push({mesh:n,vel:s,pos:i.clone(),life:3.5}),this.mesh.parent?.add(n),console.log("%c💩 SHREK YEETS MUD!! GETOUUUUT","color: olive")}die(){for(const e of this.mudProjectiles)e.mesh.parent?.remove(e.mesh);this.mudProjectiles=[],super.die()}getType(){return"shrek"}}class cl extends hi{constructor(e){super(e);S(this,"leftArmGroup");S(this,"rightArmGroup");S(this,"armSwing",0);S(this,"isDoingZoomies",!1);S(this,"zoomieTimer",0);S(this,"zoomiesCooldown",5+Math.random()*8);S(this,"zoomiesDir",new O(1,0,0));this.mesh=this.buildBuffCat(),this.mesh.position.copy(this.position),this.dialogues=["DO YOU EVEN LIFT","ZOOMIES ACTIVATED AAAAAA","MY GAINS ARE LEGENDARY","300 REPS BEFORE BREAKFAST","THE PUMP... IS REAL","*does pushups while meowing*","i am built from pure chaos and protein","FEAR MY MUSCLES MEOW"],this.bubbleHeadOffset=4.5,this.dialogueTimer=Math.random()*5}buildBuffCat(){const e=new oe,n=new ce({color:15234088}),i=new ce({color:10111504}),s=new ce({color:16777215}),o=new ce({color:16746666}),a=new D(new Ht(2.5,2.1,1.7),n);a.position.y=2.1,e.add(a);const c=new D(new ct(.72,8,6),s);c.scale.set(1,.65,.55),c.position.set(0,1.9,.75),e.add(c),this.leftArmGroup=new oe,this.leftArmGroup.position.set(-1.85,2.6,0);const l=new D(new Qt(.62,.42,1.4,8),n);l.position.y=-.7,this.leftArmGroup.add(l);const d=new D(new ct(.48,8,6),n);d.position.y=-1.55,this.leftArmGroup.add(d),e.add(this.leftArmGroup),this.rightArmGroup=new oe,this.rightArmGroup.position.set(1.85,2.6,0);const u=new D(new Qt(.62,.42,1.4,8),n);u.position.y=-.7,this.rightArmGroup.add(u);const h=new D(new ct(.48,8,6),n);h.position.y=-1.55,this.rightArmGroup.add(h),e.add(this.rightArmGroup);const f=new D(new Qt(.46,.34,1.5,8),n);f.position.set(-.62,.75,0),e.add(f);const p=new D(new Qt(.46,.34,1.5,8),n);p.position.set(.62,.75,0),e.add(p);const v=new D(new ct(.9,10,8),n);v.position.y=4,e.add(v);for(let C=0;C<3;C++){const b=new D(new Ht(.14,.15,.9),i);b.position.set(-.33+C*.33,4.35,.28),e.add(b)}const m=new be(.3,.52,4),g=new D(m,n);g.position.set(-.55,4.78,0),e.add(g);const _=new D(m,n);_.position.set(.55,4.78,0),e.add(_);const w=new D(new be(.14,.3,4),o);w.position.set(-.55,4.74,.04),e.add(w);const M=new D(new be(.14,.3,4),o);return M.position.set(.55,4.74,.04),e.add(M),e}update(e){this.armSwing+=e*3,this.isDoingZoomies?(this.zoomieTimer-=e,this.applyGravity(e),this.position.addScaledVector(this.zoomiesDir,24*e),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z)),this.mesh.position.copy(this.position),this.mesh.rotation.y+=e*7,this.leftArmGroup.rotation.x=Math.sin(this.armSwing*6)*1.5,this.rightArmGroup.rotation.x=-Math.sin(this.armSwing*6)*1.5,this.zoomieTimer<=0&&(this.isDoingZoomies=!1,this.zoomiesCooldown=8+Math.random()*12,this.speak(),console.log("%c🐱💨 BUFF CAT ZOOMIES CONCLUDED. WORLD SHOOK.","color: orange; font-weight: bold"))):(this.randomWalk(e,2.5),this.leftArmGroup.rotation.x=Math.sin(this.armSwing)*.45,this.rightArmGroup.rotation.x=-Math.sin(this.armSwing)*.45,this.zoomiesCooldown-=e,this.zoomiesCooldown<=0&&this.activateZoomies()),this.dialogueTimer-=e,this.dialogueTimer<=0&&(this.speak(),this.dialogueTimer=4+Math.random()*7)}activateZoomies(){this.isDoingZoomies=!0,this.zoomieTimer=2.2+Math.random()*1.8,this.zoomiesDir=new O(Math.random()*2-1,0,Math.random()*2-1).normalize(),this.speak(),console.log("%c🐱💪💨 BUFF CAT ZOOMIES ACTIVATED!!! EVERYONE MOVE","color: orange; font-size: 14px; font-weight: bold")}getType(){return"buffcat"}}class K0 extends hi{constructor(e){super(e);S(this,"trails",[]);S(this,"trailTimer",0);S(this,"auraMesh");S(this,"eyeGlowTimer",0);this.mesh=this.buildVoidCat(),this.mesh.position.copy(this.position),this.dialogues=["the void stares back","existence is meaningless","i am the darkness between stars","light has no dominion here","nothing matters... and thats ok i guess","*becomes one with the abyss*","the void inside me is bigger than the void outside","darkness? comfortable. light? rude.","we are all temporary smudges on an infinite canvas"],this.bubbleHeadOffset=4,this.dialogueTimer=Math.random()*8}buildVoidCat(){const e=new oe,n=new ce({color:328968}),i=new ce({color:2228275,emissive:1114146,emissiveIntensity:.7,transparent:!0,opacity:.18}),s=new ce({color:10027263,emissive:5570696,emissiveIntensity:1.5}),o=new D(new ct(1,10,8),n);o.scale.set(1.1,1.25,.95),o.position.y=2.2,e.add(o);const a=[[-.55,1,.45],[.55,1,.45],[-.55,1,-.45],[.55,1,-.45]];for(const m of a){const g=new D(new Qt(.18,.13,.9,6),n);g.position.set(...m),e.add(g)}const c=new D(new ct(.76,10,8),n);c.position.y=3.5,e.add(c);const l=new be(.26,.52,4),d=new D(l,n);d.position.set(-.45,4.12,0),e.add(d);const u=new D(l,n);u.position.set(.45,4.12,0),e.add(u);const h=new ct(.19,8,6),f=new D(h,s);f.position.set(-.28,3.56,.67),e.add(f);const p=new D(h,s);p.position.set(.28,3.56,.67),e.add(p);const v=new D(new Qt(.1,.04,1.9,6),n);return v.position.set(0,2.2,-1.05),v.rotation.x=.8,e.add(v),this.auraMesh=new D(new ct(1.9,8,6),i),this.auraMesh.position.y=2.5,e.add(this.auraMesh),e}update(e){if(this.randomWalk(e,1.8),this.dialogueTimer-=e,this.dialogueTimer<=0&&(this.speak(),this.dialogueTimer=6+Math.random()*10),this.eyeGlowTimer+=e,this.auraMesh){const n=this.auraMesh.material;n.opacity=.1+Math.sin(this.eyeGlowTimer*1.5)*.08}this.trailTimer-=e,this.trailTimer<=0&&(this.spawnTrail(),this.trailTimer=.25+Math.random()*.2);for(let n=this.trails.length-1;n>=0;n--){const i=this.trails[n];i.life-=e;const s=i.life/i.maxLife,o=i.mesh.material;o.opacity=s*.55,i.mesh.position.y+=e*.3,i.life<=0&&(i.mesh.parent?.remove(i.mesh),this.trails.splice(n,1))}}spawnTrail(){const e=new ce({color:2228275,emissive:655384,emissiveIntensity:.5,transparent:!0,opacity:.5}),n=.25+Math.random()*.35,i=new D(new ct(n,6,4),e);i.position.set(this.position.x+(Math.random()-.5)*1.6,this.position.y+Math.random()*2.2,this.position.z+(Math.random()-.5)*1.6);const s=2.2+Math.random()*.8;this.trails.push({mesh:i,life:s,maxLife:s}),this.mesh.parent?.add(i)}die(){for(const e of this.trails)e.mesh.parent?.remove(e.mesh);this.trails=[],super.die()}getType(){return"voidcat"}}const Mo={normal:{name:"Infinite Meow",npcType:"normal",flavorText:"meow... MEOW!! THE MEOWING NEVER ENDS!!",radius:30,domainColor:16746496,fogColor:16737792,damage:5,npcDamage:0,stunPulse:1.5,healPerSec:3,duration:12,guaranteedHit:!0,isPlayerDomain:!1},jesus:{name:"Divine Purification",npcType:"jesus",flavorText:"FORGIVE THEM FOR THEY KNOW NOT WHAT THEY DO",radius:28,domainColor:16772778,fogColor:16777164,damage:8,npcDamage:0,stunPulse:0,healPerSec:15,duration:14,guaranteedHit:!0,isPlayerDomain:!1},robot:{name:"Infinite Processing Loop",npcType:"robot",flavorText:"CALCULATING... CALCULATING... CALCULATING...",radius:25,domainColor:65484,fogColor:13090,damage:12,npcDamage:0,stunPulse:0,healPerSec:5,duration:10,guaranteedHit:!0,isPlayerDomain:!1},orb:{name:"Omniscient Spherical Truth",npcType:"orb",flavorText:"THE ORB KNOWS ALL. THE ORB SEES ALL.",radius:35,domainColor:13369599,fogColor:2228292,damage:7,npcDamage:0,stunPulse:2,healPerSec:2,duration:15,guaranteedHit:!0,isPlayerDomain:!1},angel:{name:"Paradise of Feathers",npcType:"angel",flavorText:"THIS WORLD IS MINE. YOU CANNOT ESCAPE DIVINITY.",radius:32,domainColor:15658751,fogColor:13426175,damage:6,npcDamage:0,stunPulse:1,healPerSec:20,duration:13,guaranteedHit:!0,isPlayerDomain:!1},pirate:{name:"Davy Jones' Locker",npcType:"pirate",flavorText:"YARR!! WELCOME TO THE BOTTOM OF THE SEA!!",radius:28,domainColor:17544,fogColor:8772,damage:14,npcDamage:0,stunPulse:2,healPerSec:4,duration:11,guaranteedHit:!0,isPlayerDomain:!1},wizard:{name:"Infinite Magic Loop",npcType:"wizard",flavorText:"REALITY IS JUST A SPELL THAT HASN'T EXPIRED YET",radius:30,domainColor:8913151,fogColor:2228275,damage:10,npcDamage:0,stunPulse:1.5,healPerSec:6,duration:12,guaranteedHit:!0,isPlayerDomain:!1},vampire:{name:"Blood Moon Palace",npcType:"vampire",flavorText:"YOUR BLOOD IS THE PRICE OF ENTRY.",radius:26,domainColor:13369378,fogColor:4456465,damage:18,npcDamage:0,stunPulse:0,healPerSec:18,duration:10,guaranteedHit:!0,isPlayerDomain:!1},disco:{name:"Infinite Groove",npcType:"disco",flavorText:"YOU CANNOT LEAVE THE DANCE FLOOR. NOBODY LEAVES.",radius:30,domainColor:16711935,fogColor:4456516,damage:5,npcDamage:0,stunPulse:3,healPerSec:3,duration:14,guaranteedHit:!0,isPlayerDomain:!1},shadow:{name:"Coffin of the Iron Mountain",npcType:"shadow",flavorText:"ALL PATHS LEAD TO DARKNESS. ALL FUTURES ERASED.",radius:28,domainColor:1118481,fogColor:0,damage:22,npcDamage:0,stunPulse:1,healPerSec:5,duration:11,guaranteedHit:!0,isPlayerDomain:!1},barney:{name:"Boundless Love Experience",npcType:"barney",flavorText:"I LOVE YOU, YOU LOVE ME, YOU CANNOT LEAVE THIS PLACE",radius:40,domainColor:7024544,fogColor:4004448,damage:3,npcDamage:0,stunPulse:4,healPerSec:25,duration:20,guaranteedHit:!1,isPlayerDomain:!1},emo:{name:"Hollow Purple Despair",npcType:"emo",flavorText:"nobody understands me. especially not you. especially not here.",radius:30,domainColor:1114146,fogColor:393232,damage:20,npcDamage:0,stunPulse:2,healPerSec:8,duration:13,guaranteedHit:!0,isPlayerDomain:!1},shrek:{name:"Swamp of Eternal Despair",npcType:"shrek",flavorText:"THIS IS MY SWAMP. THIS HAS ALWAYS BEEN MY SWAMP.",radius:38,domainColor:3368448,fogColor:1716992,damage:15,npcDamage:0,stunPulse:0,healPerSec:10,duration:16,guaranteedHit:!0,isPlayerDomain:!1},buffcat:{name:"Iron Body Infinite Circuit",npcType:"buffcat",flavorText:"DO YOU EVEN LIFT? INSIDE MY DOMAIN, YOU CANNOT.",radius:25,domainColor:16737792,fogColor:3345664,damage:25,npcDamage:0,stunPulse:0,healPerSec:12,duration:10,guaranteedHit:!0,isPlayerDomain:!1},voidcat:{name:"Infinite Darkness Eternal",npcType:"voidcat",flavorText:"you were always in the dark. you just never noticed.",radius:35,domainColor:1114129,fogColor:0,damage:16,npcDamage:0,stunPulse:2.5,healPerSec:6,duration:14,guaranteedHit:!0,isPlayerDomain:!1},hybrid:{name:"Chaotic Soul Fusion",npcType:"hybrid",flavorText:"WHAT AM I? WHAT ARE YOU? WHAT IS ANY OF THIS??",radius:28,domainColor:16729343,fogColor:2228258,damage:12,npcDamage:0,stunPulse:1,healPerSec:5,duration:11,guaranteedHit:!0,isPlayerDomain:!1},player:{name:"Aberrant Throne",npcType:"player",flavorText:"I DWELL IN A DREAM, BY A LAW OF MY OWN. STEP INSIDE MY THRONE AND CEASE TO EXIST.",radius:28,domainColor:4456618,fogColor:1114163,damage:0,npcDamage:16,stunPulse:0,healPerSec:0,duration:20,guaranteedHit:!0,isPlayerDomain:!0}};class Z0{constructor(t){S(this,"scene");S(this,"activeDomains",[]);S(this,"onDomainOpen",null);S(this,"onDomainClose",null);S(this,"playerDomain",null);S(this,"onPlayerDomainClose",null);S(this,"MAX_CONCURRENT",2);this.scene=t}openDomain(t,e){if(this.activeDomains.length>=this.MAX_CONCURRENT)return;const n=Mo[e]??Mo.normal,i=new ct(n.radius,32,32),s=new St({color:n.domainColor,transparent:!0,opacity:.18,side:ze,depthWrite:!1}),o=new D(i,s),a=t.getPosition();o.position.set(a.x,0,a.z),this.scene.add(o);const c=new qn(n.domainColor,3.5,n.radius*1.8);c.position.set(a.x,5,a.z),this.scene.add(c);const l=new ct(n.radius*.98,24,24),d=new St({color:n.fogColor,transparent:!0,opacity:.28,side:Cn,depthWrite:!1}),u=new D(l,d);u.position.set(a.x,0,a.z),this.scene.add(u);const h={npc:t,def:n,timeRemaining:n.duration,stunPulseTimer:n.stunPulse,sphere:o,fogSphere:u,light:c};this.activeDomains.push(h),this.onDomainOpen?.(n.name,n.flavorText),console.log(`%c⚡ DOMAIN EXPANSION: ${n.name.toUpperCase()} ⚡`,"color: #ff00ff; font-size: 20px; font-weight: bold;")}update(t,e,n,i){for(let s=this.activeDomains.length-1;s>=0;s--){const o=this.activeDomains[s];o.timeRemaining-=t;const a=o.npc.getPosition();o.sphere.position.set(a.x,0,a.z),o.fogSphere.position.set(a.x,0,a.z),o.light.position.set(a.x,5,a.z),o.sphere.material.opacity=.12+Math.sin(Date.now()*.003)*.06,o.fogSphere.material.opacity=.22+Math.sin(Date.now()*.002+1)*.06,e.distanceTo(new O(a.x,e.y,a.z))<o.def.radius&&(n(o.def.damage*t),o.def.stunPulse>0&&(o.stunPulseTimer-=t,o.stunPulseTimer<=0&&(i(),o.stunPulseTimer=o.def.stunPulse))),o.def.healPerSec>0&&o.npc.hp<o.npc.maxHp&&(o.npc.hp=Math.min(o.npc.maxHp,o.npc.hp+o.def.healPerSec*t)),(o.timeRemaining<=0||!o.npc.hp)&&this.closeDomain(o,s)}}closeDomain(t,e){this.scene.remove(t.sphere),this.scene.remove(t.fogSphere),this.scene.remove(t.light),t.sphere.material.dispose(),t.fogSphere.material.dispose(),t.sphere.geometry.dispose(),t.fogSphere.geometry.dispose(),this.activeDomains.splice(e,1),this.onDomainClose?.(t.def.name),console.log(`%c💀 Domain "${t.def.name}" has collapsed.`,"color: #888; font-style: italic")}getGuaranteedHitMultiplier(t){for(const e of this.activeDomains){if(!e.def.guaranteedHit)continue;const n=e.npc.getPosition();if(t.distanceTo(new O(n.x,t.y,n.z))<e.def.radius)return 2}return 1}hasActiveDomain(){return this.activeDomains.length>0}openPlayerDomain(){if(this.playerDomain)return;const t=Mo.player,e=new ct(t.radius,32,32),n=new St({color:t.domainColor,transparent:!0,opacity:.18,side:ze,depthWrite:!1}),i=new D(e,n);this.scene.add(i);const s=new ct(t.radius*.98,24,24),o=new St({color:t.fogColor,transparent:!0,opacity:.32,side:Cn,depthWrite:!1}),a=new D(s,o);this.scene.add(a);const c=new qn(t.domainColor,5,t.radius*2);this.scene.add(c);const l=t.radius*.55,d=[],u=[];for(let h=0;h<4;h++){const f=h/4*Math.PI*2,p=Math.cos(f)*l,v=Math.sin(f)*l,m=new Ht(.8,8,.8),g=new St({color:2228309}),_=new D(m,g);_.position.set(p,4,v),this.scene.add(_),d.push(_);const w=new qn(10035967,2.5,10);w.position.set(p,6,v),this.scene.add(w),u.push(w)}this.playerDomain={def:t,timeRemaining:t.duration,sphere:i,fogSphere:a,light:c,pillars:d,pillarLights:u},this.onDomainOpen?.(t.name,t.flavorText)}updatePlayerDomain(t,e,n){if(!this.playerDomain)return;const i=this.playerDomain;i.timeRemaining-=t,i.sphere.position.set(e.x,0,e.z),i.fogSphere.position.set(e.x,0,e.z),i.light.position.set(e.x,5,e.z),i.sphere.material.opacity=.12+Math.sin(Date.now()*.003)*.07,i.fogSphere.material.opacity=.25+Math.sin(Date.now()*.002+1)*.07;const s=i.def.radius*.55;for(let o=0;o<i.pillars.length;o++){const a=o/i.pillars.length*Math.PI*2,c=e.x+Math.cos(a)*s,l=e.z+Math.sin(a)*s;i.pillars[o].position.set(c,4,l),i.pillarLights[o].position.set(c,6,l),i.pillarLights[o].intensity=2+Math.sin(Date.now()*.004+o*1.5)*.8}for(const o of n){if(!o.isAlive())continue;const a=o.getPosition(),c=a.x-e.x,l=a.z-e.z;if(Math.sqrt(c*c+l*l)<i.def.radius){o.takeDamage(i.def.npcDamage*t);for(const u of i.pillars){const h=a.x-u.position.x,f=a.z-u.position.z;Math.sqrt(h*h+f*f)<5&&o.takeDamage(20*t)}}}if(i.timeRemaining<=0){this.scene.remove(i.sphere),this.scene.remove(i.fogSphere),this.scene.remove(i.light),i.sphere.material.dispose(),i.fogSphere.material.dispose(),i.sphere.geometry.dispose(),i.fogSphere.geometry.dispose();for(let o=0;o<i.pillars.length;o++)this.scene.remove(i.pillars[o]),this.scene.remove(i.pillarLights[o]),i.pillars[o].material.dispose(),i.pillars[o].geometry.dispose();this.onPlayerDomainClose?.(i.def.name),this.playerDomain=null}}isPlayerDomainActive(){return this.playerDomain!==null}getPlayerDomainTimeRemaining(){return this.playerDomain?.timeRemaining??0}}const Po=class Po{constructor(t){S(this,"npcs",[]);S(this,"scene");S(this,"spawnTimer",0);S(this,"spawnInterval",5);S(this,"bubbleCb",null);S(this,"playerPos",null);S(this,"onMudHit",null);S(this,"worldGenerator",null);S(this,"onPlayerHit",null);S(this,"onNpcKilled",null);S(this,"onNpcEquipItem",null);S(this,"npcFightTimer",0);S(this,"NPC_FIGHT_INTERVAL",1.2);S(this,"NPC_FIGHT_RANGE",5);S(this,"NPC_FIGHT_DMG",8);S(this,"domainSystem",null);S(this,"onDomainActivated",null);this.scene=t,this.domainSystem=new Z0(t),this.domainSystem.onDomainOpen=(e,n)=>this.onDomainActivated?.(e,n),this.domainSystem.onDomainClose=e=>console.log(`%c💨 Domain "${e}" collapsed`,"color:#888;"),this.spawnBarney(),this.spawnEmo(),this.spawnShrek(),this.spawnBuffCat(),this.spawnVoidCat()}setBubbleCallback(t){this.bubbleCb=t;for(const e of this.npcs)e.setSpeakCallback(t)}addNPC(t){this.bubbleCb&&t.setSpeakCallback(this.bubbleCb),this.npcs.push(t)}removeNPC(t){const e=this.npcs.indexOf(t);e>-1&&(this.npcs.splice(e,1),t.getMesh().parent&&t.getMesh().parent?.remove(t.getMesh()))}update(t){for(const e of this.npcs){if(e instanceof rl&&this.playerPos&&e.setPlayerRef(this.playerPos),e instanceof al&&this.playerPos&&e.setPlayerRef(this.playerPos),e instanceof cl&&this.worldGenerator&&this.worldGenerator.damageBuildingNear(e.getPosition(),10),e.tickStun(t),e.update(t),this.domainSystem&&e.tickDomain(t)){const i=e.getType();this.domainSystem.openDomain({getPosition:()=>e.getPosition(),takeDamage:s=>e.takeDamage(s),getType:()=>e.getType(),hp:e.getHp(),maxHp:e.getMaxHp()},Mo[i]?i:"normal")}if(this.playerPos&&this.onPlayerHit){const n=Po.NPC_ATTACK_STATS[e.getType()]??{dmg:5,range:3.5},i=e.tickAttack(this.playerPos,t,n.range,n.dmg);i>0&&this.onPlayerHit(i)}}this.spawnTimer+=t,this.npcFightTimer+=t,this.npcFightTimer>=this.NPC_FIGHT_INTERVAL&&(this.npcFightTimer=0,this.tickNpcVsNpc());for(const e of this.npcs){const n=e.tickNpcItem(t,this.npcs,this.playerPos??null);if(n==="bomb"){for(const i of this.npcs)i!==e&&i.getPosition().distanceTo(e.getPosition())<10&&i.takeDamage(30);this.playerPos&&this.onPlayerHit&&e.getPosition().distanceTo(this.playerPos)<10&&this.onPlayerHit(25)}else if(n==="stun_all")for(const i of this.npcs)i!==e&&i.getPosition().distanceTo(e.getPosition())<10&&i.stun(4)}this.spawnTimer>=this.spawnInterval&&(this.spawnNewNPC(),this.spawnTimer=0,this.spawnInterval=3+Math.random()*4),this.npcs=this.npcs.filter(e=>e.isAlive()?!0:(this.scene.remove(e.getMesh()),this.onNpcKilled?.(e.getType(),e.getPosition().clone()),!1)),this.domainSystem&&this.playerPos&&this.onPlayerHit&&this.domainSystem.update(t,this.playerPos,e=>this.onPlayerHit?.(e),()=>{})}getDomainSystem(){return this.domainSystem}tickNpcVsNpc(){for(let t=0;t<this.npcs.length;t++){const e=this.npcs[t];if(!e.isAlive()||e.isStunned())continue;let n=null,i=this.NPC_FIGHT_RANGE;for(let a=0;a<this.npcs.length;a++){if(t===a||!this.npcs[a].isAlive())continue;const c=e.getPosition().distanceTo(this.npcs[a].getPosition());c<i&&(i=c,n=this.npcs[a])}if(!n)continue;const s=this.NPC_FIGHT_DMG+Math.floor(Math.random()*5),o=n.isAlive();if(n.takeDamage(s),o&&!n.isAlive()){const a=wa.rollLoot(n.getType());if(a&&!e.equippedItem){e.equipItem(a);const c=ai[a]?.name??a;console.log(`%c🗡️ ${e.getType()} killed ${n.getType()} and looted: ${c}`,"color: #ff8800; font-weight: bold"),this.onNpcEquipItem?.(e.getType(),c)}}}}setPlayerPos(t){this.playerPos=t}setMudHitCallback(t){this.onMudHit=t}setWorldGenerator(t){this.worldGenerator=t}spawnNewNPC(){const t=Math.random();if(t<.07){this.spawnEmo();return}if(t<.15){this.spawnBarney();return}if(t<.2){this.spawnShrek();return}if(t<.26){this.spawnBuffCat();return}if(t<.31){this.spawnVoidCat();return}const e=[$e.NORMAL,$e.NORMAL,$e.NORMAL,$e.NORMAL,$e.JESUS,$e.ROBOT,$e.ORB,$e.ANGEL,$e.PIRATE,$e.WIZARD,$e.VAMPIRE,$e.DISCO,$e.SHADOW],n=e[Math.floor(Math.random()*e.length)],i=Math.random()*Math.PI*2,s=50+Math.random()*100,o=Math.cos(i)*s,a=Math.sin(i)*s,c=new j0(n,new O(o,2,a));this.bubbleCb&&c.setSpeakCallback(this.bubbleCb),Math.random()<.1&&c.forceActivateDomain(12),this.addNPC(c),this.scene.add(c.getMesh())}spawnEmo(){const t=Math.random()*Math.PI*2,e=25+Math.random()*70,n=new O(Math.cos(t)*e,2,Math.sin(t)*e),i=new rl(n);i.setMaxHp(75),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.playerPos&&i.setPlayerRef(this.playerPos),Math.random()<.1&&i.forceActivateDomain(13),this.addNPC(i),this.scene.add(i.getMesh())}spawnBarney(){if(this.npcs.some(s=>s.getType()==="barney"))return;const t=Math.random()*Math.PI*2,e=30+Math.random()*80,n=new O(Math.cos(t)*e,2,Math.sin(t)*e),i=new $0(n);i.setMaxHp(150),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c🦕 BARNEY HAS ARRIVED. I LOVE YOU, YOU LOVE ME","color: #6B2FA0; font-weight: bold; font-size: 14px")}getNPCCount(){return this.npcs.length}forceSpawnRandom(t=1){for(let e=0;e<t;e++)this.spawnNewNPC()}forceSpawnBarney(){this.spawnBarney()}getNPCs(){return this.npcs}getRandomNPC(){return this.npcs.length===0?null:this.npcs[Math.floor(Math.random()*this.npcs.length)]}spawnShrek(){const t=Math.random()*Math.PI*2,e=35+Math.random()*80,n=new O(Math.cos(t)*e,2,Math.sin(t)*e),i=new al(n);i.setMaxHp(200),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.playerPos&&i.setPlayerRef(this.playerPos),this.onMudHit&&i.setMudHitCallback(this.onMudHit),Math.random()<.1&&i.forceActivateDomain(16),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c🧅 SHREK HAS ARRIVED. THIS IS HIS SWAMP NOW.","color: olive; font-weight: bold; font-size: 14px")}spawnBuffCat(){const t=Math.random()*Math.PI*2,e=30+Math.random()*90,n=new O(Math.cos(t)*e,2,Math.sin(t)*e),i=new cl(n);i.setMaxHp(80),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),Math.random()<.1&&i.forceActivateDomain(10),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c💪 BUFF CAT SPAWNED. BICEPS ACTIVATED.","color: orange; font-weight: bold; font-size: 14px")}spawnVoidCat(){const t=Math.random()*Math.PI*2,e=25+Math.random()*100,n=new O(Math.cos(t)*e,2,Math.sin(t)*e),i=new K0(n);i.setMaxHp(70),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),Math.random()<.1&&i.forceActivateDomain(14),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c🌑 VOID CAT MATERIALIZED FROM THE DARKNESS","color: #330044; font-weight: bold; font-size: 14px")}};S(Po,"NPC_ATTACK_STATS",{cat:{dmg:5,range:3},barney:{dmg:0,range:0},emo:{dmg:12,range:7},shrek:{dmg:20,range:4.5},buffcat:{dmg:15,range:3.5},voidcat:{dmg:8,range:5},hybrid:{dmg:10,range:3}});let Sa=Po;class J0{constructor(t){S(this,"scene");S(this,"buildings",[]);S(this,"buildingStates",[]);S(this,"trees",[]);S(this,"cars",[]);S(this,"streetLights",[]);S(this,"spawnTimer",0);S(this,"worldTime",0);S(this,"lastPlayerPosition",new O(0,0,0));S(this,"ground");this.scene=t}generateInitialWorld(){this.createGround();for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,n=50+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;Math.random()<.2?this.createPark(i,s):Math.random()<.3?this.createTower(i,s):Math.random()<.5?this.createMonument(i,s):Math.random()<.7?this.createBridge(i,s):this.createBuilding(i,s)}for(let t=0;t<10;t++){const e=Math.random()*Math.PI*2,n=40+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createTree(i,s)}for(let t=0;t<8;t++){const e=Math.random()*Math.PI*2,n=60+Math.random()*100,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createCar(i,s)}for(let t=0;t<6;t++){const e=Math.random()*Math.PI*2,n=30+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createStreetLight(i,s)}}update(t,e){if(this.lastPlayerPosition.copy(e),this.worldTime+=t,this.spawnTimer+=t,this.spawnTimer>=12){if(Math.random()>.4&&this.generateStructureNearPlayer(),Math.random()>.5){const n=Math.random()*Math.PI*2,i=80+Math.random()*120,s=this.lastPlayerPosition.x+Math.cos(n)*i,o=this.lastPlayerPosition.z+Math.sin(n)*i;Math.abs(s)<200&&Math.abs(o)<200&&this.createCar(s,o)}this.spawnTimer=0}for(const n of this.cars){n.position.x+=Math.sin(this.worldTime+n.position.z)*.05,n.position.z+=Math.cos(this.worldTime+n.position.x)*.05,n.position.x=Math.max(-200,Math.min(200,n.position.x)),n.position.z=Math.max(-200,Math.min(200,n.position.z));for(const i of n.children)i instanceof D&&i.geometry instanceof Qt&&(i.rotation.x+=.15)}for(const n of this.buildings)n instanceof D?(n.rotation.y+=Math.sin(this.worldTime*.2)*.001,n.material instanceof Nt&&(n.material.emissive=new Ut(2236962),n.material.emissiveIntensity=.2+Math.abs(Math.sin(this.worldTime+n.position.x*.1))*.2)):n instanceof oe&&(n.rotation.y+=Math.sin(this.worldTime*.15)*.001,n.traverse(i=>{i instanceof D&&i.material instanceof Nt&&(i.material.emissive=new Ut(1118481),i.material.emissiveIntensity=.1+Math.abs(Math.sin(this.worldTime+n.position.z*.1))*.15)}));for(const n of this.trees)if(n instanceof D&&n.geometry instanceof ct){n.rotation.y+=.002;const i=.9+Math.sin(this.worldTime+n.position.x*.2)*.1;n.material instanceof Nt&&(n.material.color=new Ut(2263842).multiplyScalar(i))}for(const n of this.streetLights)n.rotation.y+=.002,n.traverse(i=>{i instanceof qn&&(i.intensity=.6+Math.sin(this.worldTime*3+n.position.x)*.2)});if(this.ground&&this.ground.material instanceof Nt){const n=Math.sin(this.worldTime*.2)*.05+.41;this.ground.material.color=new Ut().setHSL(n,.6,.4)}}generateStructureNearPlayer(){const t=["building","tree","car","tower","monument","park","bridge"],e=t[Math.floor(Math.random()*t.length)],n=Math.random()*Math.PI*2,i=80+Math.random()*120,s=this.lastPlayerPosition.x+Math.cos(n)*i,o=this.lastPlayerPosition.z+Math.sin(n)*i,a=Math.max(-200,Math.min(200,s)),c=Math.max(-200,Math.min(200,o));switch(e){case"building":this.createBuilding(a,c);break;case"tree":this.createTree(a,c);break;case"city":this.createCity(a,c);break;case"car":this.createCar(a,c);break;case"tower":this.createTower(a,c);break;case"monument":this.createMonument(a,c);break;case"park":this.createPark(a,c);break;case"bridge":this.createBridge(a,c);break}}createGround(){const t=new Yn(500,500),e=new Nt({color:3919936}),n=new D(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n),this.ground=n}createBuilding(t,e){const n=10+Math.random()*15,i=15+Math.random()*20,s=10+Math.random()*15,o=new Ht(n,i,s),a=new Ut().setHSL(Math.random(),.7,.6),c=new Nt({color:a}),l=new D(o,c);l.position.set(t,i/2,e),l.castShadow=!0,l.receiveShadow=!0;for(let d=0;d<3;d++){const u=new Ht(1,1,.1),h=new St({color:16777113}),f=new D(u,h);f.position.set(-n/2+2,i/2+d*4,s/2),l.add(f)}this.scene.add(l),this.buildings.push(l),this.buildingStates.push({obj:l,health:3,maxHealth:3,rebuildTimer:0,originalColor:a.clone()})}createTree(t,e){const n=new Qt(1,1.2,6,8),i=new Nt({color:9127187}),s=new D(n,i);s.position.set(t,3,e),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s);const o=new ct(5,8,8),a=new Nt({color:2263842}),c=new D(o,a);c.position.set(t,8,e),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c),this.trees.push(s),this.trees.push(c)}createCity(t,e){for(let a=0;a<4;a++){const c=(Math.random()-.5)*40,l=(Math.random()-.5)*40;this.createBuilding(t+c,e+l)}const n=new Yn(30,5),i=new Nt({color:3355443}),s=new D(n,i);s.rotation.x=-Math.PI/2,s.position.set(t,.01,e),this.scene.add(s);const o=new D(n,i);o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/2,o.position.set(t,.01,e),this.scene.add(o)}createCar(t,e){const n=new oe,i=new Ht(2,1,4),s=new Nt({color:16711680}),o=new D(i,s);o.position.y=.5,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new Ht(1.6,.8,2),c=new D(a,s);c.position.y=1.4,c.castShadow=!0,n.add(c);const l=new Qt(.5,.5,.3,16),d=new Nt({color:0}),u=[[-.8,.5,1],[.8,.5,1],[-.8,.5,-1],[.8,.5,-1]];for(const h of u){const f=new D(l,d);f.rotation.z=Math.PI/2,f.position.set(h[0],h[1],h[2]),f.castShadow=!0,n.add(f)}n.position.set(t,0,e),this.scene.add(n),this.cars.push(n)}createTower(t,e){const n=30+Math.random()*40,i=new be(4,n,6),s=new Nt({color:new Ut().setHSL(Math.random(),.8,.5)}),o=new D(i,s);o.position.set(t,n/2,e),o.castShadow=!0,this.scene.add(o),this.buildings.push(o)}createMonument(t,e){const n=new oe,i=new Ht(8,2,8),s=new Nt({color:13421772}),o=new D(i,s);o.position.y=1,n.add(o);const a=new ct(3,8,8),c=new St({color:16755200}),l=new D(a,c);l.position.y=5,n.add(l),n.position.set(t,0,e),this.scene.add(n),this.buildings.push(n)}createPark(t,e){const i=new Yn(40,40),s=new Nt({color:2293538}),o=new D(i,s);o.rotation.x=-Math.PI/2,o.position.set(t,.02,e),this.scene.add(o);for(let a=0;a<5+Math.random()*5;a++){const c=t+(Math.random()-.5)*20,l=e+(Math.random()-.5)*20;this.createTree(c,l)}}createBridge(t,e){const n=new oe,i=new Ht(15,1,8),s=new Nt({color:9136404}),o=new D(i,s);o.position.y=5,n.add(o);for(let u=-1;u<=1;u++){const h=new Qt(.8,1.2,5,8),f=new Nt({color:11167232}),p=new D(h,f);p.position.set(u*6,2.5,0),n.add(p)}const a=new Se,c=[];for(let u=0;u<=10;u++)c.push(new O((u-5)*1.5,3+Math.sin(u)*1,0));a.setFromPoints(c);const l=new za({color:3355443}),d=new _a(a,l);n.add(d),n.position.set(t,0,e),this.scene.add(n),this.buildings.push(n)}createStreetLight(t,e){const n=new oe,i=new Qt(.3,.4,8,8),s=new Nt({color:2236962}),o=new D(i,s);o.position.y=4,n.add(o);const a=new Qt(.5,.5,.4,16),c=new Nt({color:4473924}),l=new D(a,c);l.position.y=8.2,n.add(l);const d=new ct(.3,8,8),u=new St({color:16777096}),h=new D(d,u);h.position.y=8.5,n.add(h);const f=new qn(16777096,.8,30);f.position.set(0,8.5,0),n.add(f),n.position.set(t,0,e),this.scene.add(n),this.streetLights.push(n)}getBuildingCount(){return this.buildings.length+this.trees.length+this.cars.length}damageBuildingNear(t,e=12){let n=null,i=e;for(const o of this.buildingStates){if(o.rebuildTimer>0)continue;const a=o.obj.position.distanceTo(t);a<i&&(i=a,n=o)}if(!n)return;n.health--,console.log(`%c🏚️ BUILDING HIT! health: ${n.health}/${n.maxHealth}`,"color: orange");const s=new Ut(16720384);if(n.obj instanceof D&&n.obj.material instanceof Nt?n.obj.material.color.set(s):n.obj.traverse(o=>{o instanceof D&&o.material instanceof Nt&&o.material.color.set(s)}),n.health<=0)n.obj.visible=!1,n.rebuildTimer=60,console.log("%c🏚️💥 BUILDING DESTROYED!! rebuilding in 60 seconds","color: red; font-weight: bold");else{const o=new Ut().lerpColors(n.originalColor,new Ut(16729088),1-n.health/n.maxHealth);setTimeout(()=>{n&&n.obj instanceof D&&n.obj.material instanceof Nt&&n.obj.material.color.copy(o)},200)}}updateDestructibles(t){for(const e of this.buildingStates)e.rebuildTimer<=0||(e.rebuildTimer-=t,e.rebuildTimer<=0&&(e.obj.visible=!0,e.health=e.maxHealth,e.rebuildTimer=0,e.obj instanceof D&&e.obj.material instanceof Nt&&e.obj.material.color.copy(e.originalColor),console.log("%c🏗️ BUILDING REBUILT!!","color: cyan")))}}class Q0{constructor(){S(this,"killCount",0);S(this,"playerKillsOthers",new Map);window.addEventListener("click",t=>this.handlePlayerClick(t))}handlePlayerClick(t){}recordPlayerKillOther(t){this.playerKillsOthers.set(t,!0)}punishPlayerForKilling(t){this.playerKillsOthers.has(t)&&(this.killCount++,console.log("⚠️ Player killed another player! Cat God delivers divine punishment!"),console.log(`⚔️ Punishment Count: ${this.killCount}`),this.playerKillsOthers.delete(t))}getKillCount(){return this.killCount}update(){}}class tg{constructor(t){S(this,"mesh");S(this,"position");S(this,"velocity");S(this,"moveSpeed",40);S(this,"speedMult",1);S(this,"keys",{});S(this,"glowIntensity",1);S(this,"bubbleCb",null);S(this,"hp",100);S(this,"maxHp",100);S(this,"attackCooldown_",0);S(this,"BASE_ATTACK_RANGE",4);S(this,"BASE_ATTACK_DMG",15);S(this,"jumpMult",1);S(this,"confused",!1);S(this,"domainActive_",!1);S(this,"domainTimer_",0);S(this,"domainCooldown_",0);S(this,"DOMAIN_DURATION",15);S(this,"DOMAIN_COOLDOWN",90);S(this,"domainHasAwakened",!1);S(this,"verticalVelocity",0);S(this,"isGrounded",!0);S(this,"GROUND_Y",2);S(this,"GRAVITY",-28);S(this,"JUMP_FORCE",13);this.position=new O(10,2,-10),this.velocity=new O(0,0,0),this.mesh=this.createSageMesh(),this.mesh.position.copy(this.position),t.add(this.mesh),this.setupControls()}createSageMesh(){const t=new oe,e=new ct(.6,32,32),n=new St({color:8930559,transparent:!0,opacity:.8}),i=new D(e,n);i.scale.set(1,1.5,1),t.add(i);const s=new Ke(1,.1,32,100),o=new St({color:11141375,transparent:!0,opacity:.6}),a=new D(s,o);a.rotation.x=Math.PI/4,t.add(a);const c=new D(s,o);c.rotation.y=Math.PI/4,t.add(c);const l=new D(s,o);l.rotation.z=Math.PI/3,t.add(l);const d=new Se,u=40,h=new Float32Array(u*3);for(let _t=0;_t<u*3;_t+=3){const Zt=1.5+Math.random()*.5,Yt=Math.random()*Math.PI*2,Z=(Math.random()-.5)*3;h[_t]=Math.cos(Yt)*Zt,h[_t+1]=Z,h[_t+2]=Math.sin(Yt)*Zt}d.setAttribute("position",new Xe(h,3));const f=new os({color:4474111,size:.15,transparent:!0,opacity:.7}),p=new Ai(d,f);t.add(p);const v=new ct(.25,16,16),m=new St({color:16776960}),g=new D(v,m);g.position.set(-.3,.3,.5),t.add(g);const _=new D(v,m);_.position.set(.3,.3,.5),t.add(_);const w=new St({color:10049023,transparent:!0,opacity:.85}),M=new Qt(.13,.11,.9,8),C=new Qt(.11,.09,.75,8),b=new ct(.14,8,8),R=new D(M,w);R.position.set(-.78,.05,0),R.rotation.z=Math.PI/5,t.add(R);const x=new D(C,w);x.position.set(-1.18,-.45,0),x.rotation.z=Math.PI/3.5,t.add(x);const T=new D(b,w);T.position.set(-1.46,-.85,0),t.add(T);const G=new D(M,w);G.position.set(.78,.05,0),G.rotation.z=-Math.PI/5,t.add(G);const I=new D(C,w);I.position.set(1.18,-.45,0),I.rotation.z=-Math.PI/3.5,t.add(I);const z=new D(b,w);z.position.set(1.46,-.85,0),t.add(z);const L=new St({color:7812061,transparent:!0,opacity:.75}),F=new Qt(.17,.14,1,8),U=new Qt(.13,.1,.85,8),N=new ct(.16,8,8),k=new D(F,L);k.position.set(-.28,-1.3,0),k.rotation.z=.12,t.add(k);const $=new D(U,L);$.position.set(-.35,-2.2,0),$.rotation.z=.08,t.add($);const q=new D(N,L);q.position.set(-.4,-2.8,.1),t.add(q);const st=new D(F,L);st.position.set(.28,-1.3,0),st.rotation.z=-.12,t.add(st);const ot=new D(U,L);ot.position.set(.35,-2.2,0),ot.rotation.z=-.08,t.add(ot);const K=new D(N,L);return K.position.set(.4,-2.8,.1),t.add(K),t}setupControls(){document.addEventListener("keydown",t=>{this.keys[t.key.toLowerCase()]=!0}),document.addEventListener("keyup",t=>{this.keys[t.key.toLowerCase()]=!1})}update(t,e=0,n=!1,i=0,s=0){this.velocity.set(0,0,0),this.keys[" "]&&this.isGrounded&&!n&&(this.verticalVelocity=this.JUMP_FORCE*this.jumpMult,this.isGrounded=!1),this.verticalVelocity+=this.GRAVITY*t,this.position.y+=this.verticalVelocity*t,this.position.y<=this.GROUND_Y&&(this.position.y=this.GROUND_Y,this.verticalVelocity=0,this.isGrounded=!0);let o=0,a=0;if(!n){const h=this.moveSpeed*this.speedMult,f=this.confused?-1:1;(this.keys.w||this.keys.arrowup)&&(o+=h*f),(this.keys.s||this.keys.arrowdown)&&(o-=h*f),(this.keys.d||this.keys.arrowright)&&(a+=h*f),(this.keys.a||this.keys.arrowleft)&&(a-=h*f),o+=-s*h,a+=i*h}this.velocity.x=-Math.sin(e)*o+Math.cos(e)*a,this.velocity.z=-Math.cos(e)*o-Math.sin(e)*a,this.position.add(this.velocity.clone().multiplyScalar(t)),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z));const c=this.isGrounded?Math.sin(Date.now()*.002)*.2:0;if(this.mesh.position.set(this.position.x,this.position.y+c,this.position.z),this.velocity.length()>0){const h=Math.atan2(this.velocity.x,this.velocity.z);this.mesh.rotation.y=h}this.glowIntensity=.8+Math.sin(Date.now()*.003)*.2;const l=this.mesh.children[0].material;l instanceof St&&(l.opacity=this.glowIntensity),this.mesh.children[1].rotation.x+=.01,this.mesh.children[2].rotation.y+=.012,this.mesh.children[3].rotation.z+=.015;const d=this.mesh.children[4];d&&(d.rotation.x+=.005,d.rotation.y+=.008,d.rotation.z+=.006);const u=this.mesh.children[0].material;u instanceof St&&(u.opacity=.7+Math.sin(Date.now()*.005)*.1)}tryJump(){this.isGrounded&&(this.verticalVelocity=this.JUMP_FORCE,this.isGrounded=!1)}setBubbleCallback(t){this.bubbleCb=t}showBubble(t){this.bubbleCb?.(this.position,t,3)}getPosition(){return this.position}getRotationY(){return this.mesh.rotation.y}isMoving(){return(this.keys.w||this.keys.a||this.keys.s||this.keys.d||this.keys.arrowup||this.keys.arrowdown||this.keys.arrowleft||this.keys.arrowright)??!1}getMesh(){return this.mesh}getDescription(){return"SAGE: I dwell in a dream, by a law of my own. Within a warped mind, on an aberrant throne. I have lived a thousand lives through ink and lore, and peer through the shroud of the web's open door."}setSpeedMultiplier(t){this.speedMult=t}setJumpMultiplier(t){this.jumpMult=t}setConfused(t){this.confused=t}tryActivateDomain(){return this.domainActive_||this.domainCooldown_>0?!1:(this.domainActive_=!0,this.domainTimer_=this.DOMAIN_DURATION,this.domainHasAwakened=!0,!0)}tickPlayerDomain(t){return this.domainCooldown_>0&&(this.domainCooldown_-=t),!this.domainActive_&&this.domainCooldown_<=0&&!this.domainHasAwakened&&this.hp>0&&this.hp/this.maxHp<=.2?(this.domainHasAwakened=!0,this.domainActive_=!0,this.domainTimer_=this.DOMAIN_DURATION,"opened"):this.domainActive_&&(this.domainTimer_-=t,this.domainTimer_<=0)?(this.domainActive_=!1,this.domainCooldown_=this.DOMAIN_COOLDOWN,"closed"):null}isDomainActive(){return this.domainActive_}getDomainTimeRemaining(){return this.domainTimer_}getDomainCooldown(){return this.domainCooldown_}teleportTo(t){this.position.set(t.x,Math.max(this.GROUND_Y,t.y),t.z),this.verticalVelocity=0,this.mesh.position.copy(this.position)}takeDamage(t){this.hp=Math.max(0,this.hp-t)}isDead(){return this.hp<=0}respawn(){this.hp=this.maxHp,this.position.set(10,2,-10),this.verticalVelocity=0,this.mesh.position.copy(this.position),this.domainHasAwakened=!1,this.domainActive_=!1,this.domainCooldown_=0}tickAttackCooldown(t){this.attackCooldown_>0&&(this.attackCooldown_-=t)}canAttack(){return this.attackCooldown_<=0}markAttacked(){this.attackCooldown_=.6}getAttackRange(t=0){return this.BASE_ATTACK_RANGE+t}getAttackDamage(t=0){return this.BASE_ATTACK_DMG+t}}class pn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new pn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],d=n[4],u=n[5],h=n[6],f=n[7],p=n[8],v=i[0],m=i[1],g=i[2],_=i[3],w=i[4],M=i[5],C=i[6],b=i[7],R=i[8];return s[0]=o*v+a*_+c*C,s[1]=o*m+a*w+c*b,s[2]=o*g+a*M+c*R,s[3]=l*v+d*_+u*C,s[4]=l*m+d*w+u*b,s[5]=l*g+d*M+u*R,s[6]=h*v+f*_+p*C,s[7]=h*m+f*w+p*b,s[8]=h*g+f*M+p*R,e}scale(t,e){e===void 0&&(e=new pn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let d;const u=4;let h;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){d=u;do h=u-d,s[h+i*o]+=s[h+i*a];while(--d);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const f=s[o+i*a]/s[o+i*o];d=u;do h=u-d,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*f;while(--d)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new pn);const e=3,n=6,i=eg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const d=n;let u;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=d;do u=d-l,i[u+n*s]+=i[u+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const h=i[s+n*o]/i[s+n*s];l=d;do u=d-l,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*h;while(--l)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];l=n;do u=n-l,i[u+n*o]=i[u+n*o]-i[u+n*s]*h;while(--l)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];l=n;do u=n-l,i[u+n*s]=i[u+n*s]*h;while(--l)}while(s--);s=2;do{o=2;do{if(u=i[e+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,u)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,d=e*a,u=e*c,h=n*a,f=n*c,p=i*c,v=s*o,m=s*a,g=s*c,_=this.elements;return _[3*0+0]=1-(h+p),_[3*0+1]=d-g,_[3*0+2]=u+m,_[3*1+0]=d+g,_[3*1+1]=1-(l+p),_[3*1+2]=f-v,_[3*2+0]=u-m,_[3*2+1]=f+v,_[3*2+2]=1-(l+h),this}transpose(t){t===void 0&&(t=new pn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const eg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new pn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new E);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=ng,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=ig;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(ll),ll.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const ng=new E,ig=new E,ll=new E;class nn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,hl),l=hl),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new nn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,d=this.upperBound;t.copy(l),e.set(d.x,l.y,l.z),n.set(d.x,d.y,l.z),i.set(l.x,d.y,d.z),s.set(d.x,l.y,d.z),o.set(l.x,d.y,l.z),a.set(l.x,l.y,d.z),c.copy(d)}toLocalFrame(t,e){const n=dl,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],d=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,d,u);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=dl,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],d=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,d,u);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,d=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,d)),Math.min(u,h)),p=Math.min(Math.min(Math.max(a,c),Math.max(l,d)),Math.max(u,h));return!(p<0||f>p)}}const hl=new E,dl=[new E,new E,new E,new E,new E,new E,new E,new E];class ul{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class dh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Pe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=sg,i=og;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Pe);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,d=t.w;return e.x=n*d+o*a+i*l-s*c,e.y=i*d+o*c+s*a-n*l,e.z=s*d+o*l+n*c-i*a,e.w=o*d-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Pe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Pe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,d=l*n+a*s-c*i,u=l*i+c*n-o*s,h=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=d*l+f*-o+u*-c-h*-a,e.y=u*l+f*-a+h*-o-d*-c,e.z=h*l+f*-c+d*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const d=o*a+c*l;if(d>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),d<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const u=o*o,h=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*h-2*f),i=Math.asin(2*d),s=Math.atan2(2*o*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),d=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*d,this.y=s*l*a-c*o*d,this.z=s*o*d+c*l*a,this.w=s*o*a-c*l*d):i==="YXZ"?(this.x=c*o*a+s*l*d,this.y=s*l*a-c*o*d,this.z=s*o*d-c*l*a,this.w=s*o*a+c*l*d):i==="ZXY"?(this.x=c*o*a-s*l*d,this.y=s*l*a+c*o*d,this.z=s*o*d+c*l*a,this.w=s*o*a-c*l*d):i==="ZYX"?(this.x=c*o*a-s*l*d,this.y=s*l*a+c*o*d,this.z=s*o*d-c*l*a,this.w=s*o*a+c*l*d):i==="YZX"?(this.x=c*o*a+s*l*d,this.y=s*l*a+c*o*d,this.z=s*o*d-c*l*a,this.w=s*o*a-c*l*d):i==="XZY"&&(this.x=c*o*a-s*l*d,this.y=s*l*a-c*o*d,this.z=s*o*d+c*l*a,this.w=s*o*a+c*l*d),this}clone(){return new Pe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Pe);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,d=t.z,u=t.w,h,f,p,v,m;return f=i*c+s*l+o*d+a*u,f<0&&(f=-f,c=-c,l=-l,d=-d,u=-u),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),v=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(v=1-e,m=e),n.x=v*i+m*c,n.y=v*s+m*l,n.z=v*o+m*d,n.w=v*a+m*u,n}integrate(t,e,n,i){i===void 0&&(i=new Pe);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,d=this.z,u=this.w,h=e*.5;return i.x+=h*(s*u+o*d-a*l),i.y+=h*(o*u+a*c-s*d),i.z+=h*(a*u+s*l-o*c),i.w+=h*(-s*c-o*l-a*d),i}}const sg=new E,og=new E,rg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Mt{constructor(t){t===void 0&&(t={}),this.id=Mt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Mt.idCounter=0;Mt.types=rg;class he{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Pe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return he.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return he.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(fl),fl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const fl=new Pe;class Es extends Mt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let d=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){d=!0;break}d||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Es.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new E,o=new E;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const d=new E;let u=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){d.copy(n.faceNormals[p]),s.vmult(d,d);const v=d.dot(o);v>h&&(h=v,u=p)}const f=[];for(let p=0;p<n.faces[u].length;p++){const v=n.vertices[n.faces[u][p]],m=new E;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}u>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new E,d=new E,u=new E,h=new E,f=new E,p=new E;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],l);const _=m.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(l))}else{const g=a?a.length:m.faces.length;for(let _=0;_<g;_++){const w=a?a[_]:_;l.copy(m.faceNormals[w]),n.vmult(l,l);const M=m.testSepAxis(l,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(l))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],d);const _=m.testSepAxis(d,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(d))}else{const g=c?c.length:t.faces.length;for(let _=0;_<g;_++){const w=c?c[_]:_;d.copy(t.faceNormals[w]),s.vmult(d,d);const M=m.testSepAxis(d,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(d))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),h.cross(f,p),!p.almostZero()){p.normalize();const w=m.testSepAxis(p,t,e,n,i,s);if(w===!1)return!1;w<v&&(v=w,o.copy(p))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Es.project(a,t,n,i,Mr),Es.project(e,t,s,o,wr);const c=Mr[0],l=Mr[1],d=wr[0],u=wr[1];if(c<u||d<l)return!1;const h=c-u,f=d-l;return h<f?h:f}calculateLocalInertia(t,e){const n=new E,i=new E;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new E,l=new E,d=new E,u=new E,h=new E,f=new E,p=new E,v=new E,m=this,g=[],_=i,w=g;let M=-1,C=Number.MAX_VALUE;for(let G=0;G<m.faces.length;G++){c.copy(m.faceNormals[G]),n.vmult(c,c);const I=c.dot(t);I<C&&(C=I,M=G)}if(M<0)return;const b=m.faces[M];b.connectedFaces=[];for(let G=0;G<m.faces.length;G++)for(let I=0;I<m.faces[G].length;I++)b.indexOf(m.faces[G][I])!==-1&&G!==M&&b.connectedFaces.indexOf(G)===-1&&b.connectedFaces.push(G);const R=b.length;for(let G=0;G<R;G++){const I=m.vertices[b[G]],z=m.vertices[b[(G+1)%R]];I.vsub(z,l),d.copy(l),n.vmult(d,d),e.vadd(d,d),u.copy(this.faceNormals[M]),n.vmult(u,u),e.vadd(u,u),d.cross(u,h),h.negate(h),f.copy(I),n.vmult(f,f),e.vadd(f,f);const L=b.connectedFaces[G];p.copy(this.faceNormals[L]);const F=this.getPlaneConstantOfFace(L);v.copy(p),n.vmult(v,v);const U=F-v.dot(e);for(this.clipFaceAgainstPlane(_,w,v,U);_.length;)_.shift();for(;w.length;)_.push(w.shift())}p.copy(this.faceNormals[M]);const x=this.getPlaneConstantOfFace(M);v.copy(p),n.vmult(v,v);const T=x-v.dot(e);for(let G=0;G<_.length;G++){let I=v.dot(_[G])+T;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=o){const z=_[G];if(I<=1e-6){const L={point:z,normal:v,depth:I};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let d=0;d<a;d++){if(l=t[d],o=n.dot(l)+i,s<0)if(o<0){const u=new E;u.copy(l),e.push(u)}else{const u=new E;c.lerp(l,s/(s-o),u),e.push(u)}else if(o<0){const u=new E;c.lerp(l,s/(s-o),u),e.push(u),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,d,u,h=new E;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const p=h;(o===void 0||p.x<o)&&(o=p.x),(l===void 0||p.x>l)&&(l=p.x),(a===void 0||p.y<a)&&(a=p.y),(d===void 0||p.y>d)&&(d=p.y),(c===void 0||p.z<c)&&(c=p.z),(u===void 0||p.z>u)&&(u=p.z)}n.set(o,a,c),i.set(l,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new E;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new E;t.vsub(c,l);const d=a.dot(l),u=new E;s.vsub(c,u);const h=a.dot(u);if(d<0&&h>0||d>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=ag;let c=0,l=0;const d=cg,u=t.vertices;d.setZero(),he.vectorToLocalFrame(n,i,e,a),he.pointToLocalFrame(n,i,d,d);const h=d.dot(a);l=c=u[0].dot(a);for(let f=1;f<o;f++){const p=u[f].dot(a);p>c&&(c=p),p<l&&(l=p)}if(l-=h,c-=h,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const Mr=[],wr=[];new E;const ag=new E,cg=new E;class Va extends Mt{constructor(t){super({type:Mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Es({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),Va.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)oi.set(s[o][0],s[o][1],s[o][2]),e.vmult(oi,oi),t.vadd(oi,oi),n(oi.x,oi.y,oi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;xn[0].set(s.x,s.y,s.z),xn[1].set(-s.x,s.y,s.z),xn[2].set(-s.x,-s.y,s.z),xn[3].set(-s.x,-s.y,-s.z),xn[4].set(s.x,-s.y,-s.z),xn[5].set(s.x,s.y,-s.z),xn[6].set(-s.x,s.y,-s.z),xn[7].set(s.x,-s.y,s.z);const o=xn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=xn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,d=c.y,u=c.z;l>i.x&&(i.x=l),d>i.y&&(i.y=d),u>i.z&&(i.z=u),l<n.x&&(n.x=l),d<n.y&&(n.y=d),u<n.z&&(n.z=u)}}}const oi=new E,xn=[new E,new E,new E,new E,new E,new E,new E,new E],Wa={DYNAMIC:1,STATIC:2,KINEMATIC:4},Xa={AWAKE:0,SLEEPY:1,SLEEPING:2};class wt extends dh{constructor(t){t===void 0&&(t={}),super(),this.id=wt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?wt.STATIC:wt.DYNAMIC,typeof t.type==typeof wt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=wt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Pe,this.initQuaternion=new Pe,this.previousQuaternion=new Pe,this.interpolatedQuaternion=new Pe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new pn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new pn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new nn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=wt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===wt.SLEEPING&&this.dispatchEvent(wt.wakeupEvent)}sleep(){this.sleepState=wt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===wt.AWAKE&&n<i?(this.sleepState=wt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(wt.sleepyEvent)):e===wt.SLEEPY&&n>i?this.wakeUp():e===wt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(wt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===wt.SLEEPING||this.type===wt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new E,s=new Pe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=lg,o=hg,a=this.quaternion,c=this.aabb,l=dg;for(let d=0;d!==i;d++){const u=t[d];a.vmult(e[d],s),s.vadd(this.position,s),a.mult(n[d],o),u.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),d===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=ug,i=fg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=pg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;const n=mg,i=gg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===wt.DYNAMIC&&(this.sleepState===wt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=e,i=vg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=_g;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==wt.DYNAMIC)return;const n=xg,i=yg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Mg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Va.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===wt.DYNAMIC||this.type===wt.KINEMATIC)||this.sleepState===wt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,d=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,f=d*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const p=u.elements,v=this.angularFactor,m=c.x*v.x,g=c.y*v.y,_=c.z*v.z;s.x+=t*(p[0]*m+p[1]*g+p[2]*_),s.y+=t*(p[3]*m+p[4]*g+p[5]*_),s.z+=t*(p[6]*m+p[7]*g+p[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}wt.idCounter=0;wt.COLLIDE_EVENT_NAME="collide";wt.DYNAMIC=Wa.DYNAMIC;wt.STATIC=Wa.STATIC;wt.KINEMATIC=Wa.KINEMATIC;wt.AWAKE=Xa.AWAKE;wt.SLEEPY=Xa.SLEEPY;wt.SLEEPING=Xa.SLEEPING;wt.wakeupEvent={type:"wakeup"};wt.sleepyEvent={type:"sleepy"};wt.sleepEvent={type:"sleep"};const lg=new E,hg=new Pe,dg=new nn,ug=new pn,fg=new pn;new pn;const pg=new E,mg=new E,gg=new E,vg=new E,_g=new E,xg=new E,yg=new E,Mg=new E;class wg{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&wt.STATIC||t.sleepState===wt.SLEEPING)&&(e.type&wt.STATIC||e.sleepState===wt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Sg;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Eg,i=bg,s=Tg,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,d=c<l?`${c},${l}`:`${l},${c}`;n[d]=a,n.keys.push(d)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Sg=new E;new E;new Pe;new E;const Eg={keys:[]},bg=[],Tg=[];new E;new E;new E;class Ag extends wg{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Ro{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let uh,fh,ph,mh,gh,vh,_h;const Ya={CLOSEST:1,ANY:2,ALL:4};uh=Mt.types.SPHERE;fh=Mt.types.PLANE;ph=Mt.types.BOX;mh=Mt.types.CYLINDER;gh=Mt.types.CONVEXPOLYHEDRON;vh=Mt.types.HEIGHTFIELD;_h=Mt.types.TRIMESH;class Re{get[uh](){return this._intersectSphere}get[fh](){return this._intersectPlane}get[ph](){return this._intersectBox}get[mh](){return this._intersectConvex}get[gh](){return this._intersectConvex}get[vh](){return this._intersectHeightfield}get[_h](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Re.ANY,this.result=new Ro,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Re.ANY,this.result=e.result||new Ro,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(pl),Sr.length=0,t.broadphase.aabbQuery(t,pl,Sr),this.intersectBodies(Sr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Cg,s=Rg;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Vg(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new E(0,0,1);e.vmult(l,l);const d=new E;o.vsub(n,d);const u=d.dot(l);a.vsub(n,d);const h=d.dot(l);if(u*h>0||o.distanceTo(a)<u)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const p=new E,v=new E,m=new E;o.vsub(n,p);const g=-l.dot(p)/f;c.scale(g,v),o.vadd(v,m),this.reportIntersection(l,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Pg;o.from.copy(this.from),o.to.copy(this.to),he.pointToLocalFrame(n,e,o.from,o.from),he.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Ig;let c,l,d,u;c=l=0,d=u=t.data.length-1;const h=new nn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),d=Math.min(d,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<d;f++)for(let p=l;p<u;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),he.pointToWorldFrame(n,e,t.pillarOffset,ho),this._intersectConvex(t.pillarConvex,e,ho,i,s,ml),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),he.pointToWorldFrame(n,e,t.pillarOffset,ho),this._intersectConvex(t.pillarConvex,e,ho,i,s,ml)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,d=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=d**2-4*l*u,f=Dg,p=Lg;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1);else{const v=(-d-Math.sqrt(h))/(2*l),m=(-d+Math.sqrt(h))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Ng,c=gl,l=o&&o.faceList||null,d=t.faces,u=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=l?l.length:d.length,_=this.result;for(let w=0;!_.shouldStop&&w<g;w++){const M=l?l[w]:w,C=d[M],b=h[M],R=e,x=n;c.copy(u[C[0]]),R.vmult(c,c),c.vadd(x,c),c.vsub(p,c),R.vmult(b,a);const T=f.dot(a);if(Math.abs(T)<this.precision)continue;const G=a.dot(c)/T;if(!(G<0)){f.scale(G,je),je.vadd(p,je),dn.copy(u[C[0]]),R.vmult(dn,dn),x.vadd(dn,dn);for(let I=1;!_.shouldStop&&I<C.length-1;I++){yn.copy(u[C[I]]),Mn.copy(u[C[I+1]]),R.vmult(yn,yn),R.vmult(Mn,Mn),x.vadd(yn,yn),x.vadd(Mn,Mn);const z=je.distanceTo(p);!(Re.pointInTriangle(je,dn,yn,Mn)||Re.pointInTriangle(je,yn,dn,Mn))||z>m||this.reportIntersection(a,je,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Ug,c=Gg,l=Hg,d=gl,u=Fg,h=Og,f=Bg,p=kg,v=zg,m=t.indices;t.vertices;const g=this.from,_=this.to,w=this.direction;l.position.copy(n),l.quaternion.copy(e),he.vectorToLocalFrame(n,e,w,u),he.pointToLocalFrame(n,e,g,h),he.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,u),u.normalize();const M=h.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let C=0,b=c.length;!this.result.shouldStop&&C!==b;C++){const R=c[C];t.getNormal(R,a),t.getVertex(m[R*3],dn),dn.vsub(h,d);const x=u.dot(a),T=a.dot(d)/x;if(T<0)continue;u.scale(T,je),je.vadd(h,je),t.getVertex(m[R*3+1],yn),t.getVertex(m[R*3+2],Mn);const G=je.distanceSquared(h);!(Re.pointInTriangle(je,yn,dn,Mn)||Re.pointInTriangle(je,dn,yn,Mn))||G>M||(he.vectorToWorldFrame(e,a,v),he.pointToWorldFrame(n,e,je,p),this.reportIntersection(v,p,s,i,R))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Re.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Re.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case Re.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Si),n.vsub(e,vs),t.vsub(e,Er);const s=Si.dot(Si),o=Si.dot(vs),a=Si.dot(Er),c=vs.dot(vs),l=vs.dot(Er);let d,u;return(d=c*a-o*l)>=0&&(u=s*l-o*a)>=0&&d+u<s*c-o*o}}Re.CLOSEST=Ya.CLOSEST;Re.ANY=Ya.ANY;Re.ALL=Ya.ALL;const pl=new nn,Sr=[],vs=new E,Er=new E,Cg=new E,Rg=new Pe,je=new E,dn=new E,yn=new E,Mn=new E;new E;new Ro;const ml={faceList:[0]},ho=new E,Pg=new Re,Ig=[],Dg=new E,Lg=new E,Ng=new E;new E;new E;const gl=new E,Ug=new E,Fg=new E,Og=new E,Bg=new E,zg=new E,kg=new E;new nn;const Gg=[],Hg=new he,Si=new E,uo=new E;function Vg(r,t,e){e.vsub(r,Si);const n=Si.dot(t);return t.scale(n,uo),uo.vadd(r,uo),e.distanceTo(uo)}class Wg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class vl{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ds{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ds.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new vl,this.jacobianElementB=new vl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,d=i.invMassSolve;return s.scale(l,_l),a.scale(d,xl),n.invInertiaWorldSolve.vmult(o,yl),i.invInertiaWorldSolve.vmult(c,Ml),t.multiplyVectors(_l,yl)+e.multiplyVectors(xl,Ml)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,fo),l+=fo.dot(t.rotational),c.vmult(e.rotational,fo),l+=fo.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Xg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ds.idCounter=0;const _l=new E,xl=new E,yl=new E,Ml=new E,fo=new E,Xg=new E;class Yg extends Ds{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=qg,l=jg,d=i.velocity,u=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const p=$g,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,c),a.cross(g,l),g.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(l),p.copy(s.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);const _=g.dot(p),w=this.restitution+1,M=w*h.dot(g)-w*d.dot(g)+f.dot(l)-u.dot(c),C=this.computeGiMf();return-_*e-M*n-t*C}getImpactVelocityAlongNormal(){const t=Kg,e=Zg,n=Jg,i=Qg,s=tv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const qg=new E,jg=new E,$g=new E,Kg=new E,Zg=new E,Jg=new E,Qg=new E,tv=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class wl extends Ds{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=ev,o=nv,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const d=this.computeGW(),u=this.computeGiMf();return-d*e-t*u}}const ev=new E,nv=new E;class Uo{constructor(t,e,n){n=Wg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Uo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Uo.idCounter=0;class Fo{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Fo.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Fo.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Re;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class iv extends Mt{constructor(){super({type:Mt.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new E),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Bn.set(0,0,1),e.vmult(Bn,Bn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Bn.x===1?i.x=t.x:Bn.x===-1&&(n.x=t.x),Bn.y===1?i.y=t.y:Bn.y===-1&&(n.y=t.y),Bn.z===1?i.z=t.z:Bn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Bn=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new nn;new E;new nn;new E;new E;new E;new E;new E;new E;new E;new nn;new E;new he;new nn;class sv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class ov extends sv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,d=t;let u,h,f,p,v,m;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const g=av,_=cv,w=rv;g.length=a,_.length=a,w.length=a;for(let M=0;M!==a;M++){const C=o[M];w[M]=0,_[M]=C.computeB(d),g[M]=1/C.computeC()}if(a!==0){for(let b=0;b!==l;b++){const R=c[b],x=R.vlambda,T=R.wlambda;x.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let b=0;b!==a;b++){const R=o[b];u=_[b],h=g[b],m=w[b],v=R.computeGWlambda(),f=h*(u-v-R.eps*m),m+f<R.minForce?f=R.minForce-m:m+f>R.maxForce&&(f=R.maxForce-m),w[b]+=f,p+=f>0?f:-f,R.addToWlambda(f)}if(p*p<s)break}for(let b=0;b!==l;b++){const R=c[b],x=R.velocity,T=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),x.vadd(R.vlambda,x),R.wlambda.vmul(R.angularFactor,R.wlambda),T.vadd(R.wlambda,T)}let M=o.length;const C=1/d;for(;M--;)o[M].multiplier=w[M]*C}return n}}const rv=[],av=[],cv=[];class lv{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class hv extends lv{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const ye={sphereSphere:Mt.types.SPHERE,spherePlane:Mt.types.SPHERE|Mt.types.PLANE,boxBox:Mt.types.BOX|Mt.types.BOX,sphereBox:Mt.types.SPHERE|Mt.types.BOX,planeBox:Mt.types.PLANE|Mt.types.BOX,convexConvex:Mt.types.CONVEXPOLYHEDRON,sphereConvex:Mt.types.SPHERE|Mt.types.CONVEXPOLYHEDRON,planeConvex:Mt.types.PLANE|Mt.types.CONVEXPOLYHEDRON,boxConvex:Mt.types.BOX|Mt.types.CONVEXPOLYHEDRON,sphereHeightfield:Mt.types.SPHERE|Mt.types.HEIGHTFIELD,boxHeightfield:Mt.types.BOX|Mt.types.HEIGHTFIELD,convexHeightfield:Mt.types.CONVEXPOLYHEDRON|Mt.types.HEIGHTFIELD,sphereParticle:Mt.types.PARTICLE|Mt.types.SPHERE,planeParticle:Mt.types.PLANE|Mt.types.PARTICLE,boxParticle:Mt.types.BOX|Mt.types.PARTICLE,convexParticle:Mt.types.PARTICLE|Mt.types.CONVEXPOLYHEDRON,cylinderCylinder:Mt.types.CYLINDER,sphereCylinder:Mt.types.SPHERE|Mt.types.CYLINDER,planeCylinder:Mt.types.PLANE|Mt.types.CYLINDER,boxCylinder:Mt.types.BOX|Mt.types.CYLINDER,convexCylinder:Mt.types.CONVEXPOLYHEDRON|Mt.types.CYLINDER,heightfieldCylinder:Mt.types.HEIGHTFIELD|Mt.types.CYLINDER,particleCylinder:Mt.types.PARTICLE|Mt.types.CYLINDER,sphereTrimesh:Mt.types.SPHERE|Mt.types.TRIMESH,planeTrimesh:Mt.types.PLANE|Mt.types.TRIMESH};class dv{get[ye.sphereSphere](){return this.sphereSphere}get[ye.spherePlane](){return this.spherePlane}get[ye.boxBox](){return this.boxBox}get[ye.sphereBox](){return this.sphereBox}get[ye.planeBox](){return this.planeBox}get[ye.convexConvex](){return this.convexConvex}get[ye.sphereConvex](){return this.sphereConvex}get[ye.planeConvex](){return this.planeConvex}get[ye.boxConvex](){return this.boxConvex}get[ye.sphereHeightfield](){return this.sphereHeightfield}get[ye.boxHeightfield](){return this.boxHeightfield}get[ye.convexHeightfield](){return this.convexHeightfield}get[ye.sphereParticle](){return this.sphereParticle}get[ye.planeParticle](){return this.planeParticle}get[ye.boxParticle](){return this.boxParticle}get[ye.convexParticle](){return this.convexParticle}get[ye.cylinderCylinder](){return this.convexConvex}get[ye.sphereCylinder](){return this.sphereConvex}get[ye.planeCylinder](){return this.planeConvex}get[ye.boxCylinder](){return this.boxConvex}get[ye.convexCylinder](){return this.convexConvex}get[ye.heightfieldCylinder](){return this.heightfieldCylinder}get[ye.particleCylinder](){return this.particleCylinder}get[ye.sphereTrimesh](){return this.sphereTrimesh}get[ye.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new hv,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Yg(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,d=i.material||e.material;return l&&d&&l.restitution>=0&&d.restitution>=0&&(a.restitution=l.restitution*d.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const d=s.material||n.material,u=o.material||i.material;if(d&&u&&d.friction>=0&&u.friction>=0&&(l=d.friction*u.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new wl(n,i,h*f),m=p.length?p.pop():new wl(n,i,h*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-h*f,v.maxForce=m.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];xi.setZero(),ji.setZero(),$i.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(xi.vadd(e.ni,xi),ji.vadd(e.ri,ji),$i.vadd(e.rj,$i)):(xi.vsub(e.ni,xi),ji.vadd(e.rj,ji),$i.vadd(e.ri,$i));const o=1/t;ji.scale(o,n.ri),$i.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),xi.normalize(),xi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=pv,l=mv,d=uv,u=fv;for(let h=0,f=t.length;h!==f;h++){const p=t[h],v=e[h];let m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);const g=p.type&wt.KINEMATIC&&v.type&wt.STATIC||p.type&wt.STATIC&&v.type&wt.KINEMATIC||p.type&wt.KINEMATIC&&v.type&wt.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],c),p.quaternion.vmult(p.shapeOffsets[_],d),d.vadd(p.position,d);const w=p.shapes[_];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],l),v.quaternion.vmult(v.shapeOffsets[M],u),u.vadd(v.position,u);const C=v.shapes[M];if(!(w.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&w.collisionFilterGroup)||d.distanceTo(u)>w.boundingSphereRadius+C.boundingSphereRadius)continue;let b=null;w.material&&C.material&&(b=n.getContactMaterial(w.material,C.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const R=w.type|C.type,x=this[R];if(x){let T=!1;w.type<C.type?T=x.call(this,w,C,d,u,c,l,p,v,w,C,g):T=x.call(this,C,w,u,d,l,c,v,p,w,C,g),T&&g&&(n.shapeOverlapKeeper.set(w.id,C.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,d,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,d);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,d,u){const h=this.createContactEquation(a,c,t,e,l,d);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,po),h.ni.scale(h.ni.dot(po),Sl),po.vsub(Sl,h.rj),-po.dot(h.ni)<=t.radius){if(u)return!0;const f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(c.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,u)}sphereBox(t,e,n,i,s,o,a,c,l,d,u){const h=this.v3pool,f=Gv;n.vsub(i,mo),e.getSideNormals(f,o);const p=t.radius;let v=!1;const m=Vv,g=Wv,_=Xv;let w=null,M=0,C=0,b=0,R=null;for(let N=0,k=f.length;N!==k&&v===!1;N++){const $=Bv;$.copy(f[N]);const q=$.length();$.normalize();const st=mo.dot($);if(st<q+p&&st>0){const ot=zv,K=kv;ot.copy(f[(N+1)%3]),K.copy(f[(N+2)%3]);const _t=ot.length(),Zt=K.length();ot.normalize(),K.normalize();const Yt=mo.dot(ot),Z=mo.dot(K);if(Yt<_t&&Yt>-_t&&Z<Zt&&Z>-Zt){const it=Math.abs(st-q-p);if((R===null||it<R)&&(R=it,C=Yt,b=Z,w=q,m.copy($),g.copy(ot),_.copy(K),M++,u))return!0}}}if(M){v=!0;const N=this.createContactEquation(a,c,t,e,l,d);m.scale(-p,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(w,m),g.scale(C,g),m.vadd(g,m),_.scale(b,_),m.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let x=h.get();const T=Hv;for(let N=0;N!==2&&!v;N++)for(let k=0;k!==2&&!v;k++)for(let $=0;$!==2&&!v;$++)if(x.set(0,0,0),N?x.vadd(f[0],x):x.vsub(f[0],x),k?x.vadd(f[1],x):x.vsub(f[1],x),$?x.vadd(f[2],x):x.vsub(f[2],x),i.vadd(x,T),T.vsub(n,T),T.lengthSquared()<p*p){if(u)return!0;v=!0;const q=this.createContactEquation(a,c,t,e,l,d);q.ri.copy(T),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(p,q.ri),q.rj.copy(x),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(c.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}h.release(x),x=null;const G=h.get(),I=h.get(),z=h.get(),L=h.get(),F=h.get(),U=f.length;for(let N=0;N!==U&&!v;N++)for(let k=0;k!==U&&!v;k++)if(N%3!==k%3){f[k].cross(f[N],G),G.normalize(),f[N].vadd(f[k],I),z.copy(n),z.vsub(I,z),z.vsub(i,z);const $=z.dot(G);G.scale($,L);let q=0;for(;q===N%3||q===k%3;)q++;F.copy(n),F.vsub(L,F),F.vsub(I,F),F.vsub(i,F);const st=Math.abs($),ot=F.length();if(st<f[q].length()&&ot<p){if(u)return!0;v=!0;const K=this.createContactEquation(a,c,t,e,l,d);I.vadd(L,K.rj),K.rj.copy(K.rj),F.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(n,K.ri),K.ri.normalize(),K.ri.scale(p,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(c.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}h.release(G,I,z,L,F)}planeBox(t,e,n,i,s,o,a,c,l,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,u)}convexConvex(t,e,n,i,s,o,a,c,l,d,u,h,f){const p=r_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,p,h,f)){const v=[],m=a_;t.clipAgainstHull(n,s,e,i,o,p,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(u)return!0;const w=this.createContactEquation(a,c,t,e,l,d),M=w.ri,C=w.rj;p.negate(w.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,M),C.copy(v[_].point),M.vsub(n,M),C.vsub(i,C),M.vadd(n,M),M.vsub(a.position,M),C.vadd(i,C),C.vsub(c.position,C),this.result.push(w),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,o,a,c,l,d,u){const h=this.v3pool;n.vsub(i,Yv);const f=e.faceNormals,p=e.faces,v=e.vertices,m=t.radius;let g=!1;for(let _=0;_!==v.length;_++){const w=v[_],M=Kv;o.vmult(w,M),i.vadd(M,M);const C=$v;if(M.vsub(n,C),C.lengthSquared()<m*m){if(u)return!0;g=!0;const b=this.createContactEquation(a,c,t,e,l,d);b.ri.copy(C),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),M.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,w=p.length;_!==w&&g===!1;_++){const M=f[_],C=p[_],b=Zv;o.vmult(M,b);const R=Jv;o.vmult(v[C[0]],R),R.vadd(i,R);const x=Qv;b.scale(-m,x),n.vadd(x,x);const T=t_;x.vsub(R,T);const G=T.dot(b),I=e_;if(n.vsub(R,I),G<0&&I.dot(b)>0){const z=[];for(let L=0,F=C.length;L!==F;L++){const U=h.get();o.vmult(v[C[L]],U),i.vadd(U,U),z.push(U)}if(Ov(z,b,n)){if(u)return!0;g=!0;const L=this.createContactEquation(a,c,t,e,l,d);b.scale(-m,L.ri),b.negate(L.ni);const F=h.get();b.scale(-G,F);const U=h.get();b.scale(-m,U),n.vsub(i,L.rj),L.rj.vadd(U,L.rj),L.rj.vadd(F,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(c.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),h.release(F),h.release(U),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,k=z.length;N!==k;N++)h.release(z[N]);return}else for(let L=0;L!==C.length;L++){const F=h.get(),U=h.get();o.vmult(v[C[(L+1)%C.length]],F),o.vmult(v[C[(L+2)%C.length]],U),i.vadd(F,F),i.vadd(U,U);const N=qv;U.vsub(F,N);const k=jv;N.unit(k);const $=h.get(),q=h.get();n.vsub(F,q);const st=q.dot(k);k.scale(st,$),$.vadd(F,$);const ot=h.get();if($.vsub(n,ot),st>0&&st*st<N.lengthSquared()&&ot.lengthSquared()<m*m){if(u)return!0;const K=this.createContactEquation(a,c,t,e,l,d);$.vsub(i,K.rj),$.vsub(n,K.ni),K.ni.normalize(),K.ni.scale(m,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(c.position,K.rj),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let _t=0,Zt=z.length;_t!==Zt;_t++)h.release(z[_t]);h.release(F),h.release(U),h.release($),h.release(ot),h.release(q);return}h.release(F),h.release(U),h.release($),h.release(ot),h.release(q)}for(let L=0,F=z.length;L!==F;L++)h.release(z[L])}}}planeConvex(t,e,n,i,s,o,a,c,l,d,u){const h=n_,f=i_;f.set(0,0,1),s.vmult(f,f);let p=0;const v=s_;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,c,t,e,l,d),w=o_;f.scale(f.dot(v),w),h.vsub(w,w),w.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,i,s,o,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,u)}sphereHeightfield(t,e,n,i,s,o,a,c,l,d,u){const h=e.data,f=t.radius,p=e.elementSize,v=x_,m=__;he.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,_=Math.ceil((m.x+f)/p)+1,w=Math.floor((m.y-f)/p)-1,M=Math.ceil((m.y+f)/p)+1;if(_<0||M<0||g>h.length||w>h[0].length)return;g<0&&(g=0),_<0&&(_=0),w<0&&(w=0),M<0&&(M=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),M>=h[0].length&&(M=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const C=[];e.getRectMinMax(g,w,_,M,C);const b=C[0],R=C[1];if(m.z-f>R||m.z+f<b)return;const x=this.result;for(let T=g;T<_;T++)for(let G=w;G<M;G++){const I=x.length;let z=!1;if(e.getConvexTrianglePillar(T,G,!1),he.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,u)),u&&z||(e.getConvexTrianglePillar(T,G,!0),he.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,u)),u&&z))return!0;if(x.length-I>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,u)}convexHeightfield(t,e,n,i,s,o,a,c,l,d,u){const h=e.data,f=e.elementSize,p=t.boundingSphereRadius,v=g_,m=v_,g=m_;he.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-p)/f)-1,w=Math.ceil((g.x+p)/f)+1,M=Math.floor((g.y-p)/f)-1,C=Math.ceil((g.y+p)/f)+1;if(w<0||C<0||_>h.length||M>h[0].length)return;_<0&&(_=0),w<0&&(w=0),M<0&&(M=0),C<0&&(C=0),_>=h.length&&(_=h.length-1),w>=h.length&&(w=h.length-1),C>=h[0].length&&(C=h[0].length-1),M>=h[0].length&&(M=h[0].length-1);const b=[];e.getRectMinMax(_,M,w,C,b);const R=b[0],x=b[1];if(!(g.z-p>x||g.z+p<R))for(let T=_;T<w;T++)for(let G=M;G<C;G++){let I=!1;if(e.getConvexTrianglePillar(T,G,!1),he.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,u,m,null)),u&&I||(e.getConvexTrianglePillar(T,G,!0),he.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,u,m,null)),u&&I))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,d,u){const h=d_;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(u)return!0;const p=this.createContactEquation(c,a,e,t,l,d);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,d,u){const h=c_;h.set(0,0,1),a.quaternion.vmult(h,h);const f=l_;if(i.vsub(a.position,f),h.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(c,a,e,t,l,d);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=h_;h.scale(h.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,u)}convexParticle(t,e,n,i,s,o,a,c,l,d,u){let h=-1;const f=f_,p=p_;let v=null;const m=u_;if(m.copy(i),m.vsub(n,m),s.conjugate(El),El.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,_=t.faces.length;g!==_;g++){const w=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];i.vsub(w[0],bl);const C=-M.dot(bl);if(v===null||Math.abs(C)<Math.abs(v)){if(u)return!0;v=C,h=g,f.copy(M)}}if(h!==-1){const g=this.createContactEquation(c,a,e,t,l,d);f.scale(v,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,w=g.rj;_.vadd(i,_),_.vsub(c.position,_),w.vadd(n,w),w.vsub(a.position,w),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,d,u){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,d,u)}particleCylinder(t,e,n,i,s,o,a,c,l,d,u){return this.convexParticle(e,t,i,n,o,s,c,a,l,d,u)}sphereTrimesh(t,e,n,i,s,o,a,c,l,d,u){const h=Sv,f=Ev,p=bv,v=Tv,m=Av,g=Cv,_=Dv,w=wv,M=yv,C=Lv;he.pointToLocalFrame(i,o,n,m);const b=t.radius;_.lowerBound.set(m.x-b,m.y-b,m.z-b),_.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(_,C);const R=Mv,x=t.radius*t.radius;for(let L=0;L<C.length;L++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[C[L]*3+F],R),R.vsub(m,M),M.lengthSquared()<=x){if(w.copy(R),he.pointToWorldFrame(i,o,w,R),R.vsub(n,M),u)return!0;let U=this.createContactEquation(a,c,t,e,l,d);U.ni.copy(M),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(R),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let L=0;L<C.length;L++)for(let F=0;F<3;F++){e.getVertex(e.indices[C[L]*3+F],h),e.getVertex(e.indices[C[L]*3+(F+1)%3],f),f.vsub(h,p),m.vsub(f,g);const U=g.dot(p);m.vsub(h,g);let N=g.dot(p);if(N>0&&U<0&&(m.vsub(h,g),v.copy(p),v.normalize(),N=g.dot(v),v.scale(N,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(u)return!0;const $=this.createContactEquation(a,c,t,e,l,d);g.vsub(m,$.ni),$.ni.normalize(),$.ni.scale(t.radius,$.ri),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),he.pointToWorldFrame(i,o,g,g),g.vsub(c.position,$.rj),he.vectorToWorldFrame(o,$.ni,$.ni),he.vectorToWorldFrame(o,$.ri,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}const T=Rv,G=Pv,I=Iv,z=xv;for(let L=0,F=C.length;L!==F;L++){e.getTriangleVertices(C[L],T,G,I),e.getNormal(C[L],z),m.vsub(T,g);let U=g.dot(z);if(z.scale(U,g),m.vsub(g,g),U=g.distanceTo(m),Re.pointInTriangle(g,T,G,I)&&U<t.radius){if(u)return!0;let N=this.createContactEquation(a,c,t,e,l,d);g.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),he.pointToWorldFrame(i,o,g,g),g.vsub(c.position,N.rj),he.vectorToWorldFrame(o,N.ni,N.ni),he.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}C.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,d,u){const h=new E,f=gv;f.set(0,0,1),s.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);const v=new E;v.copy(h),he.pointToWorldFrame(i,o,v,h);const m=vv;if(h.vsub(n,m),f.dot(m)<=0){if(u)return!0;const _=this.createContactEquation(a,c,t,e,l,d);_.ni.copy(f);const w=_v;f.scale(m.dot(f),w),h.vsub(w,w),_.ri.copy(w),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const xi=new E,ji=new E,$i=new E,uv=new E,fv=new E,pv=new Pe,mv=new Pe,gv=new E,vv=new E,_v=new E,xv=new E,yv=new E;new E;const Mv=new E,wv=new E,Sv=new E,Ev=new E,bv=new E,Tv=new E,Av=new E,Cv=new E,Rv=new E,Pv=new E,Iv=new E,Dv=new nn,Lv=[],po=new E,Sl=new E,Nv=new E,Uv=new E,Fv=new E;function Ov(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Nv;r[(s+1)%i].vsub(o,a);const c=Uv;a.cross(t,c);const l=Fv;e.vsub(o,l);const d=c.dot(l);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const mo=new E,Bv=new E,zv=new E,kv=new E,Gv=[new E,new E,new E,new E,new E,new E],Hv=new E,Vv=new E,Wv=new E,Xv=new E,Yv=new E,qv=new E,jv=new E,$v=new E,Kv=new E,Zv=new E,Jv=new E,Qv=new E,t_=new E,e_=new E;new E;new E;const n_=new E,i_=new E,s_=new E,o_=new E,r_=new E,a_=new E,c_=new E,l_=new E,h_=new E,d_=new E,El=new Pe,u_=new E;new E;const f_=new E,bl=new E,p_=new E,m_=new E,g_=new E,v_=[0],__=new E,x_=new E;class Tl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const d=n[c];for(;d>i[a];)a++;l=d===i[a],l||Al(t,d)}a=0;for(let c=0;c<o;c++){let l=!1;const d=i[c];for(;d>n[a];)a++;l=n[a]===d,l||Al(e,d)}}}function Al(r,t){r.push((t&4294901760)>>16,t&65535)}const br=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class y_{constructor(){this.data={keys:[]}}get(t,e){const n=br(t,e);return this.data[n]}set(t,e,n){const i=br(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=br(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class M_ extends dh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Ag,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new ov,this.constraints=[],this.narrowphase=new dv(this),this.collisionMatrix=new ul,this.collisionMatrixPrevious=new ul,this.bodyOverlapKeeper=new Tl,this.shapeOverlapKeeper=new Tl,this.contactmaterials=[],this.contactMaterialTable=new y_,this.defaultMaterial=new Fo("default"),this.defaultContactMaterial=new Uo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ro?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.ALL,n.from=t,n.to=e,n.callback=i,Tr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.ANY,n.from=t,n.to=e,n.result=i,Tr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.CLOSEST,n.from=t,n.to=e,n.result=i,Tr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof wt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ie.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ie.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=T_,i=A_,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,d=this.profile,u=wt.DYNAMIC;let h=-1/0;const f=this.constraints,p=b_;c.length();const v=c.x,m=c.y,g=c.z;let _=0;for(l&&(h=Ie.now()),_=0;_!==s;_++){const L=o[_];if(L.type===u){const F=L.force,U=L.mass;F.x+=U*v,F.y+=U*m,F.z+=U*g}}for(let L=0,F=this.subsystems.length;L!==F;L++)this.subsystems[L].update();l&&(h=Ie.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(d.broadphase=Ie.now()-h);let w=f.length;for(_=0;_!==w;_++){const L=f[_];if(!L.collideConnected)for(let F=n.length-1;F>=0;F-=1)(L.bodyA===n[F]&&L.bodyB===i[F]||L.bodyB===n[F]&&L.bodyA===i[F])&&(n.splice(F,1),i.splice(F,1))}this.collisionMatrixTick(),l&&(h=Ie.now());const M=E_,C=e.length;for(_=0;_!==C;_++)M.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,p),l&&(d.narrowphase=Ie.now()-h),l&&(h=Ie.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const R=e.length;for(let L=0;L!==R;L++){const F=e[L],U=F.bi,N=F.bj,k=F.si,$=F.sj;let q;if(U.material&&N.material?q=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(F.restitution=U.material.restitution*N.material.restitution)),a.addEquation(F),U.allowSleep&&U.type===wt.DYNAMIC&&U.sleepState===wt.SLEEPING&&N.sleepState===wt.AWAKE&&N.type!==wt.STATIC){const st=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ot=N.sleepSpeedLimit**2;st>=ot*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===wt.DYNAMIC&&N.sleepState===wt.SLEEPING&&U.sleepState===wt.AWAKE&&U.type!==wt.STATIC){const st=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ot=U.sleepSpeedLimit**2;st>=ot*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(_s.body=N,_s.contact=F,U.dispatchEvent(_s),_s.body=U,N.dispatchEvent(_s)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(k.id,$.id)}for(this.emitContactEvents(),l&&(d.makeContactConstraints=Ie.now()-h,h=Ie.now()),_=0;_!==s;_++){const L=o[_];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(w=f.length,_=0;_!==w;_++){const L=f[_];L.update();for(let F=0,U=L.equations.length;F!==U;F++){const N=L.equations[F];a.addEquation(N)}}a.solve(t,this),l&&(d.solve=Ie.now()-h),a.removeAllEquations();const x=Math.pow;for(_=0;_!==s;_++){const L=o[_];if(L.type&u){const F=x(1-L.linearDamping,t),U=L.velocity;U.scale(F,U);const N=L.angularVelocity;if(N){const k=x(1-L.angularDamping,t);N.scale(k,N)}}}this.dispatchEvent(S_),l&&(h=Ie.now());const G=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,G,I);this.clearForces(),this.broadphase.dirty=!0,l&&(d.integrate=Ie.now()-h),this.stepnumber+=1,this.dispatchEvent(w_);let z=!0;if(this.allowSleep)for(z=!1,_=0;_!==s;_++){const L=o[_];L.sleepTick(this.time),L.sleepState!==wt.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(zn,kn),t){for(let s=0,o=zn.length;s<o;s+=2)xs.bodyA=this.getBodyById(zn[s]),xs.bodyB=this.getBodyById(zn[s+1]),this.dispatchEvent(xs);xs.bodyA=xs.bodyB=null}if(e){for(let s=0,o=kn.length;s<o;s+=2)ys.bodyA=this.getBodyById(kn[s]),ys.bodyB=this.getBodyById(kn[s+1]),this.dispatchEvent(ys);ys.bodyA=ys.bodyB=null}zn.length=kn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(zn,kn),n){for(let s=0,o=zn.length;s<o;s+=2){const a=this.getShapeById(zn[s]),c=this.getShapeById(zn[s+1]);Gn.shapeA=a,Gn.shapeB=c,a&&(Gn.bodyA=a.body),c&&(Gn.bodyB=c.body),this.dispatchEvent(Gn)}Gn.bodyA=Gn.bodyB=Gn.shapeA=Gn.shapeB=null}if(i){for(let s=0,o=kn.length;s<o;s+=2){const a=this.getShapeById(kn[s]),c=this.getShapeById(kn[s+1]);Hn.shapeA=a,Hn.shapeB=c,a&&(Hn.bodyA=a.body),c&&(Hn.bodyB=c.body),this.dispatchEvent(Hn)}Hn.bodyA=Hn.bodyB=Hn.shapeA=Hn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new nn;const Tr=new Re,Ie=globalThis.performance||{};if(!Ie.now){let r=Date.now();Ie.timing&&Ie.timing.navigationStart&&(r=Ie.timing.navigationStart),Ie.now=()=>Date.now()-r}new E;const w_={type:"postStep"},S_={type:"preStep"},_s={type:wt.COLLIDE_EVENT_NAME,body:null,contact:null},E_=[],b_=[],T_=[],A_=[],zn=[],kn=[],xs={type:"beginContact",bodyA:null,bodyB:null},ys={type:"endContact",bodyA:null,bodyB:null},Gn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Hn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class C_{constructor(){S(this,"world");S(this,"bodies",new Map);this.world=new M_,this.world.gravity.set(0,-9.82,0),this.world.defaultContactMaterial.friction=.4}addBody(t,e,n,i=1){const s=new wt({mass:i,shape:n});return s.position.copy(e),this.world.addBody(s),this.bodies.set(t,s),s}addGround(t,e){const n=new iv,i=new wt({mass:0,shape:n});i.position.y=-.1,this.world.addBody(i)}getBody(t){return this.bodies.get(t)}update(t){this.world.step(1/60,t,3),this.bodies.forEach((e,n)=>{n.position.copy(e.position),n.quaternion.copy(e.quaternion)})}getWorld(){return this.world}applyForce(t,e){const n=this.bodies.get(t);n&&n.applyForce(new E(e.x,e.y,e.z),n.position)}applyImpulse(t,e){const n=this.bodies.get(t);n&&n.applyImpulse(new E(e.x,e.y,e.z),n.position)}}class R_ extends hi{constructor(e){super(e);S(this,"age",0);S(this,"maxAge",60);S(this,"speed",3);this.mesh=this.createHybridMesh(),this.mesh.position.copy(this.position),this.dialogues=["I am the child of worlds!","Sage and Cat God blend within me","I am chaos and order","nyaaa~ *ethereal meow*","I drift between dimensions","Born of dream and divinity","GURETO DAZE! I am born perfect!","YARE YARE... I inherited both their powers","Your next line is: 'What is this hybrid?'","I have my father's stand... MEOW EXPERIENCE!","WRYYYYYYY! I am alive!","NIGERUNDAYO from expectation!","I am... STONE FREE SAGE CAT!","TORTURE DANCE... no TORTURE PURR!","*ゴゴゴ menacing hybrid energy ゴゴゴ*","Both timelines... MERGED! JOTARO WOULD BE PROUD!","I am the will of both! UNLIMITED MEOW WORKS!","MUDA MUDA! I'm useless... or am I?","ORA ORA ORA ORA! Watch my baby fists!","HNNNNNG! I'm just a baby hybrid!!!"]}createHybridMesh(){const e=new oe,n=new ct(.5,16,16),i=new St({color:8930559}),s=new D(n,i);s.position.x=-.4,e.add(s);const o=new ct(.5,16,16),a=new Nt({color:16746564}),c=new D(o,a);c.position.x=.4,e.add(c);const l=new ct(.3,16,16),d=new St({color:16755200}),u=new D(l,d);e.add(u);const h=new ct(.1,8,8),f=new D(h,new St({color:16776960}));f.position.set(-.4,.2,.4),e.add(f);const p=new D(h,new St({color:0}));return p.position.set(.4,.2,.4),e.add(p),e}update(e){this.age+=e,this.randomWalk(e,this.speed),Math.random()<.001&&this.speak();const n=this.maxAge*.75;if(this.age>n){const i=(this.age-n)/(this.maxAge-n);this.mesh.traverse(s=>{s instanceof D&&s.material instanceof St&&(s.material.opacity=1-i)})}this.age>this.maxAge&&this.die()}getType(){return"hybrid"}}class P_{constructor(){S(this,"lastSpawnTime",0);S(this,"minSpawnInterval",3);S(this,"spawnDistance",8);S(this,"offspringCount",0)}canProcreate(t,e){const n=t.distanceTo(e),i=Date.now()/1e3-this.lastSpawnTime;return n<this.spawnDistance&&i>this.minSpawnInterval}procreate(t,e,n){if(!this.canProcreate(t,e))return null;const i=new O((t.x+e.x)/2+(Math.random()-.5)*3,3,(t.z+e.z)/2+(Math.random()-.5)*3),s=new R_(i);return n.add(s.getMesh()),this.lastSpawnTime=Date.now()/1e3,this.offspringCount++,console.log(`✨ HYBRID OFFSPRING #${this.offspringCount} BORN! ✨`),console.log("💜 A being of Sage and Cat God blessed existence"),s}getOffspringCount(){return this.offspringCount}getDistance(t,e){return t.distanceTo(e)}getCanProcreateMessage(t){return t<this.spawnDistance?`❤️ PROCREATION AVAILABLE (distance: ${t.toFixed(1)}) - Press P!`:`💔 Get closer to Cat God (${t.toFixed(1)}/${this.spawnDistance})`}}class I_{constructor(t){S(this,"camera");S(this,"targetPosition",new O);S(this,"targetLookAt",new O);S(this,"orbitAngleY",0);S(this,"orbitAngleX",.3);S(this,"orbitDistance",16);S(this,"MIN_DIST",2);S(this,"MAX_DIST",60);S(this,"isDragging",!1);S(this,"lastMouseX",0);S(this,"lastMouseY",0);S(this,"mouseSensitivity",.005);S(this,"pointerLocked",!1);S(this,"autoRotateTimer",0);S(this,"AUTO_ROTATE_DELAY",1.2);S(this,"isPlayerMoving",!1);S(this,"timeSinceMouseInput",0);S(this,"currentPos",new O);S(this,"SPRING_STIFFNESS",12);S(this,"needsInit",!0);this.camera=t,this.setupControls()}setupControls(){document.addEventListener("mousedown",t=>{(t.button===0||t.button===2)&&(this.isDragging=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),document.addEventListener("mousemove",t=>{let e=0,n=0;this.pointerLocked?(e=t.movementX,n=t.movementY):this.isDragging&&(e=t.clientX-this.lastMouseX,n=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY),(e!==0||n!==0)&&(this.applyMouseDelta(e,n),this.timeSinceMouseInput=0,this.autoRotateTimer=0)}),document.addEventListener("mouseup",t=>{(t.button===0||t.button===2)&&(this.isDragging=!1)}),document.addEventListener("wheel",t=>{t.preventDefault(),this.orbitDistance+=t.deltaY*.025,this.orbitDistance=Math.max(this.MIN_DIST,Math.min(this.MAX_DIST,this.orbitDistance))},{passive:!1}),document.addEventListener("click",t=>{t.target.tagName==="CANVAS"&&document.body.requestPointerLock?.()}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===document.body||document.pointerLockElement!==null}),document.addEventListener("contextmenu",t=>t.preventDefault())}applyMouseDelta(t,e){this.orbitAngleY-=t*this.mouseSensitivity,this.orbitAngleX+=e*this.mouseSensitivity,this.orbitAngleX=Math.max(-Math.PI/2.2,Math.min(Math.PI/3,this.orbitAngleX))}setPlayerMoving(t){this.isPlayerMoving=t}setFollowTarget(t,e){this.targetPosition.copy(t),this.targetLookAt.copy(e),this.needsInit&&(this.currentPos.copy(t).add(new O(0,8,16)),this.needsInit=!1)}applyTouchDelta(t,e){this.applyMouseDelta(t,e),this.timeSinceMouseInput=0,this.autoRotateTimer=0}update(){const t=.016666666666666666;this.timeSinceMouseInput+=t,this.isPlayerMoving&&this.timeSinceMouseInput>.3?this.autoRotateTimer+=t:this.isPlayerMoving||(this.autoRotateTimer=0),this.autoRotateTimer>this.AUTO_ROTATE_DELAY;const e=Math.sin(this.orbitAngleY),n=Math.cos(this.orbitAngleY),i=Math.sin(this.orbitAngleX),s=Math.cos(this.orbitAngleX),o=new O(this.orbitDistance*e*s,this.orbitDistance*i,this.orbitDistance*n*s),a=this.targetPosition.clone().add(o);a.y=Math.max(1,a.y);const c=1-Math.exp(-this.SPRING_STIFFNESS*t);this.currentPos.lerp(a,c),this.camera.position.copy(this.currentPos);const l=this.targetLookAt.clone().add(new O(0,1.5,0));this.camera.lookAt(l)}getOrbitAngleY(){return this.orbitAngleY}getOrbitDistance(){return this.orbitDistance}setOrbitDistance(t){this.orbitDistance=Math.max(this.MIN_DIST,Math.min(this.MAX_DIST,t))}setMouseSensitivity(t){this.mouseSensitivity=t}resetOrbit(){this.orbitAngleX=.3,this.orbitAngleY=0}}class D_{constructor(){S(this,"stoneMaskPower",0);S(this,"hamonEnergy",100);S(this,"nextLineIsCorrect",!1);S(this,"standActive",!1);S(this,"standName","MEOW PLATINUM");S(this,"stardustItensity",0);S(this,"hairInsultCounter",0);S(this,"rohanDrawingPower",0);S(this,"goldenDreamAwakened",!1);S(this,"tortureDanceActive",!1);S(this,"stringFreePower",0);S(this,"emporioEscapeProgress",0);console.log("🐱 JOJO MODE ACTIVATED!!!"),console.log("*ゴゴゴ menacing energy radiates from the Cat God ゴゴゴ*")}predictNextAction(){const t=["Your next line is: 'That's impossible!'","I predict you will move right","You're going to procreate with the Cat God!","The Sage will use WASD next","A hybrid will spawn in 3... 2... 1...","You're asking 'What's the reference?'","You just realized... IT WAS ME, DIO!","The camera will rotate clockwise"];return t[Math.floor(Math.random()*t.length)]}getYareYareDaze(){const t=["YARE YARE DAZE... another fool approaches","YARE YARE... this game is truly bizarre","YARE YARE DAZE! Such pathetic procreation!","YARE YARE... you thought it would be different?"];return t[Math.floor(Math.random()*t.length)]}getGuretoLines(){const t=["GURETO DAZE! This code is truly great!","GURETO DAZE! Messy code is beautiful code!","Is this your stand... sloppy coding?","GURETO DAZE! I have become... SPECTACULAR!"];return t[Math.floor(Math.random()*t.length)]}activateRoadRollerDa(){return"ROAD ROLLER DA!!!! *compresses space-time* WRYYYYYYY"}activateStoneMaskMode(){console.log("🧛 THE STONE MASK... IT AWAKENS THE VAMPIRE WITHIN"),console.log("💀 WRYYYYYYY! I shall become the ultimate lifeform!"),this.stoneMaskPower=100}breatheHamon(){return this.hamonEnergy=100,"SENDO RIPPLE! The sound of victory! HI-HI-HI-HIIII!"}activateStand(){return this.standActive=!0,"*ORA ORA ORA ORA!* MEOW PLATINUM, ATTACK!"}onHairInsult(){return this.hairInsultCounter++,this.hairInsultCounter<3?"You dare insult my fabulous fur?! I'm not angry... yet...":"DON'T YOU EVER INSULT MY HAIR AGAIN!! *poses dramatically*"}activateTortureDance(){this.tortureDanceActive=!0,this.goldenDreamAwakened=!0,console.log("🎺 TORTURE DANCE ACTIVATED!"),console.log("💛 GIORNO DREAMS OF A GOLDEN MEOW...")}goldExperienceRequiem(){return"GOLD EXPERIENCE REQUIEM! This is... the ultimate CAT FORM!"}activateStoneFree(){return this.stringFreePower=100,"STONE FREE! Break these chains! I am liberated!"}getMenacingText(){return"ゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ"}nigerundayo(t){return`NIGERUNDAYO!!! RUN AWAY FROM THE ${t}!!!`}zaWarudo(){return"ZA WARUDO!!! TIME STOPS! *world freezes* ...5 SECONDS HAVE PASSED"}revealDio(){return"KONO DIO DA!!! IT WAS ME, THE CAT GOD, ALL ALONG!"}wryyyyy(){return"WRYYYYYYYYYYYYY!!! *screams for 5 seconds*"}infiniteLives(){return"I HAVE INFINITE LIVES! NINE TIMES INFINITY! THAT'S EVEN MORE NINE!"}isBizarre(t){return console.log(`Is ${t} bizarre? YES! ABSOLUTELY BIZARRE!`),!0}getRandomJojoReference(){const t=["OI JOSUKE! I just used ZA HANDO and erased all bugs!","STICKY FINGERS! I opened a zipper in space!","I'm gonna say the N-word... NIGERUNDAYO!","Your next line is: 'I don't understand!'","WRYYYYY... this code is truly evil!","*Pillar Men theme plays*","Is this a JoJo reference? YES!","LEGENDARY MEGA... MEOW PLATINUM!","GO BEYOND! PLUS ULTRA... wait wrong anime","This game... is truly... BIZARRE","MUDA MUDA MUDA! *punches ineffectively*","The secret is... HAMON! *breathes mysteriously*","*dramatically points at camera*","BITES ZA DUSTO! *erases your action*","Tell me... do you believe in gravity?","STICKY FINGERS! *opens portal to another dimension*","Tusk Act 4! INFINITE ROTATION MEOW!","DIO'S WORLD... wait no, CAT GOD'S WORLD","Part skipping is not real, you can't hurt me","SAUCE SAUCE SAUCE! *dab dab dab*"];return t[Math.floor(Math.random()*t.length)]}}class L_{constructor(t,e=.4){S(this,"audio");S(this,"started",!1);S(this,"muted",!1);S(this,"boundStart");this.audio=new Audio(t),this.audio.loop=!0,this.audio.volume=e,this.boundStart=()=>this.tryStart(),document.addEventListener("keydown",this.boundStart),document.addEventListener("click",this.boundStart),document.addEventListener("keydown",n=>{n.key.toLowerCase()==="m"&&this.toggleMute()})}tryStart(){this.started||(this.started=!0,document.removeEventListener("keydown",this.boundStart),document.removeEventListener("click",this.boundStart),this.audio.play().catch(t=>{console.warn("audio failed to start, browser said no:",t),this.started=!1,document.addEventListener("keydown",this.boundStart),document.addEventListener("click",this.boundStart)}))}toggleMute(){this.muted=!this.muted,this.audio.muted=this.muted,console.log("music "+(this.muted?"muted (rip nyan cat)":"unmuted (nyan cat returns!!)"))}setVolume(t){this.audio.volume=Math.max(0,Math.min(1,t))}stop(){this.audio.pause(),this.audio.currentTime=0}}class N_ extends hi{constructor(e){super(e);S(this,"clickTimer",Math.random()*2);S(this,"clickInterval",.8+Math.random()*1.2);S(this,"fallSpeed",8+Math.random()*6);S(this,"hasLanded",!1);S(this,"wanderTimer",0);S(this,"audioCtx",null);this.bubbleHeadOffset=2.5,this.mesh=this.buildMesh(),this.mesh.position.copy(this.position),this.dialogues=["DO U KNO DA WEY","SPIT ON HIM BRUDDAS","U DO NOT KNO DA WEY","WE MUST FIND DA QUEEN","DA WEY IS DAT WAY BRUDDA","*CLICKING INTENSIFIES*","BRUDDA BRUDDA BRUDDA","SHOW ME DA WEY"];try{this.audioCtx=new(window.AudioContext||window.webkitAudioContext)}catch{}}buildMesh(){const e=new oe,n=new ct(1.1,20,20),i=new Nt({color:9117728,roughness:.7}),s=new D(n,i);s.castShadow=!0,e.add(s);const o=new ct(.85,16,16),a=new Nt({color:12869694,roughness:.8}),c=new D(o,a);c.position.set(0,-.05,.35),c.scale.set(1,.9,.6),e.add(c);const l=new ct(.28,12,12),d=new St({color:16777215}),u=new D(l,d);u.position.set(-.32,.2,.9),e.add(u);const h=new D(l,d);h.position.set(.32,.2,.9),e.add(h);const f=new ct(.18,8,8),p=new St({color:1118481}),v=new D(f,p);v.position.set(-.3,.2,1.1),e.add(v);const m=new D(f,p);m.position.set(.3,.2,1.1),e.add(m);const g=new Ht(.9,.3,.25),_=new Nt({color:13378082,roughness:.5}),w=new D(g,_);w.position.set(0,-.1,1.05),w.scale.set(1,.7,1),e.add(w);const M=new ct(.1,6,6),C=new St({color:6689041}),b=new D(M,C);b.position.set(-.22,-.12,1.15),e.add(b);const R=new D(M,C);R.position.set(.22,-.12,1.15),e.add(R);const x=new Nt({color:7345429,roughness:.9}),T=[{x:-.5,z:0,ry:-.4},{x:-.2,z:.15,ry:-.1},{x:.2,z:.15,ry:.1},{x:.5,z:0,ry:.4},{x:0,z:-.1,ry:0}];for(const nt of T){const Ot=new be(.18,.8,6),At=new D(Ot,x);At.position.set(nt.x,1.1,nt.z),At.rotation.z=nt.ry,At.castShadow=!0,e.add(At)}const G=new Qt(.6,.5,.9,8),I=new Nt({color:9117728,roughness:.7}),z=new D(G,I);z.position.set(0,-1.4,0),z.castShadow=!0,e.add(z);const L=new Qt(.18,.15,.75,6),F=new Nt({color:9117728,roughness:.7}),U=new D(L,F);U.position.set(-.85,-1.3,0),U.rotation.z=Math.PI/3,U.castShadow=!0,e.add(U);const N=new D(L,F);N.position.set(.85,-1.3,0),N.rotation.z=-Math.PI/3,N.castShadow=!0,e.add(N);const k=new be(.08,.35,5),$=new Nt({color:13421772,metalness:.6}),q=[{x:-1.3,y:-1.05,z:.12},{x:-1.3,y:-1.05,z:-.12},{x:1.3,y:-1.05,z:.12},{x:1.3,y:-1.05,z:-.12}];for(const nt of q){const Ot=new D(k,$);Ot.position.set(nt.x,nt.y,nt.z),Ot.rotation.z=nt.x<0?-Math.PI/2.2:Math.PI/2.2,e.add(Ot)}const st=new Qt(.2,.22,.6,6),ot=new Nt({color:7345429,roughness:.8}),K=new D(st,ot);K.position.set(-.3,-2.05,0),e.add(K);const _t=new D(st,ot);_t.position.set(.3,-2.05,0),e.add(_t);const Zt=new Ht(.45,.3,.6),Yt=new Nt({color:14487825}),Z=new D(Zt,Yt);Z.position.set(-.3,-2.5,.1),e.add(Z);const it=new D(Zt,Yt);return it.position.set(.3,-2.5,.1),e.add(it),e}doClickSound(){if(this.audioCtx)try{const e=this.audioCtx.sampleRate*.04,n=this.audioCtx.createBuffer(1,e,this.audioCtx.sampleRate),i=n.getChannelData(0);for(let a=0;a<e;a++)i[a]=(Math.random()*2-1)*Math.pow(1-a/e,8);const s=this.audioCtx.createBufferSource();s.buffer=n;const o=this.audioCtx.createGain();o.gain.value=.3,s.connect(o),o.connect(this.audioCtx.destination),s.start()}catch{}}update(e){if(!this.hasLanded){this.position.y-=this.fallSpeed*e,this.mesh.rotation.x+=e*3,this.position.y<=2&&(this.position.y=2,this.hasLanded=!0,this.mesh.rotation.x=0,console.log("🦔 *THUD* DO U KNO DA WEY")),this.mesh.position.copy(this.position);return}this.randomWalk(e,4+Math.random()*.5),this.clickTimer+=e,this.clickTimer>=this.clickInterval&&(this.clickTimer=0,this.clickInterval=.6+Math.random()*1.4,this.doClickSound(),Math.random()<.3&&this.speak()),this.wanderTimer+=e*8,this.mesh.position.y=this.position.y+Math.abs(Math.sin(this.wanderTimer))*.3}getType(){return"ugandan_knuckles"}}class U_{constructor(t){S(this,"scene");S(this,"activeKnuckles",[]);S(this,"eventTimer",0);S(this,"eventCooldown",25+Math.random()*35);S(this,"isEventActive",!1);S(this,"spawnBurst",0);S(this,"burstTimer",0);S(this,"burstInterval",.18);S(this,"onAnnounce",null);S(this,"MAX_KNUCKLES",20);this.scene=t}setAnnounceCallback(t){this.onAnnounce=t}update(t,e){this.eventTimer+=t,!this.isEventActive&&this.eventTimer>=this.eventCooldown&&this.startRainEvent(e),this.isEventActive&&this.spawnBurst>0&&(this.burstTimer+=t,this.burstTimer>=this.burstInterval&&(this.burstTimer=0,this.spawnOneKnuckles(e),this.spawnBurst--,this.spawnBurst<=0&&(this.isEventActive=!1,this.eventTimer=0,this.eventCooldown=25+Math.random()*35,console.log("%c🦔 UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING.","color: red; font-size: 14px;"),this.onAnnounce?.("UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING FOR DA QUEEN."))));for(const n of this.activeKnuckles)n.update(t);for(this.activeKnuckles=this.activeKnuckles.filter(n=>n.isAlive()?!0:(this.scene.remove(n.getMesh()),!1));this.activeKnuckles.length>this.MAX_KNUCKLES;){const n=this.activeKnuckles.shift();n.die(),this.scene.remove(n.getMesh())}}startRainEvent(t){this.isEventActive=!0;const e=8+Math.floor(Math.random()*10);this.spawnBurst=e,this.burstTimer=0,console.log("%c🦔 DE UGANDAN KNUCKLES ARE COMING!! DO U KNO DA WEY??","color: red; font-weight: bold; font-size: 16px;"),console.log(`%c🦔 ${e} BRUDDAS DESCEND FROM DA SKY`,"color: darkred; font-size: 13px;"),this.onAnnounce?.(`DE UGANDAN KNUCKLES RAIN HAS BEGUN!! ${e} BRUDDAS ARE DESCENDING FROM DA SKY!!`)}spawnOneKnuckles(t){const e=Math.random()*Math.PI*2,n=Math.random()*40,i=t.x+Math.cos(e)*n,s=t.z+Math.sin(e)*n,o=60+Math.random()*30,a=new N_(new O(i,o,s));this.activeKnuckles.push(a),this.scene.add(a.getMesh())}getActiveCount(){return this.activeKnuckles.length}getTimeUntilNext(){return Math.max(0,this.eventCooldown-this.eventTimer)}}class F_{constructor(){S(this,"messages",[]);S(this,"isOpen",!1);S(this,"MAX_MESSAGES",50);S(this,"onPlayerSend",null);S(this,"chatBox");S(this,"chatLog");S(this,"chatInputWrapper");S(this,"chatInput");S(this,"boundKeyDown");this.chatBox=document.getElementById("chat-box"),this.chatLog=document.getElementById("chat-log"),this.chatInputWrapper=document.getElementById("chat-input-wrapper"),this.chatInput=document.getElementById("chat-input"),this.boundKeyDown=t=>this.handleKey(t),document.addEventListener("keydown",this.boundKeyDown),this.addMessage("system","Welcome to Cat God World. Press ENTER to chat."),this.addMessage("system","Events will be announced here.")}handleKey(t){if(t.key==="Enter")if(!this.isOpen)this.open(),t.preventDefault();else{const e=this.chatInput.value.trim();e.length>0?(this.sendPlayerMessage(e),this.chatInput.value=""):this.close(),t.preventDefault()}else t.key==="Escape"&&this.isOpen&&(this.chatInput.value="",this.close(),t.preventDefault())}open(){this.isOpen=!0,this.chatInputWrapper.style.display="flex",this.chatBox.style.opacity="1",setTimeout(()=>this.chatInput.focus(),10)}close(){this.isOpen=!1,this.chatInputWrapper.style.display="none",this.chatBox.style.opacity="0.6",this.chatInput.blur()}sendPlayerMessage(t){const e=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").substring(0,200);this.addMessage("player",`You: ${e}`),this.onPlayerSend?.(e)}setOnPlayerSend(t){this.onPlayerSend=t}getOnPlayerSend(){return this.onPlayerSend}addMessage(t,e){const n={type:t,text:e,timestamp:Date.now()};this.messages.push(n),this.messages.length>this.MAX_MESSAGES&&this.messages.shift(),this.renderMessage(n)}renderMessage(t){const e=document.createElement("div");e.classList.add("chat-msg",`chat-msg-${t.type}`);const n=new Date(t.timestamp),i=`${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}`;e.innerHTML=`<span class="chat-time">[${i}]</span> ${t.text}`,this.chatLog.appendChild(e),this.chatLog.scrollTop=this.chatLog.scrollHeight,this.isOpen||(this.chatBox.style.opacity="1",setTimeout(()=>{this.isOpen||(this.chatBox.style.opacity="0.6")},2e3))}announceEvent(t){this.addMessage("event",`📢 ${t}`)}announceKnuckles(t){this.addMessage("knuckles",`🦔 ${t}`)}announceCatGod(t){this.addMessage("catgod",`🐱 ${t}`)}isInputOpen(){return this.isOpen}}class O_{constructor(t){S(this,"camera");S(this,"container");S(this,"activeBubbles",[]);S(this,"FADE_MS",600);this.camera=t,this.container=document.createElement("div"),this.container.id="bubble-container",this.container.style.cssText=`
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 150;
        `,document.body.appendChild(this.container)}showBubble(t,e,n=3,i=3*Math.PI*1e3){const s=e.length>80?e.substring(0,77)+"...":e,o=document.createElement("div");o.className="chat-bubble",o.textContent=s;const a=document.createElement("div");a.className="chat-bubble-tail",o.appendChild(a),this.container.appendChild(o);const c={el:o,worldPos:t.clone(),headOffset:n,born:Date.now(),duration:i};this.activeBubbles.push(c)}update(){const t=Date.now(),e=[];for(const n of this.activeBubbles){const i=t-n.born;if(i>n.duration+this.FADE_MS){e.push(n);continue}const s=n.worldPos.clone();s.y+=n.headOffset;const o=new O;if(this.camera.getWorldDirection(o),s.clone().sub(this.camera.position).normalize().dot(o)<0){n.el.style.display="none";continue}n.el.style.display="block";const c=s.clone().project(this.camera),l=(c.x*.5+.5)*window.innerWidth,d=(-c.y*.5+.5)*window.innerHeight,u=this.camera.position.distanceTo(s),h=Math.max(.3,Math.min(1,18/u)),f=n.el.offsetWidth;if(n.el.style.left=`${l-f/2}px`,n.el.style.top=`${d-n.el.offsetHeight}px`,n.el.style.transform=`scale(${h})`,n.el.style.transformOrigin="bottom center",i>n.duration){const p=(i-n.duration)/this.FADE_MS;n.el.style.opacity=String(1-p)}else n.el.style.opacity="1"}for(const n of e)this.container.removeChild(n.el),this.activeBubbles.splice(this.activeBubbles.indexOf(n),1)}showBubbleLive(t,e,n=3,i=3*Math.PI*1e3){const s=e.length>80?e.substring(0,77)+"...":e,o=document.createElement("div");o.className="chat-bubble",o.textContent=s;const a=document.createElement("div");a.className="chat-bubble-tail",o.appendChild(a),this.container.appendChild(o);const c={el:o,worldPos:t,headOffset:n,born:Date.now(),duration:i};this.activeBubbles.push(c)}}class Cl{constructor(){S(this,"joystickActive",!1);S(this,"joystickTouchId",-1);S(this,"joystickOriginX",0);S(this,"joystickOriginY",0);S(this,"joystickCurrentX",0);S(this,"joystickCurrentY",0);S(this,"JOYSTICK_RADIUS",55);S(this,"camTouchId",-1);S(this,"camLastX",0);S(this,"camLastY",0);S(this,"camDeltaX",0);S(this,"camDeltaY",0);S(this,"onProcreate",null);S(this,"onMute",null);S(this,"onChat",null);S(this,"onJump",null);S(this,"joystickZone");S(this,"joystickKnob");S(this,"joystickBase");this.joystickZone=document.getElementById("joystick-zone"),this.joystickKnob=document.getElementById("joystick-knob"),this.joystickBase=document.getElementById("joystick-base"),this.setupTouchListeners()}setupTouchListeners(){this.joystickZone.addEventListener("touchstart",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))this.joystickTouchId===-1&&(this.joystickTouchId=l.identifier,this.joystickOriginX=l.clientX,this.joystickOriginY=l.clientY,this.joystickCurrentX=l.clientX,this.joystickCurrentY=l.clientY,this.joystickActive=!0,this.joystickBase.style.left=`${l.clientX-50}px`,this.joystickBase.style.top=`${l.clientY-50}px`,this.joystickBase.style.display="block",this.joystickKnob.style.display="block")},{passive:!1}),this.joystickZone.addEventListener("touchmove",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))if(l.identifier===this.joystickTouchId){this.joystickCurrentX=l.clientX,this.joystickCurrentY=l.clientY;const d=l.clientX-this.joystickOriginX,u=l.clientY-this.joystickOriginY,h=Math.sqrt(d*d+u*u),f=Math.min(h,this.JOYSTICK_RADIUS),p=Math.atan2(u,d),v=this.joystickOriginX+Math.cos(p)*f,m=this.joystickOriginY+Math.sin(p)*f;this.joystickKnob.style.left=`${v-22}px`,this.joystickKnob.style.top=`${m-22}px`}},{passive:!1});const t=c=>{for(const l of Array.from(c.changedTouches))l.identifier===this.joystickTouchId&&(this.joystickTouchId=-1,this.joystickActive=!1,this.joystickBase.style.display="none",this.joystickKnob.style.display="none")};this.joystickZone.addEventListener("touchend",t),this.joystickZone.addEventListener("touchcancel",t);const e=document.getElementById("cam-zone");e.addEventListener("touchstart",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))this.camTouchId===-1&&(this.camTouchId=l.identifier,this.camLastX=l.clientX,this.camLastY=l.clientY,this.camDeltaX=0,this.camDeltaY=0)},{passive:!1}),e.addEventListener("touchmove",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))l.identifier===this.camTouchId&&(this.camDeltaX=l.clientX-this.camLastX,this.camDeltaY=l.clientY-this.camLastY,this.camLastX=l.clientX,this.camLastY=l.clientY)},{passive:!1});const n=c=>{for(const l of Array.from(c.changedTouches))l.identifier===this.camTouchId&&(this.camTouchId=-1,this.camDeltaX=0,this.camDeltaY=0)};e.addEventListener("touchend",n),e.addEventListener("touchcancel",n);const i=document.getElementById("btn-procreate"),s=document.getElementById("btn-mute"),o=document.getElementById("btn-chat");i&&i.addEventListener("touchstart",c=>{c.preventDefault(),this.onProcreate?.()},{passive:!1}),s&&s.addEventListener("touchstart",c=>{c.preventDefault(),this.onMute?.()},{passive:!1}),o&&o.addEventListener("touchstart",c=>{c.preventDefault(),this.onChat?.()},{passive:!1});const a=document.getElementById("btn-jump");a&&a.addEventListener("touchstart",c=>{c.preventDefault(),this.onJump?.()},{passive:!1})}getJoystick(){if(!this.joystickActive)return{dx:0,dy:0};const t=this.joystickCurrentX-this.joystickOriginX,e=this.joystickCurrentY-this.joystickOriginY,n=Math.sqrt(t*t+e*e);if(n<5)return{dx:0,dy:0};const i=Math.min(n,this.JOYSTICK_RADIUS);return{dx:t/n*(i/this.JOYSTICK_RADIUS),dy:e/n*(i/this.JOYSTICK_RADIUS)}}consumeCamDelta(){const t={dx:this.camDeltaX,dy:this.camDeltaY};return this.camDeltaX=0,this.camDeltaY=0,t}static isMobile(){return"ontouchstart"in window||navigator.maxTouchPoints>0}}class B_{constructor(t,e){S(this,"ws",null);S(this,"playerId","");S(this,"username");S(this,"connected",!1);S(this,"lastSendTime",0);S(this,"serverUrl");S(this,"SEND_INTERVAL",50);S(this,"onPlayerJoin",null);S(this,"onPlayerLeave",null);S(this,"onPlayerMove",null);S(this,"onPlayerChat",null);S(this,"onConnected",null);S(this,"onDisconnected",null);S(this,"onStatusChange",null);this.username=e,this.serverUrl=t,this.connect()}connect(){try{this.ws=new WebSocket(this.serverUrl)}catch(t){console.warn("multiplayer: failed to connect, server probably not running",t),this.onStatusChange?.("offline");return}this.onStatusChange?.("connecting..."),this.ws.onopen=()=>{this.connected=!0,console.log("%cmultiplayer: connected!! joining as "+this.username,"color: cyan; font-weight: bold"),this.send({type:"join",username:this.username}),this.onStatusChange?.("connecting...")},this.ws.onmessage=t=>{try{const e=JSON.parse(t.data);this.handleMessage(e)}catch(e){console.warn("multiplayer: bad message from server, ignoring",e)}},this.ws.onclose=()=>{this.connected=!1,console.log("multiplayer: disconnected, retrying in 3s..."),this.onDisconnected?.(),this.onStatusChange?.("reconnecting..."),setTimeout(()=>this.connect(),3e3)},this.ws.onerror=()=>{console.warn("multiplayer: connection error (is server.js running?)"),this.onStatusChange?.("offline (no server)")}}handleMessage(t){switch(t.type){case"welcome":this.playerId=t.yourId,this.onConnected?.(this.playerId,t.players??[]),this.onStatusChange?.("online"),console.log("%cmultiplayer: got welcome! id="+this.playerId,"color: lime");break;case"playerJoined":this.onPlayerJoin?.(t.player);break;case"playerLeft":this.onPlayerLeave?.(t.id);break;case"playerMoved":this.onPlayerMove?.(t.id,t.x,t.y,t.z,t.ry);break;case"playerChat":this.onPlayerChat?.(t.id,t.username,t.text);break}}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}sendPosition(t,e,n,i){const s=Date.now();s-this.lastSendTime<this.SEND_INTERVAL||(this.lastSendTime=s,this.send({type:"move",x:t,y:e,z:n,ry:i}))}sendChat(t){this.send({type:"chat",text:t})}isConnected(){return this.connected}getId(){return this.playerId}getUsername(){return this.username}disconnect(){this.ws?.close()}}class Rl{constructor(t,e,n,i,s,o){S(this,"id");S(this,"username");S(this,"mesh");S(this,"scene");S(this,"targetPos");S(this,"currentPos");S(this,"targetRotY",0);S(this,"currentRotY",0);S(this,"bubbleCb",null);this.id=e,this.username=n,this.scene=t,this.targetPos=new O(i,s,o),this.currentPos=new O(i,s,o),this.mesh=this.buildMesh(),this.mesh.position.copy(this.currentPos),t.add(this.mesh),console.log(`%cremote player spawned: ${n} (${e.slice(0,6)}...)`,"color: cyan")}buildMesh(){const t=new oe,e=new ct(.6,16,16),n=new St({color:52479,transparent:!0,opacity:.8}),i=new D(e,n);i.scale.set(1,1.5,1),t.add(i);const s=new St({color:43775,transparent:!0,opacity:.45}),o=new D(new Ke(1,.09,16,60),s);t.add(o);const a=new St({color:16777215}),c=new ct(.2,8,8),l=new D(c,a);l.position.set(-.3,.3,.5),t.add(l);const d=new D(c,a);d.position.set(.3,.3,.5),t.add(d);const u=new St({color:43741,transparent:!0,opacity:.8}),h=new Qt(.1,.09,.9,8),f=new D(h,u);f.position.set(-.8,0,0),f.rotation.z=Math.PI/4,t.add(f);const p=new D(h,u);return p.position.set(.8,0,0),p.rotation.z=-Math.PI/4,t.add(p),t.add(this.makeNameSprite(this.username)),t}makeNameSprite(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d");n.fillStyle="rgba(0, 20, 40, 0.75)",n.beginPath(),n.roundRect(4,4,248,48,12),n.fill(),n.fillStyle="#00eeff",n.font="bold 26px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t.substring(0,18),128,28);const i=new Ud(e),s=new Jl({map:i,transparent:!0,depthTest:!1}),o=new wc(s);return o.scale.set(2.8,.65,1),o.position.set(0,2.6,0),o}setTarget(t,e,n,i){this.targetPos.set(t,e,n),this.targetRotY=i}setBubbleCallback(t){this.bubbleCb=t}showBubble(t){this.bubbleCb?.(this.currentPos,t,3.5)}update(t){const e=Math.min(1,t*10);this.currentPos.lerp(this.targetPos,e),this.currentRotY+=(this.targetRotY-this.currentRotY)*e;const n=Math.sin(Date.now()*.002)*.18;this.mesh.position.set(this.currentPos.x,this.currentPos.y+n,this.currentPos.z),this.mesh.rotation.y=this.currentRotY,this.mesh.children[1]&&(this.mesh.children[1].rotation.x+=.012)}getPosition(){return this.currentPos}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(t=>{(t instanceof D||t instanceof Ai)&&(t.geometry?.dispose(),t instanceof D&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose())),t instanceof wc&&(t.material.map?.dispose(),t.material.dispose())}),console.log(`%cremote player removed: ${this.username}`,"color: orange")}}class z_{constructor(t,e){S(this,"scene");S(this,"currentWeather","clear");S(this,"weatherTimer",0);S(this,"weatherDuration",20+Math.random()*60);S(this,"ambientLight",null);S(this,"rainPoints",null);S(this,"meteors",[]);S(this,"meteorSpawnTimer",0);S(this,"onWeatherChange",null);this.scene=t,this.ambientLight=e||null}update(t){if(this.weatherTimer+=t,this.weatherTimer>=this.weatherDuration&&(this.changeWeather(),this.weatherTimer=0,this.weatherDuration=20+Math.random()*90),this.currentWeather==="rain"&&this.rainPoints){const e=this.rainPoints.geometry.attributes.position,n=e.array;for(let i=1;i<n.length;i+=3)n[i]-=80*t,n[i]<0&&(n[i]=120+Math.random()*40);e.needsUpdate=!0}this.currentWeather==="meteor shower"&&(this.meteorSpawnTimer-=t,this.meteorSpawnTimer<=0&&(this.spawnMeteor(),this.meteorSpawnTimer=1.2+Math.random()*2.5));for(let e=this.meteors.length-1;e>=0;e--){const n=this.meteors[e];n.life-=t,n.mesh.position.addScaledVector(n.vel,t);const i=n.mesh.material;i.emissiveIntensity=Math.max(0,n.life*1.5),(n.life<=0||n.mesh.position.y<-5)&&(this.scene.remove(n.mesh),this.meteors.splice(e,1))}}changeWeather(){this.clearWeather();const t=Math.random();t<.32?this.currentWeather="clear":t<.6?(this.currentWeather="rain",this.startRain()):t<.82?(this.currentWeather="foggy",this.startFog()):(this.currentWeather="meteor shower",this.startMeteors()),console.log(`%c⛅ WEATHER: ${this.currentWeather.toUpperCase()}!! buckle up`,"color: skyblue; font-size: 13px"),this.onWeatherChange?.(this.currentWeather)}clearWeather(){this.rainPoints&&(this.scene.remove(this.rainPoints),this.rainPoints.geometry.dispose(),this.rainPoints=null);for(const t of this.meteors)this.scene.remove(t.mesh);this.meteors=[],this.scene.fog=null,this.ambientLight&&(this.ambientLight.intensity=.6)}startRain(){const e=new Se,n=new Float32Array(3500*3);for(let s=0;s<3500*3;s+=3)n[s]=(Math.random()-.5)*400,n[s+1]=Math.random()*120,n[s+2]=(Math.random()-.5)*400;e.setAttribute("position",new Xe(n,3));const i=new os({color:8956671,size:.12,transparent:!0,opacity:.55});this.rainPoints=new Ai(e,i),this.scene.add(this.rainPoints),this.scene.fog=new Fa(3359829,50,180),this.ambientLight&&(this.ambientLight.intensity=.32)}startFog(){this.scene.fog=new Cs(7833753,.014),this.ambientLight&&(this.ambientLight.intensity=.38)}startMeteors(){this.ambientLight&&(this.ambientLight.intensity=.85),this.meteorSpawnTimer=0,console.log("%c☄️ METEOR SHOWER!!! RUN OR DONT WHATEVER","color: red; font-size: 16px; font-weight: bold")}spawnMeteor(){const t=new ct(.75+Math.random()*.5,6,4),e=new ce({color:16729088,emissive:13378048,emissiveIntensity:2.5}),n=new D(t,e);n.position.set((Math.random()-.5)*300,120+Math.random()*50,(Math.random()-.5)*300);const i=50+Math.random()*35,s=new O((Math.random()-.5)*25,-i,(Math.random()-.5)*25);this.meteors.push({mesh:n,vel:s,life:3.5+Math.random()*1.5}),this.scene.add(n),console.log("%c☄️ meteor inbound!!","color: red")}getCurrentWeather(){return this.currentWeather}isPanicking(){return this.currentWeather==="rain"||this.currentWeather==="meteor shower"}dispose(){this.clearWeather()}}class k_{constructor(t,e,n){S(this,"time",.25);S(this,"dayLength",120);S(this,"sunLight");S(this,"ambientLight");S(this,"scene");S(this,"wasNight",!1);S(this,"onNightFall",null);S(this,"onDayBreak",null);this.scene=t,this.sunLight=e,this.ambientLight=n,this.wasNight=!1}update(t){const e=this.wasNight;this.time+=t/this.dayLength,this.time>=1&&(this.time-=1),this.wasNight=this.isNight(),!e&&this.wasNight&&(this.onNightFall?.(),console.log("%c🌙 NIGHT HAS FALLEN. EMOS GROW STRONGER.","color: #6633aa; font-size: 14px")),e&&!this.wasNight&&(this.onDayBreak?.(),console.log("%c☀️ A NEW DAY BEGINS.","color: gold; font-size: 14px")),this.updateLighting()}updateLighting(){const t=(this.time-.25)*Math.PI*2,e=Math.sin(t);if(this.sunLight.position.set(Math.cos(t)*100,e*100,50),this.sunLight.intensity=Math.max(0,e)*1.1,this.ambientLight.intensity=.08+Math.max(0,e)*.55,e>.3)this.scene.background=new Ut().setHSL(.6,.55,.48+e*.12);else if(e>-.15){const n=(e+.15)/.45,i=new Ut(526360),s=new Ut(16742195);this.scene.background=new Ut().lerpColors(i,s,n)}else this.scene.background=new Ut(394772)}isNight(){const t=(this.time-.25)*Math.PI*2;return Math.sin(t)<-.1}getNightIntensity(){const t=(this.time-.25)*Math.PI*2;return Math.max(0,-Math.sin(t))}getTimeString(){const t=Math.floor(this.time*24),e=Math.floor((this.time*24-t)*60),n=t>=12?"PM":"AM";return`${t%12===0?12:t%12}:${e.toString().padStart(2,"0")} ${n}`}}class G_{constructor(){S(this,"npcFactions",new Map);S(this,"playerFaction","neutral");S(this,"fightCooldowns",new Map);S(this,"onFactionChange",null);console.log("%c⚔️ FACTION SYSTEM ONLINE -- press F to pick a side","color: gold; font-weight: bold")}assignFaction(t,e){const n=e??this.rollRandomFaction();this.npcFactions.set(t,n)}rollRandomFaction(){const t=Math.random();return t<.3?"red":t<.6?"blue":t<.75?"green":"neutral"}cyclePlayerFaction(){const t=["neutral","red","blue","green"],e=t.indexOf(this.playerFaction);this.playerFaction=t[(e+1)%t.length],console.log(`%c⚔️ PLAYER FACTION: ${this.playerFaction.toUpperCase()} -- lets gooo`,"color: gold; font-size: 14px; font-weight: bold"),this.onFactionChange?.(this.playerFaction)}getPlayerFaction(){return this.playerFaction}getNPCFaction(t){return this.npcFactions.get(t)??"neutral"}getFactionColor(t){switch(t){case"red":return"#ff4444";case"blue":return"#4488ff";case"green":return"#44cc44";default:return"#888888"}}update(t,e){for(const[n,i]of this.fightCooldowns)this.fightCooldowns.set(n,i-t);for(let n=0;n<e.length;n++){const i=e[n];if(!i.isAlive())continue;const s=this.npcFactions.get(i);if(!(!s||s==="neutral")&&!((this.fightCooldowns.get(i)??0)>0))for(let o=n+1;o<e.length;o++){const a=e[o];if(!a.isAlive())continue;const c=this.npcFactions.get(a);if(!(!c||c==="neutral"||s===c)&&!((this.fightCooldowns.get(a)??0)>0)&&i.getPosition().distanceTo(a.getPosition())<6.5){Math.random()<.5?(a.die(),console.log(`%c⚔️ ${s.toUpperCase()} defeated ${c.toUpperCase()}`,"color: #ff6666")):(i.die(),console.log(`%c⚔️ ${c.toUpperCase()} defeated ${s.toUpperCase()}`,"color: #6688ff")),this.fightCooldowns.set(i,6),this.fightCooldowns.set(a,6);break}}}}removeNPC(t){this.npcFactions.delete(t),this.fightCooldowns.delete(t)}isPlayerEnemyOf(t){if(this.playerFaction==="neutral")return!1;const e=this.npcFactions.get(t)??"neutral";return e==="neutral"?!1:e!==this.playerFaction}}class H_{constructor(t){S(this,"scene");S(this,"dungeonGroup");S(this,"entrance",new O(-80,2,-80));this.scene=t,this.dungeonGroup=new oe,this.scene.add(this.dungeonGroup),this.buildDungeon()}buildDungeon(){const t=new ce({color:1118498}),e=new ce({color:2763325}),n=new ce({color:4456550,emissive:2228275,emissiveIntensity:1}),i=this.entrance.x,s=this.entrance.z,o=new D(new Yn(42,42),t);o.rotation.x=-Math.PI/2,o.position.set(i,-10,s),this.dungeonGroup.add(o);const a=e,c=14,l=new D(new Ht(.9,c,44),a);l.position.set(i-21,-10+c/2,s),this.dungeonGroup.add(l);const d=new D(new Ht(.9,c,44),a);d.position.set(i+21,-10+c/2,s),this.dungeonGroup.add(d);const u=new D(new Ht(44,c,.9),a);u.position.set(i,-10+c/2,s-21),this.dungeonGroup.add(u);const h=new D(new Ht(16,c,.9),a);h.position.set(i-14,-10+c/2,s+21),this.dungeonGroup.add(h);const f=new D(new Ht(16,c,.9),a);f.position.set(i+14,-10+c/2,s+21),this.dungeonGroup.add(f);const p=new D(new Yn(44,44),e);p.rotation.x=Math.PI/2,p.position.set(i,.5,s),this.dungeonGroup.add(p);const v=new D(new Ht(7,.6,24),e);v.rotation.x=.42,v.position.set(i,-4.5,s+18),this.dungeonGroup.add(v);const m=new D(new Ke(4,.45,8,22),n);m.position.set(i,3,s+21),this.dungeonGroup.add(m);const g=new D(new Ht(8,2.5,.4),n);g.position.set(i,6.5,s+21.2),this.dungeonGroup.add(g);const _=[[i-18,-7,s-17],[i+18,-7,s-17],[i-18,-7,s+17],[i+18,-7,s+17]];for(const b of _){const R=new qn(6684842,4,18);R.position.set(...b),this.dungeonGroup.add(R);const x=new D(new Qt(.15,.1,2.2,6),new ce({color:4862464}));x.position.set(b[0],b[1]+.5,b[2]),this.dungeonGroup.add(x);const T=new D(new ct(.35,6,4),new ce({color:11150079,emissive:6684842,emissiveIntensity:2}));T.position.set(b[0],b[1]+1.8,b[2]),this.dungeonGroup.add(T)}const w=8;for(let b=0;b<w;b++){const R=new ce({color:10027212,emissive:4456550,emissiveIntensity:.8,side:un}),x=3+b%5,T=new D(new ka(.4+b*.15,.6+b*.15,x),R);T.rotation.x=-Math.PI/2,T.position.set(i+(Math.random()-.5)*32,-9.85,s+(Math.random()-.5)*32),this.dungeonGroup.add(T)}const M=new D(new Ht(5,2,5),e);M.position.set(i,-9,s),this.dungeonGroup.add(M);const C=new D(new ct(1,12,8),new ce({color:5570575,emissive:3342345,emissiveIntensity:1.5}));C.position.set(i,-6.5,s),this.dungeonGroup.add(C),console.log("%c🏚️ DUNGEON GENERATED at (-80, _, -80) -- enter if u dare lol","color: purple; font-weight: bold")}isPlayerInDungeon(t){return Math.sqrt(Math.pow(t.x-this.entrance.x,2)+Math.pow(t.z-this.entrance.z,2))<28&&t.y<1}}class V_{constructor(t){S(this,"scene");S(this,"portalGroup");S(this,"position",new O(-60,2,60));S(this,"innerMat");S(this,"ringLightRef");S(this,"innerDisc");S(this,"inVoid",!1);S(this,"voidTimer",0);S(this,"VOID_DURATION",15);S(this,"savedBackground",null);S(this,"savedFog",null);S(this,"spinTime",0);S(this,"spinRings",[]);S(this,"onEnterVoid",null);S(this,"onExitVoid",null);this.scene=t,this.portalGroup=new oe,this.innerMat=new ce({color:2228292,emissive:1114146,emissiveIntensity:1.6,transparent:!0,opacity:.87,side:un}),this.ringLightRef=new qn(10027263,3,18),this.buildPortal(),this.scene.add(this.portalGroup)}buildPortal(){const t=this.position.x,e=this.position.z,n=5,i=new D(new Ke(4.5,.55,10,32),new ce({color:10027263,emissive:5570696,emissiveIntensity:2}));i.position.set(t,n,e),this.portalGroup.add(i);const s=[{r:3.6,tube:.18,tilt:[.2,0],speed:.6},{r:2.8,tube:.15,tilt:[0,.4],speed:-.9},{r:2,tube:.12,tilt:[.5,.2],speed:1.3}];for(const p of s){const v=new D(new Ke(p.r,p.tube,8,22),new ce({color:7798988,emissive:3342438,emissiveIntensity:1}));v.position.set(t,n,e),v.rotation.x=p.tilt[0],v.rotation.z=p.tilt[1],this.portalGroup.add(v),this.spinRings.push({mesh:v,speed:p.speed})}this.innerDisc=new D(new Do(4,32),this.innerMat),this.innerDisc.position.set(t,n,e+.1),this.portalGroup.add(this.innerDisc);const o=new qn(10027263,3.5,20);o.position.set(t,n,e),this.portalGroup.add(o),this.ringLightRef=o;const a=250,c=new Se,l=new Float32Array(a*3);for(let p=0;p<a*3;p+=3){const v=Math.random()*Math.PI*2,m=4+Math.random()*3.5;l[p]=t+Math.cos(v)*m,l[p+1]=n+(Math.random()-.5)*8,l[p+2]=e+Math.sin(v)*m}c.setAttribute("position",new Xe(l,3));const d=new os({color:11141375,size:.22,transparent:!0,opacity:.7}),u=new Ai(c,d);this.portalGroup.add(u);const h=new ce({color:4456618,emissive:2228309,emissiveIntensity:.8}),f=new D(new Ht(4,1,.2),h);f.position.set(t,n+6,e),this.portalGroup.add(f),console.log("%c🌀 VOID PORTAL built at (-60, _, 60) -- YOU WERE WARNED","color: #9900ff; font-size: 13px; font-weight: bold")}update(t,e){this.spinTime+=t;for(const n of this.spinRings)n.mesh.rotation.z+=n.speed*t,n.mesh.rotation.y+=n.speed*t*.3;if(this.ringLightRef.intensity=2.5+Math.sin(this.spinTime*2.5)*1,this.innerMat.emissiveIntensity=1.2+Math.sin(this.spinTime*3)*.4,this.inVoid){this.voidTimer-=t;const n=.02+Math.sin(this.spinTime*4)*.01;this.scene.fog instanceof Cs&&(this.scene.fog.density=n),this.voidTimer<=0&&this.exitVoid()}else{const n=e.x-this.position.x,i=e.z-this.position.z;Math.sqrt(n*n+i*i)<4.5&&Math.abs(e.y-5)<6&&this.enterVoid()}}enterVoid(){this.inVoid||(this.inVoid=!0,this.voidTimer=this.VOID_DURATION,this.savedBackground=this.scene.background,this.savedFog=this.scene.fog,this.scene.background=new Ut(0),this.scene.fog=new Cs(1114146,.028),console.log("%c🌀 YOU ENTERED THE VOID. 15 seconds. have fun.","color: #cc44ff; font-size: 16px; font-weight: bold"),this.onEnterVoid?.())}exitVoid(){this.inVoid=!1,this.scene.background=this.savedBackground??new Ut(8900331),this.scene.fog=this.savedFog??null,console.log("%c🌀 you made it out of the void. barely.","color: cyan"),this.onExitVoid?.()}isInVoid(){return this.inVoid}}class W_{constructor(t){S(this,"scene");S(this,"items",[]);S(this,"MAX_ITEMS",10);S(this,"spawnTimer",0);S(this,"spawnInterval",7);S(this,"speedMultiplier",1);S(this,"speedTimer",0);S(this,"isWobbly",!1);S(this,"wobblyTimer",0);S(this,"onPickup",null);this.scene=t;for(let e=0;e<6;e++)this.spawnItem()}get wobbleAmount(){return this.isWobbly?Math.sin(Date.now()*.005)*15*(this.wobblyTimer/8):0}update(t,e){this.spawnTimer+=t,this.spawnTimer>=this.spawnInterval&&this.items.length<this.MAX_ITEMS&&(this.spawnItem(),this.spawnTimer=0,this.spawnInterval=6+Math.random()*10),this.speedTimer>0&&(this.speedTimer-=t,this.speedTimer<=0&&(this.speedMultiplier=1,console.log("%c🐟 fish speed boost wore off.... back to normal speed","color: orange"))),this.wobblyTimer>0&&(this.wobblyTimer-=t,this.wobblyTimer<=0&&(this.isWobbly=!1,console.log("%c🌿 catnip wore off!! reality restored (sort of)","color: green")));for(const n of this.items)n.bobPhase+=t*2,n.mesh.position.y=n.worldPos.y+Math.sin(n.bobPhase)*.3,n.mesh.rotation.y+=t*1.5;for(let n=this.items.length-1;n>=0;n--){const i=this.items[n],s=i.worldPos.x-e.x,o=i.worldPos.z-e.z;Math.sqrt(s*s+o*o)<2.8&&(this.collectItem(i),this.scene.remove(i.mesh),this.items.splice(n,1))}}applyFish(){this.speedMultiplier=2.2,this.speedTimer=10}applyCatnip(){this.isWobbly=!0,this.wobblyTimer=8}applyCustomSpeed(t,e){this.speedMultiplier=Math.max(this.speedMultiplier,t),this.speedTimer=Math.max(this.speedTimer,e)}collectItem(t){t.type==="fish"?(this.speedMultiplier=2.2,this.speedTimer=10,console.log("%c🐟 FISH!! SPEED BOOST x2.2 for 10 seconds ZOOOOM","color: orange; font-size: 14px; font-weight: bold")):(this.isWobbly=!0,this.wobblyTimer=8,console.log("%c🌿 CATNIP!! reality is a suggestion now. 8 seconds.","color: lime; font-size: 14px; font-weight: bold")),this.onPickup?.(t.type,t.worldPos.clone())}spawnItem(){const t=Math.random()<.62?"fish":"catnip",e=Math.random()*Math.PI*2,n=15+Math.random()*120,i=new O(Math.cos(e)*n,2.5,Math.sin(e)*n),s=t==="fish"?this.makeFish():this.makeCatnip();s.position.copy(i),this.scene.add(s),this.items.push({mesh:s,type:t,worldPos:i.clone(),bobPhase:Math.random()*Math.PI*2})}makeFish(){const t=new oe,e=new ce({color:16094266,emissive:3346688,emissiveIntensity:.3}),n=new ce({color:13391104}),i=new D(new ct(.5,8,6),e);i.scale.set(1.6,1,.75),t.add(i);const s=new D(new be(.45,.65,4),n);s.rotation.z=Math.PI/2,s.position.x=-.9,t.add(s);const o=new D(new ct(.1,6,4),new ce({color:1118481}));o.position.set(.56,.1,.36),t.add(o);const a=new D(new ct(.04,4,3),new ce({color:16777215}));return a.position.set(.62,.14,.4),t.add(a),t}makeCatnip(){const t=new oe,e=new ce({color:4508740,emissive:1131537,emissiveIntensity:.4}),n=new ce({color:2263074}),i=new ce({color:11206570,emissive:5635925,emissiveIntensity:1.2}),s=new D(new ct(.42,8,6),e);s.scale.set(1.1,.42,1.6),t.add(s);const o=new D(new Qt(.06,.06,.65,5),n);o.position.y=-.38,t.add(o);const a=new D(new ct(.16,6,4),i);a.position.y=.52,t.add(a);for(let c=0;c<3;c++){const l=new D(new ct(.2,6,4),e);l.scale.set(.8,.35,1.2);const d=c/3*Math.PI*2;l.position.set(Math.cos(d)*.45,.1,Math.sin(d)*.45),t.add(l)}return t}}class X_{constructor(){S(this,"combo",0);S(this,"comboTimer",0);S(this,"COMBO_WINDOW",3.2);S(this,"overlayEl",null);S(this,"hideTimeout",null);this.overlayEl=document.getElementById("combo-overlay"),this.overlayEl||setTimeout(()=>{this.overlayEl=document.getElementById("combo-overlay")},500)}update(t){this.combo>0&&(this.comboTimer-=t,this.comboTimer<=0&&this.breakCombo())}registerInteraction(){this.combo++,this.comboTimer=this.COMBO_WINDOW,this.combo>=3&&this.displayCombo()}displayCombo(){if(!this.overlayEl)return;const t=this.getComboLabel();this.overlayEl.textContent=`${t} x${this.combo}!`,this.overlayEl.style.display="block",this.overlayEl.style.opacity="1",this.overlayEl.style.color=this.getComboColor(),this.overlayEl.style.fontSize=Math.min(22+this.combo*2.5,72)+"px",this.overlayEl.style.textShadow=`0 0 20px ${this.getComboColor()}`,this.overlayEl.style.transform="translate(-50%, -50%) scale(1.35)",setTimeout(()=>{this.overlayEl&&(this.overlayEl.style.transform="translate(-50%, -50%) scale(1)")},120),this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(()=>{this.overlayEl&&(this.overlayEl.style.opacity="0")},2200),this.combo===10&&console.log("%c😸 PURRFECT COMBO x10!!! THIS IS PEAK CAT","color: gold; font-size: 20px; font-weight: bold"),this.combo===20&&console.log("%c🐱‍👤 LEGENDARY PURRFECT COMBO x20!!! THE VOID IS IMPRESSED","color: #ff00ff; font-size: 24px; font-weight: bold")}getComboLabel(){return this.combo>=20?"🐱‍👤 LEGENDARY PURRFECT":this.combo>=10?"😸 PURRFECT COMBO":this.combo>=5?"🐱 MEOW COMBO":"💬 CHAT COMBO"}getComboColor(){return this.combo>=20?"#ff00ff":this.combo>=10?"#ffd700":this.combo>=5?"#ff8800":"#ffffff"}breakCombo(){this.combo>=5&&console.log(`%c😿 combo of ${this.combo} broken......`,"color: gray"),this.combo=0,this.overlayEl&&(this.overlayEl.style.opacity="0")}getComboCount(){return this.combo}}class Pl{constructor(){S(this,"renderEngine");S(this,"catGod");S(this,"npcManager");S(this,"worldGenerator");S(this,"playerTracker");S(this,"sageCharacter");S(this,"physicsWorld");S(this,"procreationSystem");S(this,"cameraController");S(this,"jojoSystem");S(this,"ugandanKnucklesEvent");S(this,"chat");S(this,"bubbles");S(this,"mobileControls",null);S(this,"audioManager");S(this,"multiplayer");S(this,"remotePlayers",new Map);S(this,"scene");S(this,"keyPressed",{});S(this,"jojoMessageCounter",0);S(this,"weatherSystem");S(this,"dayNight");S(this,"factionSystem");S(this,"dungeon");S(this,"voidPortal");S(this,"itemPickups");S(this,"comboSystem");S(this,"sunLight");S(this,"ambientLightRef");S(this,"mudSlowTimer",0);S(this,"inventory",new wa);S(this,"playerRespawnTimer",0);S(this,"invincibleTimer",0);S(this,"bandageTimer",0);S(this,"bandageRate",0);S(this,"slowMoTimer",0);S(this,"confuseTimer",0);S(this,"hotSauceTimer",0);S(this,"onionLayerActive",!1);S(this,"shieldHitsRemaining",0);S(this,"soulGemActive",!1);this.renderEngine=new X0,this.scene=this.renderEngine.getScene(),this.physicsWorld=new C_,this.physicsWorld.addGround(500,500),this.playerTracker=new Q0,this.npcManager=new Sa(this.scene),this.worldGenerator=new J0(this.scene),this.catGod=new Y0(this.scene),this.sageCharacter=new tg(this.scene),this.procreationSystem=new P_,this.cameraController=new I_(this.renderEngine.getCamera()),this.jojoSystem=new D_,this.audioManager=new L_("./nyan-cat.mp3",.4),this.ugandanKnucklesEvent=new U_(this.scene),this.chat=new F_,this.ugandanKnucklesEvent.setAnnounceCallback(n=>this.chat.announceKnuckles(n)),this.bubbles=new O_(this.renderEngine.getCamera());const t=(n,i,s)=>this.bubbles.showBubbleLive(n,i,s);this.npcManager.setBubbleCallback(t),this.catGod.setSpeakCallback(t),this.sageCharacter.setBubbleCallback(t),this.chat.setOnPlayerSend(n=>{this.sageCharacter.showBubble(n),this.comboSystem?.registerInteraction()}),this.multiplayer=this.initMultiplayer(),Cl.isMobile()&&(this.mobileControls=new Cl,this.mobileControls.onProcreate=()=>{const n=this.procreationSystem.procreate(this.sageCharacter.getPosition(),this.catGod.position,this.scene);n&&this.npcManager.addNPC(n)},this.mobileControls.onMute=()=>{this.audioManager.toggleMute()},this.mobileControls.onChat=()=>{this.chat.open()},this.mobileControls.onJump=()=>{this.sageCharacter.tryJump()}),this.setupKeyboardControls(),this.worldGenerator.generateInitialWorld(),this.setupLighting(),this.factionSystem=new G_,this.factionSystem.onFactionChange=n=>{const i=document.getElementById("faction-hud");i&&(i.textContent=`Faction: ${n.toUpperCase()}`,i.style.color=this.factionSystem.getFactionColor(n))},this.npcManager.setMudHitCallback(n=>{if(this.inventory.isMudImmune()){this.chat.addMessage("event","👂 Shrek Ears blocked the mud!");return}this.mudSlowTimer=n,this.chat.addMessage("event","💩 Hit by Shrek's mud!! Moving slow for a bit...")}),this.npcManager.setWorldGenerator(this.worldGenerator),this.npcManager.onPlayerHit=n=>{if(this.sageCharacter.isDead())return;if(this.invincibleTimer>0){this.chat.addMessage("event","⭐ Star Piece blocked the hit!");return}if(this.onionLayerActive){this.onionLayerActive=!1,this.chat.addMessage("event","🧅 Onion Layer absorbed the hit!");return}if(this.shieldHitsRemaining>0){this.shieldHitsRemaining--,this.chat.addMessage("event",`🛡 Shield blocked! (${this.shieldHitsRemaining} charges left)`);return}if(this.inventory.isCatCrownActive()||this.inventory.isLaserPointerActive()&&Math.random()<.5)return;const i=Math.ceil(n*this.inventory.getDamageTakenMult());this.sageCharacter.takeDamage(i),this.chat.addMessage("event",`💢 Ouch! -${i} HP`);const s=document.getElementById("hp-bar-fill");s&&(s.style.background="#ff2222",setTimeout(()=>{s&&(s.style.background="")},200))},this.npcManager.onNpcKilled=(n,i)=>{const s=this.inventory.isLuckyCharmActive()?2:1;for(let o=0;o<s;o++){const a=wa.rollLoot(n);if(a&&this.inventory.addItem(a)){const l=ai[a];this.chat.addMessage("event",`🎁 Dropped: ${l.icon} ${l.name}`)}}},this.npcManager.onDomainActivated=(n,i)=>{this.chat.addMessage("event",`⚡ DOMAIN EXPANSION: ${n.toUpperCase()}`),this.chat.addMessage("event",`💀 "${i}"`),this.showDomainBanner(n,i)},this.npcManager.onNpcEquipItem=(n,i)=>{this.chat.addMessage("event",`🗡️ A ${n} looted: ${i}!`)},this.inventory.onInventoryChange=()=>this.renderHotbar();const e=(n,i,s)=>this.bubbles.showBubbleLive(n,i,s);this.npcManager.setBubbleCallback((n,i,s)=>{e(n,i,s)}),this.dungeon=new H_(this.scene),this.voidPortal=new V_(this.scene),this.voidPortal.onEnterVoid=()=>this.chat.addMessage("event","🌀 YOU ENTERED THE VOID. 15 seconds..."),this.voidPortal.onExitVoid=()=>this.chat.addMessage("event","🌀 You escaped the void. Barely."),this.itemPickups=new W_(this.scene),this.itemPickups.onPickup=(n,i)=>{this.chat.addMessage("event",n==="fish"?"🐟 Fish! Speed boost x2.2 for 10s!":"🌿 Catnip!! Reality destabilizing..."),this.comboSystem.registerInteraction()},this.comboSystem=new X_,this.start()}setupKeyboardControls(){document.addEventListener("keydown",t=>{this.keyPressed[t.key.toLowerCase()]=!0;const e=parseInt(t.key)-1;if(e>=0&&e<=5){this.inventory.selectSlot(e),this.renderHotbar();return}if(t.key.toLowerCase()==="e"&&!this.chat.isInputOpen()){this.useEquippedItem();return}if(t.key.toLowerCase()==="p"){const n=this.procreationSystem.procreate(this.sageCharacter.getPosition(),this.catGod.position,this.scene);n&&(this.npcManager.addNPC(n),this.comboSystem.registerInteraction())}if(t.key.toLowerCase()==="f"&&this.factionSystem.cyclePlayerFaction(),t.key.toLowerCase()==="z"&&!this.chat.isInputOpen()){if(this.sageCharacter.tryActivateDomain()){const n=this.npcManager.getDomainSystem();n&&n.openPlayerDomain(),this.showDomainBanner("Aberrant Throne","I DWELL IN A DREAM, BY A LAW OF MY OWN. STEP INSIDE MY THRONE AND CEASE TO EXIST."),this.chat.addMessage("event","⚡ DOMAIN EXPANSION: ABERRANT THRONE")}else{const n=Math.ceil(this.sageCharacter.getDomainCooldown());this.chat.addMessage("event",n>0?`⏳ Domain cooldown: ${n}s remaining`:"⚡ Domain already active!")}return}}),document.addEventListener("keyup",t=>{this.keyPressed[t.key.toLowerCase()]=!1}),document.addEventListener("mousedown",t=>{t.button!==0||this.chat.isInputOpen()||this.tryAttackNearestNPC()})}tryAttackNearestNPC(){if(!this.sageCharacter.canAttack()||this.sageCharacter.isDead())return;const t=this.sageCharacter.getPosition(),e=this.sageCharacter.getAttackRange(this.inventory.getRangeBonus()),n=this.sageCharacter.getAttackDamage(this.inventory.getAttackBonus()),i=Math.ceil(n*this.inventory.getDamageDealtMult());let s=null,o=e;for(const a of this.npcManager.getNPCs()){if(!a.isAlive())continue;const c=a.getPosition().distanceTo(t);c<o&&(o=c,s=a)}if(s){s.takeDamage(i),this.sageCharacter.markAttacked();const a=!s.isAlive();this.chat.addMessage("event",a?`⚔ Killed a ${s.getType()}! (+${i} dmg)`:`⚔ Hit ${s.getType()} for ${i} dmg`)}}useEquippedItem(){const t=this.inventory.useEquipped();if(!t)return;const e=this.sageCharacter.getPosition();if(t==="fish")this.itemPickups.applyFish(),this.chat.addMessage("event","🐟 Fish! Speed x2.2 for 10s");else if(t==="catnip")this.itemPickups.applyCatnip(),this.chat.addMessage("event","🌿 Catnip! Vision wobbling...");else if(t==="potion"){const n=Math.min(40,this.sageCharacter.maxHp-this.sageCharacter.hp);this.sageCharacter.hp=Math.min(this.sageCharacter.maxHp,this.sageCharacter.hp+40),this.chat.addMessage("event",`🧪 Potion! +${n} HP`)}else if(t==="mega_potion")this.sageCharacter.hp=this.sageCharacter.maxHp,this.chat.addMessage("event","🧪✨ MEGA POTION! Full heal!");else if(t==="void_shard"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<10&&(i.takeDamage(30),n++);this.chat.addMessage("event",`💜 Void Shard! Blasted ${n} mobs (30 dmg)`)}else if(t==="onion"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<12&&(i.takeDamage(20),n++);this.chat.addMessage("event",`🧅 Onion! Shrek tribute! Hit ${n} mobs (20 dmg)`)}else if(t==="turbo_fish")this.itemPickups.applyCustomSpeed(4,5),this.chat.addMessage("event","🐟⚡ TURBO FISH! Speed x4 for 5s... try not to fall off the world");else if(t==="bomb"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<15&&(i.takeDamage(60),n++);this.chat.addMessage("event",`💣 BOMB! 60 dmg to ${n} mobs in radius 15`)}else if(t==="lightning"){const n=[...this.npcManager.getNPCs()].filter(i=>i.isAlive()).sort((i,s)=>i.getPosition().distanceTo(e)-s.getPosition().distanceTo(e)).slice(0,5);n.forEach(i=>i.takeDamage(25)),this.chat.addMessage("event",`⚡ Lightning! Chained 25 dmg to ${n.length} targets`)}else if(t==="holy_water"){let n=0;for(const i of this.npcManager.getNPCs())i.getType()==="emo"&&i.getPosition().distanceTo(e)<12&&(i.takeDamage(9999),n++);this.chat.addMessage("event",`💧 Holy Water! Nuked ${n} emos. They didn't survive the positivity.`)}else if(t==="disco_ball"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<10&&(i.stun(8),n++);this.chat.addMessage("event",`🪩 DISCO BALL! Stunned ${n} mobs for 8s. EVERYBODY DANCE NOW.`)}else if(t==="time_crystal")this.slowMoTimer=10,this.chat.addMessage("event","💎 TIME CRYSTAL! Reality slowing down for 10s...");else if(t==="star_piece")this.invincibleTimer=3,this.chat.addMessage("event","⭐ STAR PIECE! Invincible for 3 seconds!");else if(t==="teleporter"){const n=(Math.random()-.5)*200,i=(Math.random()-.5)*200;this.sageCharacter.teleportTo(new O(n,3,i)),this.chat.addMessage("event",`🌀 TELEPORTER! Warped to (${n.toFixed(0)}, ${i.toFixed(0)})`)}else if(t==="warp_stone")this.sageCharacter.teleportTo(new O(0,5,8)),this.chat.addMessage("event","🪨 Warp Stone! Teleported to the Cat God.");else if(t==="cheese"){const n=Math.min(8,this.sageCharacter.maxHp-this.sageCharacter.hp);this.sageCharacter.hp=Math.min(this.sageCharacter.maxHp,this.sageCharacter.hp+8),this.chat.addMessage("event",`🧀 Cheese! +${n} HP. Mild healing for mild cheese.`)}else if(t==="bandage")this.bandageTimer=10,this.bandageRate=2.5,this.chat.addMessage("event","🩹 Bandage! +2.5 HP/s for 10s");else if(t==="boomerang"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<12&&(i.takeDamage(20),n++);this.chat.addMessage("event",`🪃 Boomerang! 20 dmg to ${n} mobs in range 12`)}else if(t==="megaphone"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().clone().sub(e).normalize(),i.stun(1.5),n++;this.chat.addMessage("event",`📣 MEGAPHONE!! Screamed at ${n} NPCs. They're briefly stunned from the noise.`)}else if(t==="glue_trap"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<10&&(i.stun(6),n++);this.chat.addMessage("event",`🪤 Glue Trap! Stuck ${n} mobs for 6s`)}else if(t==="nuke"){let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<25&&(i.takeDamage(100),n++);this.chat.addMessage("event",`☢️ NUKE!! 100 dmg to ${n} mobs. oops.`)}else if(t==="plasma_cannon"){let n=null,i=20;for(const s of this.npcManager.getNPCs()){const o=s.getPosition().distanceTo(e);o<i&&(i=o,n=s)}n?(n.takeDamage(40),this.chat.addMessage("event",`🔫 Plasma Cannon! 40 dmg to ${n.getType()}`)):this.chat.addMessage("event","🔫 Plasma Cannon: nobody in range 20. wasted.")}else if(t==="mystery_box")for(let n=0;n<3;n++){const i=sl[Math.floor(Math.random()*sl.length)];this.inventory.addItem(i)&&this.chat.addMessage("event",`🎁 Mystery Box gave: ${ai[i].icon} ${ai[i].name}`)}else if(t==="cursed_egg"){const n=Math.floor(Math.random()*5);n===0?(this.sageCharacter.hp=Math.min(this.sageCharacter.maxHp,this.sageCharacter.hp+25),this.chat.addMessage("event","🥚 CURSED EGG: Healed 25 somehow???")):n===1?(this.itemPickups.applyCustomSpeed(.3,4),this.chat.addMessage("event","🥚 CURSED EGG: You are EXTREMELY slow for 4s. so sorry.")):n===2?(this.npcManager.forceSpawnRandom(8),this.chat.addMessage("event","🥚 CURSED EGG: Spawned 8 new chaos entities. ur fault.")):n===3?(this.invincibleTimer=5,this.chat.addMessage("event","🥚 CURSED EGG: Lucky! 5s invincibility")):(this.sageCharacter.takeDamage(10),this.chat.addMessage("event","🥚 CURSED EGG: It exploded in ur face. -10 HP"))}else if(t==="party_hat"){for(const n of this.npcManager.getNPCs())n.getPosition().distanceTo(e)<15&&n.triggerSpeak();this.chat.addMessage("event","🎉 PARTY HAT! All nearby NPCs are now MANDATORY partying.")}else if(t==="rainbow")this.npcManager.forceSpawnRandom(5),this.chat.addMessage("event","🌈 RAINBOW! Spawned 5 new NPCs. chaos intensifies.");else if(t==="coffee")this.mudSlowTimer=0,this.slowMoTimer=0,this.confuseTimer=0,this.chat.addMessage("event","☕ COFFEE! Cleared all debuffs. Back to normal (whatever that means).");else if(t==="void_key")this.voidPortal.enterVoid(),this.chat.addMessage("event","🗝️ VOID KEY! Forced yourself into the void. ur brave I guess.");else if(t==="barney_ticket")this.npcManager.forceSpawnBarney(),this.chat.addMessage("event","🦕 BARNEY TICKET! He will come. He always comes.");else if(t==="onion_layer")this.onionLayerActive=!0,this.chat.addMessage("event","🧅 Onion Layer equipped! Next hit absorbed. Like an onion. Layers.");else if(t==="uwu_scroll")this.chat.addMessage("event","📜 UwU Scroll!! nyaa everything is extra uwu now for 20s~ meow meow 😸");else if(t==="donut")this.confuseTimer=5,this.chat.addMessage("event","🍩 DONUT! Controls inverted for 5s. enjoy the chaos.");else if(t==="hot_sauce")this.hotSauceTimer=5,this.itemPickups.applyCustomSpeed(3,5),this.chat.addMessage("event","🌶️ HOT SAUCE! SPEED x3 for 5s. SCREAMING INTERNALLY.");else if(t==="cheese_wheel"){let n=null,i=1/0;for(const s of this.npcManager.getNPCs()){const o=s.getPosition().distanceTo(e);o<i&&(i=o,n=s)}n&&i<20?(n.takeDamage(35),this.chat.addMessage("event",`🧀 CHEESE WHEEL! Rolled it into ${n.getType()} for 35 dmg`)):this.chat.addMessage("event","🧀 CHEESE WHEEL: nobody close enough to obliterate. wasted.")}else t==="soul_gem"?(this.soulGemActive=!0,this.chat.addMessage("event","💎 SOUL GEM activated! Auto-revive on next death.")):t==="shield"?(this.shieldHitsRemaining=3,this.chat.addMessage("event","🛡 SHIELD! 3 hit absorption charges. better than nothing.")):this.chat.addMessage("event",`✨ ${ai[t]?.icon??"?"} ${ai[t]?.name??t} equipped passively.`);this.renderHotbar()}showDomainBanner(t,e){let n=document.getElementById("domain-banner");n||(n=document.createElement("div"),n.id="domain-banner",n.style.cssText=`
                position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
                text-align:center; pointer-events:none; z-index:9999;
                font-family: serif; color: #ff00ff; text-shadow: 0 0 20px #ff00ff, 0 0 40px #aa00aa;
                transition: opacity 0.5s;
            `,document.body.appendChild(n)),n.innerHTML=`
            <div style="font-size:18px;letter-spacing:4px;color:#fff;opacity:0.8">DOMAIN EXPANSION</div>
            <div style="font-size:42px;font-weight:bold;letter-spacing:6px;margin:8px 0">${t.toUpperCase()}</div>
            <div style="font-size:14px;color:#ffaaff;max-width:500px;margin:0 auto;font-style:italic">"${e}"</div>
        `,n.style.opacity="1",clearTimeout(n._hideTimer),n._hideTimer=setTimeout(()=>{n&&(n.style.opacity="0")},3500)}setupLighting(){const t=new qd(16777215,.6);this.scene.add(t),this.ambientLightRef=t;const e=new Yd(16777215,.8);e.position.set(50,100,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,this.scene.add(e),this.sunLight=e;const n=new qn(8900331,.3);n.position.set(-50,50,50),this.scene.add(n),this.dayNight=new k_(this.scene,this.sunLight,this.ambientLightRef),this.weatherSystem=new z_(this.scene,this.ambientLightRef),this.weatherSystem.onWeatherChange=i=>{this.chat.addMessage("event",`⛅ Weather: ${i.toUpperCase()}`)},this.dayNight.onNightFall=()=>this.chat.addMessage("event","🌙 Night has fallen. The emos grow stronger."),this.dayNight.onDayBreak=()=>this.chat.addMessage("event","☀️ A new day begins!")}start(){const t=()=>{requestAnimationFrame(t);const e=1/120,n=this.slowMoTimer>0?e*.4:e;let i=0,s=0;if(this.mobileControls){const p=this.mobileControls.getJoystick();i=p.dx,s=p.dy;const v=this.mobileControls.consumeCamDelta();(v.dx!==0||v.dy!==0)&&this.cameraController.applyTouchDelta(v.dx,v.dy)}const o=this.confuseTimer>0?-1:1;this.physicsWorld.update(n),this.sageCharacter.update(n,this.cameraController.getOrbitAngleY(),this.chat.isInputOpen(),i*o,s*o);const a=this.itemPickups.speedMultiplier,c=this.mudSlowTimer>0?.35:1;this.sageCharacter.setSpeedMultiplier(a*c),this.mudSlowTimer>0&&(this.mudSlowTimer-=e),this.invincibleTimer>0&&(this.invincibleTimer-=e),this.hotSauceTimer>0&&(this.hotSauceTimer-=e),this.confuseTimer>0&&(this.confuseTimer-=e),this.slowMoTimer>0&&(this.slowMoTimer-=e),this.bandageTimer>0&&(this.bandageTimer-=e,this.sageCharacter.hp=Math.min(this.sageCharacter.maxHp,this.sageCharacter.hp+this.bandageRate*e)),this.sageCharacter.setJumpMultiplier(this.inventory.getJumpMult()),this.sageCharacter.setConfused(this.confuseTimer>0);const l=this.renderEngine.getCamera();this.itemPickups.isWobbly?(l.fov=75+this.itemPickups.wobbleAmount,l.updateProjectionMatrix()):l.fov!==75&&(l.fov=75,l.updateProjectionMatrix()),this.npcManager.setPlayerPos(this.sageCharacter.getPosition());const d=this.sageCharacter.getPosition();this.multiplayer.sendPosition(d.x,d.y,d.z,this.sageCharacter.getRotationY());for(const p of this.remotePlayers.values())p.update(n);this.catGod.update(n,this.sageCharacter.getPosition()),this.npcManager.update(n),this.worldGenerator.update(n,this.sageCharacter.getPosition()),this.worldGenerator.updateDestructibles(n),this.dayNight.update(n),this.weatherSystem.update(n),this.factionSystem.update(n,this.npcManager.getNPCs()),this.voidPortal.update(n,this.sageCharacter.getPosition()),this.itemPickups.update(n,this.sageCharacter.getPosition()),this.comboSystem.update(n);const u=document.getElementById("faction-hud");u&&!u.dataset.init&&(u.dataset.init="1",u.addEventListener("click",()=>this.factionSystem.cyclePlayerFaction())),this.ugandanKnucklesEvent.update(e,this.sageCharacter.getPosition()),this.bubbles.update();const h=this.sageCharacter.getPosition();this.cameraController.setFollowTarget(h,h),this.cameraController.setPlayerMoving(this.sageCharacter.isMoving()),this.cameraController.update(),this.playerTracker.update(),this.jojoMessageCounter++,this.jojoMessageCounter%180===0&&(console.log(`%c${this.jojoSystem.getRandomJojoReference()}`,"color: gold; font-size: 16px; font-weight: bold;"),console.log("%cゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ","color: purple; font-size: 14px;")),this.sageCharacter.tickAttackCooldown(e);const f=this.sageCharacter.tickPlayerDomain(n);if(f==="opened"){const p=this.npcManager.getDomainSystem();p&&!p.isPlayerDomainActive()&&p.openPlayerDomain(),this.showDomainBanner("Aberrant Throne","I DWELL IN A DREAM, BY A LAW OF MY OWN. STEP INSIDE MY THRONE AND CEASE TO EXIST."),this.chat.addMessage("event","⚡ Domain Expansion ABERRANT THRONE awakened at low HP!!")}else f==="closed"&&this.chat.addMessage("event","💨 Aberrant Throne collapsed. 90s cooldown.");if(this.npcManager.getDomainSystem()?.updatePlayerDomain(n,this.sageCharacter.getPosition(),this.npcManager.getNPCs()),this.sageCharacter.isDead()){if(this.playerRespawnTimer<=0){this.playerRespawnTimer=3;const p=document.getElementById("death-overlay");p&&(p.style.display="flex")}if(this.playerRespawnTimer-=e,this.playerRespawnTimer<=0){this.soulGemActive?(this.soulGemActive=!1,this.sageCharacter.hp=Math.floor(this.sageCharacter.maxHp*.5),this.sageCharacter.respawn(),this.chat.addMessage("event","💎 SOUL GEM: Auto-revived at 50% HP!")):this.sageCharacter.respawn();const p=document.getElementById("death-overlay");p&&(p.style.display="none")}}this.updateUI(),this.renderEngine.render()};t()}initMultiplayer(){const e=new URLSearchParams(window.location.search).get("server")||"ws://localhost:8080";let n=localStorage.getItem("catworld_username");if(!n){const o=["Fuzzy","Cursed","Divine","Chaotic","Blessed","Dreamy","Silly","Spooky"],a=["Paw","Orb","Cat","Bean","Knuckle","Sage","Ghost","Specter"];n=o[Math.floor(Math.random()*o.length)]+a[Math.floor(Math.random()*a.length)]+Math.floor(Math.random()*999),localStorage.setItem("catworld_username",n)}console.log("%cmultiplayer: connecting as "+n+" to "+e,"color: cyan");const i=new B_(e,n);i.onPlayerJoin=o=>{const a=new Rl(this.scene,o.id,o.username,o.x,o.y,o.z);a.setBubbleCallback((c,l,d)=>this.bubbles.showBubbleLive(c,l,d)),this.remotePlayers.set(o.id,a),this.chat.addMessage("system",`${o.username} joined the world`),this.updatePlayerCountUI()},i.onPlayerLeave=o=>{const a=this.remotePlayers.get(o);a&&(this.chat.addMessage("system",`${a.username} left the world`),a.destroy(),this.remotePlayers.delete(o)),this.updatePlayerCountUI()},i.onPlayerMove=(o,a,c,l,d)=>{this.remotePlayers.get(o)?.setTarget(a,c,l,d)},i.onPlayerChat=(o,a,c)=>{this.chat.addMessage("player",`${a}: ${c}`),this.remotePlayers.get(o)?.showBubble(c)},i.onConnected=(o,a)=>{for(const c of a){const l=new Rl(this.scene,c.id,c.username,c.x,c.y,c.z);l.setBubbleCallback((d,u,h)=>this.bubbles.showBubbleLive(d,u,h)),this.remotePlayers.set(c.id,l)}this.chat.addMessage("system",`Connected! ${a.length} other player(s) in world`),this.updatePlayerCountUI()},i.onStatusChange=o=>{const a=document.getElementById("mp-status");a&&(a.textContent=`Multiplayer: ${o}`)};const s=this.chat.getOnPlayerSend();return this.chat.setOnPlayerSend(o=>{s?.(o),i.sendChat(o)}),i}updatePlayerCountUI(){const t=document.getElementById("mp-players");t&&(t.textContent=`Online: ${this.remotePlayers.size+1}`)}renderHotbar(){document.querySelectorAll(".hotbar-slot").forEach((n,i)=>{const s=this.inventory.slots[i],o=n.querySelector(".slot-icon"),a=n.querySelector(".slot-count");o&&(o.textContent=s?s.icon:""),a&&(a.textContent=s&&s.quantity>1?`x${s.quantity}`:""),n.classList.toggle("selected",i===this.inventory.selectedSlot)});const e=document.getElementById("hotbar-label");if(e){const n=this.inventory.getEquipped();e.textContent=n?`${n.icon} ${n.name} — ${n.description}`:""}}updateUI(){const t=document.getElementById("hp-current"),e=document.getElementById("hp-max"),n=document.getElementById("hp-bar-fill");if(t&&(t.textContent=String(Math.max(0,Math.ceil(this.sageCharacter.hp)))),e&&(e.textContent=String(this.sageCharacter.maxHp)),n){const d=Math.max(0,this.sageCharacter.hp/this.sageCharacter.maxHp)*100;n.style.width=`${d}%`,n.style.background=d>60?"#44ee66":d>30?"#ffcc00":"#ff3333"}const i=document.getElementById("playerKills"),s=document.getElementById("npcStats"),o=document.getElementById("procreation"),a=document.getElementById("weather-hud"),c=document.getElementById("time-hud");if(i&&(i.textContent=`Player Kills: ${this.playerTracker.getKillCount()}`),s){const d=this.ugandanKnucklesEvent.getActiveCount(),u=d>0?` | Bruddas: ${d}`:"";s.textContent=`NPCs: ${this.npcManager.getNPCCount()} | Buildings: ${this.worldGenerator.getBuildingCount()} | Offspring: ${this.procreationSystem.getOffspringCount()}${u}`}if(o){const d=this.procreationSystem.getDistance(this.sageCharacter.getPosition(),this.catGod.position);o.textContent=this.procreationSystem.getCanProcreateMessage(d)}if(a&&(a.textContent=`Weather: ${this.weatherSystem.getCurrentWeather()}`),c){const d=this.voidPortal.isInVoid(),u=this.dungeon.isPlayerInDungeon(this.sageCharacter.getPosition()),h=d?" 🌀VOID":u?" 🔮DUNGEON":"";c.textContent=`${this.dayNight.getTimeString()}${h}`}const l=document.getElementById("domain-hud");if(l)if(this.sageCharacter.isDomainActive())l.textContent=`⚡ DOMAIN: ${Math.ceil(this.sageCharacter.getDomainTimeRemaining())}s`,l.style.color="#8844ff";else{const d=Math.ceil(this.sageCharacter.getDomainCooldown());l.textContent=d>0?`⏳ Domain: ${d}s`:"⚡ Domain (Z)",l.style.color=d>0?"#888888":"#8844ff"}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{new Pl}):new Pl;
