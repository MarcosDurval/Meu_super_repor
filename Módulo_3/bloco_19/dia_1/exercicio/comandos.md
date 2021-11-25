#### 1- Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;
#### Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;


docker pull debian:stable-slim

### Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) 

docker container run -it debian:stable-slim 

### No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;

comando usando : 

retorno no terminal : cat /etc/*-realese

PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"


### Encerre o terminal ;

exit

### Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;

docker container ls -a

### Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;

docker container start aef

### Retome o container que foi criado anteriormente nesse exercício ;

docker container attach aef

### Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;

comando usado: cat /etc/debian_version

saida no terminal: 11.1

### Encerre o terminal ;

exit;

### Remova somente o container criado para esse exercício ;

docker container rm aef

### (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;

docker container -it --rm  andrius/ascii-patrol

  -i, --interactive          Keep STDIN open even if not attached
  -t, --tty                  Allocate a pseudo-TTY
necessario a consulta na documentção do docker onde notei que era necessario o uso do modo interativo -it