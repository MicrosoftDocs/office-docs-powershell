---
external help file: 
applicable: Skype for Business Online
title: Get-CsTeamsUpgradeConfiguration
schema: 2.0.0
---

# Get-CsTeamsUpgradeConfiguration

## SYNOPSIS
Returns information related to managing upgrade to Teams from Skype for Business. TeamsUpgradeConfiguration should be used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automically download Teams. It allows administrators to determine which application end users should use to join Skype for Business meetings.


Get-CsTeamsUpgradeConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[\<CommonParameters\>\]

Get-CsTeamsUpgradeConfiguration \[-Tenant \<guid\>\] \[-Filter \<string\>\]  \[\<CommonParameters\>\]

## SYNTAX

```
Get-CsTeamsUpgradeConfiguration [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>]
 [-AsJob]
```

## DESCRIPTION
TeamsUpgradeConfiguration is used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automically download Teams. It allows administrators to determine which application end users should use to join Skype for Business meetings.

The DownloadTeams property allows admins to control whether the Skype for Business client shoudl automatically download Teams in the background. This setting is only honored on Windows clients, and only for certain values of the user's TeamsUpgradePolicy. If NotifySfbUser=true or if Mode=TeamsOnly in TeamsUpgradePolicy, this setting is honored. Otherwise it is ignored. 

The SfBMeetingJoinUx property allows admins to specify which app is used to join Skype for Business meetings, even after the user has been upgraded to Teams. ALlowed values are: SkypeMeetingsApp and NativeLimitedClient.   "NativeLimitedClient"  means the exisitng Skype for Business rich client will be used, but since the user is upgraded, only meeting functionality is availalbe. Calling and Messaging are done via Teams.  "SkypeMeetingsApp" means use the web-downloadable app. This setting can be useful for organizations that have upgraded to Teams and no longer want to install Skype for Business on their users' computers.


## EXAMPLES

### Example 1
```
PS C:\> Get-CsTeamsUpgradeConfiguration
```

The above cmdlet list sthe properties of TeamsUpgradeConfiguration

## PARAMETERS


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
Do not use

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

These settings are only honored by newer versions of Skype for Business clients.

## RELATED LINKS

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)

[Get-CsTeamsUpgradePolicy](Get-CsTeamsUpgradePolicy.md)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)
