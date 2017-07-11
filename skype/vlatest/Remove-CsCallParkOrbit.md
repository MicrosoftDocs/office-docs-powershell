---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsCallParkOrbit

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes a specific call park orbit range.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes a specific call park orbit range.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsCallParkOrbit [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

The Remove-CsCallParkOrbit cmdlet deletes the call park orbit range with the name passed to the Identity parameter (this parameter is required).
Each call park orbit within an organization must have a unique range of numbers.
Removing a call park orbit frees up the range that was in that call park orbit.
The freed numbers can then be used in a newly defined call park orbit.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsCallParkOrbit cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsCallParkOrbit"}

Below Content Applies To: Skype for Business Server 2015

The Remove-CsCallParkOrbit cmdlet deletes the call park orbit range with the name passed to the Identity parameter (this parameter is required).
Each call park orbit within an organization must have a unique range of numbers.
Removing a call park orbit frees up the range that was in that call park orbit.
The freed numbers can then be used in a newly defined call park orbit.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsCallParkOrbit -Identity "Redmond CPO 1"
```

In this example, Remove-CsCallParkOrbit is used to delete the call park orbit range with the name Redmond CPO 1.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In this example, Remove-CsCallParkOrbit is used to delete the call park orbit range with the name Redmond CPO 1.

Remove-CsCallParkOrbit -Identity "Redmond CPO 1"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In this example, the Remove-CsCallParkOrbit cmdlet is used to delete the call park orbit range with the name Redmond CPO 1.

Remove-CsCallParkOrbit -Identity "Redmond CPO 1"

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsCallParkOrbit | Remove-CsCallParkOrbit
```

The command in this example removes all call park orbit ranges that have been defined for an organization.
The command first calls the Get-CsCallParkOrbit cmdlet with no parameters to retrieve all the defined call park orbit ranges.
It then pipes that collection of call park orbit ranges to the Remove-CsCallParkOrbit cmdlet, which removes each call park orbit.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command in this example removes all call park orbit ranges that have been defined for an organization.
The command first calls the Get-CsCallParkOrbit cmdlet with no parameters to retrieve all the defined call park orbit ranges.
It then pipes that collection of call park orbit ranges to the Remove-CsCallParkOrbit cmdlet, which removes each call park orbit.

Get-CsCallParkOrbit | Remove-CsCallParkOrbit

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command in this example removes all call park orbit ranges that have been defined for an organization.
The command first calls the Get-CsCallParkOrbit cmdlet with no parameters to retrieve all the defined call park orbit ranges.
It then pipes that collection of call park orbit ranges to the Remove-CsCallParkOrbit cmdlet, which removes each call park orbit.

Get-CsCallParkOrbit | Remove-CsCallParkOrbit

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsCallParkOrbit -Filter *Redmond* | Remove-CsCallParkOrbit
```

This command removes all call park orbit ranges that have an identity that includes the string "Redmond", such as "Redmond 501", "CP Redmond 1", and "ARedmond".
The command first calls Get-CsCallParkOrbit with the Filter parameter to retrieve all call park orbit ranges that have an Identity with the string Redmond in it.
This collection is piped to Remove-CsCallParkOrbit, which removes everything in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This command removes all call park orbit ranges that have an identity that includes the string "Redmond", such as "Redmond 501", "CP Redmond 1", and "ARedmond".
The command first calls Get-CsCallParkOrbit with the Filter parameter to retrieve all call park orbit ranges that have an Identity with the string Redmond in it.
This collection is piped to Remove-CsCallParkOrbit, which removes everything in the collection.

Get-CsCallParkOrbit -Filter *Redmond* | Remove-CsCallParkOrbit

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This command removes all call park orbit ranges that have an identity that includes the string "Redmond", such as "Redmond 501", "CP Redmond 1", and "ARedmond".
The command first calls the Get-CsCallParkOrbit cmdlet with the Filter parameter to retrieve all call park orbit ranges that have an Identity with the string Redmond in it.
This collection is piped to the Remove-CsCallParkOrbit cmdlet, which removes everything in the collection.

Get-CsCallParkOrbit -Filter *Redmond* | Remove-CsCallParkOrbit

## PARAMETERS

### -Identity
The name of the call park orbit range.
This name was assigned by the administrator when the call park orbit range was defined.

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
Microsoft.Rtc.Management.Voice.Helpers.DisplayCallParkOrbit object.
Accepts pipelined input of call park orbit objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.Voice.Helpers.DisplayCallParkOrbit.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/b8e7c236-f8de-45bd-966b-60c815b37aed(OCS.14).aspx)

[New-CsCallParkOrbit]()

[Set-CsCallParkOrbit]()

[Get-CsCallParkOrbit]()

[Online Version](http://technet.microsoft.com/EN-US/library/b8e7c236-f8de-45bd-966b-60c815b37aed(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b8e7c236-f8de-45bd-966b-60c815b37aed(OCS.16).aspx)

