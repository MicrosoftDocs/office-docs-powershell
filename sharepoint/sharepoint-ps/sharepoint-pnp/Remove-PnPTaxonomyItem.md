---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnptaxonomyitem
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Remove-PnPTaxonomyItem
---

# Remove-PnPTaxonomyItem

## SYNOPSIS
Removes a taxonomy item

## SYNTAX 

```powershell
Remove-PnPTaxonomyItem -TermPath <String>
                       [-Force [<SwitchParameter>]]
                       [-Connection <PnPConnection>]
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

### -TermPath
The path, delimited by | of the taxonomy item to remove, alike GROUPLABEL|TERMSETLABEL|TERMLABEL

```yaml
Type: String
Parameter Sets: (All)
Aliases: Term

Required: True
Position: 0
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