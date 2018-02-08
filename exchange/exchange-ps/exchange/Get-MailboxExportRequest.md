---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-MailboxExportRequest

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MailboxExportRequest cmdlet to view the detailed status of an ongoing export request that was initiated by using the New-MailboxExportRequest cmdlet.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxExportRequest cmdlet to view the detailed status of an ongoing export request that was initiated by using the New-MailboxExportRequest cmdlet.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-MailboxExportRequest cmdlet to view the detailed status of an ongoing export request that was initiated by using the New-MailboxExportRequest cmdlet.

This cmdlet is available only in the Mailbox Import Export role, and by default, that role isn't assigned to a role group. To use this cmdlet, you need to add the Mailbox Import Export role to a role group (for example, to the Organization Management role group). For more information, see the "Add a role to a role group" section in Manage role groups (https://technet.microsoft.com/library/jj657480.aspx).

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-MailboxExportRequest [[-Identity] <MailboxExportRequestIdParameter>] [-DomainController <Fqdn>]
 [-MultiTenant] [-Organization <OrganizationIdParameter>] [-ResultSize <Unlimited>] [<CommonParameters>]
```

### Set2
```
Get-MailboxExportRequest [-BatchName <String>] [-Database <DatabaseIdParameter>] [-DomainController <Fqdn>]
 [-HighPriority <$true | $false>] [-Mailbox <MailboxOrMailUserIdParameter>] [-MultiTenant] [-Name <String>]
 [-Organization <OrganizationIdParameter>] [-ResultSize <Unlimited>]
 [-Status <None | Queued | InProgress | AutoSuspended | CompletionInProgress | Completed | CompletedWithWarning | Suspended | Failed>]
 [-Suspend <$true | $false>] [-RequestQueue <DatabaseIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The search criteria for the Get-MailboxExportRequest cmdlet is a Boolean And statement. If you use multiple parameters, you narrow your search and reduce your search results.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The search criteria for the Get-MailboxExportRequest cmdlet is a Boolean And statement. If you use multiple parameters, you narrow your search and reduce your search results.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Import Export" entry in the Recipients Permissions topic.

!!! Exchange Server 2016

The search criteria for the Get-MailboxExportRequest cmdlet is a Boolean And statement. If you use multiple parameters, you narrow your search and reduce your search results.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxExportRequest -Identity "tony\DB01toPST"
```

This example returns the status of the ongoing export request with the identity tony\\DB01toPST.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxExportRequest -Identity "tony\DB01toPST"
```

This example returns the status of the ongoing export request with the identity tony\\DB01toPST.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxExportRequest -Identity "tony\DB01toPST"
```

This example returns the status of the ongoing export request with the identity tony\\DB01toPST.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxExportRequest -Status InProgress -Database DB01
```

This example returns the status of in progress export requests for mailboxes or archives that reside on database DB01.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxExportRequest -BatchName "Attachment_CompanyReport" -Status Completed
```

This example returns the status of export requests in the Attachment\_CompanyReport batch that completed.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxExportRequest -BatchName "Attachment_CompanyReport" -Status Completed
```

This example returns the status of export requests in the Attachment\_CompanyReport batch that completed.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-MailboxExportRequest -BatchName "Attachment_CompanyReport" -Status Completed
```

This example returns the status of export requests in the Attachment\_CompanyReport batch that completed.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-MailboxExportRequest -Name "DB01toPST" -Suspend $true
```

This example returns all export requests that have the name DB01toPST where the export has been suspended.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-MailboxExportRequest -Name "DB01toPST" -Suspend $true
```

This example returns all export requests that have the name DB01toPST where the export has been suspended.

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-MailboxExportRequest -Name "DB01toPST" -Suspend $true
```

This example returns all export requests that have the name DB01toPST where the export has been suspended.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the export request. By default, export requests are named \<alias\>\\MailboxExportX (where X = 0-9). If you specified a name for the export request when the request was created using the New-MailboxExportRequest cmdlet, use the following syntax: \<alias\>\\\<name\>. Microsoft Exchange Server 2010 automatically precedes the request with the mailbox's alias.

This parameter can't be used in conjunction with the following parameters:

- BatchName

- Database

- Mailbox

- Name

- Status

- Suspend



!!! Exchange Server 2013

The Identity parameter specifies the identity of the export request. By default, export requests are named \<alias\>\\MailboxExportX (where X = 0-9). If you specified a name for the export request when the request was created using the New-MailboxExportRequest cmdlet, use the following syntax: \<alias\>\\\<name\>. Microsoft Exchange Server 2013 automatically precedes the request with the mailbox's alias.

This parameter can't be used in conjunction with the following parameters:

- BatchName

- Mailbox

- Name

- Status

- Suspend

- HighPriority



!!! Exchange Server 2016

The Identity parameter specifies the identity of the export request. By default, export requests are named \<alias\>\\MailboxExportX (where X = 0-9). If you specified a name for the export request when the request was created using the New-MailboxExportRequest cmdlet, use the following syntax: \<alias\>\\\<name\>. Exchange automatically precedes the request with the mailbox's alias.

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
!!! Exchange Server 2010

The HighPriority parameter specifies the cmdlet returns requests that were created with the HighPriority flag. The HighPriority flag indicates that the requests should be processed before other lower priority requests in the queue.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The Mailbox parameter specifies the identity of the mailbox or mail user. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013

The Mailbox parameter specifies the identity of the mailbox or mail user from which contents are being exported. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2016

The Mailbox parameter specifies the identity of the mailbox or mail user from which contents are being exported. You can use the following values:

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010, Exchange Server 2013

The Name parameter specifies that export requests that have the specified name are returned.

Use this parameter to search on the name that you provided when you created the export request.

If you didn't specify a name when the request was created, the default name is MailboxExportX (where X = 0-9).

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2016

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

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
!!! Exchange Server 2010

The Status parameter specifies that export requests with the specified status are returned. You can use the following values:

- AutoSuspended

- Completed

- CompletionInProgress

- CompletedWithWarning

- Failed

- InProgress

- None

- Queued

- Suspended

CompletionInProgress and AutoSuspended don't apply to export requests and won't return any information.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016

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
!!! Exchange Server 2010

The Suspend parameter specifies whether to return mailboxes with moves that have been suspended. This parameter accepts $true or $false.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016

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

