---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsTrunkConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Validates a trunk configuration against a phone number.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Validates a trunk configuration against a phone number.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Test-CsTrunkConfiguration -DialedNumber <PhoneNumber> -TrunkConfiguration <TrunkConfiguration>
 [-CallingNumber <PhoneNumber>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Use this cmdlet to verify that a trunking configuration performs as expected against a dialed phone number.
Each configuration contains specific settings defining the relationship and capabilities between the Mediation Server and the public switched telephone network (PSTN) gateway, IP-public branch exchange (PBX), or Session Border Controller (SBC) at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Test-CsTrunkConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsTrunkConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Use this cmdlet to verify that a trunking configuration performs as expected against a dialed phone number.
Each configuration contains specific settings defining the relationship and capabilities between the Mediation Server and the public switched telephone network (PSTN) gateway, IP-public branch exchange (PBX), or Session Border Controller (SBC) at the service provider.
These settings configure such things as whether media bypass is enabled on this trunk, whether real-time transport control protocol (RTCP) packets are sent under certain conditions, and whether to require secure real-time protocol (SRTP) encryption.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
$tc = Get-CsTrunkConfiguration -Identity Site:Redmond
Test-CsTrunkConfiguration -DialedNumber 4255551212 -TrunkConfiguration $tc
```

This example runs a test against the trunk configuration defined for the Redmond site.
The first line in this example calls the Get-CsTrunkConfiguration cmdlet to retrieve the configuration for the Redmond site (the configuration with the Identity site:Redmond).
The trunk configuration object retrieved is assigned to the variable $tc.

In line 2 we call Test-CsTrunkConfiguration, passing the phone number to test to the DialedNumber parameter, and the trunk configuration we retrieved in line 1 (stored in $tc) to the TrunkConfiguration parameter.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example runs a test against the trunk configuration defined for the Redmond site.
The first line in this example calls the Get-CsTrunkConfiguration cmdlet to retrieve the configuration for the Redmond site (the configuration with the Identity site:Redmond).
The trunk configuration object retrieved is assigned to the variable $tc.

In line 2 we call Test-CsTrunkConfiguration, passing the phone number to test to the DialedNumber parameter, and the trunk configuration we retrieved in line 1 (stored in $tc) to the TrunkConfiguration parameter.

$tc = Get-CsTrunkConfiguration -Identity Site:Redmond

Test-CsTrunkConfiguration -DialedNumber 4255551212 -TrunkConfiguration $tc

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example runs a test against the trunk configuration defined for the Redmond site.
The first line in this example calls the Get-CsTrunkConfiguration cmdlet to retrieve the configuration for the Redmond site (the configuration with the Identity site:Redmond).
The trunk configuration object retrieved is assigned to the variable $tc.

In line 2 we call the Test-CsTrunkConfiguration cmdlet, passing the phone number to test to the DialedNumber parameter, and the trunk configuration we retrieved in line 1 (stored in $tc) to the TrunkConfiguration parameter.

$tc = Get-CsTrunkConfiguration -Identity Site:Redmond

Test-CsTrunkConfiguration -DialedNumber 4255551212 -TrunkConfiguration $tc

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
Trunk configuration objects can be retrieved by calling the Get-CsTrunkConfiguration cmdlet.

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

-CallingNumber "tel:+14255551219"

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

[Online Version](http://technet.microsoft.com/EN-US/library/07f2ef04-49aa-4857-b213-fa98506c0427(OCS.14).aspx)

[New-CsTrunkConfiguration]()

[Remove-CsTrunkConfiguration]()

[Set-CsTrunkConfiguration]()

[Get-CsTrunkConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/07f2ef04-49aa-4857-b213-fa98506c0427(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/07f2ef04-49aa-4857-b213-fa98506c0427(OCS.16).aspx)

