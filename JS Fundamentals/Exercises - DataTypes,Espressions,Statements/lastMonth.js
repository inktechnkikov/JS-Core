function lastmonth([day,month,year]) {
    [day,month,year] = [day,month,year].map(Number);
    let date = new Date(year,month-1,0);
    console.log(date.getDate());
}
lastmonth(['13','12','2004']);