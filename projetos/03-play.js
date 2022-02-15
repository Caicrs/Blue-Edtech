var prompt = require('prompt-sync')();


var dia = 1 ;
var mes = 1 ;
var ano = 2022 ;
var horas = 7 ;
var minutos = 24 ;
let dinheiro = 0;
let risco = 25;
let seguranca = 80;
let status_nvl = 'Indefinido'
let retry ;

// OBJETOS

let dialogos = {
     dialogo_1: ' Seja bem-vindo ao "Marcos", esse é um jogo interativo sobre a vida de Marcos,\n um jovem que mora na periferia e precisa fazer escolhas para mudar sua realidade.'
    ,dialogo_2: ' Existem dois caminhos para serem seguidos : ' 
    ,dialogo_3: ' CAMINHO DO BEM : SIGNIFICA TER MAIS PACIENCIA E MAIS RESILIENCIA PARA NÃO SE ENTREGAR \n PERANTE AS DIFICULDADES DIÁRIAS PORÉM A RECOMPENSA É SÓLIDA E DURADOURA'
    ,dialogo_4: ' CAMINHO DO MAL : SIGNIFICA TER UMA GRANDE RECOMPENSA MAIS RÁPIDA QUE EM CONTRAPARTIDA \n TEM MAIS RISCOS E É MENOS DURADOURA'
    ,dialogo_5: ' Digite apenas " CAMINHO DO BEM " OU " CAMINHO DO MAL " '
    ,dialogo_6: ' Indo no QG do tráfico...'
    ,dialogo_7: " Chegando..."
    ,dialogo_8: ' LUAN PP - DONO DO MORRO |  COE MARCOS... ta fazendo o que aqui ??\n tu não nasceu pra essa porra mulek,vai morrer em 2 dias. '
    // CONTOU A HISTÓRIA = SIM
    ,dialogo_9: ' LUAN PP - DONO DO MORRO |  VISÃO CRIA,  EU ESCUTO ESSA MESMA HISTÓRIA QUASE TODO DIA\n INCLUSIVE A MINHA É IGUAL A SUA, MAS EU VI VERDADE NO SEU CORAÇÃO\n E ME IDENTIFIQUEI...CE TA COM A TROPA DO MACACO AGORA.  '
    // REUTILIZAVEIS_1
    ,dialogo_10: ' LUAN PP - DONO DO MORRO |  ENTÃO VO DAR O PAPO '
    ,dialogo_11: ' LUAN PP - DONO DO MORRO |  A HIERARQUIA DO TRÁFICO FUNCIONA DESSA FORMA, PRIMEIRO VOCÊ VAI COMEÇAR COMO FOGUETEIRO, SOLTANDO FOGOS QUANDO TEM INVASÃO DA POLICIA,\n DEPOIS EVOLUI PRA VAPOR COM UM ÓTIMO DESEMPENHO PASSA PARA GERENTE DA BOCA, FAZENDO UMA ÓTIMA CAMPANHA TALVEZ VOCÊ VIRE O DONO DO MORRO\n E VAI DAR ORDENS PARA TODOS OS OUTROS TRAFICANTES DAS DIVISÕES DO MORRO '
    // CONTOU A HISTÓRIA = NÃO
    ,dialogo_12: ' LUAN PP - DONO DO MORRO |  TA TRANQUILO ENTÃO, TEM COISAS QUE NÃO PRECISAM SER CONTADAS...'
    // AFINIDADE >= 3
    ,dialogo_13: ' LUAN PP - DONO DO MORRO |  CONTINUA FIRME NA FUNÇÃO, TU É UM MULEK BOM'
    // AFINIDADE < 3
    ,dialogo_14: ' LUAN PP - DONO DO MORRO |  CONTINUA FIRME NA FUNÇÃO...'
    // AFINIDADE >= 6
    ,dialogo_15: ' LUAN PP - DONO DO MORRO |  TA FICANDO BRABO...AGORA TU É VAPOR, CONTINUA ASSIM QUE DAQUI A POUCO TA COM NOIS NO PLANTÃO '
    // AFINIDADE < 6
    ,dialogo_16: ' LUAN PP - DONO DO MORRO |  AINDA TÁ VIVO...ISSO É BOM'
    // AFINIDADE >= 9
    ,dialogo_17: ' LUAN PP - DONO DO MORRO |  MAXIMO RESPEITO CRIA...AGORA VOCÊ É GERENTE DA BOCA !! '
    // AFINIDADE < 9
    ,dialogo_18: ' LUAN PP - DONO DO MORRO |  ACHO QUE ESSA VIDA NÃO É PRA VOCÊ...'
    // AFINIDADE >= 12
    ,dialogo_19: ' EM UMA OPERAÇÃO SECRETA DA POLICIA NO MORRO, LUAN PP MORREU E AGORA VOCÊ ESTÁ NO COMANDO !! '
    // AFINIDADE < 12
    ,dialogo_20: ' EM UMA OPERAÇÃO SECRETA DA POLICIA NO MORRO VOCÊ FOI PRESO !! '
    ,dialogo_21: ' EM UMA OPERAÇÃO SECRETA DA POLICIA NO MORRO VOCÊ FOI MORTO !! '
    // ------------- DIALOGOS CAMINHO DO BEM
    ,dialogo_22: ' Pegando bicicleta...'
    ,dialogo_23: ' Indo trabalhar com entregas...'
    ,dialogo_24: ' "Suas escolhas mudam seu destino...'
    ,dialogo_25: ' VOCÊ FOI VITIMA DE UMA BALA PERDIDA ENQUANTO FREQUENTAVA UM BAILE FUNK CONTROLADO POR TRAFICANTES...'
    ,dialogo_26: ' A) GUARDAR DINHEIRO P/ COMPRAR UM NOTEBOOK USADO (R$ 1.500)  ---- B) GASTAR APENAS COM FESTAS /  | Digite apenas (A / B)  '
    ,dialogo_27(){console.log('A) CONTINUAR TRABALHANDO FAZENDO ENTREGAS + ESTUDAR NA BLUE EDTECH  ---- B) CONTINUAR TRABALHANDO FAZENDO ENTREGAS + FAZER FACULDADE TRADICIONAL EAD | Digite apenas (A / B) ') }
    ,dialogo_28(){console.log(' O ANO É 2030, AGORA VOCÊ TEM 26 ANOS, MUDOU SUA VIDA CEDO,FEZ ÓTIMAS ESCOLHAS E ÓTIMOS INVESTIMENTOS AO LONGO DOS ANOS,\n COM PATRIMONIO TOTAL ACUMULADO DE +R$ 500.000.')}
    ,dialogo_29(){console.log(' O ANO É 2030, AGORA VOCÊ TEM 26 ANOS, MUDOU DE VIDA, FEZ ÓTIMAS ESCOLHAS E ÓTIMOS INVESTIMENTOS AO LONGO DOS ANOS,\n COM PATRIMONIO TOTAL ACUMULADO DE +R$ 250.000.')}
    ,dialogo_30(){console.log(' O ANO É 2030, AGORA VOCÊ TEM 26 ANOS, MUDOU DE VIDA, FEZ ÓTIMAS ESCOLHAS E ÓTIMOS INVESTIMENTOS AO LONGO DOS ANOS,\n COM PATRIMONIO TOTAL ACUMULADO DE +R$ 800.000.')}
}

