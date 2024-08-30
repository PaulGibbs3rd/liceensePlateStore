"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[74578],{74578:function(e,t,i){i.r(t),i.d(t,{default:function(){return g}});var n=i(15671),a=i(43144),l=i(16889),s={};s.defaultNoDataValue=(0,l.oK)(-1/0),s.decode=function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,n=u(e,t.inputOffset||0,i),a=null!=t.noDataValue?(0,l.oK)(t.noDataValue):s.defaultNoDataValue,m=r(n,t.pixelType||Float32Array,t.encodedMaskData,a,t.returnMask),c={width:n.width,height:n.height,pixelData:m.resultPixels,minValue:n.pixels.minValue,maxValue:n.pixels.maxValue,noDataValue:a};return m.resultMask&&(c.maskData=m.resultMask),t.returnEncodedMask&&n.mask&&(c.encodedMaskData=n.mask.bitset?n.mask.bitset:null),t.returnFileInfo&&(c.fileInfo=o(n,a),t.computeUsedBitDepths&&(c.fileInfo.bitDepths=f(n))),c};var r=function(e,t,i,n,a){var l,s,r=0,o=e.pixels.numBlocksX,f=e.pixels.numBlocksY,u=Math.floor(e.width/o),c=Math.floor(e.height/f),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(s=new Uint8Array(e.width*e.height));for(var g,h,k=new Float32Array(u*c),x=0;x<=f;x++){var w=x!==f?c:e.height%f;if(0!==w)for(var p=0;p<=o;p++){var y=p!==o?u:e.width%o;if(0!==y){var V,v,B,U,D=x*e.width*c+p*u,b=e.width-y,M=e.pixels.blocks[r];if(M.encoding<2?(0===M.encoding?V=M.rawData:(m(M.stuffedData,M.bitsPerPixel,M.numValidPixels,M.offset,d,k,e.pixels.maxValue),V=k),v=0):B=2===M.encoding?0:M.offset,i)for(h=0;h<w;h++){for(7&D&&(U=i[D>>3],U<<=7&D),g=0;g<y;g++)7&D||(U=i[D>>3]),128&U?(s&&(s[D]=1),l[D++]=M.encoding<2?V[v++]:B):(s&&(s[D]=0),l[D++]=n),U<<=1;D+=b}else if(M.encoding<2)for(h=0;h<w;h++){for(g=0;g<y;g++)l[D++]=V[v++];D+=b}else for(h=0;h<w;h++)if(l.fill)l.fill(B,D,D+y),D+=y+b;else{for(g=0;g<y;g++)l[D++]=B;D+=b}if(1===M.encoding&&v!==M.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:l,resultMask:s}},o=function(e,t){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:t}}},f=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},u=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue||(s=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=s);l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,c=n.pixels.numBlocksY,d=m+(n.width%m>0?1:0),g=c+(n.height%c>0?1:0);n.pixels.blocks=new Array(d*g);for(var h=1e9,k=0,x=0;x<g;x++)for(var w=0;w<d;w++){var p=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var v=l.getUint8(0);if(p++,V.encoding=63&v,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==v&&2!==v){if(v>>=6,V.offsetType=v,2===v)V.offset=l.getInt8(1),p++;else if(1===v)V.offset=l.getInt16(1,!0),p+=2;else{if(0!==v)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),p+=4}if(h=Math.min(V.offset,h),1===V.encoding)if(v=l.getUint8(p),p++,V.bitsPerPixel=63&v,v>>=6,V.numValidPixelsType=v,2===v)V.numValidPixels=l.getUint8(p),p++;else if(1===v)V.numValidPixels=l.getUint16(p,!0),p+=2;else{if(0!==v)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(p,!0),p+=4}}var B;if(t+=p,3!=V.encoding)if(0===V.encoding){var U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";B=new ArrayBuffer(4*U),new Uint8Array(B).set(new Uint8Array(e,t,4*U));for(var D=new Float32Array(B),b=0;b<D.length;b++)h=Math.min(h,D[b]);V.rawData=D,t+=4*U}else if(1===V.encoding){var M=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),I=Math.ceil(M/4);B=new ArrayBuffer(4*I),new Uint8Array(B).set(new Uint8Array(e,t,M)),V.stuffedData=new Uint32Array(B),t+=M}}else t++,h=Math.min(h,0)}return n.pixels.minValue=h,n.eofOffset=t,n},m=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,c=0,d=Math.ceil((s-n)/a),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===c&&(f=e[m++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var h=t-c;o=(f&u)<<h&u,o+=(f=e[m++])>>>(c=32-h)}l[r]=o<d?n+o*a:s}return l},c=s.decode,d=function(){function e(){(0,n.Z)(this,e)}return(0,a.Z)(e,[{key:"_decode",value:function(e){var t=c(e.buffer,e.options);return Promise.resolve({result:t,transferList:[t.pixelData.buffer]})}}]),e}();function g(){return new d}}}]);
//# sourceMappingURL=74578.171e5cd4.chunk.js.map