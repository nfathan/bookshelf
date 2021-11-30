(this.webpackJsonpbookshelf=this.webpackJsonpbookshelf||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var o=c(1),a=c.n(o),s=c(12),n=c.n(s),i=c(6),l=(c(18),c(5)),r=c(13),j=c(3),d=c(2),b=(c(19),c(7)),u=c(0);var h=function(e){return Object(u.jsx)("div",{className:"LinkTo",children:Object(u.jsx)(i.b,{to:e.to,className:e.className,children:e.innerText})})};var m=function(e){return Object(u.jsx)("div",{className:"SubmitButton center",children:Object(u.jsx)("input",{type:"submit",id:"submit",className:e.className,value:e.value})})};var O=function(e){var t=Object(o.useState)({}),c=Object(j.a)(t,2),a=c[0],s=c[1],n=function(t){var c=t.target.name,o=t.target.value,n=t.target.checked;s(Object(l.a)(Object(l.a)({},a),{},Object(b.a)({},c,o))),e.setChecked(n)};return Object(o.useEffect)((function(){localStorage.setItem("books_data",JSON.stringify(e.books)),console.log(e.books)}),[e.books]),Object(u.jsxs)("form",{className:"AddBookForm",onSubmit:function(t){t.preventDefault(),e.addBook(a)},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputForJudulBuku",children:"Judul Buku"}),Object(u.jsx)("input",{type:"text",id:"titleBook",name:"title",value:a.title||"",onChange:n,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputForPenulis",children:"Penulis"}),Object(u.jsx)("input",{type:"text",id:"author",name:"author",value:a.author||"",onChange:n,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputForTahun",children:"Tahun"}),Object(u.jsx)("input",{type:"number",id:"year",name:"year",value:a.year||"",onChange:n})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"selesaiDibaca",children:"Selesai dibaca"}),Object(u.jsx)("input",{type:"checkbox",id:"completeCheckbox",name:"isComplete",checked:e.checked,onChange:n})]}),Object(u.jsxs)("div",{className:"flex jcc",children:[Object(u.jsx)(m,{value:"Tambah Buku Baru",className:"m-10"}),Object(u.jsx)(h,{to:"/",innerText:"Home",className:"cancel m-10"})]})]})};var x=function(e){return Object(u.jsxs)("div",{className:"form-container card shadow-dark container",children:[Object(u.jsx)("h2",{className:"heading",children:"TAMBAH BUKU"}),Object(u.jsx)(O,{books:e.books,checked:e.checked,setChecked:e.setChecked,addBook:e.addBook})]})};var k=function(){return Object(u.jsx)("div",{className:"App-logo",children:Object(u.jsx)("h1",{children:Object(u.jsx)(i.b,{to:"/",children:"BOOKSHELF"})})})};var p=function(){return Object(u.jsx)("div",{className:"AppHeader",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"AppHeader-logo",children:Object(u.jsx)(k,{})})})})},f=c(10),g=c.p+"static/media/clean-code.9f6cfe0e.jpg";var v=function(e){return Object(u.jsxs)("li",{className:"Book shadow",children:[Object(u.jsx)("div",{className:"Book-img",children:Object(u.jsx)("img",{src:g,alt:"clean-code"})}),Object(u.jsx)("div",{className:"Book-header",children:Object(u.jsx)("h3",{children:e.bookTitle})}),Object(u.jsxs)("div",{className:"Book-info",children:[Object(u.jsxs)("p",{children:["Penulis : ",e.bookAuthor]}),Object(u.jsxs)("p",{children:["Tahun : ",e.bookYear]})]}),Object(u.jsxs)("div",{className:"Book-button center mt-10",children:[e.isComplete?Object(u.jsxs)("button",{className:"complete-button",onClick:function(){return e.toggleIsComplete(e.id,e.isComplete)},children:[Object(u.jsx)(f.d,{})," Belum Selesai"]}):Object(u.jsxs)("button",{className:"complete-button",onClick:function(){return e.toggleIsComplete(e.id,e.isComplete)},children:[Object(u.jsx)(f.b,{}),"Selesai"]}),Object(u.jsx)("button",{className:"edit-button",onClick:function(){return e.editBook(e.book)},children:Object(u.jsx)(f.c,{})}),Object(u.jsx)("button",{className:"delete-button",onClick:function(){return e.deleteBook(e.id)},children:Object(u.jsx)(f.a,{})})]})]})};var B=function(e){return Object(u.jsxs)("div",{className:"BookList-container card",style:{backgroundColor:"#FFEFA1"},children:[Object(u.jsx)("h3",{children:"Selesai Dibaca"}),Object(u.jsx)("ul",{id:"completed",className:"BookList",children:e.books.map((function(t){return t.isComplete&&Object(u.jsx)(v,{book:t,id:t.id,bookTitle:t.title,bookAuthor:t.author,bookYear:t.year,isComplete:t.isComplete,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook},t.id)}))})]})};var N=function(e){return Object(u.jsxs)("div",{className:"BookList-container card",style:{backgroundColor:"#FFCB91"},children:[Object(u.jsx)("h3",{children:"Belum Selesai Dibaca"}),Object(u.jsx)("ul",{id:"uncompleted",className:"BookList",children:e.books.map((function(t){return!t.isComplete&&Object(u.jsx)(v,{book:t,id:t.id,bookTitle:t.title,bookAuthor:t.author,bookYear:t.year,isComplete:t.isComplete,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook},t.id)}))})]})};var C=function(){return Object(u.jsx)("div",{className:"SearchBar",children:Object(u.jsx)("input",{type:"search",id:"inputSearch",placeholder:"Cari Buku.."})})};var y=function(e){return Object(u.jsxs)("div",{className:"BookShelf card shadow-dark container",children:[Object(u.jsx)("h2",{className:"heading mb-20",children:"RAK BUKU"}),Object(u.jsxs)("div",{className:"flex jcsb",children:[Object(u.jsx)(C,{}),Object(u.jsx)(h,{to:"addbook",className:"add",innerText:"Tambah Buku"})]}),Object(u.jsx)(N,{books:e.books,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook}),Object(u.jsx)(B,{books:e.books,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook})]})};var S=function(e){var t=Object(d.f)(),c=Object(o.useState)(e.currentBook),a=Object(j.a)(c,2),s=a[0],n=a[1],i=function(e){var t=e.target,c=t.name,o=t.value;n(Object(l.a)(Object(l.a)({},s),{},Object(b.a)({},c,o)))};return Object(u.jsxs)("form",{className:"AddBookForm",onSubmit:function(c){c.preventDefault(),e.updateBook(s.id,s),t("/")},children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputForJudulBuku",children:"Judul Buku"}),Object(u.jsx)("input",{type:"text",id:"titleBook",name:"title",value:s.title,onChange:i,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputForPenulis",children:"Penulis"}),Object(u.jsx)("input",{type:"text",id:"author",name:"author",value:s.author,onChange:i,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"inputForTahun",children:"Tahun"}),Object(u.jsx)("input",{type:"number",id:"year",name:"year",value:s.year,onChange:i})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"selesaiDibaca",children:"Selesai dibaca"}),Object(u.jsx)("input",{type:"checkbox",id:"completeCheckbox",name:"isComplete",checked:s.isComplete,onChange:i})]}),Object(u.jsxs)("div",{className:"flex jcc",children:[Object(u.jsx)(m,{value:"Update Buku",className:"m-10"}),Object(u.jsx)(h,{to:"/",innerText:"Kembali",className:"cancel m-10"})]})]})};var F=function(e){return Object(u.jsxs)("div",{className:"form-container card shadow-dark container",children:[Object(u.jsx)("h2",{className:"heading",children:"EDIT BUKU"}),Object(u.jsx)(S,{currentBook:e.currentBook,updateBook:e.updateBook})]})};var I=function(){return Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("p",{children:["Design and Coded by ",Object(u.jsx)("a",{href:"https://nfathan.github.io/fathan-nasrullah/",children:"Fathan Nasrullah"})]})})};var T=function(){return Object(u.jsx)("div",{style:{color:"red",display:"flex",height:"300px",justifyContent:"center",alignItems:"center"},children:Object(u.jsx)("h1",{children:"404 Not Found"})})};var A=function(){var e=Object(o.useState)((function(){return null!==JSON.parse(localStorage.getItem("books_data"))?JSON.parse(localStorage.getItem("books_data")):[]})),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)(!1),n=Object(j.a)(s,2),i=n[0],b=n[1],h=Object(o.useState)({}),m=Object(j.a)(h,2),O=m[0],k=m[1],f=Object(d.f)();return Object(o.useEffect)((function(){localStorage.setItem("books_data",JSON.stringify(c)),console.log(c)}),[c]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)(p,{})}),Object(u.jsx)("main",{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",element:Object(u.jsx)(y,{books:c,toggleIsComplete:function(e,t){a((function(c){return c.map((function(c){return c.id===e?Object(l.a)(Object(l.a)({},c),{},{isComplete:!t}):c}))}))},deleteBook:function(e){a(c.filter((function(t){return t.id!==e})))},editBook:function(e){f("editbook"),k({id:e.id,title:e.title,author:e.author,year:e.year,isComplete:e.isComplete})}})}),Object(u.jsx)(d.a,{path:"addbook",element:Object(u.jsx)(x,{books:c,checked:i,setChecked:b,addBook:function(e){e.id=c.length+1,e.isComplete=i,a([].concat(Object(r.a)(c),[e]))}})}),Object(u.jsx)(d.a,{path:"editbook",element:Object(u.jsx)(F,{currentBook:O,updateBook:function(e,t){a(c.map((function(c){return c.id===e?t:c})))}})}),Object(u.jsx)(d.a,{path:"*",element:Object(u.jsx)(T,{})})]})}),Object(u.jsx)("footer",{children:Object(u.jsx)(I,{})})]})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(A,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7baaeb29.chunk.js.map