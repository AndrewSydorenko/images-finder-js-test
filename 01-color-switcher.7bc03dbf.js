const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;t.addEventListener("click",(()=>{o=setInterval((()=>{n.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}),{once:!0}),e.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.7bc03dbf.js.map
