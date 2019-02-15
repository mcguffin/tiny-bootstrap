!function(){var s=wp.element.createElement,h=wp.components.Dashicon.prototype.render;wp.components.Dashicon.prototype.render=function(){var e,t,n=h.apply(this,arguments);if(null!==n)return n;switch(e=this.props.size?this.props.size:20,this.props.icon){case"printer":path="M12.6,14.1H6.9v-1h5.7V14.1z M12.6,15.6H6.9v1h5.7V15.6z M19.4,8.1v4.1c0,0.9-0.8,1.7-1.7,1.7h-2.1v5.3H3.8v-5.3H2.3 c-0.9,0-1.7-0.8-1.7-1.7V8.1c0-0.9,0.8-1.7,1.7-1.7h1.5V0.8h11.7v5.6h2.1C18.6,6.4,19.4,7.1,19.4,8.1z M5.8,6.4h7.7V2.8H5.8V6.4z M13.6,11.6H5.8v5.9h7.7L13.6,11.6L13.6,11.6z M17.2,9c0-0.6-0.5-1.2-1.1-1.2S14.9,8.4,14.9,9s0.5,1.1,1.1,1.1S17.2,9.7,17.2,9z";break;case"tablet-landscape":path="M3,3h14c0.5,0,1,0.5,1,1v12c0,0.5-0.5,1-1,1H3c-0.5,0-1-0.5-1-1V4C2,3.5,2.5,3,3,3z M16,5H4v10h12V5z M10,6l-5,6V6H10z";break;default:return n}return t="dashicon dashicon-"+this.props.icon,s(wp.components.SVG,{"aria-hidden":!0,role:"img",focusable:"false",className:t,xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 20 20"},s(wp.components.Path,{d:path}))}}();
var bs=function(a){var t=wp.element.createElement,o=o||{};return a.assign(o,{block:{registerFeature:function(t){var r=this;if(a.assign({name:!1,register:!1,editWrap:!1,blocks:[]},t),!t.name)return!1;t.blocks.forEach(function(e){a.setWith(r.featureMap,[e,t.name],t,Object)})},getFeatures:function(e,r){var n=[],t=e.replace(/\/([^\/]+)$/,"/*"),o=a.get(this.featureMap,[e])||a.get(this.featureMap,[t]);return a.forEach(o,function(e,t){n.push(a.get(e,[r]))}),Array.filter(n,a.isFunction)},featureMap:{}}}),wp.hooks.addFilter("editor.BlockEdit","tiny-bootstrap/with-inspector-controls",wp.compose.createHigherOrderComponent(function(e){return function(r){var n=[wp.element.Fragment,{},t(e,r)];return o.block.getFeatures(r.name,"editWrap").forEach(function(e){var t=e(r);t&&n.push(t)}),t.apply(this,n)}},"withInspectorControls")),wp.hooks.addFilter("blocks.registerBlockType","tiny-bootstrap/register-block-type",function(t,e){return o.block.getFeatures(t.name,"register").forEach(function(e){e(t)}),t}),o}(lodash);
bs,lodash;
!function(e,o){wp.element.createElement;e.block.registerFeature({name:"align",blocks:["core/archives","core/block","core/button","core/categories","core/code","core/columns","core/column","core/embed","core-embed/*","core/freeform","core/gallery","core/heading","core/html","core/latest-comments","core/latest-posts","core/list","core/media-text","core/missing","core/more","core/nextpage","core/paragraph","core/preformatted","core/pullquote","core/quote","core/separator","core/shortcode","core/spacer","core/subhead","core/table","core/template","core/text-columns","core/verse","core/video"],register:function(e){var r=o.get(e,"supports.align");return o.isUndefined(r)||(!0===r?e.supports.align=["left","center","right","full"]:o.isArray(r)&&-1!==r.indexOf("wide")&&o.set(e,"supports.align",o.pull(r,"wide"))),e},editWrap:!1})}(bs,lodash);
!function(t,m){var c=wp.element.createElement,e={name:"grid-2-col",blocks:["core/media-text"],register:function(t){var d=t.save,s=t.edit;return t=m.assign(t,{save:function(t){var e,a,s,i,r=d(t),n={},o={};return m.isNull(r)?r:(i=r.props.children[0],s=r.props.children[1],n=m.assign({},i.props),o=m.assign({},s.props),n.className+=" col",o.className+=" col",t.attributes.isStackedOnMobile&&(n.className+="-md",o.className+="-md"),50!==t.attributes.mediaWidth&&(a=Math.min(11,Math.max(1,Math.round(12*t.attributes.mediaWidth/100))),n.className+="-"+a.toString(10),o.className+="-"+(12-a).toString(10)),"right"===t.attributes.mediaPosition&&(t.attributes.isStackedOnMobile?o.className+=" order-md-first":o.className+=" order-first"),e={className:"row"},c(r.type,e,c(i.type,n),c(s.type,o)))},edit:function(t,e){var a=Math.min(11,Math.max(1,Math.round(12*t.attributes.mediaWidth/100)));return t.setAttributes({mediaWidth:a*(100/12)}),s(t,e)}})}};t.block.registerFeature(e)}(bs,lodash);
!function(e,d){var b=wp.element.createElement,u=["core/columns","core/media-text"],m=["xs","sm","md","lg","xl"],a={xs:{icon:"smartphone",label:wp.i18n.__("Smartphone","tiny-bootstrap")},sm:{icon:"tablet",label:wp.i18n.__("Tablet","tiny-bootstrap")},md:{icon:"tablet-landscape",label:wp.i18n.__("Tablet (Landsape)","tiny-bootstrap")},lg:{icon:"laptop",label:wp.i18n.__("Laptop","tiny-bootstrap")},xl:{icon:"desktop",label:wp.i18n.__("Desktop","tiny-bootstrap")},print:{icon:"printer",label:wp.i18n.__("Print","tiny-bootstrap")}},t={name:"visibility",blocks:["core/audio","core/block","core/button","core/categories","core/code","core/columns","core/cover","core-embed/*","core/embed","core/file","core/freeform","core/gallery","core/heading","core/image","core/list","core/media-text","core/missing","core/more","core/nextpage","core/paragraph","core/preformatted","core/pullquote","core/quote","core/shortcode","core/spacer","core/subhead","core/table","core/template","core/text-columns","core/verse","core/video","core/separator","core/latest-posts","tiny-bootstrap/container"],register:function(l){var p=l.save;l.edit;return l=d.assign(l,{attributes:lodash.assign({},l.attributes,{bs_hidden_xs:{type:"boolean",default:!1},bs_hidden_sm:{type:"boolean",default:!1},bs_hidden_md:{type:"boolean",default:!1},bs_hidden_lg:{type:"boolean",default:!1},bs_hidden_xl:{type:"boolean",default:!1},bs_hidden_print:{type:"boolean",default:!1}}),save:function(e){var t,n,r,a,s,o,i=p(e),c=(n=e,r=[],a=null,s=-1!==u.indexOf(l.name)?"flex":"block",m.forEach(function(e,t){var o=d.get(n,["attributes","bs_hidden_"+e]);a!=o&&(t?r.push(o?"d-"+e+"-none":"d-"+e+"-"+s):o&&r.push("d-none")),a=o}),d.get(n,["attributes","bs_hidden_print"])&&r.push("d-print-none"),r.join(" "));return""===c||d.isNull(i)?i:(t=d.assign({},{className:""},i.props),d.set(t,["className"],(o=t.className,(d.isUndefined(o)?"":o.replace(/(d\-(xs|sm|md|lg|xl|print)\-(none|block))/g,"").replace(/\s+/," "))+" "+c)),b(i.type,t))}})},editWrap:function(n){var e=[],t=[],r=[wp.components.Toolbar,{}];return m.concat(["print"]).forEach(function(e){var o="bs_hidden_"+e;e=e;r.push(b(wp.components.ToolbarButton,d.assign({},a[e],{isActive:n.attributes[o],className:"components-toolbar__control",onClick:function(e){var t={};t[o]=!n.attributes[o],n.setAttributes(t)}}))),n.attributes[o]&&t.push(b(wp.components.Dashicon,a[e]))}),e.push(b(wp.editor.InspectorControls,{},b(wp.components.PanelBody,{title:"Devices"},"Hide on Devices",b.apply(this,r)))),e.push(b("div",{className:"bs-visibility-indicator"},t)),e}};e.block.registerFeature(t)}(bs,lodash);
!function(o,i){var s=wp.element.createElement;wp.blocks.registerBlockType("tiny-bootstrap/container",{title:wp.i18n.__("Container","tiny-bootstrap"),name:"tiny-bootstrap/container",icon:"admin-generic",category:"layout",attributes:{backgroundColor:{type:"string"},textColor:{type:"string"}},supports:{align:["full"],inserter:!0,reusable:!0,html:!1},edit:wp.editor.withColors("backgroundColor","textColor")(function(o){var t="full"===o.attributes.align?"container-fluid":"container",r=wp.editor.getColorClassName("background-color",o.attributes.backgroundColor),e=wp.editor.getColorClassName("text-color",o.attributes.textColor),l=s(wp.editor.InnerBlocks,{templateLock:!1}),n=s(wp.editor.InspectorControls,{},s(wp.editor.PanelColorSettings,{disableCustomColors:!0,colors:i.get(wp.data.select("core/editor").getEditorSettings(),"colors")||[],title:wp.i18n.__("Color Settings"),colorSettings:[{value:i.get(o,"backgroundColor.color",null),onChange:o.setBackgroundColor,label:wp.i18n.__("Background Color")},{value:i.get(o,"textColor.color",null),onChange:o.setTextColor,label:wp.i18n.__("Text Color")}]})),a={className:[t,e].join(" "),style:{color:i.get(o,"textColor.color",null)}};return s("div",a,r?s("div",{className:"tiny-bootstrap-bg "+r,style:{backgroundColor:i.get(o,"backgroundColor.color",null)}}):null,l,n)}),save:function(o){var t="full"===o.attributes.align?"container-fluid":"container",r=wp.editor.getColorClassName("background-color",o.attributes.backgroundColor),e=wp.editor.getColorClassName("color",o.attributes.textColor),l=s("div",{className:[t,e].join(" ")},s(wp.editor.InnerBlocks.Content,{}));return r&&(l=s("div",{className:r},l)),l},getEditWrapperProps:function(o){var t={};return"wide"!==o.width&&"full"!==o.width||(t["data-align"]=o.width),o.backgroundColor&&(t["data-has-bg-color"]="true"),t}})}(bs,lodash);