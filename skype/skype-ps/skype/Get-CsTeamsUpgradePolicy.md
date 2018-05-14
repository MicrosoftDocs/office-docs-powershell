---
external help file: 
applicable: Skype for Business Online, Skype for Business Server 2019
title: Get-CsTeamsUpgradePolicy
schema: 2.0.0
---

# Get-CsTeamsUpgradePolicy

## SYNOPSIS
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. This cmdlet returns the set of instances of this policy. As an organization with Skype for Business starts to adopt Teams, administrators can manage client behavior for their end user using the concept of "mode", which defines where routing behavior (e.g in which client do chats and calls land). In the future, mode will also be used to define client behavior in Teams client in terms of what functionality will be available.  TeamsUpradePolicy can be granted either on a per user basis or on a tenant-wide basis.  In addition, prior to upgrading to TeamsOnly mode administrators can use TeamsUpgradePolicy to trigger notifications in the Skype for Business client to inform users of the pending upgrade.

IMPORTANT:  TeamsUpgradePolicy will replace TeamsInteropPolicy. Components that previously honored TeamsInteropPolicy are being updated to honor TeamsUpgradePolicy instead. During the transition, use of these 2 policies must be coordinated during the transition. After transition is complete, TeamsInteorpPolicy will be removed.


Get-CsTeamsUpgradePolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-LocalStore\] \[\<CommonParameters\>\]

Get-CsTeamsUpgradePolicy \[-Tenant \<guid\>\] \[-Filter \<string\>\] \[-LocalStore\] \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsTeamsUpgradePolicy [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>] [-AsJob]
```

## DESCRIPTION
NOTE: These cmdlets are in limited beta and not available to everyone.
{{Fill in the Description}}

## EXAMPLES

### Example 1
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

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

### -Identity
{{Fill Identity Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
{{Fill LocalStore Description}}

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
