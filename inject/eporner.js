const epSource = window.location.href;

const epTitle =
  document.querySelector("#video-info h1")?.textContent.trim() || "";

const epTags = document.querySelectorAll("#video-info-tags ul li.vit-category");

const epArray = Array.from(epTags).map((tag) => tag.textContent.trim());

const spBlockTags = ["Stripchat", "Solo", "Cb"];

const filterEpArray = epArray.filter(
  (tagText) => !spBlockTags.includes(tagText)
);

console.log(`
    {
        "id"        : "${Date.now()}",
        "xtype"     : "porn",
        "xsource"   : "${epSource}",
        "xcover"    : "${Date.now()}.webp",
        "xtitle"    : "${epTitle}",
        "xdesc"     : "",
        "xcreator"  : ["Unknow"],
        "xtags"     : [${filterEpArray.map((doc) => `"${doc}"`)}]
    },
`);
