import api from '@/utils/common/api'

import { age_ranges, building_types, compass_directions, fixing_types, insulationTypes, junctionBoxLocation, module_areas, products, remaining_consumption_tariffs, roof_types, roofing_types, routerLocation, shading_types } from '@/constants/datacenter'

const salutation = [{ value: 'Herr', label: 'Herr' }, { value: 'Frau', label: 'Frau' }, { value: 'Divers', label: 'Divers' }]
const emobile_charging_capacity = [{ value: 1, label: 'nicht vorhanden' }, { value: 2, label: '3,7kW' }, { value: 3, label: '7,4 Kw' }, { value: 4, label: '11kW' }, { value: 5, label: 'E-Mobilität in den kommenden 3 Jahren geplant' }]

export const LEAD_CONTACT = () => {
    return [
        { name: 'salutation', label: 'Anrede', type: 'select', options: salutation, width: "1", rules: { required: false } },
        { name: 'title', label: 'Titel', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'first_name', label: 'Vorname', type: 'text', pattern: '', width: "1", rules: { required: true } },
        { name: 'last_name', label: 'Nachname', type: 'text', pattern: '', width: "1", rules: { required: true } },
        { name: 'email', label: 'Email', type: 'email', pattern: '', width: "1", rules: { required: true } },
        { name: 'born_at', label: 'Geburtsdatum', type: 'date', pattern: '', width: "1", rules: { required: true } },
        { name: 'phone', label: 'Telefon', type: 'text', pattern: /^(\+49|0)[1-9]\d{1,14}$/, width: "1", rules: { required: true } },
        { name: 'mobile', label: 'Telefonnummer (optional)', type: 'text', pattern: /^(\+49|0)[1-9]\d{1,14}$/, width: "1", rules: { required: false } },
    ]
}

export const PROMOTION = () => {
    return [
        { name: 'actioncode', label: 'Aktionscode', type: 'text', width: "1", rules: { required: false } },
        { name: 'referal_number', label: 'Weiterempfehlung', type: 'text', width: "1", rules: { required: false } },
    ]
}


export const LEAD_ADDRESS = () => {
    return [
        { name: 'street_name', label: 'Strasse', type: 'text', width: "1", rules: { required: true } },
        { name: 'street_number', label: 'Hausnummer', type: 'text', pattern: '', width: "1", rules: { required: true } },
        { name: 'postcode', label: 'PLZ', type: 'text', pattern: '', width: "1", rules: { required: true } },
        { name: 'city', label: 'Stadt', type: 'text', pattern: '', width: "1", rules: { required: true } },
        { name: 'country', label: 'Land', type: 'text', pattern: '', width: "1", rules: { required: true } },
    ]
}

export const BANK_ACCOUNT = () => {
    return [
        { name: 'name', label: 'Kontoinhaber', type: 'text', width: "1", rules: { required: true } },
        { name: 'iban', label: 'IBAN', type: 'text', pattern: '', width: "1", rules: { required: true } },
        { name: 'bic', label: 'BIC (optional)', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'bank_account_bank_name', label: 'Bezeichnung Bankinstitut (optional)', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'bank_account_bank_city', label: 'Ort Bankinstitut (optional)', type: 'text', pattern: '', width: "1", rules: { required: false } },
    ]
}

export const LEAD_NEWBUILDING = () => {
    return [
        { name: 'object_street_name_alt', label: 'Strasse', type: 'text', width: "1", rules: { required: false } },
        { name: 'object_street_number_alt', label: 'Hausnummer', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'object_postcode_alt', label: 'PLZ', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'object_city_alt', label: 'Stadt', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'object_country_alt', label: 'Land', type: 'text', pattern: '', width: "1", rules: { required: false } },
    ]
}

export const BUILDING_INFO = () => {
    return [
        { name: 'building_type_id', label: 'Gebäudetyp', type: 'select', options: building_types, width: "1", rules: { required: false } },
        { name: 'building_module_area', label: 'Modulfelder', type: 'select', options: module_areas, pattern: '', width: "1", rules: { required: false } },
        { name: 'building_shadowing_type_id', label: 'Verschattung', type: 'select', options: shading_types, pattern: '', width: "1", rules: { required: false } },
        { name: 'building_orientation_id', label: 'Ausrichtung', type: 'select', options: compass_directions, pattern: '', width: "1", rules: { required: false } },
        { name: 'building_others', label: 'Sonstiges', type: 'text', pattern: '', width: "2", rules: { required: false } },
    ]
}

