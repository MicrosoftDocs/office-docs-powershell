---
Module Name: PnP.PowerShell
title: Remove-PnPTermGroup
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Remove-PnPTermGroup.html
---
 

# Remove-PnPTermGroup

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Remove-PnPTermGroup.md to change this file.

Removes a taxonomy term group and all its containing termsets

## SYNTAX

```
Remove-PnPTermGroup -Identity <TaxonomyTermGroupPipeBind> [-TermStore <TaxonomyTermStorePipeBind>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a term group and all the containing termsets.

## EXAMPLES

### Example 1
```powershell
Remove-PnPTermGroup -Identity 3d9e60e8-d89c-4cd4-af61-a010cf93b380
```

Removes the specified termgroup.

### Example 2
```powershell
Remove-PnPTermGroup -Identity "Corporate"
```

### Example 3
```powershell
Remove-PnPTermGroup -Identity "HR" -Force
```

Removes the specified termgroup without prompting for confirmation.

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

### -Identity
The name of GUID of the group to remove.

```yaml
Type: TaxonomyTermGroupPipeBind
Parameter Sets: (All)
Aliases: GroupName

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TermStore
Term store to use; if not specified the default term store is used.

```yaml
Type: TaxonomyTermStorePipeBind
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

