---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsAddressBookConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Creates a new collection of Address Book configuration settings.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Creates a new collection of Address Book configuration settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsAddressBookConfiguration [-Identity] <XdsIdentity> [-EnableFileGeneration <Boolean>]
 [-IgnoreGenericRules <Boolean>] [-KeepDuration <UInt32>] [-MaxDeltaFileSizePercentage <UInt32>]
 [-RunTimeOfDay <DateTime>] [-SynchronizePollingInterval <TimeSpan>] [-UseNormalizationRules <Boolean>]
 [-Force] [-InMemory] [-WhatIf] [-Confirm] [-EnablePhotoSearch <Boolean>] [-EnableSearchByDialPad <Boolean>]
 [-MaxFileShareThreadCount <Int32>] [-PhotoCacheRefreshInterval <TimeSpan>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Address Book servers are intermediaries between AD DS and Microsoft Lync Server 2010.
The Address Book server ensures that the user information stored in Lync Server 2010 is in synch with the user information stored in AD DS.
This is done by periodically synching Address Book files with information stored in the User database.

In addition, Address Book servers periodically generate index files that are downloaded to computers running Lync 2010.
When a user searches for contacts, he or she either search through these index files or search the Address Book index files stored in the Central Management store.

Address Book servers are governed using Address Book configuration settings; these settings determine such things as how often Address Book files are synchronized with the user database and how often these Address Book index files are generated.
When you install Lync Server, a set of global Address Book settings is created for you.
You can also create custom configuration settings that can be applied to individual sites.
These settings, if they exist, apply to any Address Book servers operating in the site, and take precedence over the global settings.

Site-level settings are created by using the New-CsAddressBookConfiguration cmdlet.
You can only create settings at the site scope; if you try to create new settings anywhere else, including the global scope, your command will fail.
Your command will also fail if the site in question already contains a collection of Address Book settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsAddressBookConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "New-CsAddressBookConfiguration"}

Below Content Applies To: Lync Server 2013

Address Book servers are intermediaries between AD DS and Lync Server.
The Address Book server ensures that the user information stored in Lync Server is in synch with the user information stored in AD DS.
This is done by periodically synching Address Book files with information stored in the User database.

In addition, Address Book servers periodically generate index files that are downloaded to computers running Lync.
When a user searches for contacts, he or she either search through these index files or search the Address Book index files stored in the Central Management store.

Address Book servers are governed using Address Book configuration settings; these settings determine such things as how often Address Book files are synchronized with the user database and how often these Address Book index files are generated.
When you install Lync Server, a set of global Address Book settings is created for you.
You can also create custom configuration settings that can be applied to individual sites.
These settings, if they exist, apply to any Address Book servers operating in the site, and take precedence over the global settings.

Site-level settings are created by using the New-CsAddressBookConfiguration cmdlet.
You can only create settings at the site scope; if you try to create new settings anywhere else, including the global scope, your command will fail.
Your command will also fail if the site in question already contains a collection of Address Book settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsAddressBookConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsAddressBookConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Address Book servers are intermediaries between AD DS and Skype for Business Server 2015.
The Address Book server ensures that the user information stored in Skype for Business Server 2015 is in synch with the user information stored in AD DS.
This is done by periodically synching Address Book files with information stored in the User database.

In addition, Address Book servers periodically generate index files that are downloaded to computers running Skype for Business.
When a user searches for contacts, he or she either search through these index files or search the Address Book index files stored in the Central Management store.

Address Book servers are governed using Address Book configuration settings; these settings determine such things as how often Address Book files are synchronized with the user database and how often these Address Book index files are generated.
When you install Skype for Business Server 2015, a set of global Address Book settings is created for you.
You can also create custom configuration settings that can be applied to individual sites.
These settings, if they exist, apply to any Address Book servers operating in the site, and take precedence over the global settings.

