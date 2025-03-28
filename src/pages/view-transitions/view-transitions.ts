import { ColorFamily } from '../types';

export function setupViewTransitions() {
  const sameDocumentTransition = document.getElementById(
    "same-document-transition"
  );
  const viewTransitionsTypeContent = document.getElementById(
    "view-transitions-type-content"
  );

  if (!sameDocumentTransition || !viewTransitionsTypeContent) return;

  const handleViewTransition = (event: Event) => {
    event.preventDefault();
    // @ts-ignore - startViewTransition is not in the types yet
    if (!document.startViewTransition) {
      alert("View transition not supported");
      return;
    }
    // @ts-ignore
    document.startViewTransition(() => {
      console.log("Transition started");
    });
  };

  sameDocumentTransition.addEventListener("click", handleViewTransition);

  const usedColorIndices = new Set<number>();

  const ViewTransitionsTypeCard = () => {
    const div = document.createElement("div");
    div.className = "view-transitions-type-card";
    
    const colorFamilies: ColorFamily[] = [
      { bg: "var(--blue-100)", border: "var(--blue-200)" },
      { bg: "var(--pink-100)", border: "var(--pink-200)" },
      { bg: "var(--cyan-100)", border: "var(--cyan-200)" },
      { bg: "var(--green-100)", border: "var(--green-200)" }
    ];

    let colorIndex: number;
    do {
      colorIndex = Math.floor(Math.random() * colorFamilies.length);
    } while (
      usedColorIndices.has(colorIndex) &&
      usedColorIndices.size < colorFamilies.length
    );

    usedColorIndices.add(colorIndex);
    if (usedColorIndices.size === colorFamilies.length) {
      usedColorIndices.clear();
    }

    div.style.backgroundColor = colorFamilies[colorIndex].bg;
    div.style.borderColor = colorFamilies[colorIndex].border;
    return div;
  };

  const renderViewTransitions = (count: number) => {
    for (let i = 0; i < count; i++) {
      viewTransitionsTypeContent.appendChild(ViewTransitionsTypeCard());
    }
  };

  renderViewTransitions(4);
}