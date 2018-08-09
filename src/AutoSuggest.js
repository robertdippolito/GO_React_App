import React, { Component } from 'react';
import 'semantic-ui/dist/semantic.css';
import AutoSuggest from 'react-autosuggest';

const stations = [
  {
    name: 'Guildwood',
    shortName: 'GU',
    long: 100.00,
    lat: 100.00
  },
  {
    name: 'Ajax',
    shortName: 'AJ',
    long: 100.00,
    lat: 100.00
  },
  {
    name: 'gickering',
    shortName: 'PK',
    long: 100.00,
    lat: 100.00
  }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : stations.filter(station =>
    station.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className='ui list'>
    <div className='item'>
      {suggestion.name}
    </div>
  </div>
);

class myAutoSuggest extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {

    const { value, suggestions } = this.state;

// Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Select the closest station to you.',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default myAutoSuggest;
