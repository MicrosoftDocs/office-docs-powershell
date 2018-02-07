---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-SystemMessage

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-SystemMessage cmdlet to view the delivery status notification (DSN) or quota messages on computers running Microsoft Exchange Server 2010 that have the Hub Transport server role or Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-SystemMessage cmdlet to view the delivery status notification (DSN) or quota messages on Mailbox servers or Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-SystemMessage cmdlet to view default or custom system messages. System messages are delivery status notifications (also known as DSNs, non-delivery reports, NDRs or bounce messages) and quota messages.

## SYNTAX

### Set1
```
Get-SystemMessage [[-Identity] <SystemMessageIdParameter>] [-DomainController <Fqdn>] [<CommonParameters>]
```

### Set2
```
Get-SystemMessage [-DomainController <Fqdn>] [-Original] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Get-SystemMessage cmdlet displays default and customized DSN and quota messages. You can retrieve a customized DSN or quota message by specifying the identity of the message by using the Identity parameter. You can retrieve a list of built-in DSN or quota messages by using the Original parameter.

DSN messages are issued to the sender of e-mail messages that haven't reached their intended recipients. Quota messages are issued to users whose mailboxes or public folders have reached the specific warning, prohibit send, or prohibit receive quotas. Customized DSN and quota messages replace the built-in DSN or quota messages included with Exchange.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "DSNs" entry in the Transport Permissions topic.

!!! Exchange Server 2013

The Get-SystemMessage cmdlet displays default and customized DSN and quota messages. You can retrieve a customized DSN or quota message by specifying the identity of the message by using the Identity parameter. You can retrieve a list of built-in DSN or quota messages by using the Original parameter.

DSN messages are issued to the sender of e-mail messages that haven't reached their intended recipients. Quota messages are issued to users whose mailboxes or public folders have reached the specific warning, prohibit send, or prohibit receive quotas. Customized DSN and quota messages replace the built-in DSN or quota messages included with Exchange.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "DSNs" entry in the Mail flow permissions topic.

!!! Exchange Server 2016

NDRs are issued to the senders of email messages that haven't reached their intended recipients. Quota messages are issued to users whose mailboxes or public folders have reached the specific warning, prohibit send, or prohibit receive quotas. Custom NDRs and quota messages replace the default messages that are included with Exchange.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-SystemMessage
```

This example displays a list of all customized DSN and quota messages configured in your organization.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-SystemMessage
```

This example displays a list of all customized DSN and quota messages configured in your organization.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-SystemMessage
```

This example displays a summary list of all custom system messages in your organization.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-SystemMessage En\Internal\5.3.2 | Format-List
```

This example displays detailed configuration information of the specific customized DSN message for DSN code 5.3.2.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-SystemMessage En\Internal\5.3.2 | Format-List
```

