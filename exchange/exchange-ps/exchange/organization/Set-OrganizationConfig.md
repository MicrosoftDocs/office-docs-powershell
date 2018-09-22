---
external help file: Microsoft.Exchange.RemoteConnections-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: Set-OrganizationConfig
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# Set-OrganizationConfig

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-OrganizationConfig cmdlet to configure various settings of an Exchange organization.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Identity
```
Set-OrganizationConfig [[-Identity] <OrganizationIdParameter>]
 [-ACLableSyncedObjectEnabled <true | $false>]
 [-ActivityBasedAuthenticationTimeoutEnabled <$true | $false>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <$true | $false>]
 [-AuditDisabled <$true | $false>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-Confirm]
 [-CustomerFeedbackEnabled <$true | $false>]
 [-DefaultGroupAccessType <Private | Public>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-DomainController <Fqdn>]
 [-EwsAllowEntourage <$true | $false>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <$true | $false>]
 [-EwsAllowOutlook <$true | $false>]
 [-EwsApplicationAccessPolicy <EnforceAllowList | EnforceBlockList>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <$true | $false>]
 [-ExchangeNotificationEnabled <$true | $false>]
 [-ExchangeNotificationRecipients <MultiValuedProperty>]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-Industry <NotSpecified | Agriculture | Finance | BusinessServicesConsulting | Communications | ComputerRelatedProductsServices | Construction | Education | EngineeringArchitecture | Government | Healthcare | Hospitality | Legal | Manufacturing | MediaMarketingAdvertising | Mining | NonProfit | PersonalServices | PrintingPublishing | RealEstate | Retail | Transportation | Utilities | Wholesale | Other>]
 [-MailTipsAllTipsEnabled <$true | $false>]
 [-MailTipsExternalRecipientsTipsEnabled <$true | $false>]
 [-MailTipsGroupMetricsEnabled <$true | $false>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <$true | $false>]
 [-ManagedFolderHomepage <String>]
 [-MicrosoftExchangeRecipientEmailAddresses <ProxyAddressCollection>]
 [-MicrosoftExchangeRecipientEmailAddressPolicyEnabled <$true | $false>]
 [-MicrosoftExchangeRecipientPrimarySmtpAddress <SmtpAddress>]
 [-MicrosoftExchangeRecipientReplyRecipient <RecipientIdParameter>]
 [-OrganizationSummary <MultiValuedProperty>]
 [-PermanentlyDeleteDisabled <$true | $false>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicFolderContentReplicationDisabled <$true | $false>]
 [-PublicFolderMigrationComplete <$true | $false>]
 [-PublicFoldersLockedForMigration <$true | $false>]
 [-ReadTrackingEnabled <$true | $false>]
 [-RequiredCharsetCoverage <Int32>]
 [-SCLJunkThreshold <Int32>]
 [-WhatIf] [<CommonParameters>]
```

### AdfsAuthenticationRawConfiguration
```
Set-OrganizationConfig [-Identity] <OrganizationIdParameter>
 [-ACLableSyncedObjectEnabled <$true | $false>]
 [-AdfsAuthenticationConfiguration <String>]
 [-ActivityBasedAuthenticationTimeoutEnabled <$true | $false>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <$true | $false>]
 [-AppsForOfficeEnabled <$true | $false>]
 [-AsyncSendEnabled <$true | $false>]
 [-AuditDisabled <$true | $false>]
 [-AutoExpandingArchive]
 [-BookingsEnabled <$true | $false>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-CalendarVersionStoreEnabled <$true | $false>]
 [-Confirm]
 [-ConnectorsActionableMessagesEnabled <$true | $false>]
 [-ConnectorsEnabled <$true | $false>]
 [-CustomerLockboxEnabled <$true | $false>]
 [-CustomerFeedbackEnabled <$true | $false>]
 [-DataClassifications <String>]
 [-DefaultGroupAccessType <Private | Public>]
 [-DefaultPublicFolderAgeLimit <EnhancedTimeSpan>]
 [-DefaultPublicFolderDeletedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderIssueWarningQuota <Unlimited>]
 [-DefaultPublicFolderMaxItemSize <Unlimited>]
 [-DefaultPublicFolderMovedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderProhibitPostQuota <Unlimited>]
 [-DirectReportsGroupAutoCreationEnabled <$true | $false>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-DomainController <Fqdn>]
 [-ElcProcessingDisabled <$true | $false>]
 [-EndUserDLUpgradeFlowsDisabled <$true | $false>]
 [-EwsAllowEntourage <$true | $false>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <$true | $false>]
 [-EwsAllowOutlook <$true | $false>]
 [-EwsApplicationAccessPolicy <EnforceAllowList | EnforceBlockList>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <$true | $false>]
 [-ExchangeNotificationEnabled <$true | $false>]
 [-ExchangeNotificationRecipients <MultiValuedProperty>]
 [-FocusedInboxOn <$true | $false>]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-Industry <NotSpecified | Agriculture | Finance | BusinessServicesConsulting | Communications | ComputerRelatedProductsServices | Construction | Education | EngineeringArchitecture | Government | Healthcare | Hospitality | Legal | Manufacturing | MediaMarketingAdvertising | Mining | NonProfit | PersonalServices | PrintingPublishing | RealEstate | Retail | Transportation | Utilities | Wholesale | Other>]
 [-IPListBlocked <MultiValuedProperty>]
 [-IsAgendaMailEnabled <$true | $false>]
 [-IsExcludedFromOffboardMigration <$true | $false>]
 [-IsExcludedFromOnboardMigration <$true | $false>]
 [-LeanPopoutEnabled <$true | $false>]
 [-LinkPreviewEnabled <$true | $false>]
 [-MailTipsAllTipsEnabled <$true | $false>]
 [-MailTipsExternalRecipientsTipsEnabled <$true | $false>]
 [-MailTipsGroupMetricsEnabled <$true | $false>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <$true | $false>]
 [-ManagedFolderHomepage <String>]
 [-MapiHttpEnabled <$true | $false>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-MicrosoftExchangeRecipientEmailAddresses <ProxyAddressCollection>]
 [-MicrosoftExchangeRecipientEmailAddressPolicyEnabled <$true | $false>]
 [-MicrosoftExchangeRecipientPrimarySmtpAddress <SmtpAddress>]
 [-MicrosoftExchangeRecipientReplyRecipient <RecipientIdParameter>]
 [-OAuth2ClientProfileEnabled <$true | $false>]
 [-OrganizationSummary <MultiValuedProperty>]
 [-PermanentlyDeleteDisabled <$true | $false>]
 [-PerTenantSwitchToESTSEnabled <$true | $false>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicComputersDetectionEnabled <$true | $false>]
 [-PublicFolderContentReplicationDisabled <$true | $false>]
 [-PublicFolderMailboxesLockedForNewConnections <$true | $false>]
 [-PublicFolderMailboxesMigrationComplete <$true | $false>]
 [-PublicFolderMigrationComplete <$true | $false>]
 [-PublicFoldersEnabled <None | Local | Remote>]
 [-PublicFoldersLockedForMigration <$true | $false>]
 [-ReadTrackingEnabled <$true | $false>]
 [-RefreshSessionEnabled <$true | $false>]
 [-RemotePublicFolderMailboxes <MultiValuedProperty>]
 [-RequiredCharsetCoverage <Int32>]
 [-SCLJunkThreshold <Int32>]
 [-SiteMailboxCreationURL <Uri>]
 [-SmtpActionableMessagesEnabled <$true | $false>]
 [-UMAvailableLanguages <MultiValuedProperty>]
 [-UnblockUnsafeSenderPromptEnabled <$true | $false>]
 [-WACDiscoveryEndpoint <String>]
 [-WhatIf] [<CommonParameters>]
```