const obj_metodos = {
    data_horas(){
        console.log('-');
        console.log(` Data      | ${dia}/${mes}/${ano}`);
        console.log(` Horário   | ${horas}:${minutos}`);
    },
    status_personagem(){
        console.log('-');
        console.log(` Dinheiro  | R$ ${dinheiro}`);
        console.log(` Risco     | ${risco}% `);
        console.log(` Status    | ${status_nvl} `);
    },
    
  };

  var afinidade = 0

  function perguntas (){
   let teste_1;
     teste_1 = {
        introducao: console.log(' Responda as questões apenas com SIM / NÃO,caso contrário a resposta será inválida...elas irão mudar seu caminho final'),
        pergunta_1: prompt(' Você é leal ? ').toLowerCase(),
        pergunta_2: prompt(' Você é confiável ? ').toLowerCase(),
        pergunta_3: prompt(' Mata e morre pela familia ? ').toLowerCase(),
        pergunta_4: prompt(' Largaria sua mulher em trabalho de parto pra defender o morro ? ').toLowerCase(),
        pergunta_5: prompt(' Justiça se faz com sangue ? ').toLowerCase(),  
    }
   
    if(teste_1.pergunta_1 == 'sim'){
        afinidade++
    }
    if (teste_1.pergunta_2 == 'sim'){
        afinidade++
    }
    if (teste_1.pergunta_3 == 'sim'){
        afinidade++
    }
    if (teste_1.pergunta_4 == 'sim'){
        afinidade++
    }
    if (teste_1.pergunta_5 == 'sim'){
        afinidade++
    }
  }

  function perguntas_2 (){
    let teste_2;
    teste_2 = { 
        introducao: console.log(' Responda as questões apenas com SIM / NÃO,caso contrário a resposta será inválida...elas irão mudar seu caminho final'),
         pergunta_6: prompt(' Morte ao estado ? ').toLowerCase(),
         pergunta_7: prompt(' Já pensou em tirar a própria vida alguma vez ? ').toLowerCase(),
         pergunta_8: prompt(' Você acredita em vida após a morte ? ').toLowerCase(),
         pergunta_9: prompt(' Tem medo de morrer ? ').toLowerCase(),
         pergunta_10: prompt(' Deseja mudar de vida ? ').toLowerCase(),
    }

    if(teste_2.pergunta_6 == 'sim'){
        afinidade++
    }
    if (teste_2.pergunta_7 == 'sim'){
        afinidade++
    }
    if (teste_2.pergunta_8 == 'sim'){
        afinidade++
    }
    if (teste_2.pergunta_9 == 'sim'){
        afinidade++
    }
    if (teste_2.pergunta_10 == 'sim'){
        afinidade++
    }

  }

