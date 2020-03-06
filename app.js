let options = {
    key: "rzp_live_keja1Q4a9MNLyI", //Paste your API key here before clicking on the Pay Button. 
    name: "Razorpay Testing",
    amount : "100",
    currency : "INR",
    description: "Test Description",
    handler: function (response) {
       alert(response.razorpay_payment_id)
           },
    prefill: {
         "contact" : '+919999999999',
        "email" : "test@test.com"
    },
		
    notes: {
       address : "hello world"
    }
}

var rzp1 = new Razorpay(options);
rzp1.open();
   


