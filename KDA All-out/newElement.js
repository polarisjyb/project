export default function newElement(tagName, type,name, props, parent = document.body, innderHTML = '') {
  if(typeof (props) === 'object' && typeof (tagName) === 'string' ) {
    let element = document.createElement(tagName);
    element.innerHTML = innderHTML;
    element.setAttribute(type,name)
    for (const cssValue in props) {
      console.log(cssValue);
      if(cssValue === 'id') {
        element.id = props[cssValue];
      } else {
        element.style[cssValue] = props[cssValue];
      }
    }
    return parent.appendChild(element);
    
    // console.log(props);
  }
}



