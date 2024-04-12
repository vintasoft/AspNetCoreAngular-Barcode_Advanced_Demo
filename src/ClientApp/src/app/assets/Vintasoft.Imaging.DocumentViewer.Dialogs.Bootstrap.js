﻿// Copyright 2014-2024 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(g){function a(a,g,l){a=E[a];for(var b="",q=g;q<g+l;q++)b+=String.fromCharCode(a[q]^4095);return b}if(void 0==g||void 0==g.Shared)throw Error("Vintasoft.Shared is not found.");if("4.1.3.1"!==g.version)throw Error("Wrong version of Vintasoft.Shared script.");if(void 0==g.Imaging)throw Error("Vintasoft.Imaging is not found.");if("12.4.0.1"!==g.Imaging.version)throw Error("Wrong version of Vintasoft.Imaging script.");if(void 0==g.Imaging.DocumentViewer)throw Error("Vintasoft.Imaging.DocumentViewer is not found.");if("12.4.0.1"!==
g.Imaging.DocumentViewer.version)throw Error("Wrong version of Vintasoft.Imaging.DocumentViewer script.");var E=[];E.push([3977,3980,3995,3977,4050,3990,3986,3998,3992,3994,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,4026,3995,3990,3979,4063,3979,3991,3994,4063,3998,3985,3985,3984,3979,3998,3979,3990,3984,3985,4063,3996,3984,3986,3986,3994,3985,3979,4028,3998,3985,3996,3994,3987,4047,3983,3975,3997,3979,3985,4063,
3997,3979,3985,4050,3995,3994,3993,3998,3978,3987,3979,3977,3980,3995,3977,4050,3990,3986,3998,3992,3994,4012,3994,3987,3994,3996,3979,3990,3984,3985,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3980,3994,3987,3994,3996,3979,4011,3976,3998,3990,3985,4027,3994,3977,3990,3996,3994,4027,3990,3998,3987,3984,3992,3977,3980,3995,3977,4050,3979,3976,3998,3990,3985,4027,3994,3977,3990,3996,3994,4012,3994,3987,3994,3996,3979,3990,3984,3985,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,
3994,3997,3994,3992,3990,3985,4015,3981,3990,3985,3979,4044,4047,4047,3983,3975,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3979,3991,3978,3986,3997,3985,3998,3990,3987,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,3983,3981,3990,3985,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,3006,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,3983,3995,3993,4013,3994,3995,3998,3996,3979,
3990,3984,3985,4018,3998,3981,3988,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4016,4020,4012,3994,3987,3994,3996,3979,4063,4011,4008,4030,4022,4017,4063,3995,3994,3977,3990,3996,3994,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3979,3976,3998,3990,3985,4027,3994,3977,3990,3996,3994,4028,3998,3983,3998,3997,3990,3987,3990,3979,3990,3994,3980,3977,3980,3995,3977,4050,3981,3984,3979,3998,3979,3994,4022,3986,3998,3992,3994,4008,3990,3979,3991,4030,3985,3985,3984,
3979,3998,3979,3990,3984,3985,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,4010,3983,3987,3984,3998,3995,4063,3990,3986,3998,3992,3994,4063,3993,3981,3984,3986,4063,4010,4013,4019,3977,3980,3995,3977,4050,3983,3995,3993,4013,3994,3995,3998,3996,3979,3990,3984,3985,4018,3998,3981,3988,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3977,3980,3995,3977,4050,3980,3994,3987,
3994,3996,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,4012,3994,3987,3994,3996,3979,4063,3990,3986,3998,3992,3994,3980,3979,3976,3998,3990,3985,4027,3994,3977,3990,3996,3994,4028,3998,3983,3998,3997,3990,3987,3990,3979,3990,3994,3980,4027,3990,3998,3987,3984,3992,4015,4027,4025,4063,3981,3994,3995,3998,3996,3979,3990,3984,3985,4063,3986,3998,3981,3988,4063,3980,3994,3979,3979,3990,3985,3992,3980,3986,3984,3995,3998,3987,4050,3979,3990,3979,3987,3994,4011,3991,3978,3986,3997,3985,
3998,3990,3987,4063,3977,3990,3994,3976,3994,3981,4063,3980,3994,3979,3979,3990,3985,3992,3980,3977,3980,3995,3977,4050,3995,3990,3998,3987,3984,3992,4050,3995,3994,3987,3994,3979,3994,4029,3978,3979,3979,3984,3985,3983,3995,3993,4013,3994,3995,3998,3996,3979,3990,3984,3985,4018,3998,3981,3988,4030,3983,3983,3994,3998,3981,3998,3985,3996,3994,4027,3990,3998,3987,3984,3992,4015,4027,4025,4063,3981,3994,3995,3998,3996,3979,3990,3984,3985,4063,3986,3998,3981,3988,4063,3998,3983,3983,3994,3998,3981,3998,
3985,3996,3994,3996,3984,3986,3986,3994,3985,3979,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3995,3977,4050,3979,3976,3998,3990,3985,4027,3994,3977,3990,3996,3994,4028,3998,3983,3998,3997,3990,3987,3990,3979,3990,3994,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3990,3986,3998,3992,3994,3980,4015,3981,3994,3983,3998,3981,3998,3979,3990,3984,3985,4025,3998,3990,3987,3994,3995,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3983,3995,
3993,4022,3986,3998,3992,3994,4013,3994,3980,3984,3978,3981,3996,3994,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3990,3986,3998,3992,3994,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3981,3984,3979,3998,3979,3994,4022,3986,3998,3992,3994,4008,3990,3979,3991,4030,3985,3985,3984,3979,3998,3979,3990,3984,3985,3980,3977,3980,3995,3977,4050,3995,3990,3998,3987,3984,3992,4050,3984,3988,4029,3978,3979,3979,
3984,3985,3990,3986,3998,3992,3994,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4044,4039,4047,3983,3975,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3977,3980,3995,3977,4050,3983,3981,3990,3985,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,4015,4027,4025,4063,3990,3986,3998,3992,3994,4063,3981,3994,3980,3984,3978,3981,3996,3994,3978,3983,3987,3984,3998,3995,4022,3986,3998,3992,3994,4025,3981,3984,3986,4010,3981,
3987,4027,3990,3998,3987,3984,3992,3984,3988,4029,3978,3979,3979,3984,3985,4028,3987,3990,3996,3988,3994,3995,3977,3980,3995,3977,4050,3978,3983,3987,3984,3998,3995,4022,3986,3998,3992,3994,4025,3981,3984,3986,4010,3981,3987,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3979,3991,3978,3986,3997,3985,3998,3990,3987,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4013,3984,3979,3998,3979,3994,4063,3990,3986,3998,3992,3994,4063,3976,3990,
3979,3991,4063,3998,3985,3985,3984,3979,3998,3979,3990,3984,3985,3980,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3983,3995,3993,4013,3994,3995,3998,3996,3979,3990,3984,3985,4018,3998,3981,3988,4030,3983,3983,3994,3998,3981,3998,3985,3996,3994,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3983,3995,3993,4013,3994,3995,3998,3996,3979,3990,3984,3985,4018,3998,3981,3988,4012,3994,3979,3979,3990,3985,3992,3980,3977,3980,3995,3977,4050,3994,3975,3983,3984,3981,3979,4025,3990,
3987,3994,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3981,3984,3979,3998,3979,3994,4022,3986,3998,3992,3994,4008,3990,3979,3991,4030,3985,3985,3984,3979,3998,3979,3990,3984,3985,3980,4027,3990,3998,3987,3984,3992,3994,3981,3981,3984,3981,4016,3996,3996,3978,3981,3994,3995,4027,3994,3987,3994,3979,3994,3994,3975,3983,3984,3981,3979,4025,3990,3987,3994,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3995,3977,4050,
3998,3985,3985,3984,3979,3998,3979,3990,3984,3985,4028,3984,3986,3986,3994,3985,3979,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3977,3980,3995,3977,4050,3995,3990,3998,3987,3984,3992,4050,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,4015,3981,3990,3985,3979,4063,3990,3986,3998,3992,3994,3980,4022,3986,3998,3992,3994,4063,3977,3990,3994,3976,3994,3981,4063,3980,3994,3979,3979,3990,3985,3992,3980,3977,3980,3995,3977,4050,3979,3991,
3978,3986,3997,3985,3998,3990,3987,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,4011,4008,4030,4022,4017,4063,3995,3994,3977,3990,3996,3994,4063,3996,3998,3983,3998,3997,3990,3987,3990,3979,3990,3994,3980,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4028,3984,3985,3979,3994,3985,3979,3977,3980,3995,3977,4050,3983,3995,3993,4022,3986,3998,3992,3994,4013,3994,3980,3984,3978,3981,3996,3994,4027,3990,3998,3987,3984,
3992,4050,3979,3990,3979,3987,3994,3980,3994,3987,3994,3996,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,3977,3980,3995,3977,4050,3983,3995,3993,4013,3994,3995,3998,3996,3979,3990,3984,3985,4018,3998,3981,3988,4030,3983,3983,3994,3998,3981,3998,3985,3996,3994,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,4026,3975,3983,3984,3981,3979,4063,3993,3990,3987,3994,4063,3980,3994,3979,3979,3990,3985,3992,3980,4046,3983,3975,4063,3980,3984,3987,3990,3995,4063,3992,3981,3998,
3974,3995,3994,3987,3994,3979,3994,4029,3978,3979,3979,3984,3985,3984,3988,4029,3978,3979,3979,3984,3985,3977,3980,3995,3977,4050,3983,3981,3990,3985,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3980,3994,3987,3994,3996,3979,4011,3976,3998,3990,3985,4027,3994,3977,3990,3996,3994,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,4028,3987,3990,3996,3988,3994,3995,3997,3979,3985,4063,
3997,3979,3985,4050,3983,3981,3990,3986,3998,3981,3974,3983,3995,3993,4022,3986,3998,3992,3994,4013,3994,3980,3984,3978,3981,3996,3994,4027,3990,3998,3987,3984,3992]);g.Imaging=g.Imaging;(function(r){r.DocumentViewer=r.DocumentViewer;(function(r){r.Dialogs={};(function(l){var b=g.Shared,q=g.Imaging,p=r.Panels,s=q.UI,n=s.Dialogs,h=s.UIElements,u=function(){var e=u.superclass,d=u.prototype;d.okButtonClicked=function(a){};d.cancelButtonClicked=function(a){};b.VintasoftLocalizationJS.setStringConstant(a(0,
87,31),a(0,495,13));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));var c=this;this._27052=!1;var f=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,87,31)),cssClass:a(0,564,11)});f.set_HeaderIndex(5);var k=new p.WebUiImageSelectionPanelJS({cssClass:a(0,1446,18)});this._6089=k;var m=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){c._27052=!0;c._19552(a(0,992,15));c.hide();c._27052=!1}}}),F=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,257,12),onClick:{callback:function(){c.hide();c._27052||c._19552(a(0,1669,19))}}}),G={cssClass:a(0,460,35),localizationId:a(0,1497,18)};e.constructor.call(this,[f],[k],[m,F],G);delete d.okButtonClicked;delete d.cancelButtonClicked;d.getSelectedImages=
function(){return this._6089.getSelectedImages()}};b.extend(u,n.WebUiDialogJS);var v=function(e){var d=v.superclass;v.prototype.show=function(){this._7012.update();d.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1007,35),a(0,398,21));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));var c=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1007,35)),cssClass:a(0,564,
11)});c.set_HeaderIndex(5);this._7012=e=new p.WebUiUploadImageFromUrlPanelJS({cssClass:a(0,1446,18)},e);b.suf23(e,a(0,1241,12),{a:this},function(a,b){a.data.a._19552(a.type,b)});var f=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(a,b){var c=a.data.a;c._7012.uploadImageFromUrl();c.hide()},data:{a:this}}}),k=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
1325,24)),localizationId:a(0,193,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),m={localizationId:a(0,968,24)};d.constructor.call(this,[c],[e],[f,k],m)};b.extend(v,n.WebUiDialogJS);var w=function(e){var d=w.prototype,c=w.superclass;d.get_SupportAnnotations=function(){return this._806.get_SupportAnnotations()};d.set_SupportAnnotations=function(a){this._806.set_SupportAnnotations(a)};d.show=function(){this._806.update();c.show.call(this)};this._14922=e;b.VintasoftLocalizationJS.setStringConstant(a(0,
1174,35),a(0,1558,20));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));d=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1174,35)),cssClass:a(0,564,11)});d.set_HeaderIndex(5);this._806=e=new p.WebExportFileSettingsPanelJS({cssClass:a(0,1446,18)},e);var f=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,
1604,8),onClick:{callback:function(a,b){var c=a.data.a,d=c._806.getExportFileSettings();null!=d&&c._14922.exportAndDownloadFile(d);c.hide()},data:{a:this}}}),k=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,193,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),m={localizationId:a(0,1259,24)};c.constructor.call(this,[d],[e],[f,k],m)};b.extend(w,n.WebUiDialogJS);var A=function(){var e=A.superclass;
b.VintasoftLocalizationJS.setStringConstant(a(0,1612,28),a(0,1349,12));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));var d=this,c=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1612,28)),cssClass:a(0,564,11)});c.set_HeaderIndex(5);var f=new p.WebUiPrintImagesSettingsPanelJS({cssClass:a(0,1446,18)});this._22519=f;var k={d:this};b.suf23(f,a(0,178,10),k,function(a){a.data.d.hide()});
b.suf23(f,a(0,746,23),k,function(a){a.data.d.hide()});var k=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){d._22519.print()}}}),m=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,193,12),onClick:{callback:function(){d._22519.abort();d.hide()}}}),g={cssClass:a(0,916,34),localizationId:a(0,240,17)};e.constructor.call(this,
[c],[f],[k,m],g)};b.extend(A,n.WebUiDialogJS);var B=function(){var e=B.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,0,36),a(0,1361,21));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));var d=this,c=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,0,36)),cssClass:a(0,564,11)});c.set_HeaderIndex(5);var f=new p.WebUiImageViewerSettingsPanelJS({cssClass:a(0,1446,18),css:{padding:a(0,
69,3),border:a(0,1578,14)}});this._18175=f;var k=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){d._18175.applySettings();d.hide()}}}),m=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,257,12),onClick:{callback:function(){d.hide()}}}),g={cssClass:a(0,797,31),localizationId:a(0,886,25)};e.constructor.call(this,
[c],[f],[k,m],g)};b.extend(B,n.WebUiDialogJS);var t=function(){var e=t.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,1382,39),a(0,575,25));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));var d=this,c=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1382,39)),cssClass:a(0,564,11)});c.set_HeaderIndex(5);var f=new p.WebUiThumbnailViewerSettingsPanelJS({cssClass:a(0,1446,
18)});this._25707=f;var k=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){d._25707.applySettings();d.hide()}}}),m=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,257,12),onClick:{callback:function(){d.hide()}}}),g={cssClass:a(0,205,35),localizationId:a(0,1042,29)};e.constructor.call(this,[c],[f],[k,m],
g)};b.extend(t,n.WebUiDialogJS);if(q.Annotation){var C=function(){var e=C.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,355,43),a(0,1071,29));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));var d=this,c=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,355,43)),cssClass:a(0,564,11)});c.set_HeaderIndex(5);var f=new p.WebUiRotateImageWithAnnotationsPanelJS({cssClass:a(0,
1446,18),css:{height:a(0,188,5)}});this._1327=f;var k=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){d._1327.rotate();d.hide()}}}),m=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,193,12),onClick:{callback:function(){d.hide()}}}),g={cssClass:a(0,828,38),localizationId:a(0,1209,32)};e.constructor.call(this,
[c],[f],[k,m],g)};b.extend(C,n.WebUiDialogJS);var x=function(e){var d=x.prototype,c=x.superclass;d.get_Comment=function(){return this._3875};d.set_Comment=function(a){this._3875=a;this._25739.setComment(a)};d.show=function(){c.show.call(this);this._25739.update()};b.VintasoftLocalizationJS.setStringConstant(a(0,1283,42),a(0,36,27));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,600,24),a(0,1253,6));b.VintasoftLocalizationJS.setStringConstant(a(0,
1325,24),a(0,63,6));this._8222=e;this._3875=null;d=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1283,42)),cssClass:a(0,564,11)});d.set_HeaderIndex(5);this._25739=e=new p.WebUiAnnotationCommentSettingsPanelJS(e,{css:{height:a(0,911,5)},cssClass:a(0,1446,18)});var f=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(a,b){var c=a.data.a;c._25739.editComment();
c.set_Comment(null);c.hide()},data:{a:this}}}),k=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,600,24)),localizationId:a(0,1592,12),onClick:{callback:function(a,b){var c=a.data.a;c._25739.deleteComment();c.set_Comment(null);c.hide()},data:{a:this}}}),g=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,193,12),onClick:{callback:function(a,b){var c=a.data.a;c.set_Comment(null);
c.hide()},data:{a:this}}}),l={localizationId:a(0,685,21)};c.constructor.call(this,[d],[e],[f,k,g],l)};b.extend(x,g.Imaging.UI.Dialogs.WebUiDialogJS);l.WebRotateImageWithAnnotationsDialogJS=C;l.WebUiAnnotationCommentSettingsDialogJS=x}if(q.Pdf){q=function(){var e=t.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,1515,43),a(0,656,29));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));var d=this,c=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
1515,43)),cssClass:a(0,564,11)});c.set_HeaderIndex(5);var f=new p.WebUiPdfRedactionMarkAppearancePanelJS({cssClass:a(0,1446,18)}),k=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){d.hide()}}}),g={cssClass:a(0,1100,38),localizationId:a(0,624,32)};e.constructor.call(this,[c],[f],[k],g)};b.extend(q,n.WebUiDialogJS);s=function(e){var d=t.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,
419,41),a(0,537,27));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));var c=this,f=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,419,41)),cssClass:a(0,564,11)});f.set_HeaderIndex(5);e=new p.WebUiPdfRedactionMarkSettingsPanelJS({cssClass:a(0,1446,18),css:{padding:a(0,69,3),border:a(0,1578,14)}},e);var k=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){c.hide()}}}),
g={cssClass:a(0,1138,36),localizationId:a(0,269,30)};d.constructor.call(this,[f],[e],[k],g)};b.extend(s,n.WebUiDialogJS);var D=function(e){var d=D.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,1464,33),a(0,950,18));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));var c=this,f=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1464,33)),cssClass:a(0,564,11)});f.set_HeaderIndex(5);e=new p.WebUiPdfImageResourcePanelJS({cssClass:a(0,1446,18),
css:{padding:a(0,69,3),border:a(0,1578,14)}},e);var g=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){c.hide()}}}),m={cssClass:a(0,769,28),localizationId:a(0,1703,22)};d.constructor.call(this,[f],[e],[g],m)};b.extend(D,n.WebUiDialogJS);l.WebPdfRedactionMarkAppearanceDialogJS=q;l.WebUiPdfRedactionMarkSettingsDialogJS=s;l.WebUiPdfImageResourceDialogJS=D}if(g.Twain){var y=function(e){var d=
y.superclass,c=y.prototype;c.okButtonClicked=function(a,b){};c.cancelButtonClicked=function(a){};b.VintasoftLocalizationJS.setStringConstant(a(0,141,37),a(0,301,19));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));this._13900=e=new p.WebUiTwainSelectDevicePanelJS({cssClass:a(0,1446,18)},e);var f=this,g=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,141,37)),cssClass:a(0,564,11)});
g.set_HeaderIndex(5);delete c.okButtonClicked;delete c.cancelButtonClicked;var m=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){f.hide();var b=f._13900,c=b.get_SelectedDevice(),d=b.get_ShowUI(),b=b.get_ChangeDeviceCapabilities();f._19552(a(0,992,15),{showUI:d,changeDeviceCapabilities:b,device:c})}}}),l=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
1325,24)),localizationId:a(0,257,12),onClick:{callback:function(){f.hide();f._19552(a(0,1669,19))}}}),n={cssClass:a(0,1640,29),localizationId:a(0,118,23)};d.constructor.call(this,[g],[e],[m,l],n);c.get_ShowUI=function(){return this._13900.get_ShowUI()};c.get_ChangeDeviceCapabilities=function(){return this._13900.get_ChangeDeviceCapabilities()};c.get_SelectedDevice=function(){return this._13900.get_SelectedDevice()}};b.extend(y,n.WebUiDialogJS);var z=function(e){var d=z.superclass,c=z.prototype;c.okButtonClicked=
function(a){};c.cancelButtonClicked=function(a){};b.VintasoftLocalizationJS.setStringConstant(a(0,706,40),a(0,1421,25));b.VintasoftLocalizationJS.setStringConstant(a(0,866,20),a(0,299,2));b.VintasoftLocalizationJS.setStringConstant(a(0,1325,24),a(0,63,6));this._5096=e=new p.WebUiTwainDeviceCapabilitiesPanelJS({cssClass:a(0,1446,18)},e);var f=this,g=new h.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,706,40)),cssClass:a(0,564,11)});g.set_HeaderIndex(5);delete c.okButtonClicked;
delete c.cancelButtonClicked;var c=new h.WebUiButtonInputJS({cssClass:a(0,1688,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,866,20)),localizationId:a(0,1604,8),onClick:{callback:function(){f.hide();f._19552(a(0,992,15))}}}),l=new h.WebUiButtonInputJS({cssClass:a(0,72,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1325,24)),localizationId:a(0,193,12),onClick:{callback:function(){f.hide();f._19552(a(0,1669,19))}}}),n={cssClass:a(0,320,35),localizationId:a(0,508,29)};d.constructor.call(this,
[g],[e],[c,l],n)};b.extend(z,n.WebUiDialogJS);l.WebTwainDeviceSelectionDialogJS=y;l.WebTwainDeviceCapabilitiesDialogJS=z}l.WebImageSelectionDialogJS=u;l.WebUiUploadImageFromUrlDialogJS=v;l.WebExportFileSettingsDialogJS=w;l.WebPrintImagesDialogJS=A;l.WebImageViewerSettingsDialogJS=B;l.WebThumbnailViewerSettingsDialogJS=t})(r.Dialogs)})(r.DocumentViewer)})(g.Imaging)})(Vintasoft);
