# Residence 领地插件

## 插件介绍

- 玩家可以自由设置保护的范围、权限、信息等大量内容。

- 多种自定义领地购买方式，三维，XoY，多种方法任你选。

- 在删除领地的时候可以退款！

- 可以设置多个领地权限组来区分不同玩家的不同权限。

- 自动圈地，不上线 X 天自动删除领地，删除领地退钱，再也不需要多余的附属插件！

- 拥有 Gui 引导菜单，省略大量麻烦的指令！这些甚至还能自定义（/res set 或/res pset）!

- 圈地可视化，再也不怕自己圈了多大的地也不知道了！

- 可以暂时购买或 Lease 他人领地！（默认不开启）

- Lease 领地时间结束后可以让领地恢复原样!

- 可以设置领地专属的聊天前缀。

- 拥有及其详细的领地信息，让你一下子了解领地的全部!

- 拥有多种常用语言文本，了解指令如张飞吃豆芽!【英语，法语，捷克语，简体中文，繁体中文】

- 多种 PVP 检测方式！先判断领地 pvp，还是先判断其他插件的 pvp，任你选择！

- 拥有领地专用的商店功能，甚至可以给这家店“五星好评”。

- 全新的 Action Bar/大字标题显示方法，让你的领地更加特别。

- 远程传送可以有延时，防止在进行 PVP 时传送！

- 可以随时踢出在你领地内的玩家，并用简单的指令拒之于外！

- 超过 90 种自定义领地标志(Flag)，安全又可靠！

- 你甚至可以编辑 进入/离开 的各种信息！

- (2020-3-20)袭击者功能，闪电战攻击他人领地（默认关闭）！

- 配置文件高度自由，超多功能任你选择！

- 自带随机传送插件，再也不用担心其他的随机传送让你进领地了！

- 只需要【/res 】即可了解所有指令用法！自带超级详细的中文教程！

## 插件安装

### 下载

`Residence领地插件:` <a href="https://www.spigotmc.org/resources/residence-1-7-10-up-to-1-16.11480/">作者付费下载地址</a> | <a href="https://zrips.net/Residence/">免费版本下载地址</a>

免费版与付费版功能相同,如果有条件可以购买付费版本支持作者

### 安装

`关闭服务器`  
`打开plugins文件夹`  
`放入Vault前置插件`  
`启动服务器`  
`安装完成！`

## 命令

::: details 点击查看代码

```yml
更为详细的指令介绍可以在服务器中查看【鼠标接触指令即可看见详细信息】
[]为必填项目，<>是选填项目，例如<领地名>，不填则选择为你当前领地，(true=允许,false=不允许)
true/false可以缩写成t/f,remove/dedefault是还原系统默认配置
指令离线下载：  Command.yml (7.12 KB, 下载次数: 632)
总指令：
/res ? —— 查看帮助
/resadmin —— 管理员专用指令，当指令用/resadmin代替/res时，指令不考虑权限问题。
领地创建与删除：
/res create [领地名] —— 创建一个领地
/res remove <领地名> —— 删除一个领地
/res subzone [子领地名] —— 在所处的领地中创建一个子领地
/res auto [领地名] [范围] —— 自动在你站着的位置为中心，创建你能创建最大的领地
/res select [x] [y] [z] —— 选取以你为中心需要被保护的区域，（Z=高度，X/Y=横轴）
/res select size —— 显示所选区域大小
/res select cost —— 显示已选择区域价格
/res select auto [玩家]  —— 打开自动选择区域
/res select expand [数值] —— 选区向面对的方向选择扩展数值大小
/res contract <领地> [缩小单位] —— 从你面对的方向缩小领地
/res select shift [数值] —— 选区向面对的方向平移
/res select vert —— 高度从天空扩展到基岩
/res select sky —— 高度扩展到天框
/res select bedrock —— 高度扩展都基岩
/res select chunk —— 选择目前所在区块
/res select worldedit —— 使用Worldedit的选区作为领地选区
/res area add [领地] [区域ID] —— 为领地添加物理区域
/res area remove [领地] [区域ID] —— 移除领地的物理区域
/res area remove [领地] [区域ID] —— 替换领地的物理区域
       【注】 可以与其他领地区域重叠。
/res setmain <领地> —— 设置主领地
/resadmin server [领地] —— 创建一个属于服务器所有的领地

领地权限与名称：
/res padd <领地名> [玩家] —— 向玩家添加基本权限
/res pdel <领地名> [玩家] —— 删除玩家的基本权限
/res pset <领地名> [玩家] [权限] [true/false/remove] —— 给不同的玩家上设置权限
/res set <领地名> [权限] [true/false/remove] —— 在不同的领地内设置权限
       【注】(以上两指令，不输入标志及其后面的内容打开GUI面板）
/res pset <领地> [玩家] removeall —— 删除一个玩家所有权限
/res rename [旧名称] [新名称] -重命名领地。
       【注】如果需要重命名子领地，必须使用全名称(主领地.子领地),而新名称不用全名称。
/res mirror [原领地名] [目标领地名] -从原领地复制权限到目标领地，但前提是你是两个领地的所有者。
/res gset <领地名> [组名] [标志] [true/false/remove]  —— 在不同的权限组里设置标志
/res reset <领地> —— 将领地的所有权限重置.
/res lset <领地> [blacklist/ignorelist] [材料] —— 将某物品加入黑名单以阻止这种物品被放置在领地中
/res lset <领地> Info —— 忽略名单选项

领地信息：
/res message <领地名> [enter/leave] [信息] —— 自定义玩家进入或离开领地的消息，
       【注】（enter=进入,leave=离开）（信息可以是彩色&的）
/res info —— 显示目前所处的领地信息，如果在领地外使用该指令，将会显示自己的领地信息
/res list [玩家] —— 列出玩家拥有的领地信息
/res listall <页码> —— 列出玩家所有领地
/res area list [领地] <页码> —— 列出领地的物理区域
/res area listall [领地] <页码> —— 列出所有区域的坐标和详细信息
/res lists —— 预定义的权限列表可以应用到领地上
/res lists add <列表名> —— 添加一个列表
/res lists remove <列表名> —— 删除一个列表
/res lists apply <列表名> <领地> —— 将列表应用于领地
/res lists set <列表名> <权限> <值> —— 设置列表全局权限
/res lists pset <列表名> <玩家> <权限> <值> —— 设置列表玩家权限
/res lists view <列表名> —— 设置列表组权限
/res lists view <列表名> —— 查看列表
/res listhidden <玩家> <页码> —— 列出指定玩家拥有的隐藏领地

传送相关：
/res tp [领地名] —— 传送到指定领地
/res tpset —— 设置领地中的传送位置（当玩家输入/res tp [领地名]时，将会传送至您在领地内设置的传送位置）
/res unstuck —— 将您移动到你所在的领地外
/res rt —— 将你传送到世界上的随机位置
袭击者相关：
/res attack [领地名] —— 对领地进行袭击
/res defend [领地名] —— 对领地进行防卫

领地使用：
/res show <领地> —— 显示领地的边界
/res bank [deposit/withdraw] <领地> [数额] —— 管理领地银行
       【注】(deposit=存款,withdraw=取款)
/res resbank [deposit/withdraw] [数量] —— 从领地银行借贷
/res give [领地名] [玩家] —— 将所选领地给予给另外一名玩家！(该玩家须在线，且你是领地所有者。)
/res compass <领地名字> —— 设置指南者指向领地
/res shop —— 管理领地商店
/res shop list —— 显示所有作为商店的领地
/res shop vote <领地> [分数] —— 为领地商店评分
/res shop like <领地> —— 为领地商店点赞
/res shop votes <领地> <页码> —— 显示当前或指定领地商店的评分列表
/res shop likes <领地> <页码> —— 显示当前或指定领地商店的赞列表
/res shop setdesc [描述文字] —— 设置领地商店描述, 支持颜色代码, 用 /n 表示换行
/res shop createboard [位置] —— 在选区位置建立商店宣传板. [位置] 表示宣传板的起始位置
/res shop deleteboard —— 右击宣传板的告示牌以删除宣传板

领地聊天频道：
/res rc <领地> —— 加入当前领地或者指定领地的聊天频道
/res rc leave —— 如果你在一个领地频道内, 你将会离开此频道
/res rc setcolor [颜色代码] —— 设置领地频道文字颜色
/res rc setprefix [新前缀] —— 设置领地频道前缀
/res rc kick [玩家] —— 从频道中踢出玩家


插件相关：
/res version —— 显示领地插件的版本
/res tool —— 显示领地圈地和查看信息的工具类型
```

