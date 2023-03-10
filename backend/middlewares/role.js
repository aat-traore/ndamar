const AccessControl= require('accesscontrol')
const ac = new AccessControl()
exports.roles = (function() {
  ac.grant("client")
   .readOwn("profile")
   .updateOwn("profile")
   
  ac.grant("gerant")
   .extend("client")
   .readAny("profile")
   
  ac.grant("admin")
   .extend("client")
   .extend("gerant")
   .updateAny("profile")
   .deleteAny("profile")
   
  return ac;
  })();