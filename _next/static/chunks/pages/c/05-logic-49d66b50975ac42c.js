(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{3103:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/c/05-logic",function(){return n(497)}])},497:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a},default:function(){return c}});var i=n(5893),l=n(2673),o=n(2643),r={src:"/dev-notes/_next/static/media/c-constructs.a30b4818.png",height:629,width:1082,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAZklEQVR42hXNUQ4DIQhFUfe/yWb6Y8dmRBFBwMbq30lu8l6A2lRtrfUAuvtGqdRZwpVGISexVCyj+vwl4FwlvCI9aBFUhn9Am8wb9Fs0XDcjn4V3EtG5EfMOI2Ajs/Ox4X5C7zxU/wCmcucyI9+aAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},t={src:"/dev-notes/_next/static/media/c-selection.66b9867f.png",height:547,width:701,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAeklEQVR42h2LWw5CIQwF2f8O1R+jwg2BFmh53gcVPclJZj5GiQjXrn2S/zYkqn2B0j7etP8Al9ZfFu8GHwaMT8rG7CKPMWofGijQT7fAalXH6MwsMkWuWsre22I19uNpEVI2kCzSBunt4nleah2oQiTt0EJAyiG3OecX/kuIhSGp+3UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6};let a=[{depth:2,value:"Logic",id:"logic"},{depth:3,value:"Structured programming",id:"structured-programming"},{depth:3,value:"Preliminary Design",id:"preliminary-design"},{depth:3,value:"Selection constructs",id:"selection-constructs"},{depth:4,value:"Optional Path",id:"optional-path"},{depth:5,value:"Single Statement",id:"single-statement"},{depth:5,value:"Code Block (more than a single statement)",id:"code-block-more-than-a-single-statement"},{depth:4,value:"Alternative Paths",id:"alternative-paths"},{depth:5,value:"Binary Selection",id:"binary-selection"},{depth:5,value:"Single Statement",id:"single-statement-1"},{depth:5,value:"Code Block (more than a single statement)",id:"code-block-more-than-a-single-statement-1"},{depth:5,value:"Multiple Selection",id:"multiple-selection"},{depth:5,value:"Compound Conditions",id:"compound-conditions"},{depth:5,value:"Case-by-Case",id:"case-by-case"},{depth:4,value:"Conditional Expression",id:"conditional-expression"}];function _createMdxContent(e){let s=Object.assign({h2:"h2",h3:"h3",p:"p",ul:"ul",li:"li",img:"img",h4:"h4",pre:"pre",code:"code",span:"span",h5:"h5"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"logic",children:"Logic"}),"\n",(0,i.jsx)(s.h3,{id:"structured-programming",children:"Structured programming"}),"\n",(0,i.jsx)(s.p,{children:"Structured programming is a way of writing code that focuses on making it easy to read and change. It breaks down a program into smaller parts using functions and blocks. It uses three main parts: sequence, selection, and repetition. The aim is to make the code simple and manageable."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Sequence: This is the normal flow where statements are executed line by line in order."}),"\n",(0,i.jsx)(s.li,{children:'Selection: This is implemented with control statements like "if", "if-else", and "switch". It allows the program to choose between different paths based on certain conditions.'}),"\n",(0,i.jsx)(s.li,{children:'Repetition: This is implemented with loops like "for", "while", and "do-while". It allows certain parts of the code to be repeated several times.'}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"c-constructs",placeholder:"blur",src:r})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"preliminary-design",children:"Preliminary Design"}),"\n",(0,i.jsx)(s.p,{children:"Preliminary Design is the early stage of designing where you create a basic plan of what you want to make, without all the small details."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Pseudocode: It's like a draft of your program, written in simple English. It helps you plan the steps your program will take, without using real code."}),"\n",(0,i.jsx)(s.li,{children:"Flowcharts: These are pictures with symbols and arrows that show the steps and flow of your program. They help you see and share your plan before you start coding."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"selection-constructs",children:"Selection constructs"}),"\n",(0,i.jsx)(s.p,{children:"The C language supports three selection constructs:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"optional path"}),"\n",(0,i.jsx)(s.li,{children:"alternative paths"}),"\n",(0,i.jsx)(s.li,{children:"conditional expression\nThe flow charts for these three constructs are shown below:"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"c-selection",placeholder:"blur",src:t})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h4,{id:"optional-path",children:"Optional Path"}),"\n",(0,i.jsx)(s.p,{children:"It is a programming term that refers to a part of the code which only runs if a specific condition is met. In other words, this part of the code is optional and only runs when the condition is true."}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (condition)"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  sequence"})})]})}),"\n",(0,i.jsx)(s.p,{children:"Here, the condition could be a relational expression or a logical expression. The sequence may be a single statement or a code block."}),"\n",(0,i.jsx)(s.h5,{id:"single-statement",children:"Single Statement"}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (likePizza "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I like pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,i.jsx)(s.h5,{id:"code-block-more-than-a-single-statement",children:"Code Block (more than a single statement)"}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (likePizza "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I like pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I want more pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h4,{id:"alternative-paths",children:"Alternative Paths"}),"\n",(0,i.jsx)(s.p,{children:"The C language supports two ways of describing alternative paths: an binary select construct and a multiple selection construct."}),"\n",(0,i.jsx)(s.h5,{id:"binary-selection",children:"Binary Selection"}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (condition)"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  sequence1"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  sequence2"})})]})}),"\n",(0,i.jsx)(s.p,{children:"Here, the condition could be a relational expression or a logical expression. The sequence may be a single statement or a code block. The program executes the sequence following the if only if the condition is true. The program executes the sequence following the else only if the condition is false."}),"\n",(0,i.jsx)(s.h5,{id:"single-statement-1",children:"Single Statement"}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (likePizza "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I like pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I hate pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,i.jsx)(s.h5,{id:"code-block-more-than-a-single-statement-1",children:"Code Block (more than a single statement)"}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (likePizza "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I like pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I hate pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"I don\'t want pizza\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsx)(s.h5,{id:"multiple-selection",children:"Multiple Selection"}),"\n",(0,i.jsx)(s.p,{children:"For three alternative paths, we append an if else construct to the else keyword."}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (condition)"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  sequence"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (condition)"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  sequence"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  sequence"})})]})}),"\n",(0,i.jsx)(s.p,{children:"If the first condition is true, the program skips the second and third sequences. If the first condition is false, the program skips the first sequence and evaluates the second condition. The program executes the second sequence only if the first condition is false and the second condition is true. The program executes the third sequence and skips the first two only if both conditions are false."}),"\n",(0,i.jsx)(s.h5,{id:"compound-conditions",children:"Compound Conditions"}),"\n",(0,i.jsx)(s.p,{children:"The condition in a selection construct may be a compound condition. A compound condition takes the form of a logical expression"}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (age "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"12"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" age "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"16"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Student Fare - no id required\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (age "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"15"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" age "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Student Fare - id is required\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (age "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"13"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Child ride for free!\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (age "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"65"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Senior Fare - id is required\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Adult Fare\\n"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsx)(s.h5,{id:"case-by-case",children:"Case-by-Case"}),"\n",(0,i.jsx)(s.p,{children:'The "switch" structure in programming checks a condition, which can be simple or complex, and matches it with different fixed values or results. Here is how it looks:'}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"switch"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (question)"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" choice1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" something"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"break"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" choice2"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" something "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"break"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"       "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" another thing"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsx)(s.p,{children:'"switch" is like a multi-choice quiz. You have a question (condition) and many choices (cases). If your question matches \'choice1\', you will do something. If it matches \'choice2\', you will do something else. If it doesn\'t match any choices, you will do another thing (default). "break" means you stop and move on. If there is no "break", you will also do the things for the next choice.'}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h4,{id:"conditional-expression",children:"Conditional Expression"}),"\n",(0,i.jsx)(s.p,{children:"The conditional expression is a ternary operator that takes three operands. It is used to replace an if else construct that assigns a value to a variable based on a condition. The conditional expression has the following form:"}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsx)(s.code,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"condition "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" expression1 "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" expression2"})]})})}),"\n",(0,i.jsx)(s.p,{children:"First, it checks a condition. If it's true, it uses the first expression, and if it's false, it uses the second. Only the expression that matches the condition is used."}),"\n",(0,i.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Example"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" a "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" max "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (a "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b) "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" a "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b;"})]})]})}),"\n",(0,i.jsx)(s.p,{children:"In this example, (a > b) is the condition. If a is greater than b, the expression a is used, and max becomes a. If a is not greater than b, the expression b is used, and max becomes b. Since 20 is greater than 10, in this case, max would become 20."})]})}var c=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/c/05-logic.mdx",route:"/c/05-logic",timestamp:1703561538e3,title:"05 Logic",headings:a},pageNextRoute:"/c/05-logic"})}},function(e){e.O(0,[673,774,888,179],function(){return e(e.s=3103)}),_N_E=e.O()}]);