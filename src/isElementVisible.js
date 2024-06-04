export function isElementVisible(element) {
    if(!element || element == undefined)
        return false;
    return !!element.offsetHeight || !!element.offsetWidth;
}