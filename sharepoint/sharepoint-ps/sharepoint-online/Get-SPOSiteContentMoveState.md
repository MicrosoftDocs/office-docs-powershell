---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spositecontentmovestate
applicable: SharePoint Online
title: Get-SPOSiteContentMoveState
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOSiteContentMoveState

## SYNOPSIS

This Cmdlet allows a SharePoint administrators to check the status of a site or group move.

## SYNTAX

### MoveReport (Default)
```
Get-SPOSiteContentMoveState [-Limit <UInt32>] [-MoveStartTime <DateTime>] [-MoveEndTime <DateTime>]
 [-MoveState <MoveState>] [-MoveDirection <MoveDirection>] [<CommonParameters>]
```

### SourceSiteUrl
```
Get-SPOSiteContentMoveState -SourceSiteUrl <String> [<CommonParameters>]
```

### SiteMoveId
```
Get-SPOSiteContentMoveState -SiteMoveId <Guid> [<CommonParameters>]
```

## DESCRIPTION

This command gets the information and the status of a move request of a user between sites in a SharePoint Online Multi Geo tenant.

## EXAMPLES

### -----------------------EXAMPLE 1-----------------------------

```powershell
Get-SPOSiteContentMoveState -SourceSiteUrl $siteurl
```

Gets the status of the site content give on the variable $siteurl

## PARAMETERS

### -Limit
Specifies the maximum number of Content move states to return. 

```yaml
Type: UInt32
Parameter Sets: MoveReport
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveDirection
Possible values for this parameter are:
- MoveOut
- MoveIn
- All

```yaml
Type: MoveDirection
Parameter Sets: MoveReport
Aliases:
Accepted values: MoveOut, MoveIn, All

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -MoveEndTime
End date and time for the time window between which Content move states are to be retrieved.

```yaml
Type: DateTime
Parameter Sets: MoveReport
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveStartTime
Start date and time for the time window between which Content move states are to be retrieved.

```yaml
Type: DateTime
Parameter Sets: MoveReport
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```
### -MoveState
This parameter is used to specify the move state of the Content move states to retrieve.
Possible values:
- NotStarted
- InProgress
- Success
- Failed
- Stopped
- Queued
- NotSupported
- Rescheduled
- All

```yaml
Type: MoveState
Parameter Sets: MoveReport
Aliases:
Accepted values: NotStarted, InProgress, Success, Failed, Stopped, Queued, NotSupported, Rescheduled, All

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteMoveId
Id of the Site move to retrieve.

```yaml
Type: Guid
Parameter Sets: SiteMoveId
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceSiteUrl
Specifies the source URL of the site collection.

```yaml
Type: String
Parameter Sets: SourceSiteUrl
Aliases:
Applicable: SharePoint Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
