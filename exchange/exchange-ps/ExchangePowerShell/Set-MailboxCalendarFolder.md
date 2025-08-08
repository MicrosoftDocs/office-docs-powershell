---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxcalendarfolder
schema: 2.0.0
title: Set-MailboxCalendarFolder
---

# Set-MailboxCalendarFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-MailboxCalendarFolder cmdlet to configure calendar publishing or sharing settings on a mailbox for the visibility of calendar information to external users. To add or modify the permissions so internal users can access the calendar, use the Add-MailboxFolderPermission or Set-MailboxFolderPermission cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxCalendarFolder [-Identity] <MailboxFolderIdParameter>
 [-Confirm]
 [-DetailLevel <DetailLevelEnumType>]
 [-DomainController <Fqdn>]
 [-PublishDateRangeFrom <DateRangeEnumType>]
 [-PublishDateRangeTo <DateRangeEnumType>]
 [-PublishEnabled <Boolean>]
 [-ResetUrl]
 [-SearchableUrlEnabled <Boolean>]
 [-SetAsSharingSource]
 [-SharedCalendarSyncStartDate <DateTime>]
 [-UseHttps]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-MailboxCalendarFolder cmdlet configures calendar publishing information. The calendar folder can be configured as follows:

- Whether the calendar folder is enabled for publishing
- Range of start and end calendar days to publish
- Level of detail to publish for the calendar
- Whether the published URL of the calendar is enabled for search on the web

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxCalendarFolder -Identity kai:\Calendar -DetailLevel LimitedDetails
```

This example sets the level of details to publish for Kai's shared calendar to LimitedDetails, which means limited details are displayed.

### Example 2
```powershell
Set-MailboxCalendarFolder -Identity kai:\Calendar -SearchableUrlEnabled $true
```

This example enables the calendar in Kai's mailbox to be searchable on the web.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Identity parameter specifies the calendar folder that you want to modify. The syntax is `MailboxID:\ParentFolder[\SubFolder]`.

For the value of `MailboxID`, you can use any value that uniquely identifies the mailbox. For example:

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

Example values for this parameter are `john@contoso.com:\Calendar` or `John:\Calendar`

```yaml
Type: MailboxFolderIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

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

### -DetailLevel

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DetailLevel parameter specifies the level of calendar detail that's published and available to anonymous users. Valid values are:

- AvailabilityOnly (default)
- LimitedDetails
- FullDetails

This parameter is meaningful only when the PublishEnabled parameter value is $true.

```yaml
Type: DetailLevelEnumType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -PublishDateRangeFrom

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PublishDateRangeFrom parameter specifies the start date of calendar information to publish (past information). Valid values are:

- OneDay
- ThreeDays
- OneWeek
- OneMonth
- ThreeMonths (default value)
- SixMonths
- OneYear

This parameter is meaningful only when the PublishEnabled parameter value is $true.

```yaml
Type: DateRangeEnumType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishDateRangeTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PublishDateRangeTo parameter specifies the end date of calendar information to publish (future information). Valid values are:

- OneDay
- ThreeDays
- OneWeek
- OneMonth
- ThreeMonths (default value)
- SixMonths
- OneYear

This parameter is meaningful only when the PublishEnabled parameter value is $true.

```yaml
Type: DateRangeEnumType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PublishEnabled parameter specifies whether to publish the specified calendar information. Valid values are:

- $true: The calendar information is published.
- $false: The calendar information is not published. This value is the default.

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

### -ResetUrl

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ResetUrl switch replaces the existing non-public URL with a new URL for a calendar that is published without being publicly searchable. You don't need to specify a value with this switch.

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

### -SearchableUrlEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SearchableUrlEnabled parameter specifies whether the published calendar URL is discoverable on the web.

- $true: The published calendar URL is discoverable on the web.
- $false: The published calendar URL is not discoverable on the web. This value is the default.

This parameter is meaningful only when the PublishEnabled parameter value is $true.

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

### -SetAsSharingSource

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SetAsSharingSource switch specifies whether to set the calendar folder as a sharing source. You don't need to specify a value with this switch.

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

### -SharedCalendarSyncStartDate

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

**Note**: This parameter is supported only for shared calendars that have been upgraded as described in [Calendar sharing in Microsoft 365](https://support.microsoft.com/office/365-b576ecc3-0945-4d75-85f1-5efafb8a37b4), and is not applicable to any other type of calendar or mailbox folder.

The SharedCalendarSyncStartDate parameter specifies the limit for past events in the shared calendar that are visible to delegates. A copy of the shared calendar within the specified date range is stored in the delegate's mailbox.

To specify a date/time value for this parameter, use either of the following options:

- Specify the date/time value in UTC: For example, "2021-05-06 14:30:00z".
- Specify the date/time value as a formula that converts the date/time in your local time zone to UTC: For example, `(Get-Date "5/6/2021 9:30 AM").ToUniversalTime()`. For more information, see [Get-Date](https://learn.microsoft.com/powershell/module/Microsoft.PowerShell.Utility/Get-Date).

**Notes**:

- You use this parameter on the shared calendar in the delegate's mailbox. For example, `Set-MailboxCalendarFolder -Identity delegate@contoso.onmicrosoft.com:DelegateSharedCalendarFolderId" -SharedCalendarSyncStartDate (Get-Date "5/6/2023 9:30 AM").ToUniversalTime()`. DelegateSharedCalendarFolderId is the FolderId of the shared calendar in the delegate's mailbox (for example, `Get-MailboxFolderStatistics -Identity delegate@contoso.onmicrosoft.com -FolderScope Calendar | Format-List Name,FolderId`).
- Users need to have FullDetails, Editor, or Delegate access to the specified shared calendar.
- Setting this parameter might cause events in the shared calendar to briefly disappear from view while the calendar is resynchronized.
- The value of this parameter is used when initializing the calendar folder sync. After that, every new, updated, and deleted item is processed and synced, regardless of the SharedCalendarSyncStartDate parameter value.

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseHttps

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The UseHttps switch specifies whether to use HTTPS for the published URL of the calendar folder. You don't need to specify a value with this switch.

This switch is meaningful only when the PublishEnabled parameter value is $true.

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

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
