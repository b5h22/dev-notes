(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{7412:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/605-can-place-flowers",function(){return l(6768)}])},6768:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return i}});var o=l(5893),r=l(2673),n=l(2643);let i=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"My Solution",id:"my-solution"},{depth:2,value:"Solution from others",id:"solution-from-others"},{depth:2,value:"Explanation",id:"explanation"},{depth:2,value:"Note",id:"note"}];function t(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",span:"span",ul:"ul",li:"li",ol:"ol",blockquote:"blockquote"},(0,n.a)(),s.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"605. Can Place Flowers"}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots."}),"\n",(0,o.jsxs)(e.p,{children:["Given an integer array ",(0,o.jsx)(e.code,{children:"flowerbed"})," containing ",(0,o.jsx)(e.code,{children:"0"}),"'s and ",(0,o.jsx)(e.code,{children:"1"}),"'s, where ",(0,o.jsx)(e.code,{children:"0"})," means empty and ",(0,o.jsx)(e.code,{children:"1"})," means not empty, and an integer ",(0,o.jsx)(e.code,{children:"n"}),", return ",(0,o.jsx)(e.code,{children:"true"})," if ",(0,o.jsx)(e.code,{children:"n"})," new flowers can be planted in the ",(0,o.jsx)(e.code,{children:"flowerbed"})," without violating the no-adjacent-flowers rule and ",(0,o.jsx)(e.code,{children:"false"})," otherwise."]}),"\n",(0,o.jsx)(e.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,o.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: flowerbed = [1,0,0,0,1], n = 1"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: true"})})]})}),"\n",(0,o.jsx)(e.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,o.jsx)(e.pre,{"data-language":"text","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"text","data-theme":"default",children:[(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: flowerbed = [1,0,0,0,1], n = 2"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: false"})})]})}),"\n",(0,o.jsx)(e.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"1 <= flowerbed.length <= 2 * 104"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"flowerbed[i]"})," is ",(0,o.jsx)(e.code,{children:"0"})," or ",(0,o.jsx)(e.code,{children:"1"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["There are no two adjacent flowers in ",(0,o.jsx)(e.code,{children:"flowerbed"}),"."]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"0 <= n <= flowerbed.length"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"my-solution",children:"My Solution"}),"\n",(0,o.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"canPlaceFlowers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(flowerbed"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" n) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" cnt "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if there is only one plot and it is empty and n is 1"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"flowerbed"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed["}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" n "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"flowerbed"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if the first plot is empty and the next plot is empty"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        cnt"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if the plot is empty and the previous plot is empty and the next plot is empty"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        cnt"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if the last plot is empty and the previous plot is empty"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"flowerbed"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        cnt"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// if the count of new flowers is greater than or equal to n"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" cnt "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" n;"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "})]})}),"\n",(0,o.jsx)(e.h2,{id:"solution-from-others",children:"Solution from others"}),"\n",(0,o.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsx)(e.span,{className:"line",children:" "}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// The solution is similar to mine, but it is more concise and efficient."})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"canPlaceFlowers"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(flowerbed"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" n) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"flowerbed"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"; i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (i "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"flowerbed"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" flowerbed[i"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")) {"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          flowerbed[i] "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          count"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,o.jsxs)(e.span,{className:"line",children:[(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">="}),(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" n;"})]}),"\n",(0,o.jsx)(e.span,{className:"line",children:(0,o.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(e.span,{className:"line",children:" "})]})}),"\n",(0,o.jsx)(e.h2,{id:"explanation",children:"Explanation"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Start Counting"}),": Begin with a count of 0. This will track how many flowers we can plant."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Loop Through"}),": Go through each spot in the flowerbed one by one."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Check Conditions"}),": For each spot, check three things:"]}),"\n"]}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"If the current spot is empty (0 means no flower there)."}),"\n",(0,o.jsx)(e.li,{children:"If the spot to the left is empty or it's the first spot in the flowerbed."}),"\n",(0,o.jsx)(e.li,{children:"If the spot to the right is empty or it's the last spot in the flowerbed."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.ol,{start:"4",children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Plant Flower"}),": If all conditions are met (the spot is empty and both adjacent spots are empty or edges), plant a flower there (change 0 to 1) and increase your count by 1."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Repeat"}),": Keep doing this for every spot in the flowerbed."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Final Check"}),": In the end, see if the count of flowers you planted is equal to or more than 'n', the number of flowers you wanted to plant."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"Result"}),": Return true if you could plant at least 'n' flowers without breaking the rules; otherwise, return false."]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"note",children:"Note"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["In JavaScript, negative index is not allowed. It will return undefined. If you want to check the last element of an array, you can use ",(0,o.jsx)(e.code,{children:"array[array.length - 1]"})," instead of ",(0,o.jsx)(e.code,{children:"array[-1]"}),"."]}),"\n"]})]})}e.default=(0,r.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,n.a)(),s.components);return e?(0,o.jsx)(e,{...s,children:(0,o.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/leetcode/605-can-place-flowers.mdx",route:"/leetcode/605-can-place-flowers",timestamp:1710295832e3,title:"605. Can Place Flowers",headings:i},pageNextRoute:"/leetcode/605-can-place-flowers"})}},function(s){s.O(0,[673,888,774,179],function(){return s(s.s=7412)}),_N_E=s.O()}]);