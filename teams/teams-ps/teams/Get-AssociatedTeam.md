---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-associatedteam
schema: 2.0.0
author: zhongxlmicrosoft
ms.author: serdars
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
```

Returns associated teams of the current user.

### Example 2
```PowerShell
Get-AssociatedTeam -user example@example.com
```

Returns associated teams of a given user email.

### Example 3
```PowerShell
Get-AssociatedTeam -user 0e4249a7-6cfd-8c93-a510-91cda44c8c73
```

Returns associated teams of a given user ID.

## PARAMETERS

### -User
User's UPN (user principal name, for example
johndoe@example.com) or user ID (for example 0e4249a7-6cfd-8c93-a510-91cda44c8c73).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### User

## OUTPUTS

### Team

## NOTES

## RELATED LINKS
[Get-Team](Get-Team.md)
[Get-SharedWithTeam](Get-SharedWithTeam.md)
