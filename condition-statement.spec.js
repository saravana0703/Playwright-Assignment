function launchBrowser(browserName) {

    if(browserName === "chrome"){
        return "Selected Browser is " + browserName;
    }else {
        return "Other browsers is selected";
    }
}
let result = launchBrowser("chrome");
console.log(result);


function runTests(testtype) 
{
    switch (testtype)
{
    case 'smoke':
        return "smoke";
        break;
    
    case 'sanity':
       return ('sanity');
            break;
    case 'regression':
       return ('regression');
        break;

    default:
        return ('not a testtype');
        break        

}
}
let result1 = runTests("regression");
console.log(result1)