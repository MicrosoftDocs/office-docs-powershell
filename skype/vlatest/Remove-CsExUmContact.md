---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsExUmContact

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes an Auto Attendant or Subscriber Access contact object for hosted Exchange Unified Messaging (UM).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Removes an Auto Attendant or Subscriber Access contact object for hosted Exchange Unified Messaging (UM).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsExUmContact [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Microsoft Lync Server 2010 works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
When Exchange UM is provided as a hosted service (rather than on-premises), contact objects must be created by using Windows PowerShell to apply the Auto Attendant and Subscriber Access functionality.
Any of the objects that are created can be removed with the Remove-CsExUmContact cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsExUmContact cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the rule-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsExUmContact"}

**Below Content Applies To:** Lync Server 2013

Lync Server works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
When Exchange UM is provided as a hosted service (rather than on-premises), contact objects must be created by using Windows PowerShell to apply the Auto Attendant and Subscriber Access functionality.
Any of the objects that are created can be removed with the Remove-CsExUmContact cmdlet.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsExUmContact cmdlet locally: RTCUniversalUserAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsExUmContact"}

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
When Exchange UM is provided as a hosted service (rather than on-premises), contact objects must be created by using Windows PowerShell to apply the Auto Attendant and Subscriber Access functionality.
Any of the objects that are created can be removed with the Remove-CsExUmContact cmdlet.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsExUmContact -Identity sip:exumsa1@fabrikam.com
```

This example removes the Exchange UM contact with the SIP address exumsa1@fabrikam.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the Exchange UM contact with the SIP address exumsa1@fabrikam.com.

Remove-CsExUmContact -Identity sip:exumsa1@fabrikam.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the Exchange UM contact with the SIP address exumsa1@fabrikam.com.

Remove-CsExUmContact -Identity sip:exumsa1@fabrikam.com

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsExUmContact -Filter {LineURI -like "tel:425*"} | Remove-CsExUmContact
```

This example removes all Exchange UM contacts with LineURI values beginning with tel:425.
The first part of this command calls the Get-CsExUmContact cmdlet with the Filter parameter, using this expression as the filter: LineURI -like "tel:425*".
That filter specifies that we want to retrieve the Exchange UM contact objects that have a LineURI matching the wildcard string tel:425*.
In other words, all line URIs that start with the string tel:425 and end with any set of characters.
Once we have that collection of objects, we pipe the collection to the Remove-CsExUmContact cmdlet, which removes all the items in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example removes all Exchange UM contacts with LineURI values beginning with tel:425.
The first part of this command calls the Get-CsExUmContact cmdlet with the Filter parameter, using this expression as the filter: LineURI -like "tel:425*".
That filter specifies that we want to retrieve the Exchange UM contact objects that have a LineURI matching the wildcard string tel:425*.
In other words, all line URIs that start with the string tel:425 and end with any set of characters.
Once we have that collection of objects, we pipe the collection to the Remove-CsExUmContact cmdlet, which removes all the items in the collection.

Get-CsExUmContact -Filter {LineURI -like "tel:425*"} | Remove-CsExUmContact

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all Exchange UM contacts with LineURI values beginning with tel:425.
The first part of this command calls the Get-CsExUmContact cmdlet with the Filter parameter, using this expression as the filter: LineURI -like "tel:425*".
That filter specifies that we want to retrieve the Exchange UM contact objects that have a LineURI matching the wildcard string tel:425*.
In other words, all line URIs that start with the string tel:425 and end with any set of characters.
Once we have that collection of objects, we pipe the collection to the Remove-CsExUmContact cmdlet, which removes all the items in the collection.

Get-CsExUmContact -Filter {LineURI -like "tel:425*"} | Remove-CsExUmContact

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

The unique identifier of the contact object you want to remove.
Contact identities can be specified using one of four formats: 1) The contact's SIP address; 2) the contact's user principal name (UPN); 3) the contact's domain name and logon name, in the form domain\logon (for example, litwareinc\exum1); and, 4) the contact's Active Directory display name (for example, Team Auto Attendant).

Full data type:  Microsoft.Rtc.Management.AD.UserIdParameter



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

The unique identifier of the contact object you want to remove.
Contact identities can be specified using one of four formats: 1) The contact's SIP address; 2) the contact's user principal name (UPN); 3) the contact's domain name and logon name, in the form domain\logon (for example, litwareinc\exum1); and, 4) the contact's Active Directory display name (for example, Team Auto Attendant).

Full data type: Microsoft.Rtc.Management.AD.UserIdParameter



```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact object.
Accepts pipelined input of Exchange UM contact objects.

## OUTPUTS

###  
This cmdlet does not return an object.
It removes an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d79f7082-f58b-4cc3-a90d-230111e32850(OCS.14).aspx)

[New-CsExUmContact]()

[Set-CsExUmContact]()

[Get-CsExUmContact]()

[Move-CsExUmContact]()

[Online Version](http://technet.microsoft.com/EN-US/library/d79f7082-f58b-4cc3-a90d-230111e32850(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d79f7082-f58b-4cc3-a90d-230111e32850(OCS.16).aspx)

