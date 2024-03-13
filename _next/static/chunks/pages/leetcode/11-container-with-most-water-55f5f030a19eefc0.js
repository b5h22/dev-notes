(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{9837:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/11-container-with-most-water",function(){return n(1751)}])},1751:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return o},default:function(){return c}});var r=n(5893),l=n(2673),t=n(2643),i={src:"/dev-notes/_next/static/media/leetcode-problem-11.a77b62c7.png",height:383,width:801,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAYklEQVR42g3K0QqFIAwA0G3u0kC4RBD1U31tPxT0nlmYmNrqPB8sJUNMRSwAIMIVQiPSGGRDsCx+drX7W0ByLrRC03jy14rSul8V6Ng3/HFO8ekfTjGq1kFIsmdRxcq3R2NfStgtZqf/qTIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4};let o=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"Solution from others",id:"solution-from-others"}];function a(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",img:"img",pre:"pre",span:"span",ul:"ul",li:"li"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"11. Container With Most Water"}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["You are given an integer array ",(0,r.jsx)(s.code,{children:"height"})," of length ",(0,r.jsx)(s.code,{children:"n"}),". There are ",(0,r.jsx)(s.code,{children:"n"})," vertical lines drawn such that the two endpoints of the ",(0,r.jsx)(s.code,{children:"ith"})," line are ",(0,r.jsx)(s.code,{children:"(i, 0)"})," and ",(0,r.jsx)(s.code,{children:"(i, height[i])"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Find two lines that together with the x-axis form a container, such that the container contains the most water."}),"\n",(0,r.jsx)(s.p,{children:"Return the maximum amount of water a container can store."}),"\n",(0,r.jsx)(s.p,{children:"Notice that you may not slant the container."}),"\n",(0,r.jsx)(s.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"leetcode-problem-11",placeholder:"blur",src:i})}),"\n",(0,r.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: height = [1,8,6,2,5,4,8,3,7]"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 49"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49."})})]})}),"\n",(0,r.jsx)(s.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Input: height = [1,1]"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  Output: 1"})})]})}),"\n",(0,r.jsx)(s.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"n == height.length"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"2 <= n <= 10^5"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"0 <= height[i] <= 10^4"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"solution-from-others",children:"Solution from others"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsx)(s.span,{className:"line",children:" "}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Solution using two pointers"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"maxArea"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(height) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" maxArea "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" left "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// leftmost bar graph"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" right "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"height"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// rightmost bar graph"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(left "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" right) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Base * Height"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// need lower height because of the water will be overflowed"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" currArea "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (right "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" left) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Math"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".min"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(height[left]"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" height[right]); "})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      maxArea "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Math"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".max"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(maxArea"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" currArea);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// maintain the side with the greater height and move the lower side by one step"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(height[left] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" height[right]) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          left"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          right"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"--"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" maxArea;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:" "})]})})]})}var c=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/leetcode/11-container-with-most-water.mdx",route:"/leetcode/11-container-with-most-water",timestamp:1709959932e3,title:"11. Container With Most Water",headings:o},pageNextRoute:"/leetcode/11-container-with-most-water"})}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=9837)}),_N_E=e.O()}]);