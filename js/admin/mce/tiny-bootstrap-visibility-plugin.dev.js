jQuery,tinymce.PluginManager.add("tiny-bootstrap-visibility",function(o){var s,l="H1,H2,H3,H4,H5,H6,DIV,P,PRE,ADDRESS",a=mce_tiny_bootstrap_visibility,e=a.l10n;function t(e){var t=o.dom.getParent(o.selection.getNode(),l),s=jQuery(t),n=e.split(" ");if(function(){var e,t=o.dom.getParent(o.selection.getNode(),l);for(i=1;i<a.classes.length;i++)if(-1!==o.dom.getAttrib(t,"class").indexOf(a.classes[i].value)){e=a.classes[i].value.split(" ");for(var s=0;s<e.length;s++)jQuery(t).removeClass(e[s])}}(),""!=e)for(i=0;i<n.length;i++)s.addClass(n[i])}o.addButton("tiny_bootstrap_visibility",{type:"listbox",text:e.devices,tooltip:e.visibility_on_devices,menu_button:!0,classes:"widget btn fixed-width",onselect:function(e){t(this.value())},values:a.classes,onPostRender:function(){s=this,o.on("nodechange",function(e){!function(){var e,t=o.dom.getParent(o.selection.getNode(),l);for(s.disabled(!t),e=1;e<a.classes.length;e++)if(-1!==o.dom.getAttrib(t,"class").indexOf(a.classes[e].value))return s.value(a.classes[e].value);s.value("")}()})}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbnktYm9vdHN0cmFwLXZpc2liaWxpdHktcGx1Z2luLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsInRpbnltY2UiLCJQbHVnaW5NYW5hZ2VyIiwiYWRkIiwiZWRpdG9yIiwibW9iaWxlQnRuIiwibm9kZXMiLCJvcHRpb25zIiwibWNlX3RpbnlfYm9vdHN0cmFwX3Zpc2liaWxpdHkiLCJsMTBuIiwic2V0TW9iaWxlVmlzaWJsZSIsInZhbHVlIiwibm9kZSIsImRvbSIsImdldFBhcmVudCIsInNlbGVjdGlvbiIsImdldE5vZGUiLCIkbm9kZSIsImNsYXNzZXMiLCJzcGxpdCIsInBhcmVudF9ub2RlIiwiaSIsImxlbmd0aCIsImdldEF0dHJpYiIsImluZGV4T2YiLCJqIiwicmVtb3ZlQ2xhc3MiLCJyZXNldE1vYmlsZVZpc2libGUiLCJhZGRDbGFzcyIsImFkZEJ1dHRvbiIsInR5cGUiLCJ0ZXh0IiwiZGV2aWNlcyIsInRvb2x0aXAiLCJ2aXNpYmlsaXR5X29uX2RldmljZXMiLCJtZW51X2J1dHRvbiIsIm9uc2VsZWN0IiwiZSIsInRoaXMiLCJ2YWx1ZXMiLCJvblBvc3RSZW5kZXIiLCJvbiIsImV2ZW50IiwiZGlzYWJsZWQiLCJzZXRNb2JpbGVWaXNpYmxlU3RhdGUiXSwibWFwcGluZ3MiOiJBQStER0EsT0FGSEMsUUFBUUMsY0FBY0MsSUFBSyw0QkEzREEsU0FBVUMsR0FDcEMsSUFBSUMsRUFBV0MsRUFBUSxzQ0FDdEJDLEVBQVVDLDhCQUNWQyxFQUFPRixFQUFRRSxLQTBCaEIsU0FBU0MsRUFBa0JDLEdBQzFCLElBQUlDLEVBQU9SLEVBQU9TLElBQUlDLFVBQVdWLEVBQU9XLFVBQVVDLFVBQVdWLEdBQVFXLEVBQVFqQixPQUFPWSxHQUNuRk0sRUFBVVAsRUFBTVEsTUFBTSxLQUV2QixHQTVCRCxXQUNDLElBQ0NELEVBREdFLEVBQWNoQixFQUFPUyxJQUFJQyxVQUFXVixFQUFPVyxVQUFVQyxVQUFXVixHQUVwRSxJQUFNZSxFQUFFLEVBQUVBLEVBQUVkLEVBQVFXLFFBQVFJLE9BQU9ELElBQ2xDLElBQTJGLElBQXRGakIsRUFBT1MsSUFBSVUsVUFBV0gsRUFBYSxTQUFVSSxRQUFTakIsRUFBUVcsUUFBUUcsR0FBR1YsT0FBaUIsQ0FDOUZPLEVBQVVYLEVBQVFXLFFBQVFHLEdBQUdWLE1BQU1RLE1BQU0sS0FDekMsSUFBSyxJQUFJTSxFQUFFLEVBQUVBLEVBQUVQLEVBQVFJLE9BQU9HLElBQzdCekIsT0FBT29CLEdBQWFNLFlBQVlSLEVBQVFPLEtBb0IzQ0UsR0FDYyxJQUFUaEIsRUFDSixJQUFNVSxFQUFFLEVBQUVBLEVBQUVILEVBQVFJLE9BQU9ELElBQzFCSixFQUFNVyxTQUFTVixFQUFRRyxJQUkxQmpCLEVBQU95QixVQUFVLDRCQUE2QixDQUM3Q0MsS0FBTSxVQUNOQyxLQUFNdEIsRUFBS3VCLFFBQ1hDLFFBQVN4QixFQUFLeUIsc0JBQ2RDLGFBQWMsRUFDZGpCLFFBQVUseUJBQ1ZrQixTQUFVLFNBQVNDLEdBQ2xCM0IsRUFBa0I0QixLQUFLM0IsVUFFeEI0QixPQUFRaEMsRUFBUVcsUUFDaEJzQixhQUFjLFdBQ2JuQyxFQUFZaUMsS0FDWmxDLEVBQU9xQyxHQUFJLGFBQWMsU0FBVUMsSUFsQ3JDLFdBQ0MsSUFBNEVyQixFQUF4RUQsRUFBY2hCLEVBQU9TLElBQUlDLFVBQVdWLEVBQU9XLFVBQVVDLFVBQVdWLEdBRXBFLElBREFELEVBQVVzQyxVQUFZdkIsR0FDaEJDLEVBQUUsRUFBRUEsRUFBRWQsRUFBUVcsUUFBUUksT0FBT0QsSUFDbEMsSUFBMkYsSUFBdEZqQixFQUFPUyxJQUFJVSxVQUFXSCxFQUFhLFNBQVVJLFFBQVNqQixFQUFRVyxRQUFRRyxHQUFHVixPQUU3RSxPQURBTixFQUFVTSxNQUFPSixFQUFRVyxRQUFRRyxHQUFHVixPQUl0Q04sRUFBVU0sTUFBTyxJQTBCZmlDIiwiZmlsZSI6InRpbnktYm9vdHN0cmFwLXZpc2liaWxpdHktcGx1Z2luLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKXtcblxudmFyIG1vYmlsZVBsdWdpbkNhbGxiYWNrID0gZnVuY3Rpb24oIGVkaXRvciApe1xuXHR2YXIgbW9iaWxlQnRuLCBub2RlcyA9ICdIMSxIMixIMyxINCxINSxINixESVYsUCxQUkUsQUREUkVTUycsXG5cdFx0b3B0aW9ucyA9IG1jZV90aW55X2Jvb3RzdHJhcF92aXNpYmlsaXR5LFxuXHRcdGwxMG4gPSBvcHRpb25zLmwxMG47XG5cblx0ZnVuY3Rpb24gcmVzZXRNb2JpbGVWaXNpYmxlKCApIHtcblx0XHR2YXIgcGFyZW50X25vZGUgPSBlZGl0b3IuZG9tLmdldFBhcmVudCggZWRpdG9yLnNlbGVjdGlvbi5nZXROb2RlKCkgLG5vZGVzKSxcblx0XHRcdGNsYXNzZXM7XG5cdFx0Zm9yICggaT0xO2k8b3B0aW9ucy5jbGFzc2VzLmxlbmd0aDtpKyspIHtcblx0XHRcdGlmICggZWRpdG9yLmRvbS5nZXRBdHRyaWIoIHBhcmVudF9ub2RlLCAnY2xhc3MnICkuaW5kZXhPZiggb3B0aW9ucy5jbGFzc2VzW2ldLnZhbHVlICkgIT09IC0xICkge1xuXHRcdFx0XHRjbGFzc2VzID0gb3B0aW9ucy5jbGFzc2VzW2ldLnZhbHVlLnNwbGl0KCcgJyk7XG5cdFx0XHRcdGZvciAodmFyIGo9MDtqPGNsYXNzZXMubGVuZ3RoO2orKykge1xuXHRcdFx0XHRcdGpRdWVyeShwYXJlbnRfbm9kZSkucmVtb3ZlQ2xhc3MoY2xhc3Nlc1tqXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZnVuY3Rpb24gc2V0TW9iaWxlVmlzaWJsZVN0YXRlKCApIHtcblx0XHR2YXIgcGFyZW50X25vZGUgPSBlZGl0b3IuZG9tLmdldFBhcmVudCggZWRpdG9yLnNlbGVjdGlvbi5nZXROb2RlKCkgLG5vZGVzKSwgaTtcblx0XHRtb2JpbGVCdG4uZGlzYWJsZWQoICEgcGFyZW50X25vZGUgKTtcblx0XHRmb3IgKCBpPTE7aTxvcHRpb25zLmNsYXNzZXMubGVuZ3RoO2krKykge1xuXHRcdFx0aWYgKCBlZGl0b3IuZG9tLmdldEF0dHJpYiggcGFyZW50X25vZGUsICdjbGFzcycgKS5pbmRleE9mKCBvcHRpb25zLmNsYXNzZXNbaV0udmFsdWUgKSAhPT0gLTEgKSB7XG5cdFx0XHRcdG1vYmlsZUJ0bi52YWx1ZSggb3B0aW9ucy5jbGFzc2VzW2ldLnZhbHVlICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0bW9iaWxlQnRuLnZhbHVlKCAnJyApO1xuLy9cblx0fVxuXHRmdW5jdGlvbiBzZXRNb2JpbGVWaXNpYmxlKCB2YWx1ZSApIHtcblx0XHR2YXIgbm9kZSA9IGVkaXRvci5kb20uZ2V0UGFyZW50KCBlZGl0b3Iuc2VsZWN0aW9uLmdldE5vZGUoKSAsbm9kZXMpLCAkbm9kZSA9IGpRdWVyeShub2RlKSxcblx0XHRcdGNsYXNzZXMgPSB2YWx1ZS5zcGxpdCgnICcpO1xuXHRcdHJlc2V0TW9iaWxlVmlzaWJsZSggKTtcblx0XHRpZiAoIHZhbHVlICE9ICcnICkge1xuXHRcdFx0Zm9yICggaT0wO2k8Y2xhc3Nlcy5sZW5ndGg7aSsrIClcblx0XHRcdFx0JG5vZGUuYWRkQ2xhc3MoY2xhc3Nlc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0ZWRpdG9yLmFkZEJ1dHRvbigndGlueV9ib290c3RyYXBfdmlzaWJpbGl0eScsIHtcblx0XHR0eXBlOiAnbGlzdGJveCcsXG5cdFx0dGV4dDogbDEwbi5kZXZpY2VzLFxuXHRcdHRvb2x0aXA6IGwxMG4udmlzaWJpbGl0eV9vbl9kZXZpY2VzLFxuXHRcdG1lbnVfYnV0dG9uIDogdHJ1ZSxcblx0XHRjbGFzc2VzIDogJ3dpZGdldCBidG4gZml4ZWQtd2lkdGgnLFxuXHRcdG9uc2VsZWN0OiBmdW5jdGlvbihlKSB7XG5cdFx0XHRzZXRNb2JpbGVWaXNpYmxlKCB0aGlzLnZhbHVlKCkgKTtcblx0XHR9LFxuXHRcdHZhbHVlczogb3B0aW9ucy5jbGFzc2VzLFxuXHRcdG9uUG9zdFJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRtb2JpbGVCdG4gPSB0aGlzO1xuXHRcdFx0ZWRpdG9yLm9uKCAnbm9kZWNoYW5nZScsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0c2V0TW9iaWxlVmlzaWJsZVN0YXRlKCApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdH0pO1xufTtcblxudGlueW1jZS5QbHVnaW5NYW5hZ2VyLmFkZCggJ3RpbnktYm9vdHN0cmFwLXZpc2liaWxpdHknLCBtb2JpbGVQbHVnaW5DYWxsYmFjayApO1xuXG59KShqUXVlcnkpO1xuIl19
