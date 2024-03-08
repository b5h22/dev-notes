(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{8797:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/392-is-subsequence",function(){return n(6046)}])},6046:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o}});var l=n(5893),r=n(2673),i=n(2643);let o=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"My Solution",id:"my-solution"}];function t(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li"},(0,i.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"392. Is Subsequence"}),"\n",(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["Given two strings ",(0,l.jsx)(s.code,{children:"s"})," and ",(0,l.jsx)(s.code,{children:"t"}),", return ",(0,l.jsx)(s.code,{children:"true"})," if ",(0,l.jsx)(s.code,{children:"s"})," is a subsequence of ",(0,l.jsx)(s.code,{children:"t"}),", or ",(0,l.jsx)(s.code,{children:"false"})," otherwise."]}),"\n",(0,l.jsxs)(s.p,{children:["A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., ",(0,l.jsx)(s.code,{children:'"ace"'})," is a subsequence of ",(0,l.jsx)(s.code,{children:'"abcde"'})," while ",(0,l.jsx)(s.code,{children:'"aec"'})," is not)."]}),"\n",(0,l.jsx)(s.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,l.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: s = "abc", t = "ahbgdc"'})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: true"})})]})}),"\n",(0,l.jsx)(s.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,l.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: s = "axc", t = "ahbgdc"'})}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: false"})})]})}),"\n",(0,l.jsx)(s.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"0 <= s.length <= 100"}),"\n-",(0,l.jsx)(s.code,{children:" 0 <= t.length <= 10^4"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"s"})," and ",(0,l.jsx)(s.code,{children:"t"})," consist only of lowercase English letters."]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"my-solution",children:"My Solution"}),"\n",(0,l.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Solution using Two pointers"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"isSubsequence"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (s"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" t) {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" j "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(i "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"s"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" j "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"t"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(s[i] "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" t[j]) i"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    j"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"s"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "})]})})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/leetcode/392-is-subsequence.mdx",route:"/leetcode/392-is-subsequence",title:"392. Is Subsequence",headings:o},pageNextRoute:"/leetcode/392-is-subsequence"})}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=8797)}),_N_E=e.O()}]);