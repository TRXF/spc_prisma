export const NEW_PROJECT = (projects, users, groups, event, category, status) => {

    return [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'event_type_id', label: 'Anforderung', type: 'select', options: event, required: true },
        { name: 'description', label: 'Beschreibung', type: 'textarea', rows: 3, rows: 3, width: 2, required: true },
        { name: 'project_id', label: 'Projekt', type: 'select', options: projects, required: true },
        { name: 'language_id', label: 'Sprache', type: 'text', required: true },
        { name: 'group_id', label: 'Abteilung', type: 'select', options: groups, required: true },
        { name: 'assignedTo', label: 'Zugewiesen an', type: 'select', options: users, required: true },
        { name: 'baseline_spend', label: 'Zielpreis', type: 'text', required: true },
        { name: 'target_savings', label: 'Marge', type: 'text', required: true },
        { name: 'category', label: 'Kategorie', type: 'select', options: category, required: true },
        { name: 'status', label: 'Status', type: 'select', options: status, required: true },
        { name: 'contract_effective_date', label: 'Errichtungszeitraum von:', type: 'date', required: true },
        { name: 'contract_expiry_date', label: 'Errichtungszeitraum bis', type: 'date', required: true },
        { name: 'is_test_project', label: 'Test Projekt?', type: 'checkbox', required: true },
    ]
}

export const SOURCING_RULES = () => {
    return [
        { name: 'response_date', label: 'Start Datum', type: 'date', required: true },
        { name: 'due_date', label: 'Fällig bis', type: 'date', required: true },
        { name: 'due_date_days', label: 'Fällig bis (in Tagen)', type: 'text', required: false },
        { name: 'est_award_time', label: 'Vergabedatum', type: 'date', required: true },
    ]
}

