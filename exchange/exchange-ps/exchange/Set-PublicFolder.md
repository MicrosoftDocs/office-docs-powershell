---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-PublicFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-PublicFolder cmdlet to set the attributes of public folders.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Set-PublicFolder [-Identity] <PublicFolderIdParameter> [-AgeLimit <EnhancedTimeSpan>] [-Confirm]
 [-DomainController <Fqdn>] [-EformsLocaleId <CultureInfo>] [-HiddenFromAddressListsEnabled <$true | $false>]
 [-IssueWarningQuota <Unlimited>] [-LocalReplicaAgeLimit <EnhancedTimeSpan>] [-MaxItemSize <Unlimited>]
 [-Name <String>] [-PerUserReadStateEnabled <$true | $false>] [-ProhibitPostQuota <Unlimited>]
 [-Replicas <DatabaseIdParameter[]>] [-ReplicationSchedule <Schedule>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-Server <ServerIdParameter>]
 [-UseDatabaseAgeDefaults <$true | $false>] [-UseDatabaseQuotaDefaults <$true | $false>]
 [-UseDatabaseReplicationSchedule <$true | $false>] [-UseDatabaseRetentionDefaults <$true | $false>] [-WhatIf]
 [<CommonParameters>]
```

###  (Default)
```
Set-PublicFolder [-Identity] <PublicFolderIdParameter> [-AgeLimit <EnhancedTimeSpan>] [-Confirm]
 [-DomainController <Fqdn>] [-EformsLocaleId <CultureInfo>] [-Force] [-IssueWarningQuota <Unlimited>]
 [-MailEnabled <$true | $false>] [-MailRecipientGuid <Guid>] [-MaxItemSize <Unlimited>] [-Name <String>]
 [-OverrideContentMailbox <MailboxIdParameter>] [-Path <PublicFolderIdParameter>]
 [-PerUserReadStateEnabled <$true | $false>] [-ProhibitPostQuota <Unlimited>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-PublicFolder "\Customer Service Requests" -UseDatabaseReplicationSchedule $false
```

In Exchange 2010, this example changes a public folder so that it doesn't use the database default replication schedule.

### Example 2
```
Set-PublicFolder "\Customer Service Requests" -OverrideContentMailbox North_America
```

This example changes the content location of the public folder hierarchy mailbox to North\_America.

### Example 3
```
Set-PublicFolder \MyPublicFolder -ReplicationSchedule "Saturday.12:00 AM-Monday.12:00 AM"
```

In Exchange 2010, this example sets the folder to replicate only on weekends.

## PARAMETERS

### -Identity
The Identity parameter specifies the GUID or public folder name that represents a specific public folder. You can also include the path using the format \\TopLevelPublicFolder\\PublicFolder.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AgeLimit
The AgeLimit parameter specifies the overall age limit on the folder. Replicas of this public folder are automatically deleted when the age limit is exceeded.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EformsLocaleId
The EformsLocaleId parameter specifies the locale-specific version of the e-forms library. The valid input for the EformsLocaleId parameter is the string names listed in the Culture Name column in the Microsoft .NET Class Library class reference available at CultureInfo Class (https://go.microsoft.com/fwlink/p/?linkId=184859).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenFromAddressListsEnabled
The HiddenFromAddressListsEnabled parameter specifies whether to hide the public folder from address lists.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IssueWarningQuota
The IssueWarningQuota parameter specifies the public folder size that triggers a warning to public folder owners stating that the folder is almost full.

The default value is unlimited, which is 2 terabytes.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 1 through 2TB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalReplicaAgeLimit
The LocalReplicaAgeLimit parameter specifies the age limit of the replica on the connected server, if there is a replica on it.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxItemSize
The MaxItemSize parameter specifies the maximum size for posted items. Items larger than the value of the MaxItemSize parameter are rejected. The default value is unlimited, which is 2 gigabytes. When you enter a value, qualify the value with one of the following units:

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 1 through 2GB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name for the public folder.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PerUserReadStateEnabled
The PerUserReadStateEnabled parameter specifies whether to maintain read and unread data on a per-user basis.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProhibitPostQuota
The ProhibitPostQuota parameter specifies the size of a public folder at which users are notified that the public folder is full. Users can't post to a folder whose size is larger than the ProhibitPostQuota parameter value. The default value is unlimited, which is 2 terabytes.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 1 through 2TB.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Replicas
The Replicas parameter specifies a list of public folder databases with which to replicate this public folder.

```yaml
Type: DatabaseIdParameter[]
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationSchedule
The ReplicationSchedule parameter specifies the replication schedule for the folder.

The format is StartDay.Hour:Minute [AM/PM]-EndDay.Hour:Minute [AM/PM]. You can use the following values for the start and end days:

- Full name of the day

- Abbreviated name of the day

- Integer from 0 through 6, where 0 = Sunday

If you prefer to use a 24-hour clock, omit AM/PM. If you use AM/PM, you must include a space between the time and AM or PM.

Formats can be mixed.

The start time and end time must be at least 15 minutes apart. Minutes are rounded down to 0, 15, 30, or 45. If you specify more than one interval, there must be at least 15 minutes between each interval.

The following are examples:

- "Sun.11:30 PM-Mon.1:30 AM"

- 6.22:00-6.22:15 (Maintenance will run from Saturday at 10:00 PM until Saturday at 10:15 PM.)

- "Monday.4:30 AM-Monday.5:30 AM","Wednesday.4:30 AM-Wednesday.5:30 AM" (Maintenance will run on Monday and Wednesday mornings from 4:30 until 5:30.)

- "Sun.1:15 AM-Monday.23:00"

```yaml
Type: Schedule
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetainDeletedItemsFor
The RetainDeletedItemsFor parameter specifies the retention time for deleted items.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
The Server parameter specifies the server on which to perform the selected operations.

```yaml
Type: ServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseAgeDefaults
The UseDatabaseAgeDefaults parameter specifies whether to use the database age limit.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseQuotaDefaults
The UseDatabaseQuotaDefaults parameter specifies whether to use the public store quota limits.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseReplicationSchedule
The UseDatabaseReplicationSchedule parameter specifies whether to use the public folder replication schedule.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseRetentionDefaults
The UseDatabaseRetentionDefaults parameter specifies whether to use the database retention defaults.

```yaml
Type: $true | $false
Parameter Sets: Set2
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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailEnabled
The MailEnabled parameter specifies that the public folder is mail-enabled. To do this, you use the value $true.

You use this parameter to correct a mail-enabled public folder that lost its mail-enabled status. If you attempt to use this parameter to mail-enable a public folder that was never mail-enabled, the command will fail.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailRecipientGuid
The MailRecipientGuid parameter specifies the MailRecipientGuid value of the public folder. You use this parameter to correct a mail-enabled public folder that lost its MailRecipientGuid value.

The value that you specify for this parameter must match the MailRecipientGuid value of an existing mail-enabled public folder. Otherwise, the command will fail.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideContentMailbox
This parameter is available only in on-premises Exchange.

The OverrideContentMailbox parameter specifies the identity of the public folder mailbox that you want to move this public folder's content to.

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
The Path parameter specifies the path of the public folder, for example, \\TopLevelPublicFolder\\PublicFolder.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/657a8e15-2587-41b5-986c-2289b2772c89.aspx)
