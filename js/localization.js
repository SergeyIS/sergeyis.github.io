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
    "a_software_engineer":"a Software Engineer",
    "lets_start":"Let's start",
    "who_i_am":"Who I am",
    "resume":"Resume",
    "hello":"Hello",
    "i_am":"I am",
    "my_descr":"I am a fourth-year student at National University of Science and Technology MISIS living in Moscow. This web site describes my personal experience, projects and interests. Here you can find my contacts if you want to",
    "touch_with_me":"touch with me",
    "for_suggestions_collaborations":"for some suggestions & collaborations.",
    "now":"Now",
    "languages":"Languages",
    "russian":"Russian",
    "english":"English",
    "native":"native",
    "upper_intermediate":"upper intermediate",
    "interests":"Interests",
    "software_development":"Software development",
    "":"Project management",
    "project_management":"Project management",
    "design":"Design",
    "edu_man_descr":"Web platform for managing of learning process in schools.",
    "sm_api_descr":"Application that allow you to control your debts and make money transfers using application.",
    "sm_mob_descr":"Mobile Application for SafeMoney REST service."
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