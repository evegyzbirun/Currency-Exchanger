export default class getCurrency {
  static async getCurrency(firstCurrency, secondCurrency, inputAmount) {
    try {
      API_KEY = process.env.API_KEY
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${firstCurrency}/${secondCurrency}/${inputAmount}`)

      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}

