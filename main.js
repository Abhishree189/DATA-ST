var name_array=[];
function submit(){
    var name1=document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;
    var name3=document.getElementById("n3").value;
    var name4=document.getElementById("n4").value;
    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);
    console.log(name_array);
    document.getElementById("di_na").innerHTML=name_array;
document.getElementById("bs").style.display="none";
document.getElementById("bso").style.display="inline-block";
}
function sort(){
    name_array.sort();
    console.log(name_array);
    document.getElementById("di_na").innerHTML=name_array;
}