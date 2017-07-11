---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Test-CsInterTrunkRouting

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Verifies the route and the PSTN usage used when routing a phone call made from a specified SIP trunk.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Verifies the route and the PSTN usage used when routing a phone call made from a specified SIP trunk.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Test-CsInterTrunkRouting -TargetNumber <PhoneNumber> -TrunkConfiguration <TrunkConfiguration> [-Force]
 [-RouteSettings <PstnRoutingSettings>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Test-CsInterTrunkRouting verifies that calls can be routed from one SIP to another.
To do this, the cmdlet is given a phone number and a trunk configuration; Test-CsInterTrunkRouting will then report back matching routes and matching PSTN usages for the specified number.
Note that calls can be routed between trunks only if the trunks have a number pattern that matches the specified phone number and only if the trunks share at least one PSTN usage.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Test-CsInterTrunkRouting"}

Lync Server Control Panel: The functions carried out by the Test-CsInterTrunkRouting cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

The Test-CsInterTrunkRouting verifies that calls can be routed from one SIP to another.
To do this, the cmdlet is given a phone number and a trunk configuration; Test-CsInterTrunkRouting will then report back matching routes and matching PSTN usages for the specified number.
Note that calls can be routed between trunks only if the trunks have a number pattern that matches the specified phone number and only if the trunks share at least one PSTN usage.

Skype for Business Server Control Panel: The functions carried out by the Test-CsInterTrunkRouting cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 return the matching routes and matching phone usages that enable users to call the phone number 1-206-555-1219 using the trunk configuration settings for the Redmond site.

$trunk = Get-CsTrunkConfiguration -Identity "site:Redmond"

Test-CsInterTrunkRouting -TargetNumber "tel:+12065551219" -TrunkConfiguration $trunk

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 return the matching routes and matching phone usages that enable users to call the phone number 1-206-555-1219 using the trunk configuration settings for the Redmond site.

$trunk = Get-CsTrunkConfiguration -Identity "site:Redmond"

Test-CsInterTrunkRouting -TargetNumber "tel:+12065551219" -TrunkConfiguration $trunk

## PARAMETERS

### -TargetNumber
PSTN telephone number to be called when conducting the test.
The target phone number should specified using the E.164 format, which means that the number will look something like this:

-TargetNumber "tel:+12065551219"

The phone number should include the "tel:" prefix followed by a plus sign (+), the country/region calling code (1), the area code (206) and the phone number (5551219).
Do not use dashes, parentheses, or any other characters when specifying the phone number.

```yaml
Type: PhoneNumber
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrunkConfiguration
Object reference to the trunk configuration being tested.
To create this object reference, use a command similar to this:

$trunk = Get-CsTrunkConfiguration -Identity "site:Redmond"

```yaml
Type: TrunkConfiguration
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteSettings
Object reference that enables you to specify a collection of voice routing configuration settings when calling Test-CsInterTrunkRouting.
To create this object reference, use a command similar to this:

$route = Get-CsRoutingConfiguration -Identity "global"

```yaml
Type: PstnRoutingSettings
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
None.
Test-CsInterTrunkRouting does not accept pipelined input.

## OUTPUTS

###  
Test-CsInterTrunkRouting returns instances of the Microsoft.Rtc.Management.Voice.InterTrunkRoutingTestResult object.

## NOTES

## RELATED LINKS

[Get-CsTrunk]()

[Get-CsTrunkConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/2248d29a-8a2a-42b1-ab6b-a6c1d74b0455(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/2248d29a-8a2a-42b1-ab6b-a6c1d74b0455(OCS.16).aspx)

