import axios from "axios";

const baseURL = "https://www.hatchways.io/api/assessment/students"
// console.log(mainURL);
export default axios.create({ baseURL });

// function fetchData(){
//     fetch("https://www.hatchways.io/api/assessment/students");
// }

// fetchData();