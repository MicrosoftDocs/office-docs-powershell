---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsupgradeconfiguration
schema: 2.0.0
title: Set-CsTeamsUpgradeConfiguration
---

# Set-CsTeamsUpgradeConfiguration

## SYNOPSIS
Manage certain aspects of client behavior for users being upgraded from Skype for Business to Teams.

## SYNTAX

### Identity (Default)
```powershell
Set-CsTeamsUpgradeConfiguration [-Tenant <Guid>] [-DownloadTeams <Boolean>] [-SfBMeetingJoinUx <String>] [-BlockLegacyAuthorization <Boolean>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```powershell
Set-CsTeamsUpgradeConfiguration [-Tenant <Guid>] [-DownloadTeams <Boolean>] [-SfBMeetingJoinUx <String>] [-BlockLegacyAuthorization <Boolean>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsUpgradeConfiguration is used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automatically download Teams. It allows administrators to determine which application end users should use to join Skype for Business meetings.

The DownloadTeams property allows admins to control whether the Skype for Business client should automatically download Teams in the background. This setting is only honored on Windows clients, and only for certain values of the user's TeamsUpgradePolicy. If NotifySfbUser=true or if Mode=TeamsOnly in TeamsUpgradePolicy, this setting is honored. Otherwise it is ignored.

The SfBMeetingJoinUx property allows admins to specify which app is used to join Skype for Business meetings, even after the user has been upgraded to Teams. Allowed values are: SkypeMeetingsApp and NativeLimitedClient.   "NativeLimitedClient"  means the existing Skype for Business rich client will be used, but since the user is upgraded, only meeting functionality is available. Calling and Messaging are done via Teams.  "SkypeMeetingsApp" means use the web-downloadable app. This setting can be useful for organizations that have upgraded to Teams and no longer want to install Skype for Business on their users' computers.

## EXAMPLES

### Example 1
```
PS C:\> Set-CsTeamsUpgradeConfiguration -DownloadTeams $true -SfBMeetingJoinUx SkypeMeetingsApp
```

The above cmdlet specifies that users subject to upgrade should download Teams in the background, and that they should use the Skype For Business Meetings app to join Skype for Business meetings.

## PARAMETERS

### -BlockLegacyAuthorization
This setting will force Teams clients to enforce session revocation for core Messaging and Calling/Meeting scenarios.
If turned ON, session revocation will be enforced for calls, chats and meetings for opted-in users.
If turned OFF, session revocation will not  be enforced for calls, chats and meetings for opted-in users

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DownloadTeams
The DownloadTeams property allows admins to control whether the Skype for Business client should automatically download Teams in the background. This Boolean setting is only honored on Windows clients, and only for certain values of the user's TeamsUpgradePolicy. If NotifySfbUser=true or if Mode=TeamsOnly in TeamsUpgradePolicy, this setting is honored. Otherwise it is ignored.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```
### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
For internal use only.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SfBMeetingJoinUx
The SfBMeetingJoinUx property allows admins to specify which app is used to join Skype for Business meetings, even after the user has been upgraded to Teams. Allowed values are: "SkypeMeetingsApp" and "NativeLimitedClient".   "NativeLimitedClient"  means the existing Skype for Business rich client will be used, but since the user is upgraded, only meeting functionality is available. Calling and Messaging are done via Teams.  "SkypeMeetingsApp" means use the web-downloadable app. This setting can be useful for organizations that have upgraded to Teams and no longer want to install Skype for Business on their users' computers.

```yaml
Type: string
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: NativeLimitedClient
Accept pipeline input: False
Accept wildcard characters: False
```
### -Tenant
For internal use only.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES
These settings are only honored by newer versions of Skype for Business clients.

## RELATED LINKS

[Get-CsTeamsUpgradeConfiguration](https://learn.microsoft.com/powershell/module/teams/get-csteamsupgradeconfiguration)

[Get-CsTeamsUpgradePolicy](https://learn.microsoft.com/powershell/module/teams/get-csteamsupgradepolicy)

[Grant-CsTeamsUpgradePolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsupgradepolicy)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://learn.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)