export const LANDREGISTER_INFO = () => {
    return [
        { name: 'land_register_title', label: 'Grundbuch', type: 'text', width: "1", rules: { required: false } },
        { name: 'land_register_district_court', label: 'Amtsgericht', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'land_register_district_name', label: 'Gemarkung', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'land_register_page', label: 'Blatt', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'land_register_field_name', label: 'Flur', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'land_register_field_sector', label: 'Flurstück', type: 'text', pattern: '', width: "1", rules: { required: false } },
    ]
}

export const ROOF_INFO = () => {
    return [
        { name: 'roof_type_id', label: 'Dachtyp', type: 'select', options: roof_types, width: "1", rules: { required: false } },
        { name: 'roof_type_other', label: 'Sonstiges', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'roofing_type_id', label: 'Dacheindeckung', type: 'select', options: roofing_types, pattern: '', width: "1", rules: { required: false } },
        { name: 'age_range_id', label: 'Dachalter', type: 'select', options: age_ranges, pattern: '', width: "1", rules: { required: false } },
        { name: 'renovated_at', label: 'Jahr der Sanierung (optional)', type: "text", pattern: '', width: "1", rules: { required: true } },
        { name: 'tiles_fixing_type_id', label: 'Befestigung der Ziegel', type: 'select', options: fixing_types, pattern: '', width: "1", rules: { required: true } },
        { name: 'tiles_visible_size', label: 'Sichtbares Ziegelmaß BxH (je 0-50 cm)', type: 'text', pattern: '', width: "1", rules: { required: true } },
    ]
}

export const ROOFSIZE_INFO = () => {
    return [
        { name: 'width', label: 'Dachbreite (m)', type: 'number', width: "1", rules: { required: false } },
        { name: 'width_alt', label: 'Dachbreite (2te Seite) (m)', type: 'number', width: "1", rules: { required: false } },
        { name: 'length', label: 'Dachlänge (m)', type: 'number', pattern: '', width: "1", rules: { required: false } },
        { name: 'length_alt', label: 'Dachlänge (2te Seite) (m)', type: 'number', width: "1", rules: { required: false } },
        { name: 'ridge_height', label: 'Firsthöhe (m)', type: 'number', pattern: '', width: "1", rules: { required: false } },
        { name: 'ridge_height_alt', label: 'Firsthöhe (2te Seite) (m)', type: 'number', width: "1", rules: { required: false } },
        { name: 'eaves_height', label: 'Traufhöhe (m)', type: "number", pattern: '', width: "1", rules: { required: true } },
        { name: 'eaves_height_alt', label: 'Traufhöhe (2te Seite) (m)', type: 'number', width: "1", rules: { required: false } },
        { name: 'pitch', label: 'Dachneigung in °', type: 'number', width: "1", rules: { required: false } },
    ]
}


export const INSULATION_INFO = () => {
    return [
        { name: 'insulation_type_id', label: 'Art der Dachdämmung', type: 'select', options: insulationTypes, width: "1", rules: { required: false } },
        { name: 'rafter_insulation_thickness', label: 'Stärke in cm', type: 'text', width: "1", rules: { required: false } },
        { name: 'rafter_width', label: 'Sparrenbreite', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'boardBinder', label: 'Dach-/Brettbinder (< 5 cm Dicke)', type: 'checkbox', pattern: '', width: "1", rules: { required: false } },
        { name: 'boardBinderOther', label: 'Dachbinder (Sonstiges)', type: 'text', pattern: '', width: "1", rules: { required: false } },
    ]
}

export const BUILDINADDRESS_INFO = () => {
    return [
        { name: 'object_street_name_alt', label: 'Strasse', type: 'text', width: "1", rules: { required: false } },
        { name: 'object_street_number_alt', label: 'Hausnummer', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'object_postcode_alt', label: 'PLZ', type: 'text', pattern: '', width: "1", rules: { required: false } },
        { name: 'object_city_alt', label: 'Ort', type: 'text', pattern: '', width: "1", rules: { required: false } },
    ]
}


export const ELECTRICITY_NEED = () => {
    return [
        { name: 'electricity_consumption_annually', label: 'Jahresverbrauch in kWh', type: 'text', width: "1", rules: { required: false } },
        { name: 'is_captive_consumption', label: 'Eigenverbrauch', type: 'checkbox', pattern: '', width: "1", rules: { required: false } },
    ]
}

export const METER_DATA = () => {
    return [
        { name: 'device_id', label: 'Jahresverbrauch in kWh', type: 'text', width: "1", rules: { required: false } },
        { name: 'is_meter_consolidation_desired', label: 'Eigenverbrauch', type: 'checkbox', pattern: '', width: "1", rules: { required: false } },
    ]
}

