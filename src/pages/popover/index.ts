import "./style.css";

export const setupPopover = () => {
  const popover = document.getElementById("popover");
  if (!popover) return;
  popover.innerHTML = `<div class="popover-content">
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
</div>`;
};
