---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoiceTestConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a voice test configuration that was used to test phone numbers against specified routes and rules.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes a voice test configuration that was used to test phone numbers against specified routes and rules.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsVoiceTestConfiguration [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
When you're done with those tests and won't need them again, use this cmdlet to remove them.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoiceTestConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoiceTestConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Before implementing voice routes and voice policies, it's a good idea to test them out on various phone numbers to ensure the results are what you're expecting.
When you're done with those tests and won't need them again, use this cmdlet to remove them.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsVoiceTestConfiguration -Identity TestConfig1
```

This example removes the voice test configuration settings with the Identity TestConfig1.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the voice test configuration settings with the Identity TestConfig1.

Remove-CsVoiceTestConfiguration -Identity TestConfig1

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the voice test configuration settings with the Identity TestConfig1.

Remove-CsVoiceTestConfiguration -Identity TestConfig1

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoiceTestConfiguration -Filter *test* | Remove-CsVoiceTestConfiguration
```

This example removes all voice test configuration settings for any configuration with an Identity containing the string test.
The command first calls the Get-CsVoiceTestConfiguration cmdlet with the Filter parameter to retrieve all voice test configurations that have an Identity with the string "test" anywhere in its value.
The resulting set of configurations is then piped to the Remove-CsVoiceTestConfiguration cmdlet and removed.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all voice test configuration settings for any configuration with an Identity containing the string test.
The command first calls the Get-CsVoiceTestConfiguration cmdlet with the Filter parameter to retrieve all voice test configurations that have an Identity with the string "test" anywhere in its value.
The resulting set of configurations is then piped to the Remove-CsVoiceTestConfiguration cmdlet and removed.

Get-CsVoiceTestConfiguration -Filter *test* | Remove-CsVoiceTestConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all voice test configuration settings for any configuration with an Identity containing the string test.
The command first calls the Get-CsVoiceTestConfiguration cmdlet with the Filter parameter to retrieve all voice test configurations that have an Identity with the string "test" anywhere in its value.
The resulting set of configurations is then piped to the Remove-CsVoiceTestConfiguration cmdlet and removed.

Get-CsVoiceTestConfiguration -Filter *test* | Remove-CsVoiceTestConfiguration

## PARAMETERS

### -Identity
A string uniquely identifying the test configuration you want to remove.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration object.
Accepts pipelined input of voice test configuration objects.

## OUTPUTS

###  
Removes an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/abe27005-8325-47d7-8c7c-12bb831b87c7(OCS.14).aspx)

[New-CsVoiceTestConfiguration]()

[Set-CsVoiceTestConfiguration]()

[Get-CsVoiceTestConfiguration]()

[Test-CsVoiceTestConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/abe27005-8325-47d7-8c7c-12bb831b87c7(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/abe27005-8325-47d7-8c7c-12bb831b87c7(OCS.16).aspx)

