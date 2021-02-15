---
Module Name: PnP.PowerShell
title: Remove-PnPFile
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Remove-PnPFile.html
---
 
# Remove-PnPFile

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Remove-PnPFile.md to change this file.

Removes a file.

## SYNTAX

### Server Relative
```powershell
Remove-PnPFile [-ServerRelativeUrl] <String> [-Recycle] [-Force] 
 [-Connection <PnPConnection>]   [<CommonParameters>]
```

### Site Relative
```powershell
Remove-PnPFile [-SiteRelativeUrl] <String> [-Recycle] [-Force] 
 [-Connection <PnPConnection>]   [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Remove-PnPFile -ServerRelativeUrl /sites/project/_catalogs/themes/15/company.spcolor
```

Removes the file company.spcolor

### EXAMPLE 2
```powershell
Remove-PnPFile -SiteRelativeUrl _catalogs/themes/15/company.spcolor
```

Removes the file company.spcolor

### EXAMPLE 3
```powershell
Remove-PnPFile -SiteRelativeUrl _catalogs/themes/15/company.spcolor -Recycle
```

Removes the file company.spcolor and saves it to the Recycle Bin

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

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

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

### -Recycle

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerRelativeUrl
Server relative URL to the file

```yaml
Type: String
Parameter Sets: Server Relative

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SiteRelativeUrl
Site relative URL to the file

```yaml
Type: String
Parameter Sets: Site Relative

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
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

