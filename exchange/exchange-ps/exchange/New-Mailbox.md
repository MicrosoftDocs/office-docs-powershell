---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# New-Mailbox

## SYNOPSIS
!!! Exchange Server 2010

Use the New-Mailbox cmdlet to create a user in Active Directory and mailbox-enable this new user.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-Mailbox cmdlet to create a user in Active Directory and mailbox-enable this new user.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-Mailbox cmdlet to create mailboxes and user accounts at the same time.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set5
```
New-Mailbox [-Name] <String> [-AccountDisabled] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 [-ImportLiveId] -WindowsLiveID <WindowsLiveId>
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] [-UseExistingLiveId] [-InactiveMailbox <MailboxIdParameter>] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set15
```
New-Mailbox [-Name] <String> [-Arbitration] [-Password <SecureString>] -UserPrincipalName <String>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-ArbitrationMailbox <MailboxIdParameter>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-SendModerationNotifications <Never | Internal | Always>]
 [-TargetAllMDBs] -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter>
 [-LinkedCredential <PSCredential>] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set9
```
New-Mailbox [-Name] <String> -ArchiveDomain <SmtpDomain> -Password <SecureString> -UserPrincipalName <String>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RemoteArchive]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set16
```
New-Mailbox [-Name] <String> [-Discovery] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-Arbitration]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-TargetAllMDBs]
 [-ArbitrationMailbox <MailboxIdParameter>] [-MailboxRegion <String>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set13
```
New-Mailbox [-Name] <String> [-Equipment] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>]
 [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] -WindowsLiveID <WindowsLiveId> [-EvictLiveId]
 [-MailboxPlan <MailboxPlanIdParameter>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] -ArchiveDomain <SmtpDomain> [-MailboxRegion <String>] [-RemoteArchive]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set8
```
New-Mailbox [-Name] <String> -FederatedIdentity <String> -WindowsLiveID <WindowsLiveId>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-EvictLiveId] [-FirstName <String>] [-Force] [-ImmutableId <String>]
 [-Initials <String>] [-LastName <String>] [-MailboxPlan <MailboxPlanIdParameter>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>]
 [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 -MicrosoftOnlineServicesID <WindowsLiveId> [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] [-ImportLiveId] [-ArbitrationMailbox <MailboxIdParameter>] [-MailboxRegion <String>]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set6
```
New-Mailbox [-Name] <String> [-ImportLiveId] -WindowsLiveID <WindowsLiveId>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 [-Password <SecureString>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] -RemovedMailbox <RemovedMailboxIdParameter>
 [-TargetAllMDBs] -UserPrincipalName <String> [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set11
```
New-Mailbox [-Name] <String> -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter>
 [-Password <SecureString>] [-UserPrincipalName <String>] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>] [-LinkedCredential <PSCredential>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>]
 [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-TargetAllMDBs] -FederatedIdentity <String>
 -WindowsLiveID <WindowsLiveId> [-EvictLiveId] [-MailboxRegion <String>]
 [-RemovedMailbox <RemovedMailboxIdParameter>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set1
```
New-Mailbox [-Name] <String> -Password <SecureString> -UserPrincipalName <String>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] [-InactiveMailbox <MailboxIdParameter>] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set10
```
New-Mailbox [-Name] <String> -Password <SecureString> -WindowsLiveID <WindowsLiveId>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-EvictLiveId]
 [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 -MicrosoftOnlineServicesID <WindowsLiveId> [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] -InactiveMailbox <MailboxIdParameter> [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set2
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-Room] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>] [-Office <String>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-Phone <String>] [-PrimarySmtpAddress <SmtpAddress>]
 [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-ResourceCapacity <Int32>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-TargetAllMDBs] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set3
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter> [-LinkedRoom]
 [-UserPrincipalName <String>] [-LinkedCredential <PSCredential>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-Office <String>] [-Phone <String>]
 [-ResourceCapacity <Int32>] [-TargetAllMDBs] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set12
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>]
 [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-AccountDisabled]
 [-MailboxPlan <MailboxPlanIdParameter>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-TargetAllMDBs] -FederatedIdentity <String>
 -MicrosoftOnlineServicesID <WindowsLiveId> [-MailboxRegion <String>]
 [-RemovedMailbox <RemovedMailboxIdParameter>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set14
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-Shared] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>] [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>] [-ModerationEnabled <$true | $false>]
 [-Organization <OrganizationIdParameter>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-OverrideRecipientQuotas] [-PrimarySmtpAddress <SmtpAddress>]
 [-QueryBaseDNRestrictionEnabled <$true | $false>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-Discovery]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-TargetAllMDBs]
 -MicrosoftOnlineServicesID <WindowsLiveId> [-InactiveMailbox <MailboxIdParameter>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-MailboxRegion <String>]
 [-RemovedMailbox <RemovedMailboxIdParameter>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set4
```
New-Mailbox [-Name] <String> [-UseExistingLiveId] -WindowsLiveID <WindowsLiveId>
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] -Password <SecureString> [-EvictLiveId] [-InactiveMailbox <MailboxIdParameter>]
 [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set7
```
New-Mailbox [-Name] <String> -UserPrincipalName <String> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>] [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-Organization <OrganizationIdParameter>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-OverrideRecipientQuotas]
 [-PrimarySmtpAddress <SmtpAddress>] [-QueryBaseDNRestrictionEnabled <$true | $false>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf]
 -FederatedIdentity <String> -WindowsLiveID <WindowsLiveId> [-EvictLiveId]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-TargetAllMDBs] [-AccountDisabled] [-Password <SecureString>] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set23
```
New-Mailbox [-Name] <String> -EnableRoomMailboxAccount <$true | $false>
 [-MicrosoftOnlineServicesID <WindowsLiveId>] [-Room] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-RoomMailboxPassword <SecureString>]
 [-SamAccountName <String>] [-SharingPolicy <SharingPolicyIdParameter>] [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-Arbitration] [-Migration]
 [-Password <SecureString>] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set17
```
New-Mailbox [-Name] <String> [-Equipment] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set20
```
New-Mailbox [-Name] <String> -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter>
 [-Password <SecureString>] [-UserPrincipalName <String>] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>] [-LinkedCredential <PSCredential>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set18
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf] [-Scheduling] [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation]
 [<CommonParameters>]
```

### Set19
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-Shared]
 [-MailboxRegion <String>] [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set21
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-Shared] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set22
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <$true | $false>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [-Arbitration]
 [-MailboxRegion <String>] [-OfficeGraph] [-ProvisionedForOfficeGraph]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set26
