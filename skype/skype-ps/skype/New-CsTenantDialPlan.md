---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/new-cstenantdialplan
applicable: Skype for Business Online
title: New-CsTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsTenantDialPlan

## SYNOPSIS
Use the `New-CsTenantDialPlan` cmdlet to create a new tenant dial plan.

## SYNTAX

```
New-CsTenantDialPlan [-Tenant <Guid>] [-Description <String>] [-NormalizationRules <List>]
 [-ExternalAccessPrefix <String>] [-SimpleName <String>] [-OptimizeDeviceDialing <Boolean>]
 [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can use this cmdlet to create a new tenant dial plan.
Tenant dial plans provide required information to let Enterprise Voice users make telephone calls.
The Conferencing Attendant application also uses tenant dial plans for dial-in conferencing.
A tenant dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

You can add new normalization rules to a tenant dial plan by calling the `New-CsVoiceNormalizationRule` (https://technet.microsoft.com/en-us/library/gg398240.aspx) cmdlet.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsTenantDialPlan -Identity vt1tenantDialPlan9
```

This example creates a tenant dial plan that has an Identity of vt1tenantDialPlan9.


### -------------------------- Example 2 --------------------------
```
$nr2 = New-CsVoiceNormalizationRule -Identity Global/NR2 -Description "TestNR1" -Pattern '^(d{11})$' -Translation '+1' -InMemory

New-CsTenantDialPlan -Identity vt1tenantDialPlan91 -NormalizationRules @{Add=$nr2}
```

This example creates a new normalization rule and then applies that rule to a new tenant dial plan.


## PARAMETERS

### -Identity
The Identity parameter is a unique identifier that designates the name of the tenant dial plan.
Identity is an alphanumeric string that cannot exceed 49 characters.
Valid characters are alphabetic or numeric characters, hyphen (-) and dot (.).
The value should not begin with a (.)

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
The Description parameter describes the tenant dial plan - what it's for, what type of user it applies to and any other information that helps to identify the purpose of the tenant dial plan.
Maximum characters: 1040.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAccessPrefix
The ExternalAccessPrefix parameter is a number (or set of numbers) that designates the call as external to the organization.
(For example, to tenant-dial an outside line, first press 9.) This prefix is ignored by the normalization rules, although these rules are applied to the remainder of the number.

The OptimizeDeviceDialing parameter must be set to True for this value to take effect.
The value of this parameter must be no longer than 4 characters long and can contain only digits, "#" or a "*".

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
The InMemory parameter creates an object reference without actually committing the object as a permanent change.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NormalizationRules
The NormalizationRules parameter is a list of normalization rules that are applied to this dial plan.
Although this list and these rules can be created directly by using this cmdlet, we recommend that you create the normalization rules by the [New-CsVoiceNormalizationRule](New-CsVoiceNormalizationRule.md) cmdlet, which creates the rule and then assign it to the specified tenant dial plan using [Set-CsTenantDialPlan](Set-CsTenantDialPlan.md) cmdlet.

Each time a new tenant dial plan is created, a new voice normalization rule with default settings is also created for that site, service, or per-user tenant dial plan.
By default, the Identity of the new voice normalization rule is the tenant dial plan Identity followed by a slash and then followed by the name Prefix All.
(For example, TAG:Redmond/Prefix All.) The number of normalization rules cannot exceed 50 per TenantDialPlan.

You can create a new normalization rule by calling the [New-CsVoiceNormalizationRule](New-CsVoiceNormalizationRule.md) cmdlet.

```yaml
Type: List
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OptimizeDeviceDialing
Use this parameter to determine the effect of ExternalAccessPrefix parameter.
If set to True, the ExternalAccessPrefix parameter takes effect.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleName
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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Specifies the globally unique identifier (GUID) of your Skype for Business Online tenant account.
For example: `-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`.
You can find your tenant ID by running this command: `Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch causes the command to simulate its results.
By using this switch, you can view what changes would occur without having to commit those changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

