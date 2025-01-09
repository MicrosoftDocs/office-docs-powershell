---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/new-antiphishpolicy
applicable: Exchange Online, Exchange Online Protection
title: New-AntiPhishPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# New-AntiPhishPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-AntiPhishPolicy cmdlet to create antiphish policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-AntiPhishPolicy [-Name] <String>
 [-AdminDisplayName <String>]
 [-AuthenticationFailAction <SpoofAuthenticationFailAction>]
 [-Confirm]
 [-DmarcQuarantineAction <SpoofDmarcQuarantineAction>]
 [-DmarcRejectAction <SpoofDmarcRejectAction>]
 [-Enabled <Boolean>]
 [-EnableFirstContactSafetyTips <Boolean>]
 [-EnableMailboxIntelligence <Boolean>]
 [-EnableMailboxIntelligenceProtection <Boolean>]
 [-EnableOrganizationDomainsProtection <Boolean>]
 [-EnableSimilarDomainsSafetyTips <Boolean>]
 [-EnableSimilarUsersSafetyTips <Boolean>]
 [-EnableSpoofIntelligence <Boolean>]
 [-EnableTargetedDomainsProtection <Boolean>]
 [-EnableTargetedUserProtection <Boolean>]
 [-EnableUnauthenticatedSender <Boolean>]
 [-EnableUnusualCharactersSafetyTips <Boolean>]
 [-EnableViaTag <Boolean>]
 [-ExcludedDomains <MultiValuedProperty>]
 [-ExcludedSenders <MultiValuedProperty>]
 [-HonorDmarcPolicy <Boolean>]
 [-ImpersonationProtectionState <ImpersonationProtectionState>]
 [-MailboxIntelligenceProtectionAction <ImpersonationAction>]
 [-MailboxIntelligenceProtectionActionRecipients <MultiValuedProperty>]
 [-MailboxIntelligenceQuarantineTag <String>]
 [-MakeDefault]
 [-PhishThresholdLevel <Int32>]
 [-PolicyTag <String>]
 [-RecommendedPolicyType <RecommendedPolicyType>]
 [-SimilarUsersSafetyTipsCustomText <String>]
 [-SpoofQuarantineTag <String>]
 [-TargetedDomainActionRecipients <MultiValuedProperty>]
 [-TargetedDomainProtectionAction <ImpersonationAction>]
 [-TargetedDomainQuarantineTag <String>]
 [-TargetedDomainsToProtect <MultiValuedProperty>]
 [-TargetedUserActionRecipients <MultiValuedProperty>]
 [-TargetedUserProtectionAction <ImpersonationAction>]
 [-TargetedUserQuarantineTag <String>]
 [-TargetedUsersToProtect <MultiValuedProperty>]
 [-UnusualCharactersSafetyTipsCustomText <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Phishing messages contain fraudulent links or spoofed domains in an effort to get personal information from the recipients.

New policies that you create using this cmdlet aren't applied to users and aren't visible in admin centers. You need to use the AntiPhishPolicy parameter on the New-AntiPhishRule or Set-AntiPhishRule cmdlets to associate the policy with a rule.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-AntiPhishPolicy -Name "Research Quarantine" -AdminDisplayName "Research department policy" -EnableOrganizationDomainsProtection $true -EnableTargetedDomainsProtection $true -TargetedDomainsToProtect fabrikam.com -TargetedDomainProtectionAction Quarantine -EnableTargetedUserProtection $true -TargetedUsersToProtect "Mai Fujito;mfujito@fabrikam.com" -TargetedUserProtectionAction Quarantine -EnableMailboxIntelligenceProtection $true -MailboxIntelligenceProtectionAction Quarantine -EnableSimilarUsersSafetyTips $true -EnableSimilarDomainsSafetyTips $true -EnableUnusualCharactersSafetyTips $true
```

In Microsoft Defender for Office 365, this example creates and enables an antiphish policy named Research Quarantine with the following settings:

- The description is: Research department policy.
- Enables organization domains protection for all accepted domains, and targeted domains protection for fabrikam.com.
- Specifies Mai Fujito (mfujito@fabrikam.com) as a user to protect from impersonation.
- Enables mailbox intelligence protection, and specifies the quarantine action.
- Enables impersonation safety tips (impersonated domains, impersonated users, and unusual characters).

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the antiphish policy. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuthenticationFailAction
This setting is part of spoof protection.

The AuthenticationFailAction parameter specifies the action to take when the message fails composite authentication (a mixture of traditional SPF, DKIM, and DMARC email authentication checks and proprietary backend intelligence). Valid values are:

- MoveToJmf: This is the default value. Deliver the message to the Junk Email folder in the recipient's mailbox.
- Quarantine: Deliver the message to quarantine. Quarantined high confidence phishing messages are available only to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

```yaml
Type: SpoofAuthenticationFailAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DmarcQuarantineAction
This setting is part of spoof protection.

The DmarcQuarantineAction parameter specifies the action to take when a message fails DMARC checks and the sender's DMARC policy is `p=quarantine`. Valid values are:

- MoveToJmf: Deliver the message to the Junk Email folder in the recipient's mailbox.
- Quarantine: Deliver the message to quarantine. This is the default value.

This parameter is meaningful only when the HonorDmarcPolicy parameter is set to the value $true.

```yaml
Type: SpoofDmarcQuarantineAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DmarcRejectAction
This setting is part of spoof protection.

The DmarcRejectAction parameter specifies the action to take when a message fails DMARC checks and the sender's DMARC policy is `p=reject`. Valid values are:

- Quarantine: Deliver the message to quarantine.
- Reject: Reject the message. This is the default value.

This parameter is meaningful only when the HonorDmarcPolicy parameter is set to the value $true.

```yaml
Type: SpoofDmarcRejectAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
This parameter is reserved for internal Microsoft use.

To create a disabled anti-phishing policy (the combination of the antiphish rule and the associated antiphish policy), use `-Enabled $false` on the **New-AntiPhishRule** cmdlet.

To enable or disable an existing anti-phishing policy, use the **Enable-AntiPhishRule** or **Disable-AntiPhishRule** cmdlets.

In the output of the **Get-AntiPhishRule** cmdlet, whether the anti-phishing policy is enabled or disabled is visible in the State property.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableFirstContactSafetyTips
The EnableFirstContactSafetyTips parameter specifies whether to enable or disable the safety tip that's shown when recipients first receive an email from a sender or do not often receive email from a sender. Valid values are:

- $true: First contact safety tips are enabled.
- $false: First contact safety tips are disabled. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMailboxIntelligence
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableMailboxIntelligence parameter specifies whether to enable or disable mailbox intelligence, which is artificial intelligence (AI) that determines user email patterns with their frequent contacts. Mailbox intelligence helps distinguish between messages from legitimate and impersonated senders based on a recipient's previous communication history. Valid values are:

- $true: Mailbox intelligence is enabled. This is the default value.
- $false: Mailbox intelligence is disabled. The values of the EnableMailboxIntelligenceProtection and MailboxIntelligenceProtectionAction parameters are ignored.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableMailboxIntelligenceProtection specifies whether to enable or disable taking action for impersonation detections from mailbox intelligence results. Valid values are:

- $true: Take action for impersonation detections from mailbox intelligence results. Use the MailboxIntelligenceProtectionAction parameter to specify the action.
- $false: Don't take action for impersonation detections from mailbox intelligence results. The value of the MailboxIntelligenceProtectionAction parameter is ignored. This is the default value.

This parameter is meaningful only if the EnableMailboxIntelligence parameter is set to the value $true.

If you set this parameter to the value $false when the value of the EnableMailboxIntelligence parameter is $true, no action is taken on messages based on mailbox intelligence results (for example, lack of communication history). But, but mailbox intelligence can still help reduce impersonation false positives based on frequent contact information.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableOrganizationDomainsProtection parameter specifies whether to enable domain impersonation protection for all registered domains in the Microsoft 365 organization. Valid values are:

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableSimilarDomainsSafetyTips parameter specifies whether to enable the safety tip that's shown to recipients for domain impersonation detections. Valid values are:

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableSimilarUsersSafetyTips parameter specifies whether to enable the safety tip that's shown to recipients for user impersonation detections. Valid values are:

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

### -EnableSpoofIntelligence
This setting is part of spoof protection.

The EnableSpoofIntelligence parameter specifies whether to enable or disable antispoofing protection for the policy. Valid values are:

- $true: Antispoofing is enabled for the policy. This is the default and recommended value. Use the \*-TenantAllowBlockListSpoofItems, Get-SpoofIntelligenceInsight, and Get-SpoofMailReport cmdlets to view and specify the spoofed senders to allow or block.
- $false: Antispoofing is disabled for the policy. We only recommend this value if you have a domain that's protected by another email filtering service.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableTargetedDomainsProtection
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableTargetedDomainsProtection parameter specifies whether to enable domain impersonation protection for a list of specified domains. Valid values are:

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableTargetedUserProtection parameter specifies whether to enable user impersonation protection for a list of specified users. Valid values are:

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

The EnableUnauthenticatedSender parameter enables or disables unauthenticated sender identification in Outlook. Valid values are:

- $true: This is the default value. A question mark (?) is applied to the sender's photo if the message does not pass SPF or DKIM checks AND the message does not pass DMARC or composite authentication.
- $false: A question mark is never applied to the sender's photo.

To prevent these identifiers from being added to messages from specific senders, you have the following options:

- Allow the sender to spoof in the spoof intelligence policy. For instructions, see [Configure spoof intelligence in Microsoft 365](https://learn.microsoft.com/defender-office-365/anti-spoofing-spoof-intelligence).
- If you own the domain, configure email authentication for the domain. For more information, see [Configure email authentication for domains you own](https://learn.microsoft.com/defender-office-365/email-authentication-about).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUnusualCharactersSafetyTips
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The EnableUnusualCharactersSafetyTips parameter specifies whether to enable the safety tip that's shown to recipients for unusual characters in domain and user impersonation detections. Valid values are:

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

### -EnableViaTag
This setting is part of spoof protection.

The EnableViaTag parameter enables or disables adding the via tag to the From address in Outlook (chris@contso.com via fabrikam.com). Valid values are:

- $true: The via tag is added to the From address (the message sender that's displayed in email clients) if the domain in the From address is different from the domain in the DKIM signature or the MAIL FROM address. This is the default value.
- $false: The via tag is not added to the From address.

To prevent the via tag from being added to messages from specific senders, you have the following options:

- Allow the sender to spoof. For instructions, see [Configure spoof intelligence in Microsoft 365](https://learn.microsoft.com/defender-office-365/anti-spoofing-spoof-intelligence).
- If you own the domain, configure email authentication for the domain. For more information, see [Configure email authentication for domains you own](https://learn.microsoft.com/defender-office-365/email-authentication-about).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedDomains
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The ExcludedDomains parameter specifies an exception for impersonation protection that looks for the specified domains in the message sender. You can specify multiple domains separated by commas.

The maximum number of entries is approximately 1000.

**Note**: Domain entries don't include subdomains of the specified domain. You need to add an entry for each subdomain.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The ExcludedSenders parameter specifies an exception for impersonation protection that looks for the specified message sender. You can specify multiple email addresses separated by commas.

The maximum number of entries is approximately 1000.

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

### -HonorDmarcPolicy
This setting is part of spoof protection.

The HonorDmarcPolicy enables or disables using the sender's DMARC policy to determine what to do to messages that fail DMARC checks. Valid values are:

- $true: If a message fails DMARC and the sender's DMARC policy is `p=quarantine` or `p=reject`, the DmarcQuarantineAction or DmarcRejectAction parameters specify the action to take on the message. This is the default value.
- $false: If the message fails DMARC, ignore the action in the sender's DMARC policy. The AuthenticationFailAction parameter specifies the action to take on the message.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImpersonationProtectionState
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The MailboxIntelligenceProtectionAction parameter specifies what to do with messages that fail mailbox intelligence protection. Valid values are:

- NoAction: This is the default value. Note that this value has the same result as setting the EnableMailboxIntelligenceProtection parameter to $false when the EnableMailboxIntelligence parameter is $true.
- BccMessage: Add the recipients specified by the MailboxIntelligenceProtectionActionRecipients parameter to the Bcc field of the message.
- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.
- MoveToJmf: Deliver the message to the Junk Email folder in the recipient's mailbox.
- Quarantine: Deliver the message to quarantine. Quarantined high confidence phishing messages are available only to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.
- Redirect: Redirect the message to the recipients specified by the MailboxIntelligenceProtectionActionRecipients parameter.

This parameter is meaningful only if the EnableMailboxIntelligence and EnableMailboxIntelligenceProtection parameters are set to the value $true.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The MailboxIntelligenceProtectionActionRecipients parameter specifies the recipients to add to detected messages when the MailboxIntelligenceProtectionAction parameter is set to the value Redirect or BccMessage.

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

### -MailboxIntelligenceQuarantineTag
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The MailboxIntelligenceQuarantineTag specifies the quarantine policy that's used on messages that are quarantined by mailbox intelligence (the MailboxIntelligenceProtectionAction parameter value is Quarantine). You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

If you don't use this parameter, the built-in quarantine policy named DefaultFullAccessPolicy (no notifications) or NotificationEnabledPolicy (if available in your organization) is used. This quarantine policy enforces the historical capabilities for messages that were quarantined by mailbox intelligence impersonation protection as described in the table [here](https://learn.microsoft.com/defender-office-365/quarantine-end-user).

To view the list of available quarantine policies, run the following command: `Get-QuarantinePolicy | Format-List Name,EndUser*,ESNEnabled`.

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

### -MakeDefault
The MakeDefault switch makes this antiphish policy the default antiphish policy. You don't need to specify a value with this switch.

The default antiphish policy is applied to everyone (no corresponding antiphish rule), can't be renamed, and has the unmodifiable priority value Lowest (the default policy is always applied last).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhishThresholdLevel
This setting is part of advanced settings and is available only in Microsoft Defender for Office 365.

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

### -RecommendedPolicyType
The RecommendedPolicyType parameter is used for Standard and Strict policy creation as part of [Preset security policies](https://learn.microsoft.com/defender-office-365/preset-security-policies). Don't use this parameter yourself.

```yaml
Type: RecommendedPolicyType
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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

### -SpoofQuarantineTag
The SpoofQuarantineTag specifies the quarantine policy that's used on messages that are quarantined by spoof intelligence (the AuthenticationFailAction parameter value is Quarantine). You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

If you don't use this parameter, the built-in quarantine policy named DefaultFullAccessPolicy (no notifications) or NotificationEnabledPolicy (if available in your organization) is used. This quarantine policy enforces the historical capabilities for messages that were quarantined by spoof intelligence protection as described in the table [here](https://learn.microsoft.com/defender-office-365/quarantine-end-user).

To view the list of available quarantine policies, run the following command: `Get-QuarantinePolicy | Format-List Name,EndUser*,ESNEnabled`.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainActionRecipients
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The TargetedDomainActionRecipients parameter specifies the recipients to add to detected domain impersonation messages when the TargetedDomainProtectionAction parameter is set to the value Redirect or BccMessage.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The TargetedDomainProtectionAction parameter specifies the action to take on detected domain impersonation messages. You specify the protected domains in the TargetedDomainsToProtect parameter. Valid values are:

- NoAction: This is the default value.
- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.
- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.
- MoveToJmf: Deliver the message to the Junk Email folder in the recipient's mailbox.
- Quarantine: Deliver the message to quarantine. Quarantined high confidence phishing messages are available only to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.
- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter.

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

### -TargetedDomainQuarantineTag
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The TargetedDomainQuarantineTag specifies the quarantine policy that's used on messages that are quarantined by domain impersonation protection (the TargetedDomainProtectionAction parameter value is Quarantine). You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

If you don't use this parameter, the built-in quarantine policy named DefaultFullAccessPolicy (no notifications) or NotificationEnabledPolicy (if available in your organization) is used. This quarantine policy enforces the historical capabilities for messages that were quarantined by domain impersonation protection as described in the table [here](https://learn.microsoft.com/defender-office-365/quarantine-end-user).

To view the list of available quarantine policies, run the following command: `Get-QuarantinePolicy | Format-List Name,EndUser*,ESNEnabled`.

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

### -TargetedDomainsToProtect
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The TargetedUserActionRecipients parameter specifies the replacement or additional recipients for detected user impersonation messages when the TargetedUserProtectionAction parameter is set to the value Redirect or BccMessage.

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
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The TargetedUserProtectionAction parameter specifies the action to take on detected user impersonation messages. You specify the protected users in the TargetedUsersToProtect parameter. Valid values are:

- NoAction: This is the default value.
- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.
- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.
- MoveToJmf: Deliver the message to the Junk Email folder in the recipient's mailbox.
- Quarantine: Deliver the message to quarantine. Quarantined high confidence phishing messages are available only to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.
- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter.

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

### -TargetedUserQuarantineTag
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The TargetedUserQuarantineTag specifies the quarantine policy that's used on messages that are quarantined by user impersonation protection (the TargetedUserProtectionAction parameter value is Quarantine). You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

Quarantine policies define what users are able to do to quarantined messages based on why the message was quarantined and quarantine notification settings. For more information about quarantine policies, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

If you don't use this parameter, the built-in quarantine policy named DefaultFullAccessPolicy (no notifications) or NotificationEnabledPolicy (if available in your organization) is used. This quarantine policy enforces the historical capabilities for messages that were quarantined by user impersonation protection as described in the table [here](https://learn.microsoft.com/defender-office-365/quarantine-end-user).

To view the list of available quarantine policies, run the following command: `Get-QuarantinePolicy | Format-List Name,EndUser*,ESNEnabled`.

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

### -TargetedUsersToProtect
This setting is part of impersonation protection and is available only in Microsoft Defender for Office 365.

The TargetedUsersToProtect parameter specifies the users that are included in user impersonation protection when the EnableTargetedUserProtection parameter is set to $true.

This parameter uses the syntax: "DisplayName;EmailAddress".

- DisplayName specifies the display name of the user that could be a target of impersonation. This value can contain special characters.
- EmailAddress specifies the internal or external email address that's associated with the display name.
- You can specify multiple values by using the syntax: `"DisplayName1;EmailAddress1","DisplayName2;EmailAddress2",..."DisplayNameN;EmailAddressN"`. The combination of DisplayName and EmailAddress needs to be unique for each value.

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
