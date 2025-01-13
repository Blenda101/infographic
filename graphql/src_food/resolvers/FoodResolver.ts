import { Resolver, Mutation, ID, Query, Arg } from 'type-graphql';

import csv from 'csvtojson';

import InfoGraphic from '../../../models/infoGraphic';
import OverAllModel from '../../../models/Overall';

import AppError from '../../../utils/AppError';

import fs from 'fs';
import FormatedData from '../schemas/FotmatedData';
import ReturnInfoData from '../schemas/ReturnInfoData';
import ClassScheduleModel from '../../../models/class';
import myClass from '../schemas/myClass';
import CompareData from '../schemas/Compare';
import InfoGraphicDeathModel from '../../../models/infoGraphicDeath';

//https://blending101-infographic.vercel.app/

@Resolver()
export default class FoodResolver {
  @Query(() => String)
  async csvConverter() {
    const csvFilePath = './temp/cancer.csv';
    const jsonArray = await csv().fromFile(csvFilePath);
    fs.writeFileSync('./temp/infoData3.json', JSON.stringify(jsonArray));
    return 'done';
  }

  @Query(() => String)
  async modifyData() {
    let allData = await InfoGraphic.find().skip(50000);

    for (let i = 0; i < allData.length; i++) {
      let sampleSizeInNumber;
      let dataValueInNumber;
      let actualDataValueInNumber;

      if (allData[i].Data_value === '') {
        sampleSizeInNumber = Number(allData[i].Sample_Size);
        dataValueInNumber = 0;
        actualDataValueInNumber = 0;
      } else if (allData[i].Sample_Size === '0') {
        if (allData[i].Data_value === '') {
          sampleSizeInNumber = 0;
          dataValueInNumber = 0;
          actualDataValueInNumber = 0;
        } else {
          sampleSizeInNumber = 0;
          dataValueInNumber = 0;
          actualDataValueInNumber = 0;
        }
      } else {
        sampleSizeInNumber = Number(allData[i].Sample_Size);
        dataValueInNumber = Number(allData[i].Data_value);
        actualDataValueInNumber =
          (dataValueInNumber / 100) * sampleSizeInNumber;
      }

      await InfoGraphic.findByIdAndUpdate(allData[i]._id, {
        Actual_Data_Value_Number: actualDataValueInNumber,
      });
    }

    return 'done';
  }

  // @Query(() => String)
  // async modifyData2() {
  //   let allData = await InfoGraphic.find();

  //   for (let i = 0; i < allData.length; i++) {
  //     let sampleSizeInNumber;
  //     let dataValueInNumber;
  //     let actualDataValueInNumber;
  //     let Category;
  //     if (allData[i].Data_value === '') {
  //       sampleSizeInNumber = Number(allData[i].Sample_Size);
  //       dataValueInNumber = 0;
  //       actualDataValueInNumber = 0;
  //     } else if (allData[i].Sample_Size === '0') {
  //       if (allData[i].Data_value === '') {
  //         sampleSizeInNumber = 0;
  //         dataValueInNumber = 0;
  //         actualDataValueInNumber = 0;
  //       } else {
  //         sampleSizeInNumber = 0;
  //         dataValueInNumber = 0;
  //         actualDataValueInNumber = 0;
  //       }
  //     } else {
  //       sampleSizeInNumber = Number(allData[i].Sample_Size);
  //       dataValueInNumber = Number(allData[i].Data_value);
  //       actualDataValueInNumber =
  //         (100 / dataValueInNumber) * sampleSizeInNumber;
  //     }

  //     if (allData[i].Break_Out_Category === 'Race/Ethnicity') {
  //       if (
  //         allData[i].Break_Out ===
  //           'Native Hawaiian or other Pacific Islander, non-Hispanic' ||
  //         allData[i].Break_Out ===
  //           'American Indian or Alaskan Native, non-Hispanic' ||
  //         allData[i].Break_Out === 'Multiracial, non-Hispanic' ||
  //         allData[i].Break_Out === 'Other, non-Hispanic'
  //       ) {
  //         Category = 'Other';
  //       } else if (allData[i].Break_Out === 'Hispanic') {
  //         Category = 'Hispanic';
  //       } else if (allData[i].Break_Out === 'White, non-Hispanic') {
  //         Category = 'White';
  //       } else if (allData[i].Break_Out === 'Black, non-Hispanic') {
  //         Category = 'Black';
  //       } else if (allData[i].Break_Out === 'Asian, non-Hispanic') {
  //         Category = 'Asian';
  //       }
  //     } else {
  //       Category = allData[i].Break_Out;
  //     }

