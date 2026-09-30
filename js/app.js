/* FoodieFanatix — reviews, filters, gallery and uploads */
(function () {
  "use strict";

  // ---------- Review data (Claire edits this list, or uploads through the site) ----------
  var REVIEWS = [
    {
      id: "la-brasa-de-tomas", name: "La Brasa de Tomás", city: "Buenos Aires", country: "Argentina", code: "EZE",
      region: "Americas", cuisine: "Parrilla", score: 9.4, visited: "2026-09-12",
      order: "Bife de chorizo, medium-rare", spend: "ARS 95,000 for two",
      breakdown: { Food: 9.7, Service: 9.1, Setting: 9.0, Value: 9.5 },
      photos: [["steak.jpg", "Bife de chorizo with green beans and caramelised onions"], ["chef-pass.jpg", "The grill cook finishing plates at the pass"]],
      text: "Tomás has been working the same wood-fired grill in Palermo for eighteen years, and it shows. The bife de chorizo arrives with a crust so dark it looks burnt until you cut into it and find a perfect rosy centre. The chimichurri is sharp with vinegar and fresh oregano, not the oily green paste you get elsewhere.\n\nSides are simple and right: charred green beans, onions cooked down until they're almost jam. Service is brisk but warm, and the Malbec list is priced for locals, not tourists. Book a table for 9:30pm and arrive hungry. This is the best steak I've eaten this year."
    },
    {
      id: "golden-pleat", name: "Golden Pleat Dumpling Bar", city: "Shanghai", country: "China", code: "PVG",
      region: "Asia", cuisine: "Dumplings", score: 9.1, visited: "2026-08-28",
      order: "Crab-roe xiaolongbao", spend: "¥210 for two",
      breakdown: { Food: 9.5, Service: 8.6, Setting: 8.4, Value: 9.6 },
      photos: [["dumplings.jpg", "Three bowls of pleated dumplings with dipping sauce"], ["chef-plating.jpg", "Plating in the open kitchen"]],
      text: "Eighteen pleats on every xiaolongbao, and I counted. The crab-roe version is the reason to come: rich, golden soup that bursts the moment you nibble the top, balanced by black vinegar and slivers of young ginger.\n\nThe pan-fried shengjian are almost as good, with a crackling base and a sesame-flecked top. It's a small room with shared tables and a queue out the door at lunch, so go at 2pm when it quietens down. At these prices you can order one of everything, and you should."
    },
    {
      id: "dolsot-house", name: "Dolsot House", city: "Seoul", country: "South Korea", code: "SEL",
      region: "Asia", cuisine: "Korean", score: 8.8, visited: "2026-08-10",
      order: "Stone-pot bibimbap", spend: "₩46,000 for two",
      breakdown: { Food: 9.1, Service: 8.5, Setting: 8.2, Value: 9.2 },
      photos: [["bibimbap.jpg", "Stone-pot bibimbap with a fried egg and steamed dumplings"]],
      text: "The dolsot arrives still hissing. Wait a full minute before you mix, then scrape the bottom: the crisp layer of rice, nurungji, is the best part of the dish. Toppings are seasonal and generous, and the house gochujang has a deep, fermented sweetness.\n\nThe banchan refills keep coming, and the steamed mandu on the side are delicate and peppery. It's a tiny place in Ikseon-dong with eight tables, so expect a short wait."
    },
    {
      id: "nar-meze-evi", name: "Nar Meze Evi", city: "Istanbul", country: "Türkiye", code: "IST",
      region: "Europe", cuisine: "Meze", score: 8.9, visited: "2026-07-04",
      order: "Chickpea and pomegranate plate", spend: "₺2,400 for two",
      breakdown: { Food: 9.2, Service: 8.8, Setting: 9.0, Value: 8.5 },
      photos: [["mezze-bowl.jpg", "Chickpeas, herbs and pomegranate with flatbread"], ["chickpea-bento.jpg", "Spiced chickpea bowls with avocado"]],
      text: "A rooftop in Karaköy with a view straight across the Bosphorus, and meze that holds its own against it. The chickpea plate is warm, cumin-spiced and scattered with pomegranate seeds and parsley. Tear the flatbread straight from the oven and use it as a spoon.\n\nOrder eight or nine small plates for two and let the waiter steer you. Save room for the kaymak with honey at the end."
    },
    {
      id: "mare-alta", name: "Maré Alta", city: "Lisbon", country: "Portugal", code: "LIS",
      region: "Europe", cuisine: "Seafood", score: 8.6, visited: "2026-06-18",
      order: "Grilled dourada with lemon butter", spend: "€110 for two",
      breakdown: { Food: 8.9, Service: 8.7, Setting: 8.5, Value: 8.1 },
      photos: [["fish-plate.jpg", "Grilled fish with salad and lemon, carried to the table"], ["chef-plating.jpg", "Finishing touches in the kitchen"]],
      text: "Everything here was swimming this morning. The dourada is grilled whole over charcoal, filleted at the table and dressed with brown butter and lemon. It needs nothing else, though the crushed potatoes with coriander are worth ordering too.\n\nIt's pricier than the tascas nearby, but the fish is better and the vinho verde is ice cold. Ask for a table by the window to watch the trams go past."
    },
    {
      id: "maison-figue", name: "Maison Figue", city: "Paris", country: "France", code: "CDG",
      region: "Europe", cuisine: "Brunch", score: 8.4, visited: "2026-05-11",
      order: "The grazing board", spend: "€58 for two",
      breakdown: { Food: 8.7, Service: 8.0, Setting: 8.9, Value: 7.9 },
      photos: [["grazing.jpg", "Figs, grapes, soft-boiled eggs and cured ham on a slate board"], ["eggs-avocado.jpg", "Soft eggs and avocado on sourdough"]],
      text: "A weekend brunch spot in the 11th that treats a board of fruit and charcuterie like a composed dish. Fresh figs, jammy eggs, Bayonne ham and a wedge of Comté aged for two years. The coffee is excellent, which is still rarer in Paris than it should be.\n\nIt fills up by 11am on Saturdays, and they don't take bookings. Come early or be prepared to wait with a croissant from the counter."
    },
    {
      id: "harbour-greens", name: "Harbour Greens", city: "Cape Town", country: "South Africa", code: "CPT",
      region: "Africa", cuisine: "Seafood bowls", score: 8.2, visited: "2026-07-22",
      order: "Seared tuna bowl", spend: "R640 for two",
      breakdown: { Food: 8.4, Service: 8.3, Setting: 8.8, Value: 7.6 },
      photos: [["poke-bowl.jpg", "Seared tuna bowl with avocado, greens and sesame"], ["salad-jar.jpg", "Layered salad jar with quinoa and tomatoes"]],
      text: "A bright, breezy spot at the V&A Waterfront with Table Mountain framed in the window. The seared tuna bowl is the star: line-caught yellowfin, sesame, chilli and a lime dressing that wakes everything up.\n\nPortions are generous and the ingredients are clearly local. It's a little pricey for a lunch bowl, but on a clear day with that view, I didn't mind."
    },
    {
      id: "stack-and-smoke", name: "Stack & Smoke", city: "New York", country: "USA", code: "JFK",
      region: "Americas", cuisine: "Burgers", score: 7.9, visited: "2026-05-30",
      order: "Double smash with bacon jam", spend: "US$62 for two",
      breakdown: { Food: 8.4, Service: 7.2, Setting: 7.5, Value: 8.0 },
      photos: [["burger.jpg", "Double smash burger with bacon, fries and a craft beer"]],
      text: "A towering double smash burger with lacy, crisp edges, American cheese and a smoky bacon jam that drips down your wrist. The potato bun holds up, just. The fries are thin, salty and good.\n\nThe room is loud and service was distracted when I visited, so this is a burger to eat quickly and happily rather than linger over. Worth a stop if you're in the Lower East Side."
    },
    {
      id: "saltwater-bowl", name: "Saltwater Bowl Co.", city: "Sydney", country: "Australia", code: "SYD",
      region: "Oceania", cuisine: "Breakfast bowls", score: 7.8, visited: "2026-03-29",
      order: "Berry and granola bowl", spend: "A$44 for two",
      breakdown: { Food: 7.9, Service: 8.2, Setting: 8.4, Value: 6.9 },
      photos: [["fruit-bowl.jpg", "Fruit platter, berry yoghurt bowl and avocado on a wooden board"]],
      text: "The post-swim breakfast of choice for half of Bondi. The berry bowl is fresh and pretty, with house granola that has real crunch and not too much sugar. The fruit platter is a good share for two.\n\nIt's a good breakfast rather than a memorable one, and it's priced for the postcode. Go for the sunshine and the people-watching."
    },
    {
      id: "early-bird", name: "Early Bird Canteen", city: "London", country: "United Kingdom", code: "LHR",
      region: "Europe", cuisine: "Breakfast", score: 7.4, visited: "2026-04-20",
      order: "Soft eggs on sourdough", spend: "£38 for two",
      breakdown: { Food: 7.6, Service: 7.4, Setting: 7.8, Value: 6.8 },
      photos: [["eggs-avocado.jpg", "Soft-boiled eggs with avocado and spinach"], ["salad-jar.jpg", "Grain salad in a jar"]],
      text: "A neighbourhood café in Hackney doing reliable, well-sourced breakfasts. The eggs are perfectly jammy and the sourdough comes from the bakery next door. The grain salads at lunch are fine but forgettable.\n\nGood if you live nearby. I wouldn't cross London for it."
    }
  ];

  var EXTRA_PHOTOS = [
    ["chef-pass.jpg", "Behind the pass in Buenos Aires"],
    ["chef-plating.jpg", "Plating in Lisbon"],
    ["chickpea-bento.jpg", "Chickpea bowls, Istanbul"],
    ["salad-jar.jpg", "Grain jar, Cape Town"]
  ];

  var STORE_KEY = "ff-reviews-v1";
  var IMG = "images/";
  var state = { region: "All", q: "", sort: "latest" };

  // ---------- helpers ----------
  function $(s, el) { return (el || document).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function src(p) { return /^(data:|blob:|https?:)/.test(p) ? p : IMG + p; }
  function fmtDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }
  function toast(msg) {
    $("#toastMsg").textContent = msg;
    bootstrap.Toast.getOrCreateInstance($("#toast"), { delay: 4200 }).show();
  }
  function loadMine() {
    try { var raw = localStorage.getItem(STORE_KEY); return raw ? JSON.parse(raw) : []; } catch (e) { return []; }
  }
  function saveMine(list) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); return true; } catch (e) { return false; }
  }
  var mine = loadMine();
  function all() { return mine.concat(REVIEWS); }
  function byId(id) { return all().find(function (r) { return r.id === id; }); }
  function latest() { return all().slice().sort(function (a, b) { return b.visited.localeCompare(a.visited); })[0]; }

  // ---------- rendering ----------
  function renderPassport() {
    var seen = {};
    $("#passport").innerHTML = all().slice().sort(function (a, b) { return b.visited.localeCompare(a.visited); })
      .filter(function (r) { if (seen[r.code]) return false; seen[r.code] = 1; return true; })
      .map(function (r) { return '<span class="stamp" title="' + esc(r.city) + '">' + esc(r.code) + "</span>"; }).join("");
  }

  function renderFeatured() {
    var r = latest();
    $("#featured").innerHTML =
      '<div class="row g-0">' +
        '<div class="col-md-7"><div class="photo"><img src="' + src(r.photos[0][0]) + '" alt="' + esc(r.photos[0][1]) + '"></div></div>' +
        '<div class="col-md-5"><div class="body d-flex flex-column gap-2 h-100">' +
          '<span class="eyebrow">Latest review · <span class="mono">' + esc(r.code) + "</span></span>" +
          '<h3 id="featuredTitle" class="mb-0">' + esc(r.name) + "</h3>" +
          '<p class="text-muted-ff mb-1">' + esc(r.cuisine) + " · " + esc(r.city) + ", " + esc(r.country) + "</p>" +
          '<div><span class="score">' + r.score.toFixed(1) + "<small>/10</small></span></div>" +
          '<p class="mt-2 mb-3">' + esc(r.text.split("\n\n")[0]) + "</p>" +
          '<div class="mt-auto"><button class="btn btn-plum" type="button" data-open-review="' + esc(r.id) + '">Read the full review</button></div>' +
        "</div></div>" +
      "</div>";
  }

  function card(r) {
    return '<div class="col"><button type="button" class="review-card" data-open-review="' + esc(r.id) + '" aria-label="Read review of ' + esc(r.name) + '">' +
      '<div class="thumb"><img loading="lazy" src="' + src(r.photos[0][0]) + '" alt="' + esc(r.photos[0][1]) + '">' +
        '<span class="code-tag">' + esc(r.code) + "</span>" +
        '<span class="score">' + r.score.toFixed(1) + "</span>" +
        (r.photos.length > 1 ? '<span class="photo-count">' + r.photos.length + " photos</span>" : "") +
      "</div>" +
      '<div class="card-body">' +
        '<span class="place">' + esc(r.city) + ", " + esc(r.country) + " · " + esc(r.cuisine) + (r.mine ? ' <span class="mine-badge">New</span>' : "") + "</span>" +
        "<h3>" + esc(r.name) + "</h3>" +
        '<p class="excerpt">' + esc(r.text.split("\n\n")[0]) + "</p>" +
        '<div class="order"><span>' + (r.order ? "Order: <strong>" + esc(r.order) + "</strong>" : "&nbsp;") + "</span><span>" + esc(fmtDate(r.visited).replace(/^\d+ /, "")) + "</span></div>" +
      "</div></button></div>";
  }

  function renderGrid() {
    var q = state.q.trim().toLowerCase();
    var list = all().filter(function (r) {
      if (state.region !== "All" && r.region !== state.region) return false;
      if (!q) return true;
      return [r.name, r.city, r.country, r.cuisine, r.code, r.order, r.text].join(" ").toLowerCase().indexOf(q) > -1;
    });
    list.sort(state.sort === "score"
      ? function (a, b) { return b.score - a.score; }
      : function (a, b) { return b.visited.localeCompare(a.visited); });
    // The newest review is already featured above, so the default view skips it
    var shown = (state.region === "All" && !q && state.sort === "latest")
      ? list.filter(function (r) { return r.id !== latest().id; }) : list;
    $("#reviewGrid").innerHTML = shown.map(card).join("");
    $("#emptyState").hidden = list.length > 0;
    $("#resultCount").textContent = list.length + (list.length === 1 ? " review" : " reviews");
  }

  function renderChips() {
    var regions = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania"];
    $("#regionChips").innerHTML = regions.map(function (g) {
      return '<button type="button" class="chip" data-region="' + g + '" aria-pressed="' + (g === state.region) + '">' + (g === "All" ? "All cities" : g) + "</button>";
    }).join("");
  }

  function renderWall() {
    var photos = [];
    all().forEach(function (r) { r.photos.forEach(function (p) { photos.push([p[0], p[1] + " · " + r.city]); }); });
    EXTRA_PHOTOS.forEach(function (p) { photos.push(p); });
    var seen = {};
    photos = photos.filter(function (p) { if (seen[p[0]]) return false; seen[p[0]] = 1; return true; });
    $("#photoWall").innerHTML = photos.map(function (p, i) {
      return '<button type="button" class="' + (i % 3 === 1 ? "tall" : "") + '" data-lightbox="' + esc(src(p[0])) + '" data-caption="' + esc(p[1]) + '">' +
        '<figure class="m-0"><img loading="lazy" src="' + esc(src(p[0])) + '" alt="' + esc(p[1]) + '"><figcaption>' + esc(p[1]) + "</figcaption></figure></button>";
    }).join("");
  }

  function openReview(id) {
    var r = byId(id); if (!r) return;
    var cid = "car-" + r.id.replace(/[^a-z0-9-]/gi, "");
    var slides = r.photos.map(function (p, i) {
      return '<div class="carousel-item' + (i === 0 ? " active" : "") + '"><img src="' + src(p[0]) + '" alt="' + esc(p[1]) + '"></div>';
    }).join("");
    var controls = r.photos.length > 1
      ? '<button class="carousel-control-prev" type="button" data-bs-target="#' + cid + '" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous photo</span></button>' +
        '<button class="carousel-control-next" type="button" data-bs-target="#' + cid + '" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next photo</span></button>'
      : "";
    var bd = r.breakdown ? Object.keys(r.breakdown).map(function (k) {
      var v = r.breakdown[k];
      return '<div><div class="row-lbl"><span>' + k + "</span><span>" + v.toFixed(1) + '</span></div><div class="bar"><i style="width:' + (v * 10) + '%"></i></div></div>';
    }).join("") : "";
    $("#reviewModalBody").innerHTML =
      '<div class="modal-header">' +
        '<div class="min-w-0"><span class="eyebrow"><span class="mono">' + esc(r.code) + "</span> · " + esc(r.city) + ", " + esc(r.country) + "</span>" +
        '<h2 class="modal-title h3 mb-0" id="reviewModalTitle">' + esc(r.name) + "</h2></div>" +
        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
      "</div>" +
      '<div class="modal-body p-0">' +
        '<div class="row g-0">' +
          '<div class="col-lg-7"><div id="' + cid + '" class="carousel slide review-carousel" data-bs-ride="false">' +
            '<div class="carousel-inner">' + slides + "</div>" + controls + "</div></div>" +
          '<div class="col-lg-5"><div class="p-3 p-md-4 d-flex flex-column gap-3">' +
            '<div class="d-flex align-items-center gap-2 flex-wrap"><span class="score fs-5">' + r.score.toFixed(1) + '<small>/10</small></span><span class="text-muted-ff">' + esc(r.cuisine) + "</span></div>" +
            (bd ? '<div class="breakdown">' + bd + "</div>" : "") +
            '<dl class="facts m-0">' +
              (r.order ? "<div><dt>Must order</dt><dd>" + esc(r.order) + "</dd></div>" : "") +
              (r.spend ? "<div><dt>Spend</dt><dd>" + esc(r.spend) + "</dd></div>" : "") +
              "<div><dt>Visited</dt><dd>" + fmtDate(r.visited) + "</dd></div>" +
            "</dl>" +
          "</div></div>" +
        "</div>" +
        '<div class="review-text p-3 p-md-4 pt-md-3">' + r.text.split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
          (r.mine ? '<div class="d-flex flex-wrap gap-2 align-items-center mt-3" id="removeRow"><button type="button" class="btn btn-ghost btn-sm" data-remove="' + esc(r.id) + '">Remove this review</button></div>' : "") +
        "</div>" +
      "</div>";
    bootstrap.Modal.getOrCreateInstance($("#reviewModal")).show();
  }

  function renderAll() { renderPassport(); renderFeatured(); renderGrid(); renderWall(); }

  // ---------- events ----------
  document.addEventListener("click", function (e) {
    var open = e.target.closest("[data-open-review]");
    if (open) { openReview(open.getAttribute("data-open-review")); return; }
    var chip = e.target.closest("[data-region]");
    if (chip) { state.region = chip.getAttribute("data-region"); renderChips(); renderGrid(); return; }
    var lb = e.target.closest("[data-lightbox]");
    if (lb) {
      $("#lightboxImg").src = lb.getAttribute("data-lightbox");
      $("#lightboxImg").alt = lb.getAttribute("data-caption");
      $("#lightboxCaption").textContent = lb.getAttribute("data-caption");
      bootstrap.Modal.getOrCreateInstance($("#lightbox")).show();
      return;
    }
    var rm = e.target.closest("[data-remove]");
    if (rm) {
      var id = rm.getAttribute("data-remove");
      $("#removeRow").innerHTML = '<span class="small">Remove this review from the site?</span>' +
        '<button type="button" class="btn btn-plum btn-sm" data-remove-yes="' + esc(id) + '">Remove</button>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-remove-no>Keep it</button>';
      return;
    }
    var yes = e.target.closest("[data-remove-yes]");
    if (yes) {
      var rid = yes.getAttribute("data-remove-yes");
      mine = mine.filter(function (r) { return r.id !== rid; });
      saveMine(mine);
      bootstrap.Modal.getInstance($("#reviewModal")).hide();
      renderAll(); toast("Review removed");
      return;
    }
    if (e.target.closest("[data-remove-no]")) {
      var btnId = $("[data-remove-yes]").getAttribute("data-remove-yes");
      $("#removeRow").innerHTML = '<button type="button" class="btn btn-ghost btn-sm" data-remove="' + esc(btnId) + '">Remove this review</button>';
    }
  });

  $("#search").addEventListener("input", function (e) { state.q = e.target.value; renderGrid(); });
  $("#sortBy").addEventListener("change", function (e) { state.sort = e.target.value; renderGrid(); });

  // Collapse mobile menu after choosing a link
  document.querySelectorAll("#mainNav .nav-link, #mainNav .btn").forEach(function (a) {
    a.addEventListener("click", function () {
      var c = bootstrap.Collapse.getInstance($("#mainNav")); if (c) c.hide();
    });
  });

  $("#dispatchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var input = $("#dispatchEmail");
    if (!input.checkValidity()) { input.classList.add("is-invalid"); input.focus(); return; }
    input.classList.remove("is-invalid");
    toast("Sign-up form works. Connect a mailing service to start collecting subscribers.");
    input.value = "";
  });

  // ---------- upload ----------
  var pending = []; // data URLs
  var dz = $("#dropzone"), fileInput = $("#upPhotos");

  function compress(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onerror = reject;
      reader.onload = function () {
        var img = new Image();
        img.onerror = reject;
        img.onload = function () {
          var max = 1400, w = img.width, h = img.height, s = Math.min(1, max / Math.max(w, h));
          var c = document.createElement("canvas"); c.width = Math.round(w * s); c.height = Math.round(h * s);
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL("image/jpeg", 0.82));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }
  function addFiles(files) {
    var imgs = Array.prototype.filter.call(files, function (f) { return /^image\//.test(f.type); });
    if (!imgs.length) return;
    Promise.all(imgs.map(compress)).then(function (urls) {
      pending = pending.concat(urls);
      $("#previews").innerHTML = pending.map(function (u, i) { return '<img src="' + u + '" alt="Uploaded photo ' + (i + 1) + '">'; }).join("");
      $("#photoError").hidden = true; dz.classList.remove("is-invalid");
    }).catch(function () { toast("One of those files couldn't be read. Try a JPG or PNG."); });
  }
  dz.addEventListener("click", function () { fileInput.click(); });
  dz.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fileInput.click(); } });
  fileInput.addEventListener("change", function () { addFiles(fileInput.files); fileInput.value = ""; });
  ["dragenter", "dragover"].forEach(function (t) { dz.addEventListener(t, function (e) { e.preventDefault(); dz.classList.add("drag"); }); });
  ["dragleave", "drop"].forEach(function (t) { dz.addEventListener(t, function (e) { e.preventDefault(); dz.classList.remove("drag"); }); });
  dz.addEventListener("drop", function (e) { addFiles(e.dataTransfer.files); });

  var scoreIn = $("#upScore");
  scoreIn.addEventListener("input", function () { $("#upScoreOut").innerHTML = Number(scoreIn.value).toFixed(1) + "<small>/10</small>"; });

  $("#uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var form = e.target, ok = form.checkValidity();
    form.classList.add("was-validated");
    if (!pending.length) { ok = false; $("#photoError").hidden = false; dz.classList.add("is-invalid"); }
    if (!ok) { var bad = form.querySelector(":invalid"); if (bad) bad.focus(); return; }

    var name = $("#upName").value.trim();
    var today = new Date(), iso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    var review = {
      id: "mine-" + Date.now(), mine: true, name: name,
      city: $("#upCity").value.trim(), country: $("#upCountry").value.trim(), code: $("#upCode").value.trim().toUpperCase(),
      region: $("#upRegion").value, cuisine: $("#upCuisine").value.trim(), score: Number(scoreIn.value), visited: iso,
      order: $("#upOrder").value.trim(), spend: $("#upSpend").value.trim(),
      photos: pending.map(function (u, i) { return [u, name + " photo " + (i + 1)]; }),
      text: $("#upText").value.trim()
    };
    mine.unshift(review);
    var saved = saveMine(mine);
    state.region = "All"; state.q = ""; state.sort = "latest"; $("#search").value = ""; $("#sortBy").value = "latest";
    renderChips(); renderAll();
    bootstrap.Modal.getInstance($("#uploadModal")).hide();
    form.reset(); form.classList.remove("was-validated"); pending = []; $("#previews").innerHTML = "";
    $("#upScoreOut").innerHTML = "8.5<small>/10</small>";
    toast(saved ? "Review published: " + name : "Review published for this visit. The photos were too large to keep after you close the page.");
    setTimeout(function () { $("#reviews").scrollIntoView({ behavior: "smooth" }); }, 350);
  });

  // ---------- boot ----------
  renderChips();
  renderAll();
})();
