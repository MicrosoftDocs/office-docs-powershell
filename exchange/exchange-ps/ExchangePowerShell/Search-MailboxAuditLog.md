---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/search-mailboxauditlog
schema: 2.0.0
title: Search-MailboxAuditLog
---

# Search-MailboxAuditLog

## SYNOPSIS
> [!NOTE]
> This cmdlet will be deprecated in the cloud-based service. To access audit log data, use the Search-UnifiedAuditLog cmdlet. For more information, see this blog post: <https://aka.ms/AuditCmdletBlog>.

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Search-MailboxAuditLog cmdlet to search mailbox audit log entries matching the specified search terms.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Search-MailboxAuditLog [[-Identity] <MailboxIdParameter>]
 [-ShowDetails]
 [-DomainController <Fqdn>]
 [-EndDate <ExDateTime>]
 [-ExternalAccess <Boolean>]
 [-GroupMailbox]
 [-HasAttachments <Boolean>]
 [-IncludeInactiveMailbox]
 [-LogonTypes <MultiValuedProperty>]
 [-Operations <MultiValuedProperty>]
 [-ResultSize <Int32>]
 [-StartDate <ExDateTime>]
 [<CommonParameters>]
```

### MultipleMailboxesSearch
```
Search-MailboxAuditLog [-Mailboxes <MultiValuedProperty>]
 [-DomainController <Fqdn>]
 [-EndDate <ExDateTime>]
 [-ExternalAccess <Boolean>]
 [-GroupMailbox]
 [-HasAttachments <Boolean>]
 [-IncludeInactiveMailbox]
 [-LogonTypes <MultiValuedProperty>]
 [-Operations <MultiValuedProperty>]
 [-ResultSize <Int32>]
 [-StartDate <ExDateTime>]
 [<CommonParameters>]
```

## DESCRIPTION
The Search-MailboxAuditLog cmdlet performs a synchronous search of mailbox audit logs for one or more specified mailboxes and displays search results in the Exchange Management Shell window. To search mailbox audit logs for multiple mailboxes and have the results sent by email to specified recipients, use the New-MailboxAuditLogSearch cmdlet instead. To learn more about mailbox audit logging, see [Mailbox audit logging in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/mailbox-audit-logging/mailbox-audit-logging).

In multi-geo environments, when you run this cmdlet in a different region from the mailbox that you're trying to search, you might receive the error, "An error occurred while trying to access the audit log." In this scenario, you need to anchor the PowerShell session to a user in the same region as the mailbox as described in [Connect directly to a geo location using Exchange Online PowerShell](https://learn.microsoft.com/microsoft-365/enterprise/administering-exchange-online-multi-geo#connect-directly-to-a-geo-location-using-exchange-online-powershell).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Search-MailboxAuditLog -Identity kwok -LogonTypes Admin,Delegate -StartDate 1/1/2018 -EndDate 12/31/2018 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by Admin and Delegate logon types between 1/1/2018 and 12/31/2018. A maximum of 2,000 log entries are returned.

### Example 2
```powershell
Search-MailboxAuditLog -Mailboxes kwok,bsmith -LogonTypes Admin,Delegate -StartDate 1/1/2018 -EndDate 12/31/2018 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok and Ben Smith's mailboxes for actions performed by Admin and Delegate logon types between 1/1/2018 and 12/31/2018. A maximum of 2,000 log entries are returned.

### Example 3
```powershell
Search-MailboxAuditLog -Identity kwok -LogonTypes Owner -ShowDetails -StartDate 1/1/2017 -EndDate 3/1/2017 | Where-Object {$_.Operation -eq "HardDelete"}
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by the mailbox owner between 1/1/2017 and 3/1/2017. The results are piped to the Where-Object cmdlet and filtered to return only entries with the HardDelete action.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Identity parameter specifies a single mailbox to retrieve mailbox audit log entries from. You can use any value that uniquely identifies the mailbox. For example:

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
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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

### -EndDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAccess

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ExternalAccess parameter specifies whether to return only audit log entries for mailbox access by users that are outside of your organization. In Exchange Online, this parameter returns audit log entries for mailbox access by Microsoft datacenter administrators. Valid values are:

$true: Audit log entries for mailbox access by external users or Microsoft datacenter administrators are returned.

$false: Audit log entries for mailbox access by external users or Microsoft datacenter administrators are ignored. This is the default value.

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

### -GroupMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The GroupMailbox switch is required to include Microsoft 365 Groups in the search. You don't need to specify a value with this switch.

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

### -HasAttachments

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

The HasAttachments parameter filters the search by messages that have attachments. Valid values are:

- $true: Only messages with attachments are included in the search.
- $false: Messages with and without attachments are included in the search.

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

### -IncludeInactiveMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill IncludeInactiveMailbox Description }}

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

### -LogonTypes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The LogonTypes parameter specifies the type of logons. Valid values are:

- Admin: Audit log entries for mailbox access by administrator logons are returned.
- Delegate: Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.
- Owner: Audit log entries for mailbox access by the primary mailbox owner are returned. This value requires the ShowDetails switch.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailboxes

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Mailboxes parameter specifies the mailboxes to retrieve mailbox audit log entries from. You can use this parameter to search audit logs for multiple mailboxes.

You enter multiple mailboxes separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You can't use this parameter with the ShowDetails switch.

```yaml
Type: MultiValuedProperty
Parameter Sets: MultipleMailboxesSearch
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operations

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The Operations parameter filters the search results by the mailbox actions that are logged by mailbox audit logging. Valid values are:

- AddFolderPermissions (Exchange 2019 and Exchange Online only. Although this value is accepted, it's already included in the UpdateFolderPermissions action and isn't audited separately.)
- ApplyRecord (Exchange Online only)
- Copy
- Create
- Default (Exchange Online only)
- FolderBind
- HardDelete
- MailboxLogin
- MailItemsAccessed (Exchange Online only and only for E5 or E5 Compliance add-on subscription users.)
- MessageBind (Although this value is accepted, these actions are no longer logged.)
- ModifyFolderPermissions (Exchange 2019 and Exchange Online only. Although this value is accepted, it's already included in the UpdateFolderPermissions action and isn't audited separately.)
- Move
- MoveToDeletedItems
- RecordDelete (Exchange Online only)
- RemoveFolderPermissions (Exchange 2019 and Exchange Online only. Although this value is accepted, it's already included in the UpdateFolderPermissions action and isn't audited separately.)
- SendAs
- SendOnBehalf
- SoftDelete
- Update
- UpdateCalendarDelegation (Exchange 2019 and Exchange Online only)
- UpdateComplianceTag (Exchange Online only)
- UpdateFolderPermissions (Exchange 2019 and Exchange Online only)
- UpdateInboxRules (Exchange 2019 and Exchange Online only)

You can enter multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ResultSize parameter specifies the maximum number of mailbox audit log entries to return. Valid values include an integer from 1 through 250000. By default, 1000 entries are returned.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowDetails

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The ShowDetails switch retrieves the details of each log entry from the mailbox. You don't need to specify a value with this switch.

By default, all fields for each returned log entry are displayed in a list view.

You can't use this switch with the Mailboxes parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:

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
