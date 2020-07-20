datetoday = new Date();
timenow = datetoday.getTime();
datetoday.setTime(timenow);
thehour = datetoday.getHours();
if (thehour > 18) display="Malam";
else if (thehour > 14) display="Sore";
else if (thehour > 10) display="Siang"
else if (thehour > 5) display= "Pagi"
else if (timenow > 0) display="Malam"
var greeting = 
("<div style='width:800px'><font style='text-transform:uppercase; font-weight:bold; font-size:70px;'> Selamat "+display+" :)</font></div");
document.write(greeting);