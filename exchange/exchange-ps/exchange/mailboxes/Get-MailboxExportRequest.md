---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-MailboxExportRequest
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-MailboxExportRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxExportRequest cmdlet to view the detailed status of an ongoing export request that was initiated by using the New-MailboxExportRequest cmdlet.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups (https://technet.microsoft.com/library/jj657480.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-MailboxExportRequest [[-Identity] <MailboxExportRequestIdParameter>] [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

### Set2
```
Get-MailboxExportRequest [-BatchName <String>] [-Database <DatabaseIdParameter>] [-DomainController <Fqdn>]
 [-HighPriority <$true | $false>] [-Mailbox <MailboxOrMailUserIdParameter>] [-Name <String>]
 [-ResultSize <Unlimited>]
 [-Status <None | Queued | InProgress | AutoSuspended | CompletionInProgress | Completed | CompletedWithWarning | Suspended | Failed>]
 [-Suspend <$true | $false>] [-RequestQueue <DatabaseIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The search criteria for the Get-MailboxExportRequest cmdlet is a Boolean And statement. If you use multiple parameters, you narrow your search and reduce your search results.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-MailboxExportRequest -Identity "tony\DB01toPST"
```

This example returns the status of the ongoing export request with the identity tony\DB01toPST.

### -------------------------- Example 2 --------------------------
```
Get-MailboxExportRequest -Status InProgress -Database DB01
```

In Exchange Server 2010, this example returns the status of in progress export requests for mailboxes or archives that reside on database DB01.

### -------------------------- Example 3 --------------------------
```
Get-MailboxExportRequest -BatchName "Attachment_CompanyReport" -Status Completed
```

This example returns the status of export requests in the Attachment_CompanyReport batch that completed.

### -------------------------- Example 4 --------------------------
```
Get-MailboxExportRequest -Name "DB01toPST" -Suspend $true
```

This example returns all export requests that have the name DB01toPST where the export has been suspended.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the export request. By default, export requests are named Alias\MailboxExportX (where X = 0-9). If you specified a name for the export request when the request was created using the New-MailboxExportRequest cmdlet, use the following syntax: Alias\Name. Exchange automatically precedes the request with the mailbox's alias.

This parameter can't be with the following parameters:

- BatchName

- Mailbox

- Name

- Status

- Suspend

- HighPriority

```yaml
Type: MailboxExportRequestIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies the name given to a batch export request.

You can't use this parameter in conjunction with the Identity parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
This parameter is available or functional only in Exchange Server 2010.

The Database parameter specifies the database in which the user's mailbox or archive resides. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter in conjunction with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HighPriority
The HighPriority parameter filters the results based on the Priority value that was assigned when the request was created. Valid input for this parameter is $true or $false. Here's how these values filter the results:

- $true Returns requests that were created with the Priority value High, Higher, Highest or Emergency.

- $false Returns requests that were created with the Priority value Normal, Low, Lower or Lowest.

You can't use this parameter with the Identity parameter.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the identity of the mailbox or mail user from which contents are being exported. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

You can't use this parameter with the Identity parameter.

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies that export requests that have the specified name are returned.

Use this parameter to search on the name that you provided when you created the export request.

If you didn't specify a name when the request was created, the default name is MailboxExportX (where X = 0-9).

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
The Status parameter filters the results based on status. You can use the following values:

- AutoSuspended

- Completed

- CompletedWithWarning

- CompletionInProgress

- Failed

- InProgress

- Queued

- Retrying

- Suspended

- Synced

You can't use this parameter with the Identity parameter.

CompletionInProgress and AutoSuspended don't apply to export requests and won't return any information.

```yaml
Type: None | Queued | InProgress | AutoSuspended | CompletionInProgress | Completed | CompletedWithWarning | Suspended | Failed
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend
The Suspend parameter specifies whether to return requests that have been suspended. Valid input for this parameter is $true or $false.

You can't use this parameter with the Identity parameter.

```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Database GUID

- Database name

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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

[Online Version](https://technet.microsoft.com/library/f9372840-f387-4e4e-bf56-cf9c4f49d4cb.aspx)
