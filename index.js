const core = require('@actions/core');
const github = require('@actions/github');

try {
    const jsNum1 = core.getInput('number1');
    const jsNum2 = core.getInput('number2');
    result = jsNum1 + jsNum2; 
    core.setOutput("result", result);
} catch (error) {
    core.setFailed(error.message);
}