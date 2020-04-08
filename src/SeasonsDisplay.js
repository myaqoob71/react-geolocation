import './SeasonsDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter : {
        text: "Burr it is chilly",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonsDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    //Refactoring the below code as there are repeated naming conventions using config object
    /* Using a helper variable
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach' ;
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div>
            ES2015 template string - backtik
            <i className = {`${icon} icon`} />
            <h1>{text}</h1>
            <i className = {`${icon} icon`} />
        </div>
    ) */
    //Destructing from season config object
    const {text, iconName} = seasonConfig[season];
    return (
        <div className = {`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    )
}
export default SeasonsDisplay;