
export const isAdult = (age) => (age >= 18) ? "True" : "False";

export const canDrink = (age) => (age >= 21) ? "Can Drink":"Cannot Drink";

export default (age) => (age >= 65) ? "Is a Senior":"Is not a Senior";
