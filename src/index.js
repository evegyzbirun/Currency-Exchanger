import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getCurrency } from './service';

//we need to take currency and its rate from API
//input amount of money we want to convert 
//pick the currency we need to concert in 
//find based of selected valua
//it will divide input on the current rate of the second currency
//get output in #output

function inputAndConvert() {
  $('#inputYourCurrency').number();
  $('.errors').text('');
  $('.rate').text('')
};

function displayAfterCovert() {
  $('#outputYourCurrency').val();
};

function getRates(response) {
  if (response) {
    const pickedCurrency = (response)
  }
}


function displayData()

