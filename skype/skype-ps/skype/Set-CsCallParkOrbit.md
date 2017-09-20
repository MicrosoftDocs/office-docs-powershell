---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsCallParkOrbit
schema: 2.0.0
---

# Set-CsCallParkOrbit

## SYNOPSIS
Sets the properties for an existing call park orbit range within an organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsCallParkOrbit [[-Identity] <XdsGlobalRelativeIdentity>] [[-NumberRangeStart] <String>]
 [[-NumberRangeEnd] <String>] [[-CallParkService] <String>] [-Force] [-WhatIf] [-Confirm] [-Type <OrbitType>]
 [<CommonParameters>]
```

### Instance
```
Set-CsCallParkOrbit [[-NumberRangeStart] <String>] [[-NumberRangeEnd] <String>] [[-CallParkService] <String>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [-Type <OrbitType>] [<CommonParameters>]
```

## DESCRIPTION
Parking a call assigns a received phone call to a number within a specific range for later retrieval.
A call park orbit is the set of numbers defined for this purpose.
The `Set-CsCallParkOrbit` cmdlet enables you to change the number ranges and the ID of the Call Park service.
The new range of numbers must be unique among all call park orbits defined within the organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsCallParkOrbit -Identity "Redmond CPO 1" -NumberRangeStart 500 -NumberRangeEnd 699
```

This example changes the range of numbers for the call park orbit named "Redmond CPO 1" to 500 through 699.
All values within this range must be unique among all call park orbit ranges within the organization.


### -------------------------- Example 2 --------------------------
```
Set-CsCallParkOrbit -Identity "Redmond CPO 2" -NumberRangeStart "*7000" -NumberRangeEnd "*7100"
```

This example changes the range of numbers for the call park orbit named "Redmond CPO 2" to *7000 through *7100.
All values within this range must be unique among all call park orbit ranges within the organization.
Note that, unlike the preceding example, double quote marks were included around the values assigned to NumberRangeStart and NumberRangeEnd.
If these values begin with a * or # (the only non-numeric values allowed) you must enclose the value in double quotes.


## PARAMETERS

### -Identity
The unique identifier of the call park orbit range to be modified.
If the Identity includes spaces, this value must be included within double quotes.

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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.
This object must be of type DisplayCallParkOrbit, which can be retrieved by calling the `Get-CsCallParkOrbit` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -CallParkService
The fully qualified domain name (FQDN) or service ID of the Application service that hosts the Call Park application.
All calls parked to numbers within the range specified by the NumberRangeStart and NumberRangeEnd parameters will be routed to this server or pool.

```yaml
Type: String
Parameter Sets: (All)
Aliases: CallParkServerFqdn
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberRangeStart
The first number in the range for this call park orbit.
The value must be less than or equal to the NumberRangeEnd.
The value must also be the same length as the value of the NumberRangeEnd.

Valid values: Must match the regular expression string (\[\*|#\]?\[1-9\]\d{0,7})|(\[1-9\]\d{0,8}).
This means that the value must be a string beginning with either the character * or # or a number 1 through 9 (the first character cannot be a zero).
If the first character is * or # the following character must be a number 1 through 9 (it cannot be a zero).
Subsequent characters can be any number 0 through 9 up to seven additional characters.
(For example, "#6000", "*92000", and "*95551212".) The number following the * or # must be greater than 100.
If the first character is not * or #, the first character must be a number 1 through 9 (it cannot be zero), followed by up to eight characters, each a number 0 through 9.
(For example, 915551212;41212;300.)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberRangeEnd
The last number in the range for this call park orbit.
The value must be greater than or equal to the NumberRangeStart.
The value must also be the same length as the value of the NumberRangeStart.
For example, if NumberRangeStart is set to 100, NumberRangeEnd cannot be set to 1001.
In addition, if the NumberRangeStart begins with a * or #, then NumberRangeEnd must begin with the same character.

Valid values: Must match the regular expression string (\[\*|#\]?\[1-9\]\d{0,7})|(\[1-9\]\d{0,8}).
This means that the value must be a string beginning with either the character * or # or a number 1 through 9 (the first character cannot be a zero).
If the first character is * or # the following character must be a number 1 through 9 (it cannot be a zero).
Subsequent characters can be any number 0 through 9 up to seven additional characters.
(For example, "#6000", "*92000", and "*95551212".) If the first character is not * or #, the first character must be a number 1 through 9 (it cannot be zero), followed by up to eight characters, each a number 0 through 9.
(For example, 915551212;41212;300.)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 4
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

### -Type
Specifies the type of call park orbit.
Skype for Business Server allows for two different types of call park orbits:

CallPark.
This is the standard call park orbit, in which a user places a call on hold and then can retrieve that call from any phone by dialing the specified call park number.
CallPark is the default orbit type and will be used if the Type parameter is not specified.

GroupPickup.
With group pickup, users can answer any incoming call that is made to any member of their call pickup group.
Call pickup groups are configured by administrators.

To specify a call park orbit type, use syntax similar to this:

`-Type GroupPickup`

This parameter was introduced in the February 2013 release of Lync Server 2013.

```yaml
Type: OrbitType
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
Microsoft.Rtc.Management.Voice.Helpers.DisplayCallParkOrbit object.
Accepts pipelined input of call park orbit objects.

## OUTPUTS

###  
This cmdlet modifies an object of type Microsoft.Rtc.Management.Voice.Helpers.DisplayCallParkOrbit.

## NOTES

## RELATED LINKS

[New-CsCallParkOrbit]()

[Remove-CsCallParkOrbit]()

[Get-CsCallParkOrbit]()
