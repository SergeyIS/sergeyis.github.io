colors = ["#7396D1", "#D3D4D7", "#505F99", "#FFBD25", "#7396D1", "#C33949"];
roles = ["Sergey Sidorov", "a Developer", "a Software Engineer", "Sergey Sidorov"];
maxlength = 15;
function setColor(){
    parts = $("#welcome").text().split('.').filter(function(e){
        return e !== "";
    });
    
    output = "";
    parts.forEach(function(element) {
        output += "<p style='display:inline; color:" + colors[getRandomInt(0, colors.length - 1)] + "'>" + element + "." +"</p>"
    }, this);

    $("#welcome").html(output);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runTypedAnimation() {
    if($(".typed p span").length) {
        $(".typed p span").typed({
            strings: roles,
            typeSpeed: 50
        });
    }
}
