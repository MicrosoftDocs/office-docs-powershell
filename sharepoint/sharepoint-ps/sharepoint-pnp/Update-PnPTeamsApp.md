---
Module Name: PnP.PowerShell
title: Update-PnPTeamsApp
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Update-PnPTeamsApp.html
---
 
# Update-PnPTeamsApp

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Update-PnPTeamsApp.md to change this file.


**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Updates an existing app in the Teams App Catalog.

## SYNTAX

```powershell
Update-PnPTeamsApp -Identity <TeamsAppPipeBind> -Path <String>  [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### EXAMPLE 1
```powershell
Update-PnPTeamsApp -Identity 4efdf392-8225-4763-9e7f-4edeb7f721aa -Path c:\myapp.zip
```

Updates the specified app in the teams app catalog with the contents of the referenced zip file.

## PARAMETERS

### -Identity

```yaml
Type: TeamsAppPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
The path pointing to the packaged/zip file containing the app

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

