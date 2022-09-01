---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/new-csteamseventspolicy
schema: 2.0.0
---

# New-CsTeamsEventsPolicy

## SYNOPSIS
This cmdlet allows you to create a new TeamsEventsPolicy instance and set its properties. Note that this policy is currently still in preview.


## SYNTAX

```
New-CsTeamsEventsPolicy [-Identity] <String> [-AllowWebinars <String>] [-Description <String>]
 [-EventAccessType <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsEventsPolicy is used to configure options for customizing Teams Events experiences.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsEventsPolicy -Identity DisablePublicWebinars -AllowWebinars Enabled -EventAccessType EveryoneInCompanyExcludingGuests
```

The command shown in Example 1 creates a new per-user Teams Events policy with the Identity DisablePublicWebinars. This policy disables a user from creating public webinars.

### Example 2
```powershell
PS C:\> New-CsTeamsEventsPolicy -Identity DisableWebinars -AllowWebinars Disabled
```

The command shown in Example 2 creates a new per-user Teams Events policy with the Identity DisableWebinars. This policy disables a user from creating webinars.

## PARAMETERS

### -AllowWebinars
This setting governs if a user can create webinars using Teams Events. Set this to **Disabled** to disable a user from creating webinars.


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventAccessType
This setting governs which users can access the event registration page or the event site to register. It also governs which user type is allowed to join the session/s in the event. 
Set this to EveryoneInCompanyExcludingGuests to disable a user from creating public webinars

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Everyone
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Enables administrators to provide explanatory text to accompany a Teams Events policy.


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

### -Identity
Unique identifier assigned to the Teams Events policy.


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
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
