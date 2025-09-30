const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else return false;
        }
        else return true;
    }  
    else return false;
};

console.log(leapYears(1600));
/* First, identify if the leap year is divisible by 4. Then determine whether it's 
divisible by 100 UNLESS it's also divisible by 400. If it IS, then go on to check whether it's
divisible by 100.
&& (year % 100 == 0 && year % 400 == 0) */
// Do not edit below this line
module.exports = leapYears;
