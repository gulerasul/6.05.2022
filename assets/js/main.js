let fruit1 = document.querySelector(".fruit1");
let fruit2 = document.querySelector(".fruit2");
let fruit3 = document.querySelector(".fruit3");
let fruit = document.querySelector(".fruit")
let dragItem;
fruit1.ondragstart = function () {
    dragItem = this;
}
fruit2.ondragstart = function () {
    dragItem = this;
}
fruit3.ondragstart = function () {
    dragItem = this;
}
fruit.ondragover = function (e) {
    e.preventDefault();
}

fruit.ondrop = function () {
    fruit.appendChild(dragItem);
}


let vegetable1 = document.querySelector(".vegetable1");
let vegetable2 = document.querySelector(".vegetable2");
let vegetable3 = document.querySelector(".vegetable3");
let vegetable = document.querySelector(".vegetable")
let dragItem1;

vegetable1.ondragstart = function () {
    dragItem1 = this;
}
vegetable2.ondragstart = function () {
    dragItem1 = this;
}
vegetable3.ondragstart = function () {
    dragItem1 = this;
}
vegetable.ondragover = function (e) {
    e.preventDefault();
}

vegetable.ondrop = function () {
    vegetable.appendChild(dragItem1);
}
