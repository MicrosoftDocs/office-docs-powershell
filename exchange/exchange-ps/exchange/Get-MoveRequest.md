---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MoveRequest

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MoveRequest cmdlet to view the detailed status of an ongoing asynchronous mailbox move that was initiated by using the New-MoveRequest cmdlet.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MoveRequest cmdlet to view the detailed status of an ongoing asynchronous mailbox move that was initiated by using the New-MoveRequest cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-MoveRequest [[-Identity] <MoveRequestIdParameter>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-MultiTenant] [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-ResultSize <Unlimited>] [-SortBy <String>] [-IncludeSoftDeletedObjects]
 [-ProxyToMailbox <MailboxIdParameter>] [<CommonParameters>]
```

### Set2
```
Get-MoveRequest [-BatchName <String>] [-Credential <PSCredential>] [-DomainController <Fqdn>]
 [-HighPriority <$true | $false>]
 [-MoveStatus <None | Queued | InProgress | AutoSuspended | CompletionInProgress | Completed | CompletedWithWarning | Suspended | Failed>]
 [-MultiTenant] [-Offline <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-Protect <$true | $false>] [-RemoteHostName <Fqdn>]
 [-ResultSize <Unlimited>] [-SortBy <String>] [-SourceDatabase <DatabaseIdParameter>]
 [-Suspend <$true | $false>] [-SuspendWhenReadyToComplete <$true | $false>]
 [-TargetDatabase <DatabaseIdParameter>]
 [-Flags <None | CrossOrg | IntraOrg | Push | Pull | Offline | Protected | RemoteLegacy | HighPriority | Suspend | SuspendWhenReadyToComplete | MoveOnlyPrimaryMailbox | MoveOnlyArchiveMailbox | TargetIsAggregatedMailbox | Join | Split>]
 [-IncludeSoftDeletedObjects] [-ProxyToMailbox <MailboxIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The search criteria for the Get-MoveRequests cmdlet is a Boolean And statement. If you use multiple parameters, it narrows your search and reduces your search results.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox moves" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

The search criteria for the Get-MoveRequest cmdlet is a Boolean And statement. If you use multiple parameters, it narrows your search and reduces your search results.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox moves" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

The search criteria for the Get-MoveRequest cmdlet is a Boolean And statement. If you use multiple parameters, it narrows your search and reduces your search results.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MoveRequest -Identity 'tony@contoso.com'
```

This example retrieves the status of the ongoing mailbox move for Tony Smith's mailbox (tony@contoso.com).

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MoveRequest -Identity 'tony@contoso.com'
```

This example retrieves the status of the ongoing mailbox move for Tony Smith's mailbox (tony@contoso.com).

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MoveRequest -Identity 'tony@contoso.com'
```

This example retrieves the status of the ongoing mailbox move for Tony Smith's mailbox (tony@contoso.com).

### Example 1 -------------------------- (Exchange Online)
```
Get-MoveRequest -Identity 'tony@contoso.com'
```

This example retrieves the status of the ongoing mailbox move for Tony Smith's mailbox (tony@contoso.com).

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MoveRequest -MoveStatus InProgress -TargetDatabase DB05
```

This example retrieves the status of ongoing mailbox moves to the target database DB05.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MoveRequest -MoveStatus InProgress -TargetDatabase DB05
```

This example retrieves the status of ongoing mailbox moves to the target database DB05.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MoveRequest -MoveStatus InProgress -TargetDatabase DB05
```

This example retrieves the status of ongoing mailbox moves to the target database DB05.

### Example 2 -------------------------- (Exchange Online)
```
Get-MoveRequest -MoveStatus InProgress -TargetDatabase DB05
```

This example retrieves the status of ongoing mailbox moves to the target database DB05.

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-MoveRequest -BatchName "FromDB01ToDB02" -MoveStatus CompletedWithWarning
```

This example retrieves the status of move requests in the FromDB01ToDB02 batch that completed, but had warnings.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-MoveRequest -BatchName "FromDB01ToDB02" -MoveStatus CompletedWithWarning
```

This example retrieves the status of move requests in the FromDB01ToDB02 batch that completed, but had warnings.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-MoveRequest -BatchName "FromDB01ToDB02" -MoveStatus CompletedWithWarning
```

This example retrieves the status of move requests in the FromDB01ToDB02 batch that completed, but had warnings.

### Example 3 -------------------------- (Exchange Online)
```
Get-MoveRequest -BatchName "FromDB01ToDB02" -MoveStatus CompletedWithWarning
```

This example retrieves the status of move requests in the FromDB01ToDB02 batch that completed, but had warnings.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the mailbox or mail user. You can use the following values:

- GUID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- Legacy Exchange DN

- SMTP address

- Alias

This parameter can't be used in conjunction with the following parameters:

- BatchName

- MoveStatus

- Offline

- Protect

- RemoteHostName

- SourceDatabase

- Suspend

- SuspendWhenReadyToComplete

- TargetDatabase



!!! Exchange Server 2013

The Identity parameter specifies the identity of the move request, which is the identity of the mailbox or mail user.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)

This parameter can't be used with the following parameters:

- BatchName

- HighPriority

- MoveStatus

- Offline

- Protect

- RemoteHostName

- SourceDatabase

- Suspend

- SuspendWhenReadyToComplete

- TargetDatabase



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the identity of the move request, which is the identity of the mailbox or mail user. You can use any value that uniquely identifies the mailbox or mail user.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

You can use this parameter with the following parameters:

- BatchName

- HighPriority

- MoveStatus

- Offline

- Protect

- RemoteHostName

- SourceDatabase

- Suspend

- SuspendWhenReadyToComplete

- TargetDatabase



```yaml
Type: MoveRequestIdParameter
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

The BatchName parameter specifies the name that was given to a batch move request.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The BatchName parameter specifies the name that was given to a batch move request.

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

### -Credential
!!! Exchange Server 2010

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkid=142122).

