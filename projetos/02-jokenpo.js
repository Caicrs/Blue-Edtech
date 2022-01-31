var prompt = require('prompt-sync')();
            
         
//  ARRAY // 
                let contin = 'sim' ;  
                const elementos = ['Pedra','Papel','Tesoura'];
//  LOOP CENTRAL ( COMANDA O RETRY DO JOGO) // 
                while(contin == 'sim'){
                        console.log('Bem vindo ao meu Pedra / Papel / Tesoura');
                        console.log('');    
                        let usuario = prompt('Digite o seu usuário : ');
                        let rodadas = +prompt('Quantas rodadas você deseja jogar ? : ');
//  VERIFICAÇÃO DE RODADAS ( APENAS NUMEROS ) // 
                            while(isNaN(rodadas) === true){
                            rodadas = prompt('Por favor, digite apenas números : ');
                                if(isNaN(rodadas) === false){
                                    break; }
                            };
//  RANDOMIZAÇÃO DA ESCOLHA ( MAQUINA ) //                 
                        function randomPc (max) {
                            return Math.floor(Math.random() * max);
                        }
//  VARIAVEIS DE CONTAGEM DAS VITÓRIAS | MAQUINA VS USUARIO  //                 
                        let winPc = 0;
                        let winUser = 0;
//  LOOP LIMITADO A RODADAS ESCOLHIDAS PELO USUÁRIO //                 
                            for(i=0;i < rodadas;i++){
                                var escolhaRandom = randomPc(elementos.length);
                                let escolha_user = prompt('Qual opção você escolhe ? : ').toLowerCase();
//  VERIFICAÇÃO ( OPÇÃO DE ESCOLHA ) //                         
                                while(escolha_user !== 'pedra' && escolha_user !== 'papel' && escolha_user !== 'tesoura')
                                {
                                    console.log('Digite apenas -> PEDRA | PAPEL | TESOURA');
                                    escolha_user = prompt('Qual opção você escolhe ? : ').toLowerCase();
                                };
//  CONDICIONAIS DE POSSIBILIDADES ( EMPATOU | GANHOU | PERDEU) //                              
                                    if(escolha_user === 'pedra' && escolhaRandom === 0){                             
                                    console.log('Empatou');
                                    console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                    }
        
                                    if(escolha_user === 'pedra' && escolhaRandom === 2){
                                        console.log('Você ganhou !');
                                        winUser++;
                                    console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                    }
                                
                                    if(escolha_user === 'papel' && escolhaRandom === 1){
                                        console.log('Empatou');
                                        console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                        }
                                
                                    if(escolha_user === 'tesoura' && escolhaRandom === 2){
                                        console.log('Empatou');
                                        console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                        }
                                
                                            if(escolha_user === 'pedra' && escolhaRandom === 1){  
                                                console.log('Você perdeu !');
                                                winPc++;
                                                console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                                }
                                            
                                    
                                                if(escolha_user === 'tesoura' && escolhaRandom === 0){
                                                    console.log('Você perdeu !');
                                                    winPc++;
                                                    console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                                    }
                                    
                                                if(escolha_user === 'tesoura' && escolhaRandom === 1){
                                                    console.log('Você ganhou !');
                                                    winUser++;
                                                    console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                                    }
                        
                                                            if(escolha_user === 'papel' && escolhaRandom === 0){
                                                                console.log('Você ganhou !');
                                                                winUser++;
                                                                console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                                                }
                                                
                                                            if(escolha_user === 'papel' && escolhaRandom === 2){
                                                                console.log('Você perdeu !');
                                                                winPc++;
                                                                console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                                                                }
                            };
//  FINAL DE TODAS AS RODADAS | CONDICIONAIS DE POSSIBILIDADES ( EMPATOU | GANHOU | PERDEU) //                         
                            if(winPc < winUser){
                                console.log('');
                                console.log('Parabéns, você ganhou !! ');
                                console.log('PLACAR GERAL :');
                                console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                            }
                            else if(winPc == winUser){
                                console.log('');
                                console.log('Obrigado pela participação, você empatou !! ');
                                console.log('PLACAR GERAL :');
                                console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                            }
                            else{
                                console.log('');
                                console.log('Você perdeu...obrigado por participar !! ');
                                console.log('PLACAR GERAL :');
                                console.log(`Maquina : ${winPc} X ${winUser} : ${usuario}`);
                            }
//  ESTRUTURA P/ JOGAR NOVAMENTE ( SIM OU NÃO ) //                          
                            console.log('');
                            console.log('Deseja jogar novamente ?? ');
                            console.log('');
                            console.log('Digite "SIM" para continuar');
                            console.log('OU');
                            contin = prompt('Digite "NAO" para encerrar : ').toLowerCase();
                        
                            while(contin !== 'sim' && contin !== 'nao'){
                                contin = prompt('Digite apenas ( SIM / NAO ) : ').toLowerCase();
                            }
                            if(contin == 'sim'){
                                console.log('')
                            }
                            if(contin == 'nao'){                  
                                console.log('');
                                console.log('Obrigado, volte sempre. ');
                            break;
                            }
                }; 