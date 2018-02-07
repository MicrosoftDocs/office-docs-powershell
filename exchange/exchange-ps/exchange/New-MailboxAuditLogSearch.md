---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-MailboxAuditLogSearch

## SYNOPSIS
!!! Exchange Server 2010

Use the New-MailboxAuditLogSearch cmdlet to search mailbox audit logs and have search results sent via e-mail to specified recipients.

!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MailboxAuditLogSearch cmdlet to search mailbox audit logs and have search results sent via email to specified recipients.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-MailboxAuditLogSearch [[-Organization] <OrganizationIdParameter>] -EndDate <ExDateTime>
 -StartDate <ExDateTime> -StatusMailRecipients <MultiValuedProperty> [-Confirm] [-DomainController <Fqdn>]
 [-ExternalAccess <$true | $false>] [-LogonTypes <MultiValuedProperty>] [-Mailboxes <MultiValuedProperty>]
 [-Name <String>] [-ShowDetails] [-WhatIf] [-Operations <MultiValuedProperty>]
 [-HasAttachments <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The New-MailboxAuditLogSearch cmdlet performs an asynchronous search of mailbox audit logs for the specified mailboxes and sends the search results by e-mail to the specified recipients. The body of the e-mail message contains search metadata such as search parameters and the time when the search request was submitted. The results are attached in an .xml file.

To search mailbox audit logs for a single mailbox and have the results displayed in the Shell window, use the Search-MailboxAuditLog cmdlet instead. To learn more about mailbox audit logging, see Understanding Mailbox Audit Logging.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox audit logging" entry in the Messaging Policy and Compliance Permissions topic.

!!! Exchange Server 2013

The New-MailboxAuditLogSearch cmdlet performs an asynchronous search of mailbox audit logs for the specified mailboxes and sends the search results by email to the specified recipients. The body of the email message contains search metadata such as search parameters and the time when the search request was submitted. The results are attached in an .xml file.

To search mailbox audit logs for a single mailbox and have the results displayed in the Exchange Management Shell window, use the Search-MailboxAuditLog cmdlet instead. To learn more about mailbox audit logging, see Mailbox audit logging.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Mailbox audit logging" entry in the Messaging policy and compliance permissions topic.

!!! Exchange Server 2016, Exchange Online

The New-MailboxAuditLogSearch cmdlet performs an asynchronous search of mailbox audit logs for the specified mailboxes and sends the search results by email to the specified recipients. The body of the email message contains search metadata such as search parameters and the time when the search request was submitted. The results are attached in an .xml file.

To search mailbox audit logs for a single mailbox and have the results displayed in the Exchange Management Shell window, use the Search-MailboxAuditLog cmdlet instead. To learn more about mailbox audit logging, see Mailbox audit logging in Exchange 2016.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
New-MailboxAuditLogSearch "Admin and Delegate Access" -Mailboxes "Ken Kwok","April Stewart" -LogonTypes Admin,Delegate -StartDate 1/1/2010 -EndDate 12/31/2010 -StatusMailRecipients "auditors@contoso.com"
```

This example creates a mailbox audit log search to search Ken Kwok and April Stewart's mailboxes for administrator and delegate logons from 1/1/2010 to 12/31/2010. Search results are delivered to auditors@contoso.com by e-mail.

### Example 1 -------------------------- (Exchange Server 2013)
```
New-MailboxAuditLogSearch "Admin and Delegate Access" -Mailboxes "Ken Kwok","April Stewart" -LogonTypes Admin,Delegate -StartDate 1/1/2011 -EndDate 12/31/2011 -StatusMailRecipients auditors@contoso.com
```

This example creates a mailbox audit log search to search Ken Kwok and April Stewart's mailboxes for administrator and delegate logons from 1/1/2011 to 12/31/2011. Search results are sent to auditors@contoso.com by email.

### Example 1 -------------------------- (Exchange Server 2016)
```
New-MailboxAuditLogSearch "Admin and Delegate Access" -Mailboxes "Ken Kwok","April Stewart" -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -StatusMailRecipients auditors@contoso.com
```

This example creates a mailbox audit log search to search Ken Kwok and April Stewart's mailboxes for administrator and delegate logons from 1/1/2015 to 12/31/2015. Search results are sent to auditors@contoso.com by email.

### Example 1 -------------------------- (Exchange Online)
```
New-MailboxAuditLogSearch "Admin and Delegate Access" -Mailboxes "Ken Kwok","April Stewart" -LogonTypes Admin,Delegate -StartDate 1/1/2015 -EndDate 12/31/2015 -StatusMailRecipients auditors@contoso.com
```

This example creates a mailbox audit log search to search Ken Kwok and April Stewart's mailboxes for administrator and delegate logons from 1/1/2015 to 12/31/2015. Search results are sent to auditors@contoso.com by email.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-MailboxAuditLogSearch -ExternalAccess $true -StartDate 09/01/2013 -EndDate 10/24/2013 -StatusMailRecipients admin@contoso.com
```

This example returns entries from the mailbox audit logs of all users in organization for any mailbox access by Microsoft datacenter administrators between September 1, 2013 and October 24, 2013. The search results are sent to admin@contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
New-MailboxAuditLogSearch -ExternalAccess $true -StartDate 09/01/2015 -EndDate 10/24/2015 -StatusMailRecipients admin@contoso.com
```

This example returns entries from the mailbox audit logs of all users in organization for any mailbox access by Microsoft datacenter administrators between September 1, 2015 and October 24, 2015. The search results are sent to admin@contoso.com.

### Example 2 -------------------------- (Exchange Online)
```
New-MailboxAuditLogSearch -ExternalAccess $true -StartDate 09/01/2015 -EndDate 10/24/2015 -StatusMailRecipients admin@contoso.com
```

This example returns entries from the mailbox audit logs of all users in organization for any mailbox access by Microsoft datacenter administrators between September 1, 2015 and October 24, 2015. The search results are sent to admin@contoso.com.

## PARAMETERS

### -EndDate
!!! Exchange Server 2010

The EndDate parameter specifies the end date and time to return mailbox audit log entries.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StartDate
!!! Exchange Server 2010

The StartDate parameter specifies the start date and time to return mailbox audit log entries.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



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

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StatusMailRecipients
!!! Exchange Server 2010

The StatusMailRecipients parameter specifies the e-mail address of one or more recipients to whom search results are sent by e-mail.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The StatusMailRecipients parameter specifies the email address of one or more recipients to whom search results are sent by email.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
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

### -ExternalAccess
!!! Exchange Server 2010

This parameter is reserved for internal Microsoft use.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

The ExternalAccess parameter returns only audit log entries for mailbox access by a user outside of your organization. In Exchange Online, use this parameter to return audit log entries for access to a mailbox by Microsoft datacenter administrators.



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

### -LogonTypes
!!! Exchange Server 2010

The LogonTypes parameter specifies the type of logons. Valid values include:

- Admin Audit log entries for mailbox access by administrator logons are returned.

- Delegate Audit log entries for mailbox access by delegates are returned, including access by users with Full Mailbox Access permission.

- External For cloud-based mailboxes, audit log entries for mailbox access by administrators of the cloud-based service are returned.

- Owner Audit log entries for mailbox access by the primary mailbox owner are returned.

If you specify the Owner logon type, you must use the ShowDetails switch. You can specify multiple values separated by a comma.



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
!!! Exchange Server 2010

The Mailboxes parameter specifies one or more mailboxes for which to retrieve mailbox audit log entries. If you don't specify a value, mailbox audit logs for all mailboxes on Mailbox servers running on Microsoft Exchange Server 2010 in the Exchange organization are returned.



!!! Exchange Server 2013

The Mailboxes parameter specifies one or more mailboxes for which to retrieve mailbox audit log entries. If you don't specify a value, mailbox audit logs for all mailboxes on Microsoft Exchange Server 2013 or Exchange Server 2010 in the Exchange organization are returned.



!!! Exchange Server 2016, Exchange Online

The Mailboxes parameter specifies one or more mailboxes for which to retrieve mailbox audit log entries. If you don't specify a value, mailbox audit logs for all mailboxes in the Exchange organization are returned.



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

### -Name
The Name parameter specifies a name for the search.

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

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -ShowDetails
!!! Exchange Server 2010, Exchange Server 2013

The ShowDetails switch specifies that details of each log entry be retrieved.



!!! Exchange Server 2016, Exchange Online

The ShowDetails switch specifies that details of each log entry be retrieved. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
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

[Online Version](https://technet.microsoft.com/library/95365cab-bbb2-4a64-8e8f-1c89fa9e0352.aspx)

