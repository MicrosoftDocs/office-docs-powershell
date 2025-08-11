---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/set-mailuser
schema: 2.0.0
title: Set-MailUser
---

# Set-MailUser

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the Set-MailUser cmdlet to modify mail users. Mail users (also known as mail-enabled users) have email addresses and accounts in the Exchange organization, but they don't have Exchange mailboxes.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Default
```
Set-MailUser [-Identity] <MailUserIdParameter>
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-ArchiveGuid <Guid>]
 [-ArchiveName <MultiValuedProperty>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-EmailAddressPolicyEnabled <Boolean>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-IgnoreDefaultScope]
 [-ImmutableId <String>]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MaxReceiveSize <MultiValuedProperty>]
 [-MaxSendSize <MultiValuedProperty>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RecoverableItemsQuota <MultiValuedProperty>]
 [-RecoverableItemsWarningQuota <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemovePicture]
 [-RemoveSpokenName]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-SamAccountName <String>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-SkipDualWrite]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserPrincipalName <String>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### EnableLitigationHoldForMigration
```
Set-MailUser [-Identity] <MailUserIdParameter> [-EnableLitigationHoldForMigration]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MailboxRegion <String>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### ExcludeFromAllOrgHolds
```
Set-MailUser [-Identity] <MailUserIdParameter> [-ExcludeFromAllOrgHolds]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-LOBAppAccount]
 [-JournalArchiveAddress <SmtpAddress>]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MailboxRegion <String>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### ExcludeFromOrgHolds
```
Set-MailUser [-Identity] <MailUserIdParameter> [-ExcludeFromOrgHolds <String[]>]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RecalculateInactiveMailUser
```
Set-MailUser [-Identity] <MailUserIdParameter> [-RecalculateInactiveMailUser]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveComplianceTagHoldApplied
```
Set-MailUser [-Identity] <MailUserIdParameter> [-RemoveComplianceTagHoldApplied]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveDelayHoldApplied
```
Set-MailUser [-Identity] <MailUserIdParameter> [-RemoveDelayHoldApplied]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MailboxRegion <String>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveDelayReleaseHoldApplied
```
Set-MailUser [-Identity] <MailUserIdParameter> [-RemoveDelayReleaseHoldApplied]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MailboxRegion <String>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveDisabledArchive
```
Set-MailUser [-Identity] <MailUserIdParameter> [-RemoveDisabledArchive]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailboxRegion <String>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveLitigationHoldEnabled
```
Set-MailUser [-Identity] <MailUserIdParameter> [-RemoveLitigationHoldEnabled]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MailboxRegion <String>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### RemoveOrphanedHolds
```
Set-MailUser [-Identity] <MailUserIdParameter> [-RemoveOrphanedHolds <String[]>]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CreateDTMFMap <Boolean>]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <MultiValuedProperty>]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-HVEAccount]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MailboxRegion <String>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <MultiValuedProperty>]
 [-RejectMessagesFrom <MultiValuedProperty>]
 [-RejectMessagesFromDLMembers <MultiValuedProperty>]
 [-RejectMessagesFromSendersOrMembers <MultiValuedProperty>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SecondaryAddress <String>]
 [-SecondaryDialPlan <UMDialPlanIdParameter>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UMDtmfMap <MultiValuedProperty>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

### UnblockForwardSyncPostCrossTenantMigration
```
Set-MailUser [-Identity] <MailUserIdParameter> [-UnblockForwardSyncPostCrossTenantMigration]
 [-AcceptMessagesOnlyFrom <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromDLMembers <MultiValuedProperty>]
 [-AcceptMessagesOnlyFromSendersOrMembers <MultiValuedProperty>]
 [-Alias <String>]
 [-ArchiveGuid <Guid>]
 [-BypassModerationFromSendersOrMembers <MultiValuedProperty>]
 [-Confirm]
 [-CustomAttribute1 <String>]
 [-CustomAttribute10 <String>]
 [-CustomAttribute11 <String>]
 [-CustomAttribute12 <String>]
 [-CustomAttribute13 <String>]
 [-CustomAttribute14 <String>]
 [-CustomAttribute15 <String>]
 [-CustomAttribute2 <String>]
 [-CustomAttribute3 <String>]
 [-CustomAttribute4 <String>]
 [-CustomAttribute5 <String>]
 [-CustomAttribute6 <String>]
 [-CustomAttribute7 <String>]
 [-CustomAttribute8 <String>]
 [-CustomAttribute9 <String>]
 [-DataEncryptionPolicy <DataEncryptionPolicyIdParameter>]
 [-DisplayName <String>]
 [-EmailAddresses <ProxyAddressCollection>]
 [-ExchangeGuid <Guid>]
 [-ExtensionCustomAttribute1 <MultiValuedProperty>]
 [-ExtensionCustomAttribute2 <MultiValuedProperty>]
 [-ExtensionCustomAttribute3 <MultiValuedProperty>]
 [-ExtensionCustomAttribute4 <MultiValuedProperty>]
 [-ExtensionCustomAttribute5 <MultiValuedProperty>]
 [-ExternalEmailAddress <ProxyAddress>]
 [-FederatedIdentity <String>]
 [-ForceUpgrade]
 [-GrantSendOnBehalfTo <RecipientIdParameter[]>]
 [-HVEAccount]
 [-HiddenFromAddressListsEnabled <Boolean>]
 [-ImmutableId <String>]
 [-JournalArchiveAddress <SmtpAddress>]
 [-LOBAppAccount]
 [-MacAttachmentFormat <MacAttachmentFormat>]
 [-MailTip <String>]
 [-MailTipTranslations <MultiValuedProperty>]
 [-MailboxRegion <String>]
 [-MaxReceiveSize <Unlimited>]
 [-MaxSendSize <Unlimited>]
 [-MessageBodyFormat <MessageBodyFormat>]
 [-MessageFormat <MessageFormat>]
 [-MicrosoftOnlineServicesID <SmtpAddress>]
 [-ModeratedBy <SmtpAddress>]
 [-ModerationEnabled <Boolean>]
 [-Name <String>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RecipientLimits <Unlimited>]
 [-RejectMessagesFrom <RecipientIdParameter[]>]
 [-RejectMessagesFromDLMembers <RecipientIdParameter[]>]
 [-RejectMessagesFromSendersOrMembers <RecipientIdParameter[]>]
 [-RemoveMailboxProvisioningConstraint]
 [-RequireSenderAuthenticationEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SimpleDisplayName <String>]
 [-UseMapiRichTextFormat <UseMapiRichTextFormat>]
 [-UsePreferMessageFormat <Boolean>]
 [-UserCertificate <MultiValuedProperty>]
 [-UserSMimeCertificate <MultiValuedProperty>]
 [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-MailUser -Identity "John Woods" -ExternalEmailAddress john@tailspintoys.com
```

This example modifies the external email address for the mail user named John Woods. The original external email address isn't kept as a proxy address.

## PARAMETERS

### -Identity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Identity parameter specifies the mail user that you want to modify. You can use any value that uniquely identifies the mail user. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

```yaml
Type: MailUserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AcceptMessagesOnlyFrom

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFrom parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove senders without affecting other existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

The senders you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -AcceptMessagesOnlyFromDLMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFromDLMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group are allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: `Group1,Group2,...GroupN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Group1","Group2",..."GroupN"`.

To add or remove groups without affecting other existing entries, use the following syntax: `@{Add="Group1","Group2"...; Remove="Group3","Group4"...}`.

The groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFromSendersOrMembers property. Therefore, you can't use the AcceptMessagesOnlyFromDLMembers and AcceptMessagesOnlyFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

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

### -AcceptMessagesOnlyFromSendersOrMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The AcceptMessagesOnlyFromSendersOrMembers parameter specifies who is allowed to send messages to this recipient. Messages from other senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group are allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove individual senders or groups without affecting other existing entries, use the AcceptMessagesOnlyFrom and AcceptMessageOnlyFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the AcceptMessagesOnlyFrom and AcceptMessagesOnlyFromDLMembers properties, respectively. Therefore, you can't use the AcceptMessagesOnlyFromSendersOrMembers parameter and the AcceptMessagesOnlyFrom or AcceptMessagesOnlyFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -Alias

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value. The maximum length is 64 characters.

The Alias value can contain letters, numbers and the following characters:

- !, #, %, \*, +, -, /, =, ?, ^, \_, and ~.
- $, &, ', \`, {, }, and \| need to be escaped (for example ``-Alias what`'snew``) or the entire value enclosed in single quotation marks (for example, `-Alias 'what'snew'`). The & character is not supported in the Alias value for Microsoft Entra Connect synchronization.
- Periods (.) must be surrounded by other valid characters (for example, `help.desk`).
- Unicode characters U+00A1 to U+00FF.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (`alias@domain`). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to `oe` in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.onmicrosoft.com results in the Alias property value `helpdesk`.
- Recipients without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

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

