import { model, Schema, SchemaTypes } from 'mongoose';

const infoGraphicCancerIncidentSchema = new Schema({
  Year: String,
  Locationabbr: String,
  Locationdesc: String,
  Topic: String,
  Gender: String,
  ageGroup: String,
  ageLabel: String,
  Race: String,
  Count: String,
  CountInNumber: Number,
  Population: String,
  PopulationInNumber: Number,
  CrudeRate: String,
  CrudeRateInNumber: Number,
  diseaseLabelMale: String,
  diseaseLabelFemale: String,
});

const InfoGraphicCancerIncident = model(
  'infoGraphicCancerIncident',
  infoGraphicCancerIncidentSchema
);

export default InfoGraphicCancerIncident;
