---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-associatedteam
schema: 2.0.0
author: zhongxl
ms.author: zhongxl
ms.reviewer: dedaniel, robharad
---

# Get-AssociatedTeam

## SYNOPSIS
This cmdlet supports retrieving all teams associated with a user, including teams which host shared channels.

## SYNTAX
```PowerShell
Get-AssociatedTeam [-User <String>]
```

## DESCRIPTION
This cmdlet supports retrieving all associated teams of a user, including teams which host shared channels.

## EXAMPLES

### Example 1
```PowerShell
Get-AssociatedTeam

Returns associated teams of current user.

### Example 2
```PowerShell
Get-TeamChannel -user example@example.com
```

Returns associated teams of given user email.

### Example 3
```PowerShell
Get-TeamChannel -user 0e4249a7-6cfd-8c93-a510-91cda44c8c73
```

Returns associated teams of given user id.

## PARAMETERS

### -User
User's UPN (user principal name - e.g.
johndoe@example.com) or user id (e.g. 0e4249a7-6cfd-8c93-a510-91cda44c8c73)

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```