### -ArbitrationMailbox

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox. For example:

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
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveGuid

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassModerationFromSendersOrMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The BypassModerationFromSendersOrMembers parameter specifies who is allowed to send messages to this moderated recipient without approval from a moderator. Valid values for this parameter are individual senders and groups in your organization. Specifying a group means all members of the group are allowed to send messages to this recipient without approval from a moderator.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple senders and overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove one or more senders without affecting any existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

This parameter is meaningful only when moderation is enabled for the recipient. By default, this parameter is blank ($null), which means messages from all senders other than the designated moderators are moderated. When a moderator sends a message to this recipient, the message is isn't moderated. In other words, you don't need to use this parameter to include the moderators.

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

### -CreateDTMFMap

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The CreateDTMFMap parameter specifies whether to create a dual-tone multiple-frequency (DTMF) map for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Valid values are:

- $true: A DTMF map is created for the recipient. This value is the default.
- $false: A DTMF map isn't created for the recipient.

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

### -CustomAttribute1

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute10

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute10 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute11

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute11 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute12

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute12 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute13

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute13 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute14

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute14 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute15

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute15 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute2

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute3

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute4

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute5

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute6

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute6 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute7

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute7 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute8

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute8 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -CustomAttribute9

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the CustomAttribute9 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. The maximum length is 1024 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -DataEncryptionPolicy

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The DataEncryptionPolicy parameter specifies the data encryption policy that's applied to the mail user. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

