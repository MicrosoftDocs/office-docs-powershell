---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsVoiceTestConfiguration
schema: 2.0.0
---

# New-CsVoiceTestConfiguration

## SYNOPSIS
Creates a test scenario you can use to test phone numbers against specified routes and rules.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
New-CsVoiceTestConfiguration [-Identity] <XdsGlobalRelativeIdentity> [-DialedNumber <String>]
 [-ExpectedRoute <String>] [-ExpectedTranslatedNumber <String>] [-ExpectedUsage <String>]
 [-TargetVoicePolicy <String>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-TargetDialplan <String>]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsVoiceTestConfiguration -Name <String> [-DialedNumber <String>] [-ExpectedRoute <String>]
 [-ExpectedTranslatedNumber <String>] [-ExpectedUsage <String>] [-TargetVoicePolicy <String>] [-Force]
 [-InMemory] [-WhatIf] [-Confirm] [-TargetDialplan <String>] [<CommonParameters>]
```

## DESCRIPTION
Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
You can do this testing by creating test scenarios with this cmdlet.

The `New-CsVoiceTestConfiguration` cmdlet defines the voice route, usage, dial plan and voice policy against which to test a specified phone number.
All of this information can be defined and retrieved using other cmdlets; see the parameter descriptions for this topic for more information.

The configurations created with this cmdlet are tested using the `Test-CsVoiceTestConfiguration` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsVoiceTestConfiguration -Identity TestConfig1
```

This example creates a new voice test configuration with default values that has the Identity TestConfig1.


### -------------------------- Example 2 --------------------------
```
New-CsVoiceTestConfiguration TestConfig1 -TargetDialplan site:Redmond1
```

This example creates a new voice test configuration named TestConfig1 and sets the TargetDialplan parameter to site:Redmond1.
This will result in the tests for expected number, usage and route to be run against the settings for the dial plan for the site Redmond1.

In this example we declared TestConfig1 without specifying the Identity parameter.
Identity is a positional parameter, so the first value in the command following the cmdlet name is recognized by the cmdlet as the Identity.


### -------------------------- Example 3 --------------------------
```
New-CsVoiceTestConfiguration -Identity TestConfig1 -DialedNumber 5551212 -ExpectedTranslatedNumber +5551212
```

This example creates a new voice test configuration named TestConfig1.
This configuration will use the default values to test the DialedNumber 5551212 against an expected output (ExpectedTranslatedNumber) of +5551212.
This expectation is based on the normalization rules associated with the dial plan that will be used when a test is run against this object.
That test must be run using the `Test-CsVoiceTestConfiguration` cmdlet.


## PARAMETERS

### -Identity
A string uniquely identifying this test scenario.

This string can be up to 32 characters in length and may contain any alphanumeric characters plus the backslash (\\), period (.) or underscore (_).

The value of this parameter does not include scope because this object can be created only at the global scope.
Therefore only a unique name is required.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
This parameter contains the same value as the Identity.
If the Identity parameter is specified, you cannot include the Name parameter in your command.
Likewise, if the Name parameter is specified, you cannot specify an Identity.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialedNumber
The phone number you want to use to test the policies, usages, etc.

Must be 512 characters or fewer.

Default: 1234

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

### -ExpectedRoute
The name of the voice route expected to be used during the configuration test.
If a different route is used, based on the target dial plan and voice policy, the test will fail.
You can retrieve available voice routes by calling the `Get-CsVoiceRoute` cmdlet.

Must be 256 characters or fewer.

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

### -ExpectedTranslatedNumber
The phone number in the format you expect to see it after translation.
This is the value of the DialedNumber parameter after normalization.
If you run the `Test-CsVoiceTestConfiguration` cmdlet and the DialedNumber does not result in the value in ExpectedTranslatedNumber, the test will report as Fail.

Must be 512 characters or fewer.

Default: +1234


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

### -ExpectedUsage
The name of the PSTN usage expected to be used during the configuration test.
If a different PSTN usage is used, based on the target dial plan and voice policy, the test will fail.
You can retrieve available usages by calling the `Get-CsPstnUsage` cmdlet.

Must be 256 characters or fewer.


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

### -TargetVoicePolicy
The Identity of the voice policy against which to run this test.
Voice policies can be retrieved by calling the `Get-CsVoicePolicy` cmdlet.

Must be 40 characters or fewer.

Default: Global


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
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

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

### -TargetDialplan
The Identity of the dial plan to be used for this test.
Dial plans can be retrieved by called the `Get-CsDialPlan` cmdlet.

Must be 40 characters or fewer.

Default: Global


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet creates an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration

## NOTES

## RELATED LINKS

[Remove-CsVoiceTestConfiguration](Remove-CsVoiceTestConfiguration.md)

[Set-CsVoiceTestConfiguration](Set-CsVoiceTestConfiguration.md)

[Get-CsVoiceTestConfiguration](Get-CsVoiceTestConfiguration.md)

[Test-CsVoiceTestConfiguration](Test-CsVoiceTestConfiguration.md)

[Get-CsVoiceRoute](Get-CsVoiceRoute.md)

[Get-CsPstnUsage](Get-CsPstnUsage.md)

[Get-CsDialPlan](Get-CsDialPlan.md)

[Get-CsVoicePolicy](Get-CsVoicePolicy.md)