### AdfsAuthenticationParameter
```
Set-OrganizationConfig [-Identity] <OrganizationIdParameter> -SharedConfiguration <OrganizationIdParameter>
 [-ACLableSyncedObjectEnabled <true | $false>]
 [-ActivityBasedAuthenticationTimeoutEnabled <$true | $false>]
 [-ActivityBasedAuthenticationTimeoutInterval <EnhancedTimeSpan>]
 [-ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled <$true | $false>]
 [-AdfsAudienceUris <MultiValuedProperty>]
 [-AdfsEncryptCertificateThumbprint <String>]
 [-AdfsIssuer <Uri>]
 [-AdfsSignCertificateThumbprints <MultiValuedProperty>]
 [-AppsForOfficeEnabled <$true | $false>]
 [-AsyncSendEnabled <$true | $false>]
 [-AuditDisabled <$true | $false>]
 [-AutoExpandingArchive]
 [-BookingsEnabled <$true | $false>]
 [-ByteEncoderTypeFor7BitCharsets <Int32>]
 [-CalendarVersionStoreEnabled <$true | $false>]
 [-Confirm]
 [-ConnectorsActionableMessagesEnabled <$true | $false>]
 [-ConnectorsEnabled <$true | $false>]
 [-CustomerFeedbackEnabled <$true | $false>]
 [-CustomerLockboxEnabled <$true | $false>]
 [-DataClassifications <String>]
 [-DefaultGroupAccessType <Private | Public>]
 [-DefaultPublicFolderAgeLimit <EnhancedTimeSpan>]
 [-DefaultPublicFolderDeletedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderIssueWarningQuota <Unlimited>]
 [-DefaultPublicFolderMaxItemSize <Unlimited>]
 [-DefaultPublicFolderMovedItemRetention <EnhancedTimeSpan>]
 [-DefaultPublicFolderProhibitPostQuota <Unlimited>]
 [-DirectReportsGroupAutoCreationEnabled <$true | $false>]
 [-DistributionGroupDefaultOU <OrganizationalUnitIdParameter>]
 [-DistributionGroupNameBlockedWordsList <MultiValuedProperty>]
 [-DistributionGroupNamingPolicy <DistributionGroupNamingPolicy>]
 [-DomainController <Fqdn>]
 [-ElcProcessingDisabled <$true | $false>]
 [-EndUserDLUpgradeFlowsDisabled <$true | $false>]
 [-EwsAllowEntourage <$true | $false>]
 [-EwsAllowList <MultiValuedProperty>]
 [-EwsAllowMacOutlook <$true | $false>]
 [-EwsAllowOutlook <$true | $false>]
 [-EwsApplicationAccessPolicy <EnforceAllowList | EnforceBlockList>]
 [-EwsBlockList <MultiValuedProperty>]
 [-EwsEnabled <$true | $false>]
 [-ExchangeNotificationEnabled <$true | $false>]
 [-ExchangeNotificationRecipients <MultiValuedProperty>]
 [-FocusedInboxOn <$true | $false>]
 [-HierarchicalAddressBookRoot <UserContactGroupIdParameter>]
 [-Industry <NotSpecified | Agriculture | Finance | BusinessServicesConsulting | Communications | ComputerRelatedProductsServices | Construction | Education | EngineeringArchitecture | Government | Healthcare | Hospitality | Legal | Manufacturing | MediaMarketingAdvertising | Mining | NonProfit | PersonalServices | PrintingPublishing | RealEstate | Retail | Transportation | Utilities | Wholesale | Other>]
 [-IPListBlocked <MultiValuedProperty>]
 [-IsAgendaMailEnabled <$true | $false>]
 [-IsExcludedFromOffboardMigration <$true | $false>]
 [-IsExcludedFromOnboardMigration <$true | $false>]
 [-LeanPopoutEnabled <$true | $false>]
 [-LinkPreviewEnabled <$true | $false>]
 [-MailTipsAllTipsEnabled <$true | $false>]
 [-MailTipsExternalRecipientsTipsEnabled <$true | $false>]
 [-MailTipsGroupMetricsEnabled <$true | $false>]
 [-MailTipsLargeAudienceThreshold <UInt32>]
 [-MailTipsMailboxSourcedTipsEnabled <$true | $false>]
 [-ManagedFolderHomepage <String>]
 [-MapiHttpEnabled <$true | $false>]
 [-MaxConcurrentMigrations <Unlimited>]
 [-MicrosoftExchangeRecipientEmailAddresses <ProxyAddressCollection>]
 [-MicrosoftExchangeRecipientEmailAddressPolicyEnabled <$true | $false>]
 [-MicrosoftExchangeRecipientPrimarySmtpAddress <SmtpAddress>]
 [-MicrosoftExchangeRecipientReplyRecipient <RecipientIdParameter>]
 [-OAuth2ClientProfileEnabled <$true | $false>]
 [-OrganizationSummary <MultiValuedProperty>]
 [-PermanentlyDeleteDisabled <$true | $false>]
 [-PerTenantSwitchToESTSEnabled <$true | $false>]
 [-PreferredInternetCodePageForShiftJis <Int32>]
 [-PublicComputersDetectionEnabled <$true | $false>]
 [-PublicFolderContentReplicationDisabled <$true | $false>]
 [-PublicFolderMailboxesLockedForNewConnections <$true | $false>]
 [-PublicFolderMailboxesMigrationComplete <$true | $false>]
 [-PublicFolderMigrationComplete <$true | $false>]
 [-PublicFoldersEnabled <None | Local | Remote>]
 [-PublicFoldersLockedForMigration <$true | $false>]
 [-ReadTrackingEnabled <$true | $false>]
 [-RefreshSessionEnabled <$true | $false>]
 [-RemotePublicFolderMailboxes <MultiValuedProperty>]
 [-RequiredCharsetCoverage <Int32>]
 [-SCLJunkThreshold <Int32>]
 [-SiteMailboxCreationURL <Uri>]
 [-SmtpActionableMessagesEnabled <$true | $false>]
 [-UMAvailableLanguages <MultiValuedProperty>]
 [-UnblockUnsafeSenderPromptEnabled <$true | $false>]
 [-WACDiscoveryEndpoint <String>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-OrganizationConfig -DistributionGroupDefaultOU Users\Groups -DistributionGroupNameBlockedWordsList curse,bad,offensive -DistributionGroupNamingPolicy "DL_<GroupName>_<Department><CountryCode>"
```

