let todos = [
  {
    id: 0,
    title: "Putzen",
    category: "open",
  },
  {
    id: 1,
    title: "Kochen",
    category: "open",
  },
  {
    id: 2,
    title: "Einkaufen",
    category: "closed",
  },
];

let currentDraggedElement;

function updateHTML() {
  let open = todos.filter((t) => t["category"] == "open");
  document.getElementById("open").innerHTML = "";

  open.forEach((index) => {
    const element = index;
    document.getElementById("open").innerHTML += generateTodoHTML(element);
  });

  let close = todos.filter((t) => t["category"] == "closed");
  document.getElementById("closed").innerHTML = "";

  close.forEach((index) => {
    const element = index;
    document.getElementById("closed").innerHTML += generateTodoHTML(element);
  });
}

function generateTodoHTML(element) {
  return `<div draggable='true' ondragstart='startDragging(${element["id"]})' class='todo'>${element["title"]}</div>`;
}

function startDragging(id) {
  currentDraggedElement = id;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function highlight(id) {
  document.getElementById(id).classList.add("drag-area-highight");
}

function removeHighlight() {}
