---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxmessageconfiguration
schema: 2.0.0
title: Set-MailboxMessageConfiguration
---

# Set-MailboxMessageConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-MailboxMessageConfiguration cmdlet to configure the Outlook on the web settings that are applied to specific mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxMessageConfiguration [-Identity] <MailboxIdParameter>
 [-AfterMoveOrDeleteBehavior <AfterMoveOrDeleteBehavior>]
 [-AlwaysShowBcc <Boolean>]
 [-AlwaysShowFrom <Boolean>]
 [-AutoAddSignature <Boolean>]
 [-AutoAddSignatureOnMobile <Boolean>]
 [-AutoAddSignatureOnReply <Boolean>]
 [-CheckForForgottenAttachments <Boolean>]
 [-CheckForReportJunkDialog <Boolean>]
 [-Confirm]
 [-ConversationSortOrder <ConversationSortOrder>]
 [-DefaultFontColor <String>]
 [-DefaultFontFlags <FontFlags>]
 [-DefaultFontName <String>]
 [-DefaultFontSize <Int32>]
 [-DefaultFormat <MailFormat>]
 [-DefaultSignature <String>]
 [-DefaultSignatureOnReply <String>]
 [-DeleteSignatureName <String>]
 [-DisplayDensityMode <DisplayDensityMode>]
 [-DomainController <Fqdn>]
 [-EchoGroupMessageBackToSubscribedSender <Boolean>]
 [-EmailComposeMode <EmailComposeMode>]
 [-EmptyDeletedItemsOnLogoff <Boolean>]
 [-FavoritesBitFlags <Int32>]
 [-GlobalReadingPanePosition <MailReadingPanePosition>]
 [-HideDeletedItems <Boolean>]
 [-IgnoreDefaultScope]
 [-IsDarkModeTheme <Boolean>]
 [-IsFavoritesFolderTreeCollapsed <Boolean>]
 [-IsFocusedInboxEnabled <Boolean>]
 [-IsMailRootFolderTreeCollapsed <Boolean>]
 [-IsReplyAllTheDefaultResponse <Boolean>]
 [-LinkPreviewEnabled <Boolean>]
 [-MailFolderPaneExpanded <Boolean>]
 [-MailSendUndoInterval <Int32>]
 [-ManuallyPickCertificate <Boolean>]
 [-NavigationBarWidth <Int32>]
 [-NavigationPaneViewOption <NavigationPaneView>]
 [-NewEnabledPonts <PontType>]
 [-NewItemNotification <NewItemNotification>]
 [-PreferAccessibleContent <Boolean>]
 [-PreviewMarkAsReadBehavior <PreviewMarkAsReadBehavior>]
 [-PreviewMarkAsReadDelaytime <Int32>]
 [-ReadReceiptResponse <ReadReceiptResponse>]
 [-ReportJunkSelected <Boolean>]
 [-SendAddressDefault <String>]
 [-ShowConversationAsTree <Boolean>]
 [-ShowInlinePreviews <Boolean>]
 [-ShowNotificationBar <Boolean>]
 [-ShowPreviewTextInListView <Boolean>]
 [-ShowReadingPaneOnFirstLoad <Boolean>]
 [-ShowSenderOnTopInListView <Boolean>]
 [-ShowUpNext <Boolean>]
 [-SignatureHtml <String>]
 [-SignatureHtmlBody <String>]
 [-SignatureName <String>]
 [-SignatureText <String>]
 [-SignatureTextOnMobile <String>]
 [-SigningCertificateId <String>]
 [-SigningCertificateSubject <String>]
 [-SmimeEncrypt <Boolean>]
 [-SmimeSign <Boolean>]
 [-UseDefaultSignatureOnMobile <Boolean>]
 [-WebSuggestedRepliesEnabledForUser <Boolean>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-MailboxMessageConfiguration cmdlet configures Outlook on the web settings for the specified mailbox. These settings include email signature, message format, message options, read receipts, reading pane, and conversations. These settings are not used in Outlook, Exchange ActiveSync, or other email clients. These settings are applied in Outlook on the web only. Some settings also apply to the new Outlook client. Settings that contain the word Mobile are applied in Outlook on the web for devices only.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxMessageConfiguration kai@contoso.com -HideDeletedItems $true
```

This example sets items deleted from a conversation thread to not show in the list view of the conversation in Outlook on the web for Kai's mailbox.

### Example 2
```powershell
Set-MailboxMessageConfiguration kai@contoso.com -AlwaysShowBcc $true
```

This example sets the compose email message form to always show the Bcc field in Outlook on the web for Kai's mailbox.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Identity parameter specifies the mailbox that you want to modify. You can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Domain\\Username
- Email address
- GUID
- LegacyExchangeDN
- SamAccountName
- User ID or user principal name (UPN)

```yaml
Type: MailboxIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AfterMoveOrDeleteBehavior

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AfterMoveOrDeleteBehavior parameter specifies the behavior after moving or deleting an email item in Outlook on the web. You can use the following values:

- OpenPreviousItem
- OpenNextItem
- ReturnToView

The default value is OpenNextItem.

```yaml
Type: AfterMoveOrDeleteBehavior
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysShowBcc

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AlwaysShowBcc parameter shows or hides the blind carbon copy (Bcc) field when the user creates messages in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AlwaysShowFrom

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AlwaysShowFrom parameter shows or hides the From field when the user creates messages in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAddSignature

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

**Note**: This parameter doesn't work if the Outlook roaming signatures feature is enabled in your cloud-based organization. Admins can now temporarily disable roaming signatures without opening a support ticket by using the PostponeRoamingSignaturesUntilLater parameter on the Set-OrganizationConfig cmdlet.

The AutoAddSignature parameter specifies whether to automatically add signatures to new email messages created in Outlook on the web. Valid values are:

- $true: Email signatures are automatically added to new messages.
- $false: Email signatures aren't automatically added to new messages.

The email signature specified by the SignatureText parameter is added to plain text messages. The email signature specified by the SignatureHTML parameter is added to HTML-formatted messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAddSignatureOnMobile

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

**Note**: This parameter doesn't work if the Outlook roaming signatures feature is enabled in your cloud-based organization. Admins can now temporarily disable roaming signatures without opening a support ticket by using the PostponeRoamingSignaturesUntilLater parameter on the Set-OrganizationConfig cmdlet.

The AutoAddSignatureOnMobile parameter automatically adds the signature specified by the SignatureTextOnMobile parameter to messages when the user creates messages in Outlook on the web for devices.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoAddSignatureOnReply

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The AutoAddSignature parameter specifies whether to automatically add signatures to reply email messages created in Outlook on the web. Valid values are:

- $true: Email signatures are automatically added to reply messages.
- $false: Email signatures aren't automatically added to reply messages.

The email signature specified by the SignatureText parameter is added to plain text messages. The email signature specified by the SignatureHTML parameter is added to HTML-formatted messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CheckForForgottenAttachments

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The CheckForForgottenAttachments parameter shows or hides the attachment warning prompt when the user creates messages in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $true.

For example, the user creates a message that includes the text "Please see the attached Word document", but the user doesn't attach a file, and clicks Send. If this value is set to $true, the user gets a warning prompt so they can go back to the message and attach a file. If this value is set to $false, the user doesn't get the warning prompt.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CheckForReportJunkDialog

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill CheckForReportJunkDialog Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConversationSortOrder

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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
Type: ConversationSortOrder
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFontColor

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DefaultFontColor parameter specifies the default text color when the user creates messages in Outlook on the web. This parameter accepts a hexadecimal color code value in the format #xxxxxx. The default value is #000000.

If the string value is unrecognized, the browser application uses a default font color to display the text.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFontFlags

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DefaultFontFlags parameter specifies the default text effect when the user creates messages in Outlook on the web. You can use the following values:

- Normal
- Bold
- Italic
- Underline
- All

The default value is Normal.

```yaml
Type: FontFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFontName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DefaultFontName parameter specifies the default font when the user creates messages in Outlook on the web.

The default value is Calibri. If the font name value is unrecognized, the browser application uses a default font to display the text.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFontSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DefaultFontSize parameter specifies the default text size when the user creates messages in Outlook on the web.

Valid input for this parameter is an integer between 1 and 7. The default value is 3, which corresponds to a 12 point font size.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DefaultFormat parameter specifies the default message format when the user creates messages in Outlook on the web. Accepted values are Html and PlainText. The default value is Html.

```yaml
Type: MailFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultSignature

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DefaultSignature Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultSignatureOnReply

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DefaultSignatureOnReply Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DeleteSignatureName

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DeleteSignatureName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayDensityMode

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill DisplayDensityMode Description }}

```yaml
Type: DisplayDensityMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EchoGroupMessageBackToSubscribedSender

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The EchoGroupMessageBackToSubscribedSender parameter controls whether subscribed members of Microsoft 365 Groups receive copies of messages that they send to those Groups. Valid values are:

- $true: If a subscribed member of a Microsoft 365 Group sends a message to that Group, they'll receive a copy of the message in their Inbox.
- $false: Subscribed members of a Microsoft 365 Group don't receive their own copies of messages that they send to the Group. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailComposeMode

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in on-premises Exchange.

The EmailComposeMode parameter specifies how the user creates messages in Outlook on the web. You can use the following values:

- Inline: New messages and replies are created in the preview pane. This value is the default.
- SeparateForm: New messages and replies are created in a new browser window.

```yaml
Type: EmailComposeMode
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmptyDeletedItemsOnLogoff

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The EmptyDeletedItemsOnLogoff parameter specifies whether to delete items from the Deleted Items folder when the user logs out of Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FavoritesBitFlags

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill FavoritesBitFlags Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalReadingPanePosition

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in Exchange 2016 or later. It doesn't work in Exchange Online.

The GlobalReadingPanePosition specifies the default location of the reading pane in Outlook on the web. Valid values are:

- Off
- Bottom
- Right (default value)

```yaml
Type: MailReadingPanePosition
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HideDeletedItems

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The HideDeletedItems parameter shows or hides deleted messages in Conversation view for the user in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsDarkModeTheme

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill IsDarkModeTheme Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsFavoritesFolderTreeCollapsed

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IsFavoritesFolderTreeCollapsed parameter specifies whether to collapse the Favorites folder tree by default in Outlook on the web. Valid values are:

- $true: The Favorites folder tree is collapsed by default.
- $false: The Favorites folder tree isn't collapsed by default. This value is the default

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsFocusedInboxEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill IsFocusedInboxEnabled Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsMailRootFolderTreeCollapsed

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IsMailRootFolderTreeCollapsed parameter specifies whether to collapse the Mail root folder tree by default in Outlook on the web. Valid values are:

- $true: The Mail root folder tree is collapsed by default.
- $false: The Mail root folder tree isn't collapsed by default. This value is the default

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsReplyAllTheDefaultResponse

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IsReplyAllTheDefaultResponse parameter specifies whether Reply All is the default response for messages in Outlook on the web. Valid values are:

- $true: Reply All is the default response option for messages in the reading pane. This value is the default.
- $false: Reply All isn't the default response option for messages in the reading pane.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkPreviewEnabled

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The LinkPreviewEnabled parameter specifies whether link preview of URLs in email messages is enabled for the user in Outlook on the web. Valid values are:

- $true: Link preview of URLs in email messages is enabled for the user. This value is the default.
- $false: Link preview of URLs in email messages is disabled for the user.

This parameter depends on the value of the LinkPreviewEnabled parameter on the Set-OrganizationConfig cmdlet, which controls the link preview behavior in Outlook on the web for the entire organization. If link preview is disabled for the organization, users can't enable it for themselves.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailFolderPaneExpanded

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MailFolderPaneExpanded parameter specifies whether the Mail folder pane is expanded by default in Outlook on the web. Valid values are:

- $true: The Mail folder pane is expanded by default. This value is the default.
- $false: The Mail folder pane isn't expanded by default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailSendUndoInterval

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill MailSendUndoInterval Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManuallyPickCertificate

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ManuallyPickCertificate Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NavigationBarWidth

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill NavigationBarWidth Description }}

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NavigationPaneViewOption

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The NavigationPaneViewOption parameter specifies the default navigation pane view in Outlook on the web. Valid values are:

