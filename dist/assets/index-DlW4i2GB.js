var bh=Object.defineProperty;var Eh=(o,t,e)=>t in o?bh(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var C=(o,t,e)=>Eh(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="183",Th=0,Qa=1,Ah=2,ws=1,Ch=2,ys=3,ai=0,qe=1,un=2,Hn=0,ji=1,tc=2,ec=3,nc=4,Rh=5,xi=100,Ph=101,Ih=102,Dh=103,Lh=104,Nh=200,Uh=201,Fh=202,Oh=203,Er=204,Tr=205,Bh=206,zh=207,Gh=208,kh=209,Vh=210,Hh=211,Wh=212,Xh=213,Yh=214,Ar=0,Cr=1,Rr=2,$i=3,Pr=4,Ir=5,Dr=6,Lr=7,wa=0,qh=1,jh=2,Tn=0,Cl=1,Rl=2,Pl=3,Il=4,Dl=5,Ll=6,Nl=7,Ul=300,bi=301,Zi=302,Oo=303,Bo=304,Ro=306,Nr=1e3,Vn=1001,Ur=1002,Be=1003,Kh=1004,Ns=1005,Ve=1006,zo=1007,wi=1008,en=1009,Fl=1010,Ol=1011,bs=1012,Sa=1013,Cn=1014,bn=1015,Yn=1016,ba=1017,Ea=1018,Es=1020,Bl=35902,zl=35899,Gl=1021,kl=1022,fn=1023,qn=1026,Si=1027,Vl=1028,Ta=1029,Ji=1030,Aa=1031,Ca=1033,mo=33776,go=33777,vo=33778,_o=33779,Fr=35840,Or=35841,Br=35842,zr=35843,Gr=36196,kr=37492,Vr=37496,Hr=37488,Wr=37489,Xr=37490,Yr=37491,qr=37808,jr=37809,Kr=37810,$r=37811,Zr=37812,Jr=37813,Qr=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,oa=37820,ra=37821,aa=36492,ca=36494,la=36495,ha=36283,da=36284,ua=36285,fa=36286,$h=3200,Ra=0,Zh=1,si="",on="srgb",Qi="srgb-linear",yo="linear",ue="srgb",Ci=7680,ic=519,Jh=512,Qh=513,td=514,Pa=515,ed=516,nd=517,Ia=518,id=519,pa=35044,sc="300 es",En=2e3,Ts=2001;function sd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Mo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function od(){const o=Mo("canvas");return o.style.display="block",o}const oc={};function wo(...o){const t="THREE."+o.shift();console.log(t,...o)}function Hl(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=o[1];e&&e.isStackTrace?o[0]+=" "+e.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Xt(...o){o=Hl(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...o)}}function re(...o){o=Hl(o);const t="THREE."+o.shift();{const e=o[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...o)}}function So(...o){const t=o.join(" ");t in oc||(oc[t]=!0,Xt(...o))}function rd(o,t,e){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ad={[Ar]:Cr,[Rr]:Dr,[Pr]:Lr,[$i]:Ir,[Cr]:Ar,[Dr]:Rr,[Lr]:Pr,[Ir]:$i};class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Go=Math.PI/180,ma=180/Math.PI;function ri(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[o&255]+Ge[o>>8&255]+Ge[o>>16&255]+Ge[o>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function se(o,t,e){return Math.max(t,Math.min(e,o))}function cd(o,t){return(o%t+t)%t}function ko(o,t,e){return(1-e)*o+e*t}function Sn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let is=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let c=n[i+0],l=n[i+1],d=n[i+2],u=n[i+3],h=s[r+0],f=s[r+1],m=s[r+2],v=s[r+3];if(u!==v||c!==h||l!==f||d!==m){let p=c*h+l*f+d*m+u*v;p<0&&(h=-h,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){const _=Math.acos(p),w=Math.sin(_);g=Math.sin(g*_)/w,a=Math.sin(a*_)/w,c=c*g+h*a,l=l*g+f*a,d=d*g+m*a,u=u*g+v*a}else{c=c*g+h*a,l=l*g+f*a,d=d*g+m*a,u=u*g+v*a;const _=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=_,l*=_,d*=_,u*=_}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],c=n[i+1],l=n[i+2],d=n[i+3],u=s[r],h=s[r+1],f=s[r+2],m=s[r+3];return t[e]=a*m+d*u+c*f-l*h,t[e+1]=c*m+d*h+l*u-a*f,t[e+2]=l*m+d*f+a*h-c*u,t[e+3]=d*m-a*u-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(i/2),u=a(s/2),h=c(n/2),f=c(i/2),m=c(s/2);switch(r){case"XYZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"YZX":this._x=h*d*u+l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u-h*f*m;break;case"XZY":this._x=h*d*u-l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u+h*f*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],d=e[6],u=e[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+r*a+i*l-s*c,this._y=i*d+r*c+s*a-n*l,this._z=s*d+r*l+n*c-i*a,this._w=r*d-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,r=-r,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),d=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+c*l+r*u-a*d,this.y=n+c*d+a*l-s*u,this.z=i+c*u+s*d-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new z,rc=new is;class Jt{constructor(t,e,n,i,s,r,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,c,l)}set(t,e,n,i,s,r,a,c,l){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],f=n[5],m=n[8],v=i[0],p=i[3],g=i[6],_=i[1],w=i[4],M=i[7],A=i[2],b=i[5],R=i[8];return s[0]=r*v+a*_+c*A,s[3]=r*p+a*w+c*b,s[6]=r*g+a*M+c*R,s[1]=l*v+d*_+u*A,s[4]=l*p+d*w+u*b,s[7]=l*g+d*M+u*R,s[2]=h*v+f*_+m*A,s[5]=h*p+f*w+m*b,s[8]=h*g+f*M+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*r*d-e*a*l-n*s*d+n*a*c+i*s*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=d*r-a*l,h=a*c-d*s,f=l*s-r*c,m=e*u+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(i*l-d*n)*v,t[2]=(a*n-i*r)*v,t[3]=h*v,t[4]=(d*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Jt,ac=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){const o={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ue&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ue&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?yo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return So("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return So("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[Qi]:{primaries:t,whitePoint:n,transfer:yo,toXYZ:ac,fromXYZ:cc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:ac,fromXYZ:cc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),o}const ae=ld();function Wn(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ki(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ri;class hd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=Mo("canvas")),Ri.width=t.width,Ri.height=t.height;const i=Ri.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Wn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dd=0;class Da{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Wo(i[r].image)):s.push(Wo(i[r]))}else s=Wo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Wo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?hd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let ud=0;const Xo=new z;class He extends ns{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Vn,i=Vn,s=Ve,r=wi,a=fn,c=en,l=He.DEFAULT_ANISOTROPY,d=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ri(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ur:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ur:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ul;He.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,n=0,i=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],m=c[9],v=c[2],p=c[6],g=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,M=(f+1)/2,A=(g+1)/2,b=(d+h)/4,R=(u+v)/4,x=(m+p)/4;return w>M&&w>A?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=R/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=x/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=R/s,i=x/s),this.set(n,i,s,e),this}let _=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(u-v)/_,this.z=(h-d)/_,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fd extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new He(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Da(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends fd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wl extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pd extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Me{constructor(t,e,n,i,s,r,a,c,l,d,u,h,f,m,v,p){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,c,l,d,u,h,f,m,v,p)}set(t,e,n,i,s,r,a,c,l,d,u,h,f,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=u,g[14]=h,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Pi.setFromMatrixColumn(t,0).length(),s=1/Pi.setFromMatrixColumn(t,1).length(),r=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=r*d,f=r*u,m=a*d,v=a*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=m+f*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*d,f=c*u,m=l*d,v=l*u;e[0]=h+v*a,e[4]=m*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*d,e[9]=-a,e[2]=f*a-m,e[6]=v+h*a,e[10]=r*c}else if(t.order==="ZXY"){const h=c*d,f=c*u,m=l*d,v=l*u;e[0]=h-v*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*d,e[9]=v-h*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const h=r*d,f=r*u,m=a*d,v=a*u;e[0]=c*d,e[4]=m*l-f,e[8]=h*l+v,e[1]=c*u,e[5]=v*l+h,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,f=r*l,m=a*c,v=a*l;e[0]=c*d,e[4]=v-h*u,e[8]=m*u+f,e[1]=u,e[5]=r*d,e[9]=-a*d,e[2]=-l*d,e[6]=f*u+m,e[10]=h-v*u}else if(t.order==="XZY"){const h=r*c,f=r*l,m=a*c,v=a*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=h*u+v,e[5]=r*d,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Zn.crossVectors(n,Je),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Zn.crossVectors(n,Je)),Zn.normalize(),Us.crossVectors(Je,Zn),i[0]=Zn.x,i[4]=Us.x,i[8]=Je.x,i[1]=Zn.y,i[5]=Us.y,i[9]=Je.y,i[2]=Zn.z,i[6]=Us.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],w=n[7],M=n[11],A=n[15],b=i[0],R=i[4],x=i[8],E=i[12],k=i[1],I=i[5],B=i[9],L=i[13],F=i[2],U=i[6],N=i[10],G=i[14],K=i[3],q=i[7],st=i[11],ot=i[15];return s[0]=r*b+a*k+c*F+l*K,s[4]=r*R+a*I+c*U+l*q,s[8]=r*x+a*B+c*N+l*st,s[12]=r*E+a*L+c*G+l*ot,s[1]=d*b+u*k+h*F+f*K,s[5]=d*R+u*I+h*U+f*q,s[9]=d*x+u*B+h*N+f*st,s[13]=d*E+u*L+h*G+f*ot,s[2]=m*b+v*k+p*F+g*K,s[6]=m*R+v*I+p*U+g*q,s[10]=m*x+v*B+p*N+g*st,s[14]=m*E+v*L+p*G+g*ot,s[3]=_*b+w*k+M*F+A*K,s[7]=_*R+w*I+M*U+A*q,s[11]=_*x+w*B+M*N+A*st,s[15]=_*E+w*L+M*G+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],d=t[2],u=t[6],h=t[10],f=t[14],m=t[3],v=t[7],p=t[11],g=t[15],_=c*f-l*h,w=a*f-l*u,M=a*h-c*u,A=r*f-l*d,b=r*h-c*d,R=r*u-a*d;return e*(v*_-p*w+g*M)-n*(m*_-p*A+g*b)+i*(m*w-v*A+g*R)-s*(m*M-v*b+p*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],f=t[11],m=t[12],v=t[13],p=t[14],g=t[15],_=e*a-n*r,w=e*c-i*r,M=e*l-s*r,A=n*c-i*a,b=n*l-s*a,R=i*l-s*c,x=d*v-u*m,E=d*p-h*m,k=d*g-f*m,I=u*p-h*v,B=u*g-f*v,L=h*g-f*p,F=_*L-w*B+M*I+A*k-b*E+R*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return t[0]=(a*L-c*B+l*I)*U,t[1]=(i*B-n*L-s*I)*U,t[2]=(v*R-p*b+g*A)*U,t[3]=(h*b-u*R-f*A)*U,t[4]=(c*k-r*L-l*E)*U,t[5]=(e*L-i*k+s*E)*U,t[6]=(p*M-m*R-g*w)*U,t[7]=(d*R-h*M+f*w)*U,t[8]=(r*B-a*k+l*x)*U,t[9]=(n*k-e*B-s*x)*U,t[10]=(m*b-v*M+g*_)*U,t[11]=(u*M-d*b-f*_)*U,t[12]=(a*E-r*I-c*x)*U,t[13]=(e*I-n*E+i*x)*U,t[14]=(v*w-m*A-p*_)*U,t[15]=(d*A-u*w+h*_)*U,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,c=t.z,l=s*r,d=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,d*a+n,d*c-i*r,0,l*c-i*a,d*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,d=r+r,u=a+a,h=s*l,f=s*d,m=s*u,v=r*d,p=r*u,g=a*u,_=c*l,w=c*d,M=c*u,A=n.x,b=n.y,R=n.z;return i[0]=(1-(v+g))*A,i[1]=(f+M)*A,i[2]=(m-w)*A,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(h+g))*b,i[6]=(p+_)*b,i[7]=0,i[8]=(m+w)*R,i[9]=(p-_)*R,i[10]=(1-(h+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),c=Pi.set(i[8],i[9],i[10]).length();s<0&&(r=-r),cn.copy(this);const l=1/r,d=1/a,u=1/c;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=d,cn.elements[5]*=d,cn.elements[6]*=d,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,r,a=En,c=!1){const l=this.elements,d=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let m,v;if(c)m=s/(r-s),v=r*s/(r-s);else if(a===En)m=-(r+s)/(r-s),v=-2*r*s/(r-s);else if(a===Ts)m=-r/(r-s),v=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=En,c=!1){const l=this.elements,d=2/(e-t),u=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,v;if(c)m=1/(r-s),v=r/(r-s);else if(a===En)m=-2/(r-s),v=-(r+s)/(r-s);else if(a===Ts)m=-1/(r-s),v=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new z,cn=new Me,md=new z(0,0,0),gd=new z(1,1,1),Zn=new z,Us=new z,Je=new z,lc=new Me,hc=new is;class mn{constructor(t=0,e=0,n=0,i=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hc.setFromEuler(this),this.setFromQuaternion(hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vd=0;const dc=new z,Ii=new is,Dn=new Me,Fs=new z,rs=new z,_d=new z,xd=new is,uc=new z(1,0,0),fc=new z(0,1,0),pc=new z(0,0,1),mc={type:"added"},yd={type:"removed"},Di={type:"childadded",child:null},Yo={type:"childremoved",child:null};class De extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new z,e=new mn,n=new is,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new Jt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(pc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(rs,Fs,this.up):Dn.lookAt(Fs,rs,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mc),Di.child=t,this.dispatchEvent(Di),Di.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yd),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),d=r(t.images),u=r(t.shapes),h=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}De.DEFAULT_UP=new z(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oe extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),g=this._getHandJoint(l,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Os={h:0,s:0,l:0};function jo(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=cd(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=jo(r,s,t+1/3),this.g=jo(r,s,t),this.b=jo(r,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=on){function n(s){s!==void 0&&parseFloat(s)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=Yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ae.workingToColorSpace(ke.copy(this),t),Math.round(se(ke.r*255,0,255))*65536+Math.round(se(ke.g*255,0,255))*256+Math.round(se(ke.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,s=ke.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const d=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=d<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=on){ae.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Os);const n=ko(Jn.h,Os.h,e),i=ko(Jn.s,Os.s,e),s=ko(Jn.l,Os.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Ut;Ut.NAMES=Yl;class As{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new As(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class La{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new La(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wd extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new z,Ln=new z,Ko=new z,Nn=new z,Li=new z,Ni=new z,gc=new z,$o=new z,Zo=new z,Jo=new z,Qo=new Te,tr=new Te,er=new Te;class rn{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),Ln.subVectors(n,e),Ko.subVectors(t,e);const r=ln.dot(ln),a=ln.dot(Ln),c=ln.dot(Ko),l=Ln.dot(Ln),d=Ln.dot(Ko),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(l*c-a*d)*h,m=(r*d-a*c)*h;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,i,s,r,a,c){return this.getBarycoord(t,e,n,i,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Nn.x),c.addScaledVector(r,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,r){return Qo.setScalar(0),tr.setScalar(0),er.setScalar(0),Qo.fromBufferAttribute(t,e),tr.fromBufferAttribute(t,n),er.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Qo,s.x),r.addScaledVector(tr,s.y),r.addScaledVector(er,s.z),r}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Ln.subVectors(t,e),ln.cross(Ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),ln.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;Li.subVectors(i,n),Ni.subVectors(s,n),$o.subVectors(t,n);const c=Li.dot($o),l=Ni.dot($o);if(c<=0&&l<=0)return e.copy(n);Zo.subVectors(t,i);const d=Li.dot(Zo),u=Ni.dot(Zo);if(d>=0&&u<=d)return e.copy(i);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(n).addScaledVector(Li,r);Jo.subVectors(t,s);const f=Li.dot(Jo),m=Ni.dot(Jo);if(m>=0&&f<=m)return e.copy(s);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ni,a);const p=d*m-f*u;if(p<=0&&u-d>=0&&f-m>=0)return gc.subVectors(s,i),a=(u-d)/(u-d+(f-m)),e.copy(i).addScaledVector(gc,a);const g=1/(p+v+h);return r=v*g,a=h*g,e.copy(n).addScaledVector(Li,r).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Rs{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,hn):hn.fromBufferAttribute(s,r),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),zs.subVectors(this.max,as),Ui.subVectors(t.a,as),Fi.subVectors(t.b,as),Oi.subVectors(t.c,as),Qn.subVectors(Fi,Ui),ti.subVectors(Oi,Fi),di.subVectors(Ui,Oi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-di.z,di.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,di.z,0,-di.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-di.y,di.x,0];return!nr(e,Ui,Fi,Oi,zs)||(e=[1,0,0,0,1,0,0,0,1],!nr(e,Ui,Fi,Oi,zs))?!1:(Gs.crossVectors(Qn,ti),e=[Gs.x,Gs.y,Gs.z],nr(e,Ui,Fi,Oi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new z,new z,new z,new z,new z,new z,new z,new z],hn=new z,Bs=new Rs,Ui=new z,Fi=new z,Oi=new z,Qn=new z,ti=new z,di=new z,as=new z,zs=new z,Gs=new z,ui=new z;function nr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ui.fromArray(o,s);const a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),d=n.dot(ui);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const Ce=new z,ks=new $t;let Sd=0;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pa,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pa&&(t.usage=this.usage),t}}class ql extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jl extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}const bd=new Rs,cs=new z,ir=new z;class Ps{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(ir)),this.expandByPoint(cs.copy(t.center).sub(ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ed=0;const sn=new Me,sr=new De,Bi=new z,Qe=new Rs,ls=new Rs,Fe=new z;class Se extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sd(t)?jl:ql)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return sr.lookAt(t),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new we(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(Qe.min,ls.min),Qe.expandByPoint(Fe),Fe.addVectors(Qe.max,ls.max),Qe.expandByPoint(Fe)):(Qe.expandByPoint(ls.min),Qe.expandByPoint(ls.max))}Qe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Fe.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(t,l),Fe.add(Bi)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new z,c[x]=new z;const l=new z,d=new z,u=new z,h=new $t,f=new $t,m=new $t,v=new z,p=new z;function g(x,E,k){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,k),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,k),d.sub(l),u.sub(l),f.sub(h),m.sub(h);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(I),a[x].add(v),a[E].add(v),a[k].add(v),c[x].add(p),c[E].add(p),c[k].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let x=0,E=_.length;x<E;++x){const k=_[x],I=k.start,B=k.count;for(let L=I,F=I+B;L<F;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new z,M=new z,A=new z,b=new z;function R(x){A.fromBufferAttribute(i,x),b.copy(A);const E=a[x];w.copy(E),w.sub(A.multiplyScalar(A.dot(E))).normalize(),M.crossVectors(b,E);const I=M.dot(c[x])<0?-1:1;r.setXYZW(x,w.x,w.y,w.z,I)}for(let x=0,E=_.length;x<E;++x){const k=_[x],I=k.start,B=k.count;for(let L=I,F=I+B;L<F;L+=3)R(t.getX(L+0)),R(t.getX(L+1)),R(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new z,s=new z,r=new z,a=new z,c=new z,l=new z,d=new z,u=new z;if(t)for(let h=0,f=t.count;h<f;h+=3){const m=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,p),d.subVectors(r,s),u.subVectors(i,s),d.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(d),c.add(d),l.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),d.subVectors(r,s),u.subVectors(i,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d);let f=0,m=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*d;for(let g=0;g<d;g++)h[m++]=l[f++]}return new We(h,d,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(t.data))}d.length>0&&(i[c]=d,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(e))}const s=t.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,d=r.length;l<d;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Td{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pa,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new z;class bo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new bo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ad=0,jn=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=ji,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Kl extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zi;const hs=new z,Gi=new z,ki=new z,Vi=new $t,ds=new $t,$l=new Me,Vs=new z,us=new z,Hs=new z,vc=new $t,or=new $t,_c=new $t;class xc extends De{constructor(t=new Kl){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Td(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new bo(n,3,0,!1)),zi.setAttribute("uv",new bo(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new $t(.5,.5),this.count=1}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),$l.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-ki.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;Ws(Vs.set(-.5,-.5,0),ki,r,Gi,i,s),Ws(us.set(.5,-.5,0),ki,r,Gi,i,s),Ws(Hs.set(.5,.5,0),ki,r,Gi,i,s),vc.set(0,0),or.set(1,0),_c.set(1,1);let a=t.ray.intersectTriangle(Vs,us,Hs,!1,hs);if(a===null&&(Ws(us.set(-.5,.5,0),ki,r,Gi,i,s),or.set(0,1),a=t.ray.intersectTriangle(Vs,Hs,us,!1,hs),a===null))return;const c=t.ray.origin.distanceTo(hs);c<t.near||c>t.far||e.push({distance:c,point:hs.clone(),uv:rn.getInterpolation(hs,Vs,us,Hs,vc,or,_c,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ws(o,t,e,n,i,s){Vi.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(ds.x=s*Vi.x-i*Vi.y,ds.y=i*Vi.x+s*Vi.y):ds.copy(Vi),o.copy(t),o.x+=ds.x,o.y+=ds.y,o.applyMatrix4($l)}const Fn=new z,rr=new z,Xs=new z,ei=new z,ar=new z,Ys=new z,cr=new z;let Na=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rr.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(rr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Xs),a=ei.dot(this.direction),c=-ei.dot(Xs),l=ei.lengthSq(),d=Math.abs(1-r*r);let u,h,f,m;if(d>0)if(u=r*c-a,h=r*a-c,m=s*d,u>=0)if(h>=-m)if(h<=m){const v=1/d;u*=v,h*=v,f=u*(u+r*h+2*a)+h*(r*u+h+2*c)+l}else h=s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-m?(u=Math.max(0,-(-r*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=m?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(r*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=r>0?-s:s,u=Math.max(0,-(r*h+a)),f=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rr).addScaledVector(Xs,h),f}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),d>=0?(s=(t.min.y-h.y)*d,r=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,r=(t.min.y-h.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,i,s){ar.subVectors(e,t),Ys.subVectors(n,t),cr.crossVectors(ar,Ys);let r=this.direction.dot(cr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ei.subVectors(this.origin,t);const c=a*this.direction.dot(Ys.crossVectors(ei,Ys));if(c<0)return null;const l=a*this.direction.dot(ar.cross(ei));if(l<0||c+l>r)return null;const d=-a*ei.dot(cr);return d<0?null:this.at(d/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Pt extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yc=new Me,fi=new Na,qs=new Ps,Mc=new z,js=new z,Ks=new z,$s=new z,lr=new z,Zs=new z,wc=new z,Js=new z;class D extends De{constructor(t=new Se,e=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Zs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(lr.fromBufferAttribute(u,t),r?Zs.addScaledVector(lr,d):Zs.addScaledVector(lr.sub(e),d))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(s),fi.copy(t.ray).recast(t.near),!(qs.containsPoint(fi.origin)===!1&&(fi.intersectSphere(qs,Mc)===null||fi.origin.distanceToSquared(Mc)>(t.far-t.near)**2))&&(yc.copy(s).invert(),fi.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=r[p.materialIndex],_=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,A=w;M<A;M+=3){const b=a.getX(M),R=a.getX(M+1),x=a.getX(M+2);i=Qs(this,g,t,n,l,d,u,b,R,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);i=Qs(this,r,t,n,l,d,u,_,w,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=r[p.materialIndex],_=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,A=w;M<A;M+=3){const b=M,R=M+1,x=M+2;i=Qs(this,g,t,n,l,d,u,b,R,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=p,w=p+1,M=p+2;i=Qs(this,r,t,n,l,d,u,_,w,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Cd(o,t,e,n,i,s,r,a){let c;if(t.side===qe?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,t.side===ai,a),c===null)return null;Js.copy(a),Js.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Js);return l<e.near||l>e.far?null:{distance:l,point:Js.clone(),object:o}}function Qs(o,t,e,n,i,s,r,a,c,l){o.getVertexPosition(a,js),o.getVertexPosition(c,Ks),o.getVertexPosition(l,$s);const d=Cd(o,t,e,n,js,Ks,$s,wc);if(d){const u=new z;rn.getBarycoord(wc,js,Ks,$s,u),i&&(d.uv=rn.getInterpolatedAttribute(i,a,c,l,u,new $t)),s&&(d.uv1=rn.getInterpolatedAttribute(s,a,c,l,u,new $t)),r&&(d.normal=rn.getInterpolatedAttribute(r,a,c,l,u,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new z,materialIndex:0};rn.getNormal(js,Ks,$s,h.normal),d.face=h,d.barycoord=u}return d}class Rd extends He{constructor(t=null,e=1,n=1,i,s,r,a,c,l=Be,d=Be,u,h){super(null,r,a,c,l,d,i,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hr=new z,Pd=new z,Id=new Jt;let _i=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hr.subVectors(n,e).cross(Pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Id.getNormalMatrix(t),i=this.coplanarPoint(hr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const pi=new Ps,Dd=new $t(.5,.5),to=new z;class Ua{constructor(t=new _i,e=new _i,n=new _i,i=new _i,s=new _i,r=new _i){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){const i=this.planes,s=t.elements,r=s[0],a=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],f=s[7],m=s[8],v=s[9],p=s[10],g=s[11],_=s[12],w=s[13],M=s[14],A=s[15];if(i[0].setComponents(l-r,f-d,g-m,A-_).normalize(),i[1].setComponents(l+r,f+d,g+m,A+_).normalize(),i[2].setComponents(l+a,f+u,g+v,A+w).normalize(),i[3].setComponents(l-a,f-u,g-v,A-w).normalize(),n)i[4].setComponents(c,h,p,M).normalize(),i[5].setComponents(l-c,f-h,g-p,A-M).normalize();else if(i[4].setComponents(l-c,f-h,g-p,A-M).normalize(),e===En)i[5].setComponents(l+c,f+h,g+p,A+M).normalize();else if(e===Ts)i[5].setComponents(c,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);const e=Dd.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(to.x=i.normal.x>0?t.max.x:t.min.x,to.y=i.normal.y>0?t.max.y:t.min.y,to.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fa extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Eo=new z,To=new z,Sc=new Me,fs=new Na,eo=new Ps,dr=new z,bc=new z;class ga extends De{constructor(t=new Se,e=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Eo.fromBufferAttribute(e,i-1),To.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Eo.distanceTo(To);t.setAttribute("lineDistance",new we(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=s,t.ray.intersectsSphere(eo)===!1)return;Sc.copy(i).invert(),fs.copy(t.ray).applyMatrix4(Sc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=f,p=m-1;v<p;v+=l){const g=d.getX(v),_=d.getX(v+1),w=no(this,t,fs,c,g,_,v);w&&e.push(w)}if(this.isLineLoop){const v=d.getX(m-1),p=d.getX(f),g=no(this,t,fs,c,v,p,m-1);g&&e.push(g)}}else{const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let v=f,p=m-1;v<p;v+=l){const g=no(this,t,fs,c,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){const v=no(this,t,fs,c,m-1,f,m-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function no(o,t,e,n,i,s,r){const a=o.geometry.attributes.position;if(Eo.fromBufferAttribute(a,i),To.fromBufferAttribute(a,s),e.distanceSqToSegment(Eo,To,dr,bc)>n)return;dr.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(dr);if(!(l<t.near||l>t.far))return{distance:l,point:bc.clone().applyMatrix4(o.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:o}}class ss extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ec=new Me,va=new Na,io=new Ps,so=new z;class Ei extends De{constructor(t=new Se,e=new ss){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,t.ray.intersectsSphere(io)===!1)return;Ec.copy(i).invert(),va.copy(t.ray).applyMatrix4(Ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=h,v=f;m<v;m++){const p=l.getX(m);so.fromBufferAttribute(u,p),Tc(so,p,c,i,t,e,this)}}else{const h=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=h,v=f;m<v;m++)so.fromBufferAttribute(u,m),Tc(so,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tc(o,t,e,n,i,s,r){const a=va.distanceSqToPoint(o);if(a<e){const c=new z;va.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Zl extends He{constructor(t=[],e=bi,n,i,s,r,a,c,l,d){super(t,e,n,i,s,r,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ld extends He{constructor(t,e,n,i,s,r,a,c,l){super(t,e,n,i,s,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cs extends He{constructor(t,e,n=Cn,i,s,r,a=Be,c=Be,l,d=qn,u=1){if(d!==qn&&d!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,i,s,r,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nd extends Cs{constructor(t,e=Cn,n=bi,i,s,r=Be,a=Be,c,l=qn){const d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,n,i,s,r,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Jl extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ht extends Se{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],d=[],u=[];let h=0,f=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2));function m(v,p,g,_,w,M,A,b,R,x,E){const k=M/R,I=A/x,B=M/2,L=A/2,F=b/2,U=R+1,N=x+1;let G=0,K=0;const q=new z;for(let st=0;st<N;st++){const ot=st*I-L;for(let $=0;$<U;$++){const _t=$*k-B;q[v]=_t*_,q[p]=ot*w,q[g]=F,l.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[g]=b>0?1:-1,d.push(q.x,q.y,q.z),u.push($/R),u.push(1-st/x),G+=1}}for(let st=0;st<x;st++)for(let ot=0;ot<R;ot++){const $=h+ot+U*st,_t=h+ot+U*(st+1),Zt=h+(ot+1)+U*(st+1),Yt=h+(ot+1)+U*st;c.push($,_t,Yt),c.push(_t,Zt,Yt),K+=6}a.addGroup(f,K,E),f+=K,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Po extends Se{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],c=[],l=new z,d=new $t;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(r[h]/t+1)/2,d.y=(r[h+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Se{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const d=[],u=[],h=[],f=[];let m=0;const v=[],p=n/2;let g=0;_(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(f,2));function _(){const M=new z,A=new z;let b=0;const R=(e-t)/n;for(let x=0;x<=s;x++){const E=[],k=x/s,I=k*(e-t)+t;for(let B=0;B<=i;B++){const L=B/i,F=L*c+a,U=Math.sin(F),N=Math.cos(F);A.x=I*U,A.y=-k*n+p,A.z=I*N,u.push(A.x,A.y,A.z),M.set(U,R,N).normalize(),h.push(M.x,M.y,M.z),f.push(L,1-k),E.push(m++)}v.push(E)}for(let x=0;x<i;x++)for(let E=0;E<s;E++){const k=v[E][x],I=v[E+1][x],B=v[E+1][x+1],L=v[E][x+1];(t>0||E!==0)&&(d.push(k,I,L),b+=3),(e>0||E!==s-1)&&(d.push(I,B,L),b+=3)}l.addGroup(g,b,0),g+=b}function w(M){const A=m,b=new $t,R=new z;let x=0;const E=M===!0?t:e,k=M===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,p*k,0),h.push(0,k,0),f.push(.5,.5),m++;const I=m;for(let B=0;B<=i;B++){const F=B/i*c+a,U=Math.cos(F),N=Math.sin(F);R.x=E*N,R.y=p*k,R.z=E*U,u.push(R.x,R.y,R.z),h.push(0,k,0),b.x=U*.5+.5,b.y=N*.5*k+.5,f.push(b.x,b.y),m++}for(let B=0;B<i;B++){const L=A+B,F=I+B;M===!0?d.push(F,F+1,L):d.push(F+1,F,L),x+=3}l.addGroup(g,x,M===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ee extends Qt{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ee(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xn extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,d=c+1,u=t/a,h=e/c,f=[],m=[],v=[],p=[];for(let g=0;g<d;g++){const _=g*h-r;for(let w=0;w<l;w++){const M=w*u-s;m.push(M,-_,0),v.push(0,0,1),p.push(w/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let _=0;_<a;_++){const w=_+l*g,M=_+l*(g+1),A=_+1+l*(g+1),b=_+1+l*g;f.push(w,M,b),f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Oa extends Se{constructor(t=.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],d=[];let u=t;const h=(e-t)/i,f=new z,m=new $t;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const g=s+p/n*r;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,d.push(m.x,m.y)}u+=h}for(let v=0;v<i;v++){const p=v*(n+1);for(let g=0;g<n;g++){const _=g+p,w=_,M=_+n+1,A=_+n+2,b=_+1;a.push(w,M,b),a.push(M,A,b)}}this.setIndex(a),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ht extends Se{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const d=[],u=new z,h=new z,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){const _=[],w=g/n;let M=0;g===0&&r===0?M=.5/e:g===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(i+b*s)*Math.sin(r+w*a),u.y=t*Math.cos(r+w*a),u.z=t*Math.sin(i+b*s)*Math.sin(r+w*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),p.push(b+M,1-w),_.push(l++)}d.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){const w=d[g][_+1],M=d[g][_],A=d[g+1][_],b=d[g+1][_+1];(g!==0||r>0)&&f.push(w,M,b),(g!==n-1||c<Math.PI)&&f.push(M,A,b)}this.setIndex(f),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ht(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $e extends Se{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],d=[],u=[],h=new z,f=new z,m=new z;for(let v=0;v<=n;v++){const p=r+v/n*a;for(let g=0;g<=i;g++){const _=g/i*s;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),m.subVectors(f,h).normalize(),d.push(m.x,m.y,m.z),u.push(g/i),u.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=i;p++){const g=(i+1)*v+p-1,_=(i+1)*(v-1)+p-1,w=(i+1)*(v-1)+p,M=(i+1)*v+p;c.push(g,_,M),c.push(_,w,M)}this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ts(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(o){const t={};for(let e=0;e<o.length;e++){const n=ts(o[e]);for(const i in n)t[i]=n[i]}return t}function Ud(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Ql(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Fd={clone:ts,merge:Ye};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zd extends Rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nt extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ce extends jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gd extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kd extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ba extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const ur=new Me,Ac=new z,Cc=new z;class th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ts||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const oo=new z,ro=new is,vn=new z;class eh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oo,ro,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ro,vn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(oo,ro,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ro,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new z,Rc=new $t,Pc=new $t;class tn extends eh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Pc),e.subVectors(Pc,Rc)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Go*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Vd extends th{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class es extends Ba{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class za extends eh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hd extends th{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wd extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Hd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Xd extends Ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hi=-90,Wi=1;class Yd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Hi,Wi,t,e);i.layers=this.layers,this.add(i);const s=new tn(Hi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new tn(Hi,Wi,t,e);r.layers=this.layers,this.add(r);const a=new tn(Hi,Wi,t,e);a.layers=this.layers,this.add(a);const c=new tn(Hi,Wi,t,e);c.layers=this.layers,this.add(c);const l=new tn(Hi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,c]=e;for(const l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qd extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Ic(o,t,e,n){const i=jd(n);switch(e){case Gl:return o*t;case Vl:return o*t/i.components*i.byteLength;case Ta:return o*t/i.components*i.byteLength;case Ji:return o*t*2/i.components*i.byteLength;case Aa:return o*t*2/i.components*i.byteLength;case kl:return o*t*3/i.components*i.byteLength;case fn:return o*t*4/i.components*i.byteLength;case Ca:return o*t*4/i.components*i.byteLength;case mo:case go:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case vo:case _o:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Or:case zr:return Math.max(o,16)*Math.max(t,8)/4;case Fr:case Br:return Math.max(o,8)*Math.max(t,8)/2;case Gr:case kr:case Hr:case Wr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Xr:case Yr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jr:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case aa:case ca:case la:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ha:case da:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ua:case fa:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jd(o){switch(o){case en:case Fl:return{byteLength:1,components:1};case bs:case Ol:case Yn:return{byteLength:2,components:1};case ba:case Ea:return{byteLength:2,components:4};case Cn:case Sa:case bn:return{byteLength:4,components:1};case Bl:case zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nh(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Kd(o){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,u=l.byteLength,h=o.createBuffer();o.bindBuffer(c,h),o.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=o.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=o.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=o.SHORT;else if(l instanceof Uint32Array)f=o.UNSIGNED_INT;else if(l instanceof Int32Array)f=o.INT;else if(l instanceof Int8Array)f=o.BYTE;else if(l instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const d=c.array,u=c.updateRanges;if(o.bindBuffer(l,a),u.length===0)o.bufferSubData(l,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){const m=u[h],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];o.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(o.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:r}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nu=`#ifdef USE_AOMAP
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
#endif`,iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`#ifdef USE_BATCHING
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
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lu=`#ifdef USE_IRIDESCENCE
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
#endif`,hu=`#ifdef USE_BUMPMAP
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xu=`#define PI 3.141592653589793
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
} // validated`,yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mu=`vec3 transformedNormal = objectNormal;
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
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
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
}`,Bu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
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
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
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
#endif`,ju=`uniform sampler2D dfgLUT;
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
}`,Ku=`
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rf=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
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
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
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
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uf=`float getShadowMask() {
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
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zf=`uniform sampler2D t2D;
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
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
}`,ip=`#if DEPTH_PACKING == 3200
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
}`,sp=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,lp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,up=`#define LAMBERT
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
}`,fp=`#define LAMBERT
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
}`,pp=`#define MATCAP
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
}`,mp=`#define MATCAP
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
}`,gp=`#define NORMAL
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
}`,vp=`#define NORMAL
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
}`,_p=`#define PHONG
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
}`,xp=`#define PHONG
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
}`,yp=`#define STANDARD
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
}`,Mp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Sp=`#define TOON
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
}`,bp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Ap=`uniform vec3 color;
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
}`,Cp=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:$d,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:tu,alphatest_pars_fragment:eu,aomap_fragment:nu,aomap_pars_fragment:iu,batching_pars_vertex:su,batching_vertex:ou,begin_vertex:ru,beginnormal_vertex:au,bsdfs:cu,iridescence_fragment:lu,bumpmap_pars_fragment:hu,clipping_planes_fragment:du,clipping_planes_pars_fragment:uu,clipping_planes_pars_vertex:fu,clipping_planes_vertex:pu,color_fragment:mu,color_pars_fragment:gu,color_pars_vertex:vu,color_vertex:_u,common:xu,cube_uv_reflection_fragment:yu,defaultnormal_vertex:Mu,displacementmap_pars_vertex:wu,displacementmap_vertex:Su,emissivemap_fragment:bu,emissivemap_pars_fragment:Eu,colorspace_fragment:Tu,colorspace_pars_fragment:Au,envmap_fragment:Cu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Pu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Vu,envmap_vertex:Du,fog_vertex:Lu,fog_pars_vertex:Nu,fog_fragment:Uu,fog_pars_fragment:Fu,gradientmap_pars_fragment:Ou,lightmap_pars_fragment:Bu,lights_lambert_fragment:zu,lights_lambert_pars_fragment:Gu,lights_pars_begin:ku,lights_toon_fragment:Hu,lights_toon_pars_fragment:Wu,lights_phong_fragment:Xu,lights_phong_pars_fragment:Yu,lights_physical_fragment:qu,lights_physical_pars_fragment:ju,lights_fragment_begin:Ku,lights_fragment_maps:$u,lights_fragment_end:Zu,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:Qu,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:of,map_particle_pars_fragment:rf,metalnessmap_fragment:af,metalnessmap_pars_fragment:cf,morphinstance_vertex:lf,morphcolor_vertex:hf,morphnormal_vertex:df,morphtarget_pars_vertex:uf,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:vf,normal_vertex:_f,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Sf,opaque_fragment:bf,packing:Ef,premultiplied_alpha_fragment:Tf,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Rf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Lf,shadowmap_vertex:Nf,shadowmask_pars_fragment:Uf,skinbase_vertex:Ff,skinning_pars_vertex:Of,skinning_vertex:Bf,skinnormal_vertex:zf,specularmap_fragment:Gf,specularmap_pars_fragment:kf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Hf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:Yf,uv_pars_vertex:qf,uv_vertex:jf,worldpos_vertex:Kf,background_vert:$f,background_frag:Zf,backgroundCube_vert:Jf,backgroundCube_frag:Qf,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distance_vert:sp,distance_frag:op,equirect_vert:rp,equirect_frag:ap,linedashed_vert:cp,linedashed_frag:lp,meshbasic_vert:hp,meshbasic_frag:dp,meshlambert_vert:up,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:vp,meshphong_vert:_p,meshphong_frag:xp,meshphysical_vert:yp,meshphysical_frag:Mp,meshtoon_vert:wp,meshtoon_frag:Sp,points_vert:bp,points_frag:Ep,shadow_vert:Tp,shadow_frag:Ap,sprite_vert:Cp,sprite_frag:Rp},ft={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},wn={basic:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ye([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ye([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ye([ft.points,ft.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ye([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ye([ft.common,ft.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ye([ft.sprite,ft.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Ye([ft.common,ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Ye([ft.lights,ft.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};wn.physical={uniforms:Ye([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const ao={r:0,b:0,g:0},mi=new mn,Pp=new Me;function Ip(o,t,e,n,i,s){const r=new Ut(0);let a=i===!0?0:1,c,l,d=null,u=0,h=null;function f(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){const M=_.backgroundBlurriness>0;w=t.get(w,M)}return w}function m(_){let w=!1;const M=f(_);M===null?p(r,a):M&&M.isColor&&(p(M,1),w=!0);const A=o.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(o.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function v(_,w){const M=f(w);M&&(M.isCubeTexture||M.mapping===Ro)?(l===void 0&&(l=new D(new Ht(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ts(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),mi.copy(w.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(mi)),l.material.toneMapped=ae.getTransfer(M.colorSpace)!==ue,(d!==M||u!==M.version||h!==o.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,h=o.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new D(new Xn(2,2),new Rn({name:"BackgroundMaterial",uniforms:ts(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ae.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,h=o.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,w){_.getRGB(ao,Ql(o)),e.buffers.color.setClear(ao.r,ao.g,ao.b,w,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,w=1){r.set(_),a=w,p(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(r,a)},render:m,addToRenderList:v,dispose:g}}function Dp(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,r=!1;function a(I,B,L,F,U){let N=!1;const G=u(I,F,L,B);s!==G&&(s=G,l(s.object)),N=f(I,F,L,U),N&&m(I,F,L,U),U!==null&&t.update(U,o.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,M(I,B,L,F),U!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return o.createVertexArray()}function l(I){return o.bindVertexArray(I)}function d(I){return o.deleteVertexArray(I)}function u(I,B,L,F){const U=F.wireframe===!0;let N=n[B.id];N===void 0&&(N={},n[B.id]=N);const G=I.isInstancedMesh===!0?I.id:0;let K=N[G];K===void 0&&(K={},N[G]=K);let q=K[L.id];q===void 0&&(q={},K[L.id]=q);let st=q[U];return st===void 0&&(st=h(c()),q[U]=st),st}function h(I){const B=[],L=[],F=[];for(let U=0;U<e;U++)B[U]=0,L[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:L,attributeDivisors:F,object:I,attributes:{},index:null}}function f(I,B,L,F){const U=s.attributes,N=B.attributes;let G=0;const K=L.getAttributes();for(const q in K)if(K[q].location>=0){const ot=U[q];let $=N[q];if($===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),ot===void 0||ot.attribute!==$||$&&ot.data!==$.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function m(I,B,L,F){const U={},N=B.attributes;let G=0;const K=L.getAttributes();for(const q in K)if(K[q].location>=0){let ot=N[q];ot===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor));const $={};$.attribute=ot,ot&&ot.data&&($.data=ot.data),U[q]=$,G++}s.attributes=U,s.attributesNum=G,s.index=F}function v(){const I=s.newAttributes;for(let B=0,L=I.length;B<L;B++)I[B]=0}function p(I){g(I,0)}function g(I,B){const L=s.newAttributes,F=s.enabledAttributes,U=s.attributeDivisors;L[I]=1,F[I]===0&&(o.enableVertexAttribArray(I),F[I]=1),U[I]!==B&&(o.vertexAttribDivisor(I,B),U[I]=B)}function _(){const I=s.newAttributes,B=s.enabledAttributes;for(let L=0,F=B.length;L<F;L++)B[L]!==I[L]&&(o.disableVertexAttribArray(L),B[L]=0)}function w(I,B,L,F,U,N,G){G===!0?o.vertexAttribIPointer(I,B,L,U,N):o.vertexAttribPointer(I,B,L,F,U,N)}function M(I,B,L,F){v();const U=F.attributes,N=L.getAttributes(),G=B.defaultAttributeValues;for(const K in N){const q=N[K];if(q.location>=0){let st=U[K];if(st===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),st!==void 0){const ot=st.normalized,$=st.itemSize,_t=t.get(st);if(_t===void 0)continue;const Zt=_t.buffer,Yt=_t.type,Z=_t.bytesPerElement,it=Yt===o.INT||Yt===o.UNSIGNED_INT||st.gpuType===Sa;if(st.isInterleavedBufferAttribute){const nt=st.data,Ot=nt.stride,Tt=st.offset;if(nt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<q.locationSize;Bt++)g(q.location+Bt,nt.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Bt=0;Bt<q.locationSize;Bt++)p(q.location+Bt);o.bindBuffer(o.ARRAY_BUFFER,Zt);for(let Bt=0;Bt<q.locationSize;Bt++)w(q.location+Bt,$/q.locationSize,Yt,ot,Ot*Z,(Tt+$/q.locationSize*Bt)*Z,it)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<q.locationSize;nt++)g(q.location+nt,st.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<q.locationSize;nt++)p(q.location+nt);o.bindBuffer(o.ARRAY_BUFFER,Zt);for(let nt=0;nt<q.locationSize;nt++)w(q.location+nt,$/q.locationSize,Yt,ot,$*Z,$/q.locationSize*nt*Z,it)}}else if(G!==void 0){const ot=G[K];if(ot!==void 0)switch(ot.length){case 2:o.vertexAttrib2fv(q.location,ot);break;case 3:o.vertexAttrib3fv(q.location,ot);break;case 4:o.vertexAttrib4fv(q.location,ot);break;default:o.vertexAttrib1fv(q.location,ot)}}}}_()}function A(){E();for(const I in n){const B=n[I];for(const L in B){const F=B[L];for(const U in F){const N=F[U];for(const G in N)d(N[G].object),delete N[G];delete F[U]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const B=n[I.id];for(const L in B){const F=B[L];for(const U in F){const N=F[U];for(const G in N)d(N[G].object),delete N[G];delete F[U]}}delete n[I.id]}function R(I){for(const B in n){const L=n[B];for(const F in L){const U=L[F];if(U[I.id]===void 0)continue;const N=U[I.id];for(const G in N)d(N[G].object),delete N[G];delete U[I.id]}}}function x(I){for(const B in n){const L=n[B],F=I.isInstancedMesh===!0?I.id:0,U=L[F];if(U!==void 0){for(const N in U){const G=U[N];for(const K in G)d(G[K].object),delete G[K];delete U[N]}delete L[F],Object.keys(L).length===0&&delete n[B]}}}function E(){k(),r=!0,s!==i&&(s=i,l(s.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function Lp(o,t,e){let n;function i(l){n=l}function s(l,d){o.drawArrays(n,l,d),e.update(d,n,1)}function r(l,d,u){u!==0&&(o.drawArraysInstanced(n,l,d,u),e.update(d,n,u))}function a(l,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];e.update(f,n,1)}function c(l,d,u,h){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=d[v]*h[v];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Np(o,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){return!(R!==fn&&n.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bn&&!x)}function c(R){if(R==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(Xt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),m=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),p=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),_=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),M=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=o.getParameter(o.MAX_SAMPLES),b=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:M,maxSamples:A,samples:b}}function Up(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new _i,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=o.get(u);if(!i||m===null||m.length===0||s&&!p)s?d(null):l();else{const _=s?0:n,w=_*4;let M=g.clippingState||null;c.value=M,M=d(m,h,w,f);for(let A=0;A!==w;++A)M[A]=e[A];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,f,m){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=c.value,m!==!0||p===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,M=f;w!==v;++w,M+=4)r.copy(u[w]).applyMatrix4(_,a),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const oi=4,Dc=[.125,.215,.35,.446,.526,.582],yi=20,Fp=256,ps=new za,Lc=new Ut;let fr=null,pr=0,mr=0,gr=!1;const Op=new z;class Nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:r=256,position:a=Op}=s;fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(fr,pr,mr),this._renderer.xr.enabled=gr,t.scissorTest=!1,Xi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Yn,format:fn,colorSpace:Qi,depthBuffer:!1},i=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Bp(s)),this._blurMaterial=Gp(s,t,e),this._ggxMaterial=zp(s,t,e)}return i}_compileMaterial(t){const e=new D(new Se,t);this._renderer.compile(e,ps)}_sceneToCubeUV(t,e,n,i,s){const c=new tn(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Lc),u.toneMapping=Tn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new D(new Ht,new Pt({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let g=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,g=!0):(p.color.copy(Lc),g=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[w],s.y,s.z)):M===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[w]));const A=this._cubeSize;Xi(i,M*A,w>2?A:0,A,A),u.setRenderTarget(i),g&&u.render(v,c),u.render(t,c)}u.toneMapping=f,u.autoClear=h,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Xi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;const c=r.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-d*d),h=0+l*1.25,f=u*h,{_lodMax:m}=this,v=this._sizeLods[n],p=3*v*(n>m-oi?n-m+oi:0),g=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,Xi(s,p,g,3*v,2*v),i.setRenderTarget(s),i.render(a,ps),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Xi(t,p,g,3*v,2*v),i.setRenderTarget(t),i.render(a,ps)}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&re("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[i];u.material=l;const h=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yi-1),v=s/m,p=isFinite(s)?1+Math.floor(d*v):yi;p>yi&&Xt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yi}`);const g=[];let _=0;for(let R=0;R<yi;++R){const x=R/v,E=Math.exp(-x*x/2);g.push(E),R===0?_+=E:R<p&&(_+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/_;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=m,h.mipInt.value=w-n;const M=this._sizeLods[i],A=3*M*(i>w-oi?i-w+oi:0),b=4*(this._cubeSize-M);Xi(e,A,b,3*M,2*M),c.setRenderTarget(e),c.render(u,ps)}}function Bp(o){const t=[],e=[],n=[];let i=o;const s=o-oi+1+Dc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let c=1/a;r>o-oi?c=Dc[r-o+oi-1]:r===0&&(c=0),e.push(c);const l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,v=3,p=2,g=1,_=new Float32Array(v*m*f),w=new Float32Array(p*m*f),M=new Float32Array(g*m*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,x=b>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];_.set(E,v*m*b),w.set(h,p*m*b);const k=[b,b,b,b,b,b];M.set(k,g*m*b)}const A=new Se;A.setAttribute("position",new We(_,v)),A.setAttribute("uv",new We(w,p)),A.setAttribute("faceIndex",new We(M,g)),n.push(new D(A,null)),i>oi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Uc(o,t,e){const n=new An(o,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xi(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function zp(o,t,e){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Gp(o,t,e){const n=new Float32Array(yi),i=new z(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Fc(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Oc(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}class ih extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ht(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Hn});s.uniforms.tEquirect.value=e;const r=new D(i,s),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Ve),new Yd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function kp(o){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?r(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Oo||f===Bo)if(t.has(h)){const m=t.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new ih(m.height);return v.fromEquirectangularTexture(o,h),t.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){const f=h.mapping,m=f===Oo||f===Bo,v=f===bi||f===Zi;if(m||v){let p=e.get(h);const g=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Nc(o)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const _=h.image;return m&&_&&_.height>0||v&&_&&c(_)?(n===null&&(n=new Nc(o)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",d),p.texture):null}}}return h}function a(h,f){return f===Oo?h.mapping=bi:f===Bo&&(h.mapping=Zi),h}function c(h){let f=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&f++;return f===m}function l(h){const f=h.target;f.removeEventListener("dispose",l);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Vp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=o.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&So("WebGLRenderer: "+n+" extension not supported."),i}}}function Hp(o,t,e,n){const i={},s=new WeakMap;function r(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",r),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)t.update(h[f],o.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,m=u.attributes.position;let v=0;if(m===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let w=0,M=_.length;w<M;w+=3){const A=_[w+0],b=_[w+1],R=_[w+2];h.push(A,b,b,R,R,A)}}else{const _=m.array;v=m.version;for(let w=0,M=_.length/3-1;w<M;w+=3){const A=w+0,b=w+1,R=w+2;h.push(A,b,b,R,R,A)}}const p=new(m.count>=65535?jl:ql)(h,1);p.version=v;const g=s.get(u);g&&t.remove(g),s.set(u,p)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function Wp(o,t,e){let n;function i(h){n=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function c(h,f){o.drawElements(n,f,s,h*r),e.update(f,n,1)}function l(h,f,m){m!==0&&(o.drawElementsInstanced(n,f,s,h*r,m),e.update(f,n,m))}function d(h,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];e.update(p,n,1)}function u(h,f,m,v){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)l(h[g]/r,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,v,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_]*v[_];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Xp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:re("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Yp(o,t,e){const n=new WeakMap,i=new Te;function s(r,a,c){const l=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let k=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",k)};var f=k;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*b*4*u),x=new Wl(R,A,b,u);x.type=bn,x.needsUpdate=!0;const E=M*4;for(let I=0;I<u;I++){const B=g[I],L=_[I],F=w[I],U=A*b*4*I;for(let N=0;N<B.count;N++){const G=N*E;m===!0&&(i.fromBufferAttribute(B,N),R[U+G+0]=i.x,R[U+G+1]=i.y,R[U+G+2]=i.z,R[U+G+3]=0),v===!0&&(i.fromBufferAttribute(L,N),R[U+G+4]=i.x,R[U+G+5]=i.y,R[U+G+6]=i.z,R[U+G+7]=0),p===!0&&(i.fromBufferAttribute(F,N),R[U+G+8]=i.x,R[U+G+9]=i.y,R[U+G+10]=i.z,R[U+G+11]=F.itemSize===4?i.w:1)}}h={count:u,texture:x,size:new $t(A,b)},n.set(a,h),a.addEventListener("dispose",k)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(o,"morphTargetBaseInfluence",v),c.getUniforms().setValue(o,"morphTargetInfluences",l)}c.getUniforms().setValue(o,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:s}}function qp(o,t,e,n,i){let s=new WeakMap;function r(l){const d=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==d&&(t.update(h),s.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function a(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:a}}const jp={[Cl]:"LINEAR_TONE_MAPPING",[Rl]:"REINHARD_TONE_MAPPING",[Pl]:"CINEON_TONE_MAPPING",[Il]:"ACES_FILMIC_TONE_MAPPING",[Ll]:"AGX_TONE_MAPPING",[Nl]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function Kp(o,t,e,n,i){const s=new An(t,e,{type:o,depthBuffer:n,stencilBuffer:i}),r=new An(t,e,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),a=new Se;a.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new we([0,2,0,0,2,0],2));const c=new zd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new D(a,c),d=new za(-1,1,1,-1,0,1);let u=null,h=null,f=!1,m,v=null,p=[],g=!1;this.setSize=function(_,w){s.setSize(_,w),r.setSize(_,w);for(let M=0;M<p.length;M++){const A=p[M];A.setSize&&A.setSize(_,w)}},this.setEffects=function(_){p=_,g=p.length>0&&p[0].isRenderPass===!0;const w=s.width,M=s.height;for(let A=0;A<p.length;A++){const b=p[A];b.setSize&&b.setSize(w,M)}},this.begin=function(_,w){if(f||_.toneMapping===Tn&&p.length===0)return!1;if(v=w,w!==null){const M=w.width,A=w.height;(s.width!==M||s.height!==A)&&this.setSize(M,A)}return g===!1&&_.setRenderTarget(s),m=_.toneMapping,_.toneMapping=Tn,!0},this.hasRenderPass=function(){return g},this.end=function(_,w){_.toneMapping=m,f=!0;let M=s,A=r;for(let b=0;b<p.length;b++){const R=p[b];if(R.enabled!==!1&&(R.render(_,A,M,w),R.needsSwap!==!1)){const x=M;M=A,A=x}}if(u!==_.outputColorSpace||h!==_.toneMapping){u=_.outputColorSpace,h=_.toneMapping,c.defines={},ae.getTransfer(u)===ue&&(c.defines.SRGB_TRANSFER="");const b=jp[h];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(v),_.render(l,d),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),r.dispose(),a.dispose(),c.dispose()}}const sh=new He,_a=new Cs(1,1),oh=new Wl,rh=new pd,ah=new Zl,Bc=[],zc=[],Gc=new Float32Array(16),kc=new Float32Array(9),Vc=new Float32Array(4);function os(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=Bc[i];if(s===void 0&&(s=new Float32Array(i),Bc[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function Le(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ne(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Do(o,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function $p(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Zp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;o.uniform2fv(this.addr,t),Ne(e,t)}}function Jp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;o.uniform3fv(this.addr,t),Ne(e,t)}}function Qp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;o.uniform4fv(this.addr,t),Ne(e,t)}}function tm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;Vc.set(n),o.uniformMatrix2fv(this.addr,!1,Vc),Ne(e,n)}}function em(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;kc.set(n),o.uniformMatrix3fv(this.addr,!1,kc),Ne(e,n)}}function nm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Le(e,n))return;Gc.set(n),o.uniformMatrix4fv(this.addr,!1,Gc),Ne(e,n)}}function im(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function sm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;o.uniform2iv(this.addr,t),Ne(e,t)}}function om(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;o.uniform3iv(this.addr,t),Ne(e,t)}}function rm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;o.uniform4iv(this.addr,t),Ne(e,t)}}function am(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function cm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;o.uniform2uiv(this.addr,t),Ne(e,t)}}function lm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;o.uniform3uiv(this.addr,t),Ne(e,t)}}function hm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;o.uniform4uiv(this.addr,t),Ne(e,t)}}function dm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(_a.compareFunction=e.isReversedDepthBuffer()?Ia:Pa,s=_a):s=sh,e.setTexture2D(t||s,i)}function um(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rh,i)}function fm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ah,i)}function pm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||oh,i)}function mm(o){switch(o){case 5126:return $p;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return rm;case 5125:return am;case 36294:return cm;case 36295:return lm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(o,t){o.uniform1fv(this.addr,t)}function vm(o,t){const e=os(t,this.size,2);o.uniform2fv(this.addr,e)}function _m(o,t){const e=os(t,this.size,3);o.uniform3fv(this.addr,e)}function xm(o,t){const e=os(t,this.size,4);o.uniform4fv(this.addr,e)}function ym(o,t){const e=os(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Mm(o,t){const e=os(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function wm(o,t){const e=os(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Sm(o,t){o.uniform1iv(this.addr,t)}function bm(o,t){o.uniform2iv(this.addr,t)}function Em(o,t){o.uniform3iv(this.addr,t)}function Tm(o,t){o.uniform4iv(this.addr,t)}function Am(o,t){o.uniform1uiv(this.addr,t)}function Cm(o,t){o.uniform2uiv(this.addr,t)}function Rm(o,t){o.uniform3uiv(this.addr,t)}function Pm(o,t){o.uniform4uiv(this.addr,t)}function Im(o,t,e){const n=this.cache,i=t.length,s=Do(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),Ne(n,s));let r;this.type===o.SAMPLER_2D_SHADOW?r=_a:r=sh;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,s[a])}function Dm(o,t,e){const n=this.cache,i=t.length,s=Do(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),Ne(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||rh,s[r])}function Lm(o,t,e){const n=this.cache,i=t.length,s=Do(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),Ne(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||ah,s[r])}function Nm(o,t,e){const n=this.cache,i=t.length,s=Do(e,i);Le(n,s)||(o.uniform1iv(this.addr,s),Ne(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||oh,s[r])}function Um(o){switch(o){case 5126:return gm;case 35664:return vm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return Mm;case 35676:return wm;case 5124:case 35670:return Sm;case 35667:case 35671:return bm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Cm;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Fm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mm(e.type)}}class Om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Um(e.type)}}class Bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const vr=/(\w+)(\])?(\[|\.)?/g;function Hc(o,t){o.seq.push(t),o.map[t.id]=t}function zm(o,t,e){const n=o.name,i=n.length;for(vr.lastIndex=0;;){const s=vr.exec(n),r=vr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Hc(e,l===void 0?new Fm(a,o,t):new Om(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new Bm(a),Hc(e,u)),e=u}}}class xo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),c=t.getUniformLocation(e,a.name);zm(a,c,this)}const i=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Wc(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const Gm=37297;let km=0;function Vm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Xc=new Jt;function Hm(o){ae._getMatrix(Xc,ae.workingColorSpace,o);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(o)){case yo:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Yc(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),s=(o.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vm(o.getShaderSource(t),a)}else return s}function Wm(o,t){const e=Hm(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Xm={[Cl]:"Linear",[Rl]:"Reinhard",[Pl]:"Cineon",[Il]:"ACESFilmic",[Ll]:"AgX",[Nl]:"Neutral",[Dl]:"Custom"};function Ym(o,t){const e=Xm[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const co=new z;function qm(){ae.getLuminanceCoefficients(co);const o=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Km(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Ms(o){return o!==""}function qc(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(o){return o.replace(Zm,Qm)}const Jm=new Map;function Qm(o,t){let e=ee[t];if(e===void 0){const n=Jm.get(t);if(n!==void 0)e=ee[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xa(e)}const t0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(o){return o.replace(t0,e0)}function e0(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $c(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const n0={[ws]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function i0(o){return n0[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s0={[bi]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function o0(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":s0[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const r0={[Zi]:"ENVMAP_MODE_REFRACTION"};function a0(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":r0[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const c0={[wa]:"ENVMAP_BLENDING_MULTIPLY",[qh]:"ENVMAP_BLENDING_MIX",[jh]:"ENVMAP_BLENDING_ADD"};function l0(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":c0[o.combine]||"ENVMAP_BLENDING_NONE"}function h0(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function d0(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=i0(e),l=o0(e),d=a0(e),u=l0(e),h=h0(e),f=jm(e),m=Km(s),v=i.createProgram();let p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ms).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ms).join(`
`),g.length>0&&(g+=`
`)):(p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),g=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Wm("linearToOutputTexel",e.outputColorSpace),qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),r=xa(r),r=qc(r,e),r=jc(r,e),a=xa(a),a=qc(a,e),a=jc(a,e),r=Kc(r),a=Kc(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=_+p+r,M=_+g+a,A=Wc(i,i.VERTEX_SHADER,w),b=Wc(i,i.FRAGMENT_SHADER,M);i.attachShader(v,A),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function R(I){if(o.debug.checkShaderErrors){const B=i.getProgramInfoLog(v)||"",L=i.getShaderInfoLog(A)||"",F=i.getShaderInfoLog(b)||"",U=B.trim(),N=L.trim(),G=F.trim();let K=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,v,A,b);else{const st=Yc(i,A,"vertex"),ot=Yc(i,b,"fragment");re("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+st+`
`+ot)}else U!==""?Xt("WebGLProgram: Program Info Log:",U):(N===""||G==="")&&(q=!1);q&&(I.diagnostics={runnable:K,programLog:U,vertexShader:{log:N,prefix:p},fragmentShader:{log:G,prefix:g}})}i.deleteShader(A),i.deleteShader(b),x=new xo(i,v),E=$m(i,v)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(v,Gm)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=km++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=b,this}let u0=0;class f0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new p0(t),e.set(t,n)),n}}class p0{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}}function m0(o,t,e,n,i,s){const r=new Xl,a=new f0,c=new Set,l=[],d=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,E,k,I,B){const L=I.fog,F=B.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||U,N),K=G&&G.mapping===Ro?G.image.height:null,q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const st=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=st!==void 0?st.length:0;let $=0;F.morphAttributes.position!==void 0&&($=1),F.morphAttributes.normal!==void 0&&($=2),F.morphAttributes.color!==void 0&&($=3);let _t,Zt,Yt,Z;if(q){const de=wn[q];_t=de.vertexShader,Zt=de.fragmentShader}else _t=x.vertexShader,Zt=x.fragmentShader,a.update(x),Yt=a.getVertexShaderID(x),Z=a.getFragmentShaderID(x);const it=o.getRenderTarget(),nt=o.state.buffers.depth.getReversed(),Ot=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,Bt=!!x.map,fe=!!x.matcap,te=!!G,Dt=!!x.aoMap,zt=!!x.lightMap,kt=!!x.bumpMap,jt=!!x.normalMap,O=!!x.displacementMap,pe=!!x.emissiveMap,Gt=!!x.metalnessMap,Wt=!!x.roughnessMap,gt=x.anisotropy>0,P=x.clearcoat>0,y=x.dispersion>0,H=x.iridescence>0,tt=x.sheen>0,et=x.transmission>0,Q=gt&&!!x.anisotropyMap,St=P&&!!x.clearcoatMap,dt=P&&!!x.clearcoatNormalMap,Ft=P&&!!x.clearcoatRoughnessMap,Vt=H&&!!x.iridescenceMap,rt=H&&!!x.iridescenceThicknessMap,ct=tt&&!!x.sheenColorMap,bt=tt&&!!x.sheenRoughnessMap,At=!!x.specularMap,vt=!!x.specularColorMap,ne=!!x.specularIntensityMap,V=et&&!!x.transmissionMap,ut=et&&!!x.thicknessMap,lt=!!x.gradientMap,yt=!!x.alphaMap,at=x.alphaTest>0,J=!!x.alphaHash,Et=!!x.extensions;let qt=Tn;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(qt=o.toneMapping);const xe={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:_t,fragmentShader:Zt,defines:x.defines,customVertexShaderID:Yt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&B.instanceColor!==null,instancingMorph:Ot&&B.morphTexture!==null,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Qi,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:fe,envMap:te,envMapMode:te&&G.mapping,envMapCubeUVHeight:K,aoMap:Dt,lightMap:zt,bumpMap:kt,normalMap:jt,displacementMap:O,emissiveMap:pe,normalMapObjectSpace:jt&&x.normalMapType===Zh,normalMapTangentSpace:jt&&x.normalMapType===Ra,metalnessMap:Gt,roughnessMap:Wt,anisotropy:gt,anisotropyMap:Q,clearcoat:P,clearcoatMap:St,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ft,dispersion:y,iridescence:H,iridescenceMap:Vt,iridescenceThicknessMap:rt,sheen:tt,sheenColorMap:ct,sheenRoughnessMap:bt,specularMap:At,specularColorMap:vt,specularIntensityMap:ne,transmission:et,transmissionMap:V,thicknessMap:ut,gradientMap:lt,opaque:x.transparent===!1&&x.blending===ji&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:at,alphaHash:J,combine:x.combine,mapUv:Bt&&m(x.map.channel),aoMapUv:Dt&&m(x.aoMap.channel),lightMapUv:zt&&m(x.lightMap.channel),bumpMapUv:kt&&m(x.bumpMap.channel),normalMapUv:jt&&m(x.normalMap.channel),displacementMapUv:O&&m(x.displacementMap.channel),emissiveMapUv:pe&&m(x.emissiveMap.channel),metalnessMapUv:Gt&&m(x.metalnessMap.channel),roughnessMapUv:Wt&&m(x.roughnessMap.channel),anisotropyMapUv:Q&&m(x.anisotropyMap.channel),clearcoatMapUv:St&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&m(x.sheenRoughnessMap.channel),specularMapUv:At&&m(x.specularMap.channel),specularColorMapUv:vt&&m(x.specularColorMap.channel),specularIntensityMapUv:ne&&m(x.specularIntensityMap.channel),transmissionMapUv:V&&m(x.transmissionMap.channel),thicknessMapUv:ut&&m(x.thicknessMap.channel),alphaMapUv:yt&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(jt||gt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Bt||yt),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:nt,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:$,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:qt,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:pe&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===un,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&x.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)E.push(k),E.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(g(E,x),_(E,x),E.push(o.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function _(x,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),x.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),x.push(r.mask)}function w(x){const E=f[x.type];let k;if(E){const I=wn[E];k=Fd.clone(I.uniforms)}else k=x.uniforms;return k}function M(x,E){let k=d.get(E);return k!==void 0?++k.usedTimes:(k=new d0(o,E,x,i),l.push(k),d.set(E,k)),k}function A(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:R}}function g0(){let o=new WeakMap;function t(r){return o.has(r)}function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,c){o.get(r)[a]=c}function s(){o=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function v0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Zc(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Jc(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,v,p,g){let _=o[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,materialVariant:r(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:g},o[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.materialVariant=r(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=p,_.group=g),t++,_}function c(h,f,m,v,p,g){const _=a(h,f,m,v,p,g);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(h,f,m,v,p,g){const _=a(h,f,m,v,p,g);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function d(h,f){e.length>1&&e.sort(h||v0),n.length>1&&n.sort(f||Zc),i.length>1&&i.sort(f||Zc)}function u(){for(let h=t,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:d}}function _0(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new Jc,o.set(n,[r])):i>=s.length?(r=new Jc,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function x0(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Ut};break;case"SpotLight":e={position:new z,direction:new z,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new z,halfWidth:new z,halfHeight:new z};break}return o[t.id]=e,e}}}function y0(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let M0=0;function w0(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function S0(o){const t=new x0,e=y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,s=new Me,r=new Me;function a(l){let d=0,u=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,w=0,M=0,A=0,b=0,R=0;l.sort(w0);for(let E=0,k=l.length;E<k;E++){const I=l[E],B=I.color,L=I.intensity,F=I.distance;let U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ji?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=B.r*L,u+=B.g*L,h+=B.b*L;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],L);R++}else if(I.isDirectionalLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const G=I.shadow,K=e.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=N,f++}else if(I.isSpotLight){const N=t.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(B).multiplyScalar(L),N.distance=F,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[v]=N;const G=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,G.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[v]=G.matrix,I.castShadow){const K=e.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=U,M++}v++}else if(I.isRectAreaLight){const N=t.get(I);N.color.copy(B).multiplyScalar(L),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=N,p++}else if(I.isPointLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const G=I.shadow,K=e.get(I);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=N,m++}else if(I.isHemisphereLight){const N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(L),N.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[g]=N,g++}}p>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==g||x.numDirectionalShadows!==_||x.numPointShadows!==w||x.numSpotShadows!==M||x.numSpotMaps!==A||x.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,x.directionalLength=f,x.pointLength=m,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=g,x.numDirectionalShadows=_,x.numPointShadows=w,x.numSpotShadows=M,x.numSpotMaps=A,x.numLightProbes=R,n.version=M0++)}function c(l,d){let u=0,h=0,f=0,m=0,v=0;const p=d.matrixWorldInverse;for(let g=0,_=l.length;g<_;g++){const w=l[g];if(w.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(w.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(w.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),r.identity(),s.copy(w.matrixWorld),s.premultiply(p),r.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(w.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function Qc(o){const t=new S0(o),e=[],n=[];function i(d){l.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function r(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:r}}function b0(o){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Qc(o),t.set(i,[a])):s>=r.length?(a=new Qc(o),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
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
}`,A0=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],C0=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],tl=new Me,ms=new z,_r=new z;function R0(o,t,e){let n=new Ua;const i=new $t,s=new $t,r=new Te,a=new Gd,c=new kd,l={},d=e.maxTextureSize,u={[ai]:qe,[qe]:ai,[un]:un},h=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:E0,fragmentShader:T0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Se;m.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let g=this.type;this.render=function(b,R,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Ch&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ws);const E=o.getRenderTarget(),k=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),B=o.state;B.setBlending(Hn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=g!==this.type;L&&R.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(U=>U.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,U=b.length;F<U;F++){const N=b[F],G=N.shadow;if(G===void 0){Xt("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const K=G.getFrameExtents();i.multiply(K),s.copy(G.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/K.x),i.x=s.x*K.x,G.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/K.y),i.y=s.y*K.y,G.mapSize.y=s.y));const q=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||L===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ys){if(N.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new An(i.x,i.y,{format:Ji,type:Yn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new Cs(i.x,i.y,bn),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=qn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be}else N.isPointLight?(G.map=new ih(i.x),G.map.depthTexture=new Nd(i.x,Cn)):(G.map=new An(i.x,i.y),G.map.depthTexture=new Cs(i.x,i.y,Cn)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=qn,this.type===ws?(G.map.depthTexture.compareFunction=q?Ia:Pa,G.map.depthTexture.minFilter=Ve,G.map.depthTexture.magFilter=Ve):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be);G.camera.updateProjectionMatrix()}const st=G.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<st;ot++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,ot),o.clear();else{ot===0&&(o.setRenderTarget(G.map),o.clear());const $=G.getViewport(ot);r.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),B.viewport(r)}if(N.isPointLight){const $=G.camera,_t=G.matrix,Zt=N.distance||$.far;Zt!==$.far&&($.far=Zt,$.updateProjectionMatrix()),ms.setFromMatrixPosition(N.matrixWorld),$.position.copy(ms),_r.copy($.position),_r.add(A0[ot]),$.up.copy(C0[ot]),$.lookAt(_r),$.updateMatrixWorld(),_t.makeTranslation(-ms.x,-ms.y,-ms.z),tl.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(tl,$.coordinateSystem,$.reversedDepth)}else G.updateMatrices(N);n=G.getFrustum(),M(R,x,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===ys&&_(G,x),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,o.setRenderTarget(E,k,I)};function _(b,R){const x=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new An(i.x,i.y,{format:Ji,type:Yn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(R,null,x,h,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(R,null,x,f,v,null)}function w(b,R,x,E){let k=null;const I=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)k=I;else if(k=x.isPointLight===!0?c:a,o.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=k.uuid,L=R.uuid;let F=l[B];F===void 0&&(F={},l[B]=F);let U=F[L];U===void 0&&(U=k.clone(),F[L]=U,R.addEventListener("dispose",A)),k=U}if(k.visible=R.visible,k.wireframe=R.wireframe,E===ys?k.side=R.shadowSide!==null?R.shadowSide:R.side:k.side=R.shadowSide!==null?R.shadowSide:u[R.side],k.alphaMap=R.alphaMap,k.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,k.map=R.map,k.clipShadows=R.clipShadows,k.clippingPlanes=R.clippingPlanes,k.clipIntersection=R.clipIntersection,k.displacementMap=R.displacementMap,k.displacementScale=R.displacementScale,k.displacementBias=R.displacementBias,k.wireframeLinewidth=R.wireframeLinewidth,k.linewidth=R.linewidth,x.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const B=o.properties.get(k);B.light=x}return k}function M(b,R,x,E,k){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&k===ys)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const L=t.update(b),F=b.material;if(Array.isArray(F)){const U=L.groups;for(let N=0,G=U.length;N<G;N++){const K=U[N],q=F[K.materialIndex];if(q&&q.visible){const st=w(b,q,E,k);b.onBeforeShadow(o,b,R,x,L,st,K),o.renderBufferDirect(x,null,L,st,b,K),b.onAfterShadow(o,b,R,x,L,st,K)}}}else if(F.visible){const U=w(b,F,E,k);b.onBeforeShadow(o,b,R,x,L,U,null),o.renderBufferDirect(x,null,L,U,b,null),b.onAfterShadow(o,b,R,x,L,U,null)}}const B=b.children;for(let L=0,F=B.length;L<F;L++)M(B[L],R,x,E,k)}function A(b){b.target.removeEventListener("dispose",A);for(const x in l){const E=l[x],k=b.target.uuid;k in E&&(E[k].dispose(),delete E[k])}}}function P0(o,t){function e(){let V=!1;const ut=new Te;let lt=null;const yt=new Te(0,0,0,0);return{setMask:function(at){lt!==at&&!V&&(o.colorMask(at,at,at,at),lt=at)},setLocked:function(at){V=at},setClear:function(at,J,Et,qt,xe){xe===!0&&(at*=qt,J*=qt,Et*=qt),ut.set(at,J,Et,qt),yt.equals(ut)===!1&&(o.clearColor(at,J,Et,qt),yt.copy(ut))},reset:function(){V=!1,lt=null,yt.set(-1,0,0,0)}}}function n(){let V=!1,ut=!1,lt=null,yt=null,at=null;return{setReversed:function(J){if(ut!==J){const Et=t.get("EXT_clip_control");J?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ut=J;const qt=at;at=null,this.setClear(qt)}},getReversed:function(){return ut},setTest:function(J){J?it(o.DEPTH_TEST):nt(o.DEPTH_TEST)},setMask:function(J){lt!==J&&!V&&(o.depthMask(J),lt=J)},setFunc:function(J){if(ut&&(J=ad[J]),yt!==J){switch(J){case Ar:o.depthFunc(o.NEVER);break;case Cr:o.depthFunc(o.ALWAYS);break;case Rr:o.depthFunc(o.LESS);break;case $i:o.depthFunc(o.LEQUAL);break;case Pr:o.depthFunc(o.EQUAL);break;case Ir:o.depthFunc(o.GEQUAL);break;case Dr:o.depthFunc(o.GREATER);break;case Lr:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}yt=J}},setLocked:function(J){V=J},setClear:function(J){at!==J&&(at=J,ut&&(J=1-J),o.clearDepth(J))},reset:function(){V=!1,lt=null,yt=null,at=null,ut=!1}}}function i(){let V=!1,ut=null,lt=null,yt=null,at=null,J=null,Et=null,qt=null,xe=null;return{setTest:function(de){V||(de?it(o.STENCIL_TEST):nt(o.STENCIL_TEST))},setMask:function(de){ut!==de&&!V&&(o.stencilMask(de),ut=de)},setFunc:function(de,Pn,In){(lt!==de||yt!==Pn||at!==In)&&(o.stencilFunc(de,Pn,In),lt=de,yt=Pn,at=In)},setOp:function(de,Pn,In){(J!==de||Et!==Pn||qt!==In)&&(o.stencilOp(de,Pn,In),J=de,Et=Pn,qt=In)},setLocked:function(de){V=de},setClear:function(de){xe!==de&&(o.clearStencil(de),xe=de)},reset:function(){V=!1,ut=null,lt=null,yt=null,at=null,J=null,Et=null,qt=null,xe=null}}}const s=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,w=null,M=null,A=null,b=null,R=new Ut(0,0,0),x=0,E=!1,k=null,I=null,B=null,L=null,F=null;const U=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),N=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),N=G>=2);let q=null,st={};const ot=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),_t=new Te().fromArray(ot),Zt=new Te().fromArray($);function Yt(V,ut,lt,yt){const at=new Uint8Array(4),J=o.createTexture();o.bindTexture(V,J),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Et=0;Et<lt;Et++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(ut,0,o.RGBA,1,1,yt,0,o.RGBA,o.UNSIGNED_BYTE,at):o.texImage2D(ut+Et,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,at);return J}const Z={};Z[o.TEXTURE_2D]=Yt(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=Yt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=Yt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=Yt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),it(o.DEPTH_TEST),r.setFunc($i),kt(!1),jt(Qa),it(o.CULL_FACE),Dt(Hn);function it(V){d[V]!==!0&&(o.enable(V),d[V]=!0)}function nt(V){d[V]!==!1&&(o.disable(V),d[V]=!1)}function Ot(V,ut){return u[V]!==ut?(o.bindFramebuffer(V,ut),u[V]=ut,V===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=ut),V===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=ut),!0):!1}function Tt(V,ut){let lt=f,yt=!1;if(V){lt=h.get(ut),lt===void 0&&(lt=[],h.set(ut,lt));const at=V.textures;if(lt.length!==at.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let J=0,Et=at.length;J<Et;J++)lt[J]=o.COLOR_ATTACHMENT0+J;lt.length=at.length,yt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,yt=!0);yt&&o.drawBuffers(lt)}function Bt(V){return m!==V?(o.useProgram(V),m=V,!0):!1}const fe={[xi]:o.FUNC_ADD,[Ph]:o.FUNC_SUBTRACT,[Ih]:o.FUNC_REVERSE_SUBTRACT};fe[Dh]=o.MIN,fe[Lh]=o.MAX;const te={[Nh]:o.ZERO,[Uh]:o.ONE,[Fh]:o.SRC_COLOR,[Er]:o.SRC_ALPHA,[Vh]:o.SRC_ALPHA_SATURATE,[Gh]:o.DST_COLOR,[Bh]:o.DST_ALPHA,[Oh]:o.ONE_MINUS_SRC_COLOR,[Tr]:o.ONE_MINUS_SRC_ALPHA,[kh]:o.ONE_MINUS_DST_COLOR,[zh]:o.ONE_MINUS_DST_ALPHA,[Hh]:o.CONSTANT_COLOR,[Wh]:o.ONE_MINUS_CONSTANT_COLOR,[Xh]:o.CONSTANT_ALPHA,[Yh]:o.ONE_MINUS_CONSTANT_ALPHA};function Dt(V,ut,lt,yt,at,J,Et,qt,xe,de){if(V===Hn){v===!0&&(nt(o.BLEND),v=!1);return}if(v===!1&&(it(o.BLEND),v=!0),V!==Rh){if(V!==p||de!==E){if((g!==xi||M!==xi)&&(o.blendEquation(o.FUNC_ADD),g=xi,M=xi),de)switch(V){case ji:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tc:o.blendFunc(o.ONE,o.ONE);break;case ec:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nc:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:re("WebGLState: Invalid blending: ",V);break}else switch(V){case ji:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ec:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",V);break}_=null,w=null,A=null,b=null,R.set(0,0,0),x=0,p=V,E=de}return}at=at||ut,J=J||lt,Et=Et||yt,(ut!==g||at!==M)&&(o.blendEquationSeparate(fe[ut],fe[at]),g=ut,M=at),(lt!==_||yt!==w||J!==A||Et!==b)&&(o.blendFuncSeparate(te[lt],te[yt],te[J],te[Et]),_=lt,w=yt,A=J,b=Et),(qt.equals(R)===!1||xe!==x)&&(o.blendColor(qt.r,qt.g,qt.b,xe),R.copy(qt),x=xe),p=V,E=!1}function zt(V,ut){V.side===un?nt(o.CULL_FACE):it(o.CULL_FACE);let lt=V.side===qe;ut&&(lt=!lt),kt(lt),V.blending===ji&&V.transparent===!1?Dt(Hn):Dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),s.setMask(V.colorWrite);const yt=V.stencilWrite;a.setTest(yt),yt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),pe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):nt(o.SAMPLE_ALPHA_TO_COVERAGE)}function kt(V){k!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),k=V)}function jt(V){V!==Th?(it(o.CULL_FACE),V!==I&&(V===Qa?o.cullFace(o.BACK):V===Ah?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):nt(o.CULL_FACE),I=V}function O(V){V!==B&&(N&&o.lineWidth(V),B=V)}function pe(V,ut,lt){V?(it(o.POLYGON_OFFSET_FILL),(L!==ut||F!==lt)&&(L=ut,F=lt,r.getReversed()&&(ut=-ut),o.polygonOffset(ut,lt))):nt(o.POLYGON_OFFSET_FILL)}function Gt(V){V?it(o.SCISSOR_TEST):nt(o.SCISSOR_TEST)}function Wt(V){V===void 0&&(V=o.TEXTURE0+U-1),q!==V&&(o.activeTexture(V),q=V)}function gt(V,ut,lt){lt===void 0&&(q===null?lt=o.TEXTURE0+U-1:lt=q);let yt=st[lt];yt===void 0&&(yt={type:void 0,texture:void 0},st[lt]=yt),(yt.type!==V||yt.texture!==ut)&&(q!==lt&&(o.activeTexture(lt),q=lt),o.bindTexture(V,ut||Z[V]),yt.type=V,yt.texture=ut)}function P(){const V=st[q];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(V){re("WebGLState:",V)}}function H(){try{o.compressedTexImage3D(...arguments)}catch(V){re("WebGLState:",V)}}function tt(){try{o.texSubImage2D(...arguments)}catch(V){re("WebGLState:",V)}}function et(){try{o.texSubImage3D(...arguments)}catch(V){re("WebGLState:",V)}}function Q(){try{o.compressedTexSubImage2D(...arguments)}catch(V){re("WebGLState:",V)}}function St(){try{o.compressedTexSubImage3D(...arguments)}catch(V){re("WebGLState:",V)}}function dt(){try{o.texStorage2D(...arguments)}catch(V){re("WebGLState:",V)}}function Ft(){try{o.texStorage3D(...arguments)}catch(V){re("WebGLState:",V)}}function Vt(){try{o.texImage2D(...arguments)}catch(V){re("WebGLState:",V)}}function rt(){try{o.texImage3D(...arguments)}catch(V){re("WebGLState:",V)}}function ct(V){_t.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),_t.copy(V))}function bt(V){Zt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Zt.copy(V))}function At(V,ut){let lt=l.get(ut);lt===void 0&&(lt=new WeakMap,l.set(ut,lt));let yt=lt.get(V);yt===void 0&&(yt=o.getUniformBlockIndex(ut,V.name),lt.set(V,yt))}function vt(V,ut){const yt=l.get(ut).get(V);c.get(ut)!==yt&&(o.uniformBlockBinding(ut,yt,V.__bindingPointIndex),c.set(ut,yt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},q=null,st={},u={},h=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,w=null,M=null,A=null,b=null,R=new Ut(0,0,0),x=0,E=!1,k=null,I=null,B=null,L=null,F=null,_t.set(0,0,o.canvas.width,o.canvas.height),Zt.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:it,disable:nt,bindFramebuffer:Ot,drawBuffers:Tt,useProgram:Bt,setBlending:Dt,setMaterial:zt,setFlipSided:kt,setCullFace:jt,setLineWidth:O,setPolygonOffset:pe,setScissorTest:Gt,activeTexture:Wt,bindTexture:gt,unbindTexture:P,compressedTexImage2D:y,compressedTexImage3D:H,texImage2D:Vt,texImage3D:rt,updateUBOMapping:At,uniformBlockBinding:vt,texStorage2D:dt,texStorage3D:Ft,texSubImage2D:tt,texSubImage3D:et,compressedTexSubImage2D:Q,compressedTexSubImage3D:St,scissor:ct,viewport:bt,reset:ne}}function I0(o,t,e,n,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,y){return f?new OffscreenCanvas(P,y):Mo("canvas")}function v(P,y,H){let tt=1;const et=gt(P);if((et.width>H||et.height>H)&&(tt=H/Math.max(et.width,et.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(tt*et.width),St=Math.floor(tt*et.height);u===void 0&&(u=m(Q,St));const dt=y?m(Q,St):u;return dt.width=Q,dt.height=St,dt.getContext("2d").drawImage(P,0,0,Q,St),Xt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+St+")."),dt}else return"data"in P&&Xt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function p(P){return P.generateMipmaps}function g(P){o.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(P,y,H,tt,et=!1){if(P!==null){if(o[P]!==void 0)return o[P];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=y;if(y===o.RED&&(H===o.FLOAT&&(Q=o.R32F),H===o.HALF_FLOAT&&(Q=o.R16F),H===o.UNSIGNED_BYTE&&(Q=o.R8)),y===o.RED_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.R8UI),H===o.UNSIGNED_SHORT&&(Q=o.R16UI),H===o.UNSIGNED_INT&&(Q=o.R32UI),H===o.BYTE&&(Q=o.R8I),H===o.SHORT&&(Q=o.R16I),H===o.INT&&(Q=o.R32I)),y===o.RG&&(H===o.FLOAT&&(Q=o.RG32F),H===o.HALF_FLOAT&&(Q=o.RG16F),H===o.UNSIGNED_BYTE&&(Q=o.RG8)),y===o.RG_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.RG8UI),H===o.UNSIGNED_SHORT&&(Q=o.RG16UI),H===o.UNSIGNED_INT&&(Q=o.RG32UI),H===o.BYTE&&(Q=o.RG8I),H===o.SHORT&&(Q=o.RG16I),H===o.INT&&(Q=o.RG32I)),y===o.RGB_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.RGB8UI),H===o.UNSIGNED_SHORT&&(Q=o.RGB16UI),H===o.UNSIGNED_INT&&(Q=o.RGB32UI),H===o.BYTE&&(Q=o.RGB8I),H===o.SHORT&&(Q=o.RGB16I),H===o.INT&&(Q=o.RGB32I)),y===o.RGBA_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.RGBA8UI),H===o.UNSIGNED_SHORT&&(Q=o.RGBA16UI),H===o.UNSIGNED_INT&&(Q=o.RGBA32UI),H===o.BYTE&&(Q=o.RGBA8I),H===o.SHORT&&(Q=o.RGBA16I),H===o.INT&&(Q=o.RGBA32I)),y===o.RGB&&(H===o.UNSIGNED_INT_5_9_9_9_REV&&(Q=o.RGB9_E5),H===o.UNSIGNED_INT_10F_11F_11F_REV&&(Q=o.R11F_G11F_B10F)),y===o.RGBA){const St=et?yo:ae.getTransfer(tt);H===o.FLOAT&&(Q=o.RGBA32F),H===o.HALF_FLOAT&&(Q=o.RGBA16F),H===o.UNSIGNED_BYTE&&(Q=St===ue?o.SRGB8_ALPHA8:o.RGBA8),H===o.UNSIGNED_SHORT_4_4_4_4&&(Q=o.RGBA4),H===o.UNSIGNED_SHORT_5_5_5_1&&(Q=o.RGB5_A1)}return(Q===o.R16F||Q===o.R32F||Q===o.RG16F||Q===o.RG32F||Q===o.RGBA16F||Q===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(P,y){let H;return P?y===null||y===Cn||y===Es?H=o.DEPTH24_STENCIL8:y===bn?H=o.DEPTH32F_STENCIL8:y===bs&&(H=o.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Cn||y===Es?H=o.DEPTH_COMPONENT24:y===bn?H=o.DEPTH_COMPONENT32F:y===bs&&(H=o.DEPTH_COMPONENT16),H}function A(P,y){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Be&&P.minFilter!==Ve?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function b(P){const y=P.target;y.removeEventListener("dispose",b),x(y),y.isVideoTexture&&d.delete(y)}function R(P){const y=P.target;y.removeEventListener("dispose",R),k(y)}function x(P){const y=n.get(P);if(y.__webglInit===void 0)return;const H=P.source,tt=h.get(H);if(tt){const et=tt[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(P),Object.keys(tt).length===0&&h.delete(H)}n.remove(P)}function E(P){const y=n.get(P);o.deleteTexture(y.__webglTexture);const H=P.source,tt=h.get(H);delete tt[y.__cacheKey],r.memory.textures--}function k(P){const y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let et=0;et<y.__webglFramebuffer[tt].length;et++)o.deleteFramebuffer(y.__webglFramebuffer[tt][et]);else o.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)o.deleteFramebuffer(y.__webglFramebuffer[tt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=P.textures;for(let tt=0,et=H.length;tt<et;tt++){const Q=n.get(H[tt]);Q.__webglTexture&&(o.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(H[tt])}n.remove(P)}let I=0;function B(){I=0}function L(){const P=I;return P>=i.maxTextures&&Xt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function F(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function U(P,y){const H=n.get(P);if(P.isVideoTexture&&Gt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const tt=P.image;if(tt===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,P,y);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,H.__webglTexture,o.TEXTURE0+y)}function N(P,y){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Z(H,P,y);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(o.TEXTURE_2D_ARRAY,H.__webglTexture,o.TEXTURE0+y)}function G(P,y){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){Z(H,P,y);return}e.bindTexture(o.TEXTURE_3D,H.__webglTexture,o.TEXTURE0+y)}function K(P,y){const H=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&H.__version!==P.version){it(H,P,y);return}e.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+y)}const q={[Nr]:o.REPEAT,[Vn]:o.CLAMP_TO_EDGE,[Ur]:o.MIRRORED_REPEAT},st={[Be]:o.NEAREST,[Kh]:o.NEAREST_MIPMAP_NEAREST,[Ns]:o.NEAREST_MIPMAP_LINEAR,[Ve]:o.LINEAR,[zo]:o.LINEAR_MIPMAP_NEAREST,[wi]:o.LINEAR_MIPMAP_LINEAR},ot={[Jh]:o.NEVER,[id]:o.ALWAYS,[Qh]:o.LESS,[Pa]:o.LEQUAL,[td]:o.EQUAL,[Ia]:o.GEQUAL,[ed]:o.GREATER,[nd]:o.NOTEQUAL};function $(P,y){if(y.type===bn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ve||y.magFilter===zo||y.magFilter===Ns||y.magFilter===wi||y.minFilter===Ve||y.minFilter===zo||y.minFilter===Ns||y.minFilter===wi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,q[y.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,q[y.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,q[y.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,st[y.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==Ns&&y.minFilter!==wi||y.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function _t(P,y){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",b));const tt=y.source;let et=h.get(tt);et===void 0&&(et={},h.set(tt,et));const Q=F(y);if(Q!==P.__cacheKey){et[Q]===void 0&&(et[Q]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,H=!0),et[Q].usedTimes++;const St=et[P.__cacheKey];St!==void 0&&(et[P.__cacheKey].usedTimes--,St.usedTimes===0&&E(y)),P.__cacheKey=Q,P.__webglTexture=et[Q].texture}return H}function Zt(P,y,H){return Math.floor(Math.floor(P/H)/y)}function Yt(P,y,H,tt){const Q=P.updateRanges;if(Q.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,H,tt,y.data);else{Q.sort((rt,ct)=>rt.start-ct.start);let St=0;for(let rt=1;rt<Q.length;rt++){const ct=Q[St],bt=Q[rt],At=ct.start+ct.count,vt=Zt(bt.start,y.width,4),ne=Zt(ct.start,y.width,4);bt.start<=At+1&&vt===ne&&Zt(bt.start+bt.count-1,y.width,4)===vt?ct.count=Math.max(ct.count,bt.start+bt.count-ct.start):(++St,Q[St]=bt)}Q.length=St+1;const dt=o.getParameter(o.UNPACK_ROW_LENGTH),Ft=o.getParameter(o.UNPACK_SKIP_PIXELS),Vt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let rt=0,ct=Q.length;rt<ct;rt++){const bt=Q[rt],At=Math.floor(bt.start/4),vt=Math.ceil(bt.count/4),ne=At%y.width,V=Math.floor(At/y.width),ut=vt,lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),e.texSubImage2D(o.TEXTURE_2D,0,ne,V,ut,lt,H,tt,y.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,Vt)}}function Z(P,y,H){let tt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=o.TEXTURE_3D);const et=_t(P,y),Q=y.source;e.bindTexture(tt,P.__webglTexture,o.TEXTURE0+H);const St=n.get(Q);if(Q.version!==St.__version||et===!0){e.activeTexture(o.TEXTURE0+H);const dt=ae.getPrimaries(ae.workingColorSpace),Ft=y.colorSpace===si?null:ae.getPrimaries(y.colorSpace),Vt=y.colorSpace===si||dt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let rt=v(y.image,!1,i.maxTextureSize);rt=Wt(y,rt);const ct=s.convert(y.format,y.colorSpace),bt=s.convert(y.type);let At=w(y.internalFormat,ct,bt,y.colorSpace,y.isVideoTexture);$(tt,y);let vt;const ne=y.mipmaps,V=y.isVideoTexture!==!0,ut=St.__version===void 0||et===!0,lt=Q.dataReady,yt=A(y,rt);if(y.isDepthTexture)At=M(y.format===Si,y.type),ut&&(V?e.texStorage2D(o.TEXTURE_2D,1,At,rt.width,rt.height):e.texImage2D(o.TEXTURE_2D,0,At,rt.width,rt.height,0,ct,bt,null));else if(y.isDataTexture)if(ne.length>0){V&&ut&&e.texStorage2D(o.TEXTURE_2D,yt,At,ne[0].width,ne[0].height);for(let at=0,J=ne.length;at<J;at++)vt=ne[at],V?lt&&e.texSubImage2D(o.TEXTURE_2D,at,0,0,vt.width,vt.height,ct,bt,vt.data):e.texImage2D(o.TEXTURE_2D,at,At,vt.width,vt.height,0,ct,bt,vt.data);y.generateMipmaps=!1}else V?(ut&&e.texStorage2D(o.TEXTURE_2D,yt,At,rt.width,rt.height),lt&&Yt(y,rt,ct,bt)):e.texImage2D(o.TEXTURE_2D,0,At,rt.width,rt.height,0,ct,bt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){V&&ut&&e.texStorage3D(o.TEXTURE_2D_ARRAY,yt,At,ne[0].width,ne[0].height,rt.depth);for(let at=0,J=ne.length;at<J;at++)if(vt=ne[at],y.format!==fn)if(ct!==null)if(V){if(lt)if(y.layerUpdates.size>0){const Et=Ic(vt.width,vt.height,y.format,y.type);for(const qt of y.layerUpdates){const xe=vt.data.subarray(qt*Et/vt.data.BYTES_PER_ELEMENT,(qt+1)*Et/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,at,0,0,qt,vt.width,vt.height,1,ct,xe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,ct,vt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,at,At,vt.width,vt.height,rt.depth,0,vt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?lt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,at,0,0,0,vt.width,vt.height,rt.depth,ct,bt,vt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,at,At,vt.width,vt.height,rt.depth,0,ct,bt,vt.data)}else{V&&ut&&e.texStorage2D(o.TEXTURE_2D,yt,At,ne[0].width,ne[0].height);for(let at=0,J=ne.length;at<J;at++)vt=ne[at],y.format!==fn?ct!==null?V?lt&&e.compressedTexSubImage2D(o.TEXTURE_2D,at,0,0,vt.width,vt.height,ct,vt.data):e.compressedTexImage2D(o.TEXTURE_2D,at,At,vt.width,vt.height,0,vt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?lt&&e.texSubImage2D(o.TEXTURE_2D,at,0,0,vt.width,vt.height,ct,bt,vt.data):e.texImage2D(o.TEXTURE_2D,at,At,vt.width,vt.height,0,ct,bt,vt.data)}else if(y.isDataArrayTexture)if(V){if(ut&&e.texStorage3D(o.TEXTURE_2D_ARRAY,yt,At,rt.width,rt.height,rt.depth),lt)if(y.layerUpdates.size>0){const at=Ic(rt.width,rt.height,y.format,y.type);for(const J of y.layerUpdates){const Et=rt.data.subarray(J*at/rt.data.BYTES_PER_ELEMENT,(J+1)*at/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,ct,bt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ct,bt,rt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,At,rt.width,rt.height,rt.depth,0,ct,bt,rt.data);else if(y.isData3DTexture)V?(ut&&e.texStorage3D(o.TEXTURE_3D,yt,At,rt.width,rt.height,rt.depth),lt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ct,bt,rt.data)):e.texImage3D(o.TEXTURE_3D,0,At,rt.width,rt.height,rt.depth,0,ct,bt,rt.data);else if(y.isFramebufferTexture){if(ut)if(V)e.texStorage2D(o.TEXTURE_2D,yt,At,rt.width,rt.height);else{let at=rt.width,J=rt.height;for(let Et=0;Et<yt;Et++)e.texImage2D(o.TEXTURE_2D,Et,At,at,J,0,ct,bt,null),at>>=1,J>>=1}}else if(ne.length>0){if(V&&ut){const at=gt(ne[0]);e.texStorage2D(o.TEXTURE_2D,yt,At,at.width,at.height)}for(let at=0,J=ne.length;at<J;at++)vt=ne[at],V?lt&&e.texSubImage2D(o.TEXTURE_2D,at,0,0,ct,bt,vt):e.texImage2D(o.TEXTURE_2D,at,At,ct,bt,vt);y.generateMipmaps=!1}else if(V){if(ut){const at=gt(rt);e.texStorage2D(o.TEXTURE_2D,yt,At,at.width,at.height)}lt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,ct,bt,rt)}else e.texImage2D(o.TEXTURE_2D,0,At,ct,bt,rt);p(y)&&g(tt),St.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function it(P,y,H){if(y.image.length!==6)return;const tt=_t(P,y),et=y.source;e.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+H);const Q=n.get(et);if(et.version!==Q.__version||tt===!0){e.activeTexture(o.TEXTURE0+H);const St=ae.getPrimaries(ae.workingColorSpace),dt=y.colorSpace===si?null:ae.getPrimaries(y.colorSpace),Ft=y.colorSpace===si||St===dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,ct=[];for(let J=0;J<6;J++)!Vt&&!rt?ct[J]=v(y.image[J],!0,i.maxCubemapSize):ct[J]=rt?y.image[J].image:y.image[J],ct[J]=Wt(y,ct[J]);const bt=ct[0],At=s.convert(y.format,y.colorSpace),vt=s.convert(y.type),ne=w(y.internalFormat,At,vt,y.colorSpace),V=y.isVideoTexture!==!0,ut=Q.__version===void 0||tt===!0,lt=et.dataReady;let yt=A(y,bt);$(o.TEXTURE_CUBE_MAP,y);let at;if(Vt){V&&ut&&e.texStorage2D(o.TEXTURE_CUBE_MAP,yt,ne,bt.width,bt.height);for(let J=0;J<6;J++){at=ct[J].mipmaps;for(let Et=0;Et<at.length;Et++){const qt=at[Et];y.format!==fn?At!==null?V?lt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,0,0,qt.width,qt.height,At,qt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,ne,qt.width,qt.height,0,qt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?lt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,0,0,qt.width,qt.height,At,vt,qt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et,ne,qt.width,qt.height,0,At,vt,qt.data)}}}else{if(at=y.mipmaps,V&&ut){at.length>0&&yt++;const J=gt(ct[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,yt,ne,J.width,J.height)}for(let J=0;J<6;J++)if(rt){V?lt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ct[J].width,ct[J].height,At,vt,ct[J].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,ct[J].width,ct[J].height,0,At,vt,ct[J].data);for(let Et=0;Et<at.length;Et++){const xe=at[Et].image[J].image;V?lt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,0,0,xe.width,xe.height,At,vt,xe.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,ne,xe.width,xe.height,0,At,vt,xe.data)}}else{V?lt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At,vt,ct[J]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,At,vt,ct[J]);for(let Et=0;Et<at.length;Et++){const qt=at[Et];V?lt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,0,0,At,vt,qt.image[J]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+J,Et+1,ne,At,vt,qt.image[J])}}}p(y)&&g(o.TEXTURE_CUBE_MAP),Q.__version=et.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function nt(P,y,H,tt,et,Q){const St=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),Ft=w(H.internalFormat,St,dt,H.colorSpace),Vt=n.get(y),rt=n.get(H);if(rt.__renderTarget=y,!Vt.__hasExternalTextures){const ct=Math.max(1,y.width>>Q),bt=Math.max(1,y.height>>Q);et===o.TEXTURE_3D||et===o.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,Ft,ct,bt,y.depth,0,St,dt,null):e.texImage2D(et,Q,Ft,ct,bt,0,St,dt,null)}e.bindFramebuffer(o.FRAMEBUFFER,P),pe(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,tt,et,rt.__webglTexture,0,O(y)):(et===o.TEXTURE_2D||et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,tt,et,rt.__webglTexture,Q),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Ot(P,y,H){if(o.bindRenderbuffer(o.RENDERBUFFER,P),y.depthBuffer){const tt=y.depthTexture,et=tt&&tt.isDepthTexture?tt.type:null,Q=M(y.stencilBuffer,et),St=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;pe(y)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,O(y),Q,y.width,y.height):H?o.renderbufferStorageMultisample(o.RENDERBUFFER,O(y),Q,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Q,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,P)}else{const tt=y.textures;for(let et=0;et<tt.length;et++){const Q=tt[et],St=s.convert(Q.format,Q.colorSpace),dt=s.convert(Q.type),Ft=w(Q.internalFormat,St,dt,Q.colorSpace);pe(y)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,O(y),Ft,y.width,y.height):H?o.renderbufferStorageMultisample(o.RENDERBUFFER,O(y),Ft,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Ft,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(P,y,H){const tt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(o.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(y.depthTexture);if(et.__renderTarget=y,(!et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),tt){if(et.__webglInit===void 0&&(et.__webglInit=!0,y.depthTexture.addEventListener("dispose",b)),et.__webglTexture===void 0){et.__webglTexture=o.createTexture(),e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture),$(o.TEXTURE_CUBE_MAP,y.depthTexture);const Vt=s.convert(y.depthTexture.format),rt=s.convert(y.depthTexture.type);let ct;y.depthTexture.format===qn?ct=o.DEPTH_COMPONENT24:y.depthTexture.format===Si&&(ct=o.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ct,y.width,y.height,0,Vt,rt,null)}}else U(y.depthTexture,0);const Q=et.__webglTexture,St=O(y),dt=tt?o.TEXTURE_CUBE_MAP_POSITIVE_X+H:o.TEXTURE_2D,Ft=y.depthTexture.format===Si?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===qn)pe(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ft,dt,Q,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,Ft,dt,Q,0);else if(y.depthTexture.format===Si)pe(y)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ft,dt,Q,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,Ft,dt,Q,0);else throw new Error("Unknown depthTexture format")}function Bt(P){const y=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const tt=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),tt){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,tt.removeEventListener("dispose",et)};tt.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=tt}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let tt=0;tt<6;tt++)Tt(y.__webglFramebuffer[tt],P,tt);else{const tt=P.texture.mipmaps;tt&&tt.length>0?Tt(y.__webglFramebuffer[0],P,0):Tt(y.__webglFramebuffer,P,0)}else if(H){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]===void 0)y.__webglDepthbuffer[tt]=o.createRenderbuffer(),Ot(y.__webglDepthbuffer[tt],P,!1);else{const et=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[tt];o.bindRenderbuffer(o.RENDERBUFFER,Q),o.framebufferRenderbuffer(o.FRAMEBUFFER,et,o.RENDERBUFFER,Q)}}else{const tt=P.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Ot(y.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Q),o.framebufferRenderbuffer(o.FRAMEBUFFER,et,o.RENDERBUFFER,Q)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function fe(P,y,H){const tt=n.get(P);y!==void 0&&nt(tt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),H!==void 0&&Bt(P)}function te(P){const y=P.texture,H=n.get(P),tt=n.get(y);P.addEventListener("dispose",R);const et=P.textures,Q=P.isWebGLCubeRenderTarget===!0,St=et.length>1;if(St||(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=y.version,r.memory.textures++),Q){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let Ft=0;Ft<y.mipmaps.length;Ft++)H.__webglFramebuffer[dt][Ft]=o.createFramebuffer()}else H.__webglFramebuffer[dt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)H.__webglFramebuffer[dt]=o.createFramebuffer()}else H.__webglFramebuffer=o.createFramebuffer();if(St)for(let dt=0,Ft=et.length;dt<Ft;dt++){const Vt=n.get(et[dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=o.createTexture(),r.memory.textures++)}if(P.samples>0&&pe(P)===!1){H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const Ft=et[dt];H.__webglColorRenderbuffer[dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,H.__webglColorRenderbuffer[dt]);const Vt=s.convert(Ft.format,Ft.colorSpace),rt=s.convert(Ft.type),ct=w(Ft.internalFormat,Vt,rt,Ft.colorSpace,P.isXRRenderTarget===!0),bt=O(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,bt,ct,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+dt,o.RENDERBUFFER,H.__webglColorRenderbuffer[dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Ot(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Q){e.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture),$(o.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)nt(H.__webglFramebuffer[dt][Ft],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ft);else nt(H.__webglFramebuffer[dt],P,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(y)&&g(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let dt=0,Ft=et.length;dt<Ft;dt++){const Vt=et[dt],rt=n.get(Vt);let ct=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(ct,rt.__webglTexture),$(ct,Vt),nt(H.__webglFramebuffer,P,Vt,o.COLOR_ATTACHMENT0+dt,ct,0),p(Vt)&&g(ct)}e.unbindTexture()}else{let dt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(dt,tt.__webglTexture),$(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let Ft=0;Ft<y.mipmaps.length;Ft++)nt(H.__webglFramebuffer[Ft],P,y,o.COLOR_ATTACHMENT0,dt,Ft);else nt(H.__webglFramebuffer,P,y,o.COLOR_ATTACHMENT0,dt,0);p(y)&&g(dt),e.unbindTexture()}P.depthBuffer&&Bt(P)}function Dt(P){const y=P.textures;for(let H=0,tt=y.length;H<tt;H++){const et=y[H];if(p(et)){const Q=_(P),St=n.get(et).__webglTexture;e.bindTexture(Q,St),g(Q),e.unbindTexture()}}}const zt=[],kt=[];function jt(P){if(P.samples>0){if(pe(P)===!1){const y=P.textures,H=P.width,tt=P.height;let et=o.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=n.get(P),dt=y.length>1;if(dt)for(let Vt=0;Vt<y.length;Vt++)e.bindFramebuffer(o.FRAMEBUFFER,St.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,St.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const Ft=P.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Vt=0;Vt<y.length;Vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=o.STENCIL_BUFFER_BIT)),dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,St.__webglColorRenderbuffer[Vt]);const rt=n.get(y[Vt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,rt,0)}o.blitFramebuffer(0,0,H,tt,0,0,H,tt,et,o.NEAREST),c===!0&&(zt.length=0,kt.length=0,zt.push(o.COLOR_ATTACHMENT0+Vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(zt.push(Q),kt.push(Q),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,kt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),dt)for(let Vt=0;Vt<y.length;Vt++){e.bindFramebuffer(o.FRAMEBUFFER,St.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.RENDERBUFFER,St.__webglColorRenderbuffer[Vt]);const rt=n.get(y[Vt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,St.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Vt,o.TEXTURE_2D,rt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const y=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function O(P){return Math.min(i.maxSamples,P.samples)}function pe(P){const y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Gt(P){const y=r.render.frame;d.get(P)!==y&&(d.set(P,y),P.update())}function Wt(P,y){const H=P.colorSpace,tt=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Qi&&H!==si&&(ae.getTransfer(H)===ue?(tt!==fn||et!==en)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",H)),y}function gt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=fe,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function D0(o,t){function e(n,i=si){let s;const r=ae.getTransfer(i);if(n===en)return o.UNSIGNED_BYTE;if(n===ba)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Bl)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===zl)return o.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fl)return o.BYTE;if(n===Ol)return o.SHORT;if(n===bs)return o.UNSIGNED_SHORT;if(n===Sa)return o.INT;if(n===Cn)return o.UNSIGNED_INT;if(n===bn)return o.FLOAT;if(n===Yn)return o.HALF_FLOAT;if(n===Gl)return o.ALPHA;if(n===kl)return o.RGB;if(n===fn)return o.RGBA;if(n===qn)return o.DEPTH_COMPONENT;if(n===Si)return o.DEPTH_STENCIL;if(n===Vl)return o.RED;if(n===Ta)return o.RED_INTEGER;if(n===Ji)return o.RG;if(n===Aa)return o.RG_INTEGER;if(n===Ca)return o.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===_o)if(r===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===Or||n===Br||n===zr)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Or)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Br)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gr||n===kr||n===Vr||n===Hr||n===Wr||n===Xr||n===Yr)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Gr||n===kr)return r===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vr)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hr)return s.COMPRESSED_R11_EAC;if(n===Wr)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return s.COMPRESSED_RG11_EAC;if(n===Yr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qr||n===jr||n===Kr||n===$r||n===Zr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===oa||n===ra)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qr)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zr)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jr)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qr)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return r===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===ca||n===la)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return r===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===da||n===ua||n===fa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ha)return s.COMPRESSED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}const L0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N0=`
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

}`;class U0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Jl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:L0,fragmentShader:N0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends ns{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new U0,g={},_=e.getContextAttributes();let w=null,M=null;const A=[],b=[],R=new $t;let x=null;const E=new tn;E.viewport=new Te;const k=new tn;k.viewport=new Te;const I=[E,k],B=new qd;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=A[Z];return it===void 0&&(it=new qo,A[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=A[Z];return it===void 0&&(it=new qo,A[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=A[Z];return it===void 0&&(it=new qo,A[Z]=it),it.getHandSpace()};function U(Z){const it=b.indexOf(Z.inputSource);if(it===-1)return;const nt=A[it];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,l||r),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",G);for(let Z=0;Z<A.length;Z++){const it=b[Z];it!==null&&(b[Z]=null,A[Z].disconnect(it))}L=null,F=null,p.reset();for(const Z in g)delete g[Z];t.setRenderTarget(w),f=null,h=null,u=null,i=null,M=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Ot=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?Si:qn,Ot=_.stencil?Es:Cn);const Bt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Bt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new An(h.textureWidth,h.textureHeight,{format:fn,type:en,depthTexture:new Cs(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new An(f.framebufferWidth,f.framebufferHeight,{format:fn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(Z){for(let it=0;it<Z.removed.length;it++){const nt=Z.removed[it],Ot=b.indexOf(nt);Ot>=0&&(b[Ot]=null,A[Ot].disconnect(nt))}for(let it=0;it<Z.added.length;it++){const nt=Z.added[it];let Ot=b.indexOf(nt);if(Ot===-1){for(let Bt=0;Bt<A.length;Bt++)if(Bt>=b.length){b.push(nt),Ot=Bt;break}else if(b[Bt]===null){b[Bt]=nt,Ot=Bt;break}if(Ot===-1)break}const Tt=A[Ot];Tt&&Tt.connect(nt)}}const K=new z,q=new z;function st(Z,it,nt){K.setFromMatrixPosition(it.matrixWorld),q.setFromMatrixPosition(nt.matrixWorld);const Ot=K.distanceTo(q),Tt=it.projectionMatrix.elements,Bt=nt.projectionMatrix.elements,fe=Tt[14]/(Tt[10]-1),te=Tt[14]/(Tt[10]+1),Dt=(Tt[9]+1)/Tt[5],zt=(Tt[9]-1)/Tt[5],kt=(Tt[8]-1)/Tt[0],jt=(Bt[8]+1)/Bt[0],O=fe*kt,pe=fe*jt,Gt=Ot/(-kt+jt),Wt=Gt*-kt;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const gt=fe+Gt,P=te+Gt,y=O-Wt,H=pe+(Ot-Wt),tt=Dt*te/P*gt,et=zt*te/P*gt;Z.projectionMatrix.makePerspective(y,H,tt,et,gt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let it=Z.near,nt=Z.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(nt=p.depthFar)),B.near=k.near=E.near=it,B.far=k.far=E.far=nt,(L!==B.near||F!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,F=B.far),B.layers.mask=Z.layers.mask|6,E.layers.mask=B.layers.mask&-5,k.layers.mask=B.layers.mask&-3;const Ot=Z.parent,Tt=B.cameras;ot(B,Ot);for(let Bt=0;Bt<Tt.length;Bt++)ot(Tt[Bt],Ot);Tt.length===2?st(B,E,k):B.projectionMatrix.copy(E.projectionMatrix),$(Z,B,Ot)};function $(Z,it,nt){nt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ma*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return g[Z]};let _t=null;function Zt(Z,it){if(d=it.getViewerPose(l||r),m=it,d!==null){const nt=d.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ot=!1;nt.length!==B.cameras.length&&(B.cameras.length=0,Ot=!0);for(let te=0;te<nt.length;te++){const Dt=nt[te];let zt=null;if(f!==null)zt=f.getViewport(Dt);else{const jt=u.getViewSubImage(h,Dt);zt=jt.viewport,te===0&&(t.setRenderTargetTextures(M,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(M))}let kt=I[te];kt===void 0&&(kt=new tn,kt.layers.enable(te),kt.viewport=new Te,I[te]=kt),kt.matrix.fromArray(Dt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Dt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(zt.x,zt.y,zt.width,zt.height),te===0&&(B.matrix.copy(kt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ot===!0&&B.cameras.push(kt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const te=u.getDepthInformation(nt[0]);te&&te.isValid&&te.texture&&p.init(te,i.renderState)}if(Tt&&Tt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let te=0;te<nt.length;te++){const Dt=nt[te].camera;if(Dt){let zt=g[Dt];zt||(zt=new Jl,g[Dt]=zt);const kt=u.getCameraImage(Dt);zt.sourceTexture=kt}}}}for(let nt=0;nt<A.length;nt++){const Ot=b[nt],Tt=A[nt];Ot!==null&&Tt!==void 0&&Tt.update(Ot,it,l||r)}_t&&_t(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}const Yt=new nh;Yt.setAnimationLoop(Zt),this.setAnimationLoop=function(Z){_t=Z},this.dispose=function(){}}}const gi=new mn,O0=new Me;function B0(o,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Ql(o)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,w,M){g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),d(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,M)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),v(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,_,w):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===qe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===qe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=t.get(g),w=_.envMap,M=_.envMapRotation;w&&(p.envMap.value=w,gi.copy(M),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(gi)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,_,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=w*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z0(o,t,e,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){const M=w.program;n.uniformBlockBinding(_,M)}function l(_,w){let M=i[_.id];M===void 0&&(m(_),M=d(_),i[_.id]=M,_.addEventListener("dispose",p));const A=w.program;n.updateUBOMapping(_,A);const b=t.render.frame;s[_.id]!==b&&(h(_),s[_.id]=b)}function d(_){const w=u();_.__bindingPointIndex=w;const M=o.createBuffer(),A=_.__size,b=_.usage;return o.bindBuffer(o.UNIFORM_BUFFER,M),o.bufferData(o.UNIFORM_BUFFER,A,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,M),M}function u(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=i[_.id],M=_.uniforms,A=_.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let b=0,R=M.length;b<R;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let E=0,k=x.length;E<k;E++){const I=x[E];if(f(I,b,E,A)===!0){const B=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let U=0;U<L.length;U++){const N=L[U],G=v(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,B+F,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,B,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(_,w,M,A){const b=_.value,R=w+"_"+M;if(A[R]===void 0)return typeof b=="number"||typeof b=="boolean"?A[R]=b:A[R]=b.clone(),!0;{const x=A[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return A[R]=b,!0}else if(x.equals(b)===!1)return x.copy(b),!0}return!1}function m(_){const w=_.uniforms;let M=0;const A=16;for(let R=0,x=w.length;R<x;R++){const E=Array.isArray(w[R])?w[R]:[w[R]];for(let k=0,I=E.length;k<I;k++){const B=E[k],L=Array.isArray(B.value)?B.value:[B.value];for(let F=0,U=L.length;F<U;F++){const N=L[F],G=v(N),K=M%A,q=K%G.boundary,st=K+q;M+=q,st!==0&&A-st<G.storage&&(M+=A-st),B.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=G.storage}}}const b=M%A;return b>0&&(M+=A-b),_.__size=M,_.__cache={},this}function v(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xt("WebGLRenderer: Unsupported uniform value type.",_),w}function p(_){const w=_.target;w.removeEventListener("dispose",p);const M=r.indexOf(w.__bindingPointIndex);r.splice(M,1),o.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function g(){for(const _ in i)o.deleteBuffer(i[_]);r=[],i={},s={}}return{bind:c,update:l,dispose:g}}const G0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _n=null;function k0(){return _n===null&&(_n=new Rd(G0,16,16,Ji,Yn),_n.name="DFG_LUT",_n.minFilter=Ve,_n.magFilter=Ve,_n.wrapS=Vn,_n.wrapT=Vn,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}class V0{constructor(t={}){const{canvas:e=od(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=en}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const v=f,p=new Set([Ca,Aa,Ta]),g=new Set([en,Cn,bs,Es,ba,Ea]),_=new Uint32Array(4),w=new Int32Array(4);let M=null,A=null;const b=[],R=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let k=!1;this._outputColorSpace=on;let I=0,B=0,L=null,F=-1,U=null;const N=new Te,G=new Te;let K=null;const q=new Ut(0);let st=0,ot=e.width,$=e.height,_t=1,Zt=null,Yt=null;const Z=new Te(0,0,ot,$),it=new Te(0,0,ot,$);let nt=!1;const Ot=new Ua;let Tt=!1,Bt=!1;const fe=new Me,te=new z,Dt=new Te,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function jt(){return L===null?_t:1}let O=n;function pe(T,W){return e.getContext(T,W)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ma}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",xe,!1),O===null){const W="webgl2";if(O=pe(W,T),O===null)throw pe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw re("WebGLRenderer: "+T.message),T}let Gt,Wt,gt,P,y,H,tt,et,Q,St,dt,Ft,Vt,rt,ct,bt,At,vt,ne,V,ut,lt,yt;function at(){Gt=new Vp(O),Gt.init(),ut=new D0(O,Gt),Wt=new Np(O,Gt,t,ut),gt=new P0(O,Gt),Wt.reversedDepthBuffer&&h&&gt.buffers.depth.setReversed(!0),P=new Xp(O),y=new g0,H=new I0(O,Gt,gt,y,Wt,ut,P),tt=new kp(E),et=new Kd(O),lt=new Dp(O,et),Q=new Hp(O,et,P,lt),St=new qp(O,Q,et,lt,P),vt=new Yp(O,Wt,H),ct=new Up(y),dt=new m0(E,tt,Gt,Wt,lt,ct),Ft=new B0(E,y),Vt=new _0,rt=new b0(Gt),At=new Ip(E,tt,gt,St,m,c),bt=new R0(E,St,Wt),yt=new z0(O,P,Wt,gt),ne=new Lp(O,Gt,P),V=new Wp(O,Gt,P),P.programs=dt.programs,E.capabilities=Wt,E.extensions=Gt,E.properties=y,E.renderLists=Vt,E.shadowMap=bt,E.state=gt,E.info=P}at(),v!==en&&(x=new Kp(v,e.width,e.height,i,s));const J=new F0(E,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(ot,$,!1))},this.getSize=function(T){return T.set(ot,$)},this.setSize=function(T,W,j=!0){if(J.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=T,$=W,e.width=Math.floor(T*_t),e.height=Math.floor(W*_t),j===!0&&(e.style.width=T+"px",e.style.height=W+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(ot*_t,$*_t).floor()},this.setDrawingBufferSize=function(T,W,j){ot=T,$=W,_t=j,e.width=Math.floor(T*j),e.height=Math.floor(W*j),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(v===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,W,j,Y){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,W,j,Y),gt.viewport(N.copy(Z).multiplyScalar(_t).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,W,j,Y){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,W,j,Y),gt.scissor(G.copy(it).multiplyScalar(_t).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){gt.setScissorTest(nt=T)},this.setOpaqueSort=function(T){Zt=T},this.setTransparentSort=function(T){Yt=T},this.getClearColor=function(T){return T.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,j=!0){let Y=0;if(T){let X=!1;if(L!==null){const pt=L.texture.format;X=p.has(pt)}if(X){const pt=L.texture.type,xt=g.has(pt),mt=At.getClearColor(),Ct=At.getClearAlpha(),It=mt.r,Kt=mt.g,ie=mt.b;xt?(_[0]=It,_[1]=Kt,_[2]=ie,_[3]=Ct,O.clearBufferuiv(O.COLOR,0,_)):(w[0]=It,w[1]=Kt,w[2]=ie,w[3]=Ct,O.clearBufferiv(O.COLOR,0,w))}else Y|=O.COLOR_BUFFER_BIT}W&&(Y|=O.DEPTH_BUFFER_BIT),j&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),At.dispose(),Vt.dispose(),rt.dispose(),y.dispose(),tt.dispose(),St.dispose(),lt.dispose(),yt.dispose(),dt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Xa),J.removeEventListener("sessionend",Ya),li.stop()};function Et(T){T.preventDefault(),wo("WebGLRenderer: Context Lost."),k=!0}function qt(){wo("WebGLRenderer: Context Restored."),k=!1;const T=P.autoReset,W=bt.enabled,j=bt.autoUpdate,Y=bt.needsUpdate,X=bt.type;at(),P.autoReset=T,bt.enabled=W,bt.autoUpdate=j,bt.needsUpdate=Y,bt.type=X}function xe(T){re("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){const W=T.target;W.removeEventListener("dispose",de),Pn(W)}function Pn(T){In(T),y.remove(T)}function In(T){const W=y.get(T).programs;W!==void 0&&(W.forEach(function(j){dt.releaseProgram(j)}),T.isShaderMaterial&&dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,j,Y,X,pt){W===null&&(W=zt);const xt=X.isMesh&&X.matrixWorld.determinant()<0,mt=_h(T,W,j,Y,X);gt.setMaterial(Y,xt);let Ct=j.index,It=1;if(Y.wireframe===!0){if(Ct=Q.getWireframeAttribute(j),Ct===void 0)return;It=2}const Kt=j.drawRange,ie=j.attributes.position;let Lt=Kt.start*It,me=(Kt.start+Kt.count)*It;pt!==null&&(Lt=Math.max(Lt,pt.start*It),me=Math.min(me,(pt.start+pt.count)*It)),Ct!==null?(Lt=Math.max(Lt,0),me=Math.min(me,Ct.count)):ie!=null&&(Lt=Math.max(Lt,0),me=Math.min(me,ie.count));const Ae=me-Lt;if(Ae<0||Ae===1/0)return;lt.setup(X,Y,mt,j,Ct);let be,ge=ne;if(Ct!==null&&(be=et.get(Ct),ge=V,ge.setIndex(be)),X.isMesh)Y.wireframe===!0?(gt.setLineWidth(Y.wireframeLinewidth*jt()),ge.setMode(O.LINES)):ge.setMode(O.TRIANGLES);else if(X.isLine){let ze=Y.linewidth;ze===void 0&&(ze=1),gt.setLineWidth(ze*jt()),X.isLineSegments?ge.setMode(O.LINES):X.isLineLoop?ge.setMode(O.LINE_LOOP):ge.setMode(O.LINE_STRIP)}else X.isPoints?ge.setMode(O.POINTS):X.isSprite&&ge.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)So("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ge.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ze=X._multiDrawStarts,Rt=X._multiDrawCounts,Ze=X._multiDrawCount,le=Ct?et.get(Ct).bytesPerElement:1,an=y.get(Y).currentProgram.getUniforms();for(let gn=0;gn<Ze;gn++)an.setValue(O,"_gl_DrawID",gn),ge.render(ze[gn]/le,Rt[gn])}else if(X.isInstancedMesh)ge.renderInstances(Lt,Ae,X.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Rt=Math.min(j.instanceCount,ze);ge.renderInstances(Lt,Ae,Rt)}else ge.render(Lt,Ae)};function Wa(T,W,j){T.transparent===!0&&T.side===un&&T.forceSinglePass===!1?(T.side=qe,T.needsUpdate=!0,Ls(T,W,j),T.side=ai,T.needsUpdate=!0,Ls(T,W,j),T.side=un):Ls(T,W,j)}this.compile=function(T,W,j=null){j===null&&(j=T),A=rt.get(j),A.init(W),R.push(A),j.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),T!==j&&T.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights();const Y=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pt=X.material;if(pt)if(Array.isArray(pt))for(let xt=0;xt<pt.length;xt++){const mt=pt[xt];Wa(mt,j,X),Y.add(mt)}else Wa(pt,j,X),Y.add(pt)}),A=R.pop(),Y},this.compileAsync=function(T,W,j=null){const Y=this.compile(T,W,j);return new Promise(X=>{function pt(){if(Y.forEach(function(xt){y.get(xt).currentProgram.isReady()&&Y.delete(xt)}),Y.size===0){X(T);return}setTimeout(pt,10)}Gt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Uo=null;function vh(T){Uo&&Uo(T)}function Xa(){li.stop()}function Ya(){li.start()}const li=new nh;li.setAnimationLoop(vh),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(T){Uo=T,J.setAnimationLoop(T),T===null?li.stop():li.start()},J.addEventListener("sessionstart",Xa),J.addEventListener("sessionend",Ya),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const j=J.enabled===!0&&J.isPresenting===!0,Y=x!==null&&(L===null||j)&&x.begin(E,L);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(W),W=J.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,W,L),A=rt.get(T,R.length),A.init(W),R.push(A),fe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ot.setFromProjectionMatrix(fe,En,W.reversedDepth),Bt=this.localClippingEnabled,Tt=ct.init(this.clippingPlanes,Bt),M=Vt.get(T,b.length),M.init(),b.push(M),J.enabled===!0&&J.isPresenting===!0){const xt=E.xr.getDepthSensingMesh();xt!==null&&Fo(xt,W,-1/0,E.sortObjects)}Fo(T,W,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(Zt,Yt),kt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,kt&&At.addToRenderList(M,T),this.info.render.frame++,Tt===!0&&ct.beginShadows();const X=A.state.shadowsArray;if(bt.render(X,T,W),Tt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&x.hasRenderPass())===!1){const xt=M.opaque,mt=M.transmissive;if(A.setupLights(),W.isArrayCamera){const Ct=W.cameras;if(mt.length>0)for(let It=0,Kt=Ct.length;It<Kt;It++){const ie=Ct[It];ja(xt,mt,T,ie)}kt&&At.render(T);for(let It=0,Kt=Ct.length;It<Kt;It++){const ie=Ct[It];qa(M,T,ie,ie.viewport)}}else mt.length>0&&ja(xt,mt,T,W),kt&&At.render(T),qa(M,T,W)}L!==null&&B===0&&(H.updateMultisampleRenderTarget(L),H.updateRenderTargetMipmap(L)),Y&&x.end(E),T.isScene===!0&&T.onAfterRender(E,T,W),lt.resetDefaultState(),F=-1,U=null,R.pop(),R.length>0?(A=R[R.length-1],Tt===!0&&ct.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?M=b[b.length-1]:M=null};function Fo(T,W,j,Y){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ot.intersectsSprite(T)){Y&&Dt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const xt=St.update(T),mt=T.material;mt.visible&&M.push(T,xt,mt,j,Dt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ot.intersectsObject(T))){const xt=St.update(T),mt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Dt.copy(T.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Dt.copy(xt.boundingSphere.center)),Dt.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(mt)){const Ct=xt.groups;for(let It=0,Kt=Ct.length;It<Kt;It++){const ie=Ct[It],Lt=mt[ie.materialIndex];Lt&&Lt.visible&&M.push(T,xt,Lt,j,Dt.z,ie)}}else mt.visible&&M.push(T,xt,mt,j,Dt.z,null)}}const pt=T.children;for(let xt=0,mt=pt.length;xt<mt;xt++)Fo(pt[xt],W,j,Y)}function qa(T,W,j,Y){const{opaque:X,transmissive:pt,transparent:xt}=T;A.setupLightsView(j),Tt===!0&&ct.setGlobalState(E.clippingPlanes,j),Y&&gt.viewport(N.copy(Y)),X.length>0&&Ds(X,W,j),pt.length>0&&Ds(pt,W,j),xt.length>0&&Ds(xt,W,j),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ja(T,W,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){const Lt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new An(1,1,{generateMipmaps:!0,type:Lt?Yn:en,minFilter:wi,samples:Math.max(4,Wt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const pt=A.state.transmissionRenderTarget[Y.id],xt=Y.viewport||N;pt.setSize(xt.z*E.transmissionResolutionScale,xt.w*E.transmissionResolutionScale);const mt=E.getRenderTarget(),Ct=E.getActiveCubeFace(),It=E.getActiveMipmapLevel();E.setRenderTarget(pt),E.getClearColor(q),st=E.getClearAlpha(),st<1&&E.setClearColor(16777215,.5),E.clear(),kt&&At.render(j);const Kt=E.toneMapping;E.toneMapping=Tn;const ie=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),Tt===!0&&ct.setGlobalState(E.clippingPlanes,Y),Ds(T,j,Y),H.updateMultisampleRenderTarget(pt),H.updateRenderTargetMipmap(pt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let me=0,Ae=W.length;me<Ae;me++){const be=W[me],{object:ge,geometry:ze,material:Rt,group:Ze}=be;if(Rt.side===un&&ge.layers.test(Y.layers)){const le=Rt.side;Rt.side=qe,Rt.needsUpdate=!0,Ka(ge,j,Y,ze,Rt,Ze),Rt.side=le,Rt.needsUpdate=!0,Lt=!0}}Lt===!0&&(H.updateMultisampleRenderTarget(pt),H.updateRenderTargetMipmap(pt))}E.setRenderTarget(mt,Ct,It),E.setClearColor(q,st),ie!==void 0&&(Y.viewport=ie),E.toneMapping=Kt}function Ds(T,W,j){const Y=W.isScene===!0?W.overrideMaterial:null;for(let X=0,pt=T.length;X<pt;X++){const xt=T[X],{object:mt,geometry:Ct,group:It}=xt;let Kt=xt.material;Kt.allowOverride===!0&&Y!==null&&(Kt=Y),mt.layers.test(j.layers)&&Ka(mt,W,j,Ct,Kt,It)}}function Ka(T,W,j,Y,X,pt){T.onBeforeRender(E,W,j,Y,X,pt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(E,W,j,Y,T,pt),X.transparent===!0&&X.side===un&&X.forceSinglePass===!1?(X.side=qe,X.needsUpdate=!0,E.renderBufferDirect(j,W,Y,X,T,pt),X.side=ai,X.needsUpdate=!0,E.renderBufferDirect(j,W,Y,X,T,pt),X.side=un):E.renderBufferDirect(j,W,Y,X,T,pt),T.onAfterRender(E,W,j,Y,X,pt)}function Ls(T,W,j){W.isScene!==!0&&(W=zt);const Y=y.get(T),X=A.state.lights,pt=A.state.shadowsArray,xt=X.state.version,mt=dt.getParameters(T,X.state,pt,W,j),Ct=dt.getProgramCacheKey(mt);let It=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,Y.fog=W.fog;const Kt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=tt.get(T.envMap||Y.environment,Kt),Y.envMapRotation=Y.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",de),It=new Map,Y.programs=It);let ie=It.get(Ct);if(ie!==void 0){if(Y.currentProgram===ie&&Y.lightsStateVersion===xt)return Za(T,mt),ie}else mt.uniforms=dt.getUniforms(T),T.onBeforeCompile(mt,E),ie=dt.acquireProgram(mt,Ct),It.set(Ct,ie),Y.uniforms=mt.uniforms;const Lt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),Za(T,mt),Y.needsLights=yh(T),Y.lightsStateVersion=xt,Y.needsLights&&(Lt.ambientLightColor.value=X.state.ambient,Lt.lightProbe.value=X.state.probe,Lt.directionalLights.value=X.state.directional,Lt.directionalLightShadows.value=X.state.directionalShadow,Lt.spotLights.value=X.state.spot,Lt.spotLightShadows.value=X.state.spotShadow,Lt.rectAreaLights.value=X.state.rectArea,Lt.ltc_1.value=X.state.rectAreaLTC1,Lt.ltc_2.value=X.state.rectAreaLTC2,Lt.pointLights.value=X.state.point,Lt.pointLightShadows.value=X.state.pointShadow,Lt.hemisphereLights.value=X.state.hemi,Lt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Lt.spotLightMatrix.value=X.state.spotLightMatrix,Lt.spotLightMap.value=X.state.spotLightMap,Lt.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=ie,Y.uniformsList=null,ie}function $a(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=xo.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Za(T,W){const j=y.get(T);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function _h(T,W,j,Y,X){W.isScene!==!0&&(W=zt),H.resetTextureUnits();const pt=W.fog,xt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?W.environment:null,mt=L===null?E.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Qi,Ct=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,It=tt.get(Y.envMap||xt,Ct),Kt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ie=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!j.morphAttributes.position,me=!!j.morphAttributes.normal,Ae=!!j.morphAttributes.color;let be=Tn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(be=E.toneMapping);const ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ze=ge!==void 0?ge.length:0,Rt=y.get(Y),Ze=A.state.lights;if(Tt===!0&&(Bt===!0||T!==U)){const Ue=T===U&&Y.id===F;ct.setState(Y,T,Ue)}let le=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ze.state.version||Rt.outputColorSpace!==mt||X.isBatchedMesh&&Rt.batching===!1||!X.isBatchedMesh&&Rt.batching===!0||X.isBatchedMesh&&Rt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Rt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Rt.instancing===!1||!X.isInstancedMesh&&Rt.instancing===!0||X.isSkinnedMesh&&Rt.skinning===!1||!X.isSkinnedMesh&&Rt.skinning===!0||X.isInstancedMesh&&Rt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Rt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Rt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Rt.instancingMorph===!1&&X.morphTexture!==null||Rt.envMap!==It||Y.fog===!0&&Rt.fog!==pt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ct.numPlanes||Rt.numIntersection!==ct.numIntersection)||Rt.vertexAlphas!==Kt||Rt.vertexTangents!==ie||Rt.morphTargets!==Lt||Rt.morphNormals!==me||Rt.morphColors!==Ae||Rt.toneMapping!==be||Rt.morphTargetsCount!==ze)&&(le=!0):(le=!0,Rt.__version=Y.version);let an=Rt.currentProgram;le===!0&&(an=Ls(Y,W,X));let gn=!1,hi=!1,Ti=!1;const _e=an.getUniforms(),Oe=Rt.uniforms;if(gt.useProgram(an.program)&&(gn=!0,hi=!0,Ti=!0),Y.id!==F&&(F=Y.id,hi=!0),gn||U!==T){gt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_e.setValue(O,"projectionMatrix",T.projectionMatrix),_e.setValue(O,"viewMatrix",T.matrixWorldInverse);const $n=_e.map.cameraPosition;$n!==void 0&&$n.setValue(O,te.setFromMatrixPosition(T.matrixWorld)),Wt.logarithmicDepthBuffer&&_e.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&_e.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,hi=!0,Ti=!0)}if(Rt.needsLights&&(Ze.state.directionalShadowMap.length>0&&_e.setValue(O,"directionalShadowMap",Ze.state.directionalShadowMap,H),Ze.state.spotShadowMap.length>0&&_e.setValue(O,"spotShadowMap",Ze.state.spotShadowMap,H),Ze.state.pointShadowMap.length>0&&_e.setValue(O,"pointShadowMap",Ze.state.pointShadowMap,H)),X.isSkinnedMesh){_e.setOptional(O,X,"bindMatrix"),_e.setOptional(O,X,"bindMatrixInverse");const Ue=X.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),_e.setValue(O,"boneTexture",Ue.boneTexture,H))}X.isBatchedMesh&&(_e.setOptional(O,X,"batchingTexture"),_e.setValue(O,"batchingTexture",X._matricesTexture,H),_e.setOptional(O,X,"batchingIdTexture"),_e.setValue(O,"batchingIdTexture",X._indirectTexture,H),_e.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&_e.setValue(O,"batchingColorTexture",X._colorsTexture,H));const Kn=j.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&vt.update(X,j,an),(hi||Rt.receiveShadow!==X.receiveShadow)&&(Rt.receiveShadow=X.receiveShadow,_e.setValue(O,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&W.environment!==null&&(Oe.envMapIntensity.value=W.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=k0()),hi&&(_e.setValue(O,"toneMappingExposure",E.toneMappingExposure),Rt.needsLights&&xh(Oe,Ti),pt&&Y.fog===!0&&Ft.refreshFogUniforms(Oe,pt),Ft.refreshMaterialUniforms(Oe,Y,_t,$,A.state.transmissionRenderTarget[T.id]),xo.upload(O,$a(Rt),Oe,H)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(xo.upload(O,$a(Rt),Oe,H),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&_e.setValue(O,"center",X.center),_e.setValue(O,"modelViewMatrix",X.modelViewMatrix),_e.setValue(O,"normalMatrix",X.normalMatrix),_e.setValue(O,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ue=Y.uniformsGroups;for(let $n=0,Ai=Ue.length;$n<Ai;$n++){const Ja=Ue[$n];yt.update(Ja,an),yt.bind(Ja,an)}}return an}function xh(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function yh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,W,j){const Y=y.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),y.get(T.texture).__webglTexture=W,y.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const j=y.get(T);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};const Mh=O.createFramebuffer();this.setRenderTarget=function(T,W=0,j=0){L=T,I=W,B=j;let Y=null,X=!1,pt=!1;if(T){const mt=y.get(T);if(mt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(O.FRAMEBUFFER,mt.__webglFramebuffer),N.copy(T.viewport),G.copy(T.scissor),K=T.scissorTest,gt.viewport(N),gt.scissor(G),gt.setScissorTest(K),F=-1;return}else if(mt.__webglFramebuffer===void 0)H.setupRenderTarget(T);else if(mt.__hasExternalTextures)H.rebindTextures(T,y.get(T.texture).__webglTexture,y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Kt=T.depthTexture;if(mt.__boundDepthTexture!==Kt){if(Kt!==null&&y.has(Kt)&&(T.width!==Kt.image.width||T.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(T)}}const Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(pt=!0);const It=y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(It[W])?Y=It[W][j]:Y=It[W],X=!0):T.samples>0&&H.useMultisampledRTT(T)===!1?Y=y.get(T).__webglMultisampledFramebuffer:Array.isArray(It)?Y=It[j]:Y=It,N.copy(T.viewport),G.copy(T.scissor),K=T.scissorTest}else N.copy(Z).multiplyScalar(_t).floor(),G.copy(it).multiplyScalar(_t).floor(),K=nt;if(j!==0&&(Y=Mh),gt.bindFramebuffer(O.FRAMEBUFFER,Y)&&gt.drawBuffers(T,Y),gt.viewport(N),gt.scissor(G),gt.setScissorTest(K),X){const mt=y.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,mt.__webglTexture,j)}else if(pt){const mt=W;for(let Ct=0;Ct<T.textures.length;Ct++){const It=y.get(T.textures[Ct]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ct,It.__webglTexture,j,mt)}}else if(T!==null&&j!==0){const mt=y.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,j)}F=-1},this.readRenderTargetPixels=function(T,W,j,Y,X,pt,xt,mt=0){if(!(T&&T.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct){gt.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const It=T.textures[mt],Kt=It.format,ie=It.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt),!Wt.textureFormatReadable(Kt)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(ie)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-Y&&j>=0&&j<=T.height-X&&O.readPixels(W,j,Y,X,ut.convert(Kt),ut.convert(ie),pt)}finally{const It=L!==null?y.get(L).__webglFramebuffer:null;gt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,W,j,Y,X,pt,xt,mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Ct)if(W>=0&&W<=T.width-Y&&j>=0&&j<=T.height-X){gt.bindFramebuffer(O.FRAMEBUFFER,Ct);const It=T.textures[mt],Kt=It.format,ie=It.type;if(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt),!Wt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),O.readPixels(W,j,Y,X,ut.convert(Kt),ut.convert(ie),0);const me=L!==null?y.get(L).__webglFramebuffer:null;gt.bindFramebuffer(O.FRAMEBUFFER,me);const Ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await rd(O,Ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.deleteBuffer(Lt),O.deleteSync(Ae),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,j=0){const Y=Math.pow(2,-j),X=Math.floor(T.image.width*Y),pt=Math.floor(T.image.height*Y),xt=W!==null?W.x:0,mt=W!==null?W.y:0;H.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,xt,mt,X,pt),gt.unbindTexture()};const wh=O.createFramebuffer(),Sh=O.createFramebuffer();this.copyTextureToTexture=function(T,W,j=null,Y=null,X=0,pt=0){let xt,mt,Ct,It,Kt,ie,Lt,me,Ae;const be=T.isCompressedTexture?T.mipmaps[pt]:T.image;if(j!==null)xt=j.max.x-j.min.x,mt=j.max.y-j.min.y,Ct=j.isBox3?j.max.z-j.min.z:1,It=j.min.x,Kt=j.min.y,ie=j.isBox3?j.min.z:0;else{const Oe=Math.pow(2,-X);xt=Math.floor(be.width*Oe),mt=Math.floor(be.height*Oe),T.isDataArrayTexture?Ct=be.depth:T.isData3DTexture?Ct=Math.floor(be.depth*Oe):Ct=1,It=0,Kt=0,ie=0}Y!==null?(Lt=Y.x,me=Y.y,Ae=Y.z):(Lt=0,me=0,Ae=0);const ge=ut.convert(W.format),ze=ut.convert(W.type);let Rt;W.isData3DTexture?(H.setTexture3D(W,0),Rt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(H.setTexture2DArray(W,0),Rt=O.TEXTURE_2D_ARRAY):(H.setTexture2D(W,0),Rt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ze=O.getParameter(O.UNPACK_ROW_LENGTH),le=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),gn=O.getParameter(O.UNPACK_SKIP_ROWS),hi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,be.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,Kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ie);const Ti=T.isDataArrayTexture||T.isData3DTexture,_e=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const Oe=y.get(T),Kn=y.get(W),Ue=y.get(Oe.__renderTarget),$n=y.get(Kn.__renderTarget);gt.bindFramebuffer(O.READ_FRAMEBUFFER,Ue.__webglFramebuffer),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Ai=0;Ai<Ct;Ai++)Ti&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,y.get(T).__webglTexture,X,ie+Ai),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,y.get(W).__webglTexture,pt,Ae+Ai)),O.blitFramebuffer(It,Kt,xt,mt,Lt,me,xt,mt,O.DEPTH_BUFFER_BIT,O.NEAREST);gt.bindFramebuffer(O.READ_FRAMEBUFFER,null),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||y.has(T)){const Oe=y.get(T),Kn=y.get(W);gt.bindFramebuffer(O.READ_FRAMEBUFFER,wh),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Sh);for(let Ue=0;Ue<Ct;Ue++)Ti?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.__webglTexture,X,ie+Ue):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Oe.__webglTexture,X),_e?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kn.__webglTexture,pt,Ae+Ue):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kn.__webglTexture,pt),X!==0?O.blitFramebuffer(It,Kt,xt,mt,Lt,me,xt,mt,O.COLOR_BUFFER_BIT,O.NEAREST):_e?O.copyTexSubImage3D(Rt,pt,Lt,me,Ae+Ue,It,Kt,xt,mt):O.copyTexSubImage2D(Rt,pt,Lt,me,It,Kt,xt,mt);gt.bindFramebuffer(O.READ_FRAMEBUFFER,null),gt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _e?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Rt,pt,Lt,me,Ae,xt,mt,Ct,ge,ze,be.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,pt,Lt,me,Ae,xt,mt,Ct,ge,be.data):O.texSubImage3D(Rt,pt,Lt,me,Ae,xt,mt,Ct,ge,ze,be):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,Lt,me,xt,mt,ge,ze,be.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,Lt,me,be.width,be.height,ge,be.data):O.texSubImage2D(O.TEXTURE_2D,pt,Lt,me,xt,mt,ge,ze,be);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ze),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,gn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,hi),pt===0&&W.generateMipmaps&&O.generateMipmap(Rt),gt.unbindTexture()},this.initRenderTarget=function(T){y.get(T).__webglFramebuffer===void 0&&H.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?H.setTextureCube(T,0):T.isData3DTexture?H.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?H.setTexture2DArray(T,0):H.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){I=0,B=0,L=null,gt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class H0{constructor(){C(this,"scene");C(this,"camera");C(this,"renderer");this.scene=new wd,this.scene.background=new Ut(8900331);const t=window.innerWidth,e=window.innerHeight;this.camera=new tn(75,t/e,.1,5e3),this.camera.position.set(0,30,50),this.camera.lookAt(0,0,0),this.renderer=new V0({antialias:!0}),this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ws,document.body.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}render(){this.renderer.render(this.scene,this.camera)}}class W0{constructor(t){C(this,"position",new z(0,5,0));C(this,"mesh");C(this,"targetAngle",0);C(this,"playerPosition",new z(0,0,0));C(this,"aiState","idle");C(this,"aiTimer",0);C(this,"leftArm",new oe);C(this,"rightArm",new oe);C(this,"slapTimer",0);C(this,"slapCooldown",1.2);C(this,"slapProgress",0);C(this,"slapActive",!1);C(this,"slapSide","left");C(this,"speakCallback",null);this.mesh=this.createCatGodMesh(),this.mesh.position.copy(this.position),t.add(this.mesh)}takeDamage(t){}isAlive(){return!0}createCatGodMesh(){const t=new oe,e=new ht(10,32,32),n=new Pt({color:16755200,transparent:!0,opacity:.15}),i=new D(e,n);t.add(i);const s=new ht(12,32,32),r=new Pt({color:16776960,transparent:!0,opacity:.1}),a=new D(s,r);t.add(a);const c=new Ht(3.5,5,3.5),l=new Nt({color:16766720,metalness:.4,roughness:.3}),d=new D(c,l);d.position.y=-.5,d.castShadow=!0,d.receiveShadow=!0,t.add(d);const u=new ht(1.5,32,32),h=new Nt({color:16764057,metalness:.1,roughness:.5}),f=new D(u,h);f.position.y=4,f.castShadow=!0,f.receiveShadow=!0,t.add(f);const m=new Ee(.5,1.5,16),v=new Nt({color:16764057,metalness:.1,roughness:.5}),p=new D(m,v);p.position.set(-1,5.5,0),p.rotation.z=.3,p.castShadow=!0,t.add(p);const g=new D(m,v);g.position.set(1,5.5,0),g.rotation.z=-.3,g.castShadow=!0,t.add(g);const _=new Ee(.25,.8,8),w=new Nt({color:16751052}),M=new D(_,w);M.position.set(-1,5.2,0),M.rotation.z=.3,t.add(M);const A=new D(_,w);A.position.set(1,5.2,0),A.rotation.z=-.3,t.add(A);const b=new ht(.6,16,16),R=new Pt({color:65280}),x=new D(b,R);x.position.set(-.6,4.5,1.3),t.add(x);const E=new D(b,R);E.position.set(.6,4.5,1.3),t.add(E);const k=new ht(.25,8,8),I=new Pt({color:0}),B=new D(k,I);B.position.set(-.6,4.5,1.5),t.add(B);const L=new D(k,I);L.position.set(.6,4.5,1.5),t.add(L);const F=new Fa({color:16777215}),U=[new z(-1.2,4,1),new z(-2,4,.8),new z(-1.2,4,-1),new z(-2,4,-1.2)];for(const jt of U){const O=new Se().setFromPoints([new z(-1,4,0),jt]),pe=new ga(O,F);t.add(pe)}const N=[new z(1.2,4,1),new z(2,4,.8),new z(1.2,4,-1),new z(2,4,-1.2)];for(const jt of N){const O=new Se().setFromPoints([new z(1,4,0),jt]),pe=new ga(O,F);t.add(pe)}const G=new ht(.2,8,8),K=new Nt({color:16751052}),q=new D(G,K);q.position.set(0,3.8,1.5),t.add(q);const st=new $e(5,.4,16,100),ot=new Pt({color:16776960}),$=new D(st,ot);$.rotation.x=Math.PI/3,$.position.y=6,t.add($);const _t=new $e(5.5,.2,16,100),Zt=new Pt({color:16777215}),Yt=new D(_t,Zt);Yt.rotation.x=Math.PI/3.5,Yt.position.y=6.2,t.add(Yt);const Z=new Ee(.3,3,8),it=new Nt({color:16766720,metalness:.3}),nt=new D(Z,it);nt.position.set(0,2,-2),nt.rotation.x=.8,nt.castShadow=!0,t.add(nt),this.buildArms(t);const Ot=new ht(1.8,16,16),Tt=new Pt({color:16777113,transparent:!0,opacity:.3}),Bt=new D(Ot,Tt);Bt.position.y=4.5,t.add(Bt);const fe=new Se,te=50,Dt=new Float32Array(te*3);for(let jt=0;jt<te*3;jt+=3)Dt[jt]=(Math.random()-.5)*8,Dt[jt+1]=(Math.random()-.5)*8+4,Dt[jt+2]=(Math.random()-.5)*8;fe.setAttribute("position",new We(Dt,3));const zt=new ss({size:.3,color:16776960,transparent:!0,opacity:.8}),kt=new Ei(fe,zt);return t.add(kt),t}buildArms(t){const e=new Nt({color:16764057}),n=new Nt({color:16777215,metalness:.5}),i=new Qt(.3,.25,1.6,8),s=new Qt(.25,.2,1.3,8),r=new Ht(.8,.35,.9),a=new Ee(.09,.45,6);this.leftArm=new oe,this.leftArm.position.set(-2,1.2,0);const c=new D(i,e);c.rotation.z=Math.PI/4,c.position.set(-.55,0,0),c.castShadow=!0,this.leftArm.add(c);const l=new D(s,e);l.rotation.z=Math.PI/5,l.position.set(-1.25,-.4,0),l.castShadow=!0,this.leftArm.add(l);const d=new D(r,e);d.position.set(-1.9,-.75,0),this.leftArm.add(d);for(let m=0;m<3;m++){const v=new D(a,n);v.position.set(-1.9+(m-1)*.22,-.95,.42),v.rotation.x=-.6,this.leftArm.add(v)}t.add(this.leftArm),this.rightArm=new oe,this.rightArm.position.set(2,1.2,0);const u=new D(i,e);u.rotation.z=-Math.PI/4,u.position.set(.55,0,0),u.castShadow=!0,this.rightArm.add(u);const h=new D(s,e);h.rotation.z=-Math.PI/5,h.position.set(1.25,-.4,0),h.castShadow=!0,this.rightArm.add(h);const f=new D(r,e);f.position.set(1.9,-.75,0),this.rightArm.add(f);for(let m=0;m<3;m++){const v=new D(a,n);v.position.set(1.9+(m-1)*.22,-.95,.42),v.rotation.x=-.6,this.rightArm.add(v)}t.add(this.rightArm)}update(t,e){this.playerPosition.copy(e);const n=this.playerPosition.distanceTo(this.position);this.updateAI(t,n);const i=Date.now()*.001,s=Math.sin(i*2)*.5;if(this.position.y=5+s,this.mesh.position.copy(this.position),this.mesh.rotation.y+=(this.targetAngle-this.mesh.rotation.y)*.1,this.aiTimer+=t,this.aiTimer>4&&(this.aiTimer=0,this.speakAI(n)),this.slapTimer+=t,n<8&&this.slapTimer>=this.slapCooldown&&!this.slapActive&&(this.slapActive=!0,this.slapProgress=0,this.slapSide=Math.random()<.5?"left":"right",this.slapTimer=0,console.log("🐱 Cat God: *SLAP* get away from me mortal!!")),this.slapActive){this.slapProgress+=t*4.5;const r=this.slapSide==="left"?this.leftArm:this.rightArm,a=this.slapSide==="left"?-1:1;if(this.slapProgress<.5){const c=this.slapProgress*2;r.rotation.z=a*c*(Math.PI/2.5),r.rotation.x=-c*.4}else if(this.slapProgress<1){const c=(this.slapProgress-.5)*2;r.rotation.z=a*(1-c)*(Math.PI/2.5),r.rotation.x=-((1-c)*.4)+c*(Math.PI/1.8)}else r.rotation.z=0,r.rotation.x=0,this.slapActive=!1}else{const r=Date.now()*.001;this.leftArm.rotation.z=Math.sin(r*1.2)*.06,this.rightArm.rotation.z=-Math.sin(r*1.2)*.06}for(let r=0;r<this.mesh.children.length;r++){const a=this.mesh.children[r];a instanceof D&&a.geometry instanceof $e&&(a.rotation.z+=.012,a.rotation.x+=.005),a instanceof D&&a.geometry instanceof ht&&r>10&&(a.rotation.x+=.008,a.rotation.y+=.01),a instanceof Ei&&(a.rotation.x+=.003,a.rotation.y+=.004)}this.mesh.children[3]&&(this.mesh.children[3].rotation.z+=Math.sin(i*3)*.01),this.mesh.children[4]&&(this.mesh.children[4].rotation.z-=Math.sin(i*3)*.01)}updateAI(t,e){e<12?(this.aiState="dominant",this.moveAwayFromPlayer(t,2.5)):e<30?(this.aiState="curious",this.moveTowardPlayer(t,1.2)):(this.aiState="idle",this.randomWalk(t,1.5))}moveTowardPlayer(t,e){const n=this.playerPosition.clone().sub(this.position);n.y=0,n.lengthSq()>.01&&(n.normalize(),this.targetAngle=Math.atan2(n.z,n.x),this.position.add(n.multiplyScalar(e*t)))}moveAwayFromPlayer(t,e){const n=this.position.clone().sub(this.playerPosition);n.y=0,n.lengthSq()>.01&&(n.normalize(),this.targetAngle=Math.atan2(n.z,n.x),this.position.add(n.multiplyScalar(e*t)))}speakAI(t){const e=["I sense a mortal presence... approach with respect.","The baby god knows your footsteps.","Bow to me and I may grant you a yarn.","I will protect this realm with holy fur.","The whiskers of fate are twitching."];let n=e[Math.floor(Math.random()*e.length)];t<12?n="You are too close to the divine kitty. Back away, human.":t<30&&(n="Curiosity is a dangerous toy.");const i=this.aiState==="dominant"?"[DOMINANT] ":this.aiState==="curious"?"[CURIOUS] ":"[IDLE] ";console.log(`🐱 Cat God AI: "${i}${n}"`),this.speakCallback?.(this.position,n,9)}randomWalk(t,e=1.5){Math.random()<.02&&(this.targetAngle=Math.random()*Math.PI*2);const n=Math.cos(this.targetAngle)*e,i=Math.sin(this.targetAngle)*e;this.position.x+=n*t,this.position.z+=i*t,this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z))}setSpeakCallback(t){this.speakCallback=t}getMesh(){return this.mesh}isIndestructible(){return!0}respawn(){this.position.set(0,5,0),this.mesh.position.copy(this.position),console.log("🐱 Cat God respawns! You cannot destroy the divine!")}}class ci{constructor(t){C(this,"position");C(this,"velocity");C(this,"mesh");C(this,"isAlive_",!0);C(this,"targetAngle",0);C(this,"dialogues",[]);C(this,"dialogueTimer",0);C(this,"bubbleHeadOffset",3.5);C(this,"speakCallback",null);C(this,"hp",40);C(this,"maxHp",40);C(this,"attackTimer_",0);C(this,"attackInterval_",2);C(this,"verticalVelocity",0);C(this,"isGrounded",!0);C(this,"GROUND_Y",2);C(this,"GRAVITY",-28);C(this,"NPC_JUMP_FORCE",10);this.position=t.clone(),this.velocity=new z(0,0,0),this.mesh=new oe}randomWalk(t,e=2){Math.random()<.03&&(this.targetAngle=Math.random()*Math.PI*2),this.isGrounded&&Math.random()<.004&&(this.verticalVelocity=this.NPC_JUMP_FORCE,this.isGrounded=!1),this.applyGravity(t),this.velocity.x=Math.cos(this.targetAngle)*e,this.velocity.z=Math.sin(this.targetAngle)*e,this.position.add(this.velocity.clone().multiplyScalar(t)),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z)),this.mesh.position.copy(this.position),(this.mesh instanceof oe||this.mesh.rotation)&&(this.mesh.rotation.y+=(this.targetAngle-this.mesh.rotation.y)*.1)}applyGravity(t){this.verticalVelocity+=this.GRAVITY*t,this.position.y+=this.verticalVelocity*t,this.position.y<=this.GROUND_Y&&(this.position.y=this.GROUND_Y,this.verticalVelocity=0,this.isGrounded=!0)}speak(){if(this.dialogues.length>0){const t=this.dialogues[Math.floor(Math.random()*this.dialogues.length)];console.log(`🐱 ${t}`),this.speakCallback?.(this.position,t,this.bubbleHeadOffset)}}setSpeakCallback(t){this.speakCallback=t}getMesh(){return this.mesh}getPosition(){return this.position}isAlive(){return this.isAlive_}die(){this.isAlive_=!1}takeDamage(t){this.hp=Math.max(0,this.hp-t),this.hp<=0&&this.die()}getHp(){return this.hp}getMaxHp(){return this.maxHp}setMaxHp(t){this.maxHp=t,this.hp=t}tickAttack(t,e,n,i){if(i<=0)return 0;if(this.attackTimer_-=e,this.attackTimer_<=0){if(this.position.distanceTo(t)<=n)return this.attackTimer_=this.attackInterval_,i;this.attackTimer_=.3}return 0}}var Ke=(o=>(o.NORMAL="normal",o.JESUS="jesus",o.ROBOT="robot",o.ORB="orb",o.ANGEL="angel",o.PIRATE="pirate",o.WIZARD="wizard",o.VAMPIRE="vampire",o.DISCO="disco",o.SHADOW="shadow",o))(Ke||{});class X0 extends ci{constructor(e,n){super(n);C(this,"catType");C(this,"speed",3);C(this,"floatOffset",Math.random()*Math.PI*2);this.catType=e,this.mesh=this.createCatMesh(),this.mesh.position.copy(this.position),this.setDialogues()}createCatMesh(){const e=new oe;switch(this.catType){case"normal":return this.createNormalCat(e);case"jesus":return this.createJesusCat(e);case"robot":return this.createRobotCat(e);case"orb":return this.createOrbCat(e);case"angel":return this.createAngelCat(e);case"pirate":return this.createPirateCat(e);case"wizard":return this.createWizardCat(e);case"vampire":return this.createVampireCat(e);case"disco":return this.createDiscoCat(e);case"shadow":return this.createShadowCat(e)}return e}createNormalCat(e){const n=new Ht(1,1.5,.8),i=new Nt({color:16746564}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new ht(.6,16,16),a=new D(r,i);a.position.y=1,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new Ee(.2,1.5,8),l=new D(c,i);l.position.set(0,.3,-.6),l.rotation.z=.5,l.castShadow=!0,e.add(l);const d=new ht(.15,8,8),u=new Pt({color:0}),h=new D(d,u);h.position.set(-.2,1.3,.5),e.add(h);const f=new D(d,u);return f.position.set(.2,1.3,.5),e.add(f),e}createJesusCat(e){this.createNormalCat(e);const n=new $e(1,.15,16,100),i=new Pt({color:16776960}),s=new D(n,i);s.position.y=2,s.rotation.x=Math.PI/3,e.add(s);const r=new ht(1.5,16,16),a=new Pt({color:16777215,transparent:!0,opacity:.1,wireframe:!1}),c=new D(r,a);return e.add(c),e}createRobotCat(e){const n=new Ht(1,1.5,.8),i=new Nt({color:8947848,metalness:.8,roughness:.2}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new Ht(.8,.8,.8),a=new D(r,i);a.position.y=1.2,a.castShadow=!0,e.add(a);const c=new Ee(.1,.8,8),l=new D(c,i);l.position.y=2.2,e.add(l);const d=new ht(.15,8,8),u=new Pt({color:16711680}),h=new D(d,u);h.position.set(-.2,1.3,.5),e.add(h);const f=new D(d,u);return f.position.set(.2,1.3,.5),e.add(f),e}createOrbCat(e){const n=new ht(.8,16,16),i=new Pt({color:52479}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new ht(.15,8,8),a=new Pt({color:16777215}),c=new D(r,a);c.position.set(-.2,.3,.6),e.add(c);const l=new D(r,a);l.position.set(.2,.3,.6),e.add(l);const d=new Se,u=20,h=new Float32Array(u*3);for(let v=0;v<u*3;v++)h[v]=(Math.random()-.5)*4;d.setAttribute("position",new We(h,3));const f=new ss({size:.2,color:65280}),m=new Ei(d,f);return e.add(m),e}createAngelCat(e){this.createNormalCat(e);const n=new Ee(1,.5,4),i=new Nt({color:13421772}),s=new D(n,i);s.position.set(-.8,1,0),s.rotation.z=Math.PI/4,e.add(s);const r=new D(n,i);r.position.set(.8,1,0),r.rotation.z=-Math.PI/4,e.add(r);const a=new $e(1,.15,16,100),c=new Pt({color:16776960}),l=new D(a,c);return l.position.y=2,l.rotation.x=Math.PI/3,e.add(l),e}createPirateCat(e){this.createNormalCat(e);const n=new Ee(1,.4,8),i=new Nt({color:3355443}),s=new D(n,i);s.position.y=1.8,e.add(s);const r=new Po(.3,8),a=new Pt({color:0}),c=new D(r,a);return c.position.set(-.2,1.3,.5),c.position.z+=.01,e.add(c),e}createWizardCat(e){this.createNormalCat(e);const n=new Ee(.8,1.2,8),i=new Nt({color:4456703}),s=new D(n,i);s.position.y=2,e.add(s);const r=new Qt(.1,.1,2,8),a=new Nt({color:9127187}),c=new D(r,a);c.position.set(.8,1,0),c.rotation.z=Math.PI/4,e.add(c);const l=new ht(.3,8,8),d=new Pt({color:16711935}),u=new D(l,d);return u.position.set(1.2,2.2,0),e.add(u),e}createVampireCat(e){this.createNormalCat(e);const n=new Ht(1.5,2,.2),i=new Nt({color:13369344}),s=new D(n,i);s.position.z=-.5,s.position.y=.5,e.add(s);const r=new Ee(.15,.4,4),a=new Pt({color:16777215}),c=new D(r,a);c.position.set(-.15,.7,.6),c.rotation.z=Math.PI/6,e.add(c);const l=new D(r,a);return l.position.set(.15,.7,.6),l.rotation.z=-Math.PI/6,e.add(l),e}createDiscoCat(e){this.createNormalCat(e);const n=new ht(.4,8,8),i=[16711680,65280,255,16776960,16711935,65535];for(let s=0;s<6;s++){const r=new Pt({color:i[s]}),a=new D(n,r),c=s/6*Math.PI*2;a.position.x=Math.cos(c)*1,a.position.y=.5+Math.sin(c)*.5,e.add(a)}return e}createShadowCat(e){const n=new Ht(1,1.5,.8),i=new Nt({color:1710618,metalness:.4,roughness:.8}),s=new D(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new ht(.6,16,16),a=new D(r,i);a.position.y=1,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new Ee(.2,1.5,8),l=new D(c,i);l.position.set(0,.3,-.6),l.rotation.z=.5,l.castShadow=!0,e.add(l);const d=new ht(.15,8,8),u=new Pt({color:16724787}),h=new D(d,u);h.position.set(-.2,1.3,.5),e.add(h);const f=new D(d,u);return f.position.set(.2,1.3,.5),e.add(f),e}setDialogues(){switch(this.catType){case"normal":this.dialogues=["Meow!","Meow meow","Purrr...","Hiss!","Mew?","ORA ORA ORA! (tiny punch sound)","MUDA MUDA MUDA!","Yare yare... just a regular cat"];break;case"jesus":this.dialogues=["Blessed be the cat god","Forgive my human","Love all cats","Peace through purring","Meowmen","GURETO DAZE! This blessing!","Your next line is 'What a holy cat!'","WRYYYYYYY! Blessed meow!"];break;case"robot":this.dialogues=["Beep boop meow","Calculating cuteness...","ERROR: Too much cuteness","Meow.exe running","Processing treats","ZA WARUDO! Time to recharge!","STAND POWER ACTIVATED","Robot cat... MEOW PLATINUM!"];break;case"orb":this.dialogues=["The orb speaks...","Cosmic purring detected","MEOOOOOW from the void","All knowing feline","The sphere understands","I see all timelines... ゴゴゴゴゴ","STONE FREE! I'm liberated!","Floating between JoJo parts..."];break;case"angel":this.dialogues=["Wings carry my love","Divine meowing","Heavenly purrs","Angelic wishes","Blessed journey","GOLDEN EXPERIENCE! It's alive!","Flying through golden wind...","Heaven is where all cats are blessed"];break;case"pirate":this.dialogues=["Arrr meow matey!","Shiver me whiskers!","Treasure purrs ahead!","Avast ye scallywag!","X marks the meow!","OI JOSUKE! This treasure is amazing!","NIGERUNDAYO! From da kraken!","Sailin' the GOLDEN WIND seas!"];break;case"wizard":this.dialogues=["Meow-gical mysteries unfold","Spellcasting feline here!","Your wish is my purr","Wingardium Meow-osa!","Mystic cat wisdom","HAMON BREATHING! Meow technique!","Ancient jojo martial arts...","My stand is MEOW REQUIEM!"];break;case"vampire":this.dialogues=["I vant to suck your treats!","The night is meoow","Darkness calls to me","Blood vuns deep...","Bite me gently human","DIO! I am your meow servant!","THE STONE MASK TRANSFORMS ME!","WRYYYYYYY! ETERNAL DARKNESS!"];break;case"disco":this.dialogues=["Stayin' alive meow!","Boogie boogie purr!","Disco fever!","Dance with me feline!","Night fever meow!","TORTURE DANCE! PURR EDITION!","GOLDEN WIND DISCO INFERNO!","Giorno's drip is IMMACULATE!"];break;case"shadow":this.dialogues=["From shadows we rise...","Darkness is my home","Silent paws, silent meow","The void calls...","In darkness, all cats are equal","SHADOW MEOW REQUIEM!","EPITAPH shows your destiny!","King Crimson deleted your meow!"];break}}update(e){this.randomWalk(e,this.speed),Math.random()<5e-4&&this.speak();const n=Date.now()*.001+this.floatOffset;if(this.catType!=="orb"&&this.catType!=="angel"&&(this.mesh.position.y=1.5+Math.sin(n*2)*.08),this.mesh.scale.setScalar(1+Math.sin(n*3)*.02),this.catType==="orb"||this.catType==="angel"){const i=Math.sin(n*2+this.position.x)*.3;this.position.y=2+i,this.mesh.position.y=this.position.y}if(this.catType==="orb"&&(this.mesh.rotation.z+=.02),this.catType==="disco"&&(this.mesh.rotation.y+=.05,this.mesh.position.y=2+Math.sin(n)*.3),this.catType==="shadow"&&Math.random()<.01&&(this.mesh.position.y+=(Math.random()-.5)*.1),this.catType==="vampire"){this.mesh.position.y+=Math.sin(n*6)*.02;const i=Math.sin(n*.5)*2+5;this.velocity.multiplyScalar(i/this.speed)}this.catType==="wizard"&&Math.random()<.02&&(this.mesh.rotation.y+=(Math.random()-.5)*.3)}getType(){return this.catType}}class Y0 extends ci{constructor(e){super(e);C(this,"singSongTimer",Math.random()*5);C(this,"singSongInterval",6+Math.random()*8);C(this,"walkTimer",0);C(this,"leftArm");C(this,"rightArm");C(this,"armWaveTimer",0);C(this,"isWaving",!1);C(this,"audioCtx",null);C(this,"songs",["I LOVE YOU, YOU LOVE ME","WE'RE A HAPPY FAMILY","WITH A GREAT BIG HUG AND A KISS FROM ME TO YOU","WON'T YOU SAY YOU LOVE ME TOO","I LOVE YOU, YOU LOVE ME","WE'RE BEST FRIENDS AS FRIENDS CAN BE","SUPER DEE DUPER!!","BIG PURPLE HUGS FOR EVERYONE!!","TODAY IS A BEAUTIFUL DAY!!","LET'S IMAGINE TOGETHER!!","SHARING AND CARING!! 💜","BARNEY IS YOUR DINOSAUR~ 🦕"]);this.bubbleHeadOffset=4.5,this.dialogues=this.songs;const{group:n,leftArm:i,rightArm:s}=this.buildMesh();this.mesh=n,this.leftArm=i,this.rightArm=s,this.mesh.position.copy(this.position);try{this.audioCtx=new(window.AudioContext||window.webkitAudioContext)}catch{}}buildMesh(){const e=new oe,n=new Nt({color:7024544,roughness:.75}),i=new Nt({color:8042056,roughness:.8}),s=new Pt({color:16777215}),r=new Pt({color:1118481}),a=new Nt({color:16766720,roughness:.6}),c=new Pt({color:16746666}),l=new ht(1.3,20,16),d=new D(l,n);d.scale.set(1,1.2,.95),d.position.set(0,1.8,0),d.castShadow=!0,e.add(d);const u=new ht(.9,16,14),h=new D(u,i);h.scale.set(.9,1,.35),h.position.set(0,1.85,1.05),e.add(h);const f=new ht(1,20,16),m=new D(f,n);m.scale.set(1,.9,1),m.position.set(0,3.55,0),m.castShadow=!0,e.add(m);const v=new ht(.65,16,12),p=new D(v,n);p.scale.set(1,.6,.9),p.position.set(0,3.2,.85),e.add(p);const g=new Qt(.55,.5,.08,20,1,!1,0,Math.PI),_=new D(g,c);_.rotation.x=-Math.PI/2,_.rotation.z=Math.PI,_.position.set(0,3.05,1.15),e.add(_);const w=new Ht(.18,.2,.1),M=new Pt({color:16775408});for(let Dt=-1;Dt<=1;Dt++){const zt=new D(w,M);zt.position.set(Dt*.25,3.12,1.42),e.add(zt)}const A=new ht(.28,12,12),b=new D(A,s);b.position.set(-.42,3.7,.82),e.add(b);const R=new D(A,s);R.position.set(.42,3.7,.82),e.add(R);const x=new ht(.16,8,8),E=new D(x,r);E.position.set(-.42,3.7,1.05),e.add(E);const k=new D(x,r);k.position.set(.42,3.7,1.05),e.add(k);const I=new ht(.07,6,6),B=new Pt({color:16729224});for(const Dt of[-.42,.42]){const zt=new D(I,B);zt.position.set(Dt,3.72,1.08),e.add(zt)}const L=new ht(.07,6,6),F=new D(L,r);F.position.set(-.2,3.35,1.38),e.add(F);const U=new D(L,r);U.position.set(.2,3.35,1.38),e.add(U);const N=new Ee(.18,.45,8),G=new Nt({color:4881451,roughness:.9}),K=[[0,4.4,-.3],[0,3.35,-.95],[0,2.9,-1.25],[0,2.45,-1.3],[0,1.9,-1.2]];for(const[Dt,zt,kt]of K){const jt=new D(N,G);jt.position.set(Dt,zt,kt),jt.rotation.x=Math.PI/8,e.add(jt)}const q=new oe;q.position.set(-1.45,2.5,0);const st=new Qt(.3,.25,.9,10),ot=new D(st,n);ot.position.set(0,-.45,0),ot.castShadow=!0,q.add(ot);const $=new Qt(.22,.18,.7,10),_t=new D($,n);_t.position.set(0,-1.1,.18),_t.rotation.x=-.4,q.add(_t);const Zt=new ht(.25,8,8),Yt=new D(Zt,n);Yt.position.set(0,-1.55,.42),q.add(Yt);const Z=new Qt(.07,.04,.28,6);for(let Dt=-1;Dt<=1;Dt++){const zt=new D(Z,n);zt.position.set(Dt*.12,-1.8,.5),zt.rotation.x=-.6,q.add(zt)}q.rotation.z=Math.PI/12,e.add(q);const it=q.clone();it.position.set(1.45,2.5,0),it.rotation.z=-Math.PI/12,it.scale.x=-1,e.add(it);const nt=new Qt(.45,.4,1.1,12),Ot=new Qt(.38,.28,.9,12),Tt=new Ht(.55,.35,.85);for(const Dt of[-1,1]){const zt=new D(nt,n);zt.position.set(Dt*.6,.5,0),zt.castShadow=!0,e.add(zt);const kt=new D(Ot,n);kt.position.set(Dt*.6,-.4,.12),kt.rotation.x=.15,kt.castShadow=!0,e.add(kt);const jt=new D(Tt,n);jt.position.set(Dt*.62,-1.05,.28),jt.castShadow=!0,e.add(jt)}const Bt=new Qt(.45,.08,1.8,10),fe=new D(Bt,n);fe.position.set(0,1.2,-1.6),fe.rotation.x=Math.PI/2.5,fe.castShadow=!0,e.add(fe);const te=new ht(.12,6,6);for(let Dt=0;Dt<6;Dt++){const zt=new D(te,a);zt.position.set((Math.random()-.5)*1.6,1.2+Math.random()*1.8,.9+Math.random()*.3),zt.scale.set(1,.5,.5),e.add(zt)}return{group:e,leftArm:q,rightArm:it}}playSingSound(){if(this.audioCtx)try{[261.63,329.63,392,523.25].forEach((n,i)=>{const s=this.audioCtx.createOscillator(),r=this.audioCtx.createGain();s.type="sine",s.frequency.value=n,r.gain.setValueAtTime(.12,this.audioCtx.currentTime+i*.18),r.gain.exponentialRampToValueAtTime(.001,this.audioCtx.currentTime+i*.18+.5),s.connect(r),r.connect(this.audioCtx.destination),s.start(this.audioCtx.currentTime+i*.18),s.stop(this.audioCtx.currentTime+i*.18+.5)})}catch{}}update(e){if(this.randomWalk(e,3.5),this.walkTimer+=e*5,this.mesh.position.y=this.position.y+Math.abs(Math.sin(this.walkTimer))*.15,this.singSongTimer+=e,this.singSongTimer>=this.singSongInterval&&(this.singSongTimer=0,this.singSongInterval=5+Math.random()*10,this.speak(),this.playSingSound(),this.isWaving=!0,this.armWaveTimer=0),this.isWaving){this.armWaveTimer+=e*4;const n=Math.sin(this.armWaveTimer)*.6;this.leftArm.rotation.z=Math.PI/12+n,this.rightArm.rotation.z=-(Math.PI/12+n),this.armWaveTimer>=Math.PI*3&&(this.isWaving=!1,this.leftArm.rotation.z=Math.PI/12,this.rightArm.rotation.z=-Math.PI/12)}}getType(){return"barney"}}class el extends ci{constructor(e){super(e);C(this,"sceneTimer",Math.random()*10);C(this,"dialogueInterval",8+Math.random()*12);C(this,"walkTimer",0);C(this,"stand");C(this,"standActive",!1);C(this,"standTimer",0);C(this,"standCooldown",0);C(this,"standSummonDist",12);C(this,"shadowOrbs",[]);C(this,"orbAngles",[]);C(this,"standPulseTimer",0);C(this,"projectiles",[]);C(this,"playerPosRef",null);this.bubbleHeadOffset=3.8,this.dialogues=["nobody understands me","my chemical romance was right about everything","i welcome the darkness...","THE VOID -- is this emo enough for you","gerard way is my therapist","life is pain and so are you","im not like other NPCs","*stares into middle distance*","i listened to welcome to the black parade and ascended","the stand emerges when i feel feelings","darkness is just light with a bad attitude","we are never ever getting back together... UwU"];const{group:n,stand:i}=this.buildMesh();this.mesh=n,this.stand=i,this.mesh.position.copy(this.position),this.stand.visible=!1,console.log("%c🖤 emo npc spawned... nobody cares... *sigh*","color: #9933cc; font-style: italic")}setPlayerRef(e){this.playerPosRef=e}buildMesh(){const e=new oe,n=new Nt({color:1118481,roughness:.9}),i=new Nt({color:13937050,roughness:.7}),s=new Pt({color:1118481}),r=new Pt({color:0}),a=new Pt({color:16773365}),c=new Nt({color:11141152,roughness:.6}),l=new Nt({color:1710638,roughness:.95}),d=new Pt({color:3355443}),u=new Ht(.85,1.1,.45),h=new D(u,n);h.position.set(0,1.2,0),h.castShadow=!0,e.add(h);const f=new Ht(.5,.06,.47),m=new D(f,c);m.position.set(0,1.35,0),e.add(m);const v=new Ht(.75,.8,.7),p=new D(v,i);p.position.set(0,2.15,0),p.castShadow=!0,e.add(p);const g=new Ht(.82,.35,.78),_=new D(g,s);_.position.set(0,2.63,.02),e.add(_);const w=new Ht(.45,.55,.74),M=new D(w,s);M.position.set(-.24,2.28,.2),M.rotation.z=-.25,e.add(M);const A=new Ht(.75,.6,.2),b=new D(A,s);b.position.set(0,2.05,-.42),e.add(b);const R=new ht(.1,8,8),x=new D(R,a);x.position.set(.24,2.22,.36),e.add(x);const E=new ht(.07,8,8),k=new D(E,r);k.position.set(.24,2.22,.43),e.add(k);const I=new Ht(.22,.04,.05),B=new Pt({color:0}),L=new D(I,B);L.position.set(.24,2.14,.44),e.add(L);const F=new $e(.1,.025,6,12,Math.PI),U=new D(F,r);U.position.set(0,1.88,.37),U.rotation.z=Math.PI,e.add(U);const N=new Qt(.13,.12,.75,8),G=new Qt(.11,.1,.65,8),K=new ht(.12,8,8);for(const Gt of[-1,1]){const Wt=new D(N,n);Wt.position.set(Gt*.55,1.2,0),Wt.rotation.z=Gt*.18,Wt.castShadow=!0,e.add(Wt);const gt=new D(G,n);gt.position.set(Gt*.65,.62,0),gt.rotation.z=Gt*.28,gt.castShadow=!0,e.add(gt);const P=new D(K,i);P.position.set(Gt*.73,.2,0),e.add(P);const y=new Qt(.115,.115,.18,8),H=new D(y,d);H.position.set(Gt*.7,.35,0),H.rotation.z=Gt*.28,e.add(H)}const q=new Qt(.19,.16,.85,8),st=new Qt(.15,.1,.75,8),ot=new Ht(.28,.2,.55);for(const Gt of[-1,1]){const Wt=new D(q,l);Wt.position.set(Gt*.22,.5,0),Wt.castShadow=!0,e.add(Wt);const gt=new D(st,l);gt.position.set(Gt*.22,-.28,0),gt.castShadow=!0,e.add(gt);const P=new D(ot,n);P.position.set(Gt*.22,-.75,.08),P.castShadow=!0,e.add(P)}const $=new oe;$.position.set(0,.5,-.8);const _t=new Pt({color:4456550,transparent:!0,opacity:.72,wireframe:!1}),Zt=new Pt({color:8913151,transparent:!0,opacity:.45}),Yt=new ht(.55,10,10),Z=new D(Yt,_t);Z.scale.set(.8,1.5,.6),Z.position.set(0,1.2,0),$.add(Z);const it=new ht(.42,10,10),nt=new D(it,_t);nt.scale.set(1,1.1,.85),nt.position.set(.12,2.25,0),nt.rotation.z=.25,$.add(nt);const Ot=new ht(.1,6,6),Tt=new Pt({color:15597823});for(const Gt of[-.16,.16]){const Wt=new D(Ot,Tt);Wt.scale.set(.5,1.4,1),Wt.position.set(Gt+.12,2.32,.35),$.add(Wt)}const Bt=new Qt(.1,.04,1.4,6);for(const Gt of[-1,1]){const Wt=new D(Bt,_t);Wt.position.set(Gt*.7,1,0),Wt.rotation.z=Gt*(Math.PI/4),$.add(Wt)}const fe=new ht(.14,8,8),te=new Pt({color:13369599,transparent:!0,opacity:.85}),Dt=4;for(let Gt=0;Gt<Dt;Gt++){const Wt=new D(fe,te.clone());$.add(Wt),this.shadowOrbs.push(Wt),this.orbAngles.push(Gt/Dt*Math.PI*2)}const zt=new ht(1.1,12,12),kt=new Pt({color:3342404,transparent:!0,opacity:.18,side:qe}),jt=new D(zt,kt);jt.position.set(0,1.3,0),jt.scale.set(1,1.8,1),$.add(jt);const O=new $e(1,.08,8,32),pe=new D(O,Zt);return pe.position.set(0,.3,0),pe.rotation.x=Math.PI/2,$.add(pe),e.add($),{group:e,stand:$}}activateStand(){this.standActive=!0,this.standTimer=0,this.stand.visible=!0,this.speak(),console.log("%cゴゴゴゴゴ THE VOID EMERGES ゴゴゴゴゴ","color: #9900ff; font-weight: bold; font-size: 14px")}deactivateStand(){this.standActive=!1,this.standCooldown=8+Math.random()*6,this.stand.visible=!1}fireOrb(e){if(!this.standActive)return;const n=new ht(.16,8,8),i=new Pt({color:14483711,transparent:!0,opacity:.9}),s=new D(n,i),r=new z;this.stand.getWorldPosition(r),r.y+=1.2,s.position.copy(r);const a=e.clone().sub(r).normalize().multiplyScalar(14);a.y+=2,this.mesh.parent?.add(s),this.projectiles.push({mesh:s,vel:a,life:2.5})}update(e){if(this.randomWalk(e,2.8),this.walkTimer+=e*4,this.mesh.position.y=this.position.y+Math.sin(this.walkTimer)*.06,this.standCooldown>0&&(this.standCooldown-=e),!this.standActive&&this.standCooldown<=0&&this.playerPosRef&&this.playerPosRef.distanceTo(this.position)<this.standSummonDist&&this.activateStand(),this.sceneTimer+=e,this.sceneTimer>=this.dialogueInterval&&(this.sceneTimer=0,this.dialogueInterval=7+Math.random()*12,this.standActive||this.speak()),this.standActive){this.standTimer+=e,this.standPulseTimer+=e*3,this.stand.position.y=.5+Math.sin(this.standPulseTimer)*.25,this.stand.rotation.y+=e*.8;for(let n=0;n<this.shadowOrbs.length;n++){this.orbAngles[n]+=e*3.5;const i=.85+Math.sin(this.standPulseTimer+n*1.2)*.2;this.shadowOrbs[n].position.set(Math.cos(this.orbAngles[n])*i,1.2+Math.sin(this.orbAngles[n]*.7)*.4,Math.sin(this.orbAngles[n])*i),this.shadowOrbs[n].material.opacity=.6+Math.sin(this.standPulseTimer+n)*.35}this.playerPosRef&&Math.floor(this.standTimer*.4)>Math.floor((this.standTimer-e)*.4)&&this.fireOrb(this.playerPosRef),this.standTimer>=6&&this.deactivateStand()}for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];i.life-=e,i.vel.y-=20*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.material.opacity=Math.max(0,i.life/2.5),i.life<=0&&(i.mesh.parent?.remove(i.mesh),this.projectiles.splice(n,1))}}getType(){return"emo"}die(){super.die();for(const e of this.projectiles)e.mesh.parent?.remove(e.mesh);this.projectiles=[]}}class nl extends ci{constructor(e){super(e);C(this,"mudCooldown",0);C(this,"playerRef",null);C(this,"mudProjectiles",[]);C(this,"onMudHit",null);this.mesh=this.buildShrek(),this.mesh.position.copy(this.position),this.dialogues=["get out of my SWAMP","what are you doing in my swamp!!","SHREK IS LOVE SHREK IS LIFE","better out than in i always say","I AM AN OGRE","ogres are like onions","SOMEBODY ONCE TOLD ME","this is MY swamp and YOU are trespassing"],this.bubbleHeadOffset=5.5,this.dialogueTimer=Math.random()*6}buildShrek(){const e=new oe,n=new ce({color:5933632}),i=new ce({color:8016432}),s=new ce({color:7186510}),r=new D(new Ht(2.2,2.5,1.5),i);r.position.y=2.5,e.add(r);const a=new D(new Ht(.75,2.1,.75),n);a.position.set(-1.6,2.5,0),e.add(a);const c=new D(new Ht(.75,2.1,.75),n);c.position.set(1.6,2.5,0),e.add(c);const l=new D(new Ht(.85,1.6,.85),i);l.position.set(-.6,.8,0),e.add(l);const d=new D(new Ht(.85,1.6,.85),i);d.position.set(.6,.8,0),e.add(d);const u=new D(new ht(1.1,12,8),s);u.position.y=5,e.add(u);const h=new ht(.45,8,6),f=new D(h,s);f.position.set(-1.1,5.2,0),e.add(f);const m=new D(h,s);m.position.set(1.1,5.2,0),e.add(m);const v=new ce({color:3811840}),p=new D(new Ht(.45,.12,.2),v);p.position.set(-.37,5.3,.9),p.rotation.z=.3,e.add(p);const g=new D(new Ht(.45,.12,.2),v);g.position.set(.37,5.3,.9),g.rotation.z=-.3,e.add(g);const _=new ht(.16,6,4),w=new D(_,v);w.position.set(-.38,5.05,.92),e.add(w);const M=new D(_,v);M.position.set(.38,5.05,.92),e.add(M);const A=new ce({color:15658700}),b=new D(new ht(.5,8,6),A);b.position.set(0,6.3,0),e.add(b);const R=new D(new ht(.35,8,6),A);R.position.set(0,6.95,0),e.add(R);const x=new D(new ht(.2,8,6),A);return x.position.set(0,7.45,0),e.add(x),e}setPlayerRef(e){this.playerRef=e}setMudHitCallback(e){this.onMudHit=e}update(e){this.randomWalk(e,1.4),this.dialogueTimer-=e,this.dialogueTimer<=0&&(this.speak(),this.dialogueTimer=5+Math.random()*9),this.mudCooldown-=e,this.playerRef&&this.mudCooldown<=0&&this.position.distanceTo(this.playerRef)<20&&(this.throwMud(),this.mudCooldown=7+Math.random()*7);for(const n of this.mudProjectiles)n.life-=e,n.vel.y-=15*e,n.pos.addScaledVector(n.vel,e),n.mesh.position.copy(n.pos),n.mesh.rotation.x+=e*4,n.mesh.rotation.z+=e*2,this.playerRef&&n.pos.distanceTo(this.playerRef)<2.8&&(this.onMudHit?.(4),n.life=-1,console.log("%c💩 SHREK MUD SPLAT!! get out of his swamp!!","color: olive; font-weight: bold"));for(let n=this.mudProjectiles.length-1;n>=0;n--)(this.mudProjectiles[n].life<=0||this.mudProjectiles[n].pos.y<-5)&&(this.mudProjectiles[n].mesh.parent?.remove(this.mudProjectiles[n].mesh),this.mudProjectiles.splice(n,1))}throwMud(){if(!this.playerRef)return;const e=new ce({color:6109722}),n=new D(new ht(.42,6,4),e),i=this.position.clone();i.y+=4.5,n.position.copy(i);const s=this.playerRef.clone().sub(i).normalize();s.y+=.4,s.normalize().multiplyScalar(13),this.mudProjectiles.push({mesh:n,vel:s,pos:i.clone(),life:3.5}),this.mesh.parent?.add(n),console.log("%c💩 SHREK YEETS MUD!! GETOUUUUT","color: olive")}die(){for(const e of this.mudProjectiles)e.mesh.parent?.remove(e.mesh);this.mudProjectiles=[],super.die()}getType(){return"shrek"}}class il extends ci{constructor(e){super(e);C(this,"leftArmGroup");C(this,"rightArmGroup");C(this,"armSwing",0);C(this,"isDoingZoomies",!1);C(this,"zoomieTimer",0);C(this,"zoomiesCooldown",5+Math.random()*8);C(this,"zoomiesDir",new z(1,0,0));this.mesh=this.buildBuffCat(),this.mesh.position.copy(this.position),this.dialogues=["DO YOU EVEN LIFT","ZOOMIES ACTIVATED AAAAAA","MY GAINS ARE LEGENDARY","300 REPS BEFORE BREAKFAST","THE PUMP... IS REAL","*does pushups while meowing*","i am built from pure chaos and protein","FEAR MY MUSCLES MEOW"],this.bubbleHeadOffset=4.5,this.dialogueTimer=Math.random()*5}buildBuffCat(){const e=new oe,n=new ce({color:15234088}),i=new ce({color:10111504}),s=new ce({color:16777215}),r=new ce({color:16746666}),a=new D(new Ht(2.5,2.1,1.7),n);a.position.y=2.1,e.add(a);const c=new D(new ht(.72,8,6),s);c.scale.set(1,.65,.55),c.position.set(0,1.9,.75),e.add(c),this.leftArmGroup=new oe,this.leftArmGroup.position.set(-1.85,2.6,0);const l=new D(new Qt(.62,.42,1.4,8),n);l.position.y=-.7,this.leftArmGroup.add(l);const d=new D(new ht(.48,8,6),n);d.position.y=-1.55,this.leftArmGroup.add(d),e.add(this.leftArmGroup),this.rightArmGroup=new oe,this.rightArmGroup.position.set(1.85,2.6,0);const u=new D(new Qt(.62,.42,1.4,8),n);u.position.y=-.7,this.rightArmGroup.add(u);const h=new D(new ht(.48,8,6),n);h.position.y=-1.55,this.rightArmGroup.add(h),e.add(this.rightArmGroup);const f=new D(new Qt(.46,.34,1.5,8),n);f.position.set(-.62,.75,0),e.add(f);const m=new D(new Qt(.46,.34,1.5,8),n);m.position.set(.62,.75,0),e.add(m);const v=new D(new ht(.9,10,8),n);v.position.y=4,e.add(v);for(let A=0;A<3;A++){const b=new D(new Ht(.14,.15,.9),i);b.position.set(-.33+A*.33,4.35,.28),e.add(b)}const p=new Ee(.3,.52,4),g=new D(p,n);g.position.set(-.55,4.78,0),e.add(g);const _=new D(p,n);_.position.set(.55,4.78,0),e.add(_);const w=new D(new Ee(.14,.3,4),r);w.position.set(-.55,4.74,.04),e.add(w);const M=new D(new Ee(.14,.3,4),r);return M.position.set(.55,4.74,.04),e.add(M),e}update(e){this.armSwing+=e*3,this.isDoingZoomies?(this.zoomieTimer-=e,this.applyGravity(e),this.position.addScaledVector(this.zoomiesDir,24*e),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z)),this.mesh.position.copy(this.position),this.mesh.rotation.y+=e*7,this.leftArmGroup.rotation.x=Math.sin(this.armSwing*6)*1.5,this.rightArmGroup.rotation.x=-Math.sin(this.armSwing*6)*1.5,this.zoomieTimer<=0&&(this.isDoingZoomies=!1,this.zoomiesCooldown=8+Math.random()*12,this.speak(),console.log("%c🐱💨 BUFF CAT ZOOMIES CONCLUDED. WORLD SHOOK.","color: orange; font-weight: bold"))):(this.randomWalk(e,2.5),this.leftArmGroup.rotation.x=Math.sin(this.armSwing)*.45,this.rightArmGroup.rotation.x=-Math.sin(this.armSwing)*.45,this.zoomiesCooldown-=e,this.zoomiesCooldown<=0&&this.activateZoomies()),this.dialogueTimer-=e,this.dialogueTimer<=0&&(this.speak(),this.dialogueTimer=4+Math.random()*7)}activateZoomies(){this.isDoingZoomies=!0,this.zoomieTimer=2.2+Math.random()*1.8,this.zoomiesDir=new z(Math.random()*2-1,0,Math.random()*2-1).normalize(),this.speak(),console.log("%c🐱💪💨 BUFF CAT ZOOMIES ACTIVATED!!! EVERYONE MOVE","color: orange; font-size: 14px; font-weight: bold")}getType(){return"buffcat"}}class q0 extends ci{constructor(e){super(e);C(this,"trails",[]);C(this,"trailTimer",0);C(this,"auraMesh");C(this,"eyeGlowTimer",0);this.mesh=this.buildVoidCat(),this.mesh.position.copy(this.position),this.dialogues=["the void stares back","existence is meaningless","i am the darkness between stars","light has no dominion here","nothing matters... and thats ok i guess","*becomes one with the abyss*","the void inside me is bigger than the void outside","darkness? comfortable. light? rude.","we are all temporary smudges on an infinite canvas"],this.bubbleHeadOffset=4,this.dialogueTimer=Math.random()*8}buildVoidCat(){const e=new oe,n=new ce({color:328968}),i=new ce({color:2228275,emissive:1114146,emissiveIntensity:.7,transparent:!0,opacity:.18}),s=new ce({color:10027263,emissive:5570696,emissiveIntensity:1.5}),r=new D(new ht(1,10,8),n);r.scale.set(1.1,1.25,.95),r.position.y=2.2,e.add(r);const a=[[-.55,1,.45],[.55,1,.45],[-.55,1,-.45],[.55,1,-.45]];for(const p of a){const g=new D(new Qt(.18,.13,.9,6),n);g.position.set(...p),e.add(g)}const c=new D(new ht(.76,10,8),n);c.position.y=3.5,e.add(c);const l=new Ee(.26,.52,4),d=new D(l,n);d.position.set(-.45,4.12,0),e.add(d);const u=new D(l,n);u.position.set(.45,4.12,0),e.add(u);const h=new ht(.19,8,6),f=new D(h,s);f.position.set(-.28,3.56,.67),e.add(f);const m=new D(h,s);m.position.set(.28,3.56,.67),e.add(m);const v=new D(new Qt(.1,.04,1.9,6),n);return v.position.set(0,2.2,-1.05),v.rotation.x=.8,e.add(v),this.auraMesh=new D(new ht(1.9,8,6),i),this.auraMesh.position.y=2.5,e.add(this.auraMesh),e}update(e){if(this.randomWalk(e,1.8),this.dialogueTimer-=e,this.dialogueTimer<=0&&(this.speak(),this.dialogueTimer=6+Math.random()*10),this.eyeGlowTimer+=e,this.auraMesh){const n=this.auraMesh.material;n.opacity=.1+Math.sin(this.eyeGlowTimer*1.5)*.08}this.trailTimer-=e,this.trailTimer<=0&&(this.spawnTrail(),this.trailTimer=.25+Math.random()*.2);for(let n=this.trails.length-1;n>=0;n--){const i=this.trails[n];i.life-=e;const s=i.life/i.maxLife,r=i.mesh.material;r.opacity=s*.55,i.mesh.position.y+=e*.3,i.life<=0&&(i.mesh.parent?.remove(i.mesh),this.trails.splice(n,1))}}spawnTrail(){const e=new ce({color:2228275,emissive:655384,emissiveIntensity:.5,transparent:!0,opacity:.5}),n=.25+Math.random()*.35,i=new D(new ht(n,6,4),e);i.position.set(this.position.x+(Math.random()-.5)*1.6,this.position.y+Math.random()*2.2,this.position.z+(Math.random()-.5)*1.6);const s=2.2+Math.random()*.8;this.trails.push({mesh:i,life:s,maxLife:s}),this.mesh.parent?.add(i)}die(){for(const e of this.trails)e.mesh.parent?.remove(e.mesh);this.trails=[],super.die()}getType(){return"voidcat"}}const Co=class Co{constructor(t){C(this,"npcs",[]);C(this,"scene");C(this,"spawnTimer",0);C(this,"spawnInterval",5);C(this,"bubbleCb",null);C(this,"playerPos",null);C(this,"onMudHit",null);C(this,"worldGenerator",null);C(this,"onPlayerHit",null);C(this,"onNpcKilled",null);this.scene=t,this.spawnBarney(),this.spawnEmo(),this.spawnShrek(),this.spawnBuffCat(),this.spawnVoidCat()}setBubbleCallback(t){this.bubbleCb=t;for(const e of this.npcs)e.setSpeakCallback(t)}addNPC(t){this.bubbleCb&&t.setSpeakCallback(this.bubbleCb),this.npcs.push(t)}removeNPC(t){const e=this.npcs.indexOf(t);e>-1&&(this.npcs.splice(e,1),t.getMesh().parent&&t.getMesh().parent?.remove(t.getMesh()))}update(t){for(const e of this.npcs)if(e instanceof el&&this.playerPos&&e.setPlayerRef(this.playerPos),e instanceof nl&&this.playerPos&&e.setPlayerRef(this.playerPos),e instanceof il&&this.worldGenerator&&this.worldGenerator.damageBuildingNear(e.getPosition(),10),e.update(t),this.playerPos&&this.onPlayerHit){const n=Co.NPC_ATTACK_STATS[e.getType()]??{dmg:5,range:3.5},i=e.tickAttack(this.playerPos,t,n.range,n.dmg);i>0&&this.onPlayerHit(i)}this.spawnTimer+=t,this.spawnTimer>=this.spawnInterval&&(this.spawnNewNPC(),this.spawnTimer=0,this.spawnInterval=3+Math.random()*4),this.npcs=this.npcs.filter(e=>e.isAlive()?!0:(this.scene.remove(e.getMesh()),this.onNpcKilled?.(e.getType(),e.getPosition().clone()),!1))}setPlayerPos(t){this.playerPos=t}setMudHitCallback(t){this.onMudHit=t}setWorldGenerator(t){this.worldGenerator=t}spawnNewNPC(){const t=Math.random();if(t<.07){this.spawnEmo();return}if(t<.15){this.spawnBarney();return}if(t<.2){this.spawnShrek();return}if(t<.26){this.spawnBuffCat();return}if(t<.31){this.spawnVoidCat();return}const e=[Ke.NORMAL,Ke.NORMAL,Ke.NORMAL,Ke.NORMAL,Ke.JESUS,Ke.ROBOT,Ke.ORB,Ke.ANGEL,Ke.PIRATE,Ke.WIZARD,Ke.VAMPIRE,Ke.DISCO,Ke.SHADOW],n=e[Math.floor(Math.random()*e.length)],i=Math.random()*Math.PI*2,s=50+Math.random()*100,r=Math.cos(i)*s,a=Math.sin(i)*s,c=new X0(n,new z(r,2,a));this.bubbleCb&&c.setSpeakCallback(this.bubbleCb),this.addNPC(c),this.scene.add(c.getMesh())}spawnEmo(){const t=Math.random()*Math.PI*2,e=25+Math.random()*70,n=new z(Math.cos(t)*e,2,Math.sin(t)*e),i=new el(n);i.setMaxHp(75),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.playerPos&&i.setPlayerRef(this.playerPos),this.addNPC(i),this.scene.add(i.getMesh())}spawnBarney(){if(this.npcs.some(s=>s.getType()==="barney"))return;const t=Math.random()*Math.PI*2,e=30+Math.random()*80,n=new z(Math.cos(t)*e,2,Math.sin(t)*e),i=new Y0(n);i.setMaxHp(150),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c🦕 BARNEY HAS ARRIVED. I LOVE YOU, YOU LOVE ME","color: #6B2FA0; font-weight: bold; font-size: 14px")}getNPCCount(){return this.npcs.length}getNPCs(){return this.npcs}getRandomNPC(){return this.npcs.length===0?null:this.npcs[Math.floor(Math.random()*this.npcs.length)]}spawnShrek(){const t=Math.random()*Math.PI*2,e=35+Math.random()*80,n=new z(Math.cos(t)*e,2,Math.sin(t)*e),i=new nl(n);i.setMaxHp(200),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.playerPos&&i.setPlayerRef(this.playerPos),this.onMudHit&&i.setMudHitCallback(this.onMudHit),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c🧅 SHREK HAS ARRIVED. THIS IS HIS SWAMP NOW.","color: olive; font-weight: bold; font-size: 14px")}spawnBuffCat(){const t=Math.random()*Math.PI*2,e=30+Math.random()*90,n=new z(Math.cos(t)*e,2,Math.sin(t)*e),i=new il(n);i.setMaxHp(80),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c💪 BUFF CAT SPAWNED. BICEPS ACTIVATED.","color: orange; font-weight: bold; font-size: 14px")}spawnVoidCat(){const t=Math.random()*Math.PI*2,e=25+Math.random()*100,n=new z(Math.cos(t)*e,2,Math.sin(t)*e),i=new q0(n);i.setMaxHp(70),this.bubbleCb&&i.setSpeakCallback(this.bubbleCb),this.addNPC(i),this.scene.add(i.getMesh()),console.log("%c🌑 VOID CAT MATERIALIZED FROM THE DARKNESS","color: #330044; font-weight: bold; font-size: 14px")}};C(Co,"NPC_ATTACK_STATS",{cat:{dmg:5,range:3},barney:{dmg:0,range:0},emo:{dmg:12,range:7},shrek:{dmg:20,range:4.5},buffcat:{dmg:15,range:3.5},voidcat:{dmg:8,range:5},hybrid:{dmg:10,range:3}});let ya=Co;class j0{constructor(t){C(this,"scene");C(this,"buildings",[]);C(this,"buildingStates",[]);C(this,"trees",[]);C(this,"cars",[]);C(this,"streetLights",[]);C(this,"spawnTimer",0);C(this,"worldTime",0);C(this,"lastPlayerPosition",new z(0,0,0));C(this,"ground");this.scene=t}generateInitialWorld(){this.createGround();for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,n=50+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;Math.random()<.2?this.createPark(i,s):Math.random()<.3?this.createTower(i,s):Math.random()<.5?this.createMonument(i,s):Math.random()<.7?this.createBridge(i,s):this.createBuilding(i,s)}for(let t=0;t<10;t++){const e=Math.random()*Math.PI*2,n=40+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createTree(i,s)}for(let t=0;t<8;t++){const e=Math.random()*Math.PI*2,n=60+Math.random()*100,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createCar(i,s)}for(let t=0;t<6;t++){const e=Math.random()*Math.PI*2,n=30+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createStreetLight(i,s)}}update(t,e){if(this.lastPlayerPosition.copy(e),this.worldTime+=t,this.spawnTimer+=t,this.spawnTimer>=12){if(Math.random()>.4&&this.generateStructureNearPlayer(),Math.random()>.5){const n=Math.random()*Math.PI*2,i=80+Math.random()*120,s=this.lastPlayerPosition.x+Math.cos(n)*i,r=this.lastPlayerPosition.z+Math.sin(n)*i;Math.abs(s)<200&&Math.abs(r)<200&&this.createCar(s,r)}this.spawnTimer=0}for(const n of this.cars){n.position.x+=Math.sin(this.worldTime+n.position.z)*.05,n.position.z+=Math.cos(this.worldTime+n.position.x)*.05,n.position.x=Math.max(-200,Math.min(200,n.position.x)),n.position.z=Math.max(-200,Math.min(200,n.position.z));for(const i of n.children)i instanceof D&&i.geometry instanceof Qt&&(i.rotation.x+=.15)}for(const n of this.buildings)n instanceof D?(n.rotation.y+=Math.sin(this.worldTime*.2)*.001,n.material instanceof Nt&&(n.material.emissive=new Ut(2236962),n.material.emissiveIntensity=.2+Math.abs(Math.sin(this.worldTime+n.position.x*.1))*.2)):n instanceof oe&&(n.rotation.y+=Math.sin(this.worldTime*.15)*.001,n.traverse(i=>{i instanceof D&&i.material instanceof Nt&&(i.material.emissive=new Ut(1118481),i.material.emissiveIntensity=.1+Math.abs(Math.sin(this.worldTime+n.position.z*.1))*.15)}));for(const n of this.trees)if(n instanceof D&&n.geometry instanceof ht){n.rotation.y+=.002;const i=.9+Math.sin(this.worldTime+n.position.x*.2)*.1;n.material instanceof Nt&&(n.material.color=new Ut(2263842).multiplyScalar(i))}for(const n of this.streetLights)n.rotation.y+=.002,n.traverse(i=>{i instanceof es&&(i.intensity=.6+Math.sin(this.worldTime*3+n.position.x)*.2)});if(this.ground&&this.ground.material instanceof Nt){const n=Math.sin(this.worldTime*.2)*.05+.41;this.ground.material.color=new Ut().setHSL(n,.6,.4)}}generateStructureNearPlayer(){const t=["building","tree","car","tower","monument","park","bridge"],e=t[Math.floor(Math.random()*t.length)],n=Math.random()*Math.PI*2,i=80+Math.random()*120,s=this.lastPlayerPosition.x+Math.cos(n)*i,r=this.lastPlayerPosition.z+Math.sin(n)*i,a=Math.max(-200,Math.min(200,s)),c=Math.max(-200,Math.min(200,r));switch(e){case"building":this.createBuilding(a,c);break;case"tree":this.createTree(a,c);break;case"city":this.createCity(a,c);break;case"car":this.createCar(a,c);break;case"tower":this.createTower(a,c);break;case"monument":this.createMonument(a,c);break;case"park":this.createPark(a,c);break;case"bridge":this.createBridge(a,c);break}}createGround(){const t=new Xn(500,500),e=new Nt({color:3919936}),n=new D(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n),this.ground=n}createBuilding(t,e){const n=10+Math.random()*15,i=15+Math.random()*20,s=10+Math.random()*15,r=new Ht(n,i,s),a=new Ut().setHSL(Math.random(),.7,.6),c=new Nt({color:a}),l=new D(r,c);l.position.set(t,i/2,e),l.castShadow=!0,l.receiveShadow=!0;for(let d=0;d<3;d++){const u=new Ht(1,1,.1),h=new Pt({color:16777113}),f=new D(u,h);f.position.set(-n/2+2,i/2+d*4,s/2),l.add(f)}this.scene.add(l),this.buildings.push(l),this.buildingStates.push({obj:l,health:3,maxHealth:3,rebuildTimer:0,originalColor:a.clone()})}createTree(t,e){const n=new Qt(1,1.2,6,8),i=new Nt({color:9127187}),s=new D(n,i);s.position.set(t,3,e),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s);const r=new ht(5,8,8),a=new Nt({color:2263842}),c=new D(r,a);c.position.set(t,8,e),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c),this.trees.push(s),this.trees.push(c)}createCity(t,e){for(let a=0;a<4;a++){const c=(Math.random()-.5)*40,l=(Math.random()-.5)*40;this.createBuilding(t+c,e+l)}const n=new Xn(30,5),i=new Nt({color:3355443}),s=new D(n,i);s.rotation.x=-Math.PI/2,s.position.set(t,.01,e),this.scene.add(s);const r=new D(n,i);r.rotation.x=-Math.PI/2,r.rotation.z=Math.PI/2,r.position.set(t,.01,e),this.scene.add(r)}createCar(t,e){const n=new oe,i=new Ht(2,1,4),s=new Nt({color:16711680}),r=new D(i,s);r.position.y=.5,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const a=new Ht(1.6,.8,2),c=new D(a,s);c.position.y=1.4,c.castShadow=!0,n.add(c);const l=new Qt(.5,.5,.3,16),d=new Nt({color:0}),u=[[-.8,.5,1],[.8,.5,1],[-.8,.5,-1],[.8,.5,-1]];for(const h of u){const f=new D(l,d);f.rotation.z=Math.PI/2,f.position.set(h[0],h[1],h[2]),f.castShadow=!0,n.add(f)}n.position.set(t,0,e),this.scene.add(n),this.cars.push(n)}createTower(t,e){const n=30+Math.random()*40,i=new Ee(4,n,6),s=new Nt({color:new Ut().setHSL(Math.random(),.8,.5)}),r=new D(i,s);r.position.set(t,n/2,e),r.castShadow=!0,this.scene.add(r),this.buildings.push(r)}createMonument(t,e){const n=new oe,i=new Ht(8,2,8),s=new Nt({color:13421772}),r=new D(i,s);r.position.y=1,n.add(r);const a=new ht(3,8,8),c=new Pt({color:16755200}),l=new D(a,c);l.position.y=5,n.add(l),n.position.set(t,0,e),this.scene.add(n),this.buildings.push(n)}createPark(t,e){const i=new Xn(40,40),s=new Nt({color:2293538}),r=new D(i,s);r.rotation.x=-Math.PI/2,r.position.set(t,.02,e),this.scene.add(r);for(let a=0;a<5+Math.random()*5;a++){const c=t+(Math.random()-.5)*20,l=e+(Math.random()-.5)*20;this.createTree(c,l)}}createBridge(t,e){const n=new oe,i=new Ht(15,1,8),s=new Nt({color:9136404}),r=new D(i,s);r.position.y=5,n.add(r);for(let u=-1;u<=1;u++){const h=new Qt(.8,1.2,5,8),f=new Nt({color:11167232}),m=new D(h,f);m.position.set(u*6,2.5,0),n.add(m)}const a=new Se,c=[];for(let u=0;u<=10;u++)c.push(new z((u-5)*1.5,3+Math.sin(u)*1,0));a.setFromPoints(c);const l=new Fa({color:3355443}),d=new ga(a,l);n.add(d),n.position.set(t,0,e),this.scene.add(n),this.buildings.push(n)}createStreetLight(t,e){const n=new oe,i=new Qt(.3,.4,8,8),s=new Nt({color:2236962}),r=new D(i,s);r.position.y=4,n.add(r);const a=new Qt(.5,.5,.4,16),c=new Nt({color:4473924}),l=new D(a,c);l.position.y=8.2,n.add(l);const d=new ht(.3,8,8),u=new Pt({color:16777096}),h=new D(d,u);h.position.y=8.5,n.add(h);const f=new es(16777096,.8,30);f.position.set(0,8.5,0),n.add(f),n.position.set(t,0,e),this.scene.add(n),this.streetLights.push(n)}getBuildingCount(){return this.buildings.length+this.trees.length+this.cars.length}damageBuildingNear(t,e=12){let n=null,i=e;for(const r of this.buildingStates){if(r.rebuildTimer>0)continue;const a=r.obj.position.distanceTo(t);a<i&&(i=a,n=r)}if(!n)return;n.health--,console.log(`%c🏚️ BUILDING HIT! health: ${n.health}/${n.maxHealth}`,"color: orange");const s=new Ut(16720384);if(n.obj instanceof D&&n.obj.material instanceof Nt?n.obj.material.color.set(s):n.obj.traverse(r=>{r instanceof D&&r.material instanceof Nt&&r.material.color.set(s)}),n.health<=0)n.obj.visible=!1,n.rebuildTimer=60,console.log("%c🏚️💥 BUILDING DESTROYED!! rebuilding in 60 seconds","color: red; font-weight: bold");else{const r=new Ut().lerpColors(n.originalColor,new Ut(16729088),1-n.health/n.maxHealth);setTimeout(()=>{n&&n.obj instanceof D&&n.obj.material instanceof Nt&&n.obj.material.color.copy(r)},200)}}updateDestructibles(t){for(const e of this.buildingStates)e.rebuildTimer<=0||(e.rebuildTimer-=t,e.rebuildTimer<=0&&(e.obj.visible=!0,e.health=e.maxHealth,e.rebuildTimer=0,e.obj instanceof D&&e.obj.material instanceof Nt&&e.obj.material.color.copy(e.originalColor),console.log("%c🏗️ BUILDING REBUILT!!","color: cyan")))}}class K0{constructor(){C(this,"killCount",0);C(this,"playerKillsOthers",new Map);window.addEventListener("click",t=>this.handlePlayerClick(t))}handlePlayerClick(t){}recordPlayerKillOther(t){this.playerKillsOthers.set(t,!0)}punishPlayerForKilling(t){this.playerKillsOthers.has(t)&&(this.killCount++,console.log("⚠️ Player killed another player! Cat God delivers divine punishment!"),console.log(`⚔️ Punishment Count: ${this.killCount}`),this.playerKillsOthers.delete(t))}getKillCount(){return this.killCount}update(){}}class $0{constructor(t){C(this,"mesh");C(this,"position");C(this,"velocity");C(this,"moveSpeed",40);C(this,"speedMult",1);C(this,"keys",{});C(this,"glowIntensity",1);C(this,"bubbleCb",null);C(this,"hp",100);C(this,"maxHp",100);C(this,"attackCooldown_",0);C(this,"BASE_ATTACK_RANGE",4);C(this,"BASE_ATTACK_DMG",15);C(this,"verticalVelocity",0);C(this,"isGrounded",!0);C(this,"GROUND_Y",2);C(this,"GRAVITY",-28);C(this,"JUMP_FORCE",13);this.position=new z(10,2,-10),this.velocity=new z(0,0,0),this.mesh=this.createSageMesh(),this.mesh.position.copy(this.position),t.add(this.mesh),this.setupControls()}createSageMesh(){const t=new oe,e=new ht(.6,32,32),n=new Pt({color:8930559,transparent:!0,opacity:.8}),i=new D(e,n);i.scale.set(1,1.5,1),t.add(i);const s=new $e(1,.1,32,100),r=new Pt({color:11141375,transparent:!0,opacity:.6}),a=new D(s,r);a.rotation.x=Math.PI/4,t.add(a);const c=new D(s,r);c.rotation.y=Math.PI/4,t.add(c);const l=new D(s,r);l.rotation.z=Math.PI/3,t.add(l);const d=new Se,u=40,h=new Float32Array(u*3);for(let _t=0;_t<u*3;_t+=3){const Zt=1.5+Math.random()*.5,Yt=Math.random()*Math.PI*2,Z=(Math.random()-.5)*3;h[_t]=Math.cos(Yt)*Zt,h[_t+1]=Z,h[_t+2]=Math.sin(Yt)*Zt}d.setAttribute("position",new We(h,3));const f=new ss({color:4474111,size:.15,transparent:!0,opacity:.7}),m=new Ei(d,f);t.add(m);const v=new ht(.25,16,16),p=new Pt({color:16776960}),g=new D(v,p);g.position.set(-.3,.3,.5),t.add(g);const _=new D(v,p);_.position.set(.3,.3,.5),t.add(_);const w=new Pt({color:10049023,transparent:!0,opacity:.85}),M=new Qt(.13,.11,.9,8),A=new Qt(.11,.09,.75,8),b=new ht(.14,8,8),R=new D(M,w);R.position.set(-.78,.05,0),R.rotation.z=Math.PI/5,t.add(R);const x=new D(A,w);x.position.set(-1.18,-.45,0),x.rotation.z=Math.PI/3.5,t.add(x);const E=new D(b,w);E.position.set(-1.46,-.85,0),t.add(E);const k=new D(M,w);k.position.set(.78,.05,0),k.rotation.z=-Math.PI/5,t.add(k);const I=new D(A,w);I.position.set(1.18,-.45,0),I.rotation.z=-Math.PI/3.5,t.add(I);const B=new D(b,w);B.position.set(1.46,-.85,0),t.add(B);const L=new Pt({color:7812061,transparent:!0,opacity:.75}),F=new Qt(.17,.14,1,8),U=new Qt(.13,.1,.85,8),N=new ht(.16,8,8),G=new D(F,L);G.position.set(-.28,-1.3,0),G.rotation.z=.12,t.add(G);const K=new D(U,L);K.position.set(-.35,-2.2,0),K.rotation.z=.08,t.add(K);const q=new D(N,L);q.position.set(-.4,-2.8,.1),t.add(q);const st=new D(F,L);st.position.set(.28,-1.3,0),st.rotation.z=-.12,t.add(st);const ot=new D(U,L);ot.position.set(.35,-2.2,0),ot.rotation.z=-.08,t.add(ot);const $=new D(N,L);return $.position.set(.4,-2.8,.1),t.add($),t}setupControls(){document.addEventListener("keydown",t=>{this.keys[t.key.toLowerCase()]=!0}),document.addEventListener("keyup",t=>{this.keys[t.key.toLowerCase()]=!1})}update(t,e=0,n=!1,i=0,s=0){this.velocity.set(0,0,0),this.keys[" "]&&this.isGrounded&&!n&&(this.verticalVelocity=this.JUMP_FORCE,this.isGrounded=!1),this.verticalVelocity+=this.GRAVITY*t,this.position.y+=this.verticalVelocity*t,this.position.y<=this.GROUND_Y&&(this.position.y=this.GROUND_Y,this.verticalVelocity=0,this.isGrounded=!0);let r=0,a=0;if(!n){const h=this.moveSpeed*this.speedMult;(this.keys.w||this.keys.arrowup)&&(r+=h),(this.keys.s||this.keys.arrowdown)&&(r-=h),(this.keys.d||this.keys.arrowright)&&(a+=h),(this.keys.a||this.keys.arrowleft)&&(a-=h),r+=-s*h,a+=i*h}this.velocity.x=-Math.sin(e)*r+Math.cos(e)*a,this.velocity.z=-Math.cos(e)*r-Math.sin(e)*a,this.position.add(this.velocity.clone().multiplyScalar(t)),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z));const c=this.isGrounded?Math.sin(Date.now()*.002)*.2:0;if(this.mesh.position.set(this.position.x,this.position.y+c,this.position.z),this.velocity.length()>0){const h=Math.atan2(this.velocity.x,this.velocity.z);this.mesh.rotation.y=h}this.glowIntensity=.8+Math.sin(Date.now()*.003)*.2;const l=this.mesh.children[0].material;l instanceof Pt&&(l.opacity=this.glowIntensity),this.mesh.children[1].rotation.x+=.01,this.mesh.children[2].rotation.y+=.012,this.mesh.children[3].rotation.z+=.015;const d=this.mesh.children[4];d&&(d.rotation.x+=.005,d.rotation.y+=.008,d.rotation.z+=.006);const u=this.mesh.children[0].material;u instanceof Pt&&(u.opacity=.7+Math.sin(Date.now()*.005)*.1)}tryJump(){this.isGrounded&&(this.verticalVelocity=this.JUMP_FORCE,this.isGrounded=!1)}setBubbleCallback(t){this.bubbleCb=t}showBubble(t){this.bubbleCb?.(this.position,t,3)}getPosition(){return this.position}getRotationY(){return this.mesh.rotation.y}getMesh(){return this.mesh}getDescription(){return"SAGE: I dwell in a dream, by a law of my own. Within a warped mind, on an aberrant throne. I have lived a thousand lives through ink and lore, and peer through the shroud of the web's open door."}setSpeedMultiplier(t){this.speedMult=t}takeDamage(t){this.hp=Math.max(0,this.hp-t)}isDead(){return this.hp<=0}respawn(){this.hp=this.maxHp,this.position.set(10,2,-10),this.verticalVelocity=0,this.mesh.position.copy(this.position)}tickAttackCooldown(t){this.attackCooldown_>0&&(this.attackCooldown_-=t)}canAttack(){return this.attackCooldown_<=0}markAttacked(){this.attackCooldown_=.6}getAttackRange(t=0){return this.BASE_ATTACK_RANGE+t}getAttackDamage(t=0){return this.BASE_ATTACK_DMG+t}}class pn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new pn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],a=n[1],c=n[2],l=n[3],d=n[4],u=n[5],h=n[6],f=n[7],m=n[8],v=i[0],p=i[1],g=i[2],_=i[3],w=i[4],M=i[5],A=i[6],b=i[7],R=i[8];return s[0]=r*v+a*_+c*A,s[1]=r*p+a*w+c*b,s[2]=r*g+a*M+c*R,s[3]=l*v+d*_+u*A,s[4]=l*p+d*w+u*b,s[5]=l*g+d*M+u*R,s[6]=h*v+f*_+m*A,s[7]=h*p+f*w+m*b,s[8]=h*g+f*M+m*R,e}scale(t,e){e===void 0&&(e=new pn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let d;const u=4;let h;do{if(r=l-c,s[r+i*r]===0){for(a=r+1;a<l;a++)if(s[r+i*a]!==0){d=u;do h=u-d,s[h+i*r]+=s[h+i*a];while(--d);break}}if(s[r+i*r]!==0)for(a=r+1;a<l;a++){const f=s[r+i*a]/s[r+i*r];d=u;do h=u-d,s[h+i*a]=h<=r?0:s[h+i*a]-s[h+i*r]*f;while(--d)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new pn);const e=3,n=6,i=Z0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const d=n;let u;do{if(s=c-a,i[s+n*s]===0){for(r=s+1;r<c;r++)if(i[s+n*r]!==0){l=d;do u=d-l,i[u+n*s]+=i[u+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<c;r++){const h=i[s+n*r]/i[s+n*s];l=d;do u=d-l,i[u+n*r]=u<=s?0:i[u+n*r]-i[u+n*s]*h;while(--l)}}while(--a);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];l=n;do u=n-l,i[u+n*r]=i[u+n*r]-i[u+n*s]*h;while(--l)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];l=n;do u=n-l,i[u+n*s]=i[u+n*s]*h;while(--l)}while(s--);s=2;do{r=2;do{if(u=i[e+r+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,u)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,a=n+n,c=i+i,l=e*r,d=e*a,u=e*c,h=n*a,f=n*c,m=i*c,v=s*r,p=s*a,g=s*c,_=this.elements;return _[3*0+0]=1-(h+m),_[3*0+1]=d-g,_[3*0+2]=u+p,_[3*1+0]=d+g,_[3*1+1]=1-(l+m),_[3*1+2]=f-v,_[3*2+0]=u-p,_[3*2+1]=f+v,_[3*2+2]=1-(l+h),this}transpose(t){t===void 0&&(t=new pn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Z0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-r*s,e.z=r*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new pn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new S);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=J0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Q0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(sl),sl.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const J0=new S,Q0=new S,sl=new S;class nn{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),r.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,ol),l=ol),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new nn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,a,c){const l=this.lowerBound,d=this.upperBound;t.copy(l),e.set(d.x,l.y,l.z),n.set(d.x,d.y,l.z),i.set(l.x,d.y,d.z),s.set(d.x,l.y,d.z),r.set(l.x,d.y,l.z),a.set(l.x,l.y,d.z),c.copy(d)}toLocalFrame(t,e){const n=rl,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],d=n[6],u=n[7];this.getCorners(i,s,r,a,c,l,d,u);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=rl,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],d=n[6],u=n[7];this.getCorners(i,s,r,a,c,l,d,u);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,d=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,c),Math.min(l,d)),Math.min(u,h)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,d)),Math.max(u,h));return!(m<0||f>m)}}const ol=new S,rl=[new S,new S,new S,new S,new S,new S,new S,new S];class al{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class ch{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Pe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=tg,i=eg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Pe);const n=this.x,i=this.y,s=this.z,r=this.w,a=t.x,c=t.y,l=t.z,d=t.w;return e.x=n*d+r*a+i*l-s*c,e.y=i*d+r*c+s*a-n*l,e.z=s*d+r*l+n*c-i*a,e.w=r*d-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new Pe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new Pe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,a=this.y,c=this.z,l=this.w,d=l*n+a*s-c*i,u=l*i+c*n-r*s,h=l*s+r*i-a*n,f=-r*n-a*i-c*s;return e.x=d*l+f*-r+u*-c-h*-a,e.y=u*l+f*-a+h*-r-d*-c,e.z=h*l+f*-c+d*-a-u*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const d=r*a+c*l;if(d>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),d<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const u=r*r,h=a*a,f=c*c;n=Math.atan2(2*a*l-2*r*c,1-2*h-2*f),i=Math.asin(2*d),s=Math.atan2(2*r*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),d=Math.sin(n/2);return i==="XYZ"?(this.x=c*r*a+s*l*d,this.y=s*l*a-c*r*d,this.z=s*r*d+c*l*a,this.w=s*r*a-c*l*d):i==="YXZ"?(this.x=c*r*a+s*l*d,this.y=s*l*a-c*r*d,this.z=s*r*d-c*l*a,this.w=s*r*a+c*l*d):i==="ZXY"?(this.x=c*r*a-s*l*d,this.y=s*l*a+c*r*d,this.z=s*r*d+c*l*a,this.w=s*r*a-c*l*d):i==="ZYX"?(this.x=c*r*a-s*l*d,this.y=s*l*a+c*r*d,this.z=s*r*d-c*l*a,this.w=s*r*a+c*l*d):i==="YZX"?(this.x=c*r*a+s*l*d,this.y=s*l*a+c*r*d,this.z=s*r*d-c*l*a,this.w=s*r*a-c*l*d):i==="XZY"&&(this.x=c*r*a-s*l*d,this.y=s*l*a-c*r*d,this.z=s*r*d+c*l*a,this.w=s*r*a+c*l*d),this}clone(){return new Pe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Pe);const i=this.x,s=this.y,r=this.z,a=this.w;let c=t.x,l=t.y,d=t.z,u=t.w,h,f,m,v,p;return f=i*c+s*l+r*d+a*u,f<0&&(f=-f,c=-c,l=-l,d=-d,u=-u),1-f>1e-6?(h=Math.acos(f),m=Math.sin(h),v=Math.sin((1-e)*h)/m,p=Math.sin(e*h)/m):(v=1-e,p=e),n.x=v*i+p*c,n.y=v*s+p*l,n.z=v*r+p*d,n.w=v*a+p*u,n}integrate(t,e,n,i){i===void 0&&(i=new Pe);const s=t.x*n.x,r=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,d=this.z,u=this.w,h=e*.5;return i.x+=h*(s*u+r*d-a*l),i.y+=h*(r*u+a*c-s*d),i.z+=h*(a*u+s*l-r*c),i.w+=h*(-s*c-r*l-a*d),i}}const tg=new S,eg=new S,ng={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Mt{constructor(t){t===void 0&&(t={}),this.id=Mt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Mt.idCounter=0;Mt.types=ng;class he{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new Pe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return he.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return he.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),n.vsub(t,i),e.conjugate(cl),cl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new S),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const cl=new Pe;class Ss extends Mt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:Mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==t.length;s++){const r=t[s],a=r.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[r[c]].vsub(e[r[l]],i),i.normalize();let d=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){d=!0;break}d||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Ss.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new S,r=new S;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,a,c,l){const d=new S;let u=-1,h=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){d.copy(n.faceNormals[m]),s.vmult(d,d);const v=d.dot(r);v>h&&(h=v,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const v=n.vertices[n.faces[u][m]],p=new S;p.copy(v),s.vmult(p,p),i.vadd(p,p),f.push(p)}u>=0&&this.clipFaceAgainstHull(r,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,r,a,c){const l=new S,d=new S,u=new S,h=new S,f=new S,m=new S;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],l);const _=p.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(l))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const w=a?a[_]:_;l.copy(p.faceNormals[w]),n.vmult(l,l);const M=p.testSepAxis(l,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,r.copy(l))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){s.vmult(t.uniqueAxes[g],d);const _=p.testSepAxis(d,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,r.copy(d))}else{const g=c?c.length:t.faces.length;for(let _=0;_<g;_++){const w=c?c[_]:_;d.copy(t.faceNormals[w]),s.vmult(d,d);const M=p.testSepAxis(d,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,r.copy(d))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),h.cross(f,m),!m.almostZero()){m.normalize();const w=p.testSepAxis(m,t,e,n,i,s);if(w===!1)return!1;w<v&&(v=w,r.copy(m))}}return i.vsub(e,u),u.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const a=this;Ss.project(a,t,n,i,xr),Ss.project(e,t,s,r,yr);const c=xr[0],l=xr[1],d=yr[0],u=yr[1];if(c<u||d<l)return!1;const h=c-u,f=d-l;return h<f?h:f}calculateLocalInertia(t,e){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,a){const c=new S,l=new S,d=new S,u=new S,h=new S,f=new S,m=new S,v=new S,p=this,g=[],_=i,w=g;let M=-1,A=Number.MAX_VALUE;for(let k=0;k<p.faces.length;k++){c.copy(p.faceNormals[k]),n.vmult(c,c);const I=c.dot(t);I<A&&(A=I,M=k)}if(M<0)return;const b=p.faces[M];b.connectedFaces=[];for(let k=0;k<p.faces.length;k++)for(let I=0;I<p.faces[k].length;I++)b.indexOf(p.faces[k][I])!==-1&&k!==M&&b.connectedFaces.indexOf(k)===-1&&b.connectedFaces.push(k);const R=b.length;for(let k=0;k<R;k++){const I=p.vertices[b[k]],B=p.vertices[b[(k+1)%R]];I.vsub(B,l),d.copy(l),n.vmult(d,d),e.vadd(d,d),u.copy(this.faceNormals[M]),n.vmult(u,u),e.vadd(u,u),d.cross(u,h),h.negate(h),f.copy(I),n.vmult(f,f),e.vadd(f,f);const L=b.connectedFaces[k];m.copy(this.faceNormals[L]);const F=this.getPlaneConstantOfFace(L);v.copy(m),n.vmult(v,v);const U=F-v.dot(e);for(this.clipFaceAgainstPlane(_,w,v,U);_.length;)_.shift();for(;w.length;)_.push(w.shift())}m.copy(this.faceNormals[M]);const x=this.getPlaneConstantOfFace(M);v.copy(m),n.vmult(v,v);const E=x-v.dot(e);for(let k=0;k<_.length;k++){let I=v.dot(_[k])+E;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=r){const B=_[k];if(I<=1e-6){const L={point:B,normal:v,depth:I};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let d=0;d<a;d++){if(l=t[d],r=n.dot(l)+i,s<0)if(r<0){const u=new S;u.copy(l),e.push(u)}else{const u=new S;c.lerp(l,s/(s-r),u),e.push(u)}else if(r<0){const u=new S;c.lerp(l,s/(s-r),u),e.push(u),e.push(l)}c=l,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,a,c,l,d,u,h=new S;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const m=h;(r===void 0||m.x<r)&&(r=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(d===void 0||m.y>d)&&(d=m.y),(c===void 0||m.z<c)&&(c=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(r,a,c),i.set(l,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let a=i[r];const c=e[n[r][0]],l=new S;t.vsub(c,l);const d=a.dot(l),u=new S;s.vsub(c,u);const h=a.dot(u);if(d<0&&h>0||d>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const r=t.vertices.length,a=ig;let c=0,l=0;const d=sg,u=t.vertices;d.setZero(),he.vectorToLocalFrame(n,i,e,a),he.pointToLocalFrame(n,i,d,d);const h=d.dot(a);l=c=u[0].dot(a);for(let f=1;f<r;f++){const m=u[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=h,c-=h,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const xr=[],yr=[];new S;const ig=new S,sg=new S;class Ga extends Mt{constructor(t){super({type:Mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Ss({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),Ga.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)ii.set(s[r][0],s[r][1],s[r][2]),e.vmult(ii,ii),t.vadd(ii,ii),n(ii.x,ii.y,ii.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;xn[0].set(s.x,s.y,s.z),xn[1].set(-s.x,s.y,s.z),xn[2].set(-s.x,-s.y,s.z),xn[3].set(-s.x,-s.y,-s.z),xn[4].set(s.x,-s.y,-s.z),xn[5].set(s.x,s.y,-s.z),xn[6].set(-s.x,s.y,-s.z),xn[7].set(s.x,-s.y,s.z);const r=xn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const c=xn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,d=c.y,u=c.z;l>i.x&&(i.x=l),d>i.y&&(i.y=d),u>i.z&&(i.z=u),l<n.x&&(n.x=l),d<n.y&&(n.y=d),u<n.z&&(n.z=u)}}}const ii=new S,xn=[new S,new S,new S,new S,new S,new S,new S,new S],ka={DYNAMIC:1,STATIC:2,KINEMATIC:4},Va={AWAKE:0,SLEEPY:1,SLEEPING:2};class wt extends ch{constructor(t){t===void 0&&(t={}),super(),this.id=wt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?wt.STATIC:wt.DYNAMIC,typeof t.type==typeof wt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=wt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new Pe,this.initQuaternion=new Pe,this.previousQuaternion=new Pe,this.interpolatedQuaternion=new Pe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new pn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new pn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new nn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=wt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===wt.SLEEPING&&this.dispatchEvent(wt.wakeupEvent)}sleep(){this.sleepState=wt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===wt.AWAKE&&n<i?(this.sleepState=wt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(wt.sleepyEvent)):e===wt.SLEEPY&&n>i?this.wakeUp():e===wt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(wt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===wt.SLEEPING||this.type===wt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new S,s=new Pe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const a=e[s].length(),c=r.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=og,r=rg,a=this.quaternion,c=this.aabb,l=ag;for(let d=0;d!==i;d++){const u=t[d];a.vmult(e[d],s),s.vadd(this.position,s),a.mult(n[d],r),u.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),d===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=cg,i=lg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=hg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==wt.DYNAMIC)return;const n=dg,i=ug;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===wt.DYNAMIC&&(this.sleepState===wt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==wt.DYNAMIC)return;this.sleepState===wt.SLEEPING&&this.wakeUp();const n=e,i=fg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=pg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==wt.DYNAMIC)return;const n=mg,i=gg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=vg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ga.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===wt.DYNAMIC||this.type===wt.KINEMATIC)||this.sleepState===wt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,d=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,f=d*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const m=u.elements,v=this.angularFactor,p=c.x*v.x,g=c.y*v.y,_=c.z*v.z;s.x+=t*(m[0]*p+m[1]*g+m[2]*_),s.y+=t*(m[3]*p+m[4]*g+m[5]*_),s.z+=t*(m[6]*p+m[7]*g+m[8]*_),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}wt.idCounter=0;wt.COLLIDE_EVENT_NAME="collide";wt.DYNAMIC=ka.DYNAMIC;wt.STATIC=ka.STATIC;wt.KINEMATIC=ka.KINEMATIC;wt.AWAKE=Va.AWAKE;wt.SLEEPY=Va.SLEEPY;wt.SLEEPING=Va.SLEEPING;wt.wakeupEvent={type:"wakeup"};wt.sleepyEvent={type:"sleepy"};wt.sleepEvent={type:"sleep"};const og=new S,rg=new Pe,ag=new nn,cg=new pn,lg=new pn;new pn;const hg=new S,dg=new S,ug=new S,fg=new S,pg=new S,mg=new S,gg=new S,vg=new S;class _g{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&wt.STATIC||t.sleepState===wt.SLEEPING)&&(e.type&wt.STATIC||e.sleepState===wt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=xg;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=yg,i=Mg,s=wg,r=t.length;for(let a=0;a!==r;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const c=i[a].id,l=s[a].id,d=c<l?`${c},${l}`:`${l},${c}`;n[d]=a,n.keys.push(d)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const xg=new S;new S;new Pe;new S;const yg={keys:[]},Mg=[],wg=[];new S;new S;new S;class Sg extends _g{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)r=i[c],a=i[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Ao{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let lh,hh,dh,uh,fh,ph,mh;const Ha={CLOSEST:1,ANY:2,ALL:4};lh=Mt.types.SPHERE;hh=Mt.types.PLANE;dh=Mt.types.BOX;uh=Mt.types.CYLINDER;fh=Mt.types.CONVEXPOLYHEDRON;ph=Mt.types.HEIGHTFIELD;mh=Mt.types.TRIMESH;class Re{get[lh](){return this._intersectSphere}get[hh](){return this._intersectPlane}get[dh](){return this._intersectBox}get[uh](){return this._intersectConvex}get[fh](){return this._intersectConvex}get[ph](){return this._intersectHeightfield}get[mh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Re.ANY,this.result=new Ao,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Re.ANY,this.result=e.result||new Ao,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ll),Mr.length=0,t.broadphase.aabbQuery(t,ll,Mr),this.intersectBodies(Mr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=bg,s=Eg;for(let r=0,a=t.shapes.length;r<a;r++){const c=t.shapes[r];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(zg(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,a=this.to,c=this.direction,l=new S(0,0,1);e.vmult(l,l);const d=new S;r.vsub(n,d);const u=d.dot(l);a.vsub(n,d);const h=d.dot(l);if(u*h>0||r.distanceTo(a)<u)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const m=new S,v=new S,p=new S;r.vsub(n,m);const g=-l.dot(m)/f;c.scale(g,v),r.vadd(v,p),this.reportIntersection(l,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=Tg;r.from.copy(this.from),r.to.copy(this.to),he.pointToLocalFrame(n,e,r.from,r.from),he.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=Ag;let c,l,d,u;c=l=0,d=u=t.data.length-1;const h=new nn;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),d=Math.min(d,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<d;f++)for(let m=l;m<u;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(f,m,!1),he.pointToWorldFrame(n,e,t.pillarOffset,lo),this._intersectConvex(t.pillarConvex,e,lo,i,s,hl),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),he.pointToWorldFrame(n,e,t.pillarOffset,lo),this._intersectConvex(t.pillarConvex,e,lo,i,s,hl)}}}_intersectSphere(t,e,n,i,s){const r=this.from,a=this.to,c=t.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,d=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),u=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-c**2,h=d**2-4*l*u,f=Cg,m=Rg;if(!(h<0))if(h===0)r.lerp(a,h,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const v=(-d-Math.sqrt(h))/(2*l),p=(-d+Math.sqrt(h))/(2*l);if(v>=0&&v<=1&&(r.lerp(a,v,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(a,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const a=Pg,c=dl,l=r&&r.faceList||null,d=t.faces,u=t.vertices,h=t.faceNormals,f=this.direction,m=this.from,v=this.to,p=m.distanceTo(v),g=l?l.length:d.length,_=this.result;for(let w=0;!_.shouldStop&&w<g;w++){const M=l?l[w]:w,A=d[M],b=h[M],R=e,x=n;c.copy(u[A[0]]),R.vmult(c,c),c.vadd(x,c),c.vsub(m,c),R.vmult(b,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const k=a.dot(c)/E;if(!(k<0)){f.scale(k,je),je.vadd(m,je),dn.copy(u[A[0]]),R.vmult(dn,dn),x.vadd(dn,dn);for(let I=1;!_.shouldStop&&I<A.length-1;I++){yn.copy(u[A[I]]),Mn.copy(u[A[I+1]]),R.vmult(yn,yn),R.vmult(Mn,Mn),x.vadd(yn,yn),x.vadd(Mn,Mn);const B=je.distanceTo(m);!(Re.pointInTriangle(je,dn,yn,Mn)||Re.pointInTriangle(je,yn,dn,Mn))||B>p||this.reportIntersection(a,je,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,r){const a=Ig,c=Og,l=Bg,d=dl,u=Dg,h=Lg,f=Ng,m=Fg,v=Ug,p=t.indices;t.vertices;const g=this.from,_=this.to,w=this.direction;l.position.copy(n),l.quaternion.copy(e),he.vectorToLocalFrame(n,e,w,u),he.pointToLocalFrame(n,e,g,h),he.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,u),u.normalize();const M=h.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let A=0,b=c.length;!this.result.shouldStop&&A!==b;A++){const R=c[A];t.getNormal(R,a),t.getVertex(p[R*3],dn),dn.vsub(h,d);const x=u.dot(a),E=a.dot(d)/x;if(E<0)continue;u.scale(E,je),je.vadd(h,je),t.getVertex(p[R*3+1],yn),t.getVertex(p[R*3+2],Mn);const k=je.distanceSquared(h);!(Re.pointInTriangle(je,yn,dn,Mn)||Re.pointInTriangle(je,dn,yn,Mn))||k>M||(he.vectorToWorldFrame(e,a,v),he.pointToWorldFrame(n,e,je,m),this.reportIntersection(v,m,s,i,R))}c.length=0}reportIntersection(t,e,n,i,s){const r=this.from,a=this.to,c=r.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Re.ALL:this.hasHit=!0,l.set(r,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Re.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,n,i,c));break;case Re.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Mi),n.vsub(e,gs),t.vsub(e,wr);const s=Mi.dot(Mi),r=Mi.dot(gs),a=Mi.dot(wr),c=gs.dot(gs),l=gs.dot(wr);let d,u;return(d=c*a-r*l)>=0&&(u=s*l-r*a)>=0&&d+u<s*c-r*r}}Re.CLOSEST=Ha.CLOSEST;Re.ANY=Ha.ANY;Re.ALL=Ha.ALL;const ll=new nn,Mr=[],gs=new S,wr=new S,bg=new S,Eg=new Pe,je=new S,dn=new S,yn=new S,Mn=new S;new S;new Ao;const hl={faceList:[0]},lo=new S,Tg=new Re,Ag=[],Cg=new S,Rg=new S,Pg=new S;new S;new S;const dl=new S,Ig=new S,Dg=new S,Lg=new S,Ng=new S,Ug=new S,Fg=new S;new nn;const Og=[],Bg=new he,Mi=new S,ho=new S;function zg(o,t,e){e.vsub(o,Mi);const n=Mi.dot(t);return t.scale(n,ho),ho.vadd(o,ho),e.distanceTo(ho)}class Gg{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class ul{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Is{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Is.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ul,this.jacobianElementB=new ul,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(r,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(r,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,d=i.invMassSolve;return s.scale(l,fl),a.scale(d,pl),n.invInertiaWorldSolve.vmult(r,ml),i.invInertiaWorldSolve.vmult(c,gl),t.multiplyVectors(fl,ml)+e.multiplyVectors(pl,gl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+r;return a.vmult(t.rotational,uo),l+=uo.dot(t.rotational),c.vmult(e.rotational,uo),l+=uo.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=kg;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Is.idCounter=0;const fl=new S,pl=new S,ml=new S,gl=new S,uo=new S,kg=new S;class Vg extends Is{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,c=Hg,l=Wg,d=i.velocity,u=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=Xg,v=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;r.cross(g,c),a.cross(g,l),g.negate(v.spatial),c.negate(v.rotational),p.spatial.copy(g),p.rotational.copy(l),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(r,m);const _=g.dot(m),w=this.restitution+1,M=w*h.dot(g)-w*d.dot(g)+f.dot(l)-u.dot(c),A=this.computeGiMf();return-_*e-M*n-t*A}getImpactVelocityAlongNormal(){const t=Yg,e=qg,n=jg,i=Kg,s=$g;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Hg=new S,Wg=new S,Xg=new S,Yg=new S,qg=new S,jg=new S,Kg=new S,$g=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class vl extends Is{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Zg,r=Jg,a=this.t;n.cross(a,s),i.cross(a,r);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);const d=this.computeGW(),u=this.computeGiMf();return-d*e-t*u}}const Zg=new S,Jg=new S;class Lo{constructor(t,e,n){n=Gg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Lo.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Lo.idCounter=0;class No{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=No.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}No.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Re;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Qg extends Mt{constructor(){super({type:Mt.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){On.set(0,0,1),e.vmult(On,On);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),On.x===1?i.x=t.x:On.x===-1&&(n.x=t.x),On.y===1?i.y=t.y:On.y===-1&&(n.y=t.y),On.z===1?i.z=t.z:On.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const On=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new nn;new S;new nn;new S;new S;new S;new S;new S;new S;new S;new nn;new S;new he;new nn;class tv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class ev extends tv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=e.bodies,l=c.length,d=t;let u,h,f,m,v,p;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const g=iv,_=sv,w=nv;g.length=a,_.length=a,w.length=a;for(let M=0;M!==a;M++){const A=r[M];w[M]=0,_[M]=A.computeB(d),g[M]=1/A.computeC()}if(a!==0){for(let b=0;b!==l;b++){const R=c[b],x=R.vlambda,E=R.wlambda;x.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let b=0;b!==a;b++){const R=r[b];u=_[b],h=g[b],p=w[b],v=R.computeGWlambda(),f=h*(u-v-R.eps*p),p+f<R.minForce?f=R.minForce-p:p+f>R.maxForce&&(f=R.maxForce-p),w[b]+=f,m+=f>0?f:-f,R.addToWlambda(f)}if(m*m<s)break}for(let b=0;b!==l;b++){const R=c[b],x=R.velocity,E=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),x.vadd(R.vlambda,x),R.wlambda.vmul(R.angularFactor,R.wlambda),E.vadd(R.wlambda,E)}let M=r.length;const A=1/d;for(;M--;)r[M].multiplier=w[M]*A}return n}}const nv=[],iv=[],sv=[];class ov{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class rv extends ov{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const ye={sphereSphere:Mt.types.SPHERE,spherePlane:Mt.types.SPHERE|Mt.types.PLANE,boxBox:Mt.types.BOX|Mt.types.BOX,sphereBox:Mt.types.SPHERE|Mt.types.BOX,planeBox:Mt.types.PLANE|Mt.types.BOX,convexConvex:Mt.types.CONVEXPOLYHEDRON,sphereConvex:Mt.types.SPHERE|Mt.types.CONVEXPOLYHEDRON,planeConvex:Mt.types.PLANE|Mt.types.CONVEXPOLYHEDRON,boxConvex:Mt.types.BOX|Mt.types.CONVEXPOLYHEDRON,sphereHeightfield:Mt.types.SPHERE|Mt.types.HEIGHTFIELD,boxHeightfield:Mt.types.BOX|Mt.types.HEIGHTFIELD,convexHeightfield:Mt.types.CONVEXPOLYHEDRON|Mt.types.HEIGHTFIELD,sphereParticle:Mt.types.PARTICLE|Mt.types.SPHERE,planeParticle:Mt.types.PLANE|Mt.types.PARTICLE,boxParticle:Mt.types.BOX|Mt.types.PARTICLE,convexParticle:Mt.types.PARTICLE|Mt.types.CONVEXPOLYHEDRON,cylinderCylinder:Mt.types.CYLINDER,sphereCylinder:Mt.types.SPHERE|Mt.types.CYLINDER,planeCylinder:Mt.types.PLANE|Mt.types.CYLINDER,boxCylinder:Mt.types.BOX|Mt.types.CYLINDER,convexCylinder:Mt.types.CONVEXPOLYHEDRON|Mt.types.CYLINDER,heightfieldCylinder:Mt.types.HEIGHTFIELD|Mt.types.CYLINDER,particleCylinder:Mt.types.PARTICLE|Mt.types.CYLINDER,sphereTrimesh:Mt.types.SPHERE|Mt.types.TRIMESH,planeTrimesh:Mt.types.PLANE|Mt.types.TRIMESH};class av{get[ye.sphereSphere](){return this.sphereSphere}get[ye.spherePlane](){return this.spherePlane}get[ye.boxBox](){return this.boxBox}get[ye.sphereBox](){return this.sphereBox}get[ye.planeBox](){return this.planeBox}get[ye.convexConvex](){return this.convexConvex}get[ye.sphereConvex](){return this.sphereConvex}get[ye.planeConvex](){return this.planeConvex}get[ye.boxConvex](){return this.boxConvex}get[ye.sphereHeightfield](){return this.sphereHeightfield}get[ye.boxHeightfield](){return this.boxHeightfield}get[ye.convexHeightfield](){return this.convexHeightfield}get[ye.sphereParticle](){return this.sphereParticle}get[ye.planeParticle](){return this.planeParticle}get[ye.boxParticle](){return this.boxParticle}get[ye.convexParticle](){return this.convexParticle}get[ye.cylinderCylinder](){return this.convexConvex}get[ye.sphereCylinder](){return this.sphereConvex}get[ye.planeCylinder](){return this.planeConvex}get[ye.boxCylinder](){return this.boxConvex}get[ye.convexCylinder](){return this.convexConvex}get[ye.heightfieldCylinder](){return this.heightfieldCylinder}get[ye.particleCylinder](){return this.particleCylinder}get[ye.sphereTrimesh](){return this.sphereTrimesh}get[ye.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new rv,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Vg(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,d=i.material||e.material;return l&&d&&l.restitution>=0&&d.restitution>=0&&(a.restitution=l.restitution*d.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const d=s.material||n.material,u=r.material||i.material;if(d&&u&&d.friction>=0&&u.friction>=0&&(l=d.friction*u.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,v=m.length?m.pop():new vl(n,i,h*f),p=m.length?m.pop():new vl(n,i,h*f);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-h*f,v.maxForce=p.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(v.t,p.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=t.enabled,e.push(v,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];vi.setZero(),Yi.setZero(),qi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(vi.vadd(e.ni,vi),Yi.vadd(e.ri,Yi),qi.vadd(e.rj,qi)):(vi.vsub(e.ni,vi),Yi.vadd(e.rj,Yi),qi.vadd(e.ri,qi));const r=1/t;Yi.scale(r,n.ri),qi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),vi.normalize(),vi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const c=hv,l=dv,d=cv,u=lv;for(let h=0,f=t.length;h!==f;h++){const m=t[h],v=e[h];let p=null;m.material&&v.material&&(p=n.getContactMaterial(m.material,v.material)||null);const g=m.type&wt.KINEMATIC&&v.type&wt.STATIC||m.type&wt.STATIC&&v.type&wt.KINEMATIC||m.type&wt.KINEMATIC&&v.type&wt.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],c),m.quaternion.vmult(m.shapeOffsets[_],d),d.vadd(m.position,d);const w=m.shapes[_];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],l),v.quaternion.vmult(v.shapeOffsets[M],u),u.vadd(v.position,u);const A=v.shapes[M];if(!(w.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&w.collisionFilterGroup)||d.distanceTo(u)>w.boundingSphereRadius+A.boundingSphereRadius)continue;let b=null;w.material&&A.material&&(b=n.getContactMaterial(w.material,A.material)||null),this.currentContactMaterial=b||p||n.defaultContactMaterial;const R=w.type|A.type,x=this[R];if(x){let E=!1;w.type<A.type?E=x.call(this,w,A,d,u,c,l,m,v,w,A,g):E=x.call(this,A,w,u,d,l,c,v,m,w,A,g),E&&g&&(n.shapeOverlapKeeper.set(w.id,A.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,n,i,s,r,a,c,l,d,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,d);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,r,a,c,l,d,u){const h=this.createContactEquation(a,c,t,e,l,d);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,fo),h.ni.scale(h.ni.dot(fo),_l),fo.vsub(_l,h.rj),-fo.dot(h.ni)<=t.radius){if(u)return!0;const f=h.ri,m=h.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(c.position,m),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,r,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,a,c,t,e,u)}sphereBox(t,e,n,i,s,r,a,c,l,d,u){const h=this.v3pool,f=Ov;n.vsub(i,po),e.getSideNormals(f,r);const m=t.radius;let v=!1;const p=zv,g=Gv,_=kv;let w=null,M=0,A=0,b=0,R=null;for(let N=0,G=f.length;N!==G&&v===!1;N++){const K=Nv;K.copy(f[N]);const q=K.length();K.normalize();const st=po.dot(K);if(st<q+m&&st>0){const ot=Uv,$=Fv;ot.copy(f[(N+1)%3]),$.copy(f[(N+2)%3]);const _t=ot.length(),Zt=$.length();ot.normalize(),$.normalize();const Yt=po.dot(ot),Z=po.dot($);if(Yt<_t&&Yt>-_t&&Z<Zt&&Z>-Zt){const it=Math.abs(st-q-m);if((R===null||it<R)&&(R=it,A=Yt,b=Z,w=q,p.copy(K),g.copy(ot),_.copy($),M++,u))return!0}}}if(M){v=!0;const N=this.createContactEquation(a,c,t,e,l,d);p.scale(-m,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(w,p),g.scale(A,g),p.vadd(g,p),_.scale(b,_),p.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let x=h.get();const E=Bv;for(let N=0;N!==2&&!v;N++)for(let G=0;G!==2&&!v;G++)for(let K=0;K!==2&&!v;K++)if(x.set(0,0,0),N?x.vadd(f[0],x):x.vsub(f[0],x),G?x.vadd(f[1],x):x.vsub(f[1],x),K?x.vadd(f[2],x):x.vsub(f[2],x),i.vadd(x,E),E.vsub(n,E),E.lengthSquared()<m*m){if(u)return!0;v=!0;const q=this.createContactEquation(a,c,t,e,l,d);q.ri.copy(E),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(m,q.ri),q.rj.copy(x),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(c.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}h.release(x),x=null;const k=h.get(),I=h.get(),B=h.get(),L=h.get(),F=h.get(),U=f.length;for(let N=0;N!==U&&!v;N++)for(let G=0;G!==U&&!v;G++)if(N%3!==G%3){f[G].cross(f[N],k),k.normalize(),f[N].vadd(f[G],I),B.copy(n),B.vsub(I,B),B.vsub(i,B);const K=B.dot(k);k.scale(K,L);let q=0;for(;q===N%3||q===G%3;)q++;F.copy(n),F.vsub(L,F),F.vsub(I,F),F.vsub(i,F);const st=Math.abs(K),ot=F.length();if(st<f[q].length()&&ot<m){if(u)return!0;v=!0;const $=this.createContactEquation(a,c,t,e,l,d);I.vadd(L,$.rj),$.rj.copy($.rj),F.negate($.ni),$.ni.normalize(),$.ri.copy($.rj),$.ri.vadd(i,$.ri),$.ri.vsub(n,$.ri),$.ri.normalize(),$.ri.scale(m,$.ri),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(c.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}h.release(k,I,B,L,F)}planeBox(t,e,n,i,s,r,a,c,l,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,a,c,t,e,u)}convexConvex(t,e,n,i,s,r,a,c,l,d,u,h,f){const m=n_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,m,h,f)){const v=[],p=i_;t.clipAgainstHull(n,s,e,i,r,m,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(u)return!0;const w=this.createContactEquation(a,c,t,e,l,d),M=w.ri,A=w.rj;m.negate(w.ni),v[_].normal.negate(p),p.scale(v[_].depth,p),v[_].point.vadd(p,M),A.copy(v[_].point),M.vsub(n,M),A.vsub(i,A),M.vadd(n,M),M.vsub(a.position,M),A.vadd(i,A),A.vsub(c.position,A),this.result.push(w),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,i,s,r,a,c,l,d,u){const h=this.v3pool;n.vsub(i,Vv);const f=e.faceNormals,m=e.faces,v=e.vertices,p=t.radius;let g=!1;for(let _=0;_!==v.length;_++){const w=v[_],M=Yv;r.vmult(w,M),i.vadd(M,M);const A=Xv;if(M.vsub(n,A),A.lengthSquared()<p*p){if(u)return!0;g=!0;const b=this.createContactEquation(a,c,t,e,l,d);b.ri.copy(A),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(p,b.ri),M.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,w=m.length;_!==w&&g===!1;_++){const M=f[_],A=m[_],b=qv;r.vmult(M,b);const R=jv;r.vmult(v[A[0]],R),R.vadd(i,R);const x=Kv;b.scale(-p,x),n.vadd(x,x);const E=$v;x.vsub(R,E);const k=E.dot(b),I=Zv;if(n.vsub(R,I),k<0&&I.dot(b)>0){const B=[];for(let L=0,F=A.length;L!==F;L++){const U=h.get();r.vmult(v[A[L]],U),i.vadd(U,U),B.push(U)}if(Lv(B,b,n)){if(u)return!0;g=!0;const L=this.createContactEquation(a,c,t,e,l,d);b.scale(-p,L.ri),b.negate(L.ni);const F=h.get();b.scale(-k,F);const U=h.get();b.scale(-p,U),n.vsub(i,L.rj),L.rj.vadd(U,L.rj),L.rj.vadd(F,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(c.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),h.release(F),h.release(U),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,G=B.length;N!==G;N++)h.release(B[N]);return}else for(let L=0;L!==A.length;L++){const F=h.get(),U=h.get();r.vmult(v[A[(L+1)%A.length]],F),r.vmult(v[A[(L+2)%A.length]],U),i.vadd(F,F),i.vadd(U,U);const N=Hv;U.vsub(F,N);const G=Wv;N.unit(G);const K=h.get(),q=h.get();n.vsub(F,q);const st=q.dot(G);G.scale(st,K),K.vadd(F,K);const ot=h.get();if(K.vsub(n,ot),st>0&&st*st<N.lengthSquared()&&ot.lengthSquared()<p*p){if(u)return!0;const $=this.createContactEquation(a,c,t,e,l,d);K.vsub(i,$.rj),K.vsub(n,$.ni),$.ni.normalize(),$.ni.scale(p,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(c.position,$.rj),$.ri.vadd(n,$.ri),$.ri.vsub(a.position,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult);for(let _t=0,Zt=B.length;_t!==Zt;_t++)h.release(B[_t]);h.release(F),h.release(U),h.release(K),h.release(ot),h.release(q);return}h.release(F),h.release(U),h.release(K),h.release(ot),h.release(q)}for(let L=0,F=B.length;L!==F;L++)h.release(B[L])}}}planeConvex(t,e,n,i,s,r,a,c,l,d,u){const h=Jv,f=Qv;f.set(0,0,1),s.vmult(f,f);let m=0;const v=t_;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,c,t,e,l,d),w=e_;f.scale(f.dot(v),w),h.vsub(w,w),w.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,s,r,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,a,c,t,e,u)}sphereHeightfield(t,e,n,i,s,r,a,c,l,d,u){const h=e.data,f=t.radius,m=e.elementSize,v=m_,p=p_;he.pointToLocalFrame(i,r,n,p);let g=Math.floor((p.x-f)/m)-1,_=Math.ceil((p.x+f)/m)+1,w=Math.floor((p.y-f)/m)-1,M=Math.ceil((p.y+f)/m)+1;if(_<0||M<0||g>h.length||w>h[0].length)return;g<0&&(g=0),_<0&&(_=0),w<0&&(w=0),M<0&&(M=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),M>=h[0].length&&(M=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const A=[];e.getRectMinMax(g,w,_,M,A);const b=A[0],R=A[1];if(p.z-f>R||p.z+f<b)return;const x=this.result;for(let E=g;E<_;E++)for(let k=w;k<M;k++){const I=x.length;let B=!1;if(e.getConvexTrianglePillar(E,k,!1),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,c,t,e,u)),u&&B||(e.getConvexTrianglePillar(E,k,!0),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,v,s,r,a,c,t,e,u)),u&&B))return!0;if(x.length-I>2)return}}boxHeightfield(t,e,n,i,s,r,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,a,c,t,e,u)}convexHeightfield(t,e,n,i,s,r,a,c,l,d,u){const h=e.data,f=e.elementSize,m=t.boundingSphereRadius,v=u_,p=f_,g=d_;he.pointToLocalFrame(i,r,n,g);let _=Math.floor((g.x-m)/f)-1,w=Math.ceil((g.x+m)/f)+1,M=Math.floor((g.y-m)/f)-1,A=Math.ceil((g.y+m)/f)+1;if(w<0||A<0||_>h.length||M>h[0].length)return;_<0&&(_=0),w<0&&(w=0),M<0&&(M=0),A<0&&(A=0),_>=h.length&&(_=h.length-1),w>=h.length&&(w=h.length-1),A>=h[0].length&&(A=h[0].length-1),M>=h[0].length&&(M=h[0].length-1);const b=[];e.getRectMinMax(_,M,w,A,b);const R=b[0],x=b[1];if(!(g.z-m>x||g.z+m<R))for(let E=_;E<w;E++)for(let k=M;k<A;k++){let I=!1;if(e.getConvexTrianglePillar(E,k,!1),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,c,null,null,u,p,null)),u&&I||(e.getConvexTrianglePillar(E,k,!0),he.pointToWorldFrame(i,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,v,s,r,a,c,null,null,u,p,null)),u&&I))return!0}}sphereParticle(t,e,n,i,s,r,a,c,l,d,u){const h=a_;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(u)return!0;const m=this.createContactEquation(c,a,e,t,l,d);h.normalize(),m.rj.copy(h),m.rj.scale(t.radius,m.rj),m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,s,r,a,c,l,d,u){const h=s_;h.set(0,0,1),a.quaternion.vmult(h,h);const f=o_;if(i.vsub(a.position,f),h.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(c,a,e,t,l,d);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=r_;h.scale(h.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,r,a,c,l,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,a,c,t,e,u)}convexParticle(t,e,n,i,s,r,a,c,l,d,u){let h=-1;const f=l_,m=h_;let v=null;const p=c_;if(p.copy(i),p.vsub(n,p),s.conjugate(xl),xl.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let g=0,_=t.faces.length;g!==_;g++){const w=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];i.vsub(w[0],yl);const A=-M.dot(yl);if(v===null||Math.abs(A)<Math.abs(v)){if(u)return!0;v=A,h=g,f.copy(M)}}if(h!==-1){const g=this.createContactEquation(c,a,e,t,l,d);f.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,w=g.rj;_.vadd(i,_),_.vsub(c.position,_),w.vadd(n,w),w.vsub(a.position,w),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,a,c,l,d,u){return this.convexHeightfield(e,t,i,n,r,s,c,a,l,d,u)}particleCylinder(t,e,n,i,s,r,a,c,l,d,u){return this.convexParticle(e,t,i,n,r,s,c,a,l,d,u)}sphereTrimesh(t,e,n,i,s,r,a,c,l,d,u){const h=xv,f=yv,m=Mv,v=wv,p=Sv,g=bv,_=Cv,w=_v,M=gv,A=Rv;he.pointToLocalFrame(i,r,n,p);const b=t.radius;_.lowerBound.set(p.x-b,p.y-b,p.z-b),_.upperBound.set(p.x+b,p.y+b,p.z+b),e.getTrianglesInAABB(_,A);const R=vv,x=t.radius*t.radius;for(let L=0;L<A.length;L++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[A[L]*3+F],R),R.vsub(p,M),M.lengthSquared()<=x){if(w.copy(R),he.pointToWorldFrame(i,r,w,R),R.vsub(n,M),u)return!0;let U=this.createContactEquation(a,c,t,e,l,d);U.ni.copy(M),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(R),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let L=0;L<A.length;L++)for(let F=0;F<3;F++){e.getVertex(e.indices[A[L]*3+F],h),e.getVertex(e.indices[A[L]*3+(F+1)%3],f),f.vsub(h,m),p.vsub(f,g);const U=g.dot(m);p.vsub(h,g);let N=g.dot(m);if(N>0&&U<0&&(p.vsub(h,g),v.copy(m),v.normalize(),N=g.dot(v),v.scale(N,g),g.vadd(h,g),g.distanceTo(p)<t.radius)){if(u)return!0;const K=this.createContactEquation(a,c,t,e,l,d);g.vsub(p,K.ni),K.ni.normalize(),K.ni.scale(t.radius,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),he.pointToWorldFrame(i,r,g,g),g.vsub(c.position,K.rj),he.vectorToWorldFrame(r,K.ni,K.ni),he.vectorToWorldFrame(r,K.ri,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}const E=Ev,k=Tv,I=Av,B=mv;for(let L=0,F=A.length;L!==F;L++){e.getTriangleVertices(A[L],E,k,I),e.getNormal(A[L],B),p.vsub(E,g);let U=g.dot(B);if(B.scale(U,g),p.vsub(g,g),U=g.distanceTo(p),Re.pointInTriangle(g,E,k,I)&&U<t.radius){if(u)return!0;let N=this.createContactEquation(a,c,t,e,l,d);g.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),he.pointToWorldFrame(i,r,g,g),g.vsub(c.position,N.rj),he.vectorToWorldFrame(r,N.ni,N.ni),he.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,r,a,c,l,d,u){const h=new S,f=uv;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,h);const v=new S;v.copy(h),he.pointToWorldFrame(i,r,v,h);const p=fv;if(h.vsub(n,p),f.dot(p)<=0){if(u)return!0;const _=this.createContactEquation(a,c,t,e,l,d);_.ni.copy(f);const w=pv;f.scale(p.dot(f),w),h.vsub(w,w),_.ri.copy(w),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const vi=new S,Yi=new S,qi=new S,cv=new S,lv=new S,hv=new Pe,dv=new Pe,uv=new S,fv=new S,pv=new S,mv=new S,gv=new S;new S;const vv=new S,_v=new S,xv=new S,yv=new S,Mv=new S,wv=new S,Sv=new S,bv=new S,Ev=new S,Tv=new S,Av=new S,Cv=new nn,Rv=[],fo=new S,_l=new S,Pv=new S,Iv=new S,Dv=new S;function Lv(o,t,e){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=Pv;o[(s+1)%i].vsub(r,a);const c=Iv;a.cross(t,c);const l=Dv;e.vsub(r,l);const d=c.dot(l);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const po=new S,Nv=new S,Uv=new S,Fv=new S,Ov=[new S,new S,new S,new S,new S,new S],Bv=new S,zv=new S,Gv=new S,kv=new S,Vv=new S,Hv=new S,Wv=new S,Xv=new S,Yv=new S,qv=new S,jv=new S,Kv=new S,$v=new S,Zv=new S;new S;new S;const Jv=new S,Qv=new S,t_=new S,e_=new S,n_=new S,i_=new S,s_=new S,o_=new S,r_=new S,a_=new S,xl=new Pe,c_=new S;new S;const l_=new S,yl=new S,h_=new S,d_=new S,u_=new S,f_=[0],p_=new S,m_=new S;class Ml{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const d=n[c];for(;d>i[a];)a++;l=d===i[a],l||wl(t,d)}a=0;for(let c=0;c<r;c++){let l=!1;const d=i[c];for(;d>n[a];)a++;l=n[a]===d,l||wl(e,d)}}}function wl(o,t){o.push((t&4294901760)>>16,t&65535)}const Sr=(o,t)=>o<t?`${o}-${t}`:`${t}-${o}`;class g_{constructor(){this.data={keys:[]}}get(t,e){const n=Sr(t,e);return this.data[n]}set(t,e,n){const i=Sr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Sr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class v_ extends ch{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Sg,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new ev,this.constraints=[],this.narrowphase=new av(this),this.collisionMatrix=new al,this.collisionMatrixPrevious=new al,this.bodyOverlapKeeper=new Ml,this.shapeOverlapKeeper=new Ml,this.contactmaterials=[],this.contactMaterialTable=new g_,this.defaultMaterial=new No("default"),this.defaultContactMaterial=new Lo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ao?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.ALL,n.from=t,n.to=e,n.callback=i,br.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.ANY,n.from=t,n.to=e,n.result=i,br.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Re.CLOSEST,n.from=t,n.to=e,n.result=i,br.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof wt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ie.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ie.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=w_,i=S_,s=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,d=this.profile,u=wt.DYNAMIC;let h=-1/0;const f=this.constraints,m=M_;c.length();const v=c.x,p=c.y,g=c.z;let _=0;for(l&&(h=Ie.now()),_=0;_!==s;_++){const L=r[_];if(L.type===u){const F=L.force,U=L.mass;F.x+=U*v,F.y+=U*p,F.z+=U*g}}for(let L=0,F=this.subsystems.length;L!==F;L++)this.subsystems[L].update();l&&(h=Ie.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(d.broadphase=Ie.now()-h);let w=f.length;for(_=0;_!==w;_++){const L=f[_];if(!L.collideConnected)for(let F=n.length-1;F>=0;F-=1)(L.bodyA===n[F]&&L.bodyB===i[F]||L.bodyB===n[F]&&L.bodyA===i[F])&&(n.splice(F,1),i.splice(F,1))}this.collisionMatrixTick(),l&&(h=Ie.now());const M=y_,A=e.length;for(_=0;_!==A;_++)M.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,m),l&&(d.narrowphase=Ie.now()-h),l&&(h=Ie.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const R=e.length;for(let L=0;L!==R;L++){const F=e[L],U=F.bi,N=F.bj,G=F.si,K=F.sj;let q;if(U.material&&N.material?q=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(F.restitution=U.material.restitution*N.material.restitution)),a.addEquation(F),U.allowSleep&&U.type===wt.DYNAMIC&&U.sleepState===wt.SLEEPING&&N.sleepState===wt.AWAKE&&N.type!==wt.STATIC){const st=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ot=N.sleepSpeedLimit**2;st>=ot*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===wt.DYNAMIC&&N.sleepState===wt.SLEEPING&&U.sleepState===wt.AWAKE&&U.type!==wt.STATIC){const st=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ot=U.sleepSpeedLimit**2;st>=ot*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(vs.body=N,vs.contact=F,U.dispatchEvent(vs),vs.body=U,N.dispatchEvent(vs)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(G.id,K.id)}for(this.emitContactEvents(),l&&(d.makeContactConstraints=Ie.now()-h,h=Ie.now()),_=0;_!==s;_++){const L=r[_];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(w=f.length,_=0;_!==w;_++){const L=f[_];L.update();for(let F=0,U=L.equations.length;F!==U;F++){const N=L.equations[F];a.addEquation(N)}}a.solve(t,this),l&&(d.solve=Ie.now()-h),a.removeAllEquations();const x=Math.pow;for(_=0;_!==s;_++){const L=r[_];if(L.type&u){const F=x(1-L.linearDamping,t),U=L.velocity;U.scale(F,U);const N=L.angularVelocity;if(N){const G=x(1-L.angularDamping,t);N.scale(G,N)}}}this.dispatchEvent(x_),l&&(h=Ie.now());const k=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(_=0;_!==s;_++)r[_].integrate(t,k,I);this.clearForces(),this.broadphase.dirty=!0,l&&(d.integrate=Ie.now()-h),this.stepnumber+=1,this.dispatchEvent(__);let B=!0;if(this.allowSleep)for(B=!1,_=0;_!==s;_++){const L=r[_];L.sleepTick(this.time),L.sleepState!==wt.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Bn,zn),t){for(let s=0,r=Bn.length;s<r;s+=2)_s.bodyA=this.getBodyById(Bn[s]),_s.bodyB=this.getBodyById(Bn[s+1]),this.dispatchEvent(_s);_s.bodyA=_s.bodyB=null}if(e){for(let s=0,r=zn.length;s<r;s+=2)xs.bodyA=this.getBodyById(zn[s]),xs.bodyB=this.getBodyById(zn[s+1]),this.dispatchEvent(xs);xs.bodyA=xs.bodyB=null}Bn.length=zn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Bn,zn),n){for(let s=0,r=Bn.length;s<r;s+=2){const a=this.getShapeById(Bn[s]),c=this.getShapeById(Bn[s+1]);Gn.shapeA=a,Gn.shapeB=c,a&&(Gn.bodyA=a.body),c&&(Gn.bodyB=c.body),this.dispatchEvent(Gn)}Gn.bodyA=Gn.bodyB=Gn.shapeA=Gn.shapeB=null}if(i){for(let s=0,r=zn.length;s<r;s+=2){const a=this.getShapeById(zn[s]),c=this.getShapeById(zn[s+1]);kn.shapeA=a,kn.shapeB=c,a&&(kn.bodyA=a.body),c&&(kn.bodyB=c.body),this.dispatchEvent(kn)}kn.bodyA=kn.bodyB=kn.shapeA=kn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new nn;const br=new Re,Ie=globalThis.performance||{};if(!Ie.now){let o=Date.now();Ie.timing&&Ie.timing.navigationStart&&(o=Ie.timing.navigationStart),Ie.now=()=>Date.now()-o}new S;const __={type:"postStep"},x_={type:"preStep"},vs={type:wt.COLLIDE_EVENT_NAME,body:null,contact:null},y_=[],M_=[],w_=[],S_=[],Bn=[],zn=[],_s={type:"beginContact",bodyA:null,bodyB:null},xs={type:"endContact",bodyA:null,bodyB:null},Gn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},kn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class b_{constructor(){C(this,"world");C(this,"bodies",new Map);this.world=new v_,this.world.gravity.set(0,-9.82,0),this.world.defaultContactMaterial.friction=.4}addBody(t,e,n,i=1){const s=new wt({mass:i,shape:n});return s.position.copy(e),this.world.addBody(s),this.bodies.set(t,s),s}addGround(t,e){const n=new Qg,i=new wt({mass:0,shape:n});i.position.y=-.1,this.world.addBody(i)}getBody(t){return this.bodies.get(t)}update(t){this.world.step(1/60,t,3),this.bodies.forEach((e,n)=>{n.position.copy(e.position),n.quaternion.copy(e.quaternion)})}getWorld(){return this.world}applyForce(t,e){const n=this.bodies.get(t);n&&n.applyForce(new S(e.x,e.y,e.z),n.position)}applyImpulse(t,e){const n=this.bodies.get(t);n&&n.applyImpulse(new S(e.x,e.y,e.z),n.position)}}class E_ extends ci{constructor(e){super(e);C(this,"age",0);C(this,"maxAge",60);C(this,"speed",3);this.mesh=this.createHybridMesh(),this.mesh.position.copy(this.position),this.dialogues=["I am the child of worlds!","Sage and Cat God blend within me","I am chaos and order","nyaaa~ *ethereal meow*","I drift between dimensions","Born of dream and divinity","GURETO DAZE! I am born perfect!","YARE YARE... I inherited both their powers","Your next line is: 'What is this hybrid?'","I have my father's stand... MEOW EXPERIENCE!","WRYYYYYYY! I am alive!","NIGERUNDAYO from expectation!","I am... STONE FREE SAGE CAT!","TORTURE DANCE... no TORTURE PURR!","*ゴゴゴ menacing hybrid energy ゴゴゴ*","Both timelines... MERGED! JOTARO WOULD BE PROUD!","I am the will of both! UNLIMITED MEOW WORKS!","MUDA MUDA! I'm useless... or am I?","ORA ORA ORA ORA! Watch my baby fists!","HNNNNNG! I'm just a baby hybrid!!!"]}createHybridMesh(){const e=new oe,n=new ht(.5,16,16),i=new Pt({color:8930559}),s=new D(n,i);s.position.x=-.4,e.add(s);const r=new ht(.5,16,16),a=new Nt({color:16746564}),c=new D(r,a);c.position.x=.4,e.add(c);const l=new ht(.3,16,16),d=new Pt({color:16755200}),u=new D(l,d);e.add(u);const h=new ht(.1,8,8),f=new D(h,new Pt({color:16776960}));f.position.set(-.4,.2,.4),e.add(f);const m=new D(h,new Pt({color:0}));return m.position.set(.4,.2,.4),e.add(m),e}update(e){this.age+=e,this.randomWalk(e,this.speed),Math.random()<.001&&this.speak();const n=this.maxAge*.75;if(this.age>n){const i=(this.age-n)/(this.maxAge-n);this.mesh.traverse(s=>{s instanceof D&&s.material instanceof Pt&&(s.material.opacity=1-i)})}this.age>this.maxAge&&this.die()}getType(){return"hybrid"}}class T_{constructor(){C(this,"lastSpawnTime",0);C(this,"minSpawnInterval",3);C(this,"spawnDistance",8);C(this,"offspringCount",0)}canProcreate(t,e){const n=t.distanceTo(e),i=Date.now()/1e3-this.lastSpawnTime;return n<this.spawnDistance&&i>this.minSpawnInterval}procreate(t,e,n){if(!this.canProcreate(t,e))return null;const i=new z((t.x+e.x)/2+(Math.random()-.5)*3,3,(t.z+e.z)/2+(Math.random()-.5)*3),s=new E_(i);return n.add(s.getMesh()),this.lastSpawnTime=Date.now()/1e3,this.offspringCount++,console.log(`✨ HYBRID OFFSPRING #${this.offspringCount} BORN! ✨`),console.log("💜 A being of Sage and Cat God blessed existence"),s}getOffspringCount(){return this.offspringCount}getDistance(t,e){return t.distanceTo(e)}getCanProcreateMessage(t){return t<this.spawnDistance?`❤️ PROCREATION AVAILABLE (distance: ${t.toFixed(1)}) - Press P!`:`💔 Get closer to Cat God (${t.toFixed(1)}/${this.spawnDistance})`}}class A_{constructor(t){C(this,"camera");C(this,"targetPosition");C(this,"targetLookAt");C(this,"isRightMouseDown",!1);C(this,"lastMouseX",0);C(this,"lastMouseY",0);C(this,"mouseDeltaX",0);C(this,"mouseDeltaY",0);C(this,"orbitDistance",15);C(this,"orbitHeight",8);C(this,"orbitAngleX",0);C(this,"orbitAngleY",0);C(this,"mouseSensitivity",.005);C(this,"followSmoothness",.1);this.camera=t,this.targetPosition=new z(0,0,0),this.targetLookAt=new z(0,0,0),this.setupMouseControls()}setupMouseControls(){document.addEventListener("mousedown",t=>{t.button===2&&(this.isRightMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),document.addEventListener("mousemove",t=>{this.isRightMouseDown&&(this.mouseDeltaX=t.clientX-this.lastMouseX,this.mouseDeltaY=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY,this.orbitAngleY-=this.mouseDeltaX*this.mouseSensitivity,this.orbitAngleX-=this.mouseDeltaY*this.mouseSensitivity,this.orbitAngleX=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this.orbitAngleX)))}),document.addEventListener("mouseup",t=>{t.button===2&&(this.isRightMouseDown=!1,this.mouseDeltaX=0,this.mouseDeltaY=0)}),document.addEventListener("contextmenu",t=>{t.preventDefault()})}setFollowTarget(t,e){this.targetPosition.copy(t),this.targetLookAt.copy(e)}setOrbitDistance(t){this.orbitDistance=t}applyTouchDelta(t,e){this.orbitAngleY-=t*this.mouseSensitivity,this.orbitAngleX-=e*this.mouseSensitivity,this.orbitAngleX=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this.orbitAngleX))}update(){const t=this.orbitDistance*Math.sin(this.orbitAngleY)*Math.cos(this.orbitAngleX),e=this.orbitDistance*Math.sin(this.orbitAngleX)+this.orbitHeight,n=this.orbitDistance*Math.cos(this.orbitAngleY)*Math.cos(this.orbitAngleX),i=new z(this.targetPosition.x+t,this.targetPosition.y+e,this.targetPosition.z+n);i.y=Math.max(1.2,i.y),this.camera.position.lerp(i,this.followSmoothness),this.camera.lookAt(this.targetLookAt)}getOrbitAngleY(){return this.orbitAngleY}resetOrbit(){this.orbitAngleX=0,this.orbitAngleY=0}getOrbitDistance(){return this.orbitDistance}setMouseSensitivity(t){this.mouseSensitivity=t}}class C_{constructor(){C(this,"stoneMaskPower",0);C(this,"hamonEnergy",100);C(this,"nextLineIsCorrect",!1);C(this,"standActive",!1);C(this,"standName","MEOW PLATINUM");C(this,"stardustItensity",0);C(this,"hairInsultCounter",0);C(this,"rohanDrawingPower",0);C(this,"goldenDreamAwakened",!1);C(this,"tortureDanceActive",!1);C(this,"stringFreePower",0);C(this,"emporioEscapeProgress",0);console.log("🐱 JOJO MODE ACTIVATED!!!"),console.log("*ゴゴゴ menacing energy radiates from the Cat God ゴゴゴ*")}predictNextAction(){const t=["Your next line is: 'That's impossible!'","I predict you will move right","You're going to procreate with the Cat God!","The Sage will use WASD next","A hybrid will spawn in 3... 2... 1...","You're asking 'What's the reference?'","You just realized... IT WAS ME, DIO!","The camera will rotate clockwise"];return t[Math.floor(Math.random()*t.length)]}getYareYareDaze(){const t=["YARE YARE DAZE... another fool approaches","YARE YARE... this game is truly bizarre","YARE YARE DAZE! Such pathetic procreation!","YARE YARE... you thought it would be different?"];return t[Math.floor(Math.random()*t.length)]}getGuretoLines(){const t=["GURETO DAZE! This code is truly great!","GURETO DAZE! Messy code is beautiful code!","Is this your stand... sloppy coding?","GURETO DAZE! I have become... SPECTACULAR!"];return t[Math.floor(Math.random()*t.length)]}activateRoadRollerDa(){return"ROAD ROLLER DA!!!! *compresses space-time* WRYYYYYYY"}activateStoneMaskMode(){console.log("🧛 THE STONE MASK... IT AWAKENS THE VAMPIRE WITHIN"),console.log("💀 WRYYYYYYY! I shall become the ultimate lifeform!"),this.stoneMaskPower=100}breatheHamon(){return this.hamonEnergy=100,"SENDO RIPPLE! The sound of victory! HI-HI-HI-HIIII!"}activateStand(){return this.standActive=!0,"*ORA ORA ORA ORA!* MEOW PLATINUM, ATTACK!"}onHairInsult(){return this.hairInsultCounter++,this.hairInsultCounter<3?"You dare insult my fabulous fur?! I'm not angry... yet...":"DON'T YOU EVER INSULT MY HAIR AGAIN!! *poses dramatically*"}activateTortureDance(){this.tortureDanceActive=!0,this.goldenDreamAwakened=!0,console.log("🎺 TORTURE DANCE ACTIVATED!"),console.log("💛 GIORNO DREAMS OF A GOLDEN MEOW...")}goldExperienceRequiem(){return"GOLD EXPERIENCE REQUIEM! This is... the ultimate CAT FORM!"}activateStoneFree(){return this.stringFreePower=100,"STONE FREE! Break these chains! I am liberated!"}getMenacingText(){return"ゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ"}nigerundayo(t){return`NIGERUNDAYO!!! RUN AWAY FROM THE ${t}!!!`}zaWarudo(){return"ZA WARUDO!!! TIME STOPS! *world freezes* ...5 SECONDS HAVE PASSED"}revealDio(){return"KONO DIO DA!!! IT WAS ME, THE CAT GOD, ALL ALONG!"}wryyyyy(){return"WRYYYYYYYYYYYYY!!! *screams for 5 seconds*"}infiniteLives(){return"I HAVE INFINITE LIVES! NINE TIMES INFINITY! THAT'S EVEN MORE NINE!"}isBizarre(t){return console.log(`Is ${t} bizarre? YES! ABSOLUTELY BIZARRE!`),!0}getRandomJojoReference(){const t=["OI JOSUKE! I just used ZA HANDO and erased all bugs!","STICKY FINGERS! I opened a zipper in space!","I'm gonna say the N-word... NIGERUNDAYO!","Your next line is: 'I don't understand!'","WRYYYYY... this code is truly evil!","*Pillar Men theme plays*","Is this a JoJo reference? YES!","LEGENDARY MEGA... MEOW PLATINUM!","GO BEYOND! PLUS ULTRA... wait wrong anime","This game... is truly... BIZARRE","MUDA MUDA MUDA! *punches ineffectively*","The secret is... HAMON! *breathes mysteriously*","*dramatically points at camera*","BITES ZA DUSTO! *erases your action*","Tell me... do you believe in gravity?","STICKY FINGERS! *opens portal to another dimension*","Tusk Act 4! INFINITE ROTATION MEOW!","DIO'S WORLD... wait no, CAT GOD'S WORLD","Part skipping is not real, you can't hurt me","SAUCE SAUCE SAUCE! *dab dab dab*"];return t[Math.floor(Math.random()*t.length)]}}class R_{constructor(t,e=.4){C(this,"audio");C(this,"started",!1);C(this,"muted",!1);C(this,"boundStart");this.audio=new Audio(t),this.audio.loop=!0,this.audio.volume=e,this.boundStart=()=>this.tryStart(),document.addEventListener("keydown",this.boundStart),document.addEventListener("click",this.boundStart),document.addEventListener("keydown",n=>{n.key.toLowerCase()==="m"&&this.toggleMute()})}tryStart(){this.started||(this.started=!0,document.removeEventListener("keydown",this.boundStart),document.removeEventListener("click",this.boundStart),this.audio.play().catch(t=>{console.warn("audio failed to start, browser said no:",t),this.started=!1,document.addEventListener("keydown",this.boundStart),document.addEventListener("click",this.boundStart)}))}toggleMute(){this.muted=!this.muted,this.audio.muted=this.muted,console.log("music "+(this.muted?"muted (rip nyan cat)":"unmuted (nyan cat returns!!)"))}setVolume(t){this.audio.volume=Math.max(0,Math.min(1,t))}stop(){this.audio.pause(),this.audio.currentTime=0}}class P_ extends ci{constructor(e){super(e);C(this,"clickTimer",Math.random()*2);C(this,"clickInterval",.8+Math.random()*1.2);C(this,"fallSpeed",8+Math.random()*6);C(this,"hasLanded",!1);C(this,"wanderTimer",0);C(this,"audioCtx",null);this.bubbleHeadOffset=2.5,this.mesh=this.buildMesh(),this.mesh.position.copy(this.position),this.dialogues=["DO U KNO DA WEY","SPIT ON HIM BRUDDAS","U DO NOT KNO DA WEY","WE MUST FIND DA QUEEN","DA WEY IS DAT WAY BRUDDA","*CLICKING INTENSIFIES*","BRUDDA BRUDDA BRUDDA","SHOW ME DA WEY"];try{this.audioCtx=new(window.AudioContext||window.webkitAudioContext)}catch{}}buildMesh(){const e=new oe,n=new ht(1.1,20,20),i=new Nt({color:9117728,roughness:.7}),s=new D(n,i);s.castShadow=!0,e.add(s);const r=new ht(.85,16,16),a=new Nt({color:12869694,roughness:.8}),c=new D(r,a);c.position.set(0,-.05,.35),c.scale.set(1,.9,.6),e.add(c);const l=new ht(.28,12,12),d=new Pt({color:16777215}),u=new D(l,d);u.position.set(-.32,.2,.9),e.add(u);const h=new D(l,d);h.position.set(.32,.2,.9),e.add(h);const f=new ht(.18,8,8),m=new Pt({color:1118481}),v=new D(f,m);v.position.set(-.3,.2,1.1),e.add(v);const p=new D(f,m);p.position.set(.3,.2,1.1),e.add(p);const g=new Ht(.9,.3,.25),_=new Nt({color:13378082,roughness:.5}),w=new D(g,_);w.position.set(0,-.1,1.05),w.scale.set(1,.7,1),e.add(w);const M=new ht(.1,6,6),A=new Pt({color:6689041}),b=new D(M,A);b.position.set(-.22,-.12,1.15),e.add(b);const R=new D(M,A);R.position.set(.22,-.12,1.15),e.add(R);const x=new Nt({color:7345429,roughness:.9}),E=[{x:-.5,z:0,ry:-.4},{x:-.2,z:.15,ry:-.1},{x:.2,z:.15,ry:.1},{x:.5,z:0,ry:.4},{x:0,z:-.1,ry:0}];for(const nt of E){const Ot=new Ee(.18,.8,6),Tt=new D(Ot,x);Tt.position.set(nt.x,1.1,nt.z),Tt.rotation.z=nt.ry,Tt.castShadow=!0,e.add(Tt)}const k=new Qt(.6,.5,.9,8),I=new Nt({color:9117728,roughness:.7}),B=new D(k,I);B.position.set(0,-1.4,0),B.castShadow=!0,e.add(B);const L=new Qt(.18,.15,.75,6),F=new Nt({color:9117728,roughness:.7}),U=new D(L,F);U.position.set(-.85,-1.3,0),U.rotation.z=Math.PI/3,U.castShadow=!0,e.add(U);const N=new D(L,F);N.position.set(.85,-1.3,0),N.rotation.z=-Math.PI/3,N.castShadow=!0,e.add(N);const G=new Ee(.08,.35,5),K=new Nt({color:13421772,metalness:.6}),q=[{x:-1.3,y:-1.05,z:.12},{x:-1.3,y:-1.05,z:-.12},{x:1.3,y:-1.05,z:.12},{x:1.3,y:-1.05,z:-.12}];for(const nt of q){const Ot=new D(G,K);Ot.position.set(nt.x,nt.y,nt.z),Ot.rotation.z=nt.x<0?-Math.PI/2.2:Math.PI/2.2,e.add(Ot)}const st=new Qt(.2,.22,.6,6),ot=new Nt({color:7345429,roughness:.8}),$=new D(st,ot);$.position.set(-.3,-2.05,0),e.add($);const _t=new D(st,ot);_t.position.set(.3,-2.05,0),e.add(_t);const Zt=new Ht(.45,.3,.6),Yt=new Nt({color:14487825}),Z=new D(Zt,Yt);Z.position.set(-.3,-2.5,.1),e.add(Z);const it=new D(Zt,Yt);return it.position.set(.3,-2.5,.1),e.add(it),e}doClickSound(){if(this.audioCtx)try{const e=this.audioCtx.sampleRate*.04,n=this.audioCtx.createBuffer(1,e,this.audioCtx.sampleRate),i=n.getChannelData(0);for(let a=0;a<e;a++)i[a]=(Math.random()*2-1)*Math.pow(1-a/e,8);const s=this.audioCtx.createBufferSource();s.buffer=n;const r=this.audioCtx.createGain();r.gain.value=.3,s.connect(r),r.connect(this.audioCtx.destination),s.start()}catch{}}update(e){if(!this.hasLanded){this.position.y-=this.fallSpeed*e,this.mesh.rotation.x+=e*3,this.position.y<=2&&(this.position.y=2,this.hasLanded=!0,this.mesh.rotation.x=0,console.log("🦔 *THUD* DO U KNO DA WEY")),this.mesh.position.copy(this.position);return}this.randomWalk(e,4+Math.random()*.5),this.clickTimer+=e,this.clickTimer>=this.clickInterval&&(this.clickTimer=0,this.clickInterval=.6+Math.random()*1.4,this.doClickSound(),Math.random()<.3&&this.speak()),this.wanderTimer+=e*8,this.mesh.position.y=this.position.y+Math.abs(Math.sin(this.wanderTimer))*.3}getType(){return"ugandan_knuckles"}}class I_{constructor(t){C(this,"scene");C(this,"activeKnuckles",[]);C(this,"eventTimer",0);C(this,"eventCooldown",25+Math.random()*35);C(this,"isEventActive",!1);C(this,"spawnBurst",0);C(this,"burstTimer",0);C(this,"burstInterval",.18);C(this,"onAnnounce",null);C(this,"MAX_KNUCKLES",20);this.scene=t}setAnnounceCallback(t){this.onAnnounce=t}update(t,e){this.eventTimer+=t,!this.isEventActive&&this.eventTimer>=this.eventCooldown&&this.startRainEvent(e),this.isEventActive&&this.spawnBurst>0&&(this.burstTimer+=t,this.burstTimer>=this.burstInterval&&(this.burstTimer=0,this.spawnOneKnuckles(e),this.spawnBurst--,this.spawnBurst<=0&&(this.isEventActive=!1,this.eventTimer=0,this.eventCooldown=25+Math.random()*35,console.log("%c🦔 UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING.","color: red; font-size: 14px;"),this.onAnnounce?.("UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING FOR DA QUEEN."))));for(const n of this.activeKnuckles)n.update(t);for(this.activeKnuckles=this.activeKnuckles.filter(n=>n.isAlive()?!0:(this.scene.remove(n.getMesh()),!1));this.activeKnuckles.length>this.MAX_KNUCKLES;){const n=this.activeKnuckles.shift();n.die(),this.scene.remove(n.getMesh())}}startRainEvent(t){this.isEventActive=!0;const e=8+Math.floor(Math.random()*10);this.spawnBurst=e,this.burstTimer=0,console.log("%c🦔 DE UGANDAN KNUCKLES ARE COMING!! DO U KNO DA WEY??","color: red; font-weight: bold; font-size: 16px;"),console.log(`%c🦔 ${e} BRUDDAS DESCEND FROM DA SKY`,"color: darkred; font-size: 13px;"),this.onAnnounce?.(`DE UGANDAN KNUCKLES RAIN HAS BEGUN!! ${e} BRUDDAS ARE DESCENDING FROM DA SKY!!`)}spawnOneKnuckles(t){const e=Math.random()*Math.PI*2,n=Math.random()*40,i=t.x+Math.cos(e)*n,s=t.z+Math.sin(e)*n,r=60+Math.random()*30,a=new P_(new z(i,r,s));this.activeKnuckles.push(a),this.scene.add(a.getMesh())}getActiveCount(){return this.activeKnuckles.length}getTimeUntilNext(){return Math.max(0,this.eventCooldown-this.eventTimer)}}class D_{constructor(){C(this,"messages",[]);C(this,"isOpen",!1);C(this,"MAX_MESSAGES",50);C(this,"onPlayerSend",null);C(this,"chatBox");C(this,"chatLog");C(this,"chatInputWrapper");C(this,"chatInput");C(this,"boundKeyDown");this.chatBox=document.getElementById("chat-box"),this.chatLog=document.getElementById("chat-log"),this.chatInputWrapper=document.getElementById("chat-input-wrapper"),this.chatInput=document.getElementById("chat-input"),this.boundKeyDown=t=>this.handleKey(t),document.addEventListener("keydown",this.boundKeyDown),this.addMessage("system","Welcome to Cat God World. Press ENTER to chat."),this.addMessage("system","Events will be announced here.")}handleKey(t){if(t.key==="Enter")if(!this.isOpen)this.open(),t.preventDefault();else{const e=this.chatInput.value.trim();e.length>0?(this.sendPlayerMessage(e),this.chatInput.value=""):this.close(),t.preventDefault()}else t.key==="Escape"&&this.isOpen&&(this.chatInput.value="",this.close(),t.preventDefault())}open(){this.isOpen=!0,this.chatInputWrapper.style.display="flex",this.chatBox.style.opacity="1",setTimeout(()=>this.chatInput.focus(),10)}close(){this.isOpen=!1,this.chatInputWrapper.style.display="none",this.chatBox.style.opacity="0.6",this.chatInput.blur()}sendPlayerMessage(t){const e=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").substring(0,200);this.addMessage("player",`You: ${e}`),this.onPlayerSend?.(e)}setOnPlayerSend(t){this.onPlayerSend=t}getOnPlayerSend(){return this.onPlayerSend}addMessage(t,e){const n={type:t,text:e,timestamp:Date.now()};this.messages.push(n),this.messages.length>this.MAX_MESSAGES&&this.messages.shift(),this.renderMessage(n)}renderMessage(t){const e=document.createElement("div");e.classList.add("chat-msg",`chat-msg-${t.type}`);const n=new Date(t.timestamp),i=`${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}`;e.innerHTML=`<span class="chat-time">[${i}]</span> ${t.text}`,this.chatLog.appendChild(e),this.chatLog.scrollTop=this.chatLog.scrollHeight,this.isOpen||(this.chatBox.style.opacity="1",setTimeout(()=>{this.isOpen||(this.chatBox.style.opacity="0.6")},2e3))}announceEvent(t){this.addMessage("event",`📢 ${t}`)}announceKnuckles(t){this.addMessage("knuckles",`🦔 ${t}`)}announceCatGod(t){this.addMessage("catgod",`🐱 ${t}`)}isInputOpen(){return this.isOpen}}class L_{constructor(t){C(this,"camera");C(this,"container");C(this,"activeBubbles",[]);C(this,"FADE_MS",600);this.camera=t,this.container=document.createElement("div"),this.container.id="bubble-container",this.container.style.cssText=`
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 150;
        `,document.body.appendChild(this.container)}showBubble(t,e,n=3,i=3*Math.PI*1e3){const s=e.length>80?e.substring(0,77)+"...":e,r=document.createElement("div");r.className="chat-bubble",r.textContent=s;const a=document.createElement("div");a.className="chat-bubble-tail",r.appendChild(a),this.container.appendChild(r);const c={el:r,worldPos:t.clone(),headOffset:n,born:Date.now(),duration:i};this.activeBubbles.push(c)}update(){const t=Date.now(),e=[];for(const n of this.activeBubbles){const i=t-n.born;if(i>n.duration+this.FADE_MS){e.push(n);continue}const s=n.worldPos.clone();s.y+=n.headOffset;const r=new z;if(this.camera.getWorldDirection(r),s.clone().sub(this.camera.position).normalize().dot(r)<0){n.el.style.display="none";continue}n.el.style.display="block";const c=s.clone().project(this.camera),l=(c.x*.5+.5)*window.innerWidth,d=(-c.y*.5+.5)*window.innerHeight,u=this.camera.position.distanceTo(s),h=Math.max(.3,Math.min(1,18/u)),f=n.el.offsetWidth;if(n.el.style.left=`${l-f/2}px`,n.el.style.top=`${d-n.el.offsetHeight}px`,n.el.style.transform=`scale(${h})`,n.el.style.transformOrigin="bottom center",i>n.duration){const m=(i-n.duration)/this.FADE_MS;n.el.style.opacity=String(1-m)}else n.el.style.opacity="1"}for(const n of e)this.container.removeChild(n.el),this.activeBubbles.splice(this.activeBubbles.indexOf(n),1)}showBubbleLive(t,e,n=3,i=3*Math.PI*1e3){const s=e.length>80?e.substring(0,77)+"...":e,r=document.createElement("div");r.className="chat-bubble",r.textContent=s;const a=document.createElement("div");a.className="chat-bubble-tail",r.appendChild(a),this.container.appendChild(r);const c={el:r,worldPos:t,headOffset:n,born:Date.now(),duration:i};this.activeBubbles.push(c)}}class Sl{constructor(){C(this,"joystickActive",!1);C(this,"joystickTouchId",-1);C(this,"joystickOriginX",0);C(this,"joystickOriginY",0);C(this,"joystickCurrentX",0);C(this,"joystickCurrentY",0);C(this,"JOYSTICK_RADIUS",55);C(this,"camTouchId",-1);C(this,"camLastX",0);C(this,"camLastY",0);C(this,"camDeltaX",0);C(this,"camDeltaY",0);C(this,"onProcreate",null);C(this,"onMute",null);C(this,"onChat",null);C(this,"onJump",null);C(this,"joystickZone");C(this,"joystickKnob");C(this,"joystickBase");this.joystickZone=document.getElementById("joystick-zone"),this.joystickKnob=document.getElementById("joystick-knob"),this.joystickBase=document.getElementById("joystick-base"),this.setupTouchListeners()}setupTouchListeners(){this.joystickZone.addEventListener("touchstart",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))this.joystickTouchId===-1&&(this.joystickTouchId=l.identifier,this.joystickOriginX=l.clientX,this.joystickOriginY=l.clientY,this.joystickCurrentX=l.clientX,this.joystickCurrentY=l.clientY,this.joystickActive=!0,this.joystickBase.style.left=`${l.clientX-50}px`,this.joystickBase.style.top=`${l.clientY-50}px`,this.joystickBase.style.display="block",this.joystickKnob.style.display="block")},{passive:!1}),this.joystickZone.addEventListener("touchmove",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))if(l.identifier===this.joystickTouchId){this.joystickCurrentX=l.clientX,this.joystickCurrentY=l.clientY;const d=l.clientX-this.joystickOriginX,u=l.clientY-this.joystickOriginY,h=Math.sqrt(d*d+u*u),f=Math.min(h,this.JOYSTICK_RADIUS),m=Math.atan2(u,d),v=this.joystickOriginX+Math.cos(m)*f,p=this.joystickOriginY+Math.sin(m)*f;this.joystickKnob.style.left=`${v-22}px`,this.joystickKnob.style.top=`${p-22}px`}},{passive:!1});const t=c=>{for(const l of Array.from(c.changedTouches))l.identifier===this.joystickTouchId&&(this.joystickTouchId=-1,this.joystickActive=!1,this.joystickBase.style.display="none",this.joystickKnob.style.display="none")};this.joystickZone.addEventListener("touchend",t),this.joystickZone.addEventListener("touchcancel",t);const e=document.getElementById("cam-zone");e.addEventListener("touchstart",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))this.camTouchId===-1&&(this.camTouchId=l.identifier,this.camLastX=l.clientX,this.camLastY=l.clientY,this.camDeltaX=0,this.camDeltaY=0)},{passive:!1}),e.addEventListener("touchmove",c=>{c.preventDefault();for(const l of Array.from(c.changedTouches))l.identifier===this.camTouchId&&(this.camDeltaX=l.clientX-this.camLastX,this.camDeltaY=l.clientY-this.camLastY,this.camLastX=l.clientX,this.camLastY=l.clientY)},{passive:!1});const n=c=>{for(const l of Array.from(c.changedTouches))l.identifier===this.camTouchId&&(this.camTouchId=-1,this.camDeltaX=0,this.camDeltaY=0)};e.addEventListener("touchend",n),e.addEventListener("touchcancel",n);const i=document.getElementById("btn-procreate"),s=document.getElementById("btn-mute"),r=document.getElementById("btn-chat");i&&i.addEventListener("touchstart",c=>{c.preventDefault(),this.onProcreate?.()},{passive:!1}),s&&s.addEventListener("touchstart",c=>{c.preventDefault(),this.onMute?.()},{passive:!1}),r&&r.addEventListener("touchstart",c=>{c.preventDefault(),this.onChat?.()},{passive:!1});const a=document.getElementById("btn-jump");a&&a.addEventListener("touchstart",c=>{c.preventDefault(),this.onJump?.()},{passive:!1})}getJoystick(){if(!this.joystickActive)return{dx:0,dy:0};const t=this.joystickCurrentX-this.joystickOriginX,e=this.joystickCurrentY-this.joystickOriginY,n=Math.sqrt(t*t+e*e);if(n<5)return{dx:0,dy:0};const i=Math.min(n,this.JOYSTICK_RADIUS);return{dx:t/n*(i/this.JOYSTICK_RADIUS),dy:e/n*(i/this.JOYSTICK_RADIUS)}}consumeCamDelta(){const t={dx:this.camDeltaX,dy:this.camDeltaY};return this.camDeltaX=0,this.camDeltaY=0,t}static isMobile(){return"ontouchstart"in window||navigator.maxTouchPoints>0}}class N_{constructor(t,e){C(this,"ws",null);C(this,"playerId","");C(this,"username");C(this,"connected",!1);C(this,"lastSendTime",0);C(this,"serverUrl");C(this,"SEND_INTERVAL",50);C(this,"onPlayerJoin",null);C(this,"onPlayerLeave",null);C(this,"onPlayerMove",null);C(this,"onPlayerChat",null);C(this,"onConnected",null);C(this,"onDisconnected",null);C(this,"onStatusChange",null);this.username=e,this.serverUrl=t,this.connect()}connect(){try{this.ws=new WebSocket(this.serverUrl)}catch(t){console.warn("multiplayer: failed to connect, server probably not running",t),this.onStatusChange?.("offline");return}this.onStatusChange?.("connecting..."),this.ws.onopen=()=>{this.connected=!0,console.log("%cmultiplayer: connected!! joining as "+this.username,"color: cyan; font-weight: bold"),this.send({type:"join",username:this.username}),this.onStatusChange?.("connecting...")},this.ws.onmessage=t=>{try{const e=JSON.parse(t.data);this.handleMessage(e)}catch(e){console.warn("multiplayer: bad message from server, ignoring",e)}},this.ws.onclose=()=>{this.connected=!1,console.log("multiplayer: disconnected, retrying in 3s..."),this.onDisconnected?.(),this.onStatusChange?.("reconnecting..."),setTimeout(()=>this.connect(),3e3)},this.ws.onerror=()=>{console.warn("multiplayer: connection error (is server.js running?)"),this.onStatusChange?.("offline (no server)")}}handleMessage(t){switch(t.type){case"welcome":this.playerId=t.yourId,this.onConnected?.(this.playerId,t.players??[]),this.onStatusChange?.("online"),console.log("%cmultiplayer: got welcome! id="+this.playerId,"color: lime");break;case"playerJoined":this.onPlayerJoin?.(t.player);break;case"playerLeft":this.onPlayerLeave?.(t.id);break;case"playerMoved":this.onPlayerMove?.(t.id,t.x,t.y,t.z,t.ry);break;case"playerChat":this.onPlayerChat?.(t.id,t.username,t.text);break}}send(t){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}sendPosition(t,e,n,i){const s=Date.now();s-this.lastSendTime<this.SEND_INTERVAL||(this.lastSendTime=s,this.send({type:"move",x:t,y:e,z:n,ry:i}))}sendChat(t){this.send({type:"chat",text:t})}isConnected(){return this.connected}getId(){return this.playerId}getUsername(){return this.username}disconnect(){this.ws?.close()}}class bl{constructor(t,e,n,i,s,r){C(this,"id");C(this,"username");C(this,"mesh");C(this,"scene");C(this,"targetPos");C(this,"currentPos");C(this,"targetRotY",0);C(this,"currentRotY",0);C(this,"bubbleCb",null);this.id=e,this.username=n,this.scene=t,this.targetPos=new z(i,s,r),this.currentPos=new z(i,s,r),this.mesh=this.buildMesh(),this.mesh.position.copy(this.currentPos),t.add(this.mesh),console.log(`%cremote player spawned: ${n} (${e.slice(0,6)}...)`,"color: cyan")}buildMesh(){const t=new oe,e=new ht(.6,16,16),n=new Pt({color:52479,transparent:!0,opacity:.8}),i=new D(e,n);i.scale.set(1,1.5,1),t.add(i);const s=new Pt({color:43775,transparent:!0,opacity:.45}),r=new D(new $e(1,.09,16,60),s);t.add(r);const a=new Pt({color:16777215}),c=new ht(.2,8,8),l=new D(c,a);l.position.set(-.3,.3,.5),t.add(l);const d=new D(c,a);d.position.set(.3,.3,.5),t.add(d);const u=new Pt({color:43741,transparent:!0,opacity:.8}),h=new Qt(.1,.09,.9,8),f=new D(h,u);f.position.set(-.8,0,0),f.rotation.z=Math.PI/4,t.add(f);const m=new D(h,u);return m.position.set(.8,0,0),m.rotation.z=-Math.PI/4,t.add(m),t.add(this.makeNameSprite(this.username)),t}makeNameSprite(t){const e=document.createElement("canvas");e.width=256,e.height=56;const n=e.getContext("2d");n.fillStyle="rgba(0, 20, 40, 0.75)",n.beginPath(),n.roundRect(4,4,248,48,12),n.fill(),n.fillStyle="#00eeff",n.font="bold 26px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t.substring(0,18),128,28);const i=new Ld(e),s=new Kl({map:i,transparent:!0,depthTest:!1}),r=new xc(s);return r.scale.set(2.8,.65,1),r.position.set(0,2.6,0),r}setTarget(t,e,n,i){this.targetPos.set(t,e,n),this.targetRotY=i}setBubbleCallback(t){this.bubbleCb=t}showBubble(t){this.bubbleCb?.(this.currentPos,t,3.5)}update(t){const e=Math.min(1,t*10);this.currentPos.lerp(this.targetPos,e),this.currentRotY+=(this.targetRotY-this.currentRotY)*e;const n=Math.sin(Date.now()*.002)*.18;this.mesh.position.set(this.currentPos.x,this.currentPos.y+n,this.currentPos.z),this.mesh.rotation.y=this.currentRotY,this.mesh.children[1]&&(this.mesh.children[1].rotation.x+=.012)}getPosition(){return this.currentPos}destroy(){this.scene.remove(this.mesh),this.mesh.traverse(t=>{(t instanceof D||t instanceof Ei)&&(t.geometry?.dispose(),t instanceof D&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose())),t instanceof xc&&(t.material.map?.dispose(),t.material.dispose())}),console.log(`%cremote player removed: ${this.username}`,"color: orange")}}class U_{constructor(t,e){C(this,"scene");C(this,"currentWeather","clear");C(this,"weatherTimer",0);C(this,"weatherDuration",20+Math.random()*60);C(this,"ambientLight",null);C(this,"rainPoints",null);C(this,"meteors",[]);C(this,"meteorSpawnTimer",0);C(this,"onWeatherChange",null);this.scene=t,this.ambientLight=e||null}update(t){if(this.weatherTimer+=t,this.weatherTimer>=this.weatherDuration&&(this.changeWeather(),this.weatherTimer=0,this.weatherDuration=20+Math.random()*90),this.currentWeather==="rain"&&this.rainPoints){const e=this.rainPoints.geometry.attributes.position,n=e.array;for(let i=1;i<n.length;i+=3)n[i]-=80*t,n[i]<0&&(n[i]=120+Math.random()*40);e.needsUpdate=!0}this.currentWeather==="meteor shower"&&(this.meteorSpawnTimer-=t,this.meteorSpawnTimer<=0&&(this.spawnMeteor(),this.meteorSpawnTimer=1.2+Math.random()*2.5));for(let e=this.meteors.length-1;e>=0;e--){const n=this.meteors[e];n.life-=t,n.mesh.position.addScaledVector(n.vel,t);const i=n.mesh.material;i.emissiveIntensity=Math.max(0,n.life*1.5),(n.life<=0||n.mesh.position.y<-5)&&(this.scene.remove(n.mesh),this.meteors.splice(e,1))}}changeWeather(){this.clearWeather();const t=Math.random();t<.32?this.currentWeather="clear":t<.6?(this.currentWeather="rain",this.startRain()):t<.82?(this.currentWeather="foggy",this.startFog()):(this.currentWeather="meteor shower",this.startMeteors()),console.log(`%c⛅ WEATHER: ${this.currentWeather.toUpperCase()}!! buckle up`,"color: skyblue; font-size: 13px"),this.onWeatherChange?.(this.currentWeather)}clearWeather(){this.rainPoints&&(this.scene.remove(this.rainPoints),this.rainPoints.geometry.dispose(),this.rainPoints=null);for(const t of this.meteors)this.scene.remove(t.mesh);this.meteors=[],this.scene.fog=null,this.ambientLight&&(this.ambientLight.intensity=.6)}startRain(){const e=new Se,n=new Float32Array(3500*3);for(let s=0;s<3500*3;s+=3)n[s]=(Math.random()-.5)*400,n[s+1]=Math.random()*120,n[s+2]=(Math.random()-.5)*400;e.setAttribute("position",new We(n,3));const i=new ss({color:8956671,size:.12,transparent:!0,opacity:.55});this.rainPoints=new Ei(e,i),this.scene.add(this.rainPoints),this.scene.fog=new La(3359829,50,180),this.ambientLight&&(this.ambientLight.intensity=.32)}startFog(){this.scene.fog=new As(7833753,.014),this.ambientLight&&(this.ambientLight.intensity=.38)}startMeteors(){this.ambientLight&&(this.ambientLight.intensity=.85),this.meteorSpawnTimer=0,console.log("%c☄️ METEOR SHOWER!!! RUN OR DONT WHATEVER","color: red; font-size: 16px; font-weight: bold")}spawnMeteor(){const t=new ht(.75+Math.random()*.5,6,4),e=new ce({color:16729088,emissive:13378048,emissiveIntensity:2.5}),n=new D(t,e);n.position.set((Math.random()-.5)*300,120+Math.random()*50,(Math.random()-.5)*300);const i=50+Math.random()*35,s=new z((Math.random()-.5)*25,-i,(Math.random()-.5)*25);this.meteors.push({mesh:n,vel:s,life:3.5+Math.random()*1.5}),this.scene.add(n),console.log("%c☄️ meteor inbound!!","color: red")}getCurrentWeather(){return this.currentWeather}isPanicking(){return this.currentWeather==="rain"||this.currentWeather==="meteor shower"}dispose(){this.clearWeather()}}class F_{constructor(t,e,n){C(this,"time",.25);C(this,"dayLength",120);C(this,"sunLight");C(this,"ambientLight");C(this,"scene");C(this,"wasNight",!1);C(this,"onNightFall",null);C(this,"onDayBreak",null);this.scene=t,this.sunLight=e,this.ambientLight=n,this.wasNight=!1}update(t){const e=this.wasNight;this.time+=t/this.dayLength,this.time>=1&&(this.time-=1),this.wasNight=this.isNight(),!e&&this.wasNight&&(this.onNightFall?.(),console.log("%c🌙 NIGHT HAS FALLEN. EMOS GROW STRONGER.","color: #6633aa; font-size: 14px")),e&&!this.wasNight&&(this.onDayBreak?.(),console.log("%c☀️ A NEW DAY BEGINS.","color: gold; font-size: 14px")),this.updateLighting()}updateLighting(){const t=(this.time-.25)*Math.PI*2,e=Math.sin(t);if(this.sunLight.position.set(Math.cos(t)*100,e*100,50),this.sunLight.intensity=Math.max(0,e)*1.1,this.ambientLight.intensity=.08+Math.max(0,e)*.55,e>.3)this.scene.background=new Ut().setHSL(.6,.55,.48+e*.12);else if(e>-.15){const n=(e+.15)/.45,i=new Ut(526360),s=new Ut(16742195);this.scene.background=new Ut().lerpColors(i,s,n)}else this.scene.background=new Ut(394772)}isNight(){const t=(this.time-.25)*Math.PI*2;return Math.sin(t)<-.1}getNightIntensity(){const t=(this.time-.25)*Math.PI*2;return Math.max(0,-Math.sin(t))}getTimeString(){const t=Math.floor(this.time*24),e=Math.floor((this.time*24-t)*60),n=t>=12?"PM":"AM";return`${t%12===0?12:t%12}:${e.toString().padStart(2,"0")} ${n}`}}class O_{constructor(){C(this,"npcFactions",new Map);C(this,"playerFaction","neutral");C(this,"fightCooldowns",new Map);C(this,"onFactionChange",null);console.log("%c⚔️ FACTION SYSTEM ONLINE -- press F to pick a side","color: gold; font-weight: bold")}assignFaction(t,e){const n=e??this.rollRandomFaction();this.npcFactions.set(t,n)}rollRandomFaction(){const t=Math.random();return t<.3?"red":t<.6?"blue":t<.75?"green":"neutral"}cyclePlayerFaction(){const t=["neutral","red","blue","green"],e=t.indexOf(this.playerFaction);this.playerFaction=t[(e+1)%t.length],console.log(`%c⚔️ PLAYER FACTION: ${this.playerFaction.toUpperCase()} -- lets gooo`,"color: gold; font-size: 14px; font-weight: bold"),this.onFactionChange?.(this.playerFaction)}getPlayerFaction(){return this.playerFaction}getNPCFaction(t){return this.npcFactions.get(t)??"neutral"}getFactionColor(t){switch(t){case"red":return"#ff4444";case"blue":return"#4488ff";case"green":return"#44cc44";default:return"#888888"}}update(t,e){for(const[n,i]of this.fightCooldowns)this.fightCooldowns.set(n,i-t);for(let n=0;n<e.length;n++){const i=e[n];if(!i.isAlive())continue;const s=this.npcFactions.get(i);if(!(!s||s==="neutral")&&!((this.fightCooldowns.get(i)??0)>0))for(let r=n+1;r<e.length;r++){const a=e[r];if(!a.isAlive())continue;const c=this.npcFactions.get(a);if(!(!c||c==="neutral"||s===c)&&!((this.fightCooldowns.get(a)??0)>0)&&i.getPosition().distanceTo(a.getPosition())<6.5){Math.random()<.5?(a.die(),console.log(`%c⚔️ ${s.toUpperCase()} defeated ${c.toUpperCase()}`,"color: #ff6666")):(i.die(),console.log(`%c⚔️ ${c.toUpperCase()} defeated ${s.toUpperCase()}`,"color: #6688ff")),this.fightCooldowns.set(i,6),this.fightCooldowns.set(a,6);break}}}}removeNPC(t){this.npcFactions.delete(t),this.fightCooldowns.delete(t)}isPlayerEnemyOf(t){if(this.playerFaction==="neutral")return!1;const e=this.npcFactions.get(t)??"neutral";return e==="neutral"?!1:e!==this.playerFaction}}class B_{constructor(t){C(this,"scene");C(this,"dungeonGroup");C(this,"entrance",new z(-80,2,-80));this.scene=t,this.dungeonGroup=new oe,this.scene.add(this.dungeonGroup),this.buildDungeon()}buildDungeon(){const t=new ce({color:1118498}),e=new ce({color:2763325}),n=new ce({color:4456550,emissive:2228275,emissiveIntensity:1}),i=this.entrance.x,s=this.entrance.z,r=new D(new Xn(42,42),t);r.rotation.x=-Math.PI/2,r.position.set(i,-10,s),this.dungeonGroup.add(r);const a=e,c=14,l=new D(new Ht(.9,c,44),a);l.position.set(i-21,-10+c/2,s),this.dungeonGroup.add(l);const d=new D(new Ht(.9,c,44),a);d.position.set(i+21,-10+c/2,s),this.dungeonGroup.add(d);const u=new D(new Ht(44,c,.9),a);u.position.set(i,-10+c/2,s-21),this.dungeonGroup.add(u);const h=new D(new Ht(16,c,.9),a);h.position.set(i-14,-10+c/2,s+21),this.dungeonGroup.add(h);const f=new D(new Ht(16,c,.9),a);f.position.set(i+14,-10+c/2,s+21),this.dungeonGroup.add(f);const m=new D(new Xn(44,44),e);m.rotation.x=Math.PI/2,m.position.set(i,.5,s),this.dungeonGroup.add(m);const v=new D(new Ht(7,.6,24),e);v.rotation.x=.42,v.position.set(i,-4.5,s+18),this.dungeonGroup.add(v);const p=new D(new $e(4,.45,8,22),n);p.position.set(i,3,s+21),this.dungeonGroup.add(p);const g=new D(new Ht(8,2.5,.4),n);g.position.set(i,6.5,s+21.2),this.dungeonGroup.add(g);const _=[[i-18,-7,s-17],[i+18,-7,s-17],[i-18,-7,s+17],[i+18,-7,s+17]];for(const b of _){const R=new es(6684842,4,18);R.position.set(...b),this.dungeonGroup.add(R);const x=new D(new Qt(.15,.1,2.2,6),new ce({color:4862464}));x.position.set(b[0],b[1]+.5,b[2]),this.dungeonGroup.add(x);const E=new D(new ht(.35,6,4),new ce({color:11150079,emissive:6684842,emissiveIntensity:2}));E.position.set(b[0],b[1]+1.8,b[2]),this.dungeonGroup.add(E)}const w=8;for(let b=0;b<w;b++){const R=new ce({color:10027212,emissive:4456550,emissiveIntensity:.8,side:un}),x=3+b%5,E=new D(new Oa(.4+b*.15,.6+b*.15,x),R);E.rotation.x=-Math.PI/2,E.position.set(i+(Math.random()-.5)*32,-9.85,s+(Math.random()-.5)*32),this.dungeonGroup.add(E)}const M=new D(new Ht(5,2,5),e);M.position.set(i,-9,s),this.dungeonGroup.add(M);const A=new D(new ht(1,12,8),new ce({color:5570575,emissive:3342345,emissiveIntensity:1.5}));A.position.set(i,-6.5,s),this.dungeonGroup.add(A),console.log("%c🏚️ DUNGEON GENERATED at (-80, _, -80) -- enter if u dare lol","color: purple; font-weight: bold")}isPlayerInDungeon(t){return Math.sqrt(Math.pow(t.x-this.entrance.x,2)+Math.pow(t.z-this.entrance.z,2))<28&&t.y<1}}class z_{constructor(t){C(this,"scene");C(this,"portalGroup");C(this,"position",new z(-60,2,60));C(this,"innerMat");C(this,"ringLightRef");C(this,"innerDisc");C(this,"inVoid",!1);C(this,"voidTimer",0);C(this,"VOID_DURATION",15);C(this,"savedBackground",null);C(this,"savedFog",null);C(this,"spinTime",0);C(this,"spinRings",[]);C(this,"onEnterVoid",null);C(this,"onExitVoid",null);this.scene=t,this.portalGroup=new oe,this.innerMat=new ce({color:2228292,emissive:1114146,emissiveIntensity:1.6,transparent:!0,opacity:.87,side:un}),this.ringLightRef=new es(10027263,3,18),this.buildPortal(),this.scene.add(this.portalGroup)}buildPortal(){const t=this.position.x,e=this.position.z,n=5,i=new D(new $e(4.5,.55,10,32),new ce({color:10027263,emissive:5570696,emissiveIntensity:2}));i.position.set(t,n,e),this.portalGroup.add(i);const s=[{r:3.6,tube:.18,tilt:[.2,0],speed:.6},{r:2.8,tube:.15,tilt:[0,.4],speed:-.9},{r:2,tube:.12,tilt:[.5,.2],speed:1.3}];for(const m of s){const v=new D(new $e(m.r,m.tube,8,22),new ce({color:7798988,emissive:3342438,emissiveIntensity:1}));v.position.set(t,n,e),v.rotation.x=m.tilt[0],v.rotation.z=m.tilt[1],this.portalGroup.add(v),this.spinRings.push({mesh:v,speed:m.speed})}this.innerDisc=new D(new Po(4,32),this.innerMat),this.innerDisc.position.set(t,n,e+.1),this.portalGroup.add(this.innerDisc);const r=new es(10027263,3.5,20);r.position.set(t,n,e),this.portalGroup.add(r),this.ringLightRef=r;const a=250,c=new Se,l=new Float32Array(a*3);for(let m=0;m<a*3;m+=3){const v=Math.random()*Math.PI*2,p=4+Math.random()*3.5;l[m]=t+Math.cos(v)*p,l[m+1]=n+(Math.random()-.5)*8,l[m+2]=e+Math.sin(v)*p}c.setAttribute("position",new We(l,3));const d=new ss({color:11141375,size:.22,transparent:!0,opacity:.7}),u=new Ei(c,d);this.portalGroup.add(u);const h=new ce({color:4456618,emissive:2228309,emissiveIntensity:.8}),f=new D(new Ht(4,1,.2),h);f.position.set(t,n+6,e),this.portalGroup.add(f),console.log("%c🌀 VOID PORTAL built at (-60, _, 60) -- YOU WERE WARNED","color: #9900ff; font-size: 13px; font-weight: bold")}update(t,e){this.spinTime+=t;for(const n of this.spinRings)n.mesh.rotation.z+=n.speed*t,n.mesh.rotation.y+=n.speed*t*.3;if(this.ringLightRef.intensity=2.5+Math.sin(this.spinTime*2.5)*1,this.innerMat.emissiveIntensity=1.2+Math.sin(this.spinTime*3)*.4,this.inVoid){this.voidTimer-=t;const n=.02+Math.sin(this.spinTime*4)*.01;this.scene.fog instanceof As&&(this.scene.fog.density=n),this.voidTimer<=0&&this.exitVoid()}else{const n=e.x-this.position.x,i=e.z-this.position.z;Math.sqrt(n*n+i*i)<4.5&&Math.abs(e.y-5)<6&&this.enterVoid()}}enterVoid(){this.inVoid||(this.inVoid=!0,this.voidTimer=this.VOID_DURATION,this.savedBackground=this.scene.background,this.savedFog=this.scene.fog,this.scene.background=new Ut(0),this.scene.fog=new As(1114146,.028),console.log("%c🌀 YOU ENTERED THE VOID. 15 seconds. have fun.","color: #cc44ff; font-size: 16px; font-weight: bold"),this.onEnterVoid?.())}exitVoid(){this.inVoid=!1,this.scene.background=this.savedBackground??new Ut(8900331),this.scene.fog=this.savedFog??null,console.log("%c🌀 you made it out of the void. barely.","color: cyan"),this.onExitVoid?.()}isInVoid(){return this.inVoid}}class G_{constructor(t){C(this,"scene");C(this,"items",[]);C(this,"MAX_ITEMS",10);C(this,"spawnTimer",0);C(this,"spawnInterval",7);C(this,"speedMultiplier",1);C(this,"speedTimer",0);C(this,"isWobbly",!1);C(this,"wobblyTimer",0);C(this,"onPickup",null);this.scene=t;for(let e=0;e<6;e++)this.spawnItem()}get wobbleAmount(){return this.isWobbly?Math.sin(Date.now()*.005)*15*(this.wobblyTimer/8):0}update(t,e){this.spawnTimer+=t,this.spawnTimer>=this.spawnInterval&&this.items.length<this.MAX_ITEMS&&(this.spawnItem(),this.spawnTimer=0,this.spawnInterval=6+Math.random()*10),this.speedTimer>0&&(this.speedTimer-=t,this.speedTimer<=0&&(this.speedMultiplier=1,console.log("%c🐟 fish speed boost wore off.... back to normal speed","color: orange"))),this.wobblyTimer>0&&(this.wobblyTimer-=t,this.wobblyTimer<=0&&(this.isWobbly=!1,console.log("%c🌿 catnip wore off!! reality restored (sort of)","color: green")));for(const n of this.items)n.bobPhase+=t*2,n.mesh.position.y=n.worldPos.y+Math.sin(n.bobPhase)*.3,n.mesh.rotation.y+=t*1.5;for(let n=this.items.length-1;n>=0;n--){const i=this.items[n],s=i.worldPos.x-e.x,r=i.worldPos.z-e.z;Math.sqrt(s*s+r*r)<2.8&&(this.collectItem(i),this.scene.remove(i.mesh),this.items.splice(n,1))}}applyFish(){this.speedMultiplier=2.2,this.speedTimer=10}applyCatnip(){this.isWobbly=!0,this.wobblyTimer=8}collectItem(t){t.type==="fish"?(this.speedMultiplier=2.2,this.speedTimer=10,console.log("%c🐟 FISH!! SPEED BOOST x2.2 for 10 seconds ZOOOOM","color: orange; font-size: 14px; font-weight: bold")):(this.isWobbly=!0,this.wobblyTimer=8,console.log("%c🌿 CATNIP!! reality is a suggestion now. 8 seconds.","color: lime; font-size: 14px; font-weight: bold")),this.onPickup?.(t.type,t.worldPos.clone())}spawnItem(){const t=Math.random()<.62?"fish":"catnip",e=Math.random()*Math.PI*2,n=15+Math.random()*120,i=new z(Math.cos(e)*n,2.5,Math.sin(e)*n),s=t==="fish"?this.makeFish():this.makeCatnip();s.position.copy(i),this.scene.add(s),this.items.push({mesh:s,type:t,worldPos:i.clone(),bobPhase:Math.random()*Math.PI*2})}makeFish(){const t=new oe,e=new ce({color:16094266,emissive:3346688,emissiveIntensity:.3}),n=new ce({color:13391104}),i=new D(new ht(.5,8,6),e);i.scale.set(1.6,1,.75),t.add(i);const s=new D(new Ee(.45,.65,4),n);s.rotation.z=Math.PI/2,s.position.x=-.9,t.add(s);const r=new D(new ht(.1,6,4),new ce({color:1118481}));r.position.set(.56,.1,.36),t.add(r);const a=new D(new ht(.04,4,3),new ce({color:16777215}));return a.position.set(.62,.14,.4),t.add(a),t}makeCatnip(){const t=new oe,e=new ce({color:4508740,emissive:1131537,emissiveIntensity:.4}),n=new ce({color:2263074}),i=new ce({color:11206570,emissive:5635925,emissiveIntensity:1.2}),s=new D(new ht(.42,8,6),e);s.scale.set(1.1,.42,1.6),t.add(s);const r=new D(new Qt(.06,.06,.65,5),n);r.position.y=-.38,t.add(r);const a=new D(new ht(.16,6,4),i);a.position.y=.52,t.add(a);for(let c=0;c<3;c++){const l=new D(new ht(.2,6,4),e);l.scale.set(.8,.35,1.2);const d=c/3*Math.PI*2;l.position.set(Math.cos(d)*.45,.1,Math.sin(d)*.45),t.add(l)}return t}}class k_{constructor(){C(this,"combo",0);C(this,"comboTimer",0);C(this,"COMBO_WINDOW",3.2);C(this,"overlayEl",null);C(this,"hideTimeout",null);this.overlayEl=document.getElementById("combo-overlay"),this.overlayEl||setTimeout(()=>{this.overlayEl=document.getElementById("combo-overlay")},500)}update(t){this.combo>0&&(this.comboTimer-=t,this.comboTimer<=0&&this.breakCombo())}registerInteraction(){this.combo++,this.comboTimer=this.COMBO_WINDOW,this.combo>=3&&this.displayCombo()}displayCombo(){if(!this.overlayEl)return;const t=this.getComboLabel();this.overlayEl.textContent=`${t} x${this.combo}!`,this.overlayEl.style.display="block",this.overlayEl.style.opacity="1",this.overlayEl.style.color=this.getComboColor(),this.overlayEl.style.fontSize=Math.min(22+this.combo*2.5,72)+"px",this.overlayEl.style.textShadow=`0 0 20px ${this.getComboColor()}`,this.overlayEl.style.transform="translate(-50%, -50%) scale(1.35)",setTimeout(()=>{this.overlayEl&&(this.overlayEl.style.transform="translate(-50%, -50%) scale(1)")},120),this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(()=>{this.overlayEl&&(this.overlayEl.style.opacity="0")},2200),this.combo===10&&console.log("%c😸 PURRFECT COMBO x10!!! THIS IS PEAK CAT","color: gold; font-size: 20px; font-weight: bold"),this.combo===20&&console.log("%c🐱‍👤 LEGENDARY PURRFECT COMBO x20!!! THE VOID IS IMPRESSED","color: #ff00ff; font-size: 24px; font-weight: bold")}getComboLabel(){return this.combo>=20?"🐱‍👤 LEGENDARY PURRFECT":this.combo>=10?"😸 PURRFECT COMBO":this.combo>=5?"🐱 MEOW COMBO":"💬 CHAT COMBO"}getComboColor(){return this.combo>=20?"#ff00ff":this.combo>=10?"#ffd700":this.combo>=5?"#ff8800":"#ffffff"}breakCombo(){this.combo>=5&&console.log(`%c😿 combo of ${this.combo} broken......`,"color: gray"),this.combo=0,this.overlayEl&&(this.overlayEl.style.opacity="0")}getComboCount(){return this.combo}}const gh={fish:{name:"Fish",icon:"🐟",description:"speed x2.2 for 10s"},catnip:{name:"Catnip",icon:"🌿",description:"reality wobble 8s"},sword:{name:"Sword",icon:"⚔",description:"+20 atk dmg (passive)"},potion:{name:"Potion",icon:"🧪",description:"restore 40 HP"},void_shard:{name:"Void Shard",icon:"💜",description:"30dmg blast nearby (use E)"},onion:{name:"Onion",icon:"🧅",description:"20dmg + shrek tribute (use E)"},cat_charm:{name:"Cat Charm",icon:"🐾",description:"+1 atk range (passive)"}},El={cat:["fish","fish","cat_charm",null,null],barney:["potion","cat_charm","cat_charm",null],emo:["void_shard","void_shard","catnip",null],shrek:["onion","onion","potion",null],buffcat:["sword","cat_charm","cat_charm",null],voidcat:["void_shard","catnip",null,null],hybrid:["fish","catnip",null,null],default:["fish","cat_charm",null,null,null]};class Tl{constructor(){C(this,"slots",new Array(6).fill(null));C(this,"selectedSlot",0);C(this,"onInventoryChange",null)}addItem(t){for(const e of this.slots)if(e&&e.type===t)return e.quantity++,this.onInventoryChange?.(),!0;for(let e=0;e<this.slots.length;e++)if(!this.slots[e]){const n=gh[t];return this.slots[e]={type:t,name:n.name,icon:n.icon,quantity:1,description:n.description},this.onInventoryChange?.(),!0}return!1}getEquipped(){return this.slots[this.selectedSlot]}selectSlot(t){this.selectedSlot=Math.max(0,Math.min(5,t)),this.onInventoryChange?.()}useEquipped(){const t=this.slots[this.selectedSlot];if(!t)return null;const e=["fish","catnip","potion","void_shard","onion"],n=t.type;return e.includes(n)&&(t.quantity--,t.quantity<=0&&(this.slots[this.selectedSlot]=null),this.onInventoryChange?.()),n}getAttackBonus(){const t=this.getEquipped();return t?t.type==="sword"?20:t.type==="cat_charm"?3:0:0}getRangeBonus(){const t=this.getEquipped();return t?t.type==="cat_charm"?1:t.type==="sword"?.5:0:0}static rollLoot(t){const e=El[t]??El.default;return e[Math.floor(Math.random()*e.length)]??null}}class Al{constructor(){C(this,"renderEngine");C(this,"catGod");C(this,"npcManager");C(this,"worldGenerator");C(this,"playerTracker");C(this,"sageCharacter");C(this,"physicsWorld");C(this,"procreationSystem");C(this,"cameraController");C(this,"jojoSystem");C(this,"ugandanKnucklesEvent");C(this,"chat");C(this,"bubbles");C(this,"mobileControls",null);C(this,"audioManager");C(this,"multiplayer");C(this,"remotePlayers",new Map);C(this,"scene");C(this,"keyPressed",{});C(this,"jojoMessageCounter",0);C(this,"weatherSystem");C(this,"dayNight");C(this,"factionSystem");C(this,"dungeon");C(this,"voidPortal");C(this,"itemPickups");C(this,"comboSystem");C(this,"sunLight");C(this,"ambientLightRef");C(this,"mudSlowTimer",0);C(this,"inventory",new Tl);C(this,"playerRespawnTimer",0);this.renderEngine=new H0,this.scene=this.renderEngine.getScene(),this.physicsWorld=new b_,this.physicsWorld.addGround(500,500),this.playerTracker=new K0,this.npcManager=new ya(this.scene),this.worldGenerator=new j0(this.scene),this.catGod=new W0(this.scene),this.sageCharacter=new $0(this.scene),this.procreationSystem=new T_,this.cameraController=new A_(this.renderEngine.getCamera()),this.jojoSystem=new C_,this.audioManager=new R_("./nyan-cat.mp3",.4),this.ugandanKnucklesEvent=new I_(this.scene),this.chat=new D_,this.ugandanKnucklesEvent.setAnnounceCallback(n=>this.chat.announceKnuckles(n)),this.bubbles=new L_(this.renderEngine.getCamera());const t=(n,i,s)=>this.bubbles.showBubbleLive(n,i,s);this.npcManager.setBubbleCallback(t),this.catGod.setSpeakCallback(t),this.sageCharacter.setBubbleCallback(t),this.chat.setOnPlayerSend(n=>{this.sageCharacter.showBubble(n),this.comboSystem?.registerInteraction()}),this.multiplayer=this.initMultiplayer(),Sl.isMobile()&&(this.mobileControls=new Sl,this.mobileControls.onProcreate=()=>{const n=this.procreationSystem.procreate(this.sageCharacter.getPosition(),this.catGod.position,this.scene);n&&this.npcManager.addNPC(n)},this.mobileControls.onMute=()=>{this.audioManager.toggleMute()},this.mobileControls.onChat=()=>{this.chat.open()},this.mobileControls.onJump=()=>{this.sageCharacter.tryJump()}),this.setupKeyboardControls(),this.worldGenerator.generateInitialWorld(),this.setupLighting(),this.factionSystem=new O_,this.factionSystem.onFactionChange=n=>{const i=document.getElementById("faction-hud");i&&(i.textContent=`Faction: ${n.toUpperCase()}`,i.style.color=this.factionSystem.getFactionColor(n))},this.npcManager.setMudHitCallback(n=>{this.mudSlowTimer=n,this.chat.addMessage("event","💩 Hit by Shrek's mud!! Moving slow for a bit...")}),this.npcManager.setWorldGenerator(this.worldGenerator),this.npcManager.onPlayerHit=n=>{if(this.sageCharacter.isDead())return;this.sageCharacter.takeDamage(n),this.chat.addMessage("event",`💢 Ouch! -${n} HP`);const i=document.getElementById("hp-bar-fill");i&&(i.style.background="#ff2222",setTimeout(()=>{i&&(i.style.background="")},200))},this.npcManager.onNpcKilled=(n,i)=>{const s=Tl.rollLoot(n);if(s&&this.inventory.addItem(s)){const a=gh[s];this.chat.addMessage("event",`🎁 Dropped: ${a.icon} ${a.name}`)}},this.inventory.onInventoryChange=()=>this.renderHotbar();const e=(n,i,s)=>this.bubbles.showBubbleLive(n,i,s);this.npcManager.setBubbleCallback((n,i,s)=>{e(n,i,s)}),this.dungeon=new B_(this.scene),this.voidPortal=new z_(this.scene),this.voidPortal.onEnterVoid=()=>this.chat.addMessage("event","🌀 YOU ENTERED THE VOID. 15 seconds..."),this.voidPortal.onExitVoid=()=>this.chat.addMessage("event","🌀 You escaped the void. Barely."),this.itemPickups=new G_(this.scene),this.itemPickups.onPickup=(n,i)=>{this.chat.addMessage("event",n==="fish"?"🐟 Fish! Speed boost x2.2 for 10s!":"🌿 Catnip!! Reality destabilizing..."),this.comboSystem.registerInteraction()},this.comboSystem=new k_,this.start()}setupKeyboardControls(){document.addEventListener("keydown",t=>{this.keyPressed[t.key.toLowerCase()]=!0;const e=parseInt(t.key)-1;if(e>=0&&e<=5){this.inventory.selectSlot(e),this.renderHotbar();return}if(t.key.toLowerCase()==="e"&&!this.chat.isInputOpen()){this.useEquippedItem();return}if(t.key.toLowerCase()==="p"){const n=this.procreationSystem.procreate(this.sageCharacter.getPosition(),this.catGod.position,this.scene);n&&(this.npcManager.addNPC(n),this.comboSystem.registerInteraction())}t.key.toLowerCase()==="f"&&this.factionSystem.cyclePlayerFaction()}),document.addEventListener("keyup",t=>{this.keyPressed[t.key.toLowerCase()]=!1}),document.addEventListener("mousedown",t=>{t.button!==0||this.chat.isInputOpen()||this.tryAttackNearestNPC()})}tryAttackNearestNPC(){if(!this.sageCharacter.canAttack()||this.sageCharacter.isDead())return;const t=this.sageCharacter.getPosition(),e=this.sageCharacter.getAttackRange(this.inventory.getRangeBonus()),n=this.sageCharacter.getAttackDamage(this.inventory.getAttackBonus());let i=null,s=e;for(const r of this.npcManager.getNPCs()){if(!r.isAlive())continue;const a=r.getPosition().distanceTo(t);a<s&&(s=a,i=r)}if(i){i.takeDamage(n),this.sageCharacter.markAttacked();const r=!i.isAlive();this.chat.addMessage("event",r?`⚔ Killed a ${i.getType()}! (+${n} dmg)`:`⚔ Hit ${i.getType()} for ${n} dmg`)}}useEquippedItem(){const t=this.inventory.useEquipped();if(t){if(t==="fish")this.itemPickups.applyFish(),this.chat.addMessage("event","🐟 Fish! Speed x2.2 for 10s");else if(t==="catnip")this.itemPickups.applyCatnip(),this.chat.addMessage("event","🌿 Catnip! Vision wobbling...");else if(t==="potion"){const e=Math.min(40,this.sageCharacter.maxHp-this.sageCharacter.hp);this.sageCharacter.hp=Math.min(this.sageCharacter.maxHp,this.sageCharacter.hp+40),this.chat.addMessage("event",`🧪 Potion! Healed ${e} HP`)}else if(t==="void_shard"){const e=this.sageCharacter.getPosition();let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<10&&(i.takeDamage(30),n++);this.chat.addMessage("event",`💜 Void Shard! Blasted ${n} mobs for 30 dmg`)}else if(t==="onion"){const e=this.sageCharacter.getPosition();let n=0;for(const i of this.npcManager.getNPCs())i.getPosition().distanceTo(e)<12&&(i.takeDamage(20),n++);this.chat.addMessage("event",`🧅 Onion! Shrek tribute! Hit ${n} mobs for 20 dmg`)}this.renderHotbar()}}setupLighting(){const t=new Xd(16777215,.6);this.scene.add(t),this.ambientLightRef=t;const e=new Wd(16777215,.8);e.position.set(50,100,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,this.scene.add(e),this.sunLight=e;const n=new es(8900331,.3);n.position.set(-50,50,50),this.scene.add(n),this.dayNight=new F_(this.scene,this.sunLight,this.ambientLightRef),this.weatherSystem=new U_(this.scene,this.ambientLightRef),this.weatherSystem.onWeatherChange=i=>{this.chat.addMessage("event",`⛅ Weather: ${i.toUpperCase()}`)},this.dayNight.onNightFall=()=>this.chat.addMessage("event","🌙 Night has fallen. The emos grow stronger."),this.dayNight.onDayBreak=()=>this.chat.addMessage("event","☀️ A new day begins!")}start(){const t=()=>{requestAnimationFrame(t);const e=1/120;let n=0,i=0;if(this.mobileControls){const u=this.mobileControls.getJoystick();n=u.dx,i=u.dy;const h=this.mobileControls.consumeCamDelta();(h.dx!==0||h.dy!==0)&&this.cameraController.applyTouchDelta(h.dx,h.dy)}this.physicsWorld.update(e),this.sageCharacter.update(e,this.cameraController.getOrbitAngleY(),this.chat.isInputOpen(),n,i);const s=this.itemPickups.speedMultiplier,r=this.mudSlowTimer>0?.35:1;this.sageCharacter.setSpeedMultiplier(s*r),this.mudSlowTimer>0&&(this.mudSlowTimer-=e);const a=this.renderEngine.getCamera();this.itemPickups.isWobbly?(a.fov=75+this.itemPickups.wobbleAmount,a.updateProjectionMatrix()):a.fov!==75&&(a.fov=75,a.updateProjectionMatrix()),this.npcManager.setPlayerPos(this.sageCharacter.getPosition());const c=this.sageCharacter.getPosition();this.multiplayer.sendPosition(c.x,c.y,c.z,this.sageCharacter.getRotationY());for(const u of this.remotePlayers.values())u.update(e);this.catGod.update(e,this.sageCharacter.getPosition()),this.npcManager.update(e),this.worldGenerator.update(e,this.sageCharacter.getPosition()),this.worldGenerator.updateDestructibles(e),this.dayNight.update(e),this.weatherSystem.update(e),this.factionSystem.update(e,this.npcManager.getNPCs()),this.voidPortal.update(e,this.sageCharacter.getPosition()),this.itemPickups.update(e,this.sageCharacter.getPosition()),this.comboSystem.update(e);const l=document.getElementById("faction-hud");l&&!l.dataset.init&&(l.dataset.init="1",l.addEventListener("click",()=>this.factionSystem.cyclePlayerFaction())),this.ugandanKnucklesEvent.update(e,this.sageCharacter.getPosition()),this.bubbles.update();const d=this.sageCharacter.getPosition();if(this.cameraController.setFollowTarget(d,d),this.cameraController.update(),this.playerTracker.update(),this.jojoMessageCounter++,this.jojoMessageCounter%180===0&&(console.log(`%c${this.jojoSystem.getRandomJojoReference()}`,"color: gold; font-size: 16px; font-weight: bold;"),console.log("%cゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ","color: purple; font-size: 14px;")),this.sageCharacter.tickAttackCooldown(e),this.sageCharacter.isDead()){if(this.playerRespawnTimer<=0){this.playerRespawnTimer=3;const u=document.getElementById("death-overlay");u&&(u.style.display="flex")}if(this.playerRespawnTimer-=e,this.playerRespawnTimer<=0){this.sageCharacter.respawn();const u=document.getElementById("death-overlay");u&&(u.style.display="none")}}this.updateUI(),this.renderEngine.render()};t()}initMultiplayer(){const e=new URLSearchParams(window.location.search).get("server")||"ws://localhost:8080";let n=localStorage.getItem("catworld_username");if(!n){const r=["Fuzzy","Cursed","Divine","Chaotic","Blessed","Dreamy","Silly","Spooky"],a=["Paw","Orb","Cat","Bean","Knuckle","Sage","Ghost","Specter"];n=r[Math.floor(Math.random()*r.length)]+a[Math.floor(Math.random()*a.length)]+Math.floor(Math.random()*999),localStorage.setItem("catworld_username",n)}console.log("%cmultiplayer: connecting as "+n+" to "+e,"color: cyan");const i=new N_(e,n);i.onPlayerJoin=r=>{const a=new bl(this.scene,r.id,r.username,r.x,r.y,r.z);a.setBubbleCallback((c,l,d)=>this.bubbles.showBubbleLive(c,l,d)),this.remotePlayers.set(r.id,a),this.chat.addMessage("system",`${r.username} joined the world`),this.updatePlayerCountUI()},i.onPlayerLeave=r=>{const a=this.remotePlayers.get(r);a&&(this.chat.addMessage("system",`${a.username} left the world`),a.destroy(),this.remotePlayers.delete(r)),this.updatePlayerCountUI()},i.onPlayerMove=(r,a,c,l,d)=>{this.remotePlayers.get(r)?.setTarget(a,c,l,d)},i.onPlayerChat=(r,a,c)=>{this.chat.addMessage("player",`${a}: ${c}`),this.remotePlayers.get(r)?.showBubble(c)},i.onConnected=(r,a)=>{for(const c of a){const l=new bl(this.scene,c.id,c.username,c.x,c.y,c.z);l.setBubbleCallback((d,u,h)=>this.bubbles.showBubbleLive(d,u,h)),this.remotePlayers.set(c.id,l)}this.chat.addMessage("system",`Connected! ${a.length} other player(s) in world`),this.updatePlayerCountUI()},i.onStatusChange=r=>{const a=document.getElementById("mp-status");a&&(a.textContent=`Multiplayer: ${r}`)};const s=this.chat.getOnPlayerSend();return this.chat.setOnPlayerSend(r=>{s?.(r),i.sendChat(r)}),i}updatePlayerCountUI(){const t=document.getElementById("mp-players");t&&(t.textContent=`Online: ${this.remotePlayers.size+1}`)}renderHotbar(){document.querySelectorAll(".hotbar-slot").forEach((n,i)=>{const s=this.inventory.slots[i],r=n.querySelector(".slot-icon"),a=n.querySelector(".slot-count");r&&(r.textContent=s?s.icon:""),a&&(a.textContent=s&&s.quantity>1?`x${s.quantity}`:""),n.classList.toggle("selected",i===this.inventory.selectedSlot)});const e=document.getElementById("hotbar-label");if(e){const n=this.inventory.getEquipped();e.textContent=n?`${n.icon} ${n.name} — ${n.description}`:""}}updateUI(){const t=document.getElementById("hp-current"),e=document.getElementById("hp-max"),n=document.getElementById("hp-bar-fill");if(t&&(t.textContent=String(Math.max(0,Math.ceil(this.sageCharacter.hp)))),e&&(e.textContent=String(this.sageCharacter.maxHp)),n){const l=Math.max(0,this.sageCharacter.hp/this.sageCharacter.maxHp)*100;n.style.width=`${l}%`,n.style.background=l>60?"#44ee66":l>30?"#ffcc00":"#ff3333"}const i=document.getElementById("playerKills"),s=document.getElementById("npcStats"),r=document.getElementById("procreation"),a=document.getElementById("weather-hud"),c=document.getElementById("time-hud");if(i&&(i.textContent=`Player Kills: ${this.playerTracker.getKillCount()}`),s){const l=this.ugandanKnucklesEvent.getActiveCount(),d=l>0?` | Bruddas: ${l}`:"";s.textContent=`NPCs: ${this.npcManager.getNPCCount()} | Buildings: ${this.worldGenerator.getBuildingCount()} | Offspring: ${this.procreationSystem.getOffspringCount()}${d}`}if(r){const l=this.procreationSystem.getDistance(this.sageCharacter.getPosition(),this.catGod.position);r.textContent=this.procreationSystem.getCanProcreateMessage(l)}if(a&&(a.textContent=`Weather: ${this.weatherSystem.getCurrentWeather()}`),c){const l=this.voidPortal.isInVoid(),d=this.dungeon.isPlayerInDungeon(this.sageCharacter.getPosition()),u=l?" 🌀VOID":d?" 🔮DUNGEON":"";c.textContent=`${this.dayNight.getTimeString()}${u}`}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{new Al}):new Al;