```
New-Mailbox [-Name] <String> [-PublicFolder] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-HoldForMigration] [-ImmutableId <String>]
 [-Initials <String>] [-IsExcludedFromServingHierarchy <$true | $false>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf] [-AuditLog] -UserPrincipalName <String> [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set24
```
New-Mailbox [-Name] <String> -UserPrincipalName <String> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf] [-Discovery] [-Password <SecureString>] [-MailboxRegion <String>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set25
```
New-Mailbox [-Name] <String> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-ModeratedBy <MultiValuedProperty>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SendModerationNotifications <Never | Internal | Always>]
 [-SharingPolicy <SharingPolicyIdParameter>] [-TargetAllMDBs] [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf] -EnableRoomMailboxAccount <$true | $false> [-MicrosoftOnlineServicesID <WindowsLiveId>] [-Room]
 [-UserPrincipalName <String>] [-MailboxRegion <String>] [-RoomMailboxPassword <SecureString>]
 [-SkipMailboxProvisioningConstraintValidation] [<CommonParameters>]
```

### Set27
```
New-Mailbox [-Name] <String> [-AuxAuditLog] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-SkipMailboxProvisioningConstraintValidation] [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set30
```
New-Mailbox [-Name] <String> [-PublicFolder] [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-HoldForMigration] [-ImmutableId <String>]
 [-Initials <String>] [-IsExcludedFromServingHierarchy <$true | $false>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-SkipMailboxProvisioningConstraintValidation] [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set28
```
New-Mailbox [-Name] <String> [-SupervisoryReviewPolicy] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>] [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm] [-Database <DatabaseIdParameter>] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-FirstName <String>] [-Force] [-ImmutableId <String>] [-Initials <String>]
 [-LastName <String>] [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>] [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <$true | $false>] [-ResetPasswordOnNextLogon <$true | $false>]
 [-RetentionPolicy <MailboxPolicyIdParameter>] [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-SkipMailboxProvisioningConstraintValidation] [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set29
```
New-Mailbox [-Name] <String> [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>] [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>] [-Archive] [-ArchiveDatabase <DatabaseIdParameter>] [-Confirm]
 [-Database <DatabaseIdParameter>] [-DisplayName <String>] [-DomainController <Fqdn>] [-FirstName <String>]
 [-Force] [-ImmutableId <String>] [-Initials <String>] [-LastName <String>]
 [-MailboxProvisioningConstraint <MailboxProvisioningConstraint>]
 [-MailboxProvisioningPreferences <MultiValuedProperty>] [-MailboxRegion <String>]
 [-ModeratedBy <MultiValuedProperty>] [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>] [-RemotePowerShellEnabled <$true | $false>]
 [-ResetPasswordOnNextLogon <$true | $false>] [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>] [-SamAccountName <String>]
 [-SendModerationNotifications <Never | Internal | Always>] [-SharingPolicy <SharingPolicyIdParameter>]
 [-SkipMailboxProvisioningConstraintValidation] [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Mailbox Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Recipient Provisioning Permissions" section in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
$password = Read-Host "Enter password" -AsSecureString; New-Mailbox -UserPrincipalName chris@contoso.com -Alias chris -Database "Mailbox Database 1" -Name ChrisAshton -OrganizationalUnit Users -Password $password -FirstName Chris -LastName Ashton -DisplayName "Chris Ashton" -ResetPasswordOnNextLogon $true
```

This example creates a user Chris Ashton in Active Directory and creates a mailbox for the user. The mailbox is located on Mailbox Database 1. The password must be reset at the next logon. To set the initial value of the password, this example creates a variable ($password), prompts you to enter a password, and assigns that password to the variable as a SecureString object.

### Example 1 -------------------------- (Exchange Server 2013)
```
$password = Read-Host "Enter password" -AsSecureString; New-Mailbox -UserPrincipalName chris@contoso.com -Alias chris -Database "Mailbox Database 1" -Name ChrisAshton -OrganizationalUnit Users -Password $password -FirstName Chris -LastName Ashton -DisplayName "Chris Ashton" -ResetPasswordOnNextLogon $true
```

This example creates a user Chris Ashton in Active Directory and creates a mailbox for the user. The mailbox is located on Mailbox Database 1. The password must be reset at the next logon. To set the initial value of the password, this example creates a variable ($password), prompts you to enter a password, and assigns that password to the variable as a SecureString object.

### Example 1 -------------------------- (Exchange Server 2016)
```
$password = Read-Host "Enter password" -AsSecureString; New-Mailbox -UserPrincipalName chris@contoso.com -Alias chris -Database "Mailbox Database 1" -Name ChrisAshton -OrganizationalUnit Users -Password $password -FirstName Chris -LastName Ashton -DisplayName "Chris Ashton" -ResetPasswordOnNextLogon $true
```

This example creates a user Chris Ashton in Active Directory and creates a mailbox for the user. The mailbox is located on Mailbox Database 1. The password must be reset at the next logon. To set the initial value of the password, this example creates a variable ($password), prompts you to enter a password, and assigns that password to the variable as a SecureString object.

### Example 1 -------------------------- (Exchange Online)
```
$password = Read-Host "Enter password" -AsSecureString; New-Mailbox -UserPrincipalName chris@contoso.com -Alias chris -Database "Mailbox Database 1" -Name ChrisAshton -OrganizationalUnit Users -Password $password -FirstName Chris -LastName Ashton -DisplayName "Chris Ashton" -ResetPasswordOnNextLogon $true
```

This example creates a user Chris Ashton in Active Directory and creates a mailbox for the user. The mailbox is located on Mailbox Database 1. The password must be reset at the next logon. To set the initial value of the password, this example creates a variable ($password), prompts you to enter a password, and assigns that password to the variable as a SecureString object.

### Example 2 -------------------------- (Exchange Server 2010)
```
New-Mailbox -UserPrincipalName confmbx@contoso.com -Alias confmbx -Name ConfRoomMailbox -Database "Mailbox Database 1" -OrganizationalUnit Users -Room -ResetPasswordOnNextLogon $true
```

This example creates a user in Active Directory and a resource mailbox for a conference room. The resource mailbox is located in Mailbox Database 1. The password must be reset at the next logon. The Exchange Management Shell prompts for the value of the initial password because it's not specified.

### Example 2 -------------------------- (Exchange Server 2013)
```
New-Mailbox -UserPrincipalName confmbx@contoso.com -Alias confmbx -Name ConfRoomMailbox -Database "Mailbox Database 1" -OrganizationalUnit Users -Room -ResetPasswordOnNextLogon $true
```

This example creates a user in Active Directory and a resource mailbox for a conference room. The resource mailbox is located in Mailbox Database 1. The password must be reset at the next logon. The Exchange Management Shell prompts for the value of the initial password because it's not specified.

### Example 2 -------------------------- (Exchange Server 2016)
```
New-Mailbox -UserPrincipalName confmbx@contoso.com -Alias confmbx -Name ConfRoomMailbox -Database "Mailbox Database 1" -OrganizationalUnit Users -Room -ResetPasswordOnNextLogon $true
```

This example creates a user in Active Directory and a resource mailbox for a conference room. The resource mailbox is located in Mailbox Database 1. The password must be reset at the next logon. You are prompted for the value of the initial password because it's not specified.

### Example 2 -------------------------- (Exchange Online)
```
New-Mailbox -UserPrincipalName confmbx@contoso.com -Alias confmbx -Name ConfRoomMailbox -Database "Mailbox Database 1" -OrganizationalUnit Users -Room -ResetPasswordOnNextLogon $true
```

This example creates a user in Active Directory and a resource mailbox for a conference room. The resource mailbox is located in Mailbox Database 1. The password must be reset at the next logon. You are prompted for the value of the initial password because it's not specified.

### Example 3 -------------------------- (Exchange Server 2013)
```
New-Mailbox -UserPrincipalName confroom1010@contoso.com -Alias confroom1010 -Name "Conference Room 1010" -Room -EnableRoomMailboxAccount $true -RoomMailboxPassword (ConvertTo-SecureString -String P@ssw0rd -AsPlainText -Force)
```

This example creates an enabled user account in Active Directory and a room mailbox for a conference room in an on-premises Exchange organization. The RoomMailboxPassword parameter specifies the password for the user account.

### Example 3 -------------------------- (Exchange Server 2016)
```
New-Mailbox -UserPrincipalName confroom1010@contoso.com -Alias confroom1010 -Name "Conference Room 1010" -Room -EnableRoomMailboxAccount $true -RoomMailboxPassword (ConvertTo-SecureString -String P@ssw0rd -AsPlainText -Force)
```

This example creates an enabled user account in Active Directory and a room mailbox for a conference room in an on-premises Exchange organization. The RoomMailboxPassword parameter specifies the password for the user account.

### Example 3 -------------------------- (Exchange Online)
```
New-Mailbox -UserPrincipalName confroom1010@contoso.com -Alias confroom1010 -Name "Conference Room 1010" -Room -EnableRoomMailboxAccount $true -RoomMailboxPassword (ConvertTo-SecureString -String P@ssw0rd -AsPlainText -Force)
```

This example creates an enabled user account in Active Directory and a room mailbox for a conference room in an on-premises Exchange organization. The RoomMailboxPassword parameter specifies the password for the user account.

### Example 4 -------------------------- (Exchange Server 2013)
```
New-Mailbox -Shared -Name "Sales Department" -DisplayName "Sales Department" -Alias Sales; Set-Mailbox -Identity Sales -GrantSendOnBehalfTo MarketingSG; Add-MailboxPermission -Identity Sales -User MarketingSG -AccessRights FullAccess -InheritanceType All
```

This example creates the shared mailbox "Sales Department" and grants Full Access and Send on Behalf permissions for the security group "MarketingSG". Users who are members of the security group will be granted the permissions to the mailbox.


This example assumes that you've already created a mail-enabled security group named "MarketingSG" by using the New-DistributionGroup cmdlet.

### Example 4 -------------------------- (Exchange Server 2016)
```
New-Mailbox -Shared -Name "Sales Department" -DisplayName "Sales Department" -Alias Sales; Set-Mailbox -Identity Sales -GrantSendOnBehalfTo MarketingSG; Add-MailboxPermission -Identity Sales -User MarketingSG -AccessRights FullAccess -InheritanceType All
```

This example creates the shared mailbox "Sales Department" and grants Full Access and Send on Behalf permissions for the security group "MarketingSG". Users who are members of the security group will be granted the permissions to the mailbox.


This example assumes that you've already created a mail-enabled security group named "MarketingSG" by using the New-DistributionGroup cmdlet.

### Example 4 -------------------------- (Exchange Online)
```
New-Mailbox -Shared -Name "Sales Department" -DisplayName "Sales Department" -Alias Sales; Set-Mailbox -Identity Sales -GrantSendOnBehalfTo MarketingSG; Add-MailboxPermission -Identity Sales -User MarketingSG -AccessRights FullAccess -InheritanceType All
```

This example creates the shared mailbox "Sales Department" and grants Full Access and Send on Behalf permissions for the security group "MarketingSG". Users who are members of the security group will be granted the permissions to the mailbox.


This example assumes that you've already created a mail-enabled security group named "MarketingSG" by using the New-DistributionGroup cmdlet.

## PARAMETERS

### -Name
!!! Exchange Server 2010

The Name parameter specifies the user's name. This is the name that appears in Active Directory Users and Computers. This is also the user name that appears in Recipient Properties on the User Information tab.



!!! Exchange Server 2013

The Name parameter specifies the user's name. This is the name that appears in Active Directory Users and Computers.



!!! Exchange Server 2016, Exchange Online

The Name parameter specifies the unique name of the mailbox. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccountDisabled
!!! Exchange Server 2010

The AccountDisabled parameter specifies whether to create the mailbox in a disabled state. You don't have to specify a value with this parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The AccountDisabled parameter specifies whether to create the mailbox in a disabled state. You don't have to specify a value with this parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The AccountDisabled switch specifies that the user account associated with the mailbox is disabled. You don't need to specify a value with this switch.

The mailbox is created, and the associated account is created, but the account is disabled, so you can't log on to the mailbox.



```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set12, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arbitration
!!! Exchange Server 2010

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Arbitration parameter specifies that the mailbox for which you are executing the command is an arbitration mailbox. Arbitration mailboxes are used for managing approval workflow. For example, an arbitration mailbox is used for handling moderated recipients and distribution group membership approval.



```yaml
Type: SwitchParameter
Parameter Sets: Set15, Set16, Set22
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SwitchParameter
Parameter Sets: Set23
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDomain
!!! Exchange Server 2010

The ArchiveDomain parameter specifies the cloud-based services domain on which the archive associated with this mailbox exists. For example, if the SMTP e-mail address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArchiveDomain parameter specifies the cloud-based services domain on which the archive associated with this mailbox exists. For example, if the SMTP email address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ArchiveDomain parameter specifies the domain in the cloud-based service where the archive that's associated with this mailbox exists. For example, if the SMTP email address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.

Only use this parameter if the archive is hosted in the cloud-based service.



```yaml
Type: SmtpDomain
Parameter Sets: Set9, Set13
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Discovery
!!! Exchange Server 2010

The Discovery parameter specifies that this mailbox is a Discovery mailbox. Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be repurposed or converted to another type of mailbox. You don't have to include a value with this parameter. For more information, see Understanding Multi-Mailbox Search.



!!! Exchange Server 2013

The Discovery parameter specifies that this mailbox is a Discovery mailbox. Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be repurposed or converted to another type of mailbox. You don't have to include a value with this parameter. For more information, see In-Place eDiscovery.



!!! Exchange Server 2016, Exchange Online

The Discoveryswitch specifies that the mailbox is a Discovery mailbox. You don't need to specify a value with this switch.

This switch is required only if you're creating a Discovery mailbox.

Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be repurposed or converted to another type of mailbox. For more information, see In-Place eDiscovery in Exchange 2016.



```yaml
Type: SwitchParameter
Parameter Sets: Set16, Set14, Set24
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Equipment
!!! Exchange Server 2010, Exchange Server 2013

The Equipment parameter specifies that the type of resource is equipment, if this mailbox is a resource mailbox. This parameter is required only if you're creating a resource mailbox.



!!! Exchange Server 2016, Exchange Online

The Equipment switch specifies that the resource mailbox is an equipment mailbox. You don't need to specify a value with this switch.

This switch is required only if you're creating an equipment mailbox.



```yaml
Type: SwitchParameter
Parameter Sets: Set13, Set17
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FederatedIdentity
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The FederatedIdentity parameter associates an on-premises Active Directory user with a Microsoft Office user.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The FederatedIdentity parameter associates an on-premises Active Directory user with a Microsoft Office user.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The FederatedIdentity parameter associates an on-premises Active Directory user with a user in the cloud.



```yaml
Type: String
Parameter Sets: Set8, Set11, Set12, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImportLiveId
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The ImportLiveId parameter imports an unmanaged Windows Live ID into the cloud-based domain. An unmanaged Windows Live ID was created in the domain before the domain was enrolled in the cloud-based service.

Importing a Windows Live ID into the domain lets you save any settings associated with the Windows Live ID, like instant messaging contacts. However, the Windows Live ID is now subject to the security and privacy policies of the organization.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The ImportLiveId parameter imports an unmanaged Microsoft account (formerly known as a Windows Live ID) into the cloud-based domain. An unmanaged Microsoft account was created in the domain before the domain was enrolled in the cloud-based service.

Importing a Microsoft account into the domain lets you save any settings associated with the Microsoft account, like instant messaging contacts. However, the Microsoft account is now subject to the security and privacy policies of the organization.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The ImportLiveID switch specifies whether to import an unmanaged Microsoft account (formerly known as a Windows Live ID) into the cloud-based domain. You don't need to specify a value with this switch.

An unmanaged Microsoft account was created in the domain before the domain was enrolled in the cloud-based service. Importing a Microsoft account into the domain lets you save any settings associated with the Microsoft account, like instant messaging contacts. However, the Microsoft account is now subject to the security and privacy policies of the organization.



```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set8, Set6
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedDomainController
!!! Exchange Server 2010

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides. The domain controller in this forest is used to get security information for the account specified by the LinkedMasterAccount parameter. This parameter is required only if you're creating a linked mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides. The domain controller in this forest is used to get security information for the account specified by the LinkedMasterAccount parameter. This parameter is required only if you're creating a linked mailbox.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides, if the mailbox is a linked mailbox. The domain controller in the forest where the user account resides is used to get security information for the account specified by the LinkedMasterAccount parameter. Use the fully qualified domain name (FQDN) of the domain controller that you want to use as the value for this parameter.

This parameter is required only if you're creating a linked mailbox.



```yaml
Type: String
Parameter Sets: Set15, Set11, Set3, Set20
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedMasterAccount
!!! Exchange Server 2010

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides. The master account is the account to link the mailbox to. The master account grants access to the mailbox. This parameter is required only if you're creating a linked mailbox.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com



!!! Exchange Server 2013

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides. The master account is the account to link the mailbox to. The master account grants access to the mailbox. This parameter is required only if you're creating a linked mailbox.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if the mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID



```yaml
Type: UserIdParameter
Parameter Sets: Set15, Set11, Set3, Set20
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password
!!! Exchange Server 2010, Exchange Server 2013

The Password parameter specifies the initial password for the newly created user. This parameter isn't required if you're creating a linked mailbox, resource mailbox, or shared mailbox, because the user account for these types of mailboxes is disabled.



!!! Exchange Server 2016, Exchange Online

The Password parameter specifies the password for the mailbox (the user account that's associated with the mailbox). This parameter isn't required if you're creating a linked mailbox, resource mailbox, or shared mailbox, because the associated user accounts are disabled for these types of mailboxes.

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.



```yaml
Type: SecureString
Parameter Sets: Set5, Set15, Set16, Set13, Set6, Set11, Set2, Set3, Set12, Set14, Set7, Set23, Set17, Set20, Set18, Set19, Set21, Set22, Set24
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecureString
Parameter Sets: Set9, Set1, Set10, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Room
!!! Exchange Server 2010, Exchange Server 2013

The Room parameter specifies that the type of resource is a room, if this mailbox is a resource mailbox. This parameter is required only if you're creating a resource mailbox.



!!! Exchange Server 2016, Exchange Online

The Room switch specifies that the resource mailbox is a room mailbox. You don't need to specify a value with this switch.

This switch is required only if you're creating a room mailbox.

When you use this switch, a logon-disabled account is created with the room mailbox, which prevents users from signing in to the mailbox. When you use the EnableRoomMailboxAccount and RoomMailboxPassword parameters, you can mail-enable the associated account.



```yaml
Type: SwitchParameter
Parameter Sets: Set2, Set23, Set25
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Shared
!!! Exchange Server 2010, Exchange Server 2013

The Shared parameter specifies that you're creating a shared mailbox. A shared mailbox is a mailbox to which multiple users can log on. This mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.

This parameter is required only if you're creating a shared mailbox.



!!! Exchange Server 2016, Exchange Online

The Shared parameter specifies that the mailbox is a shared mailbox. You don't need to specify a value with this switch.

This switch is required only if you're creating a shared mailbox.

A shared mailbox is a mailbox where multiple users can log on to access the mailbox contents. The mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.



```yaml
Type: SwitchParameter
Parameter Sets: Set14, Set19, Set21
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseExistingLiveId
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The UseExistingLiveId parameter uses the specified Windows Live ID that already exists in the cloud-based domain. The specified Windows Live ID can't have a mailbox associated with it.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The UseExistingLiveId parameter uses the specified Microsoft account (formerly known as a Windows Live ID) that already exists in the cloud-based domain. The specified Microsoft account can't have a mailbox associated with it.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The UseExistingLiveId switch specifies whether to use the specified Microsoft account (formerly known as a Windows Live ID) that already exists in the cloud-based domain. The specified Microsoft account can't have a mail user associated with it.

You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set4
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
!!! Exchange Server 2010

The UserPrincipalName parameter specifies the UPN for this mailbox. This is the logon name for the user. The UPN consists of a user name and a suffix. Typically, the suffix is the domain name where the user account resides.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The UserPrincipalName parameter specifies the UPN for this mailbox. This is the logon name for the user. The UPN consists of a user name and a suffix. Typically, the suffix is the domain name where the user account resides.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The UserPrincipalName parameter specifies the logon name for the user account. The UPN uses an email address format \<username\>@\<domain\>. Typically, the \<domain\> value is the domain where the user account resides.



```yaml
Type: String
Parameter Sets: Set5, Set16, Set13, Set11, Set2, Set3, Set12, Set14, Set23, Set17, Set20, Set18, Set19, Set21, Set22, Set25, Set27, Set28
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: String
Parameter Sets: Set15, Set9, Set6, Set1, Set7, Set26, Set24
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsLiveID
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The WindowsLiveID parameter specifies the Windows Live ID of the mailbox.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The WindowsLiveID parameter specifies the Microsoft account (formerly known as a Windows Live ID) of the mailbox.



```yaml
Type: WindowsLiveId
Parameter Sets: Set5, Set13, Set8, Set6, Set11, Set10, Set4, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncMailboxPolicy
!!! Exchange Server 2010, Exchange Server 2013

The ActiveSyncMailboxPolicy parameter specifies the mailbox policy to enable for the mailbox that you create. If you don't specify this parameter, the default mailbox policy is used.



!!! Exchange Server 2016, Exchange Online

The ActiveSyncMailboxPolicy parameter specifies the mobile device mailbox policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:.

- Name

- Distinguished name (DN)

- GUID

If you don't use this parameter, the default mobile device mailbox policy is used.



```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddressBookPolicy
!!! Exchange Server 2010

The AddressBookPolicy parameter specifies the address book policy to apply to this mailbox. For more information about address book policies, see Understanding Address Book Policies.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The AddressBookPolicy parameter specifies the address book policy to apply to this mailbox. For more information about address book policies, see Address book policies.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The AddressBookPolicy parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example:

- Name

- Distinguished name (DN)

- GUID

For more information about address book policies, see Address book policies in Exchange 2016 (https://technet.microsoft.com/library/hh529948.aspx).



```yaml
Type: AddressBookMailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias
!!! Exchange Server 2010

The Alias parameter specifies the e-mail alias of the user that you're creating.

The alias can be a combination of characters separated by a period with no intervening spaces. Don't use special characters in the alias.



!!! Exchange Server 2013

The Alias parameter specifies the email alias of the user that you're creating.

The alias can be a combination of characters separated by a period with no intervening spaces. Don't use special characters in the alias.



!!! Exchange Server 2016, Exchange Online

The Alias parameter specifies the Exchange alias (also known as the mail nickname) for the recipient. This value identifies the recipient as a mail-enabled object, and shouldn't be confused with multiple email addresses for the same recipient (also known as proxy addresses). A recipient can have only one Alias value.

The value of Alias can contain letters, numbers and the characters !, #, $, %, &, ', \*, +, -, /, =, ?, ^, \_, `, {, |, } and ~. Periods (.) are allowed, but each period must be surrounded by other valid characters (for example, help.desk). Unicode characters from U+00A1 to U+00FF are also allowed. The maximum length of the Alias value is 64 characters.

When you create a recipient without specifying an email address, the Alias value you specify is used to generate the primary email address (\<alias\>@\<domain\>). Supported Unicode characters are mapped to best-fit US-ASCII text characters. For example, U+00F6 (ö) is changed to oe in the primary email address.

If you don't use the Alias parameter when you create a recipient, the value of a different required parameter is used for the Alias property value:

- Recipients with user accounts (for example, user mailboxes, and mail users): The left side of the MicrosoftOnlineServicesID or UserPrincipalName parameter is used. For example, helpdesk@contoso.com results in the Alias property value helpdesk.

- Recipeints without user accounts (for example, room mailboxes, mail contacts, and distribution groups): The value of the Name parameter is used. Spaces are removed and unsupported characters are converted to question marks (?).

If you modify the Alias value of an existing recipient, the primary email address is automatically updated only in on-premises environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is True for the recipient).

The Alias parameter never generates or updates the primary email address of a mail contact or a mail user.



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

### -ArbitrationMailbox
!!! Exchange Server 2010

The ArbitrationMailbox parameter specifies the mailbox used to manage the moderation process.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArbitrationMailbox parameter specifies the mailbox used to manage the moderation process.



!!! Exchange Server 2016, Exchange Online

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
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7, Set17, Set20, Set19, Set21, Set22, Set25, Set29
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
!!! Exchange Server 2010, Exchange Server 2013

The Archive parameter specifies whether to create an archive mailbox for the specified user.

You don't have to specify a value with this parameter.



!!! Exchange Server 2016, Exchange Online

The Archiveswitch specifies that an archive mailbox is created for this mailbox. You don't need to specify a value with this switch.



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

### -ArchiveDatabase
!!! Exchange Server 2010

The ArchiveDatabase parameter specifies the Exchange database that contains the archive associated with this mailbox. You can use the following values:

- GUID of the database

- Database name



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ArchiveDatabase parameter specifies the Exchange database that contains the archive associated with this mailbox. You can use the following values:

- GUID of the database

- Database name



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ArchiveDatabase parameter specifies the Exchange database that contains the archive that's associated with this mailbox. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: DatabaseIdParameter
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

### -Database
!!! Exchange Server 2010

The Database parameter specifies which Exchange database contains the new user's mailbox. You can use the following values:

- GUID of the database

- Database name



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The Database parameter specifies which Exchange database contains the new user's mailbox. You can use the following values:

- GUID of the database

- Database name



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The Database parameter specifies the mailbox database that contains the mailbox. You can use any value that uniquely identifies the database. For example:

- Name

- Distinguished name (DN)

- GUID

Use the Get-MailboxDatabase cmdlet to see the available mailbox databases.



```yaml
Type: DatabaseIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
!!! Exchange Server 2010

The DisplayName parameter specifies the display name for the new user created with this mailbox. The value of the DisplayName parameter is the name that appears in the Exchange Management Console under Recipient Configuration. The value of the DisplayName parameter also appears in Active Directory Users and Computers on the user Properties General tab.



!!! Exchange Server 2013

The DisplayName parameter specifies the display name for the new user created with this mailbox. The value of the DisplayName parameter is the name that appears in the Exchange Administration Center. The value of the DisplayName parameter also appears in Active Directory Users and Computers on the user Properties General tab.



!!! Exchange Server 2016, Exchange Online

The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.



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

### -EvictLiveId
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

The EvictLiveId parameter specifies whether to remove an unmanaged Windows Live ID from the cloud-based domain. An unmanaged Windows Live ID was created in the domain before the domain was enrolled in the cloud-based service.

Evicting a Windows Live ID from the domain lets you save any settings associated with the Windows Live ID, like instant messaging contacts.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The EvictLiveId parameter specifies whether to remove an unmanaged Microsoft account (formerly known as a Windows Live ID) from the cloud-based domain. An unmanaged Microsoft account was created in the domain before the domain was enrolled in the cloud-based service.

Evicting a Microsoft account from the domain lets you save any settings associated with the Microsoft account, like instant messaging contacts.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The EvictLiveId switch specifies whether to remove an unmanaged Microsoft account (formerly known as a Windows Live ID) from the cloud-based domain. An unmanaged Microsoft account was created in the domain before the domain was enrolled in the cloud-based service. Evicting a Microsoft account from the domain lets you save any settings associated with the Microsoft account, like instant messaging contacts.

You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: Set13, Set8, Set11, Set10, Set4, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstName
!!! Exchange Server 2010, Exchange Server 2013

The FirstName parameter specifies the first name of the user that you create.



!!! Exchange Server 2016, Exchange Online

The FirstName parameter specifies the user's first name.



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

### -Force
!!! Exchange Server 2010, Exchange Server 2013

The Force parameter specifies whether to suppress warning or confirmation messages. This parameter can be used when the task is run programmatically and prompting for administrative input is inappropriate. If the Force parameter isn't provided in the command, administrative input is prompted. If the Force parameter is provided in the command, but the value is omitted, its default value is $true.



!!! Exchange Server 2016, Exchange Online

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.



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

### -ImmutableId
!!! Exchange Server 2010, Exchange Server 2013

The ImmutableId parameter is used by Outlook Live Directory Sync (OLSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox that's used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange will create the value for the immutable ID based upon the mailbox's ExchangeGUID and the federated account name space, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com. You must set the ImmutableId parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into off-premises mailboxes and AD FS is configured to use a different attribute than ExchangeGUID for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premise Exchange deployment scenario.



!!! Exchange Server 2016, Exchange Online

The ImmutableId parameter is used by GAL synchronization (GALSync) and specifies a unique and immutable identifier in the form of an SMTP address for an Exchange mailbox used for federated delegation when requesting Security Assertion Markup Language (SAML) tokens. If federation is configured for this mailbox and you don't set this parameter when you create the mailbox, Exchange creates the value for the immutable ID based upon the mailbox's ExchangeGUID and the federated account namespace, for example, 7a78e7c8-620e-4d85-99d3-c90d90f29699@mail.contoso.com.

You need to set the ImmutableId parameter if Active Directory Federation Services (AD FS) is deployed to allow single sign-on into an off-premises mailbox and AD FS is configured to use a different attribute than ExchangeGUID for sign-on token requests. Both, Exchange and AD FS must request the same token for the same user to ensure proper functionality for a cross-premises Exchange deployment scenario.



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

### -Initials
!!! Exchange Server 2010, Exchange Server 2013

The Initials parameter specifies the initials of the user that you create.



!!! Exchange Server 2016, Exchange Online

The Initials parameter specifies the user's middle initials.



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

### -LastName
!!! Exchange Server 2010, Exchange Server 2013

The LastName parameter specifies the last name of the user that you create.



!!! Exchange Server 2016, Exchange Online

The LastName parameter specifies the user's last name.



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

### -LinkedCredential
!!! Exchange Server 2010

The LinkedCredential parameter specifies credentials to use to access the domain controller specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies credentials to use to access the domain controller specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies credentials to use to access the domain controller specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.

This parameter requires you to create a credentials object by using the Get-Credential cmdlet. For more information, see Get-Credential (https://go.microsoft.com/fwlink/p/?linkId=142122).



```yaml
Type: PSCredential
Parameter Sets: Set15, Set11, Set3, Set20
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxPlan
!!! Exchange Server 2010

This parameter applies to objects in the cloud-based service. It isn't available for on-premises deployments.

This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The MailboxPlan parameter specifies the mailbox plan to associate with this mailbox. A mailbox plan specifies the permissions and features available to a mailbox user. The mailbox plan name you provide must be included in the service plan of the organization in which this mailbox resides. To learn more, see Understanding Service Plans and Mailbox Plans.



!!! Exchange Server 2013

This parameter is available only in the cloud-based service.

The MailboxPlan parameter specifies the mailbox plan to associate with this mailbox. A mailbox plan specifies the permissions and features available to a mailbox user. The mailbox plan name you provide must be included in the service plan of the organization in which this mailbox resides.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in the cloud-based service.

The MailboxPlan parameter specifies the mailbox plan to applytothe mailbox. You can use any value that uniquely identifies the mailbox plan. For example:

- Name

- Alias

- Display name

- Distinguished name (DN)

- GUID

A mailbox plan specifies the permissions and features that are available to a mailbox. In Office 365, mailbox plans correspond to the subscriptions and licenses that administrators purchase and assign in the Office 365 admin center.

You can see the available mailbox plans by using the Get-MailboxPlan cmdlet.



```yaml
Type: MailboxPlanIdParameter
Parameter Sets: Set5, Set9, Set13, Set8, Set6, Set11, Set1, Set10, Set3, Set12, Set14, Set4, Set7
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicy
The ManagedFolderMailboxPolicy parameter specifies the managed folder mailbox policy to enable for the mailbox that you create.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicyAllowed
The ManagedFolderMailboxPolicyAllowed parameter specifies whether to bypass the warning that messaging records management (MRM) features aren't supported for e-mail clients using versions of Microsoft Outlook earlier than Office Outlook 2007. When a managed folder mailbox policy is assigned to a mailbox using the ManagedFolderMailboxPolicy parameter, the warning appears by default unless the ManagedFolderMailboxPolicyAllowed parameter is used.

Outlook 2003 Service Pack 3 clients are supported but are provided limited functionality for MRM.

```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy
!!! Exchange Server 2010, Exchange Server 2013

The ModeratedBy parameter specifies the users who are responsible for moderating the messages sent to this mailbox. To designate more than one user, separate the users with commas.

This parameter is required if you set the ModerationEnabled parameter to $true. If you leave this parameter blank and there's a user who's already specified as the manager of this mailbox, the ModeratedBy parameter is automatically set to the ManagedBy parameter of the mailbox. Otherwise, an error is returned.



!!! Exchange Server 2016, Exchange Online

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
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7, Set17, Set20, Set19, Set21, Set22, Set25, Set29
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled
!!! Exchange Server 2010, Exchange Server 2013

The ModerationEnabled parameter specifies whether to enable moderation for the mailbox. The two possible values for this parameter are $true or $false. To enable moderation, set this parameter to $true. To disable moderation, set this parameter to $false.

The default value is $false.



!!! Exchange Server 2016, Exchange Online

The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.

- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This is the default value.

You use the ModeratedBy parameter to specify the moderators.



```yaml
Type: $true | $false
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7, Set17, Set20, Set19, Set21, Set22
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Office
!!! Exchange Server 2010, Exchange Server 2013

The Office parameter specifies the Microsoft Office attribute for this mailbox.



!!! Exchange Server 2016, Exchange Online

The Office parameter specifies the user's physical office name or number.



```yaml
Type: String
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
!!! Exchange Server 2010, Exchange Server 2013

The OrganizationalUnit parameter specifies the container where the user is created.



!!! Exchange Server 2016, Exchange Online

The OrganizationalUnit parameter specifies the location in Active Directory where the new mailbox is created.

Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID



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

### -OverrideRecipientQuotas
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The OverrideRecipientQuotas parameter specifies that the recipient quotas for this mailbox can be overridden. Mailboxes that are part of a tenant organization will use the quotas defined in the tenant organization's service plan. Use this parameter to allow the command to skip the tenant-level recipient quotas check.

Using this parameter doesn't set quotas. You need to define the quotas for the mailbox using the Set-Mailbox cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Phone
!!! Exchange Server 2010, Exchange Server 2013

The Phone parameter specifies the user's telephone number for this mailbox.



!!! Exchange Server 2016, Exchange Online

The Phone parameter specifies the user's telephone number.



```yaml
Type: String
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress
!!! Exchange Server 2010, Exchange Server 2013

The PrimarySmtpAddress parameter specifies the primary SMTP address of the mailbox.



!!! Exchange Server 2016, Exchange Online

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient. If it's available on this cmdlet, you can't use the EmailAddresses and PrimarySmtpAddress parameters in the same command.

If you use the PrimarySmtpAddress parameter to specify the primary email address, the command sets the EmailAddressPolicyEnabled property of the mailbox to False, which means the email addresses of the mailbox aren't automatically updated by email address policies.



```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -QueryBaseDNRestrictionEnabled
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The QueryBaseDNRestrictionEnabled parameter specifies whether to restrict a user's ability to view or search for other mailboxes in their organization. If this parameter is set to $true, the global address list (GAL) of the specified mailbox user isn't populated. Specifically, if the user views the GAL, it will appear empty. If this parameter is set to $false, users can use the GAL to view all mailboxes in their organization, including mailboxes for which this parameter is set to $true. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteArchive
!!! Exchange Server 2010

The RemoteArchive parameter specifies whether to disconnect the remote archive for this mailbox. A remote archive exists in a cloud-based service.

When you use this parameter, you can't use the Archive parameter.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The RemoteArchive parameter specifies whether to disconnect the remote archive for this mailbox. A remote archive exists in a cloud-based service.

When you use this parameter, you can't use the Archive parameter.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RemoteArchive switch specifies that a remote archive mailbox is created for this mailbox. A remote archive exists in the cloud-based service. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: Set9, Set13
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePowerShellEnabled
!!! Exchange Server 2010

The RemotePowerShellEnabled parameter specifies whether the user can use Remote PowerShell. Remote PowerShell is required to open the Exchange Management Shell or the Exchange Management Console on Mailbox, Hub Transport, Unified Messaging, and Client Access servers. Access to Remote PowerShell is required even if you're trying to open the Shell or the console on the local server.

The valid values are $True and $False. The default value depends on the management role groups assigned to the user. For more information, see Overview of Exchange Management Shell.



!!! Exchange Server 2013

The RemotePowerShellEnabled parameter specifies whether the user can use remote PowerShell. Remote PowerShell is required to open the Exchange Management Shell or the Exchange Administration Center. Access to remote PowerShell is required even if you're trying to open the Shell or the EAC on the local server.





!!! Exchange Server 2016, Exchange Online

The RemotePowerShellEnabled parameter specifies whether the user has access to remote PowerShell. Valid values are:

- $true: The user has access to Exchange Online PowerShell, the Exchange Management Shell, and the Exchange admin center (EAC). This is the default value.

- $false: The user has doesn't have access to Exchange Online PowerShell, the Exchange Management Shell, or the EAC.

Access to remote PowerShell is required even if you're trying to open the Exchange Management Shell or the EAC on the local Exchange server.

A user's experience in any of these management interfaces is still controlled by the role-based access control (RBAC) permissions that are assigned to them.



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

### -ResetPasswordOnNextLogon
!!! Exchange Server 2010, Exchange Server 2013

The ResetPasswordOnNextLogon parameter specifies whether the password in the Password parameter must be reset the next time the user logs on. If set to $true, the ResetPasswordOnNextLogon parameter specifies that the password in the Password parameter must be reset the next time the user logs on.



!!! Exchange Server 2016, Exchange Online

The ResetPasswordOnNextLogon parameter specifies whether the user is required to change their password the next time they log on to their mailbox. Valid values are:

- $true: The user is required to change their password the next time they log on to their mailbox.

- $false: The user isn't required to change their password the next time they log on to their mailbox. This is the default value.



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

### -ResourceCapacity
!!! Exchange Server 2010, Exchange Server 2013

The ResourceCapacity parameter specifies capacity, if this mailbox is a resource mailbox.

You must specify a non-negative integer.



!!! Exchange Server 2016, Exchange Online

The ResourceCapacity parameter specifies the capacity of the resource mailbox. For example, you can use this parameter to identify the number of seats in a conference room (room mailbox) or in a vehicle (equipment mailbox). A valid value is an integer.



```yaml
Type: Int32
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicy
!!! Exchange Server 2010

The RetentionPolicy parameter specifies the name of a retention policy that you want applied to this mailbox. Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The RetentionPolicy parameter specifies the name of a retention policy that you want applied to this mailbox. Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The RetentionPolicy parameter specifies the retention policy that you want applied to this mailbox. You can use any value that uniquely identifies the policy. For example:

- Name

- Distinguished Name (DN)

- GUID

Retention policies consist of tags that are applied to mailbox folders and mail items to determine the period of time that the items should be retained.

Use the Get-RetentionPolicy cmdlet to see the available retention policies.

If you don't use this parameter, the retention policy named Default MRM Policy is applied to the mailbox.



```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssignmentPolicy
!!! Exchange Server 2010

The RoleAssignmentPolicy parameter specifies the management role assignment policy to assign to the mailbox when it's created or enabled. If you don't include this parameter when you create or enable a mailbox, the default assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of $null. For more information about assignment policies, see Understanding Management Role Assignment Policies.



!!! Exchange Server 2013

The RoleAssignmentPolicy parameter specifies the management role assignment policy to assign to the mailbox when it's created or enabled. If you don't include this parameter when you create or enable a mailbox, the default assignment policy is used. If the assignment policy name contains spaces, enclose the name in quotation marks ("). If you don't want to assign an assignment policy when a mailbox is created or enabled, specify a value of $null. For more information about assignment policies, see Understanding management role assignment policies.



!!! Exchange Server 2016, Exchange Online

The RoleAssignmentPolicy parameter specifies the role assignment policy that's applied to the mailbox. You can use any value that uniquely identifies the role assignment policy. For example:

- Name

- Distinguished name (DN)

- GUID

In Office 365, if you don't use this parameter, the default role assignment policy named Default Role Assignment Policy is automatically applied to the mailbox. In on-premises Exchange, no role assignment policy is automatically applied to the mailbox.

Use the Get-RoleAssignmentPolicy cmdlet to see the available role assignment policies. For more information about assignment policies, see Understanding management role assignment policies.



```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SamAccountName
!!! Exchange Server 2010

The SamAccountName parameter specifies the logon name used to support clients and servers running older versions of the operating system, such as Microsoft Windows NT 4.0, Windows 95, Windows 98, and LAN Manager. This attribute must be less than 20 characters to support older clients.

If you don't specify the SamAccountName parameter, Active Directory creates a SAMAccountName attribute automatically, based on the UPN.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The SamAccountName parameter specifies the logon name used to support clients and servers running older versions of the operating system, such as MicrosoftWindows NT 4.0, Windows 95, Windows 98, and LAN Manager. This attribute must be less than 20 characters to support older clients.

If you don't specify the SamAccountName parameter, Active Directory creates a SAMAccountName attribute automatically, based on the UPN.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The SamAccountName parameter (also known as the pre-Windows 2000 user account or group name) specifies an object identifier that's compatible with older versions of Microsoft Windows client and server operating systems. The value can contain letters, numbers, spaces, periods (.), and the characters !, #, $, %, ^, &, -, \_, {, }, and ~. The last character can't be a period. Unicode characters are allowed, but accented characters may generate collisions (for example, o and ö match). The maximum length is 20 characters.



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

### -SendModerationNotifications
!!! Exchange Server 2010, Exchange Server 2013

The SendModerationNotifications parameter specifies whether status notifications are sent to users when they send a message to the moderated mailbox. You can specify one of the following values:

- Always

- Internal

- Never

If you want notifications to be sent to all senders, set this value to Always.

If you want notifications to be sent only to the senders who are internal to your organization, set this value to Internal.

To disable all status notifications, set this value to Never.

The sender is always notified if the message is rejected by the moderators, regardless of the value of this parameter.

The default value is Never.



!!! Exchange Server 2016, Exchange Online

The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This is the default value.

- Internal: Notify senders in the organization when their messages aren't approved.

- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).



```yaml
Type: Never | Internal | Always
Parameter Sets: Set5, Set15, Set9, Set16, Set13, Set8, Set6, Set11, Set1, Set10, Set2, Set3, Set12, Set14, Set4, Set7, Set17, Set20, Set19, Set21, Set22, Set25, Set29
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingPolicy
!!! Exchange Server 2010

The SharingPolicy parameter specifies the identity of the sharing policy associated with this mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The SharingPolicy parameter specifies the identity of the sharing policy associated with this mailbox.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The SharingPolicy parameter specifies the sharing policy that's applied to the mailbox. You can use any value that uniquely identifies the sharing policy. For example:

- Name

- Distinguished name (DN)

- GUID

Use the Get-SharingPolicy cmdlet to see the available sharing policies.

If you don't use this parameter, the sharing policy named Default Sharing Policy is applied to the mailbox.



```yaml
Type: SharingPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicy
!!! Exchange Server 2010

The ThrottlingPolicy parameter specifies the identity of the throttling policy that you want to specify for this mailbox.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The ThrottlingPolicy parameter specifies the identity of the throttling policy that you want to specify for this mailbox.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The ThrottlingPolicy parameter specifies the throttling policy that's applied to the mailbox. You can use any value that uniquely identifies the throttling policy. For example:

- Name

- Distinguished name (DN)

- GUID

Use the Get-ThrottlingPolicy cmdlet to see the available throttling policies.

By default, no throttling policy is applied to the mailbox.



```yaml
Type: ThrottlingPolicyIdParameter
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

### -EnableRoomMailboxAccount
!!! Exchange Server 2013

Use the EnableRoomMailboxAccount parameter and the $true value to specify that the corresponding account in Active Directory for the new room mailbox is enabled when the mailbox is created. Both the Room and RoomMailboxPassword parameters are also required to create a logon-enabled room mailbox.

When you create a room mailbox using only the Room parameter, the account in Active Directory is logon-disabled, which prevents users from signing in to the mailbox. When you include the EnableRoomMailboxAccount and RoomMailboxPassword parameters, the account in Active Directory is logon-enabled, which is required for implementing some scenarios, such as the Lync Room System or Skype for Business Room System. In Exchange Online, a logon-enabled room mailbox doesn't require a license.



!!! Exchange Server 2016, Exchange Online

The EnableRoomMailboxAccount parameter specifies whether to enable the disabled user account that's associated with this room mailbox. Valid values are:

- $true: The disabled account that's associated with the room mailbox is enabled. You also need to use the RoomMailboxPassword with this value. This allows the account to log on to the room mailbox.

- $false: The account that's associated with the room mailbox is disabled. You can't use the account to logon to the room mailbox. This is the default value.

You need to use this parameter with the Room switch.

Typically, the account that's associated with a room mailbox is disabled. However, you need to enable the account for features like the Lync Room System or the Skype for Business Room System.

In Exchange Online, a room mailbox with an associated enabled account doesn't require a license.



```yaml
Type: $true | $false
Parameter Sets: Set23, Set25
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedRoom
!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The LinkedRoom parameter is used to specify that the mailbox being created is a linked resource mailbox. A linked resource mailbox is useful in a scenario where you have an account in an authentication forest and you want it to be directly linked to a resource mailbox in resource forest.



!!! Exchange Server 2016, Exchange Online

This parameter is available only in on-premises Exchange.

The LinkedRoom switch specifies that the mailbox is a linked resource mailbox. You don't need to specify a value with this switch.

A linked resource mailbox is useful in a scenario where you have an account in an authentication forest and you want it to be directly linked to a resource mailbox in resource forest.



```yaml
Type: SwitchParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftOnlineServicesID
This parameter is available only in the cloud-based service.

The MicrosoftOnlineServicesID parameter specifies the user ID for the object. This parameter only applies to objects in the cloud-based service. It isn't available for on-premises deployments.

```yaml
Type: WindowsLiveId
Parameter Sets: Set8, Set10, Set12, Set14
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: WindowsLiveId
Parameter Sets: Set23, Set25
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder
!!! Exchange Server 2013

The PublicFolder parameter specifies that the new mailbox will be a public folder mailbox. Public folder mailboxes are specially designed mailboxes to store the hierarchy and content of public folders. This parameter is required to create a public folder mailbox.

The first public folder mailbox created in your Exchange organization is called the primary hierarchy mailbox. It contains the writeable copy of the hierarchy of public folders for the organization and public folder content. There can be only one writeable copy of the public folder hierarchy in your organization. All other public folder mailboxes are called secondary public folder mailboxes and contain a read-only copy of the hierarchy and the content for public folders.



!!! Exchange Server 2016, Exchange Online

The PublicFolder switch specifies that the mailbox is a public folder mailbox. You don't need to specify a value with this switch.

This switch is required only if you're creating a public folder mailbox.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders. The first public folder mailbox created in your Exchange organization is called the primary hierarchy mailbox. It contains the writeable copy of the hierarchy of public folders for the organization and public folder content. There can be only one writeable copy of the public folder hierarchy in your organization. All other public folder mailboxes are called secondary public folder mailboxes and contain a read-only copy of the hierarchy and the content for public folders.



```yaml
Type: SwitchParameter
Parameter Sets: Set26, Set30
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HoldForMigration
!!! Exchange Server 2013

The HoldForMigration parameter prevents any client or user, except the Microsoft Exchange Mailbox Replication service (MRS) process, from logging into a public folder mailbox. Usethis parameter when creating the first public folder mailbox in Exchange 2013 if you plan to migrate legacy public folders from Exchange 2010 or Exchange 2007 to Exchange 2013.

Use this parameter only if you plan to migrate legacy public folders to Exchange 2013. If you use this parameter but don't have legacy public folders to migrate, you won't be able to create any public folders.



!!! Exchange Server 2016, Exchange Online

The HoldForMigration switch specifies whether to prevent any client or user, except the Microsoft Exchange Mailbox Replication service (MRS) process, from logging on to a public folder mailbox. You don't need to specify a value with this switch.

You need to use this parameter when you create the first public folder, which is called the hierarchy mailbox, in your organization.

Use this parameter only if you plan to migrate legacy Exchange 2010 public folders to Exchange 2016. If you use this switch but don't have legacy public folders to migrate, you won't be able to create any public folders.



```yaml
Type: SwitchParameter
Parameter Sets: Set26, Set30
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsExcludedFromServingHierarchy
!!! Exchange Server 2013

The IsExcludedFromServingHierarchy parameter prevents users from accessing the public folder hierarchy on the specified public folder mailbox. For load-balancing purposes, users are equally distributed across public folder mailboxes by default. When this parameter is set on a public folder mailbox, that mailbox isn't included in this automatic load-balancing and won't be accessed by users to retrieve the public folder hierarchy. However, if an administrator has set the DefaultPublicFolderMailbox property on a user mailbox to a specific public folder mailbox, the user will still access the specified public folder mailbox even if the IsExcludedFromServingHierarchy parameter is set for that public folder mailbox.



!!! Exchange Server 2016, Exchange Online

The IsExcludedFromServingHierarchy parameter prevents users from accessing the public folder hierarchy on this public folder mailbox. For load-balancing purposes, users are equally distributed across public folder mailboxes by default. When this parameter is set on a public folder mailbox, that mailbox isn't included in this automatic load-balancing and won't be accessed by users to retrieve the public folder hierarchy. However, if an administrator has set the DefaultPublicFolderMailbox property on a user mailbox to a specific public folder mailbox, the user will still access the specified public folder mailbox even if the IsExcludedFromServingHierarchy parameter is set for that public folder mailbox.



```yaml
Type: $true | $false
Parameter Sets: Set26, Set30
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

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
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovedMailbox
This parameter is reserved for internal Microsoft use.

```yaml
Type: RemovedMailboxIdParameter
Parameter Sets: Set5, Set9, Set13, Set8, Set11, Set1, Set10, Set12, Set14, Set4, Set7
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: RemovedMailboxIdParameter
Parameter Sets: Set6
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -RoomMailboxPassword
!!! Exchange Server 2013

Use the RoomMailboxPassword parameter to specify a password when using the EnableRoomMailboxAccount parameter to create a logon-enabled room mailbox. Use the following syntax to specify the password: -RoomMailboxPassword (ConvertTo-SecureString -String \<password\> -AsPlainText -Force).



!!! Exchange Server 2016, Exchange Online

Use the RoomMailboxPassword parameter to configure the password for a room mailbox that has a logon-enabled account (the EnableRoomMailboxAccount parameter is set to the value $true.)

To use this parameter, you need to be a member of one of the following role groups:

- Office 365: The Organization Management role group via the Mail Recipients, Reset Password, and User Options roles, the Help Desk role group via the Reset Password and User Options roles, or the Recipient Management role group via the Mail Recipients and Reset Password roles.

- On-premises Exchange: The Organization Management role group via the Mail Recipients and User Options roles, the Recipient Management role group via the Mail Recipients role, or the Help Desk role group via the User Options role. The Reset Password role also allows you to use this parameter, but it isn't assigned to any role groups by default.

This parameter uses the syntax (ConvertTo-SecureString -String '\<password\>' -AsPlainText -Force). Or, to be prompted to enter the password and store it as a variable, run the command $password = Read-Host "Enter password" -AsSecureString, and then use the value $password for this parameter.



```yaml
Type: SecureString
Parameter Sets: Set23, Set25
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetAllMDBs
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set26
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuxAuditLog
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set27
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Migration
The Migration switch specifies that the mailbox is a migration mailbox. You don't need to specify a value with this switch.

This switch is required only if you're creating a migration mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: Set23
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scheduling
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set18
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupervisoryReviewPolicy
PARAMVALUE: SwitchParameter

```yaml
Type: SwitchParameter
Parameter Sets: Set28
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InactiveMailbox
This parameter is available only in the cloud-based service.

The InactiveMailbox parameter specifies the inactive mailbox that you want to recover. To find inactive mailboxes, run the command Get-Mailbox -InactiveMailboxOnly | FL Name,PrimarySmtpAddress,DistinguishedName,ExchangeGuid and then use the DistinguishedName or ExchangeGuid property values to identify the inactive mailbox for this parameter (values guaranteed to be unique).

```yaml
Type: MailboxIdParameter
Parameter Sets: Set5, Set1, Set14, Set4
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: MailboxIdParameter
Parameter Sets: Set10
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -MailboxRegion
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OfficeGraph
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set22
Aliases:
Applicable: Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProvisionedForOfficeGraph
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: Set22
Aliases:
Applicable: Exchange Server 2016, Exchange Online

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

[Online Version](https://technet.microsoft.com/library/42dbb25a-0b23-4775-ae15-7af62c089565.aspx)

