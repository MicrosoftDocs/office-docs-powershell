---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/new-antiphishpolicy
applicable: Exchange Online
title: New-AntiPhishPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# New-AntiPhishPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-AntiPhishPolicy cmdlet to create antiphish policies in your cloud-based organization.

**Note**: We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Connect to Exchange Online PowerShell](https://docs.microsoft.com/powershell/exchange/connect-to-exchange-online-powershell).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-AntiPhishPolicy [-Name] <String>
 [-AdminDisplayName <String>]
 [-AuthenticationFailAction <SpoofAuthenticationFailAction>]
 [-Confirm]
 [-EnableAntiSpoofEnforcement <Boolean>]
 [-Enabled <Boolean>]
 [-EnableMailboxIntelligence <Boolean>]
 [-EnableMailboxIntelligenceProtection <Boolean>]
 [-EnableOrganizationDomainsProtection <Boolean>]
 [-EnableSimilarDomainsSafetyTips <Boolean>]
 [-EnableSimilarUsersSafetyTips <Boolean>]
 [-EnableTargetedDomainsProtection <Boolean>]
 [-EnableTargetedUserProtection <Boolean>]
 [-EnableUnauthenticatedSender <Boolean>]
 [-EnableUnusualCharactersSafetyTips <Boolean>]
 [-ExcludedDomains <MultiValuedProperty>]
 [-ExcludedSenders <MultiValuedProperty>]
 [-ImpersonationProtectionState <ImpersonationProtectionState>]
 [-MailboxIntelligenceProtectionAction <ImpersonationAction>]
 [-MailboxIntelligenceProtectionActionRecipients <MultiValuedProperty>]
 [-PhishThresholdLevel <Int32>]
 [-PolicyTag <String>]
 [-SimilarUsersSafetyTipsCustomText <String>]
 [-TargetedDomainActionRecipients <MultiValuedProperty>]
 [-TargetedDomainProtectionAction <ImpersonationAction>]
 [-TargetedDomainsToProtect <MultiValuedProperty>]
 [-TargetedUserActionRecipients <MultiValuedProperty>]
 [-TargetedUserProtectionAction <ImpersonationAction>]
 [-TargetedUsersToProtect <MultiValuedProperty>]
 [-UnusualCharactersSafetyTipsCustomText <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Phishing messages contain fraudulent links or spoofed domains in an effort to get personal information from the recipients.

New policies that you create using this cmdlet aren't applied to users and aren't visible in admin centers. You need to use the AntiPhishPolicy parameter on the New-AntiPhishRule or Set-AntiPhishRule cmdlets to associate the policy with a rule.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-AntiPhishPolicy -Name "Research Quarantine" -AdminDisplayName "Research department policy" -EnableOrganizationDomainsProtection $true -EnableTargetedDomainsProtection $true -TargetedDomainsToProtect fabrikam.com -TargetedDomainProtectionAction Quarantine -EnableTargetedUserProtection $true -TargetedUsersToProtect "Mai Fujito;mfujito@fabrikam.com" -TargetedUserProtectionAction Quarantine -EnableMailboxIntelligence $true -EnableMailboxIntelligenceProtection $true -MailboxIntelligenceProtectionAction Quarantine -EnableSimilarUsersSafetyTips $true -EnableSimilarDomainsSafetyTips $true -EnableUnusualCharactersSafetyTips $true
```

In Advanced Threat Protection, this example creates and enables an antiphish policy named Research Quarantine with the following settings:

- The description is: Research department policy.
- Enables organization domains protection for all accepted domains, and targeted domains protection for fabrikam.com.
- Specifies Mai Fujito (mfujito@fabrikam.com) as a user to protect from impersonation.
- Enables mailbox intelligence.
- Enables mailbox intelligence protection, and specifies the quarantine action.
- Enables impersonation safety tips (impersonated domains, impersonated users, and unusual characters).

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the antiphish policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdminDisplayName
The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationFailAction
This setting is part of spoof protection.

The AuthenticationFailAction parameter specifies the action to take when the message fails composite authentication (a mixture of traditional SPF, DKIM, and DMARC email authentication checks and proprietary backend intelligence). Valid values are:

- MoveToJmf: This is the default value. Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

```yaml
Type: SpoofAuthenticationFailAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Aliases: cf
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableAntispoofEnforcement
This setting is part of spoof protection.

The EnableAntispoofEnforcement parameter specifies whether to enable or disable antispoofing protection for the policy. Valid values are:

- $true: Antispoofing is enabled for the policy. This is the default and recommended value. You specify the spoofed senders to allow or block using the Set-PhishFilterPolicy cmdlet.

- $false: Antispoofing is disabled for the policy. We only recommend this value if you have a domain that's protected by another email filtering service.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the policy is enabled. Valid values are:

- $true: The policy is enabled. This is the default value.

- $false: The policy is disabled.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMailboxIntelligence
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableMailboxIntelligence parameter specifies whether to enable or disable mailbox intelligence (the first contact graph) in domain and user impersonation protection. Valid values are:

- $true: Use mailbox intelligence in domain and user impersonation protection.

- $false: Don't use mailbox intelligence in domain and user impersonation protection. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMailboxIntelligenceProtection
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableMailboxIntelligenceProtection specifies whether to enable or disable intelligence based impersonation protection. Valid values are:

- $true: Enable intelligence based impersonation protection.

- $false: Don't enable intelligence based impersonation protection. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableOrganizationDomainsProtection
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableOrganizationDomainsProtection parameter specifies whether to enable domain impersonation protection for all registered domains in the Microsoft 365 organization. Valid values are:

- $true: Domain impersonation protection is enabled for all registered domains in the Microsoft 365 organization.

- $false: Domain impersonation protection isn't enabled for all registered domains in the Microsoft 365 organization. This is the default value. You can enable protection for specific domains by using the EnableTargetedDomainsProtection and TargetedDomainsToProtect parameters.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSimilarDomainsSafetyTips
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableSimilarDomainsSafetyTips parameter specifies whether to enable the safety tip that's shown to recipients for domain impersonation detections. Valid values are:

- $true: Safety tips for similar domains are enabled.

- $false: Safety tips for similar domains are disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSimilarUsersSafetyTips
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableSimilarUsersSafetyTips parameter specifies whether to enable the safety tip that's shown to recipients for user impersonation detections. Valid values are:

- $true: Safety tips for similar users are enabled.

- $false: Safety tips for similar users are disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTargetedDomainsProtection
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableTargetedDomainsProtection parameter specifies whether to enable domain impersonation protection for a list of specified domains. Valid values are:

- $true: Domain impersonation protection is enabled for the domains specified by the TargetedDomainsToProtect parameter.

- $false: The TargetedDomainsToProtect parameter isn't used. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTargetedUserProtection
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableTargetedUserProtection parameter specifies whether to enable user impersonation protection for a list of specified users. Valid values are:

- $true: User impersonation protection is enabled for the users specified by the TargetedUsersToProtect parameter.

- $false: The TargetedUsersToProtect parameter isn't used. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUnauthenticatedSender
This setting is part of spoof protection.

The EnableUnauthenticatedSender parameter enables or disables unauthenticated sender identification in Outlook. Valid values are:

- $true: This is the default value. A question mark (?) is applied to the sender's photo if the message does not pass SPF or DKIM checks AND the message does not pass DMARC or composite authentication. The via tag (chris@contoso.com <u>via</u> michelle@fabrikam.com) is added if the domain in the From address (the message sender that's displayed in email clients) is different from the domain in the DKIM signature or the MAIL FROM address.

- $false: A question mark is never applied to the sender's photo. The via tag is still added if the domain in the From address is different from the domain in the DKIM signature or the MAIL FROM address.

To prevent these identifiers from being added to messages from specific senders, you have the following options:

- Allow the sender to spoof in the spoof intelligence policy. This action will prevent the via tag from appearing in messages from the sender when unauthenticated sender identification is disabled. For instructions, see [Configure spoof intelligence in Microsoft 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/learn-about-spoof-intelligence).

- If you own the sender's domain, configure email authentication for the domain. For more information, see [Configure email authentication for domains you own](https://docs.microsoft.com/microsoft-365/security/office-365-security/email-validation-and-authentication#configure-email-authentication-for-domains-you-own).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUnusualCharactersSafetyTips
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The EnableUnusualCharactersSafetyTips parameter specifies whether to enable the safety tip that's shown to recipients for unusual characters in domain and user impersonation detections. Valid values are:

- $true: Safety tips for unusual characters are enabled.

- $false: Safety tips for unusual characters are disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedDomains
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The ExcludedDomains parameter specifies an exception for impersonation protection that looks for the specified domains in the message sender. You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedSenders
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The ExcludedSenders parameter specifies an exception for impersonation protection that looks for the specified message sender. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImpersonationProtectionState
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The ImpersonationProtectionState parameter specifies the configuration of impersonation protection. Valid values are:

- Automatic: This is the default value in the default policy named Office365 AntiPhish Policy.

- Manual: This is the default value in custom policies that you create.

- Off

```yaml
Type: ImpersonationProtectionState
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxIntelligenceProtectionAction
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The MailboxIntelligenceProtectionAction parameter specifies what to do with messages that fail mailbox intelligence protection. Valid values are:

- NoAction: This is the default value.

- BccMessage: Add the recipients specified by the MailboxIntelligenceProtectionActionRecipients parameter to the Bcc field of the message.

- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.

- MoveToJmf: Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

- Redirect: Redirect the message to the recipients specified by the MailboxIntelligenceProtectionActionRecipients parameter.

```yaml
Type: ImpersonationAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxIntelligenceProtectionActionRecipients
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The MailboxIntelligenceProtectionActionRecipients parameter specifies the recipients to add to detected messages when the MailboxIntelligenceProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhishThresholdLevel
This setting is part of advanced settings and is only available in Advanced Threat Protection.

The PhishThresholdLevel parameter specifies the tolerance level that's used by machine learning in the handling of phishing messages. Valid values are:

- 1: Standard: This is the default value. The severity of the action that's taken on the message depends on the degree of confidence that the message is phishing (low, medium, high, or very high confidence). For example, messages that are identified as phishing with a very high degree of confidence have the most severe actions applied, while messages that are identified as phishing with a low degree of confidence have less severe actions applied.

- 2: Aggressive: Messages that are identified as phishing with a high degree of confidence are treated as if they were identified with a very high degree of confidence.

- 3: More aggressive: Messages that are identified as phishing with a medium or high degree of confidence are treated as if they were identified with a very high degree of confidence.

- 4: Most aggressive: Messages that are identified as phishing with a low, medium, or high degree of confidence are treated as if they were identified with a very high degree of confidence.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyTag
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimilarUsersSafetyTipsCustomText
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainActionRecipients
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The TargetedDomainActionRecipients parameter specifies the recipients to add to detected domain impersonation messages when the TargetedDomainProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainProtectionAction
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The TargetedDomainProtectionAction parameter specifies the action to take on detected domain impersonation messages. You specify the protected domains in the TargetedDomainsToProtect parameter. Valid values are:

- NoAction: This is the default value.

- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.

- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.

- MoveToJmf: Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainsToProtect
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The TargetedDomainsToProtect parameter specifies the domains that are included in domain impersonation protection when the EnableTargetedDomainsProtection parameter is set to $true.

You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUserActionRecipients
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The TargetedUserActionRecipients parameter specifies the replacement or additional recipients for detected user impersonation messages when the TargetedUserProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.


```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUserProtectionAction
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The TargetedUserProtectionAction parameter specifies the action to take on detected user impersonation messages. You specify the protected users in the TargetedUsersToProtect parameter. Valid values are:

- NoAction: This is the default value.

- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.

- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.

- MoveToJmf: Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUsersToProtect
This setting is part of impersonation protection and is only available in Advanced Threat Protection.

The TargetedUsersToProtect parameter specifies the users that are included in user impersonation protection when the EnableTargetedUserProtection parameter is set to $true.

This parameter uses the syntax: "DisplayName;EmailAddress".

- DisplayName specifies the display name of the user that could be a target of impersonation. This value can contain special characters.

- EmailAddress specifies the internal or external email address that's associated with the display name.

- You can specify multiple values by using the syntax: "DisplayName1;EmailAddress1","DisplayName2;EmailAddress2",..."DisplayNameN;EmailAddressN". The combination of DisplayName and EmailAddress needs to be unique for each value.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnusualCharactersSafetyTipsCustomText
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
Aliases: wi
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
