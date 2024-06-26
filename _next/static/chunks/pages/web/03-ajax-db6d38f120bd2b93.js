(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[600],{7706:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/web/03-ajax",function(){return n(5301)}])},5301:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return l}});var r=n(5893),o=n(2673),i=n(5818),t=n(2337);n(9488);var a=n(2643);let l=[{depth:2,value:"Key Characteristics",id:"key-characteristics"},{depth:2,value:"Fetch API",id:"fetch-api"},{depth:3,value:"Basic Usage",id:"basic-usage"},{depth:4,value:"Creating a Request",id:"creating-a-request"},{depth:4,value:"Fetching Data",id:"fetching-data"},{depth:4,value:"Compressed Syntax",id:"compressed-syntax"},{depth:4,value:"GET Request Example",id:"get-request-example"},{depth:2,value:"Handling Errors",id:"handling-errors"}];function c(e){let s=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",h3:"h3",h4:"h4",pre:"pre",code:"code",span:"span",blockquote:"blockquote",a:"a"},(0,a.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"AJAX (Asynchronous JavaScript and XML)"}),"\n",(0,r.jsx)(s.p,{children:"AJAX (Asynchronous JavaScript and XML) is a technique for creating more dynamic and responsive web applications. It enables the transfer of data between a web client (browser) and a web server without refreshing the entire page. This results in faster and more responsive web applications."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AJAX is not a single technology but a combination of:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"HTML/XHTML for markup"}),"\n",(0,r.jsx)(s.li,{children:"CSS for styling"}),"\n",(0,r.jsx)(s.li,{children:"JavaScript for scripting"}),"\n",(0,r.jsx)(s.li,{children:"DOM for manipulating HTML and CSS"}),"\n",(0,r.jsx)(s.li,{children:"XML/JSON for data exchange"}),"\n",(0,r.jsx)(s.li,{children:"XMLHttpRequest object for server communication"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"key-characteristics",children:"Key Characteristics"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Asynchronous"}),": AJAX requests are asynchronous, meaning that the browser does not have to wait for the server response before continuing to execute other scripts. This allows the user to interact with the page while the request is being processed."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Partial Update"}),": AJAX allows you to update parts of a web page without reloading the entire page. This can improve the user experience by making the application more responsive."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Data Exchange"}),": While AJAX originally used XML, JSON is now commonly used due to  its lighter weight and compatibility with JavaScript."]}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h2,{id:"fetch-api",children:"Fetch API"}),"\n",(0,r.jsx)(s.p,{children:"Modern browsers provide the Fetch API to make AJAX requests. The Fetch API is more powerful and flexible compared to the older XMLHttpRequest. This API allows configuring a new request by providing two parameters: the URL of the resource and an object containing the options for the request."}),"\n",(0,r.jsx)(s.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(s.h4,{id:"creating-a-request",children:"Creating a Request"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" myRequest "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Request"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://reqres.in/api/users/'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  method"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'POST'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  body"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ user"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'John Doe'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" job"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'unknown'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  headers"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Content-Type'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'application/json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"URL"}),": The resource's location (e.g., '",(0,r.jsx)(s.a,{href:"https://reqres.in/api/users/",children:"https://reqres.in/api/users/"}),"')"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Options"}),": An object containing the request configuration (e.g., method, body, headers)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"fetching-data",children:"Fetching Data"}),"\n",(0,r.jsxs)(s.p,{children:["The Fetch API returns a Promise that resolves to the Response object representing the response to the request. You can then extract the data from the response using the ",(0,r.jsx)(s.code,{children:"json()"})," method."]}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(myRequest)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((response) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((json) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json); "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Parsed JSON response"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})})]})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"fetch()"}),": Returns a promise that resolves with a response object"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"response.json()"}),": Reads the response stream and resolves with an object"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"compressed-syntax",children:"Compressed Syntax"}),"\n",(0,r.jsx)(s.p,{children:"For more concise code, the configuration and fetch can be combined:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://reqres.in/api/users/'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  method"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'POST'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  body"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({ user"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'John Doe'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" job"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'unknown'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  headers"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Content-Type'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'application/json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((response) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((json) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})})]})}),"\n",(0,r.jsx)(s.h4,{id:"get-request-example",children:"GET Request Example"}),"\n",(0,r.jsx)(s.p,{children:"For a simple GET request:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://reqres.in/api/users/'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((response) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((json) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h2,{id:"handling-errors",children:"Handling Errors"}),"\n",(0,r.jsxs)(s.p,{children:["To handle fetch failures, add a ",(0,r.jsx)(s.code,{children:"catch"})," statement. However, this won't catch errors if the connection was successful but the response status indicates an error (e.g., 404 or 500). Use ",(0,r.jsx)(s.code,{children:"response.ok"})," to check if the status code is in the 200 range:"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://reqres.in/api/unknown/23'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((response) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".ok "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Promise"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".reject"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".status);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((json) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(json);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".catch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((err) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`Error: "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"err"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"); "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Logs error status"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})})]})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"response.ok"}),": True if the response status is in the 200 range."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Promise.reject"}),": Handles non-200 status codes."]}),"\n"]}),"\n"]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/web/03-ajax.mdx",route:"/web/03-ajax",timestamp:1719410227e3,pageMap:[{kind:"Meta",data:{index:"Introduction",c:"C",cpp:"C++",web:"WEB Programming",react:"React","js-challenge":"JS-Challenge",leetcode:"Leetcode","error-notes":"Error Notes",about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"c",route:"/c",children:[{kind:"MdxPage",name:"01-basics",route:"/c/01-basics"},{kind:"MdxPage",name:"02-types",route:"/c/02-types"},{kind:"MdxPage",name:"03-simple-calculation",route:"/c/03-simple-calculation"},{kind:"MdxPage",name:"04-expression",route:"/c/04-expression"},{kind:"MdxPage",name:"05-logic",route:"/c/05-logic"},{kind:"MdxPage",name:"06-array",route:"/c/06-array"},{kind:"MdxPage",name:"07-structures",route:"/c/07-structures"},{kind:"MdxPage",name:"08-function",route:"/c/08-function"},{kind:"MdxPage",name:"09-pointer",route:"/c/09-pointer"},{kind:"Meta",data:{"01-basics":"01-Basics","02-types":"02-Types","03-simple-calculation":"03-Simple Calculation","04-expression":"04-Expression","05-logic":"05-Logic","06-array":"06-Array","07-structures":"07-Structures","08-function":"08-Function","09-pointer":"09-Pointer"}}]},{kind:"Folder",name:"cpp",route:"/cpp",children:[{kind:"MdxPage",name:"01-basics",route:"/cpp/01-basics"},{kind:"MdxPage",name:"02-foundations",route:"/cpp/02-foundations"},{kind:"MdxPage",name:"03-dynamic-memory",route:"/cpp/03-dynamic-memory"},{kind:"MdxPage",name:"04-encapsulation",route:"/cpp/04-encapsulation"},{kind:"MdxPage",name:"05-inheritance",route:"/cpp/05-inheritance"},{kind:"MdxPage",name:"06-polymorphism",route:"/cpp/06-polymorphism"},{kind:"Meta",data:{"01-basics":"01-Basics","02-foundations":"02-Foundations","03-dynamic-memory":"03-Dynamic Memory","04-encapsulation":"04-Encapsulation","05-inheritance":"05-Inheritance","06-polymorphism":"06-Polymorphism"}}]},{kind:"Folder",name:"error-notes",route:"/error-notes",children:[{kind:"Folder",name:"C",route:"/error-notes/C",children:[{kind:"MdxPage",name:"01-scanf",route:"/error-notes/C/01-scanf"},{kind:"Meta",data:{"01-scanf":"01-scanf"}}]},{kind:"Meta",data:{C:"C",cpp:"C++"}},{kind:"Folder",name:"cpp",route:"/error-notes/cpp",children:[{kind:"MdxPage",name:"01-Wsign-compare",route:"/error-notes/cpp/01-Wsign-compare"},{kind:"MdxPage",name:"02-Wreorder-warning",route:"/error-notes/cpp/02-Wreorder-warning"},{kind:"MdxPage",name:"03-segmentation-fault",route:"/error-notes/cpp/03-segmentation-fault"},{kind:"MdxPage",name:"04-memory-leak",route:"/error-notes/cpp/04-memory-leak"},{kind:"MdxPage",name:"05-linker-error",route:"/error-notes/cpp/05-linker-error"},{kind:"Meta",data:{"01-Wsign-compare":"01-Wsign-compare","02-Wreorder-warning":"02-Wreorder-warning","03-segmentation-fault":"03-segmentation-fault","04-memory-leak":"04-memory-leak","05-linker-error":"05-linker-error"}}]}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"js-challenge",route:"/js-challenge",children:[{kind:"MdxPage",name:"01-addition-of-fractions",route:"/js-challenge/01-addition-of-fractions"},{kind:"Meta",data:{"01-addition-of-fractions":"01-Addition of Fractions"}}]},{kind:"Folder",name:"leetcode",route:"/leetcode",children:[{kind:"MdxPage",name:"1004-max-consecutive-ones-iii",route:"/leetcode/1004-max-consecutive-ones-iii"},{kind:"MdxPage",name:"1071-greatest-common-divisor-of-strings",route:"/leetcode/1071-greatest-common-divisor-of-strings"},{kind:"MdxPage",name:"11-container-with-most-water",route:"/leetcode/11-container-with-most-water"},{kind:"MdxPage",name:"1431-kids-with-the-greatest-number-of-candies",route:"/leetcode/1431-kids-with-the-greatest-number-of-candies"},{kind:"MdxPage",name:"1456-maximum-number-of-vowels-in-a-substring-of-given-length",route:"/leetcode/1456-maximum-number-of-vowels-in-a-substring-of-given-length"},{kind:"MdxPage",name:"1493-longest-subarray-of-1s-after-deleting-one-element",route:"/leetcode/1493-longest-subarray-of-1s-after-deleting-one-element"},{kind:"MdxPage",name:"151-reverse-words-in-a-string",route:"/leetcode/151-reverse-words-in-a-string"},{kind:"MdxPage",name:"1679-max-number-of-k-sum-pairs",route:"/leetcode/1679-max-number-of-k-sum-pairs"},{kind:"MdxPage",name:"1768-merge-strings-alternately",route:"/leetcode/1768-merge-strings-alternately"},{kind:"MdxPage",name:"238-product-of-array-except-self",route:"/leetcode/238-product-of-array-except-self"},{kind:"MdxPage",name:"283-move-zeroes",route:"/leetcode/283-move-zeroes"},{kind:"MdxPage",name:"334-increasing-triplet-subsequence",route:"/leetcode/334-increasing-triplet-subsequence"},{kind:"MdxPage",name:"345-reverse-vowels-of-a-string",route:"/leetcode/345-reverse-vowels-of-a-string"},{kind:"MdxPage",name:"392-is-subsequence",route:"/leetcode/392-is-subsequence"},{kind:"MdxPage",name:"443-string-compression",route:"/leetcode/443-string-compression"},{kind:"MdxPage",name:"605-can-place-flowers",route:"/leetcode/605-can-place-flowers"},{kind:"MdxPage",name:"643-maximum-average-subarray-i",route:"/leetcode/643-maximum-average-subarray-i"},{kind:"Meta",data:{"11-container-with-most-water":"11. Container With Most Water","151-reverse-words-in-a-string":"151. Reverse Words in a String","238-product-of-array-except-self":"238. Product of Array Except Self","283-move-zeroes":"283. Move Zeroes","334-increasing-triplet-subsequence":"334. Increasing Triplet Subsequence","345-reverse-vowels-of-a-string":"345. Reverse Vowels of a String","392-is-subsequence":"392. Is Subsequence","443-string-compression":"443. String Compression","605-can-place-flowers":"605. Can Place Flowers","643-maximum-average-subarray-i":"643. Maximum Average Subarray I","1004-max-consecutive-ones-iii":"1004. Max Consecutive Ones III","1071-greatest-common-divisor-of-strings":"1071. Greatest Common Divisor of Strings","1431-kids-with-the-greatest-number-of-candies":"1431. Kids With the Greatest Number of Candies","1456-maximum-number-of-vowels-in-a-substring-of-given-length":"1456. Maximum Number of Vowels in a Substring of Given Length","1493-longest-subarray-of-1s-after-deleting-one-element":"1493. Longest Subarray of 1's After Deleting One Element","1679-max-number-of-k-sum-pairs":"1679. Max Number of K-Sum Pairs","1768-merge-strings-alternately":"1768. Merge Strings Alternately"}}]},{kind:"Folder",name:"react",route:"/react",children:[{kind:"MdxPage",name:"01-attribute-conversion",route:"/react/01-attribute-conversion"},{kind:"Meta",data:{"01-attribute-conversion":"01-Attribute Conversion"}}]},{kind:"Folder",name:"web",route:"/web",children:[{kind:"MdxPage",name:"01-http-protocol",route:"/web/01-http-protocol"},{kind:"MdxPage",name:"02-json",route:"/web/02-json"},{kind:"MdxPage",name:"03-ajax",route:"/web/03-ajax"},{kind:"Meta",data:{javascript:"JavaScript",express:"Express.js","01-http-protocol":"01-HTTP Protocol","02-json":"02-JSON","03-ajax":"03-AJAX"}},{kind:"Folder",name:"express",route:"/web/express",children:[{kind:"MdxPage",name:"01-routing",route:"/web/express/01-routing"},{kind:"MdxPage",name:"02-middleware",route:"/web/express/02-middleware"},{kind:"Meta",data:{"01-routing":"01-Routing","02-middleware":"02-Middleware"}}]},{kind:"Folder",name:"javascript",route:"/web/javascript",children:[{kind:"MdxPage",name:"01-object-oriented-javascript",route:"/web/javascript/01-object-oriented-javascript"},{kind:"MdxPage",name:"02-modern-syntax",route:"/web/javascript/02-modern-syntax"},{kind:"MdxPage",name:"03-callback",route:"/web/javascript/03-callback"},{kind:"MdxPage",name:"04-promise",route:"/web/javascript/04-promise"},{kind:"Meta",data:{"01-object-oriented-javascript":"01-Object Oriented JavaScript","02-modern-syntax":"02-Modern Syntax","03-callback":"03-Callback","04-promise":"04-Promise"}}]}]}],flexsearch:{codeblocks:!0},title:"AJAX (Asynchronous JavaScript and XML)",headings:l},pageNextRoute:"/web/03-ajax",nextraLayout:i.ZP,themeConfig:t.Z};s.default=(0,o.j)(d)},2337:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var r=n(5893);n(7294);var o=n(1163),i={logo:(0,r.jsx)("span",{children:"b5h22's Dev Notes"}),project:{link:"https://github.com/b5h22/dev-notes"},docsRepositoryBase:"https://github.com/b5h22/dev-notes/tree/main",footer:{text:"\xa9 2023 - b5h22 Powered by Nextra, Github Pages"},feedback:{content:()=>(0,r.jsx)(r.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,o.useRouter)(),s={description:"The notes from my journey in learning software development."};return"/"!==e?s.titleTemplate="%s – Dev notes":s.titleTemplate="%s",s},sidebar:{defaultMenuCollapseLevel:1}}}},function(e){e.O(0,[2802,2888,9774,179],function(){return e(e.s=7706)}),_N_E=e.O()}]);