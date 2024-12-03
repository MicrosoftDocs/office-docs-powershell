---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/skype/get-csteamsupgradeconfiguration
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsTeamsUpgradeConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: rogupta
---

# Get-CsTeamsUpgradeConfiguration

## SYNOPSIS
Returns information related to managing the upgrade to Teams from Skype for Business. TeamsUpgradeConfiguration should be used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automatically download Teams. For Office 365 users, it allows administrators to determine which application end users should use to join Skype for Business meetings.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsUpgradeConfiguration [-Tenant <Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsUpgradeConfiguration [-Tenant <Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
TeamsUpgradeConfiguration is used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automatically download the Teams app. It also allows administrators to determine which application Office 365 users should use to join Skype for Business meetings.

Separate instances of TeamsUpgradeConfiguration exist in Office 365 and Skype for Business Server. 
 - TeamsUpgradeConfiguration in Office 365 applies to any user who does not have an on-premises Skype for Business account.
 - TeamsUpgradeConfiguration in Skype for Business Server can used to manage on-premises users in a hybrid environment. In on-premises, only the DownloadTeams property is available.

The DownloadTeams property allows admins to control whether the Skype for Business client should automatically download the Teams app in the background. This setting is only honored for users on Windows clients, and only if TeamsUpgradePolicy for the user meets either of these conditions: 
 - NotifySfbUser=true, or 
 - Mode=TeamsOnly
 Otherwise, this setting is ignored. 

The SfBMeetingJoinUx property allows admins to specify which app is used to join Skype for Business meetings, even after the user has been upgraded to Teams. Allowed values are: SkypeMeetingsApp and NativeLimitedClient.   "NativeLimitedClient"  means the existing Skype for Business rich client will be used, but since the user is upgraded, only meeting functionality is available. Calling and Messaging are done via Teams.  "SkypeMeetingsApp" means use the web-downloadable app. This setting can be useful for organizations that have upgraded to Teams and no longer want to install Skype for Business on their users' computers. This property is only available when configuring TeamsUpgradeConfiguration in Office 365. It is not honored for users homed on-premises in Skype for Business Server.


## EXAMPLES

### Example 1
```
PS C:\> Get-CsTeamsUpgradeConfiguration
```

The above cmdlet lists the properties of TeamsUpgradeConfiguration.

## PARAMETERS


### -Identity
{{Fill Identity Description}}

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Do not use

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
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

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
These settings are only honored by newer versions of Skype for Business clients.

## RELATED LINKS

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)

[Get-CsTeamsUpgradePolicy](Get-CsTeamsUpgradePolicy.md)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://learn.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)
