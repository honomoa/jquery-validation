$.validator.addMethods('macaddr',function(value) {
		return /^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i.test(value);
	}, 'Please enter a valid MAC address.');
