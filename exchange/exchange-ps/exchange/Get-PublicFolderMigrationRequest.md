---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-publicfoldermigrationrequest
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Get-PublicFolderMigrationRequest
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-PublicFolderMigrationRequest

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-PublicFolderMigrationRequest cmdlet to view information about serial public folder migration requests (requests created by the New-PublicFolderMigrationRequest cmdlet).

**Note**: Support for serial migration of public folders ended in Exchange 2013 Cumulative Update 8 (CU8), and the cmdlets are no longer available in Exchange Online. Instead, use the corresponding **\*-MigrationBatch** and **\*-PublicFolderMailboxMigration\*** cmdlets.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Filtering
```
Get-PublicFolderMigrationRequest
 [-BatchName <String>]
 [-DomainController <Fqdn>]
 [-HighPriority <Boolean>]
 [-Name <String>]
 [-RequestQueue <DatabaseIdParameter>]
 [-ResultSize <Unlimited>]
 [-Status <RequestStatus>]
 [-Suspend <Boolean>]
 [<CommonParameters>]
```

### Identity
```
Get-PublicFolderMigrationRequest [[-Identity] <PublicFolderMigrationRequestIdParameter>]
 [-DomainController <Fqdn>]
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-PublicFolderMigrationRequest
```

This example returns the status of in-progress migration requests.

### Example 2
```powershell
Get-PublicFolderMigrationRequest -Identity "PFMigrate10_11_12" | Format-List Suspended,AutoSuspended
```

This example returns all migration requests that have the name PFMigrate10\_11\_12 and the request has been suspended.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the public folder migration request that you want to view. You can use the following values:

- GUID
- Name

You can't use this parameter with other filtering parameters (BatchName, HighPriority, Name, RequestQueue, Status, or Suspend).

```yaml
Type: PublicFolderMigrationRequestIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BatchName
The BatchName parameter specifies the name that was given to a batch migration request.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter filters the results by the name of the public folder migration request.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Filtering
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
