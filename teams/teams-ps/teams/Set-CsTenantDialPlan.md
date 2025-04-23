---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-cstenantdialplan
applicable: Microsoft Teams
title: Set-CsTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Set-CsTenantDialPlan

## SYNOPSIS
Use the `Set-CsTenantDialPlan` cmdlet to modify an existing tenant dial plan.

## SYNTAX

### Identity (Default)
```
Set-CsTenantDialPlan [[-Identity] <string>] [-Description <string>] [-NormalizationRules <Object>]
 [-SimpleName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsTenantDialPlan` cmdlet modifies an existing tenant dial plan. A tenant dial plan determines such things as which normalization rules are applied. Tenant dial plans provide required information to let Enterprise Voice users make telephone calls.
The Conferencing Attendant application also uses tenant dial plans for dial-in conferencing.

## EXAMPLES

### Example 1
```
$nr2 = Get-CsVoiceNormalizationRule -Identity "US/US Long Distance"
Set-CsTenantDialPlan -Identity vt1tenantDialPlan9 -NormalizationRules @{Add=$nr2}
```

This example updates the vt1tenantDialPlan9 tenant dial plan to use the US/US Long Distance normalization rules.

### Example 2
```
$DP = Get-CsTenantDialPlan -Identity Global
$NR = $DP.NormalizationRules | Where Name -eq "RedmondFourDigit")
$NR.Name = "RedmondRule"
Set-CsTenantDialPlan -Identity Global -NormalizationRules $DP.NormalizationRules
```

This example changes the name of a normalization rule. Keep in mind that changing the name also changes the name portion of the Identity.
The `Set-CsVoiceNormalizationRule` cmdlet doesn't have a Name parameter, so in order to change the name, we first call the `Get-CsTenantDialPlan` cmdlet to retrieve the Dial Plan with
the Identity Global and assign the returned object to the variable $DP. Then we filter the NormalizationRules Object for the rule RedmondFourDigit and assign the returned object to
the variable $NR. We then assign the string RedmondRule to the Name property of the object. Finally, we pass the variable back to the NormalizationRules parameter of the
`Set-CsTenantDialPlan` cmdlet to make the change permanent.

### Example 3
```
$DP = Get-CsTenantDialPlan -Identity Global
$NR = $DP.NormalizationRules | Where Name -eq "RedmondFourDigit")
$DP.NormalizationRules.Remove($NR)
Set-CsTenantDialPlan -Identity Global -NormalizationRules $DP.NormalizationRules
```

This example removes a normalization rule. We utilize the same functionality as for Example 3 to manipulate the Normalization Rule Object and update it with the
`Set-CsTenantDialPlan` cmdlet. We first call the `Get-CsTenantDialPlan` cmdlet to retrieve the Dial Plan with the Identity Global and assign the returned object to the variable $DP.
Then we filter the NormalizationRules Object for the rule RedmondFourDigit and assign it to the variable $NR. Next, we remove this Object with the Remove Method from $DP.NormalizationRules.
Finally, we pass the variable back to the NormalizationRules parameter of the `Set-CsTenantDialPlan` cmdlet to make the change permanent.

## PARAMETERS

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

### -Description
The Description parameter describes the tenant dial plan - what it's for, what type of user it applies to or any other information that helps to identify the purpose of the tenant dial plan.
Maximum characters is 1040.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter is a unique identifier that designates the name of the tenant dial plan to modify.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NormalizationRules
The NormalizationRules parameter is a list of normalization rules that are applied to this dial plan.
Although this list and these rules can be created directly by using this cmdlet, we recommend that you create the normalization rules by the [New-CsVoiceNormalizationRule](https://learn.microsoft.com/powershell/module/teams/new-csvoicenormalizationrule) cmdlet, which creates the rule and assigns it to the specified tenant dial plan.

The number of normalization rules cannot exceed 50 per TenantDialPlan.

```yaml
Type: List
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleName
The SimpleName parameter is a display name for the tenant dial plan. This name must be unique among all tenant dial plans.

This string can be up to 49 characters long. Valid characters are alphabetic or numeric characters, hyphen (-), dot (.), and parentheses (()).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
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

[Get-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/get-cstenantdialplan)

[Remove-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/teams/remove-cstenantdialplan)
