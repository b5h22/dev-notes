(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{1781:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/c/06-array",function(){return n(6148)}])},6148:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o},default:function(){return h}});var r=n(5893),i=n(2673),t=n(2643),l={src:"/dev-notes/_next/static/media/c-nullTerminator.dff2ebf7.png",height:156,width:813,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACBAMAAACXuoDeAAAAFVBMVEX+/v79/f79/f38/f38/P38/Pz5+fl/jFthAAAAEklEQVR42mNQZA0QYggNNnUDAAb0AaxR6V9mAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},a={src:"/dev-notes/_next/static/media/c-charString.b4ee4dd3.png",height:271,width:1032,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACBAMAAACXuoDeAAAAGFBMVEX+/v79/f36+/v6+vr29/j29/f29vf09fZ+8bQcAAAAEklEQVR42mNgYFZgZEhNCQ0HAATJAZq3jQA0AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2};let o=[{depth:2,value:"Array",id:"array"},{depth:3,value:"Definition",id:"definition"},{depth:3,value:"Elements",id:"elements"},{depth:3,value:"Initialization",id:"initialization"},{depth:3,value:"Accessing Elements",id:"accessing-elements"},{depth:3,value:"Initializing with Values",id:"initializing-with-values"},{depth:3,value:"Parallel Arrays",id:"parallel-arrays"},{depth:3,value:"Character Strings",id:"character-strings"},{depth:4,value:"Syntax",id:"syntax"}];function c(e){let s=Object.assign({h2:"h2",h3:"h3",p:"p",blockquote:"blockquote",pre:"pre",code:"code",span:"span",img:"img",h4:"h4"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"array",children:"Array"}),"\n",(0,r.jsx)(s.h3,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(s.p,{children:"An array is a type of data structure that can store a fixed-size ordered group of elements of the same type."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"elements",children:"Elements"}),"\n",(0,r.jsx)(s.p,{children:"Each item stored in an array is called an element. These elements are accessed by their numerical index. The first element starts at index 0."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"In C language, the computer doesn't check if we are trying to access a spot in the array that doesn't exist. So, it's up to us, the programmers, to make sure we don't use an index that is outside the size of the array. If our array has 5 spots, we need to make sure we only try to access spots 0 to 4."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsx)(s.p,{children:"To initialize an array, you define the type of elements it will hold, the name of the array(identifier), and the size within square brackets. For example:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// type identifier[size];"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" numbers["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]})]})}),"\n",(0,r.jsx)(s.p,{children:"This means you have an array named 'numbers' that can hold 5 integers."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"accessing-elements",children:"Accessing Elements"}),"\n",(0,r.jsx)(s.p,{children:"Accessing Elements: To access an element in the array, you refer to its index. For example:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"numbers["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,r.jsx)(s.p,{children:"This means you're putting the integer '10' in the first spot in the 'numbers' array."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"initializing-with-values",children:"Initializing with Values"}),"\n",(0,r.jsx)(s.p,{children:"You can initialize an array with values at the same time you declare it. Like this:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// type identifier[ size ] = { value, ... , value };"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" numbers["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]})]})}),"\n",(0,r.jsx)(s.p,{children:"This means you have an array named 'numbers' that holds five integers, and you've put 1 in the first spot, 2 in the second spot, and so on."}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Remember, arrays in C are zero-indexed, which means the first element is at index 0, the second element is at index 1, and so forth. So if you have an array of size 5, the indices will be 0, 1, 2, 3, and 4."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"parallel-arrays",children:"Parallel Arrays"}),"\n",(0,r.jsx)(s.p,{children:"These are two or more arrays where the related data is stored at the same index in each array. For example:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<stdio.h>"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i;"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" sku"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"[]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2156"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4633"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3122"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5611"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"double"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" price"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"[]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2.34"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"7.89"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"6.56"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"9.32"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" n    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"  SKU Price\\n"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (i "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; i "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" n; i"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    {"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%5d"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" $"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%.2lf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'\\n"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:" sku[i]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:" price[i])"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(s.p,{children:"Output of the above program:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  SKU Price"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2156"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" $"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2.34"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4633"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" $"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"7.89"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3122"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" $"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"6.56"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5611"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" $"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"9.32"})]})]})}),"\n",(0,r.jsx)(s.p,{children:"The sku[] array holds the key data, while the price[] array holds the value data. Note how the elements of parallel arrays with the same index make up the fields of a single record of information."}),"\n",(0,r.jsx)(s.p,{children:"Parallel arrays are simple to process. For example, once we find the index of the element that matches the specified sku, we also have the index of the unit price for that element."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"character-strings",children:"Character Strings"}),"\n",(0,r.jsxs)(s.p,{children:["A string in programming is a sequence of characters, stored in an array, with an extra special character at the end, called the null terminator, represented as '\\0'.\n",(0,r.jsx)(s.img,{alt:"c-nullTerminator",placeholder:"blur",src:l}),"\nThis null terminator indicates the end of the string. It's value is always 0, meaning all its bits are zeros.\n",(0,r.jsx)(s.img,{alt:"c-charString",placeholder:"blur",src:a}),"\nThe position of this null terminator also tells us the length of the string. However, the total memory used by the string includes an extra space for this null terminator, so it's one more than the number of actual characters in the string."]}),"\n",(0,r.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(s.p,{children:"We need to allocate memory for one additional byte to provide room for the null terminator:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"c","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" NCHAR "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"17"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"char"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" name[NCHAR "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"My Name is Arnold"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})]})}),"\n",(0,r.jsx)(s.p,{children:'We use the "%s" conversion specifier and the address of the start of the character string to send its contents to standard output:'}),"\n",(0,r.jsx)(s.pre,{"data-language":"c","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"c","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"printf"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"%s"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"'}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" name);"})]})})})]})}var h=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/c/06-array.mdx",route:"/c/06-array",timestamp:1704685641e3,title:"06 Array",headings:o},pageNextRoute:"/c/06-array"})}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=1781)}),_N_E=e.O()}]);