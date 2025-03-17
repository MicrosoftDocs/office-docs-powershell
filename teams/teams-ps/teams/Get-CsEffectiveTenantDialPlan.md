---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-cseffectivetenantdialplan
applicable: Microsoft Teams
title: Get-CsEffectiveTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
ms.reviewer:
---

# Get-CsEffectiveTenantDialPlan

## SYNOPSIS
Use the Get-CsEffectiveTenantDialPlan cmdlet to retrieve an effective tenant dial plan.

## SYNTAX

```
Get-CsEffectiveTenantDialPlan [-Identity] <UserIdParameter> [-OU <OUIdParameter>] [-ResultSize <Int32>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsEffectiveTenantDialPlan cmdlet returns information about the effective tenant dial plan in an organization.
The returned effective Tenant Dial Plan contains the EffectiveTenantDialPlanName and the Normalization rules that are effective for the user while using
the EnterpriseVoice features. The EffectiveTenantDialPlanName is in the form TenantGUID_GlobalVoiceDialPlan_TenantDialPlan.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsEffectiveTenantDialPlan -Identity Vt1_User1
```

This example gets the effective tenant dial plan for the Vt1_User1.

## PARAMETERS

### -Identity
The Identity parameter is the unique identifier of the user for whom to retrieve the effective tenant dial plan.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
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
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
**Note:** This parameter is not supported in Teams PowerShell Module version 3.0.0 or later.

The OrganizationalUnit parameter filters the results based on the object's location in Active Directory.
Only objects that exist in the specified location are returned.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
**Note:** This parameter is not supported in Teams PowerShell Module version 3.0.0 or later.

Specifies the number of records returned by the cmdlet.
The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0, the command will run, but no data will be returned.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

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
applicable: Microsoft Teams

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
