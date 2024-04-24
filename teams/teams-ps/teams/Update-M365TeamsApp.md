---
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/Update-M365TeamsApp
applicable: Microsoft Teams
title: Update-M365TeamsApp
author: lkueter
ms.author: satishtimiri
manager: rahulrgupta
ms.date: 04/24/2024
schema: 2.0.0
---

# Update-M365TeamsApp

## SYNOPSIS

This cmdlet updates app state and app available values for the Microsoft Teams app.

## SYNTAX

```powershell
Update-M365TeamsApp -Id <String> [-IsBlocked <Boolean>] -AppAssignmentType <String> -OperationType <String>
 [-Users <String[]>] [-Groups <String[]>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet allows administrators to modify app state and availability by adding or removing users and groups or changing assignment type.

## EXAMPLES

### Example 1

```powershell
PS C:\> Update-M365TeamsApp -Id 3acac8f6-4e9e-4ee1-9c0e-0ea837d15ea3 -IsBlocked $true -AppAssignmentType UsersAndGroups -OperationType Add -Users eec823bd-0979-4cf8-9924-85bb6ffcb57d -Groups 37da2d58-fc14-453e-9a14-5065ebd63a1d
```

Updates state and availablity assignment information of 3acac8f6-4e9e-4ee1-9c0e-0ea837d15ea3 app.

## PARAMETERS

### -AppAssignmentType

App availability type.

```yaml
Type: String
Parameter Sets: (Everyone, UsersandGroups, Noone)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -Id

Application ID of Microsoft Teams app.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsBlocked

The state of the app in the tenant.

```yaml
Type: Boolean
Parameter Sets: (true, false)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OperationType

Operation performed on the app assigment.

```yaml
Type: String
Parameter Sets: (Add, Remove)
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

## RELATED LINKS

[Get-AllM365TeamsApps](Get-ALLM365TeamsApps.md)
[Get-M365TeamsApp](Get-M365TeamsApp.md)
