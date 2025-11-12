---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-mailbox
schema: 2.0.0
title: New-Mailbox
---

# New-Mailbox

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings might be exclusive to one environment or the other.

Use the New-Mailbox cmdlet to create mailboxes and user accounts at the same time.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### User
```
New-Mailbox [-Name] <String> -Password <SecureString> -UserPrincipalName <String> [-InactiveMailbox <MailboxIdParameter>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### MicrosoftOnlineServicesID
```
New-Mailbox [-Name] <String> -Password <SecureString> -MicrosoftOnlineServicesID <WindowsLiveId> [-InactiveMailbox <MailboxIdParameter>] [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-Discovery]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Arbitration
```
New-Mailbox [-Name] <String> [-Arbitration] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-ProxyEmailAddress <ProxyAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### AuditLog
```
New-Mailbox [-Name] <String> -UserPrincipalName <String> [-AuditLog]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### AuxAuditLog
```
New-Mailbox [-Name] <String> [-AuxAuditLog] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### DisabledUser
```
New-Mailbox [-Name] <String> [-AccountDisabled] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Discovery
```
New-Mailbox [-Name] <String> [-Discovery] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### EnableRoomMailboxAccount
```
New-Mailbox [-Name] <String> -EnableRoomMailboxAccount <Boolean> [-MicrosoftOnlineServicesID <WindowsLiveId>] [-Room] [-RoomMailboxPassword <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Equipment
```
New-Mailbox [-Name] <String> [-Equipment] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### FederatedUser
```
New-Mailbox [-Name] <String> -FederatedIdentity <String> [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-Confirm]
 [-DisplayName <String>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-Password <SecureString>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-TargetAllMDBs]
 [-WhatIf]
 [<CommonParameters>]
```

### InactiveMailbox
```
New-Mailbox [-Name] <String> -InactiveMailbox <MailboxIdParameter> [-Password <SecureString>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Linked
```
New-Mailbox [-Name] <String> -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter> [-LinkedCredential <PSCredential>] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### LinkedRoomMailbox
```
New-Mailbox [-Name] <String> -LinkedDomainController <String> -LinkedMasterAccount <UserIdParameter>
 [-LinkedCredential <PSCredential>]
 [-LinkedRoom]
 [-Office <String>]
 [-Password <SecureString>]
 [-Phone <String>]
 [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-ResourceCapacity <Int32>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### MicrosoftOnlineServicesFederatedUser
```
New-Mailbox [-Name] <String> -FederatedIdentity <String> -MicrosoftOnlineServicesID <WindowsLiveId> [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-Confirm]
 [-DisplayName <String>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-TargetAllMDBs]
 [-WhatIf]
 [<CommonParameters>]
```

### Migration
```
New-Mailbox [-Name] <String> [-Arbitration] [-Migration] [-Password <SecureString>] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### PublicFolder
```
New-Mailbox [-Name] <String> [-PublicFolder] [-HoldForMigration] [-IsExcludedFromServingHierarchy <Boolean>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### RemoteArchive
```
New-Mailbox [-Name] <String> -ArchiveDomain <SmtpDomain> -Password <SecureString> -UserPrincipalName <String> [-RemoteArchive]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-RemovedMailbox <RemovedMailboxIdParameter>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### RemovedMailbox
```
New-Mailbox [-Name] <String> -RemovedMailbox <RemovedMailboxIdParameter> [-Password <SecureString>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxPlan <MailboxPlanIdParameter>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Room
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-ResourceCapacity <Int32>] [-Room] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-ManagedFolderMailboxPolicy <MailboxPolicyIdParameter>]
 [-ManagedFolderMailboxPolicyAllowed]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-Office <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-Phone <String>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### Shared
```
New-Mailbox [-Name] <String> [-Password <SecureString>] [-Shared] [-UserPrincipalName <String>]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArbitrationMailbox <MailboxIdParameter>]
 [-Archive]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-MailboxRegion <String>]
 [-ModeratedBy <MultiValuedProperty>]
 [-ModerationEnabled <Boolean>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SendModerationNotifications <TransportModerationNotificationFlags>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-TargetAllMDBs]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-WhatIf]
 [<CommonParameters>]
```

### SupervisoryReviewPolicyMailbox
```
New-Mailbox [-Name] <String> [-SupervisoryReviewPolicy]
 [-ActiveSyncMailboxPolicy <MailboxPolicyIdParameter>]
 [-AddressBookPolicy <AddressBookMailboxPolicyIdParameter>]
 [-Alias <String>]
 [-ArchiveDatabase <DatabaseIdParameter>]
 [-Archive]
 [-Confirm]
 [-Database <DatabaseIdParameter>]
 [-DisplayName <String>]
 [-DomainController <Fqdn>]
 [-FirstName <String>]
 [-Force]
 [-ImmutableId <String>]
 [-Initials <String>]
 [-LastName <String>]
 [-OrganizationalUnit <OrganizationalUnitIdParameter>]
 [-PrimarySmtpAddress <SmtpAddress>]
 [-RemotePowerShellEnabled <Boolean>]
 [-ResetPasswordOnNextLogon <Boolean>]
 [-RetentionPolicy <MailboxPolicyIdParameter>]
 [-RoleAssignmentPolicy <MailboxPolicyIdParameter>]
 [-SamAccountName <String>]
 [-SharingPolicy <SharingPolicyIdParameter>]
 [-ThrottlingPolicy <ThrottlingPolicyIdParameter>]
 [-UserPrincipalName <String>]
 [-WhatIf]
 [<CommonParameters>]
 ```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

In Exchange Server, the [CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216) InformationVariable and InformationAction don't work.

## EXAMPLES

### Example 1
```powershell
$password = Read-Host "Enter password" -AsSecureString

New-Mailbox -UserPrincipalName chris@contoso.com -Alias chris -Database "Mailbox Database 1" -Name ChrisAshton -OrganizationalUnit Users -Password $password -FirstName Chris -LastName Ashton -DisplayName "Chris Ashton" -ResetPasswordOnNextLogon $true
```

This example creates a user Chris Ashton in Active Directory and creates a mailbox for the user. The mailbox is located on Mailbox Database 1. The password must be reset at the next logon. To set the initial value of the password, this example creates a variable ($password), prompts you to enter a password, and assigns that password to the variable as a SecureString object.

### Example 2
```powershell
New-Mailbox -UserPrincipalName confmbx@contoso.com -Alias confmbx -Name ConfRoomMailbox -Database "Mailbox Database 1" -OrganizationalUnit Users -Room -ResetPasswordOnNextLogon $true
```

This example creates a user in Active Directory and a resource mailbox for a conference room. The resource mailbox is located in Mailbox Database 1. The password must be reset at the next logon. You are prompted for the value of the initial password because it's not specified.

### Example 3
```powershell
New-Mailbox -UserPrincipalName confroom1010@contoso.com -Alias confroom1010 -Name "Conference Room 1010" -Room -EnableRoomMailboxAccount $true -RoomMailboxPassword (Get-Credential).password
```

This example creates an enabled user account in Active Directory and a room mailbox for a conference room in an on-premises Exchange organization. The RoomMailboxPassword parameter prompts you to enter the password for the user account.

### Example 4
```powershell
New-Mailbox -Shared -Name "Sales Department" -DisplayName "Sales Department" -Alias Sales

Set-Mailbox -Identity Sales -GrantSendOnBehalfTo MarketingSG

Add-MailboxPermission -Identity Sales -User MarketingSG -AccessRights FullAccess -InheritanceType All
```

This example creates the shared mailbox "Sales Department" and grants Full Access and Send on Behalf permissions for the security group "MarketingSG". Users who are members of the security group are granted the permissions to the mailbox.

This example assumes that you've already created a mail-enabled security group named "MarketingSG" by using the New-DistributionGroup cmdlet.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Name parameter specifies the unique name of the mailbox. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

In the cloud-based service, many special characters aren't allowed in the Name value (for example, ö, ü, or ä). For more information, see [Error when you try to create a username that contains a special character in Microsoft 365](https://learn.microsoft.com/office/troubleshoot/office-suite-issues/username-contains-special-character).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccountDisabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The AccountDisabled switch specifies that the user account associated with the mailbox is disabled. You don't need to specify a value with this switch.

The mailbox is created, and the associated account is created, but the account is disabled, so you can't log on to the mailbox.

```yaml
Type: SwitchParameter
Parameter Sets: DisabledUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Arbitration

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Arbitration switch is required to create arbitration mailboxes. You don't need to specify a value with this switch.

Arbitration mailboxes are system mailbox that are used for storing different types of system data and for managing messaging approval workflow.

To create arbitration mailboxes that are used to store audit log settings or data, don't use this switch. Instead, use the AuditLog or AuxAuditLog switches.

```yaml
Type: SwitchParameter
Parameter Sets: Arbitration, Migration
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchiveDomain

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ArchiveDomain parameter specifies the domain in the cloud-based service where the archive that's associated with this mailbox exists. For example, if the SMTP email address of the user is tony@contoso.com, the SMTP domain could be archive.contoso.com.

Only use this parameter if the archive is hosted in the cloud-based service.

```yaml
Type: SmtpDomain
Parameter Sets: RemoteArchive
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Discovery

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Discovery switch is required to create Discovery mailboxes. You don't need to specify a value with this switch.

Discovery mailboxes are created as target mailboxes for Discovery searches. After being created or enabled, a Discovery mailbox can't be repurposed or converted to another type of mailbox. For more information, see [In-Place eDiscovery in Exchange Server](https://learn.microsoft.com/Exchange/policy-and-compliance/ediscovery/ediscovery).

```yaml
Type: SwitchParameter
Parameter Sets: Discovery
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableRoomMailboxAccount

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in on-premises Exchange.

The EnableRoomMailboxAccount parameter specifies whether to enable the disabled user account that's associated with this room mailbox. Valid values are:

- $true: The disabled account that's associated with the room mailbox is enabled. You also need to use the RoomMailboxPassword with this value. The account is able to log in and access the room mailbox or other resources.
- $false: The account that's associated with the room mailbox is disabled. The account is not able to log in and access the room mailbox or other resources. In on-premises Exchange, this is the default value.

You need to enable the account for features like the Skype for Business Room System or Microsoft Teams Rooms.

You need to use this parameter with the Room switch.

A room mailbox in Exchange Online is created with associated an account that has a random, unknown password. This account is active and visible in Microsoft Graph PowerShell and the Microsoft 365 admin center just like a regular user account, but it consumes no licenses. To prevent this account from being able to log in after you create the mailbox, use the AccountEnabled parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

```yaml
Type: Boolean
Parameter Sets: EnableRoomMailboxAccount
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Equipment

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Equipment switch is required to create equipment mailboxes. You don't need to specify a value with this switch.

Equipment mailboxes are resource mailboxes that aren't associated with a specific location (for example, vehicles or computers).

```yaml
Type: SwitchParameter
Parameter Sets: Equipment
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FederatedIdentity

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The FederatedIdentity parameter associates an on-premises Active Directory user with a user in the cloud.

```yaml
Type: String
Parameter Sets: FederatedUser, MicrosoftOnlineServicesFederatedUser
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InactiveMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The InactiveMailbox parameter specifies the inactive mailbox that you want to recover. To find inactive mailboxes, run the command `Get-Mailbox -InactiveMailboxOnly | Format-List Name,PrimarySmtpAddress,DistinguishedName,ExchangeGuid` and then use the DistinguishedName or ExchangeGuid property values to identify the inactive mailbox for this parameter (only those values are guaranteed to be unique for inactive mailboxes).

```yaml
Type: MailboxIdParameter
Parameter Sets: InactiveMailbox, User
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -LinkedDomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LinkedDomainController parameter specifies the domain controller in the forest where the user account resides, if the mailbox is a linked mailbox. The domain controller in the forest where the user account resides is used to get security information for the account specified by the LinkedMasterAccount parameter. Use the fully qualified domain name (FQDN) of the domain controller that you want to use as the value for this parameter.

This parameter is required only if you're creating a linked mailbox.

```yaml
Type: String
Parameter Sets: Linked, LinkedRoomMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedMasterAccount

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LinkedMasterAccount parameter specifies the master account in the forest where the user account resides, if the mailbox is a linked mailbox. The master account is the account that the mailbox is linked to. The master account grants access to the mailbox. You can use any value that uniquely identifies the master account. For example:

- Name
- Distinguished name (DN)
- Canonical DN
- GUID

```yaml
Type: UserIdParameter
Parameter Sets: Linked, LinkedRoomMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LinkedRoom

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LinkedRoom switch is required to create linked resource mailboxes. You don't need to specify a value with this switch.

A linked resource mailbox is useful in a scenario where you have an account in an authentication forest and you want it to be directly linked to a resource mailbox in resource forest.

```yaml
Type: SwitchParameter
Parameter Sets: LinkedRoomMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MicrosoftOnlineServicesID

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The MicrosoftOnlineServicesID parameter specifies the user ID for the object. This parameter applies only to objects in the cloud-based service and is used instead of the UserPrincipalName parameter. The MicrosoftOnlineServicesID parameter isn't available in on-premises deployments.

```yaml
Type: WindowsLiveId
Parameter Sets: MicrosoftOnlineServicesFederatedUser, MicrosoftOnlineServicesFederatedUser, EnableRoomMailboxAccount
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Migration

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Migration switch is required to create migration mailboxes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: Migration
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Password

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Password parameter specifies the password for the mailbox (the user account that's associated with the mailbox). This parameter isn't required if you're creating a linked mailbox, resource mailbox, or shared mailbox, because the associated user accounts are disabled for these types of mailboxes.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

```yaml
Type: SecureString
Parameter Sets: User, MicrosoftOnlineServicesID, RemoteArchive, Arbitration, DisabledUser, Discovery, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration RemovedMailbox, Room, Shared
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PublicFolder switch is required to create public folder mailboxes. You don't need to specify a value with this switch.

Public folder mailboxes are specially designed mailboxes that store the hierarchy and content of public folders.

The first public folder mailbox created in your Exchange organization is the primary hierarchy mailbox that contains the writeable copy of the hierarchy of public folders for the organization and public folder content. There can be only one writeable copy of the public folder hierarchy in your organization. All other public folder mailboxes are secondary public folder mailboxes that contain a read-only copy of the hierarchy and the content for public folders.

```yaml
Type: SwitchParameter
Parameter Sets: PublicFolder
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemovedMailbox

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: RemovedMailboxIdParameter
Parameter Sets: RemovedMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Room

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Room switch is required to create room mailboxes. You don't need to specify a value with this switch.

Room mailboxes are resource mailboxes that are associated with a specific location (for example, conference rooms).

When you use this switch in on-premises Exchange, a disabled account is created with the room mailbox. The account can't be used to sign in to the mailbox or anywhere in the organization. To enable the associated account, use the EnableRoomMailboxAccount and RoomMailboxPassword parameters.

When you use this switch in Exchange Online, an account with a random, unknown password is created for the room mailbox. If the password is known or changed, the account can be used to log in to the mailbox or anywhere in the organization. To prevent this account from being able to log in after you create the room mailbox, use the AccountEnabled parameter on the [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

```yaml
Type: SwitchParameter
Parameter Sets: EnableRoomMailboxAccount, Room
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Shared

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Shared switch is required to create shared mailboxes. You don't need to specify a value with this switch.

A shared mailbox is a mailbox where multiple users can log on to access the mailbox contents. The mailbox isn't associated with any of the users that can log on. It's associated with a disabled user account.

```yaml
Type: SwitchParameter
Parameter Sets: Shared
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The UserPrincipalName parameter specifies the logon name for the user account. The UPN uses an email address format: `username@domain`. Typically, the domain value is the domain where the user account resides.

In the cloud-based service, use the MicrosoftOnlineServicesID parameter instead.

```yaml
Type: String
Parameter Sets: User, Arbitration, AuditLog, RemoteArchive, AuxAuditLog, DisabledUser,Discovery, EnableRoomMailboxAccount, Equipment, Linked, LinkedRoomMailbox, Migration, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ActiveSyncMailboxPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ActiveSyncMailboxPolicy parameter specifies the mobile device mailbox policy that's applied to the mailbox. You can use any value that uniquely identifies the policy. For example:.

- Name
- Distinguished name (DN)
- GUID

If you don't use this parameter, the default mobile device mailbox policy is used.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AddressBookPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The AddressBookPolicy parameter specifies the address book policy that's applied to the mailbox. You can use any value that uniquely identifies the address book policy. For example:

- Name
- Distinguished name (DN)
- GUID

For more information about address book policies, see [Address book policies in Exchange Server](https://learn.microsoft.com/Exchange/email-addresses-and-address-books/address-book-policies/address-book-policies).

```yaml
Type: AddressBookMailboxPolicyIdParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, FederatedUser, InactiveMailbox, Linked, LinkedRoomMailbox, MicrosoftOnlineServicesFederatedUser, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Alias

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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
Parameter Sets: User, MicrosoftOnlineServicesID, DisabledUser, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Archive switch specifies that an archive mailbox is created for this mailbox. You don't need to specify a value with this switch.

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

### -ArchiveDatabase

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ArchiveDatabase parameter specifies the Exchange database that contains the archive that's associated with this mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: DatabaseIdParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuditLog

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The AuditLog switch is required to create audit log mailboxes. You don't need to specify a value with this switch.

Audit log mailboxes are arbitration mailboxes that are used to store audit log settings.

To create other types of arbitration mailboxes, don't use this switch. Instead, use the Arbitration switch.

```yaml
Type: SwitchParameter
Parameter Sets: AuditLog
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AuxAuditLog

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The AuxAuditLog switch is required to create auxiliary audit log mailboxes. You don't need to specify a value with this switch.

Audit log mailboxes are arbitration mailboxes that are used to store audit log settings.

To create other types of arbitration mailboxes, don't use this switch. Instead, use the Arbitration switch.

```yaml
Type: SwitchParameter
Parameter Sets: AuxAuditLog
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

### -Database

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The Database parameter specifies the mailbox database that contains the mailbox. You can use any value that uniquely identifies the database. For example:

- Name
- Distinguished name (DN)
- GUID

Use the Get-MailboxDatabase cmdlet to see the available mailbox databases.

```yaml
Type: DatabaseIdParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The DisplayName parameter specifies the display name of the mailbox. The display name is visible in the Exchange admin center, in address lists, and in Outlook. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

If you don't use the DisplayName parameter, the value of the Name parameter is used for the display name.

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
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FirstName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The FirstName parameter specifies the user's first name.

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

### -Force

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Force switch hides warning or confirmation messages. You don't need to specify a value with this switch.

You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate.

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

### -HoldForMigration

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The HoldForMigration switch specifies whether to prevent any client or user, except the Microsoft Exchange Mailbox Replication service (MRS) process, from logging on to a public folder mailbox. You don't need to specify a value with this switch.

You need to use this parameter when you create the first public folder, which is called the hierarchy mailbox, in your organization.

Use this parameter only if you plan to migrate legacy Exchange 2010 public folders to Exchange 2016. If you use this switch but don't have legacy public folders to migrate, you can't create any public folders.

```yaml
Type: SwitchParameter
Parameter Sets: PublicFolder
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImmutableId

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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

### -Initials

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Initials parameter specifies the user's middle initials.

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

### -IsExcludedFromServingHierarchy

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The IsExcludedFromServingHierarchy parameter prevents users from accessing the public folder hierarchy on this public folder mailbox. For load-balancing purposes, users are equally distributed across public folder mailboxes by default. When this parameter is set on a public folder mailbox, that mailbox isn't included in this automatic load-balancing and can't be accessed by users to retrieve the public folder hierarchy. However, if an administrator has set the DefaultPublicFolderMailbox property on a user mailbox to a specific public folder mailbox, the user can still access the specified public folder mailbox, even if the IsExcludedFromServingHierarchy parameter is set for that public folder mailbox.

```yaml
Type: Boolean
Parameter Sets: PublicFolder
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LastName

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The LastName parameter specifies the user's last name.

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

### -LinkedCredential

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The LinkedCredential parameter specifies credentials to use to access the domain controller specified by the LinkedDomainController parameter. This parameter is optional, even if you're enabling a linked mailbox.

A value for this parameter requires the Get-Credential cmdlet. To pause this command and receive a prompt for credentials, use the value `(Get-Credential)`. Or, before you run this command, store the credentials in a variable (for example, `$cred = Get-Credential`) and then use the variable name (`$cred`) for this parameter. For more information, see [Get-Credential](https://learn.microsoft.com/powershell/module/microsoft.powershell.security/get-credential).

```yaml
Type: PSCredential
Parameter Sets: Linked, LinkedRoomMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxPlan

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The MailboxPlan parameter specifies the mailbox plan to apply to the mailbox. You can use any value that uniquely identifies the mailbox plan. For example:

- Name
- Alias
- Display name
- Distinguished name (DN)
- GUID

A mailbox plan specifies the permissions and features that are available to a mailbox. In Exchange Online, mailbox plans correspond to the subscriptions and licenses that administrators purchase and assign in the Microsoft 365 admin center.

You can see the available mailbox plans by using the Get-MailboxPlan cmdlet.

```yaml
Type: MailboxPlanIdParameter
Parameter Sets: User, MicrosoftOnlineServicesID, DisabledUser, FederatedUser, InactiveMailbox, MicrosoftOnlineServicesFederatedUser, RemoteArchive, RemovedMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxRegion

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

The MailboxRegion parameter specifies the geo location for the mailbox in multi-geo environments.

To see the list of configured geo locations in Microsoft 365 Multi-Geo, run the following command: `Get-OrganizationConfig | Select -ExpandProperty AllowedMailboxRegions | Format-Table`. To view your central geo location, run the following command: `Get-OrganizationConfig | Select DefaultMailboxRegion`.

 For more information, see [Administering Exchange Online mailboxes in a multi-geo environment](https://learn.microsoft.com/microsoft-365/enterprise/administering-exchange-online-multi-geo).

```yaml
Type: String
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, FederatedUser, InactiveMailbox, Linked, LinkedRoomMailbox, MicrosoftOnlineServicesFederatedUser, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicy

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The ManagedFolderMailboxPolicy parameter specifies the managed folder mailbox policy to enable for the mailbox that you create.

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderMailboxPolicyAllowed

> Applicable: Exchange Server 2010

This parameter is available only in Exchange Server 2010.

The ManagedFolderMailboxPolicyAllowed switch specifies whether to bypass the warning that messaging records management (MRM) features aren't supported for clients using versions of Microsoft Outlook earlier than Office Outlook 2007. You don't need to specify a value with this switch.

When a managed folder mailbox policy is assigned to a mailbox using the ManagedFolderMailboxPolicy parameter, the warning appears by default unless the ManagedFolderMailboxPolicyAllowed switch is used.

Outlook 2003 Service Pack 3 clients are supported but are provided limited functionality for MRM.

```yaml
Type: SwitchParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModeratedBy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ModeratedBy parameter specifies one or more moderators for this recipient. A moderator approves messages sent to the recipient before the messages are delivered. A moderator must be a mailbox, mail user, or mail contact in your organization. You can use any value that uniquely identifies the moderator. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

You can enter multiple values separated by commas. If the values contain spaces or otherwise require quotation marks, use the following syntax: `"Value1","Value2",..."ValueN"`.

You need to use this parameter to specify at least one moderator when you set the ModerationEnabled parameter to the value $true.

```yaml
Type: MultiValuedProperty
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, DisabledUser, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ModerationEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ModerationEnabled parameter specifies whether moderation is enabled for this recipient. Valid value are:

- $true: Moderation is enabled for this recipient. Messages sent to this recipient must be approved by a moderator before the messages are delivered.
- $false: Moderation is disabled for this recipient. Messages sent to this recipient are delivered without the approval of a moderator. This value is the default.

You use the ModeratedBy parameter to specify the moderators.

```yaml
Type: Boolean
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, DisabledUser, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Office

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Office parameter specifies the user's physical office name or number.

```yaml
Type: String
Parameter Sets: LinkedRoomMailbox, Room
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The OrganizationalUnit parameter specifies the location in Active Directory where the new mailbox is created.

Valid input for this parameter is an organizational unit (OU) or domain that's returned by the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Phone

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The Phone parameter specifies the user's telephone number.

```yaml
Type: String
Parameter Sets: LinkedRoomMailbox, Room
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The PrimarySmtpAddress parameter specifies the primary return email address that's used for the recipient.

If you use the PrimarySmtpAddress parameter to specify the primary email address, the command sets the EmailAddressPolicyEnabled property of the mailbox to False, which means the email addresses of the mailbox aren't automatically updated by email address policies.

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

### -ProxyEmailAddress

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

{{ Fill ProxyEmailAddress Description }}

```yaml
Type: ProxyAddress
Parameter Sets: Arbitration
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoteArchive

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The RemoteArchive switch specifies that a remote archive mailbox is created for this mailbox. A remote archive exists in the cloud-based service. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: RemoteArchive
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemotePowerShellEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RemotePowerShellEnabled parameter specifies whether the user has access to Exchange PowerShell. Valid values are:

- $true: The user has access to Exchange Online PowerShell, the Exchange Management Shell, and the Exchange admin center (EAC). This value is the default.
- $false: The user has doesn't have access to Exchange Online PowerShell, the Exchange Management Shell, or the EAC.

Access to Exchange PowerShell is required even if you're trying to open the Exchange Management Shell or the EAC on the local Exchange server.

A user's experience in any of these management interfaces is still controlled by the role-based access control (RBAC) permissions that are assigned to them.

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

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ResetPasswordOnNextLogon parameter specifies whether the user is required to change their password the next time they log on to their mailbox. Valid values are:

- $true: The user is required to change their password the next time they log on to their mailbox.
- $false: The user isn't required to change their password the next time they log on to their mailbox. This value is the default.

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

### -ResourceCapacity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The ResourceCapacity parameter specifies the capacity of the resource mailbox. For example, you can use this parameter to identify the number of seats in a conference room (room mailbox) or in a vehicle (equipment mailbox). A valid value is an integer.

```yaml
Type: Int32
Parameter Sets: Room
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RetentionPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

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
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoleAssignmentPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The RoleAssignmentPolicy parameter specifies the role assignment policy that's applied to the mailbox. You can use any value that uniquely identifies the role assignment policy. For example:

- Name
- Distinguished name (DN)
- GUID

In Exchange Online PowerShell, if you don't use this parameter, the default role assignment policy named Default Role Assignment Policy is automatically applied to the mailbox. In on-premises Exchange, no role assignment policy is automatically applied to the mailbox.

Use the Get-RoleAssignmentPolicy cmdlet to see the available role assignment policies. For more information about assignment policies, see [Understanding management role assignment policies](https://learn.microsoft.com/exchange/understanding-management-role-assignment-policies-exchange-2013-help).

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RoomMailboxPassword

> Applicable: Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

This parameter is functional only in on-premises Exchange.

Use the RoomMailboxPassword parameter to configure the password for the account that's associated with the room mailbox when that account is enabled and able to log in (the EnableRoomMailboxAccount parameter is set to the value $true).

To use this parameter in on-premises Exchange, you need to be a member of one of the following role groups:

- The Organization Management role group via the Mail Recipients and User Options roles.
- The Recipient Management role group via the Mail Recipients role.
- The Help Desk role group via the User Options role.

The Reset Password role also allows you to use this parameter, but it isn't assigned to any role groups by default.

You can use the following methods as a value for this parameter:

- `(ConvertTo-SecureString -String '<password>' -AsPlainText -Force)`.
- Before you run this command, store the password as a variable (for example, `$password = Read-Host "Enter password" -AsSecureString`), and then use the variable (`$password`) for the value.
- `(Get-Credential).password` to be prompted to enter the password securely when you run this command.

To configure the password for a room mailbox account in Exchange Online, use [Update-MgUser](https://learn.microsoft.com/powershell/module/microsoft.graph.users/update-mguser) cmdlet in Microsoft Graph PowerShell.

```yaml
Type: SecureString
Parameter Sets: EnableRoomMailboxAccount
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
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, FederatedUser, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendModerationNotifications

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

The SendModerationNotifications parameter specifies when moderation notification messages are sent. Valid values are:

- Always: Notify all senders when their messages aren't approved. This value is the default.
- Internal: Notify senders in the organization when their messages aren't approved.
- Never: Don't notify anyone when a message isn't approved.

This parameter is only meaningful when moderation is enabled (the ModerationEnabled parameter has the value $true).

```yaml
Type: TransportModerationNotificationFlags
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, DisabledUser, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SharingPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The SharingPolicy parameter specifies the sharing policy that's applied to the mailbox. You can use any value that uniquely identifies the sharing policy. For example:

- Name
- Distinguished name (DN)
- GUID

Use the Get-SharingPolicy cmdlet to see the available sharing policies.

If you don't use this parameter, the sharing policy named Default Sharing Policy is applied to the mailbox.

```yaml
Type: SharingPolicyIdParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupervisoryReviewPolicy

> Applicable: Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: SupervisoryReviewPolicyMailbox
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetAllMDBs

> Applicable: Exchange Online

This parameter is available only in the cloud-based service.

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, FederatedUser, InactiveMailbox, Linked, LinkedRoomMailbox, MicrosoftOnlineServicesFederatedUser, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottlingPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE

This parameter is available only in on-premises Exchange.

The ThrottlingPolicy parameter specifies the throttling policy that's applied to the mailbox. You can use any value that uniquely identifies the throttling policy. For example:

- Name
- Distinguished name (DN)
- GUID

Use the Get-ThrottlingPolicy cmdlet to see the available throttling policies.

By default, no throttling policy is applied to the mailbox.

```yaml
Type: ThrottlingPolicyIdParameter
Parameter Sets: User, MicrosoftOnlineServicesID, Arbitration, AuditLog, AuxAuditLog, DisabledUser, Discovery, EnableRoomMailboxAccount, Equipment, InactiveMailbox, Linked, LinkedRoomMailbox, Migration, PublicFolder, RemoteArchive, RemovedMailbox, Room, Shared, SupervisoryReviewPolicyMailbox
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019, Exchange Server SE, Exchange Online

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
