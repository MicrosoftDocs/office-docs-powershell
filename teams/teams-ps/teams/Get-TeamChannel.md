---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Get-TeamChannel

> [!IMPORTANT]
> Modules in the PS INT gallery for Microsoft Teams run on the /beta version in Microsoft Graph and are subject to change. 
Int modules can be install from here <https://www.poshtestgallery.com/packages/MicrosoftTeams>.  

## SYNOPSIS
Get all the channels for a team.

## SYNTAX

```
Get-TeamChannel -GroupId <String> [-MembershipType <String>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```
Get-TeamChannel -GroupId af55e84c-dc67-4e48-9005-86e0b07272f9
```

Get channels of the group.

### Example 2
```
Get-TeamChannel -GroupId af55e84c-dc67-4e48-9005-86e0b07272f9 -MembershipType Private
```

Get all private channels of the group.

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

### -MembershipType
Membership type of the channel to display, Standard or Private (available in private preview)

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
