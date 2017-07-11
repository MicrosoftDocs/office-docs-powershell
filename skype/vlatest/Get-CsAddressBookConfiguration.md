---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAddressBookConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about Address Book configuration settings.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns information about Address Book configuration settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsAddressBookConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsAddressBookConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Address Book servers are intermediaries between Active Directory Domain Services (AD DS) and Microsoft Lync Server 2010.
The Address Book server ensures that the user information stored in Lync Server 2010 is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with information stored in the User database.

In addition, Address Book servers periodically generate index files that are downloaded to computers running Lync 2010.
When a user searches for contacts, he or she either search through these index files or search the Address Book index files stored in the Central Management store.

Address Book servers are governed using Address Book configuration settings; these settings determine such things as how often Address Book files are synchronized with the user database and how often these Address Book index files are generated.
When you install Lync Server 2010, a set of global Address Book settings is created for you.
You can also create custom configuration settings that can be applied to individual sites.
These settings, if they exist, apply to any Address Book servers operating in the site, and take precedence over the global settings.Lync Server

You can use the Get-CsAddressBookConfiguration cmdlet to return information about any (or all) of the Address Book settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAddressBookConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsAddressBookConfiguration"}

**Below Content Applies To:** Lync Server 2013

Address Book servers are intermediaries between Active Directory Domain Services (AD DS) and Lync Server.
The Address Book server ensures that the user information stored in Lync Server is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with information stored in the User database.

In addition, Address Book servers periodically generate index files that are downloaded to computers running Lync.
When a user searches for contacts, he or she either search through these index files or search the Address Book index files stored in the Central Management store.

Address Book servers are governed using Address Book configuration settings; these settings determine such things as how often Address Book files are synchronized with the user database and how often these Address Book index files are generated.
When you install Lync Server, a set of global Address Book settings is created for you.
You can also create custom configuration settings that can be applied to individual sites.
These settings, if they exist, apply to any Address Book servers operating in the site, and take precedence over the global settings.

You can use the Get-CsAddressBookConfiguration cmdlet to return information about any (or all) of the Address Book settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAddressBookConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAddressBookConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

Address Book servers are intermediaries between Active Directory Domain Services and Skype for Business Server 2015.
The Address Book server ensures that the user information stored in Skype for Business Server 2015 is in synch with the user information stored in Active Directory.
This is done by periodically synching Address Book files with information stored in the User database.

In addition, Address Book servers periodically generate index files that are downloaded to computers running Skype for Business.
When a user searches for contacts, he or she either search through these index files or search the Address Book index files stored in the Central Management store.

Address Book servers are governed using Address Book configuration settings; these settings determine such things as how often Address Book files are synchronized with the user database and how often these Address Book index files are generated.
When you install Skype for Business Server 2015, a set of global Address Book settings is created for you.
You can also create custom configuration settings that can be applied to individual sites.
These settings, if they exist, apply to any Address Book servers operating in the site, and take precedence over the global settings.

You can use the Get-CsAddressBookConfiguration cmdlet to return information about any (or all) of the Address Book settings currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsAddressBookConfiguration
```

The preceding example returns information about all the Address Book configuration settings in use in your organization.
This is the default behavior if you call Get-CsAddressBookConfiguration without any additional parameters.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information about all the Address Book configuration settings in use in your organization.
This is the default behavior if you call Get-CsAddressBookConfiguration without any additional parameters.

Get-CsAddressBookConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information about all the Address Book configuration settings in use in your organization.
This is the default behavior if you call the Get-CsAddressBookConfiguration cmdlet without any additional parameters.

Get-CsAddressBookConfiguration

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsAddressBookConfiguration -Identity site:Redmond
```

Example 2 returns information for the Address Book configuration settings with the Identity site:Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information for the Address Book configuration settings with the Identity site:Redmond.

Get-CsAddressBookConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information for the Address Book configuration settings with the Identity site:Redmond.

Get-CsAddressBookConfiguration -Identity site:Redmond

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsAddressBookConfiguration -Filter site:*
```

In the preceding example, the Filter parameter and the filter value "site:*" are used to return information about all the Address Book configuration settings that have been applied at the site scope.
The supplied filter value returns information for all the Address Book settings that have an Identity that begins with the string value "site:".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In this example, the Filter parameter and the filter value "site:*" are used to return information about all the Address Book configuration settings that have been applied at the site scope.
The supplied filter value returns information for all the Address Book settings that have an Identity that begins with the string value "site:".

Get-CsAddressBookConfiguration -Filter site:*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In this example, the Filter parameter and the filter value "site:*" are used to return information about all the Address Book configuration settings that have been applied at the site scope.
The supplied filter value returns information for all the Address Book settings that have an Identity that begins with the string value "site:".

Get-CsAddressBookConfiguration -Filter site:*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsAddressBookConfiguration | Where-Object {$_.UseNormalizationRules -eq $True}
```

In Example 4, information is returned for all the Address Book configuration settings where the settings uses normalization rules when parsing phone numbers.
To do this, the command first uses Get-CsAddressBookConfiguration to return a collection of all the Address Book settings in the organization.
That collection is then piped to the Where-Object cmdlet, which selects only those settings where the UseNormalizationRules property is equal to True.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, information is returned for all the Address Book configuration settings where the settings uses normalization rules when parsing phone numbers.
To do this, the command first uses Get-CsAddressBookConfiguration to return a collection of all the Address Book settings in the organization.
That collection is then piped to the Where-Object cmdlet, which selects only those settings where the UseNormalizationRules property is equal to True.

Get-CsAddressBookConfiguration | Where-Object {$_.UseNormalizationRules -eq $True}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, information is returned for all the Address Book configuration settings where the settings uses normalization rules when parsing phone numbers.
To do this, the command first uses the Get-CsAddressBookConfiguration cmdlet to return a collection of all the Address Book settings in the organization.
That collection is then piped to the Where-Object cmdlet, which selects only those settings where the UseNormalizationRules property is equal to True.

Get-CsAddressBookConfiguration | Where-Object {$_.UseNormalizationRules -eq $True}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Unique identifier for the collection of Address Book settings to be returned.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified, then Get-CsAddressBookConfiguration returns a collection of all the Address Book settings in use in the organization.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the collection of Address Book settings to be returned.
To refer to the global settings, use this syntax: -Identity global.
To refer to a collection configured at the site scope, use syntax similar to this: -Identity site:Redmond.

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified, then the Get-CsAddressBookConfiguration cmdlet returns a collection of all the Address Book settings in use in the organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters in order to return a collection (or multiple collections) of Address Book settings.
For example, to return a collection of all the settings configured at the site scope, use this syntax: -Filter site:*.
To return a collection of all the settings that have the string value "EMEA" somewhere in their Identity, use this syntax: -Filter *EMEA*.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
**Below Content Applies To:** Lync Server 2010

Retrieves the Address Book configuration data from the local replica of the  Central Management store rather than from the Central Management store itself.



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves the Address Book configuration data from the local replica of the Central Management store rather than from the Central Management store itself.



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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsAddressBookConfiguration does not accept pipelined input.

###  
None.
The Get-CsAddressBookConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsAddressBookConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.

###  
The Get-CsAddressBookConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/07757a19-f819-4d65-82da-50bf2f157a9b(OCS.14).aspx)

[New-CsAddressBookConfiguration]()

[Remove-CsAddressBookConfiguration]()

[Set-CsAddressBookConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/07757a19-f819-4d65-82da-50bf2f157a9b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/07757a19-f819-4d65-82da-50bf2f157a9b(OCS.16).aspx)