This example creates a distribution group naming policy using the following configuration:

Distribution groups will be created in the Users\\Groups container.

The words curse, bad, and offensive will be blocked from being used in distribution group names.

All distribution groups will be prefixed with "DL\_" and suffixed with an underscore (\_) and the user's department and country code.

### -------------------------- Example 2 --------------------------
```
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceBlockList -EwsBlockList $null
```

This example allows all client applications to use REST and EWS.

### -------------------------- Example 3 --------------------------
```
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceBlockList -EwsBlockList "OtherApps*"
```

This example allows all client applications to use REST and EWS, except those that are specified by the EwsBlockList parameter.

### -------------------------- Example 4 --------------------------
```
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceAllowList -EwsAllowList $null
```

This example prevents all client applications from using REST and EWS.

### -------------------------- Example 5 --------------------------
```
Set-OrganizationConfig -EwsApplicationAccessPolicy EnforceAllowList -EwsAllowList "CorpApp*"
```

This example allows only the client applications specified by the EwsAllowList parameter to use REST and EWS.

## PARAMETERS

### -Identity
This parameter is available or functional only in Exchange Server 2010.

The Identity parameter specifies the Exchange organization that you want to modify. You can use any value that identifies the organization. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: OrganizationIdParameter
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: OrganizationIdParameter
Parameter Sets: Identity (Default)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -SharedConfiguration
This parameter is available or functional only in Exchange Server 2010.

The SharedConfiguration parameter is used to link one organization to another organization that holds shared configuration for the first organization. This parameter accepts the following values:

- Name

- DN

- GUID

```yaml
Type: OrganizationIdParameter
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2010
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ACLableSyncedObjectEnabled
This parameter is available only in on-premises Exchange.

The ACLableSyncedObjectEnabled parameter specfies whether remote mailboxes in hybrid environments are stamped as ACLableSyncedMailboxUser.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivityBasedAuthenticationTimeoutEnabled
The ActivityBasedAuthenticationTimeoutEnabled parameter specifies whether the timed logoff feature is enabled. The default value is $true.

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

### -ActivityBasedAuthenticationTimeoutInterval
The ActivityBasedAuthenticationTimeoutInterval parameter specifies the time span for logoff.

You enter this value as a time span: hh:mm:ss where hh = hours, mm = minutes and ss = seconds.

Valid values for this parameter are from 00:05:00 to 08:00:00 (5 minutes to 8 hours). The default value is 06:00:00 (6 hours).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled
The ActivityBasedAuthenticationTimeoutWithSingleSignOnEnabled parameter specifies whether to keep single sign-on enabled. The default value is $true.

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

### -AdfsAudienceUris
This parameter is available only in on-premises Exchange.

The AdfsAudienceUris parameter specifies one or more external URLs that are used for Active Directory Federation Services (AD FS) claims-based authentication. For example, the external Outlook on the web and external Exchange admin center (EAC) URLs.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

For more information about configuring AD FS claims based authentication in Exchange, see Use AD FS claims-based authentication with Outlook on the web (https://technet.microsoft.com/library/dn635116.aspx).

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsAuthenticationConfiguration
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationRawConfiguration
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsEncryptCertificateThumbprint
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsIssuer
This parameter is available only in on-premises Exchange.

The AdfsIssuer parameter specifies URL of the AD FS server that's used for AD FS claims-based authentication. This is the URL where AD FS relying parties send users for authentication.

To get this value, open Windows PowerShell on the AD FS server and run the command Get-ADFSEndpoint -AddressPath /adfs/ls | Format-List FullUrl.

```yaml
Type: Uri
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AdfsSignCertificateThumbprints
This parameter is available only in on-premises Exchange.

