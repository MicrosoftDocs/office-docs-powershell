---
applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-PublicFolderMailboxMigrationRequest

## SYNOPSIS
!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-PublicFolderMailboxMigrationRequest cmdlet to view the status of individual jobs in a public folder migration batch created using New-MigrationBatch cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-PublicFolderMailboxMigrationRequest cmdlet to view the status of individual jobs in public folder migration batches that were created by using the New-MigrationBatch cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-PublicFolderMailboxMigrationRequest [-BatchName <String>] [-DomainController <Fqdn>]
 [-HighPriority <$true | $false>] [-Name <String>] [-RequestQueue <DatabaseIdParameter>]
 [-ResultSize <Unlimited>]
 [-Status <None | Queued | InProgress | AutoSuspended | CompletionInProgress | Synced | Completed | CompletedWithWarning | Suspended | Failed>]
 [-Suspend <$true | $false>] [<CommonParameters>]
```

### Set1
```
Get-PublicFolderMailboxMigrationRequest [[-Identity] <PublicFolderMailboxMigrationRequestIdParameter>]
 [-DomainController <Fqdn>] [-ResultSize <Unlimited>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2013

The Get-PublicFolderMailboxMigrationRequest cmdlet displays the following properties by default.

- Name The name assigned by the system to a specific mailbox migration job.

- TargetMailbox The mailbox being migrated.

- Status The current status of the job.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Public folders" entry in the Sharing and collaboration permissions topic.

!!! Exchange Server 2016, Exchange Online

The Get-PublicFolderMailboxMigrationRequest cmdlet displays the following properties by default.

- Name: The name assigned by the system to a specific mailbox migration job.

- TargetMailbox: The mailbox being migrated.

- Status: The current status of the job.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-PublicFolderMailboxMigrationRequest -HighPriority $true
```

This example returns all migration requests that have a priority value of High, Higher, Highest or Emergency.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-PublicFolderMailboxMigrationRequest
```

This example returns information about all migration requests.

### Example 1 -------------------------- (Exchange Online)
```
Get-PublicFolderMailboxMigrationRequest
```

This example returns information about all migration requests.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-PublicFolderMailboxMigrationRequest -HighPriority $true
```

In on-premises Exchange, this example returns all migration requests that have a priority value of High, Higher, Highest or Emergency.

### Example 2 -------------------------- (Exchange Online)
```
Get-PublicFolderMailboxMigrationRequest -HighPriority $true
```

In on-premises Exchange, this example returns all migration requests that have a priority value of High, Higher, Highest or Emergency.

## PARAMETERS

### -BatchName
The BatchName parameter filters the results by the friendly BatchName value that was assigned when the batch job was created. The format of this value is: MigrationService:\<Batch name provided at batch creation\>.

You can't use this parameter with the Identity parameter.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HighPriority
!!! Exchange Server 2013

The HighPriority parameter filters the results based on the Priority value that was assigned when the request was created. Valid input for this parameter is $true or $false. Here's how these values filter the results:

- $true Returns requests that were created with the Priority value High, Higher, Highest or Emergency.

- $false Returns requests that were created with the Priority value Normal, Low, Lower or Lowest.

You can't use this parameter with the Identity parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The HighPriority parameter filters the results based on the Priority value that was assigned when the request was created. Valid input for this parameter is $true or $false. Here's how these values filter the results:

- $true Returns requests that were created with the Priority value High, Higher, Highest or Emergency.

- $false Returns requests that were created with the Priority value Normal, Low, Lower or Lowest.

You can't use this parameter with the Identity parameter.



```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
!!! Exchange Server 2013

The Identity parameter specifies the public folder mailbox migration request that you want to view. The default identity value is \\PublicFolderMailboxMigration\<UniqueIdentifier\> (for example, \\PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e).

You can't use this parameter with the following parameters:

- BatchName

- HighPriority

- Name

- RequestQueue

- Suspend

- Status



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the public folder mailbox migration request that you want to view. The value uses the syntax: \\PublicFolderMailboxMigration\<GUID\> (for example, \\PublicFolderMailboxMigrationac6d9eb4-ee49-405f-b90d-04e9a258bd7e).

You can't use this parameter with the following parameters:

- BatchName

- HighPriority

- Name

- RequestQueue

- Suspend

- Status



```yaml
Type: PublicFolderMailboxMigrationRequestIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2013

The Name parameter specifies the name of the public folder mailbox migration request. If the name was not specified at creation, the default value is PublicFolderMailboxMigration\<UniqueIdentifier\> (for example, PublicFolderMailboxMigration2ffdef13-01b9-4586-af2b-d5a5482010a8).

You can't use this parameter with the Identity parameter.



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies the name of the public folder mailbox migration request. If the name was not specified at creation, the default value is PublicFolderMailboxMigration\<GUID\> (for example, PublicFolderMailboxMigration2ffdef13-01b9-4586-af2b-d5a5482010a8).

You can't use this parameter with the Identity parameter.



```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequestQueue
!!! Exchange Server 2013

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Database GUID

- Database name

You can't use this parameter with the Identity parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RequestQueue parameter identifies the request based on the mailbox database where the request is being run. You can use any value that uniquely identifies the database. For example:

- Database GUID

- Database name

You can't use this parameter with the Identity parameter.



```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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

- None

- Queued

- Suspended

- Synced

You can't use this parameter with the Identity parameter.

```yaml
Type: None | Queued | InProgress | AutoSuspended | CompletionInProgress | Synced | Completed | CompletedWithWarning | Suspended | Failed
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/27e715ca-1b64-493b-8f78-24d29a7b6b0a.aspx)

