(function(){
"use strict";

var candidateData={
"1":["Mgr. Dušan Krompolc","Muž","62","právník","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"2":["Petr Kypr","Muž","44","projektový vedoucí","Kopřivnice","Sociální demokracie"],
"3":["Milan Černý","Muž","59","OSVČ","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"4":["Ing. Petr Kovář","Muž","56","daňový specialista","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"5":["Mgr. Helena Pýchová","Žena","66","psycholog","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"6":["Ludmila Michálková DiS.","Žena","61","farmaceutický laborant","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"7":["Jaroslav Durček","Muž","75","mykolog","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"8":["Jaroslav Kovařík","Muž","57","technik","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"9":["Elisabeth Prusenovská","Žena","23","student","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"10":["Petr Šiko","Muž","61","technik","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"11":["Tomáš Běčák","Muž","22","student","Mniší","Bez politické příslušnosti, nezávislý kandidát"],
"12":["Roman Stopka","Muž","41","trenér Aikidó","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"13":["Robert Kasík","Muž","46","pracovník logistiky","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"14":["Jan Kelnar","Muž","48","OSVČ","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"15":["Martin Mertl","Muž","44","strojírenský dělník","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"16":["Denis Novák","Muž","30","barman","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"17":["Ing. Blanka Krompolcová","Žena","58","vedoucí provozu","Lubina","Bez politické příslušnosti, nezávislý kandidát"],
"18":["Marek Bittner","Muž","29","montážní dělník","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"19":["Martin Kresta","Muž","42","mobilní masér","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"],
"20":["Vojtěch Zátopek","Muž","26","operátor CNC modulů","Mniší","Bez politické příslušnosti, nezávislý kandidát"],
"21":["Antonín Gala","Muž","61","pracovník v gastronomii","Kopřivnice","Bez politické příslušnosti, nezávislý kandidát"]
};

var newsData={
"1":{
kicker:"17. 9. 2026 · 21. ZASEDÁNÍ ZASTUPITELSTVA",
title:"Poslední zastupitelstvo před volbami",
text:"Na 21. zasedání Zastupitelstva města Kopřivnice se projednávala řada témat, která se dotýkají každodenního života ve městě. Mezi hlavní body patřil dotační program pro sport a volný čas na rok 2027, řešení problémů v MŠ Pionýrská, parkování a dopravní infrastruktura, majetkové převody i další rozpočtové a investiční otázky.\n\nDůležitou debatou v závěru jednání byla rekonstrukce vstupu a vestibulu radnice. V diskusi vystoupil také náš zastupitel Mgr. Dušan Krompolc, který se věnoval otázkám změnových listů, víceprací a transparentnosti při nakládání s prostředky města. Záznam jednání umožňuje občanům udělat si vlastní obrázek o průběhu debaty a jednotlivých vystoupeních.\n\nNa jednání byla řešena také témata jako parkování v ulicích Družební a Polní, chodník na Janáčkově ulici, dopravní řešení ve Vlčovicích nebo majetkové otázky města. V bodu Různé byla prezentována také zpětná vazba obyvatel města, včetně témat, která občané považují za důležitá, například bydlení a parkování.\n\nPaní Mgr. Helena Pýchová se tohoto zasedání nezúčastnila. Její nepřítomnost proto v tomto článku nespojujeme s žádným konkrétním postojem či vystoupením na jednání.\n\nCelý záznam 21. zasedání Zastupitelstva města Kopřivnice najdete přímo ve videu níže.",
video:"https://www.youtube.com/embed/soYVftoVsC0?rel=0"
},
"2":{kicker:"PROGRAM",title:"Volební program Patriotů pro Kopřivnici",text:"Volební program Patriotů pro Kopřivnici pro komunální volby 2026 vychází z cíle rozvíjet město jako místo pro život i práci. Za důležité považujeme dostupné a kvalitní bydlení, rozvoj infrastruktury, ekonomiky a podnikání, dostupnou zdravotní péči, sociální služby a podporu sportu a volnočasových aktivit.\n\n1. Komplexní rozvoj města\nChceme zrekonstruovat objekt bývalé Základní školy Náměstí na knihovnu a komunitní centrum, rozšířit zázemí městského koupaliště, zrekonstruovat Sad dr. Edvarda Beneše a doplnit jej o klidovou zónu pro seniory. Program počítá také s pokračováním rekonstrukcí veřejných prostranství a dětských hřišť, průběžnými opravami mostů a komunikací a systematickou opravou chodníků.\n\n2. Kopřivnice přátelská, vstřícná a bezpečná\nProgram počítá se spravedlivou a transparentní veřejnou správou, podporou místních malých živnostníků a podnikatelů, efektivnějším využíváním městské policie, modernizací kamerového systému a rozšířením prevence kriminality včetně preventivních protidrogových programů.\n\n3. Dostupnost bydlení pro mladé\nNavrhujeme startovací obecní byty 2+kk pro mladé rodiny, například přestavbou Ubytovny pod Červeným kamenem s cílovou kapacitou minimálně 30 až 40 nových bytů. Dále chceme nové byty u bývalé ZŠ Náměstí, pokračování bytové výstavby v lokalitě Západ směrem na Nový Jičín a urychlení projektu Dolní Roličky včetně infrastruktury a smluvního omezení spekulací s pozemky. Program počítá i s převodem vhodných nebytových prostor do bytového fondu, prověřením možnosti bytového domu na bývalém házenkářském hřišti a podporou infrastruktury pro individuální bydlení.\n\n4. Energetika, doprava, parkování a ekologie\nMezi opatření patří racionální hospodaření s energiemi, komunitní energetika, úsporné veřejné osvětlení a fotovoltaické panely na vhodných městských objektech. Dále program navrhuje prověřit rozšíření linkové dopravy do okrajových částí, usilovat o přímé vlakové spojení s Ostravou, propojení budoucího podchodu od nádraží se Sadem dr. Edvarda Beneše, výstavbu nových parkovacích míst včetně etážového parkování a záchytných parkovišť, rozšíření rezidentních a abonentních zón, nabíjecích míst pro elektrokola, sdílenou cyklodopravu a další rozšiřování separace odpadů.\n\n5. Školství, kultura, sport a volný čas\nProgram podporuje materiální a technické investice do škol a školek, rekonstrukce budov, tělocvičen a odborných učeben i bezbariérové přístupy. Počítá s podporou sportu dětí a mládeže, novými parkourovými a multifunkčními hřišti, opravami a rekonstrukcemi sportovišť, Kulturního domu Kopřivnice, zimního stadionu a tenisové haly. V komunitním centru má vzniknout zájmový klub pro mladé a má se rozšířit činnost Domu dětí a mládeže. Program také počítá s propagací města, muzejnictvím a podporou cestovního ruchu.\n\n6. Sociální politika s respektem k seniorům\nNavrhujeme podporovat vznik nových lékařských ambulancí, další rozvoj Domova pro seniory a bývalého Domu s pečovatelskou službou, odlehčovacích služeb a denního stacionáře. Součástí je také zlepšování komfortu bydlení v domech s byty zvláštního určení, podpora volnočasových a vzdělávacích aktivit seniorů a zřízení Výboru pro sociální a zdravotní záležitosti. Zachovány mají být principy komunitního plánování a poskytování sociálních služeb.\n\n7. Rozvoj místních částí\nProgram počítá se zachováním výborů zastupitelstva města a podporou rozvoje a vhodné autonomie místních částí. Navrhuje rozvoj společenských a volnočasových aktivit, úpravu terasy u Kulturního domu Mniší, multifunkční hřiště ve Vlčovicích, pokračování rekonstrukce veřejného osvětlení, propojení cyklostezky z Vlčovic s přehradou ve Větřkovicích, zázemí pro kulturní a společenské akce na hřišti v Lubině, úpravu lokálních center a veřejných prostranství, rozšíření zázemí přehrady ve Větřkovicích a rozšíření stanovišť pro sdílená kola v Lubině.\n\nCelý volební program podrobně rozepisuje jednotlivé navrhované kroky v těchto sedmi tematických oblastech."},
"3":{kicker:"MĚSTO",title:"Naše město, naše budoucnost",text:"Informace o našich aktivitách a dění v Kopřivnici."},
"4":{kicker:"14. 9. 2026 · VOLEBNÍ SPECIÁL KTKSTUDIO",title:"Rozhovor před zastupitelstvem",text:"V předvolebním rozhovoru pro KTKstudio Kopřivnice představil lídr kandidátní listiny č. 8 PATRIOTI PRO KOPŘIVNICI Mgr. Dušan Krompolc své zkušenosti z veřejné správy a hlavní priority pro další období.\n\nMezi hlavní témata rozhovoru patří dostupné bydlení, rozvoj městských pozemků, veřejný prostor a parkování. U bydlení zmínil například možnost využití bývalého internátu pro startovací byty a přípravu pozemků v lokalitě Dolní rolečky. Věnoval se také revitalizaci Parku Edvarda Beneše a opravám chodníků.\n\nSamostatnou část rozhovoru tvořilo parkování. Dušan Krompolc mluvil o zvyšování kapacity parkovacích míst, zejména na Sídlišti Sever, o etážových stáních a o rozšiřování rezidenčního a abonentního parkování. V závěru se vyjádřil také ke spolupráci zastupitelů a k některým investicím města.\n\nCelý volební rozhovor si můžete přehrát přímo zde.",video:"https://www.youtube.com/embed/U_U2tVIjLms?rel=0"}
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