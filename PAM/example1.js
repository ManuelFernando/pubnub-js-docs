pubnub.grant(
{
  channels: ['ch1'],
  authKeys: ['key1'],
  ttl: 5, // 0 for infinite
  read: false, // false to disallow
  write: true, // false to disallow
},function (status, ) {
  console.log(status);
});
