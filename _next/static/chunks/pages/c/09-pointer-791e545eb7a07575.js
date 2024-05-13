(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{103:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/c/09-pointer",function(){return n(3150)}])},3150:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var r=n(5893),i=n(2673),o=n(8092),t=n(2205);n(7954);var l=n(2643);let a=[{depth:2,value:"Pointers",id:"pointers"},{depth:3,value:"What is a pointer?",id:"what-is-a-pointer"},{depth:3,value:"Why use pointers?",id:"why-use-pointers"},{depth:3,value:"Pointer Declaration",id:"pointer-declaration"},{depth:3,value:"Pointer Initialization",id:"pointer-initialization"},{depth:3,value:"Pointer Dereferencing",id:"pointer-dereferencing"},{depth:3,value:"Pointer Arithmetic",id:"pointer-arithmetic"},{depth:3,value:"Pass-by-value",id:"pass-by-value"},{depth:3,value:"Pass-by-reference",id:"pass-by-reference"},{depth:3,value:"Pointer to Array",id:"pointer-to-array"},{depth:3,value:"Pointer to Structure",id:"pointer-to-structure"},{depth:3,value:"Null Pointer",id:"null-pointer"}];function c(e){let s=Object.assign({h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"pointers",children:"Pointers"}),"\n",(0,r.jsx)(s.h3,{id:"what-is-a-pointer",children:"What is a pointer?"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A pointer is a variable that stores the address of another variable."}),"\n",(0,r.jsx)(s.li,{children:"It is used to store the memory address of a variable."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"why-use-pointers",children:"Why use pointers?"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To access the memory address of a variable."}),"\n",(0,r.jsx)(s.li,{children:"To access the value of a variable indirectly."}),"\n",(0,r.jsx)(s.li,{children:"To pass arguments by reference."}),"\n",(0,r.jsx)(s.li,{children:"To return multiple values from a function."}),"\n",(0,r.jsx)(s.li,{children:"To allocate memory dynamically."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pointer-declaration",children:"Pointer Declaration"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The declaration of a pointer is similar to the declaration of a variable."}),"\n",(0,r.jsx)(s.li,{children:"The data type of a pointer must be the same as the data type of the variable it points to."}),"\n",(0,r.jsx)(s.li,{children:"The pointer declaration is done by adding an asterisk (*) before the pointer name."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr;"})]})})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pointer-initialization",children:"Pointer Initialization"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A pointer can be initialized with the address of a variable."}),"\n",(0,r.jsx)(s.li,{children:"The address of a variable can be obtained by using the address-of operator (&)."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"num;"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pointer-dereferencing",children:"Pointer Dereferencing"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Dereferencing a pointer means accessing the value of the variable it points to."}),"\n",(0,r.jsx)(s.li,{children:"The value of a variable can be accessed by using the dereference operator (*)."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"num;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 10"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pointer-arithmetic",children:"Pointer Arithmetic"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Pointer arithmetic is used to perform arithmetic operations on pointers."}),"\n",(0,r.jsx)(s.li,{children:"The arithmetic operations include addition, subtraction, increment, and decrement."}),"\n",(0,r.jsx)(s.li,{children:"The size of the data type is taken into account when performing arithmetic operations."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" arr["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" arr;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 1"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 2"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pass-by-value",children:"Pass-by-value"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"In C, arguments are passed to functions by value."}),"\n",(0,r.jsx)(s.li,{children:"It means that a copy of the data is made and used inside the function, not affecting the original data."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"increment"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num){"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  num"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"increment"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(num);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 10"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pass-by-reference",children:"Pass-by-reference"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Pointers can be passed as arguments to functions."}),"\n",(0,r.jsx)(s.li,{children:"Passing a pointer as an argument allows the function to modify the value of the variable it points to."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"increment"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr){"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr)"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"increment"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"num);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 11"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pointer-to-array",children:"Pointer to Array"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A pointer to an array is a pointer that stores the address of the first element of an array."}),"\n",(0,r.jsx)(s.li,{children:"It is used to access the elements of an array using pointer arithmetic."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" arr["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" arr;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 1"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 2"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"pointer-to-structure",children:"Pointer to Structure"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A pointer to a structure is a pointer that stores the address of a structure."}),"\n",(0,r.jsx)(s.li,{children:"It is used to access the members of a structure using the arrow operator (->)."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"struct"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Point{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" x;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" y;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"struct"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Point p "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"struct"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Point "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"p;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ptr"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"x);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 10"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ptr"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"->"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"y);"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" // Output: 20"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"null-pointer",children:"Null Pointer"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"A null pointer is a pointer that does not point to any memory location."}),"\n",(0,r.jsx)(s.li,{children:"It is used to indicate that the pointer is not pointing to a valid memory address."}),"\n",(0,r.jsx)(s.li,{children:"It is represented by the constant NULL."}),"\n"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ptr "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NULL"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(ptr "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"NULL"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"){"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Null Pointer"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/c/09-pointer.mdx",route:"/c/09-pointer",timestamp:1714013918e3,pageMap:[{kind:"Meta",data:{index:"Introduction",c:"C",cpp:"C++",react:"React","js-challenge":"JS-Challenge",leetcode:"Leetcode","error-notes":"Error Notes",about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"c",route:"/c",children:[{kind:"MdxPage",name:"01-basics",route:"/c/01-basics"},{kind:"MdxPage",name:"02-types",route:"/c/02-types"},{kind:"MdxPage",name:"03-simple-calculation",route:"/c/03-simple-calculation"},{kind:"MdxPage",name:"04-expression",route:"/c/04-expression"},{kind:"MdxPage",name:"05-logic",route:"/c/05-logic"},{kind:"MdxPage",name:"06-array",route:"/c/06-array"},{kind:"MdxPage",name:"07-structures",route:"/c/07-structures"},{kind:"MdxPage",name:"08-function",route:"/c/08-function"},{kind:"MdxPage",name:"09-pointer",route:"/c/09-pointer"},{kind:"Meta",data:{"01-basics":"01-Basics","02-types":"02-Types","03-simple-calculation":"03-Simple Calculation","04-expression":"04-Expression","05-logic":"05-Logic","06-array":"06-Array","07-structures":"07-Structures","08-function":"08-Function","09-pointer":"09-Pointer"}}]},{kind:"Folder",name:"cpp",route:"/cpp",children:[{kind:"MdxPage",name:"01-basics",route:"/cpp/01-basics"},{kind:"MdxPage",name:"02-foundations",route:"/cpp/02-foundations"},{kind:"MdxPage",name:"03-dynamic-memory",route:"/cpp/03-dynamic-memory"},{kind:"MdxPage",name:"04-encapsulation",route:"/cpp/04-encapsulation"},{kind:"Meta",data:{"01-basics":"01-Basics","02-foundations":"02-Foundations","03-dynamic-memory":"03-Dynamic Memory","04-encapsulation":"04-Encapsulation"}}]},{kind:"Folder",name:"error-notes",route:"/error-notes",children:[{kind:"Meta",data:{c:"C",cpp:"C++"}},{kind:"Folder",name:"c",route:"/error-notes/c",children:[{kind:"MdxPage",name:"01-scanf",route:"/error-notes/c/01-scanf"},{kind:"Meta",data:{"01-scanf":"01-scanf"}}]},{kind:"Folder",name:"cpp",route:"/error-notes/cpp",children:[{kind:"MdxPage",name:"01-Wsign-compare",route:"/error-notes/cpp/01-Wsign-compare"},{kind:"Meta",data:{"01-Wsign-compare":"01-Wsign-compare"}}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"js-challenge",route:"/js-challenge",children:[{kind:"MdxPage",name:"01-addition-of-fractions",route:"/js-challenge/01-addition-of-fractions"},{kind:"Meta",data:{"01-addition-of-fractions":"01-Addition of Fractions"}}]},{kind:"Folder",name:"leetcode",route:"/leetcode",children:[{kind:"MdxPage",name:"1004-max-consecutive-ones-iii",route:"/leetcode/1004-max-consecutive-ones-iii"},{kind:"MdxPage",name:"1071-greatest-common-divisor-of-strings",route:"/leetcode/1071-greatest-common-divisor-of-strings"},{kind:"MdxPage",name:"11-container-with-most-water",route:"/leetcode/11-container-with-most-water"},{kind:"MdxPage",name:"1431-kids-with-the-greatest-number-of-candies",route:"/leetcode/1431-kids-with-the-greatest-number-of-candies"},{kind:"MdxPage",name:"1456-maximum-number-of-vowels-in-a-substring-of-given-length",route:"/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length"},{kind:"MdxPage",name:"1493-longest-subarray-of-1s-after-deleting-one-element",route:"/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element"},{kind:"MdxPage",name:"151-reverse-words-in-a-string",route:"/leetcode/151-reverse-words-in-a-string"},{kind:"MdxPage",name:"1679-max-number-of-k-sum-pairs",route:"/leetcode/1679-max-number-of-k-sum-pairs"},{kind:"MdxPage",name:"1768-merge-strings-alternately",route:"/leetcode/1768-merge-strings-alternately"},{kind:"MdxPage",name:"238-product-of-array-except-self",route:"/leetcode/238-product-of-array-except-self"},{kind:"MdxPage",name:"283-move-zeroes",route:"/leetcode/283-move-zeroes"},{kind:"MdxPage",name:"334-increasing-triplet-subsequence",route:"/leetcode/334-increasing-triplet-subsequence"},{kind:"MdxPage",name:"345-reverse-vowels-of-a-string",route:"/leetcode/345-reverse-vowels-of-a-string"},{kind:"MdxPage",name:"392-is-subsequence",route:"/leetcode/392-is-subsequence"},{kind:"MdxPage",name:"443-string-compression",route:"/leetcode/443-string-compression"},{kind:"MdxPage",name:"605-can-place-flowers",route:"/leetcode/605-can-place-flowers"},{kind:"MdxPage",name:"643-maximum-average-subarray-i",route:"/leetcode/643-maximum-average-subarray-i"},{kind:"Meta",data:{"11-container-with-most-water":"11. Container With Most Water","151-reverse-words-in-a-string":"151. Reverse Words in a String","238-product-of-array-except-self":"238. Product of Array Except Self","283-move-zeroes":"283. Move Zeroes","334-increasing-triplet-subsequence":"334. Increasing Triplet Subsequence","345-reverse-vowels-of-a-string":"345. Reverse Vowels of a String","392-is-subsequence":"392. Is Subsequence","443-string-compression":"443. String Compression","605-can-place-flowers":"605. Can Place Flowers","643-maximum-average-subarray-i":"643. Maximum Average Subarray I","1004-max-consecutive-ones-iii":"1004. Max Consecutive Ones III","1071-greatest-common-divisor-of-strings":"1071. Greatest Common Divisor of Strings","1431-kids-with-the-greatest-number-of-candies":"1431. Kids With the Greatest Number of Candies","1456-maximum-number-of-vowels-in-a-substring-of-given-length":"1456. Maximum Number of Vowels in a Substring of Given Length","1493-longest-subarray-of-1s-after-deleting-one-element":"1493. Longest Subarray of 1's After Deleting One Element","1679-max-number-of-k-sum-pairs":"1679. Max Number of K-Sum Pairs","1768-merge-strings-alternately":"1768. Merge Strings Alternately"}}]},{kind:"Folder",name:"react",route:"/react",children:[{kind:"MdxPage",name:"01-attribute-conversion",route:"/react/01-attribute-conversion"},{kind:"Meta",data:{"01-attribute-conversion":"01-Attribute Conversion"}}]}],flexsearch:{codeblocks:!0},title:"09 Pointer",headings:a},pageNextRoute:"/c/09-pointer",nextraLayout:o.ZP,themeConfig:t.Z};s.default=(0,i.j)(d)},2205:function(e,s,n){"use strict";n.d(s,{Z:function(){return o}});var r=n(5893);n(7294);var i=n(1163),o={logo:(0,r.jsx)("span",{children:"b5h22's Dev Notes"}),project:{link:"https://github.com/b5h22/dev-notes"},docsRepositoryBase:"https://github.com/b5h22/dev-notes/tree/main",footer:{text:"\xa9 2023 - b5h22 Powered by Nextra, Github Pages"},feedback:{content:()=>(0,r.jsx)(r.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,i.useRouter)(),s={description:"The notes from my journey in learning software development."};return"/"!==e?s.titleTemplate="%s – Dev notes":s.titleTemplate="%s",s},sidebar:{defaultMenuCollapseLevel:1}}}},function(e){e.O(0,[141,888,774,179],function(){return e(e.s=103)}),_N_E=e.O()}]);