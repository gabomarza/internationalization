import React from 'react';
import { FormattedDate } from 'react-intl';
import { FormattedRelative } from 'react-intl';
import { FormattedPlural } from 'react-intl';
import { FormattedNumber } from 'react-intl';
import { FormattedMessage } from 'react-intl';

export default class Job extends React.Component {

    getMillion(){
      return <FormattedMessage id="Million"/>;
    }
    getMillions(){
      return <FormattedMessage id="Millions"/>;
    }
    render() {
        return (
            <tr>
          <th scope="row">{this.props.offer.id}</th>
            <td>{this.props.offer.name}</td>
            <td>{this.props.offer.company}</td>
            <td>{this.props.offer.salary}
                <FormattedPlural
                value={this.props.offer.salary}
                one={this.getMillion()}
                other={this.getMillions()}
                />
            </td>
            <td>{this.props.offer.city}</td>
            <td>
                <p> 
                <FormattedDate
                  value={new Date(this.props.offer.date)}
                  year='numeric'
                  month='long'
                  day='numeric'
                  weekday='long'
                /> ({<FormattedRelative value={new Date(this.props.offer.date)}/>})</p>
            </td>
            <td>
                <FormattedNumber value ={this.props.offer.visits}/>
            </td>
        </tr>
        );
    }
}