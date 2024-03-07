(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[581],{5370:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/283-move-zeroes",function(){return l(4258)}])},4258:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return i}});var n=l(5893),o=l(2673),r=l(2643);let i=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"My Solution #1",id:"my-solution-1"},{depth:2,value:"My Solution #2",id:"my-solution-2"}];function t(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li"},(0,r.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"283. Move Zeroes"}),"\n",(0,n.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(e.p,{children:["Given an integer array ",(0,n.jsx)(e.code,{children:"nums"}),", move all ",(0,n.jsx)(e.code,{children:"0"}),"'s to the end of it while maintaining the relative order of the non-zero elements."]}),"\n",(0,n.jsx)(e.p,{children:"Note that you must do this in-place without making a copy of the array."}),"\n",(0,n.jsx)(e.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,n.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: nums = [0,1,0,3,12]"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: [1,3,12,0,0]"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,n.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: nums = [0]"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: [0]"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= nums.length <= 10^4"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"2^31 <= nums[i] <= 2^31 - 1"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"my-solution-1",children:"My Solution #1"}),"\n",(0,n.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Not quite accurate solution"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// need to use two pointers to solve this problem"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Also bigO is O(n^2) (splice method is O(n) and the for loop is O(n))"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"moveZeroes"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(nums) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"--"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(nums[i] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".splice"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(i"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".push"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "})]})}),"\n",(0,n.jsx)(e.h2,{id:"my-solution-2",children:"My Solution #2"}),"\n",(0,n.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// More accurate solution using two pointers"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"moveZeroes"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (nums) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" j "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (j "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if the first pointer is not 0, move to the next element"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(nums[i] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") { "})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      i"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      j"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if the first pointer is 0 and the second pointer is not 0, swap the elements"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(nums[j] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"!=="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        [nums[i]"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nums[j]] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" [nums[j]"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nums[i]];"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        i"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if the second pointer is 0, move to the next element"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      j"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "})]})})]})}e.default=(0,o.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/leetcode/283-move-zeroes.mdx",route:"/leetcode/283-move-zeroes",timestamp:1709778619e3,title:"283. Move Zeroes",headings:i},pageNextRoute:"/leetcode/283-move-zeroes"})}},function(s){s.O(0,[673,888,774,179],function(){return s(s.s=5370)}),_N_E=s.O()}]);