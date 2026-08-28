// --------------------------------------------------
//  GET DATA JSON
// --------------------------------------------------

const source = window.location.href;

const urlCover = document.querySelector("img.img-loading");

const title = urlCover?.getAttribute("title");

const cover = urlCover?.getAttribute("src");

if (cover) {
  window.open(cover, "_blank");
}

const desc =
  document
    .querySelector(".dsct")
    ?.textContent.replace(/[\r\n]+/g, " ")
    .replace(/[‘”]/g, "")
    .replace(/[’”]/g, "")
    .replace(/\s+/g, " ")
    .trim() || "";

const Author =
  document.querySelector(".author-content")?.textContent.trim() || "";

const released =
  document
    .querySelector(".post-status .wleft .summary-content")
    ?.textContent.trim() || "";

const tags = [...document.querySelectorAll(".genres-content a")].map((a) =>
  a.textContent.trim()
);

console.log(`
    {
        "id"        : "${Date.now()}",
        "xtype"     : "manhwa",
        "xsource"   : "${source}",
        "xcover"    : "${Date.now()}.webp",
        "xchapter"  : [],
        "xtitle"    : "${title}",
        "xdesc"     : "${desc}",
        "xcreator"  : ["${Author}"],
        "xtags"     : [${tags.map((doc) => `"${doc}"`)}],
        "xreleased" : ["${released}"]
    },
`);

// --------------------------------------------------
//  GET DATA IMMAGE JSON
// --------------------------------------------------

const ch = document.querySelector("h1.tcenter")?.textContent.trim() || "";

const image = [
  ...document.querySelectorAll(".manga-body .read-manga .read-content img"),
].map((img) => img.src);

console.log(`
    {
        "ch"        : "ch",
        "ximages"   : [${image.map((doc) => `"${doc}"`)}],
    },
`);
