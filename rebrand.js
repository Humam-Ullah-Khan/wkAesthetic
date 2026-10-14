/* Wk Aesthetic demo rebrand - swaps Klinik template branding at runtime
   so client-rendered Framer pages also show Wk Aesthetic. */
(function () {
  "use strict";

  var script = document.currentScript;
  var BASE = script && script.src ? new URL(".", script.src) : new URL(".", location.href);

  var LOGO_SRC = new URL("assets/logo.png", BASE).href;
  var FOUNDER_IMG = new URL("assets/dr-wajiha-kamran.png", BASE).href;
  var FOUNDER_IMG_ID = "SX2dEyXtTrgdvv0nTPeyWkLhY";
  var INSTAGRAM_URL = "https://www.instagram.com/wajihakamran19";
  var PHONE_DIGITS = { "14158293742": "923322994380" };
  var WA_ICON_ID = "3954794888";
  var WA_ICON_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";

  function swapWaIcon(use) {
    var svg = use.ownerSVGElement;
    if (!svg || svg.getAttribute("data-wk-wa-icon")) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "var(--34440n, currentColor)");
    path.setAttribute("d", WA_ICON_PATH);
    svg.appendChild(path);
    svg.setAttribute("data-wk-wa-icon", "1");
  }
  var KLINIK_LOGO_ID = "JswTjukBm0GEEmbddTNi9yk2kM";
  var MAPS_QUERY = "A-10 Row D, 16-A Society, Gulshan-e-Kaneez Fatima, Karachi, 75400, Pakistan";
  var MAPS_LINK = "https://maps.app.goo.gl/zLm3vM2KZByoNt1A7";
  var MAPS_EMBED = "https://maps.google.com/maps?q=" + encodeURIComponent(MAPS_QUERY) + "&z=15&output=embed";

  var THEME_TOKENS =
    "--token-36d3bafe-bf2d-4a51-a2b4-d61993a82bef:#6D28D9;" +
    "--token-711cc7a2-40a6-4fe6-9e30-aee735db5a7e:#5B21B6;" +
    "--token-1d870efe-5eb5-46a5-97a5-e2b5d9e70027:#EDE9FE;" +
    "--token-ada27b37-e9ad-41a8-a9fd-e11dea4cb359:#DDD6FE;" +
    "--token-94ed9eaf-64d6-4b42-9a10-0ca76f79fbaf:#4C1D95;" +
    "--token-279c0d5f-0acc-45c4-9681-db3b77af7e02:#E9D5FF;" +
    "--token-82299fab-18de-4064-a874-c681c75093a3:#F5F3FF";
  var PRIMARY_RGB = "rgb(76, 29, 149)";
  var ACCENT_RGB = "rgb(109, 40, 217)";
  var PRIMARY_GLOW = "0 6px 24px rgba(109, 40, 217, 0.35)";

  var PAIRS = [
    [
      "Aesthetic clinic website template for medical spas, skincare clinics, and cosmetic treatment providers. Ideal for showcasing treatments, pricing, consultations, and client results.",
      "Wk Aesthetic is an aesthetic and physician-led clinic by dermatologist Dr. Wajiha Kamran in Karachi. Explore treatments, pricing, consultations, and client results."
    ],
    ["Klinik - Aesthetic Clinic Website Template", "Wk Aesthetic | Aesthetic Clinic by Dr. Wajiha Kamran"],
    ["contact@klinik-aesthetics.com", "wkaesthetic@gmail.com"],
    ["klinik-aesthetics.com", "wkaesthetic@gmail.com"],
    ["+1 (415) 829-3742", "+92 332 2994380"],
    ["+14158293742", "+923322994380"],
    ["2148 Fillmore Street, San Francisco", "A-10 Row D, 16-A Society, Gulshan-e-Kaneez Fatima, Karachi 75400"],
    ["Dr. Nicole Anderson", "Dr. Wajiha Kamran"],
    ["Founder & Lead Practitioner", "Aesthetic & Physician's"],
    ["beauty clinic founder", "Dr. Wajiha Kamran"],
    ["Klinik", "Wk Aesthetic"],
    ["@klink.official", "@wk aesthetic"],
    ["klink.official", "@wk aesthetic"],
    ["® – Medical Aesthetic Clinic Website Template", ""],
    [" - Medical Aesthetic Clinic Website Template", ""],
    [" Medical Aesthetic Clinic Website Template", ""]
  ];

  var HOME_TITLE = "Wk Aesthetic | Aesthetic Clinic by Dr. Wajiha Kamran";
  var PAGE_TITLES = {
    "": "Home",
    "/": "Home",
    "/index": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/treatments": "Treatments",
    "/treatments/lip-filler": "Lip Filler",
    "/treatments/cheek-filler": "Cheek Filler",
    "/treatments/forehead-line-treatment": "Forehead Line Treatment",
    "/treatments/frown-line-treatment": "Frown Line Treatment",
    "/legal/privacy-policy": "Privacy Policy"
  };

  function desiredTitle() {
    var path = location.pathname.replace(/\.html$/, "").replace(/\/+$/, "");
    if (path === "") path = "/";
    var label = PAGE_TITLES[path];
    if (!label) return null;
    return label === "Home" ? HOME_TITLE : label + " - Wk Aesthetic";
  }

  var TEXT_TEST = /klinik|klink|829-3742|4158293742|Fillmore|Nicole Anderson|Lead Practitioner|beauty clinic founder|\$\d/i;
  var SIGNATURE_ID = "qGPuxhMguNv4jn5f35KJ5Yw6B08";
  var ATTRS = ["href", "src", "alt", "title", "aria-label", "content", "style", "fill", "stroke"];
  var ATTR_TEST = /klinik|google\.com\/maps|framerusercontent\.com\/images\/Jsw/i;

  function fix(value) {
    if (typeof value !== "string" || !TEXT_TEST.test(value)) return value;
    var out = value;
    for (var i = 0; i < PAIRS.length; i++) {
      out = out.split(PAIRS[i][0]).join(PAIRS[i][1]);
    }
    return out.replace(/\$\s?(\d[\d,]*(?:\.\d+)?)/g, function (match, amount) {
      var n = parseFloat(amount.replace(/,/g, ""));
      if (!isFinite(n)) return match;
      var pkr = Math.round((n * 280) / 1000) * 1000;
      return "PKR " + pkr.toLocaleString("en-US");
    });
  }

  var COLOR_PAIRS = [
    ["rgb(82, 39, 20)", "rgb(76, 29, 149)"],
    ["rgb(136, 72, 43)", "rgb(109, 40, 217)"],
    ["rgb(136, 71, 43)", "rgb(109, 40, 217)"],
    ["rgb(120, 64, 38)", "rgb(91, 33, 182)"],
    ["rgb(245, 224, 214)", "rgb(237, 233, 254)"],
    ["rgb(240, 208, 193)", "rgb(221, 214, 254)"],
    ["rgb(232, 218, 213)", "rgb(233, 213, 255)"],
    ["rgb(249, 240, 236)", "rgb(245, 243, 255)"],
    ["rgb(0, 153, 255)", "rgb(109, 40, 217)"],
    ["#522714", "#4C1D95"],
    ["#88482b", "#6D28D9"],
    ["#784026", "#5B21B6"],
    ["#f5e0d6", "#EDE9FE"],
    ["#f0d0c1", "#DDD6FE"],
    ["#e8dad5", "#E9D5FF"],
    ["#f9f0ec", "#F5F3FF"]
  ];

  function colorSwap(value) {
    for (var i = 0; i < COLOR_PAIRS.length; i++) {
      value = value.split(COLOR_PAIRS[i][0]).join(COLOR_PAIRS[i][1]);
    }
    return value;
  }

  function hideSignature(img) {
    var src = img.getAttribute && img.getAttribute("src");
    if (!src || src.indexOf(SIGNATURE_ID) === -1) return;
    var holder = img.closest ? img.closest('[data-framer-name="Signature"]') : null;
    var target = holder || img;
    if (target.style && target.style.display !== "none") target.style.display = "none";
  }

  function isKlinikLogo(value) {
    return value.indexOf(KLINIK_LOGO_ID) !== -1;
  }

  function processAttributes(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var name = ATTRS[i];
      if (!el.hasAttribute(name)) continue;
      var value = el.getAttribute(name);
      if (!value) continue;

      if (name === "style" || name === "fill" || name === "stroke") {
        var swapped = colorSwap(value);
        if (swapped !== value) el.setAttribute(name, swapped);
        continue;
      }

      if (name === "src" && el.tagName === "IMG" && isKlinikLogo(value)) {
        if (value !== LOGO_SRC) el.setAttribute("src", LOGO_SRC);
        if (el.getAttribute("alt") !== "Wk Aesthetic logo") el.setAttribute("alt", "Wk Aesthetic logo");
        continue;
      }
      if (name === "src" && el.tagName === "IFRAME" && value.indexOf("maps.google.com") !== -1) {
        if (value.indexOf("Framer%20B.V") !== -1 && value !== MAPS_EMBED) el.setAttribute("src", MAPS_EMBED);
        continue;
      }
      if (name === "href" && (value.indexOf("tel:") === 0 || value.indexOf("wa.me/") !== -1)) {
        var digits = value.indexOf("tel:") === 0
          ? value.slice(4).replace(/\D/g, "")
          : (value.split("wa.me/")[1] || "").replace(/\D/g, "");
        if (PHONE_DIGITS[digits]) digits = PHONE_DIGITS[digits];
        if (digits && value !== "https://wa.me/" + digits) el.setAttribute("href", "https://wa.me/" + digits);
        continue;
      }
      if (name === "href" && value.indexOf("instagram.com") !== -1) {
        if (value !== INSTAGRAM_URL) el.setAttribute("href", INSTAGRAM_URL);
        continue;
      }
      if (name === "href" && (value.indexOf("google.com/maps") !== -1 || value.indexOf("maps.app.goo.gl") !== -1)) {
        if (value !== MAPS_LINK) el.setAttribute("href", MAPS_LINK);
        continue;
      }
      if (!ATTR_TEST.test(value)) continue;

      var next = fix(value);
      if (next !== value) el.setAttribute(name, next);
    }
  }

  function enforceLogoBox(el) {
    if (!el.style) return;
    if (el.style.width !== "48px") el.style.width = "48px";
    if (el.style.height !== "48px") el.style.height = "48px";
  }

  function swapFounderImage(img) {
    var src = img.getAttribute("src") || "";
    var srcset = img.getAttribute("srcset") || "";
    if (src.indexOf(FOUNDER_IMG_ID) === -1 && srcset.indexOf(FOUNDER_IMG_ID) === -1) return;
    if (src !== FOUNDER_IMG) img.setAttribute("src", FOUNDER_IMG);
    if (srcset) img.removeAttribute("srcset");
  }

  function processNode(node) {
    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var next = fix(text);
      if (next !== text) node.nodeValue = next;
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName;
    if (tag === "SCRIPT") return;
    if (tag === "STYLE") {
      var css = colorSwap(node.textContent || "");
      if (css !== node.textContent) node.textContent = css;
      return;
    }
    processAttributes(node);
    if (node.getAttribute && node.getAttribute("data-framer-name") === "Logo") enforceLogoBox(node);
    if (node.localName === "use" && (node.getAttribute("href") || "").indexOf(WA_ICON_ID) !== -1) swapWaIcon(node);
    if (tag === "IMG") {
      hideSignature(node);
      swapFounderImage(node);
    }
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) processNode(children[i]);
  }

  var OPENING_ROWS = [
    ["Monday - Thursday", "3:00pm - 9:00pm"],
    ["Friday", "Closed"],
    ["Saturday - Sunday", "3:00pm - 9:00pm"]
  ];

  function fixOpeningHours() {
    if (!document.body) return;
    var sections = document.body.querySelectorAll('[data-framer-name="Opening hours"]');
    for (var s = 0; s < sections.length; s++) {
      var h4s = sections[s].querySelectorAll("h4");
      for (var r = 0; r < OPENING_ROWS.length; r++) {
        var day = h4s[r * 2];
        var time = h4s[r * 2 + 1];
        if (!day || !time) continue;
        if (day.textContent !== OPENING_ROWS[r][0]) day.textContent = OPENING_ROWS[r][0];
        if (time.textContent !== OPENING_ROWS[r][1]) time.textContent = OPENING_ROWS[r][1];
      }
    }
  }

  function run() {
    var dt = desiredTitle();
    if (dt) {
      if (document.title !== dt) document.title = dt;
    } else if (document.title) {
      document.title = fix(document.title);
    }
    if (document.head) processNode(document.head);
    if (document.body) processNode(document.body);
    fixOpeningHours();
  }

  var scheduled = false;
  var raf = typeof window.requestAnimationFrame === "function"
    ? window.requestAnimationFrame.bind(window)
    : function (cb) { setTimeout(cb, 16); };

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    raf(function () {
      scheduled = false;
      try { run(); } catch (e) { /* keep page usable */ }
      try { applyGlow(); } catch (e) { /* keep page usable */ }
    });
  }

  function hideFramerChrome() {
    try { localStorage.removeItem("__framer_force_showing_editorbar_since"); } catch (e) { /* ignore */ }
    if (!document.head || document.getElementById("wk-hide-framer-chrome")) return;
    var style = document.createElement("style");
    style.id = "wk-hide-framer-chrome";
    style.textContent =
      "#__framer-badge-container, .__framer-badge, #__framer_editorbar, .__framer_editorbar, " +
      ".framer-editorbar-label, [class*='framer-editorbar'], [id*='framer-editorbar'] { display: none !important; } " +
      "body { " + THEME_TOKENS + " }";
    document.head.appendChild(style);
  }

  function applyGlow() {
    if (!document.body) return;
    var els = document.body.querySelectorAll("*");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.__wkGlow) continue;
      var cs = getComputedStyle(el);
      if ((cs.backgroundColor === PRIMARY_RGB || cs.backgroundColor === ACCENT_RGB) &&
          cs.borderRadius !== "0px" &&
          el.offsetHeight > 0 && el.offsetHeight <= 72) {
        el.style.boxShadow = PRIMARY_GLOW;
        el.__wkGlow = true;
      }
    }
  }

  function refresh() {
    try { run(); } catch (e) { /* keep page usable */ }
    try { applyGlow(); } catch (e) { /* keep page usable */ }
  }

  function start() {
    hideFramerChrome();
    refresh();
    if (!document.documentElement) return;
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (record.type === "attributes" || record.type === "characterData") {
          schedule();
          return;
        }
        for (var j = 0; j < record.addedNodes.length; j++) {
          var node = record.addedNodes[j];
          if (node.nodeType === 3 || (node.nodeType === 1 && node.tagName !== "SCRIPT")) {
            schedule();
            return;
          }
        }
      }
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRS
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
  window.addEventListener("load", function () {
    refresh();
    setTimeout(refresh, 1000);
    setTimeout(refresh, 3000);
  });
})();