Site-level settings are created by using the New-CsAddressBookConfiguration cmdlet.
You can only create settings at the site scope; if you try to create new settings anywhere else, including the global scope, your command will fail.
Your command will also fail if the site in question already contains a collection of Address Book settings.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsAddressBookConfiguration -Identity site:Redmond -KeepDuration 15 -SynchronizePollingInterval 00:10:00
```

The preceding example creates a new collection of Address Book configuration settings with the identity site:Redmond.
To create the new collection you must call the New-CsAddressBookConfiguration cmdlet along with the Identity parameter and any other optional parameters (for example, the KeepDuration and SynchronizePollingInterval parameters).

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 creates a new collection of Address Book configuration settings with the identity site:Redmond.
To create the new collection you must call the New-CsAddressBookConfiguration cmdlet along with the Identity parameter and any other optional parameters (for example, the KeepDuration and SynchronizePollingInterval parameters).

New-CsAddressBookConfiguration -Identity site:Redmond -KeepDuration 15 -SynchronizePollingInterval 00:10:00

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 creates a new collection of Address Book configuration settings with the identity site:Redmond.
To create the new collection you must call the New-CsAddressBookConfiguration cmdlet along with the Identity parameter and any other optional parameters (for example, the KeepDuration and SynchronizePollingInterval parameters).

New-CsAddressBookConfiguration -Identity site:Redmond -KeepDuration 15 -SynchronizePollingInterval 00:10:00

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
$x = Get-CsAddressBookConfiguration -Identity site:Redmond
New-CsAddressBookConfiguration -Identity site:Paris -KeepDuration $x.KeepDuration -SynchronizePollingInterval $x.SynchronizePollingInterval
```

Example 2 creates a new collection of Address Book settings for the Paris site; this new collection uses two values (KeepDuration and SynchronizePollingInterval) copied from the Address Book settings configured for the Redmond suite.
To carry out this task, the first command uses Get-CsAddressBookConfiguration to return a collection of all the Address Book settings configured for the Redmond site; this information is stored in a variable named $x.

The second command then uses New-CsAddressBookConfiguration to create Address Book settings for the Pairs site.
This command includes two optional parameters -- KeepDuration and SynchronizePollingInterval -- that include the values copied from site:Redmond.
For example, KeepDuration uses the parameter value $x.KeepDuration; that parameter value represents the KeepDuration information copied from the Redmond site.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 creates a new collection of Address Book settings for the Paris site; this new collection uses two values (KeepDuration and SynchronizePollingInterval) copied from the Address Book settings configured for the Redmond suite.
To carry out this task, the first command uses Get-CsAddressBookConfiguration to return a collection of all the Address Book settings configured for the Redmond site; this information is stored in a variable named $x.

The second command then uses New-CsAddressBookConfiguration to create Address Book settings for the Pairs site.
This command includes two optional parameters -- KeepDuration and SynchronizePollingInterval -- that include the values copied from site:Redmond.
For example, KeepDuration uses the parameter value $x.KeepDuration; that parameter value represents the KeepDuration information copied from the Redmond site.

$x = Get-CsAddressBookConfiguration -Identity site:Redmond

New-CsAddressBookConfiguration -Identity site:Paris -KeepDuration $x.KeepDuration -SynchronizePollingInterval $x.SynchronizePollingInterval

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 creates a new collection of Address Book settings for the Paris site; this new collection uses two values (KeepDuration and SynchronizePollingInterval) copied from the Address Book settings configured for the Redmond suite.
To carry out this task, the first command uses the Get-CsAddressBookConfiguration cmdlet to return a collection of all the Address Book settings configured for the Redmond site; this information is stored in a variable named $x.

The second command then uses the New-CsAddressBookConfiguration cmdlet to create Address Book settings for the Pairs site.
This command includes two optional parameters -- KeepDuration and SynchronizePollingInterval -- that include the values copied from site:Redmond.
For example, KeepDuration uses the parameter value $x.KeepDuration; that parameter value represents the KeepDuration information copied from the Redmond site.

$x = Get-CsAddressBookConfiguration -Identity site:Redmond

