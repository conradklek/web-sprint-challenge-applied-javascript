const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement("div");
  header.classList.add("header");
  const date = document.createElement("span");
  date.classList.add("date");
  date.textContent = date;
  const title = document.createElement("h1");
  title.textContent = title;
  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = temp;
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);
  return header;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const element = document.querySelector(selector);
  element.appendChild(Header("My First Post", "be gentle", "32"));
};

export { Header, headerAppender };
