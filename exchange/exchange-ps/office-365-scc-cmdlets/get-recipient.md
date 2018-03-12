---
title: "Get-Recipient"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 2ce6250f-0ad3-4b29-870c-e1d6e1e154bc

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-Recipient

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-Recipient** cmdlet to view existing recipient objects in your organization. This cmdlet returns all mail-enabled objects (for example, mailboxes, mail users, mail contacts, and distribution groups).
  
> [!NOTE]
> In cloud environments, to return Office 365 groups, you need to use the  _RecipientTypeDetails_ parameter with the value `GroupMailbox`. 
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-Recipient [-BookmarkDisplayName <String>] [-Identity <RecipientIdParameter>] [-IncludeBookmarkObject <$true | $false>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example retrieves as summary list of all recipients in your organization.
  
```
Get-Recipient -ResultSize unlimited
```

### Example 2

This example returns detailed information for the recipient named Marketing Department.
  
```
Get-Recipient -Identity "Marketing Department" | Format-List
```

### Example 3

This example retrieves information about all the mail contacts in your organization and sorts them by office.
  
```
Get-Recipient -RecipientType MailContact -SortBy Office | Format-Table -Auto Office,Name
```

## Detailed Description
<a name="DetailedDescription"> </a>

 The **Get-Recipient** cmdlet may not return all object-specific properties for a recipient. To view the object-specific properties for a recipient, you need to use the corresponding cmdlet based on the object type (for example, **Get-Mailbox**, **Get-MailUser**, or **Get-DistributionGroup** ).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccountPartition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AccountPartitionIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> | The _Anr_ parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are: <br/> **CommonName (CN)** <br/> **DisplayName** <br/> **FirstName** <br/> **LastName** <br/> **Alias** <br/> |
| _AuthenticationType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.AuthenticationType  <br/> | This parameter is available only in the cloud-based service. <br/>  The _AuthenticationType_ parameter specifies the recipient by authentication type. Use one of the following values: <br/>  `Federated` <br/>  `Managed` <br/> |
| _BookmarkDisplayName_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Capabilities_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.MultiValuedProperty  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _Database_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.DatabaseIdParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _Database_ parameter specifies a mailbox database. Use this parameter to return all recipients stored on a specific mailbox database. Use the mailbox database _Name_ property as the value for this parameter. <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The  _Filter_ parameter indicates the OPath filter used to filter recipients. <br/> For more information about the filterable properties, see [Filterable properties for the -Filter parameter](https://technet.microsoft.com/library/bb738155.aspx).  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RecipientIdParameter  <br/> | The _Identity_ parameter specifies the recipient object that you want to view. You can use any value that uniquely identifies the recipient. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  Email address <br/>  GUID <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _IncludeBookmarkObject_ <br/> |Optional  <br/> |System.Boolean  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _IncludeSoftDeletedRecipients_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The  _IncludeSoftDeletedRecipients_switch specifies whether to include soft deleted recipients in the results. You don't need to specify a value with this switch.  <br/> This switch is required to return soft-deleted recipients.  <br/> Soft-deleted recipients are deleted recipients that are still recoverable.  <br/> |
| _Organization_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> | The _OrganizationalUnit_ parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _Properties_ <br/> |Optional  <br/> |System.String[]  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _PropertySet_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Management.PropertySet  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _RecipientPreviewFilter_ <br/> |Optional  <br/> |System.String  <br/> |The  _RecipientPreviewFilter_ parameter specifies a recipient filter that would define the recipients returned by this command. You can create a custom recipient filter for a dynamic distribution group, an address list, or an email address policy. To verify that the recipient filter you specified will return the recipients you want, you can pass the OPATH filter specified in the **RecipientFilter** property for that dynamic distribution group, address list, or email address policy to the _RecipientPreviewFilter_ parameter and preview the list of recipients. <br/> |
| _RecipientType_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RecipientType[]  <br/> | The _RecipientType_ parameter filters the results by the specified recipient type. Valid values are: <br/>  `DynamicDistributionGroup` <br/>  `MailContact` <br/>  `MailNonUniversalGroup` <br/>  `MailUniversalDistributionGroup` <br/>  `MailUniversalSecurityGroup` <br/>  `MailUser` <br/>  `PublicFolder` <br/>  `UserMailbox` <br/>  You can specify multiple values separated by commas. <br/> |
| _RecipientTypeDetails_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RecipientTypeDetails[]  <br/> | The _RecipientTypeDetails_parameter filters the results by the specified recipient subtype. Valid values are:  <br/>  `DiscoveryMailbox` <br/>  `DynamicDistributionGroup` <br/>  `EquipmentMailbox` <br/>  `GroupMailbox` <br/>  `GuestMailUser` <br/>  `LegacyMailbox` <br/>  `LinkedMailbox` <br/>  `LinkedRoomMailbox` <br/>  `MailContact` <br/>  `MailForestContact` <br/>  `MailNonUniversalGroup` <br/>  `MailUniversalDistributionGroup` <br/>  `MailUniversalSecurityGroup` <br/>  `MailUser` <br/>  `PublicFolder` <br/>  `PublicFolderMailbox` <br/>  `RemoteEquipmentMailbox` <br/>  `RemoteRoomMailbox` <br/>  `RemoteSharedMailbox` <br/>  `RemoteTeamMailbox` <br/>  `RemoteUserMailbox` <br/>  `RoomList` <br/>  `RoomMailbox` <br/>  `SchedulingMailbox` <br/>  `SharedMailbox` <br/>  `TeamMailbox` <br/>  `UserMailbox` <br/>  You can specify multiple values separated by commas. <br/>  The value of the _RecipientType_ parameter affects the values that you can use for this parameter. For example, if you use the _RecipientType_ value `MailContact`, you can't use the value  `UserMailbox` for this parameter. You'll receive the error: `None of the specified RecipientTypeDetails are included in any specified recipient type`.  <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> **Alias** <br/> **City** <br/> **FirstName** <br/> **LastName** <br/> **Office** <br/> **ServerLegacyDN** <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

