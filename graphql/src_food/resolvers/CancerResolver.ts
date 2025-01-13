import { Resolver, Mutation, ID, Query, Arg } from 'type-graphql';

import InfoGraphicDeathModel from '../../../models/infoGraphicDeath';
import InfoGraphic from '../../../models/infoGraphic';
import InfoGraphicCancerIncidentModel from '../../../models/CancerIncident';
import InfoGraphicCancerDeathModel from '../../../models/CancerDeath';
import { connections } from 'mongoose';
import ProportionGenderData from '../schemas/ProportionGender';
import ProportionGenderString from '../schemas/ProportionGenderString';
import { getLocation } from 'graphql';
import getStateAbbreviation from '../../../utils/stateAndAbbreviations';

let race = [
  'American Indian or Alaska Native', //other
  'Asian or Pacific Islander', // asian
  'Black or African American', //black
  'Hispanic',
  'Other Races and Unknown combined', // other
  'White',
];

let maleDiseasesForCancer = [
  'Bladder', // include
  'Brain', // include
  'Colorectal', // include
  'Esophagus', // include
  'Gallbladder',
  'Kidney',
  'Leukemias', // include
  'Liver', // include
  'Lung', // include
  'Lymphoma', // include
  'Myeloma',
  'Oral',
  'Pancreas', // include
  'Prostate', // include
  'Skin',
  'Stomach',
  'Throat',
  'Thyroid',
];

let selectedMaleDisesasesForCancer = [
  'Bladder', // include
  'Brain', // include
  'Colorectal', // include
  'Esophagus', // include
  'Leukemias', // include
  'Liver', // include
  'Lung', // include
  'Lymphoma', // include
  'Pancreas', // include
  'Prostate', // include
];

let femaleDiseasesForCancer = [
  'Bladder',
  'Brain', // include
  'Breast', // include
  'Cervix',
  'Colorectal', // include
  'Corpus', // include
  'Esophagus',
  'Gallbladder',
  'Kidney',
  'Leukemias', // include
  'Liver', // include
  'Lung', // include
  'Lymphoma', // include
  'Myeloma',
  'Oral',
  'Ovary', // include
  'Pancreas', // include
  'Skin',
  'Stomach',
  'Thyroid',
];

let selectedFemaleDisesasesForCancer = [
  'Brain', // include
  'Breast', // include
  'Cervix', // include
  'Colorectal', // include
  'Leukemias', // include
  'Liver', // include
  'Lung', // include
  'Lymphoma', // include
  'Ovary', // include
  'Pancreas', // include
];

let maleDisease = [
  'Brain',
  'Breast',
  'Colorectal', // include
  'Esophagus',
  'Gallbladder',
  'Kidney', // include
  'Larynx',
  'Leukemias', // include
  'Liver',
  'Lung', // include
  'Melanoma of the Skin', // include
  'Myeloma',
  'Non-Hodgkin Lymphoma', // include
  'Oral Cavity and Pharynx', // include
  'Pancreas', // include
  'Prostate', // include
  'Stomach',
  'Thyroid',
  'Urinary Bladder', //include
];

let selectedMaleDiseases = [
  'Colorectal', // include
  'Kidney', // include
  'Leukemias', // include
  'Lung', // include
  'Skin',
  'Lymphoma',
  'Oral',
  'Pancreas',
  'Prostate', // include
  'Bladder',
];

let femaleDisease = [
  'Brain',
  'Breast', // include
  'Cervix',
  'Colorectal', // include
  'Corpus Uteri',
  'Esophagus',
  'Gallbladder',
  'Kidney', //include
  'Larynx',
  'Leukemias', //include
  'Liver',
  'Lung', // include
  'Melanoma of the Skin', // include
  'Myeloma',
  'Non-Hodgkin Lymphoma', //include
  'Oral Cavity and Pharynx',
  'Ovary',
  'Pancreas', //include
  'Stomach',
  'Thyroid', //include
  'Urinary Bladder', //include
];

let selectedFemaleDiseases = [
  'Breast', // include
  'Colorectal', // include
  'Kidney', //include
  'Leukemias', //include
  'Lung', // include
  'Melanoma of the Skin', // include Skin
  'Non-Hodgkin Lymphoma', //include Lymphoma
  'Oral Cavity and Pharynx', // Oral
  'Pancreas', //include
  'Thyroid', //include
  'Urinary Bladder', //include Cervix
];

