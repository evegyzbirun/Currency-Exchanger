import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getCurrency } from './service';


function inputAndConvert() {
  $('#inputYourCurrency').number();
  $('.errors').text('');
  $('.rate').text('')
};

function displayAfterCovert() {
  $('#outputYourCurrency').val();
};

function displayData(data)

