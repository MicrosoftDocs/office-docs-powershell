---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/remove-spotenantsyncclientrestriction
applicable: SharePoint Online
title: Remove-SPOTenantSyncClientRestriction
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Remove-SPOTenantSyncClientRestriction

## SYNOPSIS

Disables the feature for the tenancy.

## SYNTAX

```powershell
Remove-SPOTenantSyncClientRestriction [<CommonParameters>]
```

## DESCRIPTION

You must be a SharePoint Online administrator or Global Administrator to run the cmdlet.

Requires a valid `Connect-SPOService` context to identify the tenant. For information on how to connect to the tenant, see `Connect-SPOService`.

The `Remove-SPOTenantSyncClientRestriction` cmdlet disables the feature for tenancy, but does not remove any present domain GUID entries from the safe sender recipient list. After the `Remove-SPOTenantSyncClientRestriction` cmdlet is run it can take up to 24 hours for change to take effect. This parameter will also remove any values set from the GrooveBlockOption parameter for syncing.

The `Remove-SPOTenantSyncClientRestriction` cmdlet does not have any parameters.

## EXAMPLES

### -----------------------EXAMPLE-----------------------------

```powershell
Remove-SPOTenantSyncClientRestriction
```

This example returns  the value of False for the TenantRestrictionEnabled property.

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
