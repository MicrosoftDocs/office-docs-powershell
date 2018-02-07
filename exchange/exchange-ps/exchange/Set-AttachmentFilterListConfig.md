---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# set-attachmentfilterlistconfig

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-AttachmentFilterListConfig cmdlet to modify the configuration of the Attachment Filter agent on the computer running Microsoft Exchange Server 2010 that has the Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Set-AttachmentFilterListConfig cmdlet to modify the configuration of the Attachment Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Set-AttachmentFilterListConfig cmdlet to modify the configuration of the Attachment Filtering agent on Edge Transport servers.

## SYNTAX

```
set-attachmentfilterlistconfig [-Action <Reject | Strip | SilentDelete>] [-AdminMessage <String>] [-Confirm]
 [-DomainController <Fqdn>] [-ExceptionConnectors <MultiValuedProperty>] [-RejectResponse <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Attachment Filter agent can block attachments from entering the Exchange 2010 organization based on the content type or the file name of the attachment. The Set-AttachmentFilterListConfig cmdlet modifies the configuration of the Attachment Filter agent and manages how attachments are processed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

On Edge Transport servers, the Attachment Filtering agent blocks attachments in messages based on the content type or the file name of the attachment. The configuration of the Attachment Filtering agent determines how messages that contain the specified attachments are processed.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features - Edge Transport" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, the Attachment Filtering agent blocks attachments in messages based on the content type or the file name of the attachment. The configuration of the Attachment Filtering agent determines how messages that contain the specified attachments are processed.

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-AttachmentFilterListConfig -Action Reject
```

This example modifies the action that the Attachment Filter agent takes on an attachment that matches an entry on the attachment filter list so that both the e-mail message and attachment aren't delivered to the recipient, and an NDR is sent to the sender.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-AttachmentFilterListConfig -Action Reject
```

This example modifies the action that the Attachment Filtering agent takes on an attachment that matches an entry on the attachment filter list so that both the email message and attachment aren't delivered to the recipient, and an NDR is sent to the sender.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-AttachmentFilterListConfig -Action Reject
```

This example modifies the action that the Attachment Filtering agent takes on an attachment that matches an entry on the attachment filter list so that both the email message and attachment aren't delivered to the recipient, and an NDR is sent to the sender.

## PARAMETERS

### -Action
!!! Exchange Server 2010

The Action parameter specifies how the Attachment Filter agent handles an attachment that matches an entry on the attachment filter list. The default value is Reject. You can use one of the following values:

- Reject This value prevents both the e-mail message and attachment from being delivered to the recipient and issues a non-delivery report (NDR) to the sender.

- Strip This value removes the offending attachment from the e-mail message and allows the message and other attachments that don't match an entry on the attachment filter list through. A notification that the attachment was removed is added to the e-mail message.

- SilentDelete This value prevents both the e-mail message and the attachment from being delivered to the recipient. No notification that the e-mail message and attachment were blocked is sent to the sender.



!!! Exchange Server 2013

The Action parameter specifies how the Attachment Filtering agent handles an attachment that matches an entry on the attachment filter list. The default value is Reject. You can use one of the following values:

- Reject This value prevents both the email message and attachment from being delivered to the recipient and issues a non-delivery report (NDR) to the sender.

- Strip This value removes the offending attachment from the email message and allows the message and other attachments that don't match an entry on the attachment filter list through. A notification that the attachment was removed is added to the email message.

- SilentDelete This value prevents both the email message and the attachment from being delivered to the recipient. No notification that the email message and attachment were blocked is sent to the sender.



!!! Exchange Server 2016

The Action parameter specifies how the Attachment Filtering agent handles an attachment that matches an entry on the attachment filter list. The default value is Reject. You can use one of the following values:

- Reject: This value prevents both the email message and attachment from being delivered to the recipient and issues a non-delivery report (NDR) to the sender.

- Strip: This value removes the offending attachment from the email message and allows the message and other attachments that don't match an entry on the attachment filter list through. A notification that the attachment was removed is added to the email message.

- SilentDelete: This value prevents both the email message and the attachment from being delivered to the recipient. No notification that the email message and attachment were blocked is sent to the sender.



```yaml
Type: Reject | Strip | SilentDelete
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminMessage
!!! Exchange Server 2010

The AdminMessage parameter specifies the content of a text file that replaces attachments removed by the Attachment Filter agent. The AdminMessage parameter only appears when the Attachment Filter agent is configured to remove an attachment that's been identified as bad.



!!! Exchange Server 2013, Exchange Server 2016

The AdminMessage parameter specifies the content of a text file that replaces attachments removed by the Attachment Filtering agent. The AdminMessage parameter only appears when the Attachment Filtering agent is configured to remove an attachment that's been identified as bad.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
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

### -ExceptionConnectors
!!! Exchange Server 2010

The ExceptionConnectors parameter specifies a list of connectors that should be excluded from attachment filtering. Attachment filters aren't applied to e-mail messages received through these connectors. You must use the connector GUID to specify the ExceptionConnectors parameter value.



!!! Exchange Server 2013, Exchange Server 2016

The ExceptionConnectors parameter specifies a list of connectors that should be excluded from attachment filtering. Attachment filters aren't applied to email messages received through these connectors. You must use the connector GUID to specify the ExceptionConnectors parameter value.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectResponse
The RejectResponse parameter specifies the message body that you want delivered in the NDR to senders whose messages contain an attachment that's blocked. The RejectResponse parameter is required only if you set the Action parameter to Reject. Don't exceed 240 characters in the parameter argument. When you pass an argument, you must enclose the RejectResponse parameter value in quotation marks (") if the phrase contains spaces, for example: "Message rejected". The default setting is Message rejected due to unacceptable attachments.

```yaml
Type: String
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

[Online Version](https://technet.microsoft.com/library/7c4796fc-54f3-407e-b11d-c51f10682dc3.aspx)

