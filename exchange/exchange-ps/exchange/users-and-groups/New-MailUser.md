---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
title: New-MailUser
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps || eop-ps"
---

# New-MailUser

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-MailUser cmdlet to create mail users. Mail users (also known as mail-enabled users) have email addresses and accounts in the Exchange organization, but they don't have Exchange mailboxes. Email messages sent to mail users are delivered to the specified external email address.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
New-MailUser [-Name] <String> -ExternalEmailAddress <ProxyAddress> [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MacAttachmentFormat <BinHex | UuEncode | AppleSingle | AppleDouble>]
 [-MessageBodyFormat <Text | Html | TextAndHtml>] [-MessageFormat <Text | Mime>]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-UsePreferMessageFormat <$true | $false>]
 [-WhatIf] [-ExternalDirectoryObjectId <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-UsageLocation <CountryInfo>] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set3
```
New-MailUser [-Name] <String> -ExternalEmailAddress <ProxyAddress> -Password <SecureString>
 -UserPrincipalName <String> [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>]
 [-Initials <String>] [-LastName <String>]
 [-MacAttachmentFormat <BinHex | UuEncode | AppleSingle | AppleDouble>]
 [-MessageBodyFormat <Text | Html | TextAndHtml>] [-MessageFormat <Text | Mime>]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-UsePreferMessageFormat <$true | $false>]
 [-WhatIf] -WindowsLiveID <WindowsLiveId> [-EvictLiveId] [-ExternalDirectoryObjectId <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-UsageLocation <CountryInfo>] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set2
```
New-MailUser [-Name] <String> [-ExternalEmailAddress <ProxyAddress>] -Password <SecureString>
 -WindowsLiveID <WindowsLiveId> [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-EvictLiveId] [-FirstName <String>]
 [-ImmutableId <String>] [-Initials <String>] [-LastName <String>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] -UserPrincipalName <String>
 [-ExternalDirectoryObjectId <String>] [-MacAttachmentFormat <BinHex | UuEncode | AppleSingle | AppleDouble>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MessageBodyFormat <Text | Html | TextAndHtml>]
 [-MessageFormat <Text | Mime>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-UsageLocation <CountryInfo>] [-UsePreferMessageFormat <$true | $false>] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set4
