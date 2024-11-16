function changeStyle(){
    document.getElementById('ch').innerHTML="Say Bismillah before starting";
}
//date showing
function ShowDate(){
    document.getElementById('d').innerHTML=Date();
}
//light on off 
function lightOn() {
    document.getElementById('light').src="images/pic_bulbon.gif";
}
function lightOff() {
    document.getElementById('light').src="images/pic_bulboff.gif";
}
//style change
function showStyle() {
    document.getElementById('dp').style.color="red";
}
//hide element
function hideEle() {
    document.getElementById('dh').style.display="none";
}
//show element
function showEle(){
    document.getElementById('ds').style.display="block";
}
//selector ex
function showSel(){
    document.getElementsByClassName('s')[3].innerHTML="here i am";
}
//tag ex
function showTag(){
    let data = document.getElementsByTagName('p');
    alert(data.length);
}
//console ex
function showCon(){
   console.log(5+6);
}
//statements
function showSt(){
    let x, y, z;
    x=7;
    y=5;
    z= x+y;
    document.getElementById('s').innerHTML = "The value of z is "+z+".";
 }
 //expression string
 function showStr(){
    document.getElementById('x');
    alert("Jhon"+" "+"Doe");
}
//JavaScript Objects
function showOb(){
    const person={
        fname:"jhon",
        lname: "doe",
        age:50
    };
    document.getElementById('o').innerHTML = person.fname+ " is "+ person.age + " years old";
    
}