document.addEventListener("DOMContentLoaded", () => {
    // article typerwiter
    const article = document.querySelector(".devlog-full");
    
    if (article) {
        
        const elementsToType = article.querySelectorAll("h1, h2, p, li");
        
       
        const contentData = Array.from(elementsToType).map(el => {
            const originalHTML = el.innerHTML;
            el.innerHTML = ""; 
            return { element: el, text: originalHTML };
        });

        let currentElementIndex = 0;
        let currentCharIndex = 0;

        function typeWriter() {
            if (currentElementIndex < contentData.length) {
                const currentObj = contentData[currentElementIndex];
                
                
                if (currentCharIndex < currentObj.text.length) {
                    
                    if (currentObj.text.charAt(currentCharIndex) === '<') {
                        
                        const tagEnd = currentObj.text.indexOf('>', currentCharIndex);
                        if (tagEnd !== -1) {
                            currentObj.element.innerHTML = currentObj.text.substring(0, tagEnd + 1);
                            currentCharIndex = tagEnd + 1;
                        }
                    } else {
                        currentObj.element.innerHTML = currentObj.text.substring(0, currentCharIndex + 1);
                        currentCharIndex++;
                    }
                    setTimeout(typeWriter, 20); 
                } else {
                    
                    currentElementIndex++;
                    currentCharIndex = 0;
                    setTimeout(typeWriter, 50); 
                }
            }
        }


        setTimeout(typeWriter, 400);
    }
});