"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[29417],{40653:function(t,e,i){i.d(e,{Z:function(){return h}});var r,o=i(15671),a=i(43144),l=i(60136),s=i(29388),n=i(27366),u=i(52639),p=i(44055),d=i(51508),y=i(11582),m=i(46784),b=i(49861),c=(i(93169),i(32718),i(84936),i(69912)),T=i(29909),v=i(49022),C=r=function(t){(0,l.Z)(i,t);var e=(0,s.Z)(i);function i(t){var r;return(0,o.Z)(this,i),(r=e.call(this,t)).directionLineType=null,r.directionPointId=null,r.distance=null,r.duration=null,r.fromLevel=null,r.geometry=null,r.objectId=null,r.popupTemplate=null,r.symbol=null,r.toLevel=null,r.type="direction-line",r}return(0,a.Z)(i,[{key:"toGraphic",value:function(){var t={ObjectID:this.objectId,DirectionLineType:null!=this.directionLineType?v.td.toJSON(this.directionLineType):null,DirectionPointID:this.directionPointId,Meters:this.distance,Minutes:this.duration};return null!=this.fromLevel&&(t.FromLevel=this.fromLevel),null!=this.toLevel&&(t.ToLevel=this.toLevel),new u.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}}],[{key:"fromGraphic",value:function(t){var e,i,o;return new r({directionLineType:v.td.fromJSON(t.attributes.DirectionLineType),directionPointId:t.attributes.DirectionPointID,distance:t.attributes.Meters,duration:t.attributes.Minutes,fromLevel:null!==(e=t.attributes.FromLevel)&&void 0!==e?e:null,geometry:t.geometry,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,symbol:t.symbol,toLevel:null!==(o=t.attributes.ToLevel)&&void 0!==o?o:null})}}]),i}((0,y.J)(m.wq));C.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"DirectionLineType",alias:"Line Type",type:"esriFieldTypeInteger"},{name:"DirectionPointID",alias:"Direction Point ID",type:"esriFieldTypeInteger"},{name:"FromLevel",alias:"From Level",type:"esriFieldTypeInteger"},{name:"Meters",alias:"Meters",type:"esriFieldTypeDouble"},{name:"Minutes",alias:"Minutes",type:"esriFieldTypeDouble"},{name:"ToLevel",alias:"To Level",type:"esriFieldTypeInteger"}],(0,n._)([(0,b.Cb)({type:v.td.apiValues,json:{read:{source:"attributes.DirectionLineType",reader:v.td.read}}})],C.prototype,"directionLineType",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.DirectionPointID"}}})],C.prototype,"directionPointId",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.Meters"}}})],C.prototype,"distance",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.Minutes"}}})],C.prototype,"duration",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.FromLevel"}}})],C.prototype,"fromLevel",void 0),(0,n._)([(0,b.Cb)({type:T.Z})],C.prototype,"geometry",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.ObjectID"}}})],C.prototype,"objectId",void 0),(0,n._)([(0,b.Cb)({type:p.Z})],C.prototype,"popupTemplate",void 0),(0,n._)([(0,b.Cb)({types:d.LB})],C.prototype,"symbol",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.ToLevel"}}})],C.prototype,"toLevel",void 0),(0,n._)([(0,b.Cb)({readOnly:!0,json:{read:!1}})],C.prototype,"type",void 0);var h=C=r=(0,n._)([(0,c.j)("esri.rest.support.DirectionLine")],C)},54889:function(t,e,i){i.d(e,{Z:function(){return f}});var r,o=i(15671),a=i(43144),l=i(60136),s=i(29388),n=i(27366),u=i(52639),p=i(44055),d=i(51508),y=i(11582),m=i(46784),b=i(49861),c=(i(93169),i(32718),i(84936),i(38511)),T=i(69912),v=i(848),C=i(49022),h=r=function(t){(0,l.Z)(i,t);var e=(0,s.Z)(i);function i(t){var r;return(0,o.Z)(this,i),(r=e.call(this,t)).alternateName=null,r.arrivalTime=null,r.arrivalTimeOffset=null,r.azimuth=null,r.branchName=null,r.directionPointType=null,r.displayText=null,r.exitName=null,r.geometry=null,r.intersectingName=null,r.level=null,r.name=null,r.objectId=null,r.popupTemplate=null,r.sequence=null,r.shortVoiceInstruction=null,r.stopId=null,r.symbol=null,r.towardName=null,r.type="direction-point",r.voiceInstruction=null,r}return(0,a.Z)(i,[{key:"readArrivalTime",value:function(t,e){return null!=e.attributes.ArrivalTime?new Date(e.attributes.ArrivalTime):null}},{key:"toGraphic",value:function(){var t={ObjectID:this.objectId,DirectionPointType:null!=this.directionPointType?C.cW.toJSON(this.directionPointType):null,Sequence:this.sequence,StopID:this.stopId};return null!=this.alternateName&&(t.AlternateName=this.alternateName),null!=this.arrivalTime&&(t.ArrivalTime=this.arrivalTime.getTime()),null!=this.arrivalTimeOffset&&(t.ArrivalUTCOffset=this.arrivalTimeOffset),null!=this.azimuth&&(t.Azimuth=this.azimuth),null!=this.branchName&&(t.BranchName=this.branchName),null!=this.displayText&&(t.DisplayText=this.displayText),null!=this.exitName&&(t.ExitName=this.exitName),null!=this.intersectingName&&(t.IntersectingName=this.intersectingName),null!=this.level&&(t.Level=this.level),null!=this.name&&(t.Name=this.name),null!=this.shortVoiceInstruction&&(t.ShortVoiceInstruction=this.shortVoiceInstruction),null!=this.towardName&&(t.TowardName=this.towardName),null!=this.voiceInstruction&&(t.VoiceInstruction=this.voiceInstruction),new u.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}}],[{key:"fromGraphic",value:function(t){var e,i,o,a,l,s,n,u,p,d,y,m,b,c;return new r({alternateName:null!==(e=t.attributes.AlternateName)&&void 0!==e?e:null,arrivalTime:null!=t.attributes.ArrivalTime?new Date(t.attributes.ArrivalTime):null,arrivalTimeOffset:null!==(i=t.attributes.ArrivalUTCOffset)&&void 0!==i?i:null,azimuth:null!==(o=t.attributes.Azimuth)&&void 0!==o?o:null,branchName:null!==(a=t.attributes.BranchName)&&void 0!==a?a:null,directionPointType:C.cW.fromJSON(t.attributes.DirectionPointType),displayText:null!==(l=t.attributes.DisplayText)&&void 0!==l?l:null,exitName:null!==(s=t.attributes.ExitName)&&void 0!==s?s:null,geometry:t.geometry,intersectingName:null!==(n=t.attributes.IntersectingName)&&void 0!==n?n:null,level:null!==(u=t.attributes.Level)&&void 0!==u?u:null,name:null!==(p=t.attributes.Name)&&void 0!==p?p:null,objectId:null!==(d=t.attributes.ObjectID)&&void 0!==d?d:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,sequence:t.attributes.Sequence,shortVoiceInstruction:null!==(y=t.attributes.ShortVoiceInstruction)&&void 0!==y?y:null,stopId:null!==(m=t.attributes.StopID)&&void 0!==m?m:null,symbol:t.symbol,towardName:null!==(b=t.attributes.TowardName)&&void 0!==b?b:null,voiceInstruction:null!==(c=t.attributes.VoiceInstruction)&&void 0!==c?c:null})}}]),i}((0,y.J)(m.wq));h.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AlternateName",alias:"Alternative Name",type:"esriFieldTypeString"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time Offset",type:"esriFieldTypeInteger"},{name:"Azimuth",alias:"Azimuth",type:"esriFieldTypeDouble"},{name:"BranchName",alias:"Branch Name",type:"esriFieldTypeString"},{name:"DirectionPointType",alias:"Directions Point Type",type:"esriFieldTypeInteger"},{name:"DisplayText",alias:"Display Text",type:"esriFieldTypeString"},{name:"ExitName",alias:"Exit Name",type:"esriFieldTypeString"},{name:"IntersectingName",alias:"Intersecting Name",type:"esriFieldTypeString"},{name:"Level",alias:"Level",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ShortVoiceInstruction",alias:"Short Voice Instruction",type:"esriFieldTypeString"},{name:"StopID",alias:"Stop ID",type:"esriFieldTypeInteger"},{name:"TowardName",alias:"Toward Name",type:"esriFieldTypeString"},{name:"VoiceInstruction",alias:"Voice Instruction",type:"esriFieldTypeString"}],(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.AlternateName"}}})],h.prototype,"alternateName",void 0),(0,n._)([(0,b.Cb)()],h.prototype,"arrivalTime",void 0),(0,n._)([(0,c.r)("arrivalTime",["attributes.ArrivalTime"])],h.prototype,"readArrivalTime",null),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.ArrivalUTCOffset"}}})],h.prototype,"arrivalTimeOffset",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.Azimuth"}}})],h.prototype,"azimuth",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.BranchName"}}})],h.prototype,"branchName",void 0),(0,n._)([(0,b.Cb)({type:C.cW.apiValues,json:{read:{source:"attributes.DirectionPointType",reader:C.cW.read}}})],h.prototype,"directionPointType",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.DisplayText"}}})],h.prototype,"displayText",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.ExitName"}}})],h.prototype,"exitName",void 0),(0,n._)([(0,b.Cb)({type:v.Z})],h.prototype,"geometry",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.IntersectingName"}}})],h.prototype,"intersectingName",void 0),(0,n._)([(0,b.Cb)()],h.prototype,"level",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.Name"}}})],h.prototype,"name",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.ObjectID"}}})],h.prototype,"objectId",void 0),(0,n._)([(0,b.Cb)({type:p.Z})],h.prototype,"popupTemplate",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.Sequence"}}})],h.prototype,"sequence",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.ShortVoiceInstruction"}}})],h.prototype,"shortVoiceInstruction",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.StopID"}}})],h.prototype,"stopId",void 0),(0,n._)([(0,b.Cb)({types:d.LB})],h.prototype,"symbol",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.TowardName"}}})],h.prototype,"towardName",void 0),(0,n._)([(0,b.Cb)({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.VoiceInstruction"}}})],h.prototype,"voiceInstruction",void 0);var f=h=r=(0,n._)([(0,T.j)("esri.rest.support.DirectionPoint")],h)},16406:function(t,e,i){i.d(e,{Z:function(){return I}});var r,o=i(15671),a=i(43144),l=i(60136),s=i(29388),n=i(27366),u=i(52639),p=i(44055),d=i(51508),y=i(11582),m=i(46784),b=i(49861),c=(i(93169),i(32718),i(84936),i(38511)),T=i(69912),v=i(31201),C=i(848),h=i(3321),f=i(49022),_=r=function(t){(0,l.Z)(i,t);var e=(0,s.Z)(i);function i(t){var r;return(0,o.Z)(this,i),(r=e.call(this,t)).addedCost=null,r.barrierType=null,r.costs=null,r.curbApproach=null,r.fullEdge=null,r.geometry=null,r.name=null,r.objectId=null,r.popupTemplate=null,r.sideOfEdge=null,r.sourceId=null,r.sourceOid=null,r.status=null,r.symbol=null,r.type="point-barrier",r}return(0,a.Z)(i,[{key:"readCosts",value:function(t,e){return(0,h.DE)(e.attributes,"Attr_")}},{key:"writeCosts",value:function(t,e){(0,h.nY)(t,e,"Attr_")}},{key:"toGraphic",value:function(){var t={ObjectID:this.objectId,AddedCost:this.addedCost,BarrierType:null!=this.barrierType?f.oi.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify((0,h.co)(this.costs)):null,CurbApproach:null!=this.curbApproach?f.W7.toJSON(this.curbApproach):null,FullEdge:null!=this.fullEdge?f.Dd.toJSON(this.fullEdge):null,Name:this.name,Status:null!=this.status?f.SS.toJSON(this.status):null};return new u.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}}],[{key:"fromGraphic",value:function(t){var e,i,o;return new r({addedCost:null!==(e=t.attributes.AddedCost)&&void 0!==e?e:null,barrierType:null!=t.attributes.BarrierType?f.oi.fromJSON(t.attributes.BarrierType):null,costs:null!=t.attributes.Costs?(0,h.EQ)(JSON.parse(t.attributes.Costs)):null,curbApproach:null!=t.attributes.CurbApproach?f.W7.fromJSON(t.attributes.CurbApproach):null,fullEdge:null!=t.attributes.FullEdge?f.Dd.fromJSON(t.attributes.FullEdge):null,geometry:t.geometry,name:null!==(i=t.attributes.Name)&&void 0!==i?i:null,objectId:null!==(o=t.attributes.ObjectID)&&void 0!==o?o:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,status:null!=t.attributes.Status?f.SS.fromJSON(t.attributes.Status):null,symbol:t.symbol})}}]),i}((0,y.J)(m.wq));_.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AddedCost",alias:"Added Cost",type:"esriFieldTypeDouble"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger"},{name:"FullEdge",alias:"Full Edge",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"}],(0,n._)([(0,b.Cb)()],_.prototype,"addedCost",void 0),(0,n._)([(0,b.Cb)({type:f.oi.apiValues,json:{name:"attributes.BarrierType",read:{reader:f.oi.read},write:{writer:f.oi.write}}})],_.prototype,"barrierType",void 0),(0,n._)([(0,b.Cb)()],_.prototype,"costs",void 0),(0,n._)([(0,c.r)("costs",["attributes"])],_.prototype,"readCosts",null),(0,n._)([(0,v.c)("costs")],_.prototype,"writeCosts",null),(0,n._)([(0,b.Cb)({constructOnly:!0,type:f.W7.apiValues,json:{read:{source:"attributes.CurbApproach",reader:f.W7.read}}})],_.prototype,"curbApproach",void 0),(0,n._)([(0,b.Cb)({type:f.Dd.apiValues,json:{name:"attributes.FullEdge",read:{reader:f.Dd.read},write:{writer:f.Dd.write}}})],_.prototype,"fullEdge",void 0),(0,n._)([(0,b.Cb)({type:C.Z,json:{write:!0}})],_.prototype,"geometry",void 0),(0,n._)([(0,b.Cb)({json:{name:"attributes.Name"}})],_.prototype,"name",void 0),(0,n._)([(0,b.Cb)({json:{name:"attributes.ObjectID"}})],_.prototype,"objectId",void 0),(0,n._)([(0,b.Cb)({type:p.Z})],_.prototype,"popupTemplate",void 0),(0,n._)([(0,b.Cb)({type:f.BW.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:f.BW.read}}})],_.prototype,"sideOfEdge",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.SourceID"}}})],_.prototype,"sourceId",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.SourceOID"}}})],_.prototype,"sourceOid",void 0),(0,n._)([(0,b.Cb)({type:f.SS.apiValues,json:{read:{source:"attributes.Status",reader:f.SS.read}}})],_.prototype,"status",void 0),(0,n._)([(0,b.Cb)({types:d.LB})],_.prototype,"symbol",void 0),(0,n._)([(0,b.Cb)({readOnly:!0,json:{read:!1}})],_.prototype,"type",void 0);var I=_=r=(0,n._)([(0,T.j)("esri.rest.support.PointBarrier")],_)},44745:function(t,e,i){i.d(e,{Z:function(){return I}});var r,o=i(15671),a=i(43144),l=i(60136),s=i(29388),n=i(27366),u=i(52639),p=i(44055),d=i(51508),y=i(11582),m=i(46784),b=i(49861),c=(i(93169),i(32718),i(84936),i(38511)),T=i(69912),v=i(31201),C=i(80885),h=i(3321),f=i(49022),_=r=function(t){(0,l.Z)(i,t);var e=(0,s.Z)(i);function i(t){var r;return(0,o.Z)(this,i),(r=e.call(this,t)).barrierType=null,r.costs=null,r.geometry=null,r.name=null,r.objectId=null,r.popupTemplate=null,r.scaleFactor=null,r.symbol=null,r.type="polygon-barrier",r}return(0,a.Z)(i,[{key:"readCosts",value:function(t,e){return(0,h.DE)(e.attributes,"Attr_")}},{key:"writeCosts",value:function(t,e){(0,h.nY)(t,e,"Attr_")}},{key:"toGraphic",value:function(){var t,e,i={ObjectID:this.objectId,BarrierType:null!=this.barrierType?f.oi.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify((0,h.co)(this.costs)):null,Name:null!==(t=this.name)&&void 0!==t?t:null,ScaleFactor:null!==(e=this.scaleFactor)&&void 0!==e?e:null};return new u.Z({geometry:this.geometry,attributes:i,symbol:this.symbol,popupTemplate:this.popupTemplate})}}],[{key:"fromGraphic",value:function(t){var e,i,o;return new r({barrierType:null!=t.attributes.BarrierType?f.oi.fromJSON(t.attributes.BarrierType):null,costs:null!=t.attributes.Costs?(0,h.EQ)(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:null!==(e=t.attributes.Name)&&void 0!==e?e:null,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:null!==(o=t.attributes.ScaleFactor)&&void 0!==o?o:null,symbol:t.symbol})}}]),i}((0,y.J)(m.wq));_.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],(0,n._)([(0,b.Cb)({type:f.oi.apiValues,json:{name:"attributes.BarrierType",read:{reader:f.oi.read},write:{writer:f.oi.write}}})],_.prototype,"barrierType",void 0),(0,n._)([(0,b.Cb)()],_.prototype,"costs",void 0),(0,n._)([(0,c.r)("costs",["attributes"])],_.prototype,"readCosts",null),(0,n._)([(0,v.c)("costs")],_.prototype,"writeCosts",null),(0,n._)([(0,b.Cb)({type:C.Z,json:{write:!0}})],_.prototype,"geometry",void 0),(0,n._)([(0,b.Cb)({json:{name:"attributes.Name"}})],_.prototype,"name",void 0),(0,n._)([(0,b.Cb)({json:{name:"attributes.ObjectID"}})],_.prototype,"objectId",void 0),(0,n._)([(0,b.Cb)({type:p.Z})],_.prototype,"popupTemplate",void 0),(0,n._)([(0,b.Cb)()],_.prototype,"scaleFactor",void 0),(0,n._)([(0,b.Cb)({types:d.LB})],_.prototype,"symbol",void 0),(0,n._)([(0,b.Cb)({readOnly:!0,json:{read:!1}})],_.prototype,"type",void 0);var I=_=r=(0,n._)([(0,T.j)("esri.rest.support.PolygonBarrier")],_)},21604:function(t,e,i){i.d(e,{Z:function(){return _}});var r,o=i(15671),a=i(43144),l=i(60136),s=i(29388),n=i(27366),u=i(52639),p=i(44055),d=i(51508),y=i(11582),m=i(46784),b=i(49861),c=(i(93169),i(32718),i(84936),i(38511)),T=i(69912),v=i(29909),C=i(3321),h=i(49022),f=r=function(t){(0,l.Z)(i,t);var e=(0,s.Z)(i);function i(t){var r;return(0,o.Z)(this,i),(r=e.call(this,t)).barrierType=null,r.costs=null,r.geometry=null,r.name=null,r.objectId=null,r.popupTemplate=null,r.scaleFactor=null,r.symbol=null,r.type="polyline-barrier",r}return(0,a.Z)(i,[{key:"readCosts",value:function(t,e){return(0,C.DE)(e.attributes,"Attr_")}},{key:"toGraphic",value:function(){var t={ObjectID:this.objectId,BarrierType:null!=this.barrierType?h.oi.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify((0,C.co)(this.costs)):null,Name:this.name,ScaleFactor:this.scaleFactor};return new u.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}}],[{key:"fromGraphic",value:function(t){var e,i,o;return new r({barrierType:null!=t.attributes.BarrierType?h.oi.fromJSON(t.attributes.BarrierType):null,costs:null!=t.attributes.Costs?(0,C.EQ)(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:null!==(e=t.attributes.Name)&&void 0!==e?e:null,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:null!==(o=t.attributes.ScaleFactor)&&void 0!==o?o:null,symbol:t.symbol})}}]),i}((0,y.J)(m.wq));f.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger"},{name:"Costs",alias:"Costs",type:"esriFieldTypeString"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble"}],(0,n._)([(0,b.Cb)({type:h.oi.apiValues,json:{read:{source:"attributes.BarrierType",reader:h.oi.read}}})],f.prototype,"barrierType",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"costs",void 0),(0,n._)([(0,c.r)("costs",["attributes"])],f.prototype,"readCosts",null),(0,n._)([(0,b.Cb)({type:v.Z,json:{write:!0}})],f.prototype,"geometry",void 0),(0,n._)([(0,b.Cb)({json:{name:"attributes.Name"}})],f.prototype,"name",void 0),(0,n._)([(0,b.Cb)({json:{name:"attributes.ObjectID"}})],f.prototype,"objectId",void 0),(0,n._)([(0,b.Cb)({type:p.Z})],f.prototype,"popupTemplate",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"scaleFactor",void 0),(0,n._)([(0,b.Cb)({types:d.LB})],f.prototype,"symbol",void 0),(0,n._)([(0,b.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0);var _=f=r=(0,n._)([(0,T.j)("esri.rest.support.PolylineBarrier")],f)},99821:function(t,e,i){i.d(e,{Z:function(){return _}});var r,o=i(15671),a=i(43144),l=i(60136),s=i(29388),n=i(27366),u=i(52639),p=i(44055),d=i(51508),y=i(11582),m=i(46784),b=i(49861),c=(i(93169),i(32718),i(84936),i(38511)),T=i(69912),v=i(29909),C=i(3321),h=i(37321),f=r=function(t){(0,l.Z)(i,t);var e=(0,s.Z)(i);function i(t){var r;return(0,o.Z)(this,i),(r=e.call(this,t)).analysisSettings=null,r.endTime=null,r.endTimeOffset=null,r.firstStopId=null,r.geometry=null,r.lastStopId=null,r.messages=null,r.name=null,r.objectId=null,r.popupTemplate=null,r.startTime=null,r.startTimeOffset=null,r.stopCount=null,r.symbol=null,r.totalCosts=null,r.totalDistance=null,r.totalDuration=null,r.totalLateDuration=null,r.totalViolations=null,r.totalWait=null,r.totalWaitDuration=null,r.type="route-info",r.version="1.0.0",r}return(0,a.Z)(i,[{key:"readEndTime",value:function(t,e){return null!=e.attributes.EndTimeUTC?new Date(e.attributes.EndTimeUTC):null}},{key:"readEndTimeOffset",value:function(t,e){return(0,C.pQ)(e.attributes.EndTime,e.attributes.EndTimeUTC)}},{key:"readStartTime",value:function(t,e){return null!=e.attributes.StartTimeUTC?new Date(e.attributes.StartTimeUTC):null}},{key:"readStartTimeOffset",value:function(t,e){return(0,C.pQ)(e.attributes.StartTime,e.attributes.StartTimeUTC)}},{key:"readTotalCosts",value:function(t,e){return(0,C.DE)(e.attributes,"Total_")}},{key:"readTotalViolations",value:function(t,e){return(0,C.DE)(e.attributes,"TotalViolation_")}},{key:"readTotalWait",value:function(t,e){return(0,C.DE)(e.attributes,"TotalWait_")}},{key:"toGraphic",value:function(){var t={ObjectID:this.objectId,AnalysisSettings:null!=this.analysisSettings?JSON.stringify(this.analysisSettings.toJSON()):null,EndTime:null!=this.endTime?this.endTime.getTime():null,EndUTCOffset:this.endTimeOffset,Messages:null!=this.messages?JSON.stringify(this.messages):null,RouteName:this.name,StartTime:null!=this.startTime?this.startTime.getTime():null,StartUTCOffset:this.startTimeOffset,TotalCosts:null!=this.totalCosts?JSON.stringify((0,C.co)(this.totalCosts)):null,TotalLateMinutes:this.totalLateDuration,TotalMeters:this.totalDistance,TotalMinutes:this.totalDuration,TotalWaitMinutes:this.totalWaitDuration,Version:this.version};return new u.Z({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}}],[{key:"fromGraphic",value:function(t){var e,i,o,a,l,s,n;return new r({analysisSettings:null!=t.attributes.AnalysisSettings?h.Z.fromJSON(JSON.parse(t.attributes.AnalysisSettings)):null,endTime:null!=t.attributes.EndTime?new Date(t.attributes.EndTime):null,endTimeOffset:null!==(e=t.attributes.EndUTCOffset)&&void 0!==e?e:null,geometry:t.geometry,messages:null!=t.attributes.Messages?JSON.parse(t.attributes.Messages):null,name:t.attributes.RouteName,objectId:null!==(i=t.attributes.ObjectID)&&void 0!==i?i:t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,startTime:null!=t.attributes.StartTime?new Date(t.attributes.StartTime):null,startTimeOffset:null!==(o=t.attributes.StartUTCOffset)&&void 0!==o?o:null,symbol:t.symbol,totalCosts:null!=t.attributes.TotalCosts?(0,C.EQ)(JSON.parse(t.attributes.TotalCosts)):null,totalDistance:null!==(a=t.attributes.TotalMeters)&&void 0!==a?a:null,totalDuration:null!==(l=t.attributes.TotalMinutes)&&void 0!==l?l:null,totalLateDuration:null!==(s=t.attributes.TotalLateMinutes)&&void 0!==s?s:null,totalWaitDuration:null!==(n=t.attributes.TotalWaitMinutes)&&void 0!==n?n:null,version:t.attributes.Version})}}]),i}((0,y.J)(m.wq));f.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"AnalysisSettings",alias:"Analysis Settings",type:"esriFieldTypeString"},{name:"EndTime",alias:"End Time",type:"esriFieldTypeDate"},{name:"EndUTCOffset",alias:"End Time Offset",type:"esriFieldTypeInteger"},{name:"Messages",alias:"Messages",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString"},{name:"StartTime",alias:"Start Time",type:"esriFieldTypeDate"},{name:"StartUTCOffset",alias:"Start Time Offset",type:"esriFieldTypeInteger"},{name:"TotalCosts",alias:"Total Costs",type:"esriFieldTypeString"},{name:"TotalLateMinutes",alias:"Total Late Minutes",type:"esriFieldTypeDouble"},{name:"TotalMeters",alias:"Total Meters",type:"esriFieldTypeDouble"},{name:"TotalMinutes",alias:"Total Minutes",type:"esriFieldTypeDouble"},{name:"TotalWaitMinutes",alias:"Total Wait Minutes",type:"esriFieldTypeDouble"},{name:"Version",alias:"Version",type:"esriFieldTypeString"}],(0,n._)([(0,b.Cb)()],f.prototype,"analysisSettings",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"endTime",void 0),(0,n._)([(0,c.r)("endTime",["attributes.EndTimeUTC"])],f.prototype,"readEndTime",null),(0,n._)([(0,b.Cb)()],f.prototype,"endTimeOffset",void 0),(0,n._)([(0,c.r)("endTimeOffset",["attributes.EndTime","attributes.EndTimeUTC"])],f.prototype,"readEndTimeOffset",null),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.FirstStopID"}}})],f.prototype,"firstStopId",void 0),(0,n._)([(0,b.Cb)({type:v.Z})],f.prototype,"geometry",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.LastStopID"}}})],f.prototype,"lastStopId",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"messages",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.Name"}}})],f.prototype,"name",void 0),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.ObjectID"}}})],f.prototype,"objectId",void 0),(0,n._)([(0,b.Cb)({type:p.Z})],f.prototype,"popupTemplate",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"startTime",void 0),(0,n._)([(0,c.r)("startTime",["attributes.StartTimeUTC"])],f.prototype,"readStartTime",null),(0,n._)([(0,b.Cb)()],f.prototype,"startTimeOffset",void 0),(0,n._)([(0,c.r)("startTimeOffset",["attributes.StartTime","attributes.StartTimeUTC"])],f.prototype,"readStartTimeOffset",null),(0,n._)([(0,b.Cb)({json:{read:{source:"attributes.StopCount"}}})],f.prototype,"stopCount",void 0),(0,n._)([(0,b.Cb)({types:d.LB})],f.prototype,"symbol",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"totalCosts",void 0),(0,n._)([(0,c.r)("totalCosts",["attributes"])],f.prototype,"readTotalCosts",null),(0,n._)([(0,b.Cb)()],f.prototype,"totalDistance",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"totalDuration",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"totalLateDuration",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"totalViolations",void 0),(0,n._)([(0,c.r)("totalViolations",["attributes"])],f.prototype,"readTotalViolations",null),(0,n._)([(0,b.Cb)()],f.prototype,"totalWait",void 0),(0,n._)([(0,c.r)("totalWait",["attributes"])],f.prototype,"readTotalWait",null),(0,n._)([(0,b.Cb)()],f.prototype,"totalWaitDuration",void 0),(0,n._)([(0,b.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),(0,n._)([(0,b.Cb)()],f.prototype,"version",void 0);var _=f=r=(0,n._)([(0,T.j)("esri.rest.support.RouteInfo")],f)},37321:function(t,e,i){i.d(e,{Z:function(){return T}});var r=i(15671),o=i(43144),a=i(60136),l=i(29388),s=i(27366),n=i(46784),u=i(49861),p=(i(93169),i(32718),i(84936),i(38511)),d=i(69912),y=i(31201),m=i(49022),b=i(77279),c=function(t){(0,a.Z)(i,t);var e=(0,l.Z)(i);function i(t){var o;return(0,r.Z)(this,i),(o=e.call(this,t)).accumulateAttributes=null,o.directionsLanguage=null,o.findBestSequence=null,o.preserveFirstStop=null,o.preserveLastStop=null,o.startTimeIsUTC=null,o.timeWindowsAreUTC=null,o.travelMode=null,o}return(0,o.Z)(i,[{key:"readAccumulateAttributes",value:function(t){return null==t?null:t.map((function(t){return m.Ul.fromJSON(t)}))}},{key:"writeAccumulateAttributes",value:function(t,e,i){(null===t||void 0===t?void 0:t.length)&&(e[i]=t.map((function(t){return m.Ul.toJSON(t)})))}}]),i}(n.wq);(0,s._)([(0,u.Cb)({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],c.prototype,"accumulateAttributes",void 0),(0,s._)([(0,p.r)("accumulateAttributes")],c.prototype,"readAccumulateAttributes",null),(0,s._)([(0,y.c)("accumulateAttributes")],c.prototype,"writeAccumulateAttributes",null),(0,s._)([(0,u.Cb)({type:String,json:{write:!0}})],c.prototype,"directionsLanguage",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"findBestSequence",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"preserveFirstStop",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"preserveLastStop",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"startTimeIsUTC",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"timeWindowsAreUTC",void 0),(0,s._)([(0,u.Cb)({type:b.Z,json:{write:!0}})],c.prototype,"travelMode",void 0);var T=c=(0,s._)([(0,d.j)("esri.rest.support.RouteSettings")],c)}}]);
//# sourceMappingURL=29417.3a038dec.chunk.js.map