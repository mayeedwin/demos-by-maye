import "./style.css";

export const setupCssTransitions = () => {
  const transaitions = document.getElementById("css-transitions");
  if (!transaitions) return;
  transaitions.innerHTML = `<div class="transitions-content">
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
      </div>`;
};
