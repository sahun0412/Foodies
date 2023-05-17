document.addEventListener("DOMContentLoaded", ()=>{
    function counter(id, start, end, duration){
        
        let obj = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 5000);
    counter("count2", 0, 4000, 7000);
    counter("count3", 0, 3154, 4500);
    counter("count4", 0, 7972, 2806);
})


$(function(){ 
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});


