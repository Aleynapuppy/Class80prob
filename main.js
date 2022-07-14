student_array=[];
function submit(){
    var display_student_array=[];
    for(var g=1;g<=4;g++){
        var name_of_student=document.getElementById("name_of_the_student_"+g).value;
        console.log(name_of_student);
        student_array.push(name_of_student);
    }
    var length_student=student_array.length;
    console.log(length_student);
    for(var k=0;k<length_student;k++){
        display_student_array.push("<h4>Name-"+student_array[k]+"</h4>");
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_student_array_sort=[];
    var length_array=student_array.length;
    console.log(length_array);
    for(var k=0;k<length_array;k++){
        display_student_array_sort.push("<h4>Name-"+student_array[k]+"</h4>");
    }
    console.log(display_student_array_sort);
    var remove_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}