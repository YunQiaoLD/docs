# Essentials插件

## 插件介绍

### 前言

Essentials基本是服务端必备插件,他提供了基本的经济,权限,保护等必须的功能  
不过在1.7.10之后,Essentials分割成了几个版本,所以针对不同版本的服务端请选择适用的插件

- `Essentials` 1.7.x

- `EssentialsX` 1.8.x-1.15

- `Spigot-Essentials` 1.8-1.13

### 插件组成

Essentials 是模块化的,它的安装包被分割成不同的jar文件,之所以这样做是因为如果与你喜欢的插件冲突的话可以进行很方便的替换  
我们的Essentials主要分成两部分"核心","额外项".核心是人们通常使用的部分,额外项是给一些有需要的人使用的，并且需要一些额外的设置,所以不要盲目的安装，除非你知道它们是做什么的  

- `Essentials` 这个主要的jar文件包括了绝大部分内容，你几乎能在这里发现所有的API，所有的源代码，以及链接Essentials套件所有其它部分的代码  

- `EssentialsChat` 包括“core”与“extra”两个部分. “core” 包括了Essentials用户最常用的部分，并包含一部分额外的设置. "extra"部分需要另外一些额外的配置, 并且其中大部分建议不要盲目的启用，除非你知道自己在做什么  

- `EssentialsSpawn` 包含基本的玩家生成, 这个插件让你可以定义玩家死亡后回到的地方,这个位置可以在游戏内有一位有着适当权限的玩家更改 , 也可以为每个人或组单独设置  

- `EssentialsAntiBuild` 是一个权限系统, 这个权限允许你显示谁可以建造,或谁可以放置/破坏哪种方块。 举个例子，限制玩家放置岩浆是很有用的  

- `EssentialsProtect` 是一个基本的世界保护系统, 这个模块允许你去设置基本的规则, 例如放置爬行者的爆炸破坏建筑物以及防止火焰传播, 控制哪些生物可以被生成  

- `EssentialsGeoIP`提供地理IP查找，该模块可以根据公共IP数据库大致告诉您玩家登录的位置  

- `EssentialsGroupManager`创建权限系统，该系统用于创建参与玩家的用户组，从而允许诸如“ builder”，“ mod”和“ admin”之类的等级  

## 插件安装

### 下载

`Essentials(1.7.x):` <a href="https://dev.bukkit.org/projects/essentials/files">下载地址</a>  

`EssentialsX(1.8.x-1.15):` <a href="https://ci.ender.zone/job/EssentialsX/lastSuccessfulBuild/">下载地址</a>  

`Spigot-Essentials(1.8.x-1.13):` <a href="https://hub.spigotmc.org/jenkins/job/Spigot-Essentials/">下载地址</a>  

### 安装

`关闭服务器`  
`打开plugins文件夹`  
`放入Essentials核心`  
`选择你想要的分项并放入`  
`启动服务器`  
`安装完成！`  

## 配置文件

`config.yml`
::: details 点击查看代码

