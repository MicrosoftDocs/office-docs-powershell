---
external help file: 
applicable: Skype for Business Online
title: Get-CsTeamsUpgradePolicy
schema: 2.0.0
---

# Get-CsTeamsUpgradePolicy

## SYNOPSIS
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. IMPORTANT:  TeamsUpgradePolicy will replace TeamsInteropPolicy.


Get-CsTeamsUpgradePolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[\<CommonParameters\>\]

Get-CsTeamsUpgradePolicy \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsTeamsUpgradePolicy [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. This cmdlet returns the set of instances of this policy. As an organization with Skype for Business starts to adopt Teams, administrators can manage client behavior for their end user using the concept of "mode", which defines where routing behavior (e.g in which client do chats and calls land). In the future, mode will also be used to define client behavior in Teams client in terms of what functionality will be available.  TeamsUpradePolicy can be granted either on a per user basis or on a tenant-wide basis.  In addition, prior to upgrading to TeamsOnly mode administrators can use TeamsUpgradePolicy to trigger notifications in the Skype for Business client to inform users of the pending upgrade.

IMPORTANT:  TeamsUpgradePolicy will replace TeamsInteropPolicy. Components that previously honored TeamsInteropPolicy are being updated to honor TeamsUpgradePolicy instead. During the transition, use of these 2 policies must be coordinated during the transition. After transition is complete, TeamsInteorpPolicy will be removed.


## EXAMPLES

### Example 1: List all instances of TeamsUpgradePolicy
```
PS C:\> Get-CsTeamsUpgradePolicy

Identity       : Global
Description    : Users can use either Skype for Business client or Teams client
Mode           : Legacy
NotifySfbUsers : False
Action         : None

Identity       : Tag:NoUpgrade
Description    : Users can use either Skype for Business client or Teams client
Mode           : Legacy
NotifySfbUsers : False
Action         : None

Identity       : Tag:NotifyForTeams
Description    : Show notification of pending upgrade in Skype for Business client
Mode           : Legacy
NotifySfbUsers : True
Action         : Notify

Identity       : Tag:UpgradeToTeams
Description    : Use Teams Only
Mode           : TeamsOnly
NotifySfbUsers : False
Action         : Upgrade

Identity       : Tag:Islands
Description    : Use either Skype for Business client or Teams client
Mode           : Islands
NotifySfbUsers : False
Action         : None

Identity       : Tag:IslandsWithNotify
Description    : Use either Skype for Business client or Teams client
Mode           : Islands
NotifySfbUsers : True
Action         : Notify

Identity       : Tag:SfBOnly
Description    : Use only Skype for Business
Mode           : SfBOnly
NotifySfbUsers : False
Action         : None

Identity       : Tag:SfBOnlyWithNotify
Description    : Use only Skype for Business
Mode           : SfBOnly
NotifySfbUsers : True
Action         : Notify

Identity       : Tag:SfBWithTeamsCollab
Description    : Use Skype for Business and use Teams only for group collaboration
Mode           : SfBWithTeamsCollab
NotifySfbUsers : False
Action         : None

Identity       : Tag:SfBWithTeamsCollabWithNotify
Description    : Use Skype for Business and use Teams only for group collaboration
Mode           : SfBWithTeamsCollab
NotifySfbUsers : True
Action         : Notify

```

List all instances of TeamsUpgradePolicy


### Example 2: List the global instance of TeamsUpgradePolicy
```
PS C:\> Get-CsTeamsUpgradePolicy -Identity Global

Identity       : Global
Description    : Users can use either Skype for Business client or Teams client
Mode           : Legacy
NotifySfbUsers : False
Action         : None

```

List the global instance of TeamsUpgradePolicy

## PARAMETERS



### -Identity
If identity parameter is passed, this will return a specific instance. If no identity parameter is specified, the cmdlet returns all instances.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -Filter
{{Fill Filter Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Do Not Use

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS


[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)