If you don't specify the Credential parameter, the credential of the current user is used.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password to use to access Active Directory.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).

If you don't specify the Credential parameter, the credential of the current user is used.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Credential parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions.

This parameter requires the creation and passing of a credential object. This credential object is created by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

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

The HighPriority parameter specifies the cmdlet returns requests that were created with the HighPriority flag. The HighPriority flag indicates that the request should be processed before other lower priority requests in the queue.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The HighPriority parameter specifies that the cmdlet returns requests that were created with the HighPriority flag. The HighPriority flag indicates that the request should be processed before other lower priority requests in the queue.

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

### -MoveStatus
!!! Exchange Server 2010

The MoveStatus parameter returns move requests in the specified status. You can use the following values:

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



!!! Exchange Server 2013

The MoveStatus parameter returns move requests in the specified status. You can use the following values:

- AutoSuspended

- Completed

- CompletedWithWarning

- CompletionInProgress

- Failed

- InProgress

- None

- Queued

  Suspended

You can't use this parameter with the Identity parameter.



!!! Exchange Server 2016, Exchange Online

The MoveStatus parameter returns move requests in the specified status. You can use the following values:

- AutoSuspended

- Completed

- CompletedWithWarning

- CompletionInProgress

- Failed

- InProgress

- None

- Queued

- Suspended

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

### -Offline
!!! Exchange Server 2010

The Offline parameter returns mailboxes being moved in offline mode. This parameter accepts $true or $false.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Offline parameter specifies whether to return mailboxes that are being moved in offline mode. This parameter accepts $true or $false.

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

### -OrganizationalUnit
!!! Exchange Server 2010, Exchange Server 2013

The OrganizationalUnit parameter specifies an organizational unit (OU) and is used to limit the results. If you use this parameter, you only get move requests that pertain to mailboxes in the container that you specify. You can use either the OU or the domain name. If you use the OU, you must specify the canonical name of the OU.



!!! Exchange Server 2016, Exchange Online

The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID



```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Protect
!!! Exchange Server 2010

The Protect parameter returns mailboxes being moved in protected mode. This parameter accepts $true or $false.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Protect parameter returns mailboxes being moved in protected mode. This parameter accepts $true or $false.

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

### -RemoteHostName
!!! Exchange Server 2010

The RemoteHostName parameter specifies the FQDN of the cross-forest organization from which you're moving the mailbox.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The RemoteHostName parameter specifies the FQDN of the cross-forest organization from which you're moving the mailbox.

You can't use this parameter with the Identity parameter.



```yaml
Type: Fqdn
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

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

### -SortBy
!!! Exchange Server 2010, Exchange Server 2013

The SortBy parameter specifies the attribute by which to sort the results. You can sort by only one attribute at a time. The results are sorted in ascending order.



!!! Exchange Server 2016, Exchange Online

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- Alias



```yaml
Type: String
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

The SourceDatabase parameter specifies that all mailboxes being moved from the specified source database are returned. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The SourceDatabase parameter specifies that all mailboxes being moved from the specified source database are returned. You can use the following values:

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

### -Suspend
!!! Exchange Server 2010

The Suspend parameter specifies whether to return mailboxes with moves that have been suspended. This parameter accepts $true or $false.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The Suspend parameter specifies whether to return mailboxes with moves that have been suspended. This parameter accepts $true or $false.

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

### -SuspendWhenReadyToComplete
!!! Exchange Server 2010

The SuspendWhenReadytoComplete parameter specifies whether to return mailboxes that have been moved with the New-MoveRequest command and its SuspendWhenReadyToComplete switch. This parameter accepts $true or $false.

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The SuspendWhenReadytoComplete parameter specifies whether to return mailboxes that have been moved with the New-MoveRequest command and its SuspendWhenReadyToComplete switch. This parameter accepts $true or $false.

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
!!! Exchange Server 2010

The TargetDatabase parameter specifies whether to return all mailboxes that are being moved to the specified target database. You can use the following values:

- GUID of the database

- Database name

You can't use this parameter in conjunction with the Identity parameter.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The TargetDatabase parameter specifies whether to return all mailboxes that are being moved to the specified target database. You can use the following values:

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

### -Flags
The Flags parameter specifies the move type to retrieve information for. The following values may be used:

- CrossOrg

- HighPriority

- IntraOrg

- Join

- MoveOnlyArchiveMailbox

- MoveOnlyPrimaryMailbox

- None

- Offline

- Protected

- Pull

- Push

- RemoteLegacy

- Split

- Suspend

- SuspendWhenReadyToComplete

- TargetIsAggregatedMailbox

```yaml
Type: None | CrossOrg | IntraOrg | Push | Pull | Offline | Protected | RemoteLegacy | HighPriority | Suspend | SuspendWhenReadyToComplete | MoveOnlyPrimaryMailbox | MoveOnlyArchiveMailbox | TargetIsAggregatedMailbox | Join | Split
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeSoftDeletedObjects
This parameter is available only in on-premises Exchange.

The IncludeSoftDeletedObjects parameter specifies whether to return mailboxes that have been soft deleted. This parameter accepts $true or $false.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyToMailbox
This parameter is available only in the cloud-based service.

The ProxyToMailbox parameter filters the results by the location of the specified mailbox (also known as proxying). You can use any value that uniquely identifies the mailbox.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
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

[Online Version](https://technet.microsoft.com/library/3f8aa1a6-ed8c-4220-9cc7-dd615203f5c5.aspx)

