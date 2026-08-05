// DOWNLOAD - https://cosplaytele.com
// jakankan step1-3
// node crop image
// cover upload ke imgpost
// upload zip mediafire

// step 1  get library & Download bulk image.zip
(async () => {
  if (typeof JSZip === "undefined") {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  const zip = new JSZip();

  const links = document.querySelectorAll("#gallery-1 .gallery-item a");

  for (let i = 0; i < links.length; i++) {
    try {
      const response = await fetch(links[i].href);
      const blob = await response.blob();

      zip.file(`${i + 1}.jpg`, blob);

      console.log(`Downloaded ${i + 1}/${links.length}`);
    } catch (err) {
      console.error(err);
    }
  }

  const content = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(content);
  a.download = "gallery.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(a.href);
})();

// step 2 - get data json
const ctSource = window.location.href;
const ctId = Date.now();
const ctTitle =
  document.querySelector(".entry-title")?.textContent.trim() || "";
const ctCreator = document.querySelectorAll("blockquote p a");
const ctTags = document.querySelectorAll(".entry-category a");
const ctImages = document.querySelectorAll("#gallery-1 .gallery-item a");

const ctArrayCreator = Array.from(ctCreator).map((e) => e.textContent.trim());
const ctArrayTags = Array.from(ctTags).map((tag) => tag.textContent.trim());
// const ctArrayPreview = Array.from(
//   { length: 5 },
//   (_, i) => `${ctId} (${i + 2}).webp`
// );

const ctDesc = Number(ctTitle.match(/\d+/)?.[0] ?? 0);

console.log(`
    {
        "id"          : ${ctId},
        "xtype"       : "images",
        "xsource"     : "${ctSource}",
        "xcover"      : "xxx.webp",
        "xbackground" : "xxx.webp",
        "xtitle"      : "${ctTitle}",
        "xdesc"       : ${ctImages.length},
        "xcreator"    : ${JSON.stringify(ctArrayCreator)},
        "xtags"       : ${JSON.stringify(ctArrayTags)},
        "xdownload"   : ""
    },
`);

//grid image
const links = [
  ...document.querySelectorAll("#gallery-1 .gallery-item a"),
].slice(0, 16);

const gallery = document.querySelector("#gallery-1");

// gallery.style.width = "600px";
gallery.style.display = "grid";
gallery.style.gridTemplateColumns = "repeat(4, 1fr)";
gallery.style.gap = "0";

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.style.padding = "0";
});

document.querySelectorAll(".attachment-full").forEach((item) => {
  item.style.borderRadius = "0";
});

document.querySelectorAll("#gallery-1 .gallery-item").forEach((item) => {
  item.style.width = "100%";
  item.style.margin = "0";
});

document.querySelectorAll("#gallery-1 .gallery-item img").forEach((img) => {
  img.style.width = "100%";
  img.style.height = "250px";
  img.style.objectFit = "cover";
  img.style.display = "block";
});
