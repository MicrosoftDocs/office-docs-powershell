---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpteamsteam
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPTeamsTeam
---

# Add-PnPTeamsTeam

## SYNOPSIS
Adds a Teams team to an existing, group connected, site collection

## SYNTAX 

```powershell
Add-PnPTeamsTeam [-Connection <PnPConnection>]
```

## DESCRIPTION
This command allows you to add a Teams team to an existing, Microsoft 365 group connected, site collection.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPTeamsTeam
```

This create a teams team for the connected site collection

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