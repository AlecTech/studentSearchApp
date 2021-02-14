import axios from "axios";

const mainURL = "https://www.hatchways.io/api/assessment/students"

export default axios.create({ mainURL });

// function fetchData(){
//     fetch("https://www.hatchways.io/api/assessment/students");
// }

// fetchData();