// ++++++++++ For Each Loop ++++++++++
// First Program
// For Each Loop in Function
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (val) {
    console.log(val);
    
})

// For Each Loop in Arrow Function
const coding2 = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (item) {
    console.log(item);
})
// For Each Loop in Arrow Function (Extract: item, index, arr)
const coding3 = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (item, index, arr) {
    console.log(item, index, arr);
})

// Second Program
const myCoding = [
{
    languageName: "javascript",
    languageFileName: "js"
},
{
    languageName: "java",
    languageFileName: "java"
},
{
    languageName: "python",
    languageFileName: "py"
},

]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )