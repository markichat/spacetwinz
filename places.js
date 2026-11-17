/* =====================================================================
   THE LIVING MAP OF UGANDA – list of places
   ---------------------------------------------------------------------
   To ADD a place, copy one block { ... }, paste it, and change:
     id      short name for links, lowercase with dashes (e.g. "ssezibwa-falls")
     kind    "Religious" | "Cultural" | "Tourism" | "Spaces"
     name    place name
     where   area / town
     lat,lng exact position (Google Maps: long-press the spot, copy the numbers)
     tour    Matterport link, or "" if there is no tour yet
     summary 1–2 sentences
     learn   short facts for learners (2–4 lines)
     ask     a question for students (or "")
   Coordinates of planned sites are approximate – correct them on site.
   ===================================================================== */
const PLACES = [
  /* ---------------- RELIGIOUS SITES ---------------- */
  { id: "namugongo-catholic", kind: "Religious", name: "Uganda Martyrs Catholic Basilica", where: "Namugongo, Wakiso",
    lat: 0.3953, lng: 32.6658, tour: "",
    summary: "Shrine to the 22 Catholic Uganda Martyrs, built where St Charles Lwanga and others were killed. Its basilica is shaped like a traditional hut.",
    learn: ["45 young Christians, 22 Catholic and 23 Anglican, were executed between 1885 and 1887 on the orders of Kabaka Mwanga II.",
            "The Catholic martyrs were declared saints in 1964.",
            "Every 3 June, Martyrs' Day, an estimated two million or more pilgrims come to Namugongo, many of them on foot."],
    ask: "Why do you think so many people walk long distances to Namugongo every year?" },
  { id: "namugongo-anglican", kind: "Religious", name: "Anglican Martyrs' Site", where: "Namugongo (Nakiyanja), Wakiso",
    lat: 0.3990, lng: 32.6745, tour: "",
    summary: "Shrine to the 23 Anglican Uganda Martyrs. The altar of its church stands over the place where the martyrs were burned.",
    learn: ["The Catholic and Anglican shrines stand within about a kilometre of each other.",
            "Both churches remember the martyrs together on 3 June."],
    ask: "How do the two shrines remember the same event? What is similar, and what is different?" },
  { id: "rubaga-cathedral", kind: "Religious", name: "Rubaga Cathedral", where: "Lubaga hill, Kampala",
    lat: 0.3020, lng: 32.5530, tour: "",
    summary: "St Mary's Cathedral, the Catholic cathedral of Kampala, on one of the city's historic hills.",
    learn: ["Kampala grew across a group of hills, and several of them became home to the city's main places of worship.",
            "From Lubaga hill you can see Namirembe, the Anglican cathedral's hill, across the valley."],
    ask: "Why might places of worship have been built on hilltops?" },
  { id: "namirembe-cathedral", kind: "Religious", name: "Namirembe Cathedral", where: "Namirembe hill, Kampala",
    lat: 0.3115, lng: 32.5630, tour: "",
    summary: "St Paul's Cathedral, the Anglican cathedral on Namirembe hill.",
    learn: ["Namirembe means 'full of peace' in Luganda.",
            "It faces Rubaga Cathedral across the valley, a reminder of how Catholic and Anglican missions grew side by side in Buganda."],
    ask: "What does the name of the hill tell us about how people saw this place?" },
  { id: "uganda-national-mosque", kind: "Religious", name: "Uganda National Mosque", where: "Old Kampala",
    lat: 0.3155, lng: 32.5690, tour: "",
    summary: "Uganda's national mosque on Old Kampala hill, home of the Uganda Muslim Supreme Council.",
    learn: ["Islam reached Buganda in the 1840s, through traders from the East African coast, before Christian missionaries arrived.",
            "Visitors can climb the mosque's minaret for a view over Kampala's hills."],
    ask: "How did trade routes help bring new beliefs to Buganda?" },
  { id: "bahai-temple", kind: "Religious", name: "Bahá'í House of Worship", where: "Kikaya Hill, Kampala",
    lat: 0.3700, lng: 32.5910, tour: "",
    summary: "The Bahá'í House of Worship for Africa, a domed temple set in gardens and open to people of all faiths.",
    learn: ["It was dedicated in 1961 and was the first Bahá'í House of Worship in Africa.",
            "Like all Bahá'í Houses of Worship, it has nine sides and nine doors, welcoming people from every direction."],
    ask: "What could the nine doors be saying to visitors?" },

  /* ---------------- CULTURAL SITES ---------------- */
  { id: "kasubi-tombs", kind: "Cultural", name: "Kasubi Tombs", where: "Kasubi hill, Kampala",
    lat: 0.3290, lng: 32.5537, tour: "",
    summary: "Royal tombs of four Kabakas (kings) of Buganda, a UNESCO World Heritage Site and the spiritual centre of the Buganda Kingdom.",
    learn: ["The great thatched tomb house is called Muzibu Azaala Mpanga.",
            "It burned in 2010. Craftspeople rebuilt it by hand over 15 years, and it reopened in 2026.",
            "It is built from wood, reeds and grass thatch using traditional Ganda skills."],
    ask: "Why does it matter that Kasubi was rebuilt with traditional skills instead of modern materials?" },
  { id: "uganda-museum", kind: "Cultural", name: "Uganda Museum", where: "Kira Road, Kampala",
    lat: 0.3395, lng: 32.5845, tour: "",
    summary: "Uganda's national museum, with collections on the country's peoples, history, music and crafts.",
    learn: ["Founded in 1908, it is the oldest museum in East Africa.",
            "Its grounds include traditional homes from different regions of Uganda."],
    ask: "Which object or home from your own region would you add to the museum, and why?" },
  { id: "ndere-centre", kind: "Cultural", name: "Ndere Cultural Centre", where: "Ntinda, Kampala",
    lat: 0.3628, lng: 32.6136, tour: "",
    summary: "Home of the Ndere Troupe, which performs traditional music and dances from all over Uganda.",
    learn: ["'Ndere' is a type of flute.",
            "Its shows bring together dances from many of Uganda's peoples on one stage."],
    ask: "Name a traditional dance from your area. What is it performed for?" },
  { id: "igongo-centre", kind: "Cultural", name: "Igongo Cultural Centre", where: "Biharwe, near Mbarara",
    lat: -0.5770, lng: 30.7240, tour: "",
    summary: "A museum and centre for the culture and history of Ankole in western Uganda.",
    learn: ["Ankole is known for its long-horned cattle, which are central to its culture and economy.",
            "The centre shows Ankole homes, tools, food and royal history."],
    ask: "How do cattle shape daily life and traditions in Ankole?" },

  /* ---------------- TOURISM SPOTS ---------------- */
  { id: "ssezibwa-falls", kind: "Tourism", name: "Ssezibwa Falls", where: "Mukono",
    lat: 0.3590, lng: 32.8730, tour: "",
    summary: "Waterfalls that are a sacred place in Buganda tradition, still visited for prayer and blessings.",
    learn: ["A Buganda legend tells that the Ssezibwa river began as one of twins born as rivers.",
            "Traditional healers and visitors still come here to pray."],
    ask: "Why do you think rivers and waterfalls often become sacred places?" },
  { id: "source-of-the-nile", kind: "Tourism", name: "Source of the Nile", where: "Jinja",
    lat: 0.4244, lng: 33.2042, tour: "",
    summary: "Where the Nile leaves Lake Victoria on its long journey north to the Mediterranean Sea, and a landmark of Busoga.",
    learn: ["The Nile is one of the longest rivers in the world, flowing through about 11 countries.",
            "Jinja is the main town of Busoga."],
    ask: "Which countries does the Nile pass through after it leaves Uganda?" },

  /* ---------------- SPACES (live SpaceTwinz tours) ---------------- */
  { id: "uganda-martyrs-university", kind: "Spaces", name: "Uganda Martyrs University", where: "Nkozi",
    lat: -0.0040, lng: 32.0180, tour: "https://my.matterport.com/show/?m=AXGWGTXQXgP",
    summary: "Walk around the Uganda Martyrs University campus at Nkozi in 3D.", learn: [], ask: "" },
  { id: "matwale-airbnb", kind: "Spaces", name: "Matwale Airbnb", where: "Mukono",
    lat: 0.3530, lng: 32.7550, tour: "https://my.matterport.com/show/?m=Qvn1JgRygFw",
    summary: "A short-stay home in Mukono.", learn: [], ask: "" },
  { id: "sierra-cafe-hall", kind: "Spaces", name: "Sierra Café · Reception & Hall", where: "Kenya Road, Tororo",
    lat: 0.6950, lng: 34.1790, tour: "https://my.matterport.com/show/?m=ynEeWje4BpL",
    summary: "The reception and event hall at Sierra Café.", learn: [], ask: "" },
  { id: "sierra-cafe-room", kind: "Spaces", name: "Sierra Café · Double Room", where: "Kenya Road, Tororo",
    lat: 0.6900, lng: 34.1850, tour: "https://my.matterport.com/show/?m=zd9mKnrW6T7",
    summary: "A double room at Sierra Café.", learn: [], ask: "" }
];
