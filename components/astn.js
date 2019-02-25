(function () {
    var modules = {
        "panel-main-astn": { url: "$A/astn/components/panel/panel-main.html", router: 1 },
        "panel-child-astn": { url: "$A/astn/components/panel/panel-child.html" },

        "shq-project-data": {
            url: "$A/astn/components/project/shq-project-data.html", Table: "astn-shq-project", form_module: "shq-project-form", router: 1,
            child_panel: "panel-main-astn"
        },
        "shq-project-form": { url: "$A/astn/components/project/shq-project-form.html", Table: "astn-shq-project" },

        "participant-data": {
            url: "$A/astn/components/participant/participant-data.html", Table: "astn-participant", form_module: "participant-form", router: 1,
            child_panel: "panel-child-astn",
            questionnaire_setup: "online-questionnaire-setup-astn",
            online_questionnaire: "online-questionnaire-app-astn",
            participant_id: { field1: "Subject_ID", field2: "Subject_Initials" }
        },
        "participant-form": { url: "$A/astn/components/participant/participant-form.html", Table: "astn-participant" },

        "online-questionnaire-setup-astn": { url: "$A/astn/online-questionnaire/components/online-questionnaire-setup.html", Table: "astn-participant" },
        "online-questionnaire-app-astn": { url: "$A/astn/online-questionnaire/index.html" },

        "notes": { url: "$A/modules/mdb/n/notes.html" },

        "consent-astn-data": { url: "$A/modules/mdb/c/consent-astn-data.html", Table: "consent-astn", form_module: "consent-astn-form" },
        "consent-astn-form": { url: "$A/modules/mdb/c/consent-astn-form.html", Table: "consent-astn" },
        "background-information-astn-data": { url: "$A/modules/mdb/b/background-information-astn-data.html", Table: "background-information-astn", form_module: "background-information-astn-form" },
        "background-information-astn-form": { url: "$A/modules/mdb/b/background-information-astn-form.html", Table: "background-information-astn" },
        "general-astn-data": { url: "$A/modules/mdb/g/general-astn-data.html", Table: "general-astn", form_module: "general-astn-form" },
        "general-astn-form": { url: "$A/modules/mdb/g/general-astn-form.html", Table: "general-astn" },
        "ethnicity-self-astn-data": { url: "$A/modules/mdb/e/ethnicity-self-astn-data.html", Table: "ethnicity-self-astn", form_module: "ethnicity-self-astn-form" },
        "ethnicity-self-astn-form": { url: "$A/modules/mdb/e/ethnicity-self-astn-form.html", Table: "ethnicity-self-astn" },
        "lifestyle-astn-data": { url: "$A/modules/mdb/l/lifestyle-astn-data.html", Table: "lifestyle-astn", form_module: "lifestyle-astn-form" },
        "lifestyle-astn-form": { url: "$A/modules/mdb/l/lifestyle-astn-form.html", Table: "lifestyle-astn" },
        "medical-history-astn-data": { url: "$A/modules/mdb/m/medical-history-astn-data.html", Table: "medical-history-astn", form_module: "medical-history-astn-form" },
        "medical-history-astn-form": { url: "$A/modules/mdb/m/medical-history-astn-form.html", Table: "medical-history-astn" },
        "sleep-disorder-patterns-astn-data": { url: "$A/modules/mdb/s/sleep-disorder-patterns-astn-data.html", Table: "sleep-disorder-patterns-astn", form_module: "sleep-disorder-patterns-astn-form" },
        "sleep-disorder-patterns-astn-form": { url: "$A/modules/mdb/s/sleep-disorder-patterns-astn-form.html", Table: "sleep-disorder-patterns-astn" },
        "sleep-hygiene-index-astn-data": { url: "$A/modules/mdb/s/sleep-hygiene-index-astn-data.html", Table: "sleep-hygiene-index-astn", form_module: "sleep-hygiene-index-astn-form" },
        "sleep-hygiene-index-astn-form": { url: "$A/modules/mdb/s/sleep-hygiene-index-astn-form.html", Table: "sleep-hygiene-index-astn" },
        "social-history-astn-data": { url: "$A/modules/mdb/s/social-history-astn-data.html", Table: "social-history-astn", form_module: "social-history-astn-form" },
        "social-history-astn-form": { url: "$A/modules/mdb/s/social-history-astn-form.html", Table: "social-history-astn" },
        "medications-astn-data": { url: "$A/modules/mdb/m/medications-astn-data.html", Table: "medications-astn", form_module: "medications-astn-form" },
        "medications-astn-form": { url: "$A/modules/mdb/m/medications-astn-form.html", Table: "medications-astn" },
        "rec-drug-astn-data": { url: "$A/modules/mdb/r/rec-drug-astn-data.html", Table: "rec-drug-astn", form_module: "rec-drug-astn-form" },
        "rec-drug-astn-form": { url: "$A/modules/mdb/r/rec-drug-astn-form.html", Table: "rec-drug-astn" },
        "ess-astn-data": { url: "$A/modules/mdb/e/ess-astn-data.html", Table: "ess-astn", form_module: "ess-astn-form" },
        "ess-astn-form": { url: "$A/modules/mdb/e/ess-astn-form.html", Table: "ess-astn" },
        "map-astn-data": { url: "$A/modules/mdb/m/map-astn-data.html", Table: "map-astn", form_module: "map-astn-form" },
        "map-astn-form": { url: "$A/modules/mdb/m/map-astn-form.html", Table: "map-astn" },
        "isi-astn-data": { url: "$A/modules/mdb/i/isi-astn-data.html", Table: "isi-astn", form_module: "isi-astn-form" },
        "isi-astn-form": { url: "$A/modules/mdb/i/isi-astn-form.html", Table: "isi-astn" },
        "restless-leg-astn-data": { url: "$A/modules/mdb/r/restless-leg-astn-data.html", Table: "restless-leg-astn", form_module: "restless-leg-astn-form" },
        "restless-leg-astn-form": { url: "$A/modules/mdb/r/restless-leg-astn-form.html", Table: "restless-leg-astn" },
        "me-astn-data": { url: "$A/modules/mdb/m/me-astn-data.html", Table: "me-astn", form_module: "me-astn-form" },
        "me-astn-form": { url: "$A/modules/mdb/m/me-astn-form.html", Table: "me-astn" },
        "fosq-astn-data": { url: "$A/modules/mdb/f/fosq-astn-data.html", Table: "fosq-astn", form_module: "fosq-astn-form" },
        "fosq-astn-form": { url: "$A/modules/mdb/f/fosq-astn-form.html", Table: "fosq-astn" },
        "psqi-astn-data": { url: "$A/modules/mdb/p/psqi-astn-data.html", Table: "psqi-astn", form_module: "psqi-astn-form" },
        "psqi-astn-form": { url: "$A/modules/mdb/p/psqi-astn-form.html", Table: "psqi-astn" },
        "phq-astn-data": { url: "$A/modules/mdb/p/phq-astn-data.html", Table: "phq-astn", form_module: "phq-astn-form" },
        "phq-astn-form": { url: "$A/modules/mdb/p/phq-astn-form.html", Table: "phq-astn" },
        "gad7-astn-data": { url: "$A/modules/mdb/g/gad7-astn-data.html", Table: "gad7-astn", form_module: "gad7-astn-form" },
        "gad7-astn-form": { url: "$A/modules/mdb/g/gad7-astn-form.html", Table: "gad7-astn" },
        "dass-astn-data": { url: "$A/modules/mdb/d/dass-astn-data.html", Table: "dass-astn", form_module: "dass-astn-form" },
        "dass-astn-form": { url: "$A/modules/mdb/d/dass-astn-form.html", Table: "dass-astn" },
        "fss-astn-data": { url: "$A/modules/mdb/f/fss-astn-data.html", Table: "fss-astn", form_module: "fss-astn-form" },
        "fss-astn-form": { url: "$A/modules/mdb/f/fss-astn-form.html", Table: "fss-astn" },
        "sds-astn-data": { url: "$A/modules/mdb/s/sds-astn-data.html", Table: "sds-astn", form_module: "sds-astn-form" },
        "sds-astn-form": { url: "$A/modules/mdb/s/sds-astn-form.html", Table: "sds-astn" },
        "hwpq-astn-data": { url: "$A/modules/mdb/h/hwpq-astn-data.html", Table: "hwpq-astn", form_module: "hwpq-astn-form" },
        "hwpq-astn-form": { url: "$A/modules/mdb/h/hwpq-astn-form.html", Table: "hwpq-astn" },
        "shiftwork-astn-data": { url: "$A/modules/mdb/s/shiftwork-astn-data.html", Table: "shiftwork-astn", form_module: "shiftwork-astn-form" },
        "shiftwork-astn-form": { url: "$A/modules/mdb/s/shiftwork-astn-form.html", Table: "shiftwork-astn" },
        "shiftworkii-astn-data": { url: "$A/modules/mdb/s/shiftworkii-astn-data.html", Table: "shiftworkii-astn", form_module: "shiftworkii-astn-form" },
        "shiftworkii-astn-form": { url: "$A/modules/mdb/s/shiftworkii-astn-form.html", Table: "shiftworkii-astn" },
        "mva-astn-data": { url: "$A/modules/mdb/m/mva-astn-data.html", Table: "mva-astn", form_module: "mva-astn-form" },
        "mva-astn-form": { url: "$A/modules/mdb/m/mva-astn-form.html", Table: "mva-astn" },
        "wa-astn-data": { url: "$A/modules/mdb/w/wa-astn-data.html", Table: "wa-astn", form_module: "wa-astn-form" },
        "wa-astn-form": { url: "$A/modules/mdb/w/wa-astn-form.html", Table: "wa-astn" },
        "than-you-astn-form": { url: "$A/modules/mdb/t/than-you-astn-form.html" }
    }
    for (m in modules) { $vm.module_list[m] = modules[m]; }
})();
