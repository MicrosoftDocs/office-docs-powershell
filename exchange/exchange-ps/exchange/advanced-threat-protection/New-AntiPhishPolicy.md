---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/advanced-threat-protection/new-antiphishpolicy
applicable: Exchange Online, Exchange Online Protection
title: New-AntiPhishPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps || eop-ps"
---

# New-AntiPhishPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the New-AntiPhishPolicy cmdlet to create antiphishing policies in your cloud-based organization.

> [!NOTE]
> We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell. For instructions, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

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

New antiphishing policies aren't valid and aren't applied until you add an antiphishing rule to the policy by using the New-AntiPhishRule cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-AntiPhishPolicy -Name "Monitor Policy" -AdminDisplayName "Default monitoring policy" -Enabled $true -EnableOrganizationDomainsProtection $true -EnableTargetedDomainsProtection $true -TargetedDomainsToProtect fabrikam.com -TargetedUsersToProtect "Mai Fujito;mfujito@fabrikam.com" -EnableMailboxIntelligence $true -EnableSimilarUsersSafetyTips $false -EnableSimilarDomainsSafetyTips $false -TargetedDomainProtectionAction BccMessage -TargetedUserProtectionAction BccMessage -EnableTargetedUserProtection $true -TargetedDomainActionRecipients reviewer@contoso.com -TargetedUserActionRecipients reviewer@contoso.com
```

This example creates and enables an antiphishing policy named Monitor Policy with the following settings:
- Admin display name: Default monitoring policy

- Enables organization domains protection for all accepted domains, and targeted domains protection for the domain fabrikam.com.

- Specifies Mai Fujito (mfujito@fabrikam.com) as the user to protect from impersonation.

- Enables mailbox intelligence.

- Disables safety tips and set the notification actions to Bcc the email address reviewer@contoso.com.

### Example 2
```powershell
New-AntiPhishPolicy -Name "Test Policy" -EnableTargetedDomainsProtection $true -AdminDisplayName "Default policy for all users" -Enabled $true -EnableOrganizationDomainsProtection $true -TargetedDomainsToProtect fabrikam.com -EnableTargetedUserProtection $true -TargetedUsersToProtect "Rick Hoferrhofer@fabrikam.com" -EnableMailboxIntelligence $true -EnableSimilarUsersSafetyTips $true -EnableSimilarDomainsSafetyTips $true -TargetedDomainProtectionAction Quarantine -TargetedUserProtectionAction Quarantine
```

This example creates and enables an antiphishing policy named Test Policy with the following settings:

- Admin display name: Default policy for all users

- Enables organization domains protection for all accepted domains, and targeted domains protection for the domain fabrikam.com.

- Specifies Rick Hofer (rhofer@fabrikam.com) as the user to protect from impersonation.

- Enables mailbox intelligence.

- Enables safety tips and set the notification actions to quarantine messages.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the antiphishing policy. If the value contains spaces, enclose the value in quotation marks (").

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
The AuthenticationFailAction parameter specifies the action to take when the message fails composite authentication. Valid values are:

- MoveToJmf: Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes in Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

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

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

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

### -EnableAntispoofEnforcement
The EnableAntispoofEnforcement parameter specifies whether to enable or disable antispoofing protection for the policy. Valid values are:

- $true: Antispoofing is enabled for the policy. This is the default value, and is recommended.

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

### -Enabled
The Enabled parameter specifies whether the policy is enabled. Valid values are:

- $true: The policy is enabled. This is the default value.

- $false: The policy is disabled.

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
The EnableMailboxIntelligence parameter specifies whether to enable or disable mailbox intelligence (the first contact graph) in domain and user impersonation protection. Valid values are:

- $true: Use mailbox intelligence in domain and user impersonation protection.

- $false: Don't use mailbox intelligence in domain and user impersonation protection. This is the default value.

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

### -EnableMailboxIntelligenceProtection
The EnableMailboxIntelligenceProtection specifies whether to enable or disable intelligence based impersonation protection. Valid values are:

- $true: Enable intelligence based impersonation protection.

- $false: Don't enable intelligence based impersonation protection. This is the default value.

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

### -EnableOrganizationDomainsProtection
The EnableOrganizationDomainsProtection parameter specifies whether to enable domain impersonation protection for all registered domains in the Office 365 organization. Valid values are:

- $true: Domain impersonation protection is enabled for all registered domains in the Office 365 organization.

- $false: Domain impersonation protection isn't enabled for all registered domains in the Office 365 organization. This is the default value. You can enable domain impersonation protection for specific domains by using the EnableTargetedDomainsProtection and TargetedDomainsToProtect parameters.

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

### -EnableSimilarDomainsSafetyTips
The EnableSimilarDomainsSafetyTips parameter specifies whether to enable safety tips that are shown to recipients in messages for domain impersonation detections. Valid values are:

- $true: Safety tips for similar domains are enabled.

- $false: Safety tips for similar domains are disabled. This is the default value.

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

### -EnableSimilarUsersSafetyTips
The EnableSimilarUsersSafetyTips parameter specifies whether to enable safety tips that are shown to recipients in messages for user impersonation detections. Valid values are:

- $true: Safety tips for similar users are enabled.

- $false: Safety tips for similar users are disabled. This is the default value.

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
The EnableTargetedDomainsProtection parameter specifies whether to enable domain impersonation protection for a list of specified domains. Valid values are:

- $true: Domain impersonation protection is enabled for the domains specified by the TargetedDomainsToProtect parameter.

- $false: The TargetedDomainsToProtect parameter isn't used. This is the default value.

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

### -EnableTargetedUserProtection
The EnableTargetedUserProtection parameter specifies whether to enable user impersonation protection for the users specified by the TargetedUsersToProtect parameter. Valid values are:

- $true: User impersonation protection is enabled for the specified users.

- $false: The TargetedUsersToProtect parameter isn't used. This is the default value.

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

### -EnableUnauthenticatedSender
The EnableUnauthenticatedSender parameter specifies whether to apply a "?" symbol in Outlook's sender card if the sender fails authentication checks. Valid values are:

- $true: Apply the "?" symbol.

- $false: Do not apply the "?" symbol.

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
The EnableUnusualCharactersSafetyTips parameter specifies whether to enable safety tips that are shown to recipients in messages for unusual characters in domain and user impersonation detections. Valid values are:

- $true: Safety tips for unusual characters are enabled.

- $false: Safety tips for unusual characters are disabled. This is the default value.

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
The ExcludedDomains parameter specifies trusted domains that are excluded from scanning by antiphishing protection. You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludedSenders
The ExcludedSenders parameter specifies a list of trusted sender email addresses that are excluded from scanning by antiphishing protection. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
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
The ImpersonationProtectionState parameter specifies the configuration of impersonation protection. Valid values are:

- Automatic

- Manual (This is the default value)

- Off

```yaml
Type: ImpersonationProtectionState
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxIntelligenceProtectionAction
The MailboxIntelligenceProtectionAction parameter specifies what to do with messages that fail mailbox intelligence protection. Valid values are:

