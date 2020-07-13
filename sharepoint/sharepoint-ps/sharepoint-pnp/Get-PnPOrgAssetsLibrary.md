---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnporgassetslibrary
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPOrgAssetsLibrary
---

# Get-PnPOrgAssetsLibrary

## SYNOPSIS
Returns the list of all the configured organizational asset libraries

## SYNTAX 

```powershell
Get-PnPOrgAssetsLibrary [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPOrgAssetsLibrary
```

Returns the list of all the configured organizational asset sites

### ------------------EXAMPLE 2------------------
```powershell
(Get-PnPOrgAssetsLibrary)[0].OrgAssetsLibraries[0].LibraryUrl.DecodedUrl
```

Returns the server relative url of the first document library which has been flagged as organizational asset library, i.e. "sites/branding/logos"

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)