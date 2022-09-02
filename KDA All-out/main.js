import newElement from "./newElement.js";

// const docInit = {

//   body: document.body,
//   root: document.getElementById('root'),
  
// }


// docStyling.reset(docInit.body, '0', '0', 'border-box');
// docStyling.size(docInit.root, '100vw', '100vh');

const root = document.getElementById('root');

const docStyling = {
  size: function(element, width, height) {
    element.style.width = width;
    element.style.height = height;
  },
  reset: function(element, margin, padding, boxSizing) {
    element.style.margin = margin;
    element.style.padding = padding;
    element.style.boxSizing = boxSizing;
  }
}

docStyling.size(root, '100vw', '100vh');


newElement('header', 'id','header', {
  width: '100%',
  height: '100%',
  backgroundColor : 'crimson',
}, root, '');




newElement('ul', 'id', 'ul', {
  
  width: '30%',
  listStyle: 'none',
  paddingBottom: '23px'
}, header,'');

// newElement('li', 'li', {
  
//   width: '30%',
//   listStyle: 'none',
// }, ul,'');


