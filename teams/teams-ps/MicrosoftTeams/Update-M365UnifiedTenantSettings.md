---
applicable: Microsoft Teams
author: lkueter
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Locale: en-US
manager: rahulrgupta
Module Name: MicrosoftTeams
<!-- ms.author: sribagchi -->
ms.date: 10/22/2024
online version: https://docs.microsoft.com/powershell/module/microsoftteams/Update-M365UnifiedTenantSettings
schema: 2.0.0
title: Update-M365UnifiedTenantSettings
---

# Update-M365UnifiedTenantSettings

## SYNOPSIS

This cmdlet updates tenant settings.

## SYNTAX

```powershell
Update-M365UnifiedTenantSettings -SettingName <String> -SettingValue <String> [-Users <String[]>] [-Groups <String[]>] [-Operation <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet allows administrators to modify tenant settings.

## EXAMPLES

### Example 1

```powershell
PS C:\> PS C:\> Update-M365UnifiedTenantSettings -SettingName EnableCopilotExtensibility -SettingValue Some -Users d156010d-fb18-497f-804c-155ec2aa06d3,a62fba7e-e362-493c-a094-fdec17e2fee8 -Groups 37da2d58-fc14-453e-9a14-5065ebd63a1d, 37da2d58-fc14-453e-9a14-5065ebd63a1e -Operation add
```
Updates the tenant setting for EnableCopilotExtensibility to 2 users and 2 groups.

### Example 2

```powershell
PS C:\> Update-M365UnifiedTenantSettings -SettingName GlobalApp -SettingValue None
```
Updates the tenant setting for GlobalApp to None

## PARAMETERS

### -Groups

List of all the groups for whom the app is enabled or disabled.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operation

Operation performed (whether we are adding or removing users/groups).

```yaml
Type: String
Parameter Sets: (add, remove)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SettingName

Setting Name to be changed.

```yaml
Type: String
Parameter Sets: (DefaultApp, GlobalApp, PrivateApp, EnableCopilotExtensibility)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SettingValue
Setting Value to be changed.

```yaml
Type: String
Parameter Sets: (All, None, Some)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Users

List of all the users for whom the app is enabled or disabled.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
