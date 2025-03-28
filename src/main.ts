import './style.css';
import { demos } from './demos';
import { setupContainerQueries } from './pages/container-queries';
import { setupViewTransitions } from './pages/view-transitions';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
  <h1>Demos by Maye</h1>
  <p class="subtitle">
    Here are some of the demos I have created using vanilla JavaScript.
  </p>
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
        .join('')}
    </div>
  </main>
`;


const getPage = (page: string) {

  switch(page) 
}
