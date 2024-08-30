"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[75070],{54907:function(t,n,e){var r,i,o,a,u,s,c,l,f,p,N,d,g,m,S;e.d(n,{$1:function(){return l},AQ:function(){return c},Em:function(){return b},Lz:function(){return a},MB:function(){return r},Nl:function(){return S},Q3:function(){return h},Qd:function(){return g},aw:function(){return o},jE:function(){return m},l7:function(){return i},xL:function(){return u}}),function(t){t.U8="U8",t.I8="I8",t.U16="U16",t.I16="I16",t.U32="U32",t.I32="I32",t.F32="F32",t.F64="F64",t.Utf8String="Utf8String",t.NotSet="NotSet"}(r||(r={})),function(t){t.Png="Png",t.Jpeg="Jpeg",t.Dds="Dds",t.Raw="Raw",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Etc2="Etc2",t.Astc="Astc",t.Pvrtc="Pvrtc",t.NotSet="NotSet"}(i||(i={})),function(t){t.Rgb8="Rgb8",t.Rgba8="Rgba8",t.R8="R8",t.Bgr8="Bgr8",t.Bgra8="Bgra8",t.Rg8="Rg8",t.NotSet="NotSet"}(o||(o={})),function(t){t.Position="Position",t.Normal="Normal",t.TexCoord="TexCoord",t.Color="Color",t.Tangent="Tangent",t.FeatureIndex="FeatureIndex",t.UvRegion="UvRegion",t.NotSet="NotSet"}(a||(a={})),function(t){t.Opaque="Opaque",t.Mask="Mask",t.Blend="Blend"}(u||(u={})),function(t){t.None="None",t.Mask="Mask",t.Alpha="Alpha",t.PreMultAlpha="PreMultAlpha",t.NotSet="NotSet"}(s||(s={})),function(t){t.Points="Points",t.Lines="Lines",t.LineStrip="LineStrip",t.Triangles="Triangles",t.TriangleStrip="TriangleStrip",t.NotSet="NotSet"}(c||(c={})),function(t){t.None="None",t.WrapXBit="WrapXBit",t.WrapYBit="WrapYBit",t.WrapXy="WrapXy",t.NotSet="NotSet"}(l||(l={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NotSet="NotSet"}(f||(f={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NearestMipmapNearest="NearestMipmapNearest",t.LinearMipmapNearest="LinearMipmapNearest",t.NearestMipmapLinear="NearestMipmapLinear",t.LinearMipmapLinear="LinearMipmapLinear",t.NotSet="NotSet"}(p||(p={})),function(t){t.FeatureId="FeatureId",t.GlobalUid="GlobalUid",t.UnspecifiedDateTime="UnspecifiedDateTime",t.EcmaIso8601DateTime="EcmaIso8601DateTime",t.EcmaIso8601DateOnly="EcmaIso8601DateOnly",t.TimeOnly="TimeOnly",t.TimeStamp="TimeStamp",t.ColorRgb="ColorRgb",t.ColorRgba="ColorRgba",t.Unrecognized="Unrecognized",t.NotSet="NotSet"}(N||(N={})),function(t){t.Texture="Texture",t.VertexAtrb="VertexAtrb",t.Implicit="Implicit",t.NotSet="NotSet"}(d||(d={})),function(t){t.Front="Front",t.Back="Back",t.None="None",t.NotSet="NotSet"}(g||(g={})),function(t){t.Pbr="Pbr",t.Unlit="Unlit"}(m||(m={})),function(t){t[t.Succeeded=0]="Succeeded",t[t.Failed=1]="Failed",t[t.MissingInputs=2]="MissingInputs"}(S||(S={}));var h=-1,b=-2},65685:function(t,n,e){e.d(n,{J:function(){return o},O:function(){return i}});var r=e(65905);function i(){return new Promise((function(t){return e.e(88638).then(e.bind(e,88638)).then((function(t){return t.l})).then((function(n){var e=(0,n.default)({locateFile:a,onRuntimeInitialized:function(){return t(e)}})}))})).catch((function(t){throw t}))}function o(){return new Promise((function(t){return e.e(87184).then(e.bind(e,87184)).then((function(t){return t.l})).then((function(n){var e=(0,n.default)({locateFile:a,onRuntimeInitialized:function(){return t(e)}})}))})).catch((function(t){throw t}))}function a(t){return(0,r.V)("esri/libs/lyr3d/".concat(t))}},75070:function(t,n,e){e.r(n),e.d(n,{destroyWasm:function(){return p},initialize:function(){return N},process:function(){return l}});var r,i,o=e(74165),a=e(37762),u=e(15861),s=e(54907),c=e(65685);function l(t){return f.apply(this,arguments)}function f(){return f=(0,u.Z)((0,o.Z)().mark((function t(n){var e,r,u,c,l,f,p,d,g,m,S,h,b,I;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:if(!(n.inputs.length<1)){t.next=4;break}return t.abrupt("return",{result:{status:s.Nl.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]});case 4:e={ptrs:[],sizes:[]},r=(0,a.Z)(n.inputs);try{for(r.s();!(u=r.n()).done;)c=u.value,l=i._malloc(c.byteLength),new Uint8Array(i.HEAPU8.buffer,l,c.byteLength).set(new Uint8Array(c)),e.ptrs.push(l),e.sizes.push(c.byteLength)}catch(o){r.e(o)}finally{r.f()}for(f=i.process(n.jobDescJson,e,n.isMissingResourceCase),p=f.status===s.Nl.Succeeded&&f.data,d=f.status===s.Nl.MissingInputs&&f.missingInputUrls.length>0,p?(g=f.data.slice(),f.data=g):d&&(f.jobDescJson=f.jobDescJson.slice(0),f.originalInputs=n.inputs),m=0;m<e.ptrs.length;++m)i._free(e.ptrs[m]);if(S=[],p)S.push(f.data.buffer);else if(d){h=(0,a.Z)(n.inputs);try{for(h.s();!(b=h.n()).done;)I=b.value,S.push(I)}catch(o){h.e(o)}finally{h.f()}}return t.abrupt("return",{result:f,transferList:S});case 13:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function p(){i&&(i.uninitialize_lyr3d_worker_wasm(),i=null)}function N(){return i?Promise.resolve():(r||(r=(0,c.J)().then((function(t){(i=t).initialize_lyr3d_worker_wasm(),r=null}))),r)}}}]);
//# sourceMappingURL=75070.5f05811d.chunk.js.map