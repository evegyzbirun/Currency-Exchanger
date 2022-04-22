import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { service } from './service';


//select country currency
const select = document.querySelectorAll("select");
//input amount 
const input = document.querySelectorAll("input");
const api_utl = "https://v6.exchangerate-api.com/v6/5beb8f7b76cb87ab64732939/latest/USD";
let html = '';

async function currency() {
  const getAPI = await fetch(api_utl);
  const data = await getAPI.json();
  console.log(data.getAPI);

};
currency();
console.log(service);
