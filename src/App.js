import React, { Component } from 'react';
import tripList from './GO_Schedule_List.json';
import calendar from './calendar.json';

class App extends Component {

  render() {

    var moment = require('moment');

    const availableStops = [];
    let serviceIds = '';
    let today = moment().format('YYYY-MM-DD');
    let startStation = 'AJ';
    let now = moment().format('HH:mm:ss');

    for(var i = 0; i < calendar.length; i++) {
      if(today === moment(calendar[i].service_id, 'YYYYMMDD').format('YYYY-MM-DD')) {
        serviceIds = calendar[i].service_id;
      }
    }

    for(var j = 0; j < tripList.length; j++) {
      if(tripList[j].trip_id.includes(serviceIds) && tripList[j].stop_id === startStation && tripList[j].stop_headsign.includes('Union')) {
        if(tripList[j].arrival_time > now) {
          availableStops.push(tripList[j].arrival_time);
        }
      }
    }

    const orderedArray = availableStops.sort();
    console.log('Next 3 Stops Include: ' + orderedArray[0] + ', ' + orderedArray[1] + ', and ' + orderedArray[2]);

    // let convertedDay = moment(calendar[0].service_id, 'YYYYMMDD').format('YYYY-MM-DD');
    // let currentDay = moment().format('YYYY-MM-DD');

    // var now = moment().format('HH:mm:ss');

    // console.log(tripList.length);
    // for(var i=0; i<tripList.length; i++) {
    //   if(tripList[i].stop_id === 'GU') {
    //     if(tripList[i].stop_headsign.includes('Guildwood') && tripList[i].stop_headsign.includes('Union')){
    //       guildWoodStops.push(tripList[i].arrival_time);
    //     }
    //   }
    // }
    //
    // for(var j=0; j<guildWoodStops.length; j++) {
    //   if(guildWoodStops[j] > now) {
    //     availableStops.push(guildWoodStops[j]);
    //   }
    // }
    //
    // const orderedArray = availableStops.sort();
    // console.log(orderedArray);
    // console.log('Next 3 Stops: ' + orderedArray[0] + ' , ' + orderedArray[31] + ' , ' + orderedArray[61]);

    return (
      <div><h1>Hello World!</h1></div>
    );
  }
}

export default App;
