---
Module Name: PnP.PowerShell
title: Remove-PnPTermLabel
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Remove-PnPTermLabel.html
---
 
# Remove-PnPTermLabel

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Remove-PnPTermLabel.md to change this file.

Removes a single label/translation from a term.

## SYNTAX

### By Term Id
```
Remove-PnPTermLabel 
    -Label <String> 
    -Term <Guid> 
    -Lcid <Int32> 
    [-TermStore <Guid>]
    [-Connection <PnPConnection>] 
    [-WhatIf] 
    [-Confirm] 
    [<CommonParameters>]
```

### By Name
```
Remove-PnPTermLabel 
    -Label <String> 
    -Term <String> 
    -Lcid <Int32> 
    -TermSet <Name|Guid> 
    -TermGroup <Name|Guid> 
    [-TermStore <Guid>]
    [-Connection <PnPConnection>] 
    [-WhatIf] 
    [-Confirm] 
    [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a label/translation from a term.

## EXAMPLES

### Example 1
```powershell
Remove-PnPTermLabel -Label "Marknadsföring" -Lcid 1053 -Term 2d1f298b-804a-4a05-96dc-29b667adec62
```

Removes the Swedish label from the specified term

### Example 2
```powershell
Remove-PnPTermLabel -Label "Marknadsföring" -Lcid 1053 -Term "Marketing" -TermSet "Departments" -TermGroup "Corporate"
```
Removes the Swedish label from the specified term

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Label
The label to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Lcid
{{ Fill Lcid Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Term
{{ Fill Term Description }}

```yaml
Type: Guid
Parameter Sets: By Term Id
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: By Name
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TermGroup
The Term Group containing the Term Set.

```yaml
Type: Guid or String
Parameter Sets: By Name
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TermSet
The Term Set containing the Term

```yaml
Type: Guid or String
Parameter Sets: By Name
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TermStore
The Term Store containing the Term Group.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

