pubnub.grant(
{
  read: true, // false to disallow
  write: true // false to disallow
},function (status, ) {
  console.log(status);
});
