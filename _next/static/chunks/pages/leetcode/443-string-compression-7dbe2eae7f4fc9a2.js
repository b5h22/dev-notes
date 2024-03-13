(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{5937:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leetcode/443-string-compression",function(){return r(4890)}])},4890:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return i}});var n=r(5893),l=r(2673),o=r(2643);let i=[{depth:2,value:"Description",id:"description"},{depth:3,value:"Example 1:",id:"example-1"},{depth:3,value:"Example 2:",id:"example-2"},{depth:3,value:"Example 3:",id:"example-3"},{depth:3,value:"Constraints:",id:"constraints"},{depth:2,value:"Solution from others",id:"solution-from-others"}];function t(e){let s=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",pre:"pre",span:"span"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"443. String Compression"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["Given an array of characters ",(0,n.jsx)(s.code,{children:"chars"}),", compress it using the following algorithm:"]}),"\n",(0,n.jsxs)(s.p,{children:["Begin with an empty string ",(0,n.jsx)(s.code,{children:"s"}),". For each group of consecutive repeating characters in ",(0,n.jsx)(s.code,{children:"chars"}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If the group's length is ",(0,n.jsx)(s.code,{children:"1"}),", append the character to ",(0,n.jsx)(s.code,{children:"s"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Otherwise, append the character followed by the group's length."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The compressed string ",(0,n.jsx)(s.code,{children:"s"})," should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are ",(0,n.jsx)(s.code,{children:"10"})," or longer will be split into multiple characters in ",(0,n.jsx)(s.code,{children:"chars"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"After you are done modifying the input array, return the new length of the array."}),"\n",(0,n.jsx)(s.p,{children:"You must write an algorithm that uses only constant extra space."}),"\n",(0,n.jsx)(s.h3,{id:"example-1",children:"Example 1:"}),"\n",(0,n.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: chars = ["a","a","b","b","c","c","c"]'})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]'})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".'})})]})}),"\n",(0,n.jsx)(s.h3,{id:"example-2",children:"Example 2:"}),"\n",(0,n.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: chars = ["a"]'})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Output: Return 1, and the first character of the input array should be: ["a"]'})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Explanation: The only group is "a", which remains uncompressed since it\'s a single character.'})})]})}),"\n",(0,n.jsx)(s.h3,{id:"example-3",children:"Example 3:"}),"\n",(0,n.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]'})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].'})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'  Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".'})})]})}),"\n",(0,n.jsx)(s.h3,{id:"constraints",children:"Constraints:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"1 <= chars.length <= 2000"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"chars[i]"})," is a lowercase English letter, uppercase English letter, digit, or symbol."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"solution-from-others",children:"Solution from others"}),"\n",(0,n.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"/*"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"  This solution uses two pointers i and j to iterate through the input array. "})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"  The variable count keeps track of the number of consecutive characters "})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"  that are equal to the current character curr. When a new character is encountered, "})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"  the current character and its count (if greater than 1) are written "})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"  to the output array using the chars array and the i pointer."})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"  Finally, the function returns i, which represents the length of the compressed array."})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"*/"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"compress"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(chars) {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" j "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (j "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"chars"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" count "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" curr "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" chars[j];"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (j "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"chars"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" chars[j] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" curr) {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            j"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            count"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        chars[i"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" curr;"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (count "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" digit "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"of"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"count"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".toString"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()) {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                chars[i"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" digit;"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            }"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" i;"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "})]})})]})}s.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/leetcode/443-string-compression.mdx",route:"/leetcode/443-string-compression",timestamp:1709689063e3,title:"443. String Compression",headings:i},pageNextRoute:"/leetcode/443-string-compression"})}},function(e){e.O(0,[673,888,774,179],function(){return e(e.s=5937)}),_N_E=e.O()}]);