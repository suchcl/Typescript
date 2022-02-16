let hello:string = "hello frontend";
import {add,dt} from "./dataType";
const sum:number = add(3,4);
document.querySelectorAll(".app")[0].innerHTML = sum.toString()+ " " +dt;