(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7929],{5729:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/1679-max-number-of-k-sum-pairs",function(){return n(437)}])},437:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var r=n(5893),o=n(2673),i=n(5818),l=n(2337);n(9488);var t=n(2643);let a=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"My Solution",id:"my-solution"},{depth:2,value:"Solution from others",id:"solution-from-others"}];function c(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"1679. Max Number of K-Sum Pairs"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["You are given an integer array ",(0,r.jsx)(s.code,{children:"nums"})," and an integer ",(0,r.jsx)(s.code,{children:"k"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["In one operation, you can pick two numbers from the array whose sum equals ",(0,r.jsx)(s.code,{children:"k"})," and remove them from the array."]}),"\n",(0,r.jsx)(s.p,{children:"Return the maximum number of operations you can perform on the array."}),"\n",(0,r.jsx)(s.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: nums = [1,2,3,4], k = 5"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 2"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: Starting with nums = [1,2,3,4]:"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  - Remove numbers 1 and 4, then nums = [2,3]"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  - Remove numbers 2 and 3, then nums = []"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  There are no more pairs that sum up to 5, hence a total of 2 operations."})})]})}),"\n",(0,r.jsx)(s.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: nums = [3,1,3,4,3], k = 6"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 1"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: Starting with nums = [3,1,3,4,3]:"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  - Remove the first two 3's, then nums = [1,4,3]"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  There are no more pairs that sum up to 6, hence a total of 1 operation."})})]})}),"\n",(0,r.jsx)(s.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"1 <= nums.length <= 10^5"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"1 <= nums[i] <= 10^9"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"1 <= k <= 10^9"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"my-solution",children:"My Solution"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// using Two Pointers"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"maxOperations"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (nums"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".sort"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((a"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" a "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" left "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" right "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nums"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(left "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" right) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (nums[left] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" nums[right] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      count"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      left"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      right"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"--"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (nums[left] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" nums[right] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      left"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      right"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"--"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" count;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,r.jsx)(s.h2,{id:"solution-from-others",children:"Solution from others"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// using Hash Map"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"{number[]}"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" nums"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"{number}"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" k"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"{number}"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:" */"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"maxOperations"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (nums"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" k) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" map "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Map"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// A hashmap to store the frequency of each number"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"of"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" nums) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" complement "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" k "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" num; "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Calculate the complement of the current number that would sum up to k"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// If the complement is in the hashmap and has a frequency greater than 0,"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// it means we've found a pair. So, increase the count and decrease the frequency of the complement."})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(complement) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      count"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(complement"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(complement) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// If the complement is not present, add or update the current number's frequency in the hashmap."})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(num"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"map"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(num) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" count;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "})]})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/leetcode/1679-max-number-of-k-sum-pairs.mdx",route:"/leetcode/1679-max-number-of-k-sum-pairs",timestamp:1710559564e3,pageMap:[{kind:"Meta",data:{index:"Introduction",c:"C",cpp:"C++",react:"React","js-challenge":"JS-Challenge",leetcode:"Leetcode","error-notes":"Error Notes",about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"c",route:"/c",children:[{kind:"MdxPage",name:"01-basics",route:"/c/01-basics"},{kind:"MdxPage",name:"02-types",route:"/c/02-types"},{kind:"MdxPage",name:"03-simple-calculation",route:"/c/03-simple-calculation"},{kind:"MdxPage",name:"04-expression",route:"/c/04-expression"},{kind:"MdxPage",name:"05-logic",route:"/c/05-logic"},{kind:"MdxPage",name:"06-array",route:"/c/06-array"},{kind:"MdxPage",name:"07-structures",route:"/c/07-structures"},{kind:"MdxPage",name:"08-function",route:"/c/08-function"},{kind:"MdxPage",name:"09-pointer",route:"/c/09-pointer"},{kind:"Meta",data:{"01-basics":"01-Basics","02-types":"02-Types","03-simple-calculation":"03-Simple Calculation","04-expression":"04-Expression","05-logic":"05-Logic","06-array":"06-Array","07-structures":"07-Structures","08-function":"08-Function","09-pointer":"09-Pointer"}}]},{kind:"Folder",name:"cpp",route:"/cpp",children:[{kind:"MdxPage",name:"01-basics",route:"/cpp/01-basics"},{kind:"MdxPage",name:"02-foundations",route:"/cpp/02-foundations"},{kind:"MdxPage",name:"03-dynamic-memory",route:"/cpp/03-dynamic-memory"},{kind:"MdxPage",name:"04-encapsulation",route:"/cpp/04-encapsulation"},{kind:"MdxPage",name:"05-inheritance",route:"/cpp/05-inheritance"},{kind:"MdxPage",name:"06-polymorphism",route:"/cpp/06-polymorphism"},{kind:"Meta",data:{"01-basics":"01-Basics","02-foundations":"02-Foundations","03-dynamic-memory":"03-Dynamic Memory","04-encapsulation":"04-Encapsulation","05-inheritance":"05-Inheritance","06-polymorphism":"06 Polymorphism"}}]},{kind:"Folder",name:"error-notes",route:"/error-notes",children:[{kind:"Meta",data:{c:"C",cpp:"C++"}},{kind:"Folder",name:"c",route:"/error-notes/c",children:[{kind:"MdxPage",name:"01-scanf",route:"/error-notes/c/01-scanf"},{kind:"Meta",data:{"01-scanf":"01-scanf"}}]},{kind:"Folder",name:"cpp",route:"/error-notes/cpp",children:[{kind:"MdxPage",name:"01-Wsign-compare",route:"/error-notes/cpp/01-Wsign-compare"},{kind:"MdxPage",name:"02-Wreorder-warning",route:"/error-notes/cpp/02-Wreorder-warning"},{kind:"MdxPage",name:"03-segmentation-fault",route:"/error-notes/cpp/03-segmentation-fault"},{kind:"MdxPage",name:"04-memory-leak",route:"/error-notes/cpp/04-memory-leak"},{kind:"MdxPage",name:"05-linker-error",route:"/error-notes/cpp/05-linker-error"},{kind:"Meta",data:{"01-Wsign-compare":"01-Wsign-compare","02-Wreorder-warning":"02-Wreorder-warning","03-segmentation-fault":"03-segmentation-fault","04-memory-leak":"04-memory-leak","05-linker-error":"05-linker-error"}}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"js-challenge",route:"/js-challenge",children:[{kind:"MdxPage",name:"01-addition-of-fractions",route:"/js-challenge/01-addition-of-fractions"},{kind:"Meta",data:{"01-addition-of-fractions":"01-Addition of Fractions"}}]},{kind:"Folder",name:"leetcode",route:"/leetcode",children:[{kind:"MdxPage",name:"1004-max-consecutive-ones-iii",route:"/leetcode/1004-max-consecutive-ones-iii"},{kind:"MdxPage",name:"1071-greatest-common-divisor-of-strings",route:"/leetcode/1071-greatest-common-divisor-of-strings"},{kind:"MdxPage",name:"11-container-with-most-water",route:"/leetcode/11-container-with-most-water"},{kind:"MdxPage",name:"1431-kids-with-the-greatest-number-of-candies",route:"/leetcode/1431-kids-with-the-greatest-number-of-candies"},{kind:"MdxPage",name:"1456-maximum-number-of-vowels-in-a-substring-of-given-length",route:"/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length"},{kind:"MdxPage",name:"1493-longest-subarray-of-1s-after-deleting-one-element",route:"/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element"},{kind:"MdxPage",name:"151-reverse-words-in-a-string",route:"/leetcode/151-reverse-words-in-a-string"},{kind:"MdxPage",name:"1679-max-number-of-k-sum-pairs",route:"/leetcode/1679-max-number-of-k-sum-pairs"},{kind:"MdxPage",name:"1768-merge-strings-alternately",route:"/leetcode/1768-merge-strings-alternately"},{kind:"MdxPage",name:"238-product-of-array-except-self",route:"/leetcode/238-product-of-array-except-self"},{kind:"MdxPage",name:"283-move-zeroes",route:"/leetcode/283-move-zeroes"},{kind:"MdxPage",name:"334-increasing-triplet-subsequence",route:"/leetcode/334-increasing-triplet-subsequence"},{kind:"MdxPage",name:"345-reverse-vowels-of-a-string",route:"/leetcode/345-reverse-vowels-of-a-string"},{kind:"MdxPage",name:"392-is-subsequence",route:"/leetcode/392-is-subsequence"},{kind:"MdxPage",name:"443-string-compression",route:"/leetcode/443-string-compression"},{kind:"MdxPage",name:"605-can-place-flowers",route:"/leetcode/605-can-place-flowers"},{kind:"MdxPage",name:"643-maximum-average-subarray-i",route:"/leetcode/643-maximum-average-subarray-i"},{kind:"Meta",data:{"11-container-with-most-water":"11. Container With Most Water","151-reverse-words-in-a-string":"151. Reverse Words in a String","238-product-of-array-except-self":"238. Product of Array Except Self","283-move-zeroes":"283. Move Zeroes","334-increasing-triplet-subsequence":"334. Increasing Triplet Subsequence","345-reverse-vowels-of-a-string":"345. Reverse Vowels of a String","392-is-subsequence":"392. Is Subsequence","443-string-compression":"443. String Compression","605-can-place-flowers":"605. Can Place Flowers","643-maximum-average-subarray-i":"643. Maximum Average Subarray I","1004-max-consecutive-ones-iii":"1004. Max Consecutive Ones III","1071-greatest-common-divisor-of-strings":"1071. Greatest Common Divisor of Strings","1431-kids-with-the-greatest-number-of-candies":"1431. Kids With the Greatest Number of Candies","1456-maximum-number-of-vowels-in-a-substring-of-given-length":"1456. Maximum Number of Vowels in a Substring of Given Length","1493-longest-subarray-of-1s-after-deleting-one-element":"1493. Longest Subarray of 1's After Deleting One Element","1679-max-number-of-k-sum-pairs":"1679. Max Number of K-Sum Pairs","1768-merge-strings-alternately":"1768. Merge Strings Alternately"}}]},{kind:"Folder",name:"react",route:"/react",children:[{kind:"MdxPage",name:"01-attribute-conversion",route:"/react/01-attribute-conversion"},{kind:"Meta",data:{"01-attribute-conversion":"01-Attribute Conversion"}}]}],flexsearch:{codeblocks:!0},title:"1679. Max Number of K-Sum Pairs",headings:a},pageNextRoute:"/leetcode/1679-max-number-of-k-sum-pairs",nextraLayout:i.ZP,themeConfig:l.Z};s.default=(0,o.j)(h)},2337:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var r=n(5893);n(7294);var o=n(1163),i={logo:(0,r.jsx)("span",{children:"b5h22's Dev Notes"}),project:{link:"https://github.com/b5h22/dev-notes"},docsRepositoryBase:"https://github.com/b5h22/dev-notes/tree/main",footer:{text:"\xa9 2023 - b5h22 Powered by Nextra, Github Pages"},feedback:{content:()=>(0,r.jsx)(r.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,o.useRouter)(),s={description:"The notes from my journey in learning software development."};return"/"!==e?s.titleTemplate="%s – Dev notes":s.titleTemplate="%s",s},sidebar:{defaultMenuCollapseLevel:1}}}},function(e){e.O(0,[2802,2888,9774,179],function(){return e(e.s=5729)}),_N_E=e.O()}]);