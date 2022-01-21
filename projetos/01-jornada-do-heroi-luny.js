var prompt = require('prompt-sync')();

function exec () {    
    let calculo = 0; 

    function enredo (){
console.log("LUNY-01, esse é o nome do herói da nossa história");
console.log('-');
console.log('Ele é o primeiro projeto robô de uma civilização alienigena chamada "REND" da galáxia de "TURING"');
console.log('-');
console.log('Sua missão na terra é aprender e reproduzir os comportamentos humanos');
console.log('-');
console.log('E passar todos os dados pra que os "RENDIANOS" possam dominar a terra e expandir seu crescimento');
console.log('-');
console.log('A cada 24 rendihoras era enviado um formulário com 5 perguntas de multipla escolha');
console.log('-');
console.log('Que fazia parte de um procedimento padrão para saber o progresso do nosso herói');
console.log('-');
console.log('Carregando perguntas...');
console.log('...');
         
 
     }

    function Q1() {
        let senha = '';
        console.log('-');
        senha = prompt('Você foi descoberto ? ( Digite SIM ou NÃO ) : ').toUpperCase();


        if(senha == 'SIM'){
            calculo += 1;
          
        }
        else if(senha == 'NAO'){
          
           
        }
        else{
            console.log('digite SIM OU NAO')
            Q1();
        }
    
    
    }

    function Q2() {
        let senha = '';
        console.log('-');
        senha = prompt('Aprendeu a diferenciar as especies de seres vivos ? ( Digite SIM ou NÃO ) : ').toUpperCase();


        if(senha == 'SIM'){
            calculo += 1;
           
        }
        else if(senha == 'NAO'){
            
           
        }
        else{
            console.log('digite SIM OU NAO')
            Q2();
        }
    
    
    }

    function Q3() {
        let senha = '';
        console.log('-');
        senha = prompt('Estudou e comparou o comportamento de humanos ? ( Digite SIM ou NÃO ) : ').toUpperCase();


        if(senha == 'SIM'){
            calculo += 1;
            
        }
        else if(senha == 'NAO'){
            
           
        }
        else{
            console.log('digite SIM OU NAO')
            Q3();
        }
    
    
    }

    function Q4() {
        let senha = '';
        console.log('-');
        senha = prompt('Replicou o comportamento de humanos para criar laços de amizade e estudar mais humanos de perto ? ( Digite SIM ou NÃO ) : ').toUpperCase();


        if(senha == 'SIM'){
            calculo += 1;
           
        }
        else if(senha == 'NAO'){
            
           
        }
        else{
            console.log('digite SIM OU NAO')
            Q4();
        }
    
    
    }

    function Q5() {
        let senha = '';
        console.log('-');
        senha = prompt('Aprendeu formas de extinguir a raça humana efetivamente ? ( Digite SIM ou NÃO ) : ').toUpperCase();


        if(senha == 'SIM'){
            calculo += 1;
            
        }
        else if(senha == 'NAO'){
           
           
        }
        else{
            console.log('digite SIM OU NAO')
            Q5();
        }
    
    
    }

    
enredo();
Q1();
Q2();
Q3();
Q4();
Q5();


    if(calculo == 0){
        console.log();
        console.log('Seu insolente...você é uma vergonha pra nossa civilização !!');
    }

     if (calculo == 1 ){
         console.log();
        console.log("Você falhou, mas ainda manteve sua honra !!");
    }
    if (calculo == 2 ){
        console.log();
        console.log("Você falhou, mas ainda manteve sua honra !!");
    }

    if (calculo == 3){
        console.log();
        console.log("Objetivo quase alcançado...mas iremos te desativar e criar uma versão melhorada");
    }

    if (calculo == 4){
        console.log();
        console.log("Objetivo alcançado...continue se infiltrando e aguarde novos comandos");
    }

    if (calculo == 5){
        console.log();
        console.log("Parabéns,seu nome será lembrado em várias gerações e eternizado na nossa rendchain");
    }
    


}

exec();





