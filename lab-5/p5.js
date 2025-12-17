const base = new URL("https://example.com/");

base.pathname = "students/details";
base.searchParams.append("id", 101);
base.searchParams.append("name", "vandan");

console.log("Final URL:");
console.log(base.href);
