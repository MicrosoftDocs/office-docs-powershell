---
Module Name: PnP.PowerShell
schema: 2.0.0
applicable: SharePoint Online
online version: https://pnp.github.io/powershell/cmdlets/Convert-PnPFolderToSiteTemplate.html
external help file: PnP.PowerShell.dll-Help.xml
title: Convert-PnPFolderToSiteTemplate
---
  
# Convert-PnPFolderToSiteTemplate

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Convert-PnPFolderToSiteTemplate.md to change this file.

Creates a pnp package file of an existing template xml, and includes all files in the current folder

## SYNTAX

```powershell
Convert-PnPFolderToSiteTemplate [-Out] <String> [[-Folder] <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Convert-PnPFolderToSiteTemplate -Out template.pnp
```

Creates a pnp package file of an existing template xml, and includes all files in the current folder

### EXAMPLE 2
```powershell
Convert-PnPFolderToSiteTemplate -Out template.pnp -Folder c:\temp
```

Creates a pnp package file of an existing template xml, and includes all files in the c:\temp folder

## PARAMETERS

### -Folder
Folder to process. If not specified the current folder will be used.

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Overwrites the output file if it exists.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Out
Filename to write to, optionally including full path.

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