let age = [
  '20-24', // done
  '30-39', // done
  '40-44',
  '40-49',
  '45-49', // done
  '50-54',
  '50-59',
  '55-59', // done
  '60-64',
  '60-69',
  '65-69',
  '70-74',
  '70-79',
  '75-79',
  '80+',
  '80-84',
  '85+',
];

@Resolver()
export default class CancerResolver {
  @Query(() => String)
  async badhon() {
    await InfoGraphicCancerDeathModel.updateMany(
      {
        Gender: 'Male',
        Topic: {
          $nin: selectedMaleDisesasesForCancer,
        },
      },
      {
        diseaseLabelMale: 'Other',
      }
    );

    await InfoGraphicCancerDeathModel.updateMany(
      {
        Gender: 'Female',
        Topic: {
          $nin: selectedFemaleDisesasesForCancer,
        },
      },
      {
        diseaseLabelFemale: 'Other',
      }
    );

    return 'done';
  }

  @Query(() => [String])
  async changeSystemInfoAge() {
    await InfoGraphicCancerDeathModel.updateMany(
      {
        ageGroup: '20-24',
      },
      {
        ageLabel: '20-29',
      }
    );

    await InfoGraphicCancerDeathModel.updateMany(
      {
        ageGroup: {
          $in: ['40-44', '40-49', '45-49'],
        },
      },
      {
        ageLabel: '40-49',
      }
    );

    await InfoGraphicCancerDeathModel.updateMany(
      {
        ageGroup: {
          $in: ['50-54', '50-59', '55-59'],
        },
      },
      {
        ageLabel: '50-59',
      }
    );

    await InfoGraphicCancerDeathModel.updateMany(
      {
        ageGroup: {
          $in: ['60-64', '60-69', '65-69'],
        },
      },
      {
        ageLabel: '60-69',
      }
    );

    await InfoGraphicCancerDeathModel.updateMany(
      {
        ageGroup: {
          $in: ['70-74', '70-79', '75-79'],
        },
      },
      {
        ageLabel: '70-79',
      }
    );

    await InfoGraphicCancerDeathModel.updateMany(
      {
        ageGroup: {
          $in: ['80-84', '85+', '80+'],
        },
      },
      {
        ageLabel: '80+',
      }
    );

    return ['done'];
  }

  @Query(() => ProportionGenderData)
  async getProportionMatrix(
    @Arg('year', { nullable: true }) year: String,
    @Arg('state', { nullable: true }) state: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    let maleData: any;
    let femaleData: any;
    let obj: any = {};

    if (year) {
      obj.Year = year;
    }

    if (state) {
      obj.Locationabbr = state;
    }

    if (race) {
      obj.Race = race;
    }

    if (age) {
      obj.ageLabel = age;
    }

    let objMale = {
      ...obj,
      Gender: 'Male',
    };

    let objFemale = {
      ...obj,
      Gender: 'Female',
    };

    if (dataSet === 'Incidence') {
      maleData = await this.getProportionByGender(objMale, true);

      femaleData = await this.getProportionByGender(objFemale, true);
    } else {
      maleData = await this.getProportionByGender(objMale, false);

      femaleData = await this.getProportionByGender(objFemale, false);
    }

    return {
      maleData,
      femaleData,
    };
  }

  @Query(() => ProportionGenderData)
  async getCancerTypes(
    @Arg('year', { nullable: true }) year: String,
    @Arg('state', { nullable: true }) state: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    let maleData: any;
    let femaleData: any;
    let obj: any = {};

    if (year) {
      obj.Year = year;
    }

    if (state) {
      obj.Locationabbr = state;
    }

    if (race) {
      obj.Race = race;
    }

    if (age) {
      obj.ageLabel = age;
    }

    let objMale = {
      ...obj,
      Gender: 'Male',
    };

    let objFemale = {
      ...obj,
      Gender: 'Female',
    };

    console.log('Female', objFemale);

    if (dataSet === 'Incidence') {
      maleData = await this.getCancerTypesByGender(objMale, true, true);

      femaleData = await this.getCancerTypesByGender(objFemale, false, true);
    } else {
      maleData = await this.getCancerTypesByGender(objMale, true, false);

      femaleData = await this.getCancerTypesByGender(objFemale, false, false);
    }

    console.log('maleData', femaleData);

    return {
      maleData,
      femaleData,
    };
  }

