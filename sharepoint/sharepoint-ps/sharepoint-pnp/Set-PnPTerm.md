---
Module Name: PnP.PowerShell
title: Set-PnPTerm
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Set-PnPTerm.html
---
 
# Set-PnPTerm

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Set-PnPTerm.md to change this file.

Updates a term

## SYNTAX

### By Term Id
```
Set-PnPTerm -Identity <Guid> [-Name <String>] [-Lcid <Int32>] [-Description <String>]
 [-CustomProperties <Hashtable>] [-LocalCustomProperties <Hashtable>] [-DeleteAllCustomProperties]
 [-DeleteAllLocalCustomProperties] [-TermStore <TaxonomyTermStorePipeBind>]
 [<CommonParameters>]
```

### By Term Name
```
Set-PnPTerm -Identity <String> [-Name <String>] [-Lcid <Int32>] [-Description <String>]
 [-CustomProperties <Hashtable>] [-LocalCustomProperties <Hashtable>] [-DeleteAllCustomProperties]
 [-DeleteAllLocalCustomProperties] -TermSet <TaxonomyTermSetPipeBind> -TermGroup <TaxonomyTermGroupPipeBind>
 [-TermStore <TaxonomyTermStorePipeBind>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to update an existing term.

## EXAMPLES

### Example 1
```powershell
Update-PnPTerm -Identity 3d9e60e8-d89c-4cd4-af61-a010cf93b380 -Name "New Name"
```

Replaces the name of an existing term.

### Example 2
```powershell
Update-TermSet -Identity "Marketing" -TermSet "Departments" -TermGroup "Corporate" -Name "Finance" -CustomProperties @{"IsCorporate"="True"}
```

Adds a new custom property to an existing term.

### Example 2
```powershell
Update-TermSet -Identity "Marketing" -TermSet "Departments" -TermGroup "Corporate" -Name "Finance" -DeleteAllCustomProperties -CustomProperties @{"IsCorporate"="True"}
```

Removes all custom properties and adds a new custom property to an existing term.

## PARAMETERS

### -CustomProperties
Sets custom properties. 

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteAllCustomProperties
Removes all custom properties

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteAllLocalCustomProperties
Removes all local custom properties

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Sets the description for a term.

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
Identity of term to update. Either a name or a GUID.

```yaml
Type: TaxonomyTermPipeBind
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Lcid
Optional language code to use when setting the description. Defaults to the default term store language.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalCustomProperties
Sets local custom properties

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The new name for the term.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TermGroup
The term group to find the term in.

```yaml
Type: TaxonomyTermGroupPipeBind
Parameter Sets: By Term Name
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TermSet
The termset to find the term in.

```yaml
Type: TaxonomyTermSetPipeBind
Parameter Sets: By Term Name
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -TermStore
The termstore to find the term in. If not specified the default term store is used.

```yaml
Type: TaxonomyTermStorePipeBind
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

