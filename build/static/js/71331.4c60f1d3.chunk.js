/*! For license information please see 71331.4c60f1d3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[71331],{71331:function(e,i,t){t.r(i),t.d(i,{default:function(){return m}});var a=t(39094);function r(e){return e%10<5&&e%10>1&&~~(e/10)%10!==1}function _(e,i,t){var a=e+" ";switch(t){case"m":return i?"minuta":"minut\u0119";case"mm":return a+(r(e)?"minuty":"minut");case"h":return i?"godzina":"godzin\u0119";case"hh":return a+(r(e)?"godziny":"godzin");case"MM":return a+(r(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return a+(r(e)?"lata":"lat")}}var n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"),s="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),c=/D MMMM/,u=function(e,i){return c.test(i)?n[e.month()]:s[e.month()]};u.s=s,u.f=n;var m={name:"pl",weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),months:u,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:_,mm:_,h:_,hh:_,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:_,y:"rok",yy:_},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};a.d.locale(m,null,!0)}}]);
//# sourceMappingURL=71331.4c60f1d3.chunk.js.map