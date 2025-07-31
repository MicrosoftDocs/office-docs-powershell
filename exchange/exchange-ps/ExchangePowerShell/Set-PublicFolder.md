---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/set-publicfolder
schema: 2.0.0
title: Set-PublicFolder
---

# Set-PublicFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-PublicFolder cmdlet to set the attributes of public folders.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-PublicFolder [-Identity] <PublicFolderIdParameter>
 [-AgeLimit <EnhancedTimeSpan>]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EformsLocaleId <CultureInfo>]
 [-Force]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-IssueWarningQuota <Unlimited>]
 [-LocalReplicaAgeLimit <EnhancedTimeSpan>]
 [-MailRecipientGuid <Guid>]
 [-MailEnabled <Boolean>]
 [-MaxItemSize <Unlimited>]
 [-Name <String>]
 [-OverrideContentMailbox <MailboxIdParameter>]
 [-Path <PublicFolderIdParameter>]
 [-PerUserReadStateEnabled <Boolean>]
 [-ProhibitPostQuota <Unlimited>]
 [-Replicas <DatabaseIdParameter[]>]
 [-ReplicationSchedule <Schedule>]
 [-RetainDeletedItemsFor <EnhancedTimeSpan>]
 [-Server <ServerIdParameter>]
 [-UseDatabaseAgeDefaults <Boolean>]
 [-UseDatabaseQuotaDefaults <Boolean>]
 [-UseDatabaseReplicationSchedule <Boolean>]
 [-UseDatabaseRetentionDefaults <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-PublicFolder "\Customer Service Requests" -UseDatabaseReplicationSchedule $false
```

In Exchange 2010, this example changes a public folder so that it doesn't use the database default replication schedule.

### Example 2
```powershell
Set-PublicFolder "\Customer Service Requests" -OverrideContentMailbox North_America
```

This example changes the content location of the public folder hierarchy mailbox to North\_America.

### Example 3
```powershell
Set-PublicFolder \MyPublicFolder -ReplicationSchedule "Saturday.12:00 AM-Monday.12:00 AM"
```

In Exchange 2010, this example sets the folder to replicate only on weekends.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies the name and path of the public folder you want to modify. A valid value uses the format: `\Level1\Level2\...\LevenN\PublicFolder`. For example, `"\Customer Discussion"` or `"\Engineering\Customer Discussion"`.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AgeLimit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The AgeLimit parameter specifies the overall age limit on the folder. Items that reach the age limit are deleted from the public folder. Replicas of this public folder are automatically deleted when the age limit is exceeded.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EformsLocaleId

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The EformsLocaleId parameter specifies the locale-specific version of the e-forms library. The valid input for the EformsLocaleId parameter is the string names listed in the Culture Name column in the Microsoft .NET Class Library class reference available at [CultureInfo Class](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo).

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HiddenFromAddressListsEnabled

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The HiddenFromAddressListsEnabled parameter specifies whether to hide the public folder from address lists.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IssueWarningQuota

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalReplicaAgeLimit

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The LocalReplicaAgeLimit parameter specifies the age limit of the replica on the connected server, if there is a replica on it.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailEnabled

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MailEnabled parameter specifies that the public folder is mail-enabled. To do this, you use the value $true.

You use this parameter to correct a mail-enabled public folder that lost its mail-enabled status. If you attempt to use this parameter to mail-enable a public folder that was never mail-enabled, the command will fail.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailRecipientGuid

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The MailRecipientGuid parameter specifies the MailRecipientGuid value of the public folder. You use this parameter to correct a mail-enabled public folder that lost its MailRecipientGuid value.

The value that you specify for this parameter must match the MailRecipientGuid value of an existing mail-enabled public folder. Otherwise, the command will fail.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxItemSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Name parameter specifies the name for the public folder.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideContentMailbox

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

This parameter is available only in on-premises Exchange.

The OverrideContentMailbox parameter specifies the target public folder mailbox whereyou want to move this public folder's content to. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Path parameter specifies the path of the public folder, for example, \\TopLevelPublicFolder\\PublicFolder.

```yaml
Type: PublicFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PerUserReadStateEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The PerUserReadStateEnabled parameter specifies whether to maintain read and unread data on a per-user basis.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProhibitPostQuota

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Replicas

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The Replicas parameter specifies a list of public folder databases with which to replicate this public folder. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can specify multiple values separated by commas. If the values contain spaces, use the following syntax: `"Value1","Value2",..."ValueN"`.

```yaml
Type: DatabaseIdParameter[]
Parameter Sets: Set2
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReplicationSchedule

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The ReplicationSchedule parameter specifies the replication schedule for the folder.

The syntax for this parameter is: `StartDay.Hour:Minute [AM | PM]-EndDay.Hour:Minute [AM | PM]`.

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
Parameter Sets: Set2
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetainDeletedItemsFor

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The RetainDeletedItemsFor parameter specifies the retention time for deleted items.

To specify a value, enter it as a time span: dd.hh:mm:ss where dd = days, hh = hours, mm = minutes, and ss = seconds.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name
- FQDN
- Distinguished name (DN)
- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

```yaml
Type: ServerIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseAgeDefaults

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The UseDatabaseAgeDefaults parameter specifies whether to use the database age limit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseQuotaDefaults

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The UseDatabaseQuotaDefaults parameter specifies whether to use the public store quota limits.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseReplicationSchedule

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The UseDatabaseReplicationSchedule parameter specifies whether to use the public folder replication schedule.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDatabaseRetentionDefaults

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010

The UseDatabaseRetentionDefaults parameter specifies whether to use the database retention defaults.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
