---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsExUmContact
schema: 2.0.0
---

# Set-CsExUmContact

## SYNOPSIS
Modifies an existing Auto Attendant or Subscriber Access contact object for hosted Exchange Unified Messaging (UM).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsExUmContact [-Identity] <UserIdParameter> [-AutoAttendant <Boolean>] [-Description <String>]
 [-DisplayNumber <String>] [-Enabled <Boolean>] [-EnterpriseVoiceEnabled <Boolean>] [-SipAddress <String>]
 [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm]
 [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [<CommonParameters>]
```

## DESCRIPTION

Skype for Business Server works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
When Exchange UM is provided as a hosted service (rather than on premises), contact objects must be created by using Windows PowerShell to apply the Auto Attendant and Subscriber Access functionality.
These objects are created by calling the `New-CsExUmContact` cmdlet and can later be modified by using the `Set-CsExUmContact` cmdlet.

The easiest way to use this cmdlet is often to first call the `Get-CsExUmContact` cmdlet to retrieve an instance of the contact object you want to modify.
Simply pipe the output of the `Get-CsExUmContact` cmdlet command to the `Set-CsExUmContact` cmdlet and assign values to the parameters for the properties you want to change.
(For details, see the Examples section in this topic.) Alternatively, you can call the `Set-CsExUmContact` cmdlet, passing it the Identity of the contact object you want to modify.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsExUmContact -Identity sip:exumsa4@fabrikam.com | Set-CsExUmContact -AutoAttendant $True
```

This example sets the AutoAttendant property of the Exchange UM contact with the SIP address exumsa4@fabrikam.com to True.
We first call the `Get-CsExUmContact` cmdlet to retrieve the contact object.
(We could also have used the contact's Active Directory display name, the contact's user principal name, or the contact's logon name.) This command retrieves the one contact with the provided Identity.
That contact is then passed to the `Set-CsExUmContact` cmdlet, where we set its AutoAttendant parameter to True.


### -------------------------- Example 2 --------------------------
```
Set-CsExUmContact -Identity "CN={1bf6208d-2847-45d0-828f-636f14da858b},OU=ExUmContacts,DC=litwareinc,DC=com" -AutoAttendant $True
```

This example is identical to Example 1, but instead of retrieving the contact by calling the `Get-CsExUmContact` cmdlet and piping that object to the `Set-CsExUmContact` cmdlet, we provide the `Set-CsExUmContact` cmdlet with the Identity of the contact we want to modify.
Notice the format of the Identity: in this case we've used the full distinguished name of the contact object, which includes an auto-generated GUID (generated at the time the contact was created).
We then set the AutoAttendant parameter of the contact to True.


## PARAMETERS

### -Identity
The unique identifier of the contact object you want to modify.
Contact identities can be specified using one of four formats: 1) The contact's SIP address; 2) the contact's user principal name (UPN); 3) the contact's domain name and logon name, in the form domain\logon (for example, litwareinc\exum1) and 4) the contact's Active Directory display name (for example, Team Auto Attendant).

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

### -AutoAttendant
Set the parameter to True if the contact object is an Auto Attendant.
This parameter is False by default.

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

### -DisplayNumber
The telephone number of the contact.
Display numbers for each contact must be unique (no two Exchange UM contacts can have the same display number).
Changing this value will also change the value of the LineURI property.

This value may begin with a plus sign (+) and may contain any number of digits.
The first digit cannot be zero.

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

### -Enabled
Indicates whether or not the contact has been enabled for Skype for Business Server.
Setting this parameter to False will disable the contact, and the Auto Attendant or Subscriber Access associated with this contact will no longer function.

If you disable an account by using the Enabled parameter, the information associated with that account (including assigned hosted voice mail policies) is retained.
If you later re-enable the account using the Enable parameter, the associated account information will be restored.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: CsEnabled
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceEnabled
Indicates whether the contact has been enabled for Enterprise Voice.
If this value is set to False, the Auto Attendant or Subscriber Access feature associated with this contact will no longer be available.

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

### -SipAddress
The SIP address of the contact.
This must be a new address that does not already exist as a user or contact in Active Directory Domain Services.

Changing this value will also change the SIP address stored in the OtherIpPhone property.

The SipAddress can be used as the Identity value for the `Get-CsExUmContact` cmdlet commands to retrieve specific contacts.
When calling that cmdlet, the new SipAddress will be used; queries for the old SIP address will not return an object.


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

### -DomainController
Allows you to specify a domain controller.
If no domain controller is specified, the first available will be used.

```yaml
Type: Fqdn
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
Returns the results of the command.
By default, this cmdlet does not generate any output.

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

### -ExchangeArchivingPolicy
Indicates where the contact's instant messaging sessions are archived.
Allowed values are:

Uninitialized

UseLyncArchivingPolicy

ArchivingToExchange

NoArchiving


```yaml
Type: ExchangeArchivingPolicyOptionsEnum
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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact object.
Accepts pipelined input of Exchange UM contact objects.

## OUTPUTS

###  
This cmdlet modifies an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact.
When the PassThru parameter is used, it also returns an object of this type.

## NOTES

## RELATED LINKS

[New-CsExUmContact]()

[Remove-CsExUmContact]()

[Get-CsExUmContact]()

[Move-CsExUmContact]()
