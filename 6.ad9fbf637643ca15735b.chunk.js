webpackJsonp([6],{cMq4:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("LMZF"),o=function(){},e=t("wu+X"),a=t("ZFRd"),i=t("YXpL"),s=t("07cn"),r=t("cC+T"),p=t("SMsG"),c=t("V8+5"),_=t("ESfO"),h=t("ghl+"),m=t("8Xfy"),g=t("yxpl"),b=t("vgc3"),d=t("Un6q"),f=function(){function l(l){this.service=l,this.onCrop=new u.n,this.onClose=new u.n,this.path=this.service.path}return l.prototype.ngOnInit=function(){this.initMap()},l.prototype.initMap=function(){this.option={center:this.center?this.center:{lat:0,lng:0},zoom:this.zoom?this.zoom:4,markers:this.markers?this.markers:[]},this.service.initMap(this.googleMap.nativeElement,this.option)},l.prototype.mapDone=function(){this.points=this.service.mapReturn(),this.onCrop.emit(this.points)},l.prototype.cropChange=function(){this.polygon=!this.polygon,this.point=!1,this.service.mapPolygon(this.polygon,this.service.map)},l.prototype.pointChange=function(){this.point=!this.point,this.polygon=!1,this.service.mapMarker(this.point,this.service.map)},l.prototype.close=function(){this.onClose.emit(!0)},l.prototype.onKeyUp=function(l){switch(l.key){case"z":l.ctrlKey&&(this.service.path.pop(),this.polygon&&this.service.polygon.setPaths(this.service.path));break;case"c":this.mapDone();break;case"g":this.close()}},l}(),v=t("AP4T"),y=t("qqDE"),k=function(){function l(l,n){this.zone=l,this.mapConf=n,this.path=[],this.pointers=[],this.path=[]}return l.prototype.initMap=function(l,n){var t=this;this.s=this.init().pipe(Object(y.a)(function(){return t.mapCreate(l,n)})).subscribe(function(l){return t.s.unsubscribe()})},l.prototype.init=function(){var l=this;return v.a.create(function(n){var t,u=document,o=u.getElementsByTagName("script")[0];(t=u.createElement("script")).async=!0,t.src="https://maps.googleapis.com/maps/api/js?key="+l.mapConf.apiKey,t.onload=function(){n.next({}),n.complete()},o.parentNode.insertBefore(t,o)})},l.prototype.mapPolygon=function(l,n){var t=this;l&&(this.s.unsubscribe(),this.pointer&&(this.clearMap(this.pointers),this.path=[]),this.polygon=new google.maps.Polygon({paths:this.path,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FFFF00",fillOpacity:.35}),this.polygon.setMap(n),this.s=this.subscribeToMapEvent("click").subscribe(function(l){t.path.push(l.latLng),t.polygon.setPaths(t.path)}))},l.prototype.finishDraw=function(){},l.prototype.mapMarker=function(l,n){var t=this;l&&(this.s.unsubscribe(),this.path=[],this.polygon&&this.polygon.setMap(null),this.s=this.subscribeToMapEvent("click").subscribe(function(l){t.marker=l.latLng,t.pointer=new google.maps.Marker({position:t.marker}),t.pointers.push(t.pointer),t.path.push(l.latLng),t.pointer.setMap(n)}))},l.prototype.subscribeToMapEvent=function(l){var n=this;return v.a.create(function(t){n.map.addListener(l,function(l){n.zone.run(function(){return t.next(l)})})})},l.prototype.mapReturn=function(){if(!(this.path.length<=2)){var l=[];return this.path.forEach(function(n){l.push({lat:n.lat(),lng:n.lng()})}),l}},l.prototype.clearMap=function(l){l.forEach(function(l){l.setMap(null)})},l.prototype.mapCreate=function(l,n){var t=this;this.map=new google.maps.Map(l,{zoom:n.zoom,center:n.center,mapTypeId:google.maps.MapTypeId.HYBRID,panControl:this.mapConf.panControl,mapTypeControl:this.mapConf.mapTypeControl,heading:this.mapConf.heading,tilt:this.mapConf.tilt}),n.markers.length>0&&n.markers.forEach(function(l){t.createMarker(l,t.map)})},l.prototype.createMarker=function(l,n){this.marker=new google.maps.LatLng(l.lat,l.lng),this.pointer=new google.maps.Marker({position:this.marker,icon:"http://maps.gstatic.com/mapfiles/markers2/icon_green.png"}),this.pointer.setMap(n)},l}(),M=u._3({encapsulation:0,styles:[[".spacer[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.selected-button[_ngcontent-%COMP%]{color:red}.bottom-right[_ngcontent-%COMP%]{position:fixed;bottom:24px;right:24px}"]],data:{}});function C(l){return u._29(0,[(l()(),u._5(0,0,null,null,5,"mat-toolbar-row",[["class","mat-toolbar-row"]],null,null,null,null,null)),u._4(1,16384,[[2,4]],0,i.c,[],null,null),(l()(),u._27(-1,null,["\n        "])),(l()(),u._5(3,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["color","warn"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"mat-primary",null],[2,"mat-accent",null],[2,"mat-warn",null]],null,null,s.b,s.a)),u._4(4,49152,null,0,r.a,[],{color:[0,"color"],mode:[1,"mode"]},null),(l()(),u._27(-1,null,["\n    "]))],function(l,n){l(n,4,0,"warn","indeterminate")},function(l,n){l(n,3,0,u._19(n,4).value,u._19(n,4).mode,"primary"==u._19(n,4).color,"accent"==u._19(n,4).color,"warn"==u._19(n,4).color)})}function w(l){return u._29(0,[(l()(),u._5(0,0,null,null,57,"mat-toolbar",[["class","map-tool-bar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,p.b,p.a)),u._4(1,4243456,null,1,i.a,[u.k,c.a],null,null),u._25(603979776,2,{_toolbarRows:1}),(l()(),u._27(-1,0,["\n\n    "])),(l()(),u._5(4,0,null,0,14,"button",[["class","mat-icon-button"],["mat-icon-button",""],["mdTooltip","Crop (C)"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.cropChange()&&u),u},_.d,_.b)),u._4(5,180224,null,0,h.b,[u.k,c.a,m.g],null,null),u._4(6,16384,null,0,h.f,[],null,null),(l()(),u._27(-1,0,["\n        "])),(l()(),u._5(8,0,null,0,9,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,g.b,g.a)),u._4(9,638976,null,0,b.b,[u.k,b.d,[8,null]],null,null),(l()(),u._27(-1,0,["\n            "])),(l()(),u._5(11,0,null,0,5,":svg:svg",[["viewBox","0 0 24 24"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(13,0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(15,0,null,null,0,":svg:path",[["d","M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n            "])),(l()(),u._27(-1,0,["\n        "])),(l()(),u._27(-1,0,["\n    "])),(l()(),u._27(-1,0,["\n\n    "])),(l()(),u._5(20,0,null,0,14,"button",[["class","mat-icon-button"],["mat-icon-button",""],["mdTooltip","Crop (C)"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.pointChange()&&u),u},_.d,_.b)),u._4(21,180224,null,0,h.b,[u.k,c.a,m.g],null,null),u._4(22,16384,null,0,h.f,[],null,null),(l()(),u._27(-1,0,["\n        "])),(l()(),u._5(24,0,null,0,9,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,g.b,g.a)),u._4(25,638976,null,0,b.b,[u.k,b.d,[8,null]],null,null),(l()(),u._27(-1,0,["\n            "])),(l()(),u._5(27,0,null,0,5,":svg:svg",[["viewBox","0 0 24 24"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(29,0,null,null,0,":svg:path",[["d","M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(31,0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n            "])),(l()(),u._27(-1,0,["\n        "])),(l()(),u._27(-1,0,["\n    "])),(l()(),u._27(-1,0,["\n\n    "])),(l()(),u._5(36,0,null,0,0,"span",[["class","spacer"]],null,null,null,null,null)),(l()(),u._27(-1,0,["\n\n    "])),(l()(),u._5(38,0,null,0,14,"button",[["class","mat-icon-button"],["mat-icon-button",""],["mdTooltip","Close (G)"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.close()&&u),u},_.d,_.b)),u._4(39,180224,null,0,h.b,[u.k,c.a,m.g],null,null),u._4(40,16384,null,0,h.f,[],null,null),(l()(),u._27(-1,0,["\n        "])),(l()(),u._5(42,0,null,0,9,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,g.b,g.a)),u._4(43,638976,null,0,b.b,[u.k,b.d,[8,null]],null,null),(l()(),u._27(-1,0,["\n            "])),(l()(),u._5(45,0,null,0,5,":svg:svg",[["viewBox","0 0 24 24"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(47,0,null,null,0,":svg:path",[["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(49,0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n            "])),(l()(),u._27(-1,0,["\n        "])),(l()(),u._27(-1,0,["\n    "])),(l()(),u._27(-1,0,["\n    "])),(l()(),u._27(-1,0,["\n    "])),(l()(),u._0(16777216,null,1,1,null,C)),u._4(56,16384,null,0,d.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u._27(-1,0,["\n\n"]))],function(l,n){var t=n.component;l(n,9,0),l(n,25,0),l(n,43,0),l(n,56,0,t.loading)},function(l,n){l(n,0,0,u._19(n,1)._toolbarRows.length,!u._19(n,1)._toolbarRows.length),l(n,4,0,u._19(n,5).disabled||null),l(n,20,0,u._19(n,21).disabled||null),l(n,38,0,u._19(n,39).disabled||null)})}function L(l){return u._29(0,[(l()(),u._5(0,0,null,null,14,"button",[["class","bottom-right mat-fab"],["id","doneButton"],["mat-fab",""],["mdTooltip","Crop (C)"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.mapDone()&&u),u},_.d,_.b)),u._4(1,180224,null,0,h.b,[u.k,c.a,m.g],null,null),u._4(2,16384,null,0,h.e,[[2,h.b],[8,null]],null,null),(l()(),u._27(-1,0,["\n        "])),(l()(),u._5(4,0,null,0,9,"mat-icon",[["class","mat-icon"],["role","img"]],null,null,null,g.b,g.a)),u._4(5,638976,null,0,b.b,[u.k,b.d,[8,null]],null,null),(l()(),u._27(-1,0,["\n            "])),(l()(),u._5(7,0,null,0,5,":svg:svg",[["viewBox","0 0 24 24"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(9,0,null,null,0,":svg:path",[["d","M0 0h24v24H0z"],["fill","none"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n                "])),(l()(),u._5(11,0,null,null,0,":svg:path",[["d","M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n            "])),(l()(),u._27(-1,0,["\n        "])),(l()(),u._27(-1,0,["\n    "]))],function(l,n){l(n,5,0)},function(l,n){l(n,0,0,u._19(n,1).disabled||null)})}function x(l){return u._29(0,[u._25(402653184,1,{googleMap:0}),(l()(),u._0(16777216,null,null,1,null,w)),u._4(2,16384,null,0,d.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u._27(-1,null,["\n"])),(l()(),u._5(4,0,[[1,0],["gmap",1]],null,1,"div",[["style","height: 100%"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n"])),(l()(),u._27(-1,null,["\n"])),(l()(),u._5(7,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u._27(-1,null,["\n    "])),(l()(),u._0(16777216,null,null,1,null,L)),u._4(10,16384,null,0,d.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u._27(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,2,0,t.advance),l(n,10,0,(null==t.service.path?null:t.service.path.length)>2&&t.polygon||(null==t.service.path?null:t.service.path.length)>0&&t.point)},null)}var z=function(){function l(){this.latLng={lat:12.3211,lng:23.1234},this.markers=[{lat:34.34,lng:23.34},this.latLng]}return l.prototype.ngOnInit=function(){},l}(),O=u._3({encapsulation:0,styles:[[""]],data:{}});function I(l){return u._29(0,[(l()(),u._27(-1,null,["\n"])),(l()(),u._5(1,0,null,null,36,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,e.c,e.b)),u._4(2,3325952,null,1,a.e,[u.k,u.h],null,null),u._25(603979776,1,{_tabs:1}),(l()(),u._27(-1,null,["\n  "])),(l()(),u._5(5,16777216,null,null,12,"mat-tab",[["label","Overview"]],null,null,null,e.d,e.a)),u._4(6,770048,[[1,4]],1,a.b,[u.O],{textLabel:[0,"textLabel"]},null),u._25(335544320,2,{templateLabel:0}),(l()(),u._27(-1,0,["\n    "])),(l()(),u._5(9,0,null,0,7,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n      "])),(l()(),u._5(11,0,null,null,1,"h3",[["class","doc-header"]],null,null,null,null,null)),(l()(),u._27(-1,null,["Use Google Map"])),(l()(),u._27(-1,null,["\n      "])),(l()(),u._5(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u._27(-1,null,["With few lines of codes you can use google map in anywhere in your angular app "])),(l()(),u._27(-1,null,["\n    "])),(l()(),u._27(-1,0,["\n  "])),(l()(),u._27(-1,null,["\n  "])),(l()(),u._5(19,16777216,null,null,6,"mat-tab",[["label","API"]],null,null,null,e.d,e.a)),u._4(20,770048,[[1,4]],1,a.b,[u.O],{textLabel:[0,"textLabel"]},null),u._25(335544320,3,{templateLabel:0}),(l()(),u._27(-1,0,["\n    "])),(l()(),u._5(23,0,null,0,1,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n    "])),(l()(),u._27(-1,0,["\n  "])),(l()(),u._27(-1,null,["\n  "])),(l()(),u._5(27,16777216,null,null,9,"mat-tab",[["label","Demo"]],null,null,null,e.d,e.a)),u._4(28,770048,[[1,4]],1,a.b,[u.O],{textLabel:[0,"textLabel"]},null),u._25(335544320,4,{templateLabel:0}),(l()(),u._27(-1,0,["\n    "])),(l()(),u._5(31,0,null,0,4,"div",[["class","tab-content"],["style","height: 80vh"]],null,null,null,null,null)),(l()(),u._27(-1,null,["\n      "])),(l()(),u._5(33,0,null,null,1,"ext-google-map",[],null,[["document","keyup"]],function(l,n,t){var o=!0;return"document:keyup"===n&&(o=!1!==u._19(l,34).onKeyUp(t)&&o),o},x,M)),u._4(34,114688,null,0,f,[k],{zoom:[0,"zoom"],center:[1,"center"],advance:[2,"advance"]},null),(l()(),u._27(-1,null,["\n    "])),(l()(),u._27(-1,0,["\n  "])),(l()(),u._27(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,6,0,"Overview"),l(n,20,0,"API"),l(n,28,0,"Demo"),l(n,34,0,4,t.latLng,!0)},function(l,n){l(n,1,0,u._19(n,2).dynamicHeight,"below"===u._19(n,2).headerPosition)})}var T=u._1("app-mapexample",z,function(l){return u._29(0,[(l()(),u._5(0,0,null,null,1,"app-mapexample",[],null,null,null,I,O)),u._4(1,114688,null,0,z,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),B=t("l6RC"),H=t("ppgG"),P=t("4jwp"),E=t("9iV4"),R=t("RyBE"),D=t("j5BN"),F=function(){this.linksControl=!1,this.panControl=!1,this.enableCloseButton=!1,this.mapTypeControl=!1,this.heading=90,this.tilt=45},j=new u.p("extMap.config"),q=function(){function l(){}return l.forRoot=function(n){return{ngModule:l,providers:[{provide:j,useValue:n},{provide:F,useFactory:A,deps:[j]}]}},l}();function A(l){return l}var K=t("UHIZ"),S=function(){},G=t("CZgk"),U=t("Lpd/"),V=t("SlD5");t.d(n,"MapexampleModuleNgFactory",function(){return Z});var Z=u._2(o,[],function(l){return u._16([u._17(512,u.j,u.Y,[[8,[T]],[3,u.j],u.w]),u._17(4608,d.o,d.n,[u.t,[2,d.w]]),u._17(6144,B.b,null,[d.d]),u._17(4608,B.c,B.c,[[2,B.b]]),u._17(4608,c.a,c.a,[]),u._17(4608,H.b,H.b,[]),u._17(5120,P.d,P.b,[[3,P.d],u.y,c.a]),u._17(5120,P.g,P.f,[[3,P.g],c.a,u.y]),u._17(5120,b.d,b.a,[[3,b.d],[2,E.c],R.c,[2,d.d]]),u._17(4608,m.i,m.i,[c.a]),u._17(4608,m.h,m.h,[m.i,u.y,d.d]),u._17(136192,m.d,m.b,[[3,m.d],d.d]),u._17(5120,m.l,m.k,[[3,m.l],[2,m.j],d.d]),u._17(5120,m.g,m.e,[[3,m.g],u.y,c.a]),u._17(4608,D.d,D.d,[]),u._17(5120,F,A,[j]),u._17(4608,k,k,[u.y,F]),u._17(512,K.n,K.n,[[2,K.t],[2,K.k]]),u._17(512,S,S,[]),u._17(512,d.c,d.c,[]),u._17(512,B.a,B.a,[]),u._17(256,D.e,!0,[]),u._17(512,D.l,D.l,[[2,D.e]]),u._17(512,G.g,G.g,[]),u._17(512,c.b,c.b,[]),u._17(512,D.w,D.w,[]),u._17(512,H.c,H.c,[]),u._17(512,P.c,P.c,[]),u._17(512,a.i,a.i,[]),u._17(512,i.b,i.b,[]),u._17(512,b.c,b.c,[]),u._17(512,m.a,m.a,[]),u._17(512,h.d,h.d,[]),u._17(512,r.b,r.b,[]),u._17(512,U.d,U.d,[]),u._17(512,V.b,V.b,[]),u._17(512,q,q,[]),u._17(512,o,o,[]),u._17(1024,K.i,function(){return[[{path:"",component:z}]]},[]),u._17(256,j,{apiKey:"AIzaSyCGqeyOzgZyvKq0kwn35H4DSCudBsdRBAA"},[])])})}});