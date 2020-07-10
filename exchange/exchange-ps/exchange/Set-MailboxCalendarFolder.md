---
external help file: Microsoft.Exchange.CalendarsAndGroups-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-mailboxcalendarfolder
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Set-MailboxCalendarFolder
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Set-MailboxCalendarFolder

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxCalendarFolder cmdlet to configure calendar publishing or sharing settings on a mailbox for the visibility of calendar information to external users. To add or modify the permissions so internal users can access the calendar, use the Add-MailboxFolderPermission or Set-MailboxFolderPermission cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxCalendarFolder [-Identity] <MailboxFolderIdParameter> [-Confirm]
 [-DetailLevel <DetailLevelEnumType>] [-DomainController <Fqdn>]
 [-PublishDateRangeFrom <DateRangeEnumType>]
 [-PublishDateRangeTo <DateRangeEnumType>]
 [-PublishEnabled <Boolean>] [-ResetUrl] [-SearchableUrlEnabled <Boolean>] [-WhatIf]
 [-SetAsSharingSource] [-UseHttps] [<CommonParameters>]
```

## DESCRIPTION
The Set-MailboxCalendarFolder cmdlet configures publishing information. The calendar folder can be configured as follows:

- Whether the calendar folder is enabled for publishing

- Range of start and end calendar days to publish

- Level of detail to publish for the calendar

- Whether the published URL of the calendar is enabled for search on the web

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

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
The Identity parameter specifies the calendar folder that you want to modify. The syntax is `MailboxID:\ParentFolder[\SubFolder]`.

For the value of `MailboxID`, you can use any value that uniquely identifies the mailbox. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DetailLevel
The DetailLevel parameter specifies the level of calendar detail that's published and available to anonymous users. You can use the following values:

- AvailabilityOnly

- LimitedDetails

- FullDetails

- Editor

The default value is AvailabilityOnly.

```yaml
Type: DetailLevelEnumType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishDateRangeFrom
The PublishDateRangeFrom parameter specifies the number of days of calendar information to publish before the current date. You can use the following values:

- OneDay

- ThreeDays

- OneWeek

- OneMonth

- ThreeMonths

- SixMonths

- OneYear

The default value is ThreeMonths.

```yaml
Type: DateRangeEnumType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishDateRangeTo
The PublishDateRangeTo parameter specifies the number of days of calendar information to publish after the current date. You can use the following values:

- OneDay

- ThreeDays

- OneWeek

- OneMonth

- ThreeMonths

- SixMonths

- OneYear

The default value is ThreeMonths.

```yaml
Type: DateRangeEnumType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishEnabled
The PublishEnabled parameter specifies whether the specified calendar should be enabled for publishing. The default value is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetUrl
The ResetUrl parameter replaces the existing non-public URL with a new URL for a calendar that has been published without being publicly searchable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchableUrlEnabled
The SearchableUrlEnabled parameter specifies whether the published calendar URL can be searched on the web. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SetAsSharingSource
The SetAsSharingSource switch specifies whether to set the calendar folder as a sharing source. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseHttps
The UseHttps switch specifies whether to use HTTPS for the published URL of the calendar folder. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
