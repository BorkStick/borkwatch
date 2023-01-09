const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const domainList = [
  "https://domain.com",
  "https://bork.com",
  "https://google.com",
  "https://reddit.com",
];

// store  list items
const listItems = [];

let dragStartIndex;

createList();

// insert list items into dom
function createList() {
  [...domainList].forEach((domain, index) => {
    const listItem = document.createElement("li");

    listItem.setAttribute("data-index", index);

    listItem.innerHTML = `
    <div class="container-fluid">
      <div class="card bg-dark">
        <div class="card-header row">
          <div class="mb-0 col-10">
            <button class="btn btn-link btn-block text-left" type="button">
              <div class="watch-item-name">
                  ${domain}

              </div>
            </button>
          </div>

          <div class="watch-item-status col-2">
            <button type="submit" class="watch-item-status-button">
              <i class="fas fa-sync"></i>
            </button>
          </div>
        
        </div>
      </div>
    </div>
        `;

    draggable_list.appendChild(listItem);
  });
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("domain-input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("draggable-list").appendChild(li);
  }
  document.getElementById("domain-input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
