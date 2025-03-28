(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const l=[{id:"container-queries",title:"Container Queries",path:"/container-queries",desc:"Container queries are a new feature that allows you to style elements based on the size of their container, rather than the size of the viewport"},{id:"popover",title:"Popover",path:"/popover",desc:"A popover is a small overlay that appears on top of a page when a user clicks on an element. It is used to display additional information or actions"},{id:"dialog-element",title:"Dialog",path:"/dialog-element",desc:"The new <b>dialog</b> element has been added to the HTML5 spec and became stable across all major browsers"},{id:"css-transitions",title:"CSS Transitions",path:"/css-transitions",desc:"Using CSS transitions to interpolate between the initial state and the target state of the element e.g color, width, height, opacity, etc"},{id:"view-transitions",title:"View Transitions",path:"/view-transitions",desc:"Create seamless visual transitions between different views on your website or web app"}],p=()=>{const e=document.getElementById("box-list");if(!e)return;const s=(t=>{const i=[];for(let o=1;o<=t;o++)i.push({id:o,title:`Box ${o}`,desc:"Resize the container to see the box change color & number of columns"});return i})(12);(t=>{e.innerHTML=t.map(i=>`
         <div class="box">
            <div class="box-title">${i.title}</div>
            <p>${i.desc}</p>
          </div>
          `).join("")})(s)},u=()=>{const e=document.getElementById("popover");e&&(e.innerHTML=`<div class="popover-content">
        <button class="popover-trigger" popovertarget="my-popover">
          Open Popover
        </button>
        <div id="my-popover" popover>
          <div class="show-content">
            <p>I am a popover with more information</p>
            <button
              popovertarget="my-popover"
              popovertargetaction="hide"
              class="btn-small btn-outline"
            >
              Close
            </button>
          </div>
        </div>
</div>`)},v=()=>{const e=document.getElementById("dialog-element");e&&(e.innerHTML=`<dialog id="dialog">
        <header>
          <div class="dialog-title">Dialog Title</div>
          <button class="btn-small" onclick="dialog.close()">Close</button>
        </header>
        <div class="dialog-content">
          Hey, I am a dialog content and I can be used to display important
          information to the user.
        </div>
      </dialog>
      <button onclick="dialog.showModal()">Open Dialog</button>`)},m=()=>{const e=document.getElementById("css-transitions");e&&(e.innerHTML=`<div class="transitions-content">
        <div class="transitions-box rotate">
          <h4>Rotate</h4>
          <p>Hover me to see the transition with <b>rotate(5deg)</b></p>
        </div>
        <div class="transitions-box bg-color">
          <h4>Background Color</h4>
          <p>Hover me to see the transition with <b>background-color</b></p>
        </div>
        <div class="transitions-box all">
          <h4>All Properties</h4>
          <p>Hover me to see the transition with <b>all</b></p>
        </div>
        <div class="transitions-box delay">
          <h4>Delay</h4>
          <p>
            Transition-delay in action, display delay interval of 0.2s for h4,
            0.4s for p using opacity
          </p>
          <p class="delay-content">
            <span>Hover me to see the transition with <b>delay</b></span>
          </p>
        </div>
      </div>`)},h=()=>{const e=document.getElementById("same-document-transition"),n=document.getElementById("view-transitions-type-content");if(!e||!n)return;const s=o=>{if(o.preventDefault(),!document.startViewTransition){alert("View transition not supported");return}document.startViewTransition(()=>{console.log("Transition started")})};e.addEventListener("click",s);const a=new Set,t=()=>{const o=document.createElement("div");o.className="view-transitions-type-card";const r=[{bg:"var(--blue-100)",border:"var(--blue-200)"},{bg:"var(--pink-100)",border:"var(--pink-200)"},{bg:"var(--cyan-100)",border:"var(--cyan-200)"},{bg:"var(--green-100)",border:"var(--green-200)"}];let d;do d=Math.floor(Math.random()*r.length);while(a.has(d)&&a.size<r.length);return a.add(d),a.size===r.length&&a.clear(),o.style.backgroundColor=r[d].bg,o.style.borderColor=r[d].border,o};(o=>{for(let r=0;r<o;r++)n.appendChild(t())})(4)},g=()=>{const e=document.getElementById("view-transitions");e&&(e.innerHTML=` <div class="view-transitions-content">
        <div class="view-transitions-types">
          <div id="same-document-transition" class="view-transitions-type">
            <div class="view-transitions-type-title">Same-document</div>
            <p class="view-transitions-type-desc">
              Runs on a single document, this is typically the case in
              single-page applications (SPAs). Supported in Chrome from Chrome
              111
            </p>
          </div>
          <div id="cross-document-transition" class="view-transitions-type">
            <div class="view-transitions-type-title">Cross-document</div>
            <p class="view-transitions-type-desc">
              Occurs between two different document, typical for MPAs. Supported
              in Chrome 126 and greater
            </p>
          </div>
        </div>
        <div
          id="view-transitions-type-content"
          class="view-transitions-type-content"
        ></div>
      </div>`,h())},c=(e,n,s=!0)=>`${s?`<header class="header">
        <a class="back btn btn-small btn-outline" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path
              d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"
            ></path>
          </svg>
          <span>Back</span></a
        >
      </header>`:""}
  <h1>${e}</h1>
  <p class="subtitle">
    ${n}
  </p>`,b=()=>{const e=window.location.pathname,n=l.find(s=>s.path===e);return e==="/"?`${c("Demos by Maye","Here are some of the demos I have created using vanilla JavaScript.",!1)}
    <div class="demos">
      ${l.map(s=>`
        <a href="${s.path}" class="demo">
          <div class="demo-title">
            <img src="/assets/images/web-demo.svg" alt="${s.title}" />
            <span>${s.title}</span>
          </div>
          <p class="demo-description">${s.desc}</p>
        </a>
      `).join("")}
    </div>`:n?`${c(n.title,n.desc)}
    <section id="${n.id}" class="${n.id}"></section`:`${c("404","Page not found")}`};document.querySelector("#app").innerHTML=`
  <main>${b()}</main>
`;const f=()=>{const e=window.location.pathname,n=l.find(s=>s.path===e);if(n)switch(n.id){case"container-queries":return p();case"popover":return u();case"dialog-element":return v();case"css-transitions":return m();case"view-transitions":return g();default:return}};f();
