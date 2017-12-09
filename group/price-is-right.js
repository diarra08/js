'use strict'

/*
 * Price is right
 * 1 can of soup is 650 FCFA
 * 3 can of soup is 1000 FCFA
 * 1 can of soup contains 500 ml
 *
 * Create a function `getCostCount` that takes a number of cans
 * and return the cost (and applying the 3 for 1000 FCFA discount)
 *
 * Create a function `getCostMl` that takes a quantity in milliliters
 * and return the cost (and applying the 3 for 1000 FCFA discount)
 */
/*
Le prix est juste
1 boîte de soupe à 650 FCFA
3 boîtes de soupe à 1000 FCFA
1 boîte de soupe contient 500 ml
*
Créer une fonction `getCostCount` qui prend un certain nombre de boîtes
et retourner le coût (et appliquer la remise de 3 pour 1000 FCFA)
*
Créer une fonction `getCostMl` qui prend une quantité en millilitres
et retourner le coût (et appliquer la remise de 3 pour 1000 FCFA)
*/

const getCostCount = numberOfCans => {
    let calcul
  
    if (numberOfCans === 3) {
      calcul = 1500
    } else {
      calcul = numberOfCans * 650
    }
  
    return calcul
  }
  
  console.log(getCostCount(6))
  console.log(getCostCount(10))
  
  const getCostMl = quantity => {
    let result
  
    if (quantity === 1500) {
      result = 1500
    } else if (quantity != 1500) {
      const division = quantity / 500
  
      result = division * 650
    }
  
    return result
  }


// You must write your own tests
throw Error('No tests !')
