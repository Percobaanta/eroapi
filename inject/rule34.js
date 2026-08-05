const rtSource = window.location.href;

const rtAllowTags = [
  "ahegao",
  "anal",
  "bdsm",
  "big ass",
  "big boobs",
  "big breasts",
  "big penis",
  "blowjob",
  "boobjob",
  "censored",
  "creampie",
  "cum",
  "facial",
  "femdom",
  "footjob",
  "gangbang",
  "glasses",
  "handjob",
  "incest",
  "lactation",
  "lingerie",
  "loli",
  "mastrubation",
  "milf",
  "mind break",
  "mind control",
  "ntr",
  "orgasm",
  "orgy",
  "pov",
  "pregnant",
  "public",
  "pussy",
  "rape",
  "scat",
  "school girl",
  "squirting",
  "swimsuit",
  "teacher",
  "tentacles",
  "tsundere",
  "ugly bastard",
  "uncensored",
  "urination",
  "vanilla",
  "virgin",
  "watersports",
  "yuri",
];

const rtTitle1 = document.querySelectorAll(".tag-type-copyright a");
const rtTitle2 = document.querySelectorAll(".tag-type-character a");
const rtTags = document.querySelectorAll(".tag-type-general a");
const rtCreator = document.querySelectorAll(".tag-type-artist a");

const rtImage = document.getElementById("gelcomVideoPlayer");
const rtOpenImage = rtImage.getAttribute("poster");

const rtArrayTitle1 = Array.from(rtTitle1).map((tag) => tag.textContent.trim());
const rtArrayTitle2 = Array.from(rtTitle2).map((tag) => tag.textContent.trim());
const rtArrayTags = Array.from(rtTags).map((tag) => tag.textContent.trim());
const rtArrayCreator = Array.from(rtCreator).map((e) => e.textContent.trim());

const rtFilteredTags = rtArrayTags.filter((tag) => rtAllowTags.includes(tag));

if (rtOpenImage) {
  window.open(rtOpenImage, "_blank");
}

if (rtImage) {
  console.log(rtImage.src);
}

console.log(`
    {
        "id"       : "${Date.now()}",
        "xtype"    : "animated",
        "xsource"  : "${rtSource}",
        "xcover"   : "",
        "xtitle"   : "${rtArrayTitle1[1]} - ${rtArrayTitle2[1]}",
        "xdesc"    : "",
        "xcreator" : "[${rtArrayCreator[1]}]",
        "xtags"    : ${JSON.stringify(rtFilteredTags)},
    },
`);
