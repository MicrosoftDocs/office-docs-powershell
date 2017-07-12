---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsCommonAreaPhone

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new common area phone that can be managed by using Microsoft Lync Server 2010.
Common area phones are phones that are located in building lobbies, employee lounges, or other areas where they are likely to be used by a number of different people and for a number of different uses.

**Below Content Applies To:** Lync Server 2013

Creates a new common area phone that can be managed by using Lync Server.
Common area phones are phones that are located in building lobbies, employee lounges, or other areas where they are likely to be used by a number of different people and for a number of different uses.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Creates a new common area phone that can be managed by using Skype for Business Server 2015.
Common area phones are phones that are located in building lobbies, employee lounges, or other areas where they are likely to be used by a number of different people and for a number of different uses.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### DN
```
New-CsCommonAreaPhone -LineUri <String> -RegistrarPool <Fqdn> [-Description <String>] [-DisplayName <String>]
 [-DisplayNumber <String>] -DN <ADObjectId> [-SipAddress <String>] [-PassThru] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### OU
```
New-CsCommonAreaPhone -LineUri <String> -RegistrarPool <Fqdn> [-Description <String>] [-DisplayName <String>]
 [-DisplayNumber <String>] -OU <OUIdParameter> [-SipAddress <String>] [-PassThru] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Lync Server 2010 is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

One solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the New-CsCommonAreaPhone cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user. 
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.) This command assigns the voice policy CommonAreaPhoneVoicePolicy to all your common area phones:

Get-CsCommonAreaPhone | Grant-CsVoicePolicy -PolicyName "CommonAreaPhoneVoicePolicy"

As noted, new common area phones can be created by using the New-CsCommonAreaPhone cmdlet.
New-CsCommonAreaPhone can either create new contact objects for use with common area phones or it can associate existing contact objects with a new common area phone.
For more details, see the OU and the DN parameter descriptions in this topic.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsCommonAreaPhone cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational units (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsCommonAreaPhone"}

**Below Content Applies To:** Lync Server 2013

Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Lync Server is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

One solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the New-CsCommonAreaPhone cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user.
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.) This command assigns the voice policy CommonAreaPhoneVoicePolicy to all your common area phones:

Get-CsCommonAreaPhone | Grant-CsVoicePolicy -PolicyName "CommonAreaPhoneVoicePolicy"

As noted, new common area phones can be created by using the New-CsCommonAreaPhone cmdlet.
New-CsCommonAreaPhone can either create new contact objects for use with common area phones or it can associate existing contact objects with a new common area phone.
For more details, see the OU and the DN parameter descriptions in this topic.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsCommonAreaPhone cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational units (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsCommonAreaPhone"}

**Below Content Applies To:** Skype for Business Server 2015

Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Skype for Business Server 2015 is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

One solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the New-CsCommonAreaPhone cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user.
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.) This command assigns the voice policy CommonAreaPhoneVoicePolicy to all your common area phones:

Get-CsCommonAreaPhone | Grant-CsVoicePolicy -PolicyName "CommonAreaPhoneVoicePolicy"

