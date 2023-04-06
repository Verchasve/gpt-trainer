const Spinner = require('cli-spinner').Spinner;
const readline = require('readline');
const { Configuration, OpenAIApi } = require("openai");


// const configuration = new Configuration({
//     organization: "org-UX4YSDGVYQtSHjjcY2CO6qOA",
//     apiKey: process.env.OPENAI_API_KEY,
// });
//const openai = new OpenAIApi(configuration);

const configuration = new Configuration({
    apiKey:'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' , });

    const openai = new OpenAIApi(configuration);
 const spinner = new Spinner('Loading ... &s');   


 async function getReponse(message){

    spinner.setSpinnerString();
    spinner.start();


    const response = await openai.createCharCompletion(
        {
            model : 'gpt-3.5-turbo',
            message: [
                {
                    role:"user",
                    content:message
                }
            ]
        });

        return response.data.choices[0].message?.content.trim();
 }




 const userinput = [];


 const rl = readline.createInterface({

    input : process.stdin,
    output:process.stdout,
 });

 rl.setPompt('User : > ');
 rs.prompt();


 rl.on('line' , async(input) => {


    userinput.push(input);

    const response = await getResponse(userInput.join(`\n`));

    console.log(`response: ${response} \n`);

    rl.prompt();
 });


 rl.on('close' , ()=> {
    console.log('close');
    process.exit(0);

 });