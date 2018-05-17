---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019
title: Test-CsVoiceNormalizationRule
schema: 2.0.0
---

# Test-CsVoiceNormalizationRule

## SYNOPSIS
Tests a telephone number against a voice normalization rule and returns the number after the normalization rule has been applied.
Voice normalization rules are used to convert a telephone dialing requirement (for example, you must dial 9 to access an outside line) to the E.164 phone number format used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsVoiceNormalizationRule -DialedNumber <PhoneNumber> -NormalizationRule <NormalizationRule> [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to see the results of applying a voice normalization rule to a given telephone number.
Voice normalization rules are a required part of phone authorization and call routing.
They define the requirements for converting--or translating-- numbers from a format typically entered by users to a standard (E.164) format.
Use this cmdlet to troubleshoot dialing issues or to verify that rules will work as expected against given numbers.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsVoiceNormalizationRule -Identity "global/11 digit number rule" | Test-CsVoiceNormalizationRule -DialedNumber 14255559999
```

This example runs a voice normalization test against the voice normalization rule with the Identity "global/11 digit number rule".
First the `Get-CsVoiceNormalizationRule` cmdlet is run to retrieve the rule with the Identity "global/11 digit number rule".
That rule object is then piped to the `Test-CsVoiceNormalizationRule` cmdlet, where the rule is tested against the telephone number 14255559999.
The output will be the DialedNumber after the voice normalization rule "global/11 digit number rule" has been applied.
If this rule does not apply to the DialedNumber value (for example, if the normalization rule matches the pattern for an 11-digit number and you supply a 7-digit number) no value will be returned.


### -------------------------- Example 2 --------------------------
```
$a = Get-CsVoiceNormalizationRule -Identity "global/11 digit number rule"

Test-CsVoiceNormalizationRule -DialedNumber 5551212 -NormalizationRule $a
```

Example 2 is identical to Example 1 except that instead of piping the results of the Get operation directly to the Test cmdlet, the object is first stored in the variable $a and then is passed as the value to the parameter NormalizationRule to be used as the voice normalization rule against which the test will run.


### -------------------------- Example 3 --------------------------
```
Get-CsVoiceNormalizationRule | Test-CsVoiceNormalizationRule -DialedNumber 2065559999
```

This example runs a voice normalization test against all voice normalization rules defined within the Skype for Business Server deployment.
First the `Get-CsVoiceNormalizationRule` cmdlet is run (with no parameters) to retrieve all the voice normalization rules.
The collection of rules that is returned is then piped to the `Test-CsVoiceNormalizationRule` cmdlet, where each rule in the collection is tested against the telephone number 2065559999.
The output will be a list of translated numbers, one for each rule tested.
If a rule does not apply to the DialedNumber value (for example, if the normalization rule matches the pattern for an 11-digit number and you supply a 7-digit number) there will be a blank line in the list for that rule.


## PARAMETERS

### -DialedNumber
The phone number against which you want to test the normalization rule specified in the NormalizationRule parameter.

Full Data Type: Microsoft.Rtc.Management.Voice.PhoneNumber


```yaml
Type: PhoneNumber
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NormalizationRule
An object containing a reference to the normalization rule against which you want to test the number specified in the DialedNumber parameter.

You can retrieve voice normalization rules by calling the `Get-CsVoiceNormalizationRule` cmdlet.


```yaml
Type: NormalizationRule
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

## OUTPUTS

###  
Returns an object of type Microsoft.Rtc.Management.Voice.NormalizationRuleTestResult.

## NOTES

## RELATED LINKS

[New-CsVoiceNormalizationRule](New-CsVoiceNormalizationRule.md)

[Remove-CsVoiceNormalizationRule](Remove-CsVoiceNormalizationRule.md)

[Set-CsVoiceNormalizationRule](Set-CsVoiceNormalizationRule.md)

[Get-CsVoiceNormalizationRule](Get-CsVoiceNormalizationRule.md)

