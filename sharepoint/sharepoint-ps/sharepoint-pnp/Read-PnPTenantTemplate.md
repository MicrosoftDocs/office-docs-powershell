---
Module Name: PnP.PowerShell
title: Read-PnPTenantTemplate
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Read-PnPTenantTemplate.html
---
 
# Read-PnPTenantTemplate

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Read-PnPTenantTemplate.md to change this file.

Loads/Reads a PnP tenant template from the file system and returns an in-memory instance of this template.

## SYNTAX

```powershell
Read-PnPTenantTemplate [-Path] <String>
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Read-PnPTenantTemplate -Path template.pnp
```

Reads a PnP tenant template file from the file system and returns an in-memory instance

## PARAMETERS

### -Path
Filename to read from, optionally including full path.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

