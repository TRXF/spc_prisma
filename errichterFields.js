import { lifecycleStages, leadStages } from '../crm/crm'
import { countries } from '../common/countries'

const salutation = [{ value: 'herr', label: 'Herr' }, { value: 'frau', label: 'Frau' }, { value: 'divers', label: 'Divers' }]

export const ADD_CUSTOMER = () => {
    return [
        { name: 'salutation', label: 'Anrede', type: 'select', options: salutation, width: "1", rules: { required: false } },
        { name: 'contactEmail', label: 'Email', type: 'email', pattern: '', width: "1", rules: { required: true } },
        { name: 'firstName', label: 'Vorname', type: 'text', pattern: '', width: "1", rules: { required: true } },
        { name: 'lastName', label: 'Nachname', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'phone', label: 'Telefon', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'jobTitle', label: 'Beruf', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'lifecycleStage', label: 'Lebenszyklus', type: 'select', options: lifecycleStages, width: "1", rules: { required: false } },
        { name: 'leadStatus', label: 'Status', type: 'select', options: leadStages, width: "1", rules: { required: false } },
        { name: 'street', label: 'Strasse', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'zip', label: 'PLZ', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'city', label: 'Stadt', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'state', label: 'Bundesland', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'country', label: 'Land', type: 'select', options: countries, width: "1", rules: { required: false } },
        { name: 'website', label: 'Webseite', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'persona', label: 'Persona', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'twitter_handle', label: 'Twitter', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'preferred_language', label: 'Sprache', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'photoUrl', label: 'Photo Url', type: 'text', pattern: '', width: "2", rules: { required: false } },
    ]
}
