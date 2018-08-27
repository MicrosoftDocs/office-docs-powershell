---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: Set-Contact
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || eop-ps"
---

# Set-Contact

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-Contact cmdlet to modify contact object settings. If the contact is a mail contact, you can use the Set-MailContact cmdlet to modify other Microsoft Exchange settings that aren't available by using the Set-Contact cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-Contact [-Identity] <ContactIdParameter> [-AllowUMCallsFromNonUsers <None | SearchEnabled>]
 [-AssistantName <String>] [-City <String>] [-Company <String>] [-Confirm] [-CountryOrRegion <CountryInfo>]
 [-CreateDTMFMap <$true | $false>] [-Department <String>] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-Fax <String>] [-FirstName <String>] [-HomePhone <String>] [-IgnoreDefaultScope] [-Initials <String>]
 [-LastName <String>] [-Manager <UserContactIdParameter>] [-MobilePhone <String>] [-Name <String>]
 [-Notes <String>] [-Office <String>] [-OtherFax <MultiValuedProperty>] [-OtherHomePhone <MultiValuedProperty>]
 [-OtherTelephone <MultiValuedProperty>] [-Pager <String>] [-Phone <String>] [-PhoneticDisplayName <String>]
 [-PostalCode <String>] [-PostOfficeBox <MultiValuedProperty>] [-SeniorityIndex <Int32>]
 [-SimpleDisplayName <String>] [-StateOrProvince <String>] [-StreetAddress <String>]
 [-TelephoneAssistant <String>] [-Title <String>] [-UMCallingLineIds <MultiValuedProperty>]
 [-UMDtmfMap <MultiValuedProperty>] [-WebPage <String>] [-WhatIf] [-WindowsEmailAddress <SmtpAddress>]
 [-GeoCoordinates <GeoCoordinates>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-Contact -Identity "contoso.com/Users/Arlene Huff" -City "Seattle" -Company "Contoso"
```

This example makes the following changes to the existing contact named Arlene Huff in the Users container in the Active Directory domain contoso.com:

Change the City parameter value to Seattle.

Change the Company parameter value to Contoso.

## PARAMETERS

### -Identity
The Identity parameter specifies the contact that you want to modify. You can use any value that uniquely identifies the contact.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

```yaml
Type: ContactIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowUMCallsFromNonUsers
The AllowUMCallsFromNonUsers parameter specifies whether to exclude the contact from directory searches.

```yaml
Type: None | SearchEnabled
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssistantName
The AssistantName parameter specifies the name of the contact's assistant.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -City
The City parameter specifies the contact's city.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Company
The Company parameter specifies the contact's company.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegion
The CountryOrRegion parameter specifies the contact's country or region.

```yaml
Type: CountryInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CreateDTMFMap
The CreateDTMFMap parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are:

- $true: A DTMF map is created for the recipient. This is the default value.

- $false: A DTMF map isn't created for the recipient.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Department
The Department parameter specifies the contact's department.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the contact. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaninful only if the contact is mail-enabled.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fax
The Fax parameter specifies the contact's fax number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstName
The FirstName parameter specifies the user's first name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HomePhone
The HomePhone parameter specifies the contact's home telephone number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Initials
The Initials parameter specifies the user's middle initials.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastName
The LastName parameter specifies the user's last name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Manager
The Manager parameter specifies the contact's manager.

```yaml
Type: UserContactIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MobilePhone
The MobilePhone parameter specifies the contact's primary mobile phone number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the unique name of the contact. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Office
The Office parameter specifies the user's physical office name or number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OtherFax
The OtherFax parameter specifies the contact's alternative fax number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OtherHomePhone
The OtherHomePhone parameter specifies the contact's alternative home telephone number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OtherTelephone
The OtherTelephone parameter specifies the contact's alternative office telephone number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pager
The Pager parameter specifies the contact's pager number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Phone
The Phone parameter specifies the contact's office telephone number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneticDisplayName
The PhoneticDisplayName parameter specifies an alternate spelling of the user's name that's used for text to speech in Unified Messaging (UM) environments. Typically, you use this parameter when the pronunciation and spelling of the user's name don't match. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostalCode
The PostalCode parameter specifies the contact's postal code.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PostOfficeBox
The PostOfficeBox parameter specifies the contact's post office box number.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SeniorityIndex
The SeniorityIndex parameter specifies the order in which this contact will display in a hierarchical address book. A contact with a value of 2 will display higher in an address book than a contact with a value of 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleDisplayName
The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z

- A - Z

- 0 - 9

- "\<space\>", """, "'", "(", ")", "+", ",", "-", ".", "/", ":" and "?".

This parameter is meaningful only if the contact is mail-enabled.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StateOrProvince
The StateOrProvince parameter specifies the contact's state or province.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StreetAddress
The StreetAddress parameter specifies the contact's physical address.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneAssistant
The TelephoneAssistant parameter specifies the telephone number of the contact's assistant.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
The Title parameter specifies the contact's title.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMCallingLineIds
The UMCallingLineIds parameter specifies telephone numbers or extensions that can be mapped to a Unified Messaging (UM)-enabled user. You can specify more than one telephone number for each user, separated by a comma. Values for this parameter must be less than 128 characters in length and may include an optional plus sign (+) that precedes the numbers. Each UM-enabled user must have a unique UMCallingLineIds parameter value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDtmfMap
The UMDtmfMap parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax:

- emailAddress:\<integers\>

- lastNameFirstName:\<integers\>

- firstNameLastName:\<integers\>

To enter values that overwrite all existing entries, use the following syntax: emailAddress:\<integers\>,lastNameFirstName:\<integers\>,firstNameLastName:\<integers\>.

If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only emailAddress:\<integers\>, all existing lastNameFirstName and firstNameLastName values are removed.

To add or remove values without affecting other existing entries, use the following syntax: @{Add="emailAddress:\<integers\>","lastNameFirstName:\<integers\>","firstNameLastName:\<integers\>"; Remove="emailAddress:\<integers\>","lastNameFirstName:\<integers\>","firstNameLastName:\<integers\>"}.

If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use @{Add="emailAddress:\<integers1\>","emailAddress:\<intgers2\>} to add two new values for emailAddress without affecting the existing lastNameFirstName and firstNameLastName values.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebPage
The WebPage parameter specifies the contact's web page.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsEmailAddress
The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.

- In environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GeoCoordinates
The GeoCoordinates parameter specifies the contact's physical location in latitude, longitude and altitude coordinates. Use this parameter to specify the global position of the contact's location. You have to specify one of the following sets of coordinates; use semicolons to separate the values:

- Latitude and longitude: For example, "47.644125;-122.122411"

- Latitude, longitude and altitude: For example, "47.644125;-122.122411;161.432"

```yaml
Type: GeoCoordinates
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/c86ca5af-bb1d-4619-8af8-9f04c83d84c5.aspx)
