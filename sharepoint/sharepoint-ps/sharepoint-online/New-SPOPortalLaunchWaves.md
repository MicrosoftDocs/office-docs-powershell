---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version:https://docs.microsoft.com/powershell/module/sharepoint-online/new-spoportallaunchwaves
schema: 2.0.0
applicable: SharePoint Online
title: New-SPOPortalLaunchWaves
author: fikrudeju
ms.author: fishibru
manager: suyog
---

# New-SPOPortalLaunchWaves

## SYNOPSIS
Schedule a portal launch on a site.

## SYNTAX

```
New-SPOPortalLaunchWaves -LaunchSiteUrl <String> -RedirectionType <PortalLaunchRedirectionType>
 -ExpectedNumberOfUsers <PortalLaunchUsersSizeType> [-RedirectUrl <String>] [-FriendlyUrlOfNewSite <String>]
 [-FriendlyUrlOfOldSite <String>] [-WaveSetupJsonFilepath <String>] [-Waves <String>]
 -WaveOverrideUsers <String> [-IsTesting <Boolean>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The New-SPOPortalLaunchWaves cmdlet can be used to schedule a portal launch on a site.

## EXAMPLES

### Example 1
```powershell
New-SPOPortalLaunchWaves -LaunchSiteUrl "https://contoso.sharepoint.com/teams/newsite" -RedirectionType Bidirectional -RedirectUrl "https://contoso.sharepoint.com/teams/oldsite" -ExpectedNumberOfUsers 10kTo30kUsers -WaveOverrideUsers "*@microsoft.com" -Waves '
[{Name:"Wave 1", Groups:["Viewers SG1"], LaunchDateUtc:"2020/10/14"},
{Name:"Wave 2", Groups:["Viewers SG2"], LaunchDateUtc:"2020/10/15"},
{Name:"Wave 3", Groups:["Viewers SG3"], LaunchDateUtc:"2020/10/16"}]'
```

In this scenario, the customer migrates users from an existing SharePoint site (https://contoso.sharepoint.com/teams/oldsite) to a new SharePoint site (https://contoso.sharepoint.com/teams/newsite) in a staged manner.

### Example 2
```powershell
New-SPOPortalLaunchWaves -LaunchSiteUrl "https://contoso.sharepoint.com/teams/newsite" -RedirectionType ToTemporaryPage -RedirectUrl "https://www.microsoft.com" -ExpectedNumberOfUsers 10kTo30kUsers -WaveOverrideUsers "*@microsoft.com" -Waves '
[{Name:"Wave 1", Groups:["Viewers SG1"], LaunchDateUtc:"2020/10/14"},
{Name:"Wave 2", Groups:["Viewers SG2"], LaunchDateUtc:"2020/10/15"},
{Name:"Wave 3", Groups:["Viewers SG3"], LaunchDateUtc:"2020/10/16"}]' 
```

In this scenario, the customer does not have an existing SharePoint site and is directing users to a new SharePoint site (https://contoso.sharepoint.com/teams/newsite) in a staged manner. If a user is in a wave that has not been launched, they will be redirected to a temporary page (any URL).

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExpectedNumberOfUsers
Specifies the expected number of users that the site will be launched to.

```yaml
Type: PortalLaunchUsersSizeType
Parameter Sets: (All)
Aliases:
Accepted values: LessThan10kUsers, From10kTo30kUsers, From30kTo100KUsers, MoreThan100kUsers

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FriendlyUrlOfNewSite
Specified a friendly short URL (if any) you already configured to access the launch site

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FriendlyUrlOfOldSite
Specified a friendly short URL (if any) you already configured to access the old site 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LaunchSiteUrl
Specifies the absolute URL for the site being checked for its launch state.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectUrl
Specifies the absolute URL for the site that users will be redirected to if their wave is not launched.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RedirectionType
Specifies the redirection type, i.e. Bidirectional or ToTemporaryPage.

```yaml
Type: PortalLaunchRedirectionType
Parameter Sets: (All)
Aliases:
Accepted values: Bidirectional, ToTemporaryPage

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WaveOverrideUsers
Specifies any users that will be excluded from the wave, i.e. they will have access to the site at any time during the launch assuming they have the correct site permissions.
Format: user@domain.com, with multiple entries separated by commas 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WaveSetupJsonFilepath
Specifies a file path that contains collection of waves in a JSON format.
File Content Format: 
[{Name:"Wave 1", Groups:["<group1>","<group2>",...], LaunchDateUtc:"<YYYY/MM/DD HH:MM>"},
{Name:"Wave 2", Groups:["<group13>","<group14>",...], LaunchDateUtc:"<YYYY/MM/DD HH:MM>"}]

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Waves
Specifies which security groups are included in each wave and the launch date in UTC. The number of waves required is dependent on the value indicated for the -ExpectedNumberOfUsers parameter.
LessThan10kUsers - 1 wave
10kTo30kUsers - 3 waves
30kTo100kUsers - 5 waves
MoreThan100kUsers - 5 waves
Format: {Name:"Wave 1", Groups:["<group1>","<group2>",...], LaunchDateUtc:"<YYYY/MM/DD HH:MM>"} 

```yaml
Type: String
Parameter Sets: (All)
Aliases:

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS

[Get-SPOPortalLaunchWaves](Get-SPOPortalLaunchWaves.md)

[Set-SPOPortalLaunchWaves](Set-SPOPortalLaunchWaves.md)

[Remove-SPOPortalLaunchWaves](Remove-SPOPortalLaunchWaves.md)