You can use the Get-DataEncryptionPolicy cmdlet to view the available policies.

```yaml
Type: DataEncryptionPolicyIdParameter
Parameter Sets: EnableLitigationHoldForMigration, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailUser, RemoveComplianceTagHoldApplied, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveLitigationHoldEnabled, RemoveOrphanedHolds, UnblockForwardSyncPostCrossTenantMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The DisplayName parameter specifies the display name of the mail user. The display name is visible in the Exchange admin center, address lists, and Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddresses

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The EmailAddresses parameter specifies all email addresses (proxy addresses) for the recipient, including the primary SMTP address. In on-premises Exchange organizations, the primary SMTP address and other proxy addresses are typically set by email address policies. However, you can use this parameter to configure other proxy addresses for the recipient. For more information, see [Email address policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/email-address-policies/email-address-policies).

Valid syntax for this parameter is `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`. The optional `Type` value specifies the type of email address. Examples of valid values include:

- SMTP: The primary SMTP address. You can use this value only once in a command.
- smtp: Other SMTP email addresses.
- X400: X.400 addresses in on-premises Exchange.
- X500: X.500 addresses in on-premises Exchange.

If you don't include a Type value for an email address, the address is assumed to be an SMTP email address. The syntax of SMTP email addresses is validated, but the syntax of other email address types isn't validated. Therefore, you need to verify that any custom addresses are formatted correctly.

To specify the primary SMTP email address, you can use any of the following methods:

- Use the Type value SMTP on the address.
- The first email address when you don't use any Type values, or when you use multiple lowercase smtp Type values.
- Use the PrimarySmtpAddress parameter instead. You can't use the EmailAddresses parameter and the PrimarySmtpAddress parameter in the same command.

The PrimarySmtpAddress parameter updates the primary email address and WindowsEmailAddress property to the same value.

To replace all existing proxy email addresses with the values you specify, use the following syntax: `"Type:EmailAddress1","Type:EmailAddress2",..."Type:EmailAddressN"`.

To add or remove specify proxy addresses without affecting other existing values, use the following syntax: `@{Add="Type:EmailAddress1","Type:EmailAddress2",...; Remove="Type:EmailAddress3","Type:EmailAddress4",...}`.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddressPolicyEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The EmailAddressPolicyEnabled parameter specifies whether to apply email address policies to this recipient. Valid values are:

- $true: Email address policies are applied to this recipient. This value is the default.
- $false: Email address policies aren't applied to this recipient.

```yaml
Type: Boolean
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableLitigationHoldForMigration

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The EnableLitigationHoldForMigration switch is used in cross-tenant mailbox migrations to increase the quota on the Recoverable Items folder to 100 GB (and also enable Litigation Hold) prior to migration. You don't need to specify a value with this switch.

