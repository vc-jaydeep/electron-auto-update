"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2944],{2944:(b,g,e)=>{e.r(g),e.d(g,{SetPasswordComponent:()=>h});var c=e(4755),t=e(9401),l=e(5514),_=e(4392),r=e(603),P=e(5698),n=e(2504),m=e(4487),u=e(263),C=e(9891);function f(s,d){1&s&&(n.TgZ(0,"span",14),n._uU(1," Password is required! "),n.qZA())}function w(s,d){1&s&&(n.TgZ(0,"div",14),n._uU(1," Passwords don't match. "),n.qZA())}const p=function(s){return{hidden:s}};let h=(()=>{class s{constructor(i,o,a,M,O,v){this.formBuilder=i,this.loaderService=o,this.authService=a,this.router=M,this.activatedRoute=O,this.toastService=v,this.isPasswordVisible=!0,this.isConfirmPasswordShow=!0,this.resetPassword=new t.cw({password:new t.NI(null,[t.kI.required,t.kI.minLength(6)]),confirm_password:new t.NI(null,[t.kI.required,t.kI.minLength(6)])},{validators:[this.passwordMatchValidator]}),this.tokenId=String(this.activatedRoute.snapshot.paramMap.get("id"))}onSubmit(){this.loaderService.showLoader(),this.authService.setPassword({password:this.resetPassword.value.password,token:this.tokenId}).pipe((0,P.q)(1)).subscribe({next:()=>{this.loaderService.hideLoader(),this.toastService.presentToast("top",_.z.passwordSet,"success"),this.router.navigate(["/pos/login"])},error:o=>{this.loaderService.hideLoader(),this.toastService.presentToast("top",null==o?void 0:o.message,"danger")}})}passwordMatchValidator(i){var o,a;return(null===(o=i.controls.password)||void 0===o?void 0:o.value)===(null===(a=i.controls.confirm_password)||void 0===a?void 0:a.value)?null:{mismatch:!0}}get resetPasswordControl(){return this.resetPassword.controls}}return s.\u0275fac=function(i){return new(i||s)(n.Y36(t.qu),n.Y36(m.D),n.Y36(u.e),n.Y36(l.F0),n.Y36(l.gz),n.Y36(C.k))},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-set-password"]],standalone:!0,features:[n.jDz],decls:24,vars:12,consts:[[1,"main-list","form-box"],["fetchPriority","high","src","assets/images/white-logo.svg","width","130"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"login-card","password-card"],[1,"login-title","font-16","font-medium"],["lines","none"],["name","finger-print-outline"],["placeholder","Password*","formControlName","password",3,"type"],["name","eye","item-right","",1,"password-hide",3,"ngClass","click"],["class","error",4,"ngIf"],["placeholder","Confirm Password*","formControlName","confirm_password",3,"type"],[1,"center-btn"],["type","submit",1,"mb-10",3,"disabled"],[1,"footer-info","powered-by","mt-10"],[1,"error"]],template:function(i,o){1&i&&(n.TgZ(0,"ion-content")(1,"div",0),n._UZ(2,"img",1),n.TgZ(3,"form",2),n.NdJ("ngSubmit",function(){return o.resetPassword.valid&&o.onSubmit()}),n.TgZ(4,"ion-card",3)(5,"ion-card-header")(6,"ion-card-title",4),n._uU(7,"Set Password"),n.qZA()(),n.TgZ(8,"ion-card-content")(9,"ion-item",5),n._UZ(10,"ion-icon",6)(11,"ion-input",7),n.TgZ(12,"ion-icon",8),n.NdJ("click",function(){return o.isPasswordVisible=!o.isPasswordVisible}),n.qZA()(),n.YNc(13,f,2,0,"span",9),n.TgZ(14,"ion-item",5),n._UZ(15,"ion-icon",6)(16,"ion-input",10),n.TgZ(17,"ion-icon",8),n.NdJ("click",function(){return o.isConfirmPasswordShow=!o.isConfirmPasswordShow}),n.qZA()(),n.YNc(18,w,2,0,"div",9),n.qZA(),n.TgZ(19,"div",11)(20,"ion-button",12),n._uU(21,"SET PASSWORD"),n.qZA()(),n.TgZ(22,"p",13),n._uU(23,"Powered by EveryTicket"),n.qZA()()()()()),2&i&&(n.xp6(3),n.Q6J("formGroup",o.resetPassword),n.xp6(8),n.Q6J("type",o.isPasswordVisible?"password":"text"),n.xp6(1),n.Q6J("ngClass",n.VKq(8,p,o.isPasswordVisible)),n.xp6(1),n.Q6J("ngIf",o.resetPasswordControl.password.touched&&(null==o.resetPasswordControl.password.errors?null:o.resetPasswordControl.password.errors.required)),n.xp6(3),n.Q6J("type",o.isConfirmPasswordShow?"password":"text"),n.xp6(1),n.Q6J("ngClass",n.VKq(10,p,o.isConfirmPasswordShow)),n.xp6(1),n.Q6J("ngIf",(null==o.resetPassword.errors?null:o.resetPassword.errors.mismatch)&&(o.resetPassword.controls.confirm_password.dirty||o.resetPassword.controls.confirm_password.touched)),n.xp6(2),n.Q6J("disabled",o.resetPassword.invalid))},dependencies:[c.ez,c.mk,c.O5,r.Pc,r.YG,r.PM,r.FN,r.Zi,r.Dq,r.W2,r.gu,r.pK,r.Ie,r.j9,l.Bz,t.UX,t._Y,t.JJ,t.JL,t.sg,t.u],styles:['.main-list[_ngcontent-%COMP%]{justify-content:center;align-items:center;height:100vh;display:flex;flex-wrap:wrap;flex-direction:column;padding:0 15px;background:url(/assets/images/login-page.png) center center/cover no-repeat}.main-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:35px;width:180px}.login-card[_ngcontent-%COMP%]{margin-bottom:50px;box-shadow:0 2px 16px rgba(0,0,0,.5);width:100%;background:#222323;padding:30px;border:1px solid #666666;border-radius:5px}.login-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0;background:#222323;margin:25px 0;border-radius:5px}.login-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:15px;padding:0 18px;border-radius:10px;background:#292c2d}.login-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{color:#fff}.login-card[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%]{color:#fff}.login-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{color:var(--ion-color-footer-text)}.login-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-footer-text);padding:0 10px 0 0;font-size:1rem}.login-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon.password-hide[_ngcontent-%COMP%]{cursor:pointer;padding:0}.login-card[_ngcontent-%COMP%]   .center-btn[_ngcontent-%COMP%]{text-align:center;padding:0}.login-card[_ngcontent-%COMP%]   .center-btn[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%}.login-card[_ngcontent-%COMP%]   .center-btn[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){width:100%;border-radius:25px;padding:10px 0;background:var(--ion-color-primary);color:#fff;font-size:1rem;font-weight:600}.login-card[_ngcontent-%COMP%]   .footer-info[_ngcontent-%COMP%]{text-align:center}.footer[_ngcontent-%COMP%]{width:100%;text-align:center;position:absolute;bottom:0;left:0;display:flex;align-items:center;justify-content:space-between;padding:15px}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;text-align:center}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:0 5px}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:rgba(255,255,255,.4);font-size:.9rem}.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:rgba(255,255,255,.4);font-size:.9rem}.powered-by[_ngcontent-%COMP%]{font-size:.8rem}.password-hide.hidden[_ngcontent-%COMP%]{position:relative}.password-hide.hidden[_ngcontent-%COMP%]:after{content:"";height:0;width:25px;top:5px;left:-1.5px;border-top:2px solid rgba(255,255,255,.4);transform:rotate(145deg);position:absolute}.form-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{min-width:395px}']}),s})()}}]);