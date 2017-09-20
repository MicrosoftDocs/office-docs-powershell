---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsVoiceRegex

## SYNOPSIS
Creates a regular expression pattern and translation for translating phone numbers to different formats.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### AtLeastLength
```
New-CsVoiceRegex -AtLeastLength <Int32> [-DigitsToPrepend <String>] [-DigitsToStrip <Int32>]
 [-StartsWith <String>] [<CommonParameters>]
```

### ExactLength
```
New-CsVoiceRegex -ExactLength <Int32> [-DigitsToPrepend <String>] [-DigitsToStrip <Int32>]
 [-StartsWith <String>] [<CommonParameters>]
```

###  (Default)
```
New-CsVoiceRegex [-AtLeastLength <Object>] [-DigitsToPrepend <Object>] [-DigitsToStrip <Object>]
 [-ExactLength <Object>] [-StartsWith <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
Regular expressions are used to match character patterns.
Skype for Business Server uses regular expressions for converting phone numbers to and from various formats, including dialed numbers, E.164, and local private branch exchange (PBX) and public switched telephone network (PSTN) formats.
Until you learn the syntax and format rules of working with regular expressions, defining these conversion rules can be confusing.
The `New-CsVoiceRegex` cmdlet provides parameters that allow you to specify certain criteria and then generates the regular expression for you.

Use this cmdlet to help you generate regular expressions to be used as Pattern and Translation values for normalization rules (the `New-CsVoiceNormalizationRule` cmdlet) and outbound translation rules (the `New-CsOutboundTranslationRule` cmdlet) and NumberPattern values for voice routes (the `New-CsVoiceRoute` cmdlet).


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$regex = New-CsVoiceRegex -ExactLength 7 -DigitsToStrip 3
```

This example creates a new regular expression pattern and translation.
This expression includes a pattern that must be exactly 7 characters (-ExactLength 7) and will remove the first three digits of the matching number (-DigitsToStrip 3).
The Pattern created by this regular expression will be ^\d{3}(\d{4})$ while the Translation will be $1.
For example, the number 5551212 would match this pattern and the resulting translation would be 1212: the 7-digit number with the first 3 digits stripped.


### -------------------------- Example 2 --------------------------
```
$regex = New-CsVoiceRegex -AtLeastLength 7 -StartsWith "1"

New-CsVoiceNormalizationRule "global/internal rule" -Pattern $regex.Pattern -Translation $regex.Translation
```

This example also creates a new regular expression pattern and translation, but follows by using these values to create a new voice normalization rule.
In the first line we call the `New-CsVoiceRegEx` cmdlet to create a regular expression where the matching number must be at least 7 characters (-AtLeastLength 7) and must begin with a 1 (-StartsWith "1").
The results of this command are assigned to the variable $regex.

In the second line we call the `New-CsVoiceNormalizationRule` cmdlet.
We give the new rule a unique name, in this case global/internal rule.
We then assign as the Pattern to the normalization rule the Pattern we created with our call to the `New-CsVoiceRegex` cmdlet: `-Pattern $regex.Pattern`.
We do the same thing with the Translation, assigning the Translation created by the `New-CsVoiceRegex` cmdlet call: `-Translation $regex.Translation`.

Note: The Pattern created in this example is ^(1\d{5}\d+)$.
This can be deciphered as a number beginning with 1 (1) followed by five digits (\d{5}) followed by any number of digits (\d+).
This adds up to a number of at least 7 digits (1 plus 5 plus 1 or more) that starts with 1, exactly what we asked for.


## PARAMETERS

### -AtLeastLength
The minimum length required for the string (phone number) to match the expression.
For example, if you're defining a normalization rule that affects only numbers that must be at least 7 digits (or characters) in length, specify a value of 7 for this parameter.

You must enter a value for this parameter or for the ExactLength parameter.
You cannot enter values for both.


```yaml
Type: Int32
Parameter Sets: AtLeastLength
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -ExactLength
The length the string (phone number) must be to match the regular expression.
For example, if you want a normalization rule to affect only 10-digit numbers, specify a value of 10 for this parameter.

You must enter a value for this parameter or for the AtLeastLength parameter.
You cannot enter values for both.


```yaml
Type: Int32
Parameter Sets: ExactLength
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -DigitsToPrepend
A string specifying the characters or numbers to add to the beginning of the phone number.
The value entered for this parameter will impact the Translation value, prepending characters to the number matching the regular expression Pattern.
For example, if the number matching the pattern is 5551212 and the DigitsToPrepend value is 425, the translated number will be 4255551212 (assuming no other translations have been applied).


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

### -DigitsToStrip
The number of characters to strip from the beginning of the string (phone number).
For example, if the number 2065551212 is entered and the DigitsToStrip is 3, the number will be translated to 5551212


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

### -StartsWith
The first character of the string (phone number).
The string will not match the regular expression unless it begins with the string specified in the StartsWith parameter.
For example, if a value of "+1" is specified for StartsWith, only numbers that begin with +1 will match this pattern and be translated.
Note that the number of characters in the StartsWith string will be included in the ExactLength and AtLeastLength totals.
For example, if you've specified an ExactLength of 10 and a StartsWith string of +1, a matching phone number would be 8 characters long, preceded by +1, for a total of 10 digits.


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

## OUTPUTS

###  
Creates on object of type Microsoft.Rtc.Management.Voice.OcsVoiceRegex.

## NOTES

## RELATED LINKS

[New-CsVoiceNormalizationRule]()

[New-CsOutboundTranslationRule]()

[New-CsVoiceRoute]()
