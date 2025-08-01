import { Library } from "@googlemaps/js-api-loader"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export const libs: Library[] = ['core', 'maps', 'places', 'marker']
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAmountForDisplay(
  amount: number, currency: string
): string {

  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style:'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  })

  const formatedAmount = numberFormat.format(amount)
  return formatedAmount === 'NaN' ? '' : formatedAmount
}