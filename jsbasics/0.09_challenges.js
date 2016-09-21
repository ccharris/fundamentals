/*BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/
/*-----------------------------------------------------------
SILVER:
	Write a function that will help me easily 
	calculate monthly bills.*/


/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/
//Bronze

function concatString(a, z){
	return a + z
}
console.log(concatString("this is half of a string ", "and this is the other half."));

//Silver
function monthlyBillCalc(electricBill, waterBill, cableBill, mortgagePayment){
	return electricBill + waterBill + cableBill + mortgagePayment
}
console.log(monthlyBillCalc(80, 150, 100, 500));

//Gold
function bulkBuyingCalc(quantity, pricePer, taxPercent){
	return quantity * pricePer + (quantity * pricePer * (taxPercent / 100))
}
console.log(bulkBuyingCalc(40, 1.37, 7))