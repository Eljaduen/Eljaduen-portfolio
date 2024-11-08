document.addEventListener('astro:page-load', ()=> {
    for (const element of document.querySelectorAll('#fade-image')) {
        element.classList.remove('scale-90')
    }
})