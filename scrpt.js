document.addEventListener("DOMContentLoaded", function () {

    //slider opieram na wzorze z zajęć

var buttonNext = document.querySelector(".right_slider");
var buttonPrev = document.querySelector(".left_slider");

var listAll = document.querySelectorAll(".slider_container li");
console.log(listAll);


    var imageIndex = 0;

    var topPicture = document.querySelector(".visible");


    function clickMe() {



        listAll[imageIndex].classList.remove("visible");

        imageIndex += 1;
        if (imageIndex >= listAll.length -1) {
            imageIndex = 0
        }


        listAll[imageIndex].classList.add("visible")



    }

    buttonNext.addEventListener("click", clickMe);

    function clickmeToo() {

        listAll[imageIndex].classList.remove("visible");

        imageIndex -= 1;

        if (imageIndex < 0) {
            imageIndex = listAll.length -1;
        }


        listAll[imageIndex].classList.add("visible");


    }
    buttonPrev.addEventListener("click", clickmeToo);



//menu


    var Index = 0;
    var button = document.querySelector(".dropBtn");
    var dropdown = document.querySelector(".dropdown-content");


    function myFunction() {
        dropdown.classList.toggle("show");
    }

    button.addEventListener("click", myFunction)

    function menu() {

            if (dropdown[Index].classList.contains('show')) {
                dropdown[Index].classList.remove('show');
            }
        }

    button.addEventListener("click", menu);




//chairboxes

   var color = document.querySelector(".color");
   var chairBox = document.querySelector('.chairBox1') ;

   function hideText() {

       var hover = this;
       var header = hover.color;
       header.style.display = "none"
   }

   chairBox.addEventListener("mouseover", hideText)






});