As noted, new common area phones can be created by using the New-CsCommonAreaPhone cmdlet.
The New-CsCommonAreaPhone cmdlet can either create new contact objects for use with common area phones or it can associate existing contact objects with a new common area phone.
For more details, see the OU and the DN parameter descriptions in this topic.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
New-CsCommonAreaPhone -LineUri tel:+14255556710 -RegistrarPool redmond-cs-001.litwareinc.com -DisplayName "Building 14 Lobby" -OU "ou=Telecommunications,dc=litwareinc,dc=com"
```

The command shown in Example 1 creates a new common area phone for the phone number 1-425-555-6710.
(Note that the LineUri must be specified using the E.164 format.) In addition to specifying the phone number, the command also specifies the Registrar pool (RegistrarPool); the Active Directory display name (DisplayName); and the distinguished name of the OU where the corresponding contact object should be created (OU).

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new common area phone for the phone number 1-425-555-6710.
(Note that the LineUri must be specified using the E.164 format.) In addition to specifying the phone number, the command also specifies the Registrar pool (RegistrarPool); the Active Directory display name (DisplayName); and the distinguished name of the OU where the corresponding contact object should be created (OU).

New-CsCommonAreaPhone -LineUri tel:+14255556710 -RegistrarPool redmond-cs-001.litwareinc.com -DisplayName "Building 14 Lobby" -OU "ou=Telecommunications,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new common area phone for the phone number 1-425-555-6710.
(Note that the LineUri must be specified using the E.164 format.) In addition to specifying the phone number, the command also specifies the Registrar pool (RegistrarPool); the Active Directory display name (DisplayName); and the distinguished name of the OU where the corresponding contact object should be created (OU).

New-CsCommonAreaPhone -LineUri tel:+14255556710 -RegistrarPool redmond-cs-001.litwareinc.com -DisplayName "Building 14 Lobby" -OU "ou=Telecommunications,dc=litwareinc,dc=com"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
New-CsCommonAreaPhone -LineUri tel:+14255556710 -RegistrarPool redmond-cs-001.litwareinc.com -DN "cn=Building 14 Lobby,ou=Telecommunications,dc=litwareinc,dc=com"
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the new common area phone is associated with an existing Active Directory contact object.
To do this, the command employs the DN parameter instead of the OU parameter, using the distinguished name of the existing contact object (cn=Building 14 Lobby,ou=Telecommunications,dc=litwareinc,dc=com) as the parameter value.
In this command the DisplayName is also left out, which means that the new common area phone will use the display name already assigned to the existing contact object.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the new common area phone is associated with an existing Active Directory contact object.
To do this, the command employs the DN parameter instead of the OU parameter, using the distinguished name of the existing contact object (cn=Building 14 Lobby,ou=Telecommunications,dc=litwareinc,dc=com) as the parameter value.
In this command the DisplayName is also left out, which means that the new common area phone will use the display name already assigned to the existing contact object.

New-CsCommonAreaPhone -LineUri tel:+14255556710 -RegistrarPool redmond-cs-001.litwareinc.com -DN "cn=Building 14 Lobby,ou=Telecommunications,dc=litwareinc,dc=com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 is a variation of the command shown in Example 1.
In Example 2, however, the new common area phone is associated with an existing Active Directory contact object.
To do this, the command employs the DN parameter instead of the OU parameter, using the distinguished name of the existing contact object (cn=Building 14 Lobby,ou=Telecommunications,dc=litwareinc,dc=com) as the parameter value.
In this command the DisplayName is also left out, which means that the new common area phone will use the display name already assigned to the existing contact object.

New-CsCommonAreaPhone -LineUri tel:+14255556710 -RegistrarPool redmond-cs-001.litwareinc.com -DN "cn=Building 14 Lobby,ou=Telecommunications,dc=litwareinc,dc=com"

## PARAMETERS

### -LineUri
Phone number for the common area phone.
The line Uniform Resource Identifier (URI) should be specified using the E.164 format, and be prefixed by the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI, for example: TEL:+14255551297;ext=51297.

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
Fully qualified domain name (FQDN) of the Registrar pool where the contact object should be homed.
For example: -RegistrarPool "atl-cs-001.litwareinc.com".

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

### -Description
Enables you to set the Active Directory Description attribute for the common area phone.
In turn, this provides a way for you to supply additional information about the phone; for example, you might want to provide details about who to contact in case of problems with the phone.

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

### -DisplayName
Enables you to set the Active Directory display name of the common area phone.

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
**Below Content Applies To:** Lync Server 2010

Phone number as displayed in Microsoft Lync 2010.
The DisplayNumber property can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; 1.800.555.1234; and so on.
When choosing a display number, keep in mind that this number will be shown on the display screen of the common area phone only if the number can be normalized.
(Normalization is the process of translating number strings into a standard phone number format.) If a normalization rule does not exist for the phone number format used when configuring the display number, the display screen of the common area phone will show the value of the LineUri property rather than the value of the DisplayNumber property.



**Below Content Applies To:** Lync Server 2013

Phone number as displayed in Lync.
The DisplayNumber property can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; 1.800.555.1234; and so on.
When choosing a display number, keep in mind that this number will be shown on the display screen of the common area phone only if the number can be normalized.
(Normalization is the process of translating number strings into a standard phone number format.) If a normalization rule does not exist for the phone number format used when configuring the display number, the display screen of the common area phone will show the value of the LineUri property rather than the value of the DisplayNumber property.



**Below Content Applies To:** Skype for Business Server 2015

Phone number as displayed in Skype for Business.
The DisplayNumber property can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; 1.800.555.1234; and so on.
When choosing a display number, keep in mind that this number will be shown on the display screen of the common area phone only if the number can be normalized.
(Normalization is the process of translating number strings into a standard phone number format.) If a normalization rule does not exist for the phone number format used when configuring the display number, the display screen of the common area phone will show the value of the LineUri property rather than the value of the DisplayNumber property.



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

### -DN
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to associate an existing Active Directory contact object with the new common area phone.
If you have a contact object you want to associate with a common area phone, use the DN parameter followed by the distinguished name of that contact.
For example: -DN "cn=Building 14 Lobby,dc=litwareinc,dc=com".
Note that your command will fail if the specified contact does not exist.
Your command will also fail if the specified contact has already been enabled for Lync Server.
In that case, you must first disable the contact using Disable-CsUser and then run New-CsCommonAreaPhone.

The DN parameter is particularly useful in organizations that have already created contact objects for conference rooms and other entities.
These contacts are often used for scheduling purposes.
By using the DN parameter you can create a new common area phone using one of these pre-existing contact objects.

You cannot use the OU and the DN parameters in the same command.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to associate an existing Active Directory contact object with the new common area phone.
If you have a contact object you want to associate with a common area phone, use the DN parameter followed by the distinguished name of that contact.
For example: -DN "cn=Building 14 Lobby,dc=litwareinc,dc=com".
Note that your command will fail if the specified contact does not exist.
Your command will also fail if the specified contact has already been enabled for Skype for Business Server 2015.
In that case, you must first disable the contact using the Disable-CsUser and cmdlet then run the New-CsCommonAreaPhone cmdlet.

The DN parameter is particularly useful in organizations that have already created contact objects for conference rooms and other entities.
These contacts are often used for scheduling purposes.
By using the DN parameter you can create a new common area phone using one of these pre-existing contact objects.

You cannot use the OU and the DN parameters in the same command.



```yaml
Type: ADObjectId
Parameter Sets: DN
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Distinguished name of the Active Directory organizational unit (OU) where the contact object should be located.
For example: -OU "ou=Redmond,dc=litwareinc,dc=com".