export const SOURCING_BIDDER_RULES = () => {
    return [
        { name: 'experienceYears', label: 'Der Bieter muss seine Erfahrung im Entwerfen, Beschaffen und Installieren von PV-Systemen vorlegen.', type: 'checkbox', required: false },
        { name: 'completedProjects', label: 'Der Bieter muss die Anzahl der in den letzten Jahren erfolgreich abgeschlossenen Projekte angeben.', type: 'checkbox', required: false },
        { name: 'companyProfile', label: 'Der Bieter muss sein Unternehmensprofil einreichen.', type: 'checkbox', required: false },
        { name: 'financialStatements', label: 'Der Bieter muss seine finanziellen Erklärungen vorlegen.', type: 'checkbox', required: false },
        { name: 'references', label: 'Der Bieter muss Referenzen und Informationen über bisherige Projekte vorlegen.', type: 'checkbox', required: false },
        { name: 'technicalSpecifications', label: 'Der Bieter muss technische Spezifikationen des vorgeschlagenen Systems bereitstellen.', type: 'checkbox', required: false },
        { name: 'bidSubmissionDate', label: 'Der Bieter muss das Datum der Angebotsabgabe angeben.', type: 'checkbox', required: false },
        { name: 'bidStatus', label: 'Der Bieter muss den Status seines Angebots bekannt geben.', type: 'checkbox', required: false },
        { name: 'bidPrice', label: 'Der Bieter muss eine detaillierte Preiszusammenstellung für sein Angebot angeben.', type: 'checkbox', required: false },
        { name: 'taxesIncluded', label: 'Der Bieter muss bestätigen, ob alle Steuern und Abgaben im Angebot enthalten sind.', type: 'checkbox', required: false },
        { name: 'conflictsOfInterest', label: 'Der Bieter muss mögliche Interessenskonflikte erläutern.', type: 'checkbox', required: false },
        { name: 'projectTimeline', label: 'Der Bieter muss einen Zeitplan für das Projekt vorlegen.', type: 'checkbox', required: false },
        { name: 'equipmentCosts', label: 'Der Bieter muss die Kosten für Ausrüstung und Geräte in seinem Angebot angeben.', type: 'checkbox', required: false },
        { name: 'laborCosts', label: 'Der Bieter muss die Arbeits- und Installationskosten in seinem Angebot angeben.', type: 'checkbox', required: false },
        { name: 'operationMaintenanceCosts', label: 'Der Bieter muss die Kosten für Betrieb und Wartung in seinem Angebot angeben.', type: 'checkbox', required: false },
        { name: 'additionalCosts', label: 'Der Bieter muss alle zusätzlichen Kosten in seinem Angebot auflisten.', type: 'checkbox', required: false },
        { name: 'pricingValidity', label: 'Der Bieter muss die Gültigkeitsdauer seines Angebots angeben.', type: 'checkbox', required: false },
        { name: 'bidSecurity', label: 'Der Bieter muss eine Angebotssicherheit oder Kaution vorlegen.', type: 'checkbox', required: false },
        { name: 'performanceSecurity', label: 'Vom Bieter kann eine Leistungsgarantie oder Kaution verlangt werden.', type: 'checkbox', required: false },
        { name: 'roof_planning', label: 'Der Bieter wird eine Planung für die Dachinstallation vorlegen.', type: 'checkbox', required: false },
        { name: 'siteVisitDate', label: 'Der Bieter muss das Datum seines Besuchs am PV-Standort angeben.', type: 'checkbox', required: false },
        { name: 'grievance', label: 'Der Bieter muss einen Mechanismus für Beschwerden oder Anliegen vorschlagen.', type: 'checkbox', required: false },

        // { name: 'bid_submission_date', label: 'Der Bieter muss das Datum der Angebotsabgabe angeben.', type: 'checkbox', required: false },
        // { name: 'detailed_price_breakdown', label: 'Der Bieter muss eine detaillierte Preiszusammenstellung für sein Angebot angeben.', type: 'checkbox', required: false },
        // { name: 'explain_conflicts_of_interest', label: 'Der Bieter muss mögliche Interessenskonflikte erläutern.', type: 'checkbox', required: false },
        // { name: 'equipment_machinery_costs', label: 'Der Bieter muss die Kosten für Ausrüstung und Geräte in seinem Angebot angeben.', type: 'checkbox', required: false },
        // { name: 'operation_maintenance_costs', label: 'Der Bieter muss die Kosten für Betrieb und Wartung in seinem Angebot angeben.', type: 'checkbox', required: false },
        // { name: 'bid_security_deposit', label: 'Der Bieter muss eine Angebotssicherheit oder Kaution vorlegen.', type: 'checkbox', required: false },
        // { name: 'additional_costs', label: 'Der Bieter muss alle zusätzlichen Kosten in seinem Angebot auflisten.', type: 'checkbox', required: false },
        // { name: 'labor_installation_costs', label: 'Der Bieter muss die Arbeits- und Installationskosten in seinem Angebot angeben.', type: 'checkbox', required: false },
        // { name: 'taxes_duties', label: 'Der Bieter muss bestätigen, ob alle Steuern und Abgaben im Angebot enthalten sind.', type: 'checkbox', required: false },
        // { name: 'bid_status', label: 'Der Bieter muss den Status seines Angebots bekannt gebe', type: 'checkbox', required: false },
        // { name: 'list_all_additional_costs', label: 'Der Bieter muss alle zusätzlichen Kosten in seinem Angebot auflisten.', type: 'checkbox', required: false },
        // { name: 'bid_validity_period', label: 'Der Bieter muss die Gültigkeitsdauer seines Angebots angeben.', type: 'checkbox', required: false },
        // { name: 'performance_guarantee_deposit_requirement', label: 'Vom Bieter kann eine Leistungsgarantie oder Kaution verlangt werden.', type: 'checkbox', required: false },
        // { name: 'complaints_concerns_mechanism', label: 'Der Bieter muss einen Mechanismus für Beschwerden oder Anliegen vorschlagen.', type: 'checkbox', required: false },
        // { name: 'roof_installation_planning', label: 'Der Bieter wird eine Planung für die Dachinstallation vorlegen.', type: 'checkbox', required: false },
        // { name: 'project_schedule', label: 'Der Bieter muss einen Zeitplan für das Projekt vorlegen', type: 'checkbox', required: false },
        // { name: 'technical_system_specifications', label: 'Der Bieter muss technische Spezifikationen des vorgeschlagenen Systems bereitstellen.', type: 'checkbox', required: false },
        // { name: 'pv_site_visit_date', label: 'Der Bieter muss das Datum seines Besuchs am PV-Standort angeben.', type: 'checkbox', required: false },
        // { name: 'experience_in_pv_systems', label: 'Der Bieter muss seine Erfahrung im Entwerfen, Beschaffen und Installieren von PV-Systemen vorlegen', type: 'checkbox', required: false },
        // { name: 'company_profile', label: 'Der Bieter muss sein Unternehmensprofil einreichen.', type: 'checkbox', required: false },
        // { name: 'references_previous_projects', label: 'Der Bieter muss Referenzen und Informationen über bisherige Projekte vorlegen.', type: 'checkbox', required: false },
        // { name: 'successfully_completed_projects', label: 'Der Bieter muss die Anzahl der in den letzten Jahren erfolgreich abgeschlossenen Projekte angeben.', type: 'checkbox', required: false },
        // { name: 'financial_statements', label: 'Der Bieter muss seine finanziellen Erklärungen vorlegen.', type: 'checkbox', required: false },

    ]
}

