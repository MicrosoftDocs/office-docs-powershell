---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamseventspolicy
schema: 2.0.0
---

# Set-CsTeamsEventsPolicy

## SYNOPSIS
This cmdlet allows you to configure options for customizing Teams events experiences. Note that this policy is currently still in preview.

## SYNTAX

```
Set-CsTeamsEventsPolicy [-AllowWebinars <String>] [-Description <String>] [-EventAccessType <String>]
 [[-Identity] <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
User-level policy for tenant admin to configure options for customizing Teams events experiences. Use this cmdlet to update an existing policy.

## EXAMPLES

### Example 1
```powershell
Set-CsTeamsEventsPolicy -Identity Global -AllowWebinars Disabled
```

The command shown in Example 1 sets the value of the Default (Global) Events Policy in the organization to disable webinars, and leaves all other parameters the same.

## PARAMETERS

### -AllowWebinars
This setting governs if a user can create webinars using Teams Events.
Possible values are:
 - **Enabled**: Enables creating webinars.
 - **Disabled**: Disables creating webinars.


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

### -AllowTownhalls
This setting governs if a user can create town halls using Teams Events.
Possible values are:
 - **Enabled**: Enables creating town halls.
 - **Disabled**: Disables creating town halls.


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

### -EventAccessType
This setting governs which users can access the event registration page or the event site to register. It also governs which user type is allowed to join the session/s in the event. 
Possible values are:
 - **Everyone**: Enables creating events to allow in-tenant, guests, federated, and anonymous (external to the tenant) users to register and join the event.
 - **EveryoneInCompanyExcludingGuests**: Enables creating events to allow only in-tenant users to register and join the event.


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

Required: False
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