:::

## 权限

::: details 点击查看代码

```yml
加粗为重要权限，有（OP）代表OP权限并且默认OP拥有，有（default)代表玩家权限，默认拥有
默认不需要给权限，如出现权限错误请看Q&A
本权限引自Wiki翻译，进行了实用性精简
residence.group.[groupname] - 自定义玩家所在的Residence权限组。
residence.flag.[flag] - 允许玩家使用某个标志(flag)
residence.max.res.[number] - 设置玩家可拥有的最大领地数量。
residence.create.subzone - (Default) 允许创建子领地。
residence.expand - (Default) 允许扩张领地。
residence.create - (Default) 允许玩家创建领地。
residence.randomtp - (Default) 允许在领地内使用 /res rt 指令进行随机传送。
residence.versioncheck - (OP) 允许接收插件更新检查。
residence.command.[commandName] - 允许玩家使用某个指令
residence.tpdelaybypass - 无视领地传送延迟。
residence.randomtp.delaybypass - 无视随机传送延迟。
residence.randomtp.cooldownbypass - 无视随机传送冷却。
residence.admin.tp - (OP) 无视TP权限。
residence.admin.move - (OP) 无视移动权限。
residence.nofly.bypass - (OP) 无视禁止飞行。
residence.max.subzones.[number] - 设置可拥有的最大子领地数量。
residence.delete - (Default) 允许删除你自己的领地。
residence.delete.subzone - (Default) 允许删除你自己的子领地。
residence.rename - (Default) 允许为领地改名。
residence.expand.subzone - (Default) 允许扩张子领地。
residence.contract - (Default) 允许合并自己的领地。
residence.resize - (Default) 允许重新设置领地的大小。
residence.buy - 允许玩家goumai领地。
residence.sell - 允许玩家chushou领地。
residence.market.evict - 允许通过武力将玩家驱逐出领地。
residence.command.message.enter - 允许修改进入领地时发送的信息。
residence.command.message.leave - 允许修改离开领地时发送的信息。
residence.nofly.bypass - (OP) 无视领地禁止飞行设置。
residence.flag.command.bypass - (OP) 无视领地禁止输入指令设置。
residence.bypass.build - 无视领地禁止放置方块设置。
residence.bypass.destroy - 无视领地禁止破坏方块设置。
residence.admin - (OP) 管理员权限，可以使用 /resadmin 指令.
```

:::

## 袭击者功能

::: details 点击查看代码

```yml
袭击者属于测试功能，还有待增加功能和优化，相关设定尚未完成
PS:我很好奇一个保护插件为什么装个小游戏功能
.袭击者规则：
袭击者可以袭击在线玩家的领地，需要该袭击者没有进入冷却
保卫者可以在准备时间内进行准备（或者逃跑），领地主可以邀请其他玩家来保卫领地，这需要保卫者的领地主进行再次确认
袭击者可以邀请其他玩家来一起袭击，袭击发起者不需要同意其他袭击者的加入
宣布该领地将要被袭击的时候，任何玩家都会被踢出领地（包括防卫者）
保卫者不能在这期间使用容器，这是为了保证箱子内物品不被移动到另一个领地
袭击者将会获得 move 权限，但不能使用tp，袭击者死亡后必须步行回到领地
保卫者可以设置传送到领地，袭击开始时，保卫者和袭击者将会在同一条床上，只有保卫者的领地主可以进行传送，其他的保卫者得步行到需要保卫的领地内
袭击者可以建造或破坏方块（只能在允许的时间内）
允许袭击者打开一切箱子和拿走一切物品（将在未来实现可以打开多少箱子，拿走多少东西）
袭击结束后，所有人（包括领地主）会被踢出领地，并且一切恢复正常
当玩家获得袭击者冷却时间后，他将无法再次袭击，也无法被其他玩家袭击
袭击玩家和袭击领地的时间可以相同，也可以不同
输入指令 /res attack [领地名] - 对领地进行袭击
输入指令 /res defend [领地名] - 对领地进行防卫
```

:::

## 配置文件

`config.yml`

::: details 点击查看代码