```yml
############################################################
# +------------------------------------------------------+ #
# |                     注意事项                         | #
# +------------------------------------------------------+ #
############################################################

# 对应Essentials版本 pre 2.11.1.2                此文本由 白宝石小组 大刘 制作
# 文本前带有"#"的都是阐释说明的内容,不会对格式产生影响.
# 如果你想要在该文件内添加非单字节内容,请务必要保存为UTF-8格式,而不是ANSI,否则可能出现乱码
# 如果加载插件时出现了问题(例如:ERROR:null),请注意:
#   - 没有tab这样的间隔(译注:锁定键上方的键):YAML文件仅支持普通的空格(译注:双字节空白字例外,且仅可用于说明或提示信息)
#   - 正确的"缩排书写"(译注:不懂的去百度一下Indent):YAML文件的层次结构完全依赖于首行缩排.
#   - 你已经"避免(原文:escaped)"了所有文本信息中的单引号.
#   - 带有符号的文本被用单引号或双引号隔绝开来.
#   - 如果一个冒号后面有文本,则冒号与文本间必须有一个空格.
#   - 有些设置只能设置"true"或"false"
#   - 你保存该文本为UTF-8格式,而不是其他default,ANSI等格式.

############################################################
# +------------------------------------------------------+ #
# |                Essentials 全局设置                   | #
# +------------------------------------------------------+ #
############################################################

# OP名字的颜色代码,填写0~9或a~f其中的一个数字或字母,填写'none'来冻结该功能.(译注:可到http://ess.khhq.net/mc/查看效果)
ops-name-color: 'c'

# 昵称的前缀符号,这样你能知道这不是他们真正的用户名.
nickname-prefix: '~'

# 如果你想用其他的插件来设置玩家名字,将其改为"false".
change-displayname: true

# 当这个选项开启时,在玩家显示的名字上添加的前缀或尾缀,会被显示在在线列表(TAB)中.
# 上面的"change-displayname"必须是true才有效.
change-playerlist: true

# 在玩家显示的名字上添加前缀或尾缀,然后会被显示在聊天、提示信息或在线列表中.
# 上面的"change-displayname"必须是true才有效.
# 如果你不设置该项,且essentialschat被安装了,其将会被默认为"true".
# 不要忘记去除前面的"#"
add-prefix-suffix: true

# 传送功能的冷却时间(以秒为单位),如/home, /tp等命令.
teleport-cooldown: 0

# 传送延迟时间(以秒为单位),在玩家被确实传送之前的时间.如果玩家在该时间内移动了或者受到攻击,传送将取消.
teleport-delay: 0

# 传送时无敌时间(以秒为单位)在玩家被确实传送之前的时间内,其他玩家不能攻击该玩家.
# 这同样可以阻止该玩家攻击其他玩家.
teleport-invulnerability: 4

# 治疗冷却时间(以秒为单位),/heal命令.
heal-cooldown: 60

# 禁止作弊命令/give,/item调出的物品黑名单列表.
# 例如 item-spawn-blacklist: 46,11,10
item-spawn-blacklist:

# 如果你想要调出物品的能力基于权限设置,就把该项设置为"true".
# 注意:上面的黑名单将被忽略.
# Permissions:
#  - essentials.itemspawn.item-all
#  - essentials.itemspawn.item-[itemname]
#  - essentials.itemspawn.item-[itemid]
#  - essentials.give.item-all
#  - essentials.give.item-[itemname]
#  - essentials.give.item-[itemid]
# 查看更多信息,请访问 http://wiki.ess3.net/wiki/Command_Reference/ICheat#Item.2FGive
permission-based-item-spawn: false

# 使用/spawnmob命令一次性生成生物的最大数量.
spawnmob-limit: 10

# 当OP使用"/lightning"(闪电)时是否提醒玩家,
warn-on-smite: true

# 服务器公告 和 服务器规定,现在分别存储在 motd.txt 和 rules.txt 中设置.

# 当一个命令与其它插件冲突,Essentials基础插件会默认尝试强行让其它插件获得优先权.
# 如果一个命令在列表中,Essentials基础插件会尝试给默认的命令优先权.
# 通常哪一个插件将胜出的几率是随机的.
#
# 如果你有两个插件并且命令相同而且你希望使用essentials,那么你需要了解 命令别名(alias).
# essentials 插件的 'god' 命令 'god' 别名 'egod'.
# 查看 http://wiki.bukkit.org/Bukkit.yml#aliases 了解更多信息

overridden-commands:
#  - god
#  - info

# 命令黑名单,冻结的命令在服务器将完全不可使用.
#当命令冲突时,在此禁用将无效果
disabled-commands:
#  - nuke
#  - nick

# 这些命令是当开启了/socialspy命令时可以看到的玩家私聊
# 你可以添加一些来自其他插件的命令
# 或者移除一些你不想看到的私聊命令
socialspy-commands:
  - msg
  - w
  - r
  - mail
  - m
  - t
  - whisper
  - emsg
  - tell
  - er
  - reply
  - ereply
  - email
  - action
  - describe
  - eme
  - eaction
  - edescribe
  - etell
  - ewhisper
  - pm

# 简约权限系统,受限制的命令已被移除.
# 现在我们有了一个白名单,所有不在该名单中的命令将只有OP能够使用.
# 如果你安装了Permissions之类的权限插件,这将不启作用!
# 这种方式只是为了当你想用更简单的方式管理命令时,给你提供方法.
# 这些是没有"essentials."部分的权限.
player-commands:
  - afk
  - afk.auto
  - back
  - back.ondeath
  - balance
  - balance.others
  - balancetop
  - build
  - chat.color
  - chat.format
  - chat.shout
  - chat.question
  - clearinventory
  - compass
  - depth
  - delhome
  - getpos
  - geoip.show
  - help
  - helpop
  - home
  - home.others
  - ignore
  - info
  - itemdb
#  - kit
#  - kits.tools
  - list
  - mail
  - mail.send
  - me
  - motd
  - msg
  - msg.color
  - nick
  - near
  - pay
  - ping
  - protect
  - r
  - rules
  - realname
  - seen
#  - sell
  - sethome
  - setxmpp
  - signs.create.protection
  - signs.create.trade
  - signs.break.protection
  - signs.break.trade
  - signs.use.balance
  - signs.use.buy
  - signs.use.disposal
  - signs.use.enchant
  - signs.use.free
  - signs.use.gamemode
  - signs.use.heal
  - signs.use.info
  - signs.use.kit
  - signs.use.mail
  - signs.use.protection
  - signs.use.repair
  - signs.use.sell
  - signs.use.time
  - signs.use.trade
  - signs.use.warp
  - signs.use.weather
  - spawn
  - suicide
  - time
  - tpa
  - tpaccept
  - tpahere
  - tpdeny
  - warp
  - warp.list
  - world
  - worth
  - xmpp

# /kit快速工具命令,注意:所有物品后面必须写明数量!
# 所有的kit物品最好容易获得, 在/costs中价格较低,权限要求较低.
# 格式: - 物品ID[:DataValue/Durability] 数量 [附魔:附魔等级]..[itemmeta:value]...
# 查看更多信息,请访问 http://wiki.ess3.net/wiki/Item_Meta
#  延迟时间(delay)以秒为单位.
# 查看更多信息,请访问 http://wiki.ess3.net/wiki/Kits
kits:
  tools:
    delay: 10
    items:
      - 272 1
      - 273 1
      - 274 1
      - 275 1
      - 387 1 title:&6新手帮助 author:服务器 book:新手帮助
  dtools:
    delay: 600
    items:
      - 278 1 efficiency:1 durability:1 fortune:1 name:&4Giga_Drill_Breaker lore:这钻头是突破天际的钻头
      - 277 1 digspeed:3 name:矮人 lore:挖掘|挖掘|挖洞
      - 298 1 color:255,255,255 name:白色的帽子 lore:美好的一天,美好的一天
      - 279:780 1
  notch:
    delay: 6000
    items:
      - 397:3 1 player:Notch
  color:
    delay: 6000
    items:
      - 387 1 title:&4书_&9与_&6颜色 author:Essentials lore:游戏内的颜色代码 book:颜色
  firework:
    delay: 6000
    items:
      - 401 1 name:愤怒的苦力帕 color:red fade:green type:creeper power:1
      - 401 1 name:星空 color:yellow,orange fade:blue type:star effect:trail,twinkle power:1
      - 401 2 name:太阳风 color:yellow,orange fade:red shape:large effect:twinkle color:yellow,orange fade:red shape:ball effect:trail color:red,purple fade:pink shape:star effect:trail power:1


# Essentials 木牌控制
# 查看网页 http://wiki.ess3.net/wiki/Sign_Tutorial 可以了解如何使用这些.
# 移除#可以激活相应的木牌功能. 想禁用所有的木牌功能, 使用命令/remove 每个牌子.
# 当其他任何类型木牌启用时,木牌彩字支持将默认启用.
# 木牌彩字并不是真实的彩字, 是使用颜色代码实现, 当拥有木牌彩字权限时才会有效.

enabledSigns:
  #- color
  #- balance
  #- buy
  #- sell
  #- trade
  #- free
  #- disposal
  #- warp
  #- kit
  #- mail
  #- enchant
  #- gamemode
  #- heal
  #- info
  #- spawnmob
  #- repair
  #- time
  #- weather

# 玩家与牌子之间互动的时间间隔
# 数值用该在1-20之间,20将几乎没有间隔.
# 较小的数值可以有效减少延迟,但是可能会惹怒玩家
sign-use-per-second: 4

# 当自动备份被取消时,使用批处理/bash 命令来备份.
backup:
  # 时间间隔,以分钟为单位.
  interval: 30
  # 除非你在这加入一个有效的备份命令或脚本,否则这个功能是无用的.
  # 使用命令 'save-all' 简单的强制保存世界,而不使用备份.
  # 命令: 'rdiff-backup World1 backups/World1'

# 设置该项为true激活为每个地标单独的传送权限.
per-warp-permission: false

# 当使用/list命令时,将玩家按组分类.
# 你可以隐藏或合并组,在下面设定/list的分类.
# 更加详细的说明和示例请查看wiki: http://wiki.ess3.net/wiki/List
list:
    # 列出需要合并的组
    #Staff: owner admin moderator
    Admins: owner admin
    # 被限制的组,可以显示的玩家名字数量
    #builder: 20
    # 隐藏的组
    #default: hidden
    # 没有组的玩家
    #Players: '*'

# 是否在服务器窗口上显示更多的输出信息.
debug: false

# 设置所有消息的语言文件.
# 如果没有设置,将使用默认语言文件.
# 例如,使用中文语言文件,设置locale为zh,即可使用语言文件"messages_zh.properties"
# 不要忘记去除"#"
# 查看更多信息,请访问 http://wiki.ess3.net/wiki/Locale
locale: zh

# 当玩家退出时,是否关闭他的上帝模式.
remove-god-on-disconnect: false

# 自动AFK(Away From Keyboard,离开状态)
# 以秒为单位,保持静止状态达到该时间,玩家将被自动设置为离开状态.
# 需要玩家拥有 essentials.afk.auto 权限.
# 设置为 -1 取消该功能.
auto-afk: 300

# 自动T出AFK状态下的玩家
# 以秒为单位,AFK状态达到该时间,玩家将自动被服务器T出.
# 拥有essentials.afk.kickexempt权限的玩家无视此设置.
# 设置为 -1 取消该功能.
auto-afk-kick: -1

# 设置为true,如果你想要冻结AFK状态下的玩家.
# 其他玩家和怪物将无法推动或攻击他.
# 这将会使AFK的玩家进入无敌模式.
# 玩家需要使用"/afk"命令来退出AFK状态.
freeze-afk-players: false

# 当玩家AFK状态时,是否允许玩家捡取物品?
# 启用这个功能,当你不希望有人在刷怪塔挂机刷物品.
disable-item-pickup-while-afk: false

# 这个设置控制当一个玩家交互时解除afk状态
# 如果设为false,将只能使用/afk来取消离开状态
cancel-afk-on-interact: true

# 当玩家移动时是否解除他的AFK状态?
# 当玩家聊天或使用命令时,玩家将自动解除AFK状态,无视这个设置
# 禁用这个选项可以减少服务器延迟
cancel-afk-on-move: true

# 你可以在这取消Minecraft的死亡提示.
death-messages: true

# 把世界加入这个列表, 如果你想在那个世界自动关闭上帝模式.
no-god-in-worlds:
#  - world_nether

# 设置为true,启用每个世界传送单独的权限.
# 支持 /world, /back, /tp[a|o][here|all],但是不支持 warps.
# 给予玩家某个世界的传送权限 essentials.world.<worldname>
# 不包括 /home 命令, 下面有单独的设定.
world-teleport-permissions: false

# 若在使用/give或/item命令时如果没有填写数量.
# 如果这个数值设置小于1,那么给予最大叠加数量的物品
# 如果超大堆叠没有开启,那么数量大于正常堆叠数量(64)时,将给予1组以上物品.
default-stack-size: -1

# 超大堆叠允许玩家堆叠物品超过正常最大堆叠.
# 如果玩家拥有essentials.oversizedstacks权限,当使用 /give 或 /item时可以获得超大堆叠物品.
# 超大堆叠物品的上限是多少?
oversized-stacksize: 64

# 允许修理附魔盔甲和武器
# 如果设置为false,你仍然可以允许某些玩家修理.
# 使用essentials.repair.enchanted权限
repair-enchanted: true

# 在kits和物品生成时,允许 '不安全的' 附魔.
# 警告: 混乱结合和超过常规等级的附魔可能导致客户端,服务端或者插件崩溃.
unsafe-enchantments: false

#是否想要essentials插件保留 /back 坐标在"teleport listener"?
# 如果你设置为true,一些插件可以获得传送坐标.
register-back-in-listener: false

#玩家登录后,多少秒后可以造成攻击伤害 
login-attack-delay: 5

#设置最大飞行速度, 速度从 0.1 到 1.0 之间
max-fly-speed: 0.8

#设置行走最大速度, 速度从 0.1 到 1.0 之间
max-walk-speed: 0.8

#设置每分钟可以发送的最大邮件数量.
mails-per-minute: 1000

# 设置/tempban 可以临时封禁的最大时间.
# 设置为 -1 可禁用此功能, 另外 essentials.tempban.unlimited 权限可以覆盖此设置.
max-tempban-time: -1

############################################################
# +------------------------------------------------------+ #
# |                Essentials 家的设置                   | #
# +------------------------------------------------------+ #
############################################################

# 允许玩家在白天设置他床所在的位置为家.
update-bed-at-daytime: true

# 设置为 true 将给予玩家跨越世界传送回家的权限
# 这个设置只适用于'/home'命令.
# 对于其他传送命令,给予玩家多世界间传送的权限 essentials.world.<世界名称> 可以允许玩家跨世界传送
world-home-permissions: false

# 允许玩家拥有多个家.
# 玩家拥有多个家需要有essentials.sethome.multiple权限, 默认 'default' 下面.
# 定义不同权限的不同家的数量例如:essentials.sethome.multiple.vip
# 用有 essentials.sethome.multiple.unlimited 权限的玩家将不被此项设置所限制.
# 查看更多信息,请访问 http://wiki.ess3.net/wiki/Multihome
sethome-multiple:  
  default: 3
  # essentials.sethome.multiple.vip
  vip: 5
  # essentials.sethome.multiple.staff
  staff: 10

# 设置同意传送超时的时间(以秒为单位).
# 设置为 0 取消该功能.
tpa-accept-cancellation: 120

############################################################
# +------------------------------------------------------+ #
# |               Essentials 经济设置                    | #
# +------------------------------------------------------+ #
############################################################

# 查看更多信息,请访问 http://wiki.ess3.net/wiki/Essentials_Economy

# 设置玩家第一次登录服务器时拥有的金钱,默认为0.
starting-balance: 0

# worth-# 定义物品的价格,用来使玩家输入"/sell"后,以这种价格将物品卖给服务器.
# 现在该项设置的文件是worth.yml

# 定义玩家每次使用命令时所要花的钱,空格由"-"代替,带有"example"的是例子.
#一些命令例如/repair拥有独立的花费,可以在essentials wiki查看更多信息
command-costs:
  # /example costs $1000 PER USE
  #example: 1000
  # /kit tools costs $1500 PER USE
  #kit-tools: 1500

# 设置该项为一个你想使用的货币符号(译注:货币符号(双字节)有"￥"、"＄"、"￠"和"￡"等).
currency-symbol: '$'

# 设置一个玩家所允许拥有的最大钱数.
# 这个数量最大为10万亿(1个1,13个0),这是由于JAVA的限制.
max-money: 10000000000000

# 设置一个玩家所允许拥有的最大钱数 (必须大于最大金额的负数).
# 设置为0,将完全禁用透支/贷款.用户需要'essentials.eco.loan"权限,钱数才能低于0.
min-money: -10000

# 设置为true来记录所有玩家的交易记录(译注,仅记录Essentials所支持的交易命令和功能).
economy-log-enabled: false

############################################################
# +------------------------------------------------------+ #
# |                  Essentials 帮助                     | #
# +------------------------------------------------------+ #
############################################################

# 是否设置输入"/help"时,显示其它插件的命令.
non-ess-in-help: true

# 隐藏没给出权限的插件.
# 你可以添加权限到对应玩家或用户组,使之对其显示.
# 个人权限设置是:essentials.help.<plugin>,任何人有essentials.*或'*'将能看到所有帮助.
# 如果下面的设置开启,你可以使用否定命令来移除权限,之后该插件的帮助将不会被看到.
hide-permissionless-help: true

############################################################
# +------------------------------------------------------+ #
# |              EssentialsChat 聊天设置                 | #
# +------------------------------------------------------+ #
############################################################

chat:

# 设置聊天半径,如果安装了EssentialsChat,这将设置玩家喊话的可见范围,以格为单位.设置为0则允许全图聊天.
# 注意开启了间谍模式(权限:essentials.chat.spy)的玩家将看到所有聊天内容,无视该设置.
# 拥有"essentials.chat.shout"权限的玩家可以忽视该设置,只要在聊天内容前面加上"!"符号即可(小写感叹号)；
# 或者拥有"essentials.chat.question"权限的玩家可以忽视该设置,只要在聊天内容前面加上"?"符号即可(小写问号)；
# 你可以添加使用上两行方法的花销,在上经济设置中的"command-costs"下添加"chat-shout"和"chat-question"的设置即可.
  radius: 0

  # 聊天格式,可以有两种,你可以定义所有聊天为标准格式.
  # 或者你可以给一个用户组特定的聊天格式,提供一些额外的变化.
  # 是否设置为默认聊天格式,需要与ichat插件兼容.
  # 想了解更多的默认聊天格式的信息,请查看wiki: http://wiki.ess3.net/wiki/Chat_Formatting

  format: '<{DISPLAYNAME}> {MESSAGE}'
  #format: '&7[{GROUP}]&r {DISPLAYNAME}&7:&r {MESSAGE}'

  group-formats:
  #  Default: '{WORLDNAME} {DISPLAYNAME}&7:&r {MESSAGE}'
  #  Admins: '{WORLDNAME} &c[{GROUP}]&r {DISPLAYNAME}&7:&c {MESSAGE}'

  # 你也可以设置特定组别的聊天格式,删除前面的"#"号来启用.

############################################################
# +------------------------------------------------------+ #
# |                 Essentials 保护                      | #
# +------------------------------------------------------+ #
############################################################

protect:

  # 总体的物理现象或行为的设置
  prevent:                                 # 阻止以下现象(译注:true就是阻止,false是允许,这里需要注意一下)
    lava-flow: false                       # 阻止 岩浆的流动
    water-flow: false                      # 阻止 水的流动
    water-bucket-flow: false               # 阻止 水桶水的流动
    fire-spread: true                      # 阻止 火的传播
    lava-fire-spread: true                 # 阻止 岩浆引起的火的传播
    flint-fire: false                      # 阻止 打火石产生火
    lightning-fire-spread: true            # 阻止 闪电引起的火的传播
    portal-creation: false                 # 阻止 传送门的创造
    tnt-explosion: false                   # 阻止 TNT的爆炸
    tnt-playerdamage: false                # 阻止 TNT对玩家造成伤害
    tnt-minecart-explosion: false          # 阻止 TNT矿车 爆炸
    tnt-minecart-playerdamage: false       # 阻止 TNT矿车 对玩家造成伤害
    fireball-explosion: true               # 阻止 火球的爆炸(译注:恶魂发射的火球)
    fireball-fire: false                   # 阻止 火球的燃烧
    fireball-playerdamage: false           # 阻止 火球对玩家造成伤害
    witherskull-explosion: true            # 阻止 凋零攻击的爆炸
    witherskull-playerdamage: false        # 阻止 凋零攻击对玩家照成伤害
    wither-spawnexplosion: true            # 阻止 凋零出生时的爆炸
    wither-blockreplace: true              # 阻止 凋零破坏方块
    creeper-explosion: false               # 阻止 爬行者的爆炸
    creeper-playerdamage: false            # 阻止 爬行者对玩家造成伤害
    creeper-blockdamage: true              # 阻止 爬行者炸毁方块
    enderdragon-blockdamage: true          # 阻止 末影龙破坏方块
    enderman-pickup: false                 # 阻止 末影人拾取方块
    villager-death: false                  # 阻止 村民被杀死
    # 若改为true,怪物将不会跟随玩家
    # 具有权限"essentials.protect.entitytarget.bypass"的玩家将无视该项.
    entitytarget: false
    # 阻止生物的出生(true就是阻止,false是允许)
    spawn:
      creeper: false             #阻止 爬行者     的生成
      skeleton: false            #阻止 骷髅       的生成
      spider: false              #阻止 蜘蛛       的生成
      giant: false               #阻止 巨型僵尸   的生成
      zombie: false              #阻止 僵尸       的生成
      slime: false               #阻止 史莱姆     的生成
      ghast: false               #阻止 恶魂       的生成
      pig_zombie: false          #阻止 僵尸猪人   的生成
      enderman: false            #阻止 末影人     的生成
      cave_spider: false         #阻止 洞穴蜘蛛   的生成
      silverfish: false          #阻止 蠹虫       的生成
      blaze: false               #阻止 烈焰人     的生成
      magma_cube: false          #阻止 岩浆史莱姆 的生成
      ender_dragon: false        #阻止 末影龙     的生成
      pig: false                 #阻止 猪         的生成
      sheep: false               #阻止 羊         的生成
      cow: false                 #阻止 牛         的生成
      chicken: false             #阻止 鸡         的生成
      squid: false               #阻止 乌贼       的生成
      wolf: false                #阻止 狼         的生成
      mushroom_cow: false        #阻止 哞菇       的生成
      snowman: false             #阻止 雪人       的生成
      ocelot: false              #阻止 豹猫       的生成
      iron_golem: false          #阻止 铁傀儡     的生成
      villager: false            #阻止 村民       的生成
      wither: false              #阻止 凋零       的生成
      bat: false                 #阻止 蝙蝠       的生成
      witch: false               #阻止 女巫       的生成

  # 爬行着可以爆炸的最大高度,-1将允许它在任何位置爆炸.
  # 如果你想要彻底阻止它的爆炸的话,设置上面的prevent一栏中的creeper-explosion为true.
  creeper:
    max-height: -1

  # 取消几种默认的物理现象或行为(译注:伤害大多数对玩家而言,对怪物仍有效)
  disable:
    # 取消掉落伤害
    fall: false

    # 拥有"essentials.protect.pvp"权限的玩家将仍可以攻击其他玩家
    # 若设置为true,没有上述权限的玩家将无法攻击其他玩家
    pvp: false

    # 取消溺水和窒息的伤害
    # (分为两项,通常,你会想要设置两项为同样设置)
    drown: false              # 取消溺水伤害
    suffocate: false          # 取消窒息伤害(被埋在方块中,例如沙子)

    # 取消岩浆伤害,但掉落岩浆中的物品将仍被烧成灰烬
    lavadmg: false

    # 取消弓箭伤害
    projectiles: false

    # 取消仙人掌伤害
    contactdmg: false

    # 取消火焰伤害
    firedmg: false

    # 取消被雷劈的伤害
    lightning: false
    
    # 取消"凋零"效果伤害
    wither: false

    # 禁用某些天气
    weather:
      storm: false                         # 禁用雨天,寒冷生态环境为雪天
      thunder: false                       # 禁用雷电
      lightning: false                     # 禁用闪电

############################################################
# +------------------------------------------------------+ #
# |               Essentials 建筑控制                    | #
# +------------------------------------------------------+ #
############################################################

  # Disable various default physics and behaviors
  # 查看更多信息,请访问 http://wiki.ess3.net/wiki/AntiBuild

    # 玩家是否可以建造: 
    # 设置为 true 可以禁用那些没有权限玩家的建造
    # 设置为 false 将使 EssentialsAntiBuild 从不阻止玩家建造
    build: true

    # 玩家是否可以使用物品: 
    # 设置为 true 可以禁用那些没有权限玩家的使用物品
    # 设置为 false 将使 EssentialsAntiBuild 从不阻止玩家使用物品
    use: true

    # 玩家无法建造时是否提示玩家
    warn-on-build-disallow: true

  # 当以下方块被放置或破坏,或物品被使用时会出现警告
  # 你加载了一次Essentials后,就可以在plugins/Essentials/items.csv中找到物品ID列表.
  # 10 = 动态岩浆 :: 11 = 静态岩浆 :: 46 = TNT :: 327 = 岩浆桶
  alert:
    on-placement: 10,11,46,327
    on-use: 327
    on-break:

  blacklist:

    # 阻止玩家放置以下方块
    placement: 10,11,46,327

    # 阻止玩家使用以下物品
    usage: 327

    # 阻止玩家破坏以下方块
    break:

    # 阻止活塞推动以下方块
    piston:

############################################################
# +------------------------------------------------------+ #
# |         Essentials 出生设置 / 新玩家设置             | #
# +------------------------------------------------------+ #
############################################################

newbies:
  # 是否显示某玩家第一次进服时的欢迎信息
  # 若开启,编辑内容,{DISPLAYNAME}将自动转换为玩家名字.
  # 若取消,改为''
  #announce-format: ''
  announce-format: '&d欢迎新玩家{DISPLAYNAME}来到服务器!'

  # 当我们第一次出生时,出现在哪个出生点？
  # 如果你想要使用世界自带的出生点,则设置为"none".
  spawnpoint: newbies

  # 是否想要玩家第一次进入服务器时赠送新手礼物? 设置为 ''禁用此功能.
  # 这个赠送不会花费金钱,也可以给予权限.
  #kit: ''
  kit: tools

# 设置为 lowest, 如果你想使用 Multiverse 处理重生.
# 设置为 high, 如果你想使用 EssentialsSpawn插件 处理重生.
# 设置为 highest, 如果你想强制使用 EssentialsSpawn插件 处理重生.
respawn-listener-priority: lowest

# 如果设置为true,玩家死后会重生在自己家,而不是出生点.
respawn-at-home: false

# 文件结尾 <-- 到此, 你已经完成了ESS的设置.
```
:::
## 相关功能教程