export const SOURCING_CONTENT_INTRODUCTION = () => {
    return [
        { name: "introduction", label: "", type: "textarea", rows: 10, width: 2, placeholder: "Einleitungstext", required: true, }
    ]
}

export const SOURCING_CONTENT_COMMERCIAL_TERMS = () => {
    return [
        { name: "commercial_terms.contract_type", label: "Vertragsart", type: "textarea", width: 1, rows: 3, required: true, },
        { name: "commercial_terms.payment_terms", label: "Zahlungsbedingungen", type: "textarea", width: 1, rows: 3, required: true, },
        { name: "commercial_terms.warrenty", label: "Gewährleistung", type: "textarea", width: 1, rows: 3, required: true, },
        { name: "commercial_terms.insurance", label: "Versicherung", type: "textarea", width: 1, rows: 3, required: true, },
        { name: "commercial_terms.date_of_delivery", label: "Termin", type: "textarea", width: 1, rows: 3, required: true, }
    ]
}

export const SOURCING_CONTENT_PRICING = () => {
    return [
        { name: "pricing.planning", label: "Planung und Beratung", type: "textarea", width: 1, rows: 3, required: true, },
        { name: "pricing.procurment", label: "Beschaffung und Lieferung", type: "textarea", width: 1, rows: 3, required: true, },
        { name: "pricing.installation", label: "Installation und Inbetriebnahme", type: "textarea", width: 1, rows: 5, required: true, },
        { name: "pricing.documentation", label: "Dokumentation", type: "textarea", width: 1, rows: 5, required: true, },
        { name: "pricing.maintenance", label: "Service und Wartung", type: "textarea", width: 1, rows: 3, required: true, },
    ]
}

