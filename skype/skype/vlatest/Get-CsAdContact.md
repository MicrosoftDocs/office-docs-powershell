---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAdContact

## SYNOPSIS
In a multi-forest topology, returns information about user accounts from forests other than your home forest; these are users who have been replicated as contact objects.
The Get-CsAdContact cmdlet returns any user who has a value configured for the msRTCSIP-OriginatorSid attribute.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsAdContact [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [-LDAPFilter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
In a multi-forest topology, users from other forests are represented as contacts.
These contacts are not equivalent to Active Directory contacts; if you use Active Directory Users and Computers to create a new contact, that user will not be returned by the Get-CsAdContact cmdlet.
Instead, the Get-CsAdContact cmdlet only returns information about users from forests other than your home forest.
If you do not have a multi-forest topology then you will not need to call the Get-CsAdContact cmdlet.

By default, members of the following groups are authorized to run the Get-CsAdContact cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

`Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAdContact"}`


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAdContact
```

The command shown in Example 1 returns a collection of all the multi-forest contacts found in Active Directory Domain Services.
Calling the Get-CsAdContact cmdlet without any additional parameters returns all the property values for all the Active Directory contacts.

### -------------------------- Example 2 --------------------------
```
Get-CsAdContact | Select-Object DisplayName, SipAddress
```

Example 2 also returns a collection of all the Active Directory contacts.
In this case, however, that collection is piped to the Select-Object cmdlet, which specifies the only two attributes that will be displayed on the screen: DisplayName and SipAddress.

### -------------------------- Example 3 --------------------------
```
Get-CsAdContact -Identity "Ken Myer"
```

Example 3 returns information for a single Active Directory contact: the contact with the Identity "Ken Myer".

### -------------------------- Example 4 --------------------------
```
Get-CsAdContact -LdapFilter "Organization=Fabrikam"
```

In Example 4, the command returns all the Active Directory contacts who work for Fabrikam.
To do this, the Get-CsAdContact cmdlet is called, along with the LdapFilter parameter.
In this example, the limits the returned data to contacts that have their Organization attribute set to "Fabrikam".

### -------------------------- Example 5 --------------------------
```
$x = Get-Credential -Credential "litwareinc\administrator"

Get-CsAdContact -Credential $x
```

The two commands shown in Example 5 illustrate the use of the Credential parameter, which enables you to run the Get-CsAdContact cmdlet under alternate credentials.

In the first command, the Get-Credential cmdlet is called in order to create a PSCredential object for the account litwareinc\administrator.
This command displays a Credential Request dialog box for the user litwareinc\administrator; after you supply the password for this account, that credential information will be stored in the variable $x.

In the second command, the Get-CsAdContact cmdlet is called along with the Credential parameter.
The parameter value $x indicates that the Get-CsAdContact cmdlet should be run under the account litwareinc\administrator.


## PARAMETERS

### -Identity
Indicates the Identity of the contact to be returned.
Contact Identities can be specified by using one of three formats: 1) the contact's SIP address; 2) the contact's Active Directory distinguished name; and, 3) the contact's Active Directory display name (for example, Ken Myer).

You can use the asterisk (*) wildcard character when using the Display Name as the contact Identity.
For example, the Identity "* Smith" returns all the contacts with a display name that ends in the string value "Smith".

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

### -Credential
Enables you to run the Get-CsAdContact cmdlet under alternate credentials; this might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter you must first create a PSCredential object using the Get-Credential cmdlet.
For details, see the Help topic for Get-Credential.

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
To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (for example, atl-cs-001.litwareinc.com).

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

### -Filter
Enables you to limit the returned data by filtering on attributes specific to Skype for Business Server.

The Filter parameter uses the same Windows PowerShell filtering syntax used by the Where-Object cmdlet.
For example, a filter that returns only contacts who have a SIP address that ends with "fabrikam.com" would look like this: {SipAddress -like "*@fabrikam.com"}, with SipAddress representing the Active Directory attribute; -like representing the comparison operator; and "*@fabrikam.com" representing the filter value.

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

### -OU
Enables you to limit the retrieved information from a specific Active Directory organizational unit (OU) or container.
This parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs: AccountsPayable and AccountsReceivable.
contacts will be returned from each of these three OUs.

When specifying an OU, use the distinguished name of that container; for example: OU=Finance,dc=litwareinc,dc=com.

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
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven contacts (regardless of the number of contacts that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which 7 users will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three contacts in your forest, the command will return those three contacts and then complete without error.

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

### -LDAPFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes.
For example, you can limit returned data to contacts who work in a specific department, or contacts that have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns the contact that has the telephone number 1-425-555-1298 would look like this: "telephoneNumber=1-425-555-1298", with "telephoneNumber" representing the Active Directory attribute; "=" representing the comparison operator (equal to); and "1-425-555-1298" representing the filter value.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### String
The Get-CsAdContact cmdlet accepts a pipelined string value representing the Identity of a user account.


## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.ADContact


## NOTES


## RELATED LINKS

[Get-CsAdUser]()

[Get-CsUser]()