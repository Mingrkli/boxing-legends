// Intersection Observer
const scrollShow = document.querySelectorAll('.showable')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.add('show', entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    threshold: .5,
})

scrollShow.forEach(para => {
    observer.observe(para)
})