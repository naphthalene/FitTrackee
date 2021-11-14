(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset"],{"0395":function(t,e,n){"use strict";var r=n("1da1"),c=(n("caad"),n("96cf"),n("7a23")),o=n("6c02"),a=n("dad5"),i=n("2906"),s={id:"user-auth-form"},u={id:"user-form"},l={class:"form-items"},d=["disabled","placeholder"],f=["disabled","placeholder"],p=["disabled","placeholder"],h=["disabled","placeholder"],b=["disabled"],O={key:1},j=Object(c["createTextVNode"])(" - "),v={key:2},m={class:"account"},g=Object(c["defineComponent"])({props:{action:null,token:{default:""}},setup:function(t){var e=t,n=Object(o["c"])(),g=Object(i["a"])(),y=Object(c["toRefs"])(e),w=y.action,E=Object(c["reactive"])({username:"",email:"",password:"",password_conf:""}),k=Object(c["computed"])((function(){return R(e.action)})),S=Object(c["computed"])((function(){return g.getters[a["b"].GETTERS.ERROR_MESSAGES]})),_=Object(c["computed"])((function(){return g.getters[a["b"].GETTERS.APP_CONFIG]})),x=Object(c["computed"])((function(){return"register"===e.action&&!_.value.is_registration_enabled})),N=Object(c["ref"])(!1);function R(t){switch(t){case"reset-request":case"reset":return"buttons.SUBMIT";default:return"buttons.".concat(e.action.toUpperCase())}}function T(){N.value=!0}function V(t){switch(t){case"reset":return e.token?g.dispatch(a["a"].ACTIONS.RESET_USER_PASSWORD,{password:E.password,password_conf:E.password_conf,token:e.token}):g.commit(a["b"].MUTATIONS.SET_ERROR_MESSAGES,"user.INVALID_TOKEN");case"reset-request":return g.dispatch(a["a"].ACTIONS.SEND_PASSWORD_RESET_REQUEST,{email:E.email});default:g.dispatch(a["a"].ACTIONS.LOGIN_OR_REGISTER,{actionType:t,formData:E,redirectUrl:n.query.from})}}function C(){E.username="",E.email="",E.password="",E.password_conf=""}return Object(c["watch"])((function(){return n.path}),Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:g.commit(a["b"].MUTATIONS.EMPTY_ERROR_MESSAGES),N.value=!1,C();case 3:case"end":return t.stop()}}),t)})))),function(t,e){var n=Object(c["resolveComponent"])("AlertMessage"),r=Object(c["resolveComponent"])("router-link"),o=Object(c["resolveComponent"])("ErrorMessage");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["form-box",{disabled:Object(c["unref"])(x)}])},[Object(c["unref"])(x)?(Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:0,message:"user.REGISTER_DISABLED"})):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("form",{class:Object(c["normalizeClass"])({errors:N.value}),onSubmit:e[4]||(e[4]=Object(c["withModifiers"])((function(t){return V(Object(c["unref"])(w))}),["prevent"]))},[Object(c["createElementVNode"])("div",l,["register"===Object(c["unref"])(w)?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("input",{key:0,id:"username",disabled:Object(c["unref"])(x),required:"",onInvalid:T,"onUpdate:modelValue":e[0]||(e[0]=function(t){return Object(c["unref"])(E).username=t}),placeholder:t.$t("user.USERNAME")},null,40,d)),[[c["vModelText"],Object(c["unref"])(E).username]]):Object(c["createCommentVNode"])("",!0),"reset"!==Object(c["unref"])(w)?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("input",{key:1,id:"email",disabled:Object(c["unref"])(x),required:"",onInvalid:T,type:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return Object(c["unref"])(E).email=t}),placeholder:"reset-request"===Object(c["unref"])(w)?t.$t("user.ENTER_EMAIL"):t.$t("user.EMAIL")},null,40,f)),[[c["vModelText"],Object(c["unref"])(E).email]]):Object(c["createCommentVNode"])("",!0),"reset-request"!==Object(c["unref"])(w)?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("input",{key:2,id:"password",disabled:Object(c["unref"])(x),required:"",onInvalid:T,type:"password","onUpdate:modelValue":e[2]||(e[2]=function(t){return Object(c["unref"])(E).password=t}),placeholder:"reset"===Object(c["unref"])(w)?t.$t("user.ENTER_PASSWORD"):t.$t("user.PASSWORD")},null,40,p)),[[c["vModelText"],Object(c["unref"])(E).password]]):Object(c["createCommentVNode"])("",!0),["register","reset"].includes(Object(c["unref"])(w))?Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("input",{key:3,id:"confirm-password",disabled:Object(c["unref"])(x),type:"password",required:"",onInvalid:T,"onUpdate:modelValue":e[3]||(e[3]=function(t){return Object(c["unref"])(E).password_conf=t}),placeholder:"reset"===Object(c["unref"])(w)?t.$t("user.ENTER_PASSWORD_CONFIRMATION"):t.$t("user.PASSWORD_CONFIRM")},null,40,h)),[[c["vModelText"],Object(c["unref"])(E).password_conf]]):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("button",{type:"submit",disabled:Object(c["unref"])(x)},Object(c["toDisplayString"])(t.$t(Object(c["unref"])(k))),9,b)],34),"login"===Object(c["unref"])(w)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",O,[Object(c["createVNode"])(r,{class:"links",to:"/register"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.$t("user.REGISTER")),1)]})),_:1}),j,Object(c["createVNode"])(r,{class:"links",to:"/password-reset/request"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.$t("user.PASSWORD_FORGOTTEN")),1)]})),_:1})])):Object(c["createCommentVNode"])("",!0),"register"===Object(c["unref"])(w)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",v,[Object(c["createElementVNode"])("span",m,Object(c["toDisplayString"])(t.$t("user.ALREADY_HAVE_ACCOUNT")),1),Object(c["createVNode"])(r,{class:"links",to:"/login"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.$t("user.LOGIN")),1)]})),_:1})])):Object(c["createCommentVNode"])("",!0),Object(c["unref"])(S)?(Object(c["openBlock"])(),Object(c["createBlock"])(o,{key:3,message:Object(c["unref"])(S)},null,8,["message"])):Object(c["createCommentVNode"])("",!0)],2)])])}}}),y=(n("85bb"),n("6b0d")),w=n.n(y);const E=w()(g,[["__scopeId","data-v-742267ca"]]);e["a"]=E},"0d61":function(t,e,n){},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("d3b7");function r(t,e,n,r,c,o,a){try{var i=t[o](a),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,o){var a=t.apply(e,n);function i(t){r(a,c,o,i,s,"next",t)}function s(t){r(a,c,o,i,s,"throw",t)}i(void 0)}))}}},"1e7c":function(t,e,n){},"2ca0":function(t,e,n){"use strict";var r=n("23e7"),c=n("e330"),o=n("06cf").f,a=n("50c4"),i=n("577e"),s=n("5a34"),u=n("1d80"),l=n("ab13"),d=n("c430"),f=c("".startsWith),p=c("".slice),h=Math.min,b=l("startsWith"),O=!d&&!b&&!!function(){var t=o(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!O&&!b},{startsWith:function(t){var e=i(u(this));s(t);var n=a(h(arguments.length>1?arguments[1]:void 0,e.length)),r=i(t);return f?f(e,r,n):p(e,n,n+r.length)===r}})},"364c":function(t,e,n){"use strict";n.r(e);n("2ca0");var r=n("7a23"),c=n("6c02"),o={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 345.834 345.834",style:{"enable-background":"new 0 0 345.834 345.834"},"xml:space":"preserve"},a=Object(r["createElementVNode"])("g",null,[Object(r["createElementVNode"])("path",{d:"M339.798,260.429c0.13-0.026,0.257-0.061,0.385-0.094c0.109-0.028,0.219-0.051,0.326-0.084\n\t\tc0.125-0.038,0.247-0.085,0.369-0.129c0.108-0.039,0.217-0.074,0.324-0.119c0.115-0.048,0.226-0.104,0.338-0.157\n\t\tc0.109-0.052,0.22-0.1,0.327-0.158c0.107-0.057,0.208-0.122,0.312-0.184c0.107-0.064,0.215-0.124,0.319-0.194\n\t\tc0.111-0.074,0.214-0.156,0.321-0.236c0.09-0.067,0.182-0.13,0.27-0.202c0.162-0.133,0.316-0.275,0.466-0.421\n\t\tc0.027-0.026,0.056-0.048,0.083-0.075c0.028-0.028,0.052-0.059,0.079-0.088c0.144-0.148,0.284-0.3,0.416-0.46\n\t\tc0.077-0.094,0.144-0.192,0.216-0.289c0.074-0.1,0.152-0.197,0.221-0.301c0.074-0.111,0.139-0.226,0.207-0.34\n\t\tc0.057-0.096,0.118-0.19,0.171-0.289c0.062-0.115,0.114-0.234,0.169-0.351c0.049-0.104,0.101-0.207,0.146-0.314\n\t\tc0.048-0.115,0.086-0.232,0.128-0.349c0.041-0.114,0.085-0.227,0.12-0.343c0.036-0.118,0.062-0.238,0.092-0.358\n\t\tc0.029-0.118,0.063-0.234,0.086-0.353c0.028-0.141,0.045-0.283,0.065-0.425c0.014-0.1,0.033-0.199,0.043-0.3\n\t\tc0.025-0.249,0.038-0.498,0.038-0.748V92.76c0-4.143-3.357-7.5-7.5-7.5h-236.25c-0.066,0-0.13,0.008-0.196,0.01\n\t\tc-0.143,0.004-0.285,0.01-0.427,0.022c-0.113,0.009-0.225,0.022-0.337,0.037c-0.128,0.016-0.255,0.035-0.382,0.058\n\t\tc-0.119,0.021-0.237,0.046-0.354,0.073c-0.119,0.028-0.238,0.058-0.356,0.092c-0.117,0.033-0.232,0.069-0.346,0.107\n\t\tc-0.117,0.04-0.234,0.082-0.349,0.128c-0.109,0.043-0.216,0.087-0.322,0.135c-0.118,0.053-0.235,0.11-0.351,0.169\n\t\tc-0.099,0.051-0.196,0.103-0.292,0.158c-0.116,0.066-0.23,0.136-0.343,0.208c-0.093,0.06-0.184,0.122-0.274,0.185\n\t\tc-0.106,0.075-0.211,0.153-0.314,0.235c-0.094,0.075-0.186,0.152-0.277,0.231c-0.09,0.079-0.179,0.158-0.266,0.242\n\t\tc-0.099,0.095-0.194,0.194-0.288,0.294c-0.047,0.05-0.097,0.094-0.142,0.145c-0.027,0.03-0.048,0.063-0.074,0.093\n\t\tc-0.094,0.109-0.182,0.223-0.27,0.338c-0.064,0.084-0.13,0.168-0.19,0.254c-0.078,0.112-0.15,0.227-0.222,0.343\n\t\tc-0.059,0.095-0.12,0.189-0.174,0.286c-0.063,0.112-0.118,0.227-0.175,0.342c-0.052,0.105-0.106,0.21-0.153,0.317\n\t\tc-0.049,0.113-0.092,0.23-0.135,0.345c-0.043,0.113-0.087,0.225-0.124,0.339c-0.037,0.115-0.067,0.232-0.099,0.349\n\t\tc-0.032,0.12-0.066,0.239-0.093,0.36c-0.025,0.113-0.042,0.228-0.062,0.342c-0.022,0.13-0.044,0.26-0.06,0.39\n\t\tc-0.013,0.108-0.019,0.218-0.027,0.328c-0.01,0.14-0.019,0.28-0.021,0.421c-0.001,0.041-0.006,0.081-0.006,0.122v46.252\n\t\tc0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-29.595l66.681,59.037c-0.348,0.245-0.683,0.516-0.995,0.827l-65.687,65.687v-49.288\n\t\tc0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v9.164h-38.75c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h38.75v43.231\n\t\tc0,4.143,3.357,7.5,7.5,7.5h236.25c0.247,0,0.494-0.013,0.74-0.037c0.115-0.011,0.226-0.033,0.339-0.049\n\t\tC339.542,260.469,339.67,260.454,339.798,260.429z M330.834,234.967l-65.688-65.687c-0.042-0.042-0.087-0.077-0.13-0.117\n\t\tl49.383-41.897c3.158-2.68,3.546-7.412,0.866-10.571c-2.678-3.157-7.41-3.547-10.571-0.866l-84.381,71.59l-98.444-87.158h208.965\n\t\tV234.967z M185.878,179.888c0.535-0.535,0.969-1.131,1.308-1.765l28.051,24.835c1.418,1.255,3.194,1.885,4.972,1.885\n\t\tc1.726,0,3.451-0.593,4.853-1.781l28.587-24.254c0.26,0.38,0.553,0.743,0.89,1.08l65.687,65.687H120.191L185.878,179.888z"}),Object(r["createElementVNode"])("path",{d:"M7.5,170.676h126.667c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.357-7.5,7.5\n\t\tS3.357,170.676,7.5,170.676z"}),Object(r["createElementVNode"])("path",{d:"M20.625,129.345H77.5c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H20.625c-4.143,0-7.5,3.357-7.5,7.5\n\t\tS16.482,129.345,20.625,129.345z"}),Object(r["createElementVNode"])("path",{d:"M62.5,226.51h-55c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h55c4.143,0,7.5-3.357,7.5-7.5S66.643,226.51,62.5,226.51z"})],-1),i=[a];function s(t,e,n,c,a,s){return Object(r["openBlock"])(),Object(r["createElementBlock"])("svg",o,i)}var u={name:"EmailSent"},l=n("6b0d"),d=n.n(l);const f=d()(u,[["render",s]]);var p=f,h={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",style:{"enable-background":"new 0 0 512.001 512.001"},"xml:space":"preserve"},b=Object(r["createStaticVNode"])('<g><g><path d="M468.683,287.265h-69.07c-4.147,0-7.508,3.361-7.508,7.508c0,4.147,3.361,7.508,7.508,7.508h69.07\n\t\t\tc4.147,0,7.508-3.361,7.508-7.508C476.191,290.626,472.83,287.265,468.683,287.265z"></path></g></g><g><g><path d="M105.012,268.377L85.781,256l19.231-12.376c3.487-2.243,4.495-6.888,2.251-10.376c-2.244-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.471,11.243v-20.776c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.775l-17.47-11.243\n\t\t\tc-3.486-2.245-8.132-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L58.034,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.47-11.243v20.775\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.471,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.885-1.216,6.32-3.446C109.507,275.266,108.499,270.62,105.012,268.377z"></path></g></g><g><g><path d="M194.441,268.377L175.21,256l19.231-12.376c3.487-2.244,4.495-6.889,2.25-10.376c-2.245-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.47,11.243v-20.775c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.776l-17.471-11.243\n\t\t\tc-3.487-2.245-8.133-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L147.463,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.471-11.243v20.776\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.47,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.885-1.216,6.32-3.446C198.936,275.266,197.928,270.62,194.441,268.377z"></path></g></g><g><g><path d="M283.871,268.377L264.64,256l19.231-12.376c3.487-2.243,4.495-6.888,2.251-10.376c-2.245-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.471,11.243v-20.775c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.775l-17.471-11.243\n\t\t\tc-3.486-2.245-8.134-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L236.892,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.471-11.243v20.775\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.471,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.886-1.216,6.32-3.446C288.366,275.266,287.358,270.62,283.871,268.377z"></path></g></g><g><g><path d="M373.3,268.377L354.069,256l19.231-12.376c3.487-2.244,4.495-6.889,2.25-10.376c-2.244-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.471,11.243v-20.776c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.775l-17.47-11.243\n\t\t\tc-3.486-2.245-8.132-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L326.322,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.47-11.243v20.776\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.471,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.885-1.216,6.32-3.446C377.795,275.266,376.787,270.62,373.3,268.377z"></path></g></g><g><g><path d="M271.792,330.359H15.016V181.642h93.1c4.147,0,7.508-3.361,7.508-7.508c0-4.147-3.361-7.508-7.508-7.508H12.513\n\t\t\tC5.613,166.626,0,172.24,0,179.14v153.722c0,6.9,5.613,12.513,12.513,12.513h259.278c4.147,0,7.508-3.361,7.508-7.508\n\t\t\tC279.299,333.72,275.939,330.359,271.792,330.359z"></path></g></g><g><g><path d="M499.487,166.626H162.174c-4.147,0-7.508,3.361-7.508,7.508c0,4.147,3.361,7.508,7.508,7.508h334.811v148.716H323.848\n\t\t\tc-4.147,0-7.508,3.361-7.508,7.508c0,4.147,3.361,7.508,7.508,7.508h175.64c6.9,0,12.513-5.613,12.513-12.513V179.14\n\t\t\tC512.001,172.24,506.387,166.626,499.487,166.626z"></path></g></g>',7),O=[b];function j(t,e,n,c,o,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("svg",h,O)}var v={name:"Password"};const m=d()(v,[["render",j]]);var g=m,y={id:"password-action-done",class:"center-card center-card with-margin"},w={class:"password-message"},E={key:0},k=Object(r["defineComponent"])({props:{action:null},setup:function(t){var e=t,n=Object(r["toRefs"])(e),c=n.action;return function(t,e){var n=Object(r["resolveComponent"])("router-link"),o=Object(r["resolveComponent"])("i18n-t");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",y,["request-sent"===Object(r["unref"])(c)?(Object(r["openBlock"])(),Object(r["createBlock"])(p,{key:0})):(Object(r["openBlock"])(),Object(r["createBlock"])(g,{key:1})),Object(r["createElementVNode"])("div",w,["request-sent"===Object(r["unref"])(c)?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",E,Object(r["toDisplayString"])(t.$t("user.PASSWORD_SENT_EMAIL_TEXT")),1)):(Object(r["openBlock"])(),Object(r["createBlock"])(o,{key:1,keypath:"user.PASSWORD_UPDATED"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,{to:"/login"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.$t("common.HERE")),1)]})),_:1})]})),_:1}))])])}}});n("75b5");const S=d()(k,[["__scopeId","data-v-2a8f70b8"]]);var _=S,x=n("0395"),N={id:"password-reset-request",class:"center-card with-margin"},R=Object(r["defineComponent"])({props:{action:null,token:{default:""}},setup:function(t){var e=t,n=Object(r["toRefs"])(e),c=n.action,o=n.token;return function(t,e){var n=Object(r["resolveComponent"])("Card");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",N,[Object(r["createVNode"])(n,null,{title:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.$t("user.RESET_PASSWORD")),1)]})),content:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x["a"],{action:Object(r["unref"])(c),token:Object(r["unref"])(o)},null,8,["action","token"])]})),_:1})])}}});n("c0a9");const T=d()(R,[["__scopeId","data-v-74fb0b23"]]);var V=T,C={id:"password-reset",class:"view"},L={class:"container"},B=Object(r["defineComponent"])({props:{action:null},setup:function(t){var e=t,n=Object(c["c"])(),o=Object(c["d"])(),a=Object(r["toRefs"])(e),i=a.action,s=Object(r["computed"])((function(){return n.query.token}));return Object(r["onBeforeMount"])((function(){"reset"!==e.action||s.value||o.push("/")})),function(t,e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",C,[Object(r["createElementVNode"])("div",L,[Object(r["unref"])(i).startsWith("reset")?(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:0,action:Object(r["unref"])(i),token:Object(r["unref"])(s)},null,8,["action","token"])):(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:1,action:Object(r["unref"])(i)},null,8,["action"]))])])}}});n("c162");const M=d()(B,[["__scopeId","data-v-4773f635"]]);e["default"]=M},"75b5":function(t,e,n){"use strict";n("adfc")},"765c":function(t,e,n){},"85bb":function(t,e,n){"use strict";n("1e7c")},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,c="function"===typeof Symbol?Symbol:{},o=c.iterator||"@@iterator",a=c.asyncIterator||"@@asyncIterator",i=c.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(C){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var c=e&&e.prototype instanceof O?e:O,o=Object.create(c.prototype),a=new R(r||[]);return o._invoke=S(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",b={};function O(){}function j(){}function v(){}var m={};s(m,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==n&&r.call(y,o)&&(m=y);var w=v.prototype=O.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(c,o,a,i){var s=l(t[c],t,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,i)}))}i(s.arg)}var c;function o(t,r){function o(){return new e((function(e,c){n(t,r,e,c)}))}return c=c?c.then(o,o):o()}this._invoke=o}function S(t,e,n){var r=d;return function(c,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===c)throw o;return V()}n.method=c,n.arg=o;while(1){var a=n.delegate;if(a){var i=_(a,n);if(i){if(i===b)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return b;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var c=l(r,t.iterator,n.arg);if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,b;var o=c.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var c=-1,a=function n(){while(++c<t.length)if(r.call(t,c))return n.value=t[c],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:V}}function V(){return{value:e,done:!0}}return j.prototype=v,s(w,"constructor",v),s(v,"constructor",j),j.displayName=s(v,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(k.prototype),s(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,c,o){void 0===o&&(o=Promise);var a=new k(u(e,n,r,c),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),s(w,i,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function c(r,c){return i.type="throw",i.arg=t,n.next=r,c&&(n.method="next",n.arg=e),!!c}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return c("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return c(a.catchLoc,!0);if(this.prev<a.finallyLoc)return c(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return c(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return c(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n];if(c.tryLoc<=this.prev&&r.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var o=c;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var c=r.arg;N(n)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=r}catch(c){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},adfc:function(t,e,n){},c0a9:function(t,e,n){"use strict";n("765c")},c162:function(t,e,n){"use strict";n("0d61")}}]);
//# sourceMappingURL=reset.518e646f.js.map