```yml
# 这是领地插件的全局设置。 汉化：羽神
# 译者注：作者在Chinese.yml中flag翻译为权限，但这里为了防止误导，会将flag翻译为“标志”，请注意和权限插件的权限区分开。
Global:
  # 是否启用UUID
  # 如果你不知道这是什么就不要动它
  UUIDConvertion: true
  # 如果你用的是盗版服务器，最好设置为true。这可以帮助你解决UUID的问题。
  OfflineMode: false
  # 在登录的时候，玩家拥有 residence.versioncheck 权限时会提示版本信息。
  versionCheck: true
  # 这会加载 <language>。yml 文件当作领地插件的语言信息。
  # 领地插件所有的语言信息都在这里。 (还没做完)
  Language: English
  # 木斧头是默认的圈地工具。
  # 你可以修改成其他工具，物品ID在这里: http://www.minecraftwiki.net/wiki/Data_values
  SelectionToolId: WOODEN_HOE
  Selection:
    # 如果设置为 true，所有的选择都会无视Y轴，即从天空到基岩。
    IgnoreY: false
    # 如果设置为 true， 现有领地的选择都会从顶部选择到到底部。
    # 如果设置为 false， 现有领地的选择将会一样。
    IgnoreYInSubzone: false
    # 如果设置为 true， 玩家只需要付X*Z大小方块的价钱。
    # 这会让领地的价格缩小256倍，所以在启用此功能前请调整好价格。
    NoCostForYBlocks: false
  # 这个选项可以决定你可以用什么工具来查看领地信息，默认是线。
  # 只需要拿着这个道具，在领地内任意一个地方点一下即可查看领地信息
  InfoToolId: STRING
  Optimizations:
    # 这会稍微的改变用户组 CanTeleport 的行为，这包括了服务器的总体判定方式。
    # 如果这个选项设置为 false 并且 CanTeleport 设置为 false， 玩家不能选择传送到其他玩家的领地，只有领地主才可以传送。
    # 如果这个选项设置为 true 而 CanTeleport 设置为 false， 玩家不能传送到任何领地
    # 这只适用于 /res tp 指令
    CanTeleportIncludeOwner: false
    # 这是你主要世界的名字。 通常设置为 'world'。 大小写很重要。
    DefaultWorld: world
    DisabledWorlds:
      # 设置哪个世界不启用插件。
      List: []
      # 是否在这些世界禁用所有的监听器(即领地插件的权限等)。
      DisableListeners: true
      # 是否在这些世界禁用领地插件的指令
      DisableCommands: true
    # 设置间隔多少秒会检查一次标志内容
    # 保持 10 秒会有利于检查。
    ItemPickUpDelay: 10
    AutomaticResidenceCreation:
      # 如果设置为 true，/res auto 会检查新领地是否会与其他领地发生重叠。
      # 如果设置为 false，服务器可以获得一些优化，但会导致新领地覆盖了旧领地
      CheckCollision: true
      # 使用自动创建领地指令时，如果该领地名字已经被使用，则会在新领地名字中增加参数。
      IncrementFormat: _[number]
    GlobalChat:
      # 开启或关闭玩家在领地中是否可以修改领地聊天信息。
      Enabled: false
      # 修改添加的聊天标题。如果你启用了聊天管理，你需要添加 {residence} 变量，来显示聊天标题。
      SelfModify: true
      Format: "&c[&e%1&c]"
    # 如果设置为 true， 任何传送都会检查是否拥有 tp 标志，没有将会被取消传送。
    # 这可以保护玩家使用其他第三方传送方式进行传送，比如 esentials插件的/tpa。
    BlockAnyTeleportation: true
    # 请将这个选项尽可能设置得低，或你可以使用 residence.max.res.[number] 权限
    # 例如你给玩家的最大圈地数量是10，你需要将这个选项设置为 15，或是 30， 或者又是 35，此选项可以制造一些缓冲区，以防万一。
    MaxResCount: 30
    # 请将这个选项尽可能设置得低，或你可以使用 residence.max.rents.[number] 权限
    # 例如你给玩家的最大zujie数量是10，你需要将这个选项设置为 15，或是 30， 或者又是 35，此选项可以制造一些缓冲区，以防万一。
    MaxRentCount: 10
    # 请将这个选项尽可能设置得低，或你可以使用 residence.max.subzones.[number] 权限
    # 例如你给玩家的最大子领地数量是10，你需要将这个选项设置为 15，或是 30， 或者又是 35，此选项可以制造一些缓冲区，以防万一。
    MaxSubzoneCount: 5
    # 请将这个选项尽可能设置得低，或你可以使用 residence.max.subzonedepth。[number] 权限
    # 例如你给玩家的最大子领地高度是10，你需要将这个选项设置为 15，或是 30， 或者又是 35，此选项可以制造一些缓冲区，以防万一。
    MaxSubzoneDepthCount: 5
    # 如果设置为 true，领地插件的pvp标志会覆盖Overridepvp权限
    # 在领地内，Overridepvp 标志会尝试覆盖其他pvp保护插件的权限。
    OverridePvp: false
    KickLocation:
      # 如果设置为 true，当玩家被踢出领地的时候， 他会传送到下面的这个坐标
      Use: false
      World: world
      X: 0.5
      Y: 63.0
      Z: 0.5
      # 设置小于 0 - 抬头， 大于 0 - 低头。 角度范围为 -90到 90。
      Pitch: 0.0
      # 设置头的转向。 角度范围为 -180 到 180。
      Yaw: 0.0
    FlyLandLocation:
      # 因为 fly(飞行) 标志或其他方法让玩家着陆，玩家将会传送到哪个坐标。
      World: world
      X: 0.5
      Y: 63.0
      Z: 0.5
      # 设置小于 0 - 抬头， 大于 0 - 低头。 角度范围为 -90到 90。
      Pitch: 0.0
      # 设置头的转向。 角度范围为 -180 到 180。
      Yaw: 0.0
    ShortInfo:
      # 如果设置为 true，玩家使用 /res info 会检查是否有权限，只会在聊天框显示名字，将鼠标移动到上面，则可以显示标志列表
      Use: true
    Vote:
      # 玩家可以投票的范围，通常设置为 0 到 10 格。
      RangeFrom: 0
      RangeTo: 10
      # 如果设置为 true，玩家只能像使用商店那样来投票。
      OnlyLike: false
    ConsoleLogs:
      # 如果设置为 true，在引导菜单(GUI)改变的标志会显示到控制台。
      ShowFlagChanges: true
    Intervals:
      # 如果玩家有 heal/food 的标志，每隔多少秒会回复玩家的 生命值/饥饿度。
      # 设置大的数值可以优化服务器资源。
      Heal: 1
      Feed: 5
    # 如果没有pvp标志没有设置，下面这些药水效果将会被无视。
    NegativePotionEffects:
      - blindness
      - confusion
      - harm
      - hunger
      - poison
      - slow
      - slow_digging
      - weakness
      - wither
    NegativeLingeringPotions:
      - slowness
      - instant_damage
      - poison
      - slowness
    # 调整 wspeed1 和 wspeed2 标志的速度。 它可以设置为0 到 5.
    WalkSpeed:
      "1": 0.5
      "2": 2.0
  # 移动标志的检查间隔。
  # 减小该数值可以缓解服务器压力。
  # 增大这个选项会导致玩家移动到更远距离才能被传送回去。
  MoveCheckInterval: 500
  Tp:
    # 设置领地传送的等待时间
    # 设置为0则取消等待
    TeleportDelay: 3
    # 玩家传送到领地时，是否显示标题信息。
    TeleportTitleMessage: true
  #译者注：随机传送的设置
  RandomTeleportation:
    Worlds:
      world_nether:
        Enabled: true
        MaxCoord: 1000
        MinCoord: 500
        CenterX: 0
        CenterZ: 0
      world:
        Enabled: true
        MaxCoord: 1000
        MinCoord: 500
        CenterX: 0
        CenterZ: 0
      world_the_end:
        Enabled: true
        MaxCoord: 1000
        MinCoord: 500
        CenterX: 0
        CenterZ: 0
    # 玩家需要等待多久才能使用一次该指令。
    Cooldown: 5
    # 尝试多少次传送的落地点。
    # 请将这个选项保持尽可能低，因为玩家过几秒后还能再次使用此指令。
    MaxTries: 20
  # 领地经过多少秒保存一次。
  SaveInterval: 10
  # 新的保存机制会有更小的占用和更快的保存/读取时间。
  # 文件越大，影响越大。
  NewSaveMechanic: true
  Backup:
    AutoCleanUp:
      # 如果你开启自动删除备份，插件会自动选择超过时间的备份自动删除。
      Use: false
      Days: 30
    # 是否让你的备份文件使用ZIP格式压缩。
    # 这不会对备份文件产生影响
    UseZip: true
    #译者注：会进行备份的文件。
    IncludeFiles:
      Worlds: true
      forsale: true
      leases: true
      permlists: true
      rent: true
      flags: true
      groups: true
      config: true
  AutoCleanUp:
    # 玩家没有登录超过多少天，插件会自动清楚玩家的领地。
    # 玩家可以通过 residence.cleanbypass 权限来绕过自动删除领地。
    Use: false
    # 会删除多少天没有登录的玩家。
    Days: 60
    # 你是否想让这地区变回原来的样子？
    # 它会将领地变回先前的样子。
    Regenerate: false
    # 启用功能的世界
    Worlds:
      - world
  Lwc:
    # 删除领地时，同时删除所有该领地的LWC保护。
    OnDelete: true
    # 购买领地时，删除所有该领地LWC保护。
    OnBuy: true
    # 领地无反应时，删除所有该领地的LWC保护。
    OnUnrent: true
    # 被删除保护的物品。
    MaterialList:
      - CHEST
      - TRAPPED_CHEST
      - furnace
      - dispenser
  AntiGreef:
    TNT:
      # 如果设置为 true，在领地外会允许TNT在 62 (默认) 格高度下爆炸。
      # 这允许设置TNT的最大爆炸高度。
      ExplodeBelow: false
      level: 62
    Creeper:
      # 如果设置为 true 在领地歪会允许爬行者在 62 (默认) 格高度下爆炸。
      # 这会让游戏更加逼真。
      ExplodeBelow: false
      level: 62
    Flow:
      # 允许液体流动的最大高度。
      # 这不会影响到领地内。
      Level: 63
      # 如果设置为 true，岩浆不会在领地外的地方流动
      NoLavaFlow: true
      # 如果设置为 true，水不会在领地歪的地方流动。
      NoWaterFlow: true
      Worlds:
        - world
    Place:
      # 从哪一层开始组织岩浆和水的放置。
      # 这不会影响到领地内。
      Level: 63
      # 如果设置为 true，玩家不能在领地外放置岩浆。
      NoLavaPlace: true
      # 如果设置为 true，玩家不能在领地外放置水。
      NoWaterPlace: true
      Worlds:
        - world
    BlockFall:
      # 如果设置为 true，将会删除掉落在在不同的地区的方块
      Use: true
      # 从哪一层开始允许掉落
      # 这不会影响到领地内。
      Level: 62
      Worlds:
        - world
    ResCleaning:
      # 如果设置会 true，会在玩家离开后清除领地内方块，包括所有在blocks列表的方块，他们都会变成空气方块。
      # 阻止附近方块接近领地，并清除方块。(Effective way to prevent residence creating near greefing target and then remove it)
      # 注意! 如果在大型领地清理，会造成很大的服务器负担，所有服务器拥有大领地请不要使用这个，最大限制是1500万个区块。
      Use: false
      # 从哪一层高度开始替换。
      Level: 63
      # 被替换的方块。
      # 默认的方块是岩浆和水。
      Blocks:
        - WATER
        - LAVA
      Worlds:
        - world
    Flags:
      # 如果设置为 true，除领地主之外，标志将会被保护，改变后领地内玩家当前的标志不会被改变。
      # 比如你改变了pvp的标志，但是你不能马上击杀该领地内的玩家。
      Prevent: true
      list:
        - pvp
  # 如果你没有权限插件，这将是默认的权限组。
  DefaultGroup: default
  # 开启 / 关闭zulin系统。
  UseLeaseSystem: false
  # 设置zulin或chuzu的信息格式
  # 如何正确使用，更多信息请查看 http://www.tutorialspoint.com/java/java_date_time.htm
  DateFormat: E yyyy.MM.dd 'at' hh:mm:ss a zzz
  # 设置zulin或chuzu的信息格式
  # 如何正确使用，更多信息请查看 http://www.tutorialspoint.com/java/java_date_time.htm
  DateFormatShort: MM.dd hh:mm
  # 设置时区信息，这可以调整不同时区玩家在服务器内的时间
  # 其他的时区请看 http://www.mkyong.com/java/java-display-list-of-timezone-with-gmt/
  TimeZone: Asia/Shanghai
  # 开启 / 关闭删除领地返还金钱。
  ResMoneyBack: false
  # 设置zulin的检查间隔 (需要开启zulin系统)。
  LeaseCheckInterval: 10
  # 如果玩家有金钱，允许自动续zu，如果没有开启经济系统，这选项将没有用。
  LeaseAutoRenew: true
  # 是否将权限插件与此config权限同时使用。
  EnablePermissions: true
  # 使用 Permissions / PermissionsBukkit 插件，或者使用其他旧版的权限插件，请将它设置为 true
  LegacyPermissions: false
  # 开启 / 关闭领地插件的经济系统 (支持iConomy， MineConomy， Essentials， BOSEconomy，和 RealEconomy)。
  EnableEconomy: true
  # 设置为 None 会检查默认的经济系统，如 vault API 和其他支持经济的系统。
  # 自定义经济系统的话需要可以直接访问
  # 支持的插件: Vault， iConomy， MineConomy， Essentials， BOSEconomy， RealEconomy， CMIEconomy， None
  Type: None
  # 开启此选项，会在聊天框显示额外的信息，例如显示购买/zujie时的基础信息。
  ExtraEnterMessage: true
  Sell:
    # 如果设置为 true，可以允许出售子领地。建议设置为false。
    Subzone: false
  # 开启 / 关闭zulin系统。
  EnableRentSystem: true
  Rent:
    # 保护 领地/子领地在zulin期间不会被删除。
    PreventRemoval: true
    # 如果设置为true，可从领地银行里取钱续zu
    DeductFromBank: false
    # 如果设置为true，如果玩家的领地银行没有足够的钱续zu，则会从玩家的账户中扣钱。
    # 这会覆盖银行扣钱的行为
    DeductFromBankThenPlayer: false
    Inform:
      # 是否开启zulin时间提示
      OnEnding: true
      # 还有多少时间时提示zulin时间将要结束
      Before: 1440
      # 玩家登录多少秒后通知zulin时间结束
      Delay: 60
    DefaultValues:
      # chuzu的默认值
      AllowRenewing: true
      StayInMarket: true
      AllowAutoPay: true
      # 如果设置为 true， 当玩家没有开启自动续zu，则开启此值
      PlayerAutoPay: true
    Schematics:
      # 实验选项!!! 如果设置为 true，backup标志为true时会恢复备份的领地。
      # 为了安全，只有领地创始人可以修改此标志。备份权限可以设置备份标志节点。
      RestoreAfterRentEnds: true
      # 如果设置为 true，只有backup标志设置为true时才会备份
      # 如果设置为 false，领地会在每次zulin之前保存，并恢复到原来的样子。
      # 保持这个选项设置为 false，在一些zulin领地保存时会造成一些轻微的服务器负担。
      SaveOnFlagChange: true
  # 设置zu金到期的检查间隔 (需要zulin系统开启)。
  RentCheckInterval: 10
  # 是否开启聊天频道。
  ResidenceChatEnable: true
  Messages:
    # 设置领地 进入(enter)/离开(lease)/拒绝(deny)和其他更多信息显示在哪里。 可用选择: ActionBar， TitleBar， ChatBox
    # TitleBar 可以使用 %subtitle% 来显示子领地信息
    GeneralMessages: ChatBox
  ActionBar:
    ShowOnSelection: true
  # 领地聊天的颜色。
  ResidenceChatColor: DARK_PURPLE
  ResidenceChatPrefixLength: 16
  # 是否忽略通常的标志并且只有OP和拥有 'residence.admin' 权限的人去改变。
  AdminOnlyCommands: false
  # 设置为 true 拥有服务器OP管理员。
  AdminOPs: true
  # 设置为 true ，服务器管理员需要使用 /resadmin 指令来执行管理员权限，或者拥有 residence.admin 权限来执行。
  AdminFullAccess: false
  # 这是你多时间插件的名字，如果你没有多世界插件请无视它。
  # 只有多世界插件设置正确，领地插件才会正确加载其他世界。
  MultiWorldPlugin: Multiverse-Core
  # 设置为 true，可以让子领地继承主领地内容
  ResidenceFlagsInherit: true
  # 设置为 false，将会允许玩家布置zulin领地。
  PreventRentModify: true
  # 设置为 true，当删除子领地时进行保护，防止子领地与父领地的主人不是同一个的情况。
  PreventSubZoneRemoval: true
  # 设置为 false，领地在发现错误的时候仍然会尝试继续加载。
  StopOnSaveFault: true
  ResidenceNameRegex: '[^a-zA-Z0-9\-\_]'
  # 设置为 true，会将领地zulin和zujie到期的信息发送至控制台。
  ShowIntervalMessages: false
  # 设置为 true，新玩家放置箱子到地上时会引导玩家。
  ShowNoobMessage: true
  # 设置为 true，当玩家没有领地时，并且附近拥有他放置的箱子则会自动圈地。。
  # 只有当他在服务器没有任何领地时会这样做。
  NewPlayer:
    Use: false
    # 设置为 true，这个领地的创建将会是免费的
    # 设置为 false，如果他有钱，则会自动扣除他的钱。
    Free: true
    # 箱子放在身边的距离。如果设置为 5，领地将会圈 5+5+1 = 11 方块大小
    Range:
      X: 5
      Y: 5
      Z: 5
  # 实验功能 - 下面选项的ID是MOD物品可以使用 'container' 和 'use' 标志的物品。
  CustomContainers: []
  CustomBothClick: []
  CustomRightClick: []
  Visualizer:
    # 如果开启，玩家会在选择领地的时候看见粒子效果
    Use: true
    # 玩家显示粒子效果的范围
    # 保持这个选项小于 30，因为玩家只能看见16格内的效果。
    Range: 16
    # 显示效果持续多长 (5000 = 5秒) 。
    ShowFor: 5000
    # 多少秒更新一次玩家显示的粒子效果
    updateInterval: 20
    # 间隔多少的方块显示一粒子效果
    RowSpacing: 2
    # 粒子在共线时间隔的方块
    CollumnSpacing: 2
    # 设置需要跳过多少粒子
    # 这是创建移动粒子效果的选项并且会改进选择粒子的美观度。
    # 当数量越大，你可以缩进的时间间隔就越多
    SkipBy: 5
    # 一边显示的最大粒子数
    FrameCap: 500
    # 侧面显示的最大粒子数
    SidesCap: 2000
    # 特殊粒子名字。 possible: explode， largeexplode， hugeexplosion， fireworksSpark， splash， wake， crit， magicCrit
    #  smoke， largesmoke， spell， instantSpell， mobSpell， mobSpellAmbient， witchMagic， dripWater， dripLava， angryVillager， happyVillager， townaura
    #  note， portal， enchantmenttable， flame， lava， footstep， cloud， reddust， snowballpoof， snowshovel， slime， heart， barrier
    #  droplet， take， mobappearance

    # 如果你是spigot类服务器，还可以使用:
    # click2， click1， bow_fire， door_toggle， iron_door_toggle， trapdoor_toggle， iron_trapdoor_toggle， fence_gate_toggle， door_close， iron_door_close， trapdoor_close， iron_trapdoor_close， fence_gate_close， extinguish， record_play， ghast_shriek， ghast_shoot， blaze_shoot， zombie_chew_wooden_door， zombie_chew_iron_door， zombie_destroy_door， smoke， step_sound， potion_break， ender_signal， mobspawner_flames， brewing_stand_brew， chorus_flower_grow， chorus_flower_death， portal_travel， endereye_launch， firework_shoot， villager_plant_grow， dragon_breath， anvil_break， anvil_use， anvil_land， enderdragon_shoot， wither_break_block， wither_shoot， zombie_infect， zombie_converted_villager， bat_takeoff， end_gateway_spawn， enderdragon_growl，
    Selected:
      Frame: happyVillager
      Sides: reddust
    Overlap:
      Frame: FLAME
      Sides: FLAME
    # 玩家进入领地是否显示粒子效果。 只会在主领地有效
    EnterAnimation: true
  # 玩家被推出领时是否显示粒子效果
  BounceAnimation: true
  GUI:
    # 打开标志引导菜单(GUI)
    Enabled: true
    # 当标志为true时显示的物品
    setTrue: GREEN_WOOL
    # 当权限显示为false时显示的物品
    setFalse: RED_WOOL
    # 当权限显示为remove时显示的物品
    setRemove: LIGHT_GRAY_WOOL
  # 默认 = false。 开启它，有 nomobs 标志的领地将会定期清理怪物。
  # 这对服务器造成的负担是非常严重的，所以在你需要的时候再打开它。
  AutoMobRemoval:
    Use: false
    # 多少秒进行一次检查。请进来保持数值够大。
    Interval: 3
  EnforceAreaInsideArea: false
  EnableSpout: false
  EnableLeaseMoneyAccount: true
  # 如果设置为 true，增加对 kCouldron 服务端的支持。 Action bar 信息和选择可视化等内容会被禁用。
  Couldroncompatibility: false
DynMap:
  # 是否开启对 DynMap 的支持
  Use: false
  # 显示隐藏的标志
  ShowFlags: true
  # 如果设置为true，会从dynmap中隐藏设置为true的标志。
  HideHidden: true
  Layer:
    # 开启 3D 区域
    3dRegions: true
    # 显示子领地的深度
    SubZoneDepth: 2
  Border:
    # 颜色代码。 从这网站选择颜色 http://www.w3schools.com/colors/colors_picker.asp
    Color: "#FF0000"
    # 透明度。 0.3 意味着只显示 30% 颜色
    Opacity: 0.3
    # 边框厚度
    Weight: 3
  Fill:
    Opacity: 0.3
    Color: "#FFFF00"
    ForRent: "#33cc33"
    Rented: "#99ff33"
    ForSale: "#0066ff"
  # 在列表上显示的区域
  VisibleRegions: []
  # 在游戏地图上隐藏的区域
  HiddenRegions: []
# 发展中选项
Raid:
  # 这是决定你服务器是否使用袭击功能
  # 当启用此功能的时候，袭击者仍然可以在该领地进行移动，即使 move 的标志为 false
  Enabled: false
  # 袭击开始前的时间
  # 这时间将会允许回到领地并做好保卫领地来与袭击者对抗
  PreTimer: 120
  # 这个时间是袭击的时间
  # 这个时间将允许袭击者偷走物品并杀害防卫者
  Timer: 120
  # 这是领地免受袭击的保护时间
  # 默认是 79200 秒，也就是22小时，如果重启会刷新时间
  Cooldown: 79200
  # 这是玩家免受袭击的保护时间
  # 这个情况适用于玩家有多个领地，防止玩家再次受到袭击
  # 默认是 79200 秒，也就是22小时，如果重启会刷新时间
  PlayerCooldown: 79200
  Allow:
    Attacker:
      # 允许袭击者打破方块，即使 destroy 标志设置为 false
      # 这只适用于袭击者袭击的时间
      blockBreak: true
      # 允许袭击者放置方块，即使 place 标志设置为 false
      # 这只适用于袭击者袭击的时间
      blockPlace: true
    Defender:
      # 允许保卫者打破方块，即使 destroy 标志设置为 false
      # 这只适用于袭击者袭击的时间
      blockBreak: true
      # 允许保卫者放置方块，即使 place 标志设置为 false
      # 这只适用于袭击者袭击的时间
      blockPlace: true
      # 允许袭击者传送至领地，包括使用 /res tp 或其他第三方传送插件
      # 这只适用于袭击者袭击的时间
      # 请记住，如果袭击者没有此权限，他将无法在袭击的领地上进行传送
      Teleport: false
      # 在袭击者袭击时间和受保护的时间，允许袭击者使用容器，如箱子
      # 这只适用于袭击者袭击的时间和受保护的时间
      # 设置为 false 可以保证玩家在受保护的时候将物品移动到另外一个不被攻击的领地
      # 在袭击时间内，袭击者将会被允许打开任何的容器
      containerUsage: false
  # 当设置为 false 时，玩家处于同一队伍 (袭击者 或 保卫者) 会无法对队友进行伤害
  FriendlyFire: true
```

