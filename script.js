console.log("DATA:",MEDIA_DATA);

//HOME DATA RENDER
const keepcomingbackTrack= document.getElementById("keepcomingbackTrack");
const trendingTrack=document.getElementById("trendingTrack");
const critiallyacclaimedTrack=document.getElementById("criticallyacclaimedTrack");
function renderRow(track,data){
    if (!track) return;
    track.innerHTML="";
    data.forEach(item => {
        const card=document.createElement("div");
        card.className="card flex-none w-36 md:w-40 lg:w-52 cursor:pointer transition duration-300 hover:scale-105";
        card.dataset.id=item.id;
        card.innerHTML=`<img src="${item.img}" alt="${item.title}" class="w-full aspect-[2/3] object-cover rounded-xl shadow-lg">`;
        track.appendChild(card);
    });
}
//hiding recommendations content on home-view tab
function showHome(){
    home-view.classList.remove("hidden");
    recommendations-view.classList.add("hidden");
    home-view.innerHTML; renderRow();
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
        card.className="explore-card shrink-0 w-40 md:w-48 lg:w-56 cursor-pointer transition duration-300 hover:scale-105";
        card.dataset.id=String(item.id);
        card.innerHTML=`<img src="${item.img}" alt="${item.title}" class="w-full aspect-[2/3] rounded-xl shadow-lg object-cover">`;
        exploreGrid.appendChild(card);
    });

}
// INITIAL-RENDER
const keepcomingback=MEDIA_DATA.filter(item => [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].includes(item.id));
const trending=MEDIA_DATA.filter(item=> [16,17,18,19,20,21,22,23,24].includes(item.id));
const criticallyacc=MEDIA_DATA.filter(item=> [25,26,27,28,29,30,31,32,33,34].includes(item.id));
document.addEventListener("DOMContentLoaded", ()=>{
    renderRow(keepcomingbackTrack,keepcomingback);
    renderRow(trendingTrack,trending);
    renderRow(criticallyacclaimedTrack,criticallyacc);
    renderExplore(MEDIA_DATA);
});
// explore view searchbox

searchinput?.addEventListener("input",()=>{
    const query=searchinput.value.toLowerCase();
    console.log("query:",query);
    console.log("titles",MEDIA_DATA.map(item=>item.title));
    const filtered=MEDIA_DATA.filter(item=>item.title.toLowerCase().includes(query));
    console.log(filtered);
    renderExplore(filtered);
    if (filtered.length ===0){
        exploreGrid.innerHTML=`<p class="text-center text-gray-400 col-span-full">No results found.</p>`;
        return; 
    }
});
// FILTER FUNCTION
function applyFilter(filter){
    const cards=document.querySelectorAll(".card");
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
    vibesContainer.innerHTML=item.vibes.map(vibe => `<span class="rounded-full bg-blue-900/15 border border-blue-700/30 px-3 py-1 text-sm text-white">${vibe}</span>`).join("");
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
const heroExplore=document.getElementById("heroExplore");
const heroRecommend=document.getElementById("heroRecommend");
//hero section explore and recommendations buttons 
heroExplore?.addEventListener("click",()=>{
    showView(viewExplore);
});
heroRecommend?.addEventListener("click",()=>{
    showView(viewRecommend);
});

const viewHome=document.getElementById('home-view');
const viewExplore=document.getElementById('explore-view');
const viewRecommend=document.getElementById('recommendations-view');
const viewAbout=document.getElementById('about-view');
const allViews=[viewHome,viewExplore,viewRecommend,viewAbout];
function showView(view){
    console.log("showing:",view);
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

// recommendation-view stuff
const cozyRowTrack=document.getElementById("cozyRowTrack");
const teenRowTrack=document.getElementById("teenRowTrack");
const inputel=document.getElementById("moodInput");
const buttonel=document.getElementById("recommendBtn");
const resultsel=document.getElementById("recommendResults");
function getRecommendations(input){
    const query=input.toLowerCase();
    return MEDIA_DATA
       .map(item=>{
        let score=0;
        item.vibes.forEach(vibe =>{
            if(query.includes(vibe.toLowerCase())){
                score +=1;
            }
        });
        return {...item,score};
           })
           .filter(item => item.score >0)
           .sort((a,b)=> b.score - a.score);
}
function renderResults(items){
    resultsel.innerHTML="";
    if (items.length ===0){
        resultsel.innerHTML="<p>No matches found. Try different words.</p>";
        return;
    }
    items.forEach(item=>{
        const card=document.createElement("div");
        card.className="card bg-zinc-900 rounded-xl shadow-lg overflow-hidden max-w-sm w-full";
        card.innerHTML=`<img src="${item.img}" class="w-full h-56 object-cover" alt="${item.title}" />
        <h3>${item.title}</h3>
        <br>
        <p>${item.description}</p>
        <br>
        <div>
           ${item.vibes.map(v=>`<span class="tag rounded-full bg-zinc-900/15 border border-blue-700/30 px-3 py-1 text-sm text-blue-900">${v}</span>`).join(" ")}
        </div>
        <br>
        <a href="${item.learnMore}" target="_blank">LearnMore</a>
        `;
        resultsel.appendChild(card);
    });
}
function renderRow2(track,data){
    if (!track) return;
    track.innerHTML="";
    data.forEach(item => {
        const card=document.createElement("div");
        card.className="card flex-none w-36 md:w-40 lg:w-52 cursor:pointer transition duration-300 hover:scale-105";
        card.dataset.id=item.id;
        card.innerHTML=`<img src="${item.img}" alt="${item.title}" class="w-full aspect-[2/3] object-cover rounded-xl shadow-lg">`;
        track.appendChild(card);
    });
}
const cozyRow=MEDIA_DATA.filter(item=> [2,6,5,20,13].includes(item.id));
const teenRow=MEDIA_DATA.filter(item=> [3,4,18,19,2].includes(item.id));
document.addEventListener("DOMContentLoaded", ()=>{
    renderRow2(cozyRowTrack,cozyRow);
    renderRow2(teenRowTrack,teenRow);   
});
buttonel.addEventListener("click",()=>{
    const input=inputel.value.trim();
    if(!input) return;
    const results=getRecommendations(input);
    renderResults(results);
});
const recommendBtn=document.getElementById('recommendBtn');
const storiesContainer=document.getElementById('stories');
recommendBtn.addEventListener('click',()=>{
    storiesContainer.classList.add('hidden');
});
