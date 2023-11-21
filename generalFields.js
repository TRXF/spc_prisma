import { countries } from '@/config/common/countries';
import { languages } from '@/config/common/languages';
import { leadStages, lifecycleStages, industries, types, dealStage } from '@/config/modules/crm';

const dealType = [{ value: "new", label: "New Business" }, { value: "existing", label: "Existing Business" }]
const priority = [{ value: "low", label: "Low" }, { value: "medium", label: "Medium" }, { value: "high", label: "High" }]

//TODO - Check if needed

export const CC_CUSTOMER = (companies, team) => {
    return [
        { name: 'salutation', label: 'Salutation', type: 'select', options: [{ value: "mrs", label: "Mrs." }, { value: "mr", label: "Mr." }, { value: "ms", label: "Ms." }] },
        { name: 'firstName', label: 'First Name', type: 'text', pattern: '', rules: { required: false } },
        { name: 'lastName', label: 'Last Name', type: 'text', pattern: '', rules: { required: false } },
        { name: 'contactEmail', label: 'Email', type: 'text', pattern: '', rules: { required: false } },
        { name: 'phone', label: 'Phone', type: 'text', pattern: '', rules: { required: false } },
        { name: 'jobTitle', label: 'Job Title', type: 'text', pattern: '', rules: { required: false } },
        { name: 'lifecycleStage', label: 'Lifecycle Stage', type: 'select', options: lifecycleStages, rules: { required: false } },
        { name: 'leadStatus', label: 'Lead Stage', type: 'select', options: leadStages, rules: { required: false } },
        { name: 'zip', label: 'ZIP', type: 'text', rules: { required: false } },
        { name: 'city', label: 'City', type: 'text', rules: { required: false } },
        { name: 'state', label: 'State', type: 'text', pattern: '', rules: { required: false } },
        { name: 'country', label: 'Country', type: 'select', options: countries, rules: { required: false } },
        { name: 'street', label: 'Street', type: 'text', pattern: '', rules: { required: false } },
        { name: 'website', label: 'Website', type: 'text', pattern: '', rules: { required: false } },
        { name: 'persona', label: 'Persona', type: 'text', pattern: '', rules: { required: false } },
        { name: 'twitter_handle', label: 'Twitter', type: 'text', pattern: '', rules: { required: false } },
        { name: 'contactOwnerId', label: 'Contact Owner', type: 'select', options: team?.map((item) => ({ value: item?.user?.id, label: item?.user?.name })), rules: { required: false } },
        { name: 'preferred_language', label: 'Preferred Language', type: 'select', options: languages.map((item) => ({ value: item.code, label: item.name })), rules: { required: false } },
        { name: 'companyId', label: 'Company', type: 'select', options: companies.map((item) => ({ value: item.id, label: item.companyName })), rules: { required: false } },
    ]
}

export const CC_COMPANY = () => {
    return [
        { name: 'companyDomain', label: 'Company Domain', type: 'text', pattern: '', rules: { required: false } },
        { name: 'companyName', label: 'Company Name', type: 'text', pattern: '', rules: { required: false } },
        { name: 'industry', label: 'Industry', type: 'select', options: industries, rules: { required: false } },
        { name: 'type', label: 'Type', type: 'select', options: types, rules: { required: false } },
        { name: 'phone', label: 'Phone', type: 'text', pattern: '', rules: { required: false } },
        { name: 'city', label: 'City', type: 'text', rules: { required: false } },
        { name: 'street', label: 'Street', type: 'text', pattern: '', rules: { required: false } },
        { name: 'state', label: 'State', type: 'text', pattern: '', rules: { required: false } },
        { name: 'zip', label: 'ZIP', type: 'text', rules: { required: false } },
        { name: 'country', label: 'Country', type: 'select', options: countries, rules: { required: false } },
        { name: 'employees', label: 'Employees', type: 'text', pattern: '', rules: { required: false } },
        { name: 'revenue', label: 'Revenue', type: 'text', pattern: '', rules: { required: false } },
        { name: 'description', label: 'Description', type: 'text', pattern: '', rules: { required: false } },
        { name: 'linkedin', label: 'Linkedin', type: 'text', pattern: '', rules: { required: false } },
        { name: 'website', label: 'Website', type: 'text', pattern: '', rules: { required: false } },
        { name: 'timeZone', label: 'Time Zone', type: 'text', pattern: '', rules: { required: false } },
    ]
}

export const CC_DEALS = (contacts, companies, projects) => {
    return [
        { name: 'dealName', label: 'Deal Name', type: 'text', pattern: '', rules: { required: false } },
        { name: 'pipeline', label: 'Pipeline', type: 'text', pattern: '', rules: { required: false } },
        { name: 'dealStage', label: 'Deal Stage', type: 'select', options: dealStage, rules: { required: false } },
        { name: 'amount', label: 'Amount', type: 'text', pattern: '', rules: { required: false } },
        { name: 'closeDate', label: 'Close Date', type: 'date', ext: '', rules: { required: false } },
        { name: 'dealType', label: 'Deal Type', type: 'select', options: dealType, rules: { required: false } },
        { name: 'priority', label: 'Priority', type: 'select', options: priority, rules: { required: false } },
        { name: 'contactId', label: 'Contact', type: 'select', options: contacts?.map((item) => ({ value: item?.id, label: item?.firstName + ' ' + item?.lastName })), rules: { required: false } },
        { name: 'companyId', label: 'Company', type: 'select', options: companies?.map((item) => ({ value: item?.id, label: item?.companyName })), rules: { required: false } },
        { name: 'projectId', label: 'Project', type: 'select', options: projects?.map((item) => ({ value: item?.id, label: item?.projectName })), rules: { required: false } },
    ]
}
