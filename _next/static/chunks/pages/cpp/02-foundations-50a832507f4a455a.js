(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{1264:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cpp/02-foundations",function(){return l(2381)}])},2381:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return i}});var n=l(5893),r=l(2673),o=l(2643);let i=[{depth:2,value:"Types",id:"types"},{depth:3,value:"Fundamental Types",id:"fundamental-types"},{depth:3,value:"Compound Types",id:"compound-types"},{depth:2,value:"Scope",id:"scope"},{depth:3,value:"Shadowing",id:"shadowing"},{depth:2,value:"Overloading",id:"overloading"},{depth:3,value:"Prototype",id:"prototype"},{depth:3,value:"Default Arguments",id:"default-arguments"},{depth:2,value:"References",id:"references"},{depth:2,value:"Array of Pointers",id:"array-of-pointers"}];function t(s){let e=Object.assign({h2:"h2",h3:"h3",ul:"ul",li:"li",p:"p",pre:"pre",code:"code",span:"span"},(0,o.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"types",children:"Types"}),"\n",(0,n.jsx)(e.h3,{id:"fundamental-types",children:"Fundamental Types"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Integral Types (store data exactly in equivalent binary form and can be signed or unsigned)","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"bool - stores a logical value (true or false)"}),"\n",(0,n.jsx)(e.li,{children:"char"}),"\n",(0,n.jsx)(e.li,{children:"int - short, long, long long"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Floating Point Types (store data to a specified precision - can store very small and very large values)","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"float"}),"\n",(0,n.jsx)(e.li,{children:"double - long double"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"compound-types",children:"Compound Types"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Array (store multiple values of the same type)"}),"\n",(0,n.jsx)(e.li,{children:"Pointer (store the memory address of another variable)"}),"\n",(0,n.jsx)(e.li,{children:"Reference (alias to another variable)"}),"\n",(0,n.jsx)(e.li,{children:"Class/Structure (store multiple values of different types)"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(e.h2,{id:"scope",children:"Scope"}),"\n",(0,n.jsx)(e.p,{children:"The scope of a variable is the region of the program where the variable is accessible."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"global scope - visible to the entire program"}),"\n",(0,n.jsx)(e.li,{children:"file scope - visible to the source code within the file"}),"\n",(0,n.jsx)(e.li,{children:"function scope - visible to the source code within the function"}),"\n",(0,n.jsx)(e.li,{children:"class scope - visible to the member functions of the class"}),"\n",(0,n.jsx)(e.li,{children:"block scope - visible to the code block"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:"shadowing",children:"Shadowing"}),"\n",(0,n.jsx)(e.p,{children:"Shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope."}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<iostream>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"using"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" std;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // global variable"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // local variable"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 20"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(e.h2,{id:"overloading",children:"Overloading"}),"\n",(0,n.jsx)(e.p,{children:"Function overloading allows multiple functions with the same name but different parameters. The compiler determines which function to call based on the number and types of arguments."}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<iostream>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"using"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" std;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Integer: "'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"double"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Double: "'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: Integer: 10"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3.14"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: Double: 3.14"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"prototype",children:"Prototype"}),"\n",(0,n.jsx)(e.p,{children:"A function prototype is a declaration of a function that tells the compiler about the function's name, return type, and parameters."}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<iostream>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"using"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" std;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x);"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // function prototype"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 10"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// function definition"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"default-arguments",children:"Default Arguments"}),"\n",(0,n.jsx)(e.p,{children:"Default arguments are used to provide a default value for a function parameter if no argument is passed."}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<iostream>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"using"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" std;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" y "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"x: "'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'", y: "'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" y "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: x: 10, y: 0"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: x: 10, y: 20"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(e.h2,{id:"references",children:"References"}),"\n",(0,n.jsx)(e.p,{children:"A reference is an alias to another variable. It allows you to work with the original variable directly."}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"A reference must be initialized when declared."}),"\n",(0,n.jsx)(e.li,{children:"A reference cannot be null and re-assigned to refer to another variable."}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"&"})," is used to declare a reference."]}),"\n"]}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<iostream>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"using"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" std;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"y "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x;"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // reference to x"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    y "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // changes the value of x"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 20"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(e.h2,{id:"array-of-pointers",children:"Array of Pointers"}),"\n",(0,n.jsx)(e.p,{children:"An array of pointers is an array where each element is a pointer to another variable."}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<iostream>"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"using"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"namespace"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" std;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" y "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" z "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"30"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"arr"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"x"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"y"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"z};"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // array of pointers"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"arr"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 10"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"arr"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 20"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"arr"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 30"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/cpp/02-foundations.mdx",route:"/cpp/02-foundations",title:"02 Foundations",headings:i},pageNextRoute:"/cpp/02-foundations"})}},function(s){s.O(0,[673,888,774,179],function(){return s(s.s=1264)}),_N_E=s.O()}]);