  @Query(() => ProportionGenderData)
  async getYearBasedAggregationForCancer(
    @Arg('state', { nullable: true }) state: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('dataSet', { nullable: true }) dataSet: String,
    @Arg('maleDisease', { nullable: true }) maleDisease: String,
    @Arg('femaleDisease', { nullable: true }) femaleDisease: String
  ) {
    let maleData: any;
    let femaleData: any;
    let obj: any = {};

    if (state) {
      obj.Locationabbr = state;
    }

    if (race) {
      obj.Race = race;
    }

    if (age) {
      obj.Label = age;
    }

    let objMale = {
      ...obj,
      Gender: 'Male',
    };

    if (maleDisease) {
      objMale.diseaseLabelMale = maleDisease;
    } else {
      objMale.diseaseLabelMale = 'Colorectal';
    }

    let objFemale = {
      ...obj,
      Gender: 'Female',
    };

    if (femaleDisease) {
      objFemale.diseaseLabelFemale = femaleDisease;
    } else {
      objFemale.diseaseLabelFemale = 'Breast';
    }

    if (dataSet === 'Incidence') {
      maleData = await this.getYearData(objMale, true);

      femaleData = await this.getYearData(objFemale, true);
    } else {
      maleData = await this.getYearData(objMale, false);

      femaleData = await this.getYearData(objFemale, false);
    }

    return {
      maleData,
      femaleData,
    };
  }

  @Query(() => ProportionGenderData)
  async getRaceData(
    @Arg('year', { nullable: true }) year: String,
    @Arg('state', { nullable: true }) state: String,
    @Arg('maleDisease', { nullable: true }) maleDisease: String,
    @Arg('femaleDisease', { nullable: true }) femaleDisease: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    let maleData: any;
    let femaleData: any;

    let obj: any = {};

    if (year) {
      obj.Year = year;
    }

    if (state) {
      obj.Locationabbr = state;
    }

    if (age) {
      obj.ageLabel = age;
    }

    let objMale = {
      ...obj,
      Gender: 'Male',
    };

    if (maleDisease) {
      objMale.diseaseLabelMale = maleDisease;
    } else {
      objMale.diseaseLabelMale = 'Colorectal';
    }

    let objFemale = {
      ...obj,
      Gender: 'Female',
    };

    if (femaleDisease) {
      objFemale.diseaseLabelFemale = femaleDisease;
    } else {
      objFemale.diseaseLabelFemale = 'Breast';
    }
    if (dataSet === 'Incidence') {
      maleData = await this.getRaceDataByGender(objMale, true, true);

      femaleData = await this.getRaceDataByGender(objFemale, false, true);
    } else {
      maleData = await this.getRaceDataByGender(objMale, true, false);

      femaleData = await this.getRaceDataByGender(objFemale, false, false);
    }

    return {
      maleData,
      femaleData,
    };
  }

  @Query(() => ProportionGenderData)
  async getAgeData(
    @Arg('year', { nullable: true }) year: String,
    @Arg('state', { nullable: true }) state: String,
    @Arg('maleDisease', { nullable: true }) maleDisease: String,
    @Arg('femaleDisease', { nullable: true }) femaleDisease: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    let maleData: any;
    let femaleData: any;
    let obj: any = {};

    if (year) {
      obj.Year = year;
    }

    if (state) {
      obj.Locationabbr = state;
    }

    if (race) {
      obj.Race = race;
    }

    let objMale = {
      ...obj,
      Gender: 'Male',
    };

    if (maleDisease) {
      objMale.diseaseLabelMale = maleDisease;
    } else {
      objMale.diseaseLabelMale = 'Colorectal';
    }

    let objFemale = {
      ...obj,
      Gender: 'Female',
    };

    if (femaleDisease) {
      objFemale.diseaseLabelFemale = femaleDisease;
    } else {
      objFemale.diseaseLabelFemale = 'Breast';
    }

    if (dataSet === 'Incidence') {
      maleData = await this.getAgeDataByGender(objMale, true, true);

      femaleData = await this.getAgeDataByGender(objFemale, false, true);
    } else {
      maleData = await this.getAgeDataByGender(objMale, true, false);

      femaleData = await this.getAgeDataByGender(objFemale, false, false);
    }

    return {
      maleData,
      femaleData,
    };
  }

