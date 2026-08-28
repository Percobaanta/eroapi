const source = window.location.href;

const cover = document.querySelector("img.relative.object-cover")?.src;

if (cover) {
  window.open(cover, "_blank");
}

const title =
  document.querySelector("h1.leading-tight")?.textContent.trim() || "";

const desc =
  document
    .querySelectorAll(".overflow-hidden span p")[1]
    ?.textContent.replace(/[\r\n]+/g, " ")
    .replace(/[’”]/g, "")
    .replace(/\s+/g, " ")
    .trim() || "";

const brand =
  document.querySelector("a strong.text-primary")?.textContent.trim() || "";

const released = document
  .querySelector("button.tooltip")
  ?.getAttribute("data-tip");

const tags = document.querySelectorAll(".flex-wrap a.badge");

const tagsArray = Array.from(tags).map((e) =>
  e.textContent.trim().toLowerCase()
);

console.log(`
    {
        "id"        : "${Date.now()}",
        "xtype"     : "hentai",
        "xsource"   : "${source}",
        "xcover"    : "${Date.now()}.webp",
        "xtitle"    : "${title}",
        "xdesc"     : "${desc}",
        "xcreator"  : ["${brand}"],
        "xtags"     : [${tagsArray.map((e) => `"${e}"`)}],
        "xreleased" : "${released}"
    },
`);
