---
external help file: 
applicable: Skype for Business Online, Skype for Business Server 2019
title: Grant-CsTeamsUpgradePolicy
schema: 2.0.0
---

# Grant-CsTeamsUpgradePolicy

## SYNOPSIS
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. IMPORTANT:  TeamsUpgradePolicy will replace TeamsInteropPolicy.  Aspects of TeamsUpgradePolicy are still in preview mode as described below.


## SYNTAX

```
Grant-CsTeamsUpgradePolicy [[-Identity] <UserIdParameter>] [-PolicyName] <string> [-Tenant <guid>] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams.  As an organization with Skype for Business starts to adopt Teams, administrators can manage client behavior for their end user using the concept of coexistence "mode", which defines in which client chats and calls land. In the future, mode will also be used to define Teams client behavior in terms of what functionality will be available.  In addition, prior to upgrading to TeamsOnly mode administrators can use TeamsUpgradePolicy to trigger notifications in the Skype for Business client to inform users of the pending upgrade. 

This cmdlet enables admins to apply TeamsUpgradePolicy to either individual users or to set the default for the entire organization. TeamsUpgradePolicy can be granted either on a per user basis or on a tenant-wide basis.  


IMPORTANT:  TeamsUpgradePolicy will replace TeamsInteropPolicy. Components that previously honored TeamsInteropPolicy are being updated to honor TeamsUpgradePolicy instead. During the transition, use of these 2 policies must be coordinated during the transition. After transition is complete, TeamsInteropPolicy will be removed.

|||||

Office 365 provides all relevant instances of TeamsUpgradePolicy via built-in, read-only policies. The built-in instances are listed below.
</br>
</br>
|Identity|Mode|NotifySfbUsers|Action|Comments|
|---|---|---|---|---|
|Islands|Islands|False|None||
|IslandsWithNotify|Islands|True|Notify||
|SfBOnly|SfBOnly|False|None|For now, this mode is effectively the same as setting preferred client=SfB. We expect in the future this will restrict Teams functionality.|
|SfBOnlyWithNotify|SfBOnly|True|Notify|For now, this mode is effectively the same as setting preferred client=SfB. We expect in the future this will restrict Teams functionality.|
|SfBWithTeamsCollab|SfBWithTeamsCollab|False|None|This mode exists at the PowerShell layer but is not yet exposed in the admin user experience. From a routing perspective, this is the same as SfBOnly mode. When TeamsAppPolicy is available, this will only allow Channels in Teams app.|
|SfBWithTeamsCollabWithNotify|SfBWithTeamsCollab|True|Notify|This mode exists at the PowerShell layer but is not yet exposed in the admin user experience. From a routing perspective, this is the same as SfBOnly mode. When TeamsAppPolicy is available, this will only allow Channels in Teams app.|
|UpgradeToTeams|TeamsOnly|False|Upgrade|Use this mode to upgrade users to Teams and to prevent chat, calling, and meeting scheduling in Skype for Business.|
|Global|Legacy|False|None|The mode will eventually be updated to Islands.|
|NoUpgrade|Legacy|False|None|This instance will eventually be retired.|
|NotifyForTeams|Legacy|True|Notify|This instance will eventually be retired.|
||||||



NOTES: 
- TeamsUpgradePolicy is available in both Office 365 and in on-premises versions of Skype for Business Server, but there are differences: 
    - In Office 365, admins can specify both coexistence mode and whether to trigger notifications of pending upgrade.  
    - In on-premises with Skype for Business Server, the only availble option is to trigger notifications. 
- TeamsUpgradePolicy in Office 365 can be granted to users homed on-premises in hybrid deployments of Skype for Business as follows:
    - Coexistence mode is honored by users homed on-premises, however on-premises users cannot be granted the UpgradeToTeams instance (mode=TeamsOnly) of TeamsUpgradePolicy.  Users must be either homed in Skype for Business Online or have no Skype account anywhere to be upgraded to TeamsOnly mode.    
    - The NotifySfBUsers setting of Office 365 TeamsUpgradePolicy is not honored by users homed on-premises. Instead, the on-premise version of TeamsUpgradePolicy must be used. 
- In Office 365, all relevant instances of TeamsUpgradePolicy are built into the system, so there is no corresponding New cmdlet avaiable. In contrast, Skype for Business Server does not contain built-in instances, so the New cmdlet is available on-premises.  Only NotifySfBUsers property is available in on-premises.
- Instances with mode set to SfBWithTeamsCollab are not yet functional. From a routing perspective, this will behave like SfBOnly mode.
- The Action property is redundnant with the combination of NotifySfBUsers and Mode. It will eventually be removed. 


## EXAMPLES

### Example 1: Grant Policy to an individual user
```
PS C:\> Grant-CsTeamsUpgradePolicy -PolicyName UpgradeToTeams -Identity mike@contoso.com
```

The above cmdlet assigns the "UpgradeToTeams" policy to user Mike@contoso.com.  This effectively upgrades the user to Teams only mode. This command will only succeed if the user does not have on-premises Skype for Business account. 

### Example 2: Grant Policy to the entire tenant 
```
PS C:\> Grant-CsTeamsUpgradePolicy -PolicyName SfBOnly 
```

To grant a policy to all users in the org (except any that have an explicit policy assinged), omit the identity parameter.

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
