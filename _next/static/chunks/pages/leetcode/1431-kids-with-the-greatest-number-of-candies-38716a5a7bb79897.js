(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7896],{2373:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/1431-kids-with-the-greatest-number-of-candies",function(){return s(9043)}])},9043:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return l}});var a=s(5893),r=s(2673),i=s(5818),t=s(2337);s(9488);var o=s(2643);let l=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"My Solution",id:"my-solution"},{depth:2,value:"Explanation",id:"explanation"}];function c(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li",ol:"ol"},(0,o.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"1431. Kids With the Greatest Number of Candies"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["There are ",(0,a.jsx)(n.code,{children:"n"})," kids with candies. You are given an integer array ",(0,a.jsx)(n.code,{children:"candies"}),", where each ",(0,a.jsx)(n.code,{children:"candies[i]"})," represents the number of candies the ",(0,a.jsx)(n.code,{children:"ith"})," kid has, and an integer ",(0,a.jsx)(n.code,{children:"extraCandies"}),", denoting the number of extra candies that you have."]}),"\n",(0,a.jsxs)(n.p,{children:["Return a boolean array ",(0,a.jsx)(n.code,{children:"result"})," of length ",(0,a.jsx)(n.code,{children:"n"}),", where ",(0,a.jsx)(n.code,{children:"result[i]"})," is ",(0,a.jsx)(n.code,{children:"true"})," if, after giving the ",(0,a.jsx)(n.code,{children:"ith"})," kid all the ",(0,a.jsx)(n.code,{children:"extraCandies"}),", they will have the greatest number of candies among all the kids, or ",(0,a.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,a.jsx)(n.p,{children:"Note that multiple kids can have the greatest number of candies."}),"\n",(0,a.jsx)(n.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: candies = [2,3,5,1,3], extraCandies = 3"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: [true,true,true,false,true] "})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: If you give all extraCandies to:"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids."})})]})}),"\n",(0,a.jsx)(n.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: candies = [4,2,1,1,2], extraCandies = 1"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: [true,false,false,false,false] "})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: There is only 1 extra candy."})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy."})})]})}),"\n",(0,a.jsx)(n.p,{children:"Example 3:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: candies = [12,1,12], extraCandies = 10"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: [true,false,true]"})})]})}),"\n",(0,a.jsx)(n.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"n == candies.length"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"2 <= n <= 100"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= candies[i] <= 100"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"1 <= extraCandies <= 50"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"my-solution",children:"My Solution"}),"\n",(0,a.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:" "}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"/**"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"{number[]}"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" candies"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@param"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"{number}"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" extraCandies"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" * "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"@return"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"{boolean[]}"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:" */"})}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"kidsWithCandies"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(candies"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" extraCandies) {"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// find the greatest number of candies"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" greatest "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Math"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".max"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"candies);"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Check if each kid has the greatest number among the kids"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"candies"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".map"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(candy "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" candy "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" extraCandies "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" greatest);"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" result;"})]}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:" "})]})}),"\n",(0,a.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Find Greatest"}),": First, find the highest number of candies any kid has."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Check Each Kid"}),": Look at how many candies each kid has."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Add Extra"}),": Add the extra candies to each kid's current candies."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Compare"}),": Check if, after adding the extra candies, a kid has as many or more candies than the kid with the most candies."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Make a List"}),": Create a list where each entry is either true or false. True means that, with the extra candies, the kid could have the highest number of candies."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Result"}),": Return the list showing which kids could have the most candies with the extra candies added."]}),"\n"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/leetcode/1431-kids-with-the-greatest-number-of-candies.mdx",route:"/leetcode/1431-kids-with-the-greatest-number-of-candies",timestamp:1710559564e3,pageMap:[{kind:"Meta",data:{index:"Introduction",c:"C",cpp:"C++",javascript:"JavaScript",react:"React","js-challenge":"JS-Challenge",leetcode:"Leetcode","error-notes":"Error Notes",about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"c",route:"/c",children:[{kind:"MdxPage",name:"01-basics",route:"/c/01-basics"},{kind:"MdxPage",name:"02-types",route:"/c/02-types"},{kind:"MdxPage",name:"03-simple-calculation",route:"/c/03-simple-calculation"},{kind:"MdxPage",name:"04-expression",route:"/c/04-expression"},{kind:"MdxPage",name:"05-logic",route:"/c/05-logic"},{kind:"MdxPage",name:"06-array",route:"/c/06-array"},{kind:"MdxPage",name:"07-structures",route:"/c/07-structures"},{kind:"MdxPage",name:"08-function",route:"/c/08-function"},{kind:"MdxPage",name:"09-pointer",route:"/c/09-pointer"},{kind:"Meta",data:{"01-basics":"01-Basics","02-types":"02-Types","03-simple-calculation":"03-Simple Calculation","04-expression":"04-Expression","05-logic":"05-Logic","06-array":"06-Array","07-structures":"07-Structures","08-function":"08-Function","09-pointer":"09-Pointer"}}]},{kind:"Folder",name:"cpp",route:"/cpp",children:[{kind:"MdxPage",name:"01-basics",route:"/cpp/01-basics"},{kind:"MdxPage",name:"02-foundations",route:"/cpp/02-foundations"},{kind:"MdxPage",name:"03-dynamic-memory",route:"/cpp/03-dynamic-memory"},{kind:"MdxPage",name:"04-encapsulation",route:"/cpp/04-encapsulation"},{kind:"MdxPage",name:"05-inheritance",route:"/cpp/05-inheritance"},{kind:"MdxPage",name:"06-polymorphism",route:"/cpp/06-polymorphism"},{kind:"Meta",data:{"01-basics":"01-Basics","02-foundations":"02-Foundations","03-dynamic-memory":"03-Dynamic Memory","04-encapsulation":"04-Encapsulation","05-inheritance":"05-Inheritance","06-polymorphism":"06-Polymorphism"}}]},{kind:"Folder",name:"error-notes",route:"/error-notes",children:[{kind:"Folder",name:"C",route:"/error-notes/C",children:[{kind:"MdxPage",name:"01-scanf",route:"/error-notes/C/01-scanf"},{kind:"Meta",data:{"01-scanf":"01-scanf"}}]},{kind:"Meta",data:{C:"C",cpp:"C++"}},{kind:"Folder",name:"cpp",route:"/error-notes/cpp",children:[{kind:"MdxPage",name:"01-Wsign-compare",route:"/error-notes/cpp/01-Wsign-compare"},{kind:"MdxPage",name:"02-Wreorder-warning",route:"/error-notes/cpp/02-Wreorder-warning"},{kind:"MdxPage",name:"03-segmentation-fault",route:"/error-notes/cpp/03-segmentation-fault"},{kind:"MdxPage",name:"04-memory-leak",route:"/error-notes/cpp/04-memory-leak"},{kind:"MdxPage",name:"05-linker-error",route:"/error-notes/cpp/05-linker-error"},{kind:"Meta",data:{"01-Wsign-compare":"01-Wsign-compare","02-Wreorder-warning":"02-Wreorder-warning","03-segmentation-fault":"03-segmentation-fault","04-memory-leak":"04-memory-leak","05-linker-error":"05-linker-error"}}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"javascript",route:"/javascript",children:[{kind:"MdxPage",name:"01-object-oriented-javascript",route:"/javascript/01-object-oriented-javascript"},{kind:"MdxPage",name:"02-modern-syntax",route:"/javascript/02-modern-syntax"},{kind:"MdxPage",name:"03-callback",route:"/javascript/03-callback"},{kind:"Meta",data:{"01-object-oriented-javascript":"01-Object Oriented JavaScript","02-modern-syntax":"02-Modern Syntax","03-callback":"03-Callback"}}]},{kind:"Folder",name:"js-challenge",route:"/js-challenge",children:[{kind:"MdxPage",name:"01-addition-of-fractions",route:"/js-challenge/01-addition-of-fractions"},{kind:"Meta",data:{"01-addition-of-fractions":"01-Addition of Fractions"}}]},{kind:"Folder",name:"leetcode",route:"/leetcode",children:[{kind:"MdxPage",name:"1004-max-consecutive-ones-iii",route:"/leetcode/1004-max-consecutive-ones-iii"},{kind:"MdxPage",name:"1071-greatest-common-divisor-of-strings",route:"/leetcode/1071-greatest-common-divisor-of-strings"},{kind:"MdxPage",name:"11-container-with-most-water",route:"/leetcode/11-container-with-most-water"},{kind:"MdxPage",name:"1431-kids-with-the-greatest-number-of-candies",route:"/leetcode/1431-kids-with-the-greatest-number-of-candies"},{kind:"MdxPage",name:"1456-maximum-number-of-vowels-in-a-substring-of-given-length",route:"/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length"},{kind:"MdxPage",name:"1493-longest-subarray-of-1s-after-deleting-one-element",route:"/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element"},{kind:"MdxPage",name:"151-reverse-words-in-a-string",route:"/leetcode/151-reverse-words-in-a-string"},{kind:"MdxPage",name:"1679-max-number-of-k-sum-pairs",route:"/leetcode/1679-max-number-of-k-sum-pairs"},{kind:"MdxPage",name:"1768-merge-strings-alternately",route:"/leetcode/1768-merge-strings-alternately"},{kind:"MdxPage",name:"238-product-of-array-except-self",route:"/leetcode/238-product-of-array-except-self"},{kind:"MdxPage",name:"283-move-zeroes",route:"/leetcode/283-move-zeroes"},{kind:"MdxPage",name:"334-increasing-triplet-subsequence",route:"/leetcode/334-increasing-triplet-subsequence"},{kind:"MdxPage",name:"345-reverse-vowels-of-a-string",route:"/leetcode/345-reverse-vowels-of-a-string"},{kind:"MdxPage",name:"392-is-subsequence",route:"/leetcode/392-is-subsequence"},{kind:"MdxPage",name:"443-string-compression",route:"/leetcode/443-string-compression"},{kind:"MdxPage",name:"605-can-place-flowers",route:"/leetcode/605-can-place-flowers"},{kind:"MdxPage",name:"643-maximum-average-subarray-i",route:"/leetcode/643-maximum-average-subarray-i"},{kind:"Meta",data:{"11-container-with-most-water":"11. Container With Most Water","151-reverse-words-in-a-string":"151. Reverse Words in a String","238-product-of-array-except-self":"238. Product of Array Except Self","283-move-zeroes":"283. Move Zeroes","334-increasing-triplet-subsequence":"334. Increasing Triplet Subsequence","345-reverse-vowels-of-a-string":"345. Reverse Vowels of a String","392-is-subsequence":"392. Is Subsequence","443-string-compression":"443. String Compression","605-can-place-flowers":"605. Can Place Flowers","643-maximum-average-subarray-i":"643. Maximum Average Subarray I","1004-max-consecutive-ones-iii":"1004. Max Consecutive Ones III","1071-greatest-common-divisor-of-strings":"1071. Greatest Common Divisor of Strings","1431-kids-with-the-greatest-number-of-candies":"1431. Kids With the Greatest Number of Candies","1456-maximum-number-of-vowels-in-a-substring-of-given-length":"1456. Maximum Number of Vowels in a Substring of Given Length","1493-longest-subarray-of-1s-after-deleting-one-element":"1493. Longest Subarray of 1's After Deleting One Element","1679-max-number-of-k-sum-pairs":"1679. Max Number of K-Sum Pairs","1768-merge-strings-alternately":"1768. Merge Strings Alternately"}}]},{kind:"Folder",name:"react",route:"/react",children:[{kind:"MdxPage",name:"01-attribute-conversion",route:"/react/01-attribute-conversion"},{kind:"Meta",data:{"01-attribute-conversion":"01-Attribute Conversion"}}]}],flexsearch:{codeblocks:!0},title:"1431. Kids With the Greatest Number of Candies",headings:l},pageNextRoute:"/leetcode/1431-kids-with-the-greatest-number-of-candies",nextraLayout:i.ZP,themeConfig:t.Z};n.default=(0,r.j)(d)},2337:function(e,n,s){"use strict";s.d(n,{Z:function(){return i}});var a=s(5893);s(7294);var r=s(1163),i={logo:(0,a.jsx)("span",{children:"b5h22's Dev Notes"}),project:{link:"https://github.com/b5h22/dev-notes"},docsRepositoryBase:"https://github.com/b5h22/dev-notes/tree/main",footer:{text:"\xa9 2023 - b5h22 Powered by Nextra, Github Pages"},feedback:{content:()=>(0,a.jsx)(a.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,r.useRouter)(),n={description:"The notes from my journey in learning software development."};return"/"!==e?n.titleTemplate="%s – Dev notes":n.titleTemplate="%s",n},sidebar:{defaultMenuCollapseLevel:1}}}},function(e){e.O(0,[2802,2888,9774,179],function(){return e(e.s=2373)}),_N_E=e.O()}]);