export const SOURCING_CONTENT_RULES = (rules) => {
    const contentRules = [
        // { name: rules.bid_submission_date, label: 'Angebotsdatum angeben.', type: 'checkbox', required: false, show: rules.bid_submission_date },
        // { name: rules.detailed_price_breakdown, label: 'Detaillierte Preiszusammenstellung angeben.', type: 'checkbox', required: false, show: rules.detailed_price_breakdown },
        // { name: rules.explain_conflicts_of_interest, label: 'Interessenskonflikte erläutern.', type: 'checkbox', required: false, show: rules.explain_conflicts_of_interest },
        // { name: rules.equipment_machinery_costs, label: 'Kosten für Ausrüstung und Geräte angeben.', type: 'checkbox', required: false, show: rules.equipment_machinery_costs },
        // { name: rules.operation_maintenance_costs, label: 'Kosten für Betrieb und Wartung angeben.', type: 'checkbox', required: false, show: rules.operation_maintenance_costs },
        // { name: rules.bid_security_deposit, label: 'Angebotssicherheit oder Kaution vorlegen.', type: 'checkbox', required: false, show: rules.bid_security_deposit },
        // { name: rules.additional_costs, label: 'Zusätzliche Kosten auflisten.', type: 'checkbox', required: false, show: rules.additional_costs },
        // { name: rules.labor_installation_costs, label: 'Arbeits- und Installationskosten angeben.', type: 'checkbox', required: false, show: rules.labor_installation_costs },
        // { name: rules.taxes_duties, label: 'Bestätigen, ob alle Steuern und Abgaben im Angebot enthalten sind.', type: 'checkbox', required: false, show: rules.taxes_duties },
        // { name: rules.bid_status, label: 'Status des Angebots angeben.', type: 'checkbox', required: false, show: rules.bid_status },
        // { name: rules.list_all_additional_costs, label: 'Alle zusätzlichen Kosten auflisten.', type: 'checkbox', required: false, show: rules.list_all_additional_costs },
        // { name: rules.bid_validity_period, label: 'Gültigkeitsdauer des Angebots angeben.', type: 'checkbox', required: false, show: rules.bid_validity_period },
        // { name: rules.performance_guarantee_deposit_requirement, label: 'Leistungsgarantie oder Kaution verlangen.', type: 'checkbox', required: false, show: rules.performance_guarantee_deposit_requirement },
        // { name: rules.complaints_concerns_mechanism, label: 'Mechanismus für Beschwerden oder Anliegen vorschlagen.', type: 'checkbox', required: false, show: rules.complaints_concerns_mechanism },
        // { name: rules.roof_installation_planning, label: 'Planung für die Dachinstallation vorlegen.', type: 'checkbox', required: false, show: rules.roof_installation_planning },
        // { name: rules.project_schedule, label: 'Zeitplan für das Projekt vorlegen.', type: 'checkbox', required: false, show: rules.project_schedule },
        // { name: rules.technical_system_specifications, label: 'Technische Spezifikationen des vorgeschlagenen Systems bereitstellen.', type: 'checkbox', required: false, show: rules.technical_system_specifications },
        // { name: rules.pv_site_visit_date, label: 'Datum des Besuchs am PV-Standort angeben.', type: 'checkbox', required: false, show: rules.pv_site_visit_date },
        // { name: rules.experience_in_pv_systems, label: 'Erfahrung im Entwerfen, Beschaffen und Installieren von PV-Systemen vorlegen.', type: 'checkbox', required: false, show: rules.experience_in_pv_systems },
        // { name: rules.company_profile, label: 'Unternehmensprofil einreichen.', type: 'checkbox', required: false, show: rules.company_profile },
        // { name: rules.references_previous_projects, label: 'Referenzen und Informationen über bisherige Projekte vorlegen.', type: 'checkbox', required: false, show: rules.references_previous_projects },
        // { name: rules.successfully_completed_projects, label: 'Anzahl der in den letzten Jahren erfolgreich abgeschlossenen Projekte angeben.', type: 'checkbox', required: false, show: rules.successfully_completed_projects },
        // { name: rules.financial_statements, label: 'Finanzielle Erklärungen vorlegen.', type: 'checkbox', required: false, show: rules.financial_statements },


        { name: 'rules.experienceYears', label: 'Jahre Erfahrung', type: 'textarea', rows: 3, required: true, show: rules.experienceYears },
        { name: 'rules.completedProjects', label: 'Abgeschlossene Projekte', type: 'textarea', rows: 3, required: true, show: rules.completedProjects },
        { name: 'rules.companyProfile', label: 'Firmenprofil', type: 'textarea', rows: 3, required: false, show: rules.companyProfile },
        { name: 'rules.financialStatements', label: 'Finanzaufstellungen', type: 'textarea', rows: 3, required: false, show: rules.financialStatements },
        { name: 'rules.references', label: 'Referenzen', type: 'textarea', rows: 3, required: false, show: rules.references },
        { name: 'rules.technicalSpecifications', label: 'Technische Spezifikationen', type: 'textarea', rows: 3, required: false, show: rules.technicalSpecifications },
        { name: 'rules.bidSubmissionDate', label: 'Angebotsabgabedatum', type: 'textarea', rows: 3, required: false, show: rules.bidSubmissionDate },
        { name: 'rules.bidPrice', label: 'Angebotspreis', type: 'textarea', rows: 3, required: false, show: rules.bidPrice },
        { name: 'rules.taxesIncluded', label: 'Steuern inbegriffen', type: 'textarea', rows: 3, required: true, show: rules.taxesIncluded },
        { name: 'rules.conflictsOfInterest', label: 'Interessenskonflikte', type: 'textarea', rows: 3, required: false, show: rules.conflictsOfInterest },
        { name: 'rules.projectTimeline', label: 'Projektzeitplan', type: 'textarea', rows: 3, required: false, show: rules.projectTimeline },
        { name: 'rules.equipmentCosts', label: 'Ausrüstungskosten', type: 'textarea', rows: 3, required: false, show: rules.equipmentCosts },
        { name: 'rules.laborCosts', label: 'Arbeitskosten', type: 'textarea', rows: 3, required: false, show: rules.laborCosts },
        { name: 'rules.operationMaintenanceCosts', label: 'Betriebs- & Wartungskosten', type: 'textarea', rows: 3, required: false, show: rules.operationMaintenanceCosts },
        { name: 'rules.additionalCosts', label: 'Zusätzliche Kosten', type: 'textarea', rows: 3, required: false, show: rules.additionalCosts },
        { name: 'rules.pricingValidity', label: 'Gültigkeitsdatum des Angebots', type: 'date', required: false, show: rules.pricingValidity },
        { name: 'rules.bidSecurity', label: 'Angebotsicherheit Betrag', type: 'textarea', rows: 3, required: false, show: rules.bidSecurity },
        { name: 'rules.performanceSecurity', label: 'Leistungssicherheit Betrag', type: 'textarea', rows: 3, required: false, show: rules.performanceSecurity },
        { name: 'rules.roof_planning', label: 'Dachplanung', type: 'textarea', rows: 3, required: false, show: rules.roof_planning },
        { name: 'rules.siteVisitDate', label: 'Datum des Standortbesuchs', type: 'textarea', rows: 3, required: false, show: rules.siteVisitDate },
        { name: 'rules.grievance', label: 'Beschwerde', type: 'textarea', rows: 3, required: false, show: rules.grievance },
    ]
    return contentRules.filter(item => item.show);

}


