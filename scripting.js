async function getMessages() { // Retrieves the JSON for the messages and then puts them on the page
  const url =
    "https://jsonplaceholder.typicode.com/posts";
  const request = new Request(url);

  const response = await fetch(request);
  const messages = await response.json();

  fillPage(messages);
}

function make(type, content, parent) { // Create the HTML for a component of a single message
    const element = document.createElement(type);
    element.innerHTML=content;
    parent.append(element);
}

function fillPage(obj) { // Takes the JSON and puts them on the page

  for (const msg of obj) {
    const box = document.createElement("div");
    box.className="box";

    // Make the individual HTML elements that'll go in the message
    make("h4", "User #"+msg["userId"], box)
    make("h3", msg["title"], box)
    make("p", msg["body"], box)

    mediaPage.append(box) // Add that message to the page
  }
}

getMessages();