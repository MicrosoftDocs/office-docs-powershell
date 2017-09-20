---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: New-CsArchivingConfiguration
schema: 2.0.0
---

# New-CsArchivingConfiguration

## SYNOPSIS

Creates a new set of instant messaging (IM) archiving settings.
These settings can be used to enable or disable the automatic saving of IM sessions; these settings also enable you to block any instant messages that cannot be archived.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsArchivingConfiguration [-Identity] <XdsIdentity> [-ArchiveDuplicateMessages <Boolean>]
 [-BlockOnArchiveFailure <Boolean>] [-CachePurgingInterval <UInt32>] [-EnableArchiving <EnableArchiving>]
 [-EnablePurging <Boolean>] [-KeepArchivingDataForDays <UInt32>] [-PurgeExportedArchivesOnly <Boolean>]
 [-PurgeHourOfDay <UInt32>] [-Force] [-InMemory] [-WhatIf] [-Confirm] [-EnableExchangeArchiving <Boolean>]
 [<CommonParameters>]
```

## DESCRIPTION

Many organizations find it useful to keep a transcript of all the IM sessions carried out by their users.
For other organizations, it's mandatory to keep such transcripts; for example, many organizations in the financial world are required by law to keep copies of all their electronic communications.

Skype for Business Server gives you flexibility when it comes to archiving IM and web conferencing sessions.
If you have deployed Archiving Server, you can use the various CsArchivingConfiguration cmdlets to enable and disable IM session archiving and to manage your archiving database.
You can also suspend IM should archiving fail; this helps to ensure that you keep a record of all your electronic communications.

When you install Skype for Business Server, a collection of global archiving settings will be created for you; by default, these settings will apply to your entire organization.
Alternatively, you can use the New-CsArchivingConfiguration cmdlet to create custom configuration settings on a site-by-site basis.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsArchivingConfiguration -Identity site:Redmond -EnableArchiving "ImOnly"
```

The command shown in Example 1 creates a new collection of archiving configuration settings and applies these settings to the Redmond site.
By adding the EnableArchiving parameter and setting the parameter value to "ImOnly", the command also enables IM session archiving (but not web conference archiving) for the Redmond site.


### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsArchivingConfiguration -Identity site:Redmond -InMemory

$x.EnableArchiving = "ImOnly"

Set-CsArchivingConfiguration -Instance $x
```

Example 2 demonstrates the use of the InMemory parameter to create a collection of archiving configuration settings that initially exist only in memory.
To do this, the example creates a new collection of settings (with the Identity site:Redmond) and stores this collection in a variable named $x.
Note that, after this first command runs, the collection exists only in memory; if you run the command the Get-CsArchivingConfiguration cmdlet you will not see an entry for site:Redmond.

In the second command, the EnableArchiving property for this virtual collection of settings is set to "ImOnly", which enables IM session archiving.
Finally, the last command uses the Set-CsArchivingConfiguration cmdlet to transform the virtual archiving settings into an actual collection of settings applied to the Redmond site.
If you do not call the Set-CsArchivingConfiguration cmdlet, these settings will remain in memory only and will disappear when your Windows PowerShell session is terminated or the variable $x is deleted.


## PARAMETERS

### -Identity

Unique identifier to be assigned to the new collection of archiving configuration settings.
In Skype for Business Server you can create new collections at the site scope or at the service scope.
To create new settings at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

To create settings at the service scope (for the Registrar service only) use syntax like this:

`-Identity "service:Registrar:atl-cs-001.litwareinc.com"`



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

### -ArchiveDuplicateMessages
Specifies how cross-pool instant messages should be archived.
For example, Ken Myer (with an account in Pool 1) sends an instant message to Pilar Ackerman (who has an account in Pool 2).
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
If True, then the IM service will be suspended any time your instant message sessions cannot be archived.
If set to False (the default value), instant messaging will continue even if sessions cannot be archived.

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

Indicates how often (in hours) the system is purged of transcripts where none of the participants have been enabled for archiving.
By design, all group IM sessions and conferencing sessions are recorded when they take place.
At the specified interval, the system will determine whether any of the participants in these sessions have been enabled for archiving.
If the system finds a session where none of the participants have been enabled for archiving, then that transcript will be deleted from the database.

The CachePurgeInterval property can be set to any integer value between 4 and 168, inclusive.
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
If True, archived instant messages will periodically be removed from the database, provided that these instant messages: 1) are older than the value specified in the KeepArchivingDataForDays property; or, 2) have been exported and marked for deletion.

If False, instant messages will not be automatically deleted from the database.

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
Instant messages that have not been exported will remain in the database, even if those messages are older than the value specified by the KeepArchivingDataForDays property.

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
This means that you can schedule purging to take place at 4:00 AM, but you cannot schedule it to take place at, for instance, 4:30 AM or 4:15 AM.
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

### -InMemory

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

### -EnableExchangeArchiving

When set to True, Skype for Business Server instant message and conferencing transcripts are stored in Exchange rather than a separate SQL Server database.
Note that if you enable Exchange archiving then users will be managed by the Exchange archiving policies instead of Skype for Business Server archiving policies.

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsArchivingConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsArchivingConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Archiving.ArchivingSettings object.

## NOTES

## RELATED LINKS

[Get-CsArchivingConfiguration]()

[Remove-CsArchivingConfiguration]()

[Set-CsArchivingConfiguration]()

[Set-CsArchivingServer]()
