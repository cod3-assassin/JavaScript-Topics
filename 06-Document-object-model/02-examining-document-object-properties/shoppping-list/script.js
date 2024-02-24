let output;

output = document.all;
output = document.all[11];
output = document.all.length;

output = document.documentElement;

output = document.head;

output = document.body;

output = document.body.children;

output = document.doctype.domain;

output = document.URL;

output = document.characterSet;

output = document.contentType;

output = document.forms;

output = document.forms[0].id;

output = document.forms[0].method;

output = document.forms[0].action;

// document.forms[0].id = "new-id";

output = document.links;

output = document.images;

output = document.images[0];

output = document.images[0].src;

// document.forms.forEach((form) => console.log(form));

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