### 1.备份设置

在保存服务器地图方面，我们一般会使用AutoSaveWorld这个插件，但是其实Essentials本身就有地图备份相关的功能，此功能已经能满足大部分服主的要求，而不需要去安装新的插件。  

为了使用Essentials的备份功能我们首先得在config文件中开启相关功能  

```yml 
backup:
  interval: 60
  command: 'save-all'
```

这样服务器会每60分钟进行一次备份  

### 2.help指令相关设置

/help对于玩家来说是个比较有用的指令，当你忘记某个指令时可以输入这个来查询，但是现在help指令渐渐成为了一个比较鸡肋的指令，因为过多的插件导致help列出的指令过多，因而当你要想查找某个指令时你得花费大量的时间一页一页的找。如今Essentials插件的help设置能让你的help列表彻底脱胎换骨。  

Essentials插件提供了3种设置方式以提供不同的/help显示效果。Essentials会尽可能的遍历所有服务器插件然后获取其中所有的指令，但是如果插件未按标准编写，即在plugin.yml中没有注册过的指令是不会出现在help列表中的  

```yml
non-ess-in-help: true
hide-permissionless-help: true
```

这种模式help会显示所有玩家有权限的指令

```yml
essentials.help.<插件名>
```

你也可以这样来给玩家没有权限插件的help  

