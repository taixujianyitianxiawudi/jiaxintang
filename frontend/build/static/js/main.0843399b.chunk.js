(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var s,n,r,c,i,l,o,d=a(39),m=a.n(d),j=(a(85),a(120)),u=a(16),b=a(50),x=a(106),h=a(108),g=a(27),p=new h.a({typePolicies:{Query:{fields:{isLoggedIn:{read:function(){return O()}},UserOrRoom:{read:function(){return f()}}}}}}),O=Object(g.c)(!!localStorage.getItem("token")),f=Object(g.c)("true"===localStorage.getItem("place")),v=a(6),y=a(29),w=a(121),N=a(10),I=a(123),k=a(0),R=a(14),S=a(12),C=a(1),P=function(){return Object(C.jsx)("div",{children:"Loading, please wait"})},$=Object(y.a)(s||(s=Object(v.a)(["\n  mutation SignUp($name: String $email: String! $password: String!) {\n    signup(name: $name email: $email password:$password) {\n      user {\n        id\n        email\n        name\n      }\n      token\n    }\n  }\n"]))),q=function(){var e=Object(I.a)($,{onCompleted:function(e){var t=e.signup;t&&t.user&&(localStorage.setItem("token",t.token),localStorage.setItem("userId",t.user.id),O(!0))}}),t=Object(N.a)(e,2),a=t[0],s=t[1],n=s.loading,r=s.error,c=Object(k.useState)(""),i=Object(N.a)(c,2),l=i[0],o=i[1],d=Object(k.useState)(""),m=Object(N.a)(d,2),j=m[0],u=m[1],b=Object(k.useState)(""),x=Object(N.a)(b,2),h=x[0],g=x[1];return n?Object(C.jsx)(P,{}):r?Object(C.jsx)("div",{children:"asdfsadf"}):Object(C.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:Object(C.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("img",{className:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),Object(C.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})]}),Object(C.jsxs)("form",{className:"mt-8 space-y-6",action:"#",method:"POST",children:[Object(C.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(C.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{htmlFor:"name",className:"sr-only",children:"Your name"}),Object(C.jsx)("input",{id:"name",name:"name",type:"name",autoComplete:"name",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"name",onChange:function(e){return o(e.target.value)}})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),Object(C.jsx)("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address",onChange:function(e){return u(e.target.value)}})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(C.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:function(e){return g(e.target.value)}})]})]}),Object(C.jsxs)("div",{className:"flex items-center justify-between",children:[Object(C.jsxs)("div",{className:"flex items-center",children:[Object(C.jsx)("input",{id:"remember_me",name:"remember_me",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),Object(C.jsx)("label",{htmlFor:"remember_me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),Object(C.jsx)("div",{className:"text-sm",children:Object(C.jsx)(R.b,{to:"/",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Click here to login"})})]}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){return a({variables:{name:l,email:j,password:h}}).catch((function(e){return"fuck"}))},children:"Sign in"})})]})]})})},U=Object(y.a)(n||(n=Object(v.a)(["\n  mutation Login($email: String! $password: String!) {\n    login(email: $email password:$password) {\n      user {\n        id\n      }\n      token\n    }\n  }\n"]))),D=function(){var e=Object(I.a)(U,{onCompleted:function(e){var t=e.login;t&&t.user&&(localStorage.setItem("token",t.token),localStorage.setItem("userId",t.user.id),O(!0))}}),t=Object(N.a)(e,2),a=t[0],s=t[1],n=s.loading,r=s.error,c=Object(k.useState)(""),i=Object(N.a)(c,2),l=i[0],o=i[1],d=Object(k.useState)(""),m=Object(N.a)(d,2),j=m[0],u=m[1];return n?Object(C.jsx)(P,{}):r?Object(C.jsx)("div",{children:"asdfsadf"}):Object(C.jsx)(R.a,{children:Object(C.jsxs)(S.c,{children:[Object(C.jsx)(S.a,{path:"/signup",children:Object(C.jsx)(q,{})}),Object(C.jsx)(S.a,{exact:!0,path:"/",children:Object(C.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:Object(C.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("img",{className:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),Object(C.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})]}),Object(C.jsxs)("form",{className:"mt-8 space-y-6",action:"#",method:"POST",children:[Object(C.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),Object(C.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),Object(C.jsx)("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address",onChange:function(e){return o(e.target.value)}})]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),Object(C.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password",onChange:function(e){return u(e.target.value)}})]})]}),Object(C.jsxs)("div",{className:"flex items-center justify-between",children:[Object(C.jsxs)("div",{className:"flex items-center",children:[Object(C.jsx)("input",{id:"remember_me",name:"remember_me",type:"checkbox",className:"h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"}),Object(C.jsx)("label",{htmlFor:"remember_me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),Object(C.jsx)("div",{className:"text-sm",children:Object(C.jsx)(R.b,{to:"/signup",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Click here to signup"})})]}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:function(){return a({variables:{email:l,password:j}}).catch((function(e){return"fuck"}))},children:"Sign in"})})]})]})})})]})})},E=a(119),F=function(){var e=Object(E.a)();return Object(C.jsx)("button",{className:"block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-pink-400",onClick:function(){e.cache.evict({fieldName:"me"}),e.cache.gc(),localStorage.removeItem("token"),localStorage.removeItem("userId"),O(!1),window.location.href="/"},children:"log out!"})},B=function(){return Object(C.jsxs)("div",{className:"grid gap-4 grid-cols-3",children:[Object(C.jsx)("div",{children:"1"}),Object(C.jsx)("div",{children:"2"}),Object(C.jsx)("div",{children:"3"}),Object(C.jsx)("div",{children:"4"}),Object(C.jsx)("div",{children:"5 "}),Object(C.jsx)("div",{children:"6 "}),Object(C.jsx)("div",{children:"7 "}),Object(C.jsx)("div",{children:"8 "}),Object(C.jsx)("div",{children:"9 "}),Object(C.jsx)("div",{children:"9 "})]})},L=function(){return Object(C.jsx)("div",{children:"Something went wrong!"})},_=Object(y.a)(r||(r=Object(v.a)(["\n  query MyProfile {\n    me {\n      id\n      name\n      email\n    }\n  }\n"]))),A=function(){var e=Object(w.a)(_),t=e.data,a=e.loading,s=e.error;return a?Object(C.jsx)(P,{}):s||void 0===t?Object(C.jsx)(L,{}):t.me?Object(C.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[Object(C.jsxs)("div",{className:"px-4 py-5 sm:px-6",children:[Object(C.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Profiles"}),Object(C.jsx)("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:"Personal details and application."})]}),Object(C.jsx)("div",{className:"border-t border-gray-200",children:Object(C.jsxs)("dl",{children:[Object(C.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(C.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Id"}),Object(C.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:t.me.id})]}),Object(C.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(C.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Full name"}),Object(C.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:t.me.name})]}),Object(C.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(C.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Email address"}),Object(C.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:t.me.email})]}),Object(C.jsxs)("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(C.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Salary expectation"}),Object(C.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"$120,000"})]}),Object(C.jsxs)("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(C.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"About"}),Object(C.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."})]}),Object(C.jsxs)("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[Object(C.jsx)("dt",{className:"text-sm font-medium text-gray-500",children:"Attachments"}),Object(C.jsx)("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:Object(C.jsxs)("ul",{className:"border border-gray-200 rounded-md divide-y divide-gray-200",children:[Object(C.jsxs)("li",{className:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",children:[Object(C.jsx)("div",{className:"w-0 flex-1 flex items-center",children:Object(C.jsx)("span",{className:"ml-2 flex-1 w-0 truncate",children:"resume_back_end_developer.pdf"})}),Object(C.jsx)("div",{className:"ml-4 flex-shrink-0",children:Object(C.jsx)("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Download"})})]}),Object(C.jsxs)("li",{className:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",children:[Object(C.jsx)("div",{className:"w-0 flex-1 flex items-center",children:Object(C.jsx)("span",{className:"ml-2 flex-1 w-0 truncate",children:"coverletter_back_end_developer.pdf"})}),Object(C.jsx)("div",{className:"ml-4 flex-shrink-0",children:Object(C.jsx)("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Download"})})]})]})})]})]})})]}):Object(C.jsx)(L,{})},H=Object(y.a)(c||(c=Object(v.a)(["\nmutation CreateChatPrivateMutation($createChatPrivateData: CreateChatInputPrivate!) {\n  createChatPrivate(data: $createChatPrivateData) {\n    id\n    content\n  }\n}\n"]))),z=Object(y.a)(i||(i=Object(v.a)(["\nmutation JoinRoomb($incrementRoomUserId: Int!) {\n  incrementRoomUser(id: $incrementRoomUserId) {\n    id\n    name\n  }\n}\n"]))),T=Object(y.a)(l||(l=Object(v.a)(["\nmutation LeftRoomb($decrementRoomUserId: Int!) {\n  decrementRoomUser(id: $decrementRoomUserId) {\n    id\n    name\n  }\n}\n"]))),M=function(e){var t=e.roomId,a=e.userId,s=Object(k.useState)(""),n=Object(N.a)(s,2),r=n[0],c=n[1],i=Object(k.useRef)(null),l=Object(I.a)(H),o=Object(N.a)(l,1)[0],d=Object(I.a)(T),m=Object(N.a)(d,1)[0],j=Object(I.a)(z),u=Object(N.a)(j,1)[0],b=parseInt(localStorage.getItem("roomId"));return null===localStorage.getItem("roomId")?(u({variables:{incrementRoomUserId:t}}),localStorage.setItem("roomId",t),o({variables:{createChatPrivateData:{roomId:t,content:"enter the room"}}})):b!==t&&(u({variables:{incrementRoomUserId:t}}).catch(),m({variables:{decrementRoomUserId:b}}).catch(),999999===a&&o({variables:{createChatPrivateData:{roomId:t,content:"enter the room"}}}),localStorage.setItem("roomId",t)),999999===a&&(a=void 0),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{}),Object(C.jsx)("input",{className:"input-primary",placeholder:"type your message",onChange:function(e){return c(e.target.value)},onKeyDown:function(e){"Enter"!==e.key||e.shiftKey||null!==i.current&&(e.preventDefault(),o({variables:{createChatPrivateData:{roomId:t,content:r,touserId:a}}}).catch((function(e){return"fuck"})),i.current.value="",c(""))},ref:i}),Object(C.jsx)("button",{className:"button-primary",onClick:function(e){null!==i.current&&(e.preventDefault(),o({variables:{createChatPrivateData:{roomId:t,content:r,touserId:a}}}).catch(),i.current.value="",c(""))},children:"Enter"})]})},J=function(e){var t=e.id,a=e.name,s=(e.createdAt,e.image,e.content),n="max-w-xs  bg-white max-h-12 rounded-xl shadow-md flex items-center text-blue-400",r="/img/1.jpg";return t==localStorage.getItem("userId")&&(n="max-w-xs max-h-12 bg-white rounded-xl shadow-md flex items-center text-pink-400",r="/img/3.jpg"),Object(C.jsxs)("div",{className:n,children:[Object(C.jsx)("div",{className:"flex-shrink-0",children:Object(C.jsx)("img",{className:"h-8 w-8",src:r,alt:"Profile"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"font-medium text-black",children:a}),Object(C.jsx)("p",{children:s})]})]})},Q=Object(y.a)(o||(o=Object(v.a)(["\nquery chatPrivate($chatPrivateId: Int, $chatPrivateUserid: Int) {\n  chatPrivate(id: $chatPrivateId, userid: $chatPrivateUserid) {\n    id\n    createdAt\n    content\n    author {\n      name\n      id\n    }\n    touser {\n      id\n      name\n    }\n  }\n}\n"])));function W(e){if(null===e)return!0;var t=e.scrollTop,a=e.clientHeight;return e.scrollHeight-(t+a)<200}var G,K=function(e){e.roomId;var t=e.userId,a=parseInt(localStorage.getItem("userId"),10),s=Object(w.a)(Q,{variables:{chatPrivateId:a,chatPrivateUserid:t},pollInterval:500}),n=s.data,r=s.loading,c=s.error,i=Object(k.useRef)(null),l=Object(k.useState)(!0),o=Object(N.a)(l,2),d=(o[0],o[1]),m=function(){d(W(i.current))};return Object(k.useEffect)((function(){W(i.current)&&i.current&&(i.current.scrollTop=i.current.scrollHeight-i.current.clientHeight),m()})),r?Object(C.jsx)(P,{}):c||void 0===n?Object(C.jsx)(L,{}):n?Object(C.jsx)("div",{className:"overflow-auto max-h-full",ref:i,onScroll:function(){m()},children:n&&n.chatPrivate.map((function(e){var t,a;return Object(C.jsx)(J,{id:null===(t=e.author)||void 0===t?void 0:t.id,name:null===(a=e.author)||void 0===a?void 0:a.name,createdAt:e.createdAt,content:e.content},e.id)}))}):Object(C.jsx)(L,{})},V=Object(y.a)(G||(G=Object(v.a)(["\n  query ChatByRoomId($chatByRoomIdId: Int) {\n    chatByRoomId(id: $chatByRoomIdId) {\n      id\n      createdAt\n      content\n      author {\n        name\n        id\n      }\n      room {\n        id\n      }\n    }\n  }\n"])));function Y(e){if(null===e)return!0;var t=e.scrollTop,a=e.clientHeight;return e.scrollHeight-(t+a)<200}var X,Z,ee,te,ae,se,ne=function(e){var t=e.roomId,a=Object(w.a)(V,{variables:{chatByRoomIdId:t},pollInterval:500}),s=a.data,n=a.loading,r=a.error,c=Object(k.useRef)(null),i=Object(k.useState)(!0),l=Object(N.a)(i,2),o=(l[0],l[1]),d=function(){o(Y(c.current))};return Object(k.useEffect)((function(){Y(c.current)&&c.current&&(c.current.scrollTop=c.current.scrollHeight-c.current.clientHeight),d()})),n?Object(C.jsx)(P,{}):r||void 0===s?Object(C.jsx)(L,{}):s?Object(C.jsxs)("div",{className:"overflow-auto max-h-full",ref:c,onScroll:function(){d()},children:["ChatHistory here ID:",t,s&&s.chatByRoomId.map((function(e){var t,a;return Object(C.jsx)(J,{id:null===(t=e.author)||void 0===t?void 0:t.id,name:null===(a=e.author)||void 0===a?void 0:a.name,createdAt:e.createdAt,content:e.content},e.id)}))]}):Object(C.jsx)(L,{})},re=function(e){var t=e.roomId,a=e.userId;return 999999===a?Object(C.jsx)(ne,{roomId:t}):Object(C.jsx)(K,{roomId:t,userId:a})},ce=function(e){e._userId;var t=Object(S.f)(),a=t.roomId,s=t.userId;return Object(C.jsxs)("div",{className:"grid grid-rows-6 max-h-screen space-y-0",children:[Object(C.jsx)("div",{className:"row-start-1 row-end-5",children:Object(C.jsx)(re,{roomId:parseInt(a,10),userId:parseInt(s,10)})}),Object(C.jsx)("div",{className:"row-start-5 pb-8",children:Object(C.jsx)(M,{roomId:parseInt(a,10),userId:parseInt(s,10)})})]})},ie=Object(y.a)(X||(X=Object(v.a)(["\n  mutation DeleteRoom($deleteRoomId: Int!) {\n    deleteRoom(id: $deleteRoomId) {\n      id\n    }\n  }\n"]))),le=function(e){var t=e.roomId,a=Object(I.a)(ie),s=Object(N.a)(a,1)[0];return Object(C.jsxs)("button",{onClick:function(){s({variables:{deleteRoomId:t}}).then((function(){window.location.href="/chat",localStorage.removeItem("roomId")}))},children:["Delete room ",t]})},oe=Object(y.a)(Z||(Z=Object(v.a)(["\n  query RoomList {\n    allRooms {\n      currentNumberofUsers\n      name\n      details\n      owner {\n        name\n      }\n      createdAt\n      id\n    }\n  }\n"]))),de=function(){var e=Object(w.a)(oe,{pollInterval:1e3}),t=e.data,a=e.error;return e.loading?Object(C.jsx)(P,{}):a||void 0===t?Object(C.jsx)(L,{}):t?Object(C.jsx)("div",{className:"overflow-auto max-h-screen",children:t.allRooms.map((function(e,t){var a;return Object(C.jsx)(R.b,{className:"max-w-sm",to:"/chat/public/"+e.id+"/999999",children:Object(C.jsxs)("div",{className:"py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6",children:[Object(C.jsx)("img",{className:"block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0",src:"/img/4.jpg",alt:"Profile"}),Object(C.jsxs)("div",{className:"text-center space-y-2 sm:text-left",children:[Object(C.jsxs)("div",{className:"space-y-0.5",children:[Object(C.jsxs)("p",{className:"text-lg text-black font-semibold",children:["room name:",e.name," owner: ",null===(a=e.owner)||void 0===a?void 0:a.name]}),Object(C.jsx)("p",{className:"text-gray-500 font-medium",children:e.details}),Object(C.jsxs)("p",{className:"text-gray-500 font-medium",children:[e.currentNumberofUsers," users inside"]})]}),Object(C.jsx)(le,{roomId:e.id},e.id)]})]},t)})}))}):Object(C.jsx)(L,{})},me=Object(y.a)(ee||(ee=Object(v.a)(["\n  query UserPrivateRoom($userPrivateRoomId: Int) {\n  userPrivateRoom(id: $userPrivateRoomId) {\n    id\n  }\n}\n"]))),je=function(e){var t=e.userId,a=Object(w.a)(me,{variables:{userPrivateRoomId:t}}).data;return a&&a.userPrivateRoom?Object(C.jsx)(R.b,{to:"/chat/private/"+a.userPrivateRoom.id+"/"+t,children:Object(C.jsx)("div",{className:"px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",children:"Message"})}):Object(C.jsx)(L,{})},ue=Object(y.a)(te||(te=Object(v.a)(["\n  query UserList {\n    allUsers {\n      id\n      name\n      isOnline\n    }\n  }\n"]))),be=function(){var e=Object(w.a)(ue),t=e.data,a=e.loading,s=e.error;return a?Object(C.jsx)(P,{}):s||void 0===t?Object(C.jsx)(L,{}):t?Object(C.jsx)("div",{className:"overflow-auto max-h-screen",children:t.allUsers.map((function(e,t){return Object(C.jsxs)("div",{className:"py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6",children:[Object(C.jsx)("img",{className:"block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0",src:"/img/2.jpg",alt:"Profile"}),Object(C.jsxs)("div",{className:"text-center space-y-2 sm:text-left",children:[Object(C.jsxs)("div",{className:"space-y-0.5",children:[Object(C.jsx)("p",{className:"text-lg text-black font-semibold",children:e.name}),Object(C.jsx)("p",{className:"text-gray-500 font-medium",children:e.isOnline?Object(C.jsx)("p",{children:"online!"}):Object(C.jsx)("p",{children:"offline"})})]}),Object(C.jsx)(je,{userId:e.id},e.id)]})]},t)}))}):Object(C.jsx)(L,{})},xe=Object(y.a)(ae||(ae=Object(v.a)(["\n  mutation CreateRoom($createRoomData: RoomCreateInput!) {\n    createRoom(data: $createRoomData) {\n      id\n    }\n  }\n"]))),he=function(){var e=Object(I.a)(xe),t=Object(N.a)(e,1)[0],a=Object(k.useState)(""),s=Object(N.a)(a,2),n=s[0],r=s[1],c=Object(k.useState)(""),i=Object(N.a)(c,2),l=i[0],o=i[1],d=Object(k.useRef)(null),m=Object(k.useRef)(null);return Object(C.jsxs)("div",{className:"flex flex-col",children:[Object(C.jsx)("p",{children:"Enter Room informations"}),Object(C.jsx)("input",{className:"py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-pink-100 focus:text-gray-900",placeholder:"name",type:"text",onChange:function(e){return r(e.target.value)},ref:d}),Object(C.jsx)("input",{className:"py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-pink-100 focus:text-gray-900",placeholder:"details",type:"text",onChange:function(e){return o(e.target.value)},ref:m}),Object(C.jsx)("button",{className:"button-primary",onClick:function(){null!==d.current&&(t({variables:{createRoomData:{name:n,details:l,public:!0}}}).catch(),d.current.value="",null!==m.current&&(m.current.value=""))},children:"CreateRoom"})]})},ge=Object(y.a)(se||(se=Object(v.a)(["\n  query UserOrRoom {\n    UserOrRoom @client\n  }\n"]))),pe=function(){var e=Object(w.a)(ge).data;return Object(C.jsx)(R.a,{children:Object(C.jsxs)("div",{className:"grid grid-rows-5 grid-flow-col gap-4",children:[Object(C.jsxs)("div",{className:"row-span-5",children:["create new room here~",Object(C.jsx)(he,{})]}),Object(C.jsx)("div",{className:"row-span-5 col-span-5",children:Object(C.jsxs)(S.c,{children:[Object(C.jsx)(S.a,{path:"/chat/public/:roomId/:userId",exact:!0,children:Object(C.jsx)(ce,{})}),Object(C.jsx)(S.a,{path:"/chat/private/:roomId/:userId",exact:!0,children:Object(C.jsx)(ce,{})})]})}),Object(C.jsxs)("div",{className:"col-span-1 row-span-5",children:[Object(C.jsx)("button",{className:"button-primary",onClick:function(e){f(!1),localStorage.setItem("place","false")},children:"click me to room list!"}),Object(C.jsx)("button",{className:"button-primary",onClick:function(e){f(!0),localStorage.setItem("place","true")},children:"click me to user list!"}),Object(C.jsx)("div",{className:"overflow-auto max-h-full max-w-sm",children:e.UserOrRoom?Object(C.jsx)(be,{}):Object(C.jsx)(de,{})})]})]})})},Oe=a(31),fe=a(57),ve=[{name:"Product",href:"#"},{name:"Features",href:"#"},{name:"Marketplace",href:"#"},{name:"Company",href:"#"}];function ye(){return Object(C.jsxs)("div",{className:"relative bg-white overflow-hidden",children:[Object(C.jsx)("div",{className:"max-w-7xl mx-auto",children:Object(C.jsxs)("div",{className:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[Object(C.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:Object(C.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),Object(C.jsx)(Oe.a,{children:function(e){var t=e.open;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:Object(C.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[Object(C.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:Object(C.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[Object(C.jsxs)("a",{href:"#",children:[Object(C.jsx)("span",{className:"sr-only",children:"Workflow"}),Object(C.jsx)("img",{className:"h-8 w-auto sm:h-10",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"})]}),Object(C.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:Object(C.jsxs)(Oe.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(C.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(C.jsx)(fe.a,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),Object(C.jsxs)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:[ve.map((function(e){return Object(C.jsx)("a",{href:e.href,className:"font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)})),Object(C.jsx)("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Log in"})]})]})}),Object(C.jsx)(Oe.b,{show:t,as:k.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(C.jsx)(Oe.a.Panel,{focus:!0,static:!0,className:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:Object(C.jsxs)("div",{className:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",children:[Object(C.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:""})}),Object(C.jsx)("div",{className:"-mr-2",children:Object(C.jsxs)(Oe.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(C.jsx)("span",{className:"sr-only",children:"Close main menu"}),Object(C.jsx)(fe.b,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),Object(C.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:ve.map((function(e){return Object(C.jsx)("a",{href:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:e.name},e.name)}))}),Object(C.jsx)("a",{href:"#",className:"block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100",children:"Log in"})]})})})]})}}),Object(C.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:Object(C.jsxs)("div",{className:"sm:text-center lg:text-left",children:[Object(C.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[Object(C.jsx)("span",{className:"block xl:inline",children:"Data to enrich your"})," ",Object(C.jsx)("span",{className:"block text-indigo-600 xl:inline",children:"online business"})]}),Object(C.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}),Object(C.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:[Object(C.jsx)("div",{className:"rounded-md shadow",children:Object(C.jsx)("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",children:"Get started"})}),Object(C.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:Object(C.jsx)("a",{href:"#",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10",children:"Live demo"})})]})]})})]})}),Object(C.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:Object(C.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",alt:""})})]})}var we,Ne,Ie=function(){return Object(C.jsx)(R.a,{children:Object(C.jsxs)("div",{className:"max-h-screen static",children:[Object(C.jsxs)("div",{className:"nav-bar flex",children:[Object(C.jsx)("div",{className:"nav-item",children:Object(C.jsx)(R.b,{to:"/",children:"main"})}),Object(C.jsx)("div",{className:"nav-item",children:Object(C.jsx)(R.b,{to:"/profile",children:"profile"})}),Object(C.jsx)("div",{className:"nav-item",children:Object(C.jsx)(R.b,{to:"/chat",children:"chat"})}),Object(C.jsx)("div",{className:"nav-item",children:Object(C.jsx)(R.b,{to:"/invitations",children:"invitations"})}),Object(C.jsx)("div",{className:"nav-item",children:Object(C.jsx)(R.b,{to:"/search",children:"search"})}),Object(C.jsx)("div",{className:"nav-item",children:Object(C.jsx)(R.b,{to:"/develop",children:"develop"})}),Object(C.jsx)("div",{className:"nav-item",children:Object(C.jsx)(F,{})})]}),Object(C.jsx)("div",{children:Object(C.jsxs)(S.c,{children:[Object(C.jsx)(S.a,{exact:!0,path:"/",children:Object(C.jsx)(ye,{})}),Object(C.jsx)(S.a,{path:"/profile",children:Object(C.jsx)(A,{})}),Object(C.jsx)(S.a,{path:"/chat",children:Object(C.jsx)(pe,{})}),Object(C.jsx)(S.a,{path:"/invitations",children:Object(C.jsx)("div",{children:"invitations"})}),Object(C.jsx)(S.a,{path:"/search",children:Object(C.jsx)("div",{children:"search"})}),Object(C.jsx)(S.a,{path:"/develop",children:Object(C.jsx)(B,{})})]})})]})})},ke=Object(y.a)(we||(we=Object(v.a)(["\n  extend type Query {\n    isLoggedIn: Boolean!\n    UserOrRoom: Boolean!\n  }\n"]))),Re=Object(y.a)(Ne||(Ne=Object(v.a)(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n  }\n"])));function Se(){return Object(w.a)(Re).data.isLoggedIn?Object(C.jsx)(Ie,{}):Object(C.jsx)("div",{children:Object(C.jsx)(D,{})})}var Ce=a(24),Pe=a(71),$e=new j.a({uri:"http://localhost:4000/graphql",headers:{authorization:localStorage.getItem("token")||"","client-name":"Space Explorer [web]","client-version":"1.0.0"}}),qe=new Pe.a({uri:"ws://localhost:4000/subscriptions",options:{reconnect:!0,connectionParams:{authorization:localStorage.getItem("token")||""}}}),Ue=Object(u.split)((function(e){var t=e.query,a=Object(Ce.e)(t);return"OperationDefinition"===a.kind&&"subscription"===a.operation}),qe,$e),De=new b.a({headers:{authorization:localStorage.getItem("token")||"","client-name":"Space Explorer [web]","client-version":"1.0.0"},cache:p,uri:"http://localhost:4000/graphql",typeDefs:ke,link:Ue});m.a.render(Object(C.jsx)(x.a,{client:De,children:Object(C.jsx)(Se,{})}),document.getElementById("root"))},85:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.0843399b.chunk.js.map