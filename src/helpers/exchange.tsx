import {Rates} from '../types/Types'

export const exchange = (currency: string, price: number, rates: Rates) => {
  

  let priceInExchange: string

  switch (currency) {
    case '$':
      priceInExchange = price.toFixed(2)
      break
    case 'Є':
      priceInExchange = (price * rates.EUR).toFixed(2)
      break
    case '£':
      priceInExchange = (price * rates.GBP).toFixed(2)
      break
    case '¥':
      priceInExchange = (price * rates.JPY).toFixed(2)
      break
    case '₽':
      priceInExchange = (price * rates.RUB).toFixed(2)
      break
    case 'Zł':
      priceInExchange = (price * rates.PLN).toFixed(2)
      break
    default:
      priceInExchange = price.toFixed(2)
  }

  return priceInExchange
}