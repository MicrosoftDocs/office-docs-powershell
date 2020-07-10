---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/get-mailboximportrequest
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-MailboxImportRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019 || exchonline-ps"
---

# Get-MailboxImportRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxImportRequest cmdlet to view the detailed status of an ongoing import request that was initiated using the New-MailboxImportRequest cmdlet.

This cmdlet is available only in the Mailbox Import Export role, and by default, the role isn't assigned to any role groups. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see [Add a role to a role group](https://docs.microsoft.com/Exchange/permissions/role-groups#add-a-role-to-a-role-group).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-MailboxImportRequest [[-Identity] <MailboxImportRequestIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>] [<CommonParameters>]
```

### MailboxFiltering
```
Get-MailboxImportRequest
 [-BatchName <String>]
 [-Database <DatabaseIdParameter>]
 [-DomainController <Fqdn>]
 [-HighPriority <Boolean>]
 [-Mailbox <MailboxOrMailUserIdParameter>]
 [-Name <String>]
 [-ResultSize <Unlimited>]
 [-Status <RequestStatus>]
 [-Suspend <Boolean>]
 [-RequestQueue <DatabaseIdParameter>] [<CommonParameters>]
```

### MailboxLocationFiltering
```
Get-MailboxImportRequest
 [-BatchName <String>]
 [-Database <DatabaseIdParameter>]
 [-DomainController <Fqdn>]
 [-HighPriority <Boolean>]
 [-Mailbox <MailboxLocationIdParameter>]
 [-Name <String>]
 [-ResultSize <Unlimited>]
 [-Status <RequestStatus>]
 [-Suspend <Boolean>]
 [-RequestQueue <DatabaseIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The search criteria for the Get-MailboxImportRequest cmdlet is a Boolean And statement. If you use multiple parameters, you narrow your search and reduce your search results.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-MailboxImportRequest -Identity "tony\Recovered"
```

This example returns the default information regarding the status of the ongoing import request with the identity tony\\Recovered. The type of information returned by default includes name, mailbox, and status.

### Example 2
```powershell
Get-MailboxImportRequest -Status InProgress -Database DB01
```

In Exchange Server 2010, this example returns the status of in progress import requests for mailboxes or archives that reside on database DB01.

### Example 3
```powershell
Get-MailboxImportRequest -BatchName "ImportingDB1PSTs" -Status Completed
```

This example returns the status of import requests in the ImportingDB1PSTs batch that completed.

### Example 4
```powershell
Get-MailboxImportRequest -Name "Recovered" -Suspend $true
```

This example returns all import requests that have the name Recovered where the import has been suspended.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the import request. By default, import requests are named \<alias\>\\MailboxImportX (where X = 0-9). If you specify a name for the import request, use the following syntax: \<alias\>\\\<name\>. Microsoft Exchange automatically precedes the request with the mailbox's alias.

You can't use this parameter with the following parameters:

- BatchName

- Mailbox

- Name

- Status

- Suspend

- HighPriority

```yaml
Type: MailboxImportRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies the name given to a batch import request.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: MailboxFiltering, MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Database
This parameter is available or functional only in Exchange Server 2010.

The Database parameter specifies the database in which the user's mailbox or archive resides. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MailboxFiltering, MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2010

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

### -HighPriority
This parameter is available only in on-premises Exchange.

The HighPriority parameter filters the results based on the Priority value that was assigned when the request was created. Valid input for this parameter is $true or $false. Here's how these values filter the results:

- $true Returns requests that were created with the Priority value High, Higher, Highest or Emergency.

- $false Returns requests that were created with the Priority value Normal, Low, Lower or Lowest.

You can't use this parameter with the Identity parameter.

```yaml
Type: Boolean
Parameter Sets: MailboxFiltering, MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter filters the results by the destination mailbox where the content is being imported to.

In Exchange 2016 CU7 or later, this parameter is the type MailboxLocationIdParameter, so the easiest value that you can use to identify the mailbox is the Alias value.

In Exchange 2016 CU6 or earlier, this parameter is the type MailboxOrMailUserIdParameter, so you can use any value that uniquely identifies the mailbox. For example:

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

You can't use this parameter with the Identity parameter.

```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: MailboxFiltering
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: MailboxLocationIdParameter
Parameter Sets: MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies that import requests that have the specified name are returned.

Use this parameter to search on the name that you provided when you created the import request. If you didn't specify a name when the request was created, the default name is MailboxImportX (where X = 0-9).

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: MailboxFiltering, MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

CompletionInProgress and AutoSuspended don't apply to import requests and won't return any information.

```yaml
Type: RequestStatus
Parameter Sets: MailboxFiltering, MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Type: Boolean
Parameter Sets: MailboxFiltering, MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
This parameter is available only in on-premises Exchange.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: MailboxFiltering, MailboxLocationFiltering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