  //     await InfoGraphic.findByIdAndUpdate(allData[i]._id, {
  //       Sample_Size_Number: sampleSizeInNumber,
  //       Data_value_Number: dataValueInNumber,
  //       Actual_Data_Value_Number: actualDataValueInNumber,
  //       Category,
  //     });

  //     if (i % 1000 === 0) {
  //       console.log(i);
  //     }
  //   }

  //   return 'done';
  // }

  @Query(() => String)
  async modifyDataOverall() {
    await OverAllModel.deleteMany({});

    let allData: any = await InfoGraphic.find({
      Break_Out_Category: 'Overall',
    });

    for (let i = 0; i < allData.length; i++) {
      let data = {
        Year: allData[i].Year,
        Locationabbr: allData[i].Locationabbr,
        Locationdesc: allData[i].Locationdesc,
        Class: allData[i].Class,
        Topic: allData[i].Topic,
        Break_Out: allData[i].Break_Out,
        Break_Out_Category: allData[i].Break_Out_Category,
        Category: allData[i].Category,
        Sample_Size: allData[i].Sample_Size,
        Sample_Size_Number: allData[i].Sample_Size_Number,
        Data_value: allData[i].Data_value,
        Data_value_Number: allData[i].Data_value_Number,
        Actual_Data_Value_Number: allData[i].Actual_Data_Value_Number,
        Confidence_limit_Low: allData[i].Confidence_limit_Low,
        Confidence_limit_High: allData[i].Confidence_limit_High,
        Data_value_unit: allData[i].Data_value_unit,
      };
      await OverAllModel.create(data);
    }

    return 'done';
  }

  @Query(() => String)
  async storeData() {
    const data: any = JSON.parse(
      fs.readFileSync('./temp/infoData3.json', 'utf-8')
    );

    console.log(data[0]);

    // for (let i = 0; i < data.length; i++) {
    //   await InfoGraphic.create({
    //     Condition: data[i].Condition,
    //     ICD_Sub_Chapter_Code: data[i]['ICD Sub-Chapter Code'],
    //     State: data[i].State,
    //     State_Code: data[i]['State Code'],
    //     Year: data[i].Year,
    //     Year_Code: data[i]['Year Code'],
    //     Ten_Year_Age_Groups: data[i]['Ten-Year Age Groups'],
    //     Ten_Year_Age_Groups_Code: data[i]['Ten-Year Age Groups Code'],
    //     Gender: data[i].Gender,
    //     Race: data[i].Race,
    //     Race_Code: data[i]['Race Code'],
    //     Deaths: data[i].Deaths,
    //     Population: data[i].Population,
    //     Crude_Rate: data[i]['Crude Rate'],
    //     Crude_Rate_Lower_95percent_Confidence_Interval:
    //       data[i]['Crude Rate Lower 95% Confidence Interval'],
    //     Crude_Rate_Upper_95percent_Confidence_Interval:
    //       data[i]['Crude Rate Upper 95% Confidence Interval'],
    //     Percentage_of_Total_Deaths: data[i]['% of Total Deaths'],
    //   });
    // }

    return 'done';
  }

