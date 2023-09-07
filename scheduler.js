const { Scheduler } = require('@ssense/sscheduler')

const scheduler = new Scheduler()

const availability = scheduler.getAvailability({
    from: '2023-09-07',
    to: '2023-10-07',
    duration: 60,
    interval: 60,
    schedule: {
        weekdays: {
            from: '08:00',
            to: '17:00',
            unavailability: [
                {
                    from: '12:00',
                    to: '13:00'
                },
            ]
        },
        unavailability: [
            {
                from: '2023-09-07 08:00',
                to: '2023-09-07 12:00'
            },
            {
                date: '2023-09-08',
                from: '13:00',
                to: '16:00'
            }
        ],
        allocated: [
            {
                from: '2023-09-08 16:00',
                duration: 60
            }
        ]
    }
})

console.log('time slot => ', availability)