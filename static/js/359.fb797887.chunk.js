(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[359],{422:function(t,n){!function(t){var n={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},e={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function a(t,a){var r={"section-header":{pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"}};for(var o in a)r[o]=a[o];return r.tag={pattern:/([\r\n](?:  |\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},r.variable=e,r.comment=n,{pattern:RegExp("^ ?\\*{3}[ \t]*<name>[ \t]*\\*{3}(?:.|[\r\n](?!\\*{3}))*".replace(/<name>/g,(function(){return t})),"im"),alias:"section",inside:r}}var r={pattern:/(\[Documentation\](?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},o={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:e}},i={pattern:/([\r\n](?:  |\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:e}};t.languages.robotframework={settings:a("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:a("Variables"),"test-cases":a("Test Cases",{"test-name":o,documentation:r,property:i}),keywords:a("Keywords",{"keyword-name":o,documentation:r,property:i}),tasks:a("Tasks",{"task-name":o,documentation:r,property:i}),comment:n},t.languages.robot=t.languages.robotframework}(Prism)}}]);
//# sourceMappingURL=359.fb797887.chunk.js.map