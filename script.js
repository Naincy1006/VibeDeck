console.log("DATA:",MEDIA_DATA);
//HOME DATA RENDER
const homeTrack= document.getElementById("carouselTrack");
function renderHome(data){
    if (!homeTrack) return;
    homeTrack.innerHTML="";
    data.forEach(item => {
        const card=document.createElement("div");
        card.className="card flex-none w-36 md:w-40 lg:w-52 cursor:pointer transition duration-300 hover:scale-105";
        card.dataset.id=item.id;
        card.innerHTML=`<img src="${item.img}" alt="${item.title}" class="w-full aspect-[2/3] object-cover rounded-xl shadow-lg">`;
        homeTrack.appendChild(card);
    });
}
//hiding recommendations content on home-view tab
function showHome(){
    home-view.classList.remove("hidden");
    recommendations-view.classList.add("hidden");
    home-view.innerHTML; renderHome();
}
function showRecommendations(){
    recommendations-view.classList.remove("hidden");
    home-view.classList.add("hidden");
    recommendations-view.innerHTML;renderRecommendations();
}
//EXPLORE DATA RENDER
const exploreGrid=document.getElementById("exploreGrid");
function renderExplore(data){
    if (!exploreGrid) return;
    exploreGrid.innerHTML="";
    data.forEach(item=>{
        const card=document.createElement("div");
        card.className="card shrink-0 w-40 md:w-48 lg:w-56 cursor-pointer transition duration-300 hover:scale-105";
        card.dataset.id=String(item.id);
        card.innerHTML=`<img src="${item.img}" alt="${item.title}" class="w-full aspect-[2/3] rounded-xl shadow-lg object-cover">`;
        exploreGrid.appendChild(card);
    });

}
// INITIAL-RENDER
document.addEventListener("DOMContentLoaded", ()=>{
    renderHome(MEDIA_DATA);
    renderExplore(MEDIA_DATA);
});
// FILTER FUNCTION
function applyFilter(filter){
    const cards=document.querySelectorAll(".explore-card");
        cards.forEach(card=> {
            const item= MEDIA_DATA.find(m=> String(m.id) === card.dataset.id);
            if (!item) return;
            const match= filter==="all" || item.vibes.some(v => v.toLowerCase().includes(filter));
            card.classList.toggle("hidden", !match);
        });
    
}
document.querySelectorAll(".filter-btn").forEach(btn=>{
    btn.addEventListener("click",() =>{
        applyFilter(btn.dataset.filter);
    });
});

//modal
function openModal(item){
    if (!item) return;

    document.getElementById("modalTitle").textContent=item.title;
    document.getElementById("modalImg").src=item.img;
    document.getElementById("modalDescription").textContent=item.description;
    document.getElementById("modalWiki").href=item.wiki;
    document.getElementById("modalLearnMore").href=item.learnMore;
    document.getElementById("movieModal").classList.remove("hidden");
    const vibesContainer=document.getElementById("modalVibes");
    vibesContainer.innerHTML=item.vibes.map(vibe => `<span class="rounded-full bg-amber-500/15 border border-amber-500/30 px-3 py-1 text-sm text-amber-300">${vibe}</span>`).join("");
    document.getElementById("movieModal").classList.remove("hidden");
    
}
document.getElementById("closeModal").addEventListener("click",()=>{
    document.getElementById("movieModal").classList.add("hidden");
});
//CLICK HANDLING
document.addEventListener("click",(e) =>{
    const card=e.target.closest(".card, .explore-card");
    if (!card) return;
    const item= MEDIA_DATA.find(m => String(m.id) === card.dataset.id);
    console.log("modal opening" ,item);
    if (item) openModal(item);
});
//carousel

document.addEventListener("DOMContentLoaded",()=>{
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const scrollStep=300;
    if(!track || !nextBtn || !prevBtn) return;
        nextBtn.addEventListener('click',() =>{
            track.scrollBy({
                left: scrollStep,
                behavior: "smooth"
            });
        });
        prevBtn.addEventListener('click',() =>{
            track.scrollBy({
                left: -scrollStep,
                behavior: "smooth"
            });
        });
    
});

// navigation views switching engine
const navHome=document.querySelector('.n1');
const navExplore=document.querySelector('.n2');
const navRecommend=document.querySelector('.n4');
const navAbout=document.querySelector('.n5');

const viewHome=document.getElementById('home-view');
const viewExplore=document.getElementById('explore-view');
const viewRecommend=document.getElementById('recommendations-view');
const viewAbout=document.getElementById('about-view');
const allViews=[viewHome,viewExplore,viewRecommend,viewAbout];
function showView(view){
    allViews.forEach(v=>v?.classList.add("hidden"));
    view?.classList.remove("hidden");
}
navHome?.addEventListener('click',(e)=>{
    e.preventDefault();
    showView(viewHome);
});
navExplore?.addEventListener('click',(e)=>{
    e.preventDefault();
    showView(viewExplore);
});
navRecommend?.addEventListener('click',(e)=>{
    e.preventDefault();
    showView(viewRecommend);
});
navAbout?.addEventListener('click',(e)=>{
    e.preventDefault();
    showView(viewAbout);
});
//dark and light mode
const themeToggle=document.getElementById('themeToggle');
themeToggle?.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark');
    const isDark=document.documentElement.classList.contains("dark");
    themeToggle.textContent=isDark
         ? "\u2600 Light Mode"
         : "\u263E Dark Mode"
});

