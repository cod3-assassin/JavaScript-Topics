let d;

d = new Date();
console.log(d, typeof d);

d = d.toString();
console.log(d);

d = new Date(2024, 5, 2);
console.log(d);

d = new Date("2021-07-10T12:30:00");
console.log(d);

d = new Date("07/10/2021 12:30:00");
console.log(d);

d = new Date("2022-07-10 12:30:00");
console.log(d);

d = new Date("07-10-2023 12:30:00");
console.log(d);

d = Date.now();
console.log(d);

d = new Date("07-10-2022 12:30:00");
d.getTime();
console.log(d);

d.valueOf();
console.log(d);

d = new Date(1566545723854);
console.log(d);

d = Math.floor(Date.now() / 1000);
console.log(d);