:::

`Groups.yml` 领地权限组设置，设置领地大小与价格的地方

<a href="https://www.mcbbs.net/forum.php?mod=attachment&aid=MTM2NTUzMXwxZjczYzJmNHwxNjA0ODkzODAyfDg4MTg4NHw2MzEzNDM%3D">完整版下载</a>

::: details 点击查看代码

```yml
# 这里的组是相对于 '<worldname>。yml' 文件的权限组，汉化：羽神
Groups:
  Default: #权限组名字, 不要删除此组
    # 玩家可以自定义领地的信息
    # 修改注释下面的内容可以将此配置镜像放置到其他组
    #Mirror:
    #- 'group1'
    #- 'group2'
    Residence:
      # 这决定是否能创建领地。 这可以被 'residence。create' 权限覆盖
      CanCreate: true
      # 玩家可拥有的最大领地数量。
      MaxResidences: 3
      # 玩家可拥有的最大物理区块。
      MaxAreasPerResidence: 2
      # 方块向东西方向最远可以选择到达多大 (X)。
      MaxEastWest: 16
      # (可选) 方块向东西方向最小可选择到达多小 (X)。
      MinEastWest: 3
      # 方块向南北方向最远可以选择到达多大 (Z)。
      MaxNorthSouth: 16
      # (可选) 方块向南北方向最小可选择到达多小 (Z)。
      MinNorthSouth: 3
      # 方块最高可以选择多高 (Y)。
      MaxUpDown: 256
      # (可选) 方块最低应该选择多高 (Y)。
      MinUpDown: 3
      # 领地最低可以保护到哪一层。
      MinHeight: 0
      # 领地最高可以保护到哪一层。
      MaxHeight:
        255
        # 一个领地内最多可拥有多少个子领地。
      MaxSubzonesInArea:
        3
        # 子领地可到达的最大深度？The maximum recursive depth that subzones can go。
        # 子领地选择必须在父领地最大深度2之内。
        # 设置为0取消子领地。
      SubzoneDepth: 3
      # (可选) 方块向东西方向最远可以选择到达多大 (X)。
      SubzoneMaxEastWest: 16
      # (可选) 方块向东西方向最小可选择到达多小 (X)。
      SubzoneMinEastWest: 3
      # (可选) 方块向南北方向最远可以选择到达多大 (Z)。
      SubzoneMaxNorthSouth: 16
      # (可选) 方块向南北方向最小可选择到达多小 (Z)。
      SubzoneMinNorthSouth: 3
      # (可选) 方块最高可以选择多高 (Y)。
      SubzoneMaxUpDown: 256
      # (可选) 方块最低应该选择多高 (Y)。
      SubzoneMinUpDown: 3
      # 是否允许传送到领地。
      CanTeleport: true
      # 允许使用 /res unstuck, 来让自己退出因某种原因卡住的领地。
      Unstuck: true
      # 允许使用 /res kick, 来踢出领地的玩家。
      Kick: False
      # 允许使用 /res select 指令, 如果关闭它则只能使用选取工具。
      SelectCommandAccess: true
      # 允许标志组访问 Blacklist/Ignorelist 列表的东西。
      ItemListAccess: true
    # 这是设置领地进入或离开的信息。
    Messaging:
      # 是否允许玩家修改信息。
      CanChange: true
      # 这是在创建新领地时，默认的进入领地信息。
      # 使用 %zone 可以显示当前子领地名称而不显示父领地前缀。
      # 设置为空则禁用。
      DefaultEnter: "欢迎 %player 来到 %residence, 领地主是 %owner。"
      # 这是在创建新领地时，默认的离开领地信息。
      # 使用 %zone 可以显示当前子领地名称而不显示父领地前缀。
      # 设置为空则禁用。
      DefaultLeave: "你离开了 %residence。"
    # 这是设置zulin系统的。
    Lease:
      # 最大可以chuzu多少天。
      MaxDays: 16
      # 续zu时最大可以使用指令 '/res lease renew' 来添加多少天。
      RenewIncrement: 14
    # 有关chuzu系统的设置
    Rent:
      # 决定玩家最大可以zu多少个领地。
      MaxRents: 3
      # 决定玩家最大可以chuzu多少个领地
      MaxRentables: 3
      # 决定可zu用的最大天数
      MaxRentDays: 31
    # 这是领地插件的经济系统。
    Economy:
      # 玩家是否可以购买领地。
      CanBuy: true
      # 玩家是否可以出售领地。
      CanSell: false
      # 在购买时，是否忽略大小或价格的限制。
      IgnoreLimits: false
      # 在创建新领地时，每一格所花费的价格。
      BuyCost: 0.5
      # 在删除领地时，每一格所返还的价格。
      # 注意，需要在config中开启 ResMoneyBack 选项，此功能才能启用。
      SellCost: 0.25
      # zulin每个方块的价格 (需要zulin系统的开启)。
      RenewCost: 0.2
    # 标志的检查方式:
    # 1: 玩家
    # 2: 权限组
    # 3: 领地主
    # 4: 和其他未定义的组，例如经济API (通常开启)。
    # 标志一般为关闭。
    # 这是设置覆盖全局设置的标志。
    Flags:
      # 特殊允许某些组在一开始拥有某些标志。
      Permission:
        #build: true
      # 特殊允许用户的普通权限中拥有额外标志。
      Default:
        #build: true
      # 特殊允许在创建领地时拥有额外标志。
      CreatorDefault:
        #build: true
      # 特殊允许本标志组在其他标志组中拥有的特殊标志。
      GroupDefault:
        #default: #权限组名
        #build: false
      # 这是允许标志组在领地之外拥有特殊标志。
      # 这里的标志是首先检查的，会覆盖全局设定。。
      World:
        Global:#标志应用到全局
          #build: false
        WorldNameHere:#或者应用到某个世界
          #build: false
  NextGroup: #权限组名字, 玩家应该拥有 residence.group.nextgroup 权限才能成为这个领地用户组成员
    Residence:
      CanCreate: true
      MaxResidences: 4
      MaxAreasPerResidence: 2
      MaxEastWest: 20
      MaxNorthSouth: 20
      MaxUpDown: 20
      MinHeight: 0
      MaxHeight: 255
      SubzoneDepth: 3
      CanTeleport: true
      Unstuck: true
      Kick: true
      SelectCommandAccess: true
      ItemListAccess: true
    Messaging:
      CanChange: true
      DefaultEnter: "欢迎 %player 来到 %residence, 领地主人是 %owner。"
      DefaultLeave: "现在离开了 %residence。"
    Lease:
      MaxDays: 16
      RenewIncrement: 14
    Rent:
      MaxRents: 3
      MaxRentables: 3
      MaxRentDays: 31
    Economy:
      CanBuy: true
      CanSell: false
      IgnoreLimits: false
      BuyCost: 0.7
      SellCost: 0.3
      RenewCost: 0.3

# 你可以手动设定组里一个玩家的情况, 这将覆盖他所在组的权限。
GroupAssignments:
  bekvon: default
  player: default
```

