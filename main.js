let userName = ["Elshod" , "Sanjar" , "Umid" , "Zubayr" , "Samir" , "Suhrob" , "Sherzod" , "Sunnatbek"];

console.log(userName);
let uzunligi = alert(`Arrayni uzunligi : ${userName.length}`)
let tekshirish = confirm("Siz arryni ichidan ma'lumot olib tashlamoqchimiz")
if(tekshirish == true){
    console.log(userName.pop());
    console.log(userName);
}else{
    console.log(userName);
}