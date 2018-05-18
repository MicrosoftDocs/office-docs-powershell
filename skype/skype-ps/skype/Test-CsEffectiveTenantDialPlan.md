---
external help file: 
title: Test-CsEffectiveTenantDialPlan
schema: 2.0.0
---

# Test-CsEffectiveTenantDialPlan

## SYNOPSIS
Use the `Test-CsEffectiveTenantDialPlan` cmdlet to test a tenant dial plan.

## SYNTAX

```
Test-CsEffectiveTenantDialPlan [-DialedNumber <Object>] [-Identity <Object>] [-BypassDualWrite <Object>]
 [-Confirm] [-Force] [-WhatIf] [-AsJob] [-EffectiveTenantDialPlanName <Object>] [-TenantScopeOnly]
 [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsEffectiveTenantDialPlan` cmdlet normalizes the dialed number by applying the normalization rules from the effective tenant dial plan that is returned for the specified user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsEffectiveTenantDialPlan -Identity vt1_user1 | Test-CsEffectiveTenantDialPlan -DialedNumber 14258828080

Test-CsEffectiveTenantDialPlan -DialedNumber 14258828080 -Identity 5d3ff00a-8d23-42d0-ac9e-32a2c518bc1c_Global_Vt1TenantDialPlan2
```

This example gets the Identity of a dial plan that is associated with a dialed number, and applies the retrieved tenant dial plan to normalize the dialed number.


## PARAMETERS

### -DialedNumber
The DialedNumber parameter is the phone number to be normalized with the effective tenant dial plan.

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

### -Identity
The Identity parameter is the effective tenant dial plan name in the form of TenantId_GlobalVoiceDialPlan_TenantDialPlan.

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

### -BypassDualWrite
PARAMVALUE: $true | $false

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

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed.

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

### -AsJob
{{Fill AsJob Description}}

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

### -EffectiveTenantDialPlanName
{{Fill EffectiveTenantDialPlanName Description}}

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

### -TenantScopeOnly
{{Fill TenantScopeOnly Description}}

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