function perguntas_3 (){
    let teste_3;
    teste_3 = {
        pergunta_11: prompt(' Acredita em Deus ? ').toLowerCase(),
        pergunta_12: prompt(' Usa algum tipo de droga ? ').toLowerCase(),
        pergunta_13: prompt(' Pretende ter filhos ? ').toLowerCase(),
        pergunta_14: prompt(' Sabe manusear uma arma ? ').toLowerCase(),
        pergunta_15: prompt(' Deseja subir de nível ? ').toLowerCase(), 
   }
 
    if(teste_3.pergunta_11 == 'sim'){
        afinidade++
    }
    if (teste_3.pergunta_12 == 'sim'){
        afinidade++
    }
    if (teste_3.pergunta_13 == 'sim'){
        afinidade++
    }
    if (teste_3.pergunta_14 == 'sim'){
        afinidade++
    }
    if (teste_3.pergunta_15 == 'sim'){
        afinidade++
    }
}

function perguntas_4 (){
    let teste_4;
    teste_4 = { 
        pergunta_16: prompt(' Você machucaria alguém apenas com a intenção de ser feliz ? ').toLowerCase(),
        pergunta_17: prompt(' Você tem algum vício ? ').toLowerCase(),
        pergunta_18: prompt(' A criminalidade é culpa do estado ? ').toLowerCase(),
        pergunta_19: prompt(' Viver pouco como um rei ? ').toLowerCase(),
        pergunta_20: prompt(' Viver muito como um " Zé " ? ').toLowerCase(),  
   }
   
   if(teste_4.pergunta_16 == 'sim'){
    afinidade++
}
if (teste_4.pergunta_17 == 'sim'){
    afinidade++
}
if (teste_4.pergunta_18 == 'sim'){
    afinidade++
}
if (teste_4.pergunta_19 == 'sim'){
    afinidade++
}
if (teste_4.pergunta_20 == 'sim'){
    afinidade++
}
}

