"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8560],{8560:(R,U,l)=>{l.r(U),l.d(U,{UpdateUserPageModule:()=>P});var p=l(6814),u=l(6223),s=l(878),g=l(6800),f=l(5861),h=l(9421),e=l(9212),_=l(6530),S=l(643),A=l(3864),m=l(9864);function E(n,c){if(1&n&&(e.TgZ(0,"ion-select-option",17),e._uU(1),e.qZA()),2&n){const a=c.$implicit;e.s9C("value",a),e.xp6(),e.hij(" ",a," ")}}function M(n,c){if(1&n&&(e.TgZ(0,"ion-select-option",17),e._uU(1),e.qZA()),2&n){const a=c.$implicit;e.s9C("value",a),e.xp6(),e.hij(" ",a," ")}}function T(n,c){if(1&n&&(e.TgZ(0,"ion-select-option",17),e._uU(1),e.qZA()),2&n){const a=c.$implicit;e.s9C("value",a),e.xp6(),e.hij(" ",a," ")}}const Z=[{path:"",component:(()=>{var n;class c{constructor(i,t,r,o,d,L,C){this.loadingCtrl=i,this.userService=t,this.activatedRoute=r,this.alertController=o,this.languageService=d,this.router=L,this.loaderService=C,this.genders=[],this.roles=[],this.statuses=[],this.genders=["Male","Female","Others"],this.roles=["SuperAdmin","Admin","User"],this.statuses=["Active","InActive","Suspended"],this.user=null!=this.userService.selectedUser&&null!=this.userService.selectedUser?this.userService.selectedUser:new h.n(JSON.parse("{}"))}ngAfterViewInit(){this.activatedRoute.queryParams.subscribe(i=>{const t=Number.parseInt(i.Id,10);this.loadUserDetails(t)})}loadUserDetails(i){this.loaderService.customLoader("Loading User Details...",1e4),this.userService.readById(i,t=>{this.user=new h.n(t.result[0]),this.user.Icon="person-sharp",this.loaderService.dismissLoader()},()=>{this.loaderService.dismissLoader()})}goToUserList(){this.userService.selectedUser=this.user;const i={queryParams:{ts:(new Date).getMilliseconds()}};this.router.navigate(["home/user-list"],i)}updateButtonClicked(){this.validate()?this.checkEmailExistance(()=>{this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"),this.languageService.translate("SIGN_UP.USER_WITH_EMAIL_ALREADY_EXISTS"))},()=>{this.checkUserNameExistance(()=>{this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"),this.languageService.translate("SIGN_UP.USER_WITH_USERNAME_ALREADY_EXISTS"))},()=>{this.updateUser(()=>{this.goToUserList()},()=>{this.presentAlert(this.languageService.translate("SIGN_UP.REGISTRATION_FAILED"),this.languageService.translate("SIGN_UP.REGISTRATION_FAILED_MESSAGE"))})})}):this.presentAlert(this.languageService.translate("SIGN_UP.EMPTY_DETAILS"),this.languageService.translate("SIGN_UP.EMPTY_DETAILS_MESSAGE"))}checkEmailExistance(i,t){this.loaderService.customLoader("Checking for Email...",1e4),this.userService.readByEmail(this.user.Email,r=>{this.loaderService.dismissLoader();let o=0;r.length>0?(r.forEach(d=>{this.user.Email.toLowerCase()===d.Email.toLowerCase()&&this.user.id!==d.id&&o++}),o>0?i(new h.n(r[0])):t()):t()},()=>{this.loaderService.dismissLoader(),t()})}checkUserNameExistance(i,t){this.loaderService.customLoader("Checking for User Name...",1e4),this.userService.readByUserName(this.user.UserName,r=>{this.loaderService.dismissLoader();let o=0;r.length>0?(r.forEach(d=>{this.user.UserName===d.UserName&&this.user.id!==d.id&&o++}),o>0?i(new h.n(r[0])):t()):t()},()=>{this.loaderService.dismissLoader(),t()})}updateUser(i,t){this.loaderService.customLoader("Saving User...",1e4),this.user.updatedOn=(0,p.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),this.userService.UpdateUser(this.user,r=>{this.loaderService.dismissLoader(),this.goToUserList()},()=>{this.loaderService.dismissLoader()})}validate(){return!(null==this.user.FirstName||null==this.user.FirstName||""==this.user.FirstName||null==this.user.LastName||null==this.user.LastName||""==this.user.LastName||null==this.user.Gender||null==this.user.Gender||""==this.user.Gender||null==this.user.Email||null==this.user.Email||""==this.user.Email||null==this.user.PhoneNumber||null==this.user.PhoneNumber||""==this.user.PhoneNumber||null==this.user.UserName||null==this.user.UserName||""==this.user.UserName)}presentAlert(i=this.languageService.translate("SIGN_UP.TITLE"),t=this.languageService.translate("SIGN_UP.REGISTRATION_FAILED")){var r=this;return(0,f.Z)(function*(){const o=yield r.alertController.create({cssClass:"app-alert-class",header:i,subHeader:"",message:t,buttons:[r.languageService.translate("BUTTONS.OK")]});yield o.present(),yield o.onDidDismiss()})()}}return(n=c).\u0275fac=function(i){return new(i||n)(e.Y36(s.HT),e.Y36(_.K),e.Y36(g.gz),e.Y36(s.Br),e.Y36(S.T),e.Y36(g.F0),e.Y36(A.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-update-user"]],decls:112,vars:72,consts:[[1,"text-center"],[1,"user-icon",3,"name"],["name","people-circle-outline","slot","start"],["size","12"],["size","6"],[1,"value",3,"ngModel","placeholder","ngModelChange"],["size","auto",1,"value"],["multiple","false","cancelText","Cancel","okText","Select",3,"ngModel","placeholder","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","settings-outline","slot","start"],["size","6",1,"value"],[3,"ngModel","placeholder","ngModelChange"],["name","options-outline","slot","start"],["multiple","false","cancelText","Cancel","okText","Select",1,"value",3,"ngModel","placeholder","ngModelChange"],["expand","block",3,"click"],["slot","start","name","close"],["slot","start","name","save"],[3,"value"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-content")(1,"ion-card")(2,"ion-card-header",0),e._UZ(3,"ion-icon",1),e.qZA()(),e.TgZ(4,"ion-card")(5,"ion-card-header",0)(6,"ion-item"),e._UZ(7,"ion-icon",2),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"ion-card-content")(11,"ion-list")(12,"ion-item")(13,"ion-grid")(14,"ion-row")(15,"ion-col",3),e._uU(16),e.ALo(17,"translate"),e.qZA()(),e.TgZ(18,"ion-row")(19,"ion-col",4)(20,"ion-input",5),e.NdJ("ngModelChange",function(o){return t.user.FirstName=o}),e.ALo(21,"translate"),e.qZA()(),e.TgZ(22,"ion-col",4)(23,"ion-input",5),e.NdJ("ngModelChange",function(o){return t.user.LastName=o}),e.ALo(24,"translate"),e.qZA()()()()(),e.TgZ(25,"ion-item")(26,"ion-grid")(27,"ion-row")(28,"ion-col",4),e._uU(29),e.ALo(30,"translate"),e.qZA(),e.TgZ(31,"ion-col",6)(32,"ion-select",7),e.NdJ("ngModelChange",function(o){return t.user.Gender=o}),e.ALo(33,"translate"),e.YNc(34,E,2,2,"ion-select-option",8),e.qZA()()()()()()()(),e.TgZ(35,"ion-card")(36,"ion-card-header",0)(37,"ion-item"),e._UZ(38,"ion-icon",9),e._uU(39),e.ALo(40,"translate"),e.qZA()(),e.TgZ(41,"ion-card-content")(42,"ion-list")(43,"ion-item")(44,"ion-grid")(45,"ion-row")(46,"ion-col"),e._uU(47),e.ALo(48,"translate"),e.qZA(),e.TgZ(49,"ion-col",10)(50,"ion-input",11),e.NdJ("ngModelChange",function(o){return t.user.Email=o}),e.ALo(51,"translate"),e.qZA()()()()(),e.TgZ(52,"ion-item")(53,"ion-grid")(54,"ion-row")(55,"ion-col"),e._uU(56),e.ALo(57,"translate"),e.qZA(),e.TgZ(58,"ion-col",10)(59,"ion-input",11),e.NdJ("ngModelChange",function(o){return t.user.PhoneNumber=o}),e.ALo(60,"translate"),e.qZA()()()()()()()(),e.TgZ(61,"ion-card")(62,"ion-card-header")(63,"ion-item"),e._UZ(64,"ion-icon",12),e._uU(65),e.ALo(66,"translate"),e.qZA()(),e.TgZ(67,"ion-card-content")(68,"ion-list")(69,"ion-item")(70,"ion-grid")(71,"ion-row")(72,"ion-col"),e._uU(73),e.ALo(74,"translate"),e.qZA(),e.TgZ(75,"ion-col",4)(76,"ion-input",5),e.NdJ("ngModelChange",function(o){return t.user.UserName=o}),e.ALo(77,"translate"),e.qZA()()()()(),e.TgZ(78,"ion-item")(79,"ion-grid")(80,"ion-row")(81,"ion-col"),e._uU(82),e.ALo(83,"translate"),e.qZA(),e.TgZ(84,"ion-col",4)(85,"ion-select",13),e.NdJ("ngModelChange",function(o){return t.user.Role=o}),e.ALo(86,"translate"),e.YNc(87,M,2,2,"ion-select-option",8),e.qZA()()()()(),e.TgZ(88,"ion-item")(89,"ion-grid")(90,"ion-row")(91,"ion-col"),e._uU(92),e.ALo(93,"translate"),e.qZA(),e.TgZ(94,"ion-col",4)(95,"ion-select",13),e.NdJ("ngModelChange",function(o){return t.user.Status=o}),e.ALo(96,"translate"),e.YNc(97,T,2,2,"ion-select-option",8),e.qZA()()()()()()()(),e.TgZ(98,"ion-card")(99,"ion-card-header",0)(100,"ion-item"),e._UZ(101,"ion-icon"),e.qZA()(),e._UZ(102,"ion-card-content"),e.qZA()(),e.TgZ(103,"ion-footer")(104,"ion-button",14),e.NdJ("click",function(){return t.goToUserList()}),e._UZ(105,"ion-icon",15),e._uU(106),e.ALo(107,"translate"),e.qZA(),e.TgZ(108,"ion-button",14),e.NdJ("click",function(){return t.updateButtonClicked()}),e._UZ(109,"ion-icon",16),e._uU(110),e.ALo(111,"translate"),e.qZA()()),2&i&&(e.xp6(3),e.Q6J("name",t.user.Icon),e.xp6(5),e.hij(" ",e.lcZ(9,32,"USER.BASIC_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(17,34,"BASE_MODEL.name")," "),e.xp6(4),e.MGl("placeholder"," ",e.lcZ(21,36,"USER.FIRST_NAME"),""),e.Q6J("ngModel",t.user.FirstName),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(24,38,"USER.LAST_NAME"),""),e.Q6J("ngModel",t.user.LastName),e.xp6(6),e.hij("",e.lcZ(30,40,"USER.GENDER")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(33,42,"USER.GENDER"),""),e.Q6J("ngModel",t.user.Gender),e.xp6(2),e.Q6J("ngForOf",t.genders),e.xp6(5),e.hij(" ",e.lcZ(40,44,"USER.CONTACT_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(48,46,"USER.EMAIL")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(51,48,"USER.EMAIL"),""),e.Q6J("ngModel",t.user.Email),e.xp6(6),e.hij("",e.lcZ(57,50,"USER.PHONE_NUMBER")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(60,52,"USER.PHONE_NUMBER"),""),e.Q6J("ngModel",t.user.PhoneNumber),e.xp6(6),e.hij(" ",e.lcZ(66,54,"USER.ACCOUNT_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(74,56,"USER.USER_NAME")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(77,58,"USER.USER_NAME"),""),e.Q6J("ngModel",t.user.UserName),e.xp6(6),e.hij("",e.lcZ(83,60,"USER.ROLE")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(86,62,"USER.ROLE"),""),e.Q6J("ngModel",t.user.Role),e.xp6(2),e.Q6J("ngForOf",t.roles),e.xp6(5),e.hij("",e.lcZ(93,64,"BASE_MODEL.STATUS")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(96,66,"BASE_MODEL.STATUS"),""),e.Q6J("ngModel",t.user.Status),e.xp6(2),e.Q6J("ngForOf",t.statuses),e.xp6(9),e.hij(" ",e.lcZ(107,68,"BUTTONS.CANCEL")," "),e.xp6(4),e.hij(" ",e.lcZ(111,70,"BUTTONS.SAVE")," "))},dependencies:[p.sg,u.JJ,u.On,s.YG,s.PM,s.FN,s.Zi,s.wI,s.W2,s.fr,s.jY,s.gu,s.pK,s.Ie,s.q_,s.Nd,s.t9,s.n0,s.QI,s.j9,m.X$],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: url(/assets/bg20.JPG) 0 0/100% 100% no-repeat;background-size:cover;background-color:#f0f8ff}.toolbar-backgorund[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#000}.user-profile-pic[_ngcontent-%COMP%]{width:60px;height:60px;display:block;margin-top:20px;margin-left:auto;margin-right:auto;background-color:#f0f8ff}ion-note[_ngcontent-%COMP%]{display:inline-block;font-size:16px;background-color:#f0f8ff;color:#000}ion-item.selected[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#000}ion-card[_ngcontent-%COMP%]{color:#2c1d1d;background-color:#f0f8ff;padding:0;margin:0;border-radius:10px}ion-card-content[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#130d0d}ion-select[_ngcontent-%COMP%]{max-width:100%!important;width:100%!important;padding-left:0!important}ion-text[_ngcontent-%COMP%]{--padding-top: 0;--padding-start: 0}.user-results[_ngcontent-%COMP%], .user-results-list-header[_ngcontent-%COMP%]{background-color:#f0f8ff}.user-result-cell[_ngcontent-%COMP%]{background-color:#7fffd4;margin-top:10px}.list-image[_ngcontent-%COMP%], .user-icon[_ngcontent-%COMP%]{font-size:50px;color:#1f0707}.value[_ngcontent-%COMP%]{font-size:larger;font-weight:600}.text-center[_ngcontent-%COMP%]{text-align:center;align-items:center}.bottom-area[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;right:0;background-color:gray;height:45px;margin-bottom:0}.bottom-button[_ngcontent-%COMP%]{border-width:1px;border-color:#3e2c2c;color:#fff;font-size:larger;font-weight:800;border-style:solid;width:50%;margin:5px auto auto}"]}),c})()}];let v=(()=>{var n;class c{}return(n=c).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(Z),g.Bz]}),c})();var N=l(1383);let P=(()=>{var n;class c{}return(n=c).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,u.u5,s.Pc,u.UX,v,N.m,m.aw.forChild()]}),c})()}}]);