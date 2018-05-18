---
external help file: 
title: New-CsTenantDialPlan
schema: 2.0.0
---

# New-CsTenantDialPlan

## SYNOPSIS
Use the `New-CsTenantDialPlan` cmdlet to create a new tenant dial plan.

## SYNTAX

```
New-CsTenantDialPlan [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Description <Object>]
 [-ExternalAccessPrefix <Object>] [-Force] [-InMemory] [-NormalizationRules <Object>]
 [-OptimizeDeviceDialing <Object>] [-SimpleName <Object>] [-Tenant <Object>] [-WhatIf] [-AsJob]
 [<CommonParameters>]
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
The Description parameter describes the tenant dial plan - what it's for, what type of user it applies to and any other information that helps to identify the purpose of the tenant dial plan.
Maximum characters: 512.

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
(For example, to tenant-dial an outside line, first press 9.) This prefix is ignored by the normalization rules, although these rules are applied to the remainder of the number.

The OptimizeDeviceDialing parameter must be set to True for this value to take effect.
This parameter must match the regular expression \[0-9\]{1,4}: that is, it must be a value 0 through 9 and one to four digits in length.
The default value is 9.

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
Although this list and these rules can be created directly by using this cmdlet, we recommend that you create the normalization rules by the `New-CsVoiceNormalizationRule` (https://technet.microsoft.com/en-us/library/gg398240.aspx) cmdlet, which creates the rule and assigns it to the specified tenant dial plan.

Each time a new tenant dial plan is created, a new voice normalization rule with default settings is also created for that site, service, or per-user tenant dial plan.
By default, the Identity of the new voice normalization rule is the tenant dial plan Identity followed by a slash and then followed by the name Prefix All.
(For example, TAG:Redmond/Prefix All.) The number of normalization rules cannot exceed 25 per TenantDialPlan.

You can create a new normalization rule by calling the `New-CsVoiceNormalizationRule` (https://technet.microsoft.com/en-us/library/gg398240.aspx) cmdlet.

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

This parameter must contain a value.
However, if you don't provide a value, a default value will be supplied.
The default value for a Global tenant dial plan is Prefix All.
The default value for a site-level tenant dial plan is the name of the site.
The default value for a service is the name of the service (Registrar or PSTN gateway) followed by an underscore, followed by the service fully qualified domain name (FQDN).
For example: Registrar_pool0.litwareinc.com.
The default value for a per-user tenant dial plan is the Identity of the tenant dial plan.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

