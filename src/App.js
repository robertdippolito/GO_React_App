import React, { Component } from 'react';
import tripList from './GO_Schedule_List.json';
import calendar from './calendar.json';
import 'semantic-ui/dist/semantic.css';
import MyAutoSuggest from './AutoSuggest.js';
import stationList from './GO_Trip_List.json';

class App extends Component {

  findTrips = (originStation) => {

    var moment = require('moment');

    const availableStops = [];
    let serviceIds = '';
    let today = moment().format('YYYY-MM-DD');
    // let startStation = 'GU';
    let now = moment().format('HH:mm:ss');

    for(var i = 0; i < calendar.length; i++) {
      if(today === moment(calendar[i].service_id, 'YYYYMMDD').format('YYYY-MM-DD')) {
        serviceIds = calendar[i].service_id;
      }
    }

    for(var j = 0; j < tripList.length; j++) {
      if(tripList[j].trip_id.includes(serviceIds) && tripList[j].stop_id === originStation && tripList[j].stop_headsign.includes('Union')) {
        if(tripList[j].arrival_time > now) {
          availableStops.push(tripList[j].arrival_time);
        }
      }
    }

    const orderedArray = availableStops.sort();
    console.log('Next 3 Stops Include: ' + orderedArray[0] + ', ' + orderedArray[1] + ', and ' + orderedArray[2]);
  }

  convertNametoId = (station) => {
    console.log('The station is: '+ station);
    let startStation = '';
    for(var i = 0; i < stationList.length; i++) {
      if(stationList[i].stop_name === station) {
        console.log('The stop_id is: ' + stationList[i].stop_id);
        startStation = stationList[i].stop_id;
      }
    };
    console.log('The start station is: ' + startStation);
    this.findTrips(startStation);
  }

  getValue = (selectedStation) => {
    console.log('The selected station is: ' + selectedStation);
    this.convertNametoId(selectedStation);
  }

  render() {

    return (
      <div className='full height'>
        <div className='following bar'>
          <div className='ui container'>
            <div className='ui text menu'>
              <div className='item'>
                <h1 className='ui header'>GM2U</h1>
              </div>
              <div className='ui right dropdown item'>
                <h4 className='ui header'>About</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='masthead segment bg8'>
          <div className='container'>
            <div className='ui centered grid'>
              <div className='eight wide column'>
                <div className='ui raised very padded text container segment'>
                  <div className='content'>
                    <h2 className='ui center aligned icon header'>
                      <i className="paper plane outline icon"></i>
                    </h2>
                    <h1 className='ui huge centered header'>Where are you coming from?</h1>
                    <div className="ui divider"></div>
                    <form className='ui form'>
                      <div className='field'>
                        <MyAutoSuggest
                          id='find your station'
                          placeholder='i.e. Guildwood'
                          displayValue={ this.getValue }
                          />
                      </div>
                    </form>
                    <div className="ui small message">Get Me 2 Union is the easiest way to find out when your next GO Train can get you to Union.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
