(function(){
"use strict";

var candidateData={
"1":["Mgr. Dušan Krompolc","Muž","62","právník","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"2":["Petr Kypr","Muž","59","projektový vedoucí","Kopřivnice","Sociální demokracie"],
"3":["Milan Černý","Muž","59","Podnikatel v gastronomii","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"4":["Ing. Petr Kovář","Muž","56","daňový specialista","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"5":["Mgr. Helena Pýchová","Žena","66","důchodce","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"6":["Ludmila Michálková DiS.","Žena","61","Farmaceutický laborant","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"7":["Jaroslav Durček","Muž","75","mykolog","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"8":["Jaroslav Kovařík","Muž","57","technik","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"9":["Elisabeth Prusenovská","Žena","23","student","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"10":["Petr Šiko","Muž","61","Technik","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"11":["Tomáš Běčák","Muž","22","student","Mniší","Bez politické příslušnosti, nezávislý kandidát"],
"12":["Roman Stopka","Muž","41","trenér Aikidó","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"13":["Robert Kasík","Muž","46","pracovník logistiky","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"14":["Jan Kelnar","Muž","48","OSVČ","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"15":["Martin Mertl","Muž","44","Strojírenský dělník","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"16":["Denis Novák","Muž","30","Barman","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"17":["Ing. Blanka Krompolcová","Žena","58","vedoucí provozu","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"18":["Marek Bittner","Muž","29","montážní dělník","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"19":["Martin Kresta","Muž","42","mobilní masér","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"20":["Vojtěch Zátopek","Muž","27","Operátor CNC modulů","Mniší","Bez politické příslušnosti, nezávislý kandidát"],
"21":["Antonín Gala","Muž","61","pracovník v gastronomii","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"]
};

var newsData={
"1":{
kicker:"17. 9. 2026 · 21. ZASEDÁNÍ ZASTUPITELSTVA",
title:"Poslední zastupitelstvo před volbami",
text:"Na 21. zasedání Zastupitelstva města Kopřivnice se projednávala řada témat, která se dotýkají každodenního života ve městě. Mezi hlavní body patřil dotační program pro sport a volný čas na rok 2027, řešení problémů v MŠ Pionýrská, parkování a dopravní infrastruktura, majetkové převody i další rozpočtové a investiční otázky.\n\nDůležitou debatou v závěru jednání byla rekonstrukce vstupu a vestibulu radnice. V diskusi vystoupil také náš zastupitel Mgr. Dušan Krompolc, který se věnoval otázkám změnových listů, víceprací a transparentnosti při nakládání s prostředky města. Záznam jednání umožňuje občanům udělat si vlastní obrázek o průběhu debaty a jednotlivých vystoupeních.\n\nNa jednání byla řešena také témata jako parkování v ulicích Družební a Polní, chodník na Janáčkově ulici, dopravní řešení ve Vlčovicích nebo majetkové otázky města. V bodu Různé byla prezentována také zpětná vazba obyvatel města, včetně témat, která občané považují za důležitá, například bydlení a parkování.\n\nPaní Mgr. Helena Pýchová se tohoto zasedání nezúčastnila. Její nepřítomnost proto v tomto článku nespojujeme s žádným konkrétním postojem či vystoupením na jednání.\n\nCelý záznam 21. zasedání Zastupitelstva města Kopřivnice najdete přímo ve videu níže.",
video:"https://www.youtube.com/embed/soYVftoVsC0?rel=0"
},
"2":{kicker:"PROGRAM",title:"Co chceme pro naše město",text:"Podrobnější představení jednotlivých bodů programu."},
"3":{kicker:"MĚSTO",title:"Naše město, naše budoucnost",text:"Informace o našich aktivitách a dění v Kopřivnici."},
"4":{kicker:"ROZHOVOR · PŘED ZASTUPITELSTVEM",title:"Rozhovor před zastupitelstvem",text:"Rozhovor s lídrem kandidátky před dalším zasedáním zastupitelstva."}
};

function byId(id){return document.getElementById(id);}
function openCandidate(card){
var d=candidateData[card.getAttribute("data-candidate")]; if(!d)return;
byId("candidate-modal-number").textContent=card.getAttribute("data-candidate");
byId("candidate-modal-name").textContent=d[0];
byId("candidate-modal-sex").textContent=d[1];
byId("candidate-modal-age").textContent=d[2];
byId("candidate-modal-role").textContent=d[3];
byId("candidate-modal-place").textContent=d[4];
byId("candidate-modal-party").textContent=d[5];
var m=byId("candidate-modal"); if(m){m.classList.add("open");m.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
}
function closeCandidate(){var m=byId("candidate-modal");if(m){m.classList.remove("open");m.setAttribute("aria-hidden","true");document.body.style.overflow="";}}

function openNews(id){
var n=newsData[id],m=byId("news-modal");if(!n||!m)return;
byId("news-modal-kicker").textContent=n.kicker;
byId("news-modal-title").textContent=n.title;
byId("news-modal-text").textContent=n.text;
var v=byId("news-modal-video");v.innerHTML="";
if(n.video){var w=document.createElement("div"),f=document.createElement("iframe");w.className="news-video-wrap";f.src=n.video;f.title=n.title;f.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");f.setAttribute("allowfullscreen","");w.appendChild(f);v.appendChild(w);}
m.classList.add("open");m.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeNews(){var m=byId("news-modal");if(m){byId("news-modal-video").innerHTML="";m.classList.remove("open");m.setAttribute("aria-hidden","true");document.body.style.overflow="";}}

function init(){
var toggle=document.querySelector(".menu-toggle"),nav=byId("main-nav");
if(toggle&&nav){toggle.addEventListener("click",function(){var o=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",o?"true":"false");toggle.textContent=o?"ZAVŘÍT":"MENU";});}

document.querySelectorAll(".candidate[data-candidate]").forEach(function(card){
card.addEventListener("click",function(e){e.preventDefault();openCandidate(card);});
card.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();openCandidate(card);}});
});
document.querySelectorAll("[data-close-candidate]").forEach(function(x){x.addEventListener("click",function(e){e.preventDefault();closeCandidate();});});

document.querySelectorAll(".news-card[data-news]").forEach(function(card){
card.addEventListener("click",function(e){e.preventDefault();openNews(card.getAttribute("data-news"));});
card.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();openNews(card.getAttribute("data-news"));}});
});
document.querySelectorAll("[data-close-news]").forEach(function(x){x.addEventListener("click",function(e){e.preventDefault();closeNews();});});

document.addEventListener("keydown",function(e){
if(e.key==="Escape"){closeCandidate();closeNews();}
});
}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init);}else{init();}
})();