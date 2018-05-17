---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsAddressBookConfiguration
schema: 2.0.0
---

# Set-CsAddressBookConfiguration

## SYNOPSIS
Modifies an existing collection of Address Book configuration settings.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsAddressBookConfiguration [[-Identity] <XdsIdentity>] [-EnableFileGeneration <Boolean>]
 [-IgnoreGenericRules <Boolean>] [-KeepDuration <UInt32>] [-MaxDeltaFileSizePercentage <UInt32>]
 [-RunTimeOfDay <DateTime>] [-SynchronizePollingInterval <TimeSpan>] [-UseNormalizationRules <Boolean>]
 [-Force] [-WhatIf] [-Confirm] [-EnablePhotoSearch <Boolean>] [-EnableSearchByDialPad <Boolean>]
 [-MaxFileShareThreadCount <Int32>] [-PhotoCacheRefreshInterval <TimeSpan>] [<CommonParameters>]
```

### Instance
```
Set-CsAddressBookConfiguration [-Instance <PSObject>] [-EnableFileGeneration <Boolean>]
 [-IgnoreGenericRules <Boolean>] [-KeepDuration <UInt32>] [-MaxDeltaFileSizePercentage <UInt32>]
 [-RunTimeOfDay <DateTime>] [-SynchronizePollingInterval <TimeSpan>] [-UseNormalizationRules <Boolean>]
 [-Force] [-WhatIf] [-Confirm] [-EnablePhotoSearch <Boolean>] [-EnableSearchByDialPad <Boolean>]
 [-MaxFileShareThreadCount <Int32>] [-PhotoCacheRefreshInterval <TimeSpan>] [<CommonParameters>]
```

## DESCRIPTION
Address Book servers are intermediaries between AD DS and Skype for Business Server.
The Address Book server ensures that the user information stored in Skype for Business Server is in synch with the user information stored in AD DS.
This is done by periodically synching Address Book files with information stored in the User database.

In addition, Address Book servers periodically generate index files that are downloaded to computers running Skype for Business Server.
When a user searches for contacts, he or she either search through these index files or search the Address Book index files stored in the Central Management store.

Address Book servers are governed using Address Book configuration settings; these settings determine such things as how often Address Book files are synchronized with the user database and how often these Address Book index files are generated.
When you install Skype for Business Server, a set of global Address Book settings is created for you.
You can also create custom configuration settings that can be applied to individual sites.
These settings, if they exist, apply to any Address Book servers operating in the site, and take precedence over the global settings.

The `Set-CsAddressBookConfiguration` cmdlet enables you to modify any of the Address Book configuration settings collection currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsAddressBookConfiguration -identity site:Redmond -RunTimeOfDay 23:00
```

This example sets the RunTimeOfDay property (the property that determines the time of day when Address Book synchronization takes place) to 23:00 (11:00 PM on a 24-hour clock).
The Identity parameter is used to limit the change to the Address Book configuration settings with the identity site:Redmond.


### -------------------------- Example 2 --------------------------
```
Get-CsAddressBookConfiguration -Filter site:* | Set-CsAddressBookConfiguration -RunTimeOfDay 23:00
```

In Example 2, the RunTimeOfDay property is set to 11:00 PM (23:00) for all the Address Book setting collections configured at the site scope.
To do this, the command first uses the `Get-CsAddressBookConfiguration` cmdlet and the Filter parameter to return a collection of all the site-specific settings; the filter value "site:*" limits the returned data to collections configured at the site scope.
This information is then piped to the `Set-CsAddressBookConfiguration` cmdlet, which modifies the value of the RunTimeOfDay property for each item in the collection.


### -------------------------- Example 3 --------------------------
```
Get-CsAddressBookConfiguration | Where-Object {$_.KeepDuration -lt 30} | Set-CsAddressBookConfiguration -KeepDuration 30
```

Example 3 modifies the KeepDuration property for any Address Book settings collections where KeepDuration is less than 30 days.
To carry out this task, the `Get-CsAddressBookConfiguration` cmdlet is used, without any additional parameters, to return a collection of all the Address Book settings configured for use in the organization.
This collection is then piped to the `Where-Object` cmdlet, which selects only those settings where the KeepDuration property is less than 30 days.
This filtered collection is then piped to the `Set-CsAddressBookConfiguration` cmdlet, which changes the value of the KeepDuration property for each item in the collection to 30 days.


## PARAMETERS

### -Identity
Unique identifier assigned to the collection of Address Book settings.
To refer to the global settings, use this syntax: `-Identity global`.
To refer to a collection configured at the site scope, use syntax similar to this: `-Identity site:Redmond`.
You cannot use wildcard characters when specifying an Identity.

If this parameter is omitted, then the `Set-CsAddressBookConfiguration` cmdlet will modify the global settings.


```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreGenericRules
Indicates whether or not the Address Book server ignores the generic normalization rules used when parsing phone numbers.
Generic rules are the rules that are built into Skype for Business Server.
These rules cannot be changed; however, by setting the value of this property to True you can instruct your Address Book servers to ignore these rules and instead use custom rules that you create yourself.
The default value is False.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -KeepDuration
Specifies the amount of time (in days) that Address Book servers will keep change files.
Change files older than the value of the KeepDuration property will be deleted.
The KeepDuration can be set to any integer value between 1 and 90, inclusive.
The default value is 30 days.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxDeltaFileSizePercentage
When changes are made to Active Directory (such as a new user being enabled for Skype for Business Server), the Address Book server typically records these changes in a "delta file," a file consisting only of the updated information; Skype for Business Server can then download the delta files rather than a complete Address Book file.
The MaxDeltaFileSizePercentage property determines how large the delta files can get before they are incorporated into the complete Address Book file.
By default, delta files can be as large as 20 percent of the complete Address Book file before a new Address Book file is generated.
At that point, clients will download the complete file rather than a delta file.

MaxDeltaFileSizePercentage must be entered as a percentage value between 1 and 100, inclusive.


```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseNormalizationRules
Indicates whether Address Book servers should use phone normalization rules when retrieving phone numbers.
If set to False, phone numbers will be retrieved as-is and it will be up to the client application to apply normalization rules when displaying these numbers.

The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.
The `Set-CsAddressBookConfiguration` cmdlet accepts pipelined input of Address Book configuration objects.

## OUTPUTS

###  
The `Set-CsAddressBookConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.AddressBook.AddressBookSettings object.

## NOTES

## RELATED LINKS

[Get-CsAddressBookConfiguration](Get-CsAddressBookConfiguration.md)

[New-CsAddressBookConfiguration](New-CsAddressBookConfiguration.md)

[Remove-CsAddressBookConfiguration](Remove-CsAddressBookConfiguration.md)

