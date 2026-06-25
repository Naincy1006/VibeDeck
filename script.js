console.log("DATA:",MEDIA_DATA);
//HOME DATA RENDER
const homeTrack= document.getElementById("carouselTrack");
function renderHome(data){
    homeTrack.innerHTML="";
    data.forEach(item => {
        const card=document.createElement("div");
        card.className="card";
        card.dataset.id=item.id;
        card.innerHTML=`<img src="${item.img}" alt="${item.title}">`;
        homeTrack.appendChild(card);
    });
}
renderHome(MEDIA_DATA);
function renderHomeCards(){
    const track=document.getElementById("carouselTrack");
    track.innerHTML=MEDIA_DATA.map(item =>`<div class="card" data-id="${item.id}">
        <img src="${item.img}" alt="${item.title}">
        </div>
        `).join("");
}
//EXPLORE DATA RENDER
const exploreGrid=document.getElementById("exploreGrid");
function renderExplore(data){
    exploreGrid.innerHTML="";
    data.forEach(item =>{
        const card=document.createElement("div");
        card.className="explore-card";
        card.dataset.id=item.id;
        card.innerHTML=`<img src="${item.img}" alt="${item.title}">`;
        exploreGrid.appendChild(card);
    });
}
renderExplore(MEDIA_DATA);
function renderExploreCards(){
    const grid=document.getElementById("exploreGrid");
    grid.innerHTML=MEDIA_DATA.map(item =>`
        <div class="explore-card" data-id="${item.id}">
        <img src="${item.img}" alt="${item.title}">
        </div>
         `).join("");

}
document.addEventListener("DOMContentLoaded",()=>{
    renderHomeCards();
    renderExploreCards();
});
// FILTER FUNCTION
function applyFilter(filter){
    const cards=document.querySelectorAll(".explore-card");
        cards.forEach(card=> {
            const item= MEDIA_DATA.find(m=> m.id === card.dataset.id);
            if (!item) return;
            const match= filter==="all" || item.vibes.some(v => v.toLowerCase().includes(filter));
            card.style.display=match ? "block" : "none";
        });
    
}
document.querySelectorAll(".filter-btn").forEach(btn=>{
    btn.addEventListener("click",() =>{
        applyFilter(btn.dataset.filter);
    });
});

//modal
function openModal(item){

    document.getElementById("modalTitle").textContent=item.title;
    document.getElementById("modalImg").src=item.img;
    document.getElementById("modalDescription").textContent=item.description;
    document.getElementById("modalWiki").href=item.wiki;
    document.getElementById("modalLearnMore").href=item.learnMore;
    document.getElementById("movieModal").classList.remove("hidden");
    const vibesContainer=document.getElementById("modalVibes");
    vibesContainer.innerHTML=item.vibes.map(vibe => `<span class="vibe-tag">${vibe}</span>`).join("");
    
}
document.getElementById("closeModal").addEventListener("click",()=>{
    document.getElementById("movieModal").classList.add("hidden");
});
document.addEventListener("click",(e) =>{
    const card=e.target.closest(".card, .explore-card");
    if (!card) return;
    const item= MEDIA_DATA.find(m => m.id === card.dataset.id);
    console.log("modal opening" ,item);
    if (item) openModal(item);
});


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

