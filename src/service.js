export default class getCurrency {
  static async getCurrency(firstCurrency, secondCurrency, inputAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/5beb8f7b76cb87ab64732939/latest/${firstCurrency}/${secondCurrency}/${inputAmount}`)

      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}

