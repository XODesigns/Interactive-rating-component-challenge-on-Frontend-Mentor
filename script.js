

const ratings = document.querySelectorAll(".rating")
const button = document.querySelector("#submit")
const ratingSect = document.querySelector(".ratings")
const thankYou = document.querySelector(".thank-you")



ratings.forEach(function(rating){

    rating.addEventListener("click", function(e){
        const ratingEl = e.currentTarget.classList
        const ratingId = e.currentTarget.id
        ratingEl.toggle("clicked")

        ratings.forEach(function (ratingNum){
            const task = ratingNum.classList

            if (ratingNum !== rating){
                task.remove("clicked")
            }
        })

        button.addEventListener("click", function(){

            if($(".rating").hasClass("clicked")){
                ratingSect.classList.add("display")
                thankYou.classList.remove("display")
            }
               console.log(ratingId)
               $(".results").append("You selected " + ratingId + " out of 5" )
          
        })
        
    })
})


