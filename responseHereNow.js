// Example of Status
{
  error: false,
  operation: "PNHereNowOperation",
  statusCode: 200
}

// Example of Response
{
  totalChannels: 1,
  totalOccupancy: 3,
  channels: {
    ch1: {
      occupants: [
        {
          uuid: "User 524"
        },
        {
          state: {age: 18},
          uuid: "User 270"
        },
        {
          state: {age: 24},
          uuid: "User 594"
        }],
      name: "ch1",
      occupancy: 3
    }
  }
}
