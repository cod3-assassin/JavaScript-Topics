//Break

for (let i = 0; i <= 20; i++) {
  if (i == 16) {
    console.log("Breaking...");
    break;
  }
  console.log(i);
}

//Continue

for (let i = 0; i <= 20; i++) {
  if (i == 13) {
    console.log("Skipping 13...");
    continue;
  }
  console.log(i);
}
