---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/get-spotenant
applicable: SharePoint Online
title: Get-SPOTenant
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Get-SPOTenant

## SYNOPSIS
Returns SharePoint Online organization properties.

## SYNTAX

```
Get-SPOTenant [<CommonParameters>]
```

## DESCRIPTION
The `Get-SPOTenant` cmdlet returns organization-level site collection properties such as StorageQuota, StorageQuotaAllocated, ResourceQuota, ResourceQuotaAllocated and SiteCreationMode.

Currently, there are no parameters for this cmdlet.

You must be a SharePoint Online global administrator to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at https://go.microsoft.com/fwlink/p/?LinkId=251832 (https://go.microsoft.com/fwlink/p/?LinkId=251832).


## EXAMPLES

###   ------------ Example 1 --------------------
```
Get-SPOTenant
```
This example returns the organization-level site collection properties such as StorageQuota, StorageQuotaAllocated, ResourceQuota, ResourceQuotaAllocated, SiteCreationMode and OneDriveStorageQuota.


## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Getting started with SharePoint Online Management Shell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-online/connect-sharepoint-online?view=sharepoint-ps)

[Get-SPOAppErrors](Get-SPOAppErrors.md)
