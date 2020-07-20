---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpissitealiasavailable
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPIsSiteAliasAvailable
---

# Get-PnPIsSiteAliasAvailable

## SYNOPSIS
Validates if a certain alias is still available to be used to create a new site collection for. If it is not, it will propose an alternative alias and URL which is still available.

## SYNTAX 

```powershell
Get-PnPIsSiteAliasAvailable [-Identity <String>]
                            [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPIsSiteAliasAvailable -Identity "HR"
```

Validates if the alias "HR" is still available to be used

## PARAMETERS

### -Identity
Alias you want to check for if it is still available to create a new site collection for

```yaml
Type: String
Parameter Sets: (All)
Aliases: Alias

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

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)