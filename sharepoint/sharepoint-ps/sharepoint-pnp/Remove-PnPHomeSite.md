---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnphomesite
applicable: SharePoint Online
schema: 2.0.0
---
# Remove-PnPHomeSite

## SYNOPSIS
Removes the currently set site as the home site

## SYNTAX

```powershell
Remove-PnPHomeSite [-Force [<SwitchParameter>]]
                   [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPHomeSite
```

Removes the currently set site as the home site

## PARAMETERS

### -Force
Specifying the Force parameter will skip the confirmation question.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

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
