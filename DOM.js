
const container = document.createElement("div");
container.className = "event-card";
const para = document.createElement("p");
const body = document.body;
para.setAttribute("id", "container1"); // Setting an attribute on an HTML element
container.appendChild(para);
body.appendChild(container);

para.innerHTML = 'Hello World';
container.textContent = 'Hello World';
para.style.color = 'red';
para.style.fontSize = '40px';
body.style.backgroundColor = "gray"