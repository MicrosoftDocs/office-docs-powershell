---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015
title: Get-CsTeamsUpgradePolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: rogupta
---

# Get-CsTeamsUpgradePolicy

## SYNOPSIS
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams.


## SYNTAX

### Identity (Default)
```
Get-CsTeamsUpgradePolicy [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsUpgradePolicy [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
TeamsUpgradePolicy allows administrators to manage the transition from Skype for Business to Teams. This cmdlet returns the set of instances of this policy. As an organization with Skype for Business starts to adopt Teams, administrators can manage the user experience in their organization using the concept of coexistence "mode". Mode defines in which client incoming chats and calls land as well as in what service (Teams or Skype for Business) new meetings are scheduled in. Mode also governs whether chat, calling, and meeting scheduling functionality are available in the Teams client. Finally, prior to upgrading to TeamsOnly mode administrators can use TeamsUpgradePolicy to trigger notifications in the Skype for Business client to inform users of the pending upgrade. 

NOTES: 
  - Except for on-premise versions of Skype for Business Server, all relevant instances of TeamsUpgradePolicy are built into the system, so there is no corresponding New cmdlet. 
  - If you are using Skype for Business Server, there are no built-in instances and you'll need to create one. Also, only the NotifySfBUsers property is available. Mode is not present.
  - Using TeamsUpgradePolicy in an on-premises environmention requires Skype for Business Server 2015 with CU8 or later.

You can also find more guidance here: [Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/microsoftteams/migration-interop-guidance-for-teams-with-skype).

## EXAMPLES

### Example 1: List all instances of TeamsUpgradePolicy (Skype for Business Online)
```
PS C:\> Get-CsTeamsUpgradePolicy

Identity       : Global
Description    : Users can use either Skype for Business client or Teams client
Mode           : Islands
NotifySfbUsers : False

Identity       : Tag:UpgradeToTeams
Description    : Use Teams Only
Mode           : TeamsOnly
NotifySfbUsers : False

Identity       : Tag:Islands
Description    : Use either Skype for Business client or Teams client
Mode           : Islands
NotifySfbUsers : False
Action         : None

Identity       : Tag:IslandsWithNotify
Description    : Use either Skype for Business client or Teams client
Mode           : Islands
NotifySfbUsers : True

Identity       : Tag:SfBOnly
Description    : Use only Skype for Business
Mode           : SfBOnly
NotifySfbUsers : False

Identity       : Tag:SfBOnlyWithNotify
Description    : Use only Skype for Business
Mode           : SfBOnly
NotifySfbUsers : True

Identity       : Tag:SfBWithTeamsCollab
Description    : Use Skype for Business and use Teams only for group collaboration
Mode           : SfBWithTeamsCollab
NotifySfbUsers : False

Identity       : Tag:SfBWithTeamsCollabWithNotify
Description    : Use Skype for Business and use Teams only for group collaboration
Mode           : SfBWithTeamsCollab
NotifySfbUsers : True

Identity       : Tag:SfBWithTeamsCollabAndMeetings
Description    : Use Skype for Business and use Teams only for group collaboration
Mode           : SfBWithTeamsCollabAndMeetings
NotifySfbUsers : False

Identity       : Tag:SfBWithTeamsCollabAndMeetingsWithNotify
Description    : Use Skype for Business and use Teams only for group collaboration
Mode           : SfBWithTeamsCollabAndMeetings
NotifySfbUsers : True
```

List all instances of TeamsUpgradePolicy


### Example 2: List the global instance of TeamsUpgradePolicy (which applies to all users in a tenant unless they are explicitly assigned an instance of this policy)
```
PS C:\> Get-CsTeamsUpgradePolicy -Identity Global

Identity       : Global
Description    : Users can use either Skype for Business client or Teams client
Mode           : Islands
NotifySfbUsers : False

```

List the global instance of TeamsUpgradePolicy

### Example 3: List all instances of TeamsUpgradePolicy in an on-premises environment
```
PS C:\> Get-CsTeamsUpgradePolicy -Identity Global

Identity       : Global
Description    : Notifications are disabled
NotifySfbUsers : False

```

List all on-premises instances (if any) of TeamsUpgradePolicy.

## PARAMETERS

### -Identity
If identity parameter is passed, this will return a specific instance. If no identity parameter is specified, the cmdlet returns all instances.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -Filter
{{Fill Filter Description}}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

