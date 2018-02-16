---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Get-MailboxAuditBypassAssociation

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-MailboxAuditByapssAssociation cmdlet to retrieve user or computer account associations. This lets you see the status of all accounts, including those that are configured to bypass audit logging.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Get-MailboxAuditBypassAssociation cmdlet to retrieve user or computer accounts configured to bypass mailbox audit logging.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-MailboxAuditBypassAssociation [[-Identity] <MailboxAuditBypassAssociationIdParameter>]
 [-DomainController <Fqdn>] [-Organization <OrganizationIdParameter>] [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

When you configure a user or computer account to bypass mailbox audit logging, access or actions taken by the user or computer account to any mailbox isn't logged. By bypassing trusted user or computer accounts that need to access mailboxes frequently, you can reduce the noise in mailbox audit logs.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox audit logging" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

When you configure a user or computer account to bypass mailbox audit logging, access or actions taken by the user or computer account to any mailbox isn't logged. By bypassing trusted user or computer accounts that need to access mailboxes frequently, you can reduce the noise in mailbox audit logs.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox audit logging" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

When you configure a user or computer account to bypass mailbox audit logging, access or actions taken by the user or computer account to any mailbox isn't logged. By bypassing trusted user or computer accounts that need to access mailboxes frequently, you can reduce the noise in mailbox audit logs.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-MailboxAuditBypassAssociation -ResultSize unlimited | ? {$_.AuditBypassEnabled -eq $True}
```

This example retrieves all user or computer accounts configured for mailbox audit logging bypass.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-MailboxAuditBypassAssociation -ResultSize unlimited
```

This example retrieves all user or computer accounts configured for mailbox audit logging bypass.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-MailboxAuditBypassAssociation -ResultSize unlimited
```

This example retrieves all user or computer accounts configured for mailbox audit logging bypass.

### Example 1 -------------------------- (Exchange Online)
```
Get-MailboxAuditBypassAssociation -ResultSize unlimited
```

This example retrieves all user or computer accounts configured for mailbox audit logging bypass.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-MailboxAuditBypassAssociation -Identity "Svc-MyApplication"
```

This example retrieves the mailbox audit bypass association for the Svc-MyApplication account.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-MailboxAuditBypassAssociation -Identity "Svc-MyApplication"
```

This example retrieves the mailbox audit bypass association for the Svc-MyApplication account.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-MailboxAuditBypassAssociation -Identity "Svc-MyApplication"
```

This example retrieves the mailbox audit bypass association for the Svc-MyApplication account.

### Example 2 -------------------------- (Exchange Online)
```
Get-MailboxAuditBypassAssociation -Identity "Svc-MyApplication"
```

This example retrieves the mailbox audit bypass association for the Svc-MyApplication account.

## PARAMETERS

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

### -Identity
The Identity parameter specifies a user or computer account to retrieve audit logging bypass association for.

```yaml
Type: MailboxAuditBypassAssociationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
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
!!! Exchange Server 2010, Exchange Server 2013

The ResultSize parameter specifies the maximum number of results to return. If you want to return all mailboxes that match the query, use unlimited for the value of this parameter. The default value is 1000.



!!! Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/2e3d8264-0636-419d-8677-2be456c3551b.aspx)

