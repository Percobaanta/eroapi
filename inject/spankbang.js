const spSource = window.location.href;

const stVideoSource = document.querySelector(
  "#video_container video.vjs-tech source"
);

if (stVideoSource) {
  console.log(stVideoSource.src);
}

const spTitle =
  document
    .querySelector(".left h1.text-primary.text-body-lg")
    ?.textContent.trim() || "";

const spTags = document.querySelectorAll(
  ".left .relative div.scrollbar-none a"
);

const spArray = Array.from(spTags).map((tag) => tag.textContent.trim());

const spBlockTags = ["Stripchat", "Solo", "Cb"];

const filteredSpArray = spArray.filter(
  (tagText) => !spBlockTags.includes(tagText)
);

console.log(`
    {
        "id"        : "${Date.now()}",
        "xtype"     : "porn",
        "xsource"   : "${spSource}",
        "xcover"    : "${Date.now()}.webp",
        "xtitle"    : "${spTitle}",
        "xdesc"     : "",
        "xcreator"  : ["Unknow"],
        "xtags"     : [${filteredSpArray.map((doc) => `"${doc}"`)}]
    },
`);
