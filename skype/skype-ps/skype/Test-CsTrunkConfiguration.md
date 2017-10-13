---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Test-CsTrunkConfiguration
schema: 2.0.0
---

# Test-CsTrunkConfiguration

## SYNOPSIS
Validates a trunk configuration against a phone number.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsTrunkConfiguration -DialedNumber <PhoneNumber> -TrunkConfiguration <TrunkConfiguration>
 [-CallingNumber <PhoneNumber>] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to verify that a trunking configuration performs as expected against a dialed phone number.
Each configuration contains specific settings defining the relationship and capabilities between the Mediation Server and the public switched telephone network (PSTN) gateway, IP-public branch exchange (PBX), or Session Border Controller (SBC) at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$tc = Get-CsTrunkConfiguration -Identity Site:Redmond

Test-CsTrunkConfiguration -DialedNumber 4255551212 -TrunkConfiguration $tc
```

This example runs a test against the trunk configuration defined for the Redmond site.
The first line in this example calls the `Get-CsTrunkConfiguration` cmdlet to retrieve the configuration for the Redmond site (the configuration with the Identity site:Redmond).
The trunk configuration object retrieved is assigned to the variable $tc.

In line 2 we call the `Test-CsTrunkConfiguration` cmdlet, passing the phone number to test to the DialedNumber parameter, and the trunk configuration we retrieved in line 1 (stored in $tc) to the TrunkConfiguration parameter.


## PARAMETERS

### -DialedNumber
The phone number against which to test the configuration.

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

### -TrunkConfiguration
A reference to a trunk configuration object against which to run the test.
Trunk configuration objects can be retrieved by calling the `Get-CsTrunkConfiguration` cmdlet.

```yaml
Type: TrunkConfiguration
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -CallingNumber
When specified, returns the matched outbound translation rules for the specified phone number.
For example:

`-CallingNumber "tel:+14255551219"`

```yaml
Type: PhoneNumber
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.WritableConfig.Settings.TrunkConfiguration.TrunkConfiguration object.
Accepts pipelined input of a trunk configuration object.

## OUTPUTS

###  
Returns a value of type Microsoft.Rtc.Management.Voice.TrunkConfigurationTestResult.

## NOTES

## RELATED LINKS

[New-CsTrunkConfiguration](New-CsTrunkConfiguration.md)

[Remove-CsTrunkConfiguration](Remove-CsTrunkConfiguration.md)

[Set-CsTrunkConfiguration](Set-CsTrunkConfiguration.md)

[Get-CsTrunkConfiguration](Get-CsTrunkConfiguration.md)