function perguntas_5 (){
    let teste_5;
    teste_5 = {
        pergunta_21: prompt(' Concorda que a guerra é necessária ? ').toLowerCase(),
        pergunta_22: prompt(' Já matou alguem ? ').toLowerCase(),
        pergunta_23: prompt(' Pensou em matar alguem ? ').toLowerCase(),
        pergunta_24: prompt(' Olho por olho e dente por dente ? ').toLowerCase(),
        pergunta_25: prompt(' Um por todos e todos por um ? ').toLowerCase(),
   }
  
   if(teste_5.pergunta_21 == 'sim'){
    afinidade++
}
if (teste_5.pergunta_22 == 'sim'){
    afinidade++
}
if (teste_5.pergunta_23 == 'sim'){
    afinidade++
}
if (teste_5.pergunta_24 == 'sim'){
    afinidade++
}
if (teste_5.pergunta_25 == 'sim'){
    afinidade++
}
}
// APRESENTAÇÃO BREVE DA HISTÓRIA + CAMINHO DO BEM/MAL  
   
function pass_tempo() {
    var arr_dias = [' 2022',' 2023',' 2024',' 2025',' 2026',' 2027',' 2028',' 2029',' 2030']
    for(i=0;i<arr_dias.length;i++){
        console.log(arr_dias[i])
    }
}

function pass_tempo2() {
    var arr_dias2 = [' 2022',' 2023',' 2024',' 2025']
    for(i=0;i<arr_dias2.length;i++){
        console.log(arr_dias2[i])
    }
}
function pass_tempo3() {
    var arr_dias3 = [' 2026',' 2027',' 2028',' 2029',' 2030']
    for(i=0;i<arr_dias3.length;i++){
        console.log(arr_dias3[i])
    }
}

