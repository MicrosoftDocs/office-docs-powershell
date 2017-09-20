---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsCallParkOrbit

## SYNOPSIS

Creates a new, named range of numbers assigned for parking calls within an organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsCallParkOrbit [-Identity] <XdsGlobalRelativeIdentity> [-NumberRangeStart] <String>
 [-NumberRangeEnd] <String> [-CallParkService] <String> [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-Type <OrbitType>] [<CommonParameters>]
```

## DESCRIPTION

Parking a call assigns a received phone call to a specific number for later retrieval.
A call park orbit range is the set of call park locations assigned to a specific Call Park service for this purpose.
The New-CsCallParkOrbit cmdlet defines the numbers for a call park orbit range and applies them to a specific service.
Calls parked within the given range will be parked on the specified Call Park service.
You can create multiple call park orbits; each must have a globally unique name and a unique range of numbers.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsCallParkOrbit -Identity "Redmond CPO 1" -NumberRangeStart 100 -NumberRangeEnd 199 -CallParkService ApplicationServer:pool0.litwareinc.com
```

This example creates a new call park orbit named "Redmond CPO 1" on the Application Server with the service ID ApplicationServer:pool0.litwareinc.com.
The available number range for this call park orbit is 100 through 199.


### -------------------------- EXAMPLE 2 -------------------------- 
```

New-CsCallParkOrbit -Identity "Redmond CPO 2" -NumberRangeStart "*1000" -NumberRangeEnd "*1999" -CallParkService pool0.litwareinc.com
```

This example creates a new call park orbit named "Redmond CPO 2" on the Call Park application server with the FQDN pool0.litwareinc.com.
The available range for this call park orbit is *1000 through *1999.


### -------------------------- EXAMPLE 3 -------------------------- 
```

New-CsCallParkOrbit -Identity "Redmond CPO 3" -NumberRangeStart "#1000" -NumberRangeEnd "#1999" -CallParkService ApplicationServer:redmond.litwareinc.com

```

This example creates a new call park orbit range named "Redmond CPO 3" on the Call Park application server with the service ID ApplicationServer:redmond.litwareinc.com.
The available range for this call park orbit is #1000 through #1999.

## PARAMETERS

### -Identity

The name of the call park orbit range.
This name must be unique within the Skype for Business Server deployment.
This string can be any value, but should be something that allows for easy identification of the particular call park orbit range.
All call park orbit ranges are created with a global scope.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
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

Required: True
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
(For example, #6000, *92000, and *95551212.) The number following the * or # must be greater than 100.
If the first character is not * or #, the first character must be a number 1 through 9 (it cannot be zero), followed by up to eight characters, each a number 0 through 9.
(For example, 915551212;41212;300)

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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
(For example, #6000, *92000, and *95551212.) If the first character is not * or #, the first character must be a number 1 through 9 (it cannot be zero), followed by up to eight characters, each a number 0 through 9.
(For example: 915551212;41212;300)



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -InMemory

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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
Specifies the type of call park orbit being created.
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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
This cmdlet creates an object of type Microsoft.Rtc.Management.Voice.Helpers.DisplayCallParkOrbit.

## NOTES

## RELATED LINKS

[Remove-CsCallParkOrbit]()

[Set-CsCallParkOrbit]()

[Get-CsCallParkOrbit]()

