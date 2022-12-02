const addForm = document.querySelector(".form--add");

const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector(".content").appendChild(element);
};

const searchElements = (e, nameElement) => {
    e.preventDefault();
    const infoElement = document.querySelector(".result");
    infoElement.textContent = "";
    const elements = document.querySelectorAll(nameElement);
    if (elements.length) {
        infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie znalazłem ${elements.length} elementów <strong>${nameElement}</strong></p>`;
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result__number-info">W tym dokumencie nie znalazłem elementów <strong>${nameElement}</strong></p>`;
        return;
    }
};

const showInfo = (elements, infoElement) => {
    elements.forEach((element) => {
        const item = document.createElement("div");
        item.className = "result__element-description";
        item.innerHTML = `
            <div>${element.nodeName}</div>        
            <div>class/classes: ${element.className}</div>        
            <div>Height of element: ${element.offsetHeight}</div>        
            <div>Width of element: ${element.offsetWidth}</div>        
            <div>Distance from left edge: ${element.offsetLeft}</div>        
            <div>Distance from top edge: ${element.offsetTop}</div>        
            <div>Children amount: ${element.chilElementCount}</div>        
        `;
        infoElement.appendChild(item);
    });
};

addForm.addEventListener("submit", (e) =>
    addElement(
        e,
        addForm.elements.node.value,
        addForm.elements.text.value,
        addForm.elements.attr.value,
        addForm.elements.value.value
    )
);

const searchForm = document.querySelector(".form--search");
searchForm.addEventListener("submit", (e) =>
    searchElements(e, searchForm.elements["searching-element"].value)
);
