import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


//select country currency
const select = document.querySelectorAll("select");
//input amount 
const input = document.querySelectorAll("input");
const api_utl = "https://v6.exchangerate-api.com/v6/5beb8f7b76cb87ab64732939/latest/USD";

async function currency() {
  let getAPI = await fetch(api_utl);
  console.log(getAPI);

}
currency();