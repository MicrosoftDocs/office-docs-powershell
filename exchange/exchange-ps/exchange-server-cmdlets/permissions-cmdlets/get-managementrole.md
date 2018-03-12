---
title: "Get-ManagementRole"
ms.author: dstrome
author: dstrome
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: c3a48baa-ee7d-4615-88e3-5798443dee35
description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-ManagementRole

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-ManagementRole** cmdlet to view management roles that have been created in your organization.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-ManagementRole [-Cmdlet <String>] [-CmdletParameters <String[]>] [-Identity <RoleIdParameter>] [-RoleType <Custom | UnScoped | OrganizationManagement | RecipientManagement | ViewOnlyOrganizationManagement | DistributionGroupManagement | MyDistributionGroups | MyDistributionGroupMembership | UmManagement | RecordsManagement | MyBaseOptions | UmRecipientManagement | HelpdeskRecipientManagement | GALSynchronizationManagement | ApplicationImpersonation | UMPromptManagement | PartnerDelegatedTenantManagement | DiscoveryManagement | CentralAdminManagement | UnScopedRoleManagement | MyContactInformation | MyProfileInformation | MyVoiceMail | MyTextMessaging | MyMailSubscriptions | MyRetentionPolicies | MyOptions | MailRecipients | FederatedSharing | DatabaseAvailabilityGroups | Databases | PublicFolders | AddressLists | RecipientPolicies | DisasterRecovery | Monitoring | DatabaseCopies | UnifiedMessaging | Journaling | RemoteAndAcceptedDomains | EmailAddressPolicies | TransportRules | SendConnectors | EdgeSubscriptions | OrganizationTransportSettings | ExchangeServers | ExchangeVirtualDirectories | ExchangeServerCertificates | POP3AndIMAP4Protocols | ReceiveConnectors | UMMailboxes | UserOptions | SecurityGroupCreationAndMembership | MailRecipientCreation | MessageTracking | RoleManagement | ViewOnlyRecipients | ViewOnlyConfiguration | DistributionGroups | MailEnabledPublicFolders | MoveMailboxes | WorkloadManagement | ResetPassword | AuditLogs | RetentionManagement | SupportDiagnostics | MailboxSearch | LegalHold | MailTips | PublicFolderReplication | ActiveDirectoryPermissions | UMPrompts | Migration | DataCenterOperations | TransportHygiene | TransportQueues | Supervision | CmdletExtensionAgents | OrganizationConfiguration | OrganizationClientAccess | ExchangeConnectors | MailboxImportExport | ViewOnlyCentralAdminManagement | ViewOnlyCentralAdminSupport | ViewOnlyRoleManagement | Reporting | ViewOnlyAuditLogs | TransportAgents | DataCenterDestructiveOperations | InformationRightsManagement | LawEnforcementRequests | MyDiagnostics | MyMailboxDelegation | TeamMailboxes | MyTeamMailboxes | ActiveMonitoring | DataLossPrevention | MyFacebookEnabled | MyLinkedInEnabled | UserApplication | ArchiveApplication | LegalHoldApplication | OfficeExtensionApplication | TeamMailboxLifecycleApplication | CentralAdminCredentialManagement | PersonallyIdentifiableInformation | MailboxSearchApplication | MyMarketplaceApps | MyCustomApps | OrgMarketplaceApps | OrgCustomApps | ExchangeCrossServiceIntegration | NetworkingManagement | AccessToCustomerDataDCOnly | DatacenterOperationsDCOnly | OutlookSupportTier0 | O365SupportViewConfig | OutlookSupportTier1 | OutlookSupportTier3 | MeetingGraphApplication | ComplianceSearch | CaseManagement | Export | Hold | Preview | OutlookSupportTier9 | MyReadWriteMailboxApps | Review | SearchAndPurge | SupervisoryReviewAdmin | ServiceAssuranceView | OutlookSupportPartnersTier0 | OutlookSupportPartnersTier1 | OutlookSupportPartnersTier3 | OutlookSupportPartnersTier9 | DatacenterMailboxManagement | SendMailApplication | ComplianceAdmin | SecurityAdmin | SecurityReader | DeviceManagement | DLPComplianceManagement | ManageAlerts | RecordManagement | ViewOnlyDeviceManagement | ViewOnlyDLPComplianceManagement | ViewOnlyManageAlerts | ViewOnlyRecordManagement | ViewOnlyRetentionManagement | AntiMalware | AntiSpam | Quarantine | ViewOnlyAntiMalware | ViewOnlyAntiSpam | ViewOnlyQuarantine | ViewOnlyThreatIntelligence | RmsDecrypt | DispositionManagement>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example lists all the roles that have been created in your organization.
  
```
Get-ManagementRole
```

### Example 2

This example lists all the roles that are children of the Mail Recipients management role. The command performs a recursive query of all the child roles of the specified parent role. This recursive query finds every child role from the immediate children of the parent to the last child role in the hierarchy. In a recursive list, the parent role is also returned in the list.
  
```
Get-ManagementRole "Mail Recipients" -Recurse
```

### Example 3

This example lists all the roles that contain both the _Identity_ and _Database_ parameters. Roles that contain only one parameter or the other aren't returned.
  
```
Get-ManagementRole -CmdletParameters Identity, Database
```

### Example 4

This example lists all the roles that have a type of  `UnScopedTopLevel`. These roles contain custom scripts or non-Exchange cmdlets.
  
```
Get-ManagementRole -RoleType UnScopedTopLevel
```

### Example 5

This example retrieves only the Transport Rules role and passes the output of the **Get-ManagementRole** cmdlet to the **Format-List** cmdlet. The **Format-List** cmdlet then shows only the _Name_ and _RoleType_ properties of the Transport Rules role. For more information about pipelining and the **Format-List** cmdlet, see[Pipelining](https://technet.microsoft.com/library/59411ed3-926b-4eec-a462-84e6b26056c9.aspx) and[Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).
  
```
Get-ManagementRole "Transport Rules" | Format-List Name, RoleType
```

### Example 6

This example lists the immediate children of the Mail Recipients role. Only the child roles that hold the Mail Recipients role as their parent role are returned. The Mail Recipients role isn't returned in the list.
  
```
Get-ManagementRole "Mail Recipients" -GetChildren
```

## Detailed Description
<a name="DetailedDescription"> </a>

You can view management roles in several ways, from listing all the roles in your organization to listing only the child roles of a specified parent role. You can also view the details of a specific role by piping the output of the **Get-ManagementRole** cmdlet to the **Format-List** cmdlet.
  
For more information about management roles, see [Understanding Management Roles](https://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _GetChildren_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _GetChildren_ parameter retrieves a list of all the roles that were created based on the parent role specified in the _Identity_ parameter. Only the immediate child roles of the parent role are included. The _GetChildren_ parameter can only be used with the _Identity_ and _RoleType_ parameters. <br/> |
| _Recurse_ <br/> |Required  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Recurse_ parameter retrieves a list of all the roles that were created based on the parent role specified in the _Identity_ parameter. The role specified in the _Identity_ parameter, its child roles, and their children are returned. The _Recurse_ parameter can only be used with the _Identity_ and _RoleType_ parameters. <br/> |
| _Cmdlet_ <br/> |Optional  <br/> |System.String  <br/> |The _Cmdlet_ parameter returns a list of all roles that include the specified cmdlet. <br/> |
| _CmdletParameters_ <br/> |Optional  <br/> |System.String[]  <br/> |The _CmdletParameters_ parameter returns a list of all roles that include the specified parameter or parameters. You can specify more than one parameter by separating each parameter with a comma. If you specify multiple parameters, only the roles that include all of the specified parameters are returned. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RoleIdParameter  <br/> |The _Identity_ parameter specifies the role you want to view. If the role you want to view contains spaces, enclose the name in quotation marks ("). You can use the wildcard character (*) and a partial role name to match multiple roles. <br/> |
| _RoleType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.RoleType  <br/> |The _RoleType_ parameter returns a list of roles that match the specified role type. For a list of valid role types, see[Understanding Management Roles](https://technet.microsoft.com/library/887b0a64-84b1-4b8c-9547-e456ea6f5dbd.aspx).  <br/> |
| _Script_ <br/> |Optional  <br/> |System.String  <br/> |The _Script_ parameter returns a list of all roles that include the specified script. <br/> |
| _ScriptParameters_ <br/> |Optional  <br/> |System.String[]  <br/> |The _ScriptParameters_ parameter returns a list of all roles that include the specified parameter or parameters. You can specify more than one parameter by separating each parameter with a comma. If you specify multiple parameters, only the roles that include all of the specified parameters are returned. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

