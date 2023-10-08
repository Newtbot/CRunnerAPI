//depency of axios
const axios = require("axios");

class execAPI {
	//construct takes any VAR from new class
	constructor(url) {
		//set instance
		this.url = url;
	}

	//define methods for getallrunner
	async getrunner() {
		try {
			let url = this.url;
			const response = await axios.get(url);
			//console.log(response.data)
		} catch (error) {
			if (error.response) {
				console.log(error.response);
			}
		}
	}

	//method for passing code to api
	async toapi(code, lang) {
		try {
			//Buffer.from(str, 'base64') andbuf.toString('base64').
			const base64 = btoa(code);
            console.log(code)

			let toapi = this.url + "/run";
			let APIpayload = `cd /root;echo "${base64}"|base64 --decode| ${lang}`;
			let response = await axios.post(toapi, {
				code: APIpayload,
			});
			let data = response.data.res;
			console.log(data);
            this.decode(data)
		} catch (error) {
			if (error.response) {
				console.log(error.response);
			}
		}
	}
    //method to decode
    async decode(data){
        try{
            let decode = atob(data)
            
            console.log(decode)
            

        }
        catch(error){
            console.log(error)
        }
    }

}

/*
Notes to myself:

setting test as new class 
url state belongs to Class execAPI 

*/

module.exports = execAPI;

/*
// Testing area for local file
if (require.main === module){(async function(){try{

    console.log('in here?')
      require('dot')
    
       // try to get the code to run here
      // nothing in this blocks counts for the lib
    
    
    
    }catch(error){
        console.error('IIFE error:\n', error);
    }})()}
*/
