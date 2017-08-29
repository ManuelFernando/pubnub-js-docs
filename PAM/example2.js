pubnub.grant(
{
  channels: ['ch1-pnpres'],
  read: true, // false to disallow
  write: true // false to disallow
},function (status, ) {
  console.log(status);
});
