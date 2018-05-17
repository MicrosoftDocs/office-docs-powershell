---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsExUmContact
schema: 2.0.0
---

# Remove-CsExUmContact

## SYNOPSIS
Removes an Auto Attendant or Subscriber Access contact object for hosted Exchange Unified Messaging (UM).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsExUmContact [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
When Exchange UM is provided as a hosted service (rather than on-premises), contact objects must be created by using Windows PowerShell to apply the Auto Attendant and Subscriber Access functionality.
Any of the objects that are created can be removed with the `Remove-CsExUmContact` cmdlet.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsExUmContact -Identity sip:exumsa1@fabrikam.com
```

This example removes the Exchange UM contact with the SIP address exumsa1@fabrikam.com.


### -------------------------- Example 2 --------------------------
```
Get-CsExUmContact -Filter {LineURI -like "tel:425*"} | Remove-CsExUmContact
```

This example removes all Exchange UM contacts with LineURI values beginning with tel:425.
The first part of this command calls the `Get-CsExUmContact` cmdlet with the Filter parameter, using this expression as the filter: LineURI -like "tel:425*".
That filter specifies that we want to retrieve the Exchange UM contact objects that have a LineURI matching the wildcard string tel:425*.
In other words, all line URIs that start with the string tel:425 and end with any set of characters.
Once we have that collection of objects, we pipe the collection to the `Remove-CsExUmContact` cmdlet, which removes all the items in the collection.


## PARAMETERS

### -Identity
The unique identifier of the contact object you want to remove.
Contact identities can be specified using one of four formats: 1) The contact's SIP address; 2) the contact's user principal name (UPN); 3) the contact's domain name and logon name, in the form domain\logon (for example, litwareinc\exum1) and 4) the contact's Active Directory display name (for example, Team Auto Attendant).

Full data type: Microsoft.Rtc.Management.AD.UserIdParameter


```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact object.
Accepts pipelined input of Exchange UM contact objects.

## OUTPUTS

###  
This cmdlet does not return an object.
It removes an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact.

## NOTES

## RELATED LINKS

[New-CsExUmContact](New-CsExUmContact.md)

[Set-CsExUmContact](Set-CsExUmContact.md)

[Get-CsExUmContact](Get-CsExUmContact.md)

[Move-CsExUmContact](Move-CsExUmContact.md)

