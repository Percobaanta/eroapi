// const ctTags = document.querySelectorAll(".reader-images .page-container img");

// const allImages = Array.from(ctTags).map((img) => img.src);

// console.log(allImages);

const ctTags = document.querySelectorAll(".reader-images .page-container img");

const allImages = Array.from(ctTags).map((img, index) => {
  // file:///C:/... → C:\...
  const path = decodeURIComponent(img.src.replace("file:///", "")).replace(
    /\//g,
    "\\"
  );

  // 001.webp, 002.webp, dst
  const number = String(index + 1).padStart(3, "0");

  return `copy "${path}" "Chapter_\\${number}.webp"`;
});

// Gabungkan menjadi perintah CMD
const cmd = ["mkdir Chapter_", ...allImages].join("\n");

console.log(cmd);
