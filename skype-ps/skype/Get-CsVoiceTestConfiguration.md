---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVoiceTestConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves a test scenario you can use to test phone numbers against specified routes and rules.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves a test scenario you can use to test phone numbers against specified routes and rules.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsVoiceTestConfiguration [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsVoiceTestConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

This cmdlet retrieves the voice route, usage, dial plan, and voice policy against which to test a specified phone number.
Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
You can do this testing by retrieving a test configuration with this cmdlet, and then running that scenario with the Test-CsVoiceConfiguration cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsVoiceTestConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsVoiceTestConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

This cmdlet retrieves the voice route, usage, dial plan, and voice policy against which to test a specified phone number.
Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
You can do this testing by retrieving a test configuration with this cmdlet, and then running that scenario with the Test-CsVoiceConfiguration cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsVoiceTestConfiguration
```

Retrieves all the voice test configuration settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Retrieves all the voice test configuration settings.

Get-CsVoiceTestConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Retrieves all the voice test configuration settings.

Get-CsVoiceTestConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoiceTestConfiguration | Select-Object Identity, DialedNumber, ExpectedTranslatedNumber
```

This example retrieves all the voice test configuration settings, displaying only the Identity, DialedNumber, and ExpectedTranslatedNumber parameter of each.
The settings returned by Get-CsVoiceTestConfiguration are piped to the Select-Object cmdlet, where the output is narrowed down to the Identity, DialedNumber, and ExpectedTranslatedNumber properties.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example retrieves all the voice test configuration settings, displaying only the Identity, DialedNumber, and ExpectedTranslatedNumber parameter of each.
The settings returned by Get-CsVoiceTestConfiguration are piped to the Select-Object cmdlet, where the output is narrowed down to the Identity, DialedNumber, and ExpectedTranslatedNumber properties.

Get-CsVoiceTestConfiguration | Select-Object Identity, DialedNumber, ExpectedTranslatedNumber

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example retrieves all the voice test configuration settings, displaying only the Identity, DialedNumber, and ExpectedTranslatedNumber parameter of each.
The settings returned by the Get-CsVoiceTestConfiguration cmdlet are piped to the Select-Object cmdlet, where the output is narrowed down to the Identity, DialedNumber, and ExpectedTranslatedNumber properties.

Get-CsVoiceTestConfiguration | Select-Object Identity, DialedNumber, ExpectedTranslatedNumber

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsVoiceTestConfiguration -Filter *test*
```

This example uses the Filter parameter to retrieve all the voice test configuration settings with Identities that contain the string "test".
The wildcard characters (*) at the beginning and end of the filter value indicate that the string "test" can be located anywhere within the Identity, with any characters before or after that string.
For example, this command would return voice test configurations with names such as TestConfig, VoiceNumberTest, and VoiceTest1.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example uses the Filter parameter to retrieve all the voice test configuration settings with Identities that contain the string "test".
The wildcard characters (*) at the beginning and end of the filter value indicate that the string "test" can be located anywhere within the Identity, with any characters before or after that string.
For example, this command would return voice test configurations with names such as TestConfig, VoiceNumberTest, and VoiceTest1.

Get-CsVoiceTestConfiguration -Filter *test*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the Filter parameter to retrieve all the voice test configuration settings with Identities that contain the string "test".
The wildcard characters (*) at the beginning and end of the filter value indicate that the string "test" can be located anywhere within the Identity, with any characters before or after that string.
For example, this command would return voice test configurations with names such as TestConfig, VoiceNumberTest, and VoiceTest1.

Get-CsVoiceTestConfiguration -Filter *test*

## PARAMETERS

### -Identity
A string uniquely identifying the test configuration you want to retrieve.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter provides a way to do a wildcard search of the defined voice test configurations.
(For details, see the examples in this topic.)

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the voice test configuration from the local replica of the Central Management store, rather than the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.

## OUTPUTS

###  
Returns one of more objects of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/c23235db-500c-4303-8c75-b4ae341b3807(OCS.14).aspx)

[New-CsVoiceTestConfiguration]()

[Remove-CsVoiceTestConfiguration]()

[Set-CsVoiceTestConfiguration]()

[Test-CsVoiceTestConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/c23235db-500c-4303-8c75-b4ae341b3807(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c23235db-500c-4303-8c75-b4ae341b3807(OCS.16).aspx)