```yml
non-ess-in-help: true
hide-permissionless-help: false
```

这样会显示所有指令

```yml
non-ess-in-help: false
```

在此模式下玩家只能看到一些基础的并且玩家有权限使用的指令  

#### 高级定制

如果这样的设置你还不满足，你想更进一步的定制/help指令，Essentials提供了一个更加强大的功能  

你可以通过在Essentials插件目录中添加一个help.txt来自定义/help指令显示的内容。help.txt中的内容将会完全取代默认的help指令列表  

```yml
#欢迎
欢迎你{PLAYER}
来自: {ADDRESS}
服务器IP：{IP}
你现在的存款：{BALANCE}
```

`#欢迎` 代表章节名称（每个章节名称前面必须加#）玩家输入/help 欢迎

(help.txt必须以UTF-8无BOM编码保存)  
你可以定义多个章节来做到不同的章节显示不同的插件指令  
而且完美支持所有颜色代码  
这样玩家就不用面对那杂乱无章的指令列表了  
在编辑help.txt时可以添加如下变量  

::: details 点击查看代码

```yml
玩家展示名称: {PLAYER}

用户名: {USERNAME}

服务器IP: {IP}

玩家IP: {ADDRESS}

金钱: {BALANCE}

未读email: {MAILS}

当前世界名: {WORLD}

世界列表: {WORLDS}

在线玩家数: {ONLINE}

特殊玩家: {UNIQUE}

玩家列表: {PLAYERLIST}

服务器时间: {TIME}

服务器日期: {DATE}

游戏中PM/AM: {WORLDTIME12}

游戏中时间: {WORLDTIME24}

游戏中日期: {WORLDDATE}

插件列表: {PLUGINS}

bukkit版本: {VERSION}
```