New-CsAddressBookConfiguration -Identity site:Paris -KeepDuration $x.KeepDuration -SynchronizePollingInterval $x.SynchronizePollingInterval

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
$x = New-CsAddressBookConfiguration -Identity site:Redmond -InMemory
$x.KeepDuration = 15
$x.SynchronizePollingInterval = "00:10:00"
Set-CsAddressBookConfiguration -Instance $x
```

Example 3 shows how you can use the InMemory parameter to create an in-memory-only instance of an Address Book settings collection, modify those settings in memory, then use Set-CsAddressBookConfiguration to create an actual collection with the Identity site:Redmond.
To accomplish all that, the first command creates a new in-memory-only instance of an Address Book settings configuration, storing that instance in a variable named $x.
The InMemory parameter ensures these Address Book settings will exist only in memory; if you end your Windows PowerShell session or delete the variable $x, the settings will disappear and will not be applied to the Redmond site.

In commands 2 and 3, two properties of these virtual Address Book settings are modified: command 2 sets the value of the KeepDuration property to 15 days and command 3 sets the SynchronizePollingInterval to 10 minutes (00:10:00).
The fourth and final command then uses Set-CsAddressBookConfiguration and the Instance parameter to transform the virtual Address Book settings into an actual collection of setting configured at the Redmond site.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 shows how you can use the InMemory parameter to create an in-memory-only instance of an Address Book settings collection, modify those settings in memory, then use Set-CsAddressBookConfiguration to create an actual collection with the Identity site:Redmond.
To accomplish all that, the first command creates a new in-memory-only instance of an Address Book settings configuration, storing that instance in a variable named $x.
The InMemory parameter ensures these Address Book settings will exist only in memory; if you end your Lync Server session or delete the variable $x, the settings will disappear and will not be applied to the Redmond site.

In commands 2 and 3, two properties of these virtual Address Book settings are modified: command 2 sets the value of the KeepDuration property to 15 days and command 3 sets the SynchronizePollingInterval to 10 minutes (00:10:00).
The fourth and final command then uses Set-CsAddressBookConfiguration and the Instance parameter to transform the virtual Address Book settings into an actual collection of setting configured at the Redmond site.

$x = New-CsAddressBookConfiguration -Identity site:Redmond -InMemory

$x.KeepDuration = 15

$x.SynchronizePollingInterval = "00:10:00"

Set-CsAddressBookConfiguration -Instance $x

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 shows how you can use the InMemory parameter to create an in-memory-only instance of an Address Book settings collection, modify those settings in memory, then use the Set-CsAddressBookConfiguration cmdlet to create an actual collection with the Identity site:Redmond.
To accomplish all that, the first command creates a new in-memory-only instance of an Address Book settings configuration, storing that instance in a variable named $x.
The InMemory parameter ensures these Address Book settings will exist only in memory; if you end your Skype for Business Server 2015 session or delete the variable $x, the settings will disappear and will not be applied to the Redmond site.

In commands 2 and 3, two properties of these virtual Address Book settings are modified: command 2 sets the value of the KeepDuration property to 15 days and command 3 sets the SynchronizePollingInterval to 10 minutes (00:10:00).
The fourth and final command then uses the Set-CsAddressBookConfiguration cmdlet and the Instance parameter to transform the virtual Address Book settings into an actual collection of setting configured at the Redmond site.

$x = New-CsAddressBookConfiguration -Identity site:Redmond -InMemory

$x.KeepDuration = 15

$x.SynchronizePollingInterval = "00:10:00"

Set-CsAddressBookConfiguration -Instance $x

## PARAMETERS

### -Identity
Unique identifier to be assigned to the new collection of Address Book settings.
Because you can only create new collections at the site scope, the Identity will always be the prefix "site:" followed by the site name; for example "site:Redmond".

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFileGeneration
When set to True (the default value) the Address Book server generates Address Book index files that can be downloaded by clients.
When set to False, these index files are not generated.
That means that client applications will have to use the Address Book Web Query service when searching for contacts.

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

### -IgnoreGenericRules
Below Content Applies To: Lync Server 2010

Indicates whether or not the Address Book server ignores the generic normalization rules used when parsing phone numbers.
Generic rules are the rules that are built into Lync Server 2010.
These rules cannot be changed; however, by setting the value of this property to True you can instruct your Address Book servers to ignore these rules and instead use custom rules that you create yourself.
The default value is False.



Below Content Applies To: Lync Server 2013

Indicates whether or not the Address Book server ignores the generic normalization rules used when parsing phone numbers.
Generic rules are the rules that are built into Lync Server.
These rules cannot be changed; however, by setting the value of this property to True you can instruct your Address Book servers to ignore these rules and instead use custom rules that you create yourself.
The default value is False.



Below Content Applies To: Skype for Business Server 2015

Indicates whether or not the Address Book server ignores the generic normalization rules used when parsing phone numbers.
Generic rules are the rules that are built into Skype for Business Server 2015.
These rules cannot be changed; however, by setting the value of this property to True you can instruct your Address Book servers to ignore these rules and instead use custom rules that you create yourself.
The default value is False.



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

### -KeepDuration
Below Content Applies To: Lync Server 2010

Specifies the amount of time (in days) that Address Book servers will keep change files.
Change files older than the value of the KeepDuration property will be deleted.
The KeepDuration can be set to any integer value between 1 and 90, inclusive.
The default value is 7 days.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Specifies the amount of time (in days) that Address Book servers will keep change files.
Change files older than the value of the KeepDuration property will be deleted.
The KeepDuration can be set to any integer value between 1 and 90, inclusive.
The default value is 30 days.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDeltaFileSizePercentage
Below Content Applies To: Lync Server 2010

When changes are made to Active Directory (such as a new user being enabled for Lync Server) the Address Book server typically records these changes in a "delta file," a file consisting only of the updated information; Lync 2010 can then download the delta files rather than a complete Address Book file.
The MaxDeltaFileSizePercentage property determines how large the delta files can get before they are incorporated into the complete Address Book file.
By default, delta files can be as large as 20 percent of the complete Address Book file before a new Address Book file is generated.
At that point,  clients will download the complete file rather than a delta file.

MaxDeltaFileSizePercentage must be entered as a percentage value, from 1 to 100, inclusive.



Below Content Applies To: Lync Server 2013

When changes are made to Active Directory (such as a new user being enabled for Lync Server) the Address Book server typically records these changes in a "delta file," a file consisting only of the updated information; Lync can then download the delta files rather than a complete Address Book file.
The MaxDeltaFileSizePercentage property determines how large the delta files can get before they are incorporated into the complete Address Book file.
By default, delta files can be as large as 20 percent of the complete Address Book file before a new Address Book file is generated.
At that point, Lync clients will download the complete file rather than a delta file.

MaxDeltaFileSizePercentage must be entered as a percentage value, from 1 to 100, inclusive.



Below Content Applies To: Skype for Business Server 2015

When changes are made to Active Directory (such as a new user being enabled for Skype for Business Server 2015) the Address Book server typically records these changes in a "delta file," a file consisting only of the updated information; Skype for Business can then download the delta files rather than a complete Address Book file.
The MaxDeltaFileSizePercentage property determines how large the delta files can get before they are incorporated into the complete Address Book file.
By default, delta files can be as large as 20 percent of the complete Address Book file before a new Address Book file is generated.
At that point, Lync clients will download the complete file rather than a delta file.

MaxDeltaFileSizePercentage must be entered as a percentage value, from 1 to 100, inclusive.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RunTimeOfDay
Indicates the time of day when the servers generate new Address Book files.
The RunTimeOfDay property is based on a 24-hour clock (hours:minutes:seconds), with 00:00:00 representing midnight and 23:59:00 representing 11:59 P.M..

The default value is 01:30:00 (1:30 A.M.).

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SynchronizePollingInterval
Indicates how often Address Book servers synchronize their information with the information stored in the User database.
The SynchronizePollingInterval can be set to any value between 5 seconds (00:00:05) and 3 hours (03:00:00).
The default value is 5 minutes (00:05:00).

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseNormalizationRules
Indicates whether Address Book servers should use phone normalization rules when retrieving phone numbers.
If set to False, phone numbers will be retrieved as-is, and it will be up to the client application to apply normalization rules when displaying these numbers.

The default value is True.

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

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -InMemory
Below Content Applies To: Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



Below Content Applies To: Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

### -EnablePhotoSearch
When set to True, user photos will be displayed in search results.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSearchByDialPad
When set to True, users will be able to search for contacts by using their mobile device keypad.
This can be a convenience for mobile users, but has the potential to greatly increase the size of your Address Book database.

The default value is True ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxFileShareThreadCount
Specifies the maximum number of system resources that can be used by the Address Book server if there are problems accessing the service file share.
The default value is 300.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhotoCacheRefreshInterval
PARAMVALUE: TimeSpan

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
New-CsAddressBookConfiguration does not accept pipelined input.

###  
None.
The New-CsAddressBookConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/5a92a2b0-c46e-44e3-b07c-fc9ff0d33b2b(OCS.14).aspx)

[Get-CsAddressBookConfiguration]()

[Remove-CsAddressBookConfiguration]()

[Set-CsAddressBookConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/5a92a2b0-c46e-44e3-b07c-fc9ff0d33b2b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/5a92a2b0-c46e-44e3-b07c-fc9ff0d33b2b(OCS.16).aspx)

