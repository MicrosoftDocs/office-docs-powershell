---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# New-SystemMessage

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-SystemMessage cmdlet to create custom system messages. System messages are delivery status notifications (also known as DSNs, non-delivery reports, NDRs or bounce messages) and quota messages.

## SYNTAX

### Set1
```
New-SystemMessage -DsnCode <EnhancedStatusCode> -Internal <$true | $false> -Language <CultureInfo>
 -Text <String> [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

### Set2
```
New-SystemMessage -Language <CultureInfo>
 -QuotaMessageType <WarningMailboxUnlimitedSize | WarningPublicFolderUnlimitedSize | WarningMailbox | WarningPublicFolder | ProhibitSendMailbox | ProhibitPostPublicFolder | ProhibitSendReceiveMailBox>
 -Text <String> [-Confirm] [-DomainController <Fqdn>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
NDRs are issued to the senders of email messages that haven't reached their intended recipients. Quota messages are issued to users whose mailboxes or public folders have reached the specific warning, prohibit send, or prohibit receive quotas. Custom NDRs and quota messages replace the default messages that are included with Exchange.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
New-SystemMessage -DsnCode 5.3.5 -Language en -Internal $false -Text "The recipient email system can't process this email message. Please contact your system administrator for more information."
```

This example creates a custom English NDR for the enhanced status code 5.3.5 for external senders.

### Example 2
```
New-SystemMessage -QuotaMessageType WarningMailbox -Language en -Text "Your mailbox has exceeded the warning limit specified by your email administrator. Please reduce the size of your mailbox."
```

This example creates a custom English quota message for mailboxes that exceed their issue warning quota.

## PARAMETERS

### -DsnCode
The DsnCode parameter specifies the enhanced status code for the custom system message.

Valid values are 4.x.y or 5.x.y where x and y are one to three digit numbers. You can specify a default code that's included with Exchange, or you can specify a custom code.

To generate a list of default enhanced status codes that are used by Exchange, run this command: Get-SystemMessage -Original | Select-Object -Property Identity,DsnCode,Language,Text | ConvertTo-Html \> "C:\\My Documents\\Default DSNs.html".

You need to use this parameter with the Language and Internal parameters.

You can't use this parameter with the QuotaMessageType parameter.

```yaml
Type: EnhancedStatusCode
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Internal
The Internal parameter specifies whether the system message is displayed to internal or external users. Valid values are:

- $true: The NDR is displayed to internal senders.

- $false: The NDR is displayed to external senders.

You need to use this parameter with the DsnCode and Language parameters.

You can't use this parameter with the QuotaMessageType parameter.

```yaml
Type: $true | $false
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Language
The Language parameter specifies the language of the message. (for example, en for English or ja for Japanese). For the complete list of supported languages, see https://technet.microsoft.com/library/aa996803.aspx#NDRLanguages.

You need to use this parameter with the DsnCode or QuotaMessageType parameters.

```yaml
Type: CultureInfo
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QuotaMessageType
The QuotaMessageType parameter specifies the quota for the custom system message. Valid values are:

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

You need to use this parameter with the Language parameter.

You can't use this parameter with the DsnCode or Internal parameters.

```yaml
Type: WarningMailboxUnlimitedSize | WarningPublicFolderUnlimitedSize | WarningMailbox | WarningPublicFolder | ProhibitSendMailbox | ProhibitPostPublicFolder | ProhibitSendReceiveMailBox
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Text
The Text parameter specifies the text in the custom system message. The text should explain why the system message was sent, and any actions that the user should take.

You need to use this parameter with the DsnCode or QuotaMessageType parameters.

This parameter can contain text and HTML tags. The maximum length is 512 characters (which includes all text and HTML tags).

The following HTML tags are available:

- \<B\> and \</B\> (bold)

- \<EM\> and \</EM\> (italic)

- \<BR\> (line break)

- \<P\> and \</P\> (paragraph)

- \<A HREF="url"\> and \</A\> (hyperlink). Note: You need to use single quotation marks (not double quotation marks) around the complete text string if you use this tag. Otherwise, you'll receive an error (because of the double quotation marks in the tag).

Use the following escape codes for these special characters:

- &lt; for \<.

- &gt; for \>.

- &quot; for ".

- &amp; for &.

Here's an example value for this parameter that uses HTML tags and special characters:

'You tried to send a message to a \<B\>disabled\</B\> mailbox. Please visit \<A HREF="https://it.contoso.com"\>Internal Support\</A\> or contact &quot;InfoSec&quot; for more information.'

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
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

[Online Version](https://technet.microsoft.com/library/77b06405-076d-43cf-89b1-aa62b6565d8d.aspx)