export const SOURCING_RULES_EDIT = () => {
    return [
        { name: 'response_date', label: 'Start Datum', type: 'date', required: true },
        { name: 'due_date', label: 'Fällig bis', type: 'date', required: true },
        { name: 'due_date_days', label: 'Fällig bis (in Tagen)', type: 'text', required: true },
        { name: 'est_award_time', label: 'Vergabedatum', type: 'date', required: true },
        { name: 'name', label: 'Bietername', type: 'text', required: true },
        { name: 'experienceYears', label: 'Jahre Erfahrung', type: 'text', required: true },
        { name: 'completedProjects', label: 'Abgeschlossene Projekte', type: 'text', required: true },
        { name: 'companyProfile', label: 'Firmenprofil', type: 'textarea', rows: 3, required: false },
        { name: 'financialStatements', label: 'Finanzaufstellungen', type: 'textarea', rows: 3, required: false },
        { name: 'references', label: 'Referenzen', type: 'textarea', rows: 3, required: false },
        { name: 'technicalSpecifications', label: 'Technische Spezifikationen', type: 'textarea', rows: 3, required: false },
        { name: 'bidSubmissionDate', label: 'Angebotsabgabedatum', type: 'date', required: false },
        { name: 'bidStatus', label: 'Angebotsstatus', type: 'select', required: true, options: ['EINGEREICHT', 'AKZEPTIERT', 'ABGELEHNT', 'AUSSTEHEND', 'VERSCHOBEN'] },
        { name: 'bidPrice', label: 'Angebotspreis', type: 'text', required: false },
        { name: 'taxesIncluded', label: 'Steuern inbegriffen', type: 'checkbox', required: true },
        { name: 'conflictsOfInterest', label: 'Interessenskonflikte', type: 'textarea', rows: 3, required: false },
        { name: 'projectTimeline', label: 'Projektzeitplan', type: 'textarea', rows: 3, required: false },
        { name: 'equipmentCosts', label: 'Ausrüstungskosten', type: 'text', required: false },
        { name: 'laborCosts', label: 'Arbeitskosten', type: 'text', required: false },
        { name: 'operationMaintenanceCosts', label: 'Betriebs- & Wartungskosten', type: 'text', required: false },
        { name: 'additionalCosts', label: 'Zusätzliche Kosten', type: 'text', required: false },
        { name: 'pricingValidity', label: 'Gültigkeitsdatum des Angebots', type: 'date', required: false },
        { name: 'bidSecurity', label: 'Angebotsicherheit Betrag', type: 'text', required: false },
        { name: 'performanceSecurity', label: 'Leistungssicherheit Betrag', type: 'text', required: false },
        { name: 'siteVisitDate', label: 'Datum des Standortbesuchs', type: 'date', required: false },
        { name: 'grievance', label: 'Beschwerde', type: 'textarea', rows: 3, required: false }
    ]
}