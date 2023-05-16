import type { BeerCalculatorOptions } from "../Models/BeerCalculatorOptions"

export const useBeerCalculator = () => {
    // state encapsulated and managed by the composable
    // a composable can update its managed state over time.
    const updateProfitability = (options: BeerCalculatorOptions): number => {
        console.log(options);
        return (options.alcohol * options.capacity) / options.price; 
    }

    return { updateProfitability };
  }