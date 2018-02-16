---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Search-MailboxAuditLog

## SYNOPSIS
!!! Exchange Server 2010

Use the Search-MailboxAuditLog cmdlet to search mailbox audit log entries matching the specified search terms.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Search-MailboxAuditLog cmdlet to search mailbox audit log entries matching the specified search terms.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Search-MailboxAuditLog [[-Identity] <MailboxIdParameter>] [-DomainController <Fqdn>] [-EndDate <ExDateTime>]
 [-ExternalAccess <$true | $false>] [-LogonTypes <MultiValuedProperty>]
 [-Organization <OrganizationIdParameter>] [-ResultSize <Int32>] [-ShowDetails] [-StartDate <ExDateTime>]
 [-Operations <MultiValuedProperty>] [-HasAttachments <$true | $false>] [<CommonParameters>]
```

### Set2
```
Search-MailboxAuditLog [-DomainController <Fqdn>] [-EndDate <ExDateTime>] [-ExternalAccess <$true | $false>]
 [-LogonTypes <MultiValuedProperty>] [-Mailboxes <MultiValuedProperty>] [-ResultSize <Int32>]
 [-StartDate <ExDateTime>] [-Operations <MultiValuedProperty>] [-HasAttachments <$true | $false>]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Search-MailboxAuditLog cmdlet performs a synchronous search of mailbox audit logs for a specified mailbox and displays search results in the Exchange Management Shell window. To search mailbox audit logs for multiple mailboxes and have the results sent by e-mail to specified recipients, use the New-MailboxAuditLogSearch cmdlet instead. To learn more about mailbox audit logging, see Understanding Mailbox Audit Logging.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox audit logging" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

The Search-MailboxAuditLog cmdlet performs a synchronous search of mailbox audit logs for one or more specified mailboxes and displays search results in the Exchange Management Shell window. To search mailbox audit logs for multiple mailboxes and have the results sent by email to specified recipients, use the New-MailboxAuditLogSearch cmdlet instead. To learn more about mailbox audit logging, see Mailbox audit logging.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox audit logging" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

The Search-MailboxAuditLog cmdlet performs a synchronous search of mailbox audit logs for one or more specified mailboxes and displays search results in the Exchange Management Shell window. To search mailbox audit logs for multiple mailboxes and have the results sent by email to specified recipients, use the New-MailboxAuditLogSearch cmdlet instead. To learn more about mailbox audit logging, see Mailbox audit logging in Exchange 2016.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Admin,Delegate -StartDate 1/1/2010 -EndDate 12/31/2010 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by Admin and Delegate logon types between 1/1/2010 and 12/31/2010. A maximum of 2,000 log entries are returned.

### Example 1 -------------------------- (Exchange Server 2013)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Admin,Delegate -StartDate 1/1/2012 -EndDate 12/31/2012 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by Admin and Delegate logon types between 1/1/2012 and 12/31/2012. A maximum of 2,000 log entries are returned.

### Example 1 -------------------------- (Exchange Server 2016)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by Admin and Delegate logon types between 1/1/2015 and 12/31/2015. A maximum of 2,000 log entries are returned.

### Example 1 -------------------------- (Exchange Online)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by Admin and Delegate logon types between 1/1/2015 and 12/31/2015. A maximum of 2,000 log entries are returned.

### Example 2 -------------------------- (Exchange Server 2010)
```
Search-MailboxAuditLog -Mailboxes kwok,bsmith -LogonTypes Admin,Delegate -StartDate 1/1/2010 -EndDate 12/31/2010 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok and Ben Smith's mailboxes for actions performed by Admin and Delegate logon types between 1/1/2010 and 12/31/2010. A maximum of 2,000 log entries are returned.

### Example 2 -------------------------- (Exchange Server 2013)
```
Search-MailboxAuditLog -Mailboxes kwok,bsmith -LogonTypes Admin,Delegate -StartDate 1/1/2012 -EndDate 12/31/2012 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok and Ben Smith's mailboxes for actions performed by Admin and Delegate logon types between 1/1/2012 and 12/31/2012. A maximum of 2,000 log entries are returned.

