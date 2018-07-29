colors = ["#7396D1", "#D3D4D7", "#505F99", "#FFBD25", "#7396D1", "#C33949"];
roles = [dictionary.my_name, dictionary.a_developer, dictionary.a_software_engineer, dictionary.my_name];

function runTypedAnimation() {
    if($(".typed p span").length) {
        $(".typed p span").typed({
            strings: roles,
            typeSpeed: 50
        });
    }
}
