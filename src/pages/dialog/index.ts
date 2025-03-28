import "./style.css";

export const setupDialog = () => {
  const dialog = document.getElementById("dialog-element");
  if (!dialog) return;
  dialog.innerHTML = `<dialog id="dialog">
        <header>
          <div class="dialog-title">Dialog Title</div>
          <button class="btn-small" onclick="dialog.close()">Close</button>
        </header>
        <div class="dialog-content">
          Hey, I am a dialog content and I can be used to display important
          information to the user.
        </div>
      </dialog>
      <button onclick="dialog.showModal()">Open Dialog</button>`;
};
