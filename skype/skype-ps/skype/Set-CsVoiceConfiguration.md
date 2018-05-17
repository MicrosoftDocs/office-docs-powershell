---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsVoiceConfiguration
schema: 2.0.0
---

# Set-CsVoiceConfiguration

## SYNOPSIS
Modifies a list of voice test configurations.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsVoiceConfiguration [[-Identity] <XdsIdentity>] [-VoiceTestConfigurations <PSListModifier>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsVoiceConfiguration [-Instance <PSObject>] [-VoiceTestConfigurations <PSListModifier>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Voice test configurations are used to test a phone number against a specific voice policy, route and dial plan.
This cmdlet can be used to modify voice test configurations from a list containing all the voice test configurations for a Skype for Business Server deployment.

This cmdlet modifies an object of type VoiceConfiguration.
This object is simply a container object for voice test configurations.
Therefore, the use of this cmdlet is not recommended.
To modify voice configurations, modify the individual voice test configurations by calling the `Set-CsVoiceTestConfiguration` cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the `Set-CsVoiceConfiguration` cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsVoiceConfiguration"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$a = Get-CsVoiceConfiguration

$b = $a.VoiceTestConfigurations | Where-Object {$_.Name -eq "TestConfig2"}

$b.DialedNumber = "5551212"

$b.ExpectedTranslatedNumber = "+5551212"

Set-CsVoiceConfiguration -Instance $a
```

It takes several steps to modify a test voice configuration within a voice configuration.
In this example, we start by retrieving the voice configuration object by calling the `Get-CsVoiceConfiguration` cmdlet.
We assign the object retrieved (there will be only one) to the variable $a.

In line 2 of this example we retrieve the contents of the VoiceTestConfigurations property, which is a collection of voice test configuration objects, from variable $a.
We then pipe that collection to the `Where-Object` cmdlet, where we search the collection for the voice test configuration object with a Name equal to the string TestConfig2.
We assign that object to the variable $b.

Next, we modify the TestConfig2 voice test configuration object by assigning new values to the properties DialedNumber and ExpectedTranslatedNumber.
By updating that object we've updated the object in variable $a.
However, that object is still only in memory.
As a final step, we need to save those changes by passing $a to the Instance parameter of the `Set-CsVoiceConfiguration` cmdlet.

This is not the recommended way of modifying a voice configuration.
To modify a voice configuration, simply change the individual voice test configurations with the `Set-CsVoiceTestConfiguration` cmdlet, as shown here:

`Set-CsVoiceTestConfiguration -Identity TestConfig2 -DialedNumber 5551212 -ExpectedTranslatedNumber +5551212`

That one line will accomplish the same task shown in Example 1.


## PARAMETERS

### -Identity
The scope of this object.
The only value possible for this parameter is Global.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
A reference to a voice configuration (Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration) object.
An object of this type can be retrieved by calling the `Get-CsVoiceConfiguration` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -VoiceTestConfigurations
A list of all voice test configurations (Microsoft.Rtc.Management.WritableConfig.Policy.Voice.TestConfiguration objects) defined for the Skype for Business Server deployment.

You should modify individual voice test configuration objects by using the `Set-CsVoiceTestConfiguration` cmdlet.
That is the recommended way of modifying configurations in this list.


```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration object.
The `Set-CsVoiceConfiguration` cmdlet accepts pipelined input of a voice configuration object.

## OUTPUTS

###  
The `Set-CsVoiceConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Policy.Voice.VoiceConfiguration object.

## NOTES

## RELATED LINKS

[Remove-CsVoiceConfiguration](Remove-CsVoiceConfiguration.md)

[Get-CsVoiceConfiguration](Get-CsVoiceConfiguration.md)

[New-CsVoiceTestConfiguration](New-CsVoiceTestConfiguration.md)

[Set-CsVoiceTestConfiguration](Set-CsVoiceTestConfiguration.md)

[Get-CsVoiceTestConfiguration](Get-CsVoiceTestConfiguration.md)

