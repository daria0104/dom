export function createBlurredCoverElement(elementToCover) {
    let elem = document.createElement('div');
    elem.className = 'cover';
    elem.style.position = 'absolute';
    let elementToCoverSize = elementToCover.getBoundingClientRect();
console.log(elementToCoverSize);

    elem.style.width = `${elementToCoverSize.width}px`;
    elem.style.height = `${elementToCoverSize.height}px`;

    elem.style.top = `${elementToCoverSize.top}px`;
    elem.style.left = `${elementToCoverSize.left}px`;

    return elem;
}
  
   