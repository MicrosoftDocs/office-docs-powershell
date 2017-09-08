---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Remove-SPODeletedSite

## SYNOPSIS
Removes a SharePoint Online deleted site collection from the Recycle Bin.

## SYNTAX

```
Remove-SPODeletedSite [-Confirm] -Identity <SpoSitePipeBind> [-NoWait] [-WhatIf]
```

## DESCRIPTION
The Remove-SPODeletedSite cmdlet permanently removes a SharePoint Online deleted site collection from the Recycle Bin.

You have to be a SharePoint Online global administrator and site collection administrator permissions to run the cmdlet.

For permissions and the most current information about Windows PowerShell for SharePoint Online, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251832 (http://go.microsoft.com/fwlink/p/?LinkId=251832).

## EXAMPLES

### (SharePoint Online)
```

```

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
{{Fill Identity Description}}

```yaml
Type: SpoSitePipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -NoWait
{{Fill NoWait Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Introduction to the SharePoint Online management shell]()

[Set up the SharePoint Online Management Shell Windows PowerShell environment]()

[Remove-SPOSite]()

[Get-SPODeletedSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/37ed35a8-450d-49df-b471-e6d4babcb5c7(Office.15).aspx)

