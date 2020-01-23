---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/disable-pnpinplacerecordsmanagementforsite
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---
# Disable-PnPInPlaceRecordsManagementForSite

## SYNOPSIS
Disables in place records management for a site.

## SYNTAX

```powershell
Disable-PnPInPlaceRecordsManagementForSite [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Disable-PnPInPlaceRecordsManagementForSite
```

The in place records management feature will be disabled

## PARAMETERS

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
