---
author: serdarsoysal
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/get-teamuser
schema: 2.0.0
title: Get-TeamUser
---

# Get-TeamUser

## SYNOPSIS
Returns users of a team.

## SYNTAX

```
Get-TeamUser -GroupId <String> [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION
Returns an array containing the UPN, UserId, Name and Role of users belonging to an specific GroupId.

## EXAMPLES

### Example 1
```
Get-TeamUser -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -Role Owner
```
This example returns the UPN, UserId, Name, and Role of the owners of the specified GroupId.

## PARAMETERS

### -GroupId
GroupId of the team

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Role
Filter the results to only users with the given role: Owner or Member.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
