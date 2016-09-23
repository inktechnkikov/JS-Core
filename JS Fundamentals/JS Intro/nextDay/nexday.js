function nextDay([year,mont,day]) {
   let date = new Date(year,mont-1,day);
    let oneDay = 24 * 60 * 60 * 1000;
    let today = new Date(date.getTime() + oneDay);
    let res = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(res);
}
nextDay(['2016','9','30']);
