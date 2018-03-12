---
title: "Get-Group"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Admin
ms.topic: reference
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 1dff448b-e4ac-45b8-9a60-2ab3b5859559

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-Group

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-Group** cmdlet to view existing group objects in your organization. This cmdlet returns security groups, mail-enabled security groups, distribution groups, and role groups.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-Group [-Identity <GroupIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all groups in your organization.
  
```
Get-Group
```

### Example 2

This example returns detailed information for the group named Marketing Reports.
  
```
Get-Group -Identity "Marketing Reports" | Format-List
```

### Example 3

This example uses the  _Anr_ parameter to return all groups that begin with "Mar".
  
```
Get-Group -Anr Mar*
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-Group** cmdlet returns no mail-related properties for distribution groups or mail-enabled security groups, and no role group-related properties for role groups. To view the object-specific properties for a group, you need to use the corresponding cmdlet based on the object type (for example, **Get-DistributionGroup** or **Get-RoleGroup** ).
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _AccountPartition_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.AccountPartitionIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> | The _Anr_ parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are: <br/> **CommonName (CN)** <br/> **DisplayName** <br/> **FirstName** <br/> **LastName** <br/> **Alias** <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The  _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> The  _DomainController_ parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data. <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> | The _Filter_ parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax `{<Property> -<Comparison operator> '<Value>'}`.  <br/>  `<Property>` is a filterable property. <br/>  `-<Comparison Operator>` is an OPATH comparison operator. For example `-eq` for equals and `-like` for string comparison. For more information about comparison operators, see[about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).  <br/>  `<Value>` is the property value. Text values with or without spaces need to be enclosed in quotation marks ( `'<Value>'`). Don't use quotation marks with integers or the system values  `$true`,  `$false`, or  `$null`.  <br/>  You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example,  `{<Criteria1>) -and <Criteria2>}` or `{(<Criteria1> -and <Criteria2>) -or <Criteria3>}`.  <br/>  You can filter by the following properties: <br/> **AdministrativeUnits** <br/> **DisplayName** <br/> **DistinguishedName** <br/> **ExchangeVersion** <br/> **GroupType** <br/> **Guid** <br/> **Id** <br/> **IsDirSynced** <br/> **ManagedBy** <br/> **Name** <br/> **Notes** <br/> **ObjectCategory** <br/> **ObjectClass** <br/> **PhoneticDisplayName** <br/> **RecipientType** <br/> **RecipientTypeDetails** <br/> **SamAccountName** <br/> **Sid** <br/> **SidHistory** <br/> **SimpleDisplayName** <br/> **WhenChanged** <br/> **WhenChangedUTC** <br/> **WhenCreated** <br/> **WhenCreatedUTC** <br/> **WindowsEmailAddress** <br/>  For more information, see[Filterable Properties for the -Filter Parameter](http://technet.microsoft.com/library/b02b0005-2fb6-4bc2-8815-305259fa5432.aspx).  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.GroupIdParameter  <br/> | The _Identity_ parameter specifies the group object that you want to view. You can use any value that uniquely identifies the group. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Distinguished name (DN) <br/>  Canonical DN <br/>  GUID <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | This parameter is available only in on-premises Exchange. <br/>  The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _Organization_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationIdParameter  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> | The _OrganizationalUnit_ parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |This parameter is available only in on-premises Exchange.  <br/> The  _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _RecipientTypeDetails_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Directory.Recipient.RecipientTypeDetails[]  <br/> | The _RecipientTypeDetails_parameter filters the results by the specified group subtype. Valid values are:  <br/>  `MailNonUniversalGroup` <br/>  `MailUniversalDistributionGroup` <br/>  `MailUniversalSecurityGroup` <br/>  `RoomList` <br/>  You can specify multiple values separated by commas. <br/> |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The  _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

