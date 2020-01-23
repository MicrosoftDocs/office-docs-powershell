---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnptermgroup
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
---
# Remove-PnPTermGroup

## SYNOPSIS
Removes a taxonomy term group and all its containing termsets

## SYNTAX

```powershell
Remove-PnPTermGroup -GroupName <String>
                    [-TermStoreName <String>]
                    [-Force [<SwitchParameter>]]
                    [-Connection <SPOnlineConnection>]
```

## PARAMETERS

### -Force


```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -GroupName
Name of the taxonomy term group to delete.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: True
```

### -TermStoreName
Term store to use; if not specified the default term store is used.

```yaml
Type: String
Parameter Sets: __AllParameterSets

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
