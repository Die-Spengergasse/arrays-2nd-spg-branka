//TODO: button "use as input" next to input fields

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};

const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);

const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexOf);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);

const button_splice = document.getElementById("button_splice");
button_splice.addEventListener("click", splice);

const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);

const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);

const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);

const button_join = document.getElementById("button_join");
button_join.addEventListener("click", join);

const button_some = document.getElementById("button_some");
button_some.addEventListener("click", some);

const button_reverse = document.getElementById("button_reverse");
button_reverse.addEventListener("click", reverse);

const button_spread = document.getElementById("button_spread");
button_spread.addEventListener("click", spread);

const button_reduce = document.getElementById("button_reduce");
button_reduce.addEventListener("click", reduce);

// const button_input1 = document.getElementById("button_input1");
// button_input1.addEventListener("click", useAsInput);

// function useAsInput() {
//     const input1Value = input1.value;
//     input1.value = "";
//     input1.value = input1Value;
//     console.log(input1Value);
// }

function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    i1.push(i2);
    output.publish(i1);
}

function indexOf() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const index = i1.indexOf(i2);
    output.publish(index);
}

function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const includesValue = i1.includes(i2);
    output.publish(includesValue);
}

function slice() {
    const i1 = eval(input1.value);
    const start = parseInt(input2.value);
    const end = parseInt(input3.value);
    const slicedArray = i1.slice(start, end);
    output.publish(slicedArray);
}

function splice() {
    const i1 = eval(input1.value);
    const start = parseInt(input2.value);
    const deleteCount = parseInt(input3.value);
    i1.splice(start, deleteCount);
    output.publish(i1);
}

function of() {
    const i1 = Array.of(eval(input1.value));
    output.publish(i1);
}

function map() {
    const i1 = eval(input1.value);
    const mappedArray = i1.map((element) => element * 2);
    output.publish(mappedArray);
}

function filter() {
    const i1 = eval(input1.value);
    const filteredArray = i1.filter((element) => element % 2 === 0);
    output.publish(filteredArray);
}

function split() {
    const i1 = input1.value;
    const separator = input2.value;
    const splitArray = i1.split(separator);
    output.publish(splitArray);
}

function join() {
    const i1 = eval(input1.value);
    const separator = input2.value;
    const joinedString = i1.join(separator);
    output.publish(joinedString);
}

function some() {
    const i1 = eval(input1.value);
    const someResult = i1.some((element) => element > 10);
    output.publish(someResult);
}

function reverse() {
    const i1 = eval(input1.value);
    i1.reverse();
    output.publish(i1);
}

function spread() {
    const i1 = eval(input1.value);
    const newArray = [...i1];
    output.publish(newArray);
}

function reduce() {
    const i1 = eval(input1.value);
    const initialValue = parseInt(input2.value);
    const sum = i1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    output.publish(sum);
}