```
New-MailUser [-Name] <String> [-ExternalEmailAddress <ProxyAddress>] [-UseExistingLiveId]
 -WindowsLiveID <WindowsLiveId> [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>]
 [-Initials <String>] [-LastName <String>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf]
 -MicrosoftOnlineServicesID <WindowsLiveId> -Password <SecureString> [-ExternalDirectoryObjectId <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-UsageLocation <CountryInfo>] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set5
```
New-MailUser [-Name] <String> [-ExternalEmailAddress <ProxyAddress>] -FederatedIdentity <String>
 -WindowsLiveID <WindowsLiveId> [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-EvictLiveId] [-FirstName <String>]
 [-ImmutableId <String>] [-Initials <String>] [-LastName <String>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [-ImportLiveId]
 [-ExternalDirectoryObjectId <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-UsageLocation <CountryInfo>] [-MailboxRegion <String>] [-NetID <NetID>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set6
```
New-MailUser [-Name] <String> [-ExternalEmailAddress <ProxyAddress>] [-ImportLiveId]
 -WindowsLiveID <WindowsLiveId> [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>] [-ImmutableId <String>]
 [-Initials <String>] [-LastName <String>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-WhatIf] [-UseExistingLiveId] [-BypassLiveId]
 [-ExternalDirectoryObjectId <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-NetID <NetID>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-UsageLocation <CountryInfo>] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set7
```
New-MailUser [-Name] <String> [-ExternalEmailAddress <ProxyAddress>] -FederatedIdentity <String>
 -WindowsLiveID <WindowsLiveId> [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm]
 [-DisplayName <String>] [-DomainController <Fqdn>] [-EvictLiveId] [-ExternalDirectoryObjectId <String>]
 [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-NetID <NetID>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-WhatIf] [-UseExistingLiveId] [-BypassLiveId] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [-UsageLocation <CountryInfo>] [<CommonParameters>]
```

### Set9
```
New-MailUser [-Name] <String> -FederatedIdentity <String> -MicrosoftOnlineServicesID <WindowsLiveId>
 [-Alias <String>] [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-ExternalDirectoryObjectId <String>] [-FirstName <String>] [-ImmutableId <String>]
 [-Initials <String>] [-LastName <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-NetID <NetID>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-WhatIf] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set8
```
New-MailUser [-Name] <String> [-MicrosoftOnlineServicesID <WindowsLiveId>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Confirm] [-DisplayName <String>] [-DomainController <Fqdn>]
 [-ExternalDirectoryObjectId <String>] [-FirstName <String>] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SKUAssigned <$true | $false>]
 [-SKUCapability <None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration>]
 [-WhatIf] -FederatedIdentity <String> [-MailboxRegion <String>] [-NetID <NetID>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-MailUser -Name "Ed Meadows" -ExternalEmailAddress ed@tailspintoys.com -MicrosoftOnlineServicesID ed@tailspintoys -Password (ConvertTo-SecureString -String 'P@ssw0rd1' -AsPlainText -Force)
```

This example creates a new mail user for Ed Meadows in the contoso.com cloud-based organization. The mail user gives Ed an account and email address in the contoso.com domain, but messages sent to Ed are delivered to his tailspintoys.com email address.

### -------------------------- Example 2 --------------------------
```
$password = Read-Host "Enter password" -AsSecureString; New-MailUser -Name "Ed Meadows" -ExternalEmailAddress ed@tailspintoys.com -UserPrincipalName ed@contoso.com -Password $password
```

This example is similar to the first, except contoso.com is now an on-premises Exchange organization, and you use a separate command to enter the password so it isn't stored in clear text.

## PARAMETERS

### -Name
The Name parameter specifies the unique name of the mail user. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

This value is also used for the DisplayName property if you don't use the DisplayName parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalEmailAddress
The ExternalEmailAddress parameter specifies the target email address of the mail contact or mail user. By default, this value is used as the primary email address of the mail contact or mail user.

In on-premises environments, you can use the PrimarySMTPAddress parameter to set the primary email address to a different value. However, we recommend this only in cross-forest environments.

```yaml
Type: ProxyAddress
Parameter Sets: Set1, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: ProxyAddress
Parameter Sets: Set2, Set4, Set5, Set6, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FederatedIdentity
This parameter is available only in the cloud-based service.

The FederatedIdentity parameter associates an on-premises Active Directory user with a user in the cloud.

```yaml
Type: String
Parameter Sets: Set5, Set7, Set9, Set8
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImportLiveId
This parameter is available only in the cloud-based service.

The ImportLiveID switch specifies whether to import an unmanaged Microsoft account (formerly known as a Windows Live ID) into the cloud-based domain. You don't need to specify a value with this switch.

An unmanaged Microsoft account was created in the domain before the domain was enrolled in the cloud-based service. Importing a Microsoft account into the domain lets you save any settings associated with the Microsoft account, like instant messaging contacts. However, the Microsoft account is now subject to the security and privacy policies of the organization.

```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
The Password parameter specifies the password for the user's account. Valid values for this parameter use the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force).

```yaml
Type: SecureString
Parameter Sets: Set3, Set2, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseExistingLiveId
This parameter is available only in the cloud-based service.

The UseExistingLiveId switch specifies whether to use the specified Microsoft account (formerly known as a Windows Live ID) that already exists in the cloud-based domain. The specified Microsoft account can't have a mail user associated with it.

You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set4, Set6, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
This parameter is available only in on-premises Exchange.

The UserPrincipalName parameter specifies the name of a system user in an email address format (for example, ed@contoso.com).

```yaml
Type: String
Parameter Sets: Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsLiveID
This parameter is available only in the cloud-based service.

The WindowsLiveID parameter creates a Microsoft account (formerly known as a Windows Live ID) for the mail user.

```yaml
Type: WindowsLiveId
Parameter Sets: Set3, Set2, Set4, Set5, Set6, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArbitrationMailbox
This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the arbitration mailbox that's used to manage the moderation process for this recipient. You can use any value that uniquely identifies the arbitration mailbox.

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
The DisplayName parameter specifies the display name of the mail user. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -EvictLiveId
This parameter is available only in the cloud-based service.

The EvictLiveId switch specifies whether to remove an unmanaged Microsoft account (formerly known as a Windows Live ID) from the cloud-based domain. An unmanaged Microsoft account was created in the domain before the domain was enrolled in the cloud-based service. Evicting a Microsoft account from the domain lets you save any settings associated with the Microsoft account, like instant messaging contacts.

You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Set3, Set2, Set5, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstName
The FirstName parameter specifies the user's first name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmutableId
The ImmutableId parameter is used by GAL synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable ID based upon the mailbox's ExchangeGUID and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com.

You need to set the ImmutableId parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than ExchangeGUID for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premises Exchange deployment scenario.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Initials
The Initials parameter specifies the user's middle initials.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastName
The LastName parameter specifies the user's last name.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MacAttachmentFormat
The MacAttachmentFormat parameter specifies the Apple Macintosh operating system attachment format to use for messages sent to the mail contact or mail user. Valid values are:

- BinHex (This is the default value)

- UuEncode

- AppleSingle

- AppleDouble

The MacAttachmentFormat and MessageFormat parameters are interdependent:

- MessageFormat is Text: MacAttachmentFormat can be BinHex or UuEncode.

- MessageFormat is Mime: MacAttachmentFormat can be BinHex, AppleSingle, or AppleDouble.

```yaml
Type: BinHex | UuEncode | AppleSingle | AppleDouble
Parameter Sets: Set1, Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageBodyFormat
The MessageBodyFormat parameter specifies the message body format for messages sent to the mail contact or mail user. Valid values are:

- Text

- Html

- TextAndHtml (This is the default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html, or TextAndHtml.

- MessageFormat is Text: MessageBodyFormat can only be Text.

```yaml
Type: Text | Html | TextAndHtml
Parameter Sets: Set1, Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MessageFormat
The MessageFormat parameter specifies the message format for messages sent to the mail contact or mail user. Valid values are:

- Text

- Mime (This is the default value)

The MessageFormat and MessageBodyFormat parameters are interdependent:

- MessageFormat is Mime: MessageBodyFormat can be Text, Html, or TextAndHtml.

- MessageFormat is Text: MessageBodyFormat can only be Text.

Therefore, if you want to change the MessageFormat parameter from Mime to Text, you must also change the MessageBodyFormat parameter to Text.

```yaml
Type: Text | Mime
Parameter Sets: Set1, Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy
The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

To enter multiple values, use the following syntax: \<value1\>,\<value2\>,...\<valueX\>. If the values contain spaces or otherwise require quotation marks, use the following syntax: "\<value1\>","\<value2\>",..."\<valueX\>".

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled
The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.

- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter specifies the location in Active Directory where the new mail user is created.

Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OverrideRecipientQuotas
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
This parameter is available only in on-premises Exchange.

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

By default, the primary address is the same as the ExternalEmailAddress parameter value.

If you use the PrimarySmtpAddress parameter to specify the primary email address, the command sets the EmailAddressPolicyEnabled property of the mail user to False, which means the email addresses of the mail user aren't automatically updated by email address policies. We recommend that you don't set the primary email address to a value other than the ExternalEmailAddress unless you're in a cross-forest scenario.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePowerShellEnabled
The RemotePowerShellEnabled parameter specifies whether the user can connect to Exchange using remote PowerShell. Remote PowerShell is required to open the Exchange Management Shell on Exchange servers, or to use Windows PowerShell open and import a remote PowerShell session to Exchange. Access to remote PowerShell is required even if you're trying to open the Exchange Management Shell on the local Exchange server. Valid values are:

- $true: The user can use remote PowerShell. This is the default value.

- $false: The user can't use remote PowerShell.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetPasswordOnNextLogon
This parameter is available only in on-premises Exchange.

The ResetPasswordOnNextLogon parameter specifies whether the user must change their password the next time they log on. Valid values are:

- $true: The user is required to change their password the next time they log on.

- $false: The user isn't required to change their password the next time they log on. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications
The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.

- Internal: Notify senders in the organization when their messages aren't approved.

- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: Never | Internal | Always
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsePreferMessageFormat
The UsePreferMessageFormat specifies whether the message format settings configured for the mail user or mail contact override the global settings configured for the remote domain or configured by the message sender. Valid value are:

- $true: Messages sent to the mail user or mail contact use the message format that's configured for the mail user or mail contact.

- $false: Messages sent to the mail user or mail contact use the message format that's configured for the remote domain (the default remote domain or a specific remote domain) or configured by the message sender. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: Set1, Set3, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftOnlineServicesID
The MicrosoftOnlineServicesID parameter specifies the user ID for the object. This parameter only applies to objects in the cloud-based service. It isn't available for on-premises deployments.

```yaml
Type: WindowsLiveId
Parameter Sets: Set4, Set9
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: WindowsLiveId
Parameter Sets: Set8
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassLiveId
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set6, Set7
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxProvisioningConstraint
This parameter is reserved for internal Microsoft use.

```yaml
Type: MailboxProvisioningConstraint
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxProvisioningPreferences
This parameter is reserved for internal Microsoft use.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetID
This parameter is reserved for internal Microsoft use.

```yaml
Type: NetID
Parameter Sets: Set5, Set6, Set7, Set9, Set8
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SKUAssigned
This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SKUCapability
This parameter is reserved for internal Microsoft use.

```yaml
Type: None | BPOS_S_Deskless | BPOS_S_Standard | BPOS_S_Enterprise | BPOS_S_Archive | BPOS_L_Standard | BPOS_B_Standard | BPOS_B_CustomDomain | BPOS_S_MidSize | BPOS_S_ArchiveAddOn | BPOS_S_EopStandardAddOn | BPOS_S_EopPremiumAddOn | BPOS_Unmanaged | TOU_Signed | FederatedUser | Partner_Managed | MasteredOnPremise | ResourceMailbox | ExcludedFromBackSync | UMFeatureRestricted | RichCoexistence | OrganizationCapabilityUMGrammar | OrganizationCapabilityUMDataStorage | OrganizationCapabilityOABGen | OrganizationCapabilityGMGen | OrganizationCapabilityClientExtensions | BEVDirLockdown | OrganizationCapabilityUMGrammarReady | OrganizationCapabilityMailRouting | OrganizationCapabilityManagement | OrganizationCapabilityTenantUpgrade | OrganizationCapabilityScaleOut | OrganizationCapabilityMessageTracking | OrganizationCapabilityPstProvider | OrganizationCapabilitySuiteServiceStorage | OrganizationCapabilityOfficeMessageEncryption | OrganizationCapabilityMigration
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UsageLocation
This parameter is reserved for internal Microsoft use.

```yaml
Type: CountryInfo
Parameter Sets: Set1, Set3, Set2, Set4, Set5, Set6, Set7
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipMailboxProvisioningConstraintValidation
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online, Exchange Online Protection
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

[Online Version](https://technet.microsoft.com/library/128467a7-b8b8-4fa6-bca9-1131301f18ce.aspx)
