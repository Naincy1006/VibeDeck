const movies= [{
    title: "Love, Rosie",
    vibes: ["love","college","miscommunication","friendship"]
},
{
    title: "Leap Year",
    vibes: ["Marriage","ireland","train","slow-burn"]
},
{
    title: "Interstellar",
    vibes: ["space","time","cinematography","father-daughter"]
},
{
    title: "Five feet apart",
    vibes: ["disease","tragic","heartbreaking","bittersweet"]
},
{
    title: "People We Meet On Vacation",
    vibes: ["vacation","friendship","marriage","miscommunication"]
},
];
function recommend(vibesArray){
    const matches=movies.filter(movie => vibesArray.every(vibe=> movie.vibes.includes(vibe)));
    document.getElementById("result").innerHTML= matches.map(movie=>movie.title).join("<br>")
}   
document.addEventListener("DOMContentLoaded",()=>{
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const scrollStep=330;
    if(track && nextBtn && prevBtn){
        nextBtn.addEventListener('click',() =>{
            track.scrollBy({
                left: scrollStep,
                behavior: 'smooth'
            });
        });
        prevBtn.addEventListener('click',() =>{
            track.scrollBy({
                left: -scrollStep,
                behavior: 'smooth'
            });
        });
    } else{
        console.error("carousel elements missing! check your html ids.");
    }
});
const filterLinks = document.querySelectorAll('.dropdown-menu a');
const movieCards = document.querySelectorAll('.carousel-track .card');
    filterLinks.forEach(link => {
        link.addEventListener('click',(e) => {
            e.preventDefault();
            const filterValue= link.getAttribute('data-filter');
            movieCards.forEach(card => {
                const cardVibe= card.getAttribute('data-vibe');
                const vibeList= cardVibe ? cardVibe.split(' '):[];
                if (filterValue === 'all' || vibeList.includes(filterValue)){
                    card.style.display= 'block';
                }else{
                    card.style.display='none';
                }
            })
        })
    })
const  homeLink= document.querySelector('.n1');
const aboutLink= document.querySelector('.n5');
const homeView=document.getElementById('home-view');
const aboutView=document.getElementById('about-view');
aboutLink.addEventListener('click',(e)=>{
    e.preventDefault();
        homeView.classList.add('hidden');
        aboutView.classList.remove('hidden');
    
});
homeLink.addEventListener('click',(e)=>{
    e.preventDefault();
    aboutView.classList.add('hidden');
    homeView.classList.remove('hidden');
});
const navHome= document.querySelector('.n1');
const navExplore= document.querySelector('.n2');
const navAbout= document.querySelector('.n5');
const viewHome=document.getElementById('home-view');
const viewExplore=document.getElementById('explore-view');
const viewAbout=document.getElementById('about-view');
function clearAllViews(){
    viewHome.classList.add('hidden');
    viewExplore.classList.add('hidden');
    viewAbout.classList.add('hidden');

}
navHome.addEventListener('click', (e) =>{
    e.preventDefault();
    clearAllViews();
    viewHome.classList.remove('hidden');
});
navExplore.addEventListener('click', (e)=>{
    e.preventDefault();
    clearAllViews();
    viewExplore.classList.remove('hidden');
});
navAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    clearAllViews();
    viewAbout.classList.remove('hidden');
})
const exploreFilterButtons= document.querySelectorAll('.filter-btn');
const exploreCards= document.querySelectorAll('.explore-card');
exploreFilterButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const filterValue= button.getAttribute('data-filter').toLowerCase();
        exploreCards.forEach(card =>{
            const cardVibe=card.getAttribute('data-vibe')? card.getAttribute('data-vibe').toLowerCase(): '';
            
            if(filterValue==='all' || cardVibe.includes(filterValue)){
                card.style.display='block';
                
            
            }else{
                card.style.display='none';
            }
        });
    });
});