:::

### 3.kits工具包相关设置

kit工具包是Essentials的一个重要功能，你可以用它来发放新手礼包，发放奖励甚至用它来做个系统商店都是可以的。  

熟练的使用kit相关功能可以使你避免在服务器中再安装不必要的插件。  

首先先是kit每个工具包的格式  

```yml
kits:
  <kit name>:
    delay: <delay between usage>
    items:
      - <item number> <amount> <meta>
      - <item number> <amount> <meta>
```

另附上中文config文件内容  

::: details 点击查看代码

```yml
kits:
  tools:
    delay: 10
    items:
      - 272 1
      - 273 1
      - 274 1
      - 275 1
  dtools:
    delay: 600
    items:
      - 278 1 efficiency:1 durability:1 fortune:1 name:&4Giga_Drill_Breaker lore:这钻头是突破天际的钻头
      - 277 1 digspeed:3 name:矮人 lore:挖掘|挖掘|挖洞
      - 298 1 color:255,255,255 name:白色的帽子 lore:美好的一天,美好的一天
      - 279:780 1
  notch:
    delay: 6000
    items:
      - 397:3 1 player:Notch
  color:
    delay: 6000
    items:
      - 387 1 title:&4书_&9与_&6颜色 author:Essentials lore:游戏内的颜色代码 book:颜色
  firework:
    delay: 6000
    items:
      - 401 1 name:愤怒的苦力帕 color:red fade:green type:creeper power:1
      - 401 1 name:星空 color:yellow,orange fade:blue type:star effect:trail,twinkle power:1
      - 401 2 name:太阳风 color:yellow,orange fade:red shape:large effect:twinkle color:yellow,orange fade:red shape:ball effect:trail color:red,purple fade:pink shape:star effect:trail power:1
```
:::

