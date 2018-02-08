---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-MailboxMessageConfiguration

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-MailboxMessageConfiguration cmdlet to modify e-mail message settings for one mailbox at a time.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxMessageConfiguration cmdlet to configure the Microsoft Outlook Web App settings that are applied to specific mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-MailboxMessageConfiguration cmdlet to configure the Outlook on the web settings that are applied to specific mailboxes.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-MailboxMessageConfiguration [-Identity] <MailboxIdParameter>
 [-AfterMoveOrDeleteBehavior <OpenPreviousItem | OpenNextItem | ReturnToView>]
 [-AlwaysShowBcc <$true | $false>] [-AlwaysShowFrom <$true | $false>] [-AutoAddSignature <$true | $false>]
 [-Confirm]
 [-ConversationSortOrder <Chronological | Tree | NewestOnTop | NewestOnBottom | ChronologicalNewestOnTop | ChronologicalNewestOnBottom | TreeNewestOnBottom>]
 [-DefaultFontColor <String>] [-DefaultFontFlags <Normal | Bold | Italic | Underline | All>]
 [-DefaultFontName <String>] [-DefaultFontSize <Int32>] [-DefaultFormat <Html | PlainText>]
 [-DomainController <Fqdn>] [-EmptyDeletedItemsOnLogoff <$true | $false>] [-HideDeletedItems <$true | $false>]
 [-IgnoreDefaultScope] [-NewItemNotification <None | Sound | EMailToast | VoiceMailToast | FaxToast | All>]
 [-PreviewMarkAsReadBehavior <Delayed | OnSelectionChange | Never>] [-PreviewMarkAsReadDelaytime <Int32>]
 [-ReadReceiptResponse <DoNotAutomaticallySend | AlwaysSend | NeverSend>] [-SendAddressDefault <String>]
 [-ShowConversationAsTree <$true | $false>] [-SignatureHtml <String>] [-SignatureText <String>] [-WhatIf]
 [-AutoAddSignatureOnMobile <$true | $false>] [-CheckForForgottenAttachments <$true | $false>]
 [-EmailComposeMode <Inline | SeparateForm>] [-SignatureTextOnMobile <String>]
 [-UseDefaultSignatureOnMobile <$true | $false>] [-AutoAddSignatureOnReply <$true | $false>]
 [-GlobalReadingPanePosition <Off | Right | Bottom>] [-IsFavoritesFolderTreeCollapsed <$true | $false>]
 [-IsMailRootFolderTreeCollapsed <$true | $false>] [-IsReplyAllTheDefaultResponse <$true | $false>]
 [-LinkPreviewEnabled <$true | $false>] [-MailFolderPaneExpanded <$true | $false>]
 [-NavigationPaneViewOption <Default | MailFolders | PeopleFolders | Groups | PinnedMailFolders>]
 [-PreferAccessibleContent <$true | $false>] [-ShowPreviewTextInListView <$true | $false>]
 [-ShowReadingPaneOnFirstLoad <$true | $false>] [-ShowSenderOnTopInListView <$true | $false>]
 [-ShowUpNext <$true | $false>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

When run, the Set-MailboxMessageConfiguration cmdlet modifies e-mail message settings for the specified mailbox. Settings include e-mail signature, message format, message options, read receipts, reading pane, and conversations.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "User options" entry in the Client Access Permissions topic.

!!! Exchange Server 2013

The Set-MailboxMessageConfiguration cmdlet configures Outlook Web App settings for the specified mailbox. These settings include email signature, message format, message options, read receipts, reading pane, and conversations. These settings are not used in Microsoft Outlook, Exchange ActiveSync, or other email clients. These settings are applied in Outlook Web App only. Settings that contain the word Mobile are applied in Microsoft OWA for Devices only.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "User options" entry in the Clients and mobile devices permissions topic.

!!! Exchange Server 2016, Exchange Online

The Set-MailboxMessageConfiguration cmdlet configures Outlook on the web settings for the specified mailbox. These settings include email signature, message format, message options, read receipts, reading pane, and conversations. These settings are not used in Outlook, Exchange ActiveSync, or other email clients. These settings are applied in Outlook on the web only. Settings that contain the word Mobile are applied in Outlook on the web for devices only.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-MailboxMessageConfiguration -Identity kai -AutoAddSignature $True
```

This example enables an e-mail signature to be added automatically to messages sent from Kai's mailbox.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-MailboxMessageConfiguration kai@contoso.com -HideDeletedItems $true
```

This example sets items deleted from a conversation thread to not show in the list view of the conversation in Outlook Web App for Kai's mailbox.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-MailboxMessageConfiguration kai@contoso.com -HideDeletedItems $true
```

This example sets items deleted from a conversation thread to not show in the list view of the conversation in Outlook on the web for Kai's mailbox.

### Example 1 -------------------------- (Exchange Online)
```
Set-MailboxMessageConfiguration kai@contoso.com -HideDeletedItems $true
```

This example sets items deleted from a conversation thread to not show in the list view of the conversation in Outlook on the web for Kai's mailbox.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-MailboxMessageConfiguration -Identity kai -HideDeletedItems $True
```

This example sets items deleted from a conversation thread to not show in the list view of the conversation in Kai's mailbox.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-MailboxMessageConfiguration kai@contoso.com -AlwaysShowBcc $true
```

This example sets the compose email message form to always show the Bcc field in Outlook Web App for Kai's mailbox.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-MailboxMessageConfiguration kai@contoso.com -AlwaysShowBcc $true
```

This example sets the compose email message form to always show the Bcc field in Outlook on the web for Kai's mailbox.

### Example 2 -------------------------- (Exchange Online)
```
Set-MailboxMessageConfiguration kai@contoso.com -AlwaysShowBcc $true
```

This example sets the compose email message form to always show the Bcc field in Outlook on the web for Kai's mailbox.

### Example 3 -------------------------- (Exchange Server 2010)
```
Set-MailboxMessageConfiguration -Identity kai -AlwaysShowBcc $True
```

This example sets the compose e-mail message form to show the bcc field always for Kai's mailbox.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the mailbox. You can use the following values:

- GUID

- ADObjectID

- Distinguished name (DN)

- Domain\\Account

- User principal name (UPN)

- LegacyExchangeDN

- SmtpAddress

- Alias



!!! Exchange Server 2013

The Identity parameter specifies the mailbox. You can use any value that uniquely identifies the mailbox.

For example:

- Alias

- Distinguished name (DN)

- GUID

- Name

- Display name

- LegacyExchangeDN

- Email address



!!! Exchange Server 2016, Exchange Online

The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AfterMoveOrDeleteBehavior
!!! Exchange Server 2010

The AfterMoveOrDeleteBehavior specifies the behavior after moving or deleting an e-mail item. You can use the following values:

- OpenPreviousItem

- OpenNextItem

- ReturnToView

The default value is OpenNextItem.



!!! Exchange Server 2013

The AfterMoveOrDeleteBehavior parameter specifies the behavior after moving or deleting an email item in Outlook Web App. You can use the following values:

- OpenPreviousItem

- OpenNextItem

- ReturnToView

The default value is OpenNextItem.



!!! Exchange Server 2016, Exchange Online

The AfterMoveOrDeleteBehavior parameter specifies the behavior after moving or deleting an email item in Outlook on the web. You can use the following values:

- OpenPreviousItem

- OpenNextItem

- ReturnToView

The default value is OpenNextItem.



```yaml
Type: OpenPreviousItem | OpenNextItem | ReturnToView
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysShowBcc
!!! Exchange Server 2010

The AlwaysShowBcc parameter specifies whether the blind carbon copy (bcc) field will always appear in the message compose form for the specified mailbox. The default value is $false.



!!! Exchange Server 2013

The AlwaysShowBcc parameter shows or hides the blind carbon copy (Bcc) field when the user creates messages in Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The AlwaysShowBcc parameter shows or hides the blind carbon copy (Bcc) field when the user creates messages in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.



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

### -AlwaysShowFrom
!!! Exchange Server 2010

The AlwaysShowFrom parameter specifies whether the From field will always appear in the message compose form for the specified mailbox. The default value is $false.



!!! Exchange Server 2013

The AlwaysShowFrom parameter shows or hides the From field when the user creates messages in Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The AlwaysShowFrom parameter shows or hides the From field when the user creates messages in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.



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

### -AutoAddSignature
!!! Exchange Server 2010

The AutoAddSignature parameter specifies whether to set the provided e-mail signature to be automatically included in messages sent from the specified mailbox. The default value is $false.



!!! Exchange Server 2013

The AutoAddSignature parameter automatically adds the email signature specified by the SignatureText or SignatureHTML parameters to messages when the user creates messages in Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $false.

The email signature specified by the SignatureText parameter is added to plain text messages. The email signature specified by the SignatureHTML parameter is added to HTML-formatted messages.



!!! Exchange Server 2016, Exchange Online

The AutoAddSignature parameter specifies whether to automatically add signatures to new email messages created in Outlook on the web. Valid values are:

- $true: Email signatures are automatically added to new messages.

- $false: Email signatures aren't automatically added to new messages.

The email signature specified by the SignatureText parameter is added to plain text messages. The email signature specified by the SignatureHTML parameter is added to HTML-formatted messages.



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

### -ConversationSortOrder
!!! Exchange Server 2010

The ConversationSortOrder parameter specifies the sorting of messages in the reading pane when viewed in Conversation mode. Possible values are as follows:

- Chronological

- Tree

- NewestOnTop

- NewestOnBottom

- ChronologicalNewestOnTop

- ChronologicalNewestOnBottom

- TreeNewestOnBottom

The default value is NewestOnTop.



!!! Exchange Server 2013

The ConversationSortOrder parameter specifies the sorting of messages in the reading pane in Conversation view for the user in Outlook Web App. You can use the following values:

- Chronological

- Tree

- NewestOnTop

- NewestOnBottom

- ChronologicalNewestOnTop

- ChronologicalNewestOnBottom

- TreeNewestOnBottom

The default value is ChronologicalNewestOnTop.



!!! Exchange Server 2016, Exchange Online

The ConversationSortOrder parameter specifies the sorting of messages in the reading pane in Conversation view for the user in Outlook on the web. You can use the following values:

- Chronological

- Tree

- NewestOnTop

- NewestOnBottom

- ChronologicalNewestOnTop

- ChronologicalNewestOnBottom

- TreeNewestOnBottom

The default value is ChronologicalNewestOnTop.



```yaml
Type: Chronological | Tree | NewestOnTop | NewestOnBottom | ChronologicalNewestOnTop | ChronologicalNewestOnBottom | TreeNewestOnBottom
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFontColor
!!! Exchange Server 2010

The DefaultFontColor parameter specifies the font color of the text composed in the message form for the specified mailbox. The parameter accepts a hexadecimal color code value in the format of "#xxxxxx."

If the string value provided is unrecognized, the browser application uses a default font color to display the text.



!!! Exchange Server 2013

The DefaultFontColor parameter specifies the default text color when the user creates messages in Outlook Web App. This parameter accepts a hexadecimal color code value in the format #xxxxxx. The default value is #000000.

If the string value is unrecognized, the browser application uses a default font color to display the text.



!!! Exchange Server 2016, Exchange Online

The DefaultFontColor parameter specifies the default text color when the user creates messages in Outlook on the web. This parameter accepts a hexadecimal color code value in the format #xxxxxx. The default value is #000000.

If the string value is unrecognized, the browser application uses a default font color to display the text.



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

### -DefaultFontFlags
!!! Exchange Server 2010

The DefaultFontFlags parameter specifies the font effect on the text composed in the message form for the specified mailbox. Accepted values are as follows:

- Normal

- Bold

- Italic

- Underline

- All

The default value is Normal, which means none of the effects are selected.



!!! Exchange Server 2013

The DefaultFontFlags parameter specifies the default text effect when the user creates messages in Outlook Web App. You can use the following values:

- Normal

- Bold

- Italic

- Underline

- All

The default value is Normal.



!!! Exchange Server 2016, Exchange Online

The DefaultFontFlags parameter specifies the default text effect when the user creates messages in Outlook on the web. You can use the following values:

- Normal

- Bold

- Italic

- Underline

- All

The default value is Normal.



```yaml
Type: Normal | Bold | Italic | Underline | All
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFontName
!!! Exchange Server 2010

The DefaultFontName parameter specifies the font type for the text composed in the message form for the specified mailbox. If the string value provided is unrecognized, the browser application uses a default font type to display the text.



!!! Exchange Server 2013

The DefaultFontName parameter specifies the default font when the user creates messages in Outlook Web App.

The default value is Calibri. If the font name value is unrecognized, the browser application uses a default font to display the text.



!!! Exchange Server 2016, Exchange Online

The DefaultFontName parameter specifies the default font when the user creates messages in Outlook on the web.

The default value is Calibri. If the font name value is unrecognized, the browser application uses a default font to display the text.



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

### -DefaultFontSize
!!! Exchange Server 2010

The DefaultFontSize parameter specifies the font size of the text composed in the message form for the specified mailbox. The minimum font size is 1 and the maximum font size is 7. The default value is 2.



!!! Exchange Server 2013

The DefaultFontSize parameter specifies the default text size when the user creates messages in Outlook Web App.

Valid input for this parameter is an integer between 1 and 7. The default value is 3, which corresponds to a 12 point font size.



!!! Exchange Server 2016, Exchange Online

The DefaultFontSize parameter specifies the default text size when the user creates messages in Outlook on the web.

Valid input for this parameter is an integer between 1 and 7. The default value is 3, which corresponds to a 12 point font size.



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

### -DefaultFormat
!!! Exchange Server 2010

The DefaultFormat parameter specifies the default text format in the message compose form for the specified mailbox. Accepted values are Html and PlainText. The default value is Html.



!!! Exchange Server 2013

The DefaultFormat parameter specifies the default message format when the user creates messages in Outlook Web App. Accepted values are Html and PlainText. The default value is Html.



!!! Exchange Server 2016, Exchange Online

The DefaultFormat parameter specifies the default message format when the user creates messages in Outlook on the web. Accepted values are Html and PlainText. The default value is Html.



```yaml
Type: Html | PlainText
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

### -EmptyDeletedItemsOnLogoff
!!! Exchange Server 2010

The EmptyDeletedItemsOnLogoff parameter specifies whether to delete items from the Deleted Items folder of the specified mailbox upon logging out. The default value is $false.



!!! Exchange Server 2013

The EmptyDeletedItemsOnLogoff parameter specifies whether to delete items from the Deleted Items folder when the user logs out of Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The EmptyDeletedItemsOnLogoff parameter specifies whether to delete items from the Deleted Items folder when the user logs out of Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.



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

### -HideDeletedItems
!!! Exchange Server 2010

The HideDeletedItems parameter specifies whether when messages in a conversation thread are deleted, they can be set to not display when Conversation View is selected. The default value is $false.



!!! Exchange Server 2013

The HideDeletedItems parameter shows or hides deleted messages in Conversation view for the user in Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The HideDeletedItems parameter shows or hides deleted messages in Conversation view for the user in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.



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

### -IgnoreDefaultScope
!!! Exchange Server 2010, Exchange Server 2013

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



!!! Exchange Server 2016, Exchange Online

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



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

### -NewItemNotification
!!! Exchange Server 2010

The NewItemNotification parameter specifies how to provide notification for the arrival of new items in the specified mailbox. You can use the following values:

- Sound

- EMailToast

- VoiceMailToast

- FaxToast

- None

- All

The default value is All.



!!! Exchange Server 2013

The NewItemNotification parameter specifies how to provide notification for the arrival of new items for the user in Outlook Web App. You can use the following values:

- Sound

- EMailToast

- VoiceMailToast

- FaxToast

- None

- All

The default value is All.



!!! Exchange Server 2016, Exchange Online

The NewItemNotification parameter specifies how to provide notification for the arrival of new items for the user in Outlook on the web. You can use the following values:

- Sound

- EMailToast

- VoiceMailToast

- FaxToast

- None

- All

The default value is All.



```yaml
Type: None | Sound | EMailToast | VoiceMailToast | FaxToast | All
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreviewMarkAsReadBehavior
!!! Exchange Server 2010

The PreviewMarkAsReadBehavior parameter specifies the options for marking an item as Read in the reading pane. You can use the following values:

- Delayed

- OnSelectionChange

- Never

The default value is OnSelectionChange.



!!! Exchange Server 2013

The PreviewMarkAsReadBehavior parameter specifies the options for marking an item as Read in the reading pane for the user in Outlook Web App. You can use the following values:

- Delayed This value uses the delay interval specified by the PreviewMarkAsReadDelaytime parameter.

- OnSelectionChange

- Never

The default value is OnSelectionChange.



!!! Exchange Server 2016, Exchange Online

The PreviewMarkAsReadBehavior parameter specifies the options for marking an item as Read in the reading pane for the user in Outlook on the web. You can use the following values:

- Delayed: This value uses the delay interval specified by the PreviewMarkAsReadDelaytime parameter.

- OnSelectionChange

- Never

The default value is OnSelectionChange.



```yaml
Type: Delayed | OnSelectionChange | Never
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreviewMarkAsReadDelaytime
!!! Exchange Server 2010

The PreviewMarkAsReadDelaytime parameter specifies the time in seconds to wait before marking an item as Read. The minimum value is 0, and the maximum value is 30. The default value is 5.



!!! Exchange Server 2013

The PreviewMarkAsReadDelaytime parameter specifies the time in seconds to wait before marking an item as Read for the user in Outlook Web App.

Valid input for this parameter is an integer between 0 and 30. The default value is 5 seconds.

This parameter is meaningful only if you set the PreviewMarkAsReadBehavior parameter to the value Delayed.



!!! Exchange Server 2016, Exchange Online

The PreviewMarkAsReadDelaytime parameter specifies the time in seconds to wait before marking an item as Read for the user in Outlook on the web.

Valid input for this parameter is an integer between 0 and 30. The default value is 5 seconds.

This parameter is meaningful only if you set the PreviewMarkAsReadBehavior parameter to the value Delayed.



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

### -ReadReceiptResponse
!!! Exchange Server 2010

The ReadReceiptResponse parameter specifies how to respond to requests for read receipts. You can use the following values:

- DoNotAutomaticallySend

- AlwaysSend

- NeverSend

The default value is DoNotAutomaticallySend.



!!! Exchange Server 2013

The ReadReceiptResponse parameter specifies how to respond to requests for read receipts for the user in Outlook Web App. You can use the following values:

- DoNotAutomaticallySend

- AlwaysSend

- NeverSend

The default value is DoNotAutomaticallySend.



!!! Exchange Server 2016, Exchange Online

The ReadReceiptResponse parameter specifies how to respond to requests for read receipts for the user in Outlook on the web. You can use the following values:

- DoNotAutomaticallySend

- AlwaysSend

- NeverSend

The default value is DoNotAutomaticallySend.



```yaml
Type: DoNotAutomaticallySend | AlwaysSend | NeverSend
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendAddressDefault
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The SendAddressDefault parameter specifies the default From e-mail address when the user has POP, IMAP, or Hotmail subscriptions configured on their mailbox. The user can override the default From address when they create an e-mail message in Outlook Web App.

You can use one of the following values for SendAddressDefault:

- Blank, which is represented by the value $null. This indicates no default From address is specified.

- The user's primary e-mail address. For example, bob@contoso.com.

- The GUID of a POP, IMAP, or Hotmail subscription that's configured on the user's mailbox.

By default, no default From address is specified on the mailbox. When no default From address is specified, the default behavior is:

- The primary e-mail address on the mailbox is used for all new messages.

- The To address of the incoming message is used as the From address for all replies or forwarded messages.

You can find the available values for SendAddressDefault on a mailbox by running the command Get-SendAddress -Mailbox \<mailbox\>.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The SendAddressDefault parameter specifies the default From email address when the user has POP, IMAP, or Hotmail subscriptions configured on their mailbox. Users can override the default From address when they create an email message in Outlook Web App.

You can use one of the following values:

- Blank, which is represented by the value $null. This indicates no default From address is specified.

- The user's primary email address. For example, bob@contoso.com.

- The GUID of a POP, IMAP, or Hotmail subscription that's configured on the user's mailbox.

By default, no default From address is specified on the mailbox. When no default From address is specified, the default behavior is:

- The primary email address on the mailbox is used for all new messages.

- The To address of the incoming message is used as the From address for all replies or forwarded messages.

You can find the available values for SendAddressDefault on a mailbox by running the command Get-SendAddress -Mailbox \<mailbox\>.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The SendAddressDefault parameter specifies the default From email address when the user has POP, IMAP, or Hotmail subscriptions configured on their mailbox. Users can override the default From address when they create an email message in Outlook on the web.

You can use one of the following values:

- Blank, which is represented by the value $null. This indicates no default From address is specified.

- The user's primary email address. For example, bob@contoso.com.

- The GUID of a POP, IMAP, or Hotmail subscription that's configured on the user's mailbox.

By default, no default From address is specified on the mailbox. When no default From address is specified, the default behavior is:

- The primary email address on the mailbox is used for all new messages.

- The To address of the incoming message is used as the From address for all replies or forwarded messages.

You can find the available values for SendAddressDefault on a mailbox by running the command Get-SendAddress -Mailbox \<mailbox\>.



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

### -ShowConversationAsTree
!!! Exchange Server 2010

The ShowConversationAsTree parameter specifies how to sort messages in the list view in an expanded conversation. The default value is $false.



!!! Exchange Server 2013

The ShowConversationAsTree parameter specifies how to sort messages in the list view in an expanded conversation for the user in Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The ShowConversationAsTree parameter specifies how to sort messages in the list view in an expanded conversation for the user in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.



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

### -SignatureHtml
!!! Exchange Server 2010

The SignatureHtml parameter specifies that the e-mail signature message contains HTML tags. Any JavaScript code is removed when saving the value.



!!! Exchange Server 2013

The SignatureHtml parameter specifies the email signature that's available to the user in HTML-formatted messages in Outlook Web App. You can use plain text or text with HTML tags. However, any JavaScript code is removed.

To automatically add this email signature to HTML-formatted messages created by the user in Outlook Web App, the AutoAddSignature parameter must be set to $true.



!!! Exchange Server 2016, Exchange Online

The SignatureHtml parameter specifies the email signature that's available to the user in HTML-formatted messages in Outlook on the web. You can use plain text or text with HTML tags. However, any JavaScript code is removed.

To automatically add this email signature to HTML-formatted messages created by the user in Outlook on the web, the AutoAddSignature parameter must be set to $true.



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

### -SignatureText
!!! Exchange Server 2010

The SignatureText parameter specifies the content of the e-mail signature automatically applied to messages.

The content supports all Unicode characters.



!!! Exchange Server 2013

The SignatureText parameter specifies the email signature that's available to the user in plain text messages in Outlook Web App. This parameter supports all Unicode characters.

To automatically add the email signature to plain text messages created by the user in Outlook Web App, the AutoAddSignature parameter must be set to the value $true.



!!! Exchange Server 2016, Exchange Online

The SignatureText parameter specifies the email signature that's available to the user in plain text messages in Outlook on the web. This parameter supports all Unicode characters.

To automatically add the email signature to plain text messages created by the user in Outlook on the web, the AutoAddSignature parameter must be set to the value $true.



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

### -AutoAddSignatureOnMobile
!!! Exchange Server 2013

The AutoAddSignatureOnMobile parameter automatically adds the signature specified by the SignatureTextOnMobile parameter to messages when the user creates messages in OWA for Devices.

Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The AutoAddSignatureOnMobile parameter automatically adds the signature specified by the SignatureTextOnMobile parameter to messages when the user creates messages in Outlook on the web for devices.

Valid input for this parameter is $true or $false. The default value is $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CheckForForgottenAttachments
!!! Exchange Server 2013

The CheckForForgottenAttachments parameter shows or hides the attachment warning prompt when the user creates messages in Outlook Web App.

Valid input for this parameter is $true or $false. The default value is $true.

For example, the user creates a message that includes the text "Please see the attached Word document", but the user doesn't attach a file, and clicks Send. If this value is set to $true, the user gets a warning prompt so they can go back to the message and attach a file. If this value is set to $false, the user doesn't get the warning prompt.



!!! Exchange Server 2016, Exchange Online

The CheckForForgottenAttachments parameter shows or hides the attachment warning prompt when the user creates messages in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

For example, the user creates a message that includes the text "Please see the attached Word document", but the user doesn't attach a file, and clicks Send. If this value is set to $true, the user gets a warning prompt so they can go back to the message and attach a file. If this value is set to $false, the user doesn't get the warning prompt.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailComposeMode
!!! Exchange Server 2013

The EmailComposeMode parameter specifies how the user creates messages in Outlook Web App. You can use the following values:

- Inline New messages and replies are created in the preview pane. This is the default value.

- SeparateForm New messages and replies are created in a new browser window.



!!! Exchange Server 2016, Exchange Online

The EmailComposeMode parameter specifies how the user creates messages in Outlook on the web. You can use the following values:

- Inline: New messages and replies are created in the preview pane. This is the default value.

- SeparateForm: New messages and replies are created in a new browser window.



```yaml
Type: Inline | SeparateForm
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignatureTextOnMobile
!!! Exchange Server 2013

The SignatureTextOnMobile parameter specifies the email signature that's available in messages created by the user in OWA for Devices. This parameter supports all Unicode characters.

To automatically add the email signature to messages created by the user in OWA for Devices, the AutoAddSignatureOnMobile parameter must be set to the value $true.



!!! Exchange Server 2016, Exchange Online

The SignatureTextOnMobile parameter specifies the email signature that's available in messages created by the user in Outlook on the web for devices. This parameter supports all Unicode characters.

To automatically add the email signature to messages created by the user in Outlook on the web for devices, the AutoAddSignatureOnMobile parameter must be set to the value $true.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultSignatureOnMobile
!!! Exchange Server 2013

The UseDefaultSignatureOnMobile parameter specifies whether to add the default email signature to messages created by the user in OWA for Devices. The user configures the default signature in Microsoft Outlook.

Valid input for this parameter is $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online

The UseDefaultSignatureOnMobile parameter specifies whether to add the default email signature to messages created by the user in Outlook on the web for devices. The user configures the default signature in Outlook.

Valid input for this parameter is $true or $false. The default value is $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAddSignatureOnReply
The AutoAddSignature parameter specifies whether to automatically add signatures to reply email messages created in Outlook on the web. Valid values are:

- $true: Email signatures are automatically added to reply messages.

- $false: Email signatures aren't automatically added to reply messages.

The email signature specified by the SignatureText parameter is added to plain text messages. The email signature specified by the SignatureHTML parameter is added to HTML-formatted messages.

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

### -GlobalReadingPanePosition
The GlobalReadingPanePosition specifies the default location of the reading pane in Outlook on the web. Valid values are:

- Off

- Bottom

- Right (This is the default value)

```yaml
Type: Off | Right | Bottom
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsFavoritesFolderTreeCollapsed
The IsFavoritesFolderTreeCollapsed parameter specifies whether to collapse the Favorites folder tree by default in Outlook on the web. Valid values are:

- $true: The Favorites folder tree is collapsed by default.

- $false: The Favorites folder tree isn't collapsed by default. This is the default value

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

### -IsMailRootFolderTreeCollapsed
The IsMailRootFolderTreeCollapsed parameter specifies whether to collapse the Mail root folder tree by default in Outlook on the web. Valid values are:

- $true: The Mail root folder tree is collapsed by default.

- $false: The Mail root folder tree isn't collapsed by default. This is the default value

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

### -IsReplyAllTheDefaultResponse
The IsReplyAllTheDefaultResponse parameter specifies whether Reply All is the default response for messages in Outlook on the web. Valid values are:

- $true: Reply All is the default response option for messages in the reading pane. This is the default value.

- $false: Reply All isn't the default response option for messages in the reading pane.

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

### -LinkPreviewEnabled
The LinkPreviewEnabled parameter specifies whether link preview of URLs in email messages is enabled for the user in Outlook on the web. Valid values are:

- $true: Link preview of URLs in email messages is enabled for the user. This is the default value.

- $false: Link preview of URLs in email messages is disabled for the user.

This parameter depends on the value of the LinkPreviewEnabled parameter on the Set-OrganizationConfig cmdlet, which controls the link preview behavior in Outlook on the web for the entire organization. If link preview is disabled for the organization, users can't enable it for themselves.

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

### -MailFolderPaneExpanded
The MailFolderPaneExpanded parameter specifies whether the Mail folder pane is expanded by default in Outlook on the web. Valid values are:

- $true: The Mail folder pane is expanded by default. This is the default value.

- $false: The Mail folder pane isn't expanded by default.

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

### -NavigationPaneViewOption
The NavigationPaneViewOption parameter specifies the default navigation pane view in Outlook on the web. Valid values are:

- Default: This is the default value

- MailFolders

- PeopleFolders

- Groups

- PinnedMailFolders

```yaml
Type: Default | MailFolders | PeopleFolders | Groups | PinnedMailFolders
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferAccessibleContent
The PreferAccessibleContent parameter specifies whether to prefer accessible content in Outlook on the web. Valid values are:

- $true: Prefer accessible content.

- $false: Don't prefer accessible content. This is the default value.

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

### -ShowPreviewTextInListView
The ShowPreviewTextInListView parameter specifies whether to show preview text for messages in list view in Outlook on the web. Valid values are:

- $true: Show preview text for messages in list view. This is the default value.

- $false: Don't show preview text for messages in list view.

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

### -ShowReadingPaneOnFirstLoad
The ShowReadingPaneOnFirstLoad parameter specifies whether to show the reading pane when the user opens in Outlook on the web for the first time. Valid values are:

- $true: Show the reading pane when the user opens Outlook on the web for the first time.

- $false: Don't show the reading pane when the user opens Outlook on the web for the first time. This is the default value.

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

### -ShowSenderOnTopInListView
The ShowSenderOnTopInListView parameter specifies whether to show the message sender on top in list view in Outlook on the web. Valid values are:

- $true: Show the message sender on top in list view. This is the default value.

- $false: Don't show the message sender on top in list view.

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

### -ShowUpNext
The ShowUpNext parameter specifies whether the next upcoming event should be shown above the mail list view in Outlook on the web. Valid values are:

- $true: Show the next upcoming event above the mail list view. This is the default value.

- $false: Don't show the next upcoming event above the mail list view.

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

[Online Version](https://technet.microsoft.com/library/380aea89-c38e-4651-bf18-990032a04f04.aspx)

