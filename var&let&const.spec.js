const { version } = require("os");

const browserVersion = "chrome";
function getBrowserVersion() {
    if (browserVersion == "chrome"){
       var chromeVersion = 108.45;
       var otherVersion = 134.89;
        return "chrome version is" + chromeVersion;
        //console.log("chrome version is" + chromeVersion);
    } else {

        return "other browser version is" + otherVersion;
        //console.log("other version is" + otherVersion);
    }
    }
   console.log(getBrowserVersion());
