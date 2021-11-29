(this.webpackJsonpbookshelf=this.webpackJsonpbookshelf||[]).push([[0],{18:function(e,t,o){},19:function(e,t,o){},21:function(e,t,o){"use strict";o.r(t);var c=o(1),a=o.n(c),s=o(11),n=o.n(s),i=(o(18),o(5)),l=o(13),r=o(3),d=o(6),j=o(2),u=(o(19),o(7)),b=o(0);var h=function(e){return Object(b.jsx)("div",{className:"LinkTo",children:Object(b.jsx)(d.b,{to:e.to,className:e.className,children:e.innerText})})};var m=function(e){return Object(b.jsx)("div",{className:"SubmitButton center",children:Object(b.jsx)("input",{type:"submit",id:"submit",className:e.className,value:e.value})})};var O=function(e){var t=Object(c.useState)({}),o=Object(r.a)(t,2),a=o[0],s=o[1],n=function(t){var o=t.target.name,c=t.target.value,n=t.target.checked;s(Object(i.a)(Object(i.a)({},a),{},Object(u.a)({},o,c))),e.setChecked(n)};return Object(c.useEffect)((function(){localStorage.setItem("books_data",JSON.stringify(e.books)),console.log(e.books)}),[e.books]),Object(b.jsxs)("form",{className:"AddBookForm",onSubmit:function(t){t.preventDefault(),e.addBook(a)},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"inputForJudulBuku",children:"Judul Buku"}),Object(b.jsx)("input",{type:"text",id:"titleBook",name:"title",value:a.title||"",onChange:n,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"inputForPenulis",children:"Penulis"}),Object(b.jsx)("input",{type:"text",id:"author",name:"author",value:a.author||"",onChange:n,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"inputForTahun",children:"Tahun"}),Object(b.jsx)("input",{type:"number",id:"year",name:"year",value:a.year||"",onChange:n})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"selesaiDibaca",children:"Selesai dibaca"}),Object(b.jsx)("input",{type:"checkbox",id:"completeCheckbox",name:"isComplete",checked:e.checked,onChange:n})]}),Object(b.jsxs)("div",{className:"flex jcc",children:[Object(b.jsx)(m,{value:"Tambah Buku Baru",className:"m-10"}),Object(b.jsx)(h,{to:"/",innerText:"Kembali",className:"cancel m-10"})]})]})};var k=function(e){return Object(b.jsxs)("div",{className:"form-container card shadow-dark container",children:[Object(b.jsx)("h1",{className:"heading",children:"TAMBAH BUKU"}),Object(b.jsx)(O,{books:e.books,checked:e.checked,setChecked:e.setChecked,addBook:e.addBook})]})};var x=function(){return Object(b.jsx)("div",{className:"App-logo",children:Object(b.jsx)("h1",{children:Object(b.jsx)(d.b,{to:"/",children:"BOOKSHELF"})})})};var p=function(){return Object(b.jsx)("div",{className:"AppHeader",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"AppHeader-logo",children:Object(b.jsx)(x,{})})})})};var f=function(e){var t=Object(j.f)(),o=function(){t("editbook")};return Object(b.jsxs)("li",{className:"Book shadow",children:[Object(b.jsxs)("div",{className:"Book-header",children:[Object(b.jsx)("h4",{children:e.bookTitle}),Object(b.jsx)("button",{onClick:function(){return e.editBook(e.book,o)},children:"Edit"})]}),Object(b.jsxs)("div",{className:"Book-info",children:[Object(b.jsxs)("p",{children:["Penulis : ",e.bookAuthor]}),Object(b.jsxs)("p",{children:["Tahun : ",e.bookYear]})]}),Object(b.jsxs)("div",{className:"Book-button center",children:[e.isComplete?Object(b.jsx)("button",{className:"complete-button",onClick:function(){return e.toggleIsComplete(e.id,e.isComplete)},children:"Belum Selesai"}):Object(b.jsx)("button",{className:"complete-button",onClick:function(){return e.toggleIsComplete(e.id,e.isComplete)},children:"Selesai"}),Object(b.jsx)("button",{className:"delete-button",onClick:function(){return e.deleteBook(e.id)},children:"Hapus"})]})]})};var B=function(e){return Object(b.jsxs)("div",{className:"BookList-container card",style:{backgroundColor:"#FFEFA1"},children:[Object(b.jsx)("h3",{children:"Selesai Dibaca"}),Object(b.jsx)("ul",{id:"completed",className:"BookList",children:e.books.map((function(t){return t.isComplete&&Object(b.jsx)(f,{book:t,id:t.id,bookTitle:t.title,bookAuthor:t.author,bookYear:t.year,isComplete:t.isComplete,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook},t.id)}))})]})};var v=function(e){return Object(b.jsxs)("div",{className:"BookList-container card",style:{backgroundColor:"#FFCB91"},children:[Object(b.jsx)("h3",{children:"Belum Selesai Dibaca"}),Object(b.jsx)("ul",{id:"uncompleted",className:"BookList",children:e.books.map((function(t){return!t.isComplete&&Object(b.jsx)(f,{book:t,id:t.id,bookTitle:t.title,bookAuthor:t.author,bookYear:t.year,isComplete:t.isComplete,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook},t.id)}))})]})};var g=function(){return Object(b.jsx)("div",{className:"SearchBar",children:Object(b.jsx)("input",{type:"search",id:"inputSearch",placeholder:"Cari Buku.."})})};var N=function(e){return Object(b.jsxs)("div",{className:"BookShelf card shadow-dark container",children:[Object(b.jsx)("h1",{className:"heading",children:"RAK BUKU"}),Object(b.jsxs)("div",{className:"flex jcsb",children:[Object(b.jsx)(g,{}),Object(b.jsx)(h,{to:"addbook",innerText:"Tambah Buku",className:"add"})]}),Object(b.jsx)(v,{books:e.books,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook}),Object(b.jsx)(B,{books:e.books,toggleIsComplete:e.toggleIsComplete,deleteBook:e.deleteBook,editBook:e.editBook})]})},C=o(12);var S=function(e){var t=Object(j.f)(),o=Object(C.useState)(e.currentBook),c=Object(r.a)(o,2),a=c[0],s=c[1],n=function(e){var t=e.target,o=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},a),{},Object(u.a)({},o,c)))};return Object(b.jsxs)("form",{className:"AddBookForm",onSubmit:function(o){o.preventDefault(),e.updateBook(a.id,a),t("/")},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"inputForJudulBuku",children:"Judul Buku"}),Object(b.jsx)("input",{type:"text",id:"titleBook",name:"title",value:a.title,onChange:n,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"inputForPenulis",children:"Penulis"}),Object(b.jsx)("input",{type:"text",id:"author",name:"author",value:a.author,onChange:n,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"inputForTahun",children:"Tahun"}),Object(b.jsx)("input",{type:"number",id:"year",name:"year",value:a.year,onChange:n})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"selesaiDibaca",children:"Selesai dibaca"}),Object(b.jsx)("input",{type:"checkbox",id:"completeCheckbox",name:"isComplete",checked:a.isComplete,onChange:n})]}),Object(b.jsxs)("div",{className:"flex jcc",children:[Object(b.jsx)(m,{value:"Update Buku",className:"m-10"}),Object(b.jsx)(h,{to:"/",innerText:"Kembali",className:"cancel m-10"})]})]})};var y=function(e){return Object(b.jsxs)("div",{className:"form-container card shadow-dark container",children:[Object(b.jsx)("h1",{className:"heading",children:"EDIT BUKU"}),Object(b.jsx)(S,{currentBook:e.currentBook,updateBook:e.updateBook})]})};var F=function(){return Object(b.jsx)("div",{className:"center",children:Object(b.jsxs)("p",{children:["Design and Coded by ",Object(b.jsx)("a",{href:"https://nfathan.github.io/fathan-nasrullah/",children:"Fathan Nasrullah"})]})})};var I=function(){var e=Object(c.useState)((function(){return null!==JSON.parse(localStorage.getItem("books_data"))?JSON.parse(localStorage.getItem("books_data")):[]})),t=Object(r.a)(e,2),o=t[0],a=t[1],s=Object(c.useState)(!1),n=Object(r.a)(s,2),u=n[0],h=n[1],m=Object(c.useState)({}),O=Object(r.a)(m,2),x=O[0],f=O[1];return Object(c.useEffect)((function(){localStorage.setItem("books_data",JSON.stringify(o)),console.log(o)}),[o]),Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsx)(p,{})}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(N,{books:o,toggleIsComplete:function(e,t){a((function(o){return o.map((function(o){return o.id===e?Object(i.a)(Object(i.a)({},o),{},{isComplete:!t}):o}))}))},deleteBook:function(e){a(o.filter((function(t){return t.id!==e})))},editBook:function(e,t){t(),f({id:e.id,title:e.title,author:e.author,year:e.year,isComplete:e.isComplete})}})}),Object(b.jsx)(j.a,{path:"addbook",element:Object(b.jsx)(k,{books:o,checked:u,setChecked:h,addBook:function(e){e.id=o.length+1,e.isComplete=u,a([].concat(Object(l.a)(o),[e]))}})}),Object(b.jsx)(j.a,{path:"editbook",element:Object(b.jsx)(y,{currentBook:x,updateBook:function(e,t){a(o.map((function(o){return o.id===e?t:o})))}})})]}),Object(b.jsx)("footer",{children:Object(b.jsx)(F,{})})]})})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9fe85587.chunk.js.map