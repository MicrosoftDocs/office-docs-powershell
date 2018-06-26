---
external help file: 
applicable: Skype for Business Online
title: Set-CsTenantDialPlan
schema: 2.0.0
---

# Set-CsTenantDialPlan

## SYNOPSIS
Use the `Set-CsTenantDialPlan` cmdlet to modify an existing tenant dial plan.

## SYNTAX

```
Set-CsTenantDialPlan [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Description <Object>]
 [-ExternalAccessPrefix <Object>] [-Force] [-Instance <Object>] [-NormalizationRules <Object>]
 [-OptimizeDeviceDialing <Object>] [-SimpleName <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
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
$nr2 = Get-CsVoiceNormalizationRule -Identity Global/NR2

Set-CsTenantDialPlan -ExternalAccessPrefix "123" -Identity vt1tenantDialPlan9 -NormalizationRules @{Add=$nr2}
```

This example updates the vt1tenantDialPlan9 tenant dial plan to have an external access prefix of 123 and use the Global/NR2 normalization rules.


## PARAMETERS

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
Maximum characters is 512.

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

### -ExternalAccessPrefix
The ExternalAccessPrefix parameter is a number (or set of numbers) that designates the call as external to the organization.
(For example, to tenant-dial an outside line, first dial 9). This prefix is ignored by the normalization rules, although these rules will be applied to the rest of the number.
The OptimizeDeviceDialing parameter must be set to True for this value to take effect.

The value of this parameter must match the regular expression \[0-9\]{1,4}.
This means it must be a value one to four digits in length, with each digit being a number 0 through 9.

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
The Identity parameter is a unique identifier that designates the scope, or for per-user plans a name, to identify the tenant dial plan to modify.
For example, a site Identity is in the format site:\<sitename\>, where sitename is the name of the site.
A tenant dial plan at the service scope is a Registrar or PSTN gateway service, where the Identity value is formatted in this way: Registrar:Redmond.litwareinc.com.
A per-user Identity is a unique string value.

```yaml
Type: Object
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

### -NormalizationRules
The NormalizationRules parameter is a list of normalization rules that are applied to this dial plan.
Although this list and these rules can be created directly by using this cmdlet, we recommend that you create the normalization rules by the `New-CsVoiceNormalizationRule` (https://technet.microsoft.com/en-us/library/gg398240.aspx) cmdlet, which creates the rule and assigns it to the specified tenant dial plan.

The number of normalization rules cannot exceed 25 per TenantDialPlan.

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

### -OptimizeDeviceDialing
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

### -SimpleName
The SimpleName parameter is a display name for the tenant dial plan.
This name must be unique among all tenant dial plans within the Skype for Business Server deployment.

This string can be up to 256 characters long.
Valid characters are alphabetic or numeric characters, hyphen (-), dot (.) and parentheses (()).

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

