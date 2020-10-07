---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/start-spositecontentmove
applicable: SharePoint Online
title: Start-SPOSiteContentMove
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Start-SPOSiteContentMove

## SYNOPSIS

Start a job to move a particular user or group of users to be moved across geo locations relative to the one that executes the command

## SYNTAX

### UrlAndDestinationDataLocation

```powershell
Start-SPOSiteContentMove [-Url] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>]
 [-ValidationOnly] [<CommonParameters>]
```

### GroupNameAndDestinationDataLocation

```powershell
Start-SPOSiteContentMove [-GroupName] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>]
 [-ValidationOnly] [<CommonParameters>]
```

### UrlAndDestinationUrl

```powershell
Start-SPOSiteContentMove [-Url] <String> [-DestinationUrl] <String> [[-PreferredMoveBeginDate] <DateTime>]
 [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>] [-ValidationOnly] [<CommonParameters>]
```

## DESCRIPTION

This command starts the information and the status of a move request of a user between sites in a SharePoint Online Multi Geo tenant.

## EXAMPLES

### EXAMPLE 1

```powershell
Start-SPOSiteContentMove -Url https://contosoenergy.sharepoint.com/sites/hr -DestinationDataLocation EUR -PreferredMoveBeginDate ((Get-Date).AddHours(1)) -PreferredMoveEndDate ((Get-Date).AddHour(12))
```

Starts the movement of the content on <https://contosoenergy.sharepoint.com/sites/hr> to the EUR destination preferred to start 1 hour ahead from now, until 12 hours to that relative time.

### EXAMPLE 2

```powershell
Start-SPOSiteContentMove -GroupName  group@contoso.com -DestinationDataLocation JPN
```

Starts the movement of a group of users called group@contoso.com to the JPN location

### EXAMPLE 3

```powershell
Start-SPOSiteContentMove -Url https://contosoenergy.sharepoint.com/sites/hr -DestinationUrl https://contosoenergyEUR.sharepoint.com/sites/hr
```

Starts the movement from <https://contosoenergy.sharepoint.com/sites/hr> and set it to the location <https://contosoenergyEUR.sharepoint.com/sites/hr>

## PARAMETERS

### -DestinationDataLocation

Defines the new destination of the content that you want to move.

```yaml
Type: String
Parameter Sets: UrlAndDestinationDataLocation, GroupNameAndDestinationDataLocation
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DestinationUrl

Destination URL where the move will take place.

```yaml
Type: String
Parameter Sets: UrlAndDestinationUrl
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupName

Name of the group to be moved.

```yaml
Type: String
Parameter Sets: GroupNameAndDestinationDataLocation
Aliases:
Applicable: SharePoint Online
Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveBeginDate

Specifies what is the preferred Date and time to start the job.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveEndDate

Specifies what is the preferred Date and time to stop the job.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Reserved

PARAMVALUE: String

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Url

Specifies the source URL of the site collection.

```yaml
Type: String
Parameter Sets: UrlAndDestinationDataLocation, UrlAndDestinationUrl
Aliases:
Applicable: SharePoint Online
Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValidationOnly

This parameter will force the cmdlet to execute only validation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Start-SPOSiteRename](Start-SPOSiteRename.md)

[Stop-SPOUserAndContentMove](Stop-SPOUserAndContentMove.md)

[Get-SPOUserAndContentMoveState](Get-SPOUserAndContentMoveState.md)
