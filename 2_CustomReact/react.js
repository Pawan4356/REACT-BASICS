function customRenderer(element, container) {
    // It is not generalized
    // const domElement = document.createElement(element.type)
    // domElement.innerHTML = element.children
    // domElement.setAttribute("href", element.props.href)
    // domElement.setAttribute("target", element.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props.prop)
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click to visit Google!"
}

const mainContainer = document.getElementById("root")
customRenderer(reactElement, mainContainer)