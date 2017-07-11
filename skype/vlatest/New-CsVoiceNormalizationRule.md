---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsVoiceNormalizationRule

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new voice normalization rule.
Voice normalization rules are used to convert a telephone dialing requirement (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Microsoft Lync Server 2010.

Below Content Applies To: Lync Server 2013

Creates a new voice normalization rule.
Voice normalization rules are used to convert a telephone dialing requirement (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Lync Server.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Online

New-CsVoiceNormalizationRule \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-Pattern \<string\>\] \[-Translation \<string\>\] \[-IsInternalExtension \<bool\>\] \[-Priority \<int\>\] \[-InMemory\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

New-CsVoiceNormalizationRule -Parent \<string\> -Name \<string\> \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-Pattern \<string\>\] \[-Translation \<string\>\] \[-IsInternalExtension \<bool\>\] \[-Priority \<int\>\] \[-InMemory\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Below Content Applies To: Skype for Business Server 2015

Creates a new voice normalization rule.
Voice normalization rules are used to convert a telephone dialing requirement (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsVoiceNormalizationRule [-Identity] <XdsIdentity> [-Description <String>] [-IsInternalExtension <Boolean>]
 [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsVoiceNormalizationRule -Name <String> -Parent <String> [-Description <String>]
 [-IsInternalExtension <Boolean>] [-Pattern <String>] [-Priority <Int32>] [-Translation <String>] [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [<CommonParameters>]
```

###  (Default)
```
New-CsVoiceNormalizationRule [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-Description <Object>] [-Force] [-InMemory] [-IsInternalExtension <Object>] [-Name <Object>]
 [-Parent <Object>] [-Pattern <Object>] [-Priority <Object>] [-Tenant <Object>] [-Translation <Object>]
 [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

This cmdlet creates a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Lync Server 2010 format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are created by using this cmdlet are part of the dial plan and, in addition to being accessible through the Get-CsVoiceNormalizationRule cmdlet, can also be accessed through the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.
You cannot create a normalization rule unless a dial plan with an Identity matching the scope specified in the normalization rule Identity already exists.
For example, you can't create a normalization rule with the Identity site:Redmond/RedmondNormalizationRule unless a dial plan for site:Redmond already exists.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsVoiceNormalizationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsVoiceNormalizationRule"}

Below Content Applies To: Lync Server 2013

This cmdlet creates a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Lync Server format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are created by using this cmdlet are part of the dial plan and, in addition to being accessible through the Get-CsVoiceNormalizationRule cmdlet, can also be accessed through the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.
You cannot create a normalization rule unless a dial plan with an Identity matching the scope specified in the normalization rule Identity already exists.
For example, you can't create a normalization rule with the Identity site:Redmond/RedmondNormalizationRule unless a dial plan for site:Redmond already exists.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsVoiceNormalizationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsVoiceNormalizationRule"}

Below Content Applies To: Skype for Business Online

{{Fill in the Description}}

Below Content Applies To: Skype for Business Server 2015

This cmdlet creates a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Skype for Business Server 2015 format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are created by using this cmdlet are part of the dial plan and, in addition to being accessible through the Get-CsVoiceNormalizationRule cmdlet, can also be accessed through the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.
You cannot create a normalization rule unless a dial plan with an Identity matching the scope specified in the normalization rule Identity already exists.
For example, you can't create a normalization rule with the Identity site:Redmond/RedmondNormalizationRule unless a dial plan for site:Redmond already exists.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsVoiceNormalizationRule -Identity "site:Redmond/Prefix Redmond"
```

This example creates a new voice normalization rule for site Redmond named Prefix Redmond.
Because no other parameters are specified, the rule is created with the default values.
Notice that the value passed to the Identity parameter is in double quotes; this is because the name of the rule (Prefix Redmond) contains a space.
If the rule name does not contain a space you don't need to enclose the Identity in double quotes.

Keep in mind that a dial plan for the Redmond site must exist for this command to succeed.
You can create a new dial plan by calling the New-CsDialPlan cmdlet.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example creates a new voice normalization rule for site Redmond named Prefix Redmond.
Because no other parameters are specified, the rule is created with the default values.
Notice that the value passed to the Identity parameter is in double quotes; this is because the name of the rule (Prefix Redmond) contains a space.
If the rule name does not contain a space you don't need to enclose the Identity in double quotes.

Keep in mind that a dial plan for the Redmond site must exist for this command to succeed.
You can create a new dial plan by calling the New-CsDialPlan cmdlet.

New-CsVoiceNormalizationRule -Identity "site:Redmond/Prefix Redmond"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new voice normalization rule for site Redmond named Prefix Redmond.
Because no other parameters are specified, the rule is created with the default values.
Notice that the value passed to the Identity parameter is in double quotes; this is because the name of the rule (Prefix Redmond) contains a space.
If the rule name does not contain a space you don't need to enclose the Identity in double quotes.

Keep in mind that a dial plan for the Redmond site must exist for this command to succeed.
You can create a new dial plan by calling the New-CsDialPlan cmdlet.

New-CsVoiceNormalizationRule -Identity "site:Redmond/Prefix Redmond"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
New-CsVoiceNormalizationRule -Parent SeattleUser -Name SeattleFourDigit -Description "Dialing with internal four-digit extension" -Pattern '^(\d{4})$' -Translation '+1206555$1'
```

This example creates a new voice normalization rule named SeattleFourDigit that applies to the per-user dial plan with the Identity SeattleUser.
(Note: Rather than specifying a Parent and a Name, we could have instead created this same rule by specifying -Identity SeattleUser/SeattleFourDigit.) We've included a Description explaining that this rule is for translating numbers dialed internally with only a 4-digit extension.
In addition, Pattern and Translation values have been specified.
These values translate a four-digit number (specified by the regular expression in the Pattern) to the same four-digit number, but prefixed by the Translation value (+1206555).
For example, if the extension 1234 was entered, this rule would translate that extension to the number +12065551234.

Note the single quotes around the Pattern and Translation values.
Single quotes are required for these values, double quotes or no quotes will not work in this instance.

As in Example 1, a dial plan with the given scope must exist.
In this case, that means a dial plan with the Identity SeattleUser must already exist.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example creates a new voice normalization rule named SeattleFourDigit that applies to the per-user dial plan with the Identity SeattleUser.
(Note: Rather than specifying a Parent and a Name, we could have instead created this same rule by specifying -Identity SeattleUser/SeattleFourDigit.) We've included a Description explaining that this rule is for translating numbers dialed internally with only a 4-digit extension.
In addition, Pattern and Translation values have been specified.
These values translate a four-digit number (specified by the regular expression in the Pattern) to the same four-digit number, but prefixed by the Translation value (+1206555).
For example, if the extension 1234 was entered, this rule would translate that extension to the number +12065551234.

Note the single quotes around the Pattern and Translation values.
Single quotes are required for these values; double quotes (or no quotes) will not work in this instance.

As in Example 1, a dial plan with the given scope must exist.
In this case, that means a dial plan with the Identity SeattleUser must already exist.

New-CsVoiceNormalizationRule -Parent SeattleUser -Name SeattleFourDigit -Description "Dialing with internal four-digit extension" -Pattern '^(\d{4})$' -Translation '+1206555$1'

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example creates a new voice normalization rule named SeattleFourDigit that applies to the per-user dial plan with the Identity SeattleUser.
(Note: Rather than specifying a Parent and a Name, we could have instead created this same rule by specifying -Identity SeattleUser/SeattleFourDigit.) We've included a Description explaining that this rule is for translating numbers dialed internally with only a 4-digit extension.
In addition, Pattern and Translation values have been specified.
These values translate a four-digit number (specified by the regular expression in the Pattern) to the same four-digit number, but prefixed by the Translation value (+1206555).
For example, if the extension 1234 was entered, this rule would translate that extension to the number +12065551234.

Note the single quotes around the Pattern and Translation values.
Single quotes are required for these values; double quotes (or no quotes) will not work in this instance.

As in Example 1, a dial plan with the given scope must exist.
In this case, that means a dial plan with the Identity SeattleUser must already exist.

New-CsVoiceNormalizationRule -Parent SeattleUser -Name SeattleFourDigit -Description "Dialing with internal four-digit extension" -Pattern '^(\d{4})$' -Translation '+1206555$1'

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A unique identifier for the rule.
The Identity specified must include the scope followed by a slash and then the name; for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.
The name portion will automatically be stored in the Name property.
You cannot specify values for Identity and Name in the same command.

Voice normalization rules can be created at the following scopes: global, site, service (Registrar and PSTNGateway only), and per user.
A dial plan with an Identity matching the scope of the normalization rule must already exist before a new rule can be created.
(To retrieve a list of dial plans, call the Get-CsDialPlan cmdlet.)

The Identity parameter is required unless the Parent parameter is specified.
You cannot include the Identity parameter and the Parent parameter in the same command.



Below Content Applies To: Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The name of the rule.
This parameter is required if a value has been specified for the Parent parameter.
If no value has been specified for the Parent parameter, Name defaults to the name specified in the Identity parameter.
For example, if a rule is created with the Identity site:Redmond/RedmondRule, the Name will default to RedmondRule.
The Name parameter and the Identity parameter cannot be used in the same command.



Below Content Applies To: Skype for Business Online

{{Fill Name Description}}



```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Parent
Below Content Applies To: Lync Server 2010

The scope at which the new normalization rule will be created.
This value must be global; site:\<sitename\>, where \<sitename\> is the name of the Lync Server site; PSTN Gateway or Registrar service, such as PSTNGateway:redmond.litwareinc.com; or a string designating a per user rule.
A dial plan with the specified scope must already exist or the command will fail.

The Parent parameter is required unless the Identity parameter is specified.
You cannot include the Identity parameter and the Parent parameter in the same command.
If you include the Parent parameter, the Name parameter is also required.



Below Content Applies To: Lync Server 2013

The scope at which the new normalization rule will be created.
This value must be global; site:\<sitename\>, where \<sitename\> is the name of the Lync Server site; PSTN gateway or Registrar service, such as PSTNGateway:redmond.litwareinc.com; or a string designating a per user rule.
A dial plan with the specified scope must already exist or the command will fail.

The Parent parameter is required unless the Identity parameter is specified.
You cannot include the Identity parameter and the Parent parameter in the same command.
If you include the Parent parameter, the Name parameter is also required.



Below Content Applies To: Skype for Business Online

{{Fill Parent Description}}



Below Content Applies To: Skype for Business Server 2015

The scope at which the new normalization rule will be created.
This value must be global; site:\<sitename\>, where \<sitename\> is the name of the Skype for Business Server 2015 site; PSTN gateway or Registrar service, such as PSTNGateway:redmond.litwareinc.com; or a string designating a per user rule.
A dial plan with the specified scope must already exist or the command will fail.

The Parent parameter is required unless the Identity parameter is specified.
You cannot include the Identity parameter and the Parent parameter in the same command.
If you include the Parent parameter, the Name parameter is also required.



```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A friendly description of the normalization rule.

Maximum string length: 512 characters.



Below Content Applies To: Skype for Business Online

{{Fill Description Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsInternalExtension
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

If True, the result of applying this rule will be a number internal to the organization.
If False, applying the rule results in an external number.
This value is ignored if the value of the OptimizeDeviceDialing property of the associated dial plan is set to False.

Default: False



Below Content Applies To: Skype for Business Online

{{Fill IsInternalExtension Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pattern
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A regular expression that the dialed number must match in order for this rule to be applied.

Default: ^(\d{11})$ (The default represents any set of numbers up to 11 digits.)



Below Content Applies To: Skype for Business Online

{{Fill Pattern Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The order in which rules are applied.
A phone number might match more than one rule.
This parameter sets the order in which the rules are tested against the number.



Below Content Applies To: Skype for Business Online

{{Fill Priority Description}}



```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Translation
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The regular expression pattern that will be applied to the number to convert it to E.164 format.

Default: +$1 (The default prefixes the number with a plus sign \[+\].)



Below Content Applies To: Skype for Business Online

{{Fill Translation Description}}



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses any confirmation prompts that would otherwise be displayed before making changes.



Below Content Applies To: Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Below Content Applies To: Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Online

{{Fill InMemory Description}}



Below Content Applies To: Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



Below Content Applies To: Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Below Content Applies To: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



Below Content Applies To: Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

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
{{Fill Tenant Description}}

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

###  
None.

### None

## OUTPUTS

###  
This cmdlet creates an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule.

### System.Object

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/189809ff-559e-476a-a32c-8b3812371883(OCS.14).aspx)

[Remove-CsVoiceNormalizationRule]()

[Set-CsVoiceNormalizationRule]()

[Get-CsVoiceNormalizationRule]()

[Test-CsVoiceNormalizationRule]()

[New-CsDialPlan]()

[Get-CsDialPlan]()

[Online Version](http://technet.microsoft.com/EN-US/library/189809ff-559e-476a-a32c-8b3812371883(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/189809ff-559e-476a-a32c-8b3812371883(OCS.16).aspx)

