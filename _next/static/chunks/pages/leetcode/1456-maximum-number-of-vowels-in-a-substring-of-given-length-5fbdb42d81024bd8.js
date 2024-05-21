(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{5229:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length",function(){return s(5856)}])},5856:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return a}});var r=s(5893),o=s(2673),i=s(5818),t=s(2337);s(9488);var l=s(2643);let a=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Example 3:",id:"example-3"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"My Solution",id:"my-solution"},{depth:2,value:"Explanation",id:"explanation"}];function c(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li",ol:"ol",blockquote:"blockquote"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"1456. Maximum Number of Vowels in a Substring of Given Length"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Given a string ",(0,r.jsx)(n.code,{children:"s"})," and an integer ",(0,r.jsx)(n.code,{children:"k"}),", return the maximum number of vowel letters in any substring of ",(0,r.jsx)(n.code,{children:"s"})," with length ",(0,r.jsx)(n.code,{children:"k"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vowel letters in English are ",(0,r.jsx)(n.code,{children:"'a'"}),", ",(0,r.jsx)(n.code,{children:"'e'"}),", ",(0,r.jsx)(n.code,{children:"'i'"}),", ",(0,r.jsx)(n.code,{children:"'o'"}),", and ",(0,r.jsx)(n.code,{children:"'u'"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,r.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: s = "abciiidef", k = 3'})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 3"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'  Explanation: The substring "iii" contains 3 vowel letters.'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,r.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: s = "aeiou", k = 2'})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 2"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: Any substring of length 2 contains 2 vowels."})})]})}),"\n",(0,r.jsx)(n.h3,{id:"example-3",children:"Example 3:"}),"\n",(0,r.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: s = "leetcode", k = 3'})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 2"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:'  Explanation: "lee", "eet" and "ode" contain 2 vowels.'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= s.length <= 10^5"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"s"})," consists of lowercase English letters."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"1 <= k <= s.length"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"my-solution",children:"My Solution"}),"\n",(0,r.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsx)(n.span,{className:"line",children:" "}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// using sliding window"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"{string}"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" s"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"{number}"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" k"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"{number}"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" */"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"maxVowels"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(s"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" vowels "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'a'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'e'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'i'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'o'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'u'"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" maxCount "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"; i "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" k; i"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"vowels"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".includes"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(s[i])) count"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    maxCount "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" count;"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" k; i "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"s"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"; i"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"vowels"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".includes"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(s[i"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"k])) count"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"--"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"vowels"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".includes"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(s[i])) count"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        maxCount "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Math"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".max"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(maxCount"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" count);"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" maxCount;"})]}),"\n",(0,r.jsx)(n.span,{className:"line",children:(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(n.span,{className:"line",children:" "})]})}),"\n",(0,r.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Purpose"}),": The goal is to find the maximum number of vowels in any substring of length 'k' from the given string 's'."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Vowel List"}),": First, make a list of vowels ('a', 'e', 'i', 'o', 'u')."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Start Counting"}),": Initialize two counters: 'count' for the current number of vowels, and 'maxCount' for the highest number of vowels found."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"First Window"}),": Look at the first substring of length 'k'. For each character, if it's a vowel (in our list), increase 'count' by 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Set Initial Max"}),": After checking the first 'k' characters, set 'maxCount' to the value of 'count'."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Slide the Window"}),": Now, start sliding the window one character at a time, from the kth character to the end of the string 's'."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Subtract"}),": If the character leaving the window (on the left) is a vowel, reduce 'count' by 1."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Add"}),": If the new character entering the window (on the right) is a vowel, increase 'count' by 1."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Update Max"}),": After each slide, update 'maxCount' if 'count' is higher than the current 'maxCount'."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Result"}),": Once slid through the entire string, 'maxCount' will hold the maximum number of vowels we could find in any substring of length 'k'. Return 'maxCount'."]}),"\n"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length.mdx",route:"/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length",timestamp:1710559564e3,pageMap:[{kind:"Meta",data:{index:"Introduction",c:"C",cpp:"C++",react:"React","js-challenge":"JS-Challenge",leetcode:"Leetcode","error-notes":"Error Notes",about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"c",route:"/c",children:[{kind:"MdxPage",name:"01-basics",route:"/c/01-basics"},{kind:"MdxPage",name:"02-types",route:"/c/02-types"},{kind:"MdxPage",name:"03-simple-calculation",route:"/c/03-simple-calculation"},{kind:"MdxPage",name:"04-expression",route:"/c/04-expression"},{kind:"MdxPage",name:"05-logic",route:"/c/05-logic"},{kind:"MdxPage",name:"06-array",route:"/c/06-array"},{kind:"MdxPage",name:"07-structures",route:"/c/07-structures"},{kind:"MdxPage",name:"08-function",route:"/c/08-function"},{kind:"MdxPage",name:"09-pointer",route:"/c/09-pointer"},{kind:"Meta",data:{"01-basics":"01-Basics","02-types":"02-Types","03-simple-calculation":"03-Simple Calculation","04-expression":"04-Expression","05-logic":"05-Logic","06-array":"06-Array","07-structures":"07-Structures","08-function":"08-Function","09-pointer":"09-Pointer"}}]},{kind:"Folder",name:"cpp",route:"/cpp",children:[{kind:"MdxPage",name:"01-basics",route:"/cpp/01-basics"},{kind:"MdxPage",name:"02-foundations",route:"/cpp/02-foundations"},{kind:"MdxPage",name:"03-dynamic-memory",route:"/cpp/03-dynamic-memory"},{kind:"MdxPage",name:"04-encapsulation",route:"/cpp/04-encapsulation"},{kind:"MdxPage",name:"05-inheritance",route:"/cpp/05-inheritance"},{kind:"MdxPage",name:"06-polymorphism",route:"/cpp/06-polymorphism"},{kind:"Meta",data:{"01-basics":"01-Basics","02-foundations":"02-Foundations","03-dynamic-memory":"03-Dynamic Memory","04-encapsulation":"04-Encapsulation","05-inheritance":"05-Inheritance","06-polymorphism":"06 Polymorphism"}}]},{kind:"Folder",name:"error-notes",route:"/error-notes",children:[{kind:"Meta",data:{c:"C",cpp:"C++"}},{kind:"Folder",name:"c",route:"/error-notes/c",children:[{kind:"MdxPage",name:"01-scanf",route:"/error-notes/c/01-scanf"},{kind:"Meta",data:{"01-scanf":"01-scanf"}}]},{kind:"Folder",name:"cpp",route:"/error-notes/cpp",children:[{kind:"MdxPage",name:"01-Wsign-compare",route:"/error-notes/cpp/01-Wsign-compare"},{kind:"MdxPage",name:"02-Wreorder-warning",route:"/error-notes/cpp/02-Wreorder-warning"},{kind:"MdxPage",name:"03-segmentation-fault",route:"/error-notes/cpp/03-segmentation-fault"},{kind:"MdxPage",name:"04-memory-leak",route:"/error-notes/cpp/04-memory-leak"},{kind:"MdxPage",name:"05-linker-error",route:"/error-notes/cpp/05-linker-error"},{kind:"Meta",data:{"01-Wsign-compare":"01-Wsign-compare","02-Wreorder-warning":"02-Wreorder-warning","03-segmentation-fault":"03-segmentation-fault","04-memory-leak":"04-memory-leak","05-linker-error":"05-linker-error"}}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"js-challenge",route:"/js-challenge",children:[{kind:"MdxPage",name:"01-addition-of-fractions",route:"/js-challenge/01-addition-of-fractions"},{kind:"Meta",data:{"01-addition-of-fractions":"01-Addition of Fractions"}}]},{kind:"Folder",name:"leetcode",route:"/leetcode",children:[{kind:"MdxPage",name:"1004-max-consecutive-ones-iii",route:"/leetcode/1004-max-consecutive-ones-iii"},{kind:"MdxPage",name:"1071-greatest-common-divisor-of-strings",route:"/leetcode/1071-greatest-common-divisor-of-strings"},{kind:"MdxPage",name:"11-container-with-most-water",route:"/leetcode/11-container-with-most-water"},{kind:"MdxPage",name:"1431-kids-with-the-greatest-number-of-candies",route:"/leetcode/1431-kids-with-the-greatest-number-of-candies"},{kind:"MdxPage",name:"1456-maximum-number-of-vowels-in-a-substring-of-given-length",route:"/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length"},{kind:"MdxPage",name:"1493-longest-subarray-of-1s-after-deleting-one-element",route:"/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element"},{kind:"MdxPage",name:"151-reverse-words-in-a-string",route:"/leetcode/151-reverse-words-in-a-string"},{kind:"MdxPage",name:"1679-max-number-of-k-sum-pairs",route:"/leetcode/1679-max-number-of-k-sum-pairs"},{kind:"MdxPage",name:"1768-merge-strings-alternately",route:"/leetcode/1768-merge-strings-alternately"},{kind:"MdxPage",name:"238-product-of-array-except-self",route:"/leetcode/238-product-of-array-except-self"},{kind:"MdxPage",name:"283-move-zeroes",route:"/leetcode/283-move-zeroes"},{kind:"MdxPage",name:"334-increasing-triplet-subsequence",route:"/leetcode/334-increasing-triplet-subsequence"},{kind:"MdxPage",name:"345-reverse-vowels-of-a-string",route:"/leetcode/345-reverse-vowels-of-a-string"},{kind:"MdxPage",name:"392-is-subsequence",route:"/leetcode/392-is-subsequence"},{kind:"MdxPage",name:"443-string-compression",route:"/leetcode/443-string-compression"},{kind:"MdxPage",name:"605-can-place-flowers",route:"/leetcode/605-can-place-flowers"},{kind:"MdxPage",name:"643-maximum-average-subarray-i",route:"/leetcode/643-maximum-average-subarray-i"},{kind:"Meta",data:{"11-container-with-most-water":"11. Container With Most Water","151-reverse-words-in-a-string":"151. Reverse Words in a String","238-product-of-array-except-self":"238. Product of Array Except Self","283-move-zeroes":"283. Move Zeroes","334-increasing-triplet-subsequence":"334. Increasing Triplet Subsequence","345-reverse-vowels-of-a-string":"345. Reverse Vowels of a String","392-is-subsequence":"392. Is Subsequence","443-string-compression":"443. String Compression","605-can-place-flowers":"605. Can Place Flowers","643-maximum-average-subarray-i":"643. Maximum Average Subarray I","1004-max-consecutive-ones-iii":"1004. Max Consecutive Ones III","1071-greatest-common-divisor-of-strings":"1071. Greatest Common Divisor of Strings","1431-kids-with-the-greatest-number-of-candies":"1431. Kids With the Greatest Number of Candies","1456-maximum-number-of-vowels-in-a-substring-of-given-length":"1456. Maximum Number of Vowels in a Substring of Given Length","1493-longest-subarray-of-1s-after-deleting-one-element":"1493. Longest Subarray of 1's After Deleting One Element","1679-max-number-of-k-sum-pairs":"1679. Max Number of K-Sum Pairs","1768-merge-strings-alternately":"1768. Merge Strings Alternately"}}]},{kind:"Folder",name:"react",route:"/react",children:[{kind:"MdxPage",name:"01-attribute-conversion",route:"/react/01-attribute-conversion"},{kind:"Meta",data:{"01-attribute-conversion":"01-Attribute Conversion"}}]}],flexsearch:{codeblocks:!0},title:"1456. Maximum Number of Vowels in a Substring of Given Length",headings:a},pageNextRoute:"/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length",nextraLayout:i.ZP,themeConfig:t.Z};n.default=(0,o.j)(d)},2337:function(e,n,s){"use strict";s.d(n,{Z:function(){return i}});var r=s(5893);s(7294);var o=s(1163),i={logo:(0,r.jsx)("span",{children:"b5h22's Dev Notes"}),project:{link:"https://github.com/b5h22/dev-notes"},docsRepositoryBase:"https://github.com/b5h22/dev-notes/tree/main",footer:{text:"\xa9 2023 - b5h22 Powered by Nextra, Github Pages"},feedback:{content:()=>(0,r.jsx)(r.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,o.useRouter)(),n={description:"The notes from my journey in learning software development."};return"/"!==e?n.titleTemplate="%s – Dev notes":n.titleTemplate="%s",n},sidebar:{defaultMenuCollapseLevel:1}}}},function(e){e.O(0,[802,888,774,179],function(){return e(e.s=5229)}),_N_E=e.O()}]);