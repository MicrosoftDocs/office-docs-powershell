---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsCallParkOrbit
schema: 2.0.0
---

# Remove-CsCallParkOrbit

## SYNOPSIS
Removes a specific call park orbit range.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsCallParkOrbit [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The `Remove-CsCallParkOrbit` cmdlet deletes the call park orbit range with the name passed to the Identity parameter (this parameter is required).
Each call park orbit within an organization must have a unique range of numbers.
Removing a call park orbit frees up the range that was in that call park orbit.
The freed numbers can then be used in a newly defined call park orbit.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsCallParkOrbit -Identity "Redmond CPO 1"
```

In this example, the `Remove-CsCallParkOrbit` cmdlet is used to delete the call park orbit range with the name Redmond CPO 1.


### -------------------------- Example 2 --------------------------
```
Get-CsCallParkOrbit | Remove-CsCallParkOrbit
```

The command in this example removes all call park orbit ranges that have been defined for an organization.
The command first calls the `Get-CsCallParkOrbit` cmdlet with no parameters to retrieve all the defined call park orbit ranges.
It then pipes that collection of call park orbit ranges to the `Remove-CsCallParkOrbit` cmdlet, which removes each call park orbit.


### -------------------------- Example 3 --------------------------
```
Get-CsCallParkOrbit -Filter *Redmond* | Remove-CsCallParkOrbit
```

This command removes all call park orbit ranges that have an identity that includes the string "Redmond", such as "Redmond 501", "CP Redmond 1", and "ARedmond".
The command first calls the `Get-CsCallParkOrbit` cmdlet with the Filter parameter to retrieve all call park orbit ranges that have an Identity with the string Redmond in it.
This collection is piped to the `Remove-CsCallParkOrbit` cmdlet, which removes everything in the collection.


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

[New-CsCallParkOrbit](New-CsCallParkOrbit.md)

[Set-CsCallParkOrbit](Set-CsCallParkOrbit.md)

[Get-CsCallParkOrbit](Get-CsCallParkOrbit.md)
