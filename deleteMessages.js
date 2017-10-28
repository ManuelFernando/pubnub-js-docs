pubnub.deleteMessages(
  {
  	channel: 'ch1',
  	start: '15088506076921021',
  	end: '15088532035597390'
  },
  (result) => {
	console.log(result);
  }
);
