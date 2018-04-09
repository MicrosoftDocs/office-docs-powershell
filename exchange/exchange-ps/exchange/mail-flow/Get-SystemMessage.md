---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Get-SystemMessage
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016"
---

# Get-SystemMessage

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Get-SystemMessage cmdlet to view default or custom system messages. System messages are delivery status notifications (also known as DSNs, non-delivery reports, NDRs or bounce messages) and quota messages.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

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
NDRs are issued to the senders of email messages that haven't reached their intended recipients. Quota messages are issued to users whose mailboxes or public folders have reached the specific warning, prohibit send, or prohibit receive quotas. Custom NDRs and quota messages replace the default messages that are included with Exchange.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-SystemMessage
```

This example displays a summary list of all custom system messages in your organization.

### -------------------------- Example 2 --------------------------
```
Get-SystemMessage En\Internal\5.3.2 | Format-List
```

This example displays detailed information for the specified custom NDR (combination of language, audience, and enhanced status code values).

### -------------------------- Example 3 --------------------------
```
Get-SystemMessage En\WarningMailbox | Format-List
```

This example displays detailed information for the specified custom quota message (combination of language and quota values).

### -------------------------- Example 4 --------------------------
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
TheIdentity parameter specifies the custom system message that you want to view. You can use any value that uniquely identifies the system message. For example:

- Identity

- Distinguished name (DN)

- GUID

You can't use this parameter with the Original switch.

The identity value of a system message uses one of these formats:

- System messages for enhanced status codes:\<Language\>\\\<Internal | External\>\\\<DSNcode\>. For example, En\\Internal\\5.1.2 or Ja\\External\\5.1.2.

- System messages for quotas:\<Language\>\\\<QuotaMessageType\>. For example, En\\ProhibitSendReceiveMailBox.

\<Language\>: For the list of supported language codes, see Supported languages for NDRs (https://technet.microsoft.com/library/aa996803.aspx#NDRLanguages).

\<DSNcode\>: Valid values are 4.x.y or 5.x.y where x and y are one to three digit numbers.

\<QuotaMessageType\>: Valid value are:

Mailbox size quotas:

- ProhibitSendReceiveMailBox: A mailbox exceeds its ProhibitSendReceiveQuota limit.

- ProhibitSendMailbox: A mailbox exceeds its ProhibitSendQuota limit.

- WarningMailbox: A mailbox exceeds its IssueWarningQuota limit when it has a ProhibitSendQuota or ProhibitSendReceiveQuota limit configured.

- WarningMailboxUnlimitedSize: A mailbox exceeds its IssueWarningQuota limit when it doesn't have a ProhibitSendQuota or ProhibitSendReceiveQuota limit configured.

Public folder size quotas:

- ProhibitPostPublicFolder: A public folder exceeds its ProhibitPostQuota limit.

- WarningPublicFolder: A public folder exceeds its IssueWarningQuota limit when it has a ProhibitPostQuota limit configured.

- WarningPublicFolderUnlimitedSize: A public folder exceeds its IssueWarningQuota limit when it doesn't have a ProhibitPostQuota limit configured.

Maximum number of messages in a mailbox folder:

- ProhibitReceiveMailboxMessagesPerFolderCount: A mailbox exceeds its MailboxMessagesPerFolderCountReceiveQuota limit.

- WarningMailboxMessagesPerFolderCount: A mailbox exceeds its MailboxMessagesPerFolderCountWarningQuota limit when it has a MailboxMessagesPerFolderCountReceiveQuota limit configured.

- WarningMailboxMessagesPerFolderUnlimitedCount: A mailbox exceeds its MailboxMessagesPerFolderCountWarningQuota limit when it doesn't have a MailboxMessagesPerFolderCountReceiveQuota limit configured.

Maximum number of subfolders in a mailbox folder:

- ProhibitReceiveFolderHierarchyChildrenCountCount: A mailbox exceeds its FolderHierarchyChildrenCountReceiveQuota limit.

- WarningFolderHierarchyChildrenCount: A mailbox exceeds its FolderHierarchyChildrenCountWarningQuota limit when it has a FolderHierarchyChildrenCountReceiveQuota limit configured.

- WarningFolderHierarchyChildrenUnlimitedCount: A mailbox exceeds its FolderHierarchyChildrenCountWarningQuota limit when it doesn't have a FolderHierarchyChildrenCountReceiveQuota limit configured.

- ProhibitReceiveFoldersCount: A mailbox exceeds its FoldersCountReceiveQuota limit.

- WarningFoldersCount: A mailbox exceeds its FoldersCountWarningQuota limit when it has a FoldersCountReceiveQuota limit configured.

- WarningFoldersCountUnlimited A mailbox exceeds its FoldersCountWarningQuota limit when it doesn't have a FoldersCountReceiveQuota limit configured.

Maximum number of levels (depth) in a mailbox folder:

- ProhibitReceiveFolderHierarchyDepth: A mailbox exceeds its FolderHierarchyDepthWarningQuota limit.

- WarningFolderHierarchyDepth: A mailbox exceeds its FolderHierarchyDepthWarningQuota limit when it has a FolderHierarchyDepthReceiveQuota limit configured.

- WarningFolderHierarchyDepthUnlimited: : A mailbox exceeds its FolderHierarchyDepthWarningQuota limit when it doesn't have a FolderHierarchyDepthReceiveQuota limit configured.

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
