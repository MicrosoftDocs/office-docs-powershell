---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online, Skype for Business Server 2019
title: Set-CsTeamsUpgradeConfiguration
schema: 2.0.0
---

# Set-CsTeamsUpgradeConfiguration

## SYNOPSIS
Administrators can use Set-CsTeamsUpgradeConfiguration to manage certain aspects of client behavior for users being upgraded from Skype for Business to Teams. TeamsUpgradeConfiguration should be used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automatically download Teams. For Office 365 users, it allows administrators to determine which application end users should use to join Skype for Business meetings.

## SYNTAX

```
Set-CsTeamsUpgradeConfiguration [[-Identity] <XdsIdentity>] [-Tenant <guid>] [-DownloadTeams <bool>] [-SfBMeetingJoinUx <string>]  [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsUpgradeConfiguration is used in conjunction with TeamsUpgradePolicy. The settings in TeamsUpgradeConfiguration allow administrators to configure whether users subject to upgrade and who are running on Windows clients should automatically download Teams. It allows administrators to determine which application Office 365 users should use to join Skype for Business meetings.

Separate instances of TeamsUpgradeConfiguration exist in Office 365 and Skype for Business Server.  
 - TeamsUpgradeConfiguration in Office 365 applies to any user who does not have an on-premises Skype for Business account. 
 - TeamsUpgradeConfiguration in Skype for Business Server can used to manage on-premises users in a hybrid environment. In on-premises, only the DownloadTeams property is available. 


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
The DownloadTeams property allows admins to control whether the Skype for Business client should automatically download the Teams app in the background. This Boolean setting is only honored for users on Windows clients, and only if TeamsUpgradePolicy for the user meets either of these conditions:  
 - NotifySfbUser=true, or  
 - Mode=TeamsOnly 
Otherwise, this setting is ignored.  

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
The SfBMeetingJoinUx property allows admins to specify which app is used to join Skype for Business meetings, even after the user has been upgraded to Teams. Allowed values are: "SkypeMeetingsApp" and "NativeLimitedClient".   "NativeLimitedClient"  means the existing Skype for Business rich client will be used, but since the user is upgraded, only meeting functionality is available. Calling and Messaging are done via Teams.  "SkypeMeetingsApp" means use the web-downloadable app. This setting can be useful for organizations that have upgraded to Teams and no longer want to install Skype for Business on their users' computers. This property is only available when configuring TeamsUpgradeConfiguration in Office 365. It is not honored for users homed on-premises in Skype for Business Server. 

```yaml
Type: string
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: NativeLimitedClient
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
