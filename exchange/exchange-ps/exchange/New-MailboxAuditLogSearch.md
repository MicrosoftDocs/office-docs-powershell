---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-mailboxauditlogsearch
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: New-MailboxAuditLogSearch
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# New-MailboxAuditLogSearch

## SYNOPSIS
> [!NOTE]
> This cmdlet will be deprecated in the cloud-based service. To access audit log data, use the Search-UnifiedAuditLog cmdlet. For more information, see this blog post: <https://aka.ms/AuditCmdletBlog>.

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MailboxAuditLogSearch cmdlet to search mailbox audit logs and have search results sent via email to specified recipients.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-MailboxAuditLogSearch -EndDate <ExDateTime> -StartDate <ExDateTime> -StatusMailRecipients <MultiValuedProperty>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-ExternalAccess <Boolean>]
 [-GroupMailbox]
 [-HasAttachments <Boolean>]
 [-LogonTypes <MultiValuedProperty>]
 [-Mailboxes <MultiValuedProperty>]
 [-Name <String>]
 [-Operations <MultiValuedProperty>]
 [-ShowDetails]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-MailboxAuditLogSearch cmdlet performs an asynchronous search of mailbox audit logs for the specified mailboxes and sends the search results by email to the specified recipients. The body of the email message contains search metadata such as search parameters and the time when the search request was submitted. The results are attached in an .xml file.

To search mailbox audit logs for a single mailbox and have the results displayed in the Exchange Management Shell window, use the Search-MailboxAuditLog cmdlet instead. To learn more about mailbox audit logging, see [Mailbox audit logging in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/mailbox-audit-logging/mailbox-audit-logging).

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-MailboxAuditLogSearch "Admin and Delegate Access" -Mailboxes "Ken Kwok","April Stewart" -LogonTypes Admin,Delegate -StartDate 1/1/2018 -EndDate 12/31/2018 -StatusMailRecipients auditors@contoso.com
```

This example creates a mailbox audit log search to search Ken Kwok and April Stewart's mailboxes for administrator and delegate logons from 1/1/2018 to 12/31/2018. Search results are sent to auditors@contoso.com by email.

### Example 2
```powershell
New-MailboxAuditLogSearch -ExternalAccess $true -StartDate 09/01/2018 -EndDate 10/24/2018 -StatusMailRecipients admin@contoso.com
```

This example returns entries from the mailbox audit logs of all users in organization for any mailbox access by Microsoft datacenter administrators between September 1, 2018 and October 24, 2018. The search results are sent to admin@contoso.com.

## PARAMETERS

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StatusMailRecipients
The StatusMailRecipients parameter specifies the email address where the search results are sent. You can specify multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
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

### -DomainController
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

### -ExternalAccess
The ExternalAccess parameter specifies whether to return only audit log entries for mailbox access by users that are outside of your organization. In Exchange Online, this parameter returns audit log entries for mailbox access by Microsoft datacenter administrators. Valid values are:

$true: Audit log entries for mailbox access by external users or Microsoft datacenter administrators are returned.

$false: Audit log entries for mailbox access by external users or Microsoft datacenter administrators are ignored. This is the default value.

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

### -GroupMailbox
This parameter is available only in the cloud-based service.

The GroupMailbox switch is required to include Microsoft 365 Groups in the search. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasAttachments
The HasAttachments parameter filters the search by messages that have attachments. Valid values are:

- $true: Only messages with attachments are included in the search.
- $false: Messages with and without attachments are included in the search.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogonTypes
The LogonTypes parameter specifies the type of logons. Valid values are:

- Admin: Audit log entries for mailbox access by administrator logons are returned.
- Delegate: Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.
- External: For Exchange Online mailboxes, audit log entries for mailbox access by Microsoft datacenter administrators are returned.
- Owner: Audit log entries for mailbox access by the primary mailbox owner are returned. This value requires the ShowDetails switch.

You can enter multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailboxes
The Mailboxes parameter specifies the mailbox to retrieve mailbox audit log entries from.

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

 If you don't specify a value, mailbox audit logs for all mailboxes in the organization are returned.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a name for the search. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operations
The Operations parameter filters the search results by the operations that are logged by mailbox audit logging. Valid values are:

- Copy
- Create
- FolderBind
- HardDelete
- MailboxLogin
- MessageBind
- Move
- MoveToDeletedItems
- SendAs
- SendOnBehalf
- SoftDelete
- Update

You can enter multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowDetails
The ShowDetails switch specifies that details of each log entry are retrieved. You don't need to specify a value with this switch.

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
