Difference between "==" and "==="?
-> in "==", whenever we try to compare between a string and number(eg:- 20 & '20'), JS converts '20' into number and then checks the equality.
-> But in "===", JS first check the type, if both are of same type or not, if both are of same type then it start to compare otherwise it simply returns false.