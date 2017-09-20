---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsExUmContact
schema: 2.0.0
---

# Get-CsExUmContact

## SYNOPSIS
Retrieves one or more hosted Exchange Unified Messaging (UM) contact objects.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsExUmContact [[-Identity] <UserIdParameter>] [-Filter <String>] [-LdapFilter <String>]
 [-Credential <PSCredential>] [-DomainController <Fqdn>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server works with Exchange UM to provide several voice-related capabilities, including Auto Attendant and Subscriber Access.
When Exchange UM is provided as a hosted service (rather than on-premises), contact objects must be created by using Windows PowerShell to apply the Auto Attendant and Subscriber Access functionality.
This cmdlet retrieves one or more of these contacts.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsExUmContact
```

This example retrieves all Exchange UM contacts defined within a Skype for Business Server 2015 deployment.

### -------------------------- Example 2 --------------------------
```
Get-CsExUmContact -Identity sip:exum1@fabrikam.com
```

This example retrieves the Exchange UM contact with the SIP address sip:exum1@fabrikam.com

### -------------------------- Example 3 --------------------------
```
Get-CsExUmContact -Filter {Enabled -eq $False}
```

In this example, we use the Filter parameter to retrieve all Exchange UM contacts that are not enabled for Skype for Business Server.
We do this by filtering on the Enabled property to see if the value of this property is equal to (-eq) False ($False).
Contacts returned by this command will not function.

### -------------------------- Example 4 --------------------------
```
Get-CsExUmContact -Filter {LineURI -like "tel:555*"}
```

This command filters on the LineURI property to retrieve all Exchange UM contacts with a LineURI beginning with tel:555.
In other words, it retrieves all contacts with a phone number that begins with 555.

### -------------------------- Example 5 --------------------------
```
Get-CsExUmContact -OU "OU=ExUmContacts,DC=Vdomain,DC=com"
```

The command in this example uses the OU parameter to retrieve all Exchange UM contacts that are in the Active Directory OU OU=ExUmContacts,DC=Vdomain,DC=com.


## PARAMETERS

### -Identity
The unique identifier of the contact object you want to retrieve.
Contact identities can be specified using one of four formats: 1) the contact's SIP address; 2) the contact's user principal name (UPN); 3) the contact's domain name and logon name, in the form domain\logon (for example, litwareinc\exum1); and, 4) the contact's Active Directory display name (for example, Team Auto Attendant).

Full data type: Microsoft.Rtc.Management.AD.UserIdParameter

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on Skype for Business Server-specific attributes.
For example, you can limit returned data to contacts that have line URIs beginning with "tel:555".

The Filter parameter uses a subset of the Windows PowerShell filtering syntax used by the Where-Object cmdlet.
For example, a filter that returns only contacts who have been enabled for Enterprise Voice would look like this: {EnterpriseVoiceEnabled -eq $True}, with EnterpriseVoiceEnabled representing the Active Directory attribute; -eq representing the comparison operator (equal to); and $True (a built-in Windows PowerShell variable) representing the filter value.

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

### -LdapFilter
Enables you to limit the returned data by filtering "generic" Active Directory attributes (that is, attributes that are not specific to Skype for Business Server).

The LdapFilter parameter uses LDAP query language when creating filters.

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

### -Credential
Enables you to run the cmdlet under alternate credentials; this might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter, you must first create a PSCredential object by calling the Get-Credential cmdlet.

```yaml
Type: PSCredential
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
Enables you to connect to the specified domain controller in order to retrieve contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-mcs-001) or its fully qualified domain name (for example, atl-mcs-001.litwareinc.com).

Full data type: Microsoft.Rtc.Management.Deploy.Fqdn

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

### -OU
Enables you to limit the retrieved information to a specific Active Directory organizational unit (OU).
Note that this returns data from the specified OU and any child OUs.

When specifying an OU, use the distinguished name of that container; for example, OU=ExUmContacts,dc=litwareinc,dc=com.

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by a command.
For example, to return just seven contacts (regardless of how many contacts are in your forest) simply include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven contacts will be returned.
If you set the ResultSize to 7 but you have only three contacts in your forest, the command will return those three contacts, and then complete without error.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.

Full data type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
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

### String
Accepts a pipelined string value representing the Identity of an Exchange UM contact object.


## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADExUmContact


## NOTES


## RELATED LINKS

[New-CsExUmContact]()

[Remove-CsExUmContact]()

[Set-CsExUmContact]()

[Move-CsExUmContact]()