- Default: This value is the default
- MailFolders
- PeopleFolders
- Groups
- PinnedMailFolders

```yaml
Type: NavigationPaneView
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewEnabledPonts

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill NewEnabledPonts Description }}

```yaml
Type: PontType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewItemNotification

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The NewItemNotification parameter specifies how to provide notification for the arrival of new items for the user in Outlook on the web. You can use the following values:

- Sound
- EMailToast
- VoiceMailToast
- FaxToast
- None
- All

The default value is All.

```yaml
Type: NewItemNotification
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferAccessibleContent

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PreferAccessibleContent parameter specifies whether to prefer accessible content in Outlook on the web. Valid values are:

- $true: Prefer accessible content.
- $false: Don't prefer accessible content. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreviewMarkAsReadBehavior

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PreviewMarkAsReadBehavior parameter specifies the options for marking an item as Read in the reading pane for the user in Outlook on the web. You can use the following values:

- Delayed: This value uses the delay interval specified by the PreviewMarkAsReadDelaytime parameter.
- OnSelectionChange
- Never

The default value is OnSelectionChange.

```yaml
Type: PreviewMarkAsReadBehavior
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreviewMarkAsReadDelaytime

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PreviewMarkAsReadDelaytime parameter specifies the time in seconds to wait before marking an item as Read for the user in Outlook on the web.

