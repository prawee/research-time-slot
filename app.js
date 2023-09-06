const { DateTime, Settings } = require('luxon')
const { getSlots } = require('slot-calculator')

// Settings.defaultZone = 'UTC'
const dateTimeRef = DateTime.utc(2023, 9, 6)

// const { allSlots } = getSlots({
//     from: dateTimeRef.toISO(),
//     to: dateTimeRef.plus({ hour: 2 }).toISO(),
//     duration: 30,
// })

const { allSlots } = getSlots({
    from: dateTimeRef.toISO(),
    to: dateTimeRef.plus({ hour: 3 }).toISO(),
    outputTimezone: "Asia/Bangkok",
    availability: [{
            from: dateTimeRef.plus({ hour: 1 }).toISO(),
            to: dateTimeRef.plus({ hour: 2 }).toISO(),
    }],
    unavailability: [{
        from: dateTimeRef.plus({ hour: 2 }).toISO(),
        to: dateTimeRef.plus({ hour: 3 }).toISO(),
    }],
    duration: 60,
});

console.log('allSlots ', allSlots)