const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const domainList = [
    'domain.com',
    'bork.com',
    'google.com',

];

// store  list items
const listItems = [];

let dragStartIndex;

createList();

// insert list items into dom
function createList() {
    [...domainList]
    .forEach((domain, index) => {
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <div class="card bg-dark">
        <div class="card-header row" id="headingTwo">
          <div class="watch-item-status col-2">
            <button type="submit" class="watch-item-status-button"><i class="fas fa-sync"></i></button>
          </div>
          <h2 class="mb-0 col-8">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
              data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ${domain}
            </button>
          </h2>
          <div class="watch-item-remove col-2">
            <button type="submit" class="watch-item-remove-button"><i class="fas fa-trash-alt    "></i></button>
          </div>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
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
    if (inputValue === '') {
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
        }
    }
}
