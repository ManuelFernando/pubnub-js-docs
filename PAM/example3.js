pubnub.grant(
{
  channelGroups: ['cg1', 'cg2', 'cg3'],
  authKeys: ['key1', 'key2', 'key3'],
  ttl: 12337, // 0 for infinite
  read: true, // false to disallow
  write: true, // false to disallow
  manage: true // false to disallow
},function (status, ) {
  console.log(status);
});