---
Module Name: PnP.PowerShell
title: Get-PnPTenantSequenceSite
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPTenantSequenceSite.html
---
 
# Get-PnPTenantSequenceSite

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPTenantSequenceSite.md to change this file.

Returns one ore more sites from a tenant template

## SYNTAX

```powershell
Get-PnPTenantSequenceSite -Sequence <ProvisioningSequence> [-Identity <ProvisioningSitePipeBind>] 
  [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPTenantSequenceSite -Sequence $mysequence
```

Returns all sites from the specified sequence

### EXAMPLE 2
```powershell
Get-PnPTenantSequenceSite -Sequence $mysequence -Identity 8058ea99-af7b-4bb7-b12a-78f93398041e
```

Returns the specified site from the specified sequence

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
Optional Id of the site

```yaml
Type: ProvisioningSitePipeBind
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Sequence
The sequence to retrieve the site from

```yaml
Type: ProvisioningSequence
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

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

