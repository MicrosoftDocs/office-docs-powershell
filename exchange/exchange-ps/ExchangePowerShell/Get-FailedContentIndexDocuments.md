---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE
author: chrisda
external help file: Microsoft.Exchange.WebClient-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-failedcontentindexdocuments
schema: 2.0.0
title: Get-FailedContentIndexDocuments
---

# Get-FailedContentIndexDocuments

## SYNOPSIS
This cmdlet is available only in Exchange Server 2016 or earlier.

Use the Get-FailedContentIndexDocuments cmdlet to retrieve a list of documents for a mailbox, mailbox database, or Mailbox server that couldn't be indexed by Exchange Search.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Mailbox
```
Get-FailedContentIndexDocuments [-Identity] <MailboxIdParameter>
 [-Archive]
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EndDate <DateTime>]
 [-ErrorCode <Int32>]
 [-FailureMode <FailureMode>]
 [-ResultSize <Unlimited>]
 [-StartDate <DateTime>]
 [-WhatIf]
 [<CommonParameters>]
```

### Database
```
Get-FailedContentIndexDocuments -MailboxDatabase <DatabaseIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EndDate <DateTime>]
 [-ErrorCode <Int32>]
 [-FailureMode <FailureMode>]
 [-ResultSize <Unlimited>]
 [-StartDate <DateTime>]
 [-WhatIf]
 [<CommonParameters>]
```

### Server
```
Get-FailedContentIndexDocuments -Server <ServerIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-EndDate <DateTime>]
 [-ErrorCode <Int32>]
 [-FailureMode <FailureMode>]
 [-ResultSize <Unlimited>]
 [-StartDate <DateTime>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Get-FailedContentIndexDocuments cmdlet returns a list of documents that couldn't be indexed. The most common reason is that there was no filter available for that document type or there was an attachment within the document. For example, the PDF filter isn't available by default. If an email message contains a PDF document, because there is no PDF filter, the document is marked as failed content indexing.

After a new filter is installed, only new messages with attachments of the type for which the filter is installed are indexed. If you want to index older messages for the document type, the mailbox has to be moved.

The cmdlet output provides details about items in a mailbox that couldn't be indexed, including an error code and the reason for failure.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-FailedContentIndexDocuments -Identity "Terry Adams"
```

This example retrieves a list of items that couldn't be indexed by Exchange Search from the mailbox of user Terry Adams.

### Example 2
```powershell
Get-FailedContentIndexDocuments -MailboxDatabase "Mailbox Database MDB2"
```

This example retrieves a list of items that couldn't be indexed by Exchange Search from the mailbox database named Mailbox Database MDB2.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Identity parameter specifies the mailbox that you want to view. You can use any value that uniquely identifies the mailbox. For example:

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
Parameter Sets: Mailbox
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxDatabase

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The MailboxDatabase parameter specifies the database from which to get the mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: Database
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Server parameter specifies a Mailbox server. You can use the following values:

- Name
- GUID
- DN

```yaml
Type: ServerIdParameter
Parameter Sets: Server
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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

### -Archive

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The Archive switch restricts the scope of the cmdlet to the user's archive. You don't need to specify a value with this switch.

When using the Archive switch, you must also specify the Identity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Mailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

### -ErrorCode

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The ErrorCode parameter allows you to retrieve documents that failed indexing with a specific error code. You can use the cmdlet without this parameter to list all failed documents for a mailbox, a mailbox database or a Mailbox server. The output includes the error codes and reason for failure. If required, you can then restrict the output to a specific error code from the results.

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

### -FailureMode

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The FailureMode parameter specifies the type of error. Use the following values.

- Transient: Returns items that couldn't be indexed due to transient errors. Exchange Search attempts to index these items again.
- Permanent: Returns items that couldn't be indexed due to a permanent error. Exchange Search does not attempt to index these items again.
- All: Returns items that couldn't be indexed regardless of nature of failure.

```yaml
Type: FailureMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is reserved for internal Microsoft use.

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

### -StartDate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format MM/dd/yyyy, enter 09/01/2018 to specify September 1, 2018. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2018 5:00 PM".

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

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
