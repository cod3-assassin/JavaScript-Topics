const socials = ["twitter", "linkden", "facebook", "instagram"];

// console.log(socials.__proto__);

socials.forEach(function (item) {
  console.log(item);
});
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

function logSocials(socials) {
  console.log(socials);
}

socials.forEach(logSocials);

const socialObj = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Linkden", url: "https://linkden.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObj.forEach((item) => console.log(item.name));
socialObj.forEach((item) => console.log(item.url));
