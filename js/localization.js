var dictionary = {
    "about_me":"About me",
    "experience":"Experience",
    "skills":"Skills",
    "portfolio":"Portfolio",
    "contacts":"Contacts",
    "hello_i_am":"Hello, I am",
    "education":"Education",
    "cs":"Computer Science",
    "edu_descr":"National University of Science and Technology MISIS. Department of Computer Aided Design Systems, Current GPA 4.8",
    "work_experience":"WORK EXPERIENCE",
    "July":"July",
    "software_engineer":"Software Engineer",
    "deutsche_bank_descr":"Deutsche Bank Technology Center. Intern",
    "Mar":"Mar",
    "June":"June",
    "programming_teacher":"Programming Teacher",
    "teacher_descr":"Digit Center School. C # programming courses, Web technologies basics",
    "Jan":"Jan",
    "devops":"DevOps",
    "raiffeisen_descr":"Raiffeisen Bank. Intern. Automation CI/CD",
    "sysadmin":"System Administrator",
    "sysadmin_descr":"National University of Science and Technology MISIS. Maintenance of operability of computer equipment, university network, security provision, adjustment of computer systems.",
    "contact_information":"Contact information",
    "copyright_descr":"Here must be something about copyrights © 2018",
    "my_name":"Sergey Sidorov",
    "a_developer":"a Developer",
    "a_software_engineer":"a Software Engineer"
}

function getLocalization() {
    url = new URL(window.location.href);
    lan = url.searchParams.get("lan");

    if(lan === null)
        return "en";

    return lan;
}

function loadDictionary(language) {
    url = "resources/language."+language+".json";
    $.ajax({
        url: url,
        async: false,
        context: document.body
      }).done(function(data) {
            dictionary = data;
      });
}