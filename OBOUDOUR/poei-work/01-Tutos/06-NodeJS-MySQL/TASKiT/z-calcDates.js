

today = new Date()
past = new Date(2010,05,01) // remember this is equivalent to 06 01 2010
//dates in js are counted from 0, so 05 is june

function calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    var message = date2.toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return message
    }


a = calcDate(today,past)
console.log(a) // returns Tue Jun 01 2010 was 1143 days 36 months 3 years ago