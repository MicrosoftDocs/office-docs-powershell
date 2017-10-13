---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsDialPlan
schema: 2.0.0
---

# New-CsDialPlan

## SYNOPSIS

Creates a new dial plan.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsDialPlan [-Identity] <XdsIdentity> [-Description <String>] [-DialinConferencingRegion <String>]
 [-ExternalAccessPrefix <String>] [-NormalizationRules <PSListModifier>] [-OptimizeDeviceDialing <Boolean>]
 [-SimpleName <String>] [-State <String>] [-City <String>] [-CountryCode <String>] [-Force] [-InMemory]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet creates a new dial plan (also known as a location profile).
Dial plans provide information required to enable Enterprise Voice users to make telephone calls.
Dial plans are also used by the Conferencing Attendant application for dial-in conferencing.
A dial plan determines such things as which normalization rules are applied and whether a prefix must be dialed for external calls.

Creating a dial plan automatically creates a default voice normalization rule.
Normalization rules can be modified by calling the Set-CsVoiceNormalizationRule cmdlet.
New normalization rules can be added to a dial plan by calling the New-CsVoiceNormalizationRule cmdlet.



## EXAMPLES


### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsDialPlan -Identity RedmondDialPlan
```

The command shown in Example 1 creates a new dial plan with the Identity RedmondDialPlan.
(The absence of a scope in the Identity value indicates that this is a per-user policy.
Dial plans created at the per-user scope can be directly assigned to users and groups.) All other properties of the dial plan will be assigned default values.


### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CsDialPlan -Identity site:Redmond -SimpleName RedmondSiteDialPlan

New-CsVoiceNormalizationRule -Identity "site:Redmond/SeattlePrefix" -Pattern "^9(\d*){1,5}$" -Translation "+1206$1"
```

The commands shown in Example 2 create a new dial plan with the Identity site:Redmond (meaning the dial plan applies to all users on the Redmond site who do not have a per-user or service-level dial plan assigned to them) and the SimpleName RedmondSiteDialPlan.
The next line in the example then creates a new normalization rule associated with that plan.
A default normalization rule is created for a dial plan, but this is created mostly as a placeholder--the values are of limited use.
So after calling the New-CsDialPlan cmdlet to create a new dial plan, you should call the New-CsVoiceNormalizationRule cmdlet to create a named rule that is functional for your organization.
That's exactly what line 2 of this example does: it calls the New-CsVoiceNormalizationRule cmdlet and creates a rule for the Redmond site with the name SeattlePrefix and specifying the Pattern and Translation properties for the rule.
No further steps need to be taken to modify the dial plan; the changes to the normalization rule are automatically applied to the dial plan with the identity matching that of the normalization rule.
(The site:Redmond portion of the Identity matches the dial plan Identity; SeattlePrefix is the name of the normalization rule.
Multiple normalization rules can be applied to one dial plan, so each normalization rule needs a unique name within a given scope.)



### -------------------------- EXAMPLE 3 -------------------------- 
```
New-CsDialPlan -Identity RedmondDialPlan -Description "Dial plan for Redmond users"
```

The command shown in Example 3 creates a new dial plan with the Identity RedmondDialPlan and specifies a Description to explain what the dial plan is for.
(Dial plans created at the per-user scope can be directly assigned to users and groups.) The default values will be assigned for all other parameters.



## PARAMETERS

### -Identity
A unique identifier designating the scope and name (site), the service role and FQDN, or the name (per user) to identify the dial plan.
For example, a site Identity would be entered in the format site:\<sitename\>, where sitename is the name of the site.
A dial plan at the service scope must be a Registrar or PSTN gateway service, where the Identity value is formatted like this: Registrar:Redmond.litwareinc.com.
A per-user Identity would be entered simply as a unique string value.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
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
Available regions can be retrieved by calling the Get-CsNetworkRegion cmdlet.

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

This parameter must match the regular expression \[0-9\]{1,4}.
This means it must be a value 0 through 9, one to four digits in length.

Default: 9

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

While this list and these rules can be created directly with this cmdlet, we recommend that you create the normalization rules with the New-CsVoiceNormalizationRule cmdlet, which creates the rule and assigns it to the specified dial plan.

Each time a new dial plan is created, a new voice normalization rule with default settings is also created for that site, service, or per-user dial plan.
By default the Identity of the new voice normalization rule is the dial plan Identity followed by a slash followed by the name Prefix All.
For example, site:Redmond/Prefix All.

Default: {Description=;Pattern=^(\d11)$;Translation=+$1;Name=Prefix All;IsInternalExtension=False } Note: This default is only a placeholder.
For the dial plan to be useful, you should either modify the normalization rule created by the dial plan or create a new rule for the site, service, or user.
You can create a new normalization rule by calling the New-CsVoiceNormalizationRule cmdlet; modify a normalization rule by calling the Set-CsVoiceNormalizationRule cmdlet.



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

Default: False

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

A display name for the dial plan.
This name must be unique among all dial plans within the Skype for Business Server deployment.

This string can be up to 256 characters long.
Valid characters are alphabetic or numeric characters, hyphen (-), dot (.), plus (+), underscore (_), and parentheses (()).

This parameter must contain a value.
However, if you don't provide a value in the call to the New-CsDialPlan cmdlet, a default value will be supplied.
The default value for a Global dial plan is Prefix All.
The default for a site-level dial plan is the name of the site.
The default for a service is the name of the service (Registrar or PSTN gateway) followed by an underscore, followed by the service fully qualified domain name (FQDN).
For example, Registrar_pool0.litwareinc.com.
The default for a per-user dial plan is the Identity of the dial plan.



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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet creates an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile.

## NOTES

## RELATED LINKS

[Remove-CsDialPlan](Remove-CsDialPlan.md)

[Set-CsDialPlan](Set-CsDialPlan.md)

[Get-CsDialPlan](Get-CsDialPlan.md)

[Grant-CsDialPlan](Grant-CsDialPlan.md)

[Test-CsDialPlan](Test-CsDialPlan.md)

[New-CsVoiceNormalizationRule](New-CsVoiceNormalizationRule.md)

[Set-CsVoiceNormalizationRule](Set-CsVoiceNormalizationRule.md)

[Remove-CsVoiceNormalizationRule](Remove-CsVoiceNormalizationRule.md)

[Get-CsVoiceNormalizationRule](Get-CsVoiceNormalizationRule.md)
