(function(){
    var modules={
        "home":                         {"url":"$A/modules/online-questionnaire-login.html","Table":"astn-participant",
                                                questionnaire_panel:"online-questionnaire-panel"
                                        }   ,
        "online-questionnaire-panel":   {url:"$A/modules/online-questionnaire-panel.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();