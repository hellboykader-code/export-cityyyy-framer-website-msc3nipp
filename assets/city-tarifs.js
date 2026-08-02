/* ============================================================
   CityPhone & Vape — section Tarifs (portée du site « amine » / MK,
   même design, même catalogue). JS vanilla injecté après hydratation
   Framer, auto-réparant (le React de Framer peut reconstruire le DOM).
   ============================================================ */
(function(){
  "use strict";
  var sc=document.currentScript, BASE=(sc&&sc.src?sc.src.split('/assets/')[0]:'');
  var IMG=function(p){return BASE+'/assets'+p.replace('IMGBASE','');};

  var CATALOGUE=[
  // Apple / iPhone
  { marque: "Apple", modele: "iPhone 16 Pro Max", ecran: 234, batterie: 84, charge: 74, camera: 104, vitre: 134, desox: 64 },
  { marque: "Apple", modele: "iPhone 16 Pro",     ecran: 214, batterie: 79, charge: 69, camera: 94,  vitre: 124, desox: 64 },
  { marque: "Apple", modele: "iPhone 16",         ecran: 174, batterie: 74, charge: 64, camera: 84,  vitre: 114, desox: 64 },
  { marque: "Apple", modele: "iPhone 15 Pro Max", ecran: 204, batterie: 79, charge: 69, camera: 94,  vitre: 124, desox: 64 },
  { marque: "Apple", modele: "iPhone 15",         ecran: 154, batterie: 69, charge: 59, camera: 79,  vitre: 104, desox: 64 },
  { marque: "Apple", modele: "iPhone 14 Pro Max", ecran: 184, batterie: 69, charge: 64, camera: 84,  vitre: 114, desox: 59 },
  { marque: "Apple", modele: "iPhone 14",         ecran: 134, batterie: 59, charge: 54, camera: 74,  vitre: 94,  desox: 59 },
  { marque: "Apple", modele: "iPhone 13 Pro Max", ecran: 154, batterie: 64, charge: 59, camera: 79,  vitre: 104, desox: 59 },
  { marque: "Apple", modele: "iPhone 13",         ecran: 114, batterie: 54, charge: 49, camera: 64,  vitre: 84,  desox: 54 },
  { marque: "Apple", modele: "iPhone 12 Pro Max", ecran: 124, batterie: 54, charge: 54, camera: 69,  vitre: 94,  desox: 54 },
  { marque: "Apple", modele: "iPhone 12",         ecran: 94,  batterie: 49, charge: 49, camera: 59,  vitre: 74,  desox: 54 },
  { marque: "Apple", modele: "iPhone 11 Pro Max", ecran: 104, batterie: 49, charge: 49, camera: 64,  vitre: 84,  desox: 49 },
  { marque: "Apple", modele: "iPhone 11",         ecran: 74,  batterie: 44, charge: 44, camera: 54,  vitre: 69,  desox: 49 },
  { marque: "Apple", modele: "iPhone XR",         ecran: 69,  batterie: 44, charge: 44, camera: 49,  vitre: 64,  desox: 49 },
  { marque: "Apple", modele: "iPhone X",          ecran: 74,  batterie: 44, charge: 44, camera: 49,  vitre: 64,  desox: 49 },
  { marque: "Apple", modele: "iPhone 8 / SE 2020",ecran: 44,  batterie: 39, charge: 39, camera: 44,  vitre: 54,  desox: 44 },
  { marque: "Apple", modele: "iPhone 7",          ecran: 39,  batterie: 34, charge: 39, camera: 44,  vitre: null, desox: 44 },

  // Samsung / Galaxy
  { marque: "Samsung", modele: "Galaxy S24 Ultra", ecran: 264, batterie: 79, charge: 69, camera: 94, vitre: 114, desox: 64 },
  { marque: "Samsung", modele: "Galaxy S24",       ecran: 194, batterie: 69, charge: 64, camera: 84, vitre: 94,  desox: 64 },
  { marque: "Samsung", modele: "Galaxy S23",       ecran: 174, batterie: 64, charge: 59, camera: 79, vitre: 89,  desox: 59 },
  { marque: "Samsung", modele: "Galaxy S22",       ecran: 154, batterie: 59, charge: 54, camera: 74, vitre: 84,  desox: 59 },
  { marque: "Samsung", modele: "Galaxy S21",       ecran: 134, batterie: 54, charge: 54, camera: 69, vitre: 79,  desox: 54 },
  { marque: "Samsung", modele: "Galaxy A54",       ecran: 104, batterie: 49, charge: 49, camera: 59, vitre: 64,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A53",       ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A34",       ecran: 89,  batterie: 44, charge: 44, camera: 54, vitre: 59,  desox: 49 },
  { marque: "Samsung", modele: "Galaxy A14",       ecran: 64,  batterie: 39, charge: 39, camera: 44, vitre: 49,  desox: 44 },

  // Xiaomi
  { marque: "Xiaomi", modele: "Xiaomi 13",     ecran: 134, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Xiaomi", modele: "Xiaomi 12",     ecran: 119, batterie: 49, charge: 49, camera: 59, vitre: 69, desox: 54 },
  { marque: "Xiaomi", modele: "Redmi Note 13", ecran: 84,  batterie: 44, charge: 44, camera: 49, vitre: 54, desox: 49 },
  { marque: "Xiaomi", modele: "Redmi Note 12", ecran: 74,  batterie: 39, charge: 39, camera: 44, vitre: 49, desox: 49 },
  { marque: "Xiaomi", modele: "Redmi 12",      ecran: 64,  batterie: 39, charge: 39, camera: 44, vitre: 44, desox: 44 },

  // Huawei
  { marque: "Huawei", modele: "P40 Pro",     ecran: 129, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Huawei", modele: "P30 Pro",     ecran: 104, batterie: 49, charge: 44, camera: 59, vitre: 64, desox: 49 },
  { marque: "Huawei", modele: "P30 Lite",    ecran: 74,  batterie: 39, charge: 39, camera: 44, vitre: 49, desox: 44 },
  { marque: "Huawei", modele: "Mate 20 Pro", ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59, desox: 49 },

  // Google Pixel
  { marque: "Google", modele: "Pixel 8 Pro", ecran: 154, batterie: 59, charge: 54, camera: 74, vitre: 84, desox: 54 },
  { marque: "Google", modele: "Pixel 8",     ecran: 129, batterie: 54, charge: 49, camera: 64, vitre: 74, desox: 54 },
  { marque: "Google", modele: "Pixel 7",     ecran: 104, batterie: 49, charge: 49, camera: 59, vitre: 64, desox: 49 },
  { marque: "Google", modele: "Pixel 6",     ecran: 94,  batterie: 44, charge: 44, camera: 54, vitre: 59, desox: 49 },

  // Apple iPad (tablettes)
  { marque: "iPad", modele: 'iPad Pro 12.9"', ecran: 224, batterie: 89, charge: 74, camera: 84, vitre: null, desox: 74 },
  { marque: "iPad", modele: 'iPad Pro 11"',   ecran: 194, batterie: 79, charge: 69, camera: 79, vitre: null, desox: 74 },
  { marque: "iPad", modele: "iPad Air",       ecran: 154, batterie: 69, charge: 59, camera: 69, vitre: null, desox: 64 },
  { marque: "iPad", modele: "iPad 10 / 9",    ecran: 104, batterie: 59, charge: 54, camera: 59, vitre: null, desox: 59 },
  { marque: "iPad", modele: "iPad mini",      ecran: 114, batterie: 59, charge: 54, camera: 59, vitre: null, desox: 59 },
];
  var TYPES_REPARATION=[
  { cle: "ecran",    nom: "Écran" },
  { cle: "batterie", nom: "Batterie" },
  { cle: "charge",   nom: "Connecteur de charge" },
  { cle: "camera",   nom: "Caméra" },
  { cle: "vitre",    nom: "Vitre arrière" },
  { cle: "desox",    nom: "Désoxydation" },
];
  var GARANTIE="Écrans garantis de 3 mois à 1 an selon la gamme · Batteries garanties 6 mois";
  var MODEL_IMAGES={
  "iPhone 16 Pro Max": "IMGBASE/img/models/by-model/iphone-16-pro-max.png",
  "iPhone 16 Pro": "IMGBASE/img/models/by-model/iphone-16-pro.jpg",
  "iPhone 16": "IMGBASE/img/models/by-model/iphone-16.jpg",
  "iPhone 15 Pro Max": "IMGBASE/img/models/by-model/iphone-15-pro-max.jpg",
  "iPhone 15": "IMGBASE/img/models/by-model/iphone-15.jpg",
  "iPhone 14 Pro Max": "IMGBASE/img/models/by-model/iphone-14-pro-max.jpg",
  "iPhone 14": "IMGBASE/img/models/by-model/iphone-14.jpg",
  "iPhone 13 Pro Max": "IMGBASE/img/models/by-model/iphone-13-pro-max.jpg",
  "iPhone 13": "IMGBASE/img/models/by-model/iphone-13.jpg",
  "iPhone 12 Pro Max": "IMGBASE/img/models/by-model/iphone-12-pro-max.png",
  "iPhone 12": "IMGBASE/img/models/by-model/iphone-12.png",
  "iPhone 11 Pro Max": "IMGBASE/img/models/by-model/iphone-11-pro-max.jpg",
  "iPhone 11": "IMGBASE/img/models/by-model/iphone-11.jpg",
  "iPhone XR": "IMGBASE/img/models/by-model/iphone-xr.jpg",
  "iPhone X": "IMGBASE/img/models/by-model/iphone-x.jpg",
  "iPhone 8 / SE 2020": "IMGBASE/img/models/by-model/iphone-8-se-2020.jpg",
  "iPhone 7": "IMGBASE/img/models/by-model/iphone-7.jpg",
  "Galaxy S24 Ultra": "IMGBASE/img/models/by-model/galaxy-s24-ultra.jpg",
  "Galaxy S24": "IMGBASE/img/models/by-model/galaxy-s24.jpg",
  "Galaxy S23": "IMGBASE/img/models/by-model/galaxy-s23.png",
  "Galaxy S22": "IMGBASE/img/models/by-model/galaxy-s22.png",
  "Galaxy S21": "IMGBASE/img/models/by-model/galaxy-s21.png",
  "Galaxy A54": "IMGBASE/img/models/by-model/galaxy-a54.jpg",
  "Galaxy A53": "IMGBASE/img/models/by-model/galaxy-a53.png",
  "Galaxy A34": "IMGBASE/img/models/by-model/galaxy-a34.png",
  "Galaxy A14": "IMGBASE/img/models/by-model/galaxy-a14.jpg",
  "Xiaomi 13": "IMGBASE/img/models/by-model/xiaomi-13.jpg",
  "Xiaomi 12": "IMGBASE/img/models/by-model/xiaomi-12.jpg",
  "Redmi Note 13": "IMGBASE/img/models/by-model/redmi-note-13.jpg",
  "Redmi Note 12": "IMGBASE/img/models/by-model/redmi-note-12.jpg",
  "Redmi 12": "IMGBASE/img/models/by-model/redmi-12.jpg",
  "P40 Pro": "IMGBASE/img/models/by-model/p40-pro.jpg",
  "P30 Pro": "IMGBASE/img/models/by-model/p30-pro.jpg",
  "P30 Lite": "IMGBASE/img/models/by-model/p30-lite.jpg",
  "Mate 20 Pro": "IMGBASE/img/models/by-model/mate-20-pro.jpg",
  "Pixel 8 Pro": "IMGBASE/img/models/by-model/pixel-8-pro.jpg",
  "Pixel 8": "IMGBASE/img/models/by-model/pixel-8.jpg",
  "Pixel 7": "IMGBASE/img/models/by-model/pixel-7.jpg",
  "Pixel 6": "IMGBASE/img/models/by-model/pixel-6.jpg",
  "iPad Pro 12.9\"": "IMGBASE/img/models/by-model/ipad-pro-12-9.jpg",
  "iPad Pro 11\"": "IMGBASE/img/models/by-model/ipad-pro-11.jpg",
  "iPad Air": "IMGBASE/img/models/by-model/ipad-air.png",
  "iPad 10 / 9": "IMGBASE/img/models/by-model/ipad-10-9.jpg",
  "iPad mini": "IMGBASE/img/models/by-model/ipad-mini.png"
};
  Object.keys(MODEL_IMAGES).forEach(function(k){ MODEL_IMAGES[k]=IMG(MODEL_IMAGES[k]); });

  var MARQUE_STYLE={Apple:{c:"#1d1d1f",abbr:"🍎"},Samsung:{c:"#1428a0",abbr:"SA"},Xiaomi:{c:"#ff6900",abbr:"MI"},Huawei:{c:"#cf0a2c",abbr:"HW"},Google:{c:"#4285f4",abbr:"G"},iPad:{c:"#555555",abbr:"iP"}};
  var MARQUE_IMG={Apple:IMG("IMGBASE/img/models/apple.jpg"),Samsung:IMG("IMGBASE/img/models/samsung.jpg"),Xiaomi:IMG("IMGBASE/img/models/xiaomi.jpg"),Huawei:IMG("IMGBASE/img/models/huawei.jpg"),Google:IMG("IMGBASE/img/models/google.jpg"),iPad:IMG("IMGBASE/img/models/ipad.png")};
  var MARQUES=[]; CATALOGUE.forEach(function(m){ if(MARQUES.indexOf(m.marque)<0) MARQUES.push(m.marque); });
  var state={marque:null,recherche:""};

  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
  function abbr(m){return (MARQUE_STYLE[m]||{}).abbr||m.slice(0,2).toUpperCase();}
  function countModeles(m){return CATALOGUE.filter(function(x){return x.marque===m;}).length;}

  /* --- bouton « Réserver » : déclenche le même parcours que le CTA du site --- */
  function dedup(t){t=(t||"").split("{")[0].replace(/[«»↗→]/g,"").replace(/\s+/g," ").trim().toLowerCase();
    var h=Math.floor(t.length/2); if(t.length%2===0&&t.slice(0,h)===t.slice(h)) t=t.slice(0,h).trim(); return t;}
  function reserver(){
    var els=document.querySelectorAll('a,button,[role="link"],[role="button"]');
    for(var i=0;i<els.length;i++){
      var el=els[i]; if(el.closest('#city-tarifs')) continue;
      var t=dedup(el.textContent); if(t.length>42) continue;
      if(t.indexOf("prendre rendez")===0||t.indexOf("prendre rend")===0){ el.click(); el.scrollIntoView({behavior:"smooth",block:"center"}); return; }
    }
    var f=document.querySelector("footer")||document.body.lastElementChild; if(f) f.scrollIntoView({behavior:"smooth"});
  }

  function render(){
    var sec=document.getElementById("city-tarifs"); if(!sec) return;
    var h="";
    if(!state.marque){
      h='<p class="ct-eyebrow">Tarifs</p>'+
        '<h2 class="ct-title">Choisissez votre marque</h2>'+
        '<p class="ct-lead">Sélectionnez la marque de votre appareil pour voir le tarif de chaque modèle. Des prix <strong>30 à 40 € moins chers que la concurrence</strong>.</p>'+
        '<div class="ct-brands">'+MARQUES.map(function(m){
          return '<button class="ct-brand" data-m="'+esc(m)+'" style="--bc:'+((MARQUE_STYLE[m]||{}).c||"#2563eb")+'">'+
            '<span class="ct-brand__logo">'+abbr(m)+'</span>'+
            '<span class="ct-brand__name">'+esc(m)+'</span>'+
            '<span class="ct-brand__count">'+countModeles(m)+' modèles</span>'+
            '<span class="ct-brand__go">Voir les modèles →</span></button>';
        }).join("")+'</div>'+
        (location.pathname.indexOf('/tarifs')<0?'<a class="ct-page" href="'+BASE+'/tarifs/">Voir la page Tarifs complète ↗</a>':'');
    } else {
      var q=state.recherche.trim().toLowerCase();
      var modeles=CATALOGUE.filter(function(m){return m.marque===state.marque&&(q===""||m.modele.toLowerCase().indexOf(q)>=0);});
      h='<button class="ct-btn ct-back">← Toutes les marques</button>'+
        '<div class="ct-head"><div class="ct-head__photo" style="--bc:'+((MARQUE_STYLE[state.marque]||{}).c||"#2563eb")+'">'+
          '<img src="'+MARQUE_IMG[state.marque]+'" alt="Téléphone '+esc(state.marque)+'" loading="lazy"></div>'+
        '<div><h2 class="ct-title" style="margin-top:0">Réparations '+esc(state.marque)+'</h2>'+
        '<p class="ct-lead" style="margin-bottom:0">Tarifs par modèle, pièce et main-d’œuvre comprises — 30 à 40 € moins chers que la concurrence. Cliquez sur « Réserver » pour prendre rendez-vous.</p></div></div>'+
        '<div class="ct-bar"><input type="search" placeholder="Rechercher un modèle '+esc(state.marque)+'…" value="'+esc(state.recherche)+'"></div>'+
        '<div class="ct-tablewrap"><table class="ct-table"><thead><tr><th>Modèle</th>'+
        TYPES_REPARATION.map(function(t){return '<th>'+esc(t.nom)+'</th>';}).join("")+'<th></th></tr></thead><tbody>'+
        (modeles.length===0?'<tr><td class="na" colspan="'+(TYPES_REPARATION.length+2)+'">Aucun modèle trouvé.</td></tr>':
          modeles.map(function(m){
            return '<tr><td class="ct-model"><img class="ct-thumb" src="'+(MODEL_IMAGES[m.modele]||MARQUE_IMG[m.marque])+'" alt="Téléphone '+esc(m.modele)+'" loading="lazy"><span>'+esc(m.modele)+'</span></td>'+
              TYPES_REPARATION.map(function(t){var v=m[t.cle];return '<td class="'+(v==null?"na":"prix")+'">'+(v==null?"—":v+" €")+'</td>';}).join("")+
              '<td><button class="ct-reserver">Réserver</button></td></tr>';
          }).join(""))+
        '</tbody></table></div>'+
        '<p class="ct-note">🛡️ '+esc(GARANTIE)+'.</p>'+
        '<p class="ct-note">Modèle non listé ou réparation spécifique (carte mère, haut-parleur, micro…) ? <button class="ct-link">Demandez un devis gratuit</button>.</p>';
    }
    sec.innerHTML='<div class="ct-container">'+h+'</div>';
    sec.querySelectorAll(".ct-brand").forEach(function(b){ b.addEventListener("click",function(){ state.marque=b.getAttribute("data-m"); state.recherche=""; render(); sec.scrollIntoView({behavior:"smooth",block:"start"}); }); });
    var back=sec.querySelector(".ct-back"); if(back) back.addEventListener("click",function(){ state.marque=null; render(); });
    var inp=sec.querySelector('.ct-bar input'); if(inp){ inp.addEventListener("input",function(){ state.recherche=inp.value;
      var tb=sec.querySelector("tbody"); if(tb){ var q=state.recherche.trim().toLowerCase();
        var modeles=CATALOGUE.filter(function(m){return m.marque===state.marque&&(q===""||m.modele.toLowerCase().indexOf(q)>=0);});
        tb.innerHTML=(modeles.length===0?'<tr><td class="na" colspan="'+(TYPES_REPARATION.length+2)+'">Aucun modèle trouvé.</td></tr>':
          modeles.map(function(m){
            return '<tr><td class="ct-model"><img class="ct-thumb" src="'+(MODEL_IMAGES[m.modele]||MARQUE_IMG[m.marque])+'" alt="" loading="lazy"><span>'+esc(m.modele)+'</span></td>'+
              TYPES_REPARATION.map(function(t){var v=m[t.cle];return '<td class="'+(v==null?"na":"prix")+'">'+(v==null?"—":v+" €")+'</td>';}).join("")+
              '<td><button class="ct-reserver">Réserver</button></td></tr>';}).join(""));
        tb.querySelectorAll(".ct-reserver").forEach(function(b){ b.addEventListener("click",reserver); }); } }); }
    sec.querySelectorAll(".ct-reserver,.ct-link").forEach(function(b){ b.addEventListener("click",reserver); });
  }

  /* --- insertion : après la section « Notre méthode » (accueil seulement) --- */
  function findAnchor(){
    var els=document.querySelectorAll("h1,h2,h3,h4,p,span");
    for(var i=0;i<els.length;i++){
      var t=(els[i].textContent||"").replace(/\s+/g," ").trim();
      if(t.indexOf("Notre méthode")===0||t==="Comment ça marche"){
        var p=els[i], main=document.getElementById("main")||document.body;
        while(p.parentElement&&p.parentElement!==main) p=p.parentElement;
        return p;
      }
    }
    return null;
  }
  function ensure(){
    var ex=document.getElementById("city-tarifs");
    if(ex){ if(!ex.firstChild) render(); return; }
    var anchor=findAnchor(); if(!anchor||!anchor.parentNode) return;
    var sec=document.createElement("section"); sec.id="city-tarifs";
    anchor.parentNode.insertBefore(sec, anchor.nextSibling);
    render();
  }

  /* --- filet post-hydratation : Hanzo -> CityPhone + faute « rend-vous » --- */
  function fixText(){
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);
    var n; while((n=w.nextNode())){
      if(n.parentElement&&n.parentElement.closest("#city-tarifs")) continue;
      var t=n.nodeValue; if(!t) continue;
      if(/Hanzo/.test(t)){ n.nodeValue=t.replace(/Hanzo Studio/g,"CityPhone & Vape").replace(/Hanzo, Founder/g,"CityPhone & Vape — Créteil").replace(/Hanzo/g,"CityPhone"); }
      else if(t.indexOf("Prendre rend-vous")>=0){ n.nodeValue=t.replace(/Prendre rend-vous/g,"Prendre rendez-vous"); }
    }
    if(!/CityPhone/.test(document.title)) document.title="CityPhone & Vape — Réparation de téléphones à Créteil";
  }

  function hideBadge(){
    if(document.getElementById("ct-nobadge")) return;
    var st=document.createElement("style"); st.id="ct-nobadge";
    st.textContent='#__framer-badge-container,a[href*="framer.link"],div[class*="framer-badge"]{display:none!important}';
    document.head.appendChild(st);
    document.querySelectorAll('a[href*="framer.link"],a[href*="framer.com"]').forEach(function(a){
      var t=(a.textContent||"").toLowerCase();
      if(t.indexOf("remix")>=0||t.indexOf("framer")>=0||t.indexOf("template")>=0){
        a.style.setProperty("display","none","important");
        var p=a.parentElement;
        for(var k=0;k<4&&p;k++){ if(getComputedStyle(p).position==="fixed"){ p.style.setProperty("display","none","important"); break; } p=p.parentElement; }
      }
    });
  }
  function boot(){
    var fonts=document.createElement("link"); fonts.rel="stylesheet";
    fonts.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap";
    document.head.appendChild(fonts);
    ensure(); fixText();
    hideBadge(); setInterval(function(){ ensure(); fixText(); hideBadge(); },1500);
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
