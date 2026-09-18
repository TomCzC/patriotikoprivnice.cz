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
"2":{kicker:"PROGRAM",title:"Volební program Patriotů pro Kopřivnici",text:"Volební program pro komunální volby 2026 vychází z cíle rozvíjet naše město jako místo, kde žijeme a které máme rádi. Prioritou je rozvoj bydlení zejména pro mladé, infrastruktury, ekonomiky a podnikání, aby Kopřivnice byla atraktivní pro život i práci.\n\nBydlení je pro nás zásadní. Chceme podporovat rozvoj bydlení pro všechny skupiny obyvatel, dostupnou a kvalitní zdravotní péči a spolupráci s místní poliklinikou. Součástí programu je také podpora sociálních služeb pro seniory, rodiny s dětmi a osoby s handicapem a podpora sportu, tělovýchovy a rozvoje sportovišť.\n\n1. Komplexní rozvoj města\n• Zrekonstruujeme objekt bývalé Základní školy Náměstí na knihovnu a komunitní centrum.\n• Zasadíme se o rozšíření užitných služeb (zázemí) pro občany v rámci rekonstrukce městského koupaliště.\n• Zrekonstruujeme Sad dr. Edvarda Beneše a park doplníme o klidovou zónu pro seniory vedle polikliniky.\n• Budeme pokračovat v revizích a rekonstrukcích veřejných prostranství a dětských hřišť na sídlištích a zajistíme jejich řádnou údržbu.\n• Zabezpečíme průběžnou opravu místních mostů a komunikací.\n• Odstraníme masivní dluh minulosti, kterým je zanedbaný stav chodníků ve městě, s prioritou oprav páteřních tras a kritických míst.\n\n2. Kopřivnice přátelská, vstřícná a bezpečná\n• Zasadíme se o spravedlivou a transparentní veřejnou správu ve všech oblastech chodu města s cílem vyloučit jakoukoliv protekci či diskriminaci.\n• Zabezpečíme pomoc místním malým živnostníkům a podnikatelům, pokud to bude ve veřejném zájmu a v zájmu občanů.\n• Zasadíme se o efektivnější využívání městské policie k zabezpečení pořádku a bezpečnosti ve městě.\n• Zajistíme modernizaci kamerového systému ve městě, případně pultu centrální ochrany.\n• Rozšíříme projekt prevence kriminality a podpoříme i preventivní protidrogové programy.\n\n3. Dostupnost bydlení pro mladé\n• Zřídíme startovací obecní byty 2+kk pro mladé rodiny, například přestavbou Ubytovny pod Červeným kamenem s cílovou kapacitou minimálně 30 až 40 nových bytů.\n• Postavíme nové byty u bývalé Základní školy Náměstí a budeme se spolupodílet na pokračování výstavby nových bytových domů v lokalitě „Západ“ směrem na Nový Jičín.\n• Zasadíme se o urychlení projektu Dolní Roličky a zabezpečíme budoucí smluvní zákaz spekulací s pozemky.\n• Převedeme vhodné nebytové prostory do bytového fondu města a prověříme možnost výstavby nového bytového domu na bývalém házenkářském hřišti.\n• Podpoříme budování infrastruktury pro lokality určené územním plánem k individuálnímu bydlení.\n• Zasadíme se o vstřícný územní plán s cílem vytvoření nových lokalit určených k výstavbě rodinných domů.\n\n4. Energetika, doprava, parkování a ekologie\n• Zasadíme se o racionální správu na úseku hospodaření s energiemi v městském měřítku.\n• Podpoříme informační a komunikační technologie (ICT) ve všech oblastech komunikace s občany.\n• V maximální míře se zasadíme o energetickou nezávislost objektů města (komunitní energetika).\n• Postupně zavedeme úsporné veřejné osvětlení na celém území města.\n• Zajistíme instalaci fotovoltaických panelů na střechách vhodných městských objektů.\n• Prověříme možnost rozšíření linkové dopravy spojující centrum s okrajovými částmi města.\n• Zasadíme se o rozšíření přímého vlakového spojení s Ostravou.\n• Budeme podporovat možnost propojení budoucího podchodu z vlakového nádraží přímo do Sadu dr. Edvarda Beneše.\n• Vybudujeme nová parkovací místa a parkovací plochy, například formou etážového parkování a záchytných parkovišť mimo centrum města.\n• Postupně rozšíříme rezidentní a abonentní zóny s placeným parkováním a účinným kontrolním mechanismem prostřednictvím městské policie.\n• Podpoříme rozšíření stanovišť pro nabíjení elektrokol a budeme podporovat sdílenou cyklodopravu.\n• Podpoříme ekologické nakládání s odpady a budeme pokračovat v rozšiřování separace odpadů.\n\n5. Školství, kultura, sport a volný čas\n• Podpoříme potřeby základních škol a školek v oblasti materiální a technické, dalšími investicemi do rekonstrukcí a oprav budov, tělocvičen a odborných učeben nebo budování bezbariérových přístupů.\n• Zaměříme se na podporu sportovních aktivit dětí a mládeže napříč všemi sportovními kluby.\n• Na vhodných místech podpoříme výstavbu parkourových, multifunkčních a obdobných hřišť a spolupráci škol a místních spolků.\n• Budeme pokračovat v opravách a rekonstrukcích sportovišť, Kulturního domu Kopřivnice, zimního stadionu a tenisové haly.\n• V rámci komunitního centra v bývalé Základní škole na náměstí zřídíme zájmový klub pro mladé a podpoříme rozšíření činnosti Domu dětí a mládeže.\n• Rozšíříme propagaci města zejména v oblasti muzejnictví s cílem podpory cestovního ruchu a vhodnou formou rovněž připomeneme odkaz rodáků města.\n\n6. Sociální politika s respektem k seniorům\n• Budeme podporovat vznik nových lékařských ambulancí ve městě s cílem zvýšit dostupnost potřebné lékařské péče.\n• Zasadíme se ve sounáležitosti se zřizovatelem o další rozvoj Domova pro seniory a bývalého Domu s pečovatelskou službou.\n• Podpoříme další rozvoj odlehčovacích služeb a denního stacionáře.\n• Budeme dále zlepšovat komfort bydlení v domech s byty zvláštního určení.\n• Podpoříme volnočasové aktivity a vzdělávací projekty pro seniory.\n• Zasadíme se o zřízení Výboru pro sociální a zdravotní záležitosti s cílem prohloubení vzájemné spolupráce a informovanosti.\n• Zachováme principy komunitního plánování a poskytování sociálních služeb.\n\n7. Rozvoj místních částí\n• Zachováme výbory zastupitelstva města a budeme prosazovat rozvoj a vhodnou autonomii místních částí.\n• Prosadíme další rozvoj společenských a volnočasových aktivit v místních částech.\n• Podpoříme realizaci úpravy terasy u Kulturního domu Mniší.\n• Podpoříme výstavbu multifunkčního hřiště na fotbalovém hřišti ve Vlčovicích.\n• Budeme pokračovat v rekonstrukci veřejného osvětlení ve všech místních částech.\n• Prověříme možnost propojení cyklostezky z Vlčovic s přehradou ve Větřkovicích.\n• Podpoříme vybudování zázemí pro kulturní a společenské akce na hřišti v Lubině.\n• Upravíme přirozená lokální centra a veřejná prostranství v místních částech.\n• Rozšíříme zázemí přehrady ve Větřkovicích pro obyvatele města.\n• Podpoříme rozšíření stanovišť pro sdílená kola v Lubině s cílem širšího propojení s aglomerací Kopřivnice."}"3":{kicker:"MĚSTO",title:"Naše město, naše budoucnost",text:"Informace o našich aktivitách a dění v Kopřivnici."},
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