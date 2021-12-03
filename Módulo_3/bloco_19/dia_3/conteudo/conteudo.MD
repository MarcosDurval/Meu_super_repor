## NetWork Redes no Docker
 o Docker network , é uma espécie de rede virtualizada que permite que você conecte containers a uma determinada rede ou quantas redes Docker desejar, de forma que esses containers possam compartilhar informações através dessa rede.
 <br/>
 Por padrão, o Docker possui 3 redes que são criadas junto com ele: bridge , none e host . Cada uma delas tem características específicas quanto a conectividade para seus containers . Podemos consultá-las executando:
```
docker network ls
```

### Bridge

Ao ser iniciado, todo container é associado a uma rede e, caso uma rede não seja seja especificada explicitamente por nós, ele será associado a rede Bridge.
<br/>
Todos os containers associados a essa rede poderão se comunicar via protocolo TCP/IP e, se soubermos o IP do container que queremos conectar, podemos enviar tráfego a ele. Porém, os IPs de um container são gerados automaticamente, por isso não é muito útil fazermos a conexão dessa forma, pois sempre que o container for reiniciado, o IP poderá mudar.

### Host
Ao associarmos um container a essa rede, ela passa a compartilhar toda stack de rede do host , ou seja, da máquina que roda o ambiente Docker . O uso desta rede é recomendada apenas para alguns serviços específicos, normalmente de infra, em que o container precisa desse compartilhamento. Caso contrário, a recomendação é evitá-la.

### None

Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um container a ela, o mesmo ficará isolado. Ela é útil quando temos containers que utilizam arquivos para a execução de comandos ou para se comunicar, por exemplo, um container de backup ou que rode apenas um script localmente.

### criando uma rede:
```
docker network create -d bridge minha-rede

```
### listando as redes:
```
docker network ls
```
### conectando a uma rede específica:

```
docker network connect "minha-rede" "meu-container"

```
### desconectando de uma rede:
```
docker network disconnect "minha-rede" "meu-container"
```

# Volumes

existe uma a possibilidade de persistir os dados em um container , que é a utilização de volumes !

Utilizar um volume significa mapear uma pasta do nosso Sistema Hospedeiro ( Docker Host ), para o Sistema Convidado (o container ).
Assim, ela é vinculada ao container e mesmo que esse container seja removido, essa pasta permanecerá. Isso faz com que os dados não sejam perdidos.

o parâmetro -v (de 'volume') da forma -v < PASTA-LOCAL>:< PASTA-CONTAINER> :