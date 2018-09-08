---
external help file: Microsoft.Exchange.WebClient-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Get-FailedContentIndexDocuments
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Get-FailedContentIndexDocuments

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-FailedContentIndexDocuments cmdlet to retrieve a list of documents for a mailbox, mailbox database, or Mailbox server that couldn't be indexed by Exchange Search.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-FailedContentIndexDocuments [-Identity] <MailboxIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [-Archive] [-EndDate <DateTime>] [-ErrorCode <Int32>] [-FailureMode <Transient | Permanent | All>]
 [-ResultSize <Unlimited>] [-StartDate <DateTime>] [<CommonParameters>]
```

### Set3
```
Get-FailedContentIndexDocuments -MailboxDatabase <DatabaseIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-WhatIf] [-EndDate <DateTime>] [-ErrorCode <Int32>] [-FailureMode <Transient | Permanent | All>]
 [-ResultSize <Unlimited>] [-StartDate <DateTime>] [<CommonParameters>]
```

### Set2
```
Get-FailedContentIndexDocuments -Server <ServerIdParameter> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 [-EndDate <DateTime>] [-ErrorCode <Int32>] [-FailureMode <Transient | Permanent | All>]
 [-ResultSize <Unlimited>] [-StartDate <DateTime>] [<CommonParameters>]
```

## DESCRIPTION
The Get-FailedContentIndexDocuments cmdlet returns a list of documents that couldn't be indexed. The most common reason is that there was no filter available for that document type or there was an attachment within the document. For example, the PDF filter isn't available by default. If an email message contains a PDF document, because there is no PDF filter, the document is marked as failed content indexing.

After a new filter is installed, only new messages with attachments of the type for which the filter is installed are indexed. If you want to index older messages for the document type, the mailbox has to be moved.

The cmdlet output provides details about items in a mailbox that couldn't be indexed, including an error code and the reason for failure.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-FailedContentIndexDocuments -Identity "Terry Adams"
```

This example retrieves a list of items that couldn't be indexed by Exchange Search from the mailbox of user Terry Adams.

### -------------------------- Example 2 --------------------------
```
Get-FailedContentIndexDocuments -MailboxDatabase "Mailbox Database MDB2"
```

This example retrieves a list of items that couldn't be indexed by Exchange Search from the mailbox database Mailbox Database MDB2.

## PARAMETERS

### -Identity
The Identity parameter specifies the mailbox. You can use one of the following values:

- GUID

- Distinguished name (DN)

- Domain\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias

```yaml
Type: MailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxDatabase
The MailboxDatabase parameter specifies the database from which to get the mailbox. You can use the following values:

- GUID of the database

- Database name

- DN

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Server
The Server parameter specifies a Mailbox server. You can use the following values:

- Name

- GUID

- DN

```yaml
Type: ServerIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New and Set cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive switch restricts the scope of the cmdlet to the user's archive. When using the Archive switch, you must also specify the Identity parameter.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndDate
The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ErrorCode
The ErrorCode parameter allows you to retrieve documents that failed indexing with a specific error code. You can use the cmdlet without this parameter to list all failed documents for a mailbox, a mailbox database or a Mailbox server. The output includes the error codes and reason for failure. If required, you can then restrict the output to a specific error code from the results.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FailureMode
The FailureMode parameter specifies the type of error. Use the following values.

- Transient: Returns items that couldn't be indexed due to transient errors. Exchange Search attempts to index these items again.

- Permanent: Returns items that couldn't be indexed due to a permanent error. Exchange Search does not attempt to index these items again.

- All: Returns items that couldn't be indexed regardless of nature of failure.

```yaml
Type: Transient | Permanent | All
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".

```yaml
Type: DateTime
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

[Online Version](https://technet.microsoft.com/library/d128ec5f-f805-4bc0-982b-b9adceb8eca8.aspx)
