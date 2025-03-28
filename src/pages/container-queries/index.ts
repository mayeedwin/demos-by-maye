import "./style.css";

export const setupContainerQueries = () => {
  const container = document.getElementById("container-queries");
  if (!container) return;

  const generateItems = (count: number) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push({
        id: i,
        title: `Box ${i}`,
        desc: "Resize the container to see the box change color & number of columns"
      });
    }
    return items;
  };
  const data = generateItems(12);
  container.innerHTML = `<div class="box-list">${data
    .map(
      (item) => `
         <div class="box">
            <div class="box-title">${item.title}</div>
            <p>${item.desc}</p>
          </div>
          `
    )
    .join("")}</div>`;
};
