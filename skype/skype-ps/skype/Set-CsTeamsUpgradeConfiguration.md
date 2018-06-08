---
external help file: 
applicable: Skype for Business Online, Skype for Business Server 2019
title: Set-CsTeamsUpgradeConfiguration
schema: 2.0.0
---

# Set-CsTeamsUpgradeConfiguration

## SYNOPSIS
Administrators can use Set-CsTeamsUpgradeConfiguration to manage certain aspects of client behavior for users being upgraded from Skype for Business to Teams. TeamsUpgradeConfiguration should be used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automatically download Teams. It allows administrators to determine which application end users should use to join Skype for Business meetings.

## SYNTAX

```
Set-CsTeamsUpgradeConfiguration [-WhatIf] [-SfBMeetingJoinUx <Object>] [-Confirm] [-DownloadTeams <Object>]
 [[-Identity] <Object>] [-Tenant <Object>] [-Force] [-Instance <Object>] [-AsJob]
```

```
Set-CsTeamsUpgradeConfiguration [-Tenant <guid>] [-DownloadTeams <bool>] [-SfBMeetingJoinUx <string>] [-Instance <psobject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

```
Set-CsTeamsUpgradeConfiguration [[-Identity] <XdsIdentity>] [-Tenant <guid>] [-DownloadTeams <bool>] [-SfBMeetingJoinUx <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
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

### -DownloadTeams
The DownloadTeams property allows admins to control whether the Skype for Business client should automatically download Teams in the background. This Boolean setting is only honored on Windows clients, and only for certain values of the user's TeamsUpgradePolicy. If NotifySfbUser=true or if Mode=TeamsOnly in TeamsUpgradePolicy, this setting is honored. Otherwise it is ignored. 

```yaml
Type: Bool
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```
### -SfBMeetingJoinUx
The SfBMeetingJoinUx property allows admins to specify which app is used to join Skype for Business meetings, even after the user has been upgraded to Teams. Allowed values are: "SkypeMeetingsApp" and "NativeLimitedClient".   "NativeLimitedClient"  means the existing Skype for Business rich client will be used, but since the user is upgraded, only meeting functionality is available. Calling and Messaging are done via Teams.  "SkypeMeetingsApp" means use the web-downloadable app. This setting can be useful for organizations that have upgraded to Teams and no longer want to install Skype for Business on their users' computers.

```yaml
Type: string
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online, Skype for Business Server 2019

Required: False
Position: Named
Default value: NativeLimitedClient
Accept pipeline input: False
Accept wildcard characters: False
```
### -Force
{{Fill Force Description}}

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

### -Identity
{{Fill Identity Description}}

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

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES
These settings are only honored by newer versions of Skype for Business clients.

## RELATED LINKS

[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Get-CsTeamsUpgradePolicy](Get-CsTeamsUpgradePolicy.md)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)