export const CONSUMPTION_DATA = () => {
    return [
        { name: 'special_consumption', label: 'Besondere Verbraucher', type: 'text', width: "1", rules: { required: false } },
        { name: 'emobile_charging_capacity', label: 'Ladeleistung E-Mobil in kW', type: 'select', options: emobile_charging_capacity, width: "1", rules: { required: false } },
        { name: 'output_water_heater', label: 'Leistung Durchlauferhitzer in kW', type: 'text', width: "1", rules: { required: false } },
    ]
}

export const REMAINING_DATA = () => {
    return [
        { name: 'remaining_consumption_tariff_id', label: 'Reststrom-Tarif', type: 'select', options: remaining_consumption_tariffs, width: "1", rules: { required: false } },
        { name: 'electricity_price_increase', label: 'Strompreissteigerung (0 - 8 %)', type: 'number', width: "1", rules: { required: false } },
        { name: 'remaining_consumption_base_price', label: 'Reststrom-Grundpreis in Euro/Monat', type: 'number', width: "1", rules: { required: false } },
        { name: 'remaining_consumption_unit_price', label: 'Reststrom-Arbeitspreis in ct/kWh', type: 'number', width: "1", rules: { required: false } },
    ]
}

export const ELECTRICITY_DATA = () => {
    return [
        { name: 'junction_box_location_id', label: 'Ort Hausanschluss', type: 'select', options: junctionBoxLocation, width: "1", rules: { required: false } },
        { name: 'meter_box_to_junction_box_distance', label: 'Abstand HAK-Zählerschrank (0 - 50 m)', type: 'number', width: "1", rules: { required: false } },
        { name: 'meter_box_location', label: 'Ort Zählerschrank', type: 'text', width: "1", rules: { required: false } },
        { name: 'router_location_id', label: 'Ort des Routers', type: 'select', options: routerLocation, width: "1", rules: { required: false } },
        { name: 'has_lan_connectivity', label: 'LAN-Verbindung (Router-Zählerschrank)', type: 'checkbox', width: "1", rules: { required: false } },
        { name: 'has_equipotential_bonding_rail', label: 'Potentialausgleichsschiene', type: 'checkbox', width: "1", rules: { required: false } },
    ]
}

export const PRODUCT_DATA = () => {
    return [
        { name: 'contract_type_id', label: 'Vertragsinteresse', type: 'select', options: [{ value: 1, label: "Miet" }, { value: 2, label: "Kauf" }], width: "1", rules: { required: false } },
        { name: 'product_id', label: 'Produkt', type: 'select', options: products, width: "1", rules: { required: false } },
        { name: 'is_cloud', label: 'Cloud', type: 'checkbox', width: "1", rules: { required: false } },
        { name: 'has_signed_wallbox_contract', label: 'Wallbox', type: 'checkbox', width: "1", rules: { required: false } },
    ]
}

export const DIMENTION_DATA = async () => {
    const products = await getProducts("64e2738d47a895067bb5d5e5");
    const storage = await getProducts("64e1d29f47a895067bb5d5cd");
    const ep = await getEp();


    return [
        { name: 'module_type_id', label: 'Modultyp', type: 'select', options: products, width: "1", rules: { required: false } },
        { name: 'modules_count', label: 'Anzahl Module', type: 'number', width: "1", rules: { required: false } },
        { name: 'storage_capacity', label: 'Speicherkapazität', type: 'select', options: storage, width: "1", rules: { required: false } },
        // { name: 'construction_partner_id', label: 'Montagepartner', type: 'select', options: ep, width: "1", rules: { required: false } },
        { name: 'modules_crosswise', label: 'Querverlegung', type: 'checkbox', width: "1", rules: { required: false } },
        { name: 'meter_replacement_costs', label: 'Zählerkastenerneuerung in Euro', type: 'number', width: "1", rules: { required: false } },
        { name: 'backup_power_capability_id', label: 'Notstromfähigkeit', type: 'checkbox', width: "1", rules: { required: false } },

    ]
};



const getProducts = async (category) => {
    const res = await api(`/api/scm/products/list?category=${category}`, { method: 'GET' })
    return res.data.map(({ id, name }) => ({ value: id, label: name }));
};


const getEp = async () => {
    const res = await api(`/api/scm/constructionPartner`, { method: 'GET' })
    return res.data.map(({ company_name }, index) => ({ value: index + 1, label: company_name }));
};
