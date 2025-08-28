---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailboxjunkemailconfiguration
schema: 2.0.0
title: Set-MailboxJunkEmailConfiguration
---

# Set-MailboxJunkEmailConfiguration

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-MailboxJunkEmailConfiguration cmdlet to configure the junk email settings on mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-MailboxJunkEmailConfiguration [-Identity] <MailboxIdParameter>
 [-BlockedSendersAndDomains <MultiValuedProperty>]
 [-Confirm]
 [-ContactsTrusted <Boolean>]
 [-DomainController <Fqdn>]
 [-Enabled <Boolean>]
 [-FailOnError <Boolean>]
 [-IgnoreDefaultScope]
 [-SenderScreeningEnabled <Boolean>]
 [-TrustedListsOnly <Boolean>]
 [-TrustedRecipientsAndDomains <MultiValuedProperty>]
 [-TrustedSendersAndDomains <MultiValuedProperty>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet controls the following junk email settings on the mailbox:

- Enable or disable the junk email rule: In on-premises Exchange, the junk email rule (a hidden Inbox rule named Junk E-mail Rule) controls the delivery of messages to the Junk Email folder or the Inbox based on the SCL Junk Email Folder threshold (for the organization or the mailbox) and the safelist collection on the mailbox.

  In the cloud-based service, the junk email rule has no effect on mail flow. Messages are delivered to the Junk Email folder based on the actions set in anti-spam policies. The junk email rule on the mailbox still controls what happens to messages after delivery based on the safelist collection of the mailbox.

  Users can enable or disable the junk email rule in their own mailbox by using Outlook on the web.

- Configure the safelist collection: The safelist collection is the Safe Senders list, the Safe Recipients list, and the Blocked Senders list. Users can configure the safelist collection on their own mailbox by using Microsoft Outlook or Outlook on the web.

For more information, see [Configure Exchange antispam settings on mailboxes](https://learn.microsoft.com/Exchange/antispam-and-antimalware/antispam-protection/configure-antispam-settings).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailboxJunkEmailConfiguration "David Pelton" -Enabled $false
```

This example disables the junk email rule for the user named David Pelton. In on-premises Exchange, messages are no longer moved between the Inbox and the Junk Email folder based on the SCL Junk Email Folder threshold (organization or mailbox) or the safelist collection of the mailbox. In Exchange Online, the safelist collection of the mailbox is unable to move messages between the Inbox and the Junk Email folder. Messages are still delivered to the Junk Email folder based on the verdict and corresponding action of anti-spam policies.

### Example 2
```powershell
Set-MailboxJunkEmailConfiguration "Michele Martin" -TrustedSendersAndDomains @{Add="contoso.com","fabrikam.com"} -BlockedSendersAndDomains @{Add="jane@fourthcoffee.com"}
```

This example makes the following configuration changes to the safelist collection for the user named Michele Martin:

- Adds contoso.com and fabrikam.com to the Safe Senders list without affecting other existing entries.
- Adds jane@fourthcoffee.com to the Blocked senders list without affecting other existing entries.

### Example 3
```powershell
Get-MailboxJunkEmailConfiguration * | Where {$_.ContactsTrusted -eq $true} | Set-MailboxJunkEmailConfiguration -ContactsTrusted $false
```

This example identifies mailboxes where contacts are treated as trusted senders and then changes the junk email configuration to not treat contacts as trusted senders.

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

### -BlockedSendersAndDomains

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The BlockedSendersAndDomains parameter specifies the Blocked Senders list, which is a list of sender email addresses and domains whose messages are automatically sent to the Junk Email folder. This parameter corresponds to the Outlook on the web setting: Move email from these senders or domains to my Junk Email folder.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

```yaml
Type: MultiValuedProperty
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

### -ContactsTrusted

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ContactsTrusted parameter specifies whether the contacts in the Contacts folder are treated as trusted senders. This parameter corresponds to the Outlook on the web setting: Trust email from my contacts. Valid values are:

- $true: Messages from contacts in the Contacts folder that reach the mailbox are never delivered to the Junk Email folder, regardless of the content.
- $false: Messages from contacts in the Contacts folder aren't treated as trusted senders. The email address is a trusted sender only if it's defined in the Safe Senders list. This value is the default.

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

### -Enabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Enabled parameter enables or disables the junk email rule on the mailbox (a hidden Inbox rule named Junk E-mail Rule). Valid values are:

- $true: The junk email rule is enabled in the mailbox. This value corresponds to the Outlook on the web setting: Automatically filter junk email. This value is the default.

  In on-premises Exchange, the safelist collection of the mailbox (the Safe Senders list, Safe Recipients list, and Blocked Senders list), and the SCL Junk Email folder threshold (for the organization or the mailbox) delivers messages to the Inbox or the Junk Email folder.

  In the cloud-based service, the safelist collection of the mailbox moves delivered messages between the Inbox or the Junk Email folder. Messages are delivered to the Junk Email folder based on the verdict and corresponding action of anti-spam policies only.

- $false: The junk email rule is disabled in the mailbox. This value corresponds to the Outlook on the web setting: Don't move email to my Junk Email folder.

  In on-premises Exchange, the safelist collection of the mailbox or the SCL Junk Email folder threshold are unable to deliver messages to the Inbox or the Junk Email folder.

  In the cloud-based service, the safelist collection of the mailbox is unable to move delivered messages between the Inbox or the Junk Email folder. Messages are still delivered to the Junk Email folder based on the verdict and corresponding action of anti-spam policies.

You can view the status of the junk email rule by running either of the following commands to find the Enabled property value:

- `Get-MailboxJunkEmailConfiguration -Identity <MailboxIdentity>`
- On-premises Exchange only: `Get-InboxRule "Junk E-mail Rule" -Mailbox <MailboxIdentity> -IncludeHidden`

The state of the junk email rule on the mailbox doesn't affect the client-side junk email settings that are available in the Outlook Junk Email Filter. Even when the junk email rule is disabled in the mailbox, Outlook can still move messages to the Junk Email folder. For example, if Outlook determines the message is spam, or the sender is defined in the Blocked Senders list, Outlook can move the message to the Junk Email folder. For more information, see [Overview of the Junk Email Filter](https://support.microsoft.com/office/5ae3ea8e-cf41-4fa0-b02a-3b96e21de089).

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

### -FailOnError

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill FailOnError Description }}

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

