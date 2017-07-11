---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsArchivingConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies an existing collection of instant messaging (IM) archiving settings.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Modifies an existing collection of instant messaging (IM) archiving settings.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Set-CsArchivingConfiguration [[-Identity] <XdsIdentity>] [-ArchiveDuplicateMessages <Boolean>]
 [-BlockOnArchiveFailure <Boolean>] [-CachePurgingInterval <UInt32>] [-EnableArchiving <EnableArchiving>]
 [-EnablePurging <Boolean>] [-KeepArchivingDataForDays <UInt32>] [-PurgeExportedArchivesOnly <Boolean>]
 [-PurgeHourOfDay <UInt32>] [-Force] [-WhatIf] [-Confirm] [-EnableExchangeArchiving <Boolean>]
 [<CommonParameters>]
```

### Instance
```
Set-CsArchivingConfiguration [-Instance <PSObject>] [-ArchiveDuplicateMessages <Boolean>]
 [-BlockOnArchiveFailure <Boolean>] [-CachePurgingInterval <UInt32>] [-EnableArchiving <EnableArchiving>]
 [-EnablePurging <Boolean>] [-KeepArchivingDataForDays <UInt32>] [-PurgeExportedArchivesOnly <Boolean>]
 [-PurgeHourOfDay <UInt32>] [-Force] [-WhatIf] [-Confirm] [-EnableExchangeArchiving <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Many organizations find it useful to keep a transcript of all the IM sessions and conferences their users participate in.
For other organizations, it's mandatory to keep such transcripts; for example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

In order to archive instant messages, you must set up at least one Archiving Server.
After the Archiving Server is set up, you must perform two additional steps.
First, you need to enable archiving at the global scope (for details, see the Set-CsArchivingConfiguration topic).
Optionally, you can also configure custom archiving settings for different sites.

Second, you must use archiving policies to indicate which users will have their IM sessions archived.
IM sessions will not be archived unless a policy is in force that requires IM sessions to be archived.

When you install Lync Server 2010, a collection of global archiving configuration settings will be created for you; by default, these settings will apply to your entire organization.
Alternatively, you can use the New-CsArchivingConfiguration cmdlet to create custom configuration settings on a site-by-site basis.
Either way, you can use the Set-CsArchivingConfiguration cmdlet to modify the property values of an existing collection or archiving configuration settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsArchivingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsArchivingConfiguration"}

Below Content Applies To: Lync Server 2013

Many organizations find it useful to keep a transcript of all the IM sessions and conferences their users participate in.
For other organizations, it's mandatory to keep such transcripts; for example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

In order to archive instant messages, you must set up at least one Archiving Server.
After the Archiving Server is set up, you must perform two additional steps.
First, you need to enable archiving at the global scope (for details, see the Set-CsArchivingConfiguration topic).
Optionally, you can also configure custom archiving settings for different sites.

Second, you must use archiving policies to indicate which users will have their IM sessions archived.
IM sessions will not be archived unless a policy is in force that requires IM sessions to be archived.

When you install Lync Server, a collection of global archiving configuration settings will be created for you; by default, these settings will apply to your entire organization.
Alternatively, you can use the New-CsArchivingConfiguration cmdlet to create custom configuration settings on a site-by-site basis.
Either way, you can use the Set-CsArchivingConfiguration cmdlet to modify the property values of an existing collection or archiving configuration settings.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsArchivingConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsArchivingConfiguration"}

Below Content Applies To: Skype for Business Server 2015

Many organizations find it useful to keep a transcript of all the IM sessions and conferences their users participate in.
For other organizations, it's mandatory to keep such transcripts; for example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

In order to archive instant messages, you must set up at least one Archiving Server.
After the Archiving Server is set up, you must perform two additional steps.
First, you need to enable archiving at the global scope (for details, see the Set-CsArchivingConfiguration cmdlet help topic).
Optionally, you can also configure custom archiving settings for different sites.

Second, you must use archiving policies to indicate which users will have their IM sessions archived.
IM sessions will not be archived unless a policy is in force that requires IM sessions to be archived.

When you install Skype for Business Server 2015, a collection of global archiving configuration settings will be created for you; by default, these settings will apply to your entire organization.
Alternatively, you can use the New-CsArchivingConfiguration cmdlet to create custom configuration settings on a site-by-site basis.
Either way, you can use the Set-CsArchivingConfiguration cmdlet to modify the property values of an existing collection or archiving configuration settings.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsArchivingConfiguration -Identity site:Redmond -ArchiveDuplicateMessages $False -KeepArchivingDataForDays 30
```

In the preceding example, Set-CsArchivingConfiguration is used to modify two properties of the archiving configuration settings that have the Identity site:Redmond.
First, the command sets the ArchiveDuplicateMessages property to False; this prevents the server from archiving the same instant message session multiple times.
The command also uses the KeepArchivingDataForDays parameter to instruct the server to keep instant messages for 30 days.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, Set-CsArchivingConfiguration is used to modify two properties of the archiving configuration settings that have the Identity site:Redmond.
First, the command sets the ArchiveDuplicateMessages property to False; this prevents the server from archiving the same instant message session multiple times.
The command also uses the KeepArchivingDataForDays parameter to instruct the server to keep instant messages for 30 days.

Set-CsArchivingConfiguration -Identity site:Redmond -ArchiveDuplicateMessages $False -KeepArchivingDataForDays 30

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the Set-CsArchivingConfiguration cmdlet is used to modify two properties of the archiving configuration settings that have the Identity site:Redmond.
First, the command sets the ArchiveDuplicateMessages property to False; this prevents the server from archiving the same instant message session multiple times.
The command also uses the KeepArchivingDataForDays parameter to instruct the server to keep instant messages for 30 days.

Set-CsArchivingConfiguration -Identity site:Redmond -ArchiveDuplicateMessages $False -KeepArchivingDataForDays 30

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsArchivingConfiguration -Filter "site:*" | Set-CsArchivingConfiguration -ArchiveDuplicateMessages $False -KeepArchivingDataForDays 30
```

Example 2 is a variation of the command shown in Example 1: in this case, however, the values of the ArchiveDuplicateMessages and KeepArchivingDataForDays properties are modified for all the archiving settings that have been configured at the site scope.
To carry out this task, the command first uses Get-CsArchivingConfiguration and the Filter parameter to return a collection of all the archiving settings configured at the site scope; the filter value "site:*" ensures that only settings that have an Identity that begins with the characters "site:" are returned.
The filtered collection is then piped to Set-CsArchivingConfiguration, which modifies the two property values for each item in the collection.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 is a variation of the command shown in Example 1: in this case, however, the values of the ArchiveDuplicateMessages and KeepArchivingDataForDays properties are modified for all the archiving settings that have been configured at the site scope.
To carry out this task, the command first uses Get-CsArchivingConfiguration and the Filter parameter to return a collection of all the archiving settings configured at the site scope; the filter value "site:*" ensures that only settings that have an Identity that begins with the characters "site:" are returned.
The filtered collection is then piped to Set-CsArchivingConfiguration, which modifies the two property values for each item in the collection.

Get-CsArchivingConfiguration -Filter "site:*" | Set-CsArchivingConfiguration -ArchiveDuplicateMessages $False -KeepArchivingDataForDays 30

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 is a variation of the command shown in Example 1: in this case, however, the values of the ArchiveDuplicateMessages and KeepArchivingDataForDays properties are modified for all the archiving settings that have been configured at the site scope.
To carry out this task, the command first uses the Get-CsArchivingConfiguration cmdlet and the Filter parameter to return a collection of all the archiving settings configured at the site scope; the filter value "site:*" ensures that only settings that have an Identity that begins with the characters "site:" are returned.
The filtered collection is then piped to the Set-CsArchivingConfiguration cmdlet, which modifies the two property values for each item in the collection.

Get-CsArchivingConfiguration -Filter "site:*" | Set-CsArchivingConfiguration -ArchiveDuplicateMessages $False -KeepArchivingDataForDays 30

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsArchivingConfiguration | Where-Object {$_.EnableArchiving -eq "ImAndWebConf"} | Set-CsArchivingConfiguration -EnableArchiving "ImOnly"
```

In Example 3, all of the archiving configuration settings that allow both IM session and web conferencing archiving are modified; after the command completes, those settings will allow only for IM session archiving.
To do this, the command first calls Get-CsArchivingConfiguration without any parameters in order to return a collection of all the archiving configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableArchiving property is equal to (-eq) "ImAndWebConf".
The filtered collection is then piped to Set-CsArchivingConfiguration, which takes each item in the collection and changes the value of EnableArchiving to "ImOnly".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all of the archiving configuration settings that allow both IM session and web conferencing archiving are modified; after the command completes, those settings will allow only for IM session archiving.
To do this, the command first calls Get-CsArchivingConfiguration without any parameters in order to return a collection of all the archiving configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableArchiving property is equal to (-eq) "ImAndWebConf".
The filtered collection is then piped to Set-CsArchivingConfiguration, which takes each item in the collection and changes the value of EnableArchiving to "ImOnly".

Get-CsArchivingConfiguration | Where-Object {$_.EnableArchiving -eq "ImAndWebConf"} | Set-CsArchivingConfiguration -EnableArchiving "ImOnly"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all of the archiving configuration settings that allow both IM session and web conferencing archiving are modified; after the command completes, those settings will allow only for IM session archiving.
To do this, the command first calls the Get-CsArchivingConfiguration cmdlet without any parameters in order to return a collection of all the archiving configuration settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableArchiving property is equal to (-eq) "ImAndWebConf".
The filtered collection is then piped to the Set-CsArchivingConfiguration cmdlet, which takes each item in the collection and changes the value of EnableArchiving to "ImOnly".

Get-CsArchivingConfiguration | Where-Object {$_.EnableArchiving -eq "ImAndWebConf"} | Set-CsArchivingConfiguration -EnableArchiving "ImOnly"

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Represents the unique identifier of the collection of archiving configuration settings to be modified.
To modify the global settings, either leave out this parameter or use the following syntax: -Identity global.
To modify settings at the site scope, use the prefix "site:" followed by the site name.
For example: -Identity "site:Redmond".



Below Content Applies To: Skype for Business Server 2015

Represents the unique identifier of the collection of archiving configuration settings to be modified.
To modify the global settings, either leave out this parameter or use the following syntax: -Identity global.
To modify settings at the site scope, use the prefix "site:" followed by the site name.
For example: -Identity "site:Redmond".

To modify settings assigned to an individual Registrar pool use syntax similar to this:

-Identity "service:Registrar:atl-cs-001.litwareinc.com"



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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ArchiveDuplicateMessages
Specifies how "cross-pool" instant messages should be archived.
Consider a simple example: Ken Myer (with an account in Pool 1) sends an instant message to Pilar Ackerman, who has an account in Pool 2.
Pilar, in turn, sends a reply to Ken's instant message.
If ArchiveDuplicateMessages is set to False, then (based on a built-in algorithm) the session transcript will be logged in either Pool 1 or Pool 2, but not both.
If ArchiveDuplicateMessages is set to True (the default value), the transcript will be logged in both pools.

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

### -BlockOnArchiveFailure
If True, then the IM service will be suspended any time instant messages cannot be archived.
If set to False (the default value), IM will continue even if instant messages cannot be archived.

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

### -CachePurgingInterval
Below Content Applies To: Lync Server 2010

Indicates how often (in hours) the system is purged of transcripts where none of the participants have been enabled for archiving.
By design, all group IM sessions and conferencing sessions are recorded when they take place.
At the specified interval, the system determines whether any of the participants in these sessions have been enabled for archiving.
If the system finds a session where none of the participants have been enabled for archiving, then that transcript will be deleted from the database.

The CachePurgeInterval property can be set to any integer value between 4 and 168, inclusive.
The default value is 24.



Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Indicates how often (in hours) the system is purged of transcripts where none of the participants have been enabled for archiving.
By design, all group IM sessions and conferencing sessions are recorded when they take place.
At the specified interval, the system determines whether any of the participants in these sessions have been enabled for archiving.
If the system finds a session where none of the participants have been enabled for archiving, then that transcript will be deleted from the database.

The CachePurgingInterval property can be set to any integer value between 4 and 168, inclusive.
The default value is 24.



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

### -EnableArchiving
Indicates which items (if any) are saved to the archiving database.
Valid values are:

None.
No items are archived to the database.
This is the default value.

ImOnly.
IM sessions are archived to the database.

ImAndWebConf.
Both IM and web conferencing sessions are archived to the database.

```yaml
Type: EnableArchiving
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePurging
If True, then archived instant messages will periodically be removed from the database, provided that these instant messages: 1) are older than the value specified in the KeepArchivingDataForDays property; or, 2) have been exported and marked for deletion.

