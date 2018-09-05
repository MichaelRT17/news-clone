import React from 'react';
import './subheading.css';

function Subheading() {
    let date = new Date();
    let weekDay = date.getDay();
    let month = date.getMonth();
    switch(weekDay) {
        case 0:
            weekDay = 'Sunday'
            break;
        case 1:
            weekDay = 'Monday'
            break;
        case 2:
            weekDay = 'Tuesday'
            break;
        case 3:
            weekDay = 'Wednesday'
            break;
        case 4:
            weekDay = 'Thursday'
            break;
        case 5:
            weekDay = 'Friday'
            break;
        case 6:
            weekDay = 'Saturday'
            break;
        default: 
            weekDay = 'Error'
        
    }
    switch(month) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;
        default:
            month = 'Error'
    }
    return (
        <div className='subheading-container'>
            <p className='current-date'>
            {`${weekDay}, ${month} ${date.getDate()}, ${date.getFullYear()}`}
            </p>
            <div className='user-links-container'>
                <p className='user-links'>SUBSCRIBE NOW</p>
                <p className='dividing-line'>|</p>
                <p className='user-links'>LOG IN</p>
            </div>
        </div> 
    )
}

export default Subheading;