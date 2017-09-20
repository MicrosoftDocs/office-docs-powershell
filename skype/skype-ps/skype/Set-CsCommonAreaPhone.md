---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsCommonAreaPhone
schema: 2.0.0
---

# Set-CsCommonAreaPhone

## SYNOPSIS
Modifies the property values of a common area phone managed by Skype for Business Server.
Common area phones are phones that are located in building lobbies, employee lounges, or other areas where they are likely to be used by a number of different people and for a number of different uses.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsCommonAreaPhone [-Identity] <UserIdParameter> [-Enabled <Boolean>] [-Description <String>]
 [-DisplayName <String>] [-DisplayNumber <String>] [-DomainController <Fqdn>]
 [-EnterpriseVoiceEnabled <Boolean>] [-SipAddress <String>] [-PassThru] [-WhatIf] [-Confirm]
 [-LineURI <String>] [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [<CommonParameters>]
```

## DESCRIPTION
Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Skype for Business Server is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

One solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the `New-CsCommonAreaPhone` cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user.
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.) This command assigns the voice policy CommonAreaPhoneVoicePolicy to all your common area phones:

`Get-CsCommonAreaPhone | Grant-CsVoicePolicy -PolicyName "CommonAreaPhoneVoicePolicy"`

The `Set-CsCommonAreaPhone` cmdlet provides a way for you to modify the properties of the contact objects associated with common area phones.
Among other things, you can change the contact's Active Directory display name or the line Uniform Resource Identifier (URI) associated with the phone.
You can also use the Enabled parameter to enable and disable the account for use with Skype for Business Server.

In addition, you can configure "hotdesking" for common area phones by using the CsClientPolicy cmdlets.
When a phone is hotdesked, users can log on to the phone using their Skype for Business Server credentials.
Among other things, this gives users easy access to their contacts.
See the help topic for the `Set-CsClientPolicy` cmdlet for more information.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Get-CsCommonAreaPhone -Filter {LineUri -eq "tel:+14255556710"} | Set-CsCommonAreaPhone -DisplayName "Employee Lounge"
```

Example 1 modifies the Active Directory display name for the common area phone with the phone number 1-425-555-6710.
To do this, the `Get-CsCommonAreaPhone` cmdlet is first called along with the Filter parameter; the filter value {LineUri -eq "tel:+14255556710"} limits the returned data to the common area phone where the LineUri property is equal to tel:+14255556710.
The returned object is then piped to the `Set-CsCommonAreaPhone` cmdlet, which sets the value of the DisplayName property to "Employee Lounge".


### -------------------------- Example 2 ------------------------
```
Get-CsCommonAreaPhone | Set-CsCommonAreaPhone -Enabled $True
```

The command shown in Example 2 enables all the common area phones currently configured for use in the organization.
To carry out this task, the command calls the `Get-CsCommonAreaPhone` cmdlet without any parameters in order to return a collection of all the common area phones.
This collection is then piped to the `Set-CsCommonAreaPhone` cmdlet, which takes each item in the collection and sets the Enabled property to True.


### -------------------------- Example 3 ------------------------
```
Get-CsCommonAreaPhone -Filter {Description -eq $Null} | Set-CsCommonAreaPhone -Description "Common area phone"
```

Example 3 adds a generic description to all the common area phones that do not have a value assigned to the Description property.
To do this, the `Get-CsCommonAreaPhone` cmdlet is called along with the Filter parameter; the filter value {Description -eq $Null} ensures that the only items returned are common area phones where the Description property is equal to a null value.
This filtered collection is then piped to the `Set-CsCommonAreaPhone` cmdlet, which assigns the generic description "Common area phone" to each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the common area phone.
Common area phones are identified using the Active Directory distinguished name of the associated contact object.
By default, common area phones use a globally unique identifier (GUID) as their common name; that means phones will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.
Because of that you might find it easier to retrieve common area phones by using the `Get-CsCommonAreaPhone` cmdlet, and then piping the returned objects to the `Set-CsCommonAreaPhone` cmdlet.


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

### -Enabled
Indicates whether or not the contact object for the common area phone has been enabled for Skype for Business Server.

If you disable a contact by using the Enabled parameter, the information associated with that account (including assigned policies and whether or not the contact is enabled for Enterprise Voice, remote call control and/or voice mail integration) is retained.
If you later re-enable the account by using the Enabled parameter, the associated account information will be restored.


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

### -Description
Enables you to modify the Active Directory description attribute for the common area phone.
This provides a way to supply additional information about the phone; for example, you might provide details about who to contact in case of problems with the phone.

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
Enables you to modify the Active Directory display name of the common area phone.

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
Phone number as displayed in Skype for Business.
The DisplayNumber property can be formatted any way you prefer; for example 1-800-555-1234; 1-(800)-555-1234; 1.800.555.1234 and so on.
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

### -DomainController
Enables you to connect to the specified domain controller in order to modify contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-mcs-001) or its fully qualified domain name (FQDN); for example: atl-mcs-001.litwareinc.com.

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

### -EnterpriseVoiceEnabled
Indicates whether the contact object for the common area phone has been enabled for Enterprise Voice, the Voice over Internet Protocol (VoIP) solution offered by Microsoft.
With Enterprise Voice, telephone calls can be made using the Internet rather than using the standard telephone network.

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
Unique identifier that allows the common area phone to communicate with SIP devices such as Skype for Business.
The SIP address must be prefaced by the prefix sip: and include a valid SIP domain.
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

### -LineURI
Phone number for the common area phone.
The line Uniform Resource Identifier (URI) should be specified using the E.164 format and be prefixed by the "TEL:" prefix.
For example: TEL:+14255551297.
Any extension number should be added to the end of the line URI; for example: TEL:+14255551297;ext=51297.

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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADCommonAreaPhoneContact object.

## OUTPUTS

###  
By default, the `Set-CsCommonAreaPhone` cmdlet does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADCommonAreaPhoneContact object.

## NOTES

## RELATED LINKS

[Get-CsCommonAreaPhone]()

[Move-CsCommonAreaPhone]()

[New-CsCommonAreaPhone]()

[Remove-CsCommonAreaPhone]()