If False, instant messages will not automatically be deleted from the database.

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

### -KeepArchivingDataForDays
Number of days (between 1 and 2562) that archived instant messages are kept in the database before being automatically deleted.
The default value is 14.

This property takes effect only if EnablePurging has been set to True.

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

### -PurgeExportedArchivesOnly
If True, then the system will only purge instant messages that have been exported (and, as a result, have been marked for deletion).
Instant messages that have not been exported will remain in the database, even if those instant messages are older than the value specified by the KeepArchivingDataForDays property.

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

### -PurgeHourOfDay
Indicates the time of day when expired records are deleted from the archiving database.
The time of day is specified using a 24-hour clock, with 0 representing midnight (12:00 AM) and 23 representing 11:00 PM.
Note that you can only specify the hour of the day.
This means that you can schedule purging to take place at 4:00 AM but you cannot schedule it to take place at, for instance, 4:30 AM or 4:15 AM.
The default value is 2 (2:00 AM).

Database purging takes place only if the EnablePurging property is set to True.

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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -EnableExchangeArchiving
Below Content Applies To: Lync Server 2013

When set to True, Lync Server 2013 Preview instant message and conferencing transcripts are stored in Microsoft Exchange Server 2013 Preview rather than a separate SQL Server database.
Note that if you enable Exchange archiving then users will be managed by the Exchange archiving policies instead of Lync Server 2013 Preview archiving policies.

The default value is False.



Below Content Applies To: Skype for Business Server 2015

When set to True, Skype for Business Server 2015 instant message and conferencing transcripts are stored in Exchange rather than a separate SQL Server database.
Note that if you enable Exchange archiving then users will be managed by the Exchange archiving policies instead of Skype for Business Server 2015 archiving policies.

The default value is False.



```yaml
Type: Boolean
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
Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.
Set-CsArchivingConfiguration accepts pipelined input of archiving configuration objects.

###  
Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.
The Set-CsArchivingConfiguration cmdlet accepts pipelined input of archiving configuration objects.

## OUTPUTS

###  
Set-CsArchivingConfiguration does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.

###  
The Set-CsArchivingConfiguration cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/f5202dc2-b3b4-48ae-93d2-d19e71847994(OCS.14).aspx)

[Get-CsArchivingConfiguration]()

[New-CsArchivingConfiguration]()

[Remove-CsArchivingConfiguration]()

[Set-CsArchivingServer]()

[Online Version](http://technet.microsoft.com/EN-US/library/f5202dc2-b3b4-48ae-93d2-d19e71847994(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/f5202dc2-b3b4-48ae-93d2-d19e71847994(OCS.16).aspx)