  @Query(() => ProportionGenderString)
  async getStateDataForCancer(
    @Arg('year', { nullable: true }) year: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('maleDisease', { nullable: true }) maleDisease: String,
    @Arg('femaleDisease', { nullable: true }) femaleDisease: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    let maleData: any;
    let femaleData: any;
    let obj: any = {};

    if (year) {
      obj.Year = year;
    }

    if (race) {
      obj.Race = race;
    }

    if (age) {
      obj.ageLabel = age;
    }

    let objMale = {
      ...obj,
      Gender: 'Male',
    };

    if (maleDisease) {
      objMale.diseaseLabelMale = maleDisease;
    } else {
      objMale.diseaseLabelMale = 'Colorectal';
    }

    let objFemale = {
      ...obj,
      Gender: 'Female',
    };

    if (maleDisease) {
      objFemale.diseaseLabelFemale = femaleDisease;
    } else {
      objFemale.diseaseLabelFemale = 'Breast';
    }

    console.log(objFemale);

    if (dataSet === 'Incidence') {
      maleData = await this.getStateDataByGender(objMale, true, true);

      femaleData = await this.getStateDataByGender(objFemale, false, true);
    } else {
      maleData = await this.getStateDataByGender(objMale, true, false);

      femaleData = await this.getStateDataByGender(objFemale, false, false);
    }

    return {
      maleData,
      femaleData,
    };
  }

