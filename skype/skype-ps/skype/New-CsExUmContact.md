---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsExUmContact
schema: 2.0.0
---

# New-CsExUmContact

## SYNOPSIS

Creates a new Auto Attendant or Subscriber Access contact object for hosted Exchange Unified Messaging (UM).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsExUmContact -SipAddress <String> -RegistrarPool <Fqdn> -DisplayNumber <String> -OU <OUIdParameter>
 [-AutoAttendant <Boolean>] [-Description <String>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
When Exchange UM is provided as a hosted service (rather than on-premises), contact objects must be created with this cmdlet to apply the Auto Attendant and Subscriber Access functionality.
These objects are created by calling the New-CsExUmContact cmdlet.

A contact object created with this cmdlet will not be available for use within the system until a hosted voice mail policy has been applied that configures routing for the contact.
You can retrieve hosted voice mail policies by calling the Get-CsHostedVoicemailPolicy cmdlet.
From the policies retrieved you can determine whether an appropriate global or site policy exists, or if a per-user policy exists that needs to be granted to this contact.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```
New-CsExUmContact -SipAddress sip:exumsa1@fabrikam.com -RegistrarPool RedmondPool.litwareinc.com -OU "OU=ExUmContacts,DC=litwareinc,DC=com" -DisplayNumber 2065554567
```

This example calls the New-CsExUmContact cmdlet to create a new Exchange UM Active Directory contact object.
To create a new contact you must supply the SIP address (in this example, sip:exumsa1@fabrikam.com) of the Auto Attendant or Subscriber Access.
In addition, you must supply the name of the pool where the Skype for Business Server Registrar service is running (RedmondPool.litwareinc.com), the OU where this information will be stored (OU=ExUmContacts,DC=litwareinc,DC=com), and the phone number of the Auto Attendant or Subscriber Access (2065554567).
Because we didn't specifically set the AutoAttendant parameter, the default of False will be applied and this contact object will be assumed to be a Subscriber Access contact.




### -------------------------- EXAMPLE 2 -------------------------- 
```
New-CsExUmContact -SipAddress sip:exumaa1@fabrikam.com -RegistrarPool RedmondPool.litwareinc.com -OU "OU=ExUmContacts,DC=litwareinc,DC=com" -DisplayNumber 2065559876 -AutoAttendant $True
```

This example is similar to Example 1 in that it calls the New-CsExUmContact cmdlet to create a new Exchange UM contact.
We again create a new Auto Attendant or Subscriber Access contact, this time with the SIP address sip:exumaa1@fabrikam.com.
We then supply the name of the pool where the Skype for Business Server Registrar service is running (RedmondPool.litwareinc.com), the OU where this information will be stored (OU=ExUmContacts,DC=litwareinc,DC=com), and the phone number of the Auto Attendant or Subscriber Access (2065554567).
The difference in this example is that we set the optional parameter AutoAttendant to True ($True) to show that this object is, in fact, an Auto Attendant contact.



## PARAMETERS

### -SipAddress

The SIP address of the contact.
This must be a new address that does not already exist as a user or contact in Active Directory Domain Services.
This value must begin with the string sip: followed by the SIP address.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegistrarPool


The fully qualified domain name (FQDN) of the pool on which the Registrar service is running.

Note that an Exchange UM contact in Skype for Business Server cannot be moved to pools that are part of Microsoft Office Communications Server 2007 or Microsoft Office Communications Server 2007 R2 deployments.

Full data type: Microsoft.Rtc.Management.Deploy.Fqdn



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayNumber
The telephone number of the contact.
Display numbers for each contact must be unique (for instance, no two Exchange UM contacts can have the same display number).

This value may begin with a plus sign (+) and may contain any number of digits.
The first digit cannot be zero.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
The organizational unit (OU) where this contact will be located in Active Directory.

Full data type: Microsoft.Rtc.Management.AD.OUIdParameter

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAttendant

Specifies whether this contact object is an Auto Attendant.
(Auto Attendant provides a set of voice prompts that allow callers to navigate the phone system and reach the intended party.)

Default: False



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description of this contact.
The description is for use by administrators to identify the type of contact (Auto Attendant or Subscriber Access), the location, provider, or any other information that will identify the purpose of each Exchange UM contact.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns the results of this command.
Running this cmdlet will display the newly created object; including this parameter will simply repeat that output, making the use of this parameter redundant.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact.

## NOTES

## RELATED LINKS

[Remove-CsExUmContact](Remove-CsExUmContact.md)

[Set-CsExUmContact](Set-CsExUmContact.md)

[Get-CsExUmContact](Get-CsExUmContact.md)

[Move-CsExUmContact](Move-CsExUmContact.md)

[Get-CsHostedVoicemailPolicy](Get-CsHostedVoicemailPolicy.md)

