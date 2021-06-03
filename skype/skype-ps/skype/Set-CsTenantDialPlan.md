---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/set-cstenantdialplan
applicable: Skype for Business Online
title: Set-CsTenantDialPlan
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTenantDialPlan

## SYNOPSIS
Use the `Set-CsTenantDialPlan` cmdlet to modify an existing tenant dial plan.

## SYNTAX

### Identity (Default)
```
Set-CsTenantDialPlan [-Tenant <Guid>] [-Description <String>] [-NormalizationRules <List>]
 [-ExternalAccessPrefix <String>] [-SimpleName <String>] [-OptimizeDeviceDialing <Boolean>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTenantDialPlan [-Tenant <Guid>] [-Description <String>] [-NormalizationRules <List>]
 [-ExternalAccessPrefix <String>] [-SimpleName <String>] [-OptimizeDeviceDialing <Boolean>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsTenantDialPlan` cmdlet modifies an existing tenant dial plan.
Tenant dial plans provide required information to let Enterprise Voice users make telephone calls.
The Conferencing Attendant application also uses tenant dial plans for dial-in conferencing.
A tenant dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

Although normalization rules of a tenant dial plan can be added by using this cmdlet, it is recommended that you use the `New-CsVoiceNormalizationRule` (https://technet.microsoft.com/en-us/library/gg398240.aspx) cmdlet instead.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsTenantDialPlan -ExternalAccessPrefix "123" -Identity vt1tenantDialPlan9
```

This example updates the vt1tenantDialPlan9 tenant dial plan to use an external access prefix of 123.


### -------------------------- Example 2 --------------------------
```
$nr2 = Get-CsVoiceNormalizationRule -Identity "US/US Long Distance"

Set-CsTenantDialPlan -ExternalAccessPrefix "123" -Identity vt1tenantDialPlan9 -NormalizationRules @{Add=$nr2}
```

This example updates the vt1tenantDialPlan9 tenant dial plan to have an external access prefix of 123 and use the US/US Long Distance normalization rules.


## PARAMETERS

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
The Description parameter describes the tenant dial plan - what it's for, what type of user it applies to or any other information that helps to identify the purpose of the tenant dial plan.
Maximum characters is 1040.

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
(For example, to tenant-dial an outside line, first dial 9). This prefix is ignored by the normalization rules, although these rules will be applied to the rest of the number.
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

### -Identity
The Identity parameter is a unique identifier that designates the name of the tenant dial plan to modify.

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

### -Instance
The Instance parameter allows you to pass a reference to an object to the cmdlet, rather than set individual parameter values.
You can retrieve this object reference by calling the `Get-CsTenantDialPlan` cmdlet.

```yaml
Type: PSObject
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
Although this list and these rules can be created directly by using this cmdlet, we recommend that you create the normalization rules by the `New-CsVoiceNormalizationRule` (https://technet.microsoft.com/en-us/library/gg398240.aspx) cmdlet, which creates the rule and assigns it to the specified tenant dial plan.

The number of normalization rules cannot exceed 50 per TenantDialPlan.

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
Type: Guid
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
The WhatIf parameter describes what would happen if you executed the command, without actually executing the command.

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

