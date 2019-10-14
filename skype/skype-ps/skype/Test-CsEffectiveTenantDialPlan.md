---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
applicable: Skype for Business Online
title: Test-CsEffectiveTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Test-CsEffectiveTenantDialPlan

## SYNOPSIS
Use the `Test-CsEffectiveTenantDialPlan` cmdlet to test a tenant dial plan.

## SYNTAX

### Identity
```
Test-CsEffectiveTenantDialPlan [-DialedNumber <PhoneNumber>] [-Identity <UserIdParameter>] [-TenantScopeOnly]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### EffectiveTDPName
```
Test-CsEffectiveTenantDialPlan -DialedNumber <PhoneNumber> [-EffectiveTenantDialPlanName <String>]
 [-TenantScopeOnly] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Test-CsEffectiveTenantDialPlan` cmdlet normalizes the dialed number by applying the normalization rules from the effective tenant dial plan that is returned for the specified user.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsEffectiveTenantDialPlan -Identity adelev | Test-CsEffectiveTenantDialPlan -DialedNumber 14258828080
```

This example gets the Identity of a dial plan that is associated with the identity of an user, and applies the retrieved tenant dial plan to normalize the dialed number.


### -------------------------- Example 2 --------------------------
```
Test-CsEffectiveTenantDialPlan -DialedNumber 14258828080 -Identity adelev@contoso.onmicrosoft.com
```

This example tests the given dialed number against a specific identity.


## PARAMETERS

### -DialedNumber
The DialedNumber parameter is the phone number to be normalized with the effective tenant dial plan.

```yaml
Type: PhoneNumber
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
Indicates the identity of the user account to be tested against. The user's SIP address, the user's user principal name (UPN) or the user's display name can be specified.

```yaml
Type: UserIdParameter
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

### -EffectiveTenantDialPlanName
The EffectiveTenantDialPlanName parameter is the effective tenant dial plan name in the form of TenantId_TenantDialPlan_GlobalVoiceDialPlan.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

