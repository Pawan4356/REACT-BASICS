**Understanding the basics on how react works internally (Overview)**

Calling the **JS file** and **root** element

```html
<div id="root"></div>
<script src="./react.js"></script>
```
Creating React Element

```js
const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click to visit Google!"
}
```

Creating Main Container to call the root element by ID

```js
const mainContainer = document.getElementById("root")
customRenderer(reactElement, mainContainer)
```
Custom Renderer which uses the react element and the container
It works but this is not generalized!

```js
function customRenderer(element, container) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute("href", element.props.href)
    domElement.setAttribute("target", element.props.target)
    container.appendChild(domElement)
}
```
Much Better!!

```js
function customRenderer(element, container) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props.prop)
    }
    container.appendChild(domElement)
}
```