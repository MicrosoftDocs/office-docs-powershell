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
Start-SPOSiteContentMove [-SourceSiteUrl] <String> [-DestinationDataLocation] <String>
 [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>]
 [-ValidationOnly] [-SuppressMarketplaceAppCheck] [-SuppressWorkflow2013Check] [-SuppressAllWarnings]
 [-SuppressBcsCheck][<CommonParameters>]
```

### UrlAndDestinationUrl

```powershell
Start-SPOSiteContentMove [-SourceSiteUrl] <String> [-DestinationUrl] <String> [[-PreferredMoveBeginDate] <DateTime>]
 [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>] [-ValidationOnly] [-SuppressMarketplaceAppCheck] [-SuppressWorkflow2013Check] 
 [-SuppressAllWarnings] [-SuppressBcsCheck] [<CommonParameters>]
```

## DESCRIPTION

UrlAndDestinationDataLocation: These parameters allow a SharePoint administrator to validate a geo move before scheduling it.

UrlAndDestinationUrl: These parameters allow a SharePoint administrator to move and (optionally) rename a site as part of the geo move operation by specifying a new site name in the destrination URL.

## EXAMPLES

### EXAMPLE 1

```powershell
Start-SPOSiteContentMove -SourceSiteUrl https://contosoenergy.sharepoint.com/sites/hr -DestinationDataLocation EUR 
```

Starts the movement of the content on <https://contosoenergy.sharepoint.com/sites/hr> to the EUR destination.

### EXAMPLE 2

```powershell
Start-SPOSiteContentMove -SourceSiteUrl https://contosoenergy.sharepoint.com/sites/hr -DestinationDataLocation EUR -PreferredMoveBeginDate ((Get-Date).AddHours(1)) -PreferredMoveEndDate ((Get-Date).AddHour(12))
```

Starts a site geo move for <https://contosoenergy.sharepoint.com/sites/hr> to the EUR destination with a preffered start time window of 1 to 12 hours from the move schedule operation.

### EXAMPLE 3

```powershell
Start-SPOSiteContentMove -SourceSiteUrl https://contosoenergy.sharepoint.com/sites/hr -DestinationUrl https://contosoenergyEUR.sharepoint.com/sites/hrEU
```

Starts a site geo move for <https://contosoenergy.sharepoint.com/sites/hr> and allows site rename to <https://contosoenergyEUR.sharepoint.com/sites/hrEU> as part of the geo move operation.

## PARAMETERS

### -DestinationDataLocation

Defines the new destination of the content that you want to move. This is the 3 letter data location value. 

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

Destination URL is optional in cases where the administrator wants to perform a site rename as part of the move.

```yaml
Type: String
Parameter Sets: UrlAndDestinationUrl
Aliases:
Applicable: SharePoint Online
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### -PreferredMoveBeginDate

Specifies what is the preferred Date and time to start the move job. This is a preference and will be honored based on system resource availability. 

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

Specifies what is the preferred Date and time to stop the move job from starting. This is a preference and will be honored based on system resource availability. If a the move is already in progress, we will complete the move. 

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

Reserved for Microsoft Internal use.

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

### -SourceSiteUrl

Specifies the source URL of the site collection you want to move. 

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

This parameter will perform a validation check on whether the site can be moved and will not execute the move. 

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

### -SuppressAllWarnings
Suppress all warning messages.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressBcsCheck
Suppress checking for Business Connectivity Services used with the associated site.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressMarketplaceAppCheck
Suppress checking compatibility of marketplace SharePoint Add-ins deployed to the associated site.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SuppressWorkflow2013Check
Suppress checking compatibility of SharePoint 2013 Workflows deployed to the associated site.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
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
