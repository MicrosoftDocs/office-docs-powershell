---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/disconnect-sposervice
applicable: SharePoint Online
title: Disconnect-SPOService
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Disconnect-SPOService

## SYNOPSIS

Disconnects from a SharePoint Online service.

## SYNTAX

```powershell
Disconnect-SPOService [<CommonParameters>]
```

## DESCRIPTION

The `Disconnect-SPOService` cmdlet explicitly disconnects a previously created SharePoint Online service connection.

Global administrators can disconnect the service by running the `Disconnect-SPOService` cmdlet or by running the `Connect-SPOService` cmdlet to initiate another connection.
For more information, see `Connect-SPOService`.

Even after a connection is terminated, operations that were started before the connection is terminated will run to completion.
In other words, long-running operations will not be terminated by running the `Disconnect-SPOService` cmdlet or the `Connect-SPOService` cmdlet.

You must be a SharePoint Online administrator or Global Administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at [Intro to SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell?view=sharepoint-ps).

## EXAMPLES

### ------------ Example 1 --------------------

```powershell
Disconnect-SPOService
```

This example disconnects the service for the tenant.

## PARAMETERS

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)

[Connect-SPOService](Connect-SPOService.md)
