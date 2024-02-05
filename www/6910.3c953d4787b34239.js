"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6910],{6910:(R,_,r)=>{r.r(_),r.d(_,{LoginPageModule:()=>O});var E=r(6814),u=r(6223),o=r(878),d=r(6800),c=r(5861),e=r(9212),h=r(6530),m=r(643),L=r(9864);function A(n,s){1&n&&(e.TgZ(0,"ion-label",26),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(),e.hij(" ",e.lcZ(2,1,"LOGIN.EMAIL_VALIDATION_MESSAGE")," "))}function P(n,s){1&n&&(e.TgZ(0,"ion-label",26),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(),e.hij(" ",e.lcZ(2,1,"LOGIN.PASSWORD_VALIDATION_MESSAGE")," "))}const f=[{path:"",component:(()=>{var n;class s{constructor(t,a,i,l,T,p){this.toastCtrl=t,this.alertController=a,this.router=i,this.loadingController=l,this.userService=T,this.languageService=p,this.user=null,this.showUsernameValidationMessage=!1,this.showPasswordValidationMessage=!1}ngAfterViewInit(){this.userName="",this.password=""}ionViewWillEnter(){}validate(){var t=!0;return(null==this.userName||""===this.userName)&&(this.showUsernameValidationMessage=!0,t=!1),(null==this.password||""===this.password)&&(this.showPasswordValidationMessage=!0,t=!1),t}ngOnInit(){var t=this;return(0,c.Z)(function*(){t.resetRequired=!1})()}presentLoading(t){return(0,c.Z)(function*(){yield t.present()})()}goToRegister(){let t={queryParams:{ts:(new Date).getTime()}};this.router.navigate(["/register"],t)}goToHome(){let t={queryParams:{ts:(new Date).getTime()}};this.router.navigate(["/home"],t)}forgotPasswordLinkClicked(){let t={queryParams:{ts:(new Date).getTime()}};this.router.navigate(["/forgot-password"],t)}forgotUserLinkClicked(){let t={queryParams:{ts:(new Date).getTime()}};this.router.navigate(["/forgot-username"],t)}loginButtonClicked(){var t=this;return(0,c.Z)(function*(){t.backendValidation=!1,t.validate()&&(t.loading=yield t.loadingController.create({message:t.languageService.translate("LOGIN.SIGN_IN_PROGRESS_MESSAGE"),duration:1e4}),t.loading.present(),t.userService.login(t.userName?t.userName:"",t.password?t.password:"",(0,c.Z)(function*(){t.backendValidation=!0,t.loading.dismiss();let a={queryParams:{ts:(new Date).getTime()}};t.router.navigate(["/home"],a)}),a=>{switch(t.loading.dismiss(),t.backendValidation=!1,a){case"INVALID_CREDENTAILS":t.resetRequired=!1,t.presentAlert(t.languageService.translate("LOGIN.INVALID_CREDENTIALS_ERROR_TITLE"),t.languageService.translate("LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE"));break;case"INACTIVE_USER":t.resetRequired=!1,t.presentAlert(t.languageService.translate("LOGIN.INACTIVE_ACCOUNT_ERROR_TITLE"),t.languageService.translate("LOGIN.ERROR_INACTIVE_ACCOUNT_MESSAGE"));break;case"SUSPENDED_USER":t.resetRequired=!1,t.presentAlert(t.languageService.translate("LOGIN.SUSPENDED_ACCOUNT_ERROR_TITLE"),t.languageService.translate("LOGIN.ERROR_SUSPENDED_ACCOUNT_MESSAGE"));break;case"RESET_REQUIRED":t.resetRequired=!0,t.presentAlert(t.languageService.translate("LOGIN.PASSWORD_RESET_REQUIRED_ERROR_TITLE"),t.languageService.translate("LOGIN.PASSWORD_RESET_REQUIRED_ACCOUNT_MESSAGE"))}}))})()}signupLinkClicked(){let t={queryParams:{ts:(new Date).getTime()}};this.router.navigate(["/register"],t)}languageLinkClicked(){this.languageService.presentLanguageSelctionMenu(()=>{})}presentAlert(t=this.languageService.translate("LOGIN.ERROR_ALERT_TITLE"),a=this.languageService.translate("LOGIN.ERROR_INVALID_CREDENTIALS_MESSAGE")){var i=this;return(0,c.Z)(function*(){const l=yield i.alertController.create({cssClass:"my-custom-class",header:t,subHeader:"",message:a,buttons:[{text:i.languageService.translate("BUTTONS.OK"),handler:()=>{if(i.resetRequired){i.userService.lastRoute="login";let p={queryParams:{ts:(new Date).getTime()}};i.router.navigate(["reset-password"],p)}}}]});yield l.present(),yield l.onDidDismiss()})()}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(o.yF),e.Y36(o.Br),e.Y36(d.F0),e.Y36(o.HT),e.Y36(h.K),e.Y36(m.T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:51,vars:34,consts:[["padding","",1,"animated","fadeIn","login","auth-page"],[1,"theme-bg"],[1,"auth-content"],["padding-horizontal","","text-center","",1,"animated","fadeInDown"],[1,"app-logo","center"],["src","/assets/icon/org-logo.png"],["no-margin","",1,"text-center"],["color","dark",1,"ion-text-justify"],["id","UserProfile",1,"toolbar-backgorund","credentials-area"],["name","person","slot","start"],["name","Email",1,"credentials-field",3,"placeholder","ngModel","ngModelChange"],["name","","slot","end"],["color","danger",4,"ngIf"],["id","UserProfile",1,"toolbar-backgorund"],["name","key","slot","start"],["type","password","name","Password",3,"placeholder","ngModel","ngModelChange"],[1,"forgotLinks"],[1,"left"],[3,"click"],[1,"right"],["expand","full","shape","round","color","dark","tappable","",1,"signin",3,"click"],[1,"text-center","sign-up-area"],["tappable","",1,"paz",3,"click"],[1,"sign-up-text"],[1,"text-center","language-button"],["color","dark"],["color","danger"]],template:function(t,a){1&t&&(e.TgZ(0,"ion-content",0),e._UZ(1,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"h4",6)(7,"ion-text",7),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"h5",6)(11,"ion-text",7),e._uU(12),e.ALo(13,"translate"),e.qZA()()(),e.TgZ(14,"ion-item",8),e._UZ(15,"ion-icon",9),e.TgZ(16,"ion-input",10),e.NdJ("ngModelChange",function(l){return a.userName=l}),e.ALo(17,"translate"),e.qZA(),e._UZ(18,"ion-icon",11),e.qZA(),e.YNc(19,A,3,3,"ion-label",12),e.TgZ(20,"ion-item",13),e._UZ(21,"ion-icon",14),e.TgZ(22,"ion-input",15),e.NdJ("ngModelChange",function(l){return a.password=l}),e.ALo(23,"translate"),e.qZA()(),e.YNc(24,P,3,3,"ion-label",12),e.TgZ(25,"div",16)(26,"span",17)(27,"button",18),e.NdJ("click",function(){return a.forgotPasswordLinkClicked()}),e._uU(28),e.ALo(29,"translate"),e.qZA()(),e.TgZ(30,"span",19)(31,"button",18),e.NdJ("click",function(){return a.forgotUserLinkClicked()}),e._uU(32),e.ALo(33,"translate"),e.qZA()()(),e.TgZ(34,"div")(35,"ion-button",20),e.NdJ("click",function(){return a.loginButtonClicked()}),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"div",21)(39,"span",22),e.NdJ("click",function(){return a.signupLinkClicked()}),e.TgZ(40,"ion-text",23),e._uU(41),e.ALo(42,"translate"),e.TgZ(43,"strong"),e._uU(44),e.ALo(45,"translate"),e.qZA()()()()(),e.TgZ(46,"div",24)(47,"span",22),e.NdJ("click",function(){return a.languageLinkClicked()}),e.TgZ(48,"ion-text",25),e._uU(49),e.ALo(50,"translate"),e.qZA()()()()),2&t&&(e.xp6(8),e.hij(" ",e.lcZ(9,14,"APP_TITLE")," "),e.xp6(4),e.hij(" ",e.lcZ(13,16,"APP_SUB_TITLE")," "),e.xp6(4),e.MGl("placeholder"," ",e.lcZ(17,18,"GENERAL.USERNAME_FIELD"),""),e.Q6J("ngModel",a.userName),e.xp6(3),e.Q6J("ngIf",a.showUsernameValidationMessage),e.xp6(3),e.s9C("placeholder",e.lcZ(23,20,"GENERAL.PASSWORD_FIELD")),e.Q6J("ngModel",a.password),e.xp6(2),e.Q6J("ngIf",a.showPasswordValidationMessage),e.xp6(4),e.Oqu(e.lcZ(29,22,"FORGOT_PASSWORD_PAGE.TITLE")),e.xp6(4),e.Oqu(e.lcZ(33,24,"FORGOT_USER_NAME_PAGE.TITLE")),e.xp6(4),e.hij(" ",e.lcZ(37,26,"LOGIN.SIGN_IN_TEXT")," "),e.xp6(5),e.hij(" ",e.lcZ(42,28,"LOGIN.SIGN_UP_FIRST_TEXT")," "),e.xp6(3),e.hij(" ",e.lcZ(45,30,"LOGIN.SIGN_UP_SECOND_TEXT")," "),e.xp6(5),e.hij(" ",e.lcZ(50,32,"GENERAL.LANGUAGE")," "))},dependencies:[E.O5,u.JJ,u.On,o.YG,o.W2,o.gu,o.pK,o.Ie,o.Q$,o.yW,o.j9,L.X$],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: url(/assets/bg20.JPG) 0 0/100% 100% no-repeat ;background-size:cover}ion-item[_ngcontent-%COMP%], ion-button[_ngcontent-%COMP%], ion-icon[_ngcontent-%COMP%]{color:#000}button[_ngcontent-%COMP%]{background:transparent;color:#000}.forgotLinks[_ngcontent-%COMP%]{margin-top:20px}.signin[_ngcontent-%COMP%]{margin-top:60px}.app-logo[_ngcontent-%COMP%]{width:60px;height:60px;display:block;margin-top:30px;margin-left:auto;margin-right:auto}.paz[_ngcontent-%COMP%]{position:relative;z-index:10}.text-center[_ngcontent-%COMP%]{text-align:center}.text-left[_ngcontent-%COMP%]{text-align:left}.text-right[_ngcontent-%COMP%]{text-align:right}.left[_ngcontent-%COMP%]{float:left;text-align:left;padding-right:10px}.right[_ngcontent-%COMP%]{float:right;text-align:right;padding-left:10px}.language-button[_ngcontent-%COMP%]{position:fixed;left:0;bottom:10px;right:0}.credentials-field[_ngcontent-%COMP%]{border-radius:5px;color:#000}.credentials-area[_ngcontent-%COMP%]{margin-top:30px}.sign-up-area[_ngcontent-%COMP%]{margin-top:50px}.sign-up-text[_ngcontent-%COMP%]{color:#000}"]}),s})()}];let S=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(f),d.Bz]}),s})(),O=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[E.ez,u.u5,u.UX,o.Pc,S,L.aw.forChild()]}),s})()}}]);