  async getYearData(obj: any, isIncident: boolean) {
    let model = InfoGraphicCancerIncidentModel;

    if (!isIncident) {
      model = InfoGraphicCancerDeathModel;
    }

    console.log(model);
    console.log(obj);

    let data: any = await model.aggregate([
      {
        $match: obj,
      },
      {
        $group: {
          _id: '$Year',
          totalPopulation: { $sum: '$PopulationInNumber' },
          totalCount: { $sum: '$CountInNumber' },
          totalCrudeRate: { $sum: '$CrudeRateInNumber' },
          numerator: {
            $sum: {
              $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'],
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          totalPopulation: '$totalPopulation',
          totalCount: '$totalCount',
          totalCrudeRate: '$totalCrudeRate',
          weightedAverage: {
            $divide: ['$numerator', '$totalPopulation'],
          },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    if (data.length === 0) {
      return [];
    }

    let total = data.reduce((acc: any, d: any) => {
      acc += d.totalCount;
      return acc;
    }, 0);

    for (let i = 0; i < data.length; i++) {
      let percentage = (100 * data[i].totalCount) / total;
      data[i].percentage = percentage;
    }

    return data;
  }

  async getAgeDataByGender(obj: any, male: boolean, isIncident: boolean) {
    let model = InfoGraphicCancerIncidentModel;

    if (!isIncident) {
      model = InfoGraphicCancerDeathModel;
    }

    let data: any = await model.aggregate([
      {
        $match: obj,
      },
      {
        $unwind: '$ageLabel',
      },
      {
        $group: {
          _id: '$ageLabel',
          totalPopulation: { $sum: '$PopulationInNumber' },
          totalCount: { $sum: '$CountInNumber' },
          totalCrudeRate: { $sum: '$CrudeRateInNumber' },
          numerator: {
            $sum: {
              $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'],
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          totalPopulation: '$totalPopulation',
          totalCount: '$totalCount',
          totalCrudeRate: '$totalCrudeRate',
          weightedAverage: { $divide: ['$numerator', '$totalPopulation'] },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    if (data.length === 0) {
      return [];
    }

    let total = data.reduce((acc: any, d: any) => {
      acc += d.totalCount;
      return acc;
    }, 0);

    for (let i = 0; i < data.length; i++) {
      let percentage = (100 * data[i].totalCount) / total;
      data[i].percentage = percentage;
    }

    return data;
  }

  async getStateDataByGender(obj: any, isMale: boolean, isIncident: boolean) {
    let model = InfoGraphicCancerIncidentModel;

    if (!isIncident) {
      model = InfoGraphicCancerDeathModel;
    }

    console.log(obj);

    let data: any = await model.aggregate([
      {
        $match: obj,
      },
      {
        $unwind: '$Locationabbr',
      },
      {
        $group: {
          _id: '$Locationabbr',
          fullForm: { $first: '$Locationdesc' },
          totalPopulation: { $sum: '$PopulationInNumber' },
          totalCount: { $sum: '$CountInNumber' },
          totalCrudeRate: { $sum: '$CrudeRateInNumber' },
          numerator: {
            $sum: {
              $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'],
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          fullForm: '$fullForm',
          totalPopulation: '$totalPopulation',
          totalCount: '$totalCount',
          totalCrudeRate: '$totalCrudeRate',
          weightedAverage: { $divide: ['$numerator', '$totalPopulation'] },
        },
      },
      {
        $sort: {
          sort: 1,
        },
      },
    ]);

    let total = data.reduce((acc: any, d: any) => {
      acc += d.totalCount;
      return acc;
    }, 0);

    for (let i = 0; i < data.length; i++) {
      let percentage = (100 * data[i].totalCount) / total;
      data[i].percentage = percentage;
    }

    if (data.length === 0 || data.length < 5) {
      return JSON.stringify({});
    }

    let forMatedData = data;

    let returnObj: any = {};

    let sortedArray = forMatedData.sort(
      (data1: any, data2: any) => data1.percentage - data2.percentage
    );

    let length = sortedArray.length;

    let t25 = Math.floor((25 / 100) * (length + 1));
    let t50 = Math.floor((50 / 100) * (length + 1));
    let t75 = Math.floor((75 / 100) * (length + 1));

    let lowest = sortedArray[0];
    let highest = sortedArray[sortedArray.length - 1];

    for (let i = 1; i < sortedArray.length - 1; i++) {
      returnObj[sortedArray[i]._id] = sortedArray[i];
      if (sortedArray[t75].percentage < sortedArray[i].percentage) {
        returnObj[sortedArray[i]._id].quartile = 4;
      } else if (
        sortedArray[t50].percentage < sortedArray[i].percentage &&
        sortedArray[t75].percentage <= sortedArray[i].percentage
      ) {
        returnObj[sortedArray[i]._id].quartile = 3;
      } else if (
        sortedArray[t25].percentage < sortedArray[i].percentage &&
        sortedArray[t50].percentage <= sortedArray[i].percentage
      ) {
        returnObj[sortedArray[i]._id].quartile = 2;
      } else {
        returnObj[sortedArray[i]._id].quartile = 1;
      }
    }

    let returnData = {
      quartile: {
        0: lowest.percentage,
        25: sortedArray[t25].percentage,
        50: sortedArray[t50].percentage,
        75: sortedArray[t75].percentage,
        100: highest.percentage,
      },
      data: returnObj,
    };

    return JSON.stringify(returnData);
  }

  async getRaceDataByGender(obj: any, male: boolean, isIncident: boolean) {
    let model: any = InfoGraphicCancerIncidentModel;

    if (!isIncident) {
      model = InfoGraphicCancerDeathModel;

      console.log(obj);
    }

    let data: any = await model.aggregate([
      {
        $match: obj,
      },
      {
        $unwind: '$Race',
      },
      {
        $group: {
          _id: '$Race',
          totalPopulation: { $sum: '$PopulationInNumber' },
          totalCount: { $sum: '$CountInNumber' },
          totalCrudeRate: { $sum: '$CrudeRateInNumber' },
          numerator: {
            $sum: {
              $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'],
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          totalPopulation: '$totalPopulation',
          totalCount: '$totalCount',
          totalCrudeRate: '$totalCrudeRate',
          weightedAverage: { $divide: ['$numerator', '$totalPopulation'] },
        },
      },
      {
        $sort: {
          sort: 1,
        },
      },
    ]);

    if (data.length === 0) {
      return [];
    }

    let total = data.reduce((acc: any, d: any) => {
      acc += d.totalCount;
      return acc;
    }, 0);

    for (let i = 0; i < data.length; i++) {
      let percentage = (100 * data[i].totalCount) / total;
      data[i].percentage = percentage;
    }

    return data;
  }

  async getProportionByGender(obj: any, isIncident: boolean) {
    let model = InfoGraphicCancerIncidentModel;

    if (!isIncident) {
      model = InfoGraphicCancerDeathModel;
    }

    let unwindValue = '';

    if (obj.Gender === 'Male') {
      unwindValue = '$diseaseLabelMale';
    } else {
      unwindValue = '$diseaseLabelFemale';
    }

    let maleData: any = await model.aggregate([
      {
        $match: obj,
      },
      {
        $unwind: unwindValue,
      },
      {
        $group: {
          _id: unwindValue,
          totalPopulation: { $sum: '$PopulationInNumber' },
          totalCount: { $sum: '$CountInNumber' },
          totalCrudeRate: { $sum: '$CrudeRateInNumber' },
          numerator: {
            $sum: {
              $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'],
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          totalPopulation: '$totalPopulation',
          totalCount: '$totalCount',
          totalCrudeRate: '$totalCrudeRate',
          weightedAverage: { $divide: ['$numerator', '$totalPopulation'] },
        },
      },
    ]);

    if (maleData.length === 0) {
      return [];
    }

    let maleTotal = maleData.reduce((acc: any, d: any) => {
      acc += d.totalCount;
      return acc;
    }, 0);

    for (let i = 0; i < maleData.length; i++) {
      let percentage = (100 * maleData[i].totalCount) / maleTotal;

      maleData[i].percentage = percentage;
    }

    return maleData;
  }

  async getCancerTypesByGender(obj: any, male: boolean, isIncident: boolean) {
    let model = InfoGraphicCancerIncidentModel;

    if (!isIncident) {
      model = InfoGraphicCancerDeathModel;
    }

    let unwindValue = '';

    if (obj.Gender === 'Male') {
      unwindValue = '$diseaseLabelMale';
    } else {
      unwindValue = '$diseaseLabelFemale';
    }

    let data: any = await model.aggregate([
      {
        $match: obj,
      },
      {
        $unwind: '$Topic',
      },
      {
        $group: {
          _id: '$Topic',
          totalPopulation: { $sum: '$PopulationInNumber' },
          totalCount: { $sum: '$CountInNumber' },
          totalCrudeRate: { $sum: '$CrudeRateInNumber' },
          numerator: {
            $sum: {
              $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'],
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          totalPopulation: '$totalPopulation',
          totalCount: '$totalCount',
          totalCrudeRate: '$totalCrudeRate',
          weightedAverage: { $divide: ['$numerator', '$totalPopulation'] },
        },
      },
      {
        $sort: {
          weightedAverage: -1,
        },
      },
    ]);

    if (data.length === 0) {
      return [];
    }

    let total = data.reduce((acc: any, d: any) => {
      acc += d.totalCount;
      return acc;
    }, 0);

    let maleDisease: any[] = [];
    let femaleDisease: any[] = [];

    if (isIncident) {
      maleDisease = [
        'Colorectal', // include
        'Kidney', // include
        'Leukemias', // include
        'Lung', // include
        'Skin', // include
        'Lymphoma', // include
        'Oral', // include
        'Pancreas', // include
        'Prostate', // include
        'Bladder', //include
      ];

      femaleDisease = [
        'Breast', // include
        'Colorectal', // include
        'Kidney', //include
        'Leukemias', //include
        'Lung', // include
        'Skin', // include
        'Lymphoma', //include
        'Pancreas', //include
        'Thyroid', //include
        'Cervix', //include
      ];
    } else {
      maleDisease = [
        'Bladder', // include
        'Brain', // include
        'Colorectal', // include
        'Esophagus', // include
        'Leukemias', // include
        'Liver', // include
        'Lung', // include
        'Lymphoma', // include
        'Pancreas', // include
        'Prostate', // include
      ];

      femaleDisease = [
        'Brain', // include
        'Breast', // include
        'Cervix', // include
        'Colorectal', // include
        'Leukemias', // include
        'Liver', // include
        'Lung', // include
        'Lymphoma', // include
        'Ovary', // include
        'Pancreas', // include
      ];
    }

    for (let i = 0; i < data.length; i++) {
      if (male) {
        if (!maleDisease.includes(data[i]._id)) {
          data.splice(i, 1);
          i--;
          continue;
        }
      } else {
        if (!femaleDisease.includes(data[i]._id)) {
          data.splice(i, 1);
          i--;
          continue;
        }
      }

      let percentage = (100 * data[i].totalCount) / total;
      data[i].percentage = percentage;
    }

    data = data.sort((a: any, b: any) => a.percentage - b.percentage);

    console.log('----------------------------------------');
    if (obj.Gender === 'Female') {
      console.log(data);
    }

    return data;
  }
}
