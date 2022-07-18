// Intersection Observer
const legendPara = document.querySelectorAll('.legend-para')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.add('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: .5,
})

legendPara.forEach(para => {
    observer.observe(para)
})