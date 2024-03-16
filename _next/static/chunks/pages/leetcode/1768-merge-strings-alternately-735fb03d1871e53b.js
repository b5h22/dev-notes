(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{7680:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/1768-merge-strings-alternately",function(){return l(1002)}])},1002:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return i}});var n=l(5893),r=l(2673),o=l(2643);let i=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1",id:"example-1"},{depth:3,value:"Example 2",id:"example-2"},{depth:3,value:"Example 3",id:"example-3"},{depth:3,value:"Constraints",id:"constraints"},{depth:2,value:"My Solution",id:"my-solution"}];function t(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,o.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"1768. Merge Strings Alternately"}),"\n",(0,n.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(e.p,{children:"You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string."}),"\n",(0,n.jsx)(e.p,{children:"Return the merged string."}),"\n",(0,n.jsx)(e.h3,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: word1 = "abc", word2 = "pqr"'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Output: "apbqcr"'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: The merged string will be merged as so:"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  word1:  a   b   c"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  word2:    p   q   r"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  merged: a p b q c r"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: word1 = "ab", word2 = "pqrs"'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Output: "apbqrs"'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Explanation: Notice that as word2 is longer, "rs" is appended to the end.'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  word1:  a   b "})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  word2:    p   q   r   s"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  merged: a p b q   r   s"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"example-3",children:"Example 3"}),"\n",(0,n.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: word1 = "abcd", word2 = "pq"'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Output: "apbqcd"'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:'  Explanation: Notice that as word1 is longer, "cd" is appended to the end.'})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  word1:  a   b   c   d"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  word2:    p   q "})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  merged: a p b q c   d"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"constraints",children:"Constraints"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= word1.length, word2.length <= 100"})}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"word1"})," and ",(0,n.jsx)(e.code,{children:"word2"})," consist of lowercase English letters."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"my-solution",children:"My Solution"}),"\n",(0,n.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"{string}"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" word1"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"{string}"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" word2"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"{string}"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:" */"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"mergeAlternately"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(word1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" word2) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"''"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Loop through the length of the shortest word"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"word1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"word2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    result "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" word1[i] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" word2[i];"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// If there are any letters left in either word, add them to the result"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"word1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    result "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"word1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".slice"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(i);"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"word2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    result "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"word2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".slice"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(i);"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "})]})})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/leetcode/1768-merge-strings-alternately.mdx",route:"/leetcode/1768-merge-strings-alternately",timestamp:1710559564e3,title:"1768. Merge Strings Alternately",headings:i},pageNextRoute:"/leetcode/1768-merge-strings-alternately"})}},function(s){s.O(0,[673,888,774,179],function(){return s(s.s=7680)}),_N_E=s.O()}]);