If you include the OU parameter, a new contact will be created in the specified OU, and the contact will automatically be assigned a globally unique identifier (GUID) as its common name.
As a result, the contact object will have a name similar to this: {ce84964a-c4da-4622-ad34-c54ff3ed361f}.

```yaml
Type: OUIdParameter
Parameter Sets: OU
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
**Below Content Applies To:** Lync Server 2010

Unique identifier that allows the common area phone to communicate with SIP devices such as Lync 2010.
The SIP address must be prefaced by the prefix "sip:" and must include a valid SIP domain.
For example: sip:bldg14lobby@litwareinc.com.



**Below Content Applies To:** Lync Server 2013

Unique identifier that allows the common area phone to communicate with SIP devices such as Lync.
The SIP address must be prefaced by the prefix "sip:" and must include a valid SIP domain.
For example: sip:bldg14lobby@litwareinc.com.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier that allows the common area phone to communicate with SIP devices such as Skype for Business.
The SIP address must be prefaced by the prefix "sip:" and must include a valid SIP domain.
For example: sip:bldg14lobby@litwareinc.com.



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
Returns an object representing the common area phone.

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
None.
New-CsCommonAreaPhone does not accept pipelined input.

###  
None.
The New-CsCommonAreaPhone cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsCommonAreaPhone creates new instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADCommonAreaPhoneContact object.

###  
The New-CsCommonAreaPhone cmdlet creates new instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADCommonAreaPhoneContact object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6082d24d-de92-4a3c-8639-5d28341cbc84(OCS.14).aspx)

[Get-CsCommonAreaPhone]()

[Move-CsCommonAreaPhone]()

[Remove-CsCommonAreaPhone]()

[Set-CsCommonAreaPhone]()

[Online Version](http://technet.microsoft.com/EN-US/library/6082d24d-de92-4a3c-8639-5d28341cbc84(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6082d24d-de92-4a3c-8639-5d28341cbc84(OCS.16).aspx)

