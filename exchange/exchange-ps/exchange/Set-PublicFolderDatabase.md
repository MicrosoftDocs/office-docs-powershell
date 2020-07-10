---
external help file: Microsoft.Exchange.WebClient-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-publicfolderdatabase
applicable: Exchange Server 2010
title: Set-PublicFolderDatabase
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010"
---

# Set-PublicFolderDatabase

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Set-PublicFolderDatabase cmdlet to set attributes of public folder databases.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-PublicFolderDatabase [-Identity] <DatabaseIdParameter>
 [-AllowFileRestore <Boolean>]
 [-BackgroundDatabaseMaintenance <Boolean>]
 [-CircularLoggingEnabled <Boolean>]
 [-Confirm]
 [-CustomReferralServerList <MultiValuedProperty>]
 [-DeletedItemRetention <EnhancedTimeSpan>]
 [-DomainController <Fqdn>]
 [-EventHistoryRetentionPeriod <EnhancedTimeSpan>]
 [-IssueWarningQuota <Unlimited>]
 [-ItemRetentionPeriod <Unlimited>]
 [-MaintenanceSchedule <Schedule>]
 [-MaxItemSize <Unlimited>]
 [-MountAtStartup <Boolean>]
 [-Name <String>]
 [-ProhibitPostQuota <Unlimited>]
 [-QuotaNotificationSchedule <Schedule>]
 [-ReplicationMessageSize <ByteQuantifiedSize>]
 [-ReplicationPeriod <UInt32>]
 [-ReplicationSchedule <Schedule>]
 [-RetainDeletedItemsUntilBackup <Boolean>]
 [-UseCustomReferralServerList <Boolean>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-PublicFolderDatabase -Identity 'PFDB01' -DeletedItemRetention '10.00:00:00'
```

This example sets the deleted items retention on the public folder database PFDB01 to 10 days.

### Example 2
```powershell
Set-PublicFolderDatabase -Identity 'PFDB01'-MaintenanceSchedule 'Sun.2:00 AM-Sun.6:00 AM, Mon.2:00 AM-Mon.6:00 AM, Tue.2:00 AM-Tue.6:00 AM, Wed.2:00 AM-Wed.6:00 AM, Thu.2:00 AM-Thu.6:00 AM, Fri.2:00 AM-Fri.6:00 AM, Sat.2:00 AM-Sat.6:00 AM'
```

This example sets the database maintenance schedule on PFDB01 to run daily from 02:00 (2:00 A.M.) until 06:00 (6:00 A.M.).

### Example 3
```powershell
Set-PublicFolderDatabase -RetainDeletedItemsUntilBackup $true -Identity 'PFDB01'
```

This example prevents the deleted items in the public folder database PFDB01 from being permanently deleted until after the database has been backed up.

## PARAMETERS

### -Identity
The Identity parameter specifies the public folder database that you want to modify. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AllowFileRestore
The AllowFileRestore parameter specifies that the public folder database can be overwritten if the public folder database is restored. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BackgroundDatabaseMaintenance
The BackgroundDatabaseMaintenance parameter specifies whether the Extensible Storage Engine (ESE) performs database maintenance. The two possible values are $true or $false. If you specify $true, the public folder database reads the object during database mount and initializes the database to perform the background database maintenance. If you specify $false, the public folder database reads the object during database mount and initializes the database without the option to perform the background database maintenance.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CircularLoggingEnabled
The CircularLoggingEnabled parameter specifies whether to enable circular logging. If you specify a value of $true, circular logging is enabled. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomReferralServerList
The CustomReferralServerList parameter specifies public folder referral costs to individual servers manually. Costs can be any positive number. Servers not included on the list aren't included for referrals. If this parameter is set with no servers in the list, there are no public folder referrals.

The CustomReferralServerList parameter accepts an array in the following format: "serverID:cost". Use a comma to separate multiple servers, for example, "MBXSERVER01:1","MBXSERVER02:5".

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeletedItemRetention
The DeletedItemRetention parameter specifies the time that deleted items are kept in the dumpster before being permanently deleted during store maintenance.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EventHistoryRetentionPeriod
The EventHistoryRetentionPeriod parameter specifies the length of time that events are retained in the event history table. Events can be retained for up to one week.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IssueWarningQuota
The IssueWarningQuota parameter specifies the public folder size at which a warning is issued to public folder owners stating that the folder is almost full.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ItemRetentionPeriod
The ItemRetentionPeriod parameter specifies the length of time that items are retained in a folder before they're deleted during store maintenance.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaintenanceSchedule
The MaintenanceSchedule parameter specifies the store maintenance schedule.

The syntax for this parameter is: StartDay.Hour:Minute \[AM/PM\]-EndDay.Hour:Minute \[AM/PM\].

You can use the following values for days:

- Full name of the day.

- Abbreviated name of the day.

- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45.
Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"

- "6.22:00-6.22:15" (Run from Saturday at 10:00 PM until Saturday at 10:15 PM.)

- "Sun.1:15 AM-Monday.23:00"

```yaml
Type: Schedule
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxItemSize
The MaxItemSize parameter specifies the maximum size of an item that can be posted to or received by a public folder.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MountAtStartup
The MountAtStartup parameter specifies whether the database should be mounted when the store starts. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the public folder database. Use this parameter to change the name of the public folder database.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProhibitPostQuota
The ProhibitPostQuota parameter specifies the size of a public folder at which users are notified that the public folder is full. Users can't post to a folder larger than the ProhibitPostQuota parameter value.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuotaNotificationSchedule
The QuotaNotificationSchedule parameter specifies the interval at which warning messages are sent when public folders exceed their specified size limit.

The syntax for this parameter is: StartDay.Hour:Minute \[AM/PM\]-EndDay.Hour:Minute \[AM/PM\].

You can use the following values for days:

- Full name of the day.

- Abbreviated name of the day.

- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45.
Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"

- "6.22:00-6.22:15" (Run from Saturday at 10:00 PM until Saturday at 10:15 PM.)

- "Sun.1:15 AM-Monday.23:00"

```yaml
Type: Schedule
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationMessageSize
The ReplicationMessageSize parameter specifies the size of replication messages. Small items may be aggregated into a single replication message that can be as large as this setting, but items larger than this setting are replicated with messages larger than this size.

A valid value is a number up to 2 gigabytes (2147482624 bytes). The default value is 300 kilobytes (307200 bytes).

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

```yaml
Type: ByteQuantifiedSize
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationPeriod
The ReplicationPeriod parameter specifies the interval at which replication of public folders or content updates may occur.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationSchedule
The ReplicationSchedule parameter specifies the time intervals during which replication of public folders or contents may occur.

The syntax for this parameter is: StartDay.Hour:Minute \[AM/PM\]-EndDay.Hour:Minute \[AM/PM\].

You can use the following values for days:

- Full name of the day.

- Abbreviated name of the day.

- Integer from 0 through 6, where 0 = Sunday.

You can enter the time in 24 hour format and omit the AM/PM value. If you enter the time in 12 time hour format, include a space between the time and the AM/PM value.

You can mix and match date/time formats.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45.

Here are some examples:

- "Sun.11:30 PM-Mon.1:30 AM"

- "6.22:00-6.22:15" (Run from Saturday at 10:00 PM until Saturday at 10:15 PM.)

- "Sun.1:15 AM-Monday.23:00"

```yaml
Type: Schedule
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetainDeletedItemsUntilBackup
The RetainDeletedItemsUntilBackup parameter specifies that deleted items aren't removed until a backup of the public folder database is performed. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseCustomReferralServerList
The UseCustomReferralServerList parameter specifies whether to use the server costs specified by the PublicFolderReferralServerList parameter. If set to $true, the server uses the PublicFolderReferralServerList parameter costs to make public folder referrals. If set to $false, the server uses Active Directory inter-site costs to make public folder referrals.

Setting this parameter to $false also clears the PublicFolderReferralServerList parameter.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=2081749). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
