---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/update-pnpteamsapp
applicable: SharePoint Online
schema: 2.0.0
title: Update-PnPTeamsApp
---

# Update-PnPTeamsApp

## SYNOPSIS
Updates an existing app in the Teams App Catalog.

## SYNTAX 

```powershell
Update-PnPTeamsApp -Identity <TeamsAppPipeBind>
                   -Path <String>
                   [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Update-PnPTeamsApp -Identity 4efdf392-8225-4763-9e7f-4edeb7f721aa -Path c:\myapp.zip
```

Updates the specified app in the teams app catalog with the contents of the referenced zip file.

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity


```yaml
Type: TeamsAppPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Path
The path pointing to the packaged/zip file containing the app

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)