1.delay代表的是领取此工具包的延迟 如果你设置为3600那么这个工具包只能每小时领一次如果你设置为 -1 那么这个工具包只能领取一次。  
2.你可以可以在config中对每个工具包定义他的使用价格如  

```yml
kit-tools: 100
```

那么使用tools这个工具包将花费玩家100$  

3.由以上两个示例我们可以看到kit工具包指令支持几乎mc中所有的道具。不过你也许不知道kit工具包中的道具也是支持变量的如  

```yml
      - 278 1 efficiency:1 durability:1 fortune:1 name:&4Giga_Drill_Breaker lore:{PLAYER}的超级钻石镐
```

3.kit工具包的权限设定也非常的方便你可以给予玩家以下权限，来单独限制玩家可使用的工具包  

```yml
essentials.kits.<kitname>
```

### 3.Essentials的木牌控制相关

领取工具包需要一个个输入指令，这样子未免有些太麻烦了，不过不要紧Essentials提供了完整的木牌系统来简化你的操作。  

为了启用木牌领取工具包你首先得在config文件中找到  

```yml
enabledSigns:
```

并将 - kit 前面的#去除，然后重启插件。  

牌子输入格式如下  

```markdown
------------------
|    [Kit]       |
|    <KitName>   |
|    [Group]     |
|    [Cost]      |
------------------
```

