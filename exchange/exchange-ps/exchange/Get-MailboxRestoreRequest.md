---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxRestoreRequest

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MailboxRestoreRequest cmdlet to view detailed status of an ongoing restore request that was initiated by using the New-MailboxRestoreRequest cmdlet.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxRestoreRequest cmdlet to view detailed status of an ongoing restore request that was initiated by using the New-MailboxRestoreRequest cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxRestoreRequest cmdlet to view detailed status of an ongoing restore request that was initiated by using the New-MailboxRestoreRequest cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-MailboxRestoreRequest [[-Identity] <MailboxRestoreRequestIdParameter>] [-DomainController <Fqdn>]
 [-MultiTenant] [-Organization <OrganizationIdParameter>] [-ResultSize <Unlimited>]
 [-AccountPartition <AccountPartitionIdParameter>] [<CommonParameters>]
```

### Set2
```
Get-MailboxRestoreRequest [-BatchName <String>] [-DomainController <Fqdn>] [-HighPriority <$true | $false>]
 [-MultiTenant] [-Name <String>] [-Organization <OrganizationIdParameter>] [-ResultSize <Unlimited>]
 [-SourceDatabase <DatabaseIdParameter>]
 [-Status <None | Queued | InProgress | AutoSuspended | CompletionInProgress | Completed | CompletedWithWarning | Suspended | Failed>]
 [-Suspend <$true | $false>] [-TargetDatabase <DatabaseIdParameter>]
 [-TargetMailbox <MailboxOrMailUserIdParameter>] [-RequestQueue <DatabaseIdParameter>]
 [-AccountPartition <AccountPartitionIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox restore request" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox restore request" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxRestoreRequest -Identity "ayla\MailboxRestore"
```

This example returns the status of the in progress and queued restore request with the identity ayla\\MailboxRestore.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxRestoreRequest -Identity "ayla\MailboxRestore"
```

This example returns the status of the in-progress and queued restore request with the identity ayla\\MailboxRestore.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxRestoreRequest -Identity "ayla\MailboxRestore"
```

This example returns the status of the in-progress and queued restore request with the identity ayla\\MailboxRestore.

### Example 1 -------------------------- (Exchange Online)
```
Get-MailboxRestoreRequest -Identity "ayla\MailboxRestore"
```

This example returns the status of the in-progress and queued restore request with the identity ayla\\MailboxRestore.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxRestoreRequest -TargetDatabase MBD01
```

This example returns the status of in progress and queued restore requests that are being restored to the target database MBD01.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxRestoreRequest -RequestQueue MBD01
```

This example returns the status of in-progress and queued restore requests that are being restored to the mailbox database MBD01.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxRestoreRequest -RequestQueue MBD01
```

This example returns the status of in-progress and queued restore requests that are being restored to the mailbox database MBD01.

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxRestoreRequest -RequestQueue MBD01
```

This example returns the status of in-progress and queued restore requests that are being restored to the mailbox database MBD01.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-MailboxRestoreRequest -Name "RestoreToMBD01" -Suspend $true
```

This example returns all restore requests that have the name RestoreToMBD01 where the restore request has been suspended.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-MailboxRestoreRequest -Name "RestoreToMBD01" -Suspend $true
```

This example returns all restore requests that have the name RestoreToMBD01 where the restore request has been suspended.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-MailboxRestoreRequest -Name "RestoreToMBD01" -Suspend $true
```

This example returns all restore requests that have the name RestoreToMBD01 where the restore request has been suspended.

### Example 3 -------------------------- (Exchange Online)
```
Get-MailboxRestoreRequest -Name "RestoreToMBD01" -Suspend $true
```

This example returns all restore requests that have the name RestoreToMBD01 where the restore request has been suspended.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the restore request. The Identity parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: \<alias\>\\\<name\>.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

You can't use this parameter in conjunction with the Name parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Identity parameter specifies the identity of the restore request. The Identity parameter consists of the alias of the mailbox to be restored and the name that was specified when the restore request was created. The identity of the restore request uses the following syntax: \<alias\>\\\<name\>.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

You can't use this parameter with the Name parameter.



```yaml
Type: MailboxRestoreRequestIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BatchName
!!! Exchange Server 2010

The BatchName parameter specifies the name given to a batch of restore requests.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The BatchName parameter specifies the name given to a batch of restore requests.

You can't use this parameter with the Identity parameter.



```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010, Exchange Server 2013

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

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

### -HighPriority
!!! Exchange Server 2010

The HighPriority parameter specifies that the cmdlet returns requests that were created with by using the HighPriority parameter. The HighPriority flag indicates that the request should be processed before other lower-priority requests in the queue.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The HighPriority parameter filters the results based on the Priority value that was assigned when the request was created. Valid input for this parameter is $true or $false. Here's how these values filter the results:

- $true Returns requests that were created with the Priority value High, Higher, Highest or Emergency.

- $false Returns requests that were created with the Priority value Normal, Low, Lower or Lowest.

You can't use this parameter with the Identity parameter.



```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MultiTenant
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The MultiTenant parameter specifies that the search should be performed across the entire forest, not just across the organization that's currently scoped.

You don't have to specify a value with this parameter.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter specifies that any restore request that has the specified name is returned.

Use this parameter to search on the name you provided when you created the restore request.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Name parameter specifies that any restore request that has the specified name is returned.

Use this parameter to search on the name you provided when you created the restore request.

If you didn't specify a name for the restore request when it was created, Exchange automatically generated the default name MailboxRestore. Exchange generates up to 10 names, starting with MailboxRestore and then MailboxRestoreX (where X = 1-9).

You can't use this parameter with the Identity parameter.



```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
!!! Exchange Server 2010

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.



!!! Exchange Server 2016, Exchange Online

This parameter is reserved for internal Microsoft use.



```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SourceDatabase
!!! Exchange Server 2010

The SourceDatabase parameter specifies that the cmdlet should only return restore requests for mailboxes that are being restored from the specified source database. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013

The SourceDatabase parameter specifies that the cmdlet should only return restore requests for mailboxes that are being restored from the specified source database. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter with the Identity parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The SourceDatabase parameter specifies that the cmdlet should only return restore requests for mailboxes that are being restored from the specified source database. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter with the Identity parameter.



```yaml
Type: DatabaseIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
!!! Exchange Server 2010

The Status parameter specifies that restore requests with the specified status are returned. You can use the following values:

- AutoSuspended

- Completed

- CompletedWithWarning

- CompletionInProgress

- Failed

- InProgress

- None

- Queued

- Suspended

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Type: None | Queued | InProgress | AutoSuspended | CompletionInProgress | Completed | CompletedWithWarning | Suspended | Failed
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suspend
!!! Exchange Server 2010

The Suspend parameter specifies that the cmdlet should only return restore requests that have been suspended. This parameter accepts $true or $false.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Suspend parameter specifies whether to return requests that have been suspended. Valid input for this parameter is $true or $false.

You can't use this parameter with the Identity parameter.



```yaml
Type: $true | $false
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDatabase
The TargetDatabase parameter specifies that the cmdlet should only return restore requests for mailboxes that reside on the target database. You can use the following values:

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

### -TargetMailbox
!!! Exchange Server 2010

The TargetMailbox parameter specifies the identity of the target mailbox. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The TargetMailbox parameter specifies the identity of the target mailbox. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

You can't use this parameter with the Identity parameter.



```yaml
Type: MailboxOrMailUserIdParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -AccountPartition
This parameter is reserved for internal Microsoft use.

```yaml
Type: AccountPartitionIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/6e2a5296-7820-4266-a96f-609588390a18.aspx)