The AdfsSignCertificateThumbprints parameter specifies one or more X.509 token-signing certificates that are used for AD FS claims-based authentication. This parameter uses certificate thumbprint values (GUIDs) to identify the certificates.

To get the thumbprint values of the primary and secondary token-signing certificates, open Windows PowerShell on the AD FS server and run the command Get-ADFSCertificate -CertificateType "Token-signing". For more information, see Get-ADFSCertificate (https://go.microsoft.com/fwlink/p/?linkid=392706).

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppsForOfficeEnabled
The AppsForOfficeEnabled parameter specifies whether to enable apps for Outlook features. By default, the parameter is set to $true. If the flag is set to $false, no new apps can be activated for any user in the organization.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsyncSendEnabled
The AsyncSendEnabled parameter specifies whether to enable or disable async send in Outlook on the web. Valid values are:

- $true: Async send is enabled. This is the default value.

- $false: Async send is disabled.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditDisabled
This parameter is available only in the cloud-based service.

The AuditDisabled parameter specifies whether to disable or enable mailbox auditing for the organization. Valid values are:

- $true: Mailbox auditing is disabled for the organization. 

- $false: Allow mailbox auditing in the organization. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoExpandingArchive
This parameter is available only in the cloud-based service.

The AutoExpandingArchive switch enables the unlimited archiving feature (called auto-expanding archiving) in an Exchange Online organization. You don't need to specify a value with this switch.

After you enable auto-expanding archiving, additional storage space is automatically added to a user's archive mailbox when it approaches the storage limit. Note that a user's archive mailbox has to be enabled before auto-expanding archiving can take effect. Also note that after you enable auto-expanding archiving for your organization, it can't be disabled.

```yaml
Type: SwitchParameter
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BookingsEnabled
This parameter is available only in the cloud-based service.

The BookingsEnabled parameter specifies whether to enable Microsoft Bookings in an Exchange Online organization. Valid values are:

- $true: Bookings are enabled.

- $false: Bookingss are disabled. This is the default value.

Microsoft Bookings is an online and mobile app for small businesses who provide services to customers on an appointment basis.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ByteEncoderTypeFor7BitCharsets
The ByteEncoderTypeFor7BitCharsets parameter specifies the 7-bit transfer encoding method for MIME format for messages sent to this remote domain. The valid values for this parameter are:

- 0: Always use default 7-bit transfer encoding for HTML and plain text.

- 1: Always use QP (quoted-printable) encoding for HTML and plain text.

- 2: Always use Base64 encoding for HTML and plain text.

- 5: Use QP encoding for HTML and plain text unless line wrapping is enabled in plain text. If line wrapping is enabled, use 7-bit encoding for plain text.

- 6: Use Base64 encoding for HTML and plain text, unless line wrapping is enabled in plain text. If line wrapping is enabled in plain text, use Base64 encoding for HTML, and use 7-bit encoding for plain text.

- 13: Always use QP encoding for HTML. Always use 7-bit encoding for plain text.

- 14: Always use Base64 encoding for HTML. Always use 7-bit encoding for plain text.

If no value is specified, Exchange always uses QP encoding for HTML and plain text.

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

### -CalendarVersionStoreEnabled
This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsActionableMessagesEnabled
The ConnectorsActionableMessagesEnabled parameter specifies whether to enable or disable actionable buttons in messages (connector cards) from connected apps on Outlook on the web. Valid values are:

- $true: Action buttons in connector cards are enabled, which allows you to take quick actions directly from Outlook on the web (for example, Like or Comment). This is the default value.

- $false: Action buttons in connector cards are disabled.

For more information about actionable messages in connected apps, see Connect apps to your inbox in Outlook on the web (https://go.microsoft.com/fwlink/p/?LinkId=845310).

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConnectorsEnabled
The ConnectorsEnabled parameter specifies whether to enable or disable connected apps in Outlook on the web Valid values are:

- $true: Connectors are enabled. This is the default value.

- $false: Connectors are disabled.

The workloads that are affected by this parameter are Outlook, SharePoint, Teams, and Yammer.

To enable and disable the ability to use connectors on specific Office 365 groups, set the value of this parameter to $true, and then use the ConnectorsEnabled switch on the Set-UnifiedGroup cmdlet.

For more information about connectors for Outlook on the web, see Connect apps to your inbox in Outlook on the web (https://go.microsoft.com/fwlink/p/?LinkId=845310).

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomerFeedbackEnabled
This parameter is available only in on-premises Exchange.

The CustomerFeedbackEnabled parameter specifies whether the Exchange server is enrolled in the Microsoft Customer Experience Improvement Program.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomerLockboxEnabled
This parameter is available only in the cloud-based service.

The CustomerLockboxEnabled specifies whether Customer Lockbox requests are enabled or disabled for the organization. Valid values are:

- $true: Customer Lockbox requests are enabled. Requests by Microsoft support engineers to access your data appear in the Office 365 admin center for you to approve or reject.

- $false: Customer Lockbox are disabled.

Customer Lockbox is included in the Office 365 E5 plan. For more information about Customer Lockbox, see Office 365 Customer Lockbox Requests (https://go.microsoft.com/fwlink/p/?LinkId=624318).

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DataClassifications
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultGroupAccessType
This parameter is available only in the cloud-based service.

The DefaultGroupAccessType parameter specifies the default access type for Office 365 groups. Valid values are:

- Public

- Private (this is the default value)

```yaml
Type: Private | Public
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: Private
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderAgeLimit
The DefaultPublicFolderAgeLimit parameter specifies the default age limit for the contents of public folders across the entire organization. Content in a public folder is automatically deleted when this age limit is exceeded. This attribute applies to all public folders in the organization that don't have their own AgeLimit setting.

To specify a value, enter it as a time span: dd.hh:mm:ss where d = days, h = hours, m = minutes, and s = seconds. Or, enter the value $null. The default value is blank ($null).

```yaml
Type: EnhancedTimeSpan
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderDeletedItemRetention
The DefaultPublicFolderDeletedItemRetention parameter specifies the default value of the length of time to retain deleted items for public folders across the entire organization. This attribute applies to all public folders in the organization that don't have their own RetainDeletedItemsFor attribute set.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderIssueWarningQuota
The DefaultPublicFolderIssueWarningQuota parameter specifies the default value across the entire organization for the public folder size at which a warning message is sent to this folder's owners, warning that the public folder is almost full. This attribute applies to all public folders within the organization that don't have their own warning quota attribute set. The default value of this attribute is unlimited.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2199023254529 bytes(2 TB). If you enter a value of unlimited, no size limit is imposed on the public folder.

```yaml
Type: Unlimited
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderMaxItemSize
The DefaultPublicFolderMaxItemSize parameter specifies the default maximum size for posted items within public folders across the entire organization. Items larger than the value of the DefaultPublicFolderMaxItemSize parameter are rejected. This attribute applies to all public folders within the organization that don't have their own MaxItemSize attribute set. The default value of this attribute is unlimited.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2199023254529 bytes (2 TB). If you enter a value of unlimited, no size limit is imposed on the public folder.

```yaml
Type: Unlimited
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderMovedItemRetention
The DefaultPublicFolderMovedItemRetention parameter specifies how long items that have been moved between mailboxes are kept in the source mailbox for recovery purposes before being removed by the Public Folder Assistant.

When you move folder contents between mailboxes, a copy of the original data is left on the source mailbox, inaccessible for users but available for recovery by system administrators. If the move process fails and you want to roll it back, use the Set-PublicFolder -OverrideContentMailbox command to recover data. For more information, see Set-PublicFolder.

```yaml
Type: EnhancedTimeSpan
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultPublicFolderProhibitPostQuota
The DefaultPublicFolderProhibitPostQuota parameter specifies the size of a public folder at which users are notified that the public folder is full. Users can't post to a folder whose size is larger than the DefaultPublicFolderProhibitPostQuota parameter value. The default value of this attribute is unlimited.

When you enter a value, qualify the value with one of the following units:

- B (bytes)

- KB (kilobytes)

- MB (megabytes)

- GB (gigabytes)

- TB (terabytes)

Unqualified values are typically treated as bytes, but small values may be rounded up to the nearest kilobyte.

The valid input range for this parameter is from 0 through 2199023254529 bytes (2 TB). If you enter a value of unlimited, no size limit is imposed on the public folder.

```yaml
Type: Unlimited
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DirectReportsGroupAutoCreationEnabled
This parameter is available only in the cloud-based service.

The DirectReportsGroupAutoCreationEnabled parameter specifies whether to enable or disable the automatic creation of direct report Office 365 groups. Valid values are:

- $true: The automatic creation of direct report Office 365 groups is enabled. This is the default value.

- $false: The automatic creation of direct report Office 365 groups is disabled.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionGroupDefaultOU
The DistributionGroupDefaultOU parameter specifies the container where distribution groups are created by default.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionGroupNameBlockedWordsList
The DistributionGroupNameBlockedWordsList parameter specifies words that can't be included in the names of distribution groups. Separate multiple values with commas.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DistributionGroupNamingPolicy
The DistributionGroupNamingPolicy parameter specifies the template applied to the name of distribution groups that are created in the organization. You can enforce that a prefix or suffix be applied to all distribution groups. Prefixes and suffixes can be either a string or an attribute, and you can combine strings and attributes. When creating a naming policy, use the following syntax:

"prefix\<GroupName\>suffix"

Don't set the \<GroupName\>. Users create the name when they create the distribution group. You can have multiple prefixes and suffixes.

You can use the following attributes that will be gathered from the user who's creating the distribution group mailbox settings:

- Department

- Company

- Office

- StateOrProvince

- CountryorRegion

- CountryCode

- Title

- CustomAttribute1 to CustomAttribute15

To create a naming policy using an attribute, use the following syntax: "\<PrefixAttribute\>\<GroupName\>\<SuffixAttribute\>".

For example, to create a naming policy using the Department as a prefix and CustomAttribute1 as the suffix:

"\<Department\>\<GroupName\>\<CustomAttribute1\>".

To create a naming policy using strings, use the following syntax "string\<GroupName\>string". For example to create a naming policy using the string "DL\_" as the prefix use the following syntax: "DL\_\<GroupName\>".

```yaml
Type: DistributionGroupNamingPolicy
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
This parameter is available only in on-premises Exchange.

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

### -ElcProcessingDisabled
This parameter is available only in the cloud-based service.

The ElcProcessingDisabled parameter specifies whether to enable or disable the processing of mailboxes by the Managed Folder Assistant. Valid values are:

- $true: The Managed Folder Assistant isn't allowed to process mailboxes in the organization. Note that this setting will be ignored on a mailbox if a retention policy that has Preservation Lock enabled is applied to that mailbox.

- $false: The Managed Folder Assistant is allowed to process mailboxes in the organization. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EndUserDLUpgradeFlowsDisabled
This parameter is available only in the cloud-based service.

The EndUserDLUpgradeFlowsDisabled parameter specifies whether to prevent users from upgrading their own distribution groups to Office 365 groups in an Exchange Online organization. Valid values are:

- $true: Users can upgrade distribution groups that they own to Office 365 groups.

- $false: Users can't upgrade distribution groups that they own to Office 365 groups. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowEntourage
The EwsAllowEntourage parameter specifies whether to enable or disable Entourage 2008 to access Exchange Web Services (EWS) for the entire organization. The default value is $true.

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

### -EwsAllowList
The EwsAllowList parameter specifies the applications that are allowed to access EWS or REST when the EwsApplicationAccessPolicy parameter is set to EwsAllowList. Other applications that aren't specified by this parameter aren't allowed to access EWS or REST. You identify the application by its user agent string value. Wildcard characters (\*) are supported.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsAllowMacOutlook
The EwsAllowMacOutlook parameter specifies whether to enable or disable Microsoft Outlook for Mac 2011 to access EWS for the entire organization.

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

### -EwsAllowOutlook
The EwsAllowOutlook parameter enables or disables Microsoft Office Outlook 2007 to access EWS for the entire organization. Outlook 2007 uses EWS for free and busy information, out-of-office settings, and calendar sharing.

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

### -EwsApplicationAccessPolicy
The EwsApplicationAccessPolicy parameter specifies the client applications that have access to EWS and REST. Valid values are:

- EnforceAllowList: Only applications specified by the EwsAllowList parameter are allowed to access EWS and REST. Access by other applications is blocked.

- EnforceBlockList: All applications are allowed to access EWS and REST, except for the applications specified by the EwsBlockList parameter.

Note that this parameter doesn't affect access to EWS by Entourage, Mac Outlook, and Outlook. Access to EWS by these applications is controlled by the EwsAllowEntourage, EwsAllowMacOutlook and EwsAllowOutlook parameters.

```yaml
Type: EnforceAllowList | EnforceBlockList
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsBlockList
The EwsBlockList parameter specifies the applications that aren't allowed to access EWS or REST when the EwsApplicationAccessPolicy parameter is set to EnforceBlockList. All other applications that aren't specified by this parameter are allowed to access EWS or REST. You identify the application by its user agent string value. Wildcard characters (\*) are supported.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EwsEnabled
The EwsEnabled parameter specifies whether to globally enable or disable EWS access for the entire organization, regardless of what application is making the request. Valid values are:

- $true: All EWS access is enabled.

- $false: All EWS access is disabled.

- $null (blank): The setting isn't configured. Access to EWS is controlled individually by the releated EWS parameters (for example EwsAllowEntourage). This is the default value.

This parameter has no affect on access to REST.

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

### -ExchangeNotificationEnabled
This parameter is available only in the cloud-based service.

The ExchangeNotificationEnabled parameter enables or disables Exchange notifications sent to administrators regarding their organizations. Valid input for this parameter is $true or $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExchangeNotificationRecipients
This parameter is available only in the cloud-based service.

The ExchangeNotificationRecipients parameter specifies the recipients for Exchange notifications sent to administrators regarding their organizations. If the ExchangeNotificationEnabled parameter is set to $false, no notification messages are sent. Be sure to enclose values that contain spaces in quotation marks (") and separate multiple values with commas. If this parameter isn't set, Exchange notifications are sent to all administrators.

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

### -FocusedInboxOn
This parameter is available only in the cloud-based service.

The FocusedInboxOn parameter enables or disables Focused Inbox for the organization. Valid values are:

- $true: Focused Inbox is enabled.

- $false: Focused Inbox is disabled.

To disable Focused Inbox on specific mailboxes, enable Focused Inbox for the organization, and then use the Set-FocusedInbox cmdlet.

Focused Inbox is a replacement for Clutter that separates the Inbox into the Focused and Other tabs in Outlook on the web and newer versions of Outlook. Important emails are on the Focused tab while the rest are on the Other tab.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HierarchicalAddressBookRoot
The HierarchicalAddressBookRoot parameter specifies the user, contact, or group to be used as the root organization for a hierarchical address book in the Exchange organization. You can use any value that uniquely identifies the recipient.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID

Setting a value for this parameter enables the hierarchical address book to be automatically displayed in Outlook for the organization.

The default value is blank. To reset this parameter, use the value $null.

```yaml
Type: UserContactGroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Industry
This parameter is available only in on-premises Exchange.

The Industry parameter specifies the industry that best represents your organization.

```yaml
Type: NotSpecified | Agriculture | Finance | BusinessServicesConsulting | Communications | ComputerRelatedProductsServices | Construction | Education | EngineeringArchitecture | Government | Healthcare | Hospitality | Legal | Manufacturing | MediaMarketingAdvertising | Mining | NonProfit | PersonalServices | PrintingPublishing | RealEstate | Retail | Transportation | Utilities | Wholesale | Other
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPListBlocked
This parameter is available only in the cloud-based service.

The IPListBlocked parameter specifies the blocked IP addresses that aren't allowed to connect to Exchange Online organization. These settings affect client connections that use Basic authentication where on-premises Active Directory Federation Services (ADFS) servers federate authentication with Azure Active Directory. Note that the new settings might take up to 4 hours to fully propagate across the service.

This parameter accepts IPv4 or IPv6 addresses in the following formats:

- Single IP address: For example, 192.168.1.1 or fe80::39bd:88f7:6969:d223%11.

- IP address range high-low: For example, 192.168.0.1-192.168.0.254.

- IP address range with subnet mask: For example, 192.168.8.2(255.255.255.0).

- Classless Inter-Domain Routing (CIDR) IP: For example, 192.168.3.1/24 or 2001:0DB8::CD3/60.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\">.

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsAgendaMailEnabled
The IsAgendaMailEnabled parmeter specifies whether to enable or disable daily agenda messages. Valid values are:

- $true: Users receive a daily agenda message in their Inbox from the Microsoft Outlook Calendar. This is the default value.

- $false: The daily agenda message is disabled for all users.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromOffboardMigration
This parameter is available only in on-premises Exchange.

The IsExcludedFromOffboardMigration parameter specifies that no new moves from the cloud to your on-premises organization are permitted. When this flag is set, no offboarding move requests are allowed.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromOnboardMigration
This parameter is available only in on-premises Exchange.

The IsExcludedFromOnboardMigration parameter specifies that no new moves from your on-premises organization to the cloud are permitted. When this flag is set, no onboarding move requests are allowed.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LeanPopoutEnabled
The LeanPopoutEnabled parameter specifies whether to enable faster loading of pop-out messages in Outlook on the web for Internet Explorer and Microsoft Edge. Valid values are:

- $true: Lean pop-outs are enabled.

- $false: Lean pop-outs are disabled. This is the default value.

Notes:

- Lean pop-outs aren't available for messages that contain attachments or information rights management (IRM) restrictions.

- Outlook add-ins and Skype for Business Online presence aren't available with lean pop-outs.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkPreviewEnabled
The LinkPreviewEnabled parameter specifies whether link preview of URLs in email messages is allowed for the organization. Valid values are:

- $true: Link preview of URLs in email messages is allowed. Users can enable or disable link preview in their Outlook on the web settings. This is the default value.

- $false: Link preview of URLs in email messages is not allowed. Users can't enable link preview in their Outlook on the web settings.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipsAllTipsEnabled
The MailTipsAllTipsEnabled parameter specifies whether MailTips are enabled. The default value is $true.

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

### -MailTipsExternalRecipientsTipsEnabled
The MailTipsExternalRecipientsTipsEnabled parameter specifies whether MailTips for external recipients are enabled. The default value is $false.

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

### -MailTipsGroupMetricsEnabled
The MailTipsGroupMetricsEnabled parameter specifies whether MailTips that rely on group metrics data are enabled. The default value is $true.

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

### -MailTipsLargeAudienceThreshold
The MailTipsLargeAudienceThreshold parameter specifies what a large audience is. The default value is 25.

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailTipsMailboxSourcedTipsEnabled
The MailTipsMailboxSourcedTipsEnabled parameter specifies whether MailTips that rely on mailbox data (out-of-office or full mailbox) are enabled.

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

### -ManagedFolderHomepage
This parameter is available only in on-premises Exchange.

The ManagedFolderHomepage parameter specifies the URL of the web page that's displayed when users click the Managed Folders folder in Outlook. If a URL isn't specified, Outlook doesn't display a managed folders home page.

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

### -MapiHttpEnabled
This parameter is available only in on-premises Exchange.

The MapiHttpEnabled parameter enables or disables access to mailboxes in Outlook by using MAPI over HTTP. Valid values are:

- $true: Access to mailboxes by using MAPI over HTTP is enabled. This is the default value.

- $false: Access to mailboxes by using MAPI over HTTP is disabled.

You can use the MapiHttpEnabled parameter on the Set-CASMailbox cmdlet to override the global MAPI over HTTP settings for individual users.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxConcurrentMigrations
This parameter is available only in on-premises Exchange.

The MaxConcurrentMigrations parameter specifies the maximum number of concurrent migrations that your organization can configure at any specific time.

```yaml
Type: Unlimited
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientEmailAddresses
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientEmailAddresses parameter specifies one or more email addresses for the recipient. All valid Microsoft Exchange email address types may be used. You can specify multiple values for this parameter as a comma-delimited list. If the MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter is set to $true, the email addresses are automatically generated by the default email address policy. This means you can't use the MicrosoftExchangeRecipientEmailAddresses parameter.

Email addresses that you specify by using the MicrosoftExchangeRecipientEmailAddresses parameter replace any existing email addresses already configured.

```yaml
Type: ProxyAddressCollection
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientEmailAddressPolicyEnabled
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter specifies whether the default email address policy is automatically applied to the Exchange recipient. The default value is $true. If this parameter is set to $true, Exchange automatically adds new email addresses to the Exchange recipient when email address policies are added or modified in the Exchange organization. If this parameter is set to $false, you must manually add new email addresses to the Exchange recipient when email address policies are added or modified.

If you change the value of the MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter from $false to $true, any email addresses that you defined by using the MicrosoftExchangeRecipientEmailAddresses parameter are preserved. However, the value of the MicrosoftExchangeRecipientPrimarySmtpAddress parameter reverts to MicrosoftExchange329e71ec88ae4615bbc36ab6ce41109e@\<Accepted Domain in Highest Priority Email Address Policy\>.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientPrimarySmtpAddress
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientPrimarySmtpAddress parameter specifies the primary return SMTP email address for the Exchange recipient. If the MicrosoftExchangeRecipientEmailAddressPolicyEnabled parameter is set to $true, you can't use the MicrosoftExchangeRecipientPrimarySmtpAddress parameter.

If you modify the value of the MicrosoftExchangeRecipientPrimarySmtpAddress parameter, the value is automatically added to the list of email addresses defined in the MicrosoftExchangeRecipientEmailAddresses parameter.

The MicrosoftExchangeRecipientPrimarySmtpAddress parameter is meaningful only if the Exchange recipient has more than one defined SMTP email address. If the MicrosoftExchangeRecipientEmailAddresses parameter has only one defined SMTP email address, the value of the MicrosoftExchangeRecipientPrimarySmtpAddress parameter and the MicrosoftExchangeRecipientEmailAddresses parameter are the same.

```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftExchangeRecipientReplyRecipient
This parameter is available only in on-premises Exchange.

The MicrosoftExchangeRecipientReplyRecipient parameter specifies the recipient that should receive messages sent to the Exchange recipient. Typically, you would configure a mailbox to receive the messages sent to the Exchange recipient. You can use any value that uniquely identifies the recipient:

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: RecipientIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OAuth2ClientProfileEnabled
The OAuth2ClientProfileEnabled parameter enables or disables modern authentication in the Exchange organization. Valid values are:

- $true: Modern authentication is enabled.

- $false: Modern authentication is disabled. 

Modern authentication is based on the Active Directory Authentication Library (ADAL) and OAuth 2.0, and enables authentication features like multi-factor authentication (MFA), certificate-based authentication (CBA), and third-party SAML identity providers.

When you enable modern authentication in Exchange Online, we recommend that you also enable it in Skype for Business Online. For more information, see https://aka.ms/SkypeModernAuth (https://aka.ms/SkypeModernAuth).

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationSummary
This parameter is available only in on-premises Exchange.

The OrganizationSummary parameter specifies a summarized description that best represents your organization.

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

### -PermanentlyDeleteDisabled
This parameter is available or functional only in Exchange Server 2010.

The PermanentlyDeleteDisabled parameter specfies whether to disable the PermanentlyDelete retention action for messaging records management (MRM). Valid values are:

- $true The PermanentlyDelete retention action is disabled. This setting only prevents items from being permanently deleted. It doesn't modify existing polices, block the creation of policies with the PermanentlyDelete action or notify users that thePermanentlyDelete action won't actually take effect.

- $false The PermanentlyDelete retention action is enabled. This is the default value.

A message that's permanently deleted can't be recovered by using the Recoverable Items folder. Additionally, permanently deleted messages aren't returned by a Discovery search, unless litigation hold or single item recovery is enabled for the mailbox.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PerTenantSwitchToESTSEnabled
This parameter is available only in the cloud-based service.

This parameter has been deprecated and is no longer used.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PreferredInternetCodePageForShiftJis
This parameter is reserved for internal Microsoft use.

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

### -PublicComputersDetectionEnabled
The PublicComputersDetectionEnabled parameter specifies whether Outlook on the web will detect when a user signs from a public or private computer or network, and then enforces the attachment handling settings from public networks. The default is $false. However, if you set this parameter to $true, Outlook on the web will determine if the user is signing in from a public computer, and all public attachment handling rules will be applied and enforced.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderContentReplicationDisabled
This parameter is available or functional only in Exchange Server 2010.

The PublicFolderContentReplicationDisabled parameter is used during public folder migration. When you set the PublicFolderContentReplicationDisabled parameter to $true, public folder content is not replicated to Exchange during the initial migration. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderMailboxesLockedForNewConnections
This parameter is available only in on-premises Exchange.

The PublicFolderMailboxesLockedForNewConnections parameter specifies whether users are allowed to make new connections to public folder mailboxes. Valid values are:

- $true: Users aren't allowed to make new connections to public folder mailboxes. You use this setting during the final stages of public folder migrations.

- $false: Users are allowed to make new connections to public folder mailboxes. This is the default value.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderMailboxesMigrationComplete
This parameter is available only in on-premises Exchange.

The PublicFolderMailboxesMigrationComplete parameter is used during public folder migration.

- $true: Queued messages are rerouted to the new destination.

- $false (This is the default value)

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolderMigrationComplete
This parameter is available only in on-premises Exchange.

The PublicFolderMigrationComplete parameter is used during public folder migration. When you set the PublicFolderMigrationComplete parameter to $true, transport starts rerouting the queued messages to a new destination. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFoldersEnabled
The PublicFoldersEnabled parameter specifies how public folders are deployed in your organization. This parameter uses one of the following values.

- Local: The public folders are deployed locally in your organization.

- Remote: The public folders are deployed in the remote forest.

- None: No public folders are deployed for this organization.

```yaml
Type: None | Local | Remote
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFoldersLockedForMigration
This parameter is available only in on-premises Exchange.

The PublicFoldersLockedForMigration parameter specifies whether users are locked out from accessing down level public folder servers. When you set the PublicFoldersLockedForMigration parameter to $true, users are locked out from accessing down level public folder servers. This is used for public folder migration during final stages. The default value is $false, which means that the user is able to access public folder servers.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReadTrackingEnabled
The ReadTrackingEnabled parameter specifies whether the tracking for read status for messages in an organization is enabled. The default value is $false.

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

### -RefreshSessionEnabled
The RefreshSessionEnabled parameter specifies whether to enable or disable the use of refresh tokens when using OpenID Connect for authentication. Valid values are:

- $true: Refresh tokens are enabled.

- $false: Refresh tokens are disabled.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePublicFolderMailboxes
The RemotePublicFolderMailboxes parameter specifies the identities of the public folder objects (represented as mail user objects locally) corresponding to the public folder mailboxes created in the remote forest. The public folder values set here are used only if the public folder deployment is a remote deployment.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiredCharsetCoverage
This parameter is reserved for internal Microsoft use.

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

### -SCLJunkThreshold
This parameter is available only in on-premises Exchange.

The SCLJunkThreshold parameter specifies the spam confidence level (SCL) threshold. Messages with an SCL greater than the value that you specify for the SCLJunkThreshold parameter are moved to the Junk Email folder. Valid values are integers from 0 through 9, inclusive.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteMailboxCreationURL
The SiteMailboxCreationURL parameter specifies the URL that's used to create site mailboxes. Site mailboxes improve collaboration and user productivity by allowing access to both SharePoint documents and Exchange email in Outlook 2013 or later.

```yaml
Type: Uri
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SmtpActionableMessagesEnabled
The SmtpActionableMessagesEnabled parameter specifies whether to enable or disable action buttons in email messages in Outlook on the web. Valid values are:

- $true: Action buttons in email messages are enabled. This is the default value.

- $false: Action buttons in email messages are disabled.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMAvailableLanguages
This parameter is available only in on-premises Exchange.

This parameter has been deprecated and is no longer used.

```yaml
Type: MultiValuedProperty
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UnblockUnsafeSenderPromptEnabled
The UnblockUnsafeSenderPromptEnabled parameter specifies whether to enable or disable the prompt to unblock unsafe senders in Outlook on the web. Valid values are:

- $true: The prompt to unblock unsafe senders is enabled. This is the default value.

- $false: The prompt to unblock unsafe senders is disabled.

```yaml
Type: $true | $false
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WACDiscoveryEndpoint
This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AdfsAuthenticationRawConfiguration, AdfsAuthenticationParameter
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016
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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
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

[Online Version](https://technet.microsoft.com/library/3b6df0fe-27c8-415f-ad0c-8b265f234c1a.aspx)
