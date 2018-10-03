---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsAdPrincipal
schema: 2.0.0
---

# Get-CsAdPrincipal

## SYNOPSIS
Returns information about Active Directory principals.
These principals include Active Directory objects such as users, groups, contacts, containers, and organizational units.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

```
Get-CsAdPrincipal [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-LDAPFilter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
The Get-CsAdPrincipal cmdlet returns a collection of Active Directory principals that can be used when constructing Persistent Chat membership lists (see the help information for the AllowedMembers and DeniedMembers parameters for the Set-CsPersistentChatCategory cmdlet for more details).
Get-CsAdPrincipal returns information for Active Directory objects such as:

`Users (object class = {top, person, organizationalPerson, user})`

`Groups (object class = {top, group})`

`Contacts (object class = {top, person, organizationalPerson, contact})`

`Containers (object class = {top, container})`

`Organizational Units (object class = {top, organizationalUnit})`

`Domains (object class = {top, domain, domainDNS})`

Among other things, this means that you can use the Get-CsAdPrincipal cmdlet (and the objectClass property) to quickly return information about Active Directory objects such as groups or organizational units.
For example, this command returns the names of all your Active Directory OUs:

`Get-CsAdPrincipal | Where-Object {$_.ObjectClass -match "organizationalUnit"} | Select-Object Name`

The functions carried out by the Get-CsAdPrincipal cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAdPrincipal
```

The command shown in Example 1 returns all the Active Directory principals in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsAdPrincipal -Filter {SipAddress -eq "sip:RedmondMeetingRoom@litwareinc.com"}
```

In Example 2, information is returned for a single Active Directory principal: the principal with the SIP address "sip:RedmondMeetingRoom@litwareinc.com".
This is done by including the Filter parameter and a filter value that looks for principals where the SipAddress property is equal to (-eq) "sip:RedmondMeetingRoom@litwareinc.com".

### -------------------------- Example 3 --------------------------
```
Get-CsAdPrincipal | Where-Object {$_.ObjectClass -contains "contact"}
```

In the preceding example, information is returned for all the Active Directory objects.
To carry out this task, the command first calls the Get-CsAdPrincipal cmdlet without any parameters; this returns a collection of all the Active Directory principals.
That collection is then piped to the Where-Object cmdlet, which selects only those principals where the ObjectClass property contains the string value "contact".


## PARAMETERS

### -Credential
Enables you to run the Get-CsAdPrincipal cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve Active Directory principal information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-dc-001) or its fully qualified domain name (FQDN) (for example, atl-dc-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on attributes specific to Skype for Business Server.

The Filter parameter uses the much of the same Windows PowerShell filtering syntax used by the Where-Object cmdlet.
For example, a filter that returns only principals who are not enabled for Skype for Business Server would look like this:

`-Filter {Enabled -ne $True}`

In that example.
Enabled represents the Active Directory attribute, -ne represents the comparison operator (not equal to), and $True (a built-in Windows PowerShell variable) represents the value True.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Indicates the Identity of the principal account to be retrieved.
Identities are typically specified by using one of four formats: 1) the account SIP address; 2) the user's user principal name (UPN); 3) the account domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the account Active Directory display name (for example, Ken Myer).

You can also reference a user account by using the user's Active Directory distinguished name.

You can use the asterisk (*) wildcard character when using the Display Name as the Identity.
For example, the Identity "* Smith" returns all the users who have a display name that ends with the string value " Smith".

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LDAPFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server).
For example, you can limit returned data to principals who belong to a specific department or who have a specific manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only principals located in the city of Redmond would look like this:

`-LdapFilter "l=Redmond"`

In that example, the "l" (a lowercase L) represents the Active Directory attribute (locality); "=" represents the comparison operator (equal to); and "Redmond" represents the filter value.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Enables you to return information about principals in a specific organizational unit (OU) or container.
The OU parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs -- AccountsPayable and AccountsReceivable - principals will be returned from each of these three OUs.

When specifying an OU, use the distinguished name (DN) of that container; for example:

`-OU "OU=Finance,dc=litwareinc,dc=com"`

To return principals from the Users container, use this syntax:

`-OU "cn=Users,dc=litwareinc,dc=com"`

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by the cmdlet.
For example, to return seven principals (regardless of the number of principals that are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven principals will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.
If you set the ResultSize to 7 but you have only three principals in your forest, the command will return those three principals, and then complete without error.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
String value or object representing an Active Directory user, group, contact, container, and organizational unit.
For example, this syntax returns Active Directory principal information for the Redmond and Dublin OUs:

`"OU=Redmond,DC=litwareinc,DC=com", "OU=Dublin,DC=litwareinc,DC=com" | Get-CsAdPrincipal`

## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADPrincipal


## NOTES


## RELATED LINKS

[New-CsPersistentChatCategory](New-CsPersistentChatCategory.md)

[Set-CsPersistentChatCategory](Set-CsPersistentChatCategory.md)

