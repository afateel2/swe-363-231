
const proc = require('process');

const predQuestion = [
    {
      question: "What is your name?",
      answer: "(BOT): I am a simple chatbot called Howie.\n" 
    },
    {
        question: "what language was used to create you?",
        answer: "(BOT): I am built using JavaScript.\n" 
    },
    {
        question: "What is the best programming language?",
        answer: "(BOT): The best programming language is definitely Python (not biased at all)\n"
    },
    {
        question: "Can you help me with my code?",
        answer: "(BOT): No...\n"
    },
    {
        question: "Say my name",
        answer: "(BOT): Your name is...\n\nLoading...\n\nuser?\n"
    },
    {
        question: "Can you be my friend?",
        answer: "(BOT): sure...\n"
    },
    {
        question: "Who made you?",
        answer: "(BOT): afa made me\n"
    },
];

function launch(){
    let flag = false;
    proc.stdout.write("---------------------------------------------\n");
    proc.stdout.write("(BOT): Hello, I am Howie the chatbot. Feel free to ask me any question.\n");
    proc.stdout.write("(YOU): ");
    proc.stdin.on('data', (data)=>{
        const UserInput = data.toString().trim();
        if(UserInput.toLowerCase()==="exit"){
            if(flag){
                proc.stdout.write("---------------------------------------------\n");
                proc.stdout.write("(BOT): Hope I answered all questions, Don't shy out from running the program again. Bye :)\n");
                proc.stdout.write("---------------------------------------------\n");
                proc.exit(0);
            }
            else{
                proc.stdout.write("---------------------------------------------\n");
                proc.stdout.write("(BOT): What's wrong, you haven't asked any question. Bye anyway :(\n");
                proc.stdout.write("---------------------------------------------\n");
                proc.exit(0);
            }
        }
        else{
            flag=true;
            let response = "";
            predQuestion.forEach((qst) =>{
                if(UserInput.toLowerCase()==qst.question.toLowerCase()){
                    response = qst.answer;
                } 
            });
            if(response===""){
                proc.stdout.write("---------------------------------------------\n");
                proc.stdout.write("(BOT): I am afraid I do not have a response for the question you asked :)\n");
                proc.stdout.write("---------------------------------------------\n");
            }
            else{
                proc.stdout.write("---------------------------------------------\n");
                proc.stdout.write(response);
                proc.stdout.write("---------------------------------------------\n");
            }
        }
        proc.stdout.write("(BOT): Do you have any other questions for me?\n");
        proc.stdout.write("(YOU): ");
    });
}
launch();
