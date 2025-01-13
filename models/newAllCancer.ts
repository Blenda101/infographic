import { model, Schema, SchemaTypes } from 'mongoose';

const newAllCancerSchema = new Schema({
  Year: String, // OK
  Locationabbr: String, // OK
  AGE_ADJUSTED_CI_LOWER: String, // OK
  AGE_ADJUSTED_CI_UPPER: String, // OK
  Locationdesc: String, // OK
  Topic: String, // OK
  Gender: String, // OK
  ageGroup: String,
  ageLabel: String,
  Race: String, // OK
  Count: String, // OK
  CountInNumber: Number, // OK
  Population: String, // OK
  PopulationInNumber: Number, // OK
  CrudeRate: String, // OK
  CrudeRateInNumber: Number, // OK
  diseaseLabelMale: String,
  diseaseLabelFemale: String,
  type: String,
  cnt: Number, // OK
  SITE: String, // OK
  CRUDE_CI_LOWER: String, // OK
  CRUDE_CI_UPPER: String, // OK
  AGE_ADJUSTED_RATE: String, //OK
  RACE_UI: String, // OK
  RACE_ORIGIN: String,
});

const NewAllCancer = model('newAllCancer', newAllCancerSchema);

export default NewAllCancer;

let obj = {
  AREA: 'Alabama',
  AGE_ADJUSTED_CI_LOWER: '359.6',
  AGE_ADJUSTED_CI_UPPER: '374.7',
  AGE_ADJUSTED_RATE: '367.1',
  COUNT: '9297',
  EVENT_TYPE: 'Incidence',
  POPULATION: '2293259',
  RACE: 'All Races',
  SEX: 'Female',
  SITE: 'All Cancer Sites Combined',
  YEAR: '1999',
  CRUDE_CI_LOWER: '397.2',
  CRUDE_CI_UPPER: '413.7',
  CRUDE_RATE: '405.4',
  Locationabbr: 'AL',
  'Race UI': 'All Races',
  'SITE UI': 'All Cancer',
};
