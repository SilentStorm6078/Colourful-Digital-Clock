function updateClock() {
    var clockElement = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');
    var timeString = formatHour(hours) + ':' + minutes + ':' + seconds + ' ' + getAmPm(hours);

    clockElement.textContent = timeString;

    setTimeout(updateClock, 1000);
}

function formatHour(hours) {
    if (hours === 0) {
        return '12';
    } else if (hours > 12) {
        return (hours - 12).toString().padStart(2, '0');
    } else {
        return hours.toString().padStart(2, '0');
    }
}

function getAmPm(hours) {
    return hours >= 12 ? 'PM' : 'AM';
}

updateClock();
