---
title: "Get-RemoteMailbox"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/19/2018
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: 8a668da4-9582-470f-a7fd-27b72e748b47

description: "This cmdlet is available only in on-premises Exchange."
---

# Get-RemoteMailbox

This cmdlet is available only in on-premises Exchange. 
  
Use the **Get-RemoteMailbox** cmdlet to retrieve the mail-related attributes of users in the on-premises organization that have associated mailboxes in the cloud-based service.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-RemoteMailbox [-Identity <RemoteMailboxIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example returns a summary list of all remote mailboxes in your organization.
  
```
Get-RemoteMailbox
```

### Example 2

This example returns a detailed information for the remote mailbox for the user laura@contoso.com.
  
```
Get-RemoteMailbox -Identity laura@contoso.com | Format-List
```

### Example 3

This example uses alternate credentials to retrieve a list of one or more mail-enabled users with mailboxes in the service. This is useful if the account you typically use doesn't have administrative permissions. The credentials are used to access the on-premises Active Directory domain controllers.
  
First, run the following command to prompt you for your credentials, and then store them in a variable. Then retrieve a list of remote mailboxes using the credentials you provided by using the second command.
  
```
$Credentials = Get-Credential; Get-RemoteMailbox -Credential $Credentials
```

## Detailed Description
<a name="DetailedDescription"> </a>

The **Get-RemoteMailbox** cmdlet retrieves the mail-related attributes of a mail user in the on-premises Active Directory. It doesn't retrieve the attributes of the associated cloud-based mailbox. Most of the mail-related attributes of the on-premises mail user and the associated cloud-based mailbox should be the same. However, the cloud-based mailbox has additional attributes that you can't view by using this cmdlet. To view the attributes of the cloud-based mailbox, you need to use the Exchange admin center in the cloub-based service, or use remote PowerShell to connect to your cloud-based organization and run the **Get-Mailbox** cmdlet.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> | The _Anr_ parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are: <br/> **CommonName (CN)** <br/> **DisplayName** <br/> **FirstName** <br/> **LastName** <br/> **Alias** <br/> |
| _Archive_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Archive_ switch specifies whether to return information about the recipient's archive mailbox. <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> |The _Filter_ parameter indicates the OPath filter used to filter recipients. <br/> For more information about the filterable properties, see [Filterable properties for the -Filter parameter](https://technet.microsoft.com/library/bb738155.aspx).  <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.RemoteMailboxIdParameter  <br/> | The _Identity_ parameter specifies the remote mailbox that you want to view. You can use any value that uniquely identifies the remote mailbox. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _OnPremisesOrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> | The _OnPremisesOrganizationalUnit_ parameter filters the results by the object's location in Active Directory. <br/>  Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> | The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/>  If the default view doesn't include the property you're sorting by, you can append the command with `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/>  You can sort by the following properties: <br/> **Name** <br/> **DisplayName** <br/> **Alias** <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

