---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamseventspolicy
schema: 2.0.0
title: Get-CsTeamsEventsPolicy
---

# Get-CsTeamsEventsPolicy

## SYNOPSIS
Returns information about the Teams Events policy. Note that this policy is currently still in preview.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsEventsPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsEventsPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Returns information about the Teams Events policy. TeamsEventsPolicy is used to configure options for customizing Teams Events experiences.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsEventsPolicy
```

Returns information for all Teams Events policies available for use in the tenant.

### Example 2
```powershell
PS C:\> Get-CsTeamsEventsPolicy -Identity Global
```

Returns information for Teams Events policy with identity "Global".

## PARAMETERS

### -Filter
Enables using wildcards when specifying the policy (or policies) to be retrieved. Note that you cannot use both the Filter and the Identity parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier assigned to the Teams Events policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
