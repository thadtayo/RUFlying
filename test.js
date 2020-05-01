let date = 'Fri Apr 24 2020 21:16:35 GMT-0400';

let months = 
{
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
}

date = date.substring(4);

let month = date.substring(0, 3);
month = months[month];
date = date.substring(4);
let day = date.substring(0, 2);
date = date.substring(3);
let year = date.substring(0, 4);

let date_sql = year + '-' + month + '-' + day;
console.log(date_sql);