:::

`Flag.yml` 所有领地标志(Flag)设置的地方，超过 90+种！

汉化版本：4.9.1.3  

详细 Flag 的用法请看 <a href="https://github.com/bluesadi/ResidenceChineseTutorial/wiki/%E6%A0%87%E5%BF%97%E7%9A%84%E9%BB%98%E8%AE%A4%E8%AE%BE%E7%BD%AE%E5%92%8C%E8%A1%8C%E4%B8%BA-Flag-Default-Settings-and-Behavior">中文 Wiki</a>

<a href="https://www.mcbbs.net/forum.php?mod=attachment&aid=MTM2NTUzMnwzOTkyYmFmNnwxNjA0ODkzODAyfDg4MTg4NHw2MzEzNDM%3D">完整版下载地址</a>

::: details 点击查看代码

```yml
# 这是标志的全局设置. 汉化:羽神
Global:
  # 这些标志会应用到全部地方，不只有领地内.
  Flags:
    # 这是玩家在全世界拥有的标志, 这会覆盖每一个标志组。
    Global:
      use: true
      build: true
      ignite: true
      firespread: true
      damage: true
      creeper: true
      tnt: true
      pvp: true
  # 这是每一个权限组可用的标志, 除了特殊的标志。
  FlagPermission:
    move: true
    build: true
    place: true
    destroy: true
    use: true
    container: true
    pvp: true
    tp: true
    ignite: true
    firespread: true
    flow: true
    lavaflow: true
    waterflow: true
    creeper: true
    tnt: true
    monsters: true
    animals: true
    animalkilling: true
    mobkilling: true
    vehicledestroy: true
    trade: true
    shear: true
    leash: true
    nofly: false
    subzone: true
    healing: true
    piston: true
    diode: true
    lever: true
    button: true
    door: true
    table: true
    enchant: true
    brew: true
    bed: true
    cake: true
    note: true
    trample: true
    burn: true
    explode: true
    fireball: true
    command: false
    day: true
    night: true
    chat: true
    hidden: false
    overridepvp: false
    keepinv: false
    keepexp: false
    shop: true
    bank: false
    anvil: true
    admin: true
    anvilbreak: true
    backup: false
    beacon: true
    canimals: true
    chorustp: true
    cmonsters: true
    commandblock: false
    coords: true
    craft: true
    dragongrief: true
    dye: true
    damage: false
    decay: true
    dryup: true
    egg: true
    enderpearl: true
    fallinprotection: true
    falldamage: true
    feed: true
    friendlyfire: false
    flowinprotection: true
    flowerpot: true
    grow: true
    glow: true
    hotfloor: true
    hook: false
    iceform: true
    icemelt: true
    itemdrop: true
    itempickup: true
    jump2: false
    jump3: false
    mobexpdrop: true
    mobitemdrop: true
    nanimals: true
    nmonsters: true
    fly: false
    nomobs: true
    nodurability: false
    pressure: true
    pistonprotection: true
    rain: true
    redstone: true
    respawn: false
    riding: true
    shoot: true
    sun: true
    snowtrail: true
    spread: true
    snowball: true
    sanimals: true
    smonsters: true
    title: true
    trusted: true
    witherspawn: true
    phantomspawn: true
    witherdamage: true
    witherdestruction: true
    wspeed1: true
    wspeed2: true
  # This sets GUI items to represent each flag, if not given, then gray wool will be used
  FlagGui:
    animalkilling: CHICKEN
    animals: PIG_SPAWN_EGG
    bed: WHITE_BED
    brew: BREWING_STAND
    build: BRICKS
    burn: TORCH
    button: OAK_BUTTON
    cake: CAKE
    canimals: SHEEP_SPAWN_EGG
    chat: WRITABLE_BOOK
    cmonsters: CREEPER_SPAWN_EGG
    command: COMMAND_BLOCK
    container: CHEST_MINECART
    creeper: CREEPER_SPAWN_EGG
    destroy: END_STONE
    diode: REPEATER
    door: OAK_DOOR
    enchant: ENCHANTING_TABLE
    explode: TNT_MINECART
    fireball: FIRE_CHARGE
    firespread: BLAZE_POWDER
    flow: LILY_PAD
    healing: POTION
    ignite: FLINT_AND_STEEL
    lavaflow: LAVA_BUCKET
    leash: LEAD
    lever: LEVER
    mobkilling: ROTTEN_FLESH
    monsters: SPAWNER
    move: LEATHER_BOOTS
    nanimals: COW_SPAWN_EGG
    nmonsters: SKELETON_SPAWN_EGG
    nofly: ORANGE_CARPET
    nomobs: BARRIER
    note: NOTE_BLOCK
    piston: PISTON
    place: SEA_LANTERN
    pvp: WOODEN_SWORD
    sanimals: RABBIT_SPAWN_EGG
    shear: SHEARS
    smonsters: ZOMBIE_SPAWN_EGG
    subzone: GRAY_STAINED_GLASS_PANE
    table: CRAFTING_TABLE
    tnt: TNT
    tp: END_PORTAL_FRAME
    trade: EMERALD
    trample: DIRT
    use: STONE_PRESSURE_PLATE
    vehicledestroy: MINECART
    waterflow: WATER_BUCKET
    anvil: ANVIL
    admin: BEDROCK
    anvilbreak: ANVIL
    backup: BOOKSHELF
    bank: ENDER_CHEST
    beacon: BEACON
    chorustp: CHORUS_FRUIT
    commandblock: COMMAND_BLOCK
    coords: COMPASS
    craft: STONE
    dragongrief: DIRT
    day: DANDELION
    dye: ORANGE_DYE
    damage: GOLDEN_SWORD
    decay: OAK_LEAVES
    dryup: BLUE_STAINED_GLASS_PANE
    egg: EGG
    enderpearl: ENDER_PEARL
    fallinprotection: SAND
    falldamage: LEATHER_BOOTS
    feed: COOKED_BEEF
    friendlyfire: SUNFLOWER
    flowinprotection: OAK_BOAT
    flowerpot: FLOWER_POT
    grow: WHEAT_SEEDS
    glow: SEA_LANTERN
    hotfloor: MAGMA_BLOCK
    hidden: GLASS_PANE
    hook: FISHING_ROD
    iceform: ICE
    icemelt: ICE
    itemdrop: FEATHER
    itempickup: GUNPOWDER
    jump2: SLIME_BLOCK
    jump3: SLIME_BLOCK
    keepinv: LEATHER_HELMET
    keepexp: GOLDEN_APPLE
    mobexpdrop: MELON_SEEDS
    mobitemdrop: COCOA_BEANS
    night: BLACK_WOOL
    fly: ORANGE_CARPET
    nodurability: ANVIL
    overridepvp: IRON_SWORD
    pressure: LIGHT_WEIGHTED_PRESSURE_PLATE
    pistonprotection: STICKY_PISTON
    rain: BLUE_ORCHID
    redstone: SUNFLOWER
    respawn: SUNFLOWER
    riding: SADDLE
    shoot: ARROW
    sun: SUNFLOWER
    shop: ITEM_FRAME
    snowtrail: SNOW
    spread: SNOWBALL
    snowball: SNOWBALL
    trusted: STONE
    witherspawn: WITHER_SKELETON_SKULL
    witherdamage: WITHER_SKELETON_SKULL
    witherdestruction: WITHER_SKELETON_SKULL
    wspeed1: POTION
    wspeed2: POTION
    testing: WHITE_WOOL
    phantomspawn: BROWN_WOOL
    title: PAPER
  # 这是在所有领地中的默认标志.
  ResidenceDefault:
    build: false
    destroy: false
    use: false
    container: false
    pvp: false
    tnt: false
    creeper: false
    ignite: false
    firespread: false
    vehicledestroy: false
    animalkilling: false
    hook: false
    shear: false
    leash: false
    pistonprotection: true
    tp: true
    explode: false
  # 在创建领地时领地主拥有的权限.
  CreatorDefault:
    build: true
    destroy: true
    move: true
    use: true
    ignite: true
    container: true
    animalkilling: true
    mobkilling: true
    vehicledestroy: true
    trade: true
    shear: true
    leash: true
  # 出zu领地时拥有的权限.
  RentedDefault:
    container: true
    ignite: true
    move: true
    trade: true
    mobkilling: true
    shear: true
    build: true
    use: true
    destroy: true
    vehicledestroy: true
    leash: true
    animalkilling: true
    admin: true
  # 这是打包的标志, 所以你可用用 /res pset 玩家名 redstone true 来执行此标志包, 玩家会一次拥有包内全部标志, 一些类似的权限冲突会设置为false或者remove.
  GroupedFlags:
    redstone:
    - note
    - pressure
    - lever
    - button
    - diode
    craft:
    - brew
    - table
    - enchant
    trusted:
    - use
    - tp
    - build
    - destroy
    - container
    - move
    - leash
    - animalkilling
    - mobkilling
    - shear
    - chat
    - beacon
    fire:
    - ignite
    - firespread
  # 完全禁用已经设置了的标志，会导致 resadmin 指令也无法改动。
  # 如果你不想要一些特殊标志进行一些特殊的检查，这可以帮助你降低一些服务器资源的占用
  TotalFlagDisabling:
  - Completely
  - Disabled
  - Particular
  - Flags
# 这可以创建 白名单 / 黑名单
ItemList:
  # 菜单名字是不重要的, 而且这是独一无二的.用一个描述性的名字更好.
  DefaultList:
    # 菜单类型，可以是(黑名单) blacklist,(白名单)whitelist,或者(忽视名单)ignorelist
    Type: blacklist
    # 如果你想, 你可以只应用到一个世界,或者应用到所有世界
    # World: world
    # 你可以只应用到某个组,或者应用到全部标志组
    # Group: default
    # 这是是否允许的名字
    # 如果你想查看物品的名字，可以在游戏中输入 /res material <id>
    # 或者，你可以输入物品ID，然后还有少量的物品名字，不过这样不能清晰的看清列表中允许或禁止什么。
    Items:
    - BEDROCK
    - LAVA
    - WATER
    - STATIONARY_LAVA
    - STATIONARY_WATER
    - MOB_SPAWNER
```