### Example 2 -------------------------- (Exchange Server 2016)
```
Search-MailboxAuditLog -Mailboxes kwok,bsmith -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok and Ben Smith's mailboxes for actions performed by Admin and Delegate logon types between 1/1/2015 and 12/31/2015. A maximum of 2,000 log entries are returned.

### Example 2 -------------------------- (Exchange Online)
```
Search-MailboxAuditLog -Mailboxes kwok,bsmith -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -ResultSize 2000
```

This example retrieves mailbox audit log entries for Ken Kwok and Ben Smith's mailboxes for actions performed by Admin and Delegate logon types between 1/1/2015 and 12/31/2015. A maximum of 2,000 log entries are returned.

### Example 3 -------------------------- (Exchange Server 2010)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Owner -ShowDetails -StartDate 1/1/2010 -EndDate 3/1/2010 | Where-Object {$_.Operation -eq "HardDelete"}
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by the mailbox owner between 1/1/2010 and 3/1/2010. The results are piped to the Where-Object cmdlet and filtered to return only entries with the HardDelete action.

### Example 3 -------------------------- (Exchange Server 2013)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Owner -ShowDetails -StartDate 1/1/2012 -EndDate 3/1/2012 | Where-Object {$_.Operation -eq "HardDelete"}
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by the mailbox owner between 1/1/2012 and 3/1/2012. The results are piped to the Where-Object cmdlet and filtered to return only entries with the HardDelete action.

### Example 3 -------------------------- (Exchange Server 2016)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Owner -ShowDetails -StartDate 1/1/2016 -EndDate 3/1/2016 | Where-Object {$_.Operation -eq "HardDelete"}
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by the mailbox owner between 1/1/2016 and 3/1/2016. The results are piped to the Where-Object cmdlet and filtered to return only entries with the HardDelete action.

### Example 3 -------------------------- (Exchange Online)
```
Search-MailboxAuditLog -Identity kwok -LogonTypes Owner -ShowDetails -StartDate 1/1/2016 -EndDate 3/1/2016 | Where-Object {$_.Operation -eq "HardDelete"}
```

This example retrieves mailbox audit log entries for Ken Kwok's mailbox for actions performed by the mailbox owner between 1/1/2016 and 3/1/2016. The results are piped to the Where-Object cmdlet and filtered to return only entries with the HardDelete action.

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

### -EndDate
!!! Exchange Server 2010

The EndDate parameter specifies the end date and time to return mailbox audit log entries.

Use the short date format defined in the Regional Options settings configured on the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter a time of day and date, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2013

The EndDate parameter specifies the end date of the date range.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2016, Exchange Online

The EndDate parameter specifies the end date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalAccess
!!! Exchange Server 2010

This parameter is reserved for internal Microsoft use.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ExternalAccess parameter returns only mailbox audit log entries for mailbox access by users outside of your organization. In Exchange Online, use this parameter to return audit log entries for mailbox access by Microsoft datacenter administrators.



```yaml
Type: $true | $false
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
The Identity parameter specifies the mailbox for which to retrieve mailbox audit log entries. You can use this parameter to search a single mailbox.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LogonTypes
!!! Exchange Server 2010

The LogonTypes parameter specifies the type of logons. Valid values include:

- Admin Audit log entries for mailbox access by administrator logons are returned.

- Delegate Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.

- External For cloud-based mailboxes, audit log entries for mailbox access by administrators of the cloud-based service are returned.

- Owner Audit log entries for mailbox access by the primary mailbox owner are returned.

If you specify the Owner logon type, you must use the ShowDetails switch.



!!! Exchange Server 2013

The LogonTypes parameter specifies the type of logons. Valid values include:

- Admin Audit log entries for mailbox access by administrator logons are returned.

- Delegate Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.

- External For Exchange Online mailboxes, audit log entries for mailbox access by Microsoft datacenter administrators are returned.

- Owner Audit log entries for mailbox access by the primary mailbox owner are returned. This value is available only in Exchange 2013 and also requires the ShowDetails switch.



!!! Exchange Server 2016, Exchange Online

The LogonTypes parameter specifies the type of logons. Valid values include:

- Admin: Audit log entries for mailbox access by administrator logons are returned.

- Delegate: Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.

- External: For Exchange Online mailboxes, audit log entries for mailbox access by Microsoft datacenter administrators are returned.

- Owner: Audit log entries for mailbox access by the primary mailbox owner are returned. This value is available only in Exchange 2016 and also requires the ShowDetails switch.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Mailboxes
The Mailboxes parameter specifies the mailboxes for which to retrieve mailbox audit log entries. You can use this parameter to search audit logs for multiple mailboxes. You can't use the ShowDetails switch with the Mailboxes parameter.

```yaml
Type: MultiValuedProperty
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
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of mailbox audit log entries to return. Valid values include an integer from 1 through 250000. By default, 1000 entries are returned.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowDetails
The ShowDetails switch specifies that details of each log entry be retrieved. By default, all fields for each returned log entry are displayed in a list view.

You can't use the Mailboxes parameter with the ShowDetails switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
!!! Exchange Server 2010

The StartDate parameter specifies the start date and time to return mailbox audit log entries.

Use the short date format defined in the Regional Options settings configured on the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter a time of day and date, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2013

The StartDate parameter specifies the start date of the date range.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2016, Exchange Online

The StartDate parameter specifies the start date of the date range.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: ExDateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Operations
The Operations parameter filters the search results by the operations that are logged by mailbox audit logging. Valid values for this parameter are:

- Copy

- Create

- FolderBind

- HardDelete

- MailboxLogin

- MessageBind

- Move

- MoveToDeletedItems

- SendAs

- SendOnBehalf

- SoftDelete

- Update

You can enter multiple values separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HasAttachments
The HasAttachments parameter filters the search by messages that have attachments. Valid values are:

- $true: Only messages with attachments are included in the search.

- $false: Messages with and without attachments are included in the search.

```yaml
Type: $true | $false
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

[Online Version](https://technet.microsoft.com/library/2cc4598a-8a8c-45a0-901c-73e1079d193e.aspx)

