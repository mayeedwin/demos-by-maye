import { Demo } from "./types";

export const demos: Demo[] = [
  {
    id: "container-queries",
    title: "Container Queries",
    path: "/container-queries",
    desc: "Container queries are a new feature that allows you to style elements based on the size of their container, rather than the size of the viewport"
  },
  {
    id: "popover",
    title: "Popover",
    path: "/popover",
    desc: "A popover is a small overlay that appears on top of a page when a user clicks on an element. It is used to display additional information or actions"
  },
  {
    id: "dialog-element",
    title: "Dialog",
    path: "/dialog-element",
    desc: `The new <b>dialog</b> element has been added to the HTML5 spec and became stable across all major browsers`
  },
  {
    id: "css-transitions",
    title: "CSS Transitions",
    path: "/css-transitions",
    desc: "Using CSS transitions to interpolate between the initial state and the target state of the element e.g color, width, height, opacity, etc"
  },
  {
    id: "view-transitions",
    title: "View Transitions",
    path: "/view-transitions",
    desc: "Create seamless visual transitions between different views on your website or web app"
  }
];
