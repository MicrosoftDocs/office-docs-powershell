---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Get-TeamChannelUser (available in private preview)

## SYNOPSIS
Returns users of a channel.

## SYNTAX

```
Get-TeamChannelUser -GroupId <String> -DisplayName <String> [-Role <String>] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### Example 1
```
Get-TeamChannelUser -GroupId 2f162b0e-36d2-4e15-8ba3-ba229cecdccf -DisplayName "Engineering" -Role Owner
```

Get owners of channel with display name as "Engineering"

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

### -DisplayName
Display name of the channel

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
