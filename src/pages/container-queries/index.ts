import './style.css';

export function setupContainerQueries() {
  const boxList = document.getElementById('box-list');
  if (!boxList) return;

  const generateItems = (count: number) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push({
        id: i,
        title: `Box ${i}`,
        desc: "Resize the container to see the box change color & number of columns",
      });
    }
    return items;
  };

  const data = generateItems(12);

  const renderItems = (items: typeof data) => {
    boxList.innerHTML = items
      .map(
        (item) => `
         <div class="box">
            <div class="box-title">${item.title}</div>
            <p>${item.desc}</p>
          </div>
          `
      )
      .join("");
  };

  renderItems(data);
}