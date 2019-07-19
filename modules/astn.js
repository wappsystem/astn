(function () {
    var modules = {
        "panel-main-shq-astn": { url: "$A/modules/panel-main-shq.html"},
        "panel-child-shq-astn": { url: "$A/modules/panel-child-shq.html" },

        "project-shq-data": {
            url: "$A/modules/project-shq-data.html", Table: "astn-shq-project-20003481", form_module: "project-shq-form", router: 1,
            child_panel: "panel-main-shq-astn"
        },
        "aused-data": {
            url: "$A/modules/aused-data.html", Table: "astn-aused-20003481", form_module: "aused-form", router: 1},
        "aused-form": {
            url: "$A/modules/aused-form.html", Table: "astn-aused-20003481"},
    
        "project-shq-form": { url: "$A/modules/project-shq-form.html", Table: "astn-shq-project-20003481" },

        "participant-shq-data": {
            url: "$A//modules/participant-shq-data.html", Table: "astn-shq-participant-20002391", form_module: "participant-shq-form",
            child_panel: "panel-child-shq-astn",
            questionnaire_setup: "online-questionnaire-setup-shq-astn",
            online_questionnaire: "online-questionnaire-app-shq-astn",
            participant_id: { field1: "Local_ID", field2: "Initials" }
        },
        "participant-shq-form": { url: "$A//modules/participant-shq-form.html", Table: "astn-shq-participant-20002391" },

        "online-questionnaire-setup-shq-astn": { url: "$A/modules/online-questionnaire-setup.html", Table: "astn-shq-participant-20002391" },
        "online-questionnaire-app-shq-astn": { url: "$A/online-questionnaire/index.html" },

        "notes": { url: "$A/modules/notes.html" },

        "all-records-astn-data": { url: "$A/modules/all-records-astn-data.html", Table: "consent-astn-20002423", form_module: "" },
        "consent-astn-data": { url: "$A/modules/consent-astn-data.html", Table: "consent-astn-20002423", form_module: "consent-astn-form" },
        "consent-astn-form": { url: "$A/modules/consent-astn-form.html", Table: "consent-astn-20002423", task_name:"Consent" },
        "background-information-astn-data": { url: "$A/modules/background-information-astn-data.html", Table: "background-information-astn-20002400", form_module: "background-information-astn-form" },
        "background-information-astn-form": { url: "$A/modules/background-information-astn-form.html", Table: "background-information-astn-20002400", task_name:"Background Information" },
        "general-astn-data": { url: "$A/modules/general-astn-data.html", Table: "general-astn-20002401", form_module: "general-astn-form" },
        "general-astn-form": { url: "$A/modules/general-astn-form.html", Table: "general-astn-20002401", task_name:"General" },
        "ethnicity-self-astn-data": { url: "$A/modules/ethnicity-self-astn-data.html", Table: "ethnicity-self-astn-20002402", form_module: "ethnicity-self-astn-form" },
        "ethnicity-self-astn-form": { url: "$A/modules/ethnicity-self-astn-form.html", Table: "ethnicity-self-astn-20002402", task_name:"Ethnicity" },
        "lifestyle-astn-data": { url: "$A/modules/lifestyle-astn-data.html", Table: "lifestyle-astn-20002403", form_module: "lifestyle-astn-form" },
        "lifestyle-astn-form": { url: "$A/modules/lifestyle-astn-form.html", Table: "lifestyle-astn-20002403", task_name:"Lifestyle" },
        "medical-history-astn-data": { url: "$A/modules/medical-history-astn-data.html", Table: "medical-history-astn-20002404", form_module: "medical-history-astn-form" },
        "medical-history-astn-form": { url: "$A/modules/medical-history-astn-form.html", Table: "medical-history-astn-20002404", task_name:"Medical History" },
        "sleep-disorder-patterns-astn-data": { url: "$A/modules/sleep-disorder-patterns-astn-data.html", Table: "sleep-disorder-patterns-astn-20002405", form_module: "sleep-disorder-patterns-astn-form" },
        "sleep-disorder-patterns-astn-form": { url: "$A/modules/sleep-disorder-patterns-astn-form.html", Table: "sleep-disorder-patterns-astn-20002405", task_name:"Sleep HQDP" },
        "sleep-hygiene-index-astn-data": { url: "$A/modules/sleep-hygiene-index-astn-data.html", Table: "sleep-hygiene-index-astn-20003571", form_module: "sleep-hygiene-index-astn-form" },
        "sleep-hygiene-index-astn-form": { url: "$A/modules/sleep-hygiene-index-astn-form.html", Table: "sleep-hygiene-index-astn-20003571", task_name:"Sleep Hygiene Index" },
        "family-sleep-history-astn-data": { url: "$A/modules/family-sleep-history-astn-data.html", Table: "family-sleep-history-astn-20002406", form_module: "family-sleep-history-astn-form" },
        "family-sleep-history-astn-form": { url: "$A/modules/family-sleep-history-astn-form.html", Table: "family-sleep-history-astn-20002406", task_name:"Family Sleep History" },
        "medications-astn-data": { url: "$A/modules/medications-astn-data.html", Table: "medications-astn-20002407", form_module: "medications-astn-form" },
        "medications-astn-form": { url: "$A/modules/medications-astn-form.html", Table: "medications-astn-20002407", task_name:"Medications" },
        "rec-drug-astn-data": { url: "$A/modules/rec-drug-astn-data.html", Table: "rec-drug-astn-20003574", form_module: "rec-drug-astn-form" },
        "rec-drug-astn-form": { url: "$A/modules/rec-drug-astn-form.html", Table: "rec-drug-astn-20003574", task_name:"Recreational Drugs" },
        "ess-astn-data": { url: "$A/modules/ess-astn-data.html", Table: "ess-astn-20002408", form_module: "ess-astn-form" },
        "ess-astn-form": { url: "$A/modules/ess-astn-form.html", Table: "ess-astn-20002408", task_name:"Epworth Sleepiness Scale" },
        "map-astn-data": { url: "$A/modules/map-astn-data.html", Table: "map-astn-20002409", form_module: "map-astn-form" },
        "map-astn-form": { url: "$A/modules/map-astn-form.html", Table: "map-astn-20002409", task_name:"Multivariate Apnea Prediction Questionnaire" },
        "isi-astn-data": { url: "$A/modules/isi-astn-data.html", Table: "isi-astn-20002410", form_module: "isi-astn-form" },
        "isi-astn-form": { url: "$A/modules/isi-astn-form.html", Table: "isi-astn-20002410", task_name:"Insomnia Severity Index" },
        "restless-leg-astn-data": { url: "$A/modules/restless-leg-astn-data.html", Table: "restless-leg-astn-20002411", form_module: "restless-leg-astn-form" },
        "restless-leg-astn-form": { url: "$A/modules/restless-leg-astn-form.html", Table: "restless-leg-astn-20002411", task_name:"Restless Legs" },
        "me-astn-data": { url: "$A/modules/me-astn-data.html", Table: "me-astn-20002412", form_module: "me-astn-form" },
        "me-astn-form": { url: "$A/modules/me-astn-form.html", Table: "me-astn-20002412", task_name:"Horne & &#214;stberg Morningness-Eveningness Composite Questionnaire" },
        "fosq-astn-data": { url: "$A/modules/fosq-astn-data.html", Table: "fosq-astn-20002413", form_module: "fosq-astn-form" },
        "fosq-astn-form": { url: "$A/modules/fosq-astn-form.html", Table: "fosq-astn-20002413", task_name:"Functional Outcomes of Sleep Questionnaire" },
        "psqi-astn-data": { url: "$A/modules/psqi-astn-data.html", Table: "psqi-astn-20003576", form_module: "psqi-astn-form" },
        "psqi-astn-form": { url: "$A/modules/psqi-astn-form.html", Table: "psqi-astn-20003576", task_name:"Pittsburgh Sleep Quality Index" },
        "phq-astn-data": { url: "$A/modules/phq-astn-data.html", Table: "phq-astn-20002414", form_module: "phq-astn-form" },
        "phq-astn-form": { url: "$A/modules/phq-astn-form.html", Table: "phq-astn-20002414", task_name:"Patient Health Questionnaire (PHQ-9)" },
        "gad7-astn-data": { url: "$A/modules/gad7-astn-data.html", Table: "gad7-astn-20002415", form_module: "gad7-astn-form" },
        "gad7-astn-form": { url: "$A/modules/gad7-astn-form.html", Table: "gad7-astn-20002415", task_name:"Generalised Anxiety Disorder (GAD-7)" },
        "dass-astn-data": { url: "$A/modules/dass-astn-data.html", Table: "dass-astn-20002416", form_module: "dass-astn-form" },
        "dass-astn-form": { url: "$A/modules/dass-astn-form.html", Table: "dass-astn-20002416", task_name:"Depression Anxiety Stress Scale (DASS-21)" },
        "fss-astn-data": { url: "$A/modules/fss-astn-data.html", Table: "fss-astn-20002417", form_module: "fss-astn-form" },
        "fss-astn-form": { url: "$A/modules/fss-astn-form.html", Table: "fss-astn-20002417", task_name:"Fatigue Severity Scale (FSS)" },
        "sds-astn-data": { url: "$A/modules/sds-astn-data.html", Table: "sds-astn-20002418", form_module: "sds-astn-form" },
        "sds-astn-form": { url: "$A/modules/sds-astn-form.html", Table: "sds-astn-20002418", task_name:"Sheehan Disability Scale (SDS)" },
        "hwpq-astn-data": { url: "$A/modules/hwpq-astn-data.html", Table: "hwpq-astn-20002419", form_module: "hwpq-astn-form" },
        "hwpq-astn-form": { url: "$A/modules/hwpq-astn-form.html", Table: "hwpq-astn-20002419", task_name:"Health & Work Performance Questionnaire" },
        "shiftwork-astn-data": { url: "$A/modules/shiftwork-astn-data.html", Table: "shiftwork-astn-20002420", form_module: "shiftwork-astn-form" },
        "shiftwork-astn-form": { url: "$A/modules/shiftwork-astn-form.html", Table: "shiftwork-astn-20002420", task_name:"Shiftwork" },
        "shiftworkii-astn-data": { url: "$A/modules/shiftworkii-astn-data.html", Table: "shiftworkii-astn-20003584", form_module: "shiftworkii-astn-form" },
        "shiftworkii-astn-form": { url: "$A/modules/shiftworkii-astn-form.html", Table: "shiftworkii-astn-20003584", task_name:"Shiftwork II" },
        "mva-astn-data": { url: "$A/modules/mva-astn-data.html", Table: "mva-astn-20002421", form_module: "mva-astn-form" },
        "mva-astn-form": { url: "$A/modules/mva-astn-form.html", Table: "mva-astn-20002421", task_name:"Motor Vehicle Accidents" },
        "wa-astn-data": { url: "$A/modules/wa-astn-data.html", Table: "wa-astn-20002422", form_module: "wa-astn-form" },
        "wa-astn-form": { url: "$A/modules/wa-astn-form.html", Table: "wa-astn-20002422", task_name:"Workplace Accidents" },
        "thank-you-astn-form": { url: "$A/modules/thank-you-astn-form.html", Table: "thank-you-astn", task_name:"Thank You" }
    }
    for (m in modules) { $vm.module_list[m] = modules[m]; }
})();
