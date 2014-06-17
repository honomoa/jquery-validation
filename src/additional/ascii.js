$.validator.addMethod('ascii', function(value, element) {
  return this.optional(element) || /^[\x00-\x7F]+$/.test(value);
}, 'The field must only contain ascii characters.');