:::

## 常见问题

#### Q：怎么圈地？  

::: details 点击查看

A：默认圈地工具是木锄头，在你需要保护的地方选择对角线式的两个点（如左上方和右下方）
然后在其中一个点用圈地工具左键，在另一个点用鼠标右键，输入指令 /res create (领地名字)即可圈地
或者，可以站在保护的地方的中心，输入指令/res auto (领地名字) (圈地大小) 进行圈地  

:::

#### Q：如何设置中文?

::: details 点击查看

A：打开[Config.yml]，找到【Language: English】修改为【Language: Chinese】(区分大小写)  

:::
#### Q：怎么打开GUI菜单

::: details 点击查看

A:直接输入指令/res set或者/res pset [玩家]即可打开  

:::

#### Q：如何查看圈地工具或圈地信息查看工具?

::: details 点击查看

A：使用指令/res tool —— 显示领地圈地和查看信息的工具类型  

:::

#### Q：为什么我的圈地工具不是木锄？怎么换圈地工具？

::: details 点击查看

A：打开[Config.yml]，找到【SelectionToolId:】，后方修改为圈地的物品，注意，应圈地工具的左键和右键均不与互交方式冲突，另外，在新版插件中，物品的ID请用英文。<a href="https://minecraft-ids.grahamedgecombe.com/">英文ID网站</a>

