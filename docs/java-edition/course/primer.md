# 基础开服教程

## 前言

本篇内容将简要阐述如何启动一个Minecraft服务器(Java版)

## 准备工作

- 运行环境(电脑,服务器)  

- 服务端  

- 客户端  

## 服务端

这是一个spigot 1.12.2的服务端

![alt](/resources/Snipaste_2020-11-10_16-28-00.png)

其中

- `logs` 服务器日志存放目录  

- `plugins` 插件存放目录

- `world` 地图目录

- `banned-ips.json` 封禁玩家文件  

- `banned-players.json` 封禁玩家文件  

- `bukkit.yml` 配置文件

- `commands.yml` 命令配置文件

- `eula.txt` 协议许可

- `help.yml` 帮助配置文件

- `ops.json` OP数据文件  

- `permissions.yml` 权限文件

- `spigot.yml` 配置文件

- `spigot-1.12.2.jar` 核心文件

- `whitelist.json` 白名单  

### 启动服务端

启动服务端需要Java运行环境,在安装完成后打开当前页面的shell窗口(windows为cmd或者powershell,打开当前目录快捷键为shift键+鼠标右键-在此处打开cmd/powershell窗口)  

启动命令为

```cmd
java -Xms{min}g -Xmx{max}g -jar {jarFile}
```

其中

- `{min}` 最小内存分配  

- `{max}` 最大内存分配  

- `{jarFile}` 服务端核心文件  

根据演示使用服务端,完整命令如下

```cmd
java -Xms1g -Xmx1g -jar spigot-1.12.2.jar
```

::: warning
最大内存不能超过运行环境物理最大内存
:::

![alt](/resources/Snipaste_2020-11-10_16-41-31.png)

当出现`Done (1.688s)! For help, type "help" or "?"`时,说明服务器开启成功  

这时可以用客户端进入游戏

打开客户端-多人游戏-添加服务器

![alt](/resources/Snipaste_2020-11-10_16-44-12.png)

其中服务端地址为你服务端运行环境的ip地址(演示环境为本机运行,所以ip为127.0.0.1即本机地址)加端口号,Minecraft服务端默认端口号为25565

点击完成

![alt](/resources/Snipaste_2020-11-10_16-46-22.png)

服务器成功启动

### 服务端配置文件

`eula.txt`

本文件主要阐述Minecraft服务器相关许可(EULA),您必须同意该许可才可以使用服务端

```txt{3}
#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula).
#Sun Jul 07 01:22:54 CST 2019
eula=true //改为true则同意该许可
```

`server.properties`

该配置文件包含服务器基本的相关配置

::: details 点击查看代码

```properties
#Minecraft server properties
#Tue Nov 10 16:41:22 CST 2020
spawn-protection=16
generator-settings=
force-gamemode=false
allow-nether=true
gamemode=0
broadcast-console-to-ops=true
enable-query=false
player-idle-timeout=0
difficulty=1
spawn-monsters=true
op-permission-level=4
pvp=true //是否开启PVP
snooper-enabled=true
level-type=DEFAULT
hardcore=false
enable-command-block=false
max-players=20 //服务器最多人数
network-compression-threshold=256
resource-pack-sha1=
max-world-size=29999984
server-port=25565 //服务器端口
debug=false
server-ip=
spawn-npcs=true
allow-flight=false
level-name=world
view-distance=10
resource-pack=
spawn-animals=true
white-list=false //是否开启白名单
generate-structures=true
online-mode=false //是否开启正版验证
max-build-height=256
level-seed=
prevent-proxy-connections=false
enable-rcon=false
motd=A Minecraft Server //服务器MOTD
```

:::