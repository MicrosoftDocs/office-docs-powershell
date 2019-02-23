---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015
title: Grant-CsTeamsUpgradePolicy
schema: 2.0.0
author: kenwith
ms.author: kenwith
ms.reviewer:
---

# Grant-CsTeamsUpgradePolicy

## SYNOPSIS
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. IMPORTANT:  TeamsUpgradePolicy has replaced TeamsInteropPolicy.  However, aspects of TeamsUpgradePolicy are still in preview mode as described below.


## SYNTAX

```
Grant-CsTeamsUpgradePolicy [-Identity] <UserIdParameter>] [-PolicyName] <string> [-Tenant <guid>] [-Global] [-MigrateMeetingsToTeams] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. As an organization with Skype for Business starts to adopt Teams, administrators can manage the user experience in their organization using the concept of coexistence "mode".  Mode defines in which client incoming chats and calls land as well as in what service (Teams or Skype for Business) new meetings are scheduled in. In the future, mode will also be used to define Teams client behavior in terms of what functionality will be available.  Finally, prior to upgrading to TeamsOnly mode administrators can use TeamsUpgradePolicy to trigger notifications in the Skype for Business client to inform users of the pending upgrade. 

This cmdlet enables admins to apply TeamsUpgradePolicy to either individual users or to set the default for the entire organization. 

**IMPORTANT:**  TeamsUpgradePolicy has replaced TeamsInteropPolicy, which is no longer honored. Components that previously honored TeamsInteropPolicy have been fully updated to honor TeamsUpgradePolicy instead. Both TeamsInteropPolicy and Legacy mode have been retired. 




Office 365 provides all relevant instances of TeamsUpgradePolicy via built-in, read-only policies. The built-in instances are listed below.
</br>
</br>
|Identity|Mode|NotifySfbUsers|Comments|
|---|---|---|---|
|Islands|Islands|False||
|IslandsWithNotify|Islands|True||
|SfBOnly|SfBOnly|False|For now, this mode is effectively the same as setting preferred client=SfB. We expect in the future this will restrict Teams functionality.|
|SfBOnlyWithNotify|SfBOnly|True|For now, this mode is effectively the same as setting preferred client=SfB. We expect in the future this will restrict Teams functionality.|
|SfBWithTeamsCollab|SfBWithTeamsCollab|False|This mode exists at the PowerShell layer but is not yet exposed in the admin user experience. From a routing perspective, this is the same as SfBOnly mode. In the future, this will only allow Channels in Teams app.|
|SfBWithTeamsCollabWithNotify|SfBWithTeamsCollab|True|This mode exists at the PowerShell layer but is not yet exposed in the admin user experience. From a routing perspective, this is the same as SfBOnly mode. In the future, this will only allow Channels in Teams app.|
|SfBWithTeamsCollabAndMeetings|SfBWithTeamsCollabAndMeetings|False|This mode exists at the PowerShell layer but is not yet exposed in the admin user experience. From a routing perspective, this is the same as SfBOnly mode. In the future, this will  allow Channels and meeting scheduling in the Teams app.|
|SfBWithTeamsCollabAndMeetingsWithNotify|SfBWithTeamsCollabAndMeetings|True|This mode exists at the PowerShell layer but is not yet exposed in the admin user experience. From a routing perspective, this is the same as SfBOnly mode. In the future, this will allow Channels and meeting scheduling in the Teams app.|
|UpgradeToTeams|TeamsOnly|False|Use this mode to upgrade users to Teams and to prevent chat, calling, and meeting scheduling in Skype for Business.|
|Global|Islands|False||
|||||


**NOTES:** 
- TeamsUpgradePolicy is available in both Office 365 and in on-premises versions of Skype for Business Server, but there are differences: 
    - In Office 365, admins can specify both coexistence mode and whether to trigger notifications of pending upgrade.  
    - In on-premises with Skype for Business Server, the only available option is to trigger notifications. Skype for Business Server 2015 with CU8 or Skype for Business Server 2019 are required.
- TeamsUpgradePolicy in Office 365 can be granted to users homed on-premises in hybrid deployments of Skype for Business as follows:
    - Coexistence mode is honored by users homed on-premises, however on-premises users cannot be granted the UpgradeToTeams instance (mode=TeamsOnly) of TeamsUpgradePolicy.  To be upgraded to TeamsOnly mode, users must be either homed in Skype for Business Online or have no Skype account anywhere.    
    - The NotifySfBUsers setting of Office 365 TeamsUpgradePolicy is not honored by users homed on-premises. Instead, the on-premises version of TeamsUpgradePolicy must be used. 
- In Office 365, all relevant instances of TeamsUpgradePolicy are built into the system, so there is no corresponding New cmdlet available. In contrast, Skype for Business Server does not contain built-in instances, so the New cmdlet is available on-premises.  Only NotifySfBUsers property is available in on-premises.
- Instances with mode set to SfBWithTeamsCollab and SfBWithTeamsCollabAndMeetings are not yet fully functional in terms of changing Teams client UX. From a routing perspective, this will behave like SfBOnly mode.
- When granting a user a policy with mode=TeamsOnly or mode=SfBWithTeamsCollabAndMeetings, by default, meetings organized by that user will be migrated to Teams. However, this functionality is currently limited to customers in the Technology Adoption Program (TAP). For details, see [Using the Meeting Migration Service (MMS)](https://docs.microsoft.com/en-us/skypeforbusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms).

**IMPORTANT**
When users are in any of the Skype for Business modes (SfBOnly, SfBWithTeamsCollab, SfBWithTeamsCollabAndMeetings), calling and chat functionality in the Teams app is intended to be disabled, but currently it is not yet disabled. Similarly, when users are in the SfBOnly or SfBWithTeamsCollab modes, meeting scheduling in Teams is intended to be disabled, but it currently is not. A solution to automatically provide this experience is planned.

Until this solution is delivered, administrators can enforce the intended client experience of the TeamsUpgradeMode policy by manually configuring the values of TeamsMessagingPolicy, TeamsCallingPolicy, and TeamsMeetingPolicy. Furthmore, when using Grant-CsTeamsUpgradePolicy in PowerShell, the cmdlet will automatically check the configuration of the corresponding settings in TeamsMessagingPolicy, TeamsCallingPolicy, and TeamsMeetingPolicy to determmine if these settings are compatible with the specified mode. If any are not configured properly, the grant will succeed but a warning will be provided indicating which settings are not configured properly. The administrator should subsequently update the indicated policies to deliver a compatible end user experience in Teams.  If the administrator decides to take no action as a result of the warning, users may still have access to chat, calling, and/or meeting scheduling capabilities in Teams depending on the values of TeamsMessagingPolicy, TeamsCallingPolicy, and TeamsMeetingPolicy, which may  result in a confusing end user experience.  

For more details, see [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/migration-interop-guidance-for-teams-with-skype).



## EXAMPLES

### Example 1: Grant Policy to an individual user
```
PS C:\> Grant-CsTeamsUpgradePolicy -PolicyName UpgradeToTeams -Identity mike@contoso.com
```

The above cmdlet assigns the "UpgradeToTeams" policy to user Mike@contoso.com.  This effectively upgrades the user to Teams only mode. This command will only succeed if the user does not have an on-premises Skype for Business account. 

### Example 2: Remove Policy for an individual user
```
PS C:\> Grant-CsTeamsUpgradePolicy -PolicyName $null -Identity mike@contoso.com
```

The above cmdlet removes any policy changes made to user Mike@contoso.com and effectively Inherits the global tenant setting for teams Upgrade. 

### Example 3: Grant Policy to the entire tenant 
```
PS C:\> Grant-CsTeamsUpgradePolicy -PolicyName SfBOnly -Global
```

To grant a policy to all users in the org (except any that have an explicit policy assigned), omit the identity parameter. If you do not specify the -Global paramter, you will be prompted to confirm the operation.


### Example 4 Get a report on existing TeamsUpgradePolicy users (Screen Report)


You can get the output on the screen, on CSV or Html format. For Screen Report
```
Get-CSOnlineUser | select UserPrincipalName, teamsupgrade*
```

### Example 5 Get a report on existing TeamsUpgradePolicy users (CSV Report)

```
$objUsers = Get-CSOnlineUser | select UserPrincipalName, teamsupgrade*
$objusers | ConvertTo-Csv -NoTypeInformation | Out-File "$env:USERPROFILE\desktop\TeamsUpgrade.csv"
```
This will create a CSV  file on the Desktop of the current user with the name "TeasUpgrade.csv"

### Example 6 Get a report on existing TeamsUpgradePolicy users (HTML Report)

```
$objUsers = Get-CSOnlineUser | select UserPrincipalName, teamsupgrade*
$objusers | ConvertTo-Html | Out-File "$env:USERPROFILE\desktop\TeamsUpgrade.html"

