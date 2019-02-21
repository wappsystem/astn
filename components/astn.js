(function(){
    var modules={
        "panel-main-astn":    			{url:"$A/astn/components/panel/panel-main.html",router:1},
        "panel-child-astn":    			{url:"$A/astn/components/panel/panel-child.html"},
        
        "shq-project-data":   		{url:"$A/astn/components/project/shq-project-data.html",Table:"astn-shq-project",form_module:"shq-project-form",router:1,
                                            child_panel:"panel-main-astn"},
        "shq-project-form":   		{url:"$A/astn/components/project/shq-project-form.html",Table:"astn-shq-project"},

        "participant-data":   		{url:"$A/astn/components/participant/participant-data.html",Table:"astn-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-astn",
                                            questionnaire_setup:"online-questionnaire-setup-astn",
                                            online_questionnaire:"online-questionnaire-app-astn",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$A/astn/components/participant/participant-form.html",Table:"astn-participant"},

        "online-questionnaire-setup-astn": 	{url:"$A/astn/online-questionnaire/components/online-questionnaire-setup.html",Table:"astn-participant"},
        "online-questionnaire-app-astn":    {url:"$A/astn/online-questionnaire/index.html"},

        "notes":  		  	  			{url:"$A/modules/mdb/n/notes.html"},

        "randomisation-table-data-astn":		{url:"$A/modules/mdb/r/randomisation-table-data.html",Table:"randomisation-table-astn",form_module:"randomisation-table-form-astn"},
        "randomisation-table-form-astn":		{url:"$A/modules/mdb/r/randomisation-table-form.html",Table:"randomisation-table-astn"},

        "dynamic-text-form-data-astn":		{url:"$A/modules/mdb/d/dynamic-text-form-data.html",Table:"dynamic-text-form-astn",form_module:"dynamic-text-form-form-astn"},
        "dynamic-text-form-form-astn":		{url:"$A/modules/mdb/d/dynamic-text-form-form.html",Table:"dynamic-text-form-astn"},
        "upload-file-data-astn":		        {url:"$A/modules/mdb/u/upload-file-data.html",Table:"upload-file-astn",form_module:"upload-file-form-astn"},
        "upload-file-form-astn":		        {url:"$A/modules/mdb/u/upload-file-form.html",Table:"upload-file-astn"},
        "read-data-from-file-data-astn":		{url:"$A/modules/mdb/r/read-data-from-file-data.html",Table:"read-data-from-file-astn",form_module:"read-data-from-file-form-astn"},
        "read-data-from-file-form-astn":		{url:"$A/modules/mdb/r/read-data-from-file-form.html",Table:"read-data-from-file-astn"},
        "one-many-standard-data-astn":	    {url:"$A/modules/mdb/o/one-many-standard-data.html",Table:"one-many-standard-astn",form_module:"one-many-standard-form-astn"},
        "one-many-standard-form-astn":	    {url:"$A/modules/mdb/o/one-many-standard-form.html",Table:"one-many-standard-astn",task_name:"One of many choice - Standard"},
        "one-many-special-1-data-astn":	    {url:"$A/modules/mdb/o/one-many-special-1-data.html",Table:"one-many-special-1-astn",form_module:"one-many-special-1-form-astn"},
        "one-many-special-1-form-astn":	    {url:"$A/modules/mdb/o/one-many-special-1-form.html",Table:"one-many-special-1-astn",task_name:"One of many choice - Special type 1"},
        "one-many-special-2-data-astn":	    {url:"$A/modules/mdb/o/one-many-special-2-data.html",Table:"one-many-special-2-astn",form_module:"one-many-special-2-form-astn"},
        "one-many-special-2-form-astn":	    {url:"$A/modules/mdb/o/one-many-special-2-form.html",Table:"one-many-special-2-astn",task_name:"One of many choice - Special type 2"},

        "textarea-data-astn":                {url:"$A/modules/mdb/t/textarea-data.html",Table:"textarea-astn",form_module:"textarea-form-astn"},
        "textarea-form-astn":                {url:"$A/modules/mdb/t/textarea-form.html",Table:"textarea-astn",task_name:"Multiple lines text inputs"},
        "many-of-many-data-astn":            {url:"$A/modules/mdb/m/many-of-many-data.html",Table:"many-of-many-astn",form_module:"many-of-many-form-astn"},
        "many-of-many-form-astn":            {url:"$A/modules/mdb/m/many-of-many-form.html",Table:"many-of-many-astn",task_name:"Many of many choices - Standard"},

        "calculation-data-astn":             {url:"$A/modules/mdb/c/calculation-data.html",Table:"calculation-astn",form_module:"calculation-form-astn"},
        "calculation-form-astn":             {url:"$A/modules/mdb/c/calculation-form.html",Table:"calculation-astn",task_name:"Number input with calculation"},
        "visual-analogue-scale-data-astn":   {url:"$A/modules/mdb/v/visual-analogue-scale-data.html",Table:"visual-analogue-scale-astn",form_module:"visual-analogue-scale-form-astn"},
        "visual-analogue-scale-form-astn":   {url:"$A/modules/mdb/v/visual-analogue-scale-form.html",Table:"visual-analogue-scale-astn",task_name:"Visual analogue scale"},
        "digital-scale-data-astn":           {url:"$A/modules/mdb/d/digital-scale-data.html",Table:"digital-scale-astn",form_module:"digital-scale-form-astn"},
        "digital-scale-form-astn":           {url:"$A/modules/mdb/d/digital-scale-form.html",Table:"digital-scale-astn",task_name:"Digital scale"},
        "star-rating-data-astn":             {url:"$A/modules/mdb/s/star-rating-data.html",Table:"star-rating-astn",form_module:"star-rating-form-astn"},
        "star-rating-form-astn":             {url:"$A/modules/mdb/s/star-rating-form.html",Table:"star-rating-astn",task_name:"Star rating"},
    
        "date-time-data-astn":   	{url:"$A/modules/mdb/d/date-time-data.html",Table:"date-time-astn",form_module:"date-time-form-astn"},
        "date-time-form-astn":   	{url:"$A/modules/mdb/d/date-time-form.html",Table:"date-time-astn",task_name:"Date/time inputs"},
        "number-max-min-data-astn":   {url:"$A/modules/mdb/n/numbers-data.html",Table:"number-max-min-astn",form_module:"number-max-min-form-astn"},
        "number-max-min-form-astn":   {url:"$A/modules/mdb/n/numbers-form.html",Table:"number-max-min-astn",task_name:"Number min/max inputs"},

        "concom-medication-data-astn":   {url:"$A/modules/mdb/c/concom-medication-data.html",Table:"concom-medication-astn",form_module:"concom-medication-form-astn"},
        "concom-medication-form-astn":   {url:"$A/modules/mdb/c/concom-medication-form.html",Table:"concom-medication-astn"},
        "adverse-event-data-astn":   {url:"$A/modules/mdb/a/adverse-event-data.html",Table:"adverse-event-astn",form_module:"adverse-event-form-astn"},
        "adverse-event-form-astn":   {url:"$A/modules/mdb/a/adverse-event-form.html",Table:"adverse-event-astn"}
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
