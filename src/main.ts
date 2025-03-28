import "./style.css";

import { demos } from "./demos";
import { setupContainerQueries } from "./pages/container-queries";
import { setupPopover } from "./pages/popover";
import { setupDialog } from "./pages/dialog";
import { setupCssTransitions } from "./pages/css-transitions";
import { setupViewTransitions } from "./pages/view-transitions";

const getHeader = (title: string, desc: string, showHeader = true) => {
  const header = showHeader
    ? `<header class="header">
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
      </header>`
    : "";
  return `${header}
  <h1>${title}</h1>
  <p class="subtitle">
    ${desc}
  </p>`;
};

const renderPage = () => {
  const path = window.location.pathname;
  const demo = demos.find((d) => d.path === path);

  if (path === "/") {
    return `${getHeader(
      "Demos by Maye",
      "Here are some of the demos I have created using vanilla JavaScript.",
      false
    )}
    <div class="demos">
      ${demos
        .map(
          (demo) => `
        <a href="${demo.path}" class="demo">
          <div class="demo-title">
            <img src="/assets/images/web-demo.svg" alt="${demo.title}" />
            <span>${demo.title}</span>
          </div>
          <p class="demo-description">${demo.desc}</p>
        </a>
      `
        )
        .join("")}
    </div>`;
  }
  return demo
    ? `${getHeader(demo.title, demo.desc)}
    <section id="${demo.id}" class="${demo.id}"></section`
    : `${getHeader("404", "Page not found")}`;
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main>${renderPage()}</main>
`;

const initializePage = () => {
  const path = window.location.pathname;
  const demo = demos.find((d) => d.path === path);

  if (!demo) return;

  switch (demo.id) {
    case "container-queries":
      return setupContainerQueries();
    case "popover":
      return setupPopover();
    case "dialog-element":
      return setupDialog();
    case "css-transitions":
      return setupCssTransitions();
    case "view-transitions":
      return setupViewTransitions();
    default:
      return;
    // Add other cases as needed
  }
};

initializePage();
