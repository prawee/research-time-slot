const { DateTime, Settings } = require('luxon')
const { getSlots } = require('slot-calculator')

// Settings.defaultZone = 'UTC'
const dateTimeRef = DateTime.local(2023, 9, 6, 8).setZone('Asia/Bangkok')
// const dateTimeRef = DateTime.now().setZone('Asia/Bangkok')

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

const { allSlots } = getSlots({
    from: dateTimeRef.toISO(),
    to: dateTimeRef.plus({ hour: 2 }).toISO(),
    outputTimezone: "Asia/Bangkok",
    duration: 30,
});

console.log('allSlots ', allSlots)