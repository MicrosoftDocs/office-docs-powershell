---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-cstenantdialplan
schema: 2.0.0
title: New-CsTenantDialPlan
---

# New-CsTenantDialPlan

## SYNOPSIS
Use the `New-CsTenantDialPlan` cmdlet to create a new tenant dial plan.

## SYNTAX

```
New-CsTenantDialPlan [-Identity] <string> [-Description <string>] [-NormalizationRules <Object>]
 [-SimpleName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to create a new tenant dial plan. Tenant dial plans provide required information to let Enterprise Voice users make telephone calls.
The Conferencing Attendant application also uses tenant dial plans for dial-in conferencing.
A tenant dial plan determines such things as which normalization rules are applied.

You can add new normalization rules to a tenant dial plan by calling the [New-CsVoiceNormalizationRule](https://learn.microsoft.com/powershell/module/microsoftteams/new-csvoicenormalizationrule) cmdlet.

## EXAMPLES

### Example 1
```
New-CsTenantDialPlan -Identity vt1tenantDialPlan9
```

This example creates a tenant dial plan that has an Identity of vt1tenantDialPlan9.

### Example 2
```
$nr2 = New-CsVoiceNormalizationRule -Identity Global/NR2 -Description "TestNR1" -Pattern '^(d{11})$' -Translation '+1' -InMemory
New-CsTenantDialPlan -Identity vt1tenantDialPlan91 -NormalizationRules @{Add=$nr2}
```

This example creates a new normalization rule and then applies that rule to a new tenant dial plan.

## PARAMETERS

### -Confirm

> Applicable: Microsoft Teams

The Confirm switch causes the command to pause processing and requires confirmation to proceed.

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

> Applicable: Microsoft Teams

The Description parameter describes the tenant dial plan - what it's for, what type of user it applies to and any other information that helps to identify the purpose of the tenant dial plan.
Maximum characters: 1040.

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

> Applicable: Microsoft Teams

The Identity parameter is a unique identifier that designates the name of the tenant dial plan.
Identity is an alphanumeric string that cannot exceed 49 characters.
Valid characters are alphabetic or numeric characters, hyphen (-) and dot (.).
The value should not begin with a (.)

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

### -NormalizationRules

> Applicable: Microsoft Teams

The NormalizationRules parameter is a list of normalization rules that are applied to this dial plan.
Although this list and these rules can be created directly by using this cmdlet, we recommend that you create the normalization rules by the [New-CsVoiceNormalizationRule](https://learn.microsoft.com/powershell/module/microsoftteams/new-csvoicenormalizationrule) cmdlet, which creates the rule and then assign it to the specified tenant dial plan using [Set-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantdialplan) cmdlet.

Each time a new tenant dial plan is created, a new voice normalization rule with default settings is also created for that site, service, or per-user tenant dial plan.
By default, the Identity of the new voice normalization rule is the tenant dial plan Identity followed by a slash and then followed by the name Prefix All.
(For example, TAG:Redmond/Prefix All.) The number of normalization rules cannot exceed 50 per TenantDialPlan.

You can create a new normalization rule by calling the [New-CsVoiceNormalizationRule](https://learn.microsoft.com/powershell/module/microsoftteams/new-csvoicenormalizationrule) cmdlet.

```yaml
Type: List
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleName

> Applicable: Microsoft Teams

The SimpleName parameter is a display name for the tenant dial plan.
This name must be unique among all tenant dial plans.

This string can be up to 49 characters long.
Valid characters are alphabetic or numeric characters, hyphen (-), dot (.) and parentheses (()).

This parameter must contain a value.
However, if you don't provide a value, a default value matching the Identity of the tenant dial plan will be supplied.

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

### -WhatIf

> Applicable: Microsoft Teams

The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

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

## OUTPUTS

## NOTES
The ExternalAccessPrefix and OptimizeDeviceDialing parameters have been removed from New-CsTenantDialPlan and Set-CsTenantDialPlan cmdlet since they are no longer used. External access dialing is now handled implicitly using normalization rules of the dial plans.
The Get-CsTenantDialPlan will still show the external access prefix in the form of a normalization rule of the dial plan.

## RELATED LINKS

[Grant-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/microsoftteams/grant-cstenantdialplan)

[Get-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/microsoftteams/get-cstenantdialplan)

[Set-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantdialplan)

[Remove-CsTenantDialPlan](https://learn.microsoft.com/powershell/module/microsoftteams/remove-cstenantdialplan)
