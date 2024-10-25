drop database if exists fitascacete;
create database fitascacete;
use fitascacete;

CREATE TABLE categoria (
    id SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE genero (
    id SERIAL PRIMARY KEY,
    nome_genero VARCHAR(255) NOT NULL
);


CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    descricao VARCHAR(2000) NOT NULL,
    preco_produto DECIMAL(10 , 2 ) NOT NULL,
    imagem_produto VARCHAR(255),
    id_categoria BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_categoria)
        REFERENCES categoria (id),
    id_genero BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_genero)
        REFERENCES genero (id)
);

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

DELETE FROM user;

insert into user values (1, "julia","admin@email", "admin");

insert into categoria values 
(1, 'VHS'),
(2, 'CASSETE');

insert into genero(nome_genero) values 
('Crime'),
('Aventura'),
('Comédia'),
('Romance'),
('Terror'),
('Drama'),
('Ficção científica'),
('Ação'),
('Triller'),
('Rock'),
('Pop');

insert produto(nome_produto, descricao, preco_produto, imagem_produto, id_categoria, id_genero) values 
('Pulp Fiction',  'Vincent Vega (John Travolta) e Jules Winnfield (Samuel L. Jackson) são dois assassinos profissionais que trabalham fazendo cobranças para Marsellus Wallace (Ving Rhames), um poderoso gângster. Vega é forçado a sair com a garota do chefe, temendo passar dos limites; enquanto isso, o pugilista Butch Coolidge (Bruce Willis) se mete em apuros por ganhar a luta que deveria perder.', 165.90, '/vhs/pulpfiction.jpg',1, 1),
('Thelma & Louise', 'Louise Sawyer (Susan Sarandon) é uma garçonete quarentona e Thelma (Geena Davis) é uma jovem dona-de-casa. Cansadas da vida monótona que levam, as amigas resolvem deixar tudo para trás e pegar a estrada. Durante a viagem, elas se envolvem em um crime e decidem fugir para o México, mas acabam sendo perseguidas pela polícia americana', 75.60, '/vhs/thelmalouise.jpg', 1, 2),
('Poderoso Chefão', 'Heroi de guerra e filho caçula de um poderoso chefe do crime de Nova York, Michael Corleone se envolve nos negócios da família depois que tentam assassinar seu pai.', 110.90, '/vhs/poderosochefao.jpg',1, 1),
('Ferris Buellers Day Off',  'No último semestre do colégio, Ferris Bueller (Matthew Broderick) sente um incontrolável desejo de matar a aula e planeja um grande programa na cidade com sua namorada (Mia Sara), seu melhor amigo (Alan Ruck) e uma Ferrari. Só que para poder realizar seu desejo ele precisa escapar do diretor do colégio (Jeffrey Jones) e de sua irmã (Jennifer Grey).', 85.70, '/vhs/ferris.jpg', 1, 3),
('O Fabuloso Destino de Amélie Poulain', 'Após deixar a vida de subúrbio que levava com a família, a inocente Amélie (Audrey Tautou) muda-se para o bairro parisiense de Montmartre, onde começa a trabalhar como garçonete. Certo dia encontra uma caixa escondida no banheiro de sua casa e, pensando que pertencesse ao antigo morador, decide procurá-lo ­ e é assim que encontra Dominique (Maurice Bénichou). Ao ver que ele chora de alegria ao reaver o seu objeto, a moça fica impressionada e adquire uma nova visão do mundo. Então, a partir de pequenos gestos, ela passa a ajudar as pessoas que a rodeiam, vendo nisto um novo sentido para sua existência. Contudo, ainda sente falta de um grande amor.', 166.60, '/vhs/ameliepoulain.jpg', 1, 4),
('A bruxa de Blair', 'Três estudantes de cinema embarcam nas matas do estado de Maryland para fazer um documentário sobre a lenda da bruxa de Blair e desaparecem misteriosamente. Um ano depois, uma sacola cheia de rolos de filmes e fitas de vídeo foi encontrada na mata. As imagens registradas pelo trio dão algumas pistas sobre seu macabro destino.', 94.30, '/vhs/bruxablair.jpg', 1, 5),
('Boogie Nights - Prazer Sem Limites', 'Eddie Adams (Mark Wahlberg) é um jovem de 17 anos sexualmente bem-dotado. Ele é descoberto por Jack Horner (Burt Reynolds), um diretor veterano que o transforma em Dirk Diggler, uma celebridade da subcultura do mundo pornô no apogeu dos anos 70. O sucesso faz com que Eddie se envolva no mundo das drogas e a súbita fama pode ter seu preço.', 105.05, '/vhs/boogie.jpg', 1,3 ),
('Cidade de Deus', 'Dadinho (Douglas Silva) e Buscapé são grandes amigos, que cresceram juntos imersos em um universo de muita violência. Na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio de Janeiro, os caminhos das duas crianças divergem, quando um se esforça para se tornar um fotógrafo e o outro o chefe do tráfico. Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que vive amedrontado com a possibilidade de se tornar um bandido, e acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, enquanto Dadinho, agora Zé Pequeno (Leandro Firmino), se torna o temido chefe do tráfico da região, continuando com o legado de violência que remonta a décadas anteriores - e parece ser infinita. Considerado um dos melhores filmes da história do cinema brasileiro.', 78.90, '/vhs/cidadededeus.jpg', 1, 6),
('Matrix', 'Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro. Em todas essas ocasiões, acorda gritando no exato momento em que os eletrodos estão para penetrar em seu cérebro. À medida que o sonho se repete, Anderson começa a ter dúvidas sobre a realidade. Por meio do encontro com os misteriosos Morpheus (Laurence Fishburne) e Trinity (Carrie-Anne Moss), Thomas descobre que é, assim como outras pessoas, vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas, criando a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia. Morpheus, entretanto, está convencido de que Thomas é Neo, o aguardado messias capaz de enfrentar o Matrix e conduzir as pessoas de volta à realidade e à liberdade.', 105.90, '/vhs/matrix.jpg', 1, 7),
('Jurassic Park', 'Um parque construído por um milionário (Richard Attenborough) tem como habitantes dinossauros diversos, extintos a sessenta e cinco milhões de anos. Isto é possível por ter sido encontrado um inseto fossilizado, que tinha sugado sangue destes dinossauros, de onde pôde-se isolar o DNA, o código químico da vida, e, a partir deste ponto, recriá-los em laboratório. Mas, o que parecia ser um sonho se torna um pesadelo, quando a experiência sai do controle de seus criadores.', 77.50, '/vhs/jurassic.jpg', 1, 7),
('A Sociedade dos Poetas Mortos', 'Em 1959 na Welton Academy, uma tradicional escola preparatória, um ex-aluno (Robin Williams) se torna o novo professor de literatura, mas logo seus métodos de incentivar os alunos a pensarem por si mesmos cria um choque com a ortodoxa direção do colégio, principalmente quando ele fala aos seus alunos sobre a "Sociedade dos Poetas Mortos".', 90.99, '/vhs/sociedade.jpg', 1, 6),
('Clube da Luta', 'Jack (Edward Norton) é um executivo jovem, trabalha como investigador de seguros, mora confortavelmente, mas ele está ficando cada vez mais insatisfeito com sua vida medíocre. Para piorar ele está enfrentando uma terrível crise de insônia, até que encontra uma cura inusitada para o sua falta de sono ao frequentar grupos de auto-ajuda. Nesses encontros ele passa a conviver com pessoas problemáticas como a viciada Marla Singer (Helena Bonham Carter) e a conhecer estranhos como Tyler Durden (Brad Pitt). Misterioso e cheio de ideias, Tyler apresenta para Jack um grupo secreto que se encontra para extravasar suas angústias e tensões através de violentos combates corporais.', 169.90, '/vhs/clubeluta.jpg', 1, 8),
('Clube dos Cinco', 'Em virtude de terem cometido pequenos delitos, cinco adolescentes são confinados no colégio em um sábado, com a tarefa de escrever uma redação de mil palavras sobre o que pensam de si mesmos. Apesar de serem pessoas completamente diferentes, enquanto o dia transcorre eles passam a aceitar uns aos outros, fazem várias confissões e tornam-se amigos.', 55.50, '/vhs/clubecinco.jpg', 1, 3),
('Antes do Amanhecer', 'Jesse (Ethan Hawke), um jovem americano, e Celine (Julie Delpy), uma estudante francesa, se encontram casualmente no trem para Viena e logo começam a conversar. Ele a convence a desembarcar em Viena e gradativamente vão se envolvendo em uma paixão crescente. Mas existe uma verdade inevitável: no dia seguinte ela irá para Paris e ele voltará aos Estados Unidos. Com isso, resta aos dois apaixonados aproveitar o máximo o pouco tempo que lhes resta.', 45.70, '/vhs/antes.jpg', 1, 4),
('Tubarão', 'Um terrível ataque a banhistas é o sinal de que a praia da pequena cidade de Amity virou refeitório de um gigantesco tubarão branco, que começa a se alimentar dos turistas. Embora o prefeito queira esconder os fatos da mídia, o xerife local (Roy Scheider) pede ajuda a um ictiologista (Richard Dreyfuss) e a um pescador veterano (Robert Shaw) para caçar o animal. Mas a missão vai ser mais complicada do que eles imaginavam.', 55.50, '/vhs/tubarao.jpg', 1, 9);
 
 INSERT INTO produto (nome_produto, descricao, preco_produto, imagem_produto, id_categoria, id_genero) VALUES
