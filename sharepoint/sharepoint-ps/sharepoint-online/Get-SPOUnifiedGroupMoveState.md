---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spounifiedgroupmovestate
applicable: SharePoint Online
title: Get-SPOUnifiedGroupMoveState
schema: 2.0.0
author:
ms.author:
ms.reviewer:
---

# Get-SPOUnifiedGroupMoveState

## SYNOPSIS

Returns the state of an Office 365 Group move between Preferred Data Locations.

## SYNTAX

```powershell
Get-SPOUnifiedGroupMoveState [-GroupAlias] <string> [<CommonParameters>]
```

## DESCRIPTION

Retrieves the state of the Office 365 Group move to the Preferred Data Location (PDL) for the specified. The customer tenant must be multi-geo enabled.

## EXAMPLES

### Example 1

```powershell
Get-SPOUnifiedGroupMoveState -GroupAlias EUTeam
```

Returns the status of the move between geos for the Office 365 Group named 'EUTeam'.

## PARAMETERS

### -GroupAlias

The alias of the Office 365 Group.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## OUTPUTS

### System.Object

The move status for the Office 365 Group. Possible values are:

* Ready to Trigger: The move has not started.
* Scheduled: The move is in queue but has not yet started.
* InProgress (n/4): The move is in progress in one of the following states: Validation (1/4), Backup (2/4), Restore (3/4), Cleanup (4/4).
* Success: The move has completed successfully.
* Failed: The move failed.

## NOTES

You can also apply the `-Verbose` option to see additional information about the move.

## RELATED LINKS

[Move a SharePoint site to a different geo location](https://docs.microsoft.com/office365/enterprise/move-sharepoint-between-geo-locations)
