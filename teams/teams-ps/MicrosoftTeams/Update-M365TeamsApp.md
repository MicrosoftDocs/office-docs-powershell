---
applicable: Microsoft Teams
author: lkueter
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Locale: en-US
manager: rahulrgupta
Module Name: MicrosoftTeams
<!--- ms.author: sribagchi --->
ms.date: 04/24/2024
online version: https://docs.microsoft.com/powershell/module/microsoftteams/Update-M365TeamsApp
schema: 2.0.0
title: Update-M365TeamsApp
---

# Update-M365TeamsApp

## SYNOPSIS

This cmdlet updates app state and app available values for the Microsoft Teams app.

## SYNTAX

```powershell
Update-M365TeamsApp -Id <String> [-IsBlocked <Boolean>] -AppAssignmentType <String> -OperationType <String>
 [-Users <String[]>] [-Groups <String[]>] -AppInstallType <String> -InstallForOperationType <String> [-InstallForUsers <String[]> -InstallForGroups <String[]> -InstallVersion <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet allows administrators to modify app state, availability and installation status by adding or removing users and groups or changing assignment type or installation status.

## EXAMPLES

### Example 1

```powershell
PS C:\> Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -AppAssignmentType Everyone
```
Updates the availability value for Bookings app (App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b) to Everyone.

### Example 2

```powershell
PS C:\> Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -IsBlocked $true -AppAssignmentType UsersAndGroups -OperationType Add -Users eec823bd-0979-4cf8-9924-85bb6ffcb57d, eec823bd-0979-4cf8-9924-85bb6ffcb57e -Groups 37da2d58-fc14-453e-9a14-5065ebd63a1d, 37da2d58-fc14-453e-9a14-5065ebd63a1e, 37da2d58-fc14-453e-9a14-5065ebd63a1b, 37da2d58-fc14-453e-9a14-5065ebd63a1f, 37da2d58-fc14-453e-9a14-5065ebd63a1a
```
Unblocks CSP Customer App (App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b) and updates availability setting for the app to include 2 users and 5 groups.

### Example 3

```powershell
PS C:\> Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -IsBlocked $true
```
Unblocks Bookings app (App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b).

### Example 4

```powershell
PS C:\> Update-M365TeamsApp -Id 2b876f4d-2e6b-4ee7-9b09-8893808c1380 -IsBlocked $false -AppInstallType UsersAndGroups -InstallForOperationType Add -InstallForUsers 77f5d400-a12e-4168-8e63-ccd2243d33a8,f2f4d8bc-1fb3-4292-867e-6d19efb0eb7c,37b6fc6a-32a4-4767-ac2e-c2f2307bad5c -InstallForGroups 926d57ad-431c-4e6a-9e16-347eacc91aa4 -InstallVersion 4.1.2
```
Unblocks 1Page App (App ID 2b876f4d-2e6b-4ee7-9b09-8893808c1380) and updates installation setting for the app to include 3 users and 1 group.

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

### -AppInstallType

App installation type.

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

### -InstallForGroups

List of all the groups for whom the app is installed.

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

### -InstallForOperationType

Operation performed on the app installation.

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

### -InstallForUsers

List of all the users for whom the app is installed.

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

### -InstallVersion

App version to be installed.

```yaml
Type: String
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

## NOTES

## RELATED LINKS

[Get-AllM365TeamsApps](https://learn.microsoft.com/powershell/module/microsoftteams/get-allm365teamsapps)
[Get-M365TeamsApp](https://learn.microsoft.com/powershell/module/microsoftteams/get-allm365teamsapps)
