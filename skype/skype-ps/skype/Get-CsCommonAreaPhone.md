---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsCommonAreaPhone
schema: 2.0.0
---

# Get-CsCommonAreaPhone

## SYNOPSIS
Returns information about the common area phones managed by using Skype for Business Server.
Common area phones are phones that are located in building lobbies, employee lounges, or other areas where they are likely to be used by a number of different people and for a number of different uses.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsCommonAreaPhone [[-Identity] <UserIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-Filter <String>] [-LdapFilter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Skype for Business Server is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

The solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the New-CsCommonAreaPhone cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user.
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.) For example, this command assigns the voice policy CommonAreaPhoneVoicePolicy to all your common area phones:

`Get-CsCommonAreaPhone | Grant-CsVoicePolicy -PolicyName "CommonAreaPhoneVoicePolicy"`

The Get-CsCommonAreaPhone cmdlet provides a way for you to retrieve information about the common area phones configured for use in your organization.
If you call the Get-CsCommonAreaPhone cmdlet without any parameters, the cmdlet will return information about all your common area phones.
Optional parameters provide different ways for you to filter information; for example, you can return all the common area phones that have contact objects in a specified organizational unit (OU), or all the contacts objects located in a specified building.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCommonAreaPhone
```

The command shown in Example 1 returns information about all the common area phones configured for use in the organization.
This is done by calling the Get-CsCommonAreaPhone cmdlet without any parameters.

### -------------------------- Example 2 --------------------------
```
Get-CsCommonAreaPhone -Filter {DisplayName -eq "Building 14 Lobby"}
```

In Example 2, the common area phone with the Active Directory display name "Building 14 Lobby" is returned.
This task is carried out by including the Filter parameter and the filter value {DisplayName -eq "Building 14 Lobby"}; that filter value limits returned objects to common area phones where the DisplayName property is equal to "Building 14 Lobby".

### -------------------------- Example 3 --------------------------
```
Get-CsCommonAreaPhone -Filter {DisplayName -like "Building 14*"}
```

Example 3 returns all the common area phones that have an Active Directory display name that begins with the characters "Building 14".
To do this, the Get-CsCommonAreaPhone cmdlet is called, along with the Filter parameter and the filter value {DisplayName -like "Building 14*"}.
The filter value uses the -like operator and the wildcard string "Building 14*" to limit returned data to phones where the DisplayName property begins with "Building 14" (for example, "Building 14 Lobby", "Building 14 Cafeteria", etc.).

### -------------------------- Example 4 --------------------------
```
Get-CsCommonAreaPhone -Filter {LineUri -eq "tel:+14255551234"}
```

In Example 4, a single common area phone is returned: the phone that has a LineUri property equal to "tel:+14255551234".
Because LineUris must be unique, this command will never return more than a single item.

### -------------------------- Example 5 --------------------------
```
Get-CsCommonAreaPhone -Filter {DialPlan -eq $Null}
```

The command shown in Example 5 returns information about all the common area phones that have not been assigned a dial plan.
This is done by using the Filter parameter and the filter value {DialPlan -eq $Null}; that limits returned data to phones where the DialPlan property is equal to a null value.
If a common area phone has not explicitly been assigned a dial plan, then it automatically uses the global dial plan or, if one exists, the dial plan assigned to the site.

### -------------------------- Example 6 --------------------------
```
Get-CsCommonAreaPhone -OU "ou=Telecommunications,dc=litwareinc,dc=com"
```

Example 6 returns a collection of all the common area phones that have a contact object in the Telecommunications OU in Active Directory Domain Services.
To do this, the Get-CsCommonAreaPhone cmdlet is called along with the OU parameter; the parameter value limits the returned objects to phones that have contacts objects in the OU with the distinguished name ou=Telecommunications,dc=litwareinc,dc=com.


## PARAMETERS

### -Identity
Unique identifier for the common area phone.
Common area phones are identified using the Active Directory distinguished name (DN) of the associated contact object.
By default, common area phones use a globally unique identifier (GUID) as their common name, which means phones will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
Enables you to run the Get-CsCommonAreaPhone cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter, you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the Fully Qualified Domain Name (FQDN) of that computer (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on attributes specific to Skype for Business Server.
For example, you can limit returned data to common area phone contact objects that have been assigned a specific voice policy, or contacts that have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server).
For example, you can limit returned data to contact objects that have been assigned to a specific department or are located in a specific building.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only contact objects representing common area phones in the city of Redmond would look like this:

`-LDAPFilter "l=Redmond"`

In the preceding filter, "l" (a lowercase L) represents the Active Directory attribute (locality); "=" represents the comparison operator (equal to); and "Redmond" represents the filter value.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Enables you to return contact objects from a specific Active Directory organizational unit (OU).
The OU parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs -- AccountsPayable and AccountsReceivable -- common area phone information will be returned from each of these OUs.

When specifying an OU, use the distinguished name of that container; for example: 

`-OU "OU=Finance,dc=litwareinc,dc=com"`

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by a command.
For example, to return seven common area phones (regardless of how many common area phones are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven phones will be returned.
If you set the ResultSize to 7 but you have only three common area phones in your forest, the command will return those three phones, and then complete without error.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
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

### String
Represents the Identity of the common area phone.


## OUTPUTS

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADCommonAreaPhoneContact


## NOTES


## RELATED LINKS

[Move-CsCommonAreaPhone](Move-CsCommonAreaPhone.md)

[New-CsCommonAreaPhone](New-CsCommonAreaPhone.md)

[Remove-CsCommonAreaPhone](Remove-CsCommonAreaPhone.md)

[Set-CsCommonAreaPhone](Set-CsCommonAreaPhone.md)

