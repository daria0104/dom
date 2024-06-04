export function isElementScrolled(element) {
    if(!element){
        return {
            scrollTop: null,
            scrollLeft: null,
            isScrolled:  null,
        };
    }

    return {
        scrollTop: element.scrollTop,
        scrollLeft: element.scrollLeft,
        isScrolled:  ((element.scrollTop ||element.scrollLeft) ? true : false),
    };
}