- NoAction (This is the default value)

- BccMessage: Add the recipients specified by the MailboxIntelligenceProtectionActionRecipients parameter to the Bcc field of the message.

- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.

- MoveToJmf: Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes in Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

- Redirect: Redirect the message to the recipients specified by the MailboxIntelligenceProtectionActionRecipients parameter.

```yaml
Type: ImpersonationAction
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxIntelligenceProtectionActionRecipients
The MailboxIntelligenceProtectionActionRecipients parameter specifies the recipients to add to detected messages when the MailboxIntelligenceProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
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
The PhishThresholdLevel parameter specifies the tolerance level that's used by machine learning in the handling of phishing messages. Valid values are:

- 1: Standard (this is the default value)

- 2: Aggressive

- 3: More aggressive

- 4: Most aggressive

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainActionRecipients
The TargetedDomainActionRecipients parameter specifies the recipients to add to detected domain impersonation messages when the TargetedDomainProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainProtectionAction
The TargetedDomainProtectionAction parameter specifies the action to take on detected domain impersonation messages for the domains specified by the TargetedDomainsToProtect parameter. Valid values are:

- NoAction: This is the default value.

- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.

- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.

- MoveToJmf: Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes in Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedDomainsToProtect
The TargetedDomainsToProtect parameter specifies the domains that are included in domain impersonation protection when the EnableTargetedDomainsProtection parameter is set to $true.

You can specify multiple domains separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUserActionRecipients
The TargetedUserActionRecipients parameter specifies the replacement or additional recipients for detected user impersonation messages when the TargetedUserProtectionAction parameter is set to the value Redirect or BccMessage.

A valid value for this parameter is an email address. You can specify multiple email addresses separated by commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUserProtectionAction
The TargetedUserProtectionAction parameter specifies the action to take on detected messages for the users specified by the TargetedUsersToProtect parameter. Valid values are:

- NoAction (This is the default value)

- BccMessage: Add the recipients specified by the TargetedDomainActionRecipients parameter to the Bcc field of the message.

- Delete: Delete the message during filtering. Use caution when selecting this value, because you can't recover the deleted message.

- MoveToJmf: Deliver the message to the recipient's mailbox, and move the message to the Junk Email folder. The message is only moved if the junk email rule is enabled on the mailbox (it's enabled by default). For more information, see [Configure junk email settings on Exchange Online mailboxes in Office 365](https://docs.microsoft.com/microsoft-365/security/office-365-security/configure-junk-email-settings-on-exo-mailboxes).

- Quarantine: Move the message to quarantine. Quarantined high confidence phishing messages are only available to admins. As of April 2020, quarantined phishing messages are available to the intended recipients.

- Redirect: Redirect the message to the recipients specified by the TargetedDomainActionRecipients parameter.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetedUsersToProtect
TThe TargetedUsersToProtect parameter specifies the users that are included in user impersonation protection when the EnableTargetedUserProtection parameter is set to $true.

This parameter uses the syntax "DisplayName;EmailAddress".

- DisplayName specifies the display name of the user that could be a target of impersonation. This value can contain special characters.

- EmailAddress specifies the internal or external email address that's associated with the display name.

- You can specify multiple value sets by using the syntax: "DisplayName1;EmailAddress1","DisplayName2;EmailAddress2",..."DisplayNameN;EmailAddressN". The combination of DisplayName and EmailAddress needs to be unique for each value set.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