This feature is not available in hybrid tenants.

```yaml
Type: SwitchParameter
Parameter Sets: EnableLitigationHoldForMigration
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeGuid

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFromAllOrgHolds

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The ExcludeFromAllOrgHolds switch specifies whether to exclude the soft-deleted mail user from all organization-wide Microsoft 365 retention policies. You don't need to specify a value with this switch.

When you use this switch, use one of the following values to uniquely identify the soft-deleted mail user in the Identity parameter:

- DistinguishedName
- Guid
- ExchangeGuid

```yaml
Type: SwitchParameter
Parameter Sets: ExcludeFromAllOrgHolds
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExcludeFromOrgHolds

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill ExcludeFromOrgHolds Description }}

```yaml
Type: String[]
Parameter Sets: ExcludeFromOrgHolds
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtensionCustomAttribute1

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute1 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute1 -eq 'Value'"` returns a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute2

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute2 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute2 -eq 'Value'"` returns a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute3

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute3 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute3 -eq 'Value'"` returns a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute4

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute4 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute4 -eq 'Value'"` returns a match if the property _contains_ the specified value.

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

### -ExtensionCustomAttribute5

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter specifies a value for the ExtensionCustomAttribute5 property on the recipient. You can use this property to store custom information about the recipient, and to identify the recipient in filters. You can specify up to 1300 values separated by commas.

To enter multiple values that overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

Although this is a multivalued property, the filter `"ExtensionCustomAttribute5 -eq 'Value'"` returns a match if the property _contains_ the specified value.

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

### -ExternalEmailAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The ExternalEmailAddress parameter specifies the target email address of the mail contact or mail user. By default, this value is used as the primary email address of the mail contact or mail user.

In on-premises environments, you can use the PrimarySMTPAddress parameter to set the primary email address to a different value. However, we recommend this only in cross-forest environments.

When you use the ExternalEmailAddress parameter to change the external email address, the old external email address isn't kept as a proxy address.

```yaml
Type: ProxyAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FederatedIdentity

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The FederatedIdentity parameter associates an on-premises Active Directory user with a user in the cloud.

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

### -ForceUpgrade

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The ForceUpgrade switch suppresses the confirmation message that appears if the object was created in a previous version of Exchange. You don't need to specify a value with this switch.

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

### -GrantSendOnBehalfTo

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The GrantSendOnBehalfTo parameter specifies who can send on behalf of this mail user. Although messages sent on behalf of the mail user clearly show the sender in the From field (`<Sender> on behalf of <Mail user>`, replies to these messages are delivered to the mail user, not the sender.

The sender you specify for this parameter must a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the sender. For example:

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

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

By default, this parameter is blank, which means no one else has permission to send on behalf of this mail user.

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

### -HiddenFromAddressListsEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The HiddenFromAddressListsEnabled parameter specifies whether this recipient is visible in address lists. Valid values are:

- $true: The recipient isn't visible in address lists.
- $false: The recipient is visible in address lists. This value is the default.

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

### -HVEAccount

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The HVEAccount switch specifies that this mail user account is specifically used for the [High volume email service](https://learn.microsoft.com/exchange/mail-flow-best-practices/high-volume-mails-m365). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: EnableLitigationHoldForMigration, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailUser, RemoveComplianceTagHoldApplied, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveLitigationHoldEnabled, RemoveOrphanedHolds, UnblockForwardSyncPostCrossTenantMigration
Aliases:

Position: Named
Default value: None
Required: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange PowerShell session, and to use the entire forest as the scope. You don't need to specify a value with this switch.

This switch enables the command to access Active Directory objects that aren't currently available in the default scope, but also introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.
- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.

```yaml
Type: SwitchParameter
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmutableId

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The ImmutableId parameter is used by GAL synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable ID based upon the mailbox's ExchangeGUID and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com.

You need to set the ImmutableId parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than ExchangeGUID for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premises Exchange deployment scenario.

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

