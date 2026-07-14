const MEDIA_DATA=[
    {
        id: 1,
        title:"Inception",
        type: "movie",
        img: "assets/inception.jpg",
        vibes: ["Thought-Provoking", "Sci-fi","Dreams","Action"],
        description: "A thief who steals corporate secrets through dream-sharing technology is given by an inverse task of planting an idea.",
        wiki: "https://en.wikipedia.org/wiki/Inception",
        learnMore : "https://youtu.be/YoHD9XEInc0?si=EqVeNdGiRTHk2KF2"
    },
    {
        id: 2,
        title: "Love, Rosie",
        type: "movie",
        img: "assets/love_rosie.jpg",
        vibes: ["Friendship", "Miscommunications","Slow burn"],
        description: "Two best friends miss their timing at love while life keeps pulling them apart.",
        wiki: "https://en.wikipedia.org/wiki/Love,Rosie(film)",
        learnMore: "https://youtu.be/5zL3YJKygd4?si=b1GDCq1fCM71a3mU"
    },
    {
        id: 3,
        title: "All of Us Are Dead",
        type: "series",
        img: "assets/dead.jpg",
        vibes: ["Survival","Zombie Outbreak","Apocalypse","Friendship"],
        description: "Students trapped in a high school fight for survival during a zombie outbreak",
        wiki:"https://en.wikipedia.org/wiki/All_of_Us_Are_Dead#" ,
        learnMore: "https://youtu.be/IN5TD4VRcSM?si=x6Q9JtATZLD-qD7n"
    },
    {
        id: 4 ,
        title: "Euphoria",
        type: "series",
        img: "assets/euphoria.jpg",
        vibes: ["Addiction","Identity Crisis","Neon Despair"],
        description: "A raw look at teenage life shaped by addiction, identity, and emotional chaos." ,
        wiki:"https://en.wikipedia.org/wiki/Euphoria_(American_TV_series)" ,
        learnMore:"https://youtu.be/UR4Pxgnm-GA?si=YVkqAG_A1pnYjqfa" 
    },
    {
        id: 5 ,
        title:"Toy Story",
        type: "movie",
        img: "assets/toystory.jpg",
        vibes: ["Nostalgia","Loyalty","Friendship"],
        description:"Toys come alive when humans aren't watching, forming bonds and facing change." ,
        wiki:"https://en.wikipedia.org/wiki/Toy_Story" ,
        learnMore: "https://youtu.be/v-PjgYDrg70?si=89O44sLpp9pd_sEk"
    },
    {
        id: 6 ,
        title: "Friends",
        type: "show",
        img: "assets/friends.jpg",
        vibes:["Sitcom", "Humour","Friendship","Comfort Show"] ,
        description:"A group of six  friends navigate love, careers, and life in New York City." ,
        wiki: "https://en.wikipedia.org/wiki/Friends",
        learnMore:"https://www.imdb.com/title/tt0108778/?ref_=ext_shr_lnk" 
    },
    {
        id: 7 ,
        title:"The Pursuit of Happyness" ,
        type: "movie",
        img: "assets/pursuit.jpg",
        vibes: ["Resilience","Struggle","Poverty", "Success"],
        description:"A struggling father fights through homelessness to build a better life for his son." ,
        wiki:"https://en.wikipedia.org/wiki/The_Pursuit_of_Happyness" ,
        learnMore: "https://youtu.be/DMOBlEcRuw8?si=QLHC2nNWCi3qb1-P"
    },
    {
        id: 8,
        title:"Atomic Habits" ,
        type: "book",
        img: "assets/atomic.jpg",
        vibes: ["Self-Help","Motivational","Growth"],
        description: "A guide to building powerful habits through small, consistent improvements.",
        wiki:"https://en.wikipedia.org/wiki/Atomic_Habits" ,
        learnMore: " https://www.goodreads.com/book/show/40121378-atomic-habits"
    },
    {
        id: 9,
        title:"Norwegian Wood" ,
        type: "book",
        img: "assets/woods.jpg",
        vibes: ["Melancholy","Loss","Romantic Tragedy","Introspection"],
        description: "A melancholic coming-of-age story about love, loss, and emotional isolation.",
        wiki:"https://en.wikipedia.org/wiki/Norwegian_Wood_(novel)" ,
        learnMore: "https://www.goodreads.com/book/show/11297.Norwegian_Wood"
    },
    {
        id: 10 ,
        title:"The Kite Runner" ,
        type: "book",
        img: "assets/runner.jpg",
        vibes: ["Guilt","Redemption","Childhood Trauma","Betrayal"],
        description: "A story of guilt and redemption set against Afghanistan's turbulent history.",
        wiki: "https://en.wikipedia.org/wiki/The_Kite_Runner",
        learnMore: "https://www.goodreads.com/book/show/17165596-the-kite-runner"
    },
    {
        id: 11 ,
        title: "The Psychology of Money",
        type: "book",
        img: "assets/money.jpg",
        vibes: ["Motivational","Finance","Mindset"],
        description:"Explores how human behaviour shapes financial success more than math does." ,
        wiki:"https://en.wikipedia.org/wiki/The_Psychology_of_Money" ,
        learnMore: "https://www.goodreads.com/book/show/41881472-the-psychology-of-money"
    },
    {
        id: 12 ,
        title:"The Boys" ,
        type:"series" ,
        img:"assets/boys.jpg" ,
        vibes:["Dark Satire","Anti-Heroes","Violence","Power"] ,
        description: "A dark take on superheroes where corporate power and corruption replace heroism.",
        wiki: "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
        learnMore: "https://en.wikipedia.org/wiki/The_Boys_(TV_series)"
    },
    {
        id: 13,
        title:"Harry Potter and The Philosopher's Stone",
        type: "book",
        img: "assets/potter.jpg",
        vibes: ["Magic","Discovery","Friendship","Hidden-World","Wonder"],
        description: "A boy discovers he's a wizard and enters a magical world.",
        wiki:"https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone" ,
        learnMore:"https://www.goodreads.com/book/show/42844155-harry-potter-and-the-philosopher-s-stone" 
    },
    {
        id: 14,
        title: "(500) Days of Summer",
        type: "movie",
        img: "assets/dos.jpg",
        vibes: ["Hopeless Romantic","Romance","Friendship"],
        description: "A nonlinear look at a relationship that isn't meant to be." ,
        wiki: "https://en.wikipedia.org/wiki/500_Days_of_Summer",
        learnMore: "https://youtu.be/PsD0NpFSADM?si=7-_Ben9pu63NJ4jH"
    },
    {
        id: 15 ,
        title: "The Shawshank Redemption",
        type: "movie",
        img: "assets/shawshank.jpg",
        vibes: ["Resilience","Injustice","Hope","Liberation","Patience"],
        description: "A man maintains hope and dignity while serving a life sentence in prison.",
        wiki: "https://en.wikipedia.org/wiki/The_Shawshank_Redemption",
        learnMore: "https://youtu.be/NmzuHjWmXOc?si=kY8GAqxO4om8qsoS"
    },
    {
        id: 16,
        title: "Spider Man: Brand New Day",
        type: "movie",
        img: "assets/spidey_newday.jpg",
        vibes: ["Superhero","Adventure"],
        description: "Peter Parker's life is reset after major events, focusing on a fresh status quo and new challenges in his superhero identity.",
        wiki: "https://en.wikipedia.org/wiki/Spider-Man:_Brand_New_Day",
        learnMore: "https://youtu.be/62bIsvRcPv0?si=XQhNPtCwZIzrLwuN"
    },
    {
        id: 17,
        title: "The Odyssey",
        type: "movie",
        img: "assets/odyssey.jpg",
        vibes: ["Mythology","Adventure","Fantasy"],
        description: "Homer's epic poem about Odysseus's long, perilous journey home after the Trojan War, filled with mythic trials and gods.",
        wiki: "https://simple.wikipedia.org/wiki/The_Odyssey_(2026_movie)",
        learnMore: "https://youtu.be/f_bKjZeJBBI?si=IJY3QSoZztNj8N5R"
    },
    {
        id: 18,
        title: "Your Fault: London",
        type: "movie",
        img: "assets/yourfault.jpg",
        vibes: ["Romance","Drama","Forbidden Love","Coming-Of-Age"],
        description: "The forbidden love between two step siblings faces challanges as they pursue different paths, as they deal with new relationships and secrets.",
        wiki: "https://en.wikipedia.org/wiki/Your_Fault:_London",
        learnMore: "https://youtu.be/A3ZbjkDxYUs?si=uai1qt20Cga_YAaT"
    },
    {
        id:19,
        title: "Off Campus",
        type: "show",
        img: "assets/offCampus.png",
        vibes: ["Romance","Drama","Sports","College","Fake Dating"],
        description: "A romance series following college athletes navigating relationships, personl growth, and emotional conflict.",
        wiki: "https://en.wikipedia.org/wiki/Off_Campus",
        learnMore: "https://youtu.be/9mi3YVYm3ZU?si=hNXeaLwB9VHGXNtr"
    },
    {
        id: 20,
        title: "Voicemails for Isabelle",
        type: "movie",
        img: "assets/voicemails_isabelle.jpg",
        vibes: ["Romance","Comedy","Drama","Grief","Family"],
        description: "Jill leaves voicemails for her deceased sister about her chaotic life in San Francisco.Unwittingly, an Austin real estate agent begins to receive them.",
        wiki: "https://en.wikipedia.org/wiki/Voicemails_for_Isabelle",
        learnMore: "https://youtu.be/9mi3YVYm3ZU?si=hNXeaLwB9VHGXNtr"
    },
    {
        id: 21,
        title: "Yesteryear",
        type: "book",
        img: "assets/yesteryear.jpg",
        vibes:["Satire","Fiction","Psychological","Suspense"],
        description: "A story about Natalie Heller Mills, a 'tradwife' social media influencer, who wakes up one day in 19th century, where she must learn how to live without modern society.",
        wiki: "https://en.wikipedia.org/wiki/Yesteryear_(novel)",
        learnMore: "https://www.goodreads.com/book/show/238226942-yesteryear"
    },
    {
        id: 22,
        title: "The Silent Patient",
        type: "book",
        img: "assets/silentPatient.jpg",
        vibes: ["Psychological Thriller","Mystery","Suspense","Fiction"],
        description: "A woman stops speaking after a violent crime and the therapist obsessed with uncovering her truth.",
        wiki: "https://en.wikipedia.org/wiki/The_Silent_Patient",
        learnMore: "https://www.goodreads.com/book/show/40097951-the-silent-patient"
    },
    {
        id: 23,
        title: "Days at the Morisaki Bookshop",
        type: "book",
        img: "assets/Days_at_the_Morisaki_Bookshop.jpg",
        vibes: ["Healing","Coffeehouses","Heartbreak","Slow-paced"],
        description: "A quiet literary novel about healing and self-discovery through books and life in a secondhand bookstore.",
        wiki: "",
        learnMore: "https://www.goodreads.com/book/show/62047992-days-at-the-morisaki-bookshop"
    },
    {
        id: 24,
        title: "Strangers: A Memoir of Marriage",
        type: "book",
        img: "assets/strangers.jpg",
        vibes: ["Betrayal","Privilege","Pandemic"],
        description: "The author details her separation and divorce during the COVID-19 pandemic.",
        wiki: "https://en.wikipedia.org/wiki/Strangers:_A_Memoir_of_Marriage",
        learnMore: "https://www.goodreads.com/book/show/231108670-strangers"
    },
    {
        id: 25,
        title: "The Godfather",
        type: "movie",
        img: "assets/godfather.jpg",
        vibes: ["Crime","Drama","Gangster","Thriller"],
        description: "Crime saga about the Corleone mafia family, power, loyalty, and corruption across generations.",
        wiki: "https://en.wikipedia.org/wiki/The_Godfather",
        learnMore: "https://youtu.be/UaVTIH8mujA?si=_NB5UzYnzg_QqY8H"
    },
    {
        id: 26,
        title: "Parasite",
        type: "movie",
        img: "assets/parasite.jpg",
        vibes: ["Psychological Thriller","Satire","Black Comedy","Horror"],
        description: "A dark social satire about class inequality, where a poor family infiltrates a wealthy household with escxalating consequences.",
        wiki: "assets/parasite.jpg",
        learnMore: "https://youtu.be/5xH0HfJHsaY?si=wiR4JpS-qvY2wPcw"
    },
    {
        id: 27,
        title: "Schindler's List",
        type: "movie",
        img: "assets/schindler.jpg",
        vibes: ["War","Historical","Drama","Biographical"],
        description: "Historial drama about Oskar Schindler, who saves Jewish lives during the Holocaust by employing them in his factories.",
        wiki: "https://en.wikipedia.org/wiki/Schindler%27s_List",
        learnMore: "https://youtu.be/mxphAlJID9U?si=it6HHCZwBu7HGcZN"
    },
    {
        id: 28,
        title: "12 Angry Men",
        type: "movie",
        img: "assets/angrymen.jpg",
        vibes: ["Courtroom Drama","Psychological Drama"],
        description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully caution forces them to more  carefully consider the evidence.",
        wiki: "https://en.wikipedia.org/wiki/12_Angry_Men",
        learnMore: "https://youtu.be/TEN-2uTi2c0?si=2tyCluNZwG0HBMGv"
    },
    {
        id: 29,
        title: "Death Note",
        type: "show",
        img: "assets/deathnote.jpg",
        vibes: ["Psychological Thriller","Crime","Drama","Mystery","Supernatural"],
        description: "A brilliant high school student finds a supernatural notebook that kills anyone whose name is written on it.",
        wiki: "https://en.wikipedia.org/wiki/Death_Note_(2006_TV_series)",
        learnMore: "https://youtu.be/NlJZ-YgAt-c?si=i-1aDEHsWA5_UCQx"
    },
    {
        id:30,
        title: "True Detective",
        type: "show",
        img: "assets/true_detective.png",
        vibes: ["Crime","Drama","Mystery","Thriller","Neo-Noir"],
        description: "An anthology crime drama exploring complex investigations, psychological trauma, and philosophical themes.",
        wiki: "https://en.wikipedia.org/wiki/True_Detective",
        learnMore: "https://youtu.be/fVQUcaO4AvE?si=sGNQIoVgNZdNvdNx"
    },
    {
        id: 31,
        title: "Bojack Horseman",
        type: "show",
        img: "assets/bojack.jpg",
        vibes: ["Black Comedy","Dark Humour","Satire","Psychological"],
        description: "Dark animated dramedy about a washed-up actor horse dealing with fame, depression and self-destruction.",
        wiki: "https://en.wikipedia.org/wiki/BoJack_Horseman",
        learnMore: "https://youtu.be/i1eJMig5Ik4?si=TXi2Ohb2Zuuw2jch"
    },
    {
        id: 32,
        title: "Nineteen Eighty-Four",
        type: "book",
        img: "assets/1984.jpg",
        vibes: ["Dystopian Fiction","Oppression","Totalitarianism"],
        description: "Orwell's dystopian novel about totalitarian surveillance, thought control, and a society ruled by 'Big Brother'.",
        wiki: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
        learnMore: "https://www.goodreads.com/book/show/61439040-1984"
    },
    {
        id: 33,
        title: "Crime and Punishment",
        type: "book",
        img: "assets/crimeNpunishment.png",
        vibes: ["Guilt","Paranoia","Psychological Fiction","Literary Realism"],
        description: "Dostoevsky's psychological novel about guilt, morality, and the mental collapse of a man after committing murder.",
        wiki: "https://en.wikipedia.org/wiki/Crime_and_Punishment",
        learnMore: "https://www.goodreads.com/book/show/7144.Crime_and_Punishment"
    },
    {
        id: 34,
        title: "Pride and Prejudice",
        type: "book",
        img: "assets/pride_and_prejudice.jpg",
        vibes: ["Romance","Realism","Satire"],
        description: "Austen's classic novel about love, class, and social expectations in Regency-era England.",
        wiki: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
        learnMore: "https://www.goodreads.com/book/show/129915654-pride-and-prejudice"
    }   
];
const moodMap={
    healing: ["sad","crying","cry","terrible","hurt","broken","heartbroken","grief"],
    lonely:["lonely","alone","isolated","empty"],
    stressed:["stress","anxious","overwhelmed","burnout"],
    happy:["happy","excited","joyful"],
    cozy:["cozy","comfort","warm","rain"],
    intense:["intense","intelligent","mind bending","thought provoking"]

};
const recommendationMap=
{
    healing:[5,6,7,20],
    lonely:[7,6],
    stressed:[6],
    happy:[2,5,6,7,13],
    cozy:[22],
    intense:[1,3,4,9,12,,17,22,26]
};