Valid input for this parameter is an integer between 0 and 30. The default value is 5 seconds.

This parameter is meaningful only if you set the PreviewMarkAsReadBehavior parameter to the value Delayed.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadReceiptResponse

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ReadReceiptResponse parameter specifies how to respond to requests for read receipts for the user in Outlook on the web. You can use the following values:

- DoNotAutomaticallySend
- AlwaysSend
- NeverSend

The default value is DoNotAutomaticallySend.

```yaml
Type: ReadReceiptResponse
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReportJunkSelected

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ReportJunkSelected Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendAddressDefault

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The SendAddressDefault parameter specifies the default From email address when the user has POP, IMAP, or Hotmail subscriptions configured on their mailbox. Users can override the default From address when they create an email message in Outlook on the web.

You can use one of the following values:

- Blank, which is represented by the value $null. This indicates no default From address is specified.
- The user's primary email address. For example, bob@contoso.com.
- The GUID of a POP, IMAP, or Hotmail subscription that's configured on the user's mailbox.

By default, no default From address is specified on the mailbox. When no default From address is specified, the default behavior is:

- The primary email address on the mailbox is used for all new messages.
- The To address of the incoming message is used as the From address for all replies or forwarded messages.

You can find the available values for SendAddressDefault on a mailbox by running the command: `Get-MailboxMessageConfiguration -Mailbox <MailboxIdentity> | Format-List SendAddressDefault`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowConversationAsTree

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ShowConversationAsTree parameter specifies how to sort messages in the list view in an expanded conversation for the user in Outlook on the web.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowInlinePreviews

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ShowInlinePreviews Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowNotificationBar

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ShowNotificationBar Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowPreviewTextInListView

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ShowPreviewTextInListView parameter specifies whether to show preview text for messages in list view in Outlook on the web. Valid values are:

- $true: Show preview text for messages in list view. This value is the default.
- $false: Don't show preview text for messages in list view.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowReadingPaneOnFirstLoad

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ShowReadingPaneOnFirstLoad parameter specifies whether to show the reading pane when the user opens in Outlook on the web for the first time. Valid values are:

- $true: Show the reading pane when the user opens Outlook on the web for the first time.
- $false: Don't show the reading pane when the user opens Outlook on the web for the first time. This value is the default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowSenderOnTopInListView

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ShowSenderOnTopInListView parameter specifies whether to show the message sender on top in list view in Outlook on the web. Valid values are:

- $true: Show the message sender on top in list view. This value is the default.
- $false: Don't show the message sender on top in list view.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowUpNext

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ShowUpNext parameter specifies whether the next upcoming event should be shown above the mail list view in Outlook on the web. Valid values are:

- $true: Show the next upcoming event above the mail list view. This value is the default.
- $false: Don't show the next upcoming event above the mail list view.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignatureHtml

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

**Note**: This parameter doesn't work if the Outlook roaming signatures feature is enabled in your cloud-based organization. Admins can now temporarily disable roaming signatures without opening a support ticket by using the PostponeRoamingSignaturesUntilLater parameter on the Set-OrganizationConfig cmdlet.

The SignatureHtml parameter specifies the email signature that's available to the user in HTML-formatted messages in Outlook on the web. You can use plain text or text with HTML tags. However, any JavaScript code is removed.

To automatically add this email signature to HTML-formatted messages created by the user in Outlook on the web, the AutoAddSignature parameter must be set to $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignatureHtmlBody

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SignatureHtmlBody Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignatureName

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SignatureName Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignatureText

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

**Note**: This parameter doesn't work if the Outlook roaming signatures feature is enabled in your cloud-based organization. Admins can now temporarily disable roaming signatures without opening a support ticket by using the PostponeRoamingSignaturesUntilLater parameter on the Set-OrganizationConfig cmdlet.

The SignatureText parameter specifies the email signature that's available to the user in plain text messages in Outlook on the web. This parameter supports all Unicode characters.

To automatically add the email signature to plain text messages created by the user in Outlook on the web, the AutoAddSignature parameter must be set to the value $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SignatureTextOnMobile

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

**Note**: This parameter doesn't work if the Outlook roaming signatures feature is enabled in your cloud-based organization. Admins can now temporarily disable roaming signatures without opening a support ticket by using the PostponeRoamingSignaturesUntilLater parameter on the Set-OrganizationConfig cmdlet.

The SignatureTextOnMobile parameter specifies the email signature that's available in messages created by the user in Outlook on the web for devices. This parameter supports all Unicode characters.

To automatically add the email signature to messages created by the user in Outlook on the web for devices, the AutoAddSignatureOnMobile parameter must be set to the value $true.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SigningCertificateId

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SigningCertificateId Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SigningCertificateSubject

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SigningCertificateSubject Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmimeEncrypt

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SmimeEncrypt Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmimeSign

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SmimeSign Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseDefaultSignatureOnMobile

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The UseDefaultSignatureOnMobile parameter specifies whether to add the default email signature to messages created by the user in Outlook on the web for devices. The user configures the default signature in Outlook.

Valid input for this parameter is $true or $false. The default value is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebSuggestedRepliesEnabledForUser

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill WebSuggestedRepliesEnabledForUser Description }}

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
