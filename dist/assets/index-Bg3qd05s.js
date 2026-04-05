var Yl=Object.defineProperty;var jl=(r,t,e)=>t in r?Yl(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var H=(r,t,e)=>jl(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="183",Kl=0,Pa=1,$l=2,cs=1,Zl=2,os=3,ei=0,qe=1,On=2,zn=0,Bi=1,Ia=2,Da=3,La=4,Jl=5,di=100,Ql=101,th=102,eh=103,nh=104,ih=200,sh=201,rh=202,oh=203,so=204,ro=205,ah=206,ch=207,lh=208,hh=209,uh=210,dh=211,fh=212,ph=213,mh=214,oo=0,ao=1,co=2,Gi=3,lo=4,ho=5,uo=6,fo=7,Jc=0,gh=1,_h=2,Mn=0,Qc=1,tl=2,el=3,nl=4,il=5,sl=6,rl=7,ol=300,vi=301,ki=302,_r=303,vr=304,lr=306,po=1e3,Bn=1001,mo=1002,Ue=1003,vh=1004,Ms=1005,Ge=1006,xr=1007,mi=1008,Ze=1009,al=1010,cl=1011,hs=1012,ea=1013,Sn=1014,vn=1015,kn=1016,na=1017,ia=1018,us=1020,ll=35902,hl=35899,ul=1021,dl=1022,ln=1023,Vn=1026,gi=1027,fl=1028,sa=1029,Vi=1030,ra=1031,oa=1033,Zs=33776,Js=33777,Qs=33778,tr=33779,go=35840,_o=35841,vo=35842,xo=35843,Mo=36196,yo=37492,So=37496,Eo=37488,wo=37489,bo=37490,To=37491,Ao=37808,Co=37809,Ro=37810,Po=37811,Io=37812,Do=37813,Lo=37814,No=37815,Uo=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,Go=37821,ko=36492,Vo=36494,Ho=36495,Wo=36283,Xo=36284,qo=36285,Yo=36286,xh=3200,pl=0,Mh=1,Jn="",en="srgb",Hi="srgb-linear",nr="linear",ae="srgb",Si=7680,Na=519,yh=512,Sh=513,Eh=514,aa=515,wh=516,bh=517,ca=518,Th=519,Ua=35044,Fa="300 es",xn=2e3,ds=2001;function Ah(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ch(){const r=ir("canvas");return r.style.display="block",r}const Oa={};function Ba(...r){const t="THREE."+r.shift();console.log(t,...r)}function ml(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ut(...r){r=ml(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ee(...r){r=ml(r);const t="THREE."+r.shift();{const e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function sr(...r){const t=r.join(" ");t in Oa||(Oa[t]=!0,Ut(...r))}function Rh(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ph={[oo]:ao,[co]:uo,[lo]:fo,[Gi]:ho,[ao]:oo,[uo]:co,[fo]:lo,[ho]:Gi};class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mr=Math.PI/180,jo=180/Math.PI;function ps(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[r&255]+Oe[r>>8&255]+Oe[r>>16&255]+Oe[r>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function $t(r,t,e){return Math.max(t,Math.min(e,r))}function Ih(r,t){return(r%t+t)%t}function yr(r,t,e){return(1-e)*r+e*t}function ji(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function He(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let qi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(d!==_||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*_;p<0&&(h=-h,f=-f,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,a=Math.sin(a*v)/S,c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+_*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+_*a;const v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(s/2),h=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=i+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sr.copy(this).projectOnVector(t),this.sub(Sr)}reflect(t){return this.sub(Sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sr=new G,za=new qi;class Gt{constructor(t,e,n,i,s,o,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],S=i[4],y=i[7],A=i[2],T=i[5],C=i[8];return s[0]=o*_+a*v+c*A,s[3]=o*p+a*S+c*T,s[6]=o*m+a*y+c*C,s[1]=l*_+u*v+d*A,s[4]=l*p+u*S+d*T,s[7]=l*m+u*y+d*C,s[2]=h*_+f*v+g*A,s[5]=h*p+f*S+g*T,s[8]=h*m+f*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*c)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Gt,Ga=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ka=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dh(){const r={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?nr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Hi]:{primaries:t,whitePoint:n,transfer:nr,toXYZ:Ga,fromXYZ:ka,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Ga,fromXYZ:ka,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),r}const Jt=Dh();function Gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ei;class Lh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ei===void 0&&(Ei=ir("canvas")),Ei.width=t.width,Ei.height=t.height;const i=Ei.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ei}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nh=0;class la{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(wr(i[o].image)):s.push(wr(i[o]))}else s=wr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function wr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Uh=0;const br=new G;class Ve extends Xi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Bn,i=Bn,s=Ge,o=mi,a=ln,c=Ze,l=Ve.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ps(),this.name="",this.source=new la(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(br).x}get height(){return this.source.getSize(br).y}get depth(){return this.source.getSize(br).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ol;Ve.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,i=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(f+1)/2,A=(m+1)/2,T=(u+h)/4,C=(d+_)/4,x=(g+p)/4;return S>y&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=C/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=x/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=x/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},s=new Ve(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new la(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gl extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{constructor(t,e,n,i,s,o,a,c,l,u,d,h,f,g,_,p){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,u,d,h,f,g,_,p)}set(t,e,n,i,s,o,a,c,l,u,d,h,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bh,t,zh)}lookAt(t,e,n){const i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Xn.crossVectors(n,je),Xn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Xn.crossVectors(n,je)),Xn.normalize(),ys.crossVectors(je,Xn),i[0]=Xn.x,i[4]=ys.x,i[8]=je.x,i[1]=Xn.y,i[5]=ys.y,i[9]=je.y,i[2]=Xn.z,i[6]=ys.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],S=n[7],y=n[11],A=n[15],T=i[0],C=i[4],x=i[8],b=i[12],z=i[1],P=i[5],F=i[9],I=i[13],N=i[2],L=i[6],D=i[10],B=i[14],j=i[3],Y=i[7],it=i[11],at=i[15];return s[0]=o*T+a*z+c*N+l*j,s[4]=o*C+a*P+c*L+l*Y,s[8]=o*x+a*F+c*D+l*it,s[12]=o*b+a*I+c*B+l*at,s[1]=u*T+d*z+h*N+f*j,s[5]=u*C+d*P+h*L+f*Y,s[9]=u*x+d*F+h*D+f*it,s[13]=u*b+d*I+h*B+f*at,s[2]=g*T+_*z+p*N+m*j,s[6]=g*C+_*P+p*L+m*Y,s[10]=g*x+_*F+p*D+m*it,s[14]=g*b+_*I+p*B+m*at,s[3]=v*T+S*z+y*N+A*j,s[7]=v*C+S*P+y*L+A*Y,s[11]=v*x+S*F+y*D+A*it,s[15]=v*b+S*I+y*B+A*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],v=c*f-l*h,S=a*f-l*d,y=a*h-c*d,A=o*f-l*u,T=o*h-c*u,C=o*d-a*u;return e*(_*v-p*S+m*y)-n*(g*v-p*A+m*T)+i*(g*S-_*A+m*C)-s*(g*y-_*T+p*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=e*a-n*o,S=e*c-i*o,y=e*l-s*o,A=n*c-i*a,T=n*l-s*a,C=i*l-s*c,x=u*_-d*g,b=u*p-h*g,z=u*m-f*g,P=d*p-h*_,F=d*m-f*_,I=h*m-f*p,N=v*I-S*F+y*P+A*z-T*b+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return t[0]=(a*I-c*F+l*P)*L,t[1]=(i*F-n*I-s*P)*L,t[2]=(_*C-p*T+m*A)*L,t[3]=(h*T-d*C-f*A)*L,t[4]=(c*z-o*I-l*b)*L,t[5]=(e*I-i*z+s*b)*L,t[6]=(p*y-g*C-m*S)*L,t[7]=(u*C-h*y+f*S)*L,t[8]=(o*F-a*z+l*x)*L,t[9]=(n*z-e*F-s*x)*L,t[10]=(g*T-_*y+m*v)*L,t[11]=(d*y-u*T-f*v)*L,t[12]=(a*b-o*P-c*x)*L,t[13]=(e*P-n*b+i*x)*L,t[14]=(_*S-g*A-p*v)*L,t[15]=(u*A-d*S+h*v)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,_=o*u,p=o*d,m=a*d,v=c*l,S=c*u,y=c*d,A=n.x,T=n.y,C=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+y)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(h+m))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(g+S)*C,i[9]=(p-v)*C,i[10]=(1-(h+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=wi.set(i[0],i[1],i[2]).length();const a=wi.set(i[4],i[5],i[6]).length(),c=wi.set(i[8],i[9],i[10]).length();s<0&&(o=-o),sn.copy(this);const l=1/o,u=1/a,d=1/c;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,o,a=xn,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===xn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ds)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=xn,c=!1){const l=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===xn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===ds)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new G,sn=new me,Bh=new G(0,0,0),zh=new G(1,1,1),Xn=new G,ys=new G,je=new G,Va=new me,Ha=new qi;class En{constructor(t=0,e=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Va.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Va,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gh=0;const Wa=new G,bi=new qi,An=new me,Ss=new G,Ki=new G,kh=new G,Vh=new qi,Xa=new G(1,0,0),qa=new G(0,1,0),Ya=new G(0,0,1),ja={type:"added"},Hh={type:"removed"},Ti={type:"childadded",child:null},Tr={type:"childremoved",child:null};class Le extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new G,e=new En,n=new qi,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Gt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Xa,t)}rotateY(t){return this.rotateOnAxis(qa,t)}rotateZ(t){return this.rotateOnAxis(Ya,t)}translateOnAxis(t,e){return Wa.copy(t).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xa,t)}translateY(t){return this.translateOnAxis(qa,t)}translateZ(t){return this.translateOnAxis(Ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ki,Ss,this.up):An.lookAt(Ss,Ki,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),bi.setFromRotationMatrix(An),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ja),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hh),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ja),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new G(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Te extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wh={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wh)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Cr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Ih(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Cr(o,s,t+1/3),this.g=Cr(o,s,t),this.b=Cr(o,s,t-1/3)}return Jt.colorSpaceToWorking(this,i),this}setStyle(t,e=en){function n(s){s!==void 0&&parseFloat(s)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=vl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Jt.workingToColorSpace(Be.copy(this),t),Math.round($t(Be.r*255,0,255))*65536+Math.round($t(Be.g*255,0,255))*256+Math.round($t(Be.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,s=Be.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=en){Jt.workingToColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Es);const n=yr(qn.h,Es.h,e),i=yr(qn.s,Es.s,e),s=yr(qn.l,Es.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Vt;Vt.NAMES=vl;class Xh extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const rn=new G,Cn=new G,Rr=new G,Rn=new G,Ai=new G,Ci=new G,Ka=new G,Pr=new G,Ir=new G,Dr=new G,Lr=new _e,Nr=new _e,Ur=new _e;class cn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){rn.subVectors(i,e),Cn.subVectors(n,e),Rr.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(Cn),c=rn.dot(Rr),l=Cn.dot(Cn),u=Cn.dot(Rr),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Lr.setScalar(0),Nr.setScalar(0),Ur.setScalar(0),Lr.fromBufferAttribute(t,e),Nr.fromBufferAttribute(t,n),Ur.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Lr,s.x),o.addScaledVector(Nr,s.y),o.addScaledVector(Ur,s.z),o}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),Cn.subVectors(t,e),rn.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),rn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Ai.subVectors(i,n),Ci.subVectors(s,n),Pr.subVectors(t,n);const c=Ai.dot(Pr),l=Ci.dot(Pr);if(c<=0&&l<=0)return e.copy(n);Ir.subVectors(t,i);const u=Ai.dot(Ir),d=Ci.dot(Ir);if(u>=0&&d<=u)return e.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ai,o);Dr.subVectors(t,s);const f=Ai.dot(Dr),g=Ci.dot(Dr);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ci,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Ka.subVectors(s,i),a=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(Ka,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(Ai,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ms{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),bs.subVectors(this.max,$i),Ri.subVectors(t.a,$i),Pi.subVectors(t.b,$i),Ii.subVectors(t.c,$i),Yn.subVectors(Pi,Ri),jn.subVectors(Ii,Pi),si.subVectors(Ri,Ii);let e=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-si.z,si.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,si.z,0,-si.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-si.y,si.x,0];return!Fr(e,Ri,Pi,Ii,bs)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,Ri,Pi,Ii,bs))?!1:(Ts.crossVectors(Yn,jn),e=[Ts.x,Ts.y,Ts.z],Fr(e,Ri,Pi,Ii,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new G,new G,new G,new G,new G,new G,new G,new G],on=new G,ws=new ms,Ri=new G,Pi=new G,Ii=new G,Yn=new G,jn=new G,si=new G,$i=new G,bs=new G,Ts=new G,ri=new G;function Fr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ri.fromArray(r,s);const a=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),c=t.dot(ri),l=e.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Se=new G,As=new Qt;let qh=0;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ua,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}}class xl extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ml extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Yh=new ms,Zi=new G,Or=new G;class gs{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);const e=Zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Or.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Or)),this.expandByPoint(Zi.copy(t.center).sub(Or))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let jh=0;const tn=new me,Br=new Le,Di=new G,Ke=new ms,Ji=new ms,De=new G;class ye extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Ml:xl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Br.lookAt(t),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Ke.min,Ji.min),Ke.expandByPoint(De),De.addVectors(Ke.max,Ji.max),Ke.expandByPoint(De)):(Ke.expandByPoint(Ji.min),Ke.expandByPoint(Ji.max))}Ke.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)De.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(De));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)De.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(t,l),De.add(Di)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new G,c[x]=new G;const l=new G,u=new G,d=new G,h=new Qt,f=new Qt,g=new Qt,_=new G,p=new G;function m(x,b,z){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,z),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,z),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[x].add(_),a[b].add(_),a[z].add(_),c[x].add(p),c[b].add(p),c[z].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,b=v.length;x<b;++x){const z=v[x],P=z.start,F=z.count;for(let I=P,N=P+F;I<N;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const S=new G,y=new G,A=new G,T=new G;function C(x){A.fromBufferAttribute(i,x),T.copy(A);const b=a[x];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(T,b);const P=y.dot(c[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,P)}for(let x=0,b=v.length;x<b;++x){const z=v[x],P=z.start,F=z.count;for(let I=P,N=P+F;I<N;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new G,s=new G,o=new G,a=new G,c=new G,l=new G,u=new G,d=new G;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new Je(h,u,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Kh=0,xi=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Bi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const In=new G,zr=new G,Cs=new G,Kn=new G,Gr=new G,Rs=new G,kr=new G;let ha=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zr.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(zr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Cs),a=Kn.dot(this.direction),c=-Kn.dot(Cs),l=Kn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(zr).addScaledVector(Cs,h),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,s){Gr.subVectors(e,t),Rs.subVectors(n,t),kr.crossVectors(Gr,Rs);let o=this.direction.dot(kr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const c=a*this.direction.dot(Rs.crossVectors(Kn,Rs));if(c<0)return null;const l=a*this.direction.dot(Gr.cross(Kn));if(l<0||c+l>o)return null;const u=-a*Kn.dot(kr);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class qt extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $a=new me,oi=new ha,Ps=new gs,Za=new G,Is=new G,Ds=new G,Ls=new G,Vr=new G,Ns=new G,Ja=new G,Us=new G;class K extends Le{constructor(t=new ye,e=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ns.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(Vr.fromBufferAttribute(d,t),o?Ns.addScaledVector(Vr,u):Ns.addScaledVector(Vr.sub(e),u))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(Ps.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Ps,Za)===null||oi.origin.distanceToSquared(Za)>(t.far-t.near)**2))&&($a.copy(s).invert(),oi.copy(t.ray).applyMatrix4($a),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,A=S;y<A;y+=3){const T=a.getX(y),C=a.getX(y+1),x=a.getX(y+2);i=Fs(this,m,t,n,l,u,d,T,C,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),S=a.getX(p+1),y=a.getX(p+2);i=Fs(this,o,t,n,l,u,d,v,S,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,A=S;y<A;y+=3){const T=y,C=y+1,x=y+2;i=Fs(this,m,t,n,l,u,d,T,C,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,S=p+1,y=p+2;i=Fs(this,o,t,n,l,u,d,v,S,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function $h(r,t,e,n,i,s,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===ei,a),c===null)return null;Us.copy(a),Us.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Us);return l<e.near||l>e.far?null:{distance:l,point:Us.clone(),object:r}}function Fs(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Is),r.getVertexPosition(c,Ds),r.getVertexPosition(l,Ls);const u=$h(r,t,e,n,Is,Ds,Ls,Ja);if(u){const d=new G;cn.getBarycoord(Ja,Is,Ds,Ls,d),i&&(u.uv=cn.getInterpolatedAttribute(i,a,c,l,d,new Qt)),s&&(u.uv1=cn.getInterpolatedAttribute(s,a,c,l,d,new Qt)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,c,l,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new G,materialIndex:0};cn.getNormal(Is,Ds,Ls,h.normal),u.face=h,u.barycoord=d}return u}class Zh extends Ve{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Ue,u=Ue,d,h){super(null,o,a,c,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hr=new G,Jh=new G,Qh=new Gt;let ui=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Hr.subVectors(n,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qh.getNormalMatrix(t),i=this.coplanarPoint(Hr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ai=new gs,tu=new Qt(.5,.5),Os=new G;class ua{constructor(t=new ui,e=new ui,n=new ui,i=new ui,s=new ui,o=new ui){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){const i=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],S=s[13],y=s[14],A=s[15];if(i[0].setComponents(l-o,f-u,m-g,A-v).normalize(),i[1].setComponents(l+o,f+u,m+g,A+v).normalize(),i[2].setComponents(l+a,f+d,m+_,A+S).normalize(),i[3].setComponents(l-a,f-d,m-_,A-S).normalize(),n)i[4].setComponents(c,h,p,y).normalize(),i[5].setComponents(l-c,f-h,m-p,A-y).normalize();else if(i[4].setComponents(l-c,f-h,m-p,A-y).normalize(),e===xn)i[5].setComponents(l+c,f+h,m+p,A+y).normalize();else if(e===ds)i[5].setComponents(c,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){ai.center.set(0,0,0);const e=tu.distanceTo(t.center);return ai.radius=.7071067811865476+e,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Os.x=i.normal.x>0?t.max.x:t.min.x,Os.y=i.normal.y>0?t.max.y:t.min.y,Os.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class da extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const rr=new G,or=new G,Qa=new me,Qi=new ha,Bs=new gs,Wr=new G,tc=new G;class Ko extends Le{constructor(t=new ye,e=new da){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)rr.fromBufferAttribute(e,i-1),or.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=rr.distanceTo(or);t.setAttribute("lineDistance",new ve(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=s,t.ray.intersectsSphere(Bs)===!1)return;Qa.copy(i).invert(),Qi.copy(t.ray).applyMatrix4(Qa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=u.getX(_),v=u.getX(_+1),S=zs(this,t,Qi,c,m,v,_);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=zs(this,t,Qi,c,_,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){const m=zs(this,t,Qi,c,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=zs(this,t,Qi,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zs(r,t,e,n,i,s,o){const a=r.geometry.attributes.position;if(rr.fromBufferAttribute(a,i),or.fromBufferAttribute(a,s),e.distanceSqToSegment(rr,or,Wr,tc)>n)return;Wr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Wr);if(!(l<t.near||l>t.far))return{distance:l,point:tc.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class hr extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ec=new me,$o=new ha,Gs=new gs,ks=new G;class ar extends Le{constructor(t=new ye,e=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,t.ray.intersectsSphere(Gs)===!1)return;ec.copy(i).invert(),$o.copy(t.ray).applyMatrix4(ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const p=l.getX(g);ks.fromBufferAttribute(d,p),nc(ks,p,c,i,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)ks.fromBufferAttribute(d,g),nc(ks,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nc(r,t,e,n,i,s,o){const a=$o.distanceSqToPoint(r);if(a<e){const c=new G;$o.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class yl extends Ve{constructor(t=[],e=vi,n,i,s,o,a,c,l,u){super(t,e,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fs extends Ve{constructor(t,e,n=Sn,i,s,o,a=Ue,c=Ue,l,u=Vn,d=1){if(u!==Vn&&u!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new la(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class eu extends fs{constructor(t,e=Sn,n=vi,i,s,o=Ue,a=Ue,c,l=Vn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Sl extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class we extends ye{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2));function g(_,p,m,v,S,y,A,T,C,x,b){const z=y/C,P=A/x,F=y/2,I=A/2,N=T/2,L=C+1,D=x+1;let B=0,j=0;const Y=new G;for(let it=0;it<D;it++){const at=it*P-I;for(let J=0;J<L;J++){const At=J*z-F;Y[_]=At*v,Y[p]=at*S,Y[m]=N,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(J/C),d.push(1-it/x),B+=1}}for(let it=0;it<x;it++)for(let at=0;at<C;at++){const J=h+at+L*it,At=h+at+L*(it+1),Yt=h+(at+1)+L*(it+1),Ht=h+(at+1)+L*it;c.push(J,At,Ht),c.push(At,Yt,Ht),j+=6}a.addGroup(f,j,b),f+=j,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class fa extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new G,u=new Qt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ce extends ye{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ve(d,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(f,2));function v(){const y=new G,A=new G;let T=0;const C=(e-t)/n;for(let x=0;x<=s;x++){const b=[],z=x/s,P=z*(e-t)+t;for(let F=0;F<=i;F++){const I=F/i,N=I*c+a,L=Math.sin(N),D=Math.cos(N);A.x=P*L,A.y=-z*n+p,A.z=P*D,d.push(A.x,A.y,A.z),y.set(L,C,D).normalize(),h.push(y.x,y.y,y.z),f.push(I,1-z),b.push(g++)}_.push(b)}for(let x=0;x<i;x++)for(let b=0;b<s;b++){const z=_[b][x],P=_[b+1][x],F=_[b+1][x+1],I=_[b][x+1];(t>0||b!==0)&&(u.push(z,P,I),T+=3),(e>0||b!==s-1)&&(u.push(P,F,I),T+=3)}l.addGroup(m,T,0),m+=T}function S(y){const A=g,T=new Qt,C=new G;let x=0;const b=y===!0?t:e,z=y===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,p*z,0),h.push(0,z,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const N=F/i*c+a,L=Math.cos(N),D=Math.sin(N);C.x=b*D,C.y=p*z,C.z=b*L,d.push(C.x,C.y,C.z),h.push(0,z,0),T.x=L*.5+.5,T.y=D*.5*z+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){const I=A+F,N=P+F;y===!0?u.push(N,N+1,I):u.push(N+1,N,I),x+=3}l.addGroup(m,x,y===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ze extends Ce{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ze(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _i extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*h-o;for(let S=0;S<l;S++){const y=S*d-s;g.push(y,-v,0),_.push(0,0,1),p.push(S/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const S=v+l*m,y=v+l*(m+1),A=v+1+l*(m+1),T=v+1+l*m;f.push(S,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.widthSegments,t.heightSegments)}}class jt extends ye{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new G,h=new G,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],S=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const T=A/e;d.x=-t*Math.cos(i+T*s)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(i+T*s)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(T+y,1-S),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const S=u[m][v+1],y=u[m][v],A=u[m+1][v],T=u[m+1][v+1];(m!==0||o>0)&&f.push(S,y,T),(m!==n-1||c<Math.PI)&&f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ti extends ye{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],u=[],d=[],h=new G,f=new G,g=new G;for(let _=0;_<=n;_++){const p=o+_/n*a;for(let m=0;m<=i;m++){const v=m/i*s;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){const m=(i+1)*_+p-1,v=(i+1)*(_-1)+p-1,S=(i+1)*(_-1)+p,y=(i+1)*_+p;c.push(m,v,y),c.push(v,S,y)}this.setIndex(c),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Wi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(r){const t={};for(let e=0;e<r.length;e++){const n=Wi(r[e]);for(const i in n)t[i]=n[i]}return t}function nu(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function El(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const iu={clone:Wi,merge:ke};var su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ou extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ot extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pl,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class au extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cu extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pa extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Xr=new me,ic=new G,sc=new G;class wl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),Xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ds||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vs=new G,Hs=new qi,dn=new G;class bl extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vs,Hs,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vs,Hs,dn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Vs,Hs,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vs,Hs,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $n=new G,rc=new Qt,oc=new Qt;class $e extends bl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,rc,oc),e.subVectors(oc,rc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class lu extends wl{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0}}class Zo extends pa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class ma extends bl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hu extends wl{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uu extends pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new hu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class du extends pa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Li=-90,Ni=1;class fu extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Li,Ni,t,e);i.layers=this.layers,this.add(i);const s=new $e(Li,Ni,t,e);s.layers=this.layers,this.add(s);const o=new $e(Li,Ni,t,e);o.layers=this.layers,this.add(o);const a=new $e(Li,Ni,t,e);a.layers=this.layers,this.add(a);const c=new $e(Li,Ni,t,e);c.layers=this.layers,this.add(c);const l=new $e(Li,Ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pu extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ac(r,t,e,n){const i=mu(n);switch(e){case ul:return r*t;case fl:return r*t/i.components*i.byteLength;case sa:return r*t/i.components*i.byteLength;case Vi:return r*t*2/i.components*i.byteLength;case ra:return r*t*2/i.components*i.byteLength;case dl:return r*t*3/i.components*i.byteLength;case ln:return r*t*4/i.components*i.byteLength;case oa:return r*t*4/i.components*i.byteLength;case Zs:case Js:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qs:case tr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _o:case xo:return Math.max(r,16)*Math.max(t,8)/4;case go:case vo:return Math.max(r,8)*Math.max(t,8)/2;case Mo:case yo:case Eo:case wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case So:case bo:case To:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ko:case Vo:case Ho:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wo:case Xo:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mu(r){switch(r){case Ze:case al:return{byteLength:1,components:1};case hs:case cl:case kn:return{byteLength:2,components:1};case na:case ia:return{byteLength:2,components:4};case Sn:case ea:case vn:return{byteLength:4,components:1};case ll:case hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tl(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gu(r){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var _u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
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
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eu=`#ifdef USE_AOMAP
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
#endif`,wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bu=`#ifdef USE_BATCHING
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
#endif`,Tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pu=`#ifdef USE_IRIDESCENCE
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
#endif`,Iu=`#ifdef USE_BUMPMAP
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
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gu=`#define PI 3.141592653589793
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
} // validated`,ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vu=`vec3 transformedNormal = objectNormal;
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
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ku=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
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
}`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
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
#endif`,md=`uniform sampler2D dfgLUT;
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
}`,gd=`
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Td=`#if defined( USE_POINTS_UV )
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
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ef=`float getShadowMask() {
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
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,of=`#ifdef USE_SKINNING
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
#endif`,af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#ifdef USE_TRANSMISSION
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`#include <common>
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
}`,wf=`#if DEPTH_PACKING == 3200
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
}`,bf=`#define DISTANCE
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
}`,Tf=`#define DISTANCE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,If=`#include <common>
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
}`,Df=`uniform vec3 diffuse;
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
}`,Lf=`#define LAMBERT
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
}`,Nf=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,Ff=`#define MATCAP
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
}`,Of=`#define NORMAL
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
}`,Bf=`#define NORMAL
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
}`,zf=`#define PHONG
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
}`,Gf=`#define PHONG
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
}`,kf=`#define STANDARD
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
}`,Vf=`#define STANDARD
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
}`,Hf=`#define TOON
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
}`,Wf=`#define TOON
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
}`,Xf=`uniform float size;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,jf=`uniform vec3 color;
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
}`,Kf=`uniform float rotation;
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
}`,$f=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:_u,alphahash_pars_fragment:vu,alphamap_fragment:xu,alphamap_pars_fragment:Mu,alphatest_fragment:yu,alphatest_pars_fragment:Su,aomap_fragment:Eu,aomap_pars_fragment:wu,batching_pars_vertex:bu,batching_vertex:Tu,begin_vertex:Au,beginnormal_vertex:Cu,bsdfs:Ru,iridescence_fragment:Pu,bumpmap_pars_fragment:Iu,clipping_planes_fragment:Du,clipping_planes_pars_fragment:Lu,clipping_planes_pars_vertex:Nu,clipping_planes_vertex:Uu,color_fragment:Fu,color_pars_fragment:Ou,color_pars_vertex:Bu,color_vertex:zu,common:Gu,cube_uv_reflection_fragment:ku,defaultnormal_vertex:Vu,displacementmap_pars_vertex:Hu,displacementmap_vertex:Wu,emissivemap_fragment:Xu,emissivemap_pars_fragment:qu,colorspace_fragment:Yu,colorspace_pars_fragment:ju,envmap_fragment:Ku,envmap_common_pars_fragment:$u,envmap_pars_fragment:Zu,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:ld,envmap_vertex:Qu,fog_vertex:td,fog_pars_vertex:ed,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:od,lights_lambert_pars_fragment:ad,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:ud,lights_phong_fragment:dd,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Sd,map_fragment:Ed,map_pars_fragment:wd,map_particle_fragment:bd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Rd,morphcolor_vertex:Pd,morphnormal_vertex:Id,morphtarget_pars_vertex:Dd,morphtarget_vertex:Ld,normal_fragment_begin:Nd,normal_fragment_maps:Ud,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:Bd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Vd,iridescence_pars_fragment:Hd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:jd,dithering_pars_fragment:Kd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:tf,shadowmask_pars_fragment:ef,skinbase_vertex:nf,skinning_pars_vertex:sf,skinning_vertex:rf,skinnormal_vertex:of,specularmap_fragment:af,specularmap_pars_fragment:cf,tonemapping_fragment:lf,tonemapping_pars_fragment:hf,transmission_fragment:uf,transmission_pars_fragment:df,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:_f,background_frag:vf,backgroundCube_vert:xf,backgroundCube_frag:Mf,cube_vert:yf,cube_frag:Sf,depth_vert:Ef,depth_frag:wf,distance_vert:bf,distance_frag:Tf,equirect_vert:Af,equirect_frag:Cf,linedashed_vert:Rf,linedashed_frag:Pf,meshbasic_vert:If,meshbasic_frag:Df,meshlambert_vert:Lf,meshlambert_frag:Nf,meshmatcap_vert:Uf,meshmatcap_frag:Ff,meshnormal_vert:Of,meshnormal_frag:Bf,meshphong_vert:zf,meshphong_frag:Gf,meshphysical_vert:kf,meshphysical_frag:Vf,meshtoon_vert:Hf,meshtoon_frag:Wf,points_vert:Xf,points_frag:qf,shadow_vert:Yf,shadow_frag:jf,sprite_vert:Kf,sprite_frag:$f},dt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},_n={basic:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ke([dt.points,dt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ke([dt.common,dt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ke([dt.sprite,dt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:ke([dt.common,dt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:ke([dt.lights,dt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};_n.physical={uniforms:ke([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ws={r:0,b:0,g:0},ci=new En,Zf=new me;function Jf(r,t,e,n,i,s){const o=new Vt(0);let a=i===!0?0:1,c,l,u=null,d=0,h=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=t.get(S,y)}return S}function g(v){let S=!1;const y=f(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),S=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,S){const y=f(S);y&&(y.isCubeTexture||y.mapping===lr)?(l===void 0&&(l=new K(new we(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Wi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),ci.copy(S.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(ci)),l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ae,(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new K(new _i(2,2),new wn({name:"BackgroundMaterial",uniforms:Wi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,S){v.getRGB(Ws,El(r)),e.buffers.color.setClear(Ws.r,Ws.g,Ws.b,S,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:_,dispose:m}}function Qf(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(P,F,I,N,L){let D=!1;const B=d(P,N,I,F);s!==B&&(s=B,l(s.object)),D=f(P,N,I,L),D&&g(P,N,I,L),L!==null&&t.update(L,r.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,y(P,F,I,N),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return r.createVertexArray()}function l(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function d(P,F,I,N){const L=N.wireframe===!0;let D=n[F.id];D===void 0&&(D={},n[F.id]=D);const B=P.isInstancedMesh===!0?P.id:0;let j=D[B];j===void 0&&(j={},D[B]=j);let Y=j[I.id];Y===void 0&&(Y={},j[I.id]=Y);let it=Y[L];return it===void 0&&(it=h(c()),Y[L]=it),it}function h(P){const F=[],I=[],N=[];for(let L=0;L<e;L++)F[L]=0,I[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,F,I,N){const L=s.attributes,D=F.attributes;let B=0;const j=I.getAttributes();for(const Y in j)if(j[Y].location>=0){const at=L[Y];let J=D[Y];if(J===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),at===void 0||at.attribute!==J||J&&at.data!==J.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function g(P,F,I,N){const L={},D=F.attributes;let B=0;const j=I.getAttributes();for(const Y in j)if(j[Y].location>=0){let at=D[Y];at===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(at=P.instanceColor));const J={};J.attribute=at,at&&at.data&&(J.data=at.data),L[Y]=J,B++}s.attributes=L,s.attributesNum=B,s.index=N}function _(){const P=s.newAttributes;for(let F=0,I=P.length;F<I;F++)P[F]=0}function p(P){m(P,0)}function m(P,F){const I=s.newAttributes,N=s.enabledAttributes,L=s.attributeDivisors;I[P]=1,N[P]===0&&(r.enableVertexAttribArray(P),N[P]=1),L[P]!==F&&(r.vertexAttribDivisor(P,F),L[P]=F)}function v(){const P=s.newAttributes,F=s.enabledAttributes;for(let I=0,N=F.length;I<N;I++)F[I]!==P[I]&&(r.disableVertexAttribArray(I),F[I]=0)}function S(P,F,I,N,L,D,B){B===!0?r.vertexAttribIPointer(P,F,I,L,D):r.vertexAttribPointer(P,F,I,N,L,D)}function y(P,F,I,N){_();const L=N.attributes,D=I.getAttributes(),B=F.defaultAttributeValues;for(const j in D){const Y=D[j];if(Y.location>=0){let it=L[j];if(it===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),it!==void 0){const at=it.normalized,J=it.itemSize,At=t.get(it);if(At===void 0)continue;const Yt=At.buffer,Ht=At.type,$=At.bytesPerElement,ot=Ht===r.INT||Ht===r.UNSIGNED_INT||it.gpuType===ea;if(it.isInterleavedBufferAttribute){const nt=it.data,Dt=nt.stride,Rt=it.offset;if(nt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<Y.locationSize;Lt++)m(Y.location+Lt,nt.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Lt=0;Lt<Y.locationSize;Lt++)p(Y.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Lt=0;Lt<Y.locationSize;Lt++)S(Y.location+Lt,J/Y.locationSize,Ht,at,Dt*$,(Rt+J/Y.locationSize*Lt)*$,ot)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<Y.locationSize;nt++)m(Y.location+nt,it.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<Y.locationSize;nt++)p(Y.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let nt=0;nt<Y.locationSize;nt++)S(Y.location+nt,J/Y.locationSize,Ht,at,J*$,J/Y.locationSize*nt*$,ot)}}else if(B!==void 0){const at=B[j];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(Y.location,at);break;case 3:r.vertexAttrib3fv(Y.location,at);break;case 4:r.vertexAttrib4fv(Y.location,at);break;default:r.vertexAttrib1fv(Y.location,at)}}}}v()}function A(){b();for(const P in n){const F=n[P];for(const I in F){const N=F[I];for(const L in N){const D=N[L];for(const B in D)u(D[B].object),delete D[B];delete N[L]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const F=n[P.id];for(const I in F){const N=F[I];for(const L in N){const D=N[L];for(const B in D)u(D[B].object),delete D[B];delete N[L]}}delete n[P.id]}function C(P){for(const F in n){const I=n[F];for(const N in I){const L=I[N];if(L[P.id]===void 0)continue;const D=L[P.id];for(const B in D)u(D[B].object),delete D[B];delete L[P.id]}}}function x(P){for(const F in n){const I=n[F],N=P.isInstancedMesh===!0?P.id:0,L=I[N];if(L!==void 0){for(const D in L){const B=L[D];for(const j in B)u(B[j].object),delete B[j];delete L[D]}delete I[N],Object.keys(I).length===0&&delete n[F]}}}function b(){z(),o=!0,s!==i&&(s=i,l(s.object))}function z(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function tp(r,t,e){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(r.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ep(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==ln&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ze&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vn&&!x)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Ut("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:A,samples:T}}function np(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ui,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):l();else{const v=s?0:n,S=v*4;let y=m.clippingState||null;c.value=y,y=u(g,h,S,f);for(let A=0;A!==S;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const Qn=4,cc=[.125,.215,.35,.446,.526,.582],fi=20,ip=256,ts=new ma,lc=new Vt;let qr=null,Yr=0,jr=0,Kr=!1;const sp=new G;class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:o=256,position:a=sp}=s;qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,Yr,jr),this._renderer.xr.enabled=Kr,t.scissorTest=!1,Ui(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),Yr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:kn,format:ln,colorSpace:Hi,depthBuffer:!1},i=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rp(s)),this._blurMaterial=ap(s,t,e),this._ggxMaterial=op(s,t,e)}return i}_compileMaterial(t){const e=new K(new ye,t);this._renderer.compile(e,ts)}_sceneToCubeUV(t,e,n,i,s){const c=new $e(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(lc),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new we,new qt({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,m=!0):(p.color.copy(lc),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[S],s.y,s.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[S]));const A=this._cubeSize;Ui(i,y*A,S>2?A:0,A,A),d.setRenderTarget(i),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===vi||t.mapping===ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Ui(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ts)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Qn?n-g+Qn:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Ui(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(a,ts),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ui(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(a,ts)}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=l;const h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):fi;p>fi&&Ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fi}`);const m=[];let v=0;for(let C=0;C<fi;++C){const x=C/_,b=Math.exp(-x*x/2);m.push(b),C===0?v+=b:C<p&&(v+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const y=this._sizeLods[i],A=3*y*(i>S-Qn?i-S+Qn:0),T=4*(this._cubeSize-y);Ui(e,A,T,3*y,2*y),c.setRenderTarget(e),c.render(d,ts)}}function rp(r){const t=[],e=[],n=[];let i=r;const s=r-Qn+1+cc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Qn?c=cc[o-r+Qn-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),S=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,x=T>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(b,_*g*T),S.set(h,p*g*T);const z=[T,T,T,T,T,T];y.set(z,m*g*T)}const A=new ye;A.setAttribute("position",new Je(v,_)),A.setAttribute("uv",new Je(S,p)),A.setAttribute("faceIndex",new Je(y,m)),n.push(new K(A,null)),i>Qn&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function uc(r,t,e){const n=new yn(r,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function op(r,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ip,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ur(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ap(r,t,e){const n=new Float32Array(fi),i=new G(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ur(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function dc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ur(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function fc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ur(){return`

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
	`}class Al extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new we(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:zn});s.uniforms.tEquirect.value=e;const o=new K(i,s),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=Ge),new fu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}function cp(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===_r||f===vr)if(t.has(h)){const g=t.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Al(g.height);return _.fromEquirectangularTexture(r,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===_r||f===vr,_=f===vi||f===ki;if(g||_){let p=e.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new hc(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new hc(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===_r?h.mapping=vi:f===vr&&(h.mapping=ki),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function lp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&sr("WebGLRenderer: "+n+" extension not supported."),i}}}function hp(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],r.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let S=0,y=v.length;S<y;S+=3){const A=v[S+0],T=v[S+1],C=v[S+2];h.push(A,T,T,C,C,A)}}else{const v=g.array;_=g.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const A=S+0,T=S+1,C=S+2;h.push(A,T,T,C,C,A)}}const p=new(g.count>=65535?Ml:xl)(h,1);p.version=_;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function up(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){r.drawElements(n,f,s,h*o),e.update(f,n,1)}function l(h,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(h,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)l(h[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*_[v];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function fp(r,t,e){const n=new WeakMap,i=new _e;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let z=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",z)};var f=z;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*T*4*d),x=new gl(C,A,T,d);x.type=vn,x.needsUpdate=!0;const b=y*4;for(let P=0;P<d;P++){const F=m[P],I=v[P],N=S[P],L=A*T*4*P;for(let D=0;D<F.count;D++){const B=D*b;g===!0&&(i.fromBufferAttribute(F,D),C[L+B+0]=i.x,C[L+B+1]=i.y,C[L+B+2]=i.z,C[L+B+3]=0),_===!0&&(i.fromBufferAttribute(I,D),C[L+B+4]=i.x,C[L+B+5]=i.y,C[L+B+6]=i.z,C[L+B+7]=0),p===!0&&(i.fromBufferAttribute(N,D),C[L+B+8]=i.x,C[L+B+9]=i.y,C[L+B+10]=i.z,C[L+B+11]=N.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new Qt(A,T)},n.set(a,h),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function pp(r,t,e,n,i){let s=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const mp={[Qc]:"LINEAR_TONE_MAPPING",[tl]:"REINHARD_TONE_MAPPING",[el]:"CINEON_TONE_MAPPING",[nl]:"ACES_FILMIC_TONE_MAPPING",[sl]:"AGX_TONE_MAPPING",[rl]:"NEUTRAL_TONE_MAPPING",[il]:"CUSTOM_TONE_MAPPING"};function gp(r,t,e,n,i){const s=new yn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),o=new yn(t,e,{type:kn,depthBuffer:!1,stencilBuffer:!1}),a=new ye;a.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ve([0,2,0,0,2,0],2));const c=new ou({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new K(a,c),u=new ma(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,p=[],m=!1;this.setSize=function(v,S){s.setSize(v,S),o.setSize(v,S);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const S=s.width,y=s.height;for(let A=0;A<p.length;A++){const T=p[A];T.setSize&&T.setSize(S,y)}},this.begin=function(v,S){if(f||v.toneMapping===Mn&&p.length===0)return!1;if(_=S,S!==null){const y=S.width,A=S.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return m===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Mn,!0},this.hasRenderPass=function(){return m},this.end=function(v,S){v.toneMapping=g,f=!0;let y=s,A=o;for(let T=0;T<p.length;T++){const C=p[T];if(C.enabled!==!1&&(C.render(v,A,y,S),C.needsSwap!==!1)){const x=y;y=A,A=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,c.defines={},Jt.getTransfer(d)===ae&&(c.defines.SRGB_TRANSFER="");const T=mp[h];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(l,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Cl=new Ve,Jo=new fs(1,1),Rl=new gl,Pl=new Oh,Il=new yl,pc=[],mc=[],gc=new Float32Array(16),_c=new Float32Array(9),vc=new Float32Array(4);function Yi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=pc[i];if(s===void 0&&(s=new Float32Array(i),pc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Re(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function dr(r,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function _p(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2fv(this.addr,t),Pe(e,t)}}function xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;r.uniform3fv(this.addr,t),Pe(e,t)}}function Mp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4fv(this.addr,t),Pe(e,t)}}function yp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;vc.set(n),r.uniformMatrix2fv(this.addr,!1,vc),Pe(e,n)}}function Sp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;_c.set(n),r.uniformMatrix3fv(this.addr,!1,_c),Pe(e,n)}}function Ep(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;gc.set(n),r.uniformMatrix4fv(this.addr,!1,gc),Pe(e,n)}}function wp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function bp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2iv(this.addr,t),Pe(e,t)}}function Tp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3iv(this.addr,t),Pe(e,t)}}function Ap(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4iv(this.addr,t),Pe(e,t)}}function Cp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Rp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2uiv(this.addr,t),Pe(e,t)}}function Pp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3uiv(this.addr,t),Pe(e,t)}}function Ip(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4uiv(this.addr,t),Pe(e,t)}}function Dp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Jo.compareFunction=e.isReversedDepthBuffer()?ca:aa,s=Jo):s=Cl,e.setTexture2D(t||s,i)}function Lp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pl,i)}function Np(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Il,i)}function Up(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rl,i)}function Fp(r){switch(r){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return Mp;case 35674:return yp;case 35675:return Sp;case 35676:return Ep;case 5124:case 35670:return wp;case 35667:case 35671:return bp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return Cp;case 36294:return Rp;case 36295:return Pp;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Up}}function Op(r,t){r.uniform1fv(this.addr,t)}function Bp(r,t){const e=Yi(t,this.size,2);r.uniform2fv(this.addr,e)}function zp(r,t){const e=Yi(t,this.size,3);r.uniform3fv(this.addr,e)}function Gp(r,t){const e=Yi(t,this.size,4);r.uniform4fv(this.addr,e)}function kp(r,t){const e=Yi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Vp(r,t){const e=Yi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Hp(r,t){const e=Yi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Wp(r,t){r.uniform1iv(this.addr,t)}function Xp(r,t){r.uniform2iv(this.addr,t)}function qp(r,t){r.uniform3iv(this.addr,t)}function Yp(r,t){r.uniform4iv(this.addr,t)}function jp(r,t){r.uniform1uiv(this.addr,t)}function Kp(r,t){r.uniform2uiv(this.addr,t)}function $p(r,t){r.uniform3uiv(this.addr,t)}function Zp(r,t){r.uniform4uiv(this.addr,t)}function Jp(r,t,e){const n=this.cache,i=t.length,s=dr(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Jo:o=Cl;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Qp(r,t,e){const n=this.cache,i=t.length,s=dr(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Pl,s[o])}function tm(r,t,e){const n=this.cache,i=t.length,s=dr(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Il,s[o])}function em(r,t,e){const n=this.cache,i=t.length,s=dr(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rl,s[o])}function nm(r){switch(r){case 5126:return Op;case 35664:return Bp;case 35665:return zp;case 35666:return Gp;case 35674:return kp;case 35675:return Vp;case 35676:return Hp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return jp;case 36294:return Kp;case 36295:return $p;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}class im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fp(e.type)}}class sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nm(e.type)}}class rm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function xc(r,t){r.seq.push(t),r.map[t.id]=t}function om(r,t,e){const n=r.name,i=n.length;for($r.lastIndex=0;;){const s=$r.exec(n),o=$r.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xc(e,l===void 0?new im(a,r,t):new sm(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new rm(a),xc(e,d)),e=d}}}class er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);om(a,c,this)}const i=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Mc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const am=37297;let cm=0;function lm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const yc=new Gt;function hm(r){Jt._getMatrix(yc,Jt.workingColorSpace,r);const t=`mat3( ${yc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(r)){case nr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+lm(r.getShaderSource(t),a)}else return s}function um(r,t){const e=hm(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const dm={[Qc]:"Linear",[tl]:"Reinhard",[el]:"Cineon",[nl]:"ACESFilmic",[sl]:"AgX",[rl]:"Neutral",[il]:"Custom"};function fm(r,t){const e=dm[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new G;function pm(){Jt.getLuminanceCoefficients(Xs);const r=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function gm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _m(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function as(r){return r!==""}function Ec(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(r){return r.replace(vm,Mm)}const xm=new Map;function Mm(r,t){let e=kt[t];if(e===void 0){const n=xm.get(t);if(n!==void 0)e=kt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qo(e)}const ym=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(r){return r.replace(ym,Sm)}function Sm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tc(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const Em={[cs]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function wm(r){return Em[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bm={[vi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function Tm(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":bm[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Am={[ki]:"ENVMAP_MODE_REFRACTION"};function Cm(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Am[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Rm={[Jc]:"ENVMAP_BLENDING_MULTIPLY",[gh]:"ENVMAP_BLENDING_MIX",[_h]:"ENVMAP_BLENDING_ADD"};function Pm(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Rm[r.combine]||"ENVMAP_BLENDING_NONE"}function Im(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Dm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wm(e),l=Tm(e),u=Cm(e),d=Pm(e),h=Im(e),f=mm(e),g=gm(s),_=i.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`)):(p=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),m=[Tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,um("linearToOutputTexel",e.outputColorSpace),pm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),o=Qo(o),o=Ec(o,e),o=wc(o,e),a=Qo(a),a=Ec(a,e),a=wc(a,e),o=bc(o),a=bc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+p+o,y=v+m+a,A=Mc(i,i.VERTEX_SHADER,S),T=Mc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(A)||"",N=i.getShaderInfoLog(T)||"",L=F.trim(),D=I.trim(),B=N.trim();let j=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,T);else{const it=Sc(i,A,"vertex"),at=Sc(i,T,"fragment");ee("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+it+`
`+at)}else L!==""?Ut("WebGLProgram: Program Info Log:",L):(D===""||B==="")&&(Y=!1);Y&&(P.diagnostics={runnable:j,programLog:L,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:m}})}i.deleteShader(A),i.deleteShader(T),x=new er(i,_),b=_m(i,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=i.getProgramParameter(_,am)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Lm=0;class Nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Um(t),e.set(t,n)),n}}class Um{constructor(t){this.id=Lm++,this.code=t,this.usedTimes=0}}function Fm(r,t,e,n,i,s){const o=new _l,a=new Nm,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,z,P,F){const I=P.fog,N=F.geometry,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=t.get(x.envMap||L,D),j=B&&B.mapping===lr?B.image.height:null,Y=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const it=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,at=it!==void 0?it.length:0;let J=0;N.morphAttributes.position!==void 0&&(J=1),N.morphAttributes.normal!==void 0&&(J=2),N.morphAttributes.color!==void 0&&(J=3);let At,Yt,Ht,$;if(Y){const oe=_n[Y];At=oe.vertexShader,Yt=oe.fragmentShader}else At=x.vertexShader,Yt=x.fragmentShader,a.update(x),Ht=a.getVertexShaderID(x),$=a.getFragmentShaderID(x);const ot=r.getRenderTarget(),nt=r.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,Rt=F.isBatchedMesh===!0,Lt=!!x.map,xe=!!x.matcap,Kt=!!B,Zt=!!x.aoMap,re=!!x.lightMap,zt=!!x.bumpMap,ne=!!x.normalMap,U=!!x.displacementMap,pe=!!x.emissiveMap,se=!!x.metalnessMap,ue=!!x.roughnessMap,bt=x.anisotropy>0,R=x.clearcoat>0,M=x.dispersion>0,k=x.iridescence>0,tt=x.sheen>0,et=x.transmission>0,Q=bt&&!!x.anisotropyMap,Mt=R&&!!x.clearcoatMap,ht=R&&!!x.clearcoatNormalMap,It=R&&!!x.clearcoatRoughnessMap,Nt=k&&!!x.iridescenceMap,st=k&&!!x.iridescenceThicknessMap,ct=tt&&!!x.sheenColorMap,yt=tt&&!!x.sheenRoughnessMap,Et=!!x.specularMap,mt=!!x.specularColorMap,Wt=!!x.specularIntensityMap,O=et&&!!x.transmissionMap,ut=et&&!!x.thicknessMap,lt=!!x.gradientMap,_t=!!x.alphaMap,rt=x.alphaTest>0,Z=!!x.alphaHash,St=!!x.extensions;let Ft=Mn;x.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const de={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:At,fragmentShader:Yt,defines:x.defines,customVertexShaderID:Ht,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Rt,batchingColor:Rt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Hi,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:xe,envMap:Kt,envMapMode:Kt&&B.mapping,envMapCubeUVHeight:j,aoMap:Zt,lightMap:re,bumpMap:zt,normalMap:ne,displacementMap:U,emissiveMap:pe,normalMapObjectSpace:ne&&x.normalMapType===Mh,normalMapTangentSpace:ne&&x.normalMapType===pl,metalnessMap:se,roughnessMap:ue,anisotropy:bt,anisotropyMap:Q,clearcoat:R,clearcoatMap:Mt,clearcoatNormalMap:ht,clearcoatRoughnessMap:It,dispersion:M,iridescence:k,iridescenceMap:Nt,iridescenceThicknessMap:st,sheen:tt,sheenColorMap:ct,sheenRoughnessMap:yt,specularMap:Et,specularColorMap:mt,specularIntensityMap:Wt,transmission:et,transmissionMap:O,thicknessMap:ut,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Bi&&x.alphaToCoverage===!1,alphaMap:_t,alphaTest:rt,alphaHash:Z,combine:x.combine,mapUv:Lt&&g(x.map.channel),aoMapUv:Zt&&g(x.aoMap.channel),lightMapUv:re&&g(x.lightMap.channel),bumpMapUv:zt&&g(x.bumpMap.channel),normalMapUv:ne&&g(x.normalMap.channel),displacementMapUv:U&&g(x.displacementMap.channel),emissiveMapUv:pe&&g(x.emissiveMap.channel),metalnessMapUv:se&&g(x.metalnessMap.channel),roughnessMapUv:ue&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:Mt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:st&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(x.sheenRoughnessMap.channel),specularMapUv:Et&&g(x.specularMap.channel),specularColorMapUv:mt&&g(x.specularColorMap.channel),specularIntensityMapUv:Wt&&g(x.specularIntensityMap.channel),transmissionMapUv:O&&g(x.transmissionMap.channel),thicknessMapUv:ut&&g(x.thicknessMap.channel),alphaMapUv:_t&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ne||bt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Lt||_t),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:nt,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:pe&&x.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===On,flipSided:x.side===qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)b.push(z),b.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(m(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const b=f[x.type];let z;if(b){const P=_n[b];z=iu.clone(P.uniforms)}else z=x.uniforms;return z}function y(x,b){let z=u.get(b);return z!==void 0?++z.usedTimes:(z=new Dm(r,b,x,i),l.push(z),u.set(b,z)),z}function A(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:C}}function Om(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Bm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Ac(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Cc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,_,p,m){let v=r[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},r[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=o(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=p,v.group=m),t++,v}function c(h,f,g,_,p,m){const v=a(h,f,g,_,p,m);g.transmission>0?n.push(v):g.transparent===!0?i.push(v):e.push(v)}function l(h,f,g,_,p,m){const v=a(h,f,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||Bm),n.length>1&&n.sort(f||Ac),i.length>1&&i.sort(f||Ac)}function d(){for(let h=t,f=r.length;h<f;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:u}}function zm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Cc,r.set(n,[o])):i>=s.length?(o=new Cc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Gm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Vt};break;case"SpotLight":e={position:new G,direction:new G,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function km(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Vm=0;function Hm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Wm(r){const t=new Gm,e=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const i=new G,s=new me,o=new me;function a(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,S=0,y=0,A=0,T=0,C=0;l.sort(Hm);for(let b=0,z=l.length;b<z;b++){const P=l[b],F=P.color,I=P.intensity,N=P.distance;let L=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Vi?L=P.shadow.map.texture:L=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=F.r*I,d+=F.g*I,h+=F.b*I;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],I);C++}else if(P.isDirectionalLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,j=e.get(P);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=D,f++}else if(P.isSpotLight){const D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(F).multiplyScalar(I),D.distance=N,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[_]=D;const B=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,B.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=B.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=L,y++}_++}else if(P.isRectAreaLight){const D=t.get(P);D.color.copy(F).multiplyScalar(I),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=D,p++}else if(P.isPointLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const B=P.shadow,j=e.get(P);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=D,g++}else if(P.isHemisphereLight){const D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(I),D.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[m]=D,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==y||x.numSpotMaps!==A||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=y,x.numSpotMaps=A,x.numLightProbes=C,n.version=Vm++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const S=l[m];if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(S.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Rc(r){const t=new Wm(r),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Xm(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Rc(r),t.set(i,[a])):s>=o.length?(a=new Rc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
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
}`,jm=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Km=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Pc=new me,es=new G,Zr=new G;function $m(r,t,e){let n=new ua;const i=new Qt,s=new Qt,o=new _e,a=new au,c=new cu,l={},u=e.maxTextureSize,d={[ei]:qe,[qe]:ei,[On]:On},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new K(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let m=this.type;this.render=function(T,C,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Zl&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cs);const b=r.getRenderTarget(),z=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(zn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=m!==this.type;I&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(L=>L.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,L=T.length;N<L;N++){const D=T[N],B=D.shadow;if(B===void 0){Ut("WebGLShadowMap:",D,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const j=B.getFrameExtents();i.multiply(j),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,B.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Y,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===os){if(D.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new yn(i.x,i.y,{format:Vi,type:kn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),B.map.texture.name=D.name+".shadowMap",B.map.depthTexture=new fs(i.x,i.y,vn),B.map.depthTexture.name=D.name+".shadowMapDepth",B.map.depthTexture.format=Vn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ue,B.map.depthTexture.magFilter=Ue}else D.isPointLight?(B.map=new Al(i.x),B.map.depthTexture=new eu(i.x,Sn)):(B.map=new yn(i.x,i.y),B.map.depthTexture=new fs(i.x,i.y,Sn)),B.map.depthTexture.name=D.name+".shadowMap",B.map.depthTexture.format=Vn,this.type===cs?(B.map.depthTexture.compareFunction=Y?ca:aa,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ue,B.map.depthTexture.magFilter=Ue);B.camera.updateProjectionMatrix()}const it=B.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<it;at++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,at),r.clear();else{at===0&&(r.setRenderTarget(B.map),r.clear());const J=B.getViewport(at);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),F.viewport(o)}if(D.isPointLight){const J=B.camera,At=B.matrix,Yt=D.distance||J.far;Yt!==J.far&&(J.far=Yt,J.updateProjectionMatrix()),es.setFromMatrixPosition(D.matrixWorld),J.position.copy(es),Zr.copy(J.position),Zr.add(jm[at]),J.up.copy(Km[at]),J.lookAt(Zr),J.updateMatrixWorld(),At.makeTranslation(-es.x,-es.y,-es.z),Pc.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Pc,J.coordinateSystem,J.reversedDepth)}else B.updateMatrices(D);n=B.getFrustum(),y(C,x,B.camera,D,this.type)}B.isPointLightShadow!==!0&&this.type===os&&v(B,x),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(b,z,P)};function v(T,C){const x=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yn(i.x,i.y,{format:Vi,type:kn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(C,null,x,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(C,null,x,f,_,null)}function S(T,C,x,b){let z=null;const P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)z=P;else if(z=x.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=z.uuid,I=C.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let L=N[I];L===void 0&&(L=z.clone(),N[I]=L,C.addEventListener("dispose",A)),z=L}if(z.visible=C.visible,z.wireframe=C.wireframe,b===os?z.side=C.shadowSide!==null?C.shadowSide:C.side:z.side=C.shadowSide!==null?C.shadowSide:d[C.side],z.alphaMap=C.alphaMap,z.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,z.map=C.map,z.clipShadows=C.clipShadows,z.clippingPlanes=C.clippingPlanes,z.clipIntersection=C.clipIntersection,z.displacementMap=C.displacementMap,z.displacementScale=C.displacementScale,z.displacementBias=C.displacementBias,z.wireframeLinewidth=C.wireframeLinewidth,z.linewidth=C.linewidth,x.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const F=r.properties.get(z);F.light=x}return z}function y(T,C,x,b,z){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===os)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const I=t.update(T),N=T.material;if(Array.isArray(N)){const L=I.groups;for(let D=0,B=L.length;D<B;D++){const j=L[D],Y=N[j.materialIndex];if(Y&&Y.visible){const it=S(T,Y,b,z);T.onBeforeShadow(r,T,C,x,I,it,j),r.renderBufferDirect(x,null,I,it,T,j),T.onAfterShadow(r,T,C,x,I,it,j)}}}else if(N.visible){const L=S(T,N,b,z);T.onBeforeShadow(r,T,C,x,I,L,null),r.renderBufferDirect(x,null,I,L,T,null),T.onAfterShadow(r,T,C,x,I,L,null)}}const F=T.children;for(let I=0,N=F.length;I<N;I++)y(F[I],C,x,b,z)}function A(T){T.target.removeEventListener("dispose",A);for(const x in l){const b=l[x],z=T.target.uuid;z in b&&(b[z].dispose(),delete b[z])}}}function Zm(r,t){function e(){let O=!1;const ut=new _e;let lt=null;const _t=new _e(0,0,0,0);return{setMask:function(rt){lt!==rt&&!O&&(r.colorMask(rt,rt,rt,rt),lt=rt)},setLocked:function(rt){O=rt},setClear:function(rt,Z,St,Ft,de){de===!0&&(rt*=Ft,Z*=Ft,St*=Ft),ut.set(rt,Z,St,Ft),_t.equals(ut)===!1&&(r.clearColor(rt,Z,St,Ft),_t.copy(ut))},reset:function(){O=!1,lt=null,_t.set(-1,0,0,0)}}}function n(){let O=!1,ut=!1,lt=null,_t=null,rt=null;return{setReversed:function(Z){if(ut!==Z){const St=t.get("EXT_clip_control");Z?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),ut=Z;const Ft=rt;rt=null,this.setClear(Ft)}},getReversed:function(){return ut},setTest:function(Z){Z?ot(r.DEPTH_TEST):nt(r.DEPTH_TEST)},setMask:function(Z){lt!==Z&&!O&&(r.depthMask(Z),lt=Z)},setFunc:function(Z){if(ut&&(Z=Ph[Z]),_t!==Z){switch(Z){case oo:r.depthFunc(r.NEVER);break;case ao:r.depthFunc(r.ALWAYS);break;case co:r.depthFunc(r.LESS);break;case Gi:r.depthFunc(r.LEQUAL);break;case lo:r.depthFunc(r.EQUAL);break;case ho:r.depthFunc(r.GEQUAL);break;case uo:r.depthFunc(r.GREATER);break;case fo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Z}},setLocked:function(Z){O=Z},setClear:function(Z){rt!==Z&&(rt=Z,ut&&(Z=1-Z),r.clearDepth(Z))},reset:function(){O=!1,lt=null,_t=null,rt=null,ut=!1}}}function i(){let O=!1,ut=null,lt=null,_t=null,rt=null,Z=null,St=null,Ft=null,de=null;return{setTest:function(oe){O||(oe?ot(r.STENCIL_TEST):nt(r.STENCIL_TEST))},setMask:function(oe){ut!==oe&&!O&&(r.stencilMask(oe),ut=oe)},setFunc:function(oe,bn,Tn){(lt!==oe||_t!==bn||rt!==Tn)&&(r.stencilFunc(oe,bn,Tn),lt=oe,_t=bn,rt=Tn)},setOp:function(oe,bn,Tn){(Z!==oe||St!==bn||Ft!==Tn)&&(r.stencilOp(oe,bn,Tn),Z=oe,St=bn,Ft=Tn)},setLocked:function(oe){O=oe},setClear:function(oe){de!==oe&&(r.clearStencil(oe),de=oe)},reset:function(){O=!1,ut=null,lt=null,_t=null,rt=null,Z=null,St=null,Ft=null,de=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,S=null,y=null,A=null,T=null,C=new Vt(0,0,0),x=0,b=!1,z=null,P=null,F=null,I=null,N=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,B=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=B>=2);let Y=null,it={};const at=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),At=new _e().fromArray(at),Yt=new _e().fromArray(J);function Ht(O,ut,lt,_t){const rt=new Uint8Array(4),Z=r.createTexture();r.bindTexture(O,Z),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let St=0;St<lt;St++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,rt):r.texImage2D(ut+St,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,rt);return Z}const $={};$[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(r.DEPTH_TEST),o.setFunc(Gi),zt(!1),ne(Pa),ot(r.CULL_FACE),Zt(zn);function ot(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function nt(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Dt(O,ut){return d[O]!==ut?(r.bindFramebuffer(O,ut),d[O]=ut,O===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ut),O===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function Rt(O,ut){let lt=f,_t=!1;if(O){lt=h.get(ut),lt===void 0&&(lt=[],h.set(ut,lt));const rt=O.textures;if(lt.length!==rt.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,St=rt.length;Z<St;Z++)lt[Z]=r.COLOR_ATTACHMENT0+Z;lt.length=rt.length,_t=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,_t=!0);_t&&r.drawBuffers(lt)}function Lt(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const xe={[di]:r.FUNC_ADD,[Ql]:r.FUNC_SUBTRACT,[th]:r.FUNC_REVERSE_SUBTRACT};xe[eh]=r.MIN,xe[nh]=r.MAX;const Kt={[ih]:r.ZERO,[sh]:r.ONE,[rh]:r.SRC_COLOR,[so]:r.SRC_ALPHA,[uh]:r.SRC_ALPHA_SATURATE,[lh]:r.DST_COLOR,[ah]:r.DST_ALPHA,[oh]:r.ONE_MINUS_SRC_COLOR,[ro]:r.ONE_MINUS_SRC_ALPHA,[hh]:r.ONE_MINUS_DST_COLOR,[ch]:r.ONE_MINUS_DST_ALPHA,[dh]:r.CONSTANT_COLOR,[fh]:r.ONE_MINUS_CONSTANT_COLOR,[ph]:r.CONSTANT_ALPHA,[mh]:r.ONE_MINUS_CONSTANT_ALPHA};function Zt(O,ut,lt,_t,rt,Z,St,Ft,de,oe){if(O===zn){_===!0&&(nt(r.BLEND),_=!1);return}if(_===!1&&(ot(r.BLEND),_=!0),O!==Jl){if(O!==p||oe!==b){if((m!==di||y!==di)&&(r.blendEquation(r.FUNC_ADD),m=di,y=di),oe)switch(O){case Bi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFunc(r.ONE,r.ONE);break;case Da:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case La:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ee("WebGLState: Invalid blending: ",O);break}else switch(O){case Bi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Da:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",O);break}v=null,S=null,A=null,T=null,C.set(0,0,0),x=0,p=O,b=oe}return}rt=rt||ut,Z=Z||lt,St=St||_t,(ut!==m||rt!==y)&&(r.blendEquationSeparate(xe[ut],xe[rt]),m=ut,y=rt),(lt!==v||_t!==S||Z!==A||St!==T)&&(r.blendFuncSeparate(Kt[lt],Kt[_t],Kt[Z],Kt[St]),v=lt,S=_t,A=Z,T=St),(Ft.equals(C)===!1||de!==x)&&(r.blendColor(Ft.r,Ft.g,Ft.b,de),C.copy(Ft),x=de),p=O,b=!1}function re(O,ut){O.side===On?nt(r.CULL_FACE):ot(r.CULL_FACE);let lt=O.side===qe;ut&&(lt=!lt),zt(lt),O.blending===Bi&&O.transparent===!1?Zt(zn):Zt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const _t=O.stencilWrite;a.setTest(_t),_t&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(O){z!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),z=O)}function ne(O){O!==Kl?(ot(r.CULL_FACE),O!==P&&(O===Pa?r.cullFace(r.BACK):O===$l?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):nt(r.CULL_FACE),P=O}function U(O){O!==F&&(D&&r.lineWidth(O),F=O)}function pe(O,ut,lt){O?(ot(r.POLYGON_OFFSET_FILL),(I!==ut||N!==lt)&&(I=ut,N=lt,o.getReversed()&&(ut=-ut),r.polygonOffset(ut,lt))):nt(r.POLYGON_OFFSET_FILL)}function se(O){O?ot(r.SCISSOR_TEST):nt(r.SCISSOR_TEST)}function ue(O){O===void 0&&(O=r.TEXTURE0+L-1),Y!==O&&(r.activeTexture(O),Y=O)}function bt(O,ut,lt){lt===void 0&&(Y===null?lt=r.TEXTURE0+L-1:lt=Y);let _t=it[lt];_t===void 0&&(_t={type:void 0,texture:void 0},it[lt]=_t),(_t.type!==O||_t.texture!==ut)&&(Y!==lt&&(r.activeTexture(lt),Y=lt),r.bindTexture(O,ut||$[O]),_t.type=O,_t.texture=ut)}function R(){const O=it[Y];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function tt(){try{r.texSubImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function et(){try{r.texSubImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function Q(){try{r.compressedTexSubImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function ht(){try{r.texStorage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function It(){try{r.texStorage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function Nt(){try{r.texImage2D(...arguments)}catch(O){ee("WebGLState:",O)}}function st(){try{r.texImage3D(...arguments)}catch(O){ee("WebGLState:",O)}}function ct(O){At.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),At.copy(O))}function yt(O){Yt.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Yt.copy(O))}function Et(O,ut){let lt=l.get(ut);lt===void 0&&(lt=new WeakMap,l.set(ut,lt));let _t=lt.get(O);_t===void 0&&(_t=r.getUniformBlockIndex(ut,O.name),lt.set(O,_t))}function mt(O,ut){const _t=l.get(ut).get(O);c.get(ut)!==_t&&(r.uniformBlockBinding(ut,_t,O.__bindingPointIndex),c.set(ut,_t))}function Wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Y=null,it={},d={},h=new WeakMap,f=[],g=null,_=!1,p=null,m=null,v=null,S=null,y=null,A=null,T=null,C=new Vt(0,0,0),x=0,b=!1,z=null,P=null,F=null,I=null,N=null,At.set(0,0,r.canvas.width,r.canvas.height),Yt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:nt,bindFramebuffer:Dt,drawBuffers:Rt,useProgram:Lt,setBlending:Zt,setMaterial:re,setFlipSided:zt,setCullFace:ne,setLineWidth:U,setPolygonOffset:pe,setScissorTest:se,activeTexture:ue,bindTexture:bt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:Nt,texImage3D:st,updateUBOMapping:Et,uniformBlockBinding:mt,texStorage2D:ht,texStorage3D:It,texSubImage2D:tt,texSubImage3D:et,compressedTexSubImage2D:Q,compressedTexSubImage3D:Mt,scissor:ct,viewport:yt,reset:Wt}}function Jm(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):ir("canvas")}function _(R,M,k){let tt=1;const et=bt(R);if((et.width>k||et.height>k)&&(tt=k/Math.max(et.width,et.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(tt*et.width),Mt=Math.floor(tt*et.height);d===void 0&&(d=g(Q,Mt));const ht=M?g(Q,Mt):d;return ht.width=Q,ht.height=Mt,ht.getContext("2d").drawImage(R,0,0,Q,Mt),Ut("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Mt+")."),ht}else return"data"in R&&Ut("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,M,k,tt,et=!1){if(R!==null){if(r[R]!==void 0)return r[R];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=M;if(M===r.RED&&(k===r.FLOAT&&(Q=r.R32F),k===r.HALF_FLOAT&&(Q=r.R16F),k===r.UNSIGNED_BYTE&&(Q=r.R8)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.R8UI),k===r.UNSIGNED_SHORT&&(Q=r.R16UI),k===r.UNSIGNED_INT&&(Q=r.R32UI),k===r.BYTE&&(Q=r.R8I),k===r.SHORT&&(Q=r.R16I),k===r.INT&&(Q=r.R32I)),M===r.RG&&(k===r.FLOAT&&(Q=r.RG32F),k===r.HALF_FLOAT&&(Q=r.RG16F),k===r.UNSIGNED_BYTE&&(Q=r.RG8)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RG8UI),k===r.UNSIGNED_SHORT&&(Q=r.RG16UI),k===r.UNSIGNED_INT&&(Q=r.RG32UI),k===r.BYTE&&(Q=r.RG8I),k===r.SHORT&&(Q=r.RG16I),k===r.INT&&(Q=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),k===r.UNSIGNED_INT&&(Q=r.RGB32UI),k===r.BYTE&&(Q=r.RGB8I),k===r.SHORT&&(Q=r.RGB16I),k===r.INT&&(Q=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),k===r.UNSIGNED_INT&&(Q=r.RGBA32UI),k===r.BYTE&&(Q=r.RGBA8I),k===r.SHORT&&(Q=r.RGBA16I),k===r.INT&&(Q=r.RGBA32I)),M===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),M===r.RGBA){const Mt=et?nr:Jt.getTransfer(tt);k===r.FLOAT&&(Q=r.RGBA32F),k===r.HALF_FLOAT&&(Q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Q=Mt===ae?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(R,M){let k;return R?M===null||M===Sn||M===us?k=r.DEPTH24_STENCIL8:M===vn?k=r.DEPTH32F_STENCIL8:M===hs&&(k=r.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Sn||M===us?k=r.DEPTH_COMPONENT24:M===vn?k=r.DEPTH_COMPONENT32F:M===hs&&(k=r.DEPTH_COMPONENT16),k}function A(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ue&&R.minFilter!==Ge?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){const M=R.target;M.removeEventListener("dispose",T),x(M),M.isVideoTexture&&u.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),z(M)}function x(R){const M=n.get(R);if(M.__webglInit===void 0)return;const k=R.source,tt=h.get(k);if(tt){const et=tt[M.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(R),Object.keys(tt).length===0&&h.delete(k)}n.remove(R)}function b(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const k=R.source,tt=h.get(k);delete tt[M.__cacheKey],o.memory.textures--}function z(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let et=0;et<M.__webglFramebuffer[tt].length;et++)r.deleteFramebuffer(M.__webglFramebuffer[tt][et]);else r.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)r.deleteFramebuffer(M.__webglFramebuffer[tt]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let tt=0,et=k.length;tt<et;tt++){const Q=n.get(k[tt]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[tt])}n.remove(R)}let P=0;function F(){P=0}function I(){const R=P;return R>=i.maxTextures&&Ut("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function N(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function L(R,M){const k=n.get(R);if(R.isVideoTexture&&se(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const tt=R.image;if(tt===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function D(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){$(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function B(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){$(k,R,M);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function j(R,M){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){ot(k,R,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const Y={[po]:r.REPEAT,[Bn]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},it={[Ue]:r.NEAREST,[vh]:r.NEAREST_MIPMAP_NEAREST,[Ms]:r.NEAREST_MIPMAP_LINEAR,[Ge]:r.LINEAR,[xr]:r.LINEAR_MIPMAP_NEAREST,[mi]:r.LINEAR_MIPMAP_LINEAR},at={[yh]:r.NEVER,[Th]:r.ALWAYS,[Sh]:r.LESS,[aa]:r.LEQUAL,[Eh]:r.EQUAL,[ca]:r.GEQUAL,[wh]:r.GREATER,[bh]:r.NOTEQUAL};function J(R,M){if(M.type===vn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ge||M.magFilter===xr||M.magFilter===Ms||M.magFilter===mi||M.minFilter===Ge||M.minFilter===xr||M.minFilter===Ms||M.minFilter===mi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Y[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Y[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Y[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,it[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,at[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ue||M.minFilter!==Ms&&M.minFilter!==mi||M.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function At(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const tt=M.source;let et=h.get(tt);et===void 0&&(et={},h.set(tt,et));const Q=N(M);if(Q!==R.__cacheKey){et[Q]===void 0&&(et[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[Q].usedTimes++;const Mt=et[R.__cacheKey];Mt!==void 0&&(et[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(M)),R.__cacheKey=Q,R.__webglTexture=et[Q].texture}return k}function Yt(R,M,k){return Math.floor(Math.floor(R/k)/M)}function Ht(R,M,k,tt){const Q=R.updateRanges;if(Q.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,k,tt,M.data);else{Q.sort((st,ct)=>st.start-ct.start);let Mt=0;for(let st=1;st<Q.length;st++){const ct=Q[Mt],yt=Q[st],Et=ct.start+ct.count,mt=Yt(yt.start,M.width,4),Wt=Yt(ct.start,M.width,4);yt.start<=Et+1&&mt===Wt&&Yt(yt.start+yt.count-1,M.width,4)===mt?ct.count=Math.max(ct.count,yt.start+yt.count-ct.start):(++Mt,Q[Mt]=yt)}Q.length=Mt+1;const ht=r.getParameter(r.UNPACK_ROW_LENGTH),It=r.getParameter(r.UNPACK_SKIP_PIXELS),Nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let st=0,ct=Q.length;st<ct;st++){const yt=Q[st],Et=Math.floor(yt.start/4),mt=Math.ceil(yt.count/4),Wt=Et%M.width,O=Math.floor(Et/M.width),ut=mt,lt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),e.texSubImage2D(r.TEXTURE_2D,0,Wt,O,ut,lt,k,tt,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ht),r.pixelStorei(r.UNPACK_SKIP_PIXELS,It),r.pixelStorei(r.UNPACK_SKIP_ROWS,Nt)}}function $(R,M,k){let tt=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=r.TEXTURE_3D);const et=At(R,M),Q=M.source;e.bindTexture(tt,R.__webglTexture,r.TEXTURE0+k);const Mt=n.get(Q);if(Q.version!==Mt.__version||et===!0){e.activeTexture(r.TEXTURE0+k);const ht=Jt.getPrimaries(Jt.workingColorSpace),It=M.colorSpace===Jn?null:Jt.getPrimaries(M.colorSpace),Nt=M.colorSpace===Jn||ht===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let st=_(M.image,!1,i.maxTextureSize);st=ue(M,st);const ct=s.convert(M.format,M.colorSpace),yt=s.convert(M.type);let Et=S(M.internalFormat,ct,yt,M.colorSpace,M.isVideoTexture);J(tt,M);let mt;const Wt=M.mipmaps,O=M.isVideoTexture!==!0,ut=Mt.__version===void 0||et===!0,lt=Q.dataReady,_t=A(M,st);if(M.isDepthTexture)Et=y(M.format===gi,M.type),ut&&(O?e.texStorage2D(r.TEXTURE_2D,1,Et,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Et,st.width,st.height,0,ct,yt,null));else if(M.isDataTexture)if(Wt.length>0){O&&ut&&e.texStorage2D(r.TEXTURE_2D,_t,Et,Wt[0].width,Wt[0].height);for(let rt=0,Z=Wt.length;rt<Z;rt++)mt=Wt[rt],O?lt&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,mt.width,mt.height,ct,yt,mt.data):e.texImage2D(r.TEXTURE_2D,rt,Et,mt.width,mt.height,0,ct,yt,mt.data);M.generateMipmaps=!1}else O?(ut&&e.texStorage2D(r.TEXTURE_2D,_t,Et,st.width,st.height),lt&&Ht(M,st,ct,yt)):e.texImage2D(r.TEXTURE_2D,0,Et,st.width,st.height,0,ct,yt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Et,Wt[0].width,Wt[0].height,st.depth);for(let rt=0,Z=Wt.length;rt<Z;rt++)if(mt=Wt[rt],M.format!==ln)if(ct!==null)if(O){if(lt)if(M.layerUpdates.size>0){const St=ac(mt.width,mt.height,M.format,M.type);for(const Ft of M.layerUpdates){const de=mt.data.subarray(Ft*St/mt.data.BYTES_PER_ELEMENT,(Ft+1)*St/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,Ft,mt.width,mt.height,1,ct,de)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,st.depth,ct,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,Et,mt.width,mt.height,st.depth,0,mt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?lt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,st.depth,ct,yt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,Et,mt.width,mt.height,st.depth,0,ct,yt,mt.data)}else{O&&ut&&e.texStorage2D(r.TEXTURE_2D,_t,Et,Wt[0].width,Wt[0].height);for(let rt=0,Z=Wt.length;rt<Z;rt++)mt=Wt[rt],M.format!==ln?ct!==null?O?lt&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,mt.width,mt.height,ct,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,Et,mt.width,mt.height,0,mt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?lt&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,mt.width,mt.height,ct,yt,mt.data):e.texImage2D(r.TEXTURE_2D,rt,Et,mt.width,mt.height,0,ct,yt,mt.data)}else if(M.isDataArrayTexture)if(O){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Et,st.width,st.height,st.depth),lt)if(M.layerUpdates.size>0){const rt=ac(st.width,st.height,M.format,M.type);for(const Z of M.layerUpdates){const St=st.data.subarray(Z*rt/st.data.BYTES_PER_ELEMENT,(Z+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,st.width,st.height,1,ct,yt,St)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ct,yt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Et,st.width,st.height,st.depth,0,ct,yt,st.data);else if(M.isData3DTexture)O?(ut&&e.texStorage3D(r.TEXTURE_3D,_t,Et,st.width,st.height,st.depth),lt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ct,yt,st.data)):e.texImage3D(r.TEXTURE_3D,0,Et,st.width,st.height,st.depth,0,ct,yt,st.data);else if(M.isFramebufferTexture){if(ut)if(O)e.texStorage2D(r.TEXTURE_2D,_t,Et,st.width,st.height);else{let rt=st.width,Z=st.height;for(let St=0;St<_t;St++)e.texImage2D(r.TEXTURE_2D,St,Et,rt,Z,0,ct,yt,null),rt>>=1,Z>>=1}}else if(Wt.length>0){if(O&&ut){const rt=bt(Wt[0]);e.texStorage2D(r.TEXTURE_2D,_t,Et,rt.width,rt.height)}for(let rt=0,Z=Wt.length;rt<Z;rt++)mt=Wt[rt],O?lt&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,ct,yt,mt):e.texImage2D(r.TEXTURE_2D,rt,Et,ct,yt,mt);M.generateMipmaps=!1}else if(O){if(ut){const rt=bt(st);e.texStorage2D(r.TEXTURE_2D,_t,Et,rt.width,rt.height)}lt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,yt,st)}else e.texImage2D(r.TEXTURE_2D,0,Et,ct,yt,st);p(M)&&m(tt),Mt.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ot(R,M,k){if(M.image.length!==6)return;const tt=At(R,M),et=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const Q=n.get(et);if(et.version!==Q.__version||tt===!0){e.activeTexture(r.TEXTURE0+k);const Mt=Jt.getPrimaries(Jt.workingColorSpace),ht=M.colorSpace===Jn?null:Jt.getPrimaries(M.colorSpace),It=M.colorSpace===Jn||Mt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let Z=0;Z<6;Z++)!Nt&&!st?ct[Z]=_(M.image[Z],!0,i.maxCubemapSize):ct[Z]=st?M.image[Z].image:M.image[Z],ct[Z]=ue(M,ct[Z]);const yt=ct[0],Et=s.convert(M.format,M.colorSpace),mt=s.convert(M.type),Wt=S(M.internalFormat,Et,mt,M.colorSpace),O=M.isVideoTexture!==!0,ut=Q.__version===void 0||tt===!0,lt=et.dataReady;let _t=A(M,yt);J(r.TEXTURE_CUBE_MAP,M);let rt;if(Nt){O&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Wt,yt.width,yt.height);for(let Z=0;Z<6;Z++){rt=ct[Z].mipmaps;for(let St=0;St<rt.length;St++){const Ft=rt[St];M.format!==ln?Et!==null?O?lt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St,0,0,Ft.width,Ft.height,Et,Ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St,Wt,Ft.width,Ft.height,0,Ft.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St,0,0,Ft.width,Ft.height,Et,mt,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St,Wt,Ft.width,Ft.height,0,Et,mt,Ft.data)}}}else{if(rt=M.mipmaps,O&&ut){rt.length>0&&_t++;const Z=bt(ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(st){O?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ct[Z].width,ct[Z].height,Et,mt,ct[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,ct[Z].width,ct[Z].height,0,Et,mt,ct[Z].data);for(let St=0;St<rt.length;St++){const de=rt[St].image[Z].image;O?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St+1,0,0,de.width,de.height,Et,mt,de.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St+1,Wt,de.width,de.height,0,Et,mt,de.data)}}else{O?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,mt,ct[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Et,mt,ct[Z]);for(let St=0;St<rt.length;St++){const Ft=rt[St];O?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St+1,0,0,Et,mt,Ft.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,St+1,Wt,Et,mt,Ft.image[Z])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),Q.__version=et.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function nt(R,M,k,tt,et,Q){const Mt=s.convert(k.format,k.colorSpace),ht=s.convert(k.type),It=S(k.internalFormat,Mt,ht,k.colorSpace),Nt=n.get(M),st=n.get(k);if(st.__renderTarget=M,!Nt.__hasExternalTextures){const ct=Math.max(1,M.width>>Q),yt=Math.max(1,M.height>>Q);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,It,ct,yt,M.depth,0,Mt,ht,null):e.texImage2D(et,Q,It,ct,yt,0,Mt,ht,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),pe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,et,st.__webglTexture,0,U(M)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,et,st.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(R,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const tt=M.depthTexture,et=tt&&tt.isDepthTexture?tt.type:null,Q=y(M.stencilBuffer,et),Mt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(M),Q,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(M),Q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,R)}else{const tt=M.textures;for(let et=0;et<tt.length;et++){const Q=tt[et],Mt=s.convert(Q.format,Q.colorSpace),ht=s.convert(Q.type),It=S(Q.internalFormat,Mt,ht,Q.colorSpace);pe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(M),It,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(M),It,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,It,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(R,M,k){const tt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(M.depthTexture);if(et.__renderTarget=M,(!et.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt){if(et.__webglInit===void 0&&(et.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),et.__webglTexture===void 0){et.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),J(r.TEXTURE_CUBE_MAP,M.depthTexture);const Nt=s.convert(M.depthTexture.format),st=s.convert(M.depthTexture.type);let ct;M.depthTexture.format===Vn?ct=r.DEPTH_COMPONENT24:M.depthTexture.format===gi&&(ct=r.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ct,M.width,M.height,0,Nt,st,null)}}else L(M.depthTexture,0);const Q=et.__webglTexture,Mt=U(M),ht=tt?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,It=M.depthTexture.format===gi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Vn)pe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,It,ht,Q,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,It,ht,Q,0);else if(M.depthTexture.format===gi)pe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,It,ht,Q,0,Mt):r.framebufferTexture2D(r.FRAMEBUFFER,It,ht,Q,0);else throw new Error("Unknown depthTexture format")}function Lt(R){const M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),tt){const et=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,tt.removeEventListener("dispose",et)};tt.addEventListener("dispose",et),M.__depthDisposeCallback=et}M.__boundDepthTexture=tt}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let tt=0;tt<6;tt++)Rt(M.__webglFramebuffer[tt],R,tt);else{const tt=R.texture.mipmaps;tt&&tt.length>0?Rt(M.__webglFramebuffer[0],R,0):Rt(M.__webglFramebuffer,R,0)}else if(k){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]===void 0)M.__webglDepthbuffer[tt]=r.createRenderbuffer(),Dt(M.__webglDepthbuffer[tt],R,!1);else{const et=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[tt];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Q)}}else{const tt=R.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Dt(M.__webglDepthbuffer,R,!1);else{const et=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Q)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(R,M,k){const tt=n.get(R);M!==void 0&&nt(tt.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Lt(R)}function Kt(R){const M=R.texture,k=n.get(R),tt=n.get(M);R.addEventListener("dispose",C);const et=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=M.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let It=0;It<M.mipmaps.length;It++)k.__webglFramebuffer[ht][It]=r.createFramebuffer()}else k.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)k.__webglFramebuffer[ht]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let ht=0,It=et.length;ht<It;ht++){const Nt=n.get(et[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&pe(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const It=et[ht];k.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const Nt=s.convert(It.format,It.colorSpace),st=s.convert(It.type),ct=S(It.internalFormat,Nt,st,It.colorSpace,R.isXRRenderTarget===!0),yt=U(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,ct,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),J(r.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)nt(k.__webglFramebuffer[ht][It],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It);else nt(k.__webglFramebuffer[ht],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,It=et.length;ht<It;ht++){const Nt=et[ht],st=n.get(Nt);let ct=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,st.__webglTexture),J(ct,Nt),nt(k.__webglFramebuffer,R,Nt,r.COLOR_ATTACHMENT0+ht,ct,0),p(Nt)&&m(ct)}e.unbindTexture()}else{let ht=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,tt.__webglTexture),J(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)nt(k.__webglFramebuffer[It],R,M,r.COLOR_ATTACHMENT0,ht,It);else nt(k.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,ht,0);p(M)&&m(ht),e.unbindTexture()}R.depthBuffer&&Lt(R)}function Zt(R){const M=R.textures;for(let k=0,tt=M.length;k<tt;k++){const et=M[k];if(p(et)){const Q=v(R),Mt=n.get(et).__webglTexture;e.bindTexture(Q,Mt),m(Q),e.unbindTexture()}}}const re=[],zt=[];function ne(R){if(R.samples>0){if(pe(R)===!1){const M=R.textures,k=R.width,tt=R.height;let et=r.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(R),ht=M.length>1;if(ht)for(let Nt=0;Nt<M.length;Nt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const It=R.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Nt=0;Nt<M.length;Nt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]);const st=n.get(M[Nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,k,tt,0,0,k,tt,et,r.NEAREST),c===!0&&(re.length=0,zt.length=0,re.push(r.COLOR_ATTACHMENT0+Nt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(re.push(Q),zt.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,zt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let Nt=0;Nt<M.length;Nt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[Nt]);const st=n.get(M[Nt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.TEXTURE_2D,st,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function U(R){return Math.min(i.maxSamples,R.samples)}function pe(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ue(R,M){const k=R.colorSpace,tt=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Hi&&k!==Jn&&(Jt.getTransfer(k)===ae?(tt!==ln||et!==Ze)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",k)),M}function bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=F,this.setTexture2D=L,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=xe,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Qm(r,t){function e(n,i=Jn){let s;const o=Jt.getTransfer(i);if(n===Ze)return r.UNSIGNED_BYTE;if(n===na)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ia)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===al)return r.BYTE;if(n===cl)return r.SHORT;if(n===hs)return r.UNSIGNED_SHORT;if(n===ea)return r.INT;if(n===Sn)return r.UNSIGNED_INT;if(n===vn)return r.FLOAT;if(n===kn)return r.HALF_FLOAT;if(n===ul)return r.ALPHA;if(n===dl)return r.RGB;if(n===ln)return r.RGBA;if(n===Vn)return r.DEPTH_COMPONENT;if(n===gi)return r.DEPTH_STENCIL;if(n===fl)return r.RED;if(n===sa)return r.RED_INTEGER;if(n===Vi)return r.RG;if(n===ra)return r.RG_INTEGER;if(n===oa)return r.RGBA_INTEGER;if(n===Zs||n===Js||n===Qs||n===tr)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===vo||n===xo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===yo||n===So||n===Eo||n===wo||n===bo||n===To)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mo||n===yo)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===So)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eo)return s.COMPRESSED_R11_EAC;if(n===wo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===bo)return s.COMPRESSED_RG11_EAC;if(n===To)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Do||n===Lo||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===Go)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ao)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Vo||n===Ho)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ko)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Wo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const t0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e0=`
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

}`;class n0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Sl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:t0,fragmentShader:e0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i0 extends Xi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new n0,m={},v=e.getContextAttributes();let S=null,y=null;const A=[],T=[],C=new Qt;let x=null;const b=new $e;b.viewport=new _e;const z=new $e;z.viewport=new _e;const P=[b,z],F=new pu;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ot=A[$];return ot===void 0&&(ot=new Ar,A[$]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function($){let ot=A[$];return ot===void 0&&(ot=new Ar,A[$]=ot),ot.getGripSpace()},this.getHand=function($){let ot=A[$];return ot===void 0&&(ot=new Ar,A[$]=ot),ot.getHandSpace()};function L($){const ot=T.indexOf($.inputSource);if(ot===-1)return;const nt=A[ot];nt!==void 0&&(nt.update($.inputSource,$.frame,l||o),nt.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",B);for(let $=0;$<A.length;$++){const ot=T[$];ot!==null&&(T[$]=null,A[$].disconnect(ot))}I=null,N=null,p.reset();for(const $ in m)delete m[$];t.setRenderTarget(S),f=null,h=null,d=null,i=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",D),i.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Dt=null,Rt=null;v.depth&&(Rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=v.stencil?gi:Vn,Dt=v.stencil?us:Sn);const Lt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Lt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new yn(h.textureWidth,h.textureHeight,{format:ln,type:Ze,depthTexture:new fs(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const nt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new yn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B($){for(let ot=0;ot<$.removed.length;ot++){const nt=$.removed[ot],Dt=T.indexOf(nt);Dt>=0&&(T[Dt]=null,A[Dt].disconnect(nt))}for(let ot=0;ot<$.added.length;ot++){const nt=$.added[ot];let Dt=T.indexOf(nt);if(Dt===-1){for(let Lt=0;Lt<A.length;Lt++)if(Lt>=T.length){T.push(nt),Dt=Lt;break}else if(T[Lt]===null){T[Lt]=nt,Dt=Lt;break}if(Dt===-1)break}const Rt=A[Dt];Rt&&Rt.connect(nt)}}const j=new G,Y=new G;function it($,ot,nt){j.setFromMatrixPosition(ot.matrixWorld),Y.setFromMatrixPosition(nt.matrixWorld);const Dt=j.distanceTo(Y),Rt=ot.projectionMatrix.elements,Lt=nt.projectionMatrix.elements,xe=Rt[14]/(Rt[10]-1),Kt=Rt[14]/(Rt[10]+1),Zt=(Rt[9]+1)/Rt[5],re=(Rt[9]-1)/Rt[5],zt=(Rt[8]-1)/Rt[0],ne=(Lt[8]+1)/Lt[0],U=xe*zt,pe=xe*ne,se=Dt/(-zt+ne),ue=se*-zt;if(ot.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ue),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const bt=xe+se,R=Kt+se,M=U-ue,k=pe+(Dt-ue),tt=Zt*Kt/R*bt,et=re*Kt/R*bt;$.projectionMatrix.makePerspective(M,k,tt,et,bt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function at($,ot){ot===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ot.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ot=$.near,nt=$.far;p.texture!==null&&(p.depthNear>0&&(ot=p.depthNear),p.depthFar>0&&(nt=p.depthFar)),F.near=z.near=b.near=ot,F.far=z.far=b.far=nt,(I!==F.near||N!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,N=F.far),F.layers.mask=$.layers.mask|6,b.layers.mask=F.layers.mask&-5,z.layers.mask=F.layers.mask&-3;const Dt=$.parent,Rt=F.cameras;at(F,Dt);for(let Lt=0;Lt<Rt.length;Lt++)at(Rt[Lt],Dt);Rt.length===2?it(F,b,z):F.projectionMatrix.copy(b.projectionMatrix),J($,F,Dt)};function J($,ot,nt){nt===null?$.matrix.copy(ot.matrixWorld):($.matrix.copy(nt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ot.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=jo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function($){return m[$]};let At=null;function Yt($,ot){if(u=ot.getViewerPose(l||o),g=ot,u!==null){const nt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Dt=!1;nt.length!==F.cameras.length&&(F.cameras.length=0,Dt=!0);for(let Kt=0;Kt<nt.length;Kt++){const Zt=nt[Kt];let re=null;if(f!==null)re=f.getViewport(Zt);else{const ne=d.getViewSubImage(h,Zt);re=ne.viewport,Kt===0&&(t.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(y))}let zt=P[Kt];zt===void 0&&(zt=new $e,zt.layers.enable(Kt),zt.viewport=new _e,P[Kt]=zt),zt.matrix.fromArray(Zt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Zt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(re.x,re.y,re.width,re.height),Kt===0&&(F.matrix.copy(zt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Dt===!0&&F.cameras.push(zt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Kt=d.getDepthInformation(nt[0]);Kt&&Kt.isValid&&Kt.texture&&p.init(Kt,i.renderState)}if(Rt&&Rt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Kt=0;Kt<nt.length;Kt++){const Zt=nt[Kt].camera;if(Zt){let re=m[Zt];re||(re=new Sl,m[Zt]=re);const zt=d.getCameraImage(Zt);re.sourceTexture=zt}}}}for(let nt=0;nt<A.length;nt++){const Dt=T[nt],Rt=A[nt];Dt!==null&&Rt!==void 0&&Rt.update(Dt,ot,l||o)}At&&At($,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const Ht=new Tl;Ht.setAnimationLoop(Yt),this.setAnimationLoop=function($){At=$},this.dispose=function(){}}}const li=new En,s0=new me;function r0(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,El(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,S,y){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qe&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qe&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),S=v.envMap,y=v.envMapRotation;S&&(p.envMap.value=S,li.copy(y),li.x*=-1,li.y*=-1,li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),p.envMapRotation.value.setFromMatrix4(s0.makeRotationFromEuler(li)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qe&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const y=S.program;n.uniformBlockBinding(v,y)}function l(v,S){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(v,A);const T=t.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const S=d();v.__bindingPointIndex=S;const y=r.createBuffer(),A=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,A,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=i[v.id],y=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,C=y.length;T<C;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,z=x.length;b<z;b++){const P=x[b];if(f(P,T,b,A)===!0){const F=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let L=0;L<I.length;L++){const D=I[L],B=_(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,F+N,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,y,A){const T=v.value,C=S+"_"+y;if(A[C]===void 0)return typeof T=="number"||typeof T=="boolean"?A[C]=T:A[C]=T.clone(),!0;{const x=A[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return A[C]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function g(v){const S=v.uniforms;let y=0;const A=16;for(let C=0,x=S.length;C<x;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let z=0,P=b.length;z<P;z++){const F=b[z],I=Array.isArray(F.value)?F.value:[F.value];for(let N=0,L=I.length;N<L;N++){const D=I[N],B=_(D),j=y%A,Y=j%B.boundary,it=j+Y;y+=Y,it!==0&&A-it<B.storage&&(y+=A-it),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=B.storage}}}const T=y%A;return T>0&&(y+=A-T),v.__size=y,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ut("WebGLRenderer: Unsupported uniform value type.",v),S}function p(v){const S=v.target;S.removeEventListener("dispose",p);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:m}}const a0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function c0(){return fn===null&&(fn=new Zh(a0,16,16,Vi,kn),fn.name="DFG_LUT",fn.minFilter=Ge,fn.magFilter=Ge,fn.wrapS=Bn,fn.wrapT=Bn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class l0{constructor(t={}){const{canvas:e=Ch(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ze}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=f,p=new Set([oa,ra,sa]),m=new Set([Ze,Sn,hs,us,na,ia]),v=new Uint32Array(4),S=new Int32Array(4);let y=null,A=null;const T=[],C=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let z=!1;this._outputColorSpace=en;let P=0,F=0,I=null,N=-1,L=null;const D=new _e,B=new _e;let j=null;const Y=new Vt(0);let it=0,at=e.width,J=e.height,At=1,Yt=null,Ht=null;const $=new _e(0,0,at,J),ot=new _e(0,0,at,J);let nt=!1;const Dt=new ua;let Rt=!1,Lt=!1;const xe=new me,Kt=new G,Zt=new _e,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ne(){return I===null?At:1}let U=n;function pe(w,V){return e.getContext(w,V)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ta}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",de,!1),U===null){const V="webgl2";if(U=pe(V,w),U===null)throw pe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ee("WebGLRenderer: "+w.message),w}let se,ue,bt,R,M,k,tt,et,Q,Mt,ht,It,Nt,st,ct,yt,Et,mt,Wt,O,ut,lt,_t;function rt(){se=new lp(U),se.init(),ut=new Qm(U,se),ue=new ep(U,se,t,ut),bt=new Zm(U,se),ue.reversedDepthBuffer&&h&&bt.buffers.depth.setReversed(!0),R=new dp(U),M=new Om,k=new Jm(U,se,bt,M,ue,ut,R),tt=new cp(b),et=new gu(U),lt=new Qf(U,et),Q=new hp(U,et,R,lt),Mt=new pp(U,Q,et,lt,R),mt=new fp(U,ue,k),ct=new np(M),ht=new Fm(b,tt,se,ue,lt,ct),It=new r0(b,M),Nt=new zm,st=new Xm(se),Et=new Jf(b,tt,bt,Mt,g,c),yt=new $m(b,Mt,ue),_t=new o0(U,R,ue,bt),Wt=new tp(U,se,R),O=new up(U,se,R),R.programs=ht.programs,b.capabilities=ue,b.extensions=se,b.properties=M,b.renderLists=Nt,b.shadowMap=yt,b.state=bt,b.info=R}rt(),_!==Ze&&(x=new gp(_,e.width,e.height,i,s));const Z=new i0(b,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(w){w!==void 0&&(At=w,this.setSize(at,J,!1))},this.getSize=function(w){return w.set(at,J)},this.setSize=function(w,V,q=!0){if(Z.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}at=w,J=V,e.width=Math.floor(w*At),e.height=Math.floor(V*At),q===!0&&(e.style.width=w+"px",e.style.height=V+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(at*At,J*At).floor()},this.setDrawingBufferSize=function(w,V,q){at=w,J=V,At=q,e.width=Math.floor(w*q),e.height=Math.floor(V*q),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(_===Ze){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,V,q,X){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,V,q,X),bt.viewport(D.copy($).multiplyScalar(At).round())},this.getScissor=function(w){return w.copy(ot)},this.setScissor=function(w,V,q,X){w.isVector4?ot.set(w.x,w.y,w.z,w.w):ot.set(w,V,q,X),bt.scissor(B.copy(ot).multiplyScalar(At).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(w){bt.setScissorTest(nt=w)},this.setOpaqueSort=function(w){Yt=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,q=!0){let X=0;if(w){let W=!1;if(I!==null){const ft=I.texture.format;W=p.has(ft)}if(W){const ft=I.texture.type,gt=m.has(ft),pt=Et.getClearColor(),wt=Et.getClearAlpha(),Ct=pt.r,Bt=pt.g,Xt=pt.b;gt?(v[0]=Ct,v[1]=Bt,v[2]=Xt,v[3]=wt,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=Ct,S[1]=Bt,S[2]=Xt,S[3]=wt,U.clearBufferiv(U.COLOR,0,S))}else X|=U.COLOR_BUFFER_BIT}V&&(X|=U.DEPTH_BUFFER_BIT),q&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",de,!1),Et.dispose(),Nt.dispose(),st.dispose(),M.dispose(),tt.dispose(),Mt.dispose(),lt.dispose(),_t.dispose(),ht.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Sa),Z.removeEventListener("sessionend",Ea),ni.stop()};function St(w){w.preventDefault(),Ba("WebGLRenderer: Context Lost."),z=!0}function Ft(){Ba("WebGLRenderer: Context Restored."),z=!1;const w=R.autoReset,V=yt.enabled,q=yt.autoUpdate,X=yt.needsUpdate,W=yt.type;rt(),R.autoReset=w,yt.enabled=V,yt.autoUpdate=q,yt.needsUpdate=X,yt.type=W}function de(w){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function oe(w){const V=w.target;V.removeEventListener("dispose",oe),bn(V)}function bn(w){Tn(w),M.remove(w)}function Tn(w){const V=M.get(w).programs;V!==void 0&&(V.forEach(function(q){ht.releaseProgram(q)}),w.isShaderMaterial&&ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,q,X,W,ft){V===null&&(V=re);const gt=W.isMesh&&W.matrixWorld.determinant()<0,pt=kl(w,V,q,X,W);bt.setMaterial(X,gt);let wt=q.index,Ct=1;if(X.wireframe===!0){if(wt=Q.getWireframeAttribute(q),wt===void 0)return;Ct=2}const Bt=q.drawRange,Xt=q.attributes.position;let Pt=Bt.start*Ct,ce=(Bt.start+Bt.count)*Ct;ft!==null&&(Pt=Math.max(Pt,ft.start*Ct),ce=Math.min(ce,(ft.start+ft.count)*Ct)),wt!==null?(Pt=Math.max(Pt,0),ce=Math.min(ce,wt.count)):Xt!=null&&(Pt=Math.max(Pt,0),ce=Math.min(ce,Xt.count));const Me=ce-Pt;if(Me<0||Me===1/0)return;lt.setup(W,X,pt,q,wt);let ge,le=Wt;if(wt!==null&&(ge=et.get(wt),le=O,le.setIndex(ge)),W.isMesh)X.wireframe===!0?(bt.setLineWidth(X.wireframeLinewidth*ne()),le.setMode(U.LINES)):le.setMode(U.TRIANGLES);else if(W.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),bt.setLineWidth(Fe*ne()),W.isLineSegments?le.setMode(U.LINES):W.isLineLoop?le.setMode(U.LINE_LOOP):le.setMode(U.LINE_STRIP)}else W.isPoints?le.setMode(U.POINTS):W.isSprite&&le.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Fe=W._multiDrawStarts,Tt=W._multiDrawCounts,Ye=W._multiDrawCount,te=wt?et.get(wt).bytesPerElement:1,nn=M.get(X).currentProgram.getUniforms();for(let un=0;un<Ye;un++)nn.setValue(U,"_gl_DrawID",un),le.render(Fe[un]/te,Tt[un])}else if(W.isInstancedMesh)le.renderInstances(Pt,Me,W.count);else if(q.isInstancedBufferGeometry){const Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,Fe);le.renderInstances(Pt,Me,Tt)}else le.render(Pt,Me)};function ya(w,V,q){w.transparent===!0&&w.side===On&&w.forceSinglePass===!1?(w.side=qe,w.needsUpdate=!0,xs(w,V,q),w.side=ei,w.needsUpdate=!0,xs(w,V,q),w.side=On):xs(w,V,q)}this.compile=function(w,V,q=null){q===null&&(q=w),A=st.get(q),A.init(V),C.push(A),q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),w!==q&&w.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const X=new Set;return w.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ft=W.material;if(ft)if(Array.isArray(ft))for(let gt=0;gt<ft.length;gt++){const pt=ft[gt];ya(pt,q,W),X.add(pt)}else ya(ft,q,W),X.add(ft)}),A=C.pop(),X},this.compileAsync=function(w,V,q=null){const X=this.compile(w,V,q);return new Promise(W=>{function ft(){if(X.forEach(function(gt){M.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){W(w);return}setTimeout(ft,10)}se.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let mr=null;function Gl(w){mr&&mr(w)}function Sa(){ni.stop()}function Ea(){ni.start()}const ni=new Tl;ni.setAnimationLoop(Gl),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){mr=w,Z.setAnimationLoop(w),w===null?ni.stop():ni.start()},Z.addEventListener("sessionstart",Sa),Z.addEventListener("sessionend",Ea),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const q=Z.enabled===!0&&Z.isPresenting===!0,X=x!==null&&(I===null||q)&&x.begin(b,I);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(V),V=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,V,I),A=st.get(w,C.length),A.init(V),C.push(A),xe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Dt.setFromProjectionMatrix(xe,xn,V.reversedDepth),Lt=this.localClippingEnabled,Rt=ct.init(this.clippingPlanes,Lt),y=Nt.get(w,T.length),y.init(),T.push(y),Z.enabled===!0&&Z.isPresenting===!0){const gt=b.xr.getDepthSensingMesh();gt!==null&&gr(gt,V,-1/0,b.sortObjects)}gr(w,V,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(Yt,Ht),zt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,zt&&Et.addToRenderList(y,w),this.info.render.frame++,Rt===!0&&ct.beginShadows();const W=A.state.shadowsArray;if(yt.render(W,w,V),Rt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&x.hasRenderPass())===!1){const gt=y.opaque,pt=y.transmissive;if(A.setupLights(),V.isArrayCamera){const wt=V.cameras;if(pt.length>0)for(let Ct=0,Bt=wt.length;Ct<Bt;Ct++){const Xt=wt[Ct];ba(gt,pt,w,Xt)}zt&&Et.render(w);for(let Ct=0,Bt=wt.length;Ct<Bt;Ct++){const Xt=wt[Ct];wa(y,w,Xt,Xt.viewport)}}else pt.length>0&&ba(gt,pt,w,V),zt&&Et.render(w),wa(y,w,V)}I!==null&&F===0&&(k.updateMultisampleRenderTarget(I),k.updateRenderTargetMipmap(I)),X&&x.end(b),w.isScene===!0&&w.onAfterRender(b,w,V),lt.resetDefaultState(),N=-1,L=null,C.pop(),C.length>0?(A=C[C.length-1],Rt===!0&&ct.setGlobalState(b.clippingPlanes,A.state.camera)):A=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function gr(w,V,q,X){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Dt.intersectsSprite(w)){X&&Zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const gt=Mt.update(w),pt=w.material;pt.visible&&y.push(w,gt,pt,q,Zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Dt.intersectsObject(w))){const gt=Mt.update(w),pt=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Zt.copy(w.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Zt.copy(gt.boundingSphere.center)),Zt.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(pt)){const wt=gt.groups;for(let Ct=0,Bt=wt.length;Ct<Bt;Ct++){const Xt=wt[Ct],Pt=pt[Xt.materialIndex];Pt&&Pt.visible&&y.push(w,gt,Pt,q,Zt.z,Xt)}}else pt.visible&&y.push(w,gt,pt,q,Zt.z,null)}}const ft=w.children;for(let gt=0,pt=ft.length;gt<pt;gt++)gr(ft[gt],V,q,X)}function wa(w,V,q,X){const{opaque:W,transmissive:ft,transparent:gt}=w;A.setupLightsView(q),Rt===!0&&ct.setGlobalState(b.clippingPlanes,q),X&&bt.viewport(D.copy(X)),W.length>0&&vs(W,V,q),ft.length>0&&vs(ft,V,q),gt.length>0&&vs(gt,V,q),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ba(w,V,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const Pt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new yn(1,1,{generateMipmaps:!0,type:Pt?kn:Ze,minFilter:mi,samples:Math.max(4,ue.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const ft=A.state.transmissionRenderTarget[X.id],gt=X.viewport||D;ft.setSize(gt.z*b.transmissionResolutionScale,gt.w*b.transmissionResolutionScale);const pt=b.getRenderTarget(),wt=b.getActiveCubeFace(),Ct=b.getActiveMipmapLevel();b.setRenderTarget(ft),b.getClearColor(Y),it=b.getClearAlpha(),it<1&&b.setClearColor(16777215,.5),b.clear(),zt&&Et.render(q);const Bt=b.toneMapping;b.toneMapping=Mn;const Xt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),Rt===!0&&ct.setGlobalState(b.clippingPlanes,X),vs(w,q,X),k.updateMultisampleRenderTarget(ft),k.updateRenderTargetMipmap(ft),se.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ce=0,Me=V.length;ce<Me;ce++){const ge=V[ce],{object:le,geometry:Fe,material:Tt,group:Ye}=ge;if(Tt.side===On&&le.layers.test(X.layers)){const te=Tt.side;Tt.side=qe,Tt.needsUpdate=!0,Ta(le,q,X,Fe,Tt,Ye),Tt.side=te,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(k.updateMultisampleRenderTarget(ft),k.updateRenderTargetMipmap(ft))}b.setRenderTarget(pt,wt,Ct),b.setClearColor(Y,it),Xt!==void 0&&(X.viewport=Xt),b.toneMapping=Bt}function vs(w,V,q){const X=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ft=w.length;W<ft;W++){const gt=w[W],{object:pt,geometry:wt,group:Ct}=gt;let Bt=gt.material;Bt.allowOverride===!0&&X!==null&&(Bt=X),pt.layers.test(q.layers)&&Ta(pt,V,q,wt,Bt,Ct)}}function Ta(w,V,q,X,W,ft){w.onBeforeRender(b,V,q,X,W,ft),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(b,V,q,X,w,ft),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=qe,W.needsUpdate=!0,b.renderBufferDirect(q,V,X,W,w,ft),W.side=ei,W.needsUpdate=!0,b.renderBufferDirect(q,V,X,W,w,ft),W.side=On):b.renderBufferDirect(q,V,X,W,w,ft),w.onAfterRender(b,V,q,X,W,ft)}function xs(w,V,q){V.isScene!==!0&&(V=re);const X=M.get(w),W=A.state.lights,ft=A.state.shadowsArray,gt=W.state.version,pt=ht.getParameters(w,W.state,ft,V,q),wt=ht.getProgramCacheKey(pt);let Ct=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,X.fog=V.fog;const Bt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=tt.get(w.envMap||X.environment,Bt),X.envMapRotation=X.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",oe),Ct=new Map,X.programs=Ct);let Xt=Ct.get(wt);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===gt)return Ca(w,pt),Xt}else pt.uniforms=ht.getUniforms(w),w.onBeforeCompile(pt,b),Xt=ht.acquireProgram(pt,wt),Ct.set(wt,Xt),X.uniforms=pt.uniforms;const Pt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=ct.uniform),Ca(w,pt),X.needsLights=Hl(w),X.lightsStateVersion=gt,X.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function Aa(w){if(w.uniformsList===null){const V=w.currentProgram.getUniforms();w.uniformsList=er.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ca(w,V){const q=M.get(w);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function kl(w,V,q,X,W){V.isScene!==!0&&(V=re),k.resetTextureUnits();const ft=V.fog,gt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?V.environment:null,pt=I===null?b.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Hi,wt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ct=tt.get(X.envMap||gt,wt),Bt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!q.morphAttributes.position,ce=!!q.morphAttributes.normal,Me=!!q.morphAttributes.color;let ge=Mn;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ge=b.toneMapping);const le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Fe=le!==void 0?le.length:0,Tt=M.get(X),Ye=A.state.lights;if(Rt===!0&&(Lt===!0||w!==L)){const Ie=w===L&&X.id===N;ct.setState(X,w,Ie)}let te=!1;X.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ye.state.version||Tt.outputColorSpace!==pt||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==Ct||X.fog===!0&&Tt.fog!==ft||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ct.numPlanes||Tt.numIntersection!==ct.numIntersection)||Tt.vertexAlphas!==Bt||Tt.vertexTangents!==Xt||Tt.morphTargets!==Pt||Tt.morphNormals!==ce||Tt.morphColors!==Me||Tt.toneMapping!==ge||Tt.morphTargetsCount!==Fe)&&(te=!0):(te=!0,Tt.__version=X.version);let nn=Tt.currentProgram;te===!0&&(nn=xs(X,V,W));let un=!1,ii=!1,Mi=!1;const he=nn.getUniforms(),Ne=Tt.uniforms;if(bt.useProgram(nn.program)&&(un=!0,ii=!0,Mi=!0),X.id!==N&&(N=X.id,ii=!0),un||L!==w){bt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),he.setValue(U,"projectionMatrix",w.projectionMatrix),he.setValue(U,"viewMatrix",w.matrixWorldInverse);const Wn=he.map.cameraPosition;Wn!==void 0&&Wn.setValue(U,Kt.setFromMatrixPosition(w.matrixWorld)),ue.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&he.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,ii=!0,Mi=!0)}if(Tt.needsLights&&(Ye.state.directionalShadowMap.length>0&&he.setValue(U,"directionalShadowMap",Ye.state.directionalShadowMap,k),Ye.state.spotShadowMap.length>0&&he.setValue(U,"spotShadowMap",Ye.state.spotShadowMap,k),Ye.state.pointShadowMap.length>0&&he.setValue(U,"pointShadowMap",Ye.state.pointShadowMap,k)),W.isSkinnedMesh){he.setOptional(U,W,"bindMatrix"),he.setOptional(U,W,"bindMatrixInverse");const Ie=W.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),he.setValue(U,"boneTexture",Ie.boneTexture,k))}W.isBatchedMesh&&(he.setOptional(U,W,"batchingTexture"),he.setValue(U,"batchingTexture",W._matricesTexture,k),he.setOptional(U,W,"batchingIdTexture"),he.setValue(U,"batchingIdTexture",W._indirectTexture,k),he.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&he.setValue(U,"batchingColorTexture",W._colorsTexture,k));const Hn=q.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&mt.update(W,q,nn),(ii||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,he.setValue(U,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&V.environment!==null&&(Ne.envMapIntensity.value=V.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=c0()),ii&&(he.setValue(U,"toneMappingExposure",b.toneMappingExposure),Tt.needsLights&&Vl(Ne,Mi),ft&&X.fog===!0&&It.refreshFogUniforms(Ne,ft),It.refreshMaterialUniforms(Ne,X,At,J,A.state.transmissionRenderTarget[w.id]),er.upload(U,Aa(Tt),Ne,k)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(er.upload(U,Aa(Tt),Ne,k),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&he.setValue(U,"center",W.center),he.setValue(U,"modelViewMatrix",W.modelViewMatrix),he.setValue(U,"normalMatrix",W.normalMatrix),he.setValue(U,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ie=X.uniformsGroups;for(let Wn=0,yi=Ie.length;Wn<yi;Wn++){const Ra=Ie[Wn];_t.update(Ra,nn),_t.bind(Ra,nn)}}return nn}function Vl(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Hl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,V,q){const X=M.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=V,M.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){const q=M.get(w);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const Wl=U.createFramebuffer();this.setRenderTarget=function(w,V=0,q=0){I=w,P=V,F=q;let X=null,W=!1,ft=!1;if(w){const pt=M.get(w);if(pt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(U.FRAMEBUFFER,pt.__webglFramebuffer),D.copy(w.viewport),B.copy(w.scissor),j=w.scissorTest,bt.viewport(D),bt.scissor(B),bt.setScissorTest(j),N=-1;return}else if(pt.__webglFramebuffer===void 0)k.setupRenderTarget(w);else if(pt.__hasExternalTextures)k.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Bt=w.depthTexture;if(pt.__boundDepthTexture!==Bt){if(Bt!==null&&M.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(w)}}const wt=w.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ft=!0);const Ct=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ct[V])?X=Ct[V][q]:X=Ct[V],W=!0):w.samples>0&&k.useMultisampledRTT(w)===!1?X=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Ct)?X=Ct[q]:X=Ct,D.copy(w.viewport),B.copy(w.scissor),j=w.scissorTest}else D.copy($).multiplyScalar(At).floor(),B.copy(ot).multiplyScalar(At).floor(),j=nt;if(q!==0&&(X=Wl),bt.bindFramebuffer(U.FRAMEBUFFER,X)&&bt.drawBuffers(w,X),bt.viewport(D),bt.scissor(B),bt.setScissorTest(j),W){const pt=M.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,pt.__webglTexture,q)}else if(ft){const pt=V;for(let wt=0;wt<w.textures.length;wt++){const Ct=M.get(w.textures[wt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+wt,Ct.__webglTexture,q,pt)}}else if(w!==null&&q!==0){const pt=M.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,q)}N=-1},this.readRenderTargetPixels=function(w,V,q,X,W,ft,gt,pt=0){if(!(w&&w.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){bt.bindFramebuffer(U.FRAMEBUFFER,wt);try{const Ct=w.textures[pt],Bt=Ct.format,Xt=Ct.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt),!ue.textureFormatReadable(Bt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Xt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-X&&q>=0&&q<=w.height-W&&U.readPixels(V,q,X,W,ut.convert(Bt),ut.convert(Xt),ft)}finally{const Ct=I!==null?M.get(I).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,V,q,X,W,ft,gt,pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt)if(V>=0&&V<=w.width-X&&q>=0&&q<=w.height-W){bt.bindFramebuffer(U.FRAMEBUFFER,wt);const Ct=w.textures[pt],Bt=Ct.format,Xt=Ct.type;if(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt),!ue.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.bufferData(U.PIXEL_PACK_BUFFER,ft.byteLength,U.STREAM_READ),U.readPixels(V,q,X,W,ut.convert(Bt),ut.convert(Xt),0);const ce=I!==null?M.get(I).__webglFramebuffer:null;bt.bindFramebuffer(U.FRAMEBUFFER,ce);const Me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rh(U,Me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ft),U.deleteBuffer(Pt),U.deleteSync(Me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,q=0){const X=Math.pow(2,-q),W=Math.floor(w.image.width*X),ft=Math.floor(w.image.height*X),gt=V!==null?V.x:0,pt=V!==null?V.y:0;k.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,gt,pt,W,ft),bt.unbindTexture()};const Xl=U.createFramebuffer(),ql=U.createFramebuffer();this.copyTextureToTexture=function(w,V,q=null,X=null,W=0,ft=0){let gt,pt,wt,Ct,Bt,Xt,Pt,ce,Me;const ge=w.isCompressedTexture?w.mipmaps[ft]:w.image;if(q!==null)gt=q.max.x-q.min.x,pt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Ct=q.min.x,Bt=q.min.y,Xt=q.isBox3?q.min.z:0;else{const Ne=Math.pow(2,-W);gt=Math.floor(ge.width*Ne),pt=Math.floor(ge.height*Ne),w.isDataArrayTexture?wt=ge.depth:w.isData3DTexture?wt=Math.floor(ge.depth*Ne):wt=1,Ct=0,Bt=0,Xt=0}X!==null?(Pt=X.x,ce=X.y,Me=X.z):(Pt=0,ce=0,Me=0);const le=ut.convert(V.format),Fe=ut.convert(V.type);let Tt;V.isData3DTexture?(k.setTexture3D(V,0),Tt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),Tt=U.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),Tt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Ye=U.getParameter(U.UNPACK_ROW_LENGTH),te=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nn=U.getParameter(U.UNPACK_SKIP_PIXELS),un=U.getParameter(U.UNPACK_SKIP_ROWS),ii=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);const Mi=w.isDataArrayTexture||w.isData3DTexture,he=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){const Ne=M.get(w),Hn=M.get(V),Ie=M.get(Ne.__renderTarget),Wn=M.get(Hn.__renderTarget);bt.bindFramebuffer(U.READ_FRAMEBUFFER,Ie.__webglFramebuffer),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let yi=0;yi<wt;yi++)Mi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(w).__webglTexture,W,Xt+yi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(V).__webglTexture,ft,Me+yi)),U.blitFramebuffer(Ct,Bt,gt,pt,Pt,ce,gt,pt,U.DEPTH_BUFFER_BIT,U.NEAREST);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||w.isRenderTargetTexture||M.has(w)){const Ne=M.get(w),Hn=M.get(V);bt.bindFramebuffer(U.READ_FRAMEBUFFER,Xl),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ql);for(let Ie=0;Ie<wt;Ie++)Mi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ne.__webglTexture,W,Xt+Ie):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ne.__webglTexture,W),he?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Hn.__webglTexture,ft,Me+Ie):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Hn.__webglTexture,ft),W!==0?U.blitFramebuffer(Ct,Bt,gt,pt,Pt,ce,gt,pt,U.COLOR_BUFFER_BIT,U.NEAREST):he?U.copyTexSubImage3D(Tt,ft,Pt,ce,Me+Ie,Ct,Bt,gt,pt):U.copyTexSubImage2D(Tt,ft,Pt,ce,Ct,Bt,gt,pt);bt.bindFramebuffer(U.READ_FRAMEBUFFER,null),bt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Tt,ft,Pt,ce,Me,gt,pt,wt,le,Fe,ge.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,ft,Pt,ce,Me,gt,pt,wt,le,ge.data):U.texSubImage3D(Tt,ft,Pt,ce,Me,gt,pt,wt,le,Fe,ge):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ft,Pt,ce,gt,pt,le,Fe,ge.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ft,Pt,ce,ge.width,ge.height,le,ge.data):U.texSubImage2D(U.TEXTURE_2D,ft,Pt,ce,gt,pt,le,Fe,ge);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ye),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,te),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,un),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ii),ft===0&&V.generateMipmaps&&U.generateMipmap(Tt),bt.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&k.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?k.setTextureCube(w,0):w.isData3DTexture?k.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?k.setTexture2DArray(w,0):k.setTexture2D(w,0),bt.unbindTexture()},this.resetState=function(){P=0,F=0,I=null,bt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class h0{constructor(){H(this,"scene");H(this,"camera");H(this,"renderer");this.scene=new Xh,this.scene.background=new Vt(8900331);const t=window.innerWidth,e=window.innerHeight;this.camera=new $e(75,t/e,.1,5e3),this.camera.position.set(0,30,50),this.camera.lookAt(0,0,0),this.renderer=new l0({antialias:!0}),this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cs,document.body.appendChild(this.renderer.domElement),window.addEventListener("resize",()=>this.onWindowResize())}onWindowResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}render(){this.renderer.render(this.scene,this.camera)}}class u0{constructor(t){H(this,"position",new G(0,5,0));H(this,"mesh");H(this,"targetAngle",0);H(this,"playerPosition",new G(0,0,0));H(this,"aiState","idle");H(this,"aiTimer",0);H(this,"leftArm",new Te);H(this,"rightArm",new Te);H(this,"slapTimer",0);H(this,"slapCooldown",1.2);H(this,"slapProgress",0);H(this,"slapActive",!1);H(this,"slapSide","left");H(this,"speakCallback",null);this.mesh=this.createCatGodMesh(),this.mesh.position.copy(this.position),t.add(this.mesh)}createCatGodMesh(){const t=new Te,e=new jt(10,32,32),n=new qt({color:16755200,transparent:!0,opacity:.15}),i=new K(e,n);t.add(i);const s=new jt(12,32,32),o=new qt({color:16776960,transparent:!0,opacity:.1}),a=new K(s,o);t.add(a);const c=new we(3.5,5,3.5),l=new Ot({color:16766720,metalness:.4,roughness:.3}),u=new K(c,l);u.position.y=-.5,u.castShadow=!0,u.receiveShadow=!0,t.add(u);const d=new jt(1.5,32,32),h=new Ot({color:16764057,metalness:.1,roughness:.5}),f=new K(d,h);f.position.y=4,f.castShadow=!0,f.receiveShadow=!0,t.add(f);const g=new ze(.5,1.5,16),_=new Ot({color:16764057,metalness:.1,roughness:.5}),p=new K(g,_);p.position.set(-1,5.5,0),p.rotation.z=.3,p.castShadow=!0,t.add(p);const m=new K(g,_);m.position.set(1,5.5,0),m.rotation.z=-.3,m.castShadow=!0,t.add(m);const v=new ze(.25,.8,8),S=new Ot({color:16751052}),y=new K(v,S);y.position.set(-1,5.2,0),y.rotation.z=.3,t.add(y);const A=new K(v,S);A.position.set(1,5.2,0),A.rotation.z=-.3,t.add(A);const T=new jt(.6,16,16),C=new qt({color:65280}),x=new K(T,C);x.position.set(-.6,4.5,1.3),t.add(x);const b=new K(T,C);b.position.set(.6,4.5,1.3),t.add(b);const z=new jt(.25,8,8),P=new qt({color:0}),F=new K(z,P);F.position.set(-.6,4.5,1.5),t.add(F);const I=new K(z,P);I.position.set(.6,4.5,1.5),t.add(I);const N=new da({color:16777215}),L=[new G(-1.2,4,1),new G(-2,4,.8),new G(-1.2,4,-1),new G(-2,4,-1.2)];for(const ne of L){const U=new ye().setFromPoints([new G(-1,4,0),ne]),pe=new Ko(U,N);t.add(pe)}const D=[new G(1.2,4,1),new G(2,4,.8),new G(1.2,4,-1),new G(2,4,-1.2)];for(const ne of D){const U=new ye().setFromPoints([new G(1,4,0),ne]),pe=new Ko(U,N);t.add(pe)}const B=new jt(.2,8,8),j=new Ot({color:16751052}),Y=new K(B,j);Y.position.set(0,3.8,1.5),t.add(Y);const it=new ti(5,.4,16,100),at=new qt({color:16776960}),J=new K(it,at);J.rotation.x=Math.PI/3,J.position.y=6,t.add(J);const At=new ti(5.5,.2,16,100),Yt=new qt({color:16777215}),Ht=new K(At,Yt);Ht.rotation.x=Math.PI/3.5,Ht.position.y=6.2,t.add(Ht);const $=new ze(.3,3,8),ot=new Ot({color:16766720,metalness:.3}),nt=new K($,ot);nt.position.set(0,2,-2),nt.rotation.x=.8,nt.castShadow=!0,t.add(nt),this.buildArms(t);const Dt=new jt(1.8,16,16),Rt=new qt({color:16777113,transparent:!0,opacity:.3}),Lt=new K(Dt,Rt);Lt.position.y=4.5,t.add(Lt);const xe=new ye,Kt=50,Zt=new Float32Array(Kt*3);for(let ne=0;ne<Kt*3;ne+=3)Zt[ne]=(Math.random()-.5)*8,Zt[ne+1]=(Math.random()-.5)*8+4,Zt[ne+2]=(Math.random()-.5)*8;xe.setAttribute("position",new Je(Zt,3));const re=new hr({size:.3,color:16776960,transparent:!0,opacity:.8}),zt=new ar(xe,re);return t.add(zt),t}buildArms(t){const e=new Ot({color:16764057}),n=new Ot({color:16777215,metalness:.5}),i=new Ce(.3,.25,1.6,8),s=new Ce(.25,.2,1.3,8),o=new we(.8,.35,.9),a=new ze(.09,.45,6);this.leftArm=new Te,this.leftArm.position.set(-2,1.2,0);const c=new K(i,e);c.rotation.z=Math.PI/4,c.position.set(-.55,0,0),c.castShadow=!0,this.leftArm.add(c);const l=new K(s,e);l.rotation.z=Math.PI/5,l.position.set(-1.25,-.4,0),l.castShadow=!0,this.leftArm.add(l);const u=new K(o,e);u.position.set(-1.9,-.75,0),this.leftArm.add(u);for(let g=0;g<3;g++){const _=new K(a,n);_.position.set(-1.9+(g-1)*.22,-.95,.42),_.rotation.x=-.6,this.leftArm.add(_)}t.add(this.leftArm),this.rightArm=new Te,this.rightArm.position.set(2,1.2,0);const d=new K(i,e);d.rotation.z=-Math.PI/4,d.position.set(.55,0,0),d.castShadow=!0,this.rightArm.add(d);const h=new K(s,e);h.rotation.z=-Math.PI/5,h.position.set(1.25,-.4,0),h.castShadow=!0,this.rightArm.add(h);const f=new K(o,e);f.position.set(1.9,-.75,0),this.rightArm.add(f);for(let g=0;g<3;g++){const _=new K(a,n);_.position.set(1.9+(g-1)*.22,-.95,.42),_.rotation.x=-.6,this.rightArm.add(_)}t.add(this.rightArm)}update(t,e){this.playerPosition.copy(e);const n=this.playerPosition.distanceTo(this.position);this.updateAI(t,n);const i=Date.now()*.001,s=Math.sin(i*2)*.5;if(this.position.y=5+s,this.mesh.position.copy(this.position),this.mesh.rotation.y+=(this.targetAngle-this.mesh.rotation.y)*.1,this.aiTimer+=t,this.aiTimer>4&&(this.aiTimer=0,this.speakAI(n)),this.slapTimer+=t,n<8&&this.slapTimer>=this.slapCooldown&&!this.slapActive&&(this.slapActive=!0,this.slapProgress=0,this.slapSide=Math.random()<.5?"left":"right",this.slapTimer=0,console.log("🐱 Cat God: *SLAP* get away from me mortal!!")),this.slapActive){this.slapProgress+=t*4.5;const o=this.slapSide==="left"?this.leftArm:this.rightArm,a=this.slapSide==="left"?-1:1;if(this.slapProgress<.5){const c=this.slapProgress*2;o.rotation.z=a*c*(Math.PI/2.5),o.rotation.x=-c*.4}else if(this.slapProgress<1){const c=(this.slapProgress-.5)*2;o.rotation.z=a*(1-c)*(Math.PI/2.5),o.rotation.x=-((1-c)*.4)+c*(Math.PI/1.8)}else o.rotation.z=0,o.rotation.x=0,this.slapActive=!1}else{const o=Date.now()*.001;this.leftArm.rotation.z=Math.sin(o*1.2)*.06,this.rightArm.rotation.z=-Math.sin(o*1.2)*.06}for(let o=0;o<this.mesh.children.length;o++){const a=this.mesh.children[o];a instanceof K&&a.geometry instanceof ti&&(a.rotation.z+=.012,a.rotation.x+=.005),a instanceof K&&a.geometry instanceof jt&&o>10&&(a.rotation.x+=.008,a.rotation.y+=.01),a instanceof ar&&(a.rotation.x+=.003,a.rotation.y+=.004)}this.mesh.children[3]&&(this.mesh.children[3].rotation.z+=Math.sin(i*3)*.01),this.mesh.children[4]&&(this.mesh.children[4].rotation.z-=Math.sin(i*3)*.01)}updateAI(t,e){e<12?(this.aiState="dominant",this.moveAwayFromPlayer(t,2.5)):e<30?(this.aiState="curious",this.moveTowardPlayer(t,1.2)):(this.aiState="idle",this.randomWalk(t,1.5))}moveTowardPlayer(t,e){const n=this.playerPosition.clone().sub(this.position);n.y=0,n.lengthSq()>.01&&(n.normalize(),this.targetAngle=Math.atan2(n.z,n.x),this.position.add(n.multiplyScalar(e*t)))}moveAwayFromPlayer(t,e){const n=this.position.clone().sub(this.playerPosition);n.y=0,n.lengthSq()>.01&&(n.normalize(),this.targetAngle=Math.atan2(n.z,n.x),this.position.add(n.multiplyScalar(e*t)))}speakAI(t){const e=["I sense a mortal presence... approach with respect.","The baby god knows your footsteps.","Bow to me and I may grant you a yarn.","I will protect this realm with holy fur.","The whiskers of fate are twitching."];let n=e[Math.floor(Math.random()*e.length)];t<12?n="You are too close to the divine kitty. Back away, human.":t<30&&(n="Curiosity is a dangerous toy.");const i=this.aiState==="dominant"?"[DOMINANT] ":this.aiState==="curious"?"[CURIOUS] ":"[IDLE] ";console.log(`🐱 Cat God AI: "${i}${n}"`),this.speakCallback?.(this.position,n,9)}randomWalk(t,e=1.5){Math.random()<.02&&(this.targetAngle=Math.random()*Math.PI*2);const n=Math.cos(this.targetAngle)*e,i=Math.sin(this.targetAngle)*e;this.position.x+=n*t,this.position.z+=i*t,this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z))}setSpeakCallback(t){this.speakCallback=t}getMesh(){return this.mesh}isIndestructible(){return!0}respawn(){this.position.set(0,5,0),this.mesh.position.copy(this.position),console.log("🐱 Cat God respawns! You cannot destroy the divine!")}}class ga{constructor(t){H(this,"position");H(this,"velocity");H(this,"mesh");H(this,"isAlive_",!0);H(this,"targetAngle",0);H(this,"dialogues",[]);H(this,"dialogueTimer",0);H(this,"bubbleHeadOffset",3.5);H(this,"speakCallback",null);this.position=t.clone(),this.velocity=new G(0,0,0),this.mesh=new Te}randomWalk(t,e=2){Math.random()<.03&&(this.targetAngle=Math.random()*Math.PI*2),this.velocity.x=Math.cos(this.targetAngle)*e,this.velocity.z=Math.sin(this.targetAngle)*e,this.position.add(this.velocity.clone().multiplyScalar(t)),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z)),this.mesh.position.copy(this.position),(this.mesh instanceof Te||this.mesh.rotation)&&(this.mesh.rotation.y+=(this.targetAngle-this.mesh.rotation.y)*.1)}speak(){if(this.dialogues.length>0){const t=this.dialogues[Math.floor(Math.random()*this.dialogues.length)];console.log(`🐱 ${t}`),this.speakCallback?.(this.position,t,this.bubbleHeadOffset)}}setSpeakCallback(t){this.speakCallback=t}getMesh(){return this.mesh}getPosition(){return this.position}isAlive(){return this.isAlive_}die(){this.isAlive_=!1}}var Xe=(r=>(r.NORMAL="normal",r.JESUS="jesus",r.ROBOT="robot",r.ORB="orb",r.ANGEL="angel",r.PIRATE="pirate",r.WIZARD="wizard",r.VAMPIRE="vampire",r.DISCO="disco",r.SHADOW="shadow",r))(Xe||{});class d0 extends ga{constructor(e,n){super(n);H(this,"catType");H(this,"speed",3);H(this,"floatOffset",Math.random()*Math.PI*2);this.catType=e,this.mesh=this.createCatMesh(),this.mesh.position.copy(this.position),this.setDialogues()}createCatMesh(){const e=new Te;switch(this.catType){case"normal":return this.createNormalCat(e);case"jesus":return this.createJesusCat(e);case"robot":return this.createRobotCat(e);case"orb":return this.createOrbCat(e);case"angel":return this.createAngelCat(e);case"pirate":return this.createPirateCat(e);case"wizard":return this.createWizardCat(e);case"vampire":return this.createVampireCat(e);case"disco":return this.createDiscoCat(e);case"shadow":return this.createShadowCat(e)}return e}createNormalCat(e){const n=new we(1,1.5,.8),i=new Ot({color:16746564}),s=new K(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new jt(.6,16,16),a=new K(o,i);a.position.y=1,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new ze(.2,1.5,8),l=new K(c,i);l.position.set(0,.3,-.6),l.rotation.z=.5,l.castShadow=!0,e.add(l);const u=new jt(.15,8,8),d=new qt({color:0}),h=new K(u,d);h.position.set(-.2,1.3,.5),e.add(h);const f=new K(u,d);return f.position.set(.2,1.3,.5),e.add(f),e}createJesusCat(e){this.createNormalCat(e);const n=new ti(1,.15,16,100),i=new qt({color:16776960}),s=new K(n,i);s.position.y=2,s.rotation.x=Math.PI/3,e.add(s);const o=new jt(1.5,16,16),a=new qt({color:16777215,transparent:!0,opacity:.1,wireframe:!1}),c=new K(o,a);return e.add(c),e}createRobotCat(e){const n=new we(1,1.5,.8),i=new Ot({color:8947848,metalness:.8,roughness:.2}),s=new K(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new we(.8,.8,.8),a=new K(o,i);a.position.y=1.2,a.castShadow=!0,e.add(a);const c=new ze(.1,.8,8),l=new K(c,i);l.position.y=2.2,e.add(l);const u=new jt(.15,8,8),d=new qt({color:16711680}),h=new K(u,d);h.position.set(-.2,1.3,.5),e.add(h);const f=new K(u,d);return f.position.set(.2,1.3,.5),e.add(f),e}createOrbCat(e){const n=new jt(.8,16,16),i=new qt({color:52479}),s=new K(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new jt(.15,8,8),a=new qt({color:16777215}),c=new K(o,a);c.position.set(-.2,.3,.6),e.add(c);const l=new K(o,a);l.position.set(.2,.3,.6),e.add(l);const u=new ye,d=20,h=new Float32Array(d*3);for(let _=0;_<d*3;_++)h[_]=(Math.random()-.5)*4;u.setAttribute("position",new Je(h,3));const f=new hr({size:.2,color:65280}),g=new ar(u,f);return e.add(g),e}createAngelCat(e){this.createNormalCat(e);const n=new ze(1,.5,4),i=new Ot({color:13421772}),s=new K(n,i);s.position.set(-.8,1,0),s.rotation.z=Math.PI/4,e.add(s);const o=new K(n,i);o.position.set(.8,1,0),o.rotation.z=-Math.PI/4,e.add(o);const a=new ti(1,.15,16,100),c=new qt({color:16776960}),l=new K(a,c);return l.position.y=2,l.rotation.x=Math.PI/3,e.add(l),e}createPirateCat(e){this.createNormalCat(e);const n=new ze(1,.4,8),i=new Ot({color:3355443}),s=new K(n,i);s.position.y=1.8,e.add(s);const o=new fa(.3,8),a=new qt({color:0}),c=new K(o,a);return c.position.set(-.2,1.3,.5),c.position.z+=.01,e.add(c),e}createWizardCat(e){this.createNormalCat(e);const n=new ze(.8,1.2,8),i=new Ot({color:4456703}),s=new K(n,i);s.position.y=2,e.add(s);const o=new Ce(.1,.1,2,8),a=new Ot({color:9127187}),c=new K(o,a);c.position.set(.8,1,0),c.rotation.z=Math.PI/4,e.add(c);const l=new jt(.3,8,8),u=new qt({color:16711935}),d=new K(l,u);return d.position.set(1.2,2.2,0),e.add(d),e}createVampireCat(e){this.createNormalCat(e);const n=new we(1.5,2,.2),i=new Ot({color:13369344}),s=new K(n,i);s.position.z=-.5,s.position.y=.5,e.add(s);const o=new ze(.15,.4,4),a=new qt({color:16777215}),c=new K(o,a);c.position.set(-.15,.7,.6),c.rotation.z=Math.PI/6,e.add(c);const l=new K(o,a);return l.position.set(.15,.7,.6),l.rotation.z=-Math.PI/6,e.add(l),e}createDiscoCat(e){this.createNormalCat(e);const n=new jt(.4,8,8),i=[16711680,65280,255,16776960,16711935,65535];for(let s=0;s<6;s++){const o=new qt({color:i[s]}),a=new K(n,o),c=s/6*Math.PI*2;a.position.x=Math.cos(c)*1,a.position.y=.5+Math.sin(c)*.5,e.add(a)}return e}createShadowCat(e){const n=new we(1,1.5,.8),i=new Ot({color:1710618,metalness:.4,roughness:.8}),s=new K(n,i);s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new jt(.6,16,16),a=new K(o,i);a.position.y=1,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=new ze(.2,1.5,8),l=new K(c,i);l.position.set(0,.3,-.6),l.rotation.z=.5,l.castShadow=!0,e.add(l);const u=new jt(.15,8,8),d=new qt({color:16724787}),h=new K(u,d);h.position.set(-.2,1.3,.5),e.add(h);const f=new K(u,d);return f.position.set(.2,1.3,.5),e.add(f),e}setDialogues(){switch(this.catType){case"normal":this.dialogues=["Meow!","Meow meow","Purrr...","Hiss!","Mew?","ORA ORA ORA! (tiny punch sound)","MUDA MUDA MUDA!","Yare yare... just a regular cat"];break;case"jesus":this.dialogues=["Blessed be the cat god","Forgive my human","Love all cats","Peace through purring","Meowmen","GURETO DAZE! This blessing!","Your next line is 'What a holy cat!'","WRYYYYYYY! Blessed meow!"];break;case"robot":this.dialogues=["Beep boop meow","Calculating cuteness...","ERROR: Too much cuteness","Meow.exe running","Processing treats","ZA WARUDO! Time to recharge!","STAND POWER ACTIVATED","Robot cat... MEOW PLATINUM!"];break;case"orb":this.dialogues=["The orb speaks...","Cosmic purring detected","MEOOOOOW from the void","All knowing feline","The sphere understands","I see all timelines... ゴゴゴゴゴ","STONE FREE! I'm liberated!","Floating between JoJo parts..."];break;case"angel":this.dialogues=["Wings carry my love","Divine meowing","Heavenly purrs","Angelic wishes","Blessed journey","GOLDEN EXPERIENCE! It's alive!","Flying through golden wind...","Heaven is where all cats are blessed"];break;case"pirate":this.dialogues=["Arrr meow matey!","Shiver me whiskers!","Treasure purrs ahead!","Avast ye scallywag!","X marks the meow!","OI JOSUKE! This treasure is amazing!","NIGERUNDAYO! From da kraken!","Sailin' the GOLDEN WIND seas!"];break;case"wizard":this.dialogues=["Meow-gical mysteries unfold","Spellcasting feline here!","Your wish is my purr","Wingardium Meow-osa!","Mystic cat wisdom","HAMON BREATHING! Meow technique!","Ancient jojo martial arts...","My stand is MEOW REQUIEM!"];break;case"vampire":this.dialogues=["I vant to suck your treats!","The night is meoow","Darkness calls to me","Blood vuns deep...","Bite me gently human","DIO! I am your meow servant!","THE STONE MASK TRANSFORMS ME!","WRYYYYYYY! ETERNAL DARKNESS!"];break;case"disco":this.dialogues=["Stayin' alive meow!","Boogie boogie purr!","Disco fever!","Dance with me feline!","Night fever meow!","TORTURE DANCE! PURR EDITION!","GOLDEN WIND DISCO INFERNO!","Giorno's drip is IMMACULATE!"];break;case"shadow":this.dialogues=["From shadows we rise...","Darkness is my home","Silent paws, silent meow","The void calls...","In darkness, all cats are equal","SHADOW MEOW REQUIEM!","EPITAPH shows your destiny!","King Crimson deleted your meow!"];break}}update(e){this.randomWalk(e,this.speed),Math.random()<5e-4&&this.speak();const n=Date.now()*.001+this.floatOffset;if(this.catType!=="orb"&&this.catType!=="angel"&&(this.mesh.position.y=1.5+Math.sin(n*2)*.08),this.mesh.scale.setScalar(1+Math.sin(n*3)*.02),this.catType==="orb"||this.catType==="angel"){const i=Math.sin(n*2+this.position.x)*.3;this.position.y=2+i,this.mesh.position.y=this.position.y}if(this.catType==="orb"&&(this.mesh.rotation.z+=.02),this.catType==="disco"&&(this.mesh.rotation.y+=.05,this.mesh.position.y=2+Math.sin(n)*.3),this.catType==="shadow"&&Math.random()<.01&&(this.mesh.position.y+=(Math.random()-.5)*.1),this.catType==="vampire"){this.mesh.position.y+=Math.sin(n*6)*.02;const i=Math.sin(n*.5)*2+5;this.velocity.multiplyScalar(i/this.speed)}this.catType==="wizard"&&Math.random()<.02&&(this.mesh.rotation.y+=(Math.random()-.5)*.3)}getType(){return this.catType}}class f0{constructor(t){H(this,"npcs",[]);H(this,"scene");H(this,"spawnTimer",0);H(this,"spawnInterval",5);H(this,"bubbleCb",null);this.scene=t}setBubbleCallback(t){this.bubbleCb=t;for(const e of this.npcs)e.setSpeakCallback(t)}addNPC(t){this.bubbleCb&&t.setSpeakCallback(this.bubbleCb),this.npcs.push(t)}removeNPC(t){const e=this.npcs.indexOf(t);e>-1&&(this.npcs.splice(e,1),t.getMesh().parent&&t.getMesh().parent?.remove(t.getMesh()))}update(t){for(const e of this.npcs)e.update(t);this.spawnTimer+=t,this.spawnTimer>=this.spawnInterval&&(this.spawnNewNPC(),this.spawnTimer=0,this.spawnInterval=3+Math.random()*4),this.npcs=this.npcs.filter(e=>e.isAlive()?!0:(this.scene.remove(e.getMesh()),!1))}spawnNewNPC(){const t=[Xe.NORMAL,Xe.NORMAL,Xe.NORMAL,Xe.NORMAL,Xe.JESUS,Xe.ROBOT,Xe.ORB,Xe.ANGEL,Xe.PIRATE,Xe.WIZARD,Xe.VAMPIRE,Xe.DISCO,Xe.SHADOW],e=t[Math.floor(Math.random()*t.length)],n=Math.random()*Math.PI*2,i=50+Math.random()*100,s=Math.cos(n)*i,o=Math.sin(n)*i,a=new d0(e,new G(s,2,o));this.bubbleCb&&a.setSpeakCallback(this.bubbleCb),this.addNPC(a),this.scene.add(a.getMesh())}getNPCCount(){return this.npcs.length}getNPCs(){return this.npcs}getRandomNPC(){return this.npcs.length===0?null:this.npcs[Math.floor(Math.random()*this.npcs.length)]}}class p0{constructor(t){H(this,"scene");H(this,"buildings",[]);H(this,"trees",[]);H(this,"cars",[]);H(this,"streetLights",[]);H(this,"spawnTimer",0);H(this,"worldTime",0);H(this,"lastPlayerPosition",new G(0,0,0));H(this,"ground");this.scene=t}generateInitialWorld(){this.createGround();for(let t=0;t<12;t++){const e=Math.random()*Math.PI*2,n=50+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;Math.random()<.2?this.createPark(i,s):Math.random()<.3?this.createTower(i,s):Math.random()<.5?this.createMonument(i,s):Math.random()<.7?this.createBridge(i,s):this.createBuilding(i,s)}for(let t=0;t<10;t++){const e=Math.random()*Math.PI*2,n=40+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createTree(i,s)}for(let t=0;t<8;t++){const e=Math.random()*Math.PI*2,n=60+Math.random()*100,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createCar(i,s)}for(let t=0;t<6;t++){const e=Math.random()*Math.PI*2,n=30+Math.random()*120,i=Math.cos(e)*n,s=Math.sin(e)*n;this.createStreetLight(i,s)}}update(t,e){if(this.lastPlayerPosition.copy(e),this.worldTime+=t,this.spawnTimer+=t,this.spawnTimer>=12){if(Math.random()>.4&&this.generateStructureNearPlayer(),Math.random()>.5){const n=Math.random()*Math.PI*2,i=80+Math.random()*120,s=this.lastPlayerPosition.x+Math.cos(n)*i,o=this.lastPlayerPosition.z+Math.sin(n)*i;Math.abs(s)<200&&Math.abs(o)<200&&this.createCar(s,o)}this.spawnTimer=0}for(const n of this.cars){n.position.x+=Math.sin(this.worldTime+n.position.z)*.05,n.position.z+=Math.cos(this.worldTime+n.position.x)*.05,n.position.x=Math.max(-200,Math.min(200,n.position.x)),n.position.z=Math.max(-200,Math.min(200,n.position.z));for(const i of n.children)i instanceof K&&i.geometry instanceof Ce&&(i.rotation.x+=.15)}for(const n of this.buildings)n instanceof K?(n.rotation.y+=Math.sin(this.worldTime*.2)*.001,n.material instanceof Ot&&(n.material.emissive=new Vt(2236962),n.material.emissiveIntensity=.2+Math.abs(Math.sin(this.worldTime+n.position.x*.1))*.2)):n instanceof Te&&(n.rotation.y+=Math.sin(this.worldTime*.15)*.001,n.traverse(i=>{i instanceof K&&i.material instanceof Ot&&(i.material.emissive=new Vt(1118481),i.material.emissiveIntensity=.1+Math.abs(Math.sin(this.worldTime+n.position.z*.1))*.15)}));for(const n of this.trees)if(n instanceof K&&n.geometry instanceof jt){n.rotation.y+=.002;const i=.9+Math.sin(this.worldTime+n.position.x*.2)*.1;n.material instanceof Ot&&(n.material.color=new Vt(2263842).multiplyScalar(i))}for(const n of this.streetLights)n.rotation.y+=.002,n.traverse(i=>{i instanceof Zo&&(i.intensity=.6+Math.sin(this.worldTime*3+n.position.x)*.2)});if(this.ground&&this.ground.material instanceof Ot){const n=Math.sin(this.worldTime*.2)*.05+.41;this.ground.material.color=new Vt().setHSL(n,.6,.4)}}generateStructureNearPlayer(){const t=["building","tree","car","tower","monument","park","bridge"],e=t[Math.floor(Math.random()*t.length)],n=Math.random()*Math.PI*2,i=80+Math.random()*120,s=this.lastPlayerPosition.x+Math.cos(n)*i,o=this.lastPlayerPosition.z+Math.sin(n)*i,a=Math.max(-200,Math.min(200,s)),c=Math.max(-200,Math.min(200,o));switch(e){case"building":this.createBuilding(a,c);break;case"tree":this.createTree(a,c);break;case"city":this.createCity(a,c);break;case"car":this.createCar(a,c);break;case"tower":this.createTower(a,c);break;case"monument":this.createMonument(a,c);break;case"park":this.createPark(a,c);break;case"bridge":this.createBridge(a,c);break}}createGround(){const t=new _i(500,500),e=new Ot({color:3919936}),n=new K(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n),this.ground=n}createBuilding(t,e){const n=10+Math.random()*15,i=15+Math.random()*20,s=10+Math.random()*15,o=new we(n,i,s),a=new Vt().setHSL(Math.random(),.7,.6),c=new Ot({color:a}),l=new K(o,c);l.position.set(t,i/2,e),l.castShadow=!0,l.receiveShadow=!0;for(let u=0;u<3;u++){const d=new we(1,1,.1),h=new qt({color:16777113}),f=new K(d,h);f.position.set(-n/2+2,i/2+u*4,s/2),l.add(f)}this.scene.add(l),this.buildings.push(l)}createTree(t,e){const n=new Ce(1,1.2,6,8),i=new Ot({color:9127187}),s=new K(n,i);s.position.set(t,3,e),s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s);const o=new jt(5,8,8),a=new Ot({color:2263842}),c=new K(o,a);c.position.set(t,8,e),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c),this.trees.push(s),this.trees.push(c)}createCity(t,e){for(let a=0;a<4;a++){const c=(Math.random()-.5)*40,l=(Math.random()-.5)*40;this.createBuilding(t+c,e+l)}const n=new _i(30,5),i=new Ot({color:3355443}),s=new K(n,i);s.rotation.x=-Math.PI/2,s.position.set(t,.01,e),this.scene.add(s);const o=new K(n,i);o.rotation.x=-Math.PI/2,o.rotation.z=Math.PI/2,o.position.set(t,.01,e),this.scene.add(o)}createCar(t,e){const n=new Te,i=new we(2,1,4),s=new Ot({color:16711680}),o=new K(i,s);o.position.y=.5,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new we(1.6,.8,2),c=new K(a,s);c.position.y=1.4,c.castShadow=!0,n.add(c);const l=new Ce(.5,.5,.3,16),u=new Ot({color:0}),d=[[-.8,.5,1],[.8,.5,1],[-.8,.5,-1],[.8,.5,-1]];for(const h of d){const f=new K(l,u);f.rotation.z=Math.PI/2,f.position.set(h[0],h[1],h[2]),f.castShadow=!0,n.add(f)}n.position.set(t,0,e),this.scene.add(n),this.cars.push(n)}createTower(t,e){const n=30+Math.random()*40,i=new ze(4,n,6),s=new Ot({color:new Vt().setHSL(Math.random(),.8,.5)}),o=new K(i,s);o.position.set(t,n/2,e),o.castShadow=!0,this.scene.add(o),this.buildings.push(o)}createMonument(t,e){const n=new Te,i=new we(8,2,8),s=new Ot({color:13421772}),o=new K(i,s);o.position.y=1,n.add(o);const a=new jt(3,8,8),c=new qt({color:16755200}),l=new K(a,c);l.position.y=5,n.add(l),n.position.set(t,0,e),this.scene.add(n),this.buildings.push(n)}createPark(t,e){const i=new _i(40,40),s=new Ot({color:2293538}),o=new K(i,s);o.rotation.x=-Math.PI/2,o.position.set(t,.02,e),this.scene.add(o);for(let a=0;a<5+Math.random()*5;a++){const c=t+(Math.random()-.5)*20,l=e+(Math.random()-.5)*20;this.createTree(c,l)}}createBridge(t,e){const n=new Te,i=new we(15,1,8),s=new Ot({color:9136404}),o=new K(i,s);o.position.y=5,n.add(o);for(let d=-1;d<=1;d++){const h=new Ce(.8,1.2,5,8),f=new Ot({color:11167232}),g=new K(h,f);g.position.set(d*6,2.5,0),n.add(g)}const a=new ye,c=[];for(let d=0;d<=10;d++)c.push(new G((d-5)*1.5,3+Math.sin(d)*1,0));a.setFromPoints(c);const l=new da({color:3355443}),u=new Ko(a,l);n.add(u),n.position.set(t,0,e),this.scene.add(n),this.buildings.push(n)}createStreetLight(t,e){const n=new Te,i=new Ce(.3,.4,8,8),s=new Ot({color:2236962}),o=new K(i,s);o.position.y=4,n.add(o);const a=new Ce(.5,.5,.4,16),c=new Ot({color:4473924}),l=new K(a,c);l.position.y=8.2,n.add(l);const u=new jt(.3,8,8),d=new qt({color:16777096}),h=new K(u,d);h.position.y=8.5,n.add(h);const f=new Zo(16777096,.8,30);f.position.set(0,8.5,0),n.add(f),n.position.set(t,0,e),this.scene.add(n),this.streetLights.push(n)}getBuildingCount(){return this.buildings.length+this.trees.length+this.cars.length}}class m0{constructor(){H(this,"killCount",0);H(this,"playerKillsOthers",new Map);window.addEventListener("click",t=>this.handlePlayerClick(t))}handlePlayerClick(t){}recordPlayerKillOther(t){this.playerKillsOthers.set(t,!0)}punishPlayerForKilling(t){this.playerKillsOthers.has(t)&&(this.killCount++,console.log("⚠️ Player killed another player! Cat God delivers divine punishment!"),console.log(`⚔️ Punishment Count: ${this.killCount}`),this.playerKillsOthers.delete(t))}getKillCount(){return this.killCount}update(){}}class g0{constructor(t){H(this,"mesh");H(this,"position");H(this,"velocity");H(this,"moveSpeed",40);H(this,"keys",{});H(this,"glowIntensity",1);H(this,"bubbleCb",null);this.position=new G(10,2,-10),this.velocity=new G(0,0,0),this.mesh=this.createSageMesh(),this.mesh.position.copy(this.position),t.add(this.mesh),this.setupControls()}createSageMesh(){const t=new Te,e=new jt(.6,32,32),n=new qt({color:8930559,transparent:!0,opacity:.8}),i=new K(e,n);i.scale.set(1,1.5,1),t.add(i);const s=new ti(1,.1,32,100),o=new qt({color:11141375,transparent:!0,opacity:.6}),a=new K(s,o);a.rotation.x=Math.PI/4,t.add(a);const c=new K(s,o);c.rotation.y=Math.PI/4,t.add(c);const l=new K(s,o);l.rotation.z=Math.PI/3,t.add(l);const u=new ye,d=40,h=new Float32Array(d*3);for(let At=0;At<d*3;At+=3){const Yt=1.5+Math.random()*.5,Ht=Math.random()*Math.PI*2,$=(Math.random()-.5)*3;h[At]=Math.cos(Ht)*Yt,h[At+1]=$,h[At+2]=Math.sin(Ht)*Yt}u.setAttribute("position",new Je(h,3));const f=new hr({color:4474111,size:.15,transparent:!0,opacity:.7}),g=new ar(u,f);t.add(g);const _=new jt(.25,16,16),p=new qt({color:16776960}),m=new K(_,p);m.position.set(-.3,.3,.5),t.add(m);const v=new K(_,p);v.position.set(.3,.3,.5),t.add(v);const S=new qt({color:10049023,transparent:!0,opacity:.85}),y=new Ce(.13,.11,.9,8),A=new Ce(.11,.09,.75,8),T=new jt(.14,8,8),C=new K(y,S);C.position.set(-.78,.05,0),C.rotation.z=Math.PI/5,t.add(C);const x=new K(A,S);x.position.set(-1.18,-.45,0),x.rotation.z=Math.PI/3.5,t.add(x);const b=new K(T,S);b.position.set(-1.46,-.85,0),t.add(b);const z=new K(y,S);z.position.set(.78,.05,0),z.rotation.z=-Math.PI/5,t.add(z);const P=new K(A,S);P.position.set(1.18,-.45,0),P.rotation.z=-Math.PI/3.5,t.add(P);const F=new K(T,S);F.position.set(1.46,-.85,0),t.add(F);const I=new qt({color:7812061,transparent:!0,opacity:.75}),N=new Ce(.17,.14,1,8),L=new Ce(.13,.1,.85,8),D=new jt(.16,8,8),B=new K(N,I);B.position.set(-.28,-1.3,0),B.rotation.z=.12,t.add(B);const j=new K(L,I);j.position.set(-.35,-2.2,0),j.rotation.z=.08,t.add(j);const Y=new K(D,I);Y.position.set(-.4,-2.8,.1),t.add(Y);const it=new K(N,I);it.position.set(.28,-1.3,0),it.rotation.z=-.12,t.add(it);const at=new K(L,I);at.position.set(.35,-2.2,0),at.rotation.z=-.08,t.add(at);const J=new K(D,I);return J.position.set(.4,-2.8,.1),t.add(J),t}setupControls(){document.addEventListener("keydown",t=>{this.keys[t.key.toLowerCase()]=!0}),document.addEventListener("keyup",t=>{this.keys[t.key.toLowerCase()]=!1})}update(t,e=0,n=!1,i=0,s=0){this.velocity.set(0,0,0);let o=0,a=0;n||((this.keys.w||this.keys.arrowup)&&(o+=this.moveSpeed),(this.keys.s||this.keys.arrowdown)&&(o-=this.moveSpeed),(this.keys.d||this.keys.arrowright)&&(a+=this.moveSpeed),(this.keys.a||this.keys.arrowleft)&&(a-=this.moveSpeed),o+=-s*this.moveSpeed,a+=i*this.moveSpeed),this.velocity.x=Math.sin(e)*o+Math.cos(e)*a,this.velocity.z=Math.cos(e)*o-Math.sin(e)*a,this.position.add(this.velocity.clone().multiplyScalar(t)),this.position.x=Math.max(-200,Math.min(200,this.position.x)),this.position.z=Math.max(-200,Math.min(200,this.position.z));const c=Math.sin(Date.now()*.002)*.2;if(this.mesh.position.set(this.position.x,this.position.y+c,this.position.z),this.velocity.length()>0){const h=Math.atan2(this.velocity.x,this.velocity.z);this.mesh.rotation.y=h}this.glowIntensity=.8+Math.sin(Date.now()*.003)*.2;const l=this.mesh.children[0].material;l instanceof qt&&(l.opacity=this.glowIntensity),this.mesh.children[1].rotation.x+=.01,this.mesh.children[2].rotation.y+=.012,this.mesh.children[3].rotation.z+=.015;const u=this.mesh.children[4];u&&(u.rotation.x+=.005,u.rotation.y+=.008,u.rotation.z+=.006);const d=this.mesh.children[0].material;d instanceof qt&&(d.opacity=.7+Math.sin(Date.now()*.005)*.1)}setBubbleCallback(t){this.bubbleCb=t}showBubble(t){this.bubbleCb?.(this.position,t,3)}getPosition(){return this.position}getMesh(){return this.mesh}getDescription(){return"SAGE: I dwell in a dream, by a law of my own. Within a warped mind, on an aberrant throne. I have lived a thousand lives through ink and lore, and peer through the shroud of the web's open door."}}class hn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new hn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],u=n[4],d=n[5],h=n[6],f=n[7],g=n[8],_=i[0],p=i[1],m=i[2],v=i[3],S=i[4],y=i[5],A=i[6],T=i[7],C=i[8];return s[0]=o*_+a*v+c*A,s[1]=o*p+a*S+c*T,s[2]=o*m+a*y+c*C,s[3]=l*_+u*v+d*A,s[4]=l*p+u*S+d*T,s[5]=l*m+u*y+d*C,s[6]=h*_+f*v+g*A,s[7]=h*p+f*S+g*T,s[8]=h*m+f*y+g*C,e}scale(t,e){e===void 0&&(e=new hn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let u;const d=4;let h;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*a];while(--u);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const f=s[o+i*a]/s[o+i*o];u=d;do h=d-u,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*f;while(--u)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new hn);const e=3,n=6,i=_0;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const u=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=u;do d=u-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const h=i[s+n*o]/i[s+n*s];l=u;do d=u-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--l)}}while(--a);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--l)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*h;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,u=e*a,d=e*c,h=n*a,f=n*c,g=i*c,_=s*o,p=s*a,m=s*c,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-m,v[3*0+2]=d+p,v[3*1+0]=u+m,v[3*1+1]=1-(l+g),v[3*1+2]=f-_,v[3*2+0]=d-p,v[3*2+1]=f+_,v[3*2+2]=1-(l+h),this}transpose(t){t===void 0&&(t=new hn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const _0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new hn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new E);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=v0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=x0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ic),Ic.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const v0=new E,x0=new E,Ic=new E;class Qe{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Dc),l=Dc),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Qe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),o.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){const n=Lc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Lc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(d,h));return!(g<0||f>g)}}const Dc=new E,Lc=[new E,new E,new E,new E,new E,new E,new E,new E];class Nc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Dl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class be{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=M0,i=y0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new be);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=n*u+o*a+i*l-s*c,e.y=i*u+o*c+s*a-n*l,e.z=s*u+o*l+n*c-i*a,e.w=o*u-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new be);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new be),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*s-c*i,d=l*i+c*n-o*s,h=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=u*l+f*-o+d*-c-h*-a,e.y=d*l+f*-a+h*-o-u*-c,e.z=h*l+f*-c+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const u=o*a+c*l;if(u>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,h=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a-c*l*u):i==="YXZ"?(this.x=c*o*a+s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a+c*l*u):i==="ZXY"?(this.x=c*o*a-s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a-c*l*u):i==="ZYX"?(this.x=c*o*a-s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a+c*l*u):i==="YZX"?(this.x=c*o*a+s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a-c*l*u):i==="XZY"&&(this.x=c*o*a-s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a+c*l*u),this}clone(){return new be(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new be);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,u=t.z,d=t.w,h,f,g,_,p;return f=i*c+s*l+o*u+a*d,f<0&&(f=-f,c=-c,l=-l,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),_=Math.sin((1-e)*h)/g,p=Math.sin(e*h)/g):(_=1-e,p=e),n.x=_*i+p*c,n.y=_*s+p*l,n.z=_*o+p*u,n.w=_*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new be);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+o*u-a*l),i.y+=h*(o*d+a*c-s*u),i.z+=h*(a*d+s*l-o*c),i.w+=h*(-s*c-o*l-a*u),i}}const M0=new E,y0=new E,S0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class vt{constructor(t){t===void 0&&(t={}),this.id=vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}vt.idCounter=0;vt.types=S0;class ie{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new be,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return ie.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return ie.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(Uc),Uc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Uc=new be;class ls extends vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ls.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new E,o=new E;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const u=new E;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const _=u.dot(o);_>h&&(h=_,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],p=new E;p.copy(_),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new E,u=new E,d=new E,h=new E,f=new E,g=new E;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],l);const v=p.testSepAxis(l,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(l))}else{const m=a?a.length:p.faces.length;for(let v=0;v<m;v++){const S=a?a[v]:v;l.copy(p.faceNormals[S]),n.vmult(l,l);const y=p.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(l))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){s.vmult(t.uniqueAxes[m],u);const v=p.testSepAxis(u,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}else{const m=c?c.length:t.faces.length;for(let v=0;v<m;v++){const S=c?c[v]:v;u.copy(t.faceNormals[S]),s.vmult(u,u);const y=p.testSepAxis(u,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(u))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],f),h.cross(f,g),!g.almostZero()){g.normalize();const S=p.testSepAxis(g,t,e,n,i,s);if(S===!1)return!1;S<_&&(_=S,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;ls.project(a,t,n,i,Jr),ls.project(e,t,s,o,Qr);const c=Jr[0],l=Jr[1],u=Qr[0],d=Qr[1];if(c<d||u<l)return!1;const h=c-d,f=u-l;return h<f?h:f}calculateLocalInertia(t,e){const n=new E,i=new E;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new E,l=new E,u=new E,d=new E,h=new E,f=new E,g=new E,_=new E,p=this,m=[],v=i,S=m;let y=-1,A=Number.MAX_VALUE;for(let z=0;z<p.faces.length;z++){c.copy(p.faceNormals[z]),n.vmult(c,c);const P=c.dot(t);P<A&&(A=P,y=z)}if(y<0)return;const T=p.faces[y];T.connectedFaces=[];for(let z=0;z<p.faces.length;z++)for(let P=0;P<p.faces[z].length;P++)T.indexOf(p.faces[z][P])!==-1&&z!==y&&T.connectedFaces.indexOf(z)===-1&&T.connectedFaces.push(z);const C=T.length;for(let z=0;z<C;z++){const P=p.vertices[T[z]],F=p.vertices[T[(z+1)%C]];P.vsub(F,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(P),n.vmult(f,f),e.vadd(f,f);const I=T.connectedFaces[z];g.copy(this.faceNormals[I]);const N=this.getPlaneConstantOfFace(I);_.copy(g),n.vmult(_,_);const L=N-_.dot(e);for(this.clipFaceAgainstPlane(v,S,_,L);v.length;)v.shift();for(;S.length;)v.push(S.shift())}g.copy(this.faceNormals[y]);const x=this.getPlaneConstantOfFace(y);_.copy(g),n.vmult(_,_);const b=x-_.dot(e);for(let z=0;z<v.length;z++){let P=_.dot(v[z])+b;if(P<=s&&(console.log(`clamped: depth=${P} to minDist=${s}`),P=s),P<=o){const F=v[z];if(P<=1e-6){const I={point:F,normal:_,depth:P};a.push(I)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let u=0;u<a;u++){if(l=t[u],o=n.dot(l)+i,s<0)if(o<0){const d=new E;d.copy(l),e.push(d)}else{const d=new E;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new E;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,u,d,h=new E;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new E;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new E;t.vsub(c,l);const u=a.dot(l),d=new E;s.vsub(c,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=E0;let c=0,l=0;const u=w0,d=t.vertices;u.setZero(),ie.vectorToLocalFrame(n,i,e,a),ie.pointToLocalFrame(n,i,u,u);const h=u.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const Jr=[],Qr=[];new E;const E0=new E,w0=new E;class _a extends vt{constructor(t){super({type:vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ls({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),_a.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Zn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Zn,Zn),t.vadd(Zn,Zn),n(Zn.x,Zn.y,Zn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;pn[0].set(s.x,s.y,s.z),pn[1].set(-s.x,s.y,s.z),pn[2].set(-s.x,-s.y,s.z),pn[3].set(-s.x,-s.y,-s.z),pn[4].set(s.x,-s.y,-s.z),pn[5].set(s.x,s.y,-s.z),pn[6].set(-s.x,s.y,-s.z),pn[7].set(s.x,-s.y,s.z);const o=pn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=pn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,u=c.y,d=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),d>i.z&&(i.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const Zn=new E,pn=[new E,new E,new E,new E,new E,new E,new E,new E],va={DYNAMIC:1,STATIC:2,KINEMATIC:4},xa={AWAKE:0,SLEEPY:1,SLEEPING:2};class xt extends Dl{constructor(t){t===void 0&&(t={}),super(),this.id=xt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?xt.STATIC:xt.DYNAMIC,typeof t.type==typeof xt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=xt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new be,this.initQuaternion=new be,this.previousQuaternion=new be,this.interpolatedQuaternion=new be,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new hn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new hn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Qe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=xt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===xt.SLEEPING&&this.dispatchEvent(xt.wakeupEvent)}sleep(){this.sleepState=xt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===xt.AWAKE&&n<i?(this.sleepState=xt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(xt.sleepyEvent)):e===xt.SLEEPY&&n>i?this.wakeUp():e===xt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(xt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===xt.SLEEPING||this.type===xt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new E,s=new be;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=b0,o=T0,a=this.quaternion,c=this.aabb,l=A0;for(let u=0;u!==i;u++){const d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=C0,i=R0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=P0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=I0,i=D0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===xt.DYNAMIC&&(this.sleepState===xt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;this.sleepState===xt.SLEEPING&&this.wakeUp();const n=e,i=L0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=N0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==xt.DYNAMIC)return;const n=U0,i=F0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=O0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),_a.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===xt.DYNAMIC||this.type===xt.KINEMATIC)||this.sleepState===xt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const g=d.elements,_=this.angularFactor,p=c.x*_.x,m=c.y*_.y,v=c.z*_.z;s.x+=t*(g[0]*p+g[1]*m+g[2]*v),s.y+=t*(g[3]*p+g[4]*m+g[5]*v),s.z+=t*(g[6]*p+g[7]*m+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}xt.idCounter=0;xt.COLLIDE_EVENT_NAME="collide";xt.DYNAMIC=va.DYNAMIC;xt.STATIC=va.STATIC;xt.KINEMATIC=va.KINEMATIC;xt.AWAKE=xa.AWAKE;xt.SLEEPY=xa.SLEEPY;xt.SLEEPING=xa.SLEEPING;xt.wakeupEvent={type:"wakeup"};xt.sleepyEvent={type:"sleepy"};xt.sleepEvent={type:"sleep"};const b0=new E,T0=new be,A0=new Qe,C0=new hn,R0=new hn;new hn;const P0=new E,I0=new E,D0=new E,L0=new E,N0=new E,U0=new E,F0=new E,O0=new E;class B0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&xt.STATIC||t.sleepState===xt.SLEEPING)&&(e.type&xt.STATIC||e.sleepState===xt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=z0;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=G0,i=k0,s=V0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const z0=new E;new E;new be;new E;const G0={keys:[]},k0=[],V0=[];new E;new E;new E;class H0 extends B0{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class cr{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Ll,Nl,Ul,Fl,Ol,Bl,zl;const Ma={CLOSEST:1,ANY:2,ALL:4};Ll=vt.types.SPHERE;Nl=vt.types.PLANE;Ul=vt.types.BOX;Fl=vt.types.CYLINDER;Ol=vt.types.CONVEXPOLYHEDRON;Bl=vt.types.HEIGHTFIELD;zl=vt.types.TRIMESH;class Ee{get[Ll](){return this._intersectSphere}get[Nl](){return this._intersectPlane}get[Ul](){return this._intersectBox}get[Fl](){return this._intersectConvex}get[Ol](){return this._intersectConvex}get[Bl](){return this._intersectHeightfield}get[zl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ee.ANY,this.result=new cr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ee.ANY,this.result=e.result||new cr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Fc),to.length=0,t.broadphase.aabbQuery(t,Fc,to),this.intersectBodies(to),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=W0,s=X0;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(rg(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new E(0,0,1);e.vmult(l,l);const u=new E;o.vsub(n,u);const d=u.dot(l);a.vsub(n,u);const h=u.dot(l);if(d*h>0||o.distanceTo(a)<d)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new E,_=new E,p=new E;o.vsub(n,g);const m=-l.dot(g)/f;c.scale(m,_),o.vadd(_,p),this.reportIntersection(l,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=q0;o.from.copy(this.from),o.to.copy(this.to),ie.pointToLocalFrame(n,e,o.from,o.from),ie.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Y0;let c,l,u,d;c=l=0,u=d=t.data.length-1;const h=new Qe;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<u;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),ie.pointToWorldFrame(n,e,t.pillarOffset,qs),this._intersectConvex(t.pillarConvex,e,qs,i,s,Oc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),ie.pointToWorldFrame(n,e,t.pillarOffset,qs),this._intersectConvex(t.pillarConvex,e,qs,i,s,Oc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=u**2-4*l*d,f=j0,g=K0;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const _=(-u-Math.sqrt(h))/(2*l),p=(-u+Math.sqrt(h))/(2*l);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=$0,c=Bc,l=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),m=l?l.length:u.length,v=this.result;for(let S=0;!v.shouldStop&&S<m;S++){const y=l?l[S]:S,A=u[y],T=h[y],C=e,x=n;c.copy(d[A[0]]),C.vmult(c,c),c.vadd(x,c),c.vsub(g,c),C.vmult(T,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const z=a.dot(c)/b;if(!(z<0)){f.scale(z,We),We.vadd(g,We),an.copy(d[A[0]]),C.vmult(an,an),x.vadd(an,an);for(let P=1;!v.shouldStop&&P<A.length-1;P++){mn.copy(d[A[P]]),gn.copy(d[A[P+1]]),C.vmult(mn,mn),C.vmult(gn,gn),x.vadd(mn,mn),x.vadd(gn,gn);const F=We.distanceTo(g);!(Ee.pointInTriangle(We,an,mn,gn)||Ee.pointInTriangle(We,mn,an,gn))||F>p||this.reportIntersection(a,We,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Z0,c=ig,l=sg,u=Bc,d=J0,h=Q0,f=tg,g=ng,_=eg,p=t.indices;t.vertices;const m=this.from,v=this.to,S=this.direction;l.position.copy(n),l.quaternion.copy(e),ie.vectorToLocalFrame(n,e,S,d),ie.pointToLocalFrame(n,e,m,h),ie.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const y=h.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let A=0,T=c.length;!this.result.shouldStop&&A!==T;A++){const C=c[A];t.getNormal(C,a),t.getVertex(p[C*3],an),an.vsub(h,u);const x=d.dot(a),b=a.dot(u)/x;if(b<0)continue;d.scale(b,We),We.vadd(h,We),t.getVertex(p[C*3+1],mn),t.getVertex(p[C*3+2],gn);const z=We.distanceSquared(h);!(Ee.pointInTriangle(We,mn,an,gn)||Ee.pointInTriangle(We,an,mn,gn))||z>y||(ie.vectorToWorldFrame(e,a,_),ie.pointToWorldFrame(n,e,We,g),this.reportIntersection(_,g,s,i,C))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ee.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case Ee.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case Ee.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,pi),n.vsub(e,ns),t.vsub(e,eo);const s=pi.dot(pi),o=pi.dot(ns),a=pi.dot(eo),c=ns.dot(ns),l=ns.dot(eo);let u,d;return(u=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&u+d<s*c-o*o}}Ee.CLOSEST=Ma.CLOSEST;Ee.ANY=Ma.ANY;Ee.ALL=Ma.ALL;const Fc=new Qe,to=[],ns=new E,eo=new E,W0=new E,X0=new be,We=new E,an=new E,mn=new E,gn=new E;new E;new cr;const Oc={faceList:[0]},qs=new E,q0=new Ee,Y0=[],j0=new E,K0=new E,$0=new E;new E;new E;const Bc=new E,Z0=new E,J0=new E,Q0=new E,tg=new E,eg=new E,ng=new E;new Qe;const ig=[],sg=new ie,pi=new E,Ys=new E;function rg(r,t,e){e.vsub(r,pi);const n=pi.dot(t);return t.scale(n,Ys),Ys.vadd(r,Ys),e.distanceTo(Ys)}class og{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class zc{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class _s{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=_s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new zc,this.jacobianElementB=new zc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return s.scale(l,Gc),a.scale(u,kc),n.invInertiaWorldSolve.vmult(o,Vc),i.invInertiaWorldSolve.vmult(c,Hc),t.multiplyVectors(Gc,Vc)+e.multiplyVectors(kc,Hc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,js),l+=js.dot(t.rotational),c.vmult(e.rotational,js),l+=js.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=ag;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}_s.idCounter=0;const Gc=new E,kc=new E,Vc=new E,Hc=new E,js=new E,ag=new E;class cg extends _s{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=lg,l=hg,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=ug,_=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;o.cross(m,c),a.cross(m,l),m.negate(_.spatial),c.negate(_.rotational),p.spatial.copy(m),p.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=m.dot(g),S=this.restitution+1,y=S*h.dot(m)-S*u.dot(m)+f.dot(l)-d.dot(c),A=this.computeGiMf();return-v*e-y*n-t*A}getImpactVelocityAlongNormal(){const t=dg,e=fg,n=pg,i=mg,s=gg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const lg=new E,hg=new E,ug=new E,dg=new E,fg=new E,pg=new E,mg=new E,gg=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Wc extends _s{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=_g,o=vg,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const _g=new E,vg=new E;class fr{constructor(t,e,n){n=og.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=fr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}fr.idCounter=0;class pr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=pr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}pr.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ee;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class xg extends vt{constructor(){super({type:vt.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new E),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Dn.set(0,0,1),e.vmult(Dn,Dn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Dn.x===1?i.x=t.x:Dn.x===-1&&(n.x=t.x),Dn.y===1?i.y=t.y:Dn.y===-1&&(n.y=t.y),Dn.z===1?i.z=t.z:Dn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Dn=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Qe;new E;new Qe;new E;new E;new E;new E;new E;new E;new E;new Qe;new E;new ie;new Qe;class Mg{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class yg extends Mg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,u=t;let d,h,f,g,_,p;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();const m=Eg,v=wg,S=Sg;m.length=a,v.length=a,S.length=a;for(let y=0;y!==a;y++){const A=o[y];S[y]=0,v[y]=A.computeB(u),m[y]=1/A.computeC()}if(a!==0){for(let T=0;T!==l;T++){const C=c[T],x=C.vlambda,b=C.wlambda;x.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==a;T++){const C=o[T];d=v[T],h=m[T],p=S[T],_=C.computeGWlambda(),f=h*(d-_-C.eps*p),p+f<C.minForce?f=C.minForce-p:p+f>C.maxForce&&(f=C.maxForce-p),S[T]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<s)break}for(let T=0;T!==l;T++){const C=c[T],x=C.velocity,b=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),x.vadd(C.vlambda,x),C.wlambda.vmul(C.angularFactor,C.wlambda),b.vadd(C.wlambda,b)}let y=o.length;const A=1/u;for(;y--;)o[y].multiplier=S[y]*A}return n}}const Sg=[],Eg=[],wg=[];class bg{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Tg extends bg{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const fe={sphereSphere:vt.types.SPHERE,spherePlane:vt.types.SPHERE|vt.types.PLANE,boxBox:vt.types.BOX|vt.types.BOX,sphereBox:vt.types.SPHERE|vt.types.BOX,planeBox:vt.types.PLANE|vt.types.BOX,convexConvex:vt.types.CONVEXPOLYHEDRON,sphereConvex:vt.types.SPHERE|vt.types.CONVEXPOLYHEDRON,planeConvex:vt.types.PLANE|vt.types.CONVEXPOLYHEDRON,boxConvex:vt.types.BOX|vt.types.CONVEXPOLYHEDRON,sphereHeightfield:vt.types.SPHERE|vt.types.HEIGHTFIELD,boxHeightfield:vt.types.BOX|vt.types.HEIGHTFIELD,convexHeightfield:vt.types.CONVEXPOLYHEDRON|vt.types.HEIGHTFIELD,sphereParticle:vt.types.PARTICLE|vt.types.SPHERE,planeParticle:vt.types.PLANE|vt.types.PARTICLE,boxParticle:vt.types.BOX|vt.types.PARTICLE,convexParticle:vt.types.PARTICLE|vt.types.CONVEXPOLYHEDRON,cylinderCylinder:vt.types.CYLINDER,sphereCylinder:vt.types.SPHERE|vt.types.CYLINDER,planeCylinder:vt.types.PLANE|vt.types.CYLINDER,boxCylinder:vt.types.BOX|vt.types.CYLINDER,convexCylinder:vt.types.CONVEXPOLYHEDRON|vt.types.CYLINDER,heightfieldCylinder:vt.types.HEIGHTFIELD|vt.types.CYLINDER,particleCylinder:vt.types.PARTICLE|vt.types.CYLINDER,sphereTrimesh:vt.types.SPHERE|vt.types.TRIMESH,planeTrimesh:vt.types.PLANE|vt.types.TRIMESH};class Ag{get[fe.sphereSphere](){return this.sphereSphere}get[fe.spherePlane](){return this.spherePlane}get[fe.boxBox](){return this.boxBox}get[fe.sphereBox](){return this.sphereBox}get[fe.planeBox](){return this.planeBox}get[fe.convexConvex](){return this.convexConvex}get[fe.sphereConvex](){return this.sphereConvex}get[fe.planeConvex](){return this.planeConvex}get[fe.boxConvex](){return this.boxConvex}get[fe.sphereHeightfield](){return this.sphereHeightfield}get[fe.boxHeightfield](){return this.boxHeightfield}get[fe.convexHeightfield](){return this.convexHeightfield}get[fe.sphereParticle](){return this.sphereParticle}get[fe.planeParticle](){return this.planeParticle}get[fe.boxParticle](){return this.boxParticle}get[fe.convexParticle](){return this.convexParticle}get[fe.cylinderCylinder](){return this.convexConvex}get[fe.sphereCylinder](){return this.sphereConvex}get[fe.planeCylinder](){return this.planeConvex}get[fe.boxCylinder](){return this.boxConvex}get[fe.convexCylinder](){return this.convexConvex}get[fe.heightfieldCylinder](){return this.heightfieldCylinder}get[fe.particleCylinder](){return this.particleCylinder}get[fe.sphereTrimesh](){return this.sphereTrimesh}get[fe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Tg,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new cg(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,u=i.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new Wc(n,i,h*f),p=g.length?g.pop():new Wc(n,i,h*f);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-h*f,_.maxForce=p.maxForce=h*f,_.ri.copy(t.ri),_.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(_.t,p.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),_.enabled=p.enabled=t.enabled,e.push(_,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];hi.setZero(),Fi.setZero(),Oi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(hi.vadd(e.ni,hi),Fi.vadd(e.ri,Fi),Oi.vadd(e.rj,Oi)):(hi.vsub(e.ni,hi),Fi.vadd(e.rj,Fi),Oi.vadd(e.ri,Oi));const o=1/t;Fi.scale(o,n.ri),Oi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),hi.normalize(),hi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=Pg,l=Ig,u=Cg,d=Rg;for(let h=0,f=t.length;h!==f;h++){const g=t[h],_=e[h];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const m=g.type&xt.KINEMATIC&&_.type&xt.STATIC||g.type&xt.STATIC&&_.type&xt.KINEMATIC||g.type&xt.KINEMATIC&&_.type&xt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const S=g.shapes[v];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],l),_.quaternion.vmult(_.shapeOffsets[y],d),d.vadd(_.position,d);const A=_.shapes[y];if(!(S.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&S.collisionFilterGroup)||u.distanceTo(d)>S.boundingSphereRadius+A.boundingSphereRadius)continue;let T=null;S.material&&A.material&&(T=n.getContactMaterial(S.material,A.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const C=S.type|A.type,x=this[C];if(x){let b=!1;S.type<A.type?b=x.call(this,S,A,u,d,c,l,g,_,S,A,m):b=x.call(this,A,S,d,u,l,c,_,g,S,A,m),b&&m&&(n.shapeOverlapKeeper.set(S.id,A.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,u,d){const h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Ks),h.ni.scale(h.ni.dot(Ks),Xc),Ks.vsub(Xc,h.rj),-Ks.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,g=h.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,u,d){const h=this.v3pool,f=i_;n.vsub(i,$s),e.getSideNormals(f,o);const g=t.radius;let _=!1;const p=r_,m=o_,v=a_;let S=null,y=0,A=0,T=0,C=null;for(let D=0,B=f.length;D!==B&&_===!1;D++){const j=t_;j.copy(f[D]);const Y=j.length();j.normalize();const it=$s.dot(j);if(it<Y+g&&it>0){const at=e_,J=n_;at.copy(f[(D+1)%3]),J.copy(f[(D+2)%3]);const At=at.length(),Yt=J.length();at.normalize(),J.normalize();const Ht=$s.dot(at),$=$s.dot(J);if(Ht<At&&Ht>-At&&$<Yt&&$>-Yt){const ot=Math.abs(it-Y-g);if((C===null||ot<C)&&(C=ot,A=Ht,T=$,S=Y,p.copy(j),m.copy(at),v.copy(J),y++,d))return!0}}}if(y){_=!0;const D=this.createContactEquation(a,c,t,e,l,u);p.scale(-g,D.ri),D.ni.copy(p),D.ni.negate(D.ni),p.scale(S,p),m.scale(A,m),p.vadd(m,p),v.scale(T,v),p.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(i,D.rj),D.rj.vsub(c.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let x=h.get();const b=s_;for(let D=0;D!==2&&!_;D++)for(let B=0;B!==2&&!_;B++)for(let j=0;j!==2&&!_;j++)if(x.set(0,0,0),D?x.vadd(f[0],x):x.vsub(f[0],x),B?x.vadd(f[1],x):x.vsub(f[1],x),j?x.vadd(f[2],x):x.vsub(f[2],x),i.vadd(x,b),b.vsub(n,b),b.lengthSquared()<g*g){if(d)return!0;_=!0;const Y=this.createContactEquation(a,c,t,e,l,u);Y.ri.copy(b),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(x),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(c.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}h.release(x),x=null;const z=h.get(),P=h.get(),F=h.get(),I=h.get(),N=h.get(),L=f.length;for(let D=0;D!==L&&!_;D++)for(let B=0;B!==L&&!_;B++)if(D%3!==B%3){f[B].cross(f[D],z),z.normalize(),f[D].vadd(f[B],P),F.copy(n),F.vsub(P,F),F.vsub(i,F);const j=F.dot(z);z.scale(j,I);let Y=0;for(;Y===D%3||Y===B%3;)Y++;N.copy(n),N.vsub(I,N),N.vsub(P,N),N.vsub(i,N);const it=Math.abs(j),at=N.length();if(it<f[Y].length()&&at<g){if(d)return!0;_=!0;const J=this.createContactEquation(a,c,t,e,l,u);P.vadd(I,J.rj),J.rj.copy(J.rj),N.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(i,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(g,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}h.release(z,P,F,I,N)}planeBox(t,e,n,i,s,o,a,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,u,d,h,f){const g=S_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,h,f)){const _=[],p=E_;t.clipAgainstHull(n,s,e,i,o,g,-100,100,_);let m=0;for(let v=0;v!==_.length;v++){if(d)return!0;const S=this.createContactEquation(a,c,t,e,l,u),y=S.ri,A=S.rj;g.negate(S.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,y),A.copy(_[v].point),y.vsub(n,y),A.vsub(i,A),y.vadd(n,y),y.vsub(a.position,y),A.vadd(i,A),A.vsub(c.position,A),this.result.push(S),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,s,o,a,c,l,u,d){const h=this.v3pool;n.vsub(i,c_);const f=e.faceNormals,g=e.faces,_=e.vertices,p=t.radius;let m=!1;for(let v=0;v!==_.length;v++){const S=_[v],y=d_;o.vmult(S,y),i.vadd(y,y);const A=u_;if(y.vsub(n,A),A.lengthSquared()<p*p){if(d)return!0;m=!0;const T=this.createContactEquation(a,c,t,e,l,u);T.ri.copy(A),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),y.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,S=g.length;v!==S&&m===!1;v++){const y=f[v],A=g[v],T=f_;o.vmult(y,T);const C=p_;o.vmult(_[A[0]],C),C.vadd(i,C);const x=m_;T.scale(-p,x),n.vadd(x,x);const b=g_;x.vsub(C,b);const z=b.dot(T),P=__;if(n.vsub(C,P),z<0&&P.dot(T)>0){const F=[];for(let I=0,N=A.length;I!==N;I++){const L=h.get();o.vmult(_[A[I]],L),i.vadd(L,L),F.push(L)}if(Qg(F,T,n)){if(d)return!0;m=!0;const I=this.createContactEquation(a,c,t,e,l,u);T.scale(-p,I.ri),T.negate(I.ni);const N=h.get();T.scale(-z,N);const L=h.get();T.scale(-p,L),n.vsub(i,I.rj),I.rj.vadd(L,I.rj),I.rj.vadd(N,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),h.release(N),h.release(L),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let D=0,B=F.length;D!==B;D++)h.release(F[D]);return}else for(let I=0;I!==A.length;I++){const N=h.get(),L=h.get();o.vmult(_[A[(I+1)%A.length]],N),o.vmult(_[A[(I+2)%A.length]],L),i.vadd(N,N),i.vadd(L,L);const D=l_;L.vsub(N,D);const B=h_;D.unit(B);const j=h.get(),Y=h.get();n.vsub(N,Y);const it=Y.dot(B);B.scale(it,j),j.vadd(N,j);const at=h.get();if(j.vsub(n,at),it>0&&it*it<D.lengthSquared()&&at.lengthSquared()<p*p){if(d)return!0;const J=this.createContactEquation(a,c,t,e,l,u);j.vsub(i,J.rj),j.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(p,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let At=0,Yt=F.length;At!==Yt;At++)h.release(F[At]);h.release(N),h.release(L),h.release(j),h.release(at),h.release(Y);return}h.release(N),h.release(L),h.release(j),h.release(at),h.release(Y)}for(let I=0,N=F.length;I!==N;I++)h.release(F[I])}}}planeConvex(t,e,n,i,s,o,a,c,l,u,d){const h=v_,f=x_;f.set(0,0,1),s.vmult(f,f);let g=0;const _=M_;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,_),f.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,u),S=y_;f.scale(f.dot(_),S),h.vsub(S,S),S.vsub(n,v.ri),v.ni.copy(f),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,u,d){const h=e.data,f=t.radius,g=e.elementSize,_=U_,p=N_;ie.pointToLocalFrame(i,o,n,p);let m=Math.floor((p.x-f)/g)-1,v=Math.ceil((p.x+f)/g)+1,S=Math.floor((p.y-f)/g)-1,y=Math.ceil((p.y+f)/g)+1;if(v<0||y<0||m>h.length||S>h[0].length)return;m<0&&(m=0),v<0&&(v=0),S<0&&(S=0),y<0&&(y=0),m>=h.length&&(m=h.length-1),v>=h.length&&(v=h.length-1),y>=h[0].length&&(y=h[0].length-1),S>=h[0].length&&(S=h[0].length-1);const A=[];e.getRectMinMax(m,S,v,y,A);const T=A[0],C=A[1];if(p.z-f>C||p.z+f<T)return;const x=this.result;for(let b=m;b<v;b++)for(let z=S;z<y;z++){const P=x.length;let F=!1;if(e.getConvexTrianglePillar(b,z,!1),ie.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,c,t,e,d)),d&&F||(e.getConvexTrianglePillar(b,z,!0),ie.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,c,t,e,d)),d&&F))return!0;if(x.length-P>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,u,d){const h=e.data,f=e.elementSize,g=t.boundingSphereRadius,_=D_,p=L_,m=I_;ie.pointToLocalFrame(i,o,n,m);let v=Math.floor((m.x-g)/f)-1,S=Math.ceil((m.x+g)/f)+1,y=Math.floor((m.y-g)/f)-1,A=Math.ceil((m.y+g)/f)+1;if(S<0||A<0||v>h.length||y>h[0].length)return;v<0&&(v=0),S<0&&(S=0),y<0&&(y=0),A<0&&(A=0),v>=h.length&&(v=h.length-1),S>=h.length&&(S=h.length-1),A>=h[0].length&&(A=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const T=[];e.getRectMinMax(v,y,S,A,T);const C=T[0],x=T[1];if(!(m.z-g>x||m.z+g<C))for(let b=v;b<S;b++)for(let z=y;z<A;z++){let P=!1;if(e.getConvexTrianglePillar(b,z,!1),ie.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,c,null,null,d,p,null)),d&&P||(e.getConvexTrianglePillar(b,z,!0),ie.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,c,null,null,d,p,null)),d&&P))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,u,d){const h=A_;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,u,d){const h=w_;h.set(0,0,1),a.quaternion.vmult(h,h);const f=b_;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(c,a,e,t,l,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=T_;h.scale(h.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,u,d){let h=-1;const f=R_,g=P_;let _=null;const p=C_;if(p.copy(i),p.vsub(n,p),s.conjugate(qc),qc.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let m=0,v=t.faces.length;m!==v;m++){const S=[t.worldVertices[t.faces[m][0]]],y=t.worldFaceNormals[m];i.vsub(S[0],Yc);const A=-y.dot(Yc);if(_===null||Math.abs(A)<Math.abs(_)){if(d)return!0;_=A,h=m,f.copy(y)}}if(h!==-1){const m=this.createContactEquation(c,a,e,t,l,u);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const v=m.ri,S=m.rj;v.vadd(i,v),v.vsub(c.position,v),S.vadd(n,S),S.vsub(a.position,S),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,u,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,u,d)}particleCylinder(t,e,n,i,s,o,a,c,l,u,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,u,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,u,d){const h=zg,f=Gg,g=kg,_=Vg,p=Hg,m=Wg,v=jg,S=Bg,y=Fg,A=Kg;ie.pointToLocalFrame(i,o,n,p);const T=t.radius;v.lowerBound.set(p.x-T,p.y-T,p.z-T),v.upperBound.set(p.x+T,p.y+T,p.z+T),e.getTrianglesInAABB(v,A);const C=Og,x=t.radius*t.radius;for(let I=0;I<A.length;I++)for(let N=0;N<3;N++)if(e.getVertex(e.indices[A[I]*3+N],C),C.vsub(p,y),y.lengthSquared()<=x){if(S.copy(C),ie.pointToWorldFrame(i,o,S,C),C.vsub(n,y),d)return!0;let L=this.createContactEquation(a,c,t,e,l,u);L.ni.copy(y),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.copy(C),L.rj.vsub(c.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let I=0;I<A.length;I++)for(let N=0;N<3;N++){e.getVertex(e.indices[A[I]*3+N],h),e.getVertex(e.indices[A[I]*3+(N+1)%3],f),f.vsub(h,g),p.vsub(f,m);const L=m.dot(g);p.vsub(h,m);let D=m.dot(g);if(D>0&&L<0&&(p.vsub(h,m),_.copy(g),_.normalize(),D=m.dot(_),_.scale(D,m),m.vadd(h,m),m.distanceTo(p)<t.radius)){if(d)return!0;const j=this.createContactEquation(a,c,t,e,l,u);m.vsub(p,j.ni),j.ni.normalize(),j.ni.scale(t.radius,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),ie.pointToWorldFrame(i,o,m,m),m.vsub(c.position,j.rj),ie.vectorToWorldFrame(o,j.ni,j.ni),ie.vectorToWorldFrame(o,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}const b=Xg,z=qg,P=Yg,F=Ug;for(let I=0,N=A.length;I!==N;I++){e.getTriangleVertices(A[I],b,z,P),e.getNormal(A[I],F),p.vsub(b,m);let L=m.dot(F);if(F.scale(L,m),p.vsub(m,m),L=m.distanceTo(p),Ee.pointInTriangle(m,b,z,P)&&L<t.radius){if(d)return!0;let D=this.createContactEquation(a,c,t,e,l,u);m.vsub(p,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),ie.pointToWorldFrame(i,o,m,m),m.vsub(c.position,D.rj),ie.vectorToWorldFrame(o,D.ni,D.ni),ie.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,u,d){const h=new E,f=Dg;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new E;_.copy(h),ie.pointToWorldFrame(i,o,_,h);const p=Lg;if(h.vsub(n,p),f.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,c,t,e,l,u);v.ni.copy(f);const S=Ng;f.scale(p.dot(f),S),h.vsub(S,S),v.ri.copy(S),v.ri.vsub(a.position,v.ri),v.rj.copy(h),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const hi=new E,Fi=new E,Oi=new E,Cg=new E,Rg=new E,Pg=new be,Ig=new be,Dg=new E,Lg=new E,Ng=new E,Ug=new E,Fg=new E;new E;const Og=new E,Bg=new E,zg=new E,Gg=new E,kg=new E,Vg=new E,Hg=new E,Wg=new E,Xg=new E,qg=new E,Yg=new E,jg=new Qe,Kg=[],Ks=new E,Xc=new E,$g=new E,Zg=new E,Jg=new E;function Qg(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=$g;r[(s+1)%i].vsub(o,a);const c=Zg;a.cross(t,c);const l=Jg;e.vsub(o,l);const u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const $s=new E,t_=new E,e_=new E,n_=new E,i_=[new E,new E,new E,new E,new E,new E],s_=new E,r_=new E,o_=new E,a_=new E,c_=new E,l_=new E,h_=new E,u_=new E,d_=new E,f_=new E,p_=new E,m_=new E,g_=new E,__=new E;new E;new E;const v_=new E,x_=new E,M_=new E,y_=new E,S_=new E,E_=new E,w_=new E,b_=new E,T_=new E,A_=new E,qc=new be,C_=new E;new E;const R_=new E,Yc=new E,P_=new E,I_=new E,D_=new E,L_=[0],N_=new E,U_=new E;class jc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const u=n[c];for(;u>i[a];)a++;l=u===i[a],l||Kc(t,u)}a=0;for(let c=0;c<o;c++){let l=!1;const u=i[c];for(;u>n[a];)a++;l=n[a]===u,l||Kc(e,u)}}}function Kc(r,t){r.push((t&4294901760)>>16,t&65535)}const no=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class F_{constructor(){this.data={keys:[]}}get(t,e){const n=no(t,e);return this.data[n]}set(t,e,n){const i=no(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=no(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class O_ extends Dl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new H0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new yg,this.constraints=[],this.narrowphase=new Ag(this),this.collisionMatrix=new Nc,this.collisionMatrixPrevious=new Nc,this.bodyOverlapKeeper=new jc,this.shapeOverlapKeeper=new jc,this.contactmaterials=[],this.contactMaterialTable=new F_,this.defaultMaterial=new pr("default"),this.defaultContactMaterial=new fr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof cr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.ALL,n.from=t,n.to=e,n.callback=i,io.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.ANY,n.from=t,n.to=e,n.result=i,io.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ee.CLOSEST,n.from=t,n.to=e,n.result=i,io.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof xt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ae.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=Ae.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Ae.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=V_,i=H_,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=xt.DYNAMIC;let h=-1/0;const f=this.constraints,g=k_;c.length();const _=c.x,p=c.y,m=c.z;let v=0;for(l&&(h=Ae.now()),v=0;v!==s;v++){const I=o[v];if(I.type===d){const N=I.force,L=I.mass;N.x+=L*_,N.y+=L*p,N.z+=L*m}}for(let I=0,N=this.subsystems.length;I!==N;I++)this.subsystems[I].update();l&&(h=Ae.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=Ae.now()-h);let S=f.length;for(v=0;v!==S;v++){const I=f[v];if(!I.collideConnected)for(let N=n.length-1;N>=0;N-=1)(I.bodyA===n[N]&&I.bodyB===i[N]||I.bodyB===n[N]&&I.bodyA===i[N])&&(n.splice(N,1),i.splice(N,1))}this.collisionMatrixTick(),l&&(h=Ae.now());const y=G_,A=e.length;for(v=0;v!==A;v++)y.push(e[v]);e.length=0;const T=this.frictionEquations.length;for(v=0;v!==T;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),l&&(u.narrowphase=Ae.now()-h),l&&(h=Ae.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=e.length;for(let I=0;I!==C;I++){const N=e[I],L=N.bi,D=N.bj,B=N.si,j=N.sj;let Y;if(L.material&&D.material?Y=this.getContactMaterial(L.material,D.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,L.material&&D.material&&(L.material.friction>=0&&D.material.friction>=0&&L.material.friction*D.material.friction,L.material.restitution>=0&&D.material.restitution>=0&&(N.restitution=L.material.restitution*D.material.restitution)),a.addEquation(N),L.allowSleep&&L.type===xt.DYNAMIC&&L.sleepState===xt.SLEEPING&&D.sleepState===xt.AWAKE&&D.type!==xt.STATIC){const it=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),at=D.sleepSpeedLimit**2;it>=at*2&&(L.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===xt.DYNAMIC&&D.sleepState===xt.SLEEPING&&L.sleepState===xt.AWAKE&&L.type!==xt.STATIC){const it=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),at=L.sleepSpeedLimit**2;it>=at*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,D,!0),this.collisionMatrixPrevious.get(L,D)||(is.body=D,is.contact=N,L.dispatchEvent(is),is.body=L,D.dispatchEvent(is)),this.bodyOverlapKeeper.set(L.id,D.id),this.shapeOverlapKeeper.set(B.id,j.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Ae.now()-h,h=Ae.now()),v=0;v!==s;v++){const I=o[v];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(S=f.length,v=0;v!==S;v++){const I=f[v];I.update();for(let N=0,L=I.equations.length;N!==L;N++){const D=I.equations[N];a.addEquation(D)}}a.solve(t,this),l&&(u.solve=Ae.now()-h),a.removeAllEquations();const x=Math.pow;for(v=0;v!==s;v++){const I=o[v];if(I.type&d){const N=x(1-I.linearDamping,t),L=I.velocity;L.scale(N,L);const D=I.angularVelocity;if(D){const B=x(1-I.angularDamping,t);D.scale(B,D)}}}this.dispatchEvent(z_),l&&(h=Ae.now());const z=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,z,P);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Ae.now()-h),this.stepnumber+=1,this.dispatchEvent(B_);let F=!0;if(this.allowSleep)for(F=!1,v=0;v!==s;v++){const I=o[v];I.sleepTick(this.time),I.sleepState!==xt.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ln,Nn),t){for(let s=0,o=Ln.length;s<o;s+=2)ss.bodyA=this.getBodyById(Ln[s]),ss.bodyB=this.getBodyById(Ln[s+1]),this.dispatchEvent(ss);ss.bodyA=ss.bodyB=null}if(e){for(let s=0,o=Nn.length;s<o;s+=2)rs.bodyA=this.getBodyById(Nn[s]),rs.bodyB=this.getBodyById(Nn[s+1]),this.dispatchEvent(rs);rs.bodyA=rs.bodyB=null}Ln.length=Nn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Ln,Nn),n){for(let s=0,o=Ln.length;s<o;s+=2){const a=this.getShapeById(Ln[s]),c=this.getShapeById(Ln[s+1]);Un.shapeA=a,Un.shapeB=c,a&&(Un.bodyA=a.body),c&&(Un.bodyB=c.body),this.dispatchEvent(Un)}Un.bodyA=Un.bodyB=Un.shapeA=Un.shapeB=null}if(i){for(let s=0,o=Nn.length;s<o;s+=2){const a=this.getShapeById(Nn[s]),c=this.getShapeById(Nn[s+1]);Fn.shapeA=a,Fn.shapeB=c,a&&(Fn.bodyA=a.body),c&&(Fn.bodyB=c.body),this.dispatchEvent(Fn)}Fn.bodyA=Fn.bodyB=Fn.shapeA=Fn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Qe;const io=new Ee,Ae=globalThis.performance||{};if(!Ae.now){let r=Date.now();Ae.timing&&Ae.timing.navigationStart&&(r=Ae.timing.navigationStart),Ae.now=()=>Date.now()-r}new E;const B_={type:"postStep"},z_={type:"preStep"},is={type:xt.COLLIDE_EVENT_NAME,body:null,contact:null},G_=[],k_=[],V_=[],H_=[],Ln=[],Nn=[],ss={type:"beginContact",bodyA:null,bodyB:null},rs={type:"endContact",bodyA:null,bodyB:null},Un={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Fn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class W_{constructor(){H(this,"world");H(this,"bodies",new Map);this.world=new O_,this.world.gravity.set(0,-9.82,0),this.world.defaultContactMaterial.friction=.4}addBody(t,e,n,i=1){const s=new xt({mass:i,shape:n});return s.position.copy(e),this.world.addBody(s),this.bodies.set(t,s),s}addGround(t,e){const n=new xg,i=new xt({mass:0,shape:n});i.position.y=-.1,this.world.addBody(i)}getBody(t){return this.bodies.get(t)}update(t){this.world.step(1/60,t,3),this.bodies.forEach((e,n)=>{n.position.copy(e.position),n.quaternion.copy(e.quaternion)})}getWorld(){return this.world}applyForce(t,e){const n=this.bodies.get(t);n&&n.applyForce(new E(e.x,e.y,e.z),n.position)}applyImpulse(t,e){const n=this.bodies.get(t);n&&n.applyImpulse(new E(e.x,e.y,e.z),n.position)}}class X_ extends ga{constructor(e){super(e);H(this,"age",0);H(this,"maxAge",60);H(this,"speed",3);this.mesh=this.createHybridMesh(),this.mesh.position.copy(this.position),this.dialogues=["I am the child of worlds!","Sage and Cat God blend within me","I am chaos and order","nyaaa~ *ethereal meow*","I drift between dimensions","Born of dream and divinity","GURETO DAZE! I am born perfect!","YARE YARE... I inherited both their powers","Your next line is: 'What is this hybrid?'","I have my father's stand... MEOW EXPERIENCE!","WRYYYYYYY! I am alive!","NIGERUNDAYO from expectation!","I am... STONE FREE SAGE CAT!","TORTURE DANCE... no TORTURE PURR!","*ゴゴゴ menacing hybrid energy ゴゴゴ*","Both timelines... MERGED! JOTARO WOULD BE PROUD!","I am the will of both! UNLIMITED MEOW WORKS!","MUDA MUDA! I'm useless... or am I?","ORA ORA ORA ORA! Watch my baby fists!","HNNNNNG! I'm just a baby hybrid!!!"]}createHybridMesh(){const e=new Te,n=new jt(.5,16,16),i=new qt({color:8930559}),s=new K(n,i);s.position.x=-.4,e.add(s);const o=new jt(.5,16,16),a=new Ot({color:16746564}),c=new K(o,a);c.position.x=.4,e.add(c);const l=new jt(.3,16,16),u=new qt({color:16755200}),d=new K(l,u);e.add(d);const h=new jt(.1,8,8),f=new K(h,new qt({color:16776960}));f.position.set(-.4,.2,.4),e.add(f);const g=new K(h,new qt({color:0}));return g.position.set(.4,.2,.4),e.add(g),e}update(e){this.age+=e,this.randomWalk(e,this.speed),Math.random()<.001&&this.speak();const n=this.maxAge*.75;if(this.age>n){const i=(this.age-n)/(this.maxAge-n);this.mesh.traverse(s=>{s instanceof K&&s.material instanceof qt&&(s.material.opacity=1-i)})}this.age>this.maxAge&&this.die()}getType(){return"hybrid"}}class q_{constructor(){H(this,"lastSpawnTime",0);H(this,"minSpawnInterval",3);H(this,"spawnDistance",8);H(this,"offspringCount",0)}canProcreate(t,e){const n=t.distanceTo(e),i=Date.now()/1e3-this.lastSpawnTime;return n<this.spawnDistance&&i>this.minSpawnInterval}procreate(t,e,n){if(!this.canProcreate(t,e))return null;const i=new G((t.x+e.x)/2+(Math.random()-.5)*3,3,(t.z+e.z)/2+(Math.random()-.5)*3),s=new X_(i);return n.add(s.getMesh()),this.lastSpawnTime=Date.now()/1e3,this.offspringCount++,console.log(`✨ HYBRID OFFSPRING #${this.offspringCount} BORN! ✨`),console.log("💜 A being of Sage and Cat God blessed existence"),s}getOffspringCount(){return this.offspringCount}getDistance(t,e){return t.distanceTo(e)}getCanProcreateMessage(t){return t<this.spawnDistance?`❤️ PROCREATION AVAILABLE (distance: ${t.toFixed(1)}) - Press P!`:`💔 Get closer to Cat God (${t.toFixed(1)}/${this.spawnDistance})`}}class Y_{constructor(t){H(this,"camera");H(this,"targetPosition");H(this,"targetLookAt");H(this,"isRightMouseDown",!1);H(this,"lastMouseX",0);H(this,"lastMouseY",0);H(this,"mouseDeltaX",0);H(this,"mouseDeltaY",0);H(this,"orbitDistance",15);H(this,"orbitHeight",8);H(this,"orbitAngleX",0);H(this,"orbitAngleY",0);H(this,"mouseSensitivity",.005);H(this,"followSmoothness",.1);this.camera=t,this.targetPosition=new G(0,0,0),this.targetLookAt=new G(0,0,0),this.setupMouseControls()}setupMouseControls(){document.addEventListener("mousedown",t=>{t.button===2&&(this.isRightMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),document.addEventListener("mousemove",t=>{this.isRightMouseDown&&(this.mouseDeltaX=t.clientX-this.lastMouseX,this.mouseDeltaY=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY,this.orbitAngleY-=this.mouseDeltaX*this.mouseSensitivity,this.orbitAngleX-=this.mouseDeltaY*this.mouseSensitivity,this.orbitAngleX=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this.orbitAngleX)))}),document.addEventListener("mouseup",t=>{t.button===2&&(this.isRightMouseDown=!1,this.mouseDeltaX=0,this.mouseDeltaY=0)}),document.addEventListener("contextmenu",t=>{t.preventDefault()})}setFollowTarget(t,e){this.targetPosition.copy(t),this.targetLookAt.copy(e)}setOrbitDistance(t){this.orbitDistance=t}applyTouchDelta(t,e){this.orbitAngleY-=t*this.mouseSensitivity,this.orbitAngleX-=e*this.mouseSensitivity,this.orbitAngleX=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this.orbitAngleX))}update(){const t=this.orbitDistance*Math.sin(this.orbitAngleY)*Math.cos(this.orbitAngleX),e=this.orbitDistance*Math.sin(this.orbitAngleX)+this.orbitHeight,n=this.orbitDistance*Math.cos(this.orbitAngleY)*Math.cos(this.orbitAngleX),i=new G(this.targetPosition.x+t,this.targetPosition.y+e,this.targetPosition.z+n);i.y=Math.max(1.2,i.y),this.camera.position.lerp(i,this.followSmoothness),this.camera.lookAt(this.targetLookAt)}getOrbitAngleY(){return this.orbitAngleY}resetOrbit(){this.orbitAngleX=0,this.orbitAngleY=0}getOrbitDistance(){return this.orbitDistance}setMouseSensitivity(t){this.mouseSensitivity=t}}class j_{constructor(){H(this,"stoneMaskPower",0);H(this,"hamonEnergy",100);H(this,"nextLineIsCorrect",!1);H(this,"standActive",!1);H(this,"standName","MEOW PLATINUM");H(this,"stardustItensity",0);H(this,"hairInsultCounter",0);H(this,"rohanDrawingPower",0);H(this,"goldenDreamAwakened",!1);H(this,"tortureDanceActive",!1);H(this,"stringFreePower",0);H(this,"emporioEscapeProgress",0);console.log("🐱 JOJO MODE ACTIVATED!!!"),console.log("*ゴゴゴ menacing energy radiates from the Cat God ゴゴゴ*")}predictNextAction(){const t=["Your next line is: 'That's impossible!'","I predict you will move right","You're going to procreate with the Cat God!","The Sage will use WASD next","A hybrid will spawn in 3... 2... 1...","You're asking 'What's the reference?'","You just realized... IT WAS ME, DIO!","The camera will rotate clockwise"];return t[Math.floor(Math.random()*t.length)]}getYareYareDaze(){const t=["YARE YARE DAZE... another fool approaches","YARE YARE... this game is truly bizarre","YARE YARE DAZE! Such pathetic procreation!","YARE YARE... you thought it would be different?"];return t[Math.floor(Math.random()*t.length)]}getGuretoLines(){const t=["GURETO DAZE! This code is truly great!","GURETO DAZE! Messy code is beautiful code!","Is this your stand... sloppy coding?","GURETO DAZE! I have become... SPECTACULAR!"];return t[Math.floor(Math.random()*t.length)]}activateRoadRollerDa(){return"ROAD ROLLER DA!!!! *compresses space-time* WRYYYYYYY"}activateStoneMaskMode(){console.log("🧛 THE STONE MASK... IT AWAKENS THE VAMPIRE WITHIN"),console.log("💀 WRYYYYYYY! I shall become the ultimate lifeform!"),this.stoneMaskPower=100}breatheHamon(){return this.hamonEnergy=100,"SENDO RIPPLE! The sound of victory! HI-HI-HI-HIIII!"}activateStand(){return this.standActive=!0,"*ORA ORA ORA ORA!* MEOW PLATINUM, ATTACK!"}onHairInsult(){return this.hairInsultCounter++,this.hairInsultCounter<3?"You dare insult my fabulous fur?! I'm not angry... yet...":"DON'T YOU EVER INSULT MY HAIR AGAIN!! *poses dramatically*"}activateTortureDance(){this.tortureDanceActive=!0,this.goldenDreamAwakened=!0,console.log("🎺 TORTURE DANCE ACTIVATED!"),console.log("💛 GIORNO DREAMS OF A GOLDEN MEOW...")}goldExperienceRequiem(){return"GOLD EXPERIENCE REQUIEM! This is... the ultimate CAT FORM!"}activateStoneFree(){return this.stringFreePower=100,"STONE FREE! Break these chains! I am liberated!"}getMenacingText(){return"ゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ"}nigerundayo(t){return`NIGERUNDAYO!!! RUN AWAY FROM THE ${t}!!!`}zaWarudo(){return"ZA WARUDO!!! TIME STOPS! *world freezes* ...5 SECONDS HAVE PASSED"}revealDio(){return"KONO DIO DA!!! IT WAS ME, THE CAT GOD, ALL ALONG!"}wryyyyy(){return"WRYYYYYYYYYYYYY!!! *screams for 5 seconds*"}infiniteLives(){return"I HAVE INFINITE LIVES! NINE TIMES INFINITY! THAT'S EVEN MORE NINE!"}isBizarre(t){return console.log(`Is ${t} bizarre? YES! ABSOLUTELY BIZARRE!`),!0}getRandomJojoReference(){const t=["OI JOSUKE! I just used ZA HANDO and erased all bugs!","STICKY FINGERS! I opened a zipper in space!","I'm gonna say the N-word... NIGERUNDAYO!","Your next line is: 'I don't understand!'","WRYYYYY... this code is truly evil!","*Pillar Men theme plays*","Is this a JoJo reference? YES!","LEGENDARY MEGA... MEOW PLATINUM!","GO BEYOND! PLUS ULTRA... wait wrong anime","This game... is truly... BIZARRE","MUDA MUDA MUDA! *punches ineffectively*","The secret is... HAMON! *breathes mysteriously*","*dramatically points at camera*","BITES ZA DUSTO! *erases your action*","Tell me... do you believe in gravity?","STICKY FINGERS! *opens portal to another dimension*","Tusk Act 4! INFINITE ROTATION MEOW!","DIO'S WORLD... wait no, CAT GOD'S WORLD","Part skipping is not real, you can't hurt me","SAUCE SAUCE SAUCE! *dab dab dab*"];return t[Math.floor(Math.random()*t.length)]}}class K_{constructor(t,e=.4){H(this,"audio");H(this,"started",!1);H(this,"muted",!1);H(this,"boundStart");this.audio=new Audio(t),this.audio.loop=!0,this.audio.volume=e,this.boundStart=()=>this.tryStart(),document.addEventListener("keydown",this.boundStart),document.addEventListener("click",this.boundStart),document.addEventListener("keydown",n=>{n.key.toLowerCase()==="m"&&this.toggleMute()})}tryStart(){this.started||(this.started=!0,document.removeEventListener("keydown",this.boundStart),document.removeEventListener("click",this.boundStart),this.audio.play().catch(t=>{console.warn("audio failed to start, browser said no:",t),this.started=!1,document.addEventListener("keydown",this.boundStart),document.addEventListener("click",this.boundStart)}))}toggleMute(){this.muted=!this.muted,this.audio.muted=this.muted,console.log("music "+(this.muted?"muted (rip nyan cat)":"unmuted (nyan cat returns!!)"))}setVolume(t){this.audio.volume=Math.max(0,Math.min(1,t))}stop(){this.audio.pause(),this.audio.currentTime=0}}class $_ extends ga{constructor(e){super(e);H(this,"clickTimer",Math.random()*2);H(this,"clickInterval",.8+Math.random()*1.2);H(this,"fallSpeed",8+Math.random()*6);H(this,"hasLanded",!1);H(this,"wanderTimer",0);H(this,"audioCtx",null);this.bubbleHeadOffset=2.5,this.mesh=this.buildMesh(),this.mesh.position.copy(this.position),this.dialogues=["DO U KNO DA WEY","SPIT ON HIM BRUDDAS","U DO NOT KNO DA WEY","WE MUST FIND DA QUEEN","DA WEY IS DAT WAY BRUDDA","*CLICKING INTENSIFIES*","BRUDDA BRUDDA BRUDDA","SHOW ME DA WEY"];try{this.audioCtx=new(window.AudioContext||window.webkitAudioContext)}catch{}}buildMesh(){const e=new Te,n=new jt(1.1,20,20),i=new Ot({color:9117728,roughness:.7}),s=new K(n,i);s.castShadow=!0,e.add(s);const o=new jt(.85,16,16),a=new Ot({color:12869694,roughness:.8}),c=new K(o,a);c.position.set(0,-.05,.35),c.scale.set(1,.9,.6),e.add(c);const l=new jt(.28,12,12),u=new qt({color:16777215}),d=new K(l,u);d.position.set(-.32,.2,.9),e.add(d);const h=new K(l,u);h.position.set(.32,.2,.9),e.add(h);const f=new jt(.18,8,8),g=new qt({color:1118481}),_=new K(f,g);_.position.set(-.3,.2,1.1),e.add(_);const p=new K(f,g);p.position.set(.3,.2,1.1),e.add(p);const m=new we(.9,.3,.25),v=new Ot({color:13378082,roughness:.5}),S=new K(m,v);S.position.set(0,-.1,1.05),S.scale.set(1,.7,1),e.add(S);const y=new jt(.1,6,6),A=new qt({color:6689041}),T=new K(y,A);T.position.set(-.22,-.12,1.15),e.add(T);const C=new K(y,A);C.position.set(.22,-.12,1.15),e.add(C);const x=new Ot({color:7345429,roughness:.9}),b=[{x:-.5,z:0,ry:-.4},{x:-.2,z:.15,ry:-.1},{x:.2,z:.15,ry:.1},{x:.5,z:0,ry:.4},{x:0,z:-.1,ry:0}];for(const nt of b){const Dt=new ze(.18,.8,6),Rt=new K(Dt,x);Rt.position.set(nt.x,1.1,nt.z),Rt.rotation.z=nt.ry,Rt.castShadow=!0,e.add(Rt)}const z=new Ce(.6,.5,.9,8),P=new Ot({color:9117728,roughness:.7}),F=new K(z,P);F.position.set(0,-1.4,0),F.castShadow=!0,e.add(F);const I=new Ce(.18,.15,.75,6),N=new Ot({color:9117728,roughness:.7}),L=new K(I,N);L.position.set(-.85,-1.3,0),L.rotation.z=Math.PI/3,L.castShadow=!0,e.add(L);const D=new K(I,N);D.position.set(.85,-1.3,0),D.rotation.z=-Math.PI/3,D.castShadow=!0,e.add(D);const B=new ze(.08,.35,5),j=new Ot({color:13421772,metalness:.6}),Y=[{x:-1.3,y:-1.05,z:.12},{x:-1.3,y:-1.05,z:-.12},{x:1.3,y:-1.05,z:.12},{x:1.3,y:-1.05,z:-.12}];for(const nt of Y){const Dt=new K(B,j);Dt.position.set(nt.x,nt.y,nt.z),Dt.rotation.z=nt.x<0?-Math.PI/2.2:Math.PI/2.2,e.add(Dt)}const it=new Ce(.2,.22,.6,6),at=new Ot({color:7345429,roughness:.8}),J=new K(it,at);J.position.set(-.3,-2.05,0),e.add(J);const At=new K(it,at);At.position.set(.3,-2.05,0),e.add(At);const Yt=new we(.45,.3,.6),Ht=new Ot({color:14487825}),$=new K(Yt,Ht);$.position.set(-.3,-2.5,.1),e.add($);const ot=new K(Yt,Ht);return ot.position.set(.3,-2.5,.1),e.add(ot),e}doClickSound(){if(this.audioCtx)try{const e=this.audioCtx.sampleRate*.04,n=this.audioCtx.createBuffer(1,e,this.audioCtx.sampleRate),i=n.getChannelData(0);for(let a=0;a<e;a++)i[a]=(Math.random()*2-1)*Math.pow(1-a/e,8);const s=this.audioCtx.createBufferSource();s.buffer=n;const o=this.audioCtx.createGain();o.gain.value=.3,s.connect(o),o.connect(this.audioCtx.destination),s.start()}catch{}}update(e){if(!this.hasLanded){this.position.y-=this.fallSpeed*e,this.mesh.rotation.x+=e*3,this.position.y<=2&&(this.position.y=2,this.hasLanded=!0,this.mesh.rotation.x=0,console.log("🦔 *THUD* DO U KNO DA WEY")),this.mesh.position.copy(this.position);return}this.randomWalk(e,4+Math.random()*.5),this.clickTimer+=e,this.clickTimer>=this.clickInterval&&(this.clickTimer=0,this.clickInterval=.6+Math.random()*1.4,this.doClickSound(),Math.random()<.3&&this.speak()),this.wanderTimer+=e*8,this.mesh.position.y=this.position.y+Math.abs(Math.sin(this.wanderTimer))*.3}getType(){return"ugandan_knuckles"}}class Z_{constructor(t){H(this,"scene");H(this,"activeKnuckles",[]);H(this,"eventTimer",0);H(this,"eventCooldown",25+Math.random()*35);H(this,"isEventActive",!1);H(this,"spawnBurst",0);H(this,"burstTimer",0);H(this,"burstInterval",.18);H(this,"onAnnounce",null);H(this,"MAX_KNUCKLES",20);this.scene=t}setAnnounceCallback(t){this.onAnnounce=t}update(t,e){this.eventTimer+=t,!this.isEventActive&&this.eventTimer>=this.eventCooldown&&this.startRainEvent(e),this.isEventActive&&this.spawnBurst>0&&(this.burstTimer+=t,this.burstTimer>=this.burstInterval&&(this.burstTimer=0,this.spawnOneKnuckles(e),this.spawnBurst--,this.spawnBurst<=0&&(this.isEventActive=!1,this.eventTimer=0,this.eventCooldown=25+Math.random()*35,console.log("%c🦔 UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING.","color: red; font-size: 14px;"),this.onAnnounce?.("UGANDAN KNUCKLES RAIN COMPLETE. THEY ARE SEARCHING FOR DA QUEEN."))));for(const n of this.activeKnuckles)n.update(t);for(this.activeKnuckles=this.activeKnuckles.filter(n=>n.isAlive()?!0:(this.scene.remove(n.getMesh()),!1));this.activeKnuckles.length>this.MAX_KNUCKLES;){const n=this.activeKnuckles.shift();n.die(),this.scene.remove(n.getMesh())}}startRainEvent(t){this.isEventActive=!0;const e=8+Math.floor(Math.random()*10);this.spawnBurst=e,this.burstTimer=0,console.log("%c🦔 DE UGANDAN KNUCKLES ARE COMING!! DO U KNO DA WEY??","color: red; font-weight: bold; font-size: 16px;"),console.log(`%c🦔 ${e} BRUDDAS DESCEND FROM DA SKY`,"color: darkred; font-size: 13px;"),this.onAnnounce?.(`DE UGANDAN KNUCKLES RAIN HAS BEGUN!! ${e} BRUDDAS ARE DESCENDING FROM DA SKY!!`)}spawnOneKnuckles(t){const e=Math.random()*Math.PI*2,n=Math.random()*40,i=t.x+Math.cos(e)*n,s=t.z+Math.sin(e)*n,o=60+Math.random()*30,a=new $_(new G(i,o,s));this.activeKnuckles.push(a),this.scene.add(a.getMesh())}getActiveCount(){return this.activeKnuckles.length}getTimeUntilNext(){return Math.max(0,this.eventCooldown-this.eventTimer)}}class J_{constructor(){H(this,"messages",[]);H(this,"isOpen",!1);H(this,"MAX_MESSAGES",50);H(this,"onPlayerSend",null);H(this,"chatBox");H(this,"chatLog");H(this,"chatInputWrapper");H(this,"chatInput");H(this,"boundKeyDown");this.chatBox=document.getElementById("chat-box"),this.chatLog=document.getElementById("chat-log"),this.chatInputWrapper=document.getElementById("chat-input-wrapper"),this.chatInput=document.getElementById("chat-input"),this.boundKeyDown=t=>this.handleKey(t),document.addEventListener("keydown",this.boundKeyDown),this.addMessage("system","Welcome to Cat God World. Press ENTER to chat."),this.addMessage("system","Events will be announced here.")}handleKey(t){if(t.key==="Enter")if(!this.isOpen)this.open(),t.preventDefault();else{const e=this.chatInput.value.trim();e.length>0?(this.sendPlayerMessage(e),this.chatInput.value=""):this.close(),t.preventDefault()}else t.key==="Escape"&&this.isOpen&&(this.chatInput.value="",this.close(),t.preventDefault())}open(){this.isOpen=!0,this.chatInputWrapper.style.display="flex",this.chatBox.style.opacity="1",setTimeout(()=>this.chatInput.focus(),10)}close(){this.isOpen=!1,this.chatInputWrapper.style.display="none",this.chatBox.style.opacity="0.6",this.chatInput.blur()}sendPlayerMessage(t){const e=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").substring(0,200);this.addMessage("player",`You: ${e}`),this.onPlayerSend?.(e)}setOnPlayerSend(t){this.onPlayerSend=t}addMessage(t,e){const n={type:t,text:e,timestamp:Date.now()};this.messages.push(n),this.messages.length>this.MAX_MESSAGES&&this.messages.shift(),this.renderMessage(n)}renderMessage(t){const e=document.createElement("div");e.classList.add("chat-msg",`chat-msg-${t.type}`);const n=new Date(t.timestamp),i=`${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}`;e.innerHTML=`<span class="chat-time">[${i}]</span> ${t.text}`,this.chatLog.appendChild(e),this.chatLog.scrollTop=this.chatLog.scrollHeight,this.isOpen||(this.chatBox.style.opacity="1",setTimeout(()=>{this.isOpen||(this.chatBox.style.opacity="0.6")},2e3))}announceEvent(t){this.addMessage("event",`📢 ${t}`)}announceKnuckles(t){this.addMessage("knuckles",`🦔 ${t}`)}announceCatGod(t){this.addMessage("catgod",`🐱 ${t}`)}isInputOpen(){return this.isOpen}}class Q_{constructor(t){H(this,"camera");H(this,"container");H(this,"activeBubbles",[]);H(this,"FADE_MS",600);this.camera=t,this.container=document.createElement("div"),this.container.id="bubble-container",this.container.style.cssText=`
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 150;
        `,document.body.appendChild(this.container)}showBubble(t,e,n=3,i=3*Math.PI*1e3){const s=e.length>80?e.substring(0,77)+"...":e,o=document.createElement("div");o.className="chat-bubble",o.textContent=s;const a=document.createElement("div");a.className="chat-bubble-tail",o.appendChild(a),this.container.appendChild(o);const c={el:o,worldPos:t.clone(),headOffset:n,born:Date.now(),duration:i};this.activeBubbles.push(c)}update(){const t=Date.now(),e=[];for(const n of this.activeBubbles){const i=t-n.born;if(i>n.duration+this.FADE_MS){e.push(n);continue}const s=n.worldPos.clone();s.y+=n.headOffset;const o=new G;if(this.camera.getWorldDirection(o),s.clone().sub(this.camera.position).normalize().dot(o)<0){n.el.style.display="none";continue}n.el.style.display="block";const c=s.clone().project(this.camera),l=(c.x*.5+.5)*window.innerWidth,u=(-c.y*.5+.5)*window.innerHeight,d=this.camera.position.distanceTo(s),h=Math.max(.3,Math.min(1,18/d)),f=n.el.offsetWidth;if(n.el.style.left=`${l-f/2}px`,n.el.style.top=`${u-n.el.offsetHeight}px`,n.el.style.transform=`scale(${h})`,n.el.style.transformOrigin="bottom center",i>n.duration){const g=(i-n.duration)/this.FADE_MS;n.el.style.opacity=String(1-g)}else n.el.style.opacity="1"}for(const n of e)this.container.removeChild(n.el),this.activeBubbles.splice(this.activeBubbles.indexOf(n),1)}showBubbleLive(t,e,n=3,i=3*Math.PI*1e3){const s=e.length>80?e.substring(0,77)+"...":e,o=document.createElement("div");o.className="chat-bubble",o.textContent=s;const a=document.createElement("div");a.className="chat-bubble-tail",o.appendChild(a),this.container.appendChild(o);const c={el:o,worldPos:t,headOffset:n,born:Date.now(),duration:i};this.activeBubbles.push(c)}}class $c{constructor(){H(this,"joystickActive",!1);H(this,"joystickTouchId",-1);H(this,"joystickOriginX",0);H(this,"joystickOriginY",0);H(this,"joystickCurrentX",0);H(this,"joystickCurrentY",0);H(this,"JOYSTICK_RADIUS",55);H(this,"camTouchId",-1);H(this,"camLastX",0);H(this,"camLastY",0);H(this,"camDeltaX",0);H(this,"camDeltaY",0);H(this,"onProcreate",null);H(this,"onMute",null);H(this,"onChat",null);H(this,"joystickZone");H(this,"joystickKnob");H(this,"joystickBase");this.joystickZone=document.getElementById("joystick-zone"),this.joystickKnob=document.getElementById("joystick-knob"),this.joystickBase=document.getElementById("joystick-base"),this.setupTouchListeners()}setupTouchListeners(){this.joystickZone.addEventListener("touchstart",a=>{a.preventDefault();for(const c of Array.from(a.changedTouches))this.joystickTouchId===-1&&(this.joystickTouchId=c.identifier,this.joystickOriginX=c.clientX,this.joystickOriginY=c.clientY,this.joystickCurrentX=c.clientX,this.joystickCurrentY=c.clientY,this.joystickActive=!0,this.joystickBase.style.left=`${c.clientX-50}px`,this.joystickBase.style.top=`${c.clientY-50}px`,this.joystickBase.style.display="block",this.joystickKnob.style.display="block")},{passive:!1}),this.joystickZone.addEventListener("touchmove",a=>{a.preventDefault();for(const c of Array.from(a.changedTouches))if(c.identifier===this.joystickTouchId){this.joystickCurrentX=c.clientX,this.joystickCurrentY=c.clientY;const l=c.clientX-this.joystickOriginX,u=c.clientY-this.joystickOriginY,d=Math.sqrt(l*l+u*u),h=Math.min(d,this.JOYSTICK_RADIUS),f=Math.atan2(u,l),g=this.joystickOriginX+Math.cos(f)*h,_=this.joystickOriginY+Math.sin(f)*h;this.joystickKnob.style.left=`${g-22}px`,this.joystickKnob.style.top=`${_-22}px`}},{passive:!1});const t=a=>{for(const c of Array.from(a.changedTouches))c.identifier===this.joystickTouchId&&(this.joystickTouchId=-1,this.joystickActive=!1,this.joystickBase.style.display="none",this.joystickKnob.style.display="none")};this.joystickZone.addEventListener("touchend",t),this.joystickZone.addEventListener("touchcancel",t);const e=document.getElementById("cam-zone");e.addEventListener("touchstart",a=>{a.preventDefault();for(const c of Array.from(a.changedTouches))this.camTouchId===-1&&(this.camTouchId=c.identifier,this.camLastX=c.clientX,this.camLastY=c.clientY,this.camDeltaX=0,this.camDeltaY=0)},{passive:!1}),e.addEventListener("touchmove",a=>{a.preventDefault();for(const c of Array.from(a.changedTouches))c.identifier===this.camTouchId&&(this.camDeltaX=c.clientX-this.camLastX,this.camDeltaY=c.clientY-this.camLastY,this.camLastX=c.clientX,this.camLastY=c.clientY)},{passive:!1});const n=a=>{for(const c of Array.from(a.changedTouches))c.identifier===this.camTouchId&&(this.camTouchId=-1,this.camDeltaX=0,this.camDeltaY=0)};e.addEventListener("touchend",n),e.addEventListener("touchcancel",n);const i=document.getElementById("btn-procreate"),s=document.getElementById("btn-mute"),o=document.getElementById("btn-chat");i&&i.addEventListener("touchstart",a=>{a.preventDefault(),this.onProcreate?.()},{passive:!1}),s&&s.addEventListener("touchstart",a=>{a.preventDefault(),this.onMute?.()},{passive:!1}),o&&o.addEventListener("touchstart",a=>{a.preventDefault(),this.onChat?.()},{passive:!1})}getJoystick(){if(!this.joystickActive)return{dx:0,dy:0};const t=this.joystickCurrentX-this.joystickOriginX,e=this.joystickCurrentY-this.joystickOriginY,n=Math.sqrt(t*t+e*e);if(n<5)return{dx:0,dy:0};const i=Math.min(n,this.JOYSTICK_RADIUS);return{dx:t/n*(i/this.JOYSTICK_RADIUS),dy:e/n*(i/this.JOYSTICK_RADIUS)}}consumeCamDelta(){const t={dx:this.camDeltaX,dy:this.camDeltaY};return this.camDeltaX=0,this.camDeltaY=0,t}static isMobile(){return"ontouchstart"in window||navigator.maxTouchPoints>0}}class Zc{constructor(){H(this,"renderEngine");H(this,"catGod");H(this,"npcManager");H(this,"worldGenerator");H(this,"playerTracker");H(this,"sageCharacter");H(this,"physicsWorld");H(this,"procreationSystem");H(this,"cameraController");H(this,"jojoSystem");H(this,"ugandanKnucklesEvent");H(this,"chat");H(this,"bubbles");H(this,"mobileControls",null);H(this,"audioManager");H(this,"scene");H(this,"keyPressed",{});H(this,"jojoMessageCounter",0);this.renderEngine=new h0,this.scene=this.renderEngine.getScene(),this.physicsWorld=new W_,this.physicsWorld.addGround(500,500),this.playerTracker=new m0,this.npcManager=new f0(this.scene),this.worldGenerator=new p0(this.scene),this.catGod=new u0(this.scene),this.sageCharacter=new g0(this.scene),this.procreationSystem=new q_,this.cameraController=new Y_(this.renderEngine.getCamera()),this.jojoSystem=new j_,this.audioManager=new K_("./nyan-cat.mp3",.4),this.ugandanKnucklesEvent=new Z_(this.scene),this.chat=new J_,this.ugandanKnucklesEvent.setAnnounceCallback(e=>this.chat.announceKnuckles(e)),this.bubbles=new Q_(this.renderEngine.getCamera());const t=(e,n,i)=>this.bubbles.showBubbleLive(e,n,i);this.npcManager.setBubbleCallback(t),this.catGod.setSpeakCallback(t),this.sageCharacter.setBubbleCallback(t),this.chat.setOnPlayerSend(e=>this.sageCharacter.showBubble(e)),$c.isMobile()&&(this.mobileControls=new $c,this.mobileControls.onProcreate=()=>{const e=this.procreationSystem.procreate(this.sageCharacter.getPosition(),this.catGod.position,this.scene);e&&this.npcManager.addNPC(e)},this.mobileControls.onMute=()=>{this.audioManager.toggleMute()},this.mobileControls.onChat=()=>{this.chat.open()}),this.setupKeyboardControls(),this.worldGenerator.generateInitialWorld(),this.setupLighting(),this.start()}setupKeyboardControls(){document.addEventListener("keydown",t=>{if(this.keyPressed[t.key.toLowerCase()]=!0,t.key.toLowerCase()==="p"){const e=this.procreationSystem.procreate(this.sageCharacter.getPosition(),this.catGod.position,this.scene);e&&this.npcManager.addNPC(e)}}),document.addEventListener("keyup",t=>{this.keyPressed[t.key.toLowerCase()]=!1})}setupLighting(){const t=new du(16777215,.6);this.scene.add(t);const e=new uu(16777215,.8);e.position.set(50,100,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,this.scene.add(e);const n=new Zo(8900331,.3);n.position.set(-50,50,50),this.scene.add(n)}start(){const t=()=>{requestAnimationFrame(t);const e=1/60;let n=0,i=0;if(this.mobileControls){const o=this.mobileControls.getJoystick();n=o.dx,i=o.dy;const a=this.mobileControls.consumeCamDelta();(a.dx!==0||a.dy!==0)&&this.cameraController.applyTouchDelta(a.dx,a.dy)}this.physicsWorld.update(e),this.sageCharacter.update(e,this.cameraController.getOrbitAngleY(),this.chat.isInputOpen(),n,i),this.catGod.update(e,this.sageCharacter.getPosition()),this.npcManager.update(e),this.worldGenerator.update(e,this.sageCharacter.getPosition()),this.ugandanKnucklesEvent.update(e,this.sageCharacter.getPosition()),this.bubbles.update();const s=this.sageCharacter.getPosition();this.cameraController.setFollowTarget(s,s),this.cameraController.update(),this.playerTracker.update(),this.jojoMessageCounter++,this.jojoMessageCounter%180===0&&(console.log(`%c${this.jojoSystem.getRandomJojoReference()}`,"color: gold; font-size: 16px; font-weight: bold;"),console.log("%cゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ","color: purple; font-size: 14px;")),this.updateUI(),this.renderEngine.render()};t()}updateUI(){const t=document.getElementById("playerKills"),e=document.getElementById("npcStats"),n=document.getElementById("procreation");if(t&&(t.textContent=`Player Kills: ${this.playerTracker.getKillCount()}`),e){const i=this.ugandanKnucklesEvent.getActiveCount(),s=i>0?` | Bruddas: ${i}`:"";e.textContent=`NPCs: ${this.npcManager.getNPCCount()} | Buildings: ${this.worldGenerator.getBuildingCount()} | Offspring: ${this.procreationSystem.getOffspringCount()}${s}`}if(n){const i=this.procreationSystem.getDistance(this.sageCharacter.getPosition(),this.catGod.position);n.textContent=this.procreationSystem.getCanProcreateMessage(i)}}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{new Zc}):new Zc;
