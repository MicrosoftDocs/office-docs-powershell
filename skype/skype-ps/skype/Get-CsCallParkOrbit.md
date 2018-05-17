---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsCallParkOrbit
schema: 2.0.0
---

# Get-CsCallParkOrbit

## SYNOPSIS
Gets the call park orbit range settings for the organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsCallParkOrbit [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [-Type <OrbitType>]
 [<CommonParameters>]
```

### Filter
```
Get-CsCallParkOrbit [-Filter <String>] [-LocalStore] [-Type <OrbitType>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves the settings for the call park orbits defined for an organization.
You can retrieve a single call park orbit range (specified by the Identity parameter) or you can call the Get-CsCallParkOrbit cmdlet with no parameters to retrieve all the call park orbit ranges defined for an organization.
Call park orbits are composed of settings that specify a range of numbers at which a user can park a call and the servers associated with those number ranges.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCallParkOrbit
```

In this example, the Get-CsCallParkOrbit cmdlet is called without specifying any additional parameters.
When called like this, the Get-CsCallParkOrbit cmdlet returns a collection of all the call park orbit ranges configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsCallParkOrbit -Identity "Redmond CPO 1"
```

In Example 2, the Get-CsCallParkOrbit cmdlet is used to return information about the call park orbit range with the name "Redmond CPO 1".

### -------------------------- Example 3 --------------------------
```
Get-CsCallParkOrbit -Filter *Redmond*
```

The command in this example returns all call park orbit ranges with the string "Redmond" in their Identity.
For example, this command will return call park orbits with identities such as "Redmond 501", "CP Redmond 1", and "ARedmond".
The command uses the Filter parameter with the wildcard character (*) to designate what to search for.
(This search is not case sensitive.)

### -------------------------- Example 4 --------------------------
```
Get-CsCallParkOrbit | Where-Object {$_.CallParkServiceId.toString() -eq "ApplicationServer:pool0.litwareinc.com"}
```

This command returns all call park orbit ranges assigned to the call park service with the ID ApplicationServer:pool0.litwareinc.com.
The Get-CsCallParkOrbit cmdlet retrieves a collection of all call park orbit ranges, and then pipes that collection to the Where-Object cmdlet.
This call to the Where-Object cmdlet finds all call park orbits in that collection with a value of ApplicationServer:pool0.litwareinc.com in their CallParkServiceId properties.
Notice that we add the toString method to the end of the CallParkServiceId parameter name.
The CallParkServiceId is of type WritableServiceId.
In order to compare that value to the supplied string, we must first turn it into a string by calling the toString method.

### -------------------------- Example 5 --------------------------
```
Get-CsCallParkOrbit | Where-Object {$_.NumberRangeStart.StartsWith("*")}
```

The command in this example returns all call park orbit ranges where the range of numbers starts with an * prefix.
After the Get-CsCallParkOrbit cmdlet retrieves a collection of all the call park orbit ranges, the collection is then piped to the Where-Object cmdlet.
The Where-Object cmdlet narrows the collection to only those call park orbit ranges that have a call park location starting with a *.
It does this by checking the StartsWith property of the NumberRangeStart object for the string "*".

### -------------------------- Example 6 --------------------------
```
Get-CsCallParkOrbit | Where-Object {\[Char\]::IsDigit($_.NumberRangeStart\[0\])}
```

The command in this example returns all call park orbit ranges where no prefix has been assigned to the numbers in the range.
(A prefix is the value * or # placed at the beginning of the number.) All call park orbits returned by this command will have ranges that consist only of numbers with no other characters included.
The Get-CsCallParkOrbit cmdlet retrieves a collection of all the call park orbit ranges, and then that collection is piped to the Where-Object cmdlet.
Looking at the criteria in the call to the Where-Object cmdlet, we see this: $_.NumberRangeStart\[0\]).
This returns the first character in the number at the start of the range.
(Note that we need to check only the start of the range--if the starting number in the range doesn't have a prefix, neither will the ending number.) This character is passed to the IsDigit function to determine whether it is a numeric character.
If it is, the call park orbit information for the corresponding collection item will be returned.


## PARAMETERS

### -Identity
The unique name of the call park orbit range.
This name was assigned by the administrator when the call park orbit range was defined.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
This parameter accepts a wildcard string and returns all call park orbit ranges with identities matching that string.
For example, a Filter value of Redmond* will return all call park orbit ranges with names beginning with the string Redmond, such as Redmond 1, Redmond 2, RedmondCPO, etc.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the call park orbit information from the local replica of the Central Management store, rather than the Central Management store itself.

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

### -Type
Specifies the type of call park orbit to be retrieved.
Skype for Business Server 2015 allows for two different types of call park orbits:

- CallPark: 
This is the standard call park orbit, in which a user places a call on hold and then can retrieve that call from any phone by dialing the specified call park number.

- GroupPickup: 
With group pickup, users can answer any incoming call that is made to any member of their call pickup group.
Call pickup groups are configured by administrators.

To return a specified type of a call park orbit, use syntax similar to this:

`-Type GroupPickup`

To return all call park orbit, regardless of type, simply omit the Type parameter.

This parameter was introduced in Lync Server 2013.

```yaml
Type: OrbitType
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Voice.Helpers.DisplayCallParkOrbits


## NOTES


## RELATED LINKS

[New-CsCallParkOrbit](New-CsCallParkOrbit.md)

[Remove-CsCallParkOrbit](Remove-CsCallParkOrbit.md)

[Set-CsCallParkOrbit](Set-CsCallParkOrbit.md)