### -JournalArchiveAddress

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SmtpAddress
Parameter Sets: EnableLitigationHoldForMigration, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailUser, RemoveComplianceTagHoldApplied, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveLitigationHoldEnabled, RemoveOrphanedHolds, UnblockForwardSyncPostCrossTenantMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LOBAppAccount

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: EnableLitigationHoldForMigration, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailUser, RemoveComplianceTagHoldApplied, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveLitigationHoldEnabled, RemoveOrphanedHolds, UnblockForwardSyncPostCrossTenantMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MacAttachmentFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The MacAttachmentFormat parameter specifies the Apple Macintosh operating system attachment format to use for messages sent to the mail contact or mail user. Valid values are:

- BinHex (default value)
- UuEncode
- AppleSingle
- AppleDouble

The MacAttachmentFormat and MessageFormat parameters are interdependent:

- MessageFormat is Text: MacAttachmentFormat can be BinHex or UuEncode.
- MessageFormat is Mime: MacAttachmentFormat can be BinHex, AppleSingle, or AppleDouble.

```yaml
Type: MacAttachmentFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: EnableLitigationHoldForMigration, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailUser, RemoveComplianceTagHoldApplied, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveLitigationHoldEnabled, RemoveOrphanedHolds, UnblockForwardSyncPostCrossTenantMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTip

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The MailTip parameter specifies the custom MailTip text for this recipient. The MailTip is shown to senders when they start drafting an email message to this recipient. If the value contains spaces, enclose the value in quotation marks (").

When you add a MailTip to a recipient, two things happen:

- HTML tags are automatically added to the text. For example, if you enter the text: "This mailbox is not monitored", the MailTip automatically becomes: `<html><body>This mailbox is not monitored</body></html>`. Additional HTML tags aren't supported, and the length of the MailTip can't exceed 175 displayed characters.
- The text is automatically added to the MailTipTranslations property of the recipient as the default value: `default:<MailTip text>`. If you modify the MailTip text, the default value is automatically updated in the MailTipTranslations property, and vice-versa.

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

### -MailTipTranslations

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The MailTipTranslations parameter specifies additional languages for the custom MailTip text that's defined by the MailTip parameter. HTML tags are automatically added to the MailTip translation, additional HTML tags aren't supported, and the length of the MailTip translation can't exceed 175 displayed characters.

To add or remove MailTip translations without affecting the default MailTip or other MailTip translations, use the following syntax:

`@{Add="Culture1:Localized text 1","\Culture2:Localized text 2"...; Remove="Culture3:Localized text 3","Culture4:Localized text 4"...}`.

CultureN is a valid ISO 639 two-letter culture code that's associated with the language.

For example, suppose this recipient currently has the MailTip text: "This mailbox is not monitored." To add the Spanish translation, use the following value for this parameter: `@{Add="ES:Esta caja no se supervisa."}`.

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

### -MaxReceiveSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxReceiveSize parameter specifies the maximum size of a message that can be sent to the mail user. Messages larger than the maximum size are rejected.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited. The default value is unlimited, which indicates the maximum size is imposed elsewhere (for example, organization, server, or connector limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxSendSize

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The MaxSendSize parameter specifies the maximum size of a message that can be sent by the mail user.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

A valid value is a number up to 1.999999 gigabytes (2147483647 bytes) or the value unlimited. The default value is unlimited, which indicates the maximum size is imposed elsewhere (for example, organization, server, or connector limits).

Base64 encoding increases the size of messages by approximately 33%, so specify a value that's 33% larger than the actual maximum message size that you want to enforce. For example, the value 64 MB results in a maximum message size of approximately 48 MB.

```yaml
Type: Unlimited
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageBodyFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The MessageBodyFormat parameter specifies the message body format for messages sent to the mail contact or mail user. Valid values are:

