---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsDialPlan

## SYNOPSIS
Modifies an existing dial plan.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsDialPlan [[-Identity] <XdsIdentity>] [-Description <String>] [-DialinConferencingRegion <String>]
 [-ExternalAccessPrefix <String>] [-NormalizationRules <PSListModifier>] [-OptimizeDeviceDialing <Boolean>]
 [-SimpleName <String>] [-State <String>] [-City <String>] [-CountryCode <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsDialPlan [-Instance <PSObject>] [-Description <String>] [-DialinConferencingRegion <String>]
 [-ExternalAccessPrefix <String>] [-NormalizationRules <PSListModifier>] [-OptimizeDeviceDialing <Boolean>]
 [-SimpleName <String>] [-State <String>] [-City <String>] [-CountryCode <String>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet modifies an existing dial plan (also known as a location profile).
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Dial plans are also used by the Conferencing Attendant application for dial-in conferencing.
A dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

Note: While normalization rules of a dial plan can be modified with this cmdlet, it is recommended that the `New-CsVoiceNormalizationRule` cmdlet, the `Set-CsVoiceNormalizationRule` cmdlet, or the `Remove-CsVoiceNormalizationRule` cmdlet be used instead.
The changes made with those cmdlets will be reflected in the corresponding dial plan.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsDialPlan -Identity RedmondDialPlan -Description "This plan is for Redmond-based users only."
```

In Example 1, the `Set-CsDialPlan` cmdlet is used to modify the dial plan with the Identity RedmondDialPlan.
In this case, the only property being modified is the Description; this modification is performed by specifying the Description parameter followed by the text for the new description.


### -------------------------- Example 2 --------------------------
```
Get-CsDialPlan | Set-CsDialPlan -ExternalAccessPrefix 8
```

In this example, the `Set-CsDialPlan` cmdlet is used to change the value of the ExternalAccessPrefix property for all the dial plans configured for use in the organization.
To do this, the command first uses the `Get-CsDialPlan` cmdlet to return a collection of all the dial plans in the organization.
That collection is then piped to the `Set-CsDialPlan` cmdlet, which assigns the value 8 to the ExternalAccessPrefix property for each profile in the collection.


## PARAMETERS

### -Identity
The unique identifier designating the scope, or, for per-user plans, a name, to identify the dial plan you want to modify.
For example, a site Identity will be in the format site:\<sitename\>, where sitename is the name of the site.
A dial plan at the service scope will be a Registrar or PSTN gateway service, where the Identity value is formatted like this: Registrar:Redmond.litwareinc.com.
A per-user Identity will be a unique string value.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
You can retrieve this object reference by calling the `Get-CsDialPlan` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
A description of this dial plan--what it's for, what type of user it applies to, or any other information that will be helpful in identifying the purpose of the dial plan.

Maximum characters: 512

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialinConferencingRegion
The name of the region associated with this dial plan.
Specify a value for this parameter if the dial plan will be used for dial-in conferencing.
This allows the correct access number to be assigned when the conference organizer sets up the conference.
Available regions can be retrieved by calling the `Get-CsNetworkRegion` cmdlet.

Maximum characters: 512

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAccessPrefix
A number (or set of numbers) that designates the call as external to the organization.
(For example, to dial an outside line, first press 9.) This prefix will be ignored by the normalization rules, although these rules will be applied to the rest of the number.

The OptimizeDeviceDialing parameter must be set to True for this value to take effect.

The value of this parameter must match the regular expression \[0-9\]{1,4}.
This means it must be a value one to four digits in length, each digit being a number 0 through 9.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NormalizationRules
A list of normalization rules that are applied to this dial plan.

While this list and these rules can be modified directly with this cmdlet, it is recommended that you create normalization rules with the `New-CsVoiceNormalizationRule` cmdlet, which creates the rule and assigns it to the specified dial plan and modify them with the `Set-CsVoiceNormalizationRule` cmdlet.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OptimizeDeviceDialing
Setting this parameter to True will apply the prefix in the ExternalAccessPrefix parameter to calls made outside the organization.
This value can be set to True only if a value has been specified for the ExternalAccessPrefix parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleName
A friendly name for the dial plan.
Dial plan names must be unique among all dial plans within a Skype for Business Server deployment.

This string can be up to 256 characters long.
Valid characters are alphabetic or numeric characters, hyphen (-), dot (.), plus (+), underscore (_) and parentheses (()).


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -State
This parameter is not used with this cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City
This parameter is not used with this cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryCode
This parameter is not used with this cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile object.
Accepts pipelined input of dial plan objects.

## OUTPUTS

###  
The `Set-CsDialPlan` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile object.

## NOTES

## RELATED LINKS

[New-CsDialPlan]()

[Remove-CsDialPlan]()

[Get-CsDialPlan]()

[Grant-CsDialPlan]()

[Test-CsDialPlan]()

[New-CsVoiceNormalizationRule]()

[Set-CsVoiceNormalizationRule]()

[Remove-CsVoiceNormalizationRule]()

[Get-CsVoiceNormalizationRule]()