### -SenderScreeningEnabled

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill SenderScreeningEnabled Description }}

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

### -TrustedListsOnly

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TrustedListsOnly parameter specifies that only messages from senders in the Safe Senders list are delivered to the Inbox. All other messages are treated as junk email. This parameter corresponds to the Outlook on the web setting: Don't trust email unless it comes from someone in my Safe Senders and Recipients list. Valid values are:

- $true: Only messages from email address or domain entries in the Safe Senders list and the Safe Recipients list are delivered to the Inbox. All other messages are automatically delivered to the Junk Email folder.
- $false: Messages from other senders, recipients, and domains aren't automatically treated as junk email, and are evaluated individually. This value is the default.

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

### -TrustedRecipientsAndDomains

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedSendersAndDomains

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The TrustedSendersAndDomains parameter specifies the Safe Senders list and Safe Recipients list, which are lists of email addresses and domains. Messages from these senders that reach the mailbox are never delivered to the Junk Email folder, regardless of the content. This parameter corresponds to the Outlook on the web setting: Don't move email from these senders or domains to my Junk Email folder.

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

To empty the list of email addresses and domains, use the value $null.

**Notes**:

- You can't add sender email addresses from the same domain as the recipient's email address. All mailboxes in the global address list (GAL) are automatically considered as trusted senders.
- You can't directly modify the Safe Recipients list by using this cmdlet. You use this parameter to modify the Safe Senders list, and the email addresses and domains are synchronized to the Safe Recipients list.
- In standalone EOP with directory synchronization, domain entries aren't synchronized by default, but you can enable synchronization for domains. For more information, see [Configure Content Filtering to Use Safe Domain Data](/exchange/configure-content-filtering-to-use-safe-domain-data-exchange-2013-help).

```yaml
Type: MultiValuedProperty
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
