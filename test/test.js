const execAPI = require('../src/index')
const test = new execAPI("https://718it.codeland.us/api/v1/runner");

test.getrunner()
let lang = "python3"
let code = `print("test")`
test.toapi(code , lang)