// let closebtn = document.getElementById("closebtn");

// let openbtn = document.getElementById("openbtn");

// let sidebar = document.getElementById('sidebar');

// function opensidebar() {
//     sidebar.style.transition="all 1s"
//     sidebar.style.display="flex";
// }

// function closesidebar() {
//     sidebar.style.transition = 'all 1s';
//     sidebar.style.display="none";
// }
// openbtn.addEventListener('click',opensidebar);

// closebtn.addEventListener('click',closesidebar);



$(document).ready(function(){
    
$('#openbtn').click(function () {
  $('#sidebar').show();
});

$('#closebtn').click(function () {
  $('#sidebar').fadeOut(1000);
});
});