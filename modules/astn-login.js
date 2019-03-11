(function(){
    var modules={
        "home":                         {"url":"$A/astn/modules/online-questionnaire-login.html","Table":"astn-shq-participant-20002391",
                                                questionnaire_panel:"online-questionnaire-panel"
                                        }   ,
        "online-questionnaire-panel":   {url:"$A/astn/modules/online-questionnaire-panel.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
