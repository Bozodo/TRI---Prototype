// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"WeaponSkill","status":true,"description":"Change skill id of attack for each weapon.","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1104","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_X_MessageBacklog","status":true,"description":"v1.01 (Requires YEP_MessageCore.js) Add a message backlog\nfunction to your game's message system!","parameters":{"---Backlog Key---":"","LogKeyButton":"shift","EnableLogKey":"true","---Settings---":"","DefaultLogging":"true","LogSpecialInput":"true","SpecialInputFmt":"»%1","MaximumEntries":"20","ScrollBarEnabled":"true","ScrollBarColor":"0","ScrollBarSpriteCode":"\"// Establish basic measurements\\nvar padding = backlogWindow.standardPadding();\\nvar width = padding / 2;\\nvar height = Graphics.boxHeight;\\n\\n// Calculate number of visible rows\\nvar visibleRows = backlogWindow.height - padding * 2;\\nvisibleRows = Math.floor(visibleRows / backlogWindow.lineHeight());\\nif (visibleRows < backlogWindow.maxItems()) {\\n  height *= visibleRows / Math.max(1, backlogWindow.maxItems());\\n}\\n\\n// Calculate the size of a basic scrolling increment\\nvar max = Math.floor(Math.max(1, backlogWindow.maxItems()) / backlogWindow.maxCols()) - 1;\\nthis._increment = Graphics.boxHeight / Math.max(1, max);\\n\\n// Generate the bitmap\\nthis.bitmap = new Bitmap(width, height);\\nthis.bitmap.fillAll(backlogWindow.textColor(scrollBarColor));\"","ScrollSpeed":"4","ScrollWrap":"true","---Visual---":"","BackgroundType":"1","BackOpacity":"192","DimColor1":"rgba(0, 0, 0, 0.8)","DimColor2":"rgba(0, 0, 0, 0.8)","Picture":"","PictureOpacity":"255","PictureStretch":"true"}},
{"name":"--------------------","status":true,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"stb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.13 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.13 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":true,"description":"v1.05 (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_X_BattleSysSTB","status":true,"description":"v1.05 (Requires YEP_BattleEngineCore.js) Add STB (Standard\nTurn Battle) into your game using this plugin!","parameters":{"---General---":"","Action Speed":"agi","Delay Status Adjust":"true","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","---Turn Order---":"","Show Turn Window":"false","Turn Window X":"Graphics.boxWidth - width","Turn Window Y":"this.fittingHeight(2)","Turn Window Width":"200","Turn Window Height":"Graphics.boxHeight - statusHeight - this.fittingHeight(2)","Current Battler Color":"6","Actor Battler Color":"4","Enemy Battler Color":"2"}},
{"name":"YEP_BattleStatusWindow","status":true,"description":"v1.09 A simple battle status window that shows the\nfaces of your party members in horizontal format.","parameters":{"---Visual---":"","No Action Icon":"16","Name Font Size":"20","Param Font Size":"20","Param Y Buffer":"7","Param Current Max":"false","Adjust Columns":"true","State Icons Row":"1","---Actor Switching---":"","Left / Right":"false","PageUp / PageDown":"false","Allow Turn Skip":"false","---Front View---":"","Show Animations":"true","Show Sprites":"false","Align Animations":"true","X Offset":"24","Y Offset":"0"}},
{"name":"YEP_X_InBattleStatus","status":true,"description":"v1.01 (Requires YEP_BattleEngineCore.js) Adds a 'Status'\noption in the Party Window in battle.","parameters":{"---General---":"","Command Text":"Status","Show Command":"true","Window X":"0","Window Y":"this.fittingHeight(2)","Window Width":"Graphics.boxWidth","Window Height":"Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(4)","---Status List---":"","Status Width":"Math.max(312, Graphics.boxWidth / 4);","State Help Front":"\\i[%1]%2","State Help End":"","Healthy Icon":"127","Healthy Text":"Healthy","Healthy Help":"User is currently unaffected by status effects.","---Buffs List---":"","MaxHP Buff Text":"MaxHP Up","MaxHP Buff Help":"Raises Maximum Health to %1%.","MaxMP Buff Text":"MaxMP Up","MaxMP Buff Help":"Raises Maximum Mana to %1%.","ATK Buff Text":"ATK Up","ATK Buff Help":"Raises Attack to %1%.","DEF Buff Text":"DEF Up","DEF Buff Help":"Raises Defense to %1%.","MAT Buff Text":"MAT Up","MAT Buff Help":"Raises Magic Attack to %1%.","MDF Buff Text":"MDF Up","MDF Buff Help":"Raises Magic Defense to %1%.","AGI Buff Text":"AGI Up","AGI Buff Help":"Raises Agility to %1%.","LUK Buff Text":"LUK Up","LUK Buff Help":"Raises Luck to %1%.","---Debuffs List---":"","MaxHP Debuff Text":"MaxHP Down","MaxHP Debuff Help":"Lowers Maximum Health to %1%.","MaxMP Debuff Text":"MaxMP Down","MaxMP Debuff Help":"Lowers Maximum Mana to %1%.","ATK Debuff Text":"ATK Down","ATK Debuff Help":"Lowers Attack to %1%.","DEF Debuff Text":"DEF Down","DEF Debuff Help":"Lowers Defense to %1%.","MAT Debuff Text":"MAT Down","MAT Debuff Help":"Lowers Magic Attack to %1%.","MDF Debuff Text":"MDF Down","MDF Debuff Help":"Lowers Magic Defense to %1%.","AGI Debuff Text":"AGI Down","AGI Debuff Help":"Lowers Agility to %1%.","LUK Debuff Text":"LUK Down","LUK Debuff Help":"Lowers Luck to %1%."}},
{"name":"YEP_X_TurnOrderDisplay","status":true,"description":"v1.03 Displays the turn order for turn-based battle systems\nand allows for various display options.","parameters":{"---Default---":"","Show Turn Order":"true","---Settings---":"","Icon Size":"32","Position X":"right","Position Y":"54","Turn Direction":"left","Performed Spacing":"true","---Allies---":"","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","---Enemies---":"","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.16 Alter the basic mechanics behind buffs and states\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"YEP_HitAccuracy","status":true,"description":"v1.04 This plugin alters the nature of hit accuracy for\nRPG Maker MV by giving control to its formula.","parameters":{"---Formula---":"","Accuracy Formula":"skillHitRate * (userHitRate - targetEvadeRate)","Evade Formula":"0","---User Hit Rate---":"","User Physical Hit":"user.hit","User Magical Hit":"1.00","User Certain Hit":"1.00","---Target Evade Rate---":"","Target Physical Evade":"target.eva","Target Magical Evade":"target.mev","Target Certain Evade":"0.00"}},
{"name":"YEP_BattleBgmControl","status":true,"description":"v1.01 Assign BGM's to certain troops. Make BGM's change\nduring battle when certain enemies reach different HP values.","parameters":{}},
{"name":"--------------------","status":true,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_SkillCore","status":true,"description":"v1.13 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"0","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"0","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"0"}},
{"name":"YEP_X_LimitedSkillUses","status":true,"description":"v1.06 (Requires YEP_SkillCore.js) Make certain skills have\na limited amount of times they can be used in battle.","parameters":{"---General---":"","Limited Use Icon":"160","Font Size":"20","Text Color":"0","Cost Format":"%1/%2","Empty Icon":"168","Empty Text":"Empty","Absolute Max":"100","Bypass Limits":"1 2 3 4 5 6 7","Bypass List":"[]","---Defaults---":"","Limit All Skills":"false","Limit Charges":"2","Recover All":"true","Victory Recover":"10","Escape Recover":"5","Lose Recover":"5"}},
{"name":"YEP_SkillLearnSystem","status":true,"description":"v1.17 Allows actors to learn skills from the skill menu\nthrough crafting them via items or otherwise.","parameters":{"---General---":"","Learn Command":"Learn Skills","Show Command":"true","Enable Command":"true","Integrate":"false","---Confirm Learn---":"","Confirm Window":"true","Confirm Text":"Have %1 learn %2?","Confirm Yes":"Yes","Confirm No":"No","---Skill Learn---":"","Learned Text":"Learned","Learned Size":"20","Learn Cost":"Learn Skill Cost","Cost Size":"20","Show Gold Window":"true","---Default---":"","Default Gold Cost":"1000","Default JP Cost":"100"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.18 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Finish","Remove Text":"Remove","Remove Icon":"16","Empty Text":"<Empty>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_X_ChangeBattleEquip","status":true,"description":"v1.05 (Requires YEP_BattleEngineCore & YEP_EquipCore)\nAllow your actors to change equipment mid-battle.","parameters":{"Command Name":"Equip","Equip Cooldown":"1"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_StatusMenuCore","status":true,"description":"v1.04 Changes the Status menu for your characters into\na hub that displays more character information.","parameters":{"---Settings---":"","Command Order":"General Parameters Elements States Attributes MorePages Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"General","Parameters Text":"Parameters","Experience Text":"Experience","Total Format":"Total %1 for Next %2","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","---Parameters---":"","Parameters Command":"Parameters","Graph Text":"Parameter Graph","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"Elements","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---States---":"","States Command":"States","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"Attributes","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","---XParam Names---":"","hit Name":"Hit Rate","eva Name":"Evasion Rate","cri Name":"Critical Hit Rate","cev Name":"Critical Evasion Rate","mev Name":"Magic Evasion Rate","mrf Name":"Magic Reflect Rate","cnt Name":"Counter Rate","hrg Name":"HP Regen Rate","mrg Name":"MP Regen Rate","trg Name":"TP Regen Rate","tgr Name":"Aggro Rate","grd Name":"Guard Effect","rec Name":"Recovery Effect","pha Name":"Pharmacology Effect","mcr Name":"MP Cost Rate","tcr Name":"TP Charge Rate","pdr Name":"Physical Damage Rate","mdr Name":"Magical Damage Rate","fdr Name":"Floor Damage Rate","exr Name":"Experience Rate"}},
{"name":"YEP_X_MoreStatusPages","status":true,"description":"v1.02 (Requires YEP_StatusMenuCore.js) Add more pages to\nyour status menu however you want!","parameters":{}},
{"name":"YEP_X_ProfileStatusPage","status":true,"description":"v1.03 (Requires YEP_StatusMenuCore.js) Places a Profile\nStatus Page in the status menu for your actors.","parameters":{"Command Name":"Profile","Default Profile":"true","Image Align":"right"}},
{"name":"--------------------","status":false,"description":"------------------------------------------------------------","parameters":{}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Font Size":"28","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Show Skills Learned":"false","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_AftermathLevelUp","status":true,"description":"v1.01 (Requires YEP_VictoryAftermath.js) Adds a level up\nportion to the Victory Aftermath sequences.","parameters":{"---General---":"","Level Up Title":"%1 has reached Level %2!","Enable Aftermath":"true","Font Size":"28","---Skill Learn---":"","Skill Text Singular":"Acquired Skill","Skill Text Plural":"Acquired Skills","Skill List Width":"200"}},
{"name":"YEP_AutoPassiveStates","status":true,"description":"v1.17 This plugin allows for some states to function as\npassives for actors, enemies, skills, and equips.","parameters":{"---Basic---":"","Actor Passives":"0","Enemy Passives":"0","Global Passives":"0","---List---":"...Requires RPG Maker MV 1.5.0+...","Actor Passives List":"[]","Enemy Passives List":"[]","Global Passives List":"[]"}},
{"name":"YEP_WeatherInBattle","status":true,"description":"v1.00 Allows you to have weather in battle. Weather also becomes\ncontrollable through action sequences.","parameters":{}},
{"name":"YEP_EventMiniLabel","status":true,"description":"v1.12 Creates miniature-sized labels over events to allow\nyou to insert whatever text you'd like in them.","parameters":{"Default Show":"true","Minimum Width":"136","Font Size":"20","X Buffer":"0","Y Buffer":"36","Battle Transition":"false"}},
{"name":"YEP_GabWindow","status":true,"description":"v1.06 The Gab Window functions as a window for random\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"GameFont","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"108","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"YEP_TestPlayAssist","status":true,"description":"v1.00 Test playing can become a chore. This plugin offers new\nfeatures that would help make your test playing more flexible and efficient.","parameters":{"AutoStart":"false","OnSwitches":"[]","CommonEvent":"0","StartCode":"\"// Get 10x of each regular item. Exclude key/hidden items.\\nfor (var i = 1; i < $dataItems.length; ++i) {\\n  var item = $dataItems[i];\\n  if (!item) continue;\\n  if (item.itypeId !== 1) continue;\\n  if (item.name.trim().length <= 0) continue;\\n  $gameParty.gainItem(item, 10);\\n}\"","AutoFPS":"false","AutoFullScr":"false"}},
{"name":"--------------------","status":true,"description":"------------------------------------------------------------","parameters":{}},
{"name":"animatedbusts","status":true,"description":"Allows animating pictures","parameters":{}},
{"name":"HIME_GameOverEvents","status":true,"description":"v1.2 - Allows you to use events to set up a game over event.","parameters":{"Gameover Map ID":"017"}}
];
