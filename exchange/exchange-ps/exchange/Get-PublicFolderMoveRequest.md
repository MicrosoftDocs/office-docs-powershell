---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-publicfoldermoverequest
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online
title: Get-PublicFolderMoveRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-PublicFolderMoveRequest

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-PublicFolderMoveRequest cmdlet to view the detailed status of an ongoing public folder move that was initiated using the New-PublicFolderMoveRequest cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity
```
Get-PublicFolderMoveRequest [[-Identity] <PublicFolderMoveRequestIdParameter>]
 [-AccountPartition <AccountPartitionIdParameter>]
 [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

### Filtering
```
Get-PublicFolderMoveRequest [-BatchName <String>] [-HighPriority <Boolean>] [-Name <String>] [-RequestQueue <DatabaseIdParameter>] [-Status <RequestStatus>] [-Suspend <Boolean>]
 [-AccountPartition <AccountPartitionIdParameter>]
 [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Public folder move requests are used to move public folders between public folder mailboxes. After the move request is complete, you need to update the hierarchy using the Update-PublicFolderMailbox cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderMoveRequest -Identity \PublicFolderMove
```

This example returns the status of an in-progress public folder move request with the identity \\PublicFolderMove, which is the default name assigned to public folder moves.

### Example 2
```powershell
Get-PublicFolderMoveRequest -RequestQueue MBD01
```

This example returns the status of in-progress and queued requests that are on the source database MBD01.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the public folder move request. The default identity assigned to public folder move requests is \\PublicFolderMove.

You can't use this parameter with the following parameters:

- BatchName
- HighPriority
- Name
- RequestQueue
- Suspend
- Status

```yaml
Type: PublicFolderMoveRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccountPartition
This parameter is available only in the cloud-based service.

{{ Fill AccountPartition Description }}

```yaml
Type: AccountPartitionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies the name that was given to a batch public folder move request.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is functional only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Type: Boolean
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the name of the public folder move request. If you didn't specify a name when creating the move request, PublicFolderMove will be the default name assigned to the request.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available only in the cloud-based service.

{{ Fill Organization Description }}

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

You can't use this parameter with the Identity parameter.

```yaml
Type: DatabaseIdParameter
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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

```yaml
Type: RequestStatus
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Online

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
