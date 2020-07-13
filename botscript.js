const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./package.json")
const token = ''
var perm = 1
var msgClb
var alreadyNotify = 0
var autor
var repl = 0
var notifyPerm = 0

client.on("ready", () => {
    console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários, em ${client.channels.cache.size} canais e em ${client.guilds.cache.size} servidores.`)
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores`, { type: 'PLAYING' })
})

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`)
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`)
})

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`)
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`)
})

client.on("message", async message => {
    if (message.author.bot) return
    if (message.channel.type === "dm") return
    if (message.content.indexOf("!stop") != -1 && message.content.indexOf("!") == 0) {
        if (perm == 1) {
            perm = 0
            message.channel.send("Comandos desativados.")
        }
    }
    if (message.content.indexOf("!start") != -1 && message.content.indexOf("!") == 0) {
        perm = 1
        message.channel.send("Comandos reativados.")
    }

    if (message.content.indexOf("!myID") != -1) {
        message.channel.send(message.member.nickname + "'s ID: " + message.author)
    }

    if (message.content.indexOf("!ideia") != -1) {
        client.channels.cache.get("694576334474575963").send(`${message.member.nickname} (${message.member.id}) sugeriu: "${message.content.slice(message.content.indexOf("!ideia") + 7, message.content.length)}"`)
            // setTimeout(message.delete, 10)
        console.log(`Você recebeu uma sugestão de ${message.member.nickname} (${message.member.id}): ${message.content.slice(message.content.indexOf("!ideia") + 7, message.content.length)}`)
        message.delete()
    }

    if (message.content.indexOf("!report") != -1) {
        client.channels.cache.get("732309222246842540").send(`${message.member.nickname} (${message.member.id}) reportou: "${message.content.slice(message.content.indexOf("!report") + 8, message.content.length)}"`)
            // setTimeout(message.delete, 10)
        console.log(`Você recebeu um reporte de ${message.member.nickname} (${message.member.id}): ${message.content.slice(message.content.indexOf("!report") + 8, message.content.length)}`)
        message.delete()
    }

    if (message.content.indexOf("!ping") != -1) {
        const m = await message.channel.send("Calculando Ping...");
        m.edit(`O tempo de resposta é de ${m.createdTimestamp - message.createdTimestamp}ms.`);
    }

    if (message.content.indexOf("!separador") != -1) {
        message.channel.send("|")
    }

    if (message.content.indexOf("!contrabarra") != -1) {
        message.channel.send(`\\`)
    }

    if (message.content.indexOf("!copy") != -1) {
        message.channel.send("©")
    }

    if (message.content.indexOf("!musiCopy") != -1) {
        message.channel.send("℗")
    }

    // Respostas Zueira

    function clb() {
        var chance = parseInt(Math.random() * 100)
        if (chance == "93") {
            msgClb = message.channel.send(`Cala a boca, ${message.member.nickname}!`)
                .then(msg => {
                    msg.delete({ timeout: 3000 })
                })
        }
    }
    clb()

    if (message.content.toLowerCase().indexOf("bot") != -1 && message.content.toLowerCase().indexOf("bom dia") != -1) {
        message.channel.send("Bom dia, " + message.member.nickname + "!")
    } else if (message.content.toLowerCase().indexOf("bot") != -1 && message.content.toLowerCase().indexOf("boa tarde") != -1) {
        message.channel.send("Boa tarde, " + message.member.nickname + "!")
    } else if (message.content.toLowerCase().indexOf("bot") != -1 && message.content.toLowerCase().indexOf("boa noite") != -1) {
        message.channel.send("Boa noite, " + message.member.nickname + "!")
    }

    if (message.member.id != "731904732024537149" && perm == 1) {

        if (message.content.toLowerCase().indexOf("bora comemorar") != -1) {
            message.channel.send("Bora! Uhullll :partying_face: ")
        }

        if (message.content.toLowerCase().indexOf("estou triste") != -1) {
            message.reply("fica assim não, se não vou ficar também :(")
        }

        if (message.content.indexOf("bonoro") != -1) {
            var rM = parseInt(Math.random() * 10)
            var bonorossauro = [
                "Usou máscara? Kkk viado",
                "É só uma gripezinha...",
                "Eu tenho histórico de atleta",
                "Acima de nós só Deus.",
                "Cala a boca!",
                "Não precisa entrar em pânico.",
                "Vamos todos morrer um dia",
                "Eu falei PF, não Polícia Federal!",
                "Se o vírus pegar em mim, não vou sentir quase nada. Fui atleta e levei facada",
                "Não sou coveiro"
            ]
            message.channel.send(bonorossauro[rM])
        }

        if (message.content.indexOf("!rpb") != -1) {
            var numAle = parseInt(Math.random() * 10)
            var frase = [
                "Onde trabalhamos para colocar vida em seus projetos",
                "Onde tudo que é bom pode ficar melhor",
                "A cada pedido feito um cliente satisfeito",
                "Colando a cara no seu projeto desde 2017",
                "A maquiagem do seu projeto",
                "As melhores criações vem dos melhores profissonais",
                "De games a banners fazendo o melhor",
                "Satisfação inclusa no contrato",
                "Com base na edição fazendo a base da sua criação",
                "Ajudando seu projeto sem nem sair de casa",
                "Projetando o futuro da sua empresa"
            ]
            message.channel.send('Siga-nos nas nossas redes sociais!\nYouTube: https://www.youtube.com/RPBGames e https://www.youtube.com/channel/UC7FEYRqLGGPFQ-f2C2U2oQw\nFacebook: https://www.facebook.com/RPB-Games-223221798274152/\nTwitter:  https://www.twitter.com/RpbGames\nInstagram: https://www.instagram.com/rpb_gamer/?igshid=12sb2auzboh9l e https://www.instagram.com/rpb_company/\nTwitch: https://twitch.tv/rpb_games\n"**' + frase[numAle] + '**"')
        }

        if (message.content.indexOf("historia") != -1) {
            message.channel.send(`**A história da RPB**\nA RPB começou em 2017 com um grupo de amigos, no início era apenas RPB Games, que significava "Richard, Pedro e Bryan". Nós iniciamos pensando apenas em ser um time de E-Sports, entrar para competições, campeonatos, eventos e etc. Tentamos de tudo para entrar para esse "mundo" de jogos, mas no começo deu não deu muito certo...`)
            message.channel.send(`Em 2018 criamos nosso canal no YouTube e nossas redes sociais, com o pensamento de, adquirirmos um público para nossos conteúdos e pessoas que apoiem nosso "time" começamos a fazer varias postagens, assim conseguindo nossas primeiras curtidas. Começamos a adicionar mais pessoas na equipe e assim também aumentamos nossos serviços como time. A partir disso, a RPB deixou de ser "Richard. Pedro e Bryan" e passou a ser Radical Power Bear Games.`)
            message.channel.send(`Em 2019 RPB Games se tornou o nome de apenas uma parte da "RPB Company" a primeira empresa de jovens com menos de 18 anos, começamos a pensar alto, adicionamos cargos na empresa e a dividimos em áreas (RPB Design, RPB Hardware, RPB Software, RPB Studio), foi nesse período também que começamos a fazer nossas primeiras vendas, das nossas primeiras edições, ainda estávamos aprendendo a editar. Foi em 2019 que começamos com os cursos para os participantes da RPB company, cursos de desenvolvimento de software e outros um pouco mais simples. No fim do ano, foi quando fomos para o primeiro evento de games: a Brasil Game Show (BGS). Foi experiência incrível para quem tanto sonhava com coisas assim. Também foi nessa época que começamos com a "game house" (um pequeno campeonato de jogos entre os participantes da RPB Company).`)
            message.channel.send(`Em 2020, começamos a levar a RPB Company mais a sério, começamos a vender edições de imagens e videos com muito mais qualidade. Esse ano foi quando o sonho começou a se tornar realidade, começamos a imaginar mais ainda como poderia funcionar a RPB company, pensamos em futuros consoles, aplicativos, redes sociais, jogos, videoclipes e muito mais coisas que a RPB poderia futuramente fazer. Muitas reuniões com os participantes para decidir oque a RPB poderia fazer, como lucrar, como tornar a RPB Company em uma verdadeira empresa de tecnologia e como dar orgulho para nossas famílias que nos apoiaram e apoiam mesmo com muitas incertezas.`)
        }

        if (message.content.indexOf("!verdade") != -1 || message.content.indexOf("!fato") != -1) {
            var num = parseInt(Math.random() * 10)
            var vdds = [
                "A RPB Company é uma empresa com vários trabalhos (que os resultados são incríveis).",
                "A RPB vai dominar o mundo.",
                "A RPB Company é a melhor empresa do mundo!",
                "A RPB Company é composta 100% por profissionais.",
                "Esse bot ainda está em desenvolvimento.",
                "A RPB foi criada em 22 de julho de 2017.",
                "A RPB é uma pequena equipe com 6 membros.",
                "A RPB faz os melhores trabalhos de design do mundo.",
                "A RPB Games é a parte que vai dominar o mundo dos games. 😎",
                "A RPB está sempre com você. 😉"
            ]

            message.channel.send("Aqui vai um fato: " + vdds[num])
        }

        if (message.content.indexOf("!ajuda") != -1 || message.content.indexOf("!help") != -1) {
            message.channel.send("Comandos atualmente disponíveis:\n```!help - Mostra comandos disponíveis e sua sintaxe. Sintaxe: !help\n!ajuda - Vinculado à !help. Sintaxe: !ajuda\n!fato - Exibe um fato aleatório sobre a RPB. Sintaxe: !fato\n!verdade - Vinculado à !fato. Sintaxe: !verdade\n!points - Adiciona, Seta ou Remove pontos de certo usuário (ainda não terminado). Sintaxe: !points <add/set/remove> <quantidade> <usuário> (Requer permissão)\n!historia - Conta a história da RPB. Sintaxe: !historia\n!rpb - Divulga as redes sociais da RPB. Sintaxe: !rpb\n!notify - Envia uma notificação com um link personalizado no canal #notificações. Sintaxe: !notify | <url> (Requer permissão)\n\nAchou algum problema? Reporte com !report <mensagem>```")
        }
    }

    ///////////////////

    if (message.member.id == "460973228748177420" || message.member.id == "404444558500560896" && message.member.id != "731904732024537149" && perm == 1) {
        var mmb = message.author
        if (message.content.indexOf("!") == 0) {
            if (message.content.indexOf("!report") == -1 && message.content.indexOf("!ideia") == -1) {
                console.log(message.member.nickname + " utilizou " + message.content)
            }
            if (message.content.indexOf("say") != -1) {
                var mensagem = message.content
                if (mensagem.slice(mensagem.indexOf("say") + 4, mensagem.length).length != 0) {
                    message.channel.send(mensagem.slice(mensagem.indexOf("say") + 4, mensagem.length))
                } else {
                    message.channel.send("Não é possível enviar uma mensagem vazia!")
                }
            }

            if (message.content.indexOf("points") != -1 && message.member.id == "460973228748177420" || message.member.id == "404444558500560896") {
                var mario = [message.content.replace(/[^\d]+/g, '')]
                var autorNome = message.member.nickname
                if (message.content.indexOf(" set") != -1) {
                    message.member.setNickname("[" + mario[mario.length - 1] + "] " + "Mário")
                    message.channel.send(mario + " pontos setados para mário")
                } else if (message.content.indexOf(" add") != -1) {
                    message.member.setNickname()
                } else if (message.content.indexOf("points") != -1) {
                    message.channel.send("Sintaxe Incorreta. Para utilizar o comando !points, use:\n!points <set/add/remove> <quantia> <usuário>. Para mais informações, envie !help ou !ajuda")
                }
            }

            // Para citar o usuário, utiliza-se os seguintes comandos: member.nickname
            // Para dizer o nome do usuário que utilizou o comando, utiliza-se: message.member.nickname
            // Aqui vai um exemplo que será executado ao utilizar o comando !nome

            // if (message.content.indexOf("nome") != -1) {
            //     message.channel.send(`Olá, ${message.member.nickname}! Como vão as coisas? Pelo que eu estou vendo aqui, você possui ${message.member.nickname.replace(/[^\d]+/g, '')} RPB Points`)
            // }

            // if (message.content.indexOf("!devInfo--") != -1 && message.member.id == "460973228748177420" || message.member.id == "404444558500560896") {
            //         // message.channel.send("Remove all characters that isn't a number - string.replace(/[^\d]+/g, '')")
            //         // message.channel.send("message.channel.send('message') - Send a message as bot, but it's just executed when you call that function.")
            //         // message.channel.send("You can use message.reply('yourReply') to reply an user's message. It automatically add an '@' before user's name")
            //         // message.channel.send(`Discord file name: 'package.json' at D: \ Área de Trabalho \ RPB Games \ Discord \ RPBBot \ package.json'`)
            // }

            if (message.content.indexOf("!notify") != -1 && alreadyNotify == 0) {
                alreadyNotify = 1
                autor = mmb
                message.channel.send("Envie uma notificação.")
                setTimeout(function() { notifyPerm = 1 }, 1000)
            } else if (message.content.indexOf("!cancel") != -1 && alreadyNotify == 1 && autor == mmb) {
                message.channel.send("Operação de notificação cancelada!")
                alreadyNotify = 0
            } else if (alreadyNotify == 1) {
                message.channel.send("Uma notificação já está em andamento. Aguarde o outro usuário enviar o link.")
            }

            // if (message.content.indexOf("!sendTest") != -1) {
            //     client.channels.cache.get("697897101031374879").send('Testeee')
            // }
        }

        if (message.content.indexOf("https://") == -1 && mmb == autor && alreadyNotify == 1 && notifyPerm == 1) {
            var textM = message.content
            alreadyNotify = 0
            notifyPerm = 0
            message.channel.send("Notificação enviada!")
            client.channels.cache.get("696906416883236904").send(`Ei, @everyone! ${message.member.nickname} enviou uma mensagem:\n"${textM}"`)
        } else if (message.content.indexOf("https://") != -1 && mmb == autor && alreadyNotify == 1) {
            var linkM = message.content
            alreadyNotify = 0
            notifyPerm = 0
            message.channel.send("Notificação enviada!")
            client.channels.cache.get("696906416883236904").send(`Ei, @everyone! ${message.member.nickname} enviou um link, dá uma olhada:\n${linkM}`)
                // message.channel.send(mmb == autor)
        }
    }
})

client.login(token)