function game(){

dia = 1 ;
mes = 1 ;
ano = 2022 ;
horas = 7 ;
minutos = 24 ;
dinheiro = 0;
status_nvl = 'Indefinido'

    console.log(dialogos.dialogo_1)
    console.log(dialogos.dialogo_2)
    console.log('- ')
    console.log(dialogos.dialogo_3)
    console.log(' ')
    console.log(dialogos.dialogo_4)
    console.log('- ')
    console.log(dialogos.dialogo_5)
    // VERIFICAÇÔES >> escolha_caminho 

    var escolha_caminho = prompt(' Faça sua escolha : ').toLowerCase();

    while(escolha_caminho !== 'caminho do bem' && escolha_caminho !== 'caminho do mal')
    {
        console.log(' Por favor, digite apenas : CAMINHO DO BEM / CAMINHO DO MAL');
        escolha_caminho = prompt(' Faça sua escolha : ').toLowerCase();
    };

    // escolha_caminho >> CAMINHO_1 ( CAMINHO DO MAL )

    if(escolha_caminho == 'caminho do mal'){
        
        obj_metodos.data_horas();
        obj_metodos.status_personagem();
        console.log('-');
        console.log(dialogos.dialogo_6);
        setTimeout(() => {console.log(dialogos.dialogo_7)}, 2000);
        setTimeout(() => {console.log(dialogos.dialogo_8)}, 4000);
        setTimeout(() => {console.log(' ')}, 6000);
        // PRIMEIRA >> PERGUNTA
        setTimeout(() => {console.log(' A) Contar sua história | B) Não contar')}, 6000);  
        setTimeout(() => { escolha_2 = prompt(' Sua resposta : ').toLowerCase();}, 6000); 
        // VERIFICAÇÃO DE RESPOSTA 
        setTimeout(() => {while(escolha_2 !== 'a' && escolha_2 !== 'b')
            {
                console.log(' Por favor, digite apenas : A / B');
                escolha_2 = prompt(' Digite novamente : ').toLowerCase();
            };}, 7000); 
        // PRIMEIRA ESCOLHA
        setTimeout(() => {
        if(escolha_2 === 'a')
        {
            afinidade++
            setTimeout(() => {console.log(dialogos.dialogo_9)}, 1000);
            setTimeout(() => {console.log(dialogos.dialogo_10)}, 3000);
            setTimeout(() => {console.log(dialogos.dialogo_11)}, 6000);
            setTimeout(() => {perguntas()}, 7000);
            setTimeout(() => {
                mes = 3; 
                horas = 11;
                minutos = 2
                dinheiro = 2.294
                risco = 50;
                status_nvl = 'FOGUETEIRO'
                obj_metodos.data_horas();
                obj_metodos.status_personagem();
                console.log('-');
                setTimeout(() => {console.log(dialogos.dialogo_13)}, 1000);
                setTimeout(() => {perguntas_2()}, 3000);
                setTimeout(() => {
                    mes = 5; 
                    horas = 17;
                    minutos = 48
                    dinheiro = 7.039
                    risco = 65;
                    status_nvl = 'VAPOR'
                    obj_metodos.data_horas();
                    obj_metodos.status_personagem();
                    console.log('-');
                    setTimeout(() => {console.log(dialogos.dialogo_15)}, 1000);
                    setTimeout(() => {perguntas_3()}, 3000);
                    setTimeout(() => {
                        mes = 7; 
                        horas = 5;
                        minutos = 39
                        dinheiro = 27.494
                        risco = 85;
                        status_nvl = 'GERENTE DA BOCA'
                        obj_metodos.data_horas();
                        obj_metodos.status_personagem();
                        console.log('-');
                        setTimeout(() => {console.log(dialogos.dialogo_17)}, 1000);
                        setTimeout(() => {perguntas_4()}, 3000);
                        setTimeout(() => {
                            mes = 9; 
                            horas = 13;
                            minutos = 41
                            dinheiro = 45.593
                            risco = 100;
                            status_nvl = 'DONO DO MORRO'
                            obj_metodos.data_horas();
                            obj_metodos.status_personagem();
                            console.log('-');
                            setTimeout(() => {console.log(dialogos.dialogo_19)}, 1000);
                            setTimeout(() => {perguntas_5()}, 3000);
                            setTimeout(() => {
                                if(afinidade >= 12) {mes = 11; 
                                horas = 20;
                                minutos = 52
                                dinheiro = 86.492
                                risco = 100;
                                status_nvl = 'MORTO'
                                obj_metodos.data_horas();
                                obj_metodos.status_personagem();
                                console.log('-');
                                setTimeout(() => {console.log(dialogos.dialogo_21)}, 1000);
                                setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 3000);                         
                                setTimeout(() => {
                                    if(retry == 'sim'){
                                       return game();
                                    }
                                    else{
                                        console.log(' ');
                                        console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO... :)');
                                    }
                                }, 4000); 
                            }
                                else{
                                mes = 9; 
                                horas = 16;
                                minutos = 38
                                dinheiro = 39.893
                                risco = 100;
                                status_nvl = 'PRESO'
                                obj_metodos.data_horas();
                                obj_metodos.status_personagem();
                                console.log('-');
                                setTimeout(() => {console.log(dialogos.dialogo_20)}, 1000);
                                setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 3000);                         
                                setTimeout(() => {
                                    if(retry == 'sim'){
                                       return game();
                                    }
                                    else{
                                        console.log(' ');
                                        console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO... :)');
                                    }
                                }, 5000); 
                                }   
                            }, 1500*10);
                        }, 1500*10);        
                    }, 1500*10);    
                }, 1500*10);
            }, 1500*10); 
        } 
        // SEGUNDA ESCOLHA    
        if (escolha_2 === 'b')
        {
            setTimeout(() => {console.log(dialogos.dialogo_12)}, 1000);
            setTimeout(() => {console.log(dialogos.dialogo_10)}, 3000);
            setTimeout(() => {console.log(dialogos.dialogo_11)}, 6000);
            setTimeout(() => {perguntas()}, 7000);
        }}, 7000); 
    }
    if(escolha_caminho == 'caminho do bem'){
        obj_metodos.data_horas();
        obj_metodos.status_personagem();
        console.log('-');
        setTimeout(() => {console.log(dialogos.dialogo_22)}, 2000);
        setTimeout(() => {console.log(dialogos.dialogo_23)}, 4000);
        setTimeout(() => {console.log(' ')}, 6000);
        // PRIMEIRA >> PERGUNTA
        setTimeout(() => {console.log(' VOCÊ VALORIZA O FUTURO MAIS DO QUE REALIZAR PRAZERES MOMENTANEOS ?? ( SIM / NAO )')}, 6000);  
        setTimeout(() => { escolha_2 = prompt(' Sua resposta : ').toLowerCase();}, 6000); 
        // VERIFICAÇÃO DE RESPOSTA 
        setTimeout(() => {while(escolha_2 !== 'sim' && escolha_2 !== 'nao')
            {
                console.log(' Por favor, digite apenas : SIM / NAO');
                escolha_2 = prompt(' Digite novamente : ').toLowerCase();
            };}, 7000); 
        // PRIMEIRA ESCOLHA
        setTimeout(() => {
        if(escolha_2 === 'sim')
        {
                mes = 3; 
                horas = 7;
                minutos = 50
                dinheiro = 300
                risco = 5;
                status_nvl = 'ENTREGADOR'
                obj_metodos.data_horas();
                obj_metodos.status_personagem();
                console.log('-');
                setTimeout(() => {console.log(dialogos.dialogo_26)}, 2000);  
                setTimeout(() => { escolha_2 = prompt(' Sua resposta : ').toLowerCase();}, 3000); 
                // VERIFICAÇÃO DE RESPOSTA 
                setTimeout(() => {while(escolha_2 !== 'a' && escolha_2 !== 'b')
                 {
                console.log(' Por favor, digite apenas : A / B');
                escolha_2 = prompt(' Digite novamente : ').toLowerCase();
                };}, 4000); 
                // RESPOSTA
                setTimeout(() => { 
                    if(escolha_2 == 'a'){
                        mes = 8; 
                        horas = 9;
                        minutos = 17
                        dinheiro = 1500
                        risco = 5;
                        status_nvl = 'ENTREGADOR'
                        obj_metodos.data_horas();
                        obj_metodos.status_personagem();
                        console.log('-');
                        console.log('Parabéns !! você conseguiu um notebook, agora tem milhares de formas de se fazer dinheiro / estudar ');
                        console.log('-');
                        setTimeout(() => {dialogos.dialogo_27()}, 1000);  
                        setTimeout(() => { escolha_2 = prompt(' Sua resposta : ').toLowerCase();}, 1500); 
                        // VERIFICAÇÃO DE RESPOSTA 
                        setTimeout(() => {while(escolha_2 !== 'a' && escolha_2 !== 'b')
                        {
                        console.log(' Por favor, digite apenas : A / B');
                        escolha_2 = prompt(' Digite novamente : ').toLowerCase();
                        };}, 2000); 
                        // ---
                        setTimeout(() => {
                            if(escolha_2 == 'a'){
                                mes = 9; 
                                ano = 2023
                                horas = 9;
                                minutos = 55
                                dinheiro = 15496
                                risco = 2;
                                status_nvl = 'ENTREGADOR + ESTUDANTE'
                                obj_metodos.data_horas();
                                obj_metodos.status_personagem();
                                console.log('-');
                                console.log('PARABÉNS !! VOCÊ CONSEGUIU UM EMPREGO FIXO COM O SALÁRIO DE R$ 3.000');
                                console.log('-');
                                pass_tempo()
                                console.log('-');
                                dialogos.dialogo_30() 
                                console.log('-');
                                setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 3000); 
                                setTimeout(() => {
                                    if(retry == 'sim'){
                                    return game();
                                    }
                                    else{
                                        console.log(' ');
                                        console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO... :)');
                                    }
                                }, 3000);   
                                setTimeout(() => {while(retry !== 'sim' && retry !== 'nao')
                                {
                                console.log(' Por favor, digite apenas : SIM / NAO');
                                retry = prompt(' Digite novamente : ').toLowerCase();
                                };}, 3000);    
                                
                            }
                            else{
                                mes = 9; 
                                ano = 2023
                                horas = 7;
                                minutos = 37
                                dinheiro = 10382
                                risco = 2;
                                status_nvl = 'ENTREGADOR + ESTUDANTE'
                                obj_metodos.data_horas();
                                obj_metodos.status_personagem();
                                console.log('-');
                                pass_tempo2()
                                console.log('-');
                                console.log('PARABÉNS !! VOCÊ CONSEGUIU UM EMPREGO FIXO COM O SALÁRIO DE R$ 3.000');
                                console.log('-');
                                pass_tempo3()
                                console.log('-');
                                dialogos.dialogo_29() 
                                console.log('-');
                                setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 1000); 
                                setTimeout(() => {
                                    if(retry == 'sim'){
                                    return game();
                                    }
                                    else{
                                        console.log(' ');
                                        console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO... :)');
                                    }
                                }, 3000);   
                                setTimeout(() => {while(retry !== 'sim' && retry !== 'nao')
                                {
                                console.log(' Por favor, digite apenas : SIM / NAO');
                                retry = prompt(' Digite novamente : ').toLowerCase();
                                };}, 3000);    
                            }
                        }, 3000);   
                    }
                    else{
                        console.log('-');
                        pass_tempo()
                        console.log('-');
                        console.log(' O ANO É 2030, AGORA VOCÊ TEM 26 ANOS, MUDOU DE VIDA E EVOLUIU O SUFICIENTE PARA SER MEDIANO EM ALGO, COM PATRIMONIO TOTAL ACUMULADO DE +R$ 150.000.');
                        setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 1000); 
                        setTimeout(() => {
                            if(retry == 'sim'){
                               return game();
                            }
                            else{
                                console.log(' ');
                                console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO... :)');
                            }
                        }, 3000);   
                        setTimeout(() => {while(retry !== 'sim' && retry !== 'nao')
                        {
                        console.log(' Por favor, digite apenas : SIM / NAO');
                        retry = prompt(' Digite novamente : ').toLowerCase();
                        };}, 3000);                       
                               
                    }
                }, 3000); 
            
        } 
        // SEGUNDA ESCOLHA    
        else
        {
                mes = 3; 
                horas = 14;
                minutos = 17
                dinheiro = 150
                risco = 5;
                status_nvl = 'ENTREGADOR'
                obj_metodos.data_horas();
                obj_metodos.status_personagem();
                console.log('-');
                setTimeout(() => {console.log(dialogos.dialogo_26)}, 2000);  
                setTimeout(() => { escolha_2 = prompt(' Sua resposta : ').toLowerCase();}, 3000); 
                // VERIFICAÇÃO DE RESPOSTA 
                setTimeout(() => {while(escolha_2 !== 'a' && escolha_2 !== 'b')
                 {
                console.log(' Por favor, digite apenas : A / B');
                escolha_2 = prompt(' Digite novamente : ').toLowerCase();
                };}, 4000); 
                // RESPOSTA
                setTimeout(() => { 
                    if(escolha_2 == 'a'){
                        mes = 10; 
                        horas = 7;
                        minutos = 30
                        dinheiro = 1500
                        risco = 5;
                        status_nvl = 'ENTREGADOR'
                        obj_metodos.data_horas();
                        obj_metodos.status_personagem();
                        console.log('-');
                        console.log('Parabéns !! você conseguiu um notebook, agora tem milhares de formas de se fazer dinheiro / estudar ');
                        console.log('-');
                        setTimeout(() => {dialogos.dialogo_27()}, 1000);  
                        setTimeout(() => { escolha_2 = prompt(' Sua resposta : ').toLowerCase();}, 1500); 
                        // VERIFICAÇÃO DE RESPOSTA 
                        setTimeout(() => {while(escolha_2 !== 'a' && escolha_2 !== 'b')
                        {
                        console.log(' Por favor, digite apenas : A / B');
                        escolha_2 = prompt(' Digite novamente : ').toLowerCase();
                        };}, 2000); 
                        // ---
                        setTimeout(() => {
                            if(escolha_2 == 'a'){
                                mes = 11; 
                                ano = 2023
                                horas = 13;
                                minutos = 22
                                dinheiro = 8.394
                                risco = 2;
                                status_nvl = 'ENTREGADOR + ESTUDANTE'
                                obj_metodos.data_horas();
                                obj_metodos.status_personagem();
                                console.log('-');
                                console.log('PARABÉNS !! VOCÊ CONSEGUIU UM EMPREGO FIXO COM O SALÁRIO DE R$ 3.000');
                                console.log('-');
                                pass_tempo()
                                console.log('-');
                                dialogos.dialogo_28() 
                                console.log('-');
                                setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 3000); 
                                setTimeout(() => {
                                    if(retry == 'sim'){
                                    return game();
                                    }
                                    else{
                                        console.log(' ');
                                        console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO... :)');
                                    }
                                }, 3000);   
                                setTimeout(() => {while(retry !== 'sim' && retry !== 'nao')
                                {
                                console.log(' Por favor, digite apenas : SIM / NAO');
                                retry = prompt(' Digite novamente : ').toLowerCase();
                                };}, 3000);    
                                
                            }
                            else{
                                mes = 11; 
                                ano = 2023
                                horas = 13;
                                minutos = 22
                                dinheiro = 8.394
                                risco = 2;
                                status_nvl = 'ENTREGADOR + ESTUDANTE'
                                obj_metodos.data_horas();
                                obj_metodos.status_personagem();
                                console.log('-');
                                pass_tempo2()
                                console.log('-');
                                console.log('PARABÉNS !! VOCÊ CONSEGUIU UM EMPREGO FIXO COM O SALÁRIO DE R$ 3.000');
                                console.log('-');
                                pass_tempo3()
                                console.log('-');
                                dialogos.dialogo_29() 
                                console.log('-');
                                setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 3000); 
                                setTimeout(() => {
                                    if(retry == 'sim'){
                                    return game();
                                    }
                                    else{
                                        console.log(' ');
                                        console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO... :)');
                                    }
                                }, 3000);   
                                setTimeout(() => {while(retry !== 'sim' && retry !== 'nao')
                                {
                                console.log(' Por favor, digite apenas : SIM / NAO');
                                retry = prompt(' Digite novamente : ').toLowerCase();
                                };}, 3000);    
                            }
                        }, 3000);   
                    }
                    else{
                        console.log('-');
                        pass_tempo()
                        console.log('-');
                        console.log(' O ANO É 2030, AGORA VOCÊ TEM 26 ANOS, NÃO MUDOU DE VIDA, NÃO EVOLUIU E PROSPEROU EM NENHUM QUESITO, COM PATRIMONIO TOTAL ACUMULADO DE +R$ 20.000.');
                        setTimeout(() => {retry = prompt('Digite ( SIM ou NÃO ) | Deseja jogar novamente ? : ').toLowerCase();}, 3000); 
                        setTimeout(() => {
                            if(retry == 'sim'){
                               return game();
                            }
                            else{
                                console.log(' ');
                                console.log('OBRIGADO POR PARTICIPAR, ESPERO QUE TENHA GOSTADO...aaa :)');
                            }
                        }, 3000);   
                        setTimeout(() => {while(retry !== 'sim' && retry !== 'nao')
                        {
                        console.log(' Por favor, digite apenas : SIM / NAO');
                        retry = prompt(' Digite novamente : ').toLowerCase();
                        };}, 3000);                               
                    }
                }, 3000);   
        }}, 7000); 
    }
}   

game();

