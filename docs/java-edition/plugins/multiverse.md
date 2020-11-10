# Multiverse多世界插件

## 插件介绍

插件的基本功能  

- 可实现服务器多种不同种类的世界创建/删除  

- 可实现外部地图挂载  

- 可定制地图重生位置和重生地图  

- 可根据权限设置是否可以传送  

- 可定制传送所需费用，费用可以以来经济插件也可定制扣除指定物品  

- 可定制世界前缀，可自定颜色  

- 可定制不同世界的模式，生物是否生成  

- 可以通过命令清除某一世界的某种生物  

- 可以通过各种命令插件激活此插件命令  

- 也可通过传送插件进行多世界传送；*此方法并未测试是否激活该插件的费用传送功能  

- 可通过该更多插件来提升此插件的功能 *创建更多种类的世界  

## 插件安装

### 下载
`multiverse多世界插件:` <a href="https://dev.bukkit.org/projects/multiverse-core/files">下载地址</a>

### 安装

`关闭服务器`  
`打开plugins文件夹`  
`放入multiverse多世界插件`  
`启动服务器`  
`安装完成！`  

## 命令

::: details 点击查看代码

```yml
#命令语法
        mv [FILTER] [PAGE #]
        #发送版本信息至控制台
        mv version -[pbg]
        #列出所有世界名称
        mv list
        #列出综合信息
        mv info [WORLD]
        */mv info [世界名称] [页码]
        #创建世界
        mv create {名字} {环境} -s [种子] -g [生成器[:ID]] -t [生成器] [-n] -a [true|false]
        #复制某个世界
        mv clone {目标} {名字} -g [生成器[:ID]]
        #转换某个世界的类型
        mv import {名字} {环境} -g [生成器[:ID]] [-n]
        #重新加载配置文件
        mv reload
        #重置当前世界的默认出生点为脚下
        mv setspawn
        #显示当前位置信息
        mv coord
        #将完价传送至某世界 出生点请参考 Setspawn 命令
        mv tp [PLAYER] {世界}
        #查看指定世界有哪些玩家
        mv who [WORLD|--all]
        #将玩家传送至某世界 出生点请参考 setspawn 命令
        mv spawn [PLAYER]
        #卸载某个世界 这个指令不会删除该世界文件夹。也不会删除config配置文件内的时杰信息；
        mv unload {世界}
        #加载某个世界
        mv load {世界}
        #卸载某个世界并移除World.yml 内的世界信息，这个命令不删除该世界文件夹
        mv remove {世界}
        #删除服务器内的某个世界
        mv delete {世界}
        #重新生成某个世界，将会清空世界内所有方块；
        mv regen {世界} [-s [SEED]]
        */mv regen [世界名称] -s [种子]
        *不带-s 使用原有种子重置世界
        #等待系统提示使用此命令时候，输入此命令；如系统不提示该命令无任何效果；
        mv confirm
        #修改世界的参数设置；
        mv modify {set设置|add添加|remove移除|clear清除} ...
        mv modify add {值} {设置} [WORLD]
        mv modify set {设置} {值} [WORLD]
        mv modify remove {设置} {值} [WORLD]
        mv modify clear {设置} [WORLD]
        #清除某世界的生物
        mv purge [WORLD|all] {all全部|animals动物|monsters敌对怪物|生物名}
        #修改全局设置 建议手动修改配置文件后重新加载配置文件
        mv config {项目} {变量}
        #列出世界上的锚点
        mv anchor {名字} [-d]
        #列出可用的世界类型和环境类型
        mv env
        #在控制台显示调试信息，需要开启调试模式
        mv debug [1|2|3|off|silent]
        #打开或关闭服务器启动时加载信息；
        mv silent [true|false|on|off]
        #列出生成器插件 默认无插件
        mv generators
        #检查玩家权限是否允许去某地
        mv check {玩家} {目的地}
        #运行一个脚本
        mv script {脚本} [目标]
        mv gamerule {RULE} {VALUE} [WORLD]
        mv gamerules [WORLD]
```

:::

## 权限

::: details 点击查看代码

```yml
权限列表
        帮助权限
            multiverse.help-允许用户使用/ MV的帮助
        访问权限
            multiverse.access.name-允许用户使用指定的世界
            multiverse.exempt.name-允许用户免费进入指定世界
            mv.bypass.gamemode.name-允许用户绕过配置游戏模式访问世界
        传送权限
            multiverse.teleport.self.name-允许用户传送自己到另一个世界
            multiverse.teleport.other.name-允许用户传送自己和他人到另一个世界
        信息权限
            multiverse.core.confirm
            multiverse.core.coord
            multiverse.core.info
            multiverse.core.list.environments
            multiverse.core.list.who
            multiverse.core.list.worlds
        创建权限
            multiverse.core.create-允许用户创建的世界
            multiverse.core.import-允许用户导入的世界
            multiverse.core.modify-允许用户修改的世界
            multiverse.core.modify.add允许用户使用添加部分的修改命令
            multiverse.core.modify.clear-允许用户使用修改命令
            multiverse.core.modify.modify
            multiverse.core.modify.remove
            multiverse.core.modify.set-允许用户使用配置部分的修改命令multiverse.core.reload-允许用户重新加载配置文件
        产卵的权限
            multiverse.core.spawn.other
            multiverse.core.spawn.self
            multiverse.core.spawn.set
        删除权限
            multiverse.core.delete
            multiverse.core.purge
            multiverse.core.remove
            multiverse.core.unload
        其他权限
            multiverse.core.anchor
            multiverse.core.config
            multiverse.core.debug
            multiverse.core.generator
            multiverse.core.load
            multiverse.core.sleep
            multiverse.core.spout
            multiverse.core.tp *。
            multiverse.core.tp.self
            multiverse.core.version
            multiverse.core.silent
```

