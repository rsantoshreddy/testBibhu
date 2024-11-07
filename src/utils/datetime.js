export const getTime = () => {
    var currentdate = new Date()
    var time = currentdate.getHours() + ':' + currentdate.getMinutes()

    if (parseInt(currentdate.getHours()) >= 12) {
        time += ' PM'
    } else {
        time += ' AM'
    }
    return time
}

export const getDate = () => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    var currentdate = new Date()
    var date =
        months[currentdate.getMonth()] +
        ' ' +
        currentdate.getDate() +
        ', ' +
        currentdate.getFullYear()

    return date
}

export const getTimeZone = () => {
    let timezone = new Date()
        .toString()
        .match(/\(([A-Za-z\s].*)\)/)[1]
        .split(' ')
    let timezoneVal = ''
    for (let i = 0; i < timezone.length; i++) {
        timezoneVal += timezone[i][0]
    }
    return timezoneVal
}
