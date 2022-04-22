export function getCurrency();

const api_url = "https://v6.exchangerate-api.com/v6/5beb8f7b76cb87ab64732939/latest/USD"
async function getCurrency() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { conversion_rates } = data;
}

getCurrency();

