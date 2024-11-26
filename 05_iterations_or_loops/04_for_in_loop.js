// ++++++++++ For In Loop ++++++++++
// First Program
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    }

// Second Program
// Extraction the Keys
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key);
}
// Second Program
// Extraction the Value
const programming2 = ["js", "rb", "py", "java", "cpp"]
for (const key in programming2) {
    console.log(programming2[key]);
}