"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6530],{7149:(u,v,r)=>{r.d(v,{$:()=>I});var m=r(5861),N=r(5619),i=r(3637),l=r(9212),h=r(5889),c=r(7346),g=r(5514);let I=(()=>{var _;class A{constructor(E,R,S){var n=this;this.localStorage=E,this.platform=R,this.networkService=S,this.authenticationState=new N.X(!1),this.getAuthenticationStatus=function(){var P=(0,m.Z)(function*(U){n.localStorage.getItem(i.K.LOGGED_IN_STATUS).then(D=>{console.log("AuthenticationStatus: ",D),U(D)})});return function(U){return P.apply(this,arguments)}}(),this.authenticationStatus=!1,this.platform.ready().then(()=>{this.checkToken()})}login(E){this.localStorage.setItem(i.K.LOGGED_IN_STATUS,!0).then(R=>{this.authenticationState.next(!0),this.authenticationStatus=!0,E()})}logout(E){this.localStorage.setItem(i.K.LOGGED_IN_STATUS,!1).then(R=>{this.authenticationState.next(!1),this.authenticationStatus=!1,this.localStorage.clear(),E()})}isAuthenticated(E,R){return this.localStorage.getItem(i.K.LOGGED_IN_STATUS).then(S=>{null!=S&&null!=S?(this.authenticationState.next(!0),this.authenticationStatus=!0,E(!0)):(this.authenticationState.next(!1),this.authenticationStatus=!1,R(!1))}),this.authenticationState.value}checkToken(){this.isAuthenticated(E=>{this.authenticationStatus=E},()=>{this.authenticationStatus=!1})}}return(_=A).\u0275fac=function(E){return new(E||_)(l.LFG(h.n),l.LFG(c.t4),l.LFG(g.S))},_.\u0275prov=l.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),A})()},6709:(u,v,r)=>{r.d(v,{I:()=>N});var m=r(9212);let N=(()=>{var i;class l{constructor(){}hash(c){var g="";for(let I=0;I<c.length;I++)g+=c[I].charCodeAt(0).toString(16)+"-";return g.substring(0,g.length-1)}}return(i=l).\u0275fac=function(c){return new(c||i)},i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),l})()},3929:(u,v,r)=>{r.d(v,{F:()=>N});var m=r(9212);let N=(()=>{var i;class l{constructor(){this.currencySymbol="$"}}return(i=l).\u0275fac=function(c){return new(c||i)},i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),l})()},6530:(u,v,r)=>{r.d(v,{K:()=>P});var S,m=r(9421),N=r(5619),i=r(553),l=r(3637),h=r(6814),c=r(9212),g=r(206),I=r(6709),_=r(7149),A=r(6422),O=r(5514),E=r(3929),R=r(5889);class n{}(S=n).USER_LOGIN_URL=i.N.apiURL+"/api/users/Login",S.LIST=i.N.apiURL+"/sheets/Users?keys=id,UserName,Email,PhoneNumber,FirstName,LastNamae,Role,Status,CreatedAt,Id&skip={SKIP}&limit={LIMIT}&timestamp="+(new Date).getTime(),S.SEARCH=i.N.apiURL+"/sheets/Users?keys=id,UserName,Email,PhoneNumber,FirstName,LastNamae,Role,Status,CreatedAt,Id&where={{SEARCH}}&timestamp="+(new Date).getTime(),S.READ=i.N.apiURL+"/api/users/info?id=",S.UPDATE=i.N.apiURL+"/sheets/Users/{ROW_INDEX}?timestamp="+(new Date).getTime(),S.SAVE=i.N.apiURL+"/sheets/Users?timestamp="+(new Date).getTime(),S.DELETE=i.N.apiURL+"/sheets/Users/{ROW_INDEX}?timestamp="+(new Date).getTime(),S.READ_BY_USER_NAME=i.N.apiURL+'/sheets/Users?keys=UserName,Id&where={"UserName":"USER_NAME" }&timestamp='+(new Date).getTime(),S.READ_BY_EMAIL=i.N.apiURL+'/sheets/Users?keys=Email,Id&where={"Email": "EMAIL"}&timestamp='+(new Date).getTime(),S.RESET_PASSWORD=i.N.apiURL+"/sheets/Users/{ROW_INDEX}?timestamp="+(new Date).getTime();let P=(()=>{var U;class D{constructor(e,t,s,a,o,d,L){this.eventBus=e,this.securityService=t,this.authenticationService=s,this.authorizationService=a,this.networkService=o,this.sharedService=d,this.localStorageService=L,this.genders=[],this.roles=[],this.statuses=[],this.authenticationState=new N.X(!1),this.sampleuser={Id:0,Name:"OOps, Unable to fetch User Name",Account:{Id:0,Name:"OOps, Unable to fetch Compnay Name"}},this.genders=["Male","Female","Others"],this.roles=["SuperAdmin","Admin","User"],this.statuses=["Active","InActive","Suspended"]}isSessionValid(e,t){this.localStorageService.StoredPreference.LoggedInStatus?this.loggedInUser=this.localStorageService.StoredPreference.LoggedInUser:t("SOMETHING_WENT_WRONG")}getUseDetails(e,t){!0===this.localStorageService.StoredPreference.LoggedInStatus?this.loggedInUser=this.localStorageService.StoredPreference.LoggedInUser:t("SOMETHING_WENT_WRONG")}logout(e){this.authenticationService.logout(()=>{this.loggedInUser&&(this.loggedInUser.FirstName="",this.loggedInUser.LastName="",this.loggedInUser.UserName="",this.loggedInUser.Email="",this.loggedInUser.Gender="",this.loggedInUser.DateOfBirth="",this.loggedInUser.Role="",this.loggedInUser.PhoneNumber="",this.loggedInUser.Status="",this.loggedInUser.StatusIcon="",e())})}login(e,t,s,a){this.loggedInUser=new m.n(JSON.parse("{}"));var o={username:e,password:this.securityService.hash(t)};this.networkService.post(n.USER_LOGIN_URL,o,d=>{if("SUCCESS"===d.statusCode)switch(this.loggedInUser=new m.n(d.data),this.loggedInUser.Status){case"Active":!0===this.loggedInUser.ResetRequired?a("RESET_REQUIRED"):this.authenticationService.login(()=>{this.setLocalUser(this.loggedInUser),s()});break;case"Inactive":case"InActive":a("INACTIVE_USER");break;case"Suspended":a("SUSPENDED_USER")}else a("INVALID_CREDENTAILS")},()=>{a("INVALID_CREDENTAILS")})}checkUser(e,t,s,a){this.loggedInUser=new m.n(JSON.parse("{}")),this.networkService.get(n.READ_BY_USER_NAME.replace("EMAIL",e).replace("PASSWORD",this.securityService.hash(t)),o=>{if(0!==o.results.length){var d=o.results[0];switch(d.Status){case"Active":s(d);break;case"Inactive":case"InActive":a("INACTIVE_USER");break;case"Suspended":a("SUSPENDED_USER")}}else a("INVALID_CREDENTAILS")},()=>{a("INVALID_CREDENTAILS")})}Validate(e){return!(null==e.FirstName||void 0===e.FirstName||""===e.FirstName||null==e.LastName||void 0===e.LastName||""===e.LastName||null==e.Gender||void 0===e.Gender||""===e.Gender||null==e.Email||void 0===e.Email||""===e.Email||null==e.PhoneNumber||void 0===e.PhoneNumber||""===e.PhoneNumber||null==e.UserName||void 0===e.UserName||""===e.UserName)}list(e=0,t=10,s,a){this.networkService.get(n.LIST.replace("{SKIP}",e.toString()).replace("{LIMIT}",t.toString()),o=>{s(o)},()=>{a()})}listBykeyword(e,t=0,s=10,a,o){this.networkService.get(n.LIST,d=>{a(d)},()=>{o()})}search(e,t,s){this.networkService.get(n.SEARCH.replace("{REG_NO}",e),a=>{t(a)},()=>{s()})}read(e,t,s){this.networkService.get(n.SEARCH.replace("{REG_NO}",e),a=>{t(a.results)},()=>{s()})}readById(e,t,s){this.networkService.get(n.READ,a=>{t(a.data)},()=>{s()})}readByEmail(e,t,s){this.networkService.get(n.READ.replace("EMAIL",e),a=>{t(a.result)},()=>{s()})}readByUserName(e,t,s){this.networkService.get(n.READ_BY_USER_NAME.replace("USER_NAME",e),a=>{t(a.result)},()=>{s()})}SaveUser(e,t,s){e.createdOn=(0,h.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),e.updatedOn=(0,h.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),this.networkService.post(n.SAVE,this.ToJSON(e),a=>{e.id=a.id,t(e)},()=>{s()})}UpdateUser(e,t,s){e.createdOn=(0,h.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),this.networkService.put(n.UPDATE.replace("{ROW_INDEX}",e.id.toString()),this.ToUpdateJSON(e),a=>{t(a)},()=>{s()})}UpdateUserCredentials(e,t,s){e.createdOn=(0,h.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),this.networkService.put(n.UPDATE.replace("{ROW_INDEX}",e.id.toString()),this.ToCredentialsJSON(e),a=>{t(a)},()=>{s()})}ResetPassword(e,t,s,a){var o={UpdatedOn:(0,h.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),Password:this.securityService.hash(t),ResetRequired:0};this.networkService.put(n.RESET_PASSWORD.replace("{ROW_INDEX}",e.toString()),o,d=>{s(d)},()=>{a()})}DeleteUser(e,t,s){this.networkService.delete(n.DELETE.replace("{ROW_INDEX}",e.id.toString()),this.ToJSON(e),a=>{t(a)},()=>{s()})}UpdateUserProfile(e,t,s){e.createdOn=(0,h.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),this.networkService.put(n.UPDATE.replace("{ROW_INDEX}",e.id.toString()),this.ToUpdateJSON(e),a=>{console.log("UpdateUserProfile",a),this.setLocalUser(a),t(a)},()=>{s()})}setLocalUser(e){this.authorizationService.loggedInUser=e,this.localStorageService.StoredPreference.LoggedInUser=e,this.localStorageService.StoredPreference.LoggedInStatus=!0,this.localStorageService.StoredPreference.LoggedInUserEmail=e.Email,this.localStorageService.StoredPreference.LoggedInUserName=e.UserName,this.localStorageService.StoredPreference.LoggedInUserId=e.id,this.localStorageService.setItem(l.K.USER_OBJECT,e),this.localStorageService.setItem(l.K.USER_EMAIL,e.Email),this.localStorageService.setItem(l.K.USER_NAME,e.UserName),this.localStorageService.setItem(l.K.USER_ROW_INDEX,e.id),this.localStorageService.setItem(l.K.DEFAULT_APP_LANGUAGE,"en")}ToJSON(e){var t,s;return null!=e.id&&void 0!==e.id&&0!==e.id?{UserName:e.UserName,Password:this.securityService.hash(null!==(t=e.Password)&&void 0!==t?t:""),Email:e.Email,PhoneNumber:e.PhoneNumber,FirstName:e.FirstName,LastName:e.LastName,Gender:e.Gender,Role:e.Role,Status:e.Status,Id:e.id,CreatedOn:e.createdOn,UpdatedOn:e.updatedOn,ResetRequired:e.ResetRequired?1:0}:{UserName:e.UserName,Password:this.securityService.hash(null!==(s=e.Password)&&void 0!==s?s:""),Email:e.Email,PhoneNumber:e.PhoneNumber,FirstName:e.FirstName,LastName:e.LastName,Gender:e.Gender,Role:e.Role,Status:e.Status,CreatedOn:e.createdOn,UpdatedOn:e.updatedOn,ResetRequired:e.ResetRequired?1:0}}getUserByUserNameEmail(e,t,s,a){this.networkService.get(n.READ_BY_USER_NAME.replace("USER_NAME",e).replace("EMAIL",t).replace("USER_NAME",e),o=>{s(o)},()=>{a()})}getUserByEmail(e,t,s){this.networkService.get(n.READ_BY_EMAIL.replace("EMAIL",e),a=>{t(a)},()=>{s()})}sendForgotPasswordEmail(e,t,s,a,o,d){this.networkService.get(n.RESET_PASSWORD.replace("{USER_NAME}",t).replace("{EMAIL}",s).replace("{PASSWORD}",a).replace("{USER_FULL_NAME}",e),L=>{o(L)},()=>{d()})}sendForgotUserEmail(e,t,s,a,o){var d=n.READ.replace("{USER_NAME}",s).replace("{EMAIL}",t).replace("{USER_FULL_NAME}",e);this.networkService.get(d,L=>{a(L)},()=>{o()})}ToUpdateJSON(e){return{UserName:e.UserName,Email:e.Email,PhoneNumber:e.PhoneNumber,FirstName:e.FirstName,LastName:e.LastName,Gender:e.Gender,Role:e.Role,Status:e.Status,UpdatedOn:e.updatedOn}}ToProfileJSON(e){var t;return{UserName:e.UserName,Password:this.securityService.hash(null!==(t=e.Password)&&void 0!==t?t:""),Email:e.Email,PhoneNumber:e.PhoneNumber,FirstName:e.FirstName,LastName:e.LastName,Gender:e.Gender,Id:e.id}}ToCredentialsJSON(e){var t;return e.updatedOn=(0,h.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),{UserName:e.UserName,Email:e.Email,Password:this.securityService.hash(null!==(t=e.Password)&&void 0!==t?t:""),ResetRequired:1,UpdatedOn:e.updatedOn}}}return(U=D).\u0275fac=function(e){return new(e||U)(c.LFG(g.F),c.LFG(I.I),c.LFG(_.$),c.LFG(A.Z),c.LFG(O.S),c.LFG(E.F),c.LFG(R.n))},U.\u0275prov=c.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"}),D})()}}]);