This example displays detailed configuration information of the specific customized DSN message for DSN code 5.3.2.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-SystemMessage En\Internal\5.3.2 | Format-List
```

This example displays detailed information for the specified custom NDR (combination of language, audience, and enhanced status code values).

### Example 3 -------------------------- (Exchange Server 2010)
```
Get-SystemMessage En\WarningMailbox | Format-List
```

This example displays detailed configuration information of the specific customized quota message for mailbox size warning.

### Example 3 -------------------------- (Exchange Server 2013)
```
Get-SystemMessage En\WarningMailbox | Format-List
```

This example displays detailed configuration information of the specific customized quota message for mailbox size warning.

### Example 3 -------------------------- (Exchange Server 2016)
```
Get-SystemMessage En\WarningMailbox | Format-List
```

This example displays detailed information for the specified custom quota message (combination of language and quota values).

### Example 4 -------------------------- (Exchange Server 2010)
```
Get-SystemMessage -Original
```

This example displays a list of all built-in DSN and quota messages.

### Example 4 -------------------------- (Exchange Server 2013)
```
Get-SystemMessage -Original
```

This example displays a list of all built-in DSN and quota messages.

### Example 4 -------------------------- (Exchange Server 2016)
```
Get-SystemMessage -Original | Select-Object -Property Identity,DsnCode,Language,Text | ConvertTo-Html > "C:\My Documents\Default System Messages.html"
```

This example outputs the list of all default system messages in all languages to an HTML file named C:\\My Documents\\Default System Messages.html.


You should output the list to a file, because the list is very long, and you'll receive errors if you don't have the required language packs installed.

## PARAMETERS

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

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

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the identity of the DSN or quota message.

You can also retrieve a customized DSN message by using the following format: language\\internal | external\\system code. For more information about the syntax of the DSN message identity, see DSN Message Identity.

You can also retrieve a customized quota message by using the following format: language\\QuotaMessageType. Language is expressed as the two-character locale code. QuotaMessageType accepts the following values:

- WarningMailboxUnlimitedSize Issued when a mailbox that has no prohibit send quota or prohibit receive quota exceeds the specified mailbox warning limit.

- WarningPublicFolderUnlimitedSize Issued when a public folder that has no prohibit send quota or prohibit receive quota exceeds the specified public folder warning limit.

- WarningMailbox Issued when a mailbox that has a prohibit send quota or prohibit receive quota exceeds the specified mailbox warning limit.

- WarningPublicFolder Issued when a public folder that has a prohibit send quota or prohibit receive quota exceeds the specified public folder warning limit.

- ProhibitSendMailbox Issued when a mailbox that has a prohibit send quota exceeds the specified mailbox size limit.

- ProhibitPostPublicFolder Issued when a public folder that has a prohibit send quota exceeds the specified public folder size limit.

- ProhibitSendReceiveMailBox Issued when a mailbox that has prohibit send quota and prohibit receive quota exceeds the specified mailbox send and receive size limit.

You can omit the Identity parameter label.



!!! Exchange Server 2013

The Identity parameter specifies the DSN or quota message you want to view.

You can also retrieve a customized DSN message by using the following format: language\\internal | external\\system code. For more information about the syntax of the DSN message identity, see DSN message identity.

You can also retrieve a customized quota message by using the following format: language\\QuotaMessageType. Language is expressed as the two-character locale code. QuotaMessageType accepts the following values:

Quota message types related to mailbox size:

- ProhibitSendReceiveMailBox Issued when a mailbox exceeds its ProhibitSendReceiveQuota limit.

- ProhibitSendMailbox Issued when a mailbox exceeds its ProhibitSendQuota limit.

- WarningMailbox Issued when a mailbox that has a ProhibitSendQuota limit or a ProhibitSendReceiveQuota limit configured exceeds its IssueWarningQuota limit.

- WarningMailboxUnlimitedSize Issued when a mailbox that doesn't have a ProhibitSendQuota limit or a ProhibitSendReceiveQuota limit configured exceeds its IssueWarningQuota limit.

Quota message types related to public folder size:

- ProhibitPostPublicFolder Issued when a public folder exceeds its ProhibitPostQuota limit.

- WarningPublicFolder Issued when a public folder that has a ProhibitPostQuota limit configured exceeds its IssueWarningQuota limit.

- WarningPublicFolderUnlimitedSize Issued when a public folder that doesn't have a ProhibitPostQuota limit configured exceeds its IssueWarningQuota limit.

Quota message types related to the number of messages allowed in a mailbox folder:

- ProhibitReceiveMailboxMessagesPerFolderCount Issued when a mailbox exceeds its MailboxMessagesPerFolderCountReceiveQuota limit.

- WarningMailboxMessagesPerFolderCount Issued when a mailbox that has a MailboxMessagesPerFolderCountReceiveQuota limit configured exceeds its MailboxMessagesPerFolderCountWarningQuota limit.

- WarningMailboxMessagesPerFolderUnlimitedCount Issued when a mailbox that doesn't have a MailboxMessagesPerFolderCountReceiveQuota limit configured exceeds its MailboxMessagesPerFolderCountWarningQuota limit.

Quota message types related to the number of subfolders that can be created in a mailbox folder:

- ProhibitReceiveFolderHierarchyChildrenCountCount Issued when a mailbox exceeds its FolderHierarchyChildrenCountReceiveQuota limit.

- WarningFolderHierarchyChildrenCount Issued when a mailbox that has a FolderHierarchyChildrenCountReceiveQuota limit configured exceeds its FolderHierarchyChildrenCountWarningQuota limit.

- WarningFolderHierarchyChildrenUnlimitedCount Issued when a mailbox that doesn't have a FolderHierarchyChildrenCountReceiveQuota limit configured exceeds its FolderHierarchyChildrenCountWarningQuota limit.

- WarningFoldersCount Issued when the number of folders in the hierarchy exceeds the FoldersCountWarningQuota limit.

- ProhibitReceiveFoldersCount Issued when new public folder creation fails because the public folder hierarchy is too big and has reached the FoldersCountReceiveQuota limit.

- WarningFoldersCountUnlimited Issued when the public folder hierarchy is getting too big and does not have the FoldersCountReceiveQuota limit configured.

Quota message types related to the number of levels allowed in the folder hierarchy of a mailbox folder:

- ProhibitReceiveFolderHierarchyDepth Issued when a mailbox exceeds its FolderHierarchyDepthWarningQuota limit.

- WarningFolderHierarchyDepth Issued when a mailbox that has a FolderHierarchyDepthReceiveQuota limit configured exceeds its FolderHierarchyDepthWarningQuota limit.

- WarningFolderHierarchyDepthUnlimited Issued when a mailbox that doesn't have a FolderHierarchyDepthReceiveQuota limit configured exceeds its FolderHierarchyDepthWarningQuota limit.



!!! Exchange Server 2016

TheIdentity parameter specifies the custom system message that you want to view. You can use any value that uniquely identifies the system message. For example:

- Identity

- Distinguished name (DN)

- GUID

You can't use this parameter with the Original switch.

The identity value of a system message uses one of these formats:

- System messages for enhanced status codes:\<Language\>\\\<Internal | External\>\\\<DSNcode\>. For example, En\\Internal\\5.1.2 or Ja\\External\\5.1.2.

- System messages for quotas:\<Language\>\\\<QuotaMessageType\>. For example, En\\ProhibitSendReceiveMailBox.

\<Language\>: For the list of supported language codes, see .

\<DSNcode\>: Valid values are 4.x.y or 5.x.y where x and y are one to three digit numbers.

\<QuotaMessageType\>: Valid value are:

Mailbox size quotas:

ProhibitSendReceiveMailBox: A mailbox exceeds its ProhibitSendReceiveQuota limit.

ProhibitSendMailbox: A mailbox exceeds its ProhibitSendQuota limit.

WarningMailbox: A mailbox exceeds its IssueWarningQuota limit when it has a ProhibitSendQuota or ProhibitSendReceiveQuota limit configured.

WarningMailboxUnlimitedSize: A mailbox exceeds its IssueWarningQuota limit when it doesn't have a ProhibitSendQuota or ProhibitSendReceiveQuota limit configured.

Public folder size quotas:

ProhibitPostPublicFolder: A public folder exceeds its ProhibitPostQuota limit.

WarningPublicFolder: A public folder exceeds its IssueWarningQuota limit when it has a ProhibitPostQuota limit configured.

WarningPublicFolderUnlimitedSize: A public folder exceeds its IssueWarningQuota limit when it doesn't have a ProhibitPostQuota limit configured.

Maximum number of messages in a mailbox folder:

ProhibitReceiveMailboxMessagesPerFolderCount: A mailbox exceeds its MailboxMessagesPerFolderCountReceiveQuota limit.

WarningMailboxMessagesPerFolderCount: A mailbox exceeds its MailboxMessagesPerFolderCountWarningQuota limit when it has a MailboxMessagesPerFolderCountReceiveQuota limit configured.

WarningMailboxMessagesPerFolderUnlimitedCount: A mailbox exceeds its MailboxMessagesPerFolderCountWarningQuota limit when it doesn't have a MailboxMessagesPerFolderCountReceiveQuota limit configured.

Maximum number of subfolders in a mailbox folder:

ProhibitReceiveFolderHierarchyChildrenCountCount: A mailbox exceeds its FolderHierarchyChildrenCountReceiveQuota limit.

WarningFolderHierarchyChildrenCount: A mailbox exceeds its FolderHierarchyChildrenCountWarningQuota limit when it has a FolderHierarchyChildrenCountReceiveQuota limit configured.

WarningFolderHierarchyChildrenUnlimitedCount: A mailbox exceeds its FolderHierarchyChildrenCountWarningQuota limit when it doesn't have a FolderHierarchyChildrenCountReceiveQuota limit configured.

ProhibitReceiveFoldersCount: A mailbox exceeds its FoldersCountReceiveQuota limit.

WarningFoldersCount: A mailbox exceeds its FoldersCountWarningQuota limit when it has a FoldersCountReceiveQuota limit configured.

WarningFoldersCountUnlimited A mailbox exceeds its FoldersCountWarningQuota limit when it doesn't have a FoldersCountReceiveQuota limit configured.

Maximum number of levels (depth) in a mailbox folder:

ProhibitReceiveFolderHierarchyDepth: A mailbox exceeds its FolderHierarchyDepthWarningQuota limit.

WarningFolderHierarchyDepth: A mailbox exceeds its FolderHierarchyDepthWarningQuota limit when it has a FolderHierarchyDepthReceiveQuota limit configured.

WarningFolderHierarchyDepthUnlimited: : A mailbox exceeds its FolderHierarchyDepthWarningQuota limit when it doesn't have a FolderHierarchyDepthReceiveQuota limit configured.



```yaml
Type: SystemMessageIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Original
!!! Exchange Server 2010

The Original parameter specifies whether to retrieve the list of default DSN or quota messages that were included with Exchange 2010 when you installed Exchange 2010.



!!! Exchange Server 2013

The Original parameter specifies whether to retrieve the list of default DSN or quota messages that were included with Exchange when you installed Exchange.



!!! Exchange Server 2016

The Original switch filters the results by the default system messages that are included with Exchange. You don't need to specify a value with this switch.

You can't use this switch with the Identity parameter.



```yaml
Type: SwitchParameter
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/54d3650c-fd80-43c0-a64f-41d57673ff8b.aspx)

