          // First Program
// de-structuring concept in object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "muhammad",
}
// Show the output first method
console.log(course.courseInstructor);
// Show the output second method
const {courseInstructor} = course;
console.log(courseInstructor);
// Show the output third method
const {courseInstructor: instructor} = course;
console.log(instructor);

       // Second Program
// JSON API intro
/* {
    "name": "muhammad",
    "coursename": "js in hindi",
    "price": "free",
} */

/* [
    {}
    {}
    {}
] */