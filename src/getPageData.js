export function getPageData() {
    let result = {
        windowHeight: 200,
        windowWidth: 100,
    
        documentHeight: 300,
        documentWidth: 400,
        
        currentScrollFromTop: 100,
        currentScrollFromLeft: 100,
    };
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );

      return {
        windowHeight: scrollHeight,
        windowWidth: scrollWidth,
    
        documentHeight: Math.max(document.body.clientHeight, document.documentElement.clientHeight),
        documentWidth: Math.max(document.body.clientWidth, document.documentElement.clientWidth),
        
        currentScrollFromTop: window.scrollY,
        currentScrollFromLeft: window.scrollX,
      };
}