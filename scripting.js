async function getMessages() {
  const url =
    "https://jsonplaceholder.typicode.com/posts";
  const request = new Request(url);

  const response = await fetch(request);
  const messages = await response.json();

  fillPage(messages);
}

function make(type, content, parent) {
    const element = document.createElement(type);
    element.innerHTML=content;
    parent.append(element);
}

function fillPage(obj) {

  for (const msg of obj) {
    const box = document.createElement("div");
    box.className="box";

    make("h4", msg["userId"], box)
    make("h3", msg["title"], box)
    make("p", msg["body"], box)

    mediaPage.append(box)
  }
}

getMessages();