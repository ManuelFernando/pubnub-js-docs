pubnub.grant(
{
  channels: ['ch1'],
  read: true, // false to disallow
  write: true // false to disallow
},function (status, ) {
  console.log(status);
});
