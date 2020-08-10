---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/start-spounifiedgroupmove
applicable: SharePoint Online
title: Start-SPOUnifiedGroupMove
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Start-SPOUnifiedGroupMove

## SYNOPSIS

Initiates the move of an Office 365 Group to a new geo location

## SYNTAX

```powershell
Start-SPOUnifiedGroupMove [-GroupAlias] <String> [-DestinationDataLocation] <String> [[-PreferredMoveBeginDate] <DateTime>] [[-PreferredMoveEndDate] <DateTime>] [[-Reserved] <String>] [-ValidationOnly] [-Force] [-SuppressMarketplaceAppCheck] [-SuppressWorkflow2013Check] [-SuppressAllWarnings] [-SuppressBcsCheck] [<CommonParameters>]
```

## DESCRIPTION

Initiates the move of an Office 365 Group site to a new geo location. The administrator may set a preferred start and end time for the move, however the preferred end time is not guaranteed. The customer tenant must be Multi-Geo enabled to use these commandlets. 

## EXAMPLES

### Example 1

```powershell
Start-SPOUnifiedGroupMove -GroupAlias EUTeam -DestinationDataLocation EUR
```

Starts the move of an Office 365 Group site with an alias EUTeam to the Preferred Data Location EUR (Europe).

## PARAMETERS

### -DestinationDataLocation

The destination location for the Office 365 Group site move.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

Force the cmdlet to run. This ignores all warings blocks and validations. It is only recommended if the administrator only wishes to preserve data and is not intersted in checks for applications, Business Connectivity Services, or other functionalities. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupAlias

The alias of the Office 365 Group attached to the site you want to move.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveBeginDate

The move will likely begin at this specified time.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredMoveEndDate

The move will likely be completed by this specified time, on a best effort basis.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
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

Suppress checking for Business Connectivity Services used with the associated Office 365 Group site.

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

Suppress checking compatibility of marketplace SharePoint Add-ins deployed to the associated Office 365 Group site.

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

Suppress checking compatibility of SharePoint 2013 Workflows deployed to the associated Office 365 Group site.

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

### -ValidationOnly

This parameter will force the cmdlet to execute only validation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
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

[Move a SharePoint site to a different geo location](https://docs.microsoft.com/office365/enterprise/move-sharepoint-between-geo-locations)
