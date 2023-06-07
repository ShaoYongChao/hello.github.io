(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5cb9"],{"708b":function(e,i,t){"use strict";t.r(i);var a=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,i=e._self._c;return i("div",[i("h1",[e._v("AssociativeLine plugin")]),i("blockquote",[i("p",[e._v("v0.4.5+")])]),i("blockquote",[i("p",[e._v("The function of adjusting associated line control points is supported from v0.4.6+")])]),i("blockquote",[i("p",[e._v("Relevance support for text editing starting from v0.5.11+")])]),i("p",[e._v("This plugin is used to support the addition of associative lines.")]),i("h2",[e._v("Register")]),i("pre",{staticClass:"hljs"},[i("code",[i("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),i("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),i("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map'")]),e._v("\n"),i("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" AssociativeLine "),i("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),i("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map/src/AssociativeLine.js'")]),e._v("\n\nMindMap.usePlugin(AssociativeLine)\n")])]),i("p",[e._v("After registration and instantiation of "),i("code",[e._v("MindMap")]),e._v(", the instance can be obtained through "),i("code",[e._v("mindMap.associativeLine")]),e._v(".")]),i("h2",[e._v("Config")]),i("p",[e._v("Support for modifying the thickness and color of associated lines, divided into default and active states. The configuration is as follows:")]),i("ul",[i("li",[i("p",[i("code",[e._v("associativeLineWidth")]),e._v(": The thickness of the default state of the associated line. The default value is "),i("code",[e._v("2")])])]),i("li",[i("p",[i("code",[e._v("associativeLineColor")]),e._v(": Color of the default state of associative lines. The default value is "),i("code",[e._v("rgb(51, 51, 51)")])])]),i("li",[i("p",[i("code",[e._v("associativeLineActiveWidth")]),e._v(": The thickness of the active state of the associated line. The default value is "),i("code",[e._v("8")])])]),i("li",[i("p",[i("code",[e._v("associativeLineActiveColor")]),e._v(": The color of the active state of the associated line. The default value is "),i("code",[e._v("rgba(2, 167, 240, 1)")])])])]),i("p",[e._v("The configuration is provided as a theme, so if you want to modify these four properties, you can modify them using the "),i("code",[e._v("mindMap.setThemeConfig(config)")]),e._v(" method.")]),i("h2",[e._v("Props")]),i("h3",[e._v("mindMap.associativeLine.lineList")]),i("p",[e._v("Currently, all connection line data, array types, and each item of the array are also an array:")]),i("pre",{staticClass:"hljs"},[i("code",[e._v("[\n    path, "),i("span",{staticClass:"hljs-comment"},[e._v("// Connector node")]),e._v("\n    clickPath, "),i("span",{staticClass:"hljs-comment"},[e._v("// Invisible click line node")]),e._v("\n    node, "),i("span",{staticClass:"hljs-comment"},[e._v("// Start node")]),e._v("\n    toNode "),i("span",{staticClass:"hljs-comment"},[e._v("// Target node")]),e._v("\n]\n")])]),i("h3",[e._v("mindMap.associativeLine.activeLine")]),i("p",[e._v("The currently active connection line and array type are the same as the structure of each item in the "),i("code",[e._v("lineList")]),e._v(" array.")]),i("h2",[e._v("Methods")]),i("h3",[e._v("renderAllLines()")]),i("p",[e._v("Re-render all associated lines.")]),i("h3",[e._v("removeAllLines()")]),i("p",[e._v("Remove all associated lines.")]),i("h3",[e._v("createLineFromActiveNode()")]),i("p",[e._v("Create an associated line from the current active node. If there are multiple active nodes, the default is the first node.")]),i("p",[e._v("After calling this method, an association line will be rendered from the first active node to the current mouse real-time position. When a target node is clicked, it represents completion of creation. An association line will be rendered between the first active node and the clicked node.")]),i("h3",[e._v("createLine(fromNode)")]),i("p",[e._v("Creates an associative line starting at the specified node.")]),i("p",[e._v("After calling this method, an association line will be rendered from the specified node to the current mouse real-time position. When a target node is clicked, it represents completion of creation, and an association line will be rendered between the specified node and the clicked node.")]),i("h3",[e._v("addLine(fromNode, toNode)")]),i("p",[e._v("Add an associative line directly.")]),i("p",[e._v("Calling this method will directly create an association line from the "),i("code",[e._v("fromNode")]),e._v(" to the "),i("code",[e._v("toNode")]),e._v(" node.")]),i("h3",[e._v("removeLine()")]),i("p",[e._v("Deletes the currently active associative line. Clicking on an associated line is considered active.")]),i("h3",[e._v("clearActiveLine()")]),i("p",[e._v("Clears the active state of the currently active association line.")])])}],n={},o=n,c=t("2877"),l=Object(c["a"])(o,a,s,!1,null,null,null);i["default"]=l.exports}}]);