- Text
- Html
- TextAndHtml (default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html, or TextAndHtml.
- MessageFormat is Text: MessageBodyFormat can only be Text.

```yaml
Type: MessageBodyFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The MessageFormat parameter specifies the message format for messages sent to the mail contact or mail user. Valid values are:

- Text
- Mime (default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html, or TextAndHtml.
- MessageFormat is Text: MessageBodyFormat can only be Text.

Therefore, if you want to change the MessageFormat parameter from Mime to Text, you must also change the MessageBodyFormat parameter to Text.

```yaml
Type: MessageFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftOnlineServicesID

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The MicrosoftOnlineServicesID parameter specifies the user ID for the object. This parameter only applies to objects in the cloud-based service. It isn't available for on-premises deployments.

```yaml
Type: SmtpAddress
Parameter Sets: EnableLitigationHoldForMigration, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailUser, RemoveComplianceTagHoldApplied, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveLitigationHoldEnabled, RemoveOrphanedHolds, UnblockForwardSyncPostCrossTenantMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

To enter multiple values and overwrite any existing entries, use the following syntax: `Value1,Value2,...ValueN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

To add or remove one or more values without affecting any existing entries, use the following syntax: `@{Add="Value1","Value2"...; Remove="Value3","Value4"...}`.

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

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

### -ModerationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.
- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This value is the default.

You use the ModeratedBy parameter to specify the moderators.

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

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The Name parameter specifies the unique name of the mail user. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

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

### -Password

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The Password parameter allows users to change their own password. You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

You can't use this parameter to change another user's password (the parameter is available only via the MyBaseOptions user role). To change another user's password, use the PasswordProfile parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

This parameter is functional only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. You can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

By default, the primary address is the same as the ExternalEmailAddress parameter value.

If you set the EmailAddressPolicyEnabled parameter to $false, you can specify the primary address using the PrimarySmtpAddress parameter, but the email addresses of the mail user are no longer automatically updated by email address policies. We recommend that you don't set the primary email address to a value other than the ExternalEmailAddress unless you're in a cross-forest scenario.

The PrimarySmtpAddress parameter updates the primary email address and WindowsEmailAddress property to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecalculateInactiveMailUser

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill RecalculateInactiveMailUser Description }}

```yaml
Type: SwitchParameter
Parameter Sets: RecalculateInactiveMailUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientLimits

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in on-premises Exchange.

The RecipientLimits parameter specifies the maximum number of recipients allowed in messages sent by the mail user.

A valid value is an integer or the value unlimited. The default value is unlimited.

The value unlimited indicates the maximum number of recipients per message for the mail user is controlled elsewhere (for example, organization, server, or connector limits).

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoverableItemsQuota

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RecoverableItemsQuota parameter specifies the maximum size for the Recoverable Items folder for a mail user that has a corresponding remote mailbox or remote archive mailbox in the cloud-based service. If the Recoverable Items folder reaches or exceeds this size, it no longer accepts messages.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

A valid value is number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 30 gigabytes (32212254720 bytes).

The RecoverableItemsQuota value must be greater than or equal to the RecoverableItemsWarningQuota value.

```yaml
Type: Unlimited
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecoverableItemsWarningQuota

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RecoverableItemsWarningQuota parameter specifies the warning threshold for the size of the Recoverable Items folder for a mail user that has a corresponding remote mailbox or remote archive mailbox in the cloud-based service. If the Recoverable Items folder reaches or exceeds this size, Exchange logs an event to the application event log.

When you enter a value, qualify the value with one of the following units:

- B (bytes)
- KB (kilobytes)
- MB (megabytes)
- GB (gigabytes)
- TB (terabytes)

Unqualified values are typically treated as bytes, but small values might be rounded up to the nearest kilobyte.

A valid value is number up to 1.999999999 terabytes (2199023254528 bytes) or the value unlimited. The default value is 20 gigabytes (21474836480 bytes).

The RecoverableItemsQuota value must be greater than or equal to the RecoverableItemsWarningQuota value.

```yaml
Type: Unlimited
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RejectMessagesFrom

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The RejectMessagesFrom parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders in your organization (mailboxes, mail users, and mail contacts). You can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove senders without affecting other existing entries, use the following syntax: `@{Add="Sender1","Sender2"...; Remove="Sender3","Sender4"...}`.

The senders you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFrom and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -RejectMessagesFromDLMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The RejectMessagesFromDLMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are groups in your organization (distribution groups, mail-enabled security groups, and dynamic distribution groups). Specifying a group means all members of the group aren't allowed to send messages to this recipient. You can use any value that uniquely identifies the group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple groups separated by commas. To overwrite any existing entries, use the following syntax: `Group1,Group2,...GroupN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Group1","Group2",..."GroupN"`.

To add or remove groups without affecting other existing entries, use the following syntax: `@{Add="Group1","Group2"...; Remove="Group3","Group4"...}`.

The groups you specify for this parameter are automatically copied to the RejectMessagesFromSendersOrMembers property. Therefore, you can't use the RejectMessagesFromDLMembers and RejectMessagesFromSendersOrMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all groups.

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