('In Utero', 'In Utero é o terceiro e último álbum de estúdio da banda grunge americana Nirvana, lançado em 13 de setembro de 1993 pela DGC Records.', 105.90, '/cassete/inutero.jpg', 2, 10),
('Hatful of Hollow', 'Hatful of Hollow é uma coletânea musical da banda britânica de rock The Smiths, lançada em 12 de novembro de 1984 pela gravadora Rough Trade.', 99.90, '/cassete/hault.jpg', 2, 10),
('Appetite for Destruction', 'Lançado em 1987, Appetite for Destruction é o álbum de estreia da banda norte-americana de hard rock Guns N'' Roses.', 79.90, '/cassete/appetite.jpg', 2, 10),
('Like a Virgin', 'Like a Virgin é o segundo álbum de estúdio da artista musical estadunidense Madonna. Seu lançamento ocorreu em 12 de novembro de 1984.', 89.90, '/cassete/like.jpg', 2, 11),
('She''s So Unusual', 'She''s So Unusual é o álbum de estreia da cantora e compositora americana Cyndi Lauper, lançado em 14 de outubro de 1983 pela Portrait Records.', 75.90, '/cassete/she.jpg', 2, 11),
('Mamonas Assassinas', 'Mamonas Assassinas é o álbum de estreia e único álbum de estúdio gravado pela banda brasileira de rock cômico Mamonas Assassinas. O álbum foi lançado em 23 de junho de 1995.', 89.90, '/cassete/mamonas.jpg', 2, 10),
('A Night at the Opera', 'A Night at the Opera é o quarto álbum de estúdio da banda britânica de rock Queen, lançado em 21 de novembro de 1975 na Europa e em 2 de dezembro de 1975 nas Américas.', 105.00, '/cassete/night.jpg', 2, 10),
('Presence', 'Presence é o sétimo álbum de estúdio da banda britânica de rock Led Zeppelin, lançado pela Swan Song Records em 31 de março de 1976.', 89.90, '/cassete/presence.jpg', 2, 10),
('Some Girls', 'Some Girls é o décimo sexto álbum de estúdio na discografia americana e o décimo quarto na discografia britânica da banda inglesa de rock The Rolling Stones lançado em 1978 pela Rolling Stones Records.', 89.90, '/cassete/some.jpg', 2, 10),
('Master of Puppets', 'Master of Puppets é o terceiro álbum de estúdio lançado pela banda de thrash metal/heavy metal norte-americana Metallica, lançado em 3 de março de 1986 pela Elektra Records e o último álbum da banda com o baixista Cliff Burton.', 70.90, '/cassete/master.jpg', 2, 10),
('The Dark Side of the Moon', 'The Dark Side of the Moon é o oitavo álbum de estúdio da banda britânica de rock progressivo Pink Floyd, lançado em 1 de março de 1973 através da Harvest Records no Reino Unido e Capitol Records nos Estados Unidos.', 99.90, '/cassete/dark.jpg', 2, 10),
('New Jersey', 'New Jersey é o quarto álbum de estúdio da banda de hard rock Bon Jovi, lançado em 19 de setembro de 1988. O álbum possui o nome da terra natal dos integrantes do grupo.', 45.50, '/cassete/jersey.jpg', 2, 10),
('Highway to Hell', 'Highway to Hell é o sexto álbum de estúdio da banda australiana AC/DC, lançado a 27 de julho de 1979. É também o último álbum com o vocalista Bon Scott junto com a banda antes de sua morte em 1980.', 99.90, '/cassete/highway.jpg', 2, 10),
('Back in Black', 'Back In Black é o sétimo álbum de estúdio da banda australiana de hard rock AC/DC, lançado em 25 de Julho de 1980, 5 meses depois do falecimento do vocalista Bon Scott, o qual foi substituído por Brian Johnson.', 67.70, '/cassete/back.jpg', 2, 10),
('Abbey Road', 'Abbey Road é o 12º álbum de estúdio da banda britânica The Beatles. Foi lançado em 26 de setembro de 1969, e leva o mesmo nome da rua de Londres onde situa-se o estúdio Abbey Road.', 55.50, '/cassete/abbey.jpg', 2, 10),
('Help!', 'Help! é o quinto álbum de estúdio da banda britânica de rock The Beatles e a trilha sonora do filme de mesmo nome, lançado em 6 de agosto de 1965 pelo selo Parlophone.', 55.50, '/cassete/help.jpg', 2, 10),
('Thriller', 'Thriller é o sexto álbum de estúdio em carreira solo do artista estadunidense Michael Jackson, lançado em 30 de novembro de 1982, através da Epic Records.', 75.90, '/cassete/thriller.jpg', 2, 11);