:::

#### Q：为什么OP不能创建更多领地/为什么OP还会被限制权限

::: details 点击查看

A：打开[Config.yml]，找到并修改  

```yml
如果设置为true,则开启领地Op (/resadmin)
AdminOPs: true
# 如果设置为true,则将领地设置上升至管理员也可操作，不需要/resadmin指令，如果是Op的领地，则其他Op操作需要相应的权限AdminFullAccess: false
```

:::

#### Q：我是Mod服务器，但是这个插件经常报错怎么办

::: details 点击查看

A：打开[Config.yml]，找到【CouldronCompatability: 】，修改为true  

:::

#### Q：为什么在地皮世界也能圈地？

::: details 点击查看

A：你需要禁止地皮世界使用领地插件的指令，打开[Config.yml]，找到  

```yml
# 这是你领地插件的主世界. 通常设置为 'world'。 大写很重要（明示区分大小写） <-[吐槽]作者自己在注释上都没注意大小写
    DefaultWorld: world
    DisabledWorlds:
      # 禁用此插件的世界列表。
      List: []
      # 禁止所包含的世界的所有监听器。
      DisableListeners: true
      # 禁止所包含的世界的所有领地指令使用。
      DisableCommands: true
```

将其中List修改，例如我的地皮世界为plotworl（注:list和-plotwolrd应该在同一直线上）

