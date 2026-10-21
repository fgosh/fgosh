/* TGF — site statique léger · interactions vanilla JS */
(function () {
  "use strict";

  // ⚠️ E-mail de réception des demandes de devis — À MODIFIER avec votre vraie adresse.
  var EMAIL = "contact@toulouseguepesfrelons.fr";

  var VIDEOS = [
    { title: "Destruction d'un nid de frelons asiatiques", id: "" },
    { title: "Nid de guêpes sous toiture", id: "" },
    { title: "Frelon européen dans une charpente", id: "" },
    { title: "Intervention en hauteur à la perche", id: "" }
  ];

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $all = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var enc = encodeURIComponent;

  document.addEventListener("DOMContentLoaded", function () {
    $("#year").textContent = new Date().getFullYear();

    /* ---- Marquee ---- */
    var items = ["GUÊPES", "FRELONS ASIATIQUES", "FRELONS EUROPÉENS", "7J/7", "DEVIS GRATUIT", "CERTIBIOCIDE", "INTERVENTION RAPIDE"];
    var row = $("#marquee"), html = "";
    items.concat(items).forEach(function (t) { html += "<div><b>" + t + "</b><i></i></div>"; });
    row.innerHTML = html;

    /* ---- Header scrolled ---- */
    var header = $("#header");
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 20); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

    /* ---- Mobile menu ---- */
    var burger = $("#burger"), mnav = $("#mobileNav");
    burger.addEventListener("click", function () { mnav.classList.toggle("open"); });
    $all("a", mnav).forEach(function (a) { a.addEventListener("click", function () { mnav.classList.remove("open"); }); });

    /* ---- Reveal on scroll ---- */
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { rootMargin: "-60px" });
      $all(".reveal").forEach(function (el) { io.observe(el); });
    } else {
      $all(".reveal").forEach(function (el) { el.classList.add("in"); });
    }

    /* ---- Carte de France + épingles ---- */
    var selected = null;
    var pinEls = {};
    var chipEls = {};
    var pinned = {};
    (window.MAP_PINS || []).forEach(function (p) { pinned[p.city] = true; });

    var wrap = $("#mapwrap");
    if (wrap && window.FRANCE_PATH) {
      var ns = "http://www.w3.org/2000/svg";
      var svg = document.createElementNS(ns, "svg");
      svg.setAttribute("viewBox", "0 0 1024 1024");
      svg.setAttribute("class", "fr");
      var g = document.createElementNS(ns, "g");
      g.setAttribute("transform", "translate(0,1024) scale(0.1,-0.1)");
      var path = document.createElementNS(ns, "path");
      path.setAttribute("d", window.FRANCE_PATH);
      path.setAttribute("fill", "#161619");
      path.setAttribute("stroke", "#3f3f46");
      path.setAttribute("stroke-width", "18");
      g.appendChild(path); svg.appendChild(g); wrap.appendChild(svg);

      (window.MAP_PINS || []).forEach(function (p) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "pin" + (p.major ? " ping-on" : "");
        b.style.left = p.x + "%"; b.style.top = p.y + "%";
        b.setAttribute("aria-label", p.city);
        b.innerHTML = '<span class="ping" style="width:' + (p.major ? 14 : 10) + 'px;height:' + (p.major ? 14 : 10) + 'px"></span>' +
          '<span class="dot" style="width:' + (p.major ? 12 : 8) + 'px;height:' + (p.major ? 12 : 8) + 'px"></span>' +
          '<span class="tip">' + p.city + '</span>';
        b.addEventListener("click", function () { setSelected(p.city); });
        pinEls[p.city] = b;
        wrap.appendChild(b);
      });
    }

    function setSelected(city) {
      selected = (selected === city) ? null : city;
      Object.keys(pinEls).forEach(function (c) {
        pinEls[c].classList.toggle("sel", selected === c);
      });
      Object.keys(chipEls).forEach(function (c) {
        chipEls[c].classList.toggle("sel", selected === c);
      });
    }

    /* ---- Liste des villes + recherche ---- */
    var list = $("#cityList"), search = $("#citySearch"), count = $("#cityCount");
    var cities = window.CITIES || [];
    function renderCities(q) {
      q = (q || "").trim().toLowerCase();
      list.innerHTML = ""; chipEls = {};
      var shown = cities.filter(function (c) { return !q || c.toLowerCase().indexOf(q) !== -1; });
      if (!shown.length) {
        list.innerHTML = '<p style="color:#a1a1aa;font-size:14px">Ville non listée ? Appelez-nous, nous couvrons peut-être votre secteur.</p>';
      } else {
        shown.forEach(function (c) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "chip" + (selected === c ? " sel" : "");
          btn.innerHTML = (pinned[c] ? '<span class="cd"></span>' : "") + c;
          btn.addEventListener("click", function () { setSelected(c); });
          chipEls[c] = btn;
          list.appendChild(btn);
        });
      }
      count.textContent = shown.length + " commune(s) affichée(s)";
    }
    if (list) { renderCities(""); search.addEventListener("input", function () { renderCities(search.value); }); }

    /* ---- Insectes (form) ---- */
    var chosenInsect = "";
    $all("#insects button").forEach(function (b) {
      b.addEventListener("click", function () {
        $all("#insects button").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on"); chosenInsect = b.getAttribute("data-v");
      });
    });

    /* ---- Formulaire → mailto (+ honeypot anti-spam) ---- */
    var form = $("#quoteForm");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      if ($("#website").value) return; // honeypot rempli = bot
      var name = $("#f-name").value.trim(), phone = $("#f-phone").value.trim(),
          city = $("#f-city").value.trim(), zip = $("#f-zip").value.trim(), msg = $("#f-msg").value.trim();
      if (!name || !phone || !msg) { alert("Merci de renseigner au minimum votre nom, votre téléphone et la description."); return; }
      var subject = "Demande de devis" + (chosenInsect ? " — " + chosenInsect : "") + (city ? " (" + city + ")" : "");
      var body = "Nom : " + name + "\nTéléphone : " + phone +
        "\nVille : " + (city || "-") + "\nCode postal : " + (zip || "-") +
        "\nType de nuisible : " + (chosenInsect || "-") +
        "\n\nDescription :\n" + msg + "\n";
      window.location.href = "mailto:" + EMAIL + "?subject=" + enc(subject) + "&body=" + enc(body);
    });

    /* ---- Vidéos ---- */
    var grid = $("#videoGrid");
    if (grid) {
      VIDEOS.forEach(function (v) {
        var cell = document.createElement(v.id ? "button" : "div");
        cell.className = "vid";
        if (v.id) {
          cell.type = "button";
          cell.innerHTML = '<img src="https://img.youtube.com/vi/' + v.id + '/hqdefault.jpg" alt="' + v.title + '" style="width:100%;height:100%;object-fit:cover">' +
            '<span class="play"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7Z"/></svg></span>' +
            '<span class="cap">' + v.title + '</span>';
          cell.addEventListener("click", function () { openVideo(v.id, v.title); });
        } else {
          cell.innerHTML = '<span class="hz hazard"></span>' +
            '<span class="play"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><rect x="4" y="3" width="16" height="18" rx="2"/></svg></span>' +
            '<small>Bientôt disponible</small><span class="cap">' + v.title + '</span>';
        }
        grid.appendChild(cell);
      });
    }

    var modal = $("#videoModal"), box = $("#videoBox");
    function openVideo(id, title) {
      box.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1" title="' + title + '" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
      modal.classList.add("open");
    }
    function closeVideo() { modal.classList.remove("open"); box.innerHTML = ""; }
    $("#videoClose").addEventListener("click", closeVideo);
    modal.addEventListener("click", function (e) { if (e.target === modal) closeVideo(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeVideo(); });
  });
})();
