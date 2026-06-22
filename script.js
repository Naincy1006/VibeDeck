const movies= [{
    title: "Love, Rosie",
    vibes: ["love","college","miscommunication","friendship"]
},
{
    title: "Inception",
    vibes: ["Thought-Provoking","Time","Dreams","Sci-fi"]
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
}
];
function recommend(vibesArray){
        const cleanVibes= vibesArray.map(v => v.trim().toLowerCase()).filter(v=>v !=="");
        if (cleanVibes.length ===0){
            document.getElementById("result").innerHTML="Please type a vibe to filter.";
            return;
        }
        const matches=movies.filter(movie => cleanVibes.every(vibe=> movie.vibes.includes(vibe)));
    document.getElementById("result").innerHTML= matches.length>0
    ? matches.map(movie=>movie.title).join("<br>")
    : "No matching algorithmic recommendations found for that vibe combo!";
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

// navigation views switching engine
const navHome=document.querySelector('.n1');
const navExplore=document.querySelector('.n2');
const navRecommend=document.querySelector('.n4');
const navAbout=document.querySelector('.n5');

const viewHome=document.getElementById('home-view');
const viewExplore=document.getElementById('explore-view');
const viewRecommend=document.getElementById('recommendations-view');
const viewAbout=document.getElementById('about-view') || document.querySelector('.about-container');
function clearAllViews(){
    viewHome.classList.add('hidden');
    viewExplore.classList.add('hidden');
    viewRecommend.classList.add('hidden');    
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
navRecommend.addEventListener('click',(e) =>{
    e.preventDefault();
    clearAllViews();
    viewRecommend.classList.remove('hidden');
});
navAbout.addEventListener('click', (e)=>{
    e.preventDefault();
    clearAllViews();
    viewAbout.classList.remove('hidden');
});

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

const calcBtn=document.getElementById('calcRecommendBtn');
const vibeInput=document.getElementById('vibeInput');
if (calcBtn && vibeInput){
    calcBtn.addEventListener('click',()=>{
        const currentValues=vibeInput.value.split(',');
       recommend(currentValues);
        });
}
 
//dark and light mode
const themeToggle=document.getElementById('themeToggle');
themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')){
        themeToggle.textContent=' Dark Mode';
    }else{
        themeToggle.textContent=' Light Mode';
    }
});

// modal engine setup
const modal=document.getElementById('movieModal');
const modalClose=document.getElementById('modalClose');
const modalOverlay=document.getElementById('modalOverlay');
const modalImg=document.getElementById('modalImg');
const modalTitle=document.getElementById('modalTitle');
const modalVibes=document.getElementById('modalVibes');
function openModal(cardElement){
    const title=cardElement.getAttribute('data-title') || " Unknown Title";
    const vibeText=cardElement.getAttribute('data-vibe') || "";
    const imgSrc=cardElement.querySelector('img').getAttribute('src');
    modalTitle.textContent=title;
    modalImg.setAttribute('src',imgSrc);

    modalVibes.innerHTML='';
    if (vibeText){
        vibeText.split('').forEach(tag=>{
            const span=document.createElement('span');
            span.classList.add('modal-tag-pill');
            span.textContent=tag;
            modalVibes.appendChild(span);
        });
    }
modalOverlay.classList.remove('hidden');
}
function closeModal(){
    modalOverlay.classList.add('hidden');
}
document.addEventListener('click',(e)=>{
    const card=e.target.closest('.card, .explore-card');
    if (card){
        openModal(card);
    }
});
modalClose.addEventListener('click',closeModal);
modalOverlay.addEventListener('click',closeModal);