### -RejectMessagesFromSendersOrMembers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The RejectMessagesFromSendersOrMembers parameter specifies who isn't allowed to send messages to this recipient. Messages from these senders are rejected.

Valid values for this parameter are individual senders and groups in your organization. Individual senders are mailboxes, mail users, and mail contacts. Groups are distribution groups, mail-enabled security groups, and dynamic distribution groups. Specifying a group means all members of the group aren't allowed to send messages to this recipient.

To specify senders for this parameter, you can use any value that uniquely identifies the sender. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple senders separated by commas. To overwrite any existing entries, use the following syntax: `Sender1,Sender2,...SenderN`. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Sender1","Sender2",..."SenderN"`.

To add or remove individual senders or groups without affecting other existing entries, use the RejectMessagesFrom and RejectMessagesFromDLMembers parameters.

The individual senders and groups you specify for this parameter are automatically copied to the RejectMessagesFrom and RejectMessagesFromDLMembers properties, respectively. Therefore, you can't use the RejectMessagesFromSendersOrMembers parameter and the RejectMessagesFrom or RejectMessagesFromDLMembers parameters in the same command.

By default, this parameter is blank ($null), which allows this recipient to accept messages from all senders.

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

### -RemoveComplianceTagHoldApplied

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill RemoveComplianceTagHoldApplied Description }}

```yaml
Type: SwitchParameter
Parameter Sets: RemoveComplianceTagHoldApplied
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDelayHoldApplied

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill RemoveDelayHoldApplied Description }}

```yaml
Type: SwitchParameter
Parameter Sets: RemoveDelayHoldApplied
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDelayReleaseHoldApplied

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill RemoveDelayReleaseHoldApplied Description }}

```yaml
Type: SwitchParameter
Parameter Sets: RemoveDelayReleaseHoldApplied
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveDisabledArchive

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The RemoveDisabledArchive switch specifies whether to remove the disabled archive that's associated with the mail user. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RemoveDisabledArchive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveLitigationHoldEnabled

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The RemoveLitigationHoldEnabled switch specifies whether to remove litigation hold from all mailbox locations of a mail user, including online archive, in an Exchange hybrid environment. You don't need to specify a value with this switch.

This switch is useful in scenarios where admins can't permanently delete mail users due to litigation holds on the mail users. For more information on litigation hold, see [Create a Litigation hold](https://learn.microsoft.com/en-us/purview/ediscovery-create-a-litigation-hold).

```yaml
Type: SwitchParameter
Parameter Sets: RemoveLitigationHoldEnabled
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveMailboxProvisioningConstraint

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill RemoveMailboxProvisioningConstraint Description }}

```yaml
Type: SwitchParameter
Parameter Sets: EnableLitigationHoldForMigration, ExcludeFromAllOrgHolds, ExcludeFromOrgHolds, RecalculateInactiveMailUser, RemoveComplianceTagHoldApplied, RemoveDelayHoldApplied, RemoveDelayReleaseHoldApplied, RemoveDisabledArchive, RemoveLitigationHoldEnabled, RemoveOrphanedHolds, UnblockForwardSyncPostCrossTenantMigration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveOrphanedHolds

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill RemoveOrphanedHolds Description }}

```yaml
Type: String[]
Parameter Sets: RemoveOrphanedHolds
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovePicture

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RemovePicture switch removes the picture from the mail user. You don't need to specify a value with this switch.

You can add a picture to a mail user by using the Import-RecipientDataProperty cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveSpokenName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RemoveSpokenName switch removes the spoken name from the mail user. You don't need to specify a value with this switch.

You can add a sound file to a mail user by using the Import-RecipientDataProperty cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequireSenderAuthenticationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The RequireSenderAuthenticationEnabled parameter specifies whether to accept messages only from authenticated (internal) senders. Valid values are:

- $true: Messages are accepted only from authenticated (internal) senders. Messages from unauthenticated (external) senders are rejected.
- $false: Messages are accepted from authenticated (internal) and unauthenticated (external) senders.

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

### -ResetPasswordOnNextLogon

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

The ResetPasswordOnNextLogon parameter allows users to require themselves to change their password the next time they log on. Valid values are:

- $true: The user is required to change their password then next time they successfully log on.
- $false: The user isn't required to change their password then next time they successfully log on. This value is the default.

You can't use this parameter to require another user to change their password (the parameter is available only via the MyBaseOptions user role). You need to use the ForceChangePasswordNextSignIn value in the PasswordProfile parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

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

