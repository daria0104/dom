export function createToast(element) {
    let divElem = document.createElement('div');
    divElem.className = 'toast';
    divElem.style.position = 'fixed';
    divElem.style.top = '20px';
    divElem.style.right = '20px';
    divElem.appendChild(element);
    return divElem;
}