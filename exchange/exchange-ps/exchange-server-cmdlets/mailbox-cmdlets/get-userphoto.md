---
title: "Get-UserPhoto"
ms.author: serdars
author: SerdarSoysal
manager: serdars
ms.date: 1/16/2018
ms.audience: Developer
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: a9b22e66-a511-4a47-ba50-a0fc9c204fcc

description: "This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other."
---

# Get-UserPhoto

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other. 
  
Use the **Get-UserPhoto** cmdlet to view information about the user photos feature that allows users to associate a picture with their account. User photos appear in on-premises and cloud-based client applications, such as Outlook on the web, Lync, Skype for Business, and SharePoint.
  
For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://technet.microsoft.com/library/bb123552.aspx). 
  
```
Get-UserPhoto [-Identity <MailboxIdParameter>] <COMMON PARAMETERS>

```

## Examples
<a name="Examples"> </a>

### Example 1

This example displays information about the user photo configured for Susan Burk.
  
```
Get-UserPhoto "Susan Burk"
```

### Example 2

This example displays information about the user photo that was uploaded to Pilar Pinilla's account, but wasn't saved.
  
```
Get-UserPhoto "Pilar Pinilla" -Preview
```

## Detailed Description
<a name="DetailedDescription"> </a>

The user photos feature allows users to associate a picture with their account. User photos are stored in the user's Active Directory account and in the root directory of the user's Exchange mailbox. The user photo feature must be set for a user before you can run the **Get-UserPhoto** cmdlet to view information about the user's photo. Otherwise, you get an error message saying the user photo doesn't exist for the specified users. Administrators use the **Set-UserPhoto** cmdlet or the Exchange admin center (EAC) to configure user photos. Users can upload, preview, and save a user photo to their account by using the Outlook on the web Options page.
  
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://technet.microsoft.com/library/mt432940.aspx).
  
## Parameters
<a name="DetailedDescription"> </a>

|**Parameter**|**Required**|**Type**|**Description**|
|:-----|:-----|:-----|:-----|
| _Anr_ <br/> |Optional  <br/> |System.String  <br/> | The _Anr_ parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are: <br/> **CommonName (CN)** <br/> **DisplayName** <br/> **FirstName** <br/> **LastName** <br/> **Alias** <br/> |
| _Credential_ <br/> |Optional  <br/> |System.Management.Automation.PSCredential  <br/> |The _Credential_ parameter specifies the user name and password that's used to run this command. Typically, you use this parameter in scripts or when you need to provide different credentials that have the required permissions. <br/> This parameter requires the creation and passing of a credential object. This credential object is created by using the **Get-Credential** cmdlet. For more information, see[Get-Credential](https://go.microsoft.com/fwlink/p/?linkId=142122).  <br/> |
| _DomainController_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Fqdn  <br/> |This parameter is available only in on-premises Exchange.  <br/> The _DomainController_ parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, `dc01.contoso.com`.  <br/> |
| _Filter_ <br/> |Optional  <br/> |System.String  <br/> | The _Filter_ parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax `{<Property> -<Comparison operator> '<Value>'}`.  <br/>  `<Property>` is a filterable property. <br/>  `-<Comparison Operator>` is an OPATH comparison operator. For example `-eq` for equals and `-like` for string comparison. For more information about comparison operators, see[about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).  <br/>  `<Value>` is the property value. Text values with or without spaces need to be enclosed in quotation marks ( `'<Value>'`). Don't use quotation marks with integers or the system values  `$true`,  `$false`, or  `$null`.  <br/>  You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example,  `{<Criteria1>) -and <Criteria2>}` or `{(<Criteria1> -and <Criteria2>) -or <Criteria3>}`.  <br/> |
| _GroupMailbox_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _GroupMailbox_ switch indicates the specified user is an Office 365 Group. You don't need to specify a value with this switch. <br/> |
| _Identity_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.MailboxIdParameter  <br/> | The _Identity_ parameter specifies the user account. You can use any value that uniquely identifies the user account. <br/>  For example: <br/>  Name <br/>  Display name <br/>  Alias <br/>  Distinguished name (DN) <br/>  Canonical DN <br/> _\<domain name\>_\ _\<account name\>_ <br/>  Email address <br/>  GUID <br/> **LegacyExchangeDN** <br/> **SamAccountName** <br/>  User ID or user principal name (UPN) <br/> |
| _IgnoreDefaultScope_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> | The _IgnoreDefaultScope_ switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope. <br/>  Using the _IgnoreDefaultScope_ switch introduces the following restrictions: <br/>  You can't use the _DomainController_ parameter. The command uses an appropriate global catalog server automatically. <br/>  You can only use the DN for the _Identity_ parameter. Other forms of identification, such as alias or GUID, aren't accepted. <br/> |
| _OrganizationalUnit_ <br/> |Optional  <br/> |Microsoft.Exchange.Configuration.Tasks.OrganizationalUnitIdParameter  <br/> | The _OrganizationalUnit_ parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the **Get-OrganizationalUnit** cmdlet. You can use any value that uniquely identifies the OU or domain. For example: <br/>  Name <br/>  Canonical name <br/>  Distinguished name (DN) <br/>  GUID <br/> |
| _PhotoType_ <br/> |Optional  <br/> |System.String  <br/> |This parameter is reserved for internal Microsoft use.  <br/> |
| _Preview_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _Preview_ switch filters the results by preview photos. You don't need to specify a value with this switch. <br/>  A preview photo is a photo that was uploaded to the user's account, but wasn't saved, for example, if a user uploads a photo in Outlook on the web Options, but doesn't save it. If you use the _Preview_ switch after a user photo is saved, this cmdlet returns an error saying the preview photo doesn't exist. <br/> |
| _ReadFromDomainController_ <br/> |Optional  <br/> |System.Management.Automation.SwitchParameter  <br/> |The _ReadFromDomainController_ switch specifies that information should be read from a domain controller in the user's domain. If you run the command `Set-AdServerSettings -ViewEntireForest $true` to include all objects in the forest and you don't use the _ReadFromDomainController_ switch, it's possible that information will be read from a global catalog that has outdated information. When you use the _ReadFromDomainController_ switch, multiple reads might be necessary to get the information. You don't have to specify a value with this switch. <br/> > [!NOTE]> By default, the recipient scope is set to the domain that hosts your Exchange servers.           |
| _ResultSize_ <br/> |Optional  <br/> |Microsoft.Exchange.Data.Unlimited  <br/> |The _ResultSize_ parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use `unlimited` for the value of this parameter. The default value is `1000`.  <br/> |
| _SortBy_ <br/> |Optional  <br/> |System.String  <br/> |The _SortBy_ parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order. <br/> If the default view doesn't include the property you're sorting by, you can append the command with  `| Format-Table -Auto <Property1>,<Property2>...` to create a new view that contains all of the properties that you want to see. Wildcards (*) in the property names are supported. <br/> You can sort by the **Id** property. <br/> |
   
## Input Types
<a name="InputTypes"> </a>

To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data. 
  
## Return Types
<a name="ReturnTypes"> </a>

To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](http://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data. 
  

