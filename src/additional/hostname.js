//see http://en.wikipedia.org/wiki/Hostname
$.validator.addMethod('hostname', function(value, element) {
		return this.optional(element) || /^[a-z][a-z0-9\-]+[a-z0-9]$/i.test(value);
}, 'Please enter a valid hostname.');
