(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{5729:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/1679-max-number-of-k-sum-pairs",function(){return l(437)}])},437:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return i}});var n=l(5893),r=l(2673),o=l(2643);let i=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"My Solution",id:"my-solution"},{depth:2,value:"Solution from others",id:"solution-from-others"}];function t(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li"},(0,o.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"1679. Max Number of K-Sum Pairs"}),"\n",(0,n.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(e.p,{children:["You are given an integer array ",(0,n.jsx)(e.code,{children:"nums"})," and an integer ",(0,n.jsx)(e.code,{children:"k"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["In one operation, you can pick two numbers from the array whose sum equals ",(0,n.jsx)(e.code,{children:"k"})," and remove them from the array."]}),"\n",(0,n.jsx)(e.p,{children:"Return the maximum number of operations you can perform on the array."}),"\n",(0,n.jsx)(e.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,n.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: nums = [1,2,3,4], k = 5"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 2"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: Starting with nums = [1,2,3,4]:"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  - Remove numbers 1 and 4, then nums = [2,3]"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  - Remove numbers 2 and 3, then nums = []"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  There are no more pairs that sum up to 5, hence a total of 2 operations."})})]})}),"\n",(0,n.jsx)(e.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,n.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: nums = [3,1,3,4,3], k = 6"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 1"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: Starting with nums = [3,1,3,4,3]:"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  - Remove the first two 3's, then nums = [1,4,3]"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  There are no more pairs that sum up to 6, hence a total of 1 operation."})})]})}),"\n",(0,n.jsx)(e.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= nums[i] <= 10^9"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.code,{children:"1 <= k <= 10^9"})}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"my-solution",children:"My Solution"}),"\n",(0,n.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// using Two Pointers"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"maxOperations"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".sort"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"((a"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" b) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" a "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" b);"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" left "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" right "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(left "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" right) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (nums[left] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nums[right] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      count"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      left"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      right"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"--"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (nums[left] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nums[right] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      left"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      right"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"--"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" count;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "})]})}),"\n",(0,n.jsx)(e.h2,{id:"solution-from-others",children:"Solution from others"}),"\n",(0,n.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// using Hash Map"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"maxOperations"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (nums"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" map "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Map"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// A hashmap to store the frequency of each number"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"of"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" nums) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" complement "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" k "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num; "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// Calculate the complement of the current number that would sum up to k"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// If the complement is in the hashmap and has a frequency greater than 0,"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// it means we've found a pair. So, increase the count and decrease the frequency of the complement."})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(complement) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      count"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".set"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(complement"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(complement) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// If the complement is not present, add or update the current number's frequency in the hashmap."})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".set"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(num"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(num) "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" count;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:" "})]})})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/leetcode/1679-max-number-of-k-sum-pairs.mdx",route:"/leetcode/1679-max-number-of-k-sum-pairs",title:"1679. Max Number of K-Sum Pairs",headings:i},pageNextRoute:"/leetcode/1679-max-number-of-k-sum-pairs"})}},function(s){s.O(0,[673,888,774,179],function(){return s(s.s=5729)}),_N_E=s.O()}]);