---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsVoiceNormalizationRule

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies a voice normalization rule.
Voice normalization rules are used to convert a telephone dialing requirement (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Microsoft Lync Server 2010.

**Below Content Applies To:** Lync Server 2013

Modifies a voice normalization rule.
Voice normalization rules are used to convert a telephone dialing requirement (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Lync Server.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Set-CsVoiceNormalizationRule \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-Pattern \<string\>\] \[-Translation \<string\>\] \[-IsInternalExtension \<bool\>\] \[-Priority \<int\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsVoiceNormalizationRule \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-Pattern \<string\>\] \[-Translation \<string\>\] \[-IsInternalExtension \<bool\>\] \[-Priority \<int\>\] \[-Instance \<psobject\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

**Below Content Applies To:** Skype for Business Server 2015

Modifies a voice normalization rule.
Voice normalization rules are used to convert a telephone dialing requirement (for example, dialing 9 to access an outside line) to the E.164 phone number format used by Skype for Business Server 2015.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsVoiceNormalizationRule [[-Identity] <XdsIdentity>] [-Description <String>]
 [-IsInternalExtension <Boolean>] [-Priority <Int32>] [-Pattern <String>] [-Translation <String>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsVoiceNormalizationRule [-Instance <PSObject>] [-Description <String>] [-IsInternalExtension <Boolean>]
 [-Priority <Int32>] [-Pattern <String>] [-Translation <String>] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

###  (Default)
```
Set-CsVoiceNormalizationRule [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm]
 [-Description <Object>] [-Force] [-Instance <Object>] [-IsInternalExtension <Object>] [-Pattern <Object>]
 [-Priority <Object>] [-Tenant <Object>] [-Translation <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

This cmdlet modifies a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Lync Server 2010 format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are modified by using this cmdlet are part of the dial plan and, in addition to being accessible through the Get-CsVoiceNormalizationRule cmdlet, can also be accessed through the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsVoiceNormalizationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsVoiceNormalizationRule"}

**Below Content Applies To:** Lync Server 2013

This cmdlet modifies a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Lync Server format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are modified by using this cmdlet are part of the dial plan and, in addition to being accessible through the Get-CsVoiceNormalizationRule cmdlet, can also be accessed through the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsVoiceNormalizationRule cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsVoiceNormalizationRule"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet modifies a named voice normalization rule.
These rules are a required part of phone authorization and call routing.
They define the requirements for converting (or translating) numbers from an internal Skype for Business Server 2015 format to a standard (E.164) format.
An understanding of regular expressions is helpful in order to define number patterns that will be translated.

Rules that are modified by using this cmdlet are part of the dial plan and, in addition to being accessible through the Get-CsVoiceNormalizationRule cmdlet, can also be accessed through the NormalizationRules property returned by a call to the Get-CsDialPlan cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsVoiceNormalizationRule -Identity "site:Redmond/Prefix Redmond" -Description "Add a prefix to all numbers on site Redmond"
```

This example sets the description of the rule Prefix Redmond on site Redmond to "Add a prefix to all numbers on site Redmond".

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example sets the description of the rule Prefix Redmond on site Redmond to "Add a prefix to all numbers on site Redmond".

Set-CsVoiceNormalizationRule -Identity "site:Redmond/Prefix Redmond" -Description "Add a prefix to all numbers on site Redmond"

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example sets the description of the rule Prefix Redmond on site Redmond to "Add a prefix to all numbers on site Redmond".

Set-CsVoiceNormalizationRule -Identity "site:Redmond/Prefix Redmond" -Description "Add a prefix to all numbers on site Redmond"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Set-CsVoiceNormalizationRule -Identity global/SeattleFourDigit -Description "Translate an internal four-digit extension" -Translation '+1206556$1'
```

This example modifies the voice normalization rule with the Identity global/SeattleFourDigit.
A new Description has been specified to reflect the modifications to the rule.
In addition, a Translation value has been specified that modifies the rule to translate any number matching the existing pattern of this rule to the same number but with the prefix +1206556.
For example, if the existing pattern matched any four-digit number and the number 1234 were entered, this rule would translate that extension to the number +12065561234.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example modifies the voice normalization rule with the Identity global/SeattleFourDigit.
A new Description has been specified to reflect the modifications to the rule.
In addition, a Translation value has been specified that modifies the rule to translate any number matching the existing pattern of this rule to the same number but with the prefix +1206556.
For example, if the existing pattern matched any four-digit number and the number 1234 were entered, this rule would translate that extension to the number +12065561234.

Set-CsVoiceNormalizationRule -Identity global/SeattleFourDigit -Description "Translate an internal four-digit extension" -Translation '+1206556$1'

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the voice normalization rule with the Identity global/SeattleFourDigit.
A new Description has been specified to reflect the modifications to the rule.
In addition, a Translation value has been specified that modifies the rule to translate any number matching the existing pattern of this rule to the same number but with the prefix +1206556.
For example, if the existing pattern matched any four-digit number and the number 1234 were entered, this rule would translate that extension to the number +12065561234.

Set-CsVoiceNormalizationRule -Identity global/SeattleFourDigit -Description "Translate an internal four-digit extension" -Translation '+1206556$1'

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
$a = Get-CsVoiceNormalizationRule -Identity global/RedmondFourDigit
$a.name = "RedmondRule"
Set-CsVoiceNormalizationRule -Instance $a
```

Example 3 changes the name of the normalization rule.
Keep in mind that changing the name also changes the name portion of the Identity.
The Set-CsVoiceNormalizationRule cmdlet doesn't have a Name parameter, so in order to change the name we first call Get-CsVoiceNormalizationRule to retrieve the rule with the Identity global/RedmondFourDigit and assign the returned object to the variable $a.
We then assign the string RedmondRule to the Name property of the object.
Next, we pass the variable to the Instance parameter of Set-CsVoiceNormalizationRule to make the change permanent.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 changes the name of the normalization rule.
Keep in mind that changing the name also changes the name portion of the Identity.
The Set-CsVoiceNormalizationRule cmdlet doesn't have a Name parameter, so in order to change the name we first call Get-CsVoiceNormalizationRule to retrieve the rule with the Identity global/RedmondFourDigit and assign the returned object to the variable $a.
We then assign the string RedmondRule to the Name property of the object.
Next, we pass the variable to the Instance parameter of Set-CsVoiceNormalizationRule to make the change permanent.

$a = Get-CsVoiceNormalizationRule -Identity global/RedmondFourDigit

$a.name = "RedmondRule"

Set-CsVoiceNormalizationRule -Instance $a

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 changes the name of the normalization rule.
Keep in mind that changing the name also changes the name portion of the Identity.
The Set-CsVoiceNormalizationRule cmdlet doesn't have a Name parameter, so in order to change the name we first call the Get-CsVoiceNormalizationRule cmdlet to retrieve the rule with the Identity global/RedmondFourDigit and assign the returned object to the variable $a.
We then assign the string RedmondRule to the Name property of the object.
Next, we pass the variable to the Instance parameter of the Set-CsVoiceNormalizationRule cmdlet to make the change permanent.

$a = Get-CsVoiceNormalizationRule -Identity global/RedmondFourDigit

$a.name = "RedmondRule"

Set-CsVoiceNormalizationRule -Instance $a

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A unique identifier for the rule.
The Identity specified must include the scope followed by a slash followed by the name; for example: site:Redmond/Rule1, where site:Redmond is the scope and Rule1 is the name.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
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

### -Instance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This object must be of type NormalizationRule and can be retrieved by calling Get-CsVoiceNormalizationRule



**Below Content Applies To:** Skype for Business Online

{{Fill Instance Description}}



**Below Content Applies To:** Skype for Business Server 2015

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This object must be of type NormalizationRule and can be retrieved by calling the Get-CsVoiceNormalizationRule cmdlet.



```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Description
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A friendly description of the normalization rule.

Maximum string length: 512 characters.



**Below Content Applies To:** Skype for Business Online

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

If True, the result of applying this rule will be a number internal to the enterprise.
If False, applying the rule results in an external number.
This value is ignored if the value of the OptimizeDeviceDialing property of the associated dial plan is set to False.



**Below Content Applies To:** Skype for Business Online

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

### -Priority
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The order in which rules are applied.
A number might match more than one rule.
This parameter sets the order in which the rules are tested against the number.



**Below Content Applies To:** Skype for Business Online

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

### -Pattern
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A regular expression that the dialed number must match in order for this rule to be applied.



**Below Content Applies To:** Skype for Business Online

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

### -Translation
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

The regular expression pattern that will be applied to the number to convert it to E.164 format.



**Below Content Applies To:** Skype for Business Online

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Suppresses any confirmation prompts that would otherwise be displayed before making changes.



**Below Content Applies To:** Skype for Business Online

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

### -WhatIf
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule object.
Accepts pipelined input of voice normalization rule objects.

### System.Management.Automation.PSObject

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule object.
The Set-CsVoiceNormalizationRule cmdlet accepts pipelined input of voice normalization rule objects.

## OUTPUTS

###  
Set-CsVoiceNormalizationRule does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule object.

### System.Object

###  
The Set-CsVoiceNormalizationRule cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.NormalizationRule object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/68850abb-4ac7-4ae1-bb6e-d991385f92a4(OCS.14).aspx)

[New-CsVoiceNormalizationRule]()

[Remove-CsVoiceNormalizationRule]()

[Get-CsVoiceNormalizationRule]()

[Test-CsVoiceNormalizationRule]()

[Set-CsDialPlan]()

[Get-CsDialPlan]()

[Online Version](http://technet.microsoft.com/EN-US/library/68850abb-4ac7-4ae1-bb6e-d991385f92a4(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/68850abb-4ac7-4ae1-bb6e-d991385f92a4(OCS.16).aspx)

