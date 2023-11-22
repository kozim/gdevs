let options = {
    root: document.querySelector(".snap-container"),
    rootMargin: "10px",
    threshold: 1.0,
  };
  
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, options);

const snapSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        // console.log(entry);
        if(entry.isIntersecting) {
            entry.target.dataset.color === 'dark' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
        }
    });
}, options);

const hiddenElements = document.querySelectorAll('.gd-hidden, .gd-hidden-right');
hiddenElements.forEach((el)=> {
    observer.observe(el)
});

const snapAreas = document.querySelectorAll('.slide.snap');
snapAreas.forEach((el)=> {
    snapSectionObserver.observe(el)
});


/* Set width of all animated text to match container */
let parent = document.querySelectorAll('.animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};

// mobile menu toggle
const mobileToggleBtn = document.querySelector('[data-collapse-toggle="navbar-default"]'),
        navDropDown = document.querySelector('#navbar-default');
        
mobileToggleBtn.addEventListener('click', function () {
    let isExpanded = this.getAttribute('aria-expanded') === 'false';
    this.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    
    if(!isExpanded) {
        navDropDown.classList.add('hidden');
    } else {
        navDropDown.classList.remove('hidden');
    }
});