module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=n(3);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),s=n.n(a);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){return o.a.createElement("div",{className:e.className,style:c({},{width:"100%",height:"50px",marginBottom:"20px",color:"white",display:"flex",justifyContent:"center",alignItems:"center"},{},e.style)},e.message)};u.propTypes={className:s.a.string,style:s.a.object,message:s.a.string.isRequired},u.defaultProps={className:"",style:{},message:""};var p=u;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return O(r,(n=r=O(this,(e=d(t)).call.apply(e,[this].concat(s))),r.state={checker:null,isOnline:navigator.onLine,messages:[]},r.handleMessageAddition=function(){var e=g(r.state.messages);navigator.onLine?e.push(o.a.createElement(p,{message:r.props.onlineMessage,style:b({},r.props.messageStyles,{backgroundColor:r.props.onlineColor}),className:r.props.messageClassName})):e.push(o.a.createElement(p,{message:r.props.offlineMessage,style:b({},r.props.messageStyles,{backgroundColor:r.props.offlineColor}),className:r.props.messageClassName})),r.setState({messages:e})},r.handleMessageRemove=function(){r.setState({messages:r.state.messages.slice(1)})},r.handleChecker=function(){r.state.isOnline!==navigator.onLine&&(r.handleMessageAddition(),r.setState({isOnline:navigator.onLine},function(){setTimeout(r.handleMessageRemove,r.props.notificationTimeout)}))},n))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){if(!this.state.checker){var e=setInterval(this.handleChecker,this.props.pollInterval);this.setState({checker:e})}}},{key:"componentWillUnmount",value:function(){this.state.checker&&clearInterval(this.state.checker)}},{key:"render",value:function(){return o.a.createElement("div",{style:b({},{position:"absolute",width:"200px",top:"10px",left:"50%",marginLeft:"-100px"},{},this.props.containerStyles),className:this.props.containerClassName},this.state.messages)}}])&&h(n.prototype,r),a&&h(n,a),t}();j.propTypes={containerStyles:s.a.object,messageStyles:s.a.object,onlineColor:s.a.string,offlineColor:s.a.string,containerClassName:s.a.string,messageClassName:s.a.string,onlineMessage:s.a.string,offlineMessage:s.a.string,pollInterval:s.a.number,notificationTimeout:s.a.number},j.defaultProps={containerStyles:{},messageStyles:{},onlineColor:"rgba(0,255,0,0.7)",offlineColor:"rgba(255,0,0,0.7)",containerClassName:"",messageClassName:"",onlineMessage:"You're online",offlineMessage:"You're offline",pollInterval:400,notificationTimeout:3e3};t.default=j}]);