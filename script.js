function showEvent(date) {
    let eventDescription = '';

    // Add different events based on the date selected
    switch (date) {
        case 'October 12th, 1492':
            eventDescription = 'Event on October 12th, 1928: [The New World was “discovered” this day in 1492 when land (most likely San Salvador) was sighted in the Caribbean from the Pinta, one of the three ships that participated in Christopher Columbus's historic voyage.]';
            break;
        case 'October 12th, 1912':
            eventDescription = 'Event on October 12th, 1912: [Add Event Description Here]';
            break;
        case 'October 12th, 1812':
            eventDescription = 'Event on October 12th, 1812: [Add Event Description Here]';
            break;
        case 'October 12th, 1243':
            eventDescription = 'Event on October 12th, 1243: [Add Event Description Here]';
            break;
        case 'October 12th, 1921':
            eventDescription = 'Event on October 12th, 1921: [Add Event Description Here]';
            break;
        default:
            eventDescription = 'No event found.';
            break;
    }

    document.getElementById('response-text').innerText = eventDescription;