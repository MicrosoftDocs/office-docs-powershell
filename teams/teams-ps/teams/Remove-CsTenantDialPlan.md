---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-cstenantdialplan
applicable: Microsoft Teams
title: Remove-CsTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Remove-CsTenantDialPlan

## SYNOPSIS
Use the `Remove-CsTenantDialPlan` cmdlet to remove a tenant dial plan.

## SYNTAX

```
Remove-CsTenantDialPlan [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Remove-CsTenantDialPlan` cmdlet removes an existing tenant dial plan (also known as a location profile).
Tenant dial plans provide required information to allow Enterprise Voice users to make telephone calls.
The Conferencing Attendant application also uses tenant dial plans for dial-in conferencing.
A tenant dial plan determines such things as which normalization rules are applied.

Removing a tenant dial plan also removes any associated normalization rules.
If no tenant dial plan is assigned to an organization, the Global dial plan is used.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsTenantDialPlan -Identity Vt1TenantDialPlan2
```

This example removes the Vt1TenantDialPlan2.

## PARAMETERS

### -Identity
The Identity parameter is the unique identifier of the tenant dial plan to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm parameter prompts you for confirmation before the command is executed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf parameter describes what would happen if you executed the command, without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Microsoft Teams

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
The ExternalAccessPrefix and OptimizeDeviceDialing parameters have been removed from New-CsTenantDialPlan and Set-CsTenantDialPlan cmdlet since they are no longer used. External access dialing is now handled implicitly using normalization rules of the dial plans.
The Get-CsTenantDialPlan will still show the external access prefix in the form of a normalization rule of the dial plan.

## RELATED LINKS

[Grant-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/grant-cstenantdialplan)

[New-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/new-cstenantdialplan)

[Set-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/set-cstenantdialplan)

[Get-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/get-cstenantdialplan)
