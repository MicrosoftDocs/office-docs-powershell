---
external help file: 
applicable: Skype for Business Online, Skype for Business Server 2019
title: Grant-CsTeamsUpgradePolicy
schema: 2.0.0
---

# Grant-CsTeamsUpgradePolicy

## SYNOPSIS
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. IMPORTANT:  TeamsUpgradePolicy will replace TeamsInteropPolicy.  Aspects of TeamsUpgradePolicy are still in preview mode as described below.

Grant-CsTeamsUpgradePolicy \[\[-Identity\] \<UserIdParameter\>\] \[-PolicyName\] \<string\> \[-Tenant \<guid\>\] \[-DomainController \<Fqdn\>\] \[-PassThru\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Grant-CsTeamsUpgradePolicy  [[-PolicyName] <Object>] [[-Identity] <Object>]
 [-Tenant <Object>][-PassThru] [-Confirm] [-DomainController <Object>] [-WhatIf] [-AsJob]
```

## DESCRIPTION
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. This cmdlet returns the set of instances of this policy. As an organization with Skype for Business starts to adopt Teams, administrators can manage client behavior for their end user using the concept of "mode", which defines where routing behavior (e.g in which client do chats and calls land). In the future, mode will also be used to define client behavior in Teams client in terms of what functionality will be available.  TeamsUpradePolicy can be granted either on a per user basis or on a tenant-wide basis.  In addition, prior to upgrading to TeamsOnly mode administrators can use TeamsUpgradePolicy to trigger notifications in the Skype for Business client to inform users of the pending upgrade. 

IMPORTANT:  TeamsUpgradePolicy will replace TeamsInteropPolicy. Components that previously honored TeamsInteropPolicy are being updated to honor TeamsUpgradePolicy instead. During the transition, use of these 2 policies must be coordinated during the transition. After transition is complete, TeamsInteorpPolicy will be removed.


NOTES: 
   All relevant instances of TeamsUpgradePolicy are built into the system, so there is no corresponding New cmdlet.

   Instances with mode set to SfBWithTeamsCollab are not yet functional. From a routing perspective, this will behave like SfBOnly mode.
   When granting TeamsUpgradePolicy, you must also grant the corresponding instances of TeamsInteropPolicy as described later below.


## EXAMPLES

### Example 1: Grant Policy to an individual user
```
PS C:\> Grant-CsTeamsUpgradePolicy -PolicyName UpgradeToTeams -Identity mike@contoso.com
```

The above cmdlet assigns the "UpgradeToTeams" policy to user Mike@contoso.com.  This effectively upgrades the user to Teams only mode.

### Example 2: Grant Policy to the entire tenant 
```
PS C:\> Grant-CsTeamsUpgradePolicy -PolicyName SfBOnly 
```

To grant a policy to all users in the org (except any that have an explicit policy assinged), omit the idenity parameter. 

## PARAMETERS


### -Identity
{{Fill Identity Description}}

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
{{Fill PolicyName Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
{{Fill DomainController Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
{{Fill PassThru Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

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
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online, Skype for Business Server 2019

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
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

When you grant TeamsUpgradePolicy to a user, you must also grant the corresponding instance of TeamsInteropPolicy to the user as shown below. Until TeamsInteropPolicy is retired, you must coordinate granting of both TeamsUpgradePolicy and TeamsInteropPolicy:


| If you grant an instance of TeamsUpgradePolicy with this value of Mode…| …Then grant this instance of TeamsInteropPolicy |
| :------------- |:-------------|
| Islands | DisallowOverrideCallingDefaultChatDefault |
| SfBonly, SfBWithTeamsCollab | DisallowOverrideCallingSfbChatSfb |
| TeamsOnly | DisallowOverrideCallingTeamsChatTeams |




	
 	



## RELATED LINKS

[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)

[Get-CsTeamsUpgradePolicy](Get-CsTeamsUpgradePolicy.md)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)