`<kitName>`代表了工具包名称，如tools  

`[group]`代表了可使用这个牌子的用户组，如果不设置那么根据玩家是否拥有essentials.kits.  

`<kitname>` 权限来判断玩家是否可以使用牌子获取工具包.或者你可以在这一项输入 Everyone 代表所有玩家都可以使用。  

`[cost]`代表了使用的花费如果不设置默认为免费  

### 4.建筑控制相关设置

权限系统基本是每个服主的必修课，Essentials的建筑控制正是基于权限系统对玩家一切使用方块的行为进行限制，从而可以使服主完全限制玩家的行为，包括放置，破坏，扔掉，拾取，使用指定方块，并且可以限制玩家与指定方块交互，如限制玩家使用按钮，开关等。  

首先是最基本的建筑权限  

```yml
essentials.build
```

给予玩家此权限代表了玩家可以使用并放置所有方块。  

如果当一个玩家没有 Essentials.build权限或者 build: false那么Essentials接着会检查如下权限  

```yml
essentials.build.place.<id>
 essentials.build.place.<id>:<data>
 essentials.build.break.<id>
 essentials.build.break.<id>:<data>
 essentials.build.interact.<id>
 essentials.build.interact.<id>:<data>
 essentials.build.craft.<id>
 essentials.build.craft.<id>:<data>
 essentials.build.pickup.<id>
 essentials.build.pickup.<id>:<data>
 essentials.build.drop.<id>
 essentials.build.drop.<id>:<data>
 ```

以上都是最基础的英文单词，相信大家都看的懂我就不一个个翻译了。  

唯一需要解释的是 interact 权限 这代表了玩家与方块交互 例如使用按钮等。  

但是放置方块，或者破坏方块也属于交互的一种，所以如果你想让一个玩家能放置或者破坏一个方块你需要同时给予那个玩家与此方块交互和放置两个权限。  

通过给予玩家以上权限你就可以做到例如单独让玩家可以破坏某个方块，或者玩家只可以按按钮不能破坏方块之类的功能。  

那如果你想单独让玩家不能破坏某个方块该如何设置呢  

