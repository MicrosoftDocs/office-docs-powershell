---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Test-CsDialPlan
schema: 2.0.0
---

# Test-CsDialPlan

## SYNOPSIS
Tests a telephone number against a dial plan (formerly known as a location profile) and returns the normalization rule that will be applied to the number as well as the translated number after the normalization rule has been applied.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsDialPlan -DialedNumber <PhoneNumber> -Dialplan <LocationProfile> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to see the results of applying a dial plan to a given telephone number.
Dial plans provide information, including how normalization rules are applied, required to enable Enterprise Voice users to make telephone calls.
Given a dialed number and a dial plan, this cmdlet will verify which normalization rule within the dial plan will be applied and what the translated number will be.

You can use this cmdlet for troubleshooting issues with number translations or for verifying the application of rules against certain numbers.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsDialPlan -Identity site:Redmond | Test-CsDialPlan -DialedNumber 14255559999 | Format-List
```

This example runs a test against the dial plan with the Identity site:Redmond.
First the `Get-CsDialPlan` cmdlet is run to retrieve the dial plan with the Identity site:Redmond.
That dial plan object is then piped to the `Test-CsDialPlan` cmdlet, where the dial plan is tested against the telephone number 14255559999.
The output will be the DialedNumber after a voice normalization rule with a matching pattern has been applied.
If there is more than one normalization rule within the site with a matching pattern, the rule with the lowest Priority value will be applied.
If there are no rules with patterns matching the DialedNumber value (for example, if the normalization rule matches the pattern for an 11-digit number and you supply a 7-digit number), no value will be returned.

The output of this command includes a phone number and a normalization rule.
The normalization rule has numerous properties, and by default this output will be cut off with an ellipsis (...).
In order to see all the properties and values of the returned voice normalization rule, we pipe the output to the `Format-List` cmdlet before displaying it to the screen.
This will list the phone number and normalization rule on separate lines, and the normalization rule properties and values will wrap to fit on the screen.


### -------------------------- Example 2 --------------------------
```
$a = Get-CsDialPlan -Identity site:Redmond

Test-CsDialPlan -DialedNumber 14255559999 -Dialplan $a | Format-List
```

Example 2 is identical to Example 1 except that instead of piping the results of the Get operation directly to the `Test-CsDialPlan` cmdlet, the object is first stored in the variable $a and then is passed as the value to the parameter DialPlan to be used as the dial plan against which the test will run.

As in Example 1, we conclude this command by piping the output to the `Format-List` cmdlet so we can see more information about the voice normalization rule than appears by default.


### -------------------------- Example 3 --------------------------
```
Get-CsDialPlan | Test-CsDialPlan -DialedNumber 2065559999 | Format-Table -Wrap
```

This example runs a dial plan test against all dial plans defined within the Skype for Business Server deployment.
First the `Get-CsDialPlan` cmdlet is run (with no parameters) to retrieve all the dial plans.
The collection of dial plans that is returned is then piped to the `Test-CsDialPlan` cmdlet, where each dial plan in the collection is tested against the telephone number 2065559999.
The output will be a list of translated numbers along with the voice normalization rule applied, one for each dial plan in the collection.
If no voice normalization rules within a dial plan apply to the DialedNumber value for a particular dial plan (for example, if the normalization rule matches the pattern for an 11-digit number and you supply a 7-digit number) there will be a blank line in the list for that dial plan.

By default, the output cuts off the full display of the voice normalization rule that has been applied.
In Examples 1 and 2 we were able to view the entire output by piping the results of the test to the `Format-List` cmdlet.
In this example we pipe the output to the `Format-Table` cmdlet and include the Wrap parameter.
This shows each entry in table format (one column for the translated number and one for the applied voice normalization rule), but it wraps the output so the normalization rule will wrap within the column.


## PARAMETERS

### -DialedNumber
The phone number against which you want to test the dial plan specified in the Dialplan parameter.

Full Data Type: Microsoft.Rtc.Management.Voice.PhoneNumber

```yaml
Type: PhoneNumber
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Dialplan
An object containing a reference to the dial plan against which you want to test the number specified in the DialedNumber parameter.

Full Data Type: Microsoft.Rtc.Management.WritableConfig.Policy.Voice.LocationProfile

```yaml
Type: LocationProfile
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Returns an object of type Microsoft.Rtc.Management.Voice.LocationProfileTestResult.

## NOTES

## RELATED LINKS

[New-CsDialPlan]()

[Remove-CsDialPlan]()

[Set-CsDialPlan]()

[Get-CsDialPlan]()

[Grant-CsDialPlan]()