:::

### 配置文件

config.yml(部分)  

::: details 点击查看代码

```yml
multiverse-configuration:
        ==: com.onarandombox.MultiverseCore.MultiverseCoreConfiguration
        #是否开启多世界功能
        enforceaccess: 'false'
        #是否显示聊天时的世界前缀
        prefixchat: 'true'
        #慎重修改
        prefixchatformat: '[%world%]%chat%'
        useasyncchat: 'true'
        #是否开启权限访问
        teleportintercept: 'true'
        #是否用该插件锁定出生世界
        firstspawnoverride: 'true'
        #是否开启用户权限通知
        displaypermerrors: 'true'
        globaldebug: '0'
        silentstart: 'true'
        messagecooldown: '5000'
        #版本号！不要改
        version: '2.9'
        #玩家默认出生世界
        firstspawnworld: world
        teleportcooldown: '1000'
        defaultportalsearch: 'false'
        portalsearchradius: '128'
```
:::

worlds.yml  

::: details 点击查看代码

```yml
worlds.yml
    world:
        ==: MVWorld
        #是否隐藏世界前缀
        hidden: 'false'
        #前缀 名称
        alias: ''
            将文件改为 ANSI编码 - '' 改为 "" 在双引号内输入名称 支持颜色
            例如            alias: "&2主世界"
            *再次加载配置文件后会将文字转码 无需在意
        #前缀 颜色
        color: WHITE
            *值        AQUA, BLACK, BLUE, DARKAQUA, DARKBLUE, DARKGRAY, DARKGREEN
                         DARKPURPLE, DARKRED, GOLD, GRAY, GREEN, LIGHTPURPLE, RED, YELLOW, WHITE
        #样式
        style: NORMAL
                *值        NORMAL 正常, MAGIC ?? , BOLD 粗体 , STRIKETHROUGH 删除线,
                            UNDERLINE 下划线 , ITALIC 斜体
        #是否开启PVP
        pvp: 'false'
           *值        trule / false
        scale: '1.0'
        #在这个世界死亡后在那个世界重生 重生点请参考地图的 setspawn设置点
        respawnWorld: ''
        #是否允许变化天气
        allowWeather: 'true'
        #设置该地图难度
        difficulty: PEACEFUL
            *值        peaceful 和平 , easy 简单, normal 中等, hard 难
        #生物生产
        spawning:
            ==: MVSpawnSettings
        #动物
        animals:
            ==: MVSpawnSubSettings
            #是否允许生成
            spawn: 'true'
            spawnrate: '-1'
            #例外列表
            exceptions: []
                例子 *不允许生成 但 除了猪
                    animals
                        spawn: fals
                        exceptions
                        - pig
        #怪物
        monsters:
            ==: MVSpawnSubSettings
            spawn: 'true'
            spawnrate: '-1'
            exceptions: []
        #世界费用
        entryfee:
            ==: MVEntryFee
            #金额
            amount: '0.0'
            #货币ID
            currency: '-1'
                例子  *收5个泥土进入        
                    entryfee:
                        amount: 5
                        currency: 3
                例子 2 *收费13.75块钱进入 -许经济插件
                    entryfee
                        amount: 13.7
                        currency: -1
        #是否允许饥饿耗尽
        hunger: 'true'
        #自动回血 貌似只对和平模式起效
        autoHeal: 'true'
        #是否将玩家传送到安全位置
        *在死亡或后是否将玩家传送到安全位置
        adjustSpawn: 'true'
        portalForm: ALL
        #默认游戏模式
        gameMode: SURVIVAL
        #是否将此区域强制加载内存
        *无玩家是是否加载该区域
        keepSpawnInMemory: 'false'
        #setspawn坐标 请勿手动修改
        spawnLocation:
            ==: MVSpawnLocation
            x: -221.0
           y: 63.0
            z: 219.0
            yaw: 0.0
        #是否在启动服务器时自动加载该世界
        autoLoad: 'true'
        #玩家是否重生在该世界的床上
        bedRespawn: 'true'
        #世界黑名单 该黑名单世界无法传送到该世界
        worldBlacklist: []
        #世界类型 建议生成世界时填入 请勿手动修改
        environment: NORMAL
        *值 NETHER, END, NORMAL
        #世界种子
        seed: '4337274906620320171'
        generator: 'null'
        playerLimit: '-1'
        allowFlight: 'true'
```

:::

本页内容来源于 <a href="https://www.mcbbs.net/thread-666177-1-1.html">MCBBS</a>  