这里首先得说明一下groupmanager的权限设置格式  

大家都知道如果我输入  

```yml
/mangaddp builder essentials.build.place.1
```

就是给予builder用户组放置石头的权限  

而如果我输入  

```yml
/mangaddp builder -essentials.build.place.1
```

这两个指令之间只相差了一个 - 但是效果完全相反，添加了此权限玩家将不能放置石头。 - 代表了移除玩家的此权限。  

当一个玩家同时拥有  

```yml
essentials.build.place.1
-essentials.build.place.1
```

这两个权限时玩家将无法放置石头  

因为在groupmanager判断权限时优先判断 -权限 这意味着就算你拥有建筑权限 你被加入了-essentials.build.place.1 那么你也是无法放置石头的。  

以此为基础我们可以单独设置玩家不可以放置，使用的方块。  

如果你想一次设定多个方块 你可以用 * 来代替 如羊毛方块的ID是35 一直到35:15  

你可以给予玩家 Essentials.build.place.35:* 来给予玩家所有羊毛方块的放置权限  

### 5.list玩家列表相关设置

在Essentials的list列表设置中服主可以自定义以下内容  

    合并:你可以自定义一个展示用户组，将几个用户组的玩家全部显示在一个展示用户组中。
    隐藏:你可以完全隐藏你不想显示的用户组。
    限制:你可以限制每个用户组在list列表中的数量上限，超过上限的部分将会被隐藏。

这个配置部分允许您覆盖/编辑/list命令,从而显示一个更加整齐，简洁的list列表。  

在默认情况下,你可以定义所有用户组的显示顺序，所有未定义的用户组将会按照首字母排序。  

在config文件中你可以通过搜索  

```yml
list:
```

来找到相关设定位置  

#### 1.合并

```yml
 Staff: owner admin moderator
 ```

这样设定的话，所有owner admin moderator用户组的玩家在list指令中会全部显示在staff用户组中  


#### 2.隐藏

```yml
default: hidden
```

这样设置的话 default 将会被隐藏，所有此用户组的玩家将不会在list列表中显示  

#### 3.限制

```yml
 builder: 20
 ```

这样设置的话所有builder用户组的玩家只会显示20个，超过的部分会被隐藏。  

所有未定义的用户组都将会正常显示  

下面给出一个例子包括上述所有设置  

```yml
 list:
   Admin: owner admin
   stealth: hidden
   builder: 20
   default: 0
```

### 6.chat聊天格式相关设置

通过Essentials的chat聊天相关设置你可以自定义玩家在聊天过程中名字的前缀等。  

注意：要使用这些功能你必须安装Essentialschat插件。  

#### 显示名（display names）

在Minecraft中,你的displayname就是你在聊天过程中显示的名字，或者是在tab列表，插件中应用到的名字。  

显示名由groupmanager插件决定可以在对应世界文件夹group.yml中修改。  

bukkit最多允许显示名有16个字符，所以建议将 显示名的前缀+名字+后缀压缩在16个字符以内。  

在Essentials的config文件中有6个与显示名有关的设定  
::: details 点击查看代码
```yml
# OP名字的颜色代码,填写0~9或a~f其中的一个数字或字母,填写'none'来冻结该功能.(译注:可到http://ess.khhq.net/mc/查看颜色代码)
ops-name-color: 'c'

# 昵称的前缀符号,这样你能知道这不是他们真正的用户名.
nickname-prefix: '昵称:'

# 设置最大昵称长度, 昵称前缀也包括在内.
max-nick-length: 15

# 如果你想用其他的插件来设置玩家名字,将其改为"false".
change-displayname: true

# 当这个选项开启时,在玩家显示的名字上添加的前缀或尾缀,会被显示在在线列表(TAB)中.
# 上面的"change-displayname"必须是true才有效.
change-playerlist: true

# 添加前缀后缀(上面的"change-displayname"必须是true才有效)
# 如果你不设置该项,且essentialschat被安装了,其将会被默认为"true".
add-prefix-suffix: true
```
:::
这里我就直接复制中文config中的设定了，因为有全部的中文注释了。我在这里就不再赘述了  

#### 聊天格式

这里的设定将会改变玩家在聊天时显示的样式。  

下面是一个例子  

```yml
{DISPLAYNAME} {MESSAGE} {GROUP} {WORLDNAME} {SHORTWORLDNAME} {TEAMPREFIX} {TEAMSUFFIX} {TEAMNAME}
```

```yml
{MESSAGE} 聊天的内容.
{GROUP} 玩家所属用户组名称.
{DISPLAYNAME} 显示名包括了玩家的前缀以及后缀.
{WORLDNAME} 玩家所处世界的名字.
{SHORTWORLDNAME} 玩家所处世界的首字母.
{TEAMPREFIX} {TEAMSUFFIX} {TEAMNAME} 计分板团队变量.
```

你可以按照自己的喜好自由组合以上变量，并且完全支持颜色代码  

下面给几个例子  

```yml
format: '<{DISPLAYNAME}> {MESSAGE}'
format: '&8[&7{GROUP}&8]&f {DISPLAYNAME}&7:&f {MESSAGE}'
format: '{WORLDNAME} {DISPLAYNAME}&7:&f {MESSAGE}'
format: '{WORLDNAME} &8[&7{GROUP}&7]&f {DISPLAYNAME}&7:&c {MESSAGE}'
```

本页内容来源于 <a href="https://www.mcbbs.net/forum.php?mod=viewthread&tid=290356&page=1#pid5561433">MCBBS</a> <a href="https://mineplugin.org/Essentials">Minecraft插件百科</a>