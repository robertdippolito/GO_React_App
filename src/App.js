import React, { Component } from 'react';
import tripList from './GO_Schedule_List.json';

class App extends Component {

  render() {

    const guildWoodStops = [];
    const availableStops = [];

    var moment = require('moment');
    var now = moment().format('HH:mm:ss');
    console.log(now);

    console.log(tripList.length);
    for(var i=0; i<tripList.length; i++) {
      if(tripList[i].stop_id === 'GU') {
        if(tripList[i].stop_headsign.includes('Guildwood') && tripList[i].stop_headsign.includes('Union')){
          guildWoodStops.push(tripList[i].arrival_time);
        }
      }
    }

    for(var j=0; j<guildWoodStops.length; j++) {
      if(guildWoodStops[j] > now) {
        availableStops.push(guildWoodStops[j]);
      }
    }

    const orderedArray = availableStops.sort();
    console.log(orderedArray);
    console.log('Next 3 Stops: ' + orderedArray[0] + ' , ' + orderedArray[31] + ' , ' + orderedArray[61]);

    return (
      <div><h1>Hello World!</h1></div>
    );
  }
}

export default App;