```
After running these lines will create an  HTML  file on the Desktop of the current user with the name "TeamUpgrade.html"

### Example 7 Get a report on existing TeamsUpgradePolicy users (CSV Report - Oneliner version)

```
Get-CSOnlineUser | select UserPrincipalName, teamsupgrade* | ConvertTo-Csv -NoTypeInformation | Out-File "$env:USERPROFILE\desktop\TeamsUpgrade.csv"
```
This will create a CSV  file on the Desktop of the current user with the name "TeasUpgrade.csv"

### Example 8 Get a report on existing TeamsUpgradePolicy users (HTML Report - Oneliner Version)

```
Get-CSOnlineUser | select UserPrincipalName, teamsupgrade* | ConvertTo-Html | Out-File "$env:USERPROFILE\desktop\TeamsUpgrade.html"

```
After running these lines will create an  HTML  file on the Desktop of the current user with the name "TeamUpgrade.html"



## PARAMETERS


### -Identity
The user you want to grant policy to. This can be specified as SIP address, UserPrincipalName, or ObjectId.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015

Required: False
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -PolicyName
The name of the policy instance.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Global
Use this switch if you want to grant the specified policy to be the default policy for all users in the tenant.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MigrateMeetingsToTeams
Specifies whether to move existing Skype for Business meetings organized by the user to Teams. This parameter can only be true if the mode of the specified policy instance is either TeamsOnly or SfBWithTeamsCollabAndMeetings, and if the policy instance is being granted to a specific user.  It not possible to trigger meeting migration when granting TeamsUpgradePolicy to the entire tenant. For more details, see [Using the meeting migration service](https://docs.microsoft.com/en-us/skypeforbusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms).

> [!NOTE]
>The ability to trigger meeting migration when granting TeamsUpgradePolicy  is currently available to TAP customers only. 


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

Required: False
Position: Named
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
Applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -Tenant
Do not use.

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




## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

Legacy mode in TeamsUpgradePolicy has been deprecated and it is no longer possible to grant legacy mode. Both Legacy mode and TeamsInteropPolicy have been retired.




## RELATED LINKS

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

[Using the Meeting Migration Service (MMS)](https://docs.microsoft.com/en-us/skypeforbusiness/audio-conferencing-in-office-365/setting-up-the-meeting-migration-service-mms)

[Coexistence with Skype for Business](https://docs.microsoft.com/en-us/microsoftteams/coexistence-chat-calls-presence)

[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)

[Get-CsTeamsUpgradePolicy](Get-CsTeamsUpgradePolicy.md)
