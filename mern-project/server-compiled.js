(()=>{var e={849:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});const a=require("axios");var o=n.n(a),r=n(689),s=n.n(r),i=n(379),c=n.n(i),l=n(795),u=n.n(l),d=n(569),p=n.n(d),m=n(565),f=n.n(m),h=n(216),v=n.n(h),b=n(589),g=n.n(b),y=n(42),x={};x.styleTagTransform=g(),x.setAttributes=f(),x.insert=p().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=v(),c()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;const w=function(e){const[t,n]=(0,r.useState)(!1),[a,i]=(0,r.useState)(""),[c,l]=(0,r.useState)(),[u,d]=(0,r.useState)("");return s().createElement("div",{className:"card"},s().createElement("div",{className:"our-card-top"},t&&s().createElement("div",{className:"our-custom-input"},s().createElement("div",{className:"our-custom-input-interior"},s().createElement("input",{onChange:e=>l(e.target.files[0]),className:"form-control form-control-sm",type:"file"}))),s().createElement("img",{src:e.photo?`/uploaded-photos/${e.photo}`:"/fallback.png",className:"card-img-top",alt:`${e.species} named ${e.name}`})),s().createElement("div",{className:"card-body"},!t&&s().createElement(s().Fragment,null,s().createElement("h4",null,e.name),s().createElement("p",{className:"text-muted small"},e.species),!e.readOnly&&s().createElement(s().Fragment,null,s().createElement("button",{onClick:()=>{n(!0),i(e.name),d(e.species),l("")},className:"btn btn-sm btn-primary"},"Edit")," ",s().createElement("button",{onClick:async()=>{o().delete(`/animal/${e.id}`),e.setAnimals((t=>t.filter((t=>t._id!=e.id))))},className:"btn btn-sm btn-outline-danger"},"Delete"))),t&&s().createElement("form",{onSubmit:async function(t){t.preventDefault(),n(!1),e.setAnimals((t=>t.map((function(t){return t._id==e.id?{...t,name:a,species:u}:t}))));const r=new FormData;c&&r.append("photo",c),r.append("_id",e.id),r.append("name",a),r.append("species",u);const s=await o().post("/update-animal",r,{headers:{"Content-Type":"multipart/form-data"}});s.data&&e.setAnimals((t=>t.map((function(t){return t._id==e.id?{...t,photo:s.data}:t}))))}},s().createElement("div",{className:"mb-1"},s().createElement("input",{autoFocus:!0,onChange:e=>i(e.target.value),type:"text",className:"form-control form-control-sm",value:a})),s().createElement("div",{className:"mb-2"},s().createElement("input",{onChange:e=>d(e.target.value),type:"text",className:"form-control form-control-sm",value:u})),s().createElement("button",{className:"btn btn-sm btn-success"},"Save")," ",s().createElement("button",{onClick:()=>n(!1),className:"btn btn-sm btn-outline-secondary"},"Cancel"))))}},42:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),r=n(645),s=n.n(r)()(o());s.push([e.id,".animal-grid {\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 20px 30px;\n  }\n  \n  .our-card-top {\n    position: relative;\n  }\n  \n  .our-custom-input {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.65);\n  }\n  \n  .our-custom-input-interior {\n    position: absolute;\n    top: 50%;\n    left: 15px;\n    right: 15px;\n    transform: translateY(-50%);\n  }\n\n.homebtn{\n  float: right;\n}",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);a&&s[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},s=[],i=0;i<e.length;i++){var c=e[i],l=a.base?c[0]+a.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var p=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:d,updater:f,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=n(r[s]);t[i].references--}for(var c=a(e,o),l=0;l<r.length;l++){var u=n(r[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},860:e=>{"use strict";e.exports=require("express")},470:e=>{"use strict";e.exports=require("fs-extra")},13:e=>{"use strict";e.exports=require("mongodb")},738:e=>{"use strict";e.exports=require("multer")},689:e=>{"use strict";e.exports=require("react")},684:e=>{"use strict";e.exports=require("react-dom/server")},109:e=>{"use strict";e.exports=require("sanitize-html")},441:e=>{"use strict";e.exports=require("sharp")},17:e=>{"use strict";e.exports=require("path")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const{MongoClient:e,ObjectId:t}=n(13),a=n(860),o=n(738)(),r=n(109),s=n(470),i=n(441);let c;const l=n(17),u=n(689),d=n(684),p=n(849).Z;s.ensureDirSync(l.join("public","uploaded-photos"));const m=a();function f(e,t,n){"string"!=typeof e.body.name&&(e.body.name=""),"string"!=typeof e.body.species&&(e.body.species=""),"string"!=typeof e.body._id&&(e.body._id=""),e.cleanData={name:r(e.body.name.trim(),{allowedTags:[],allowedAttributes:{}}),species:r(e.body.species.trim(),{allowedTags:[],allowedAttributes:{}})},n()}m.set("view engine","ejs"),m.set("views","./views"),m.use(a.static("public")),m.use(a.json()),m.use(a.urlencoded({extended:!1})),m.get("/",(async(e,t)=>{const n=await c.collection("animals").find().toArray(),a=d.renderToString(u.createElement("div",{className:"container"},!n.length&&u.createElement("p",null,"There are no animals yet, the admin needs to add a few."),u.createElement("div",{className:"animal-grid mb-3"},n.map((e=>u.createElement(p,{key:e._id,name:e.name,species:e.species,photo:e.photo,id:e._id,readOnly:!0})))),u.createElement("p",null,u.createElement("a",{href:"/admin"},"Login / manage the animal listings."))));t.render("home",{generatedHTML:a})})),m.use((function(e,t,n){t.set("WWW-Authenticate","Basic realm='Our MERN App'"),"Basic YWRtaW46YWRtaW4="==e.headers.authorization?n():(console.log(e.headers.authorization),t.status(401).send("Try again"))})),m.get("/admin",((e,t)=>{t.render("admin")})),m.get("/api/animals",(async(e,t)=>{const n=await c.collection("animals").find().toArray();t.json(n)})),m.post("/create-animal",o.single("photo"),f,(async(e,n)=>{if(e.file){const t=`${Date.now()}.jpg`;await i(e.file.buffer).resize(844,456).jpeg({quality:60}).toFile(l.join("public","uploaded-photos",t)),e.cleanData.photo=t}console.log(e.body);const a=await c.collection("animals").insertOne(e.cleanData),o=await c.collection("animals").findOne({_id:new t(a.insertedId)});n.send(o)})),m.delete("/animal/:id",(async(e,n)=>{"string"!=typeof e.params.id&&(e.params.id="");const a=await c.collection("animals").findOne({_id:new t(e.params.id)});a.photo&&s.remove(l.join("public","uploaded-photos",a.photo)),c.collection("animals").deleteOne({_id:new t(e.params.id)}),n.send("Good job")})),m.post("/update-animal",o.single("photo"),f,(async(e,n)=>{if(e.file){const a=`${Date.now()}.jpg`;await i(e.file.buffer).resize(844,456).jpeg({quality:60}).toFile(l.join("public","uploaded-photos",a)),e.cleanData.photo=a;const o=await c.collection("animals").findOneAndUpdate({_id:new t(e.body._id)},{$set:e.cleanData});o.value.photo&&s.remove(l.join("public","uploaded-photos",o.value.photo)),n.send(a)}else c.collection("animals").findOneAndUpdate({_id:new t(e.body._id)},{$set:e.cleanData}),n.send(!1)})),async function(){const t=new e("mongodb://root:root@localhost:27017/AmazingMernApp?&authSource=admin");await t.connect(),c=t.db(),m.listen(3e3)}()})()})();