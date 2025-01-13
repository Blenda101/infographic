import { model, Schema, SchemaTypes } from 'mongoose';

const infoGraphicDeathSchema = new Schema({
  Condition: String, // done
  Topic: String, //done
  ICD_Sub_Chapter_Code: String, //done 
  ICD_Sub_Chapter: String, //done
  Locationdesc: String, //done
  Locationabbr: String, //done
  State_Code: String, //done
  Year: String, // done
  Year_Code: String, //done
  Ten_Year_Age_Groups: String, // done
  ageGroup: String, //done
  Gender: String,// done
  Race: String, //done
  Race_Code: String, // done
  Deaths: String, // done
  DeathsInNumber: Number,
  Population: String, // done
  PopulationInNumber: Number,
  Crude_Rate: String,// done
  CrudeRateInNumber: Number,
});

const InfoGraphicDeath = model('infoGraphicDeath', infoGraphicDeathSchema);

export default InfoGraphicDeath;
