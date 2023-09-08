const { DateTime, Settings } = require('luxon')
const { getSlots } = require('slot-calculator')

Settings.defaultZone = 'UTC'
// const dateTimeRef = DateTime.local(2023, 9, 7, 8).setZone('Asia/Bangkok')
// const dateTimeRef = DateTime.now().setZone('Asia/Bangkok')
const dateTimeRef = DateTime.local(2023, 9, 8).setZone('Asia/Bangkok')

const { allSlots, allDates, availableSlots, availableDates, allSlotsByDay, availableSlotsByDay, timeTaken } = getSlots({
    from: dateTimeRef.toISO(),
    to: dateTimeRef.plus({ days: 1 }).toISO(),
    // outputTimezone: "Asia/Bangkok",
    duration: 60,
    unavailability: [
        {
            from: dateTimeRef.plus({ hour: 0 }).toISO(),
            to: dateTimeRef.plus({ hour: 8 }).toISO()
        },
        {
            from: dateTimeRef.plus({ hour: 12 }).toISO(),
            to: dateTimeRef.plus({ hour: 13 }).toISO()
        },
        {
            from: dateTimeRef.plus({ hour: 17 }).toISO(),
            to: dateTimeRef.plus({ hour: 24 }).toISO()
        },
        {
            from: DateTime.local(2023, 9, 8, 16).toISO(),
            to: DateTime.local(2023, 9, 8, 17).toISO()
        },
    ]
});

// const { allSlots } = getSlots({
//     from: dateTimeRef.toISO(),
//     to: dateTimeRef.plus({ hour: 2 }).toISO(),
//     duration: 30,
// })

// const { allSlots } = getSlots({
//     from: dateTimeRef.toISO(),
//     to: dateTimeRef.plus({ hour: 3 }).toISO(),
//     outputTimezone: "Asia/Bangkok",
//     availability: [{
//             from: dateTimeRef.plus({ hour: 1 }).toISO(),
//             to: dateTimeRef.plus({ hour: 2 }).toISO(),
//     }],
//     unavailability: [{
//         from: dateTimeRef.plus({ hour: 2 }).toISO(),
//         to: dateTimeRef.plus({ hour: 3 }).toISO(),
//     }],
//     duration: 60,
// });

// const { allSlots } = getSlots({
//     from: dateTimeRef.toUTC(),
//     to: dateTimeRef.plus({ hour: 2 }).toUTC(),
//     outputTimezone: "Asia/Bangkok",
//     unavailability: [{
//         day: "Saturday",
//         from: "01:00",
//         to: "02:00",
//         timezone: "Asia/Bangkok",
//     }],
//     duration: 60,
// });

// const { allSlots } = getSlots({
//     from: '2023-09-06T08:00:00',
//     to: '2023-09-06T17:00:00',
//     outputTimezone: "Asia/Bangkok",
//     duration: 180,
// });

// const { allSlots } = getSlots({
//     from: dateTimeRef.toISO(),
//     to: dateTimeRef.plus({ hour: 2 }).toISO(),
//     outputTimezone: "Asia/Bangkok",
//     duration: 30,
// });

// console.log('allSlots ', allSlots)
// console.log('allDates ', allDates)
// console.log('availableSlots ', availableSlots)
// console.log('availableDates ', availableDates)
console.log('allSlotsByDay ', allSlotsByDay)
console.log('availableSlotsByDay ', availableSlotsByDay)
// console.log('timeTaken ', timeTaken)