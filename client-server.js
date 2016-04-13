require('express')().use(require('express')
  .static(__dirname + '/public')).listen(8080, () => console.log('client up on 8080'));
