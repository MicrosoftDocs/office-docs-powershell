---
Module Name: PnP.PowerShell
title: Set-PnPTermGroup
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Set-PnPTermGroup.html
---
 
# Set-PnPTermGroup

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Set-PnPTermGroup.md to change this file.

Updates an existing term group

## SYNTAX

```
Set-PnPTermGroup -Identity <TaxonomyTermGroupPipeBind> [-Name <String>] [-Description <String>] 
 [-TermStore <TaxonomyTermStorePipeBind>] [-Connection <PnPConnection>] [<CommonParameters>]
```

## DESCRIPTION
The cmdles allows you to update an existing term group.

## EXAMPLES

### Example 1
```powershell
Set-PnPTermGroup -Identity "Departments" -Name "Company Units"
```

Renames the Departments termgroup to "Company Units"

## PARAMETERS


### -Description
Optional description of the term group

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The term group to update. Either name or a GUID.

```yaml
Type: TaxonomyTermGroupPipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
The new name for the term group.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TermStore
The termstore to use. If not specified the default term store is used.

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

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