### -SamAccountName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the following characters: !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters might generate collisions (for example, o and ö match). The maximum length is 20 characters.

```yaml
Type: String
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SecondaryAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE Online Protection

This parameter is available only in on-premises Exchange.

The SecondaryAddress parameter specifies the secondary address used by the Unified Messaging (UM)-enabled user.

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

### -SecondaryDialPlan

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The SecondaryDialPlan parameter specifies a secondary UM dial plan to use. This parameter is provided to create a secondary proxy address.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This value is the default.
- Internal: Notify senders in the organization when their messages aren't approved.
- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: TransportModerationNotificationFlags
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleDisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z
- A - Z
- 0 - 9
- space
- `" ' ( ) + , - . / : ?`

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

### -SkipDualWrite

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in Exchange 2016 or later.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMDtmfMap

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The UMDtmfMap parameter specifies the dual-tone multiple-frequency (DTMF) map values for the recipient. This allows the recipient to be identified by using a telephone keypad in Unified Messaging (UM) environments. Typically, these DTMF values are automatically created and updated, but you can use this parameter to make changes manually. This parameter uses the following syntax:

- `emailAddress:<integers>`
- `lastNameFirstName:<integers>`
- `firstNameLastName:<integers>`

To enter values that overwrite all existing entries, use the following syntax: `emailAddress:<integers>,lastNameFirstName:<integers>,firstNameLastName:<integers>`.

If you use this syntax and you omit any of the DTMF map values, those values are removed from the recipient. For example, if you specify only `emailAddress:<integers>`, all existing lastNameFirstName and firstNameLastName values are removed.

To add or remove values without affecting other existing entries, use the following syntax: `@{Add="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"; Remove="emailAddress:<integers>","lastNameFirstName:<integers>","firstNameLastName:<integers>"}`.

If you use this syntax, you don't need to specify all of the DTMF map values, and you can specify multiple DTMF map values. For example, you can use `@{Add="emailAddress:<integers1>","emailAddress:<integers2>}` to add two new values for emailAddress without affecting the existing lastNameFirstName and firstNameLastName values.

```yaml
Type: MultiValuedProperty
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnblockForwardSyncPostCrossTenantMigration

> Applicable: Exchange Online, Exchange Online Protection

This parameter is available only in the cloud-based service.

{{ Fill UnblockForwardSyncPostCrossTenantMigration Description }}

```yaml
Type: SwitchParameter
Parameter Sets: UnblockForwardSyncPostCrossTenantMigration
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseMapiRichTextFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The UseMapiRichTextFormat parameter specifies what to do with messages that are sent to the mail user or mail contact in MAPI rich text format, also known as Outlook Rich Text or Transport Neutral Encapsulation Format (TNEF). Valid values are:

- Always: TNEF is used for all messages sent to the mail user or mail contact.
- Never: TNEF is never used for any messages sent to the mail user or mail contact. TNEF messages are converted to plain text.
- UseDefaultSettings: TNEF messages aren't specifically allowed or prevented for the mail user or mail contact. Whether TNEF messages are sent to the recipient depends on the remote domain TNEF settings (the default remote domain or a specific remote domain), or the Outlook Rich Text message settings specified by the sender in Outlook.

The default value is UseDefaultSettings.

```yaml
Type: UseMapiRichTextFormat
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsePreferMessageFormat

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The UsePreferMessageFormat specifies whether the message format settings configured for the mail user or mail contact override the global settings configured for the remote domain or configured by the message sender. Valid value are:

- $true: Messages sent to the mail user or mail contact use the message format that's configured for the mail user or mail contact.
- $false: Messages sent to the mail user or mail contact use the message format that's configured for the remote domain (the default remote domain or a specific remote domain) or configured by the message sender. This value is the default.

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

### -UserCertificate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The UserCertificate parameter specifies the digital certificate used to sign a user's email messages.

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

### -UserPrincipalName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The UserPrincipalName parameter specifies the logon name for the user account. The UPN uses an email address format: `username@domain`. Typically, the domain value is the domain where the user account resides.

```yaml
Type: String
Parameter Sets: Default
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSMimeCertificate

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The UserSMimeCertificate parameter specifies the S/MIME certificate that's used to sign a user's email messages.

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

### -WindowsEmailAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online, Exchange Online Protection

The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.
- In environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:

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