  @Query(() => ReturnInfoData)
  async showInfoData(
    @Arg('year', { nullable: true }) year: String,
    @Arg('state', { nullable: true }) state: String,
    @Arg('disease', { nullable: true }) disease: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('sex', { nullable: true }) sex: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    if (dataSet === 'incidence' || !dataSet) {
      let obj: any = {};

      if (year) {
        obj.Year = year;
      } else {
        obj.Year = '2021';
      }

      if (state) {
        obj.Locationabbr = state;
      }

      let diseaseObj = {
        ...obj,
      };

      if (race) {
        diseaseObj.Category = race;
      }

      if (age) {
        diseaseObj.Category = age;
      }

      if (sex) {
        diseaseObj.Category = sex;
      }

      let model: any;

      if (diseaseObj.Category) {
        model = InfoGraphic;
      } else {
        model = OverAllModel;
      }

      let data = await model.aggregate([
        {
          $match: diseaseObj,
        },
        {
          $unwind: '$Topic',
        },
        {
          $group: {
            _id: '$Topic',
            sampleSize: { $sum: '$Sample_Size_Number' },
            value: { $sum: '$Actual_Data_Value_Number' },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      let forMatedData1 = data.map((d: any) => {
        return {
          _id: d._id,
          sampleSize: d.sampleSize,
          value: d.value,
          percentage:
            (+d.value / +d.sampleSize) * 100
              ? (+d.value / +d.sampleSize) * 100
              : 0,
        };
      });

      let raceObj = {
        ...obj,
        Break_Out_Category: 'Race/Ethnicity',
      };

      if (disease) {
        raceObj.Topic = disease;
      } else {
        raceObj.Topic = 'Arthritis';
      }

      let data2 = await InfoGraphic.aggregate([
        {
          $match: raceObj,
        },
        {
          $unwind: '$Category',
        },
        {
          $group: {
            _id: '$Category',
            sampleSize: { $sum: '$Sample_Size_Number' },
            value: { $sum: '$Actual_Data_Value_Number' },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      let forMatedData2 = data2.map((d: any) => {
        return {
          _id: d._id,
          sampleSize: d.sampleSize,
          value: d.value,
          percentage:
            (+d.value / +d.sampleSize) * 100
              ? (+d.value / +d.sampleSize) * 100
              : 0,
        };
      });

      let ageObj = {
        ...obj,
        Break_Out_Category: 'Age Group',
      };

      if (disease) {
        ageObj.Topic = disease;
      } else {
        ageObj.Topic = 'Arthritis';
      }

      let data3 = await InfoGraphic.aggregate([
        {
          $match: ageObj,
        },
        {
          $unwind: '$Break_Out',
        },
        {
          $group: {
            _id: '$Break_Out',
            sampleSize: { $sum: '$Sample_Size_Number' },
            value: { $sum: '$Actual_Data_Value_Number' },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      let forMatedData3 = data3.map((d: any) => {
        return {
          _id: d._id,
          sampleSize: d.sampleSize,
          value: d.value,
          percentage:
            (+d.value / +d.sampleSize) * 100
              ? (+d.value / +d.sampleSize) * 100
              : 0,
        };
      });

      let genderObj = {
        ...obj,
        Break_Out_Category: 'Gender',
      };

      if (disease) {
        genderObj.Topic = disease;
      } else {
        genderObj.Topic = 'Arthritis';
      }

      let data4 = await InfoGraphic.aggregate([
        {
          $match: genderObj,
        },
        {
          $unwind: '$Break_Out',
        },
        {
          $group: {
            _id: '$Break_Out',
            sampleSize: { $sum: '$Sample_Size_Number' },
            value: { $sum: '$Actual_Data_Value_Number' },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      let forMatedData4 = data4.map((d: any) => {
        return {
          _id: d._id,
          sampleSize: d.sampleSize,
          value: d.value,
          percentage:
            (+d.value / +d.sampleSize) * 100
              ? (+d.value / +d.sampleSize) * 100
              : 0,
        };
      });

      return {
        diseases: forMatedData1,
        race: forMatedData2,
        age: forMatedData3,
        sex: forMatedData4,
      };
    } else {
      let obj: any = {};

      if (year) {
        obj.Year = year;
      } else {
        obj.Year = '2020';
      }

      if (state) {
        obj.Locationabbr = state;
      }

      if (race) {
        obj.Race = race;
      }

      if (age) {
        obj.ageGroup = age;
      }

      if (sex) {
        obj.Gender = sex;
      }

      console.log(obj);

      let data = await InfoGraphicDeathModel.aggregate([
        {
          $match: obj,
        },
        {
          $unwind: '$Topic',
        },
        {
          $group: {
            _id: '$Topic',
            sampleSize: { $sum: '$PopulationInNumber' },
            value: { $sum: '$DeathsInNumber' },
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
            sampleSize: '$sampleSize',
            value: '$value',
            totalCrudeRate: '$totalCrudeRate',
            percentage: { $divide: ['$numerator', '$sampleSize'] },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      if (disease) {
        obj.Topic = disease;
      }

      // console.log(data[0]);

      // let total1 = data.reduce((acc: any, d: any) => {
      //   acc += d.sampleSize;
      //   return acc;
      // }, 0);

      // let forMatedData1 = data.map((d: any) => {
      //   return {
      //     _id: d._id,
      //     sampleSize: d.sampleSize,
      //     value: d.value,
      //     percentage: (d.sampleSize / total1) * d.totalCrudeRate,
      //   };
      // });
      let forMatedData1 = data;

      let raceObj = { ...obj };

      if (race) {
        delete raceObj.Race;
      }

      console.log(raceObj);

      let data2 = await InfoGraphicDeathModel.aggregate([
        {
          $match: raceObj,
        },
        {
          $unwind: '$Race',
        },
        {
          $group: {
            _id: '$Race',
            sampleSize: { $sum: '$PopulationInNumber' },
            value: { $sum: '$DeathsInNumber' },
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
            sampleSize: '$sampleSize',
            value: '$value',
            totalCrudeRate: '$totalCrudeRate',
            percentage: { $divide: ['$numerator', '$sampleSize'] },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      let forMatedData2 = data2;

      let ageObj = { ...obj };

      if (age) {
        delete ageObj.ageGroup;
      }

      console.log(ageObj);

      let data3 = await InfoGraphicDeathModel.aggregate([
        {
          $match: ageObj,
        },
        {
          $unwind: '$ageGroup',
        },
        {
          $group: {
            _id: '$ageGroup',
            sampleSize: { $sum: '$PopulationInNumber' },
            value: { $sum: '$DeathsInNumber' },
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
            sampleSize: '$sampleSize',
            value: '$value',
            totalCrudeRate: '$totalCrudeRate',
            percentage: { $divide: ['$numerator', '$sampleSize'] },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      // let total3 = data3.reduce((acc: any, d: any) => {
      //   acc += d.sampleSize;
      //   return acc;
      // }, 0);

      // let forMatedData3 = data3.map((d: any) => {
      //   return {
      //     _id: d._id,
      //     sampleSize: d.sampleSize,
      //     value: d.value,
      //     percentage: (d.sampleSize / total3) * d.totalCrudeRate,
      //   };
      // });

      let forMatedData3 = data3;

      let genderObj = { ...obj };

      if (genderObj.Gender) {
        delete genderObj.Gender;
      }

      console.log(genderObj);

      let data4 = await InfoGraphicDeathModel.aggregate([
        {
          $match: genderObj,
        },
        {
          $unwind: '$Gender',
        },
        {
          $group: {
            _id: '$Gender',
            sampleSize: { $sum: '$PopulationInNumber' },
            value: { $sum: '$DeathsInNumber' },
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
            sampleSize: '$sampleSize',
            value: '$value',
            totalCrudeRate: '$totalCrudeRate',
            percentage: { $divide: ['$numerator', '$sampleSize'] },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      // let total4 = data4.reduce((acc: any, d: any) => {
      //   acc += d.sampleSize;
      //   return acc;
      // }, 0);

      // let forMatedData4 = data4.map((d: any) => {
      //   return {
      //     _id: d._id,
      //     sampleSize: d.sampleSize,
      //     value: d.value,
      //     percentage: (d.sampleSize / total4) * d.totalCrudeRate,
      //   };
      // });

      let forMatedData4 = data4;

      return {
        diseases: forMatedData1,
        race: forMatedData2,
        age: forMatedData3,
        sex: forMatedData4,
      };
    }
  }

  @Query(() => [FormatedData])
  async yearBasedAggregation(
    @Arg('disease', { nullable: true }) disease: String,
    @Arg('state', { nullable: true }) state: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('sex', { nullable: true }) sex: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    if (dataSet === 'incidence' || !dataSet) {
      let obj: any = {};

      let allYearsData: any[] = [];

      if (disease) {
        obj.Topic = disease;
      } else {
        obj.Topic = 'Arthritis';
      }

      if (state) {
        obj.Locationabbr = state;
      }

      if (race || age || sex) {
        if (race) {
          obj.Category = race;
        } else if (age) {
          obj.Category = age;
        } else {
          obj.Category = sex;
        }

        // obj.Break_Out = {
        //   $ne: 'Overall',
        // }

        let data = await InfoGraphic.aggregate([
          {
            $match: obj,
          },
          {
            $unwind: '$Year',
          },
          {
            $group: {
              _id: '$Year',
              sampleSize: { $sum: '$Sample_Size_Number' },
              value: { $sum: '$Actual_Data_Value_Number' },
            },
          },
          {
            $sort: {
              _id: 1,
            },
          },
        ]);

        let forMatedData1 = data.map((d: any) => {
          return {
            _id: d._id,
            sampleSize: d.sampleSize,
            value: d.value,
            percentage:
              (+d.value / +d.sampleSize) * 100
                ? (+d.value / +d.sampleSize) * 100
                : 0,
          };
        });

        return forMatedData1;
      } else {
        let data = await OverAllModel.aggregate([
          {
            $match: obj,
          },
          {
            $unwind: '$Year',
          },
          {
            $group: {
              _id: '$Year',
              sampleSize: { $sum: '$Sample_Size_Number' },
              value: { $sum: '$Actual_Data_Value_Number' },
            },
          },
          {
            $sort: {
              _id: 1,
            },
          },
        ]);

        let forMatedData1 = data.map((d: any) => {
          return {
            _id: d._id,
            sampleSize: d.sampleSize,
            value: d.value,
            percentage:
              (+d.value / +d.sampleSize) * 100
                ? (+d.value / +d.sampleSize) * 100
                : 0,
          };
        });

        return forMatedData1;
      }
    } else {
      let obj: any = {};

      // let allYearsData: any[] = [];

      if (disease) {
        obj.Topic = disease;
      }

      if (state) {
        obj.Locationabbr = state;
      }

      if (race) {
        obj.Race = race;
      }

      if (age) {
        obj.ageGroup = age;
      }

      if (sex) {
        obj.Gender = sex;
      }

      if (Object.keys(obj).length === 0) {
        return [];
      }

      // obj.Break_Out = {
      //   $ne: 'Overall',
      // }

      let data = await InfoGraphicDeathModel.aggregate([
        {
          $match: obj,
        },
        {
          $unwind: '$Year',
        },
        {
          $group: {
            _id: '$Year',
            sampleSize: { $sum: '$PopulationInNumber' },
            value: { $sum: '$DeathsInNumber' },
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
            sampleSize: '$sampleSize',
            value: '$value',
            totalCrudeRate: '$totalCrudeRate',
            percentage: { $divide: ['$numerator', '$sampleSize'] },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      // let total1 = data.reduce((acc: any, d: any) => {
      //   acc += d.sampleSize;
      //   return acc;
      // }, 0);

      // let forMatedData1 = data.map((d: any) => {
      //   return {
      //     _id: d._id,
      //     sampleSize: d.sampleSize,
      //     value: d.value,
      //     percentage: (100 / total1) * d.sampleSize,
      //   };
      // });

      return data;
    }
  }

  @Query(() => [CompareData])
  async getCompareData(
    @Arg('disease', { nullable: true }) disease: String,
    @Arg('type') type: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('sex', { nullable: true }) sex: String,
    @Arg('state', { nullable: true }) state: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    if (dataSet === 'incidence' || !dataSet) {
      let obj: any = {
        Topic: { $ne: 'Vision' },
        Break_Out_Category: { $ne: 'Overall' },
      };

      if (state) {
        obj.Locationabbr = state;
      }

      let years = [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
      ];

      let formateData: any[] = [];
      let matchObj: any = {};

      if (type === 'disease') {
        matchObj = {
          ...obj,
        };

        if (race) {
          matchObj.Category = race;
        } else if (sex) {
          matchObj.Category = sex;
        } else if (age) {
          matchObj.Category = age;
        }

        for (let i = 0; i < years.length; i++) {
          matchObj.Year = years[i];

          let data = await InfoGraphic.aggregate([
            {
              $match: matchObj,
            },
            {
              $unwind: '$Topic',
            },
            {
              $group: {
                _id: '$Topic',
                sampleSize: { $sum: '$Sample_Size_Number' },
                value: { $sum: '$Actual_Data_Value_Number' },
              },
            },
            {
              $sort: {
                _id: 1,
              },
            },
          ]);

          let forMatedData = data.map((d: any) => {
            return {
              _id: d._id,
              sampleSize: d.sampleSize,
              value: d.value,
              percentage:
                (+d.value / +d.sampleSize) * 100
                  ? (+d.value / +d.sampleSize) * 100
                  : 0,
            };
          });

          formateData.push({
            year: years[i],
            fotmatedData: forMatedData,
          });
        }

        return formateData;
      } else if (type === 'sex') {
        if (!disease) {
          obj.Topic = 'Arthritis';
        } else {
          obj.Topic = disease;
        }
        matchObj = {
          ...obj,
          Break_Out_Category: 'Gender',
        };
      } else if (type === 'age') {
        if (!disease) {
          obj.Topic = 'Arthritis';
        } else {
          obj.Topic = disease;
        }
        matchObj = {
          ...obj,
          Break_Out_Category: 'Age Group',
        };
      } else if (type === 'race') {
        if (!disease) {
          obj.Topic = 'Arthritis';
        } else {
          obj.Topic = disease;
        }
        matchObj = {
          ...obj,
          Break_Out_Category: 'Race/Ethnicity',
        };

        for (let i = 0; i < years.length; i++) {
          matchObj.Year = years[i];

          let data = await InfoGraphic.aggregate([
            {
              $match: matchObj,
            },
            {
              $unwind: '$Category',
            },
            {
              $group: {
                _id: '$Category',
                sampleSize: { $sum: '$Sample_Size_Number' },
                value: { $sum: '$Actual_Data_Value_Number' },
              },
            },
            {
              $sort: {
                _id: 1,
              },
            },
          ]);

          let forMatedData = data.map((d: any) => {
            return {
              _id: d._id,
              sampleSize: d.sampleSize,
              value: d.value,
              percentage:
                (+d.value / +d.sampleSize) * 100
                  ? (+d.value / +d.sampleSize) * 100
                  : 0,
            };
          });

          formateData.push({
            year: years[i],
            fotmatedData: forMatedData,
          });
        }

        return formateData;
      }

      for (let i = 0; i < years.length; i++) {
        matchObj.Year = years[i];

        let data = await InfoGraphic.aggregate([
          {
            $match: matchObj,
          },
          {
            $unwind: '$Break_Out',
          },
          {
            $group: {
              _id: '$Break_Out',
              sampleSize: { $sum: '$Sample_Size_Number' },
              value: { $sum: '$Actual_Data_Value_Number' },
            },
          },
          {
            $sort: {
              _id: 1,
            },
          },
        ]);

        let forMatedData = data.map((d: any) => {
          return {
            _id: d._id,
            sampleSize: d.sampleSize,
            value: d.value,
            percentage:
              (+d.value / +d.sampleSize) * 100
                ? (+d.value / +d.sampleSize) * 100
                : 0,
          };
        });

        formateData.push({
          year: years[i],
          fotmatedData: forMatedData,
        });
      }

      return formateData;
    } else {
      let obj: any = {};
      let group: any = {
        sampleSize: { $sum: '$PopulationInNumber' },
        value: { $sum: '$DeathsInNumber' },
        numerator: {
          $sum: { $multiply: ['$CrudeRateInNumber', '$PopulationInNumber'] },
        },
      };

      if (state) {
        obj.Locationabbr = state;
      }

      if (race) {
        obj.Race = race;
      }

      if (age) {
        obj.ageGroup = age;
      }

      if (sex) {
        obj.Gender = sex;
      }

      let unwind = '';

      if (type === 'disease') {
        delete obj.disease;
        unwind = '$Topic';
        group._id = '$Topic';
      } else if (type === 'sex') {
        delete obj.Gender;
        unwind = '$Gender';
        group._id = '$Gender';
      } else if (type === 'age') {
        delete obj.ageGroup;
        unwind = '$ageGroup';
        group._id = '$ageGroup';
      } else if (type === 'race') {
        delete obj.Race;
        unwind = '$Race';
        group._id = '$Race';
      }

      let years = [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
      ];

      let formateData: any[] = [];

      // console.log(group);
      // console.log(obj);

      for (let i = 0; i < years.length; i++) {
        obj.Year = years[i];
        let data = await InfoGraphicDeathModel.aggregate([
          {
            $match: obj,
          },
          {
            $unwind: unwind,
          },
          {
            $group: group,
          },
          {
            $project: {
              _id: '$_id',
              sampleSize: '$sampleSize',
              value: '$value',
              totalCrudeRate: '$totalCrudeRate',
              percentage: { $divide: ['$numerator', '$sampleSize'] },
            },
          },
          {
            $sort: {
              _id: 1,
            },
          },
        ]);

        // let forMatedData = data.map((d: any) => {
        //   return {
        //     _id: d._id,
        //     sampleSize: d.sampleSize,
        //     value: d.value,
        //     percentage:
        //       (+d.value / +d.sampleSize) * 100
        //         ? (+d.value / +d.sampleSize) * 100
        //         : 0,
        //   };
        // });

        formateData.push({
          year: years[i],
          fotmatedData: data,
        });
      }

      return formateData;
    }
  }

  @Query(() => String)
  async getStateData(
    @Arg('year', { nullable: true }) year: String,
    @Arg('disease', { nullable: true }) disease: String,
    // @Arg('state', { nullable: true }) state: String,
    @Arg('race', { nullable: true }) race: String,
    @Arg('age', { nullable: true }) age: String,
    @Arg('sex', { nullable: true }) sex: String,
    @Arg('dataSet', { nullable: true }) dataSet: String
  ) {
    if (dataSet === 'incidence' || !dataSet) {
      let obj: any = {};

      if (year) {
        obj.Year = year;
      } else {
        obj.Year = '2021';
      }

      if (disease) {
        obj.Topic = disease;
      } else {
        obj.Topic = 'Arthritis';
      }

      if (race) {
        obj.Category = race;
      } else if (sex) {
        obj.Category = sex;
      } else if (age) {
        obj.Category = age;
      }

      let data = await InfoGraphic.aggregate([
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
            sampleSize: { $sum: '$Sample_Size_Number' },
            value: { $sum: '$Actual_Data_Value_Number' },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      let forMatedData = data.map((d: any) => {
        return {
          _id: d._id,
          sampleSize: d.sampleSize,
          value: d.value,
          fullForm: d.fullForm,
          percentage:
            (+d.value / +d.sampleSize) * 100
              ? (+d.value / +d.sampleSize) * 100
              : 0,
          prevalence: 0,
        };
      });

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

      for (let i = 0; i < sortedArray.length; i++) {
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
    } else {
      let obj: any = {};

      if (year) {
        obj.Year = year;
      } else {
        obj.Year = '2020';
      }

      if (disease) {
        obj.Topic = disease;
      }

      if (race) {
        obj.Race = race;
      }

      if (age) {
        obj.ageGroup = age;
      }

      if (sex) {
        obj.Gender = sex;
      }

      let data = await InfoGraphicDeathModel.aggregate([
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
            sampleSize: { $sum: '$PopulationInNumber' },
            value: { $sum: '$DeathsInNumber' },
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
            sampleSize: '$sampleSize',
            value: '$value',
            totalCrudeRate: '$totalCrudeRate',
            percentage: { $divide: ['$numerator', '$sampleSize'] },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

      // let forMatedData = data.map((d: any) => {
      //   return {
      //     _id: d._id,
      //     sampleSize: d.sampleSize,
      //     value: d.value,
      //     fullForm: d.fullForm,
      //     percentage:
      //       (+d.value / +d.sampleSize) * 100
      //         ? (+d.value / +d.sampleSize) * 100
      //         : 0,
      //     prevalence: 0,
      //   };
      // });

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

      for (let i = 0; i < sortedArray.length; i++) {
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
  }

  @Mutation(() => String)
  async addClasses() {
    let data1 = [
      {
        day: 'Tue',
        code: 'SE225',
        myCode: 'SWE426',
        time: '1:30',
        room: '612',
        name: 'Distributive Computing and Network Security',
        TI: 'NIR',
        sec: 'A',
      },
      {
        day: 'Tue',
        code: 'SE225',
        myCode: 'SWE426',
        time: '2:30',
        room: '712B',
        name: 'Distributive Computing and Network Security',
        TI: 'JNM',
        sec: 'B',
      },
      {
        day: 'Wed',
        code: 'SE225',
        myCode: 'SWE426',
        time: '1:30',
        room: '603',
        name: 'Distributive Computing and Network Security',
        TI: 'NIR',
        sec: 'A',
      },

      {
        day: 'Wed',
        code: 'SE225',
        myCode: 'SWE426',
        time: '12:30',
        room: '1017',
        name: 'Distributive Computing and Network Security',
        TI: 'JNM',
        sec: 'B',
      },
      {
        day: 'Tue',
        code: 'SE226',
        myCode: 'SWE426',
        time: '3:30',
        room: '609',
        name: 'Distributive Computing and Network Security',
        TI: 'JNM',
        sec: 'B',
        lab: true,
      },
      {
        day: 'Tue',
        code: 'SE226',
        myCode: 'SWE426',
        time: '11:30',
        room: '601',
        name: 'Distributive Computing and Network Security',
        TI: 'SA',
        sec: 'A',
        subSec: '1',
        lab: true,
      },
      {
        day: 'Wed',
        code: 'SE226',
        myCode: 'SWE426',
        time: '3:30',
        room: '616',
        name: 'Distributive Computing and Network Security',
        TI: 'SA',
        sec: 'A',
        subSec: '2',
        lab: true,
      },
      {
        day: 'Sat',
        code: 'SE331',
        myCode: 'SWE332',
        time: '8:30',
        room: '610',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'AKS',
        sec: 'A',
        subSec: '2',
      },
      {
        day: 'Sat',
        code: 'SE331',
        myCode: 'SWE332',
        time: '9:30',
        room: '610',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'AKS',
        sec: 'A',
        subSec: '2',
      },
      {
        day: 'Sun',
        code: 'SE331',
        myCode: 'SWE332',
        time: '8:30',
        room: '610',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'MRA',
        sec: 'A',
        subSec: '1',
      },
      {
        day: 'Sun',
        code: 'SE331',
        myCode: 'SWE332',
        time: '9:30',
        room: '610',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'MRA',
        sec: 'A',
        subSec: '1',
      },
      {
        day: 'Tue',
        code: 'SE331',
        myCode: 'SWE332',
        time: '12:30',
        room: '601',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'MRA',
        sec: 'A',
        subSec: '2',
      },
      {
        day: 'Tue',
        code: 'SE331',
        myCode: 'SWE332',
        time: '1:30',
        room: '601',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'MRA',
        sec: 'A',
        subSec: '2',
      },
      {
        day: 'Wed',
        code: 'SE331',
        myCode: 'SWE332',
        time: '9:30',
        room: '610',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'MSA',
        sec: 'A',
        subSec: '1',
      },
      {
        day: 'Wed',
        code: 'SE331',
        myCode: 'SWE332',
        time: '10:30',
        room: '610',
        name: 'Software Engineering Project-II (Web Programming)',
        TI: 'MSA',
        sec: 'A',
        subSec: '1',
      },
      {
        day: 'Sun',
        code: 'GE235',
        myCode: 'ACC124',
        time: '2:30',
        room: '710',
        name: 'Principles of Accounting',
        TI: 'MJM',
        sec: 'A',
      },
      {
        day: 'Sun',
        code: 'GE235',
        myCode: 'ACC124',
        time: '3:30',
        room: '710',
        name: 'Principles of Accounting',
        TI: 'MJM',
        sec: 'A',
      },
      {
        day: 'Sat',
        code: 'SE411',
        myCode: 'SWE212',
        time: '8:30',
        room: '603',
        name: 'Software Project Management',
        TI: 'AA',
        sec: 'A',
      },
      {
        day: 'Sat',
        code: 'SE411',
        myCode: 'SWE212',
        time: '9:30',
        room: '603',
        name: 'Software Project Management',
        TI: 'AA',
        sec: 'A',
      },
      {
        day: 'Sun',
        code: 'SE411',
        myCode: 'SWE212',
        time: '12:30',
        room: '704',
        name: 'Software Project Management',
        TI: 'MKS',
        sec: 'A',
      },
      {
        day: 'Thu',
        code: 'SE411',
        myCode: 'SWE212',
        time: '1:30',
        room: '603',
        name: 'Software Project Management',
        TI: 'MKS',
        sec: 'A',
      },
    ];

    await ClassScheduleModel.insertMany(data1);

    return 'done';
  }

  @Query(() => [myClass])
  async filterClasses(
    @Arg('day', { nullable: true }) day: String,
    @Arg('code', { nullable: true }) code: String,
    @Arg('time', { nullable: true }) time: String,
    @Arg('room', { nullable: true }) room: String,
    @Arg('name', { nullable: true }) name: String,
    @Arg('TI', { nullable: true }) TI: String,
    @Arg('sec', { nullable: true }) sec: String,
    @Arg('subSec', { nullable: true }) subSec: String,
    @Arg('lab', { nullable: true }) lab: Boolean
  ) {
    let obj: any = {};

    if (day) obj.day = day;
    if (code) obj.code = code;
    if (time) obj.time = time;
    if (room) obj.room = room;
    if (name) obj.name = name;
    if (TI) obj.TI = TI;
    if (sec) obj.sec = sec;
    if (subSec) obj.subSec = subSec;
    if (lab) obj.lab = lab;

    let data = await ClassScheduleModel.find(obj).sort({
      time: 1,
    });

    return data;
  }
}
