const source = window.location.href;

const title =
  document.querySelector("h1.watch-title")?.textContent.trim() || "";

const desc = document.querySelector("p.watch-desc")?.textContent.trim() || "";

const brand =
  document
    .querySelector("span.winfo-v span.accent-text")
    ?.textContent.trim()
    .toLowerCase() || "";

const released = document
  .querySelectorAll(".winfo-cell")[6]
  .querySelector(".winfo-v")
  .textContent.trim();

const blockTags = ["exclusive", "subbed"];

const replaceTags = {
  "big breasts": "big boobs",
  "large breasts": "big boobs",
  "gigantic breasts": "big boobs",
  breastsjob: "titsjob",
};

const tags = document.querySelectorAll(".tag-row a.tag-chip");

const filterArray = [
  ...new Set(
    Array.from(tags)
      .map((tag) => {
        const tagText = tag.textContent.trim().toLowerCase();
        return replaceTags[tagText] || tagText;
      })
      .filter((tagText) => !blockTags.includes(tagText))
  ),
];

console.log(`
    {
        "id"        : "${Date.now()}",
        "xtype"     : "hentai",
        "xsource"   : "${source}",
        "xcover"    : "${Date.now()}.webp",
        "xtitle"    : "${title}",
        "xdesc"     : "${desc}",
        "xcreator"  : ["${brand}"],
        "xtags"     : [${filterArray.map((doc) => `"${doc}"`)}],
        "xreleased" : "${released}"
    },
`);
