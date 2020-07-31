---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsharingfornonownersofsite
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSharingForNonOwnersOfSite
---

# Get-PnPSharingForNonOwnersOfSite

## SYNOPSIS
Returns $false if sharing of the site and items in the site is restricted only to owners or $true if members and owners are allowed to share

## SYNTAX 

```powershell
Get-PnPSharingForNonOwnersOfSite [-Identity <SitePipeBind>]
                                 [-Connection <PnPConnection>]
```

## DESCRIPTION
Returns $false if sharing of the site and items in the site is restricted only to owners or $true if members and owners are allowed to share. You can disable sharing by non owners by using Disable-PnPSharingForNonOwnersOfSite. At this point there is no interface available yet to enable sharing by owners and members again through script. You will have to do so through the user interface of SharePoint.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPSharingForNonOwnersOfSite
```

Returns $false if sharing of the site and items in the site is restricted only to owners or $true if members and owners are allowed to share

## PARAMETERS

### -Identity


```yaml
Type: SitePipeBind
Parameter Sets: (All)
Aliases: Url

Required: False
Position: Named
Accept pipeline input: True
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### System.Boolean

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)