```yml
    List: 
    - plotworld
```

:::

#### Q：如何修改或添加随机传送中的传送范围或传送世界(/res rt)

::: details 点击查看

A：打开[Config.yml]。找到并修改  

```yml
Tp:
    # 以秒为单位，用于传送功能
    # 设置为0禁用
    TeleportDelay: 3
    # 当玩家传送到领地时，会在title（标题区）显示附加内容
    TeleportTitleMessage: true
  RandomTeleportation:
    Worlds:
      world_nether:
        Enabled: true
        MaxCoord: 1000
        MinCord: 500
        CenterX: 0
        CenterZ: 0
      world_the_end:
        Enabled: true
        MaxCoord: 1000
        MinCord: 500
        CenterX: 0
        CenterZ: 0
      world:
        Enabled: true
        MaxCoord: 1000
        MinCord: 500
        CenterX: 0
        CenterZ: 0
    # 玩家再次使用指令需要等待多长时间。
    Cooldown: 5
    # 会有多少次尝试找到正确的传送位置
    # 尽量保持数字低，因为玩家可以在延迟过后再输入一次指令
    MaxTries: 20
```

:::

#### Q：如何让随机传送/领地TP没有延迟/冷却?

::: details 点击查看

A：给予其中几个权限  

```yml
residence.tpdelaybypass - 无视领地传送延迟。
residence.randomtp.delaybypass - 无视随机传送延迟。
residence.randomtp.cooldownbypass - 无视随机传送冷却。
```

:::

#### Q：如何关闭更新检测？

::: details 点击查看

A：打开[Config.yml]，找到【versionCheck: 】，将true改为false。  

:::

#### Q：为什么玩家无法圈地，就连可设置的范围都是写0，我怎么修改Group.yml都无效？

::: details 点击查看

A：检查你权限插件是否正常。打开[Groups.yml]，检查第二行左右【Default: 】，最后一行【player: default】【bekvon: default】，中的default是否同步，或者给予权限：residence.group.[groupname] -从groups.yml中设置玩家的领地组(默认组为default)  

:::

#### Q：没有上面图片的粒子效果

::: details 点击查看

A：1.8以后的服务器才有此功能  

:::

#### Q：如何删除领地的时候还钱呢？

::: details 点击查看

A：打开config.yml，找到【ResMoneyBack】设置为true。  

:::

#### Q：怎么让领地可以修改为中文

::: details 点击查看

A：打开config.yml，把【ResidenceNameRegex: '[^a-zA-Z0-9-_]'】改为【ResidenceNameRegex: [^a-zA-Z0-9-_一-龥]】(注意，这可能会导致部分服务器领地无法收钱）  

:::

#### Q：我服务器的领地可以无权限破坏！

::: details 点击查看

A：检查经济/创世神/权限插件是否为最新版本。将destroy权限给设置为false才能无法破坏方块，如果无效，请尝试降低插件版本。  

:::

#### Q：为什么我的领地不收钱？

::: details 点击查看

A：检查经济插件是否正常。打开[Config.yml]，找到【EnableEconomy: 】检查是否为开启。打开[Groups.yml]，找到【BuyCost: 】是否不为0。  

:::

#### Q：如何让领地退款?

::: details 点击查看

A：打开[Conflg.yml]，找到【ResMoneyBack: false】修改为true。  

:::

#### Q：如何启用领地聊天前缀

::: details 点击查看

A：打开[Config.yml]，找到【ResidenceChatEnable: true】修改为true，并认真看此条选项一下的内容。  

:::

#### Q：为什么我的领地收钱非常多?

::: details 点击查看

A：打开[Groups.yml]，找到【BuyCost: 】修改，建议在0.01以内。如果你想知道更多收钱机制，可以可以查看上方【领地插件进阶教程】  

:::

#### Q:如何启用Lease(zulin)系统

::: details 点击查看

A:打开[Config.yml]，找到【EnableRentSystem: true】，设置为true，并且继续看Config.yml中下面关于此系统的功能。  

:::

#### Q：如何玩家创建领地自动禁止某个权限？

::: details 点击查看

A：前往Flag.yml，找到创建后领地的flag设置，添加上你需要的禁止权限，比如移动【move: false】  

```yml
#玩家领地权限(非主人)
ResidenceDefault
#玩家领地权限(领地主人,创建者)
  CreatorDefault:
```

:::

#### Q：关于如何创建更多的领地权限组

::: details 点击查看

A：打开[Groups.yml]，复制【NextGroup 到 RenewCost: 0.3这一串内容】并粘贴，然后NextGroup修改为你想要的名字，并且你可以修改更多内容，选项对照上方[Groups.yml]的翻译。  

:::

#### Q：为什么水流/岩浆无法超过63格？

::: details 点击查看

A：打开[Config.yml]找到并依照翻译设置即可

```yml
Flow:
      # 这是限制水和岩浆流动时高度的设置
      # 这个选项不会限制领地内水和岩浆的高度
      Level: 63
      # 如果设置为true, 则会限制岩浆的高度
      NoLavaFlow: true
      # 如果设置为true, 则会限制水的高度
      NoWaterFlow: true
      Worlds:
      - world
```

```yml
    Place:
      # 这里将会限制水和岩浆开始放置的地方
      # 这个选项不会限制领地内水和岩浆的高度
      Level: 63
      # 如果设置为true, 则会限制岩浆的高度
      NoLavaPlace: true
      # 如果设置为true, 则会限制水的高度
      NoWaterPlace: true
      Worlds:
      - world
```

:::

#### Q：为什么重启服务器领地会消失

::: details 点击查看

A：打开[Config.yml]，找到【MultiWorldPlugin: Multiverse-Core】，其中【Multiverse-Core】，修改为你使用的多世界插件  

:::

#### Q：如何给玩家踢出其他玩家的指令

::: details 点击查看

A：打开[Groups.yml]，找到【Kick: False】改为true即可  

:::

本页内容来源于 <a href="https://www.mcbbs.net/forum.php?mod=viewthread&tid=631343">MCBBS</a>  