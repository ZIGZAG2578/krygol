document.querySelector(".wq").onclick=function(){
let serdg=document.querySelector(".gra").value;
if (serdg=="ютуб" || serdg=="you tube") {
	document.location.href="https://www.youtube.com/";
}else if (serdg=="орбибол" || serdg=="orbibol" ) {
	document.location.href="https://orbeeball.ru/?yclid=3342310371409824444";
}else if (serdg=="стим" || serdg=="steam") {
	document.location.href="https://store.steampowered.com/";
}else if (serdg=="мир кубиков" || serdg=="lego") {
	document.location.href="https://mir-kubikov.ru/?utm_campaign=hand-search-brand-mirkubikov-regions-45708478&utm_medium=cpc&utm_source=yandex&utm_term=мир%20кубиков&utm_content=4437754303_0_Нижний%20Новгород_47_desktop___25534841231__v3%7C%7C10179258903%7C%7C25534841231%7C%7Cмир%20кубиков%7C%7C1%7C%7Cpremium%7C%7Cnone%7C%7Csearch%7C%7Cno%7C%7C0&k50id=0100000025534841231_&yclid=3409793054544780884";
}else if (serdg=="дополнить") {
	document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeZMihvnxYXk2JZjnIMvnmlrd7IR2HrrNZ-WHXNtSf9UXFXUw/viewform?usp=sf_link";
}else if (serdg=="математический тест") {
	document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSf36k2BFHEpG66rGwxs1UvpQNhb0Y3h1QnAe8bpxYm2Mp6wig/viewform?usp=sf_link";
}else if (serdg=="тест по окружающему миру") {
	document.location.href="https://docs.google.com/forms/d/e/1FAIpQLScFzLDs_AaOMaOkFC34b9LX0RrIQYOj72BaVqJdKDvPcx1zKg/viewform?usp=sf_link";
}else if (serdg=="тест по русскому языку") {
	document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeI6DdC2SwgsxtwOY2ZEHmuUuU2LvggY4K59SG2J-diLpNW-A/viewform?usp=sf_link";
}else if (serdg=="тест по программированию") {
	document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSc4IEb6Wg7q_x4thCYRMqBcn7nYoi9AF7DSRYRhRIQocbgJAg/viewform?usp=sf_link";
}else if (serdg=="тест про акул") { 
	document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfNmEp-djPUOj5pfLi0GhdgY4j4AqjoAF0iPEi82QMFwLrQfw/viewform?usp=sf_link";



}else{
	
	alert("нечего ненайдено 😞");

}

};
