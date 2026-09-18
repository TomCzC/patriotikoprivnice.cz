document.addEventListener("DOMContentLoaded",function(){

  const toggle=document.querySelector(".menu-toggle");
  const nav=document.querySelector("#main-nav");
  if(toggle&&nav){
    toggle.addEventListener("click",function(){
      const open=nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded",String(open));
      toggle.textContent=open?"ZAVŘÍT":"MENU";
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click",function(){
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded","false");
        toggle.textContent="MENU";
      });
    });
  }

  const candidateData={
    "1":{name:"Mgr. Dušan Krompolc",sex:"Muž",age:"62",role:"právník",place:"Lubina",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "2":{name:"Petr Kypr",sex:"Muž",age:"59",role:"projektový vedoucí",place:"Kopřivnice",party:"Sociální demokracie"},
    "3":{name:"Milan Černý",sex:"Muž",age:"59",role:"Podnikatel v gastronomii",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "4":{name:"Ing. Petr Kovář",sex:"Muž",age:"56",role:"daňový specialista",place:"Lubina",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "5":{name:"Mgr. Helena Pýchová",sex:"Žena",age:"66",role:"důchodce",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "6":{name:"Ludmila Michálková DiS.",sex:"Žena",age:"61",role:"Farmaceutický laborant",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "7":{name:"Jaroslav Durček",sex:"Muž",age:"75",role:"mykolog",place:"Lubina",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "8":{name:"Jaroslav Kovařík",sex:"Muž",age:"57",role:"technik",place:"Lubina",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "9":{name:"Elisabeth Prusenovská",sex:"Žena",age:"23",role:"student",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "10":{name:"Petr Šiko",sex:"Muž",age:"61",role:"Technik",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "11":{name:"Tomáš Běčák",sex:"Muž",age:"22",role:"student",place:"Mniší",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "12":{name:"Roman Stopka",sex:"Muž",age:"41",role:"trenér Aikidó",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "13":{name:"Robert Kasík",sex:"Muž",age:"46",role:"pracovník logistiky",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "14":{name:"Jan Kelnar",sex:"Muž",age:"48",role:"OSVČ",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "15":{name:"Martin Mertl",sex:"Muž",age:"44",role:"Strojírenský dělník",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "16":{name:"Denis Novák",sex:"Muž",age:"30",role:"Barman",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "17":{name:"Ing. Blanka Krompolcová",sex:"Žena",age:"58",role:"vedoucí provozu",place:"Lubina",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "18":{name:"Marek Bittner",sex:"Muž",age:"29",role:"montážní dělník",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "19":{name:"Martin Kresta",sex:"Muž",age:"42",role:"mobilní masér",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "20":{name:"Vojtěch Zátopek",sex:"Muž",age:"27",role:"Operátor CNC modulů",place:"Mniší",party:"Bez politické příslušnosti, nezávislý kandidát"},
    "21":{name:"Antonín Gala",sex:"Muž",age:"61",role:"pracovník v gastronomii",place:"Kopřivnice",party:"Bez politické příslušnosti, nezávislý kandidát"}
  };

  const candidateModal=document.querySelector("#candidate-modal");
  if(candidateModal){
    const numberEl=document.querySelector("#candidate-modal-number");
    const nameEl=document.querySelector("#candidate-modal-name");
    const sexEl=document.querySelector("#candidate-modal-sex");
    const ageEl=document.querySelector("#candidate-modal-age");
    const roleEl=document.querySelector("#candidate-modal-role");
    const placeEl=document.querySelector("#candidate-modal-place");
    const partyEl=document.querySelector("#candidate-modal-party");

    function closeCandidate(){
      candidateModal.classList.remove("open");
      candidateModal.setAttribute("aria-hidden","true");
      document.body.style.overflow="";
    }

    document.querySelectorAll(".candidate[data-candidate]").forEach(function(card){
      function openCandidate(event){
        if(event){
          event.preventDefault();
          event.stopPropagation();
        }
        const c=candidateData[card.dataset.candidate];
        if(!c)return;
        numberEl.textContent=card.dataset.candidate;
        nameEl.textContent=c.name;
        sexEl.textContent=c.sex;
        ageEl.textContent=c.age;
        roleEl.textContent=c.role;
        placeEl.textContent=c.place;
        partyEl.textContent=c.party;
        candidateModal.classList.add("open");
        candidateModal.setAttribute("aria-hidden","false");
        document.body.style.overflow="hidden";
      }
      card.addEventListener("click",openCandidate);
      card.addEventListener("keydown",function(e){
        if(e.key==="Enter"||e.key===" "){openCandidate(e);}
      });
    });

    candidateModal.querySelectorAll("[data-close-candidate]").forEach(function(el){
      el.addEventListener("click",function(e){e.preventDefault();closeCandidate();});
    });
    document.addEventListener("keydown",function(e){
      if(e.key==="Escape"&&candidateModal.classList.contains("open"))closeCandidate();
    });
  }

  const newsData={
    "1":{
      kicker:"17. 9. 2026 · 21. ZASEDÁNÍ ZASTUPITELSTVA",
      title:"Poslední zastupitelstvo před volbami",
      text:"Na 21. zasedání Zastupitelstva města Kopřivnice se projednávala řada témat, která se dotýkají každodenního života ve městě. Mezi hlavní body patřil dotační program pro sport a volný čas na rok 2027, řešení problémů v MŠ Pionýrská, parkování a dopravní infrastruktura, majetkové převody i další rozpočtové a investiční otázky.\n\nDůležitou debatou v závěru jednání byla rekonstrukce vstupu a vestibulu radnice. V diskusi vystoupil také náš zastupitel Mgr. Dušan Krompolc, který se věnoval otázkám změnových listů, víceprací a transparentnosti při nakládání s prostředky města. Záznam jednání umožňuje občanům udělat si vlastní obrázek o průběhu debaty a jednotlivých vystoupeních.\n\nNa jednání byla řešena také témata jako parkování v ulicích Družební a Polní, chodník na Janáčkově ulici, dopravní řešení ve Vlčovicích nebo majetkové otázky města. V bodu Různé byla prezentována také zpětná vazba obyvatel města, včetně témat, která občané považují za důležitá, například bydlení a parkování.\n\nPaní Mgr. Helena Pýchová se tohoto zasedání nezúčastnila. Její nepřítomnost proto v tomto článku nespojujeme s žádným konkrétním postojem či vystoupením na jednání.\n\nCelý záznam 21. zasedání Zastupitelstva města Kopřivnice najdete přímo ve videu níže.",
      video:"https://www.youtube.com/embed/soYVftoVsC0?rel=0"
    },
    "2":{kicker:"PROGRAM",title:"Co chceme pro naše město",text:"Podrobnější představení jednotlivých bodů programu."},
    "3":{kicker:"MĚSTO",title:"Naše město, naše budoucnost",text:"Informace o našich aktivitách a dění v Kopřivnici."}
  };

  const newsModal=document.querySelector("#news-modal");
  if(newsModal){
    if(newsModal.parentElement!==document.body) document.body.appendChild(newsModal);

    const kickerEl=document.querySelector("#news-modal-kicker");
    const titleEl=document.querySelector("#news-modal-title");
    const textEl=document.querySelector("#news-modal-text");
    const videoEl=document.querySelector("#news-modal-video");
    let opened=false;

    function closeNews(){
      videoEl.innerHTML="";
      newsModal.classList.remove("open");
      newsModal.setAttribute("aria-hidden","true");
      document.body.style.overflow="";
      opened=false;
    }

    function openNews(id,event){
      if(event){event.preventDefault();event.stopPropagation();}
      const n=newsData[id];
      if(!n)return;
      kickerEl.textContent=n.kicker;
      titleEl.textContent=n.title;
      textEl.textContent=n.text;
      videoEl.innerHTML="";
      if(n.video){
        const wrap=document.createElement("div");
        wrap.className="news-video-wrap";
        const iframe=document.createElement("iframe");
        iframe.src=n.video;
        iframe.title="21. zasedání Zastupitelstva města Kopřivnice";
        iframe.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframe.setAttribute("allowfullscreen","");
        iframe.frameBorder="0";
        wrap.appendChild(iframe);
        videoEl.appendChild(wrap);
      }
      newsModal.classList.add("open");
      newsModal.setAttribute("aria-hidden","false");
      document.body.style.overflow="hidden";
      opened=true;
    }

    document.addEventListener("click",function(e){
      const card=e.target.closest(".news-card[data-news]");
      if(card){openNews(card.dataset.news,e);return;}
      const close=e.target.closest("[data-close-news]");
      if(close && opened) closeNews();
    });

    document.addEventListener("keydown",function(e){
      const card=document.activeElement?.closest?.(".news-card[data-news]");
      if(card && (e.key==="Enter"||e.key===" ")){openNews(card.dataset.news,e);}
      if(e.key==="Escape" && opened) closeNews();
    });
  }

  const feedbackForm=document.querySelector("#feedback-form");
  if(feedbackForm){
    const feedbackStatus=document.querySelector("#feedback-status");
    const feedbackFrame=document.querySelector("#feedback-submit-frame");
    const endpoint=feedbackForm.dataset.endpoint||"";

    feedbackForm.addEventListener("submit",function(e){
      if(!endpoint){
        e.preventDefault();
        feedbackStatus.textContent="Formulář je připraven. Ještě je potřeba připojit ukládání podnětů.";
        feedbackStatus.className="feedback-status error";
        return;
      }

      feedbackForm.action=endpoint;
      feedbackStatus.textContent="Odesílám podnět…";
      feedbackStatus.className="feedback-status";

      window.setTimeout(function(){
        feedbackStatus.textContent="Děkujeme. Váš podnět byl odeslán.";
        feedbackStatus.className="feedback-status success";
        feedbackForm.reset();
      },900);
    });

    if(feedbackFrame){
      feedbackFrame.addEventListener("load",function(){
        if(feedbackForm.action && feedbackForm.action!==window.location.href){
          const value=feedbackStatus.textContent;
          if(value==="Odesílám podnět…"){
            feedbackStatus.textContent="Děkujeme. Váš podnět byl odeslán.";
            feedbackStatus.className="feedback-status success";